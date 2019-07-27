using System;
using System.Web;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MySql;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Collections;
using JSONObject = Newtonsoft.Json.Linq.JObject;
using System.Data;
using Fleck;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;
//using System.Web.Caching;
using System.Net.Mail;
using System.Net.Sockets;
using System.Text.RegularExpressions;
using Aop;
using Aop.Api;
using Aop.Api.Request;
using Aop.Api.Domain;
using Aop.Api.Response;
using System.Net.Http;
using System.Net;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System.Security.Cryptography;
using System.DrawingCore;
// ZKWeb.System.Drawing



namespace TodoApi
{
    public class Program
    {
        //  static String basePath2 = Path.GetDirectoryName(typeof(Program).Assembly.Location);
        //  static string 连接字符串 = "server=39.105.198.109;database=tarotapp;uid=feiye;pwd=5jq]sS-j;CharSet=utf8";

        //---
        static MemoryCacheOptions dd = new MemoryCacheOptions();
        static IMemoryCache MemoryCache = new MemoryCache(dd);
        static public readonly IHostingEnvironment _hostingEnvironment;

        static String basePath1 = (AppContext.BaseDirectory).Replace(@"bin/Debug/netcoreapp2.2/", "wwwroot");

        static String basePath2 = Path.GetDirectoryName(typeof(Program).Assembly.Location);
        static string rootdir = AppContext.BaseDirectory;
        static DirectoryInfo Dir = Directory.GetParent(rootdir);
        static string root = Dir.Parent.Parent.FullName;

        //订单状态 说明 0=未付款(过期会被清楚) 1=已付款 咨询中(过期会被设置成2) 2=已过期 没评价 但是正常打款 3=正常评价 打款
        //Boolean 测试模式 = true;
        // static string 连接字符串 = "server=39.105.198.109;database=tarotapp;uid=atlas_master;pwd=5jq]sS-j;port=1234;CharSet=utf8";
        static string 连接字符串 = "server=39.105.198.109;database=tarotapp;uid=feiye;pwd=5jq]sS-j;CharSet=utf8";
        //static string 连接字符串 = "server=127.0.0.1;database=tarotapp;uid=root;pwd=x5";
        static JSONObject tou;
        static Hashtable xint_ = new Hashtable();//保存心跳线， 键为userId,key为datatime

        //  static string 图片服务器ip = "https://taluoguan.com";
       static string 图片服务器ip = "http://39.105.198.109:5000"; //192.168.0.121
      //  static string 图片服务器ip = "http://192.168.0.121:5000";
        static IWebSocketConnection socket1;
        static List<IWebSocketConnection> allSockets1;

        public static void Main(string[] args)
        {
            Console.WriteLine("basePath1=" + basePath1);
            if (basePath1.IndexOf("wwwroot") < 0)
            {
                basePath1 = basePath1 + "wwwroot";
                Console.WriteLine("linux修正 basePath1=" + basePath1);
            }

            Console.WriteLine("basePath2" + basePath2);

            //  请求接口.启动websoket();

            CreateWebHostBuilder(args).Build().Run();
            Console.Write("按任意键继续...");
            Console.ReadKey();
        }




        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("host.json", optional: true)
                .Build();

            var host = WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseConfiguration(config)
                ;

            return host;
        }



        public class 请求接口
        {


            public static void 启动websoket()
            {



                Console.Write("图片服务器ip=" + 图片服务器ip);
                定时维护.startTime处理掉线();


                return;

                FleckLog.Level = Fleck.LogLevel.Debug;
                var allSockets = new List<IWebSocketConnection>();
                allSockets1 = allSockets;
                var server = new WebSocketServer("ws://127.0.0.1:8174");
                // var server = new WebSocketServer("ws://121.42.167.158:8174");

                server.RestartAfterListenError = true;


                string userid = "0";
                JSONObject xint = new JSONObject();
                xint.Add("type", "connect ok");


                server.Start(socket =>
                {
                    socket1 = socket;
                    socket.OnOpen = () =>
                    {
                        //有新的连接 保存连接到连接池
                        //获取用户ID
                        JSONObject ret = new JSONObject();
                        ret.Add("type", "连接ok");
                        socket.Send(ret.ToString());
                    };
                    socket.OnClose = () =>
                    {

                        //将连接移除连接池
                        //object c = HttpRuntime.Cache.Get(socket.ConnectionInfo.Id.ToString());
                        object c = MemoryCache.Get(socket.ConnectionInfo.Id.ToString());
                        if (c != null)
                        {
                            string userid_save = MemoryCache.Get(socket.ConnectionInfo.Id.ToString()).ToString();
                            MemoryCache.Remove(userid_save);
                            MemoryCache.Remove(socket.ConnectionInfo.Id.ToString());
                            allSockets.Remove(socket);
                        }




                        // HttpRuntime.Cache.Remove(userid);

                    };
                    socket.OnMessage = message =>
                    {
                        //转为jsonobj
                        try
                        {
                            tou = JSONObject.Parse(message);
                        }
                        catch (Exception)
                        {
                            string a = "{'type':'error','message':'string change JSONObject Error'}";
                            a = a.Replace("\'", "\"");
                            socket.Send(a);
                            return;

                        }


                        //判断心跳线
                        if (tou["type"].ToString() == "xint")
                        {

                            string userId = tou["userId"].ToString();
                            if (userId == "")
                            {
                                return;
                            }
                            if (xint_.Contains(userId))
                            {
                                //存在

                                xint_[userId] = DateTime.Now;//更新键值对的时间

                            }
                            else
                            {
                                //不存在 则创建

                                xint_.Add(userId, DateTime.Now); //添加user-datetime键值对

                            }






                            socket.Send(xint.ToString());

                            return;
                        }


                        //登录
                        if (tou["type"] != null)
                        {
                            if (tou["type"].ToString() == "login")
                            {
                                JSONObject ret = login.登录(tou);

                                if (ret["error"] != null)
                                {
                                    if (ret["error"].ToString() != "")
                                    {
                                        socket.Send(ret.ToString());
                                        return;
                                    }
                                }

                                if (ret["userid"] != null)
                                {

                                    userid = ret["userid"].ToString();
                                    if (userid != "" && userid != "0")
                                    {

                                        //   socket.Send("{'type':'error','message':'" + HttpRuntime.Cache.Get(userid) + "}");
                                        //先判断是否存在 如果存在连接 则清除

                                        //------
                                        //  var ca=  MemoryCache.CreateEntry()

                                        //-------
                                        if (MemoryCache.Get(userid) != null)
                                        {
                                            //存在重复的连接 准备 删除该链接
                                            string cache_seeion = MemoryCache.Get(userid).ToString();//根据userid 取出连接编码

                                            MemoryCache.Remove(userid);//删除cache中的连接编码
                                            MemoryCache.Remove(cache_seeion);//根据seeion删除userid
                                                                             //allSockets.Remove(socket);

                                            allSockets1.ToList().ForEach(s =>
                            {

                                if (s.ConnectionInfo.Id.ToString() == cache_seeion)
                                {
                                    allSockets1.Remove(s);


                                }

                            });

                                            //到此为止 已删除所有残余的连接
                                        }
                                        allSockets.Add(socket);
                                        //--

                                        using (var ch = MemoryCache.CreateEntry(userid))
                                        {
                                            ch.Value = socket.ConnectionInfo.Id;
                                            ch.AbsoluteExpirationRelativeToNow = new TimeSpan(3, 0, 0);
                                        }
                                        using (var ch = MemoryCache.CreateEntry(socket.ConnectionInfo.Id.ToString()))
                                        {
                                            ch.Value = userid;
                                            ch.AbsoluteExpirationRelativeToNow = new TimeSpan(3, 0, 0);
                                        }
                                        //--
                                        // HttpRuntime.Cache.Insert(userid, socket.ConnectionInfo.Id, null, DateTime.Now.AddHours(3), Cache.NoSlidingExpiration);
                                        //  HttpRuntime.Cache.Insert(socket.ConnectionInfo.Id.ToString(), userid, null, DateTime.Now.AddHours(3), Cache.NoSlidingExpiration);
                                        ret.Add("cache", MemoryCache.Get(userid).ToString());
                                        //string a = "{'type':'error','message':'登录成功 Cache为：" + HttpRuntime.Cache.Get(userid) + "'}";
                                        //a = a.Replace("\'", "\"");
                                        socket.Send(ret.ToString());

                                    }
                                    else
                                    {
                                        string a = "{'type':'error','message':'login user is 0'}";
                                        a = a.Replace("\'", "\"");
                                        socket.Send(a);
                                    }
                                }
                                else
                                {

                                    string a = "{'type':'error','message':'login user is null'}";
                                    a = a.Replace("\'", "\"");
                                    socket.Send(a);
                                }
                            }


                        }


                        //请求处理
                        JSONObject fanhui = 请求接口.请求处理(message);
                        if (fanhui["type"].ToString() == "upAudio_retAndreceiveMessages")
                        {//upAudio_ret
                            socket.Send(fanhui["upAudio_ret"].ToString());
                            // fanhui = new JSONObject(fanhui["receiveMessages"].ToString());
                            //JSONObject cache = JSONObject.Parse(fanhui["receiveMessages"].ToString());
                            fanhui = JSONObject.Parse(fanhui["receiveMessages"].ToString());
                        }

                        // socket.Send("{'type':'error','message':'收到要发送的对端ID:" + fanhui["touser"] + "'}");
                        //判断是否要发送给对端
                        if (fanhui["touser"] != null)
                        {
                            if (fanhui["touser"].ToString() != "")
                            {
                                string touserid = fanhui["touser"].ToString();
                                int count = 0;
                                string countxt = "";
                                if (MemoryCache.Get(touserid) != null)
                                {
                                    // socket.Send("{'type':'error','message':'要发送的对端ID:" + touserid + "'}");
                                    allSockets.ToList().ForEach(s =>
                    {
                        countxt += s.ConnectionInfo.Id.ToString() + "=" + MemoryCache.Get(touserid).ToString();
                        if (s.ConnectionInfo.Id.ToString() == MemoryCache.Get(touserid).ToString())
                        {
                            count++;
                            s.Send(fanhui.ToString());


                        }

                    });

                                    if (count == 0)
                                    {
                                        // var a = "{type':'error','message':'未找到与touser相匹配的连接(socket) 消息未向对端发送:" + countxt + "'}";
                                        string a = "{type':'error','message':'未找到与touser相匹配的连接(socket) 消息未向对端发送:" + countxt + "'}";
                                        a = a.Replace("\'", "\"");
                                        socket.Send(a);

                                    }
                                    ////判断是否需要返回给本端
                                    //if(fanhui["type"].ToString()== "sendLetterData_ret")
                                    //{
                                    //    socket.Send(fanhui.ToString());
                                    //}
                                }
                                else
                                {
                                    string a = "{'type':'error','message':'对端(" + touserid + ")未上线,无法发送远程消息'}";
                                    a = a.Replace("\'", "\"");
                                    socket.Send(a);

                                }


                            }
                            else
                            {
                                string a = "{'type':'error','message':'空的touser参数 消息未向对端发送'}";
                                a = a.Replace("\'", "\"");
                                socket.Send(a);
                            }
                        }
                        else
                        {
                            socket.Send(fanhui.ToString());
                        }

                    };

                });


            }
            public static void Timer1_Elapsed(object sender, System.Timers.ElapsedEventArgs e)
            {
                tool.输出log记录("Timer1_Elapsed()! 开始处理超时订单");
                transaction.处理超时订单();
            }
            public static JSONObject 请求处理(string 请求参数)
            {



                JSONObject error = new JSONObject();


                try
                {
                    tou = JSONObject.Parse(请求参数);

                }
                catch (Exception e)
                {
                    error.Add("type", "error");
                    error.Add("message", "string change JSONObject Error" + e.Message + "出错的json为：" + 请求参数.ToString());
                    return error;

                }

                if (tou["type"] == null)
                {
                    error.Add("type", "error");
                    error.Add("message", "type is null");
                    return error;
                }
                string type = tou["type"].ToString(
                    ).Trim();


                if (type == "addobjislt")
                {
                    return 查询咨询师列表(tou);
                }
                else if (type == "getUser_Exist")
                {
                    //判断手机号是否已注册

                    return login.判断手机号是否已经注册(tou);
                }


                else if (type == "video-offer")
                {
                    //视频通话
                    return 视频通话video_offer(tou);
                }
                else if (type == "getvideo-offer")
                {
                    //视频通话获取video-offer
                    return 视频通话getvideo_offer(tou);

                }
                else if (type == "ChangeOffer")
                {
                    //交换Offer
                    return 视频通话_信令_ChangeOffer(tou);
                }
                else if (type == "AtoB")
                {
                    //测试双端通信
                    return AtoB(tou);
                }


                else if (type == "login")
                {

                    return login.登录(tou);
                }
                else if (type == "getUserData")
                {

                    return personalData.载入我的页面(tou);

                }
                else if (type == "setUserData")
                {
                    //更新用户数据
                    return personalData.更新用户数据(tou);

                }
                else if (type == "addUserData_mySetData")
                {
                    //个人资料页面加载用户数据
                    return personalData.加载个人资料设置页面(tou);
                }
                else if (type == "updataUserImg")
                {
                    //上传头像
                    return personalData.updataUserImg(tou);
                }
                else if (type == "upUserServiceImg")
                {
                    return personalData.上传桌面拍照(tou);
                }
                else if (type == "deleteServiceImg")
                {
                    return personalData.删除桌面拍照(tou);
                }
                else if (type == "addUserDataExplain")
                {
                    return personalData.加载名片编辑页面数据(tou);
                }
                else if (type == "setServiceHomeImg")
                {
                    return personalData.设置名片封面(tou);
                }
                else if (type == "addFollowList")
                {
                    return letter.加载我的关注列表(tou);
                }
                //else if (type == "addLetterList")
                //{
                //    return letter.加载我的私信列表(tou);
                //}
                //else if (type == "addMyLetterData")
                //{

                //    return letter.分页加载私信对话内容(tou);
                //}
                //else if (type == "sendLetterData")
                //{
                //    return letter.发送私信(tou);
                //}
                else if (type == "ReportUser")
                {
                    //举报用户
                    return 举报用户(tou);
                }
                else if (type == "sendVerificationCode")
                {
                    //
                    return login.发送短信验证码(tou);
                }
                else if (type == "register")
                {
                    //
                    return login.注册(tou);
                }
                else if (type == "addMywalletPage")
                {
                    //加载钱包页面
                    return money.加载钱包(tou);
                }
                else if (type == "addMyCouponPage")
                {
                    //加载优惠券
                    return money.加载优惠券(tou);
                }
                else if (type == "addMySetServiceSerectPage")
                {
                    return personalData.加载服务页面(tou);
                }
                else if (type == "addMyServiceSetPage")
                {
                    return service.加载服务内容(tou);
                }
                else if (type == "upServiceDate")
                {
                    return service.设置服务内容(tou);
                }
                else if (type == "creatService")
                {
                    return service.创建服务(tou);
                }
                //加载营业设置
                else if (type == "deleteService")
                {
                    return service.deleteService(tou);
                }
                else if (type == "addMySetServiceDatePage")
                {
                    return service.加载营业设置(tou);
                }
                else if (type == "setServiceState")
                {
                    return service.设置服务状态(tou);
                }
                else if (type == "setDrawingAccount")
                {
                    return personalData.设置提款账户(tou);
                }
                else if (type == "addDrawingAccountPage")
                {
                    return personalData.加载提款账户数据(tou);
                }

                else if (type == "addObjTxt")
                {
                    return personalData.加载咨询师详情(tou);
                }

                else if (type == "setUpFollow")
                {
                    return letter.设置关注(tou);
                }

                else if (type == "setObjServiceInTxt")
                {
                    return personalData.修改咨询说明(tou);
                }

                else if (type == "addBuyData")
                {
                    return money.addBuyOrderData(tou);
                }
                else if (type == "generateOrder")
                {
                    return money.订单处理(tou);
                }

                else if (type == "getSignature")
                {
                    return weixin.getSignature(tou);
                }
                else if (type == "upAudio")
                {
                    return letter.上传音频(tou);
                }
                else if (type == "search")
                {
                    return Search.搜索咨询师(tou);
                }
                else if (type == "consultTime_addToUserData")
                {
                    return service.加载对话咨询师数据(tou);
                }
                else if (type == "consultTime_sendText")
                {
                    return letter.发送咨询对话文本(tou);
                }
                else if (type == "addConsultTime")
                {
                    return letter.分页加载咨询对话内容(tou);
                }
                else if (type == "sendConsultImg")
                {
                    return letter.发送咨询对话图片(tou);
                }
                else if (type == "setExpert")
                {
                    return personalData.设置擅长类别(tou);
                }
                //

                else if (type == "sendFocus")
                {
                    return letter.发送输入焦点事件(tou);
                }
                else if (type == "addMyOrderList")
                {
                    return transaction.分页加载我的订单(tou);
                }

                else if (type == "addOrderServiceTxt")
                {
                    return service.加载订单页服务内容(tou);
                }
                else if (type == "addMyOrderListShowPage")
                {
                    return transaction.加载订单详情(tou);
                }
                else if (type == "submitEvaluate")
                {
                    return transaction.提交评价(tou);
                }
                else if (type == "submitts")
                {
                    return 举报咨询师(tou);
                }
                else if (type == "addComplaintData")
                {
                    return 加载举报咨询师(tou);

                }
                else if (type == "addUserRating")
                {
                    return personalData.请求用户评论(tou);
                }
                else if (type == "addObjOrderListShowPage")
                {
                    return transaction.加载用户订单详情(tou);
                }
                else if (type == "addObjOrderList")
                {
                    return transaction.分页加载用户订单(tou);
                }
                else if (type == "addObjOrderSaturation")
                {
                    return transaction.加载订单评价详情(tou);
                }
                //else if (type == "addConsultTimeMore")
                //{
                //    return  letter.分页加载咨询对话内容(tou, "more");
                //}

                else if (type == "withdrawalsMoney")
                {
                    return money.提款申请(tou);
                }
                else if (type == "addMyWalletRecordPage")
                {
                    return money.加载提现记录(tou);
                }
                else if (type == "ApplicationConsultant")
                {
                    return personalData.加载申请咨询师表单页面(tou);
                }
                else if (type == "upApplicationConsultant")
                {
                    return personalData.提交申请咨询师表(tou);
                }
                else if (type == "addExpert")
                {
                    return personalData.加载擅长类别(tou);
                }

                else if (type == "setServiceSystemNotification")
                {
                    return personalData.设置新订单是否系统提示(tou);
                }
                else if (type == "setServiceShortMessage")
                {
                    return personalData.设置新订单是否短信提示(tou);
                }
                else if (type == "selectbadge")
                {
                    return personalData.修改印象标签(tou);
                }
                else if (type == "deleteBadge")
                {
                    return personalData.删除印象标签(tou);
                }
                else if (type == "addhomeobjlist")
                {
                    return 请求接口.addhomeobjlist(tou);
                }
                else if (type == "addpl")
                {
                    return service.加载最佳评价的服务(tou);
                }
                else if (type == "adminlogin")
                {
                    return admin.adminlogin(tou);
                }
                else if (type == "addObjResume")
                {
                    return personalData.加载咨询师履历(tou);
                }
                else if (type == "getObjBadge")
                {
                    return personalData.订单详情页面请求咨询师标签(tou);
                }
                else if (type == "addbage")
                {
                    return personalData.addbage(tou);
                }
                else if (type == "addServiceTxt")
                {
                    return personalData.加载咨询说明(tou);
                }
                else if (type == "setCity")
                {
                    return personalData.修改所在地(tou);
                }
                else if (type == "serviceImgs")
                {
                    return personalData.加载名片封面(tou);
                }
                else if (type == "setSkill")
                {
                    return personalData.修改占卜牌阵(tou);
                }
                else if (type == "addSkill")
                {
                    return personalData.加载占卜牌阵(tou);
                }
                //
                else if (type == "setExperience")
                {
                    return personalData.修改从业经历(tou);
                }
                else if (type == "addExperience")
                {
                    return personalData.加载从业经历(tou);
                }
                else if (type == "addSpecialPage")
                {
                    return 专题.加载专题页面(tou);
                }
                else if (type == "addSpeciallist")
                {
                    return 专题.加载专题列表(tou);
                }
                else if (type == "addContactIng")
                {
                    return letter.加载我的咨询列表(tou);
                }
                else if (type == "addLetterIsShow")
                {
                    return letter.查询用户是否存在没有被查看的记录(tou);
                }
                else if (type == "addpinglList")
                {
                    return home_pl.add_home_评论(tou);
                }
                else if (type == "upwzzt")
                {
                    return admin.upwzzt(tou);
                }

                else if (type == "admin_add_order_list")
                {
                    return admin.addOrderList(tou);
                }

                else if (type == "admin_add_jub_list")
                {
                    return admin.addjubList(tou);
                }

                else if (type == "admin_addobjuser")
                {
                    return admin.addobjuser(tou);
                }

                else if (type == "admin_add_addobjshenq")
                {
                    return admin.order_list_objshenq(tou);
                }
                else if (type == "admin_add_objshenqShowInfo")
                {
                    return admin.admin_add_objshenqShowInfo(tou);
                }
                else if (type == "admin_objReject")
                {
                    return admin.admin_objReject(tou);
                }
                else if (type == "admin_objadopt")
                {
                    return admin.admin_objadopt(tou);
                }
                else if (type == "admin_objInfo")
                {
                    return admin.admin_objInfo(tou);
                }
                else if (type == "admin_set_Disabled")
                {
                    return admin.admin_set_Disabled(tou);
                }
                else if (type == "admin_jubInfo")
                {
                    return admin.admin_jubInfo(tou);
                }
                else if (type == "admin_exRefund")
                {
                    return admin.admin_exRefund(tou);
                }








                else
                {

                    error.Add("type", "error");
                    error.Add("message", "error:没有匹配到查询的类型 (" + tou["type"].ToString() + ")");
                    return error;
                }



            }


            public static JSONObject 举报用户(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "ReportUser_ret");

                string ReporUserId = 请求参数["ReportUserId"].ToString();
                string txt = 请求参数["txt"].ToString();

                int insertUum = 0;

                string sql = "insert into 举报 (userid,txt,date) values(@ReporUserId,@txt,CURDATE());";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@ReporUserId", ReporUserId);
                cmd.Parameters.AddWithValue("@txt", txt);



                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                insertUum = cmd.ExecuteNonQuery();

                con.Close();

                ret.Add("insertUum", insertUum);
                return ret;
            }
            public static JSONObject 加载举报咨询师(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();

                ret.Add("type", "addComplaintData_ret");
                string orderId = 请求参数["orderId"].ToString();
                string sql = "SELECT  user.CName,订单.订单号 from (user INNER JOIN 订单 on user.ID=订单.咨询师id)  where 订单号=@orderId; ";


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@orderId", orderId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        ret.Add("CName", "CName");
                        ret.Add("orderId", "订单号");
                    }


                }
                JSONObject c = tool.查询被举报的订单(orderId);
                if (c != null)
                {
                    if (Convert.ToBoolean(c["isjubao"]))
                    {
                        ret.Add("txt", c["txt"].ToString());
                        ret.Add("date", c["date"].ToString());
                    }
                    else
                    {
                        ret.Add("txt", "");
                        ret.Add("date", "");
                    }

                    ret.Add("isjubao", c["isjubao"].ToString());
                }

                return ret;


            }
            public static JSONObject 举报咨询师(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "submitts_ret");

                string userId = 请求参数["userId"].ToString();
                string cause = 请求参数["cause"].ToString();
                string orderId = 请求参数["orderId"].ToString();
                string OtherCause = 请求参数["OtherCause"].ToString();
                string txt = cause + "," + OtherCause;

                int insertUum = 0;

                string sql = "INSERT 举报(userid, txt, date, toUserId, orderId) VALUES(@userId,@txt,now(),0,@orderId); ";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);

                cmd.Parameters.AddWithValue("@orderId", orderId);
                cmd.Parameters.AddWithValue("@txt", txt);


                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                insertUum = cmd.ExecuteNonQuery();

                con.Close();

                ret.Add("insertUum", insertUum);
                return ret;
            }



            public static JSONObject addhomeobjlist(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addhomeobjlist_ret");
                JArray rows = new JArray();

                string sql = "select homeobjlist.擅长类别, homeobjlist.id,user.UserImgUrl ,user.CName,userbusiness.咨询介绍,userbusiness.咨询评分,userbusiness.minMoney from (homeobjlist inner join user on homeobjlist.id=user.ID)  inner join  userbusiness  on userbusiness.userid = user.ID order by homeobjlist.擅长类别; ";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {


                    JArray rows_热门 = new JArray();
                    JArray rows_爱情 = new JArray();
                    JArray rows_婚姻 = new JArray();
                    JArray rows_事业 = new JArray();
                    JArray rows_运势 = new JArray();
                    JArray rows_财富 = new JArray();
                    JArray rows_学业 = new JArray();

                    sdr = cmd.ExecuteReader();


                    while (sdr.Read())
                    {
                        string userid = "";
                        string type = "";
                        string userimg = "";
                        string cname = "";
                        string 咨询介绍 = "";
                        string 咨询评分 = "";
                        string minMoney = "";


                        Double 咨询评分_ = Convert.ToDouble(sdr["咨询评分"]);
                        咨询评分 = (咨询评分_).ToString("P0");
                        // row.Add("zixunpingfen", Math.Round(咨询评分, 1) * 10);


                        type = Convert.ToString(sdr["擅长类别"]).Trim();
                        userid = Convert.ToString(sdr["id"]);
                        userimg = 图片服务器ip + Convert.ToString(sdr["UserImgUrl"]);
                        cname = Convert.ToString(sdr["CName"]);
                        咨询介绍 = Convert.ToString(sdr["咨询介绍"]);

                        double minMoney_ = 0;
                        if (sdr["minMoney"] == System.DBNull.Value)
                        {
                            minMoney = (minMoney_).ToString("C1");
                        }
                        else
                        {

                            // minMoney_ = Convert.ToDouble(sdr["minMoney"]);
                            // minMoney = (minMoney_).ToString("C1");
                            minMoney = Convert.ToString(sdr["minMoney"]);
                        }


                        if (type == "热门")
                        {


                            JSONObject 热门 = new JSONObject();
                            热门.Add("userId", userid);
                            热门.Add("cname", cname);
                            热门.Add("zixunjieshao", 咨询介绍);
                            热门.Add("zixunpingfen", 咨询评分);
                            热门.Add("userimg", userimg);
                            热门.Add("minMoney", minMoney);
                            // 热门.Add("type", type);




                            rows_热门.Add(热门);


                        }
                        if (type == "爱情")
                        {


                            JSONObject 爱情 = new JSONObject();
                            爱情.Add("userId", userid);
                            // 爱情.Add("type", type);
                            爱情.Add("cname", cname);
                            爱情.Add("zixunjieshao", 咨询介绍);
                            爱情.Add("zixunpingfen", 咨询评分);
                            爱情.Add("userimg", userimg);
                            爱情.Add("minMoney", minMoney);

                            rows_爱情.Add(爱情);
                        }
                        if (type == "婚姻")
                        {


                            JSONObject 婚姻 = new JSONObject();

                            婚姻.Add("userId", userid);
                            //婚姻.Add("type", type);
                            婚姻.Add("cname", cname);
                            婚姻.Add("zixunjieshao", 咨询介绍);
                            婚姻.Add("zixunpingfen", 咨询评分);
                            婚姻.Add("userimg", userimg);
                            婚姻.Add("minMoney", minMoney);

                            rows_婚姻.Add(婚姻);
                        }
                        if (type == "事业")
                        {

                            JSONObject 事业 = new JSONObject();

                            事业.Add("userId", userid);
                            //事业.Add("type", type);
                            事业.Add("cname", cname);
                            事业.Add("zixunjieshao", 咨询介绍);
                            事业.Add("zixunpingfen", 咨询评分);
                            事业.Add("userimg", userimg);
                            事业.Add("minMoney", minMoney);

                            rows_事业.Add(事业);

                        }
                        if (type == "运势")
                        {

                            JSONObject 运势 = new JSONObject();

                            运势.Add("userId", userid);
                            //运势.Add("type", type);
                            运势.Add("cname", cname);
                            运势.Add("zixunjieshao", 咨询介绍);
                            运势.Add("zixunpingfen", 咨询评分);
                            运势.Add("userimg", userimg);
                            运势.Add("minMoney", minMoney);
                            rows_运势.Add(运势);

                        }
                        if (type == "财富")
                        {

                            JSONObject 财富 = new JSONObject();

                            财富.Add("userId", userid);
                            //财富.Add("type", type);
                            财富.Add("cname", cname);
                            财富.Add("zixunjieshao", 咨询介绍);
                            财富.Add("zixunpingfen", 咨询评分);
                            财富.Add("userimg", userimg);
                            财富.Add("minMoney", minMoney);

                            rows_财富.Add(财富);

                        }
                        if (type == "学业")
                        {

                            JSONObject 学业 = new JSONObject();

                            学业.Add("userId", userid);
                            //学业.Add("type", type);
                            学业.Add("cname", cname);
                            学业.Add("咨询介绍", 咨询介绍);
                            学业.Add("咨询评分", 咨询评分);
                            学业.Add("userimg", userimg);
                            学业.Add("minMoney", minMoney);
                            rows_学业.Add(学业);

                        }


                    }
                    ret.Add("rows_remen", rows_热门);
                    ret.Add("rows_aiqing", rows_爱情);
                    ret.Add("rows_hunyin", rows_婚姻);
                    ret.Add("rows_shiye", rows_事业);
                    ret.Add("rows_yunshi", rows_运势);
                    ret.Add("rows_caifu", rows_财富);
                    ret.Add("rows_xueye", rows_学业);

                }

                con.Close();




                return ret;
            }

            public static JSONObject 查询咨询师列表(JSONObject 请求参数)
            {


                JSONObject ret = new JSONObject();
                JSONObject userdata = new JSONObject();
                //
                JArray rows = new JArray();

                string 当前行数 = 请求参数["sum"].ToString();
                string addType = 请求参数["addType"].ToString();

                ret.Add("type", "addobjlist_ret");
                ret.Add("addType", addType);


                int sum = 0;//统计行数

                string sql = "select  user.id, user.CName,user.UserImgUrl,userbusiness.总订单量, userbusiness.封面图片,userbusiness.咨询评分,userbusiness.咨询介绍  from user,userbusiness where user.id=userbusiness.userid  and userbusiness.营业状态=1 order by userbusiness.最后接单日期 desc LIMIT " + 当前行数 + ",10;";

                if (addType == "tuijian")
                {
                    //推荐
                }
                else if (addType == "koubei")
                {
                    //口碑
                    sql = "select  user.id, user.CName,user.UserImgUrl,userbusiness.总订单量, userbusiness.封面图片,userbusiness.咨询评分,userbusiness.咨询介绍  from user,userbusiness where user.id=userbusiness.userid  and userbusiness.营业状态=1 order by userbusiness.咨询评分 desc LIMIT " + 当前行数 + ",10;";

                }
                else if (addType == "youhui")
                {
                    //优惠
                    sql = "select  user.id, user.CName,user.UserImgUrl,userbusiness.总订单量, userbusiness.封面图片,userbusiness.咨询评分,userbusiness.咨询介绍  from user,userbusiness where user.id=userbusiness.userid  and userbusiness.营业状态=1 order by userbusiness.minMoney asc LIMIT " + 当前行数 + ",10;";
                }

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@sum", 当前行数);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    string userid = "";
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();


                        row.Add("ObjID", sdr["ID"].ToString());
                        userid = sdr["ID"].ToString();
                        row.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());


                        row.Add("CName", sdr["CName"].ToString());

                        //row.Add("GoodTyoe", sdr["GoodTyoe"].ToString());
                        row.Add("zongdingdanliang", sdr["总订单量"].ToString());
                        row.Add("danjia", tool.查询价格最低的服务(userid));
                        if (sdr["封面图片"] == System.DBNull.Value)
                        {

                            row.Add("fnengmianurl", "");
                        }
                        else
                        {
                            row.Add("fnengmianurl", 图片服务器ip + sdr["封面图片"].ToString().Trim());

                        }

                        Double zixunpingfen = Convert.ToDouble(sdr["咨询评分"]);
                        zixunpingfen = zixunpingfen * 100;
                        row.Add("zixunpingfen", Math.Floor(zixunpingfen));
                        row.Add("zixunjieshao", sdr["咨询介绍"].ToString());
                        if (tool.判断用户是否在线(userid))
                        {
                            row.Add("isLine", "1");
                        }
                        else
                        {
                            row.Add("isLine", "0");
                        }



                        rows.Add(row);
                        sum++;
                    }

                }
                con.Close();
                ret.Add("rows", rows);

                ret.Add("addsum", sum.ToString());
                // ret.Add("core", 请求参数["core"].ToString());

                return ret;
            }




            public static JSONObject 视频通话video_offer(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                string a = 请求参数.ToString();



                //转base64
                byte[] str = Encoding.Default.GetBytes(a);
                String c = Convert.ToBase64String(str);

                string sql = "UPDATE `视频会话` SET sdp='" + c + "' WHERE id=1;SELECT sdp from `视频会话` WHERE id=1";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                    }

                }
                con.Close();
                ret.Add("type", "video_offer_ok");
                // ret.Add("desc", a);
                return ret;
            }
            public static JSONObject 视频通话getvideo_offer(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                string sql = "select sdp from `视频会话` where id=1;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        string a = sdr["sdp"].ToString();

                        //baes64解码
                        byte[] b = Convert.FromBase64String(a);
                        string c = Encoding.Default.GetString(b);

                        ret.Add("data", c);
                        ret.Add("type", "getvideo-offer-ok");
                        //ret = new JSONObject(sdr["sdp"].ToString());

                    }

                }
                con.Close();

                return ret;
            }

            public static JSONObject AtoB(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                if (请求参数["touser"] != null)
                {
                    return ret = 请求参数;
                }
                else
                {
                    ret.Add("error", "touser is null");
                    return ret;
                }
            }
            public static JSONObject 视频通话_信令_ChangeOffer(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();




                return 请求参数;
            }




        }

        public class login
        {

            public static Boolean 核对验证码(string 手机号, string 验证码)
            {

                Boolean isOK = true;

                // Cache cache = HttpRuntime.Cache;



                try
                {
                    if (验证码 == MemoryCache.Get(手机号).ToString())
                    {
                        isOK = true;
                        MemoryCache.Remove(手机号);
                    }
                    else
                    {
                        isOK = false;
                    }
                }
                catch (Exception ex)
                {
                    isOK = false;
                }

                return isOK;

            }

            public static JSONObject 发送短信验证码(JSONObject 请求参数)
            {



                JSONObject ret = new JSONObject();
                ret.Add("type", "sendVerificationCode_ret");
                string 手机号;

                if (请求参数["phonenumber"] != null)
                {
                    if (请求参数["phonenumber"].ToString() != "")
                    {
                        手机号 = 请求参数["phonenumber"].ToString();
                    }
                    else
                    {
                        ret.Add("error", "phonenumber is null");
                        return ret;
                    }
                }
                else
                {
                    ret.Add("error", "phonenumber is null");
                    return ret;
                }

                string mess = "";
                string 发送的验证码 = "0000";//此处应该随机生成
                Boolean isok = true;
                //发送语句
                try
                {






                    using (var ch = MemoryCache.CreateEntry(手机号))
                    {
                        ch.Value = 发送的验证码;
                        ch.AbsoluteExpirationRelativeToNow = (new TimeSpan(0, 10, 0));
                    }

                    // cache.Insert(手机号, 发送的验证码, null, DateTime.Now.AddMinutes(10), Cache.NoSlidingExpiration);
                    isok = true;

                }
                catch (Exception ex)
                {

                    mess = ex.Message;
                    isok = false;
                    ret.Add("error", mess);
                }

                //发送语句结束


                if (isok)
                {
                    ret.Add("meg", "ok");
                }




                //      try
                //        {
                //ret.Add("key", cache.Get(手机号).ToString());
                //}
                //catch (Exception ex)
                //{
                //    ret.Add("err",ex.Message);
                //}
                return ret;

            }
            public static JSONObject 注册(JSONObject 请求参数)
            {

                //{"type":"register","phonenumber":"00000000000","VerificationCode":"1111"}
                JSONObject ret = new JSONObject();
                ret.Add("type", "register_ret");

                string phonenumber = 请求参数["phonenumber"].ToString();
                string VerificationCode = 请求参数["VerificationCode"].ToString();
                string username = 请求参数["username"].ToString();

                if (核对验证码(phonenumber, VerificationCode))
                {
                    //验证码核对成功

                    if (!判断手机号是否已经注册(phonenumber))
                    {
                        //手机号没有被注册
                        string isok = "";
                        string userid = "";


                        try
                        {
                            //MySqlDataAdapter mysqldata = new MySqlDataAdapter();

                            DataSet dataset = new DataSet();
                            MySqlConnection con = new MySqlConnection();
                            con.ConnectionString = 连接字符串;


                            MySqlCommand cmd = new MySqlCommand("register", con);

                            cmd.CommandType = CommandType.StoredProcedure;



                            //---------输入参数


                            cmd.Parameters.AddWithValue("@phonenumber", phonenumber);
                            cmd.Parameters.AddWithValue("@username", username);



                            //-----------输出参数

                            MySqlParameter parOutput = cmd.Parameters.Add("@ret", System.Data.DbType.String);
                            parOutput.Direction = ParameterDirection.Output;

                            MySqlParameter parOutput2 = cmd.Parameters.Add("@userid", System.Data.DbType.String);
                            parOutput2.Direction = ParameterDirection.Output;

                            con.Open();
                            cmd.ExecuteNonQuery();
                            // mysqldata.SelectCommand = cmd;
                            MySqlDataReader sdr = cmd.ExecuteReader();


                            isok = cmd.Parameters["@ret"].Value.ToString();
                            userid = cmd.Parameters["@userid"].Value.ToString();


                            con.Close();
                        }
                        catch (Exception ex)
                        {
                            ret.Add("meg", ex.Message);
                        }



                        if (isok == "success")
                        {
                            //注册ok

                            ret.Add("userid", userid);
                            ret.Add("code", "200");

                        }
                        else
                        {
                            //注册失败
                            ret.Add("error", isok);
                        }



                    }
                    else
                    {
                        //手机号已经被注册
                        ret.Add("error", "phonenumber is existencia");
                    }

                }
                else
                {
                    ret.Add("error", "VerificationCode is error");
                }






                return ret;
            }

            public static string 手机号to用户ID(string 手机号)
            {

                string userid = "";


                string sql = "select `user`.id from user where `user`.`手机号`=@phonenumber";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.Parameters.AddWithValue("@phonenumber", 手机号);
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        userid = sdr["id"].ToString();


                    }

                }
                con.Close();

                return userid;

            }
            public static JSONObject weblocket登录(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                //{"type":"login","phonenumber":"5555","VerificationCode":"0000"}
                ret.Add("type", "login_ret");
                return ret;
            }
            public static JSONObject 登录(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                //{"type":"login","phonenumber":"5555","VerificationCode":"0000"}
                ret.Add("type", "login_ret");
                string phonenumber = 请求参数["phonenumber"].ToString();


                // //判断是否重新连接
                // if (请求参数["type2"] != null)
                // {
                //     if (请求参数["type2"].ToString() == "ret_login")
                //     {
                //         ret.Add("userid", 手机号to用户ID(phonenumber));
                //         return ret;
                //     }
                // }

                string VerificationCode = 请求参数["VerificationCode"].ToString();
                if (判断手机号是否已经注册(phonenumber))
                {

                }
                else
                {
                    ret.Add("error", "user not existence");
                }




                if (VerificationCode == MemoryCache.Get(phonenumber).ToString())
                {
                    ret.Add("userid", 手机号to用户ID(phonenumber));
                    ret.Add("phonenumber", (phonenumber));
                    ret.Add("code", "200");
                    ret.Add("VerificationCode", VerificationCode);
                    MemoryCache.Remove(phonenumber);
                }
                else
                {
                    ret.Add("error", "验证码错误");
                }



                return ret;
            }
            public static Boolean 判断手机号是否已经注册(string 手机号)
            {


                int i = 0;
                string sql = "select `user`.id, `user`.UserImgUrl from user where `user`.`手机号`=" + 手机号 + "";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {


                        i++;

                    }

                }
                con.Close();
                if (i == 0)
                {
                    return false;
                }
                else
                {
                    return true;
                }

            }
            public static JSONObject 判断手机号是否已经注册(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                JSONObject error = new JSONObject();
                ret.Add("type", "getUser_Exist_ok");

                string 手机号 = 请求参数["UserPhone"].ToString();
                if (手机号 == null)
                {
                    error.Add("type", "error");
                    error.Add("message", "UserPhone is null");
                }
                if (手机号 == "")
                {
                    error.Add("type", "error");
                    error.Add("message", "UserPhone is ''");
                }
                int sum = 0;
                string db_userImg = "";
                string sql = "select `user`.id, `user`.UserImgUrl from user where `user`.`手机号`=" + 手机号 + "";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        sum++;

                        if (sdr["UserImgUrl"].ToString() != "")
                        {
                            ret.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
                            db_userImg = sdr["UserImgUrl"].ToString();
                        }
                        else
                        {
                            ret.Add("UserImgUrl", "");
                        }


                    }

                }
                con.Close();
                if (sum == 0)
                {
                    ret.Add("User", "notExist");
                }
                return ret;
            }
        }
        public class personalData
        {

            public static JSONObject 删除印象标签(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "deleteBadge_ret");
                string txt = 请求参数["txt"].ToString();
                string userId = 请求参数["userId"].ToString();



                string sql = "DELETE  FROM  objimpression WHERE  objimpression.userId=@userid and objimpression.txt=@txt;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@txt", txt);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                int count = cmd.ExecuteNonQuery();

                con.Close();

                //返回新的列表
                ret.Add("badgeRows", personalData.加载咨询师标签(userId));


                return ret;

            }
            public static JArray 加载所有咨询师标签()
            {
                JArray ret = new JArray();

                string sql = @"SELECT  DISTINCT objimpression.txt from objimpression   ORDER BY objimpression.sum desc  LIMIT 0,30;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;

                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        ret.Add(sdr["txt"].ToString());
                    }

                }
                con.Close();

                return ret;
            }
            public static JSONObject 修改印象标签(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "selectbadge_ret");
                string txt = 请求参数["txt"].ToString();
                string userId = 请求参数["userId"].ToString();

                //1、 查找标签数量是否大于4个
                string sql = @"SELECT  count(objimpression.txt) as a from objimpression WHERE  objimpression.userId=@userId";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                cmd.Parameters.AddWithValue("@txt", txt);
                cmd.Parameters.AddWithValue("@userId", userId);
                con.Open();
                int count = 0;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        count = Convert.ToInt16(sdr["a"]);


                    }

                }
                con.Close();

                if (count < 4)
                {
                    //查询是否重复
                    if (查询咨询师标签是否重复(userId, txt))
                    {
                        if (写入咨询师印象标签(userId, txt))
                        {
                            //返回新列表
                            ret.Add("rows", 加载咨询师标签(userId));

                        }
                        else
                        {
                            ret.Add("msg", "sqlError");
                        }
                    }
                    else
                    {
                        ret.Add("msg", "existence");
                    }


                }
                else
                {
                    ret.Add("msg", "countmax");
                }

                return ret;

            }
            public static void 更新印象标签(string 印象标签ID)
            {
                string sql = "UPDATE  objimpression set objimpression.sum=objimpression.sum+1  WHERE objimpression.id=@id;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@id", 印象标签ID);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                cmd.ExecuteNonQuery();

                con.Close();
            }
            public static JSONObject 订单详情页面请求咨询师标签(JSONObject 请求参数)
            {



                JSONObject ret = new JSONObject();

                ret.Add("type", "getObjBadge_ret");
                if (请求参数["orderId"] == null)
                {
                    return ret;
                }


                string orderId = 请求参数["orderId"].ToString();

                //获取数据
                ret.Add("bq", 加载咨询师标签_use订单号(orderId));

                return ret;
            }
            public static JArray 加载咨询师标签(string userId)
            {
                JArray rows = new JArray();

                string sql = @"SELECT objimpression.txt,objimpression.sum,objimpression.id from objimpression WHERE objimpression.userId=@userId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;

                cmd.Parameters.AddWithValue("@userId", userId);
                con.Open();
                int count = 0;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();
                        row.Add("txt", sdr["txt"].ToString());
                        row.Add("sum", sdr["sum"].ToString());
                        row.Add("id", sdr["id"].ToString());
                        rows.Add(row);
                    }

                }
                con.Close();

                return rows;
            }
            public static JArray 加载咨询师标签_use订单号(string 订单号)
            {
                JArray rows = new JArray();

                string sql = @"SELECT objimpression.txt,objimpression.sum,objimpression.id FROM 订单,objimpression WHERE 订单.订单号=@orderid  and objimpression.userId=订单.咨询师id ORDER BY objimpression.sum desc LIMIT 0,20;";

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;

                cmd.Parameters.AddWithValue("@orderid", 订单号);

                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        JSONObject row = new JSONObject();
                        row.Add("txt", sdr["txt"].ToString());
                        row.Add("sum", sdr["sum"].ToString());
                        row.Add("id", sdr["id"].ToString());
                        rows.Add(row);

                    }

                }
                con.Close();

                return rows;
            }
            public static bool 查询咨询师标签是否重复(string userId, string txt)
            {
                bool ret = false;


                string sql = @"SELECT  count(objimpression.txt) as a from objimpression WHERE  objimpression.userId=@userId and objimpression.txt =@txt;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                cmd.Parameters.AddWithValue("@txt", txt);
                cmd.Parameters.AddWithValue("@userId", userId);
                con.Open();
                int count = 0;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        count = Convert.ToInt16(sdr["a"]);


                    }

                }
                con.Close();

                if (count == 0)
                {
                    ret = true;

                }
                else
                {
                    ret = false;

                }

                return ret;
            }
            public static bool 写入咨询师印象标签(string userId, string txt)
            {
                bool ret = false;


                string sql = "INSERT  objimpression(objimpression.txt,objimpression.userId,objimpression.sum) VALUES (@txt,@userid,1);";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@txt", txt);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                int count = cmd.ExecuteNonQuery();

                con.Close();

                if (count == 1)
                {
                    ret = true;
                }
                else
                {
                    ret = false;
                }
                return ret;
            }
            public static JSONObject 设置新订单是否系统提示(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setServiceSystemNotification_ret");
                string userId = 请求参数["userId"].ToString();
                string serviceSystemNotification = 请求参数["serviceSystemNotification"].ToString();


                string sql = "UPDATE  userbusiness SET  userbusiness.serviceSystemNotification=@serviceSystemNotification WHERE userbusiness.userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@serviceSystemNotification", serviceSystemNotification);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                ret.Add("count", cmd.ExecuteNonQuery());

                con.Close();
                return ret;
            }
            public static JSONObject 设置新订单是否短信提示(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setServiceShortMessage_ret");
                string userId = 请求参数["userId"].ToString();
                string serviceShortMessage = 请求参数["serviceShortMessage"].ToString();


                string sql = "UPDATE  userbusiness SET  userbusiness.serviceShortMessage=@serviceShortMessage WHERE userbusiness.userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@serviceShortMessage", serviceShortMessage);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                ret.Add("count", cmd.ExecuteNonQuery());

                con.Close();
                return ret;
            }

            public static JSONObject 提交申请咨询师表(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "upApplicationConsultant_ret");
                string userId = 请求参数["userId"].ToString();

                string sql = @"INSERT INTO applicationconsultant(
         userId,
          申请日期,
          input_age,
          input_gender,
          input_name,
          input_otherPlatforms,
          input_QQ,
          input_workYears

        )
        VALUES(
            @userId,
          now(),
           @input_age,
          @input_gender,
          @input_name,
          @input_otherPlatforms,
          @input_QQ,
          @input_workYears

        )";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                int count = 0;
                cmd.Parameters.AddWithValue("@userId", userId);
                cmd.Parameters.AddWithValue("@input_age", 请求参数["input_age"].ToString());
                cmd.Parameters.AddWithValue("@input_gender", 请求参数["input_gender"].ToString());
                cmd.Parameters.AddWithValue("@input_name", 请求参数["input_name"].ToString());
                cmd.Parameters.AddWithValue("@input_otherPlatforms", 请求参数["input_otherPlatforms"].ToString());
                cmd.Parameters.AddWithValue("@input_QQ", 请求参数["input_QQ"].ToString());
                cmd.Parameters.AddWithValue("@input_workYears", 请求参数["input_workYears"].ToString());
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {

                    count = cmd.ExecuteNonQuery();

                }
                con.Close();

                ret.Add("count", count);

                return ret;
            }
            public static JSONObject 加载申请咨询师表单页面(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "ApplicationConsultant_ret");
                string userId = 请求参数["userId"].ToString();


                string sql = @"SELECT  user.CName,user.name,user.性别,user.手机号 FROM  user WHERE user.ID=@userId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                cmd.Parameters.AddWithValue("@userId", userId);
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        ret.Add("CName", sdr["CName"].ToString());
                        ret.Add("name", sdr["name"].ToString());
                        ret.Add("PhoneUnmber", sdr["手机号"].ToString());
                        string gender = "";
                        if (System.DBNull.Value != sdr["性别"])
                        {
                            gender = sdr["性别"].ToString().Trim();
                            if (gender == "1")
                            {
                                gender = "男";
                            }
                            else
                            {
                                gender = "女";
                            }
                        }
                        else
                        {
                            gender = "";
                        }
                        ret.Add("gender", gender);


                    }

                }
                con.Close();

                return ret;
            }

            public static string 查询用户头像(string userid)
            {
                string userimg = "";

                string sql = "select `user`.UserImgUrl from user where `user`.ID=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        userimg = 图片服务器ip + sdr["UserImgUrl"].ToString();

                    }

                }
                con.Close();

                return userimg;
            }
            public static string 查询用户昵称(string userid)
            {
                string CName = "";

                string sql = "select `user`.CName from user where `user`.ID=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        CName = sdr["CName"].ToString();

                    }

                }
                con.Close();

                return CName;
            }
            public static JSONObject 加载擅长类别(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addExpert_ret");

                string expert = "";
                string userId = 请求参数["userId"].ToString();
                string sql = "select userbusiness.擅长类别 from userbusiness where `userbusiness`.userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        expert = sdr["擅长类别"].ToString();

                    }

                }
                con.Close();
                ret.Add("expert", expert);
                return ret;
            }
            public static JSONObject 设置擅长类别(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setExpert_ret");
                string userId = 请求参数["userId"].ToString();
                string expert = 请求参数["expert"].ToString();

                string sql = "update userbusiness set userbusiness.擅长类别=@expert  where userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@expert", expert);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();



                return ret;
            }
            public static JSONObject 修改所在地(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setCity_ret");
                string userId = 请求参数["userId"].ToString();
                string city_attr = 请求参数["city_attr"].ToString();

                string sql = "update user set user.所在地=@city_attr  where id=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@city_attr", city_attr);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();



                return ret;
            }

            public static JSONObject 修改咨询说明(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setObjServiceInTxt_ret");
                string userId = 请求参数["userId"].ToString();
                string serviceTxt = 请求参数["serviceTxt"].ToString();

                string sql = "update userbusiness set userbusiness.咨询介绍=@serviceTxt  where userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@serviceTxt", serviceTxt);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                ret.Add("count", cmd.ExecuteNonQuery());
                if (con.State == System.Data.ConnectionState.Open)
                {


                }
                con.Close();



                return ret;
            }

            public static JSONObject 加载提款账户数据(JSONObject 请求参数)
            {

                JSONObject ret = new JSONObject();
                ret.Add("type", "addDrawingAccountPage_ret");
                string userId = 请求参数["userId"].ToString();

                string sql = "select   user.支付宝账户,user.身份证号,user.name from user where id=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        ret.Add("AlipayNab", sdr["支付宝账户"].ToString());
                        ret.Add("identification", sdr["身份证号"].ToString());
                        ret.Add("name", sdr["name"].ToString());
                    }

                }
                con.Close();



                return ret;
            }
            public static JSONObject 设置提款账户(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setDrawingAccount_ret");
                string userId = 请求参数["userId"].ToString();
                string AlipayNab = 请求参数["AlipayNab"].ToString();
                string identification = 请求参数["identification"].ToString();
                string name = 请求参数["name"].ToString();


                string sql = "update user set user.支付宝账户=@AlipayNab,user.身份证号=@identification,user.name=@name where id=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@AlipayNab", AlipayNab);
                cmd.Parameters.AddWithValue("@identification", identification);
                cmd.Parameters.AddWithValue("@name", name);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                int count = cmd.ExecuteNonQuery();
                if (con.State == System.Data.ConnectionState.Open)
                {


                }
                con.Close();

                ret.Add("count", count);

                return ret;
            }
            public static JSONObject 加载服务页面(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                string userid = 请求参数["userId"].ToString();
                ret.Add("type", "addMySetServiceSerectPage_ret");
                JArray rows = new JArray();

                string sql = "select * from userservice where userId=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.Parameters.AddWithValue("@userid", userid);
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                ArrayList serviceIdList = new ArrayList();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();
                        row.Add("serviceName", sdr["服务名称"].ToString());
                        row.Add("serviceText", sdr["服务介绍"].ToString());
                        row.Add("serviceMoney", sdr["单价"].ToString());
                        row.Add("serviceDate", sdr["创建日期"].ToString());
                        row.Add("serviceState", sdr["开启状态"].ToString());
                        row.Add("serviceId", sdr["serviceId"].ToString());
                        row.Add("serviceCount", sdr["服务次数"].ToString());
                        serviceIdList.Add(sdr["serviceId"].ToString());
                        rows.Add(row);

                    }
                }
                con.Close();
                ret.Add("serviceIdList", string.Join(",", serviceIdList));
                ret.Add("rows", rows);
                return ret;
            }
            public static JSONObject 加载服务页面(string userid)
            {
                JSONObject ret = new JSONObject();

                ret.Add("type", "addMySetServiceSerectPage_ret");
                JArray rows = new JArray();

                string sql = "select * from userservice where userId=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.Parameters.AddWithValue("@userid", userid);
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                ArrayList serviceIdList = new ArrayList();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();
                        row.Add("serviceName", sdr["服务名称"].ToString());
                        row.Add("serviceText", sdr["服务介绍"].ToString());
                        row.Add("serviceMoney", sdr["单价"].ToString());
                        row.Add("serviceDate", sdr["创建日期"].ToString());
                        row.Add("serviceState", sdr["开启状态"].ToString());
                        row.Add("serviceId", sdr["serviceId"].ToString());
                        row.Add("serviceCount", sdr["服务次数"].ToString());
                        serviceIdList.Add(sdr["serviceId"].ToString());
                        rows.Add(row);

                    }
                }
                con.Close();
                ret.Add("serviceIdList", string.Join(",", serviceIdList));
                ret.Add("rows", rows);
                return ret;
            }
            public static JSONObject 请求用户评论(JSONObject 请求参数)
            {

                JSONObject ret = new JSONObject();
                if (请求参数["toUserId"] == null)
                {
                    ret.Add("type", "error");
                    ret.Add("msg", "请求用户评论 toUserId is null");
                    return ret;
                }
                if (请求参数["litim"] == null)
                {
                    ret.Add("type", "error");
                    ret.Add("msg", "请求用户评论 litim is null");
                    return ret;
                }
                string toUserId = 请求参数["toUserId"].ToString();
                string litim = 请求参数["litim"].ToString();
                ret.Add("type", "addUserRating_ret");

                ret.Add("rows", 加载用户评论(toUserId, Convert.ToInt16(litim))["rows"]);
                return ret;
            }
            public static JSONObject 加载用户评论(string ObjUserId, int litim = 0)
            {
                JSONObject ret = new JSONObject();


                JArray rows = new JArray();

                string sql = "SELECT  `user`.CName,`user`.UserImgUrl,评价.`评价内容`,评价.BuyserviceName,评价.`评价日期`,评价.`评分` from user inner JOIN 评价 on user.id = 评价.userId where 评价.ObjUserId=@ObjUserId ORDER BY `评价日期` DESC LIMIT @litim,10;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.Parameters.AddWithValue("@ObjUserId", ObjUserId);
                cmd.Parameters.AddWithValue("@litim", litim);
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();
                        row.Add("CName", sdr["CName"].ToString());
                        row.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
                        row.Add("rntingTxt", sdr["评价内容"].ToString());

                        string 评价日期 = tool.日期时间处理(Convert.ToDateTime(sdr["评价日期"]));
                        row.Add("rntingData", 评价日期);

                        row.Add("BuyserviceName", sdr["BuyserviceName"].ToString());
                        row.Add("rntingNub", sdr["评分"].ToString());

                        rows.Add(row);

                        JArray plimg = new JArray();

                        //  Console.WriteLine("评分="+sdr["评分"]);

                        //  return ret;

                        int img_count = Convert.ToInt16(sdr["评分"]);
                        for (int i = 0; i < img_count; i++)
                        {
                            plimg.Add("1");
                        }
                        int sum = 5 - img_count;

                        for (int i = 0; i < sum; i++)
                        {
                            plimg.Add("0");
                        }

                        row.Add("imglist", plimg);

                    }
                }
                con.Close();

                ret.Add("rows", rows);
                return ret;
            }

            public static JSONObject 载入我的页面(JSONObject 请求参数)
            {


                JSONObject ret = new JSONObject();

                string userid = 请求参数["userId"].ToString();
                ret.Add("userId", userid);



                string sql = "select  user.UserImgUrl,user.性别,user.个性签名,user.CName,userbusiness.营业状态,userbusiness.行业,userbusiness.咨询评分  from userbusiness,user  where user.id=userbusiness.userid and user.id=" + userid + " ";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    try
                    {
                        sdr = cmd.ExecuteReader();
                        ret.Add("type", "getUserData_return");
                        while (sdr.Read())
                        {
                            if (sdr["UserImgUrl"] != System.DBNull.Value)
                            {
                                if (sdr["UserImgUrl"].ToString() != "")
                                {
                                    ret.Add("userimg", 图片服务器ip + sdr["UserImgUrl"].ToString());
                                }
                                else
                                {
                                    ret.Add("userimg", "");
                                }
                            }
                            else
                            {
                                ret.Add("userimg", "");
                            }



                            ret.Add("sex", sdr["性别"].ToString());
                            ret.Add("yingyezhuangtai", sdr["营业状态"].ToString());
                            ret.Add("gexingqianming", sdr["个性签名"].ToString());
                            ret.Add("hangye", sdr["行业"].ToString());
                            ret.Add("zixunpingfen", sdr["咨询评分"].ToString());
                            ret.Add("CName", sdr["CName"].ToString());



                        }
                    }
                    catch (Exception ex)
                    {
                        ret.Add("error", ex.Message);
                    }

                }
                con.Close();


                return ret;
            }
            public static JSONObject 加载名片封面(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addServiceImgs_ret");
                string userId = 请求参数["userId"].ToString();
                string serviceImgs = "";
                string sql = "select userbusiness.封面图片 FROM  userbusiness WHERE  userbusiness.userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        if (sdr["封面图片"] == DBNull.Value) { }
                        else
                        {
                            serviceImgs = 图片服务器ip + sdr["封面图片"].ToString();
                        }




                    }

                }

                con.Close();




                ret.Add("serviceImgs", serviceImgs);
                return ret;
            }
            public static JSONObject 设置名片封面(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setServiceHomeImg_ret");
                string userId = 请求参数["userId"].ToString();
                string userImgUrl = 请求参数["userImgUrl"].ToString();
                userImgUrl = userImgUrl.Replace(图片服务器ip, "");//去掉服务器ip前缀


                string sql = "update userbusiness set userbusiness.封面图片=@封面图片  where userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@封面图片", userImgUrl);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                ret.Add("count", cmd.ExecuteNonQuery());
                if (con.State == System.Data.ConnectionState.Open)
                {


                }
                con.Close();


                return ret;
            }
            public static JSONObject 加载个人资料设置页面(JSONObject 请求参数)
            {
                //个人资料页面加载用户数据
                JSONObject ret = new JSONObject();

                ret.Add("type", "addUserData_mySetData_ret");

                string userid = "";
                if (请求参数["userId"] != null)
                {
                    userid = 请求参数["userId"].ToString();
                }
                else
                {
                    ret.Add("type", "error");
                    ret.Add("msg", "userId is null");
                    return ret;
                }


                string sql = @"select user.CName,user.性别,DATE(user.出生日期) as 出生日期 ,user.UserImgUrl,user.个性签名  from user where id=@userid";




                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        ret.Add("CName", sdr["CName"].ToString());
                        ret.Add("sex", sdr["性别"].ToString());

                        if (sdr["出生日期"] != null)
                        {
                            if (sdr["出生日期"].ToString() != "")
                            {

                                try
                                {
                                    DateTime dt = Convert.ToDateTime(sdr["出生日期"].ToString());
                                    ret.Add("startdate", dt.ToString("yyyy-MM-dd"));
                                }
                                catch (Exception ex)
                                {
                                    ret.Add("startdate", "0000-00-00");
                                }
                            }
                            else
                            {
                                ret.Add("startdate", "0000-00-00");
                            }
                        }
                        else
                        {
                            ret.Add("startdate", "0000-00-00");
                        }
                        //ret.Add("startdate", sdr["出生日期"].ToString());

                        if (sdr["UserImgUrl"] != null)
                        {
                            if (sdr["UserImgUrl"].ToString() != "")
                            {
                                ret.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
                            }
                            else
                            {
                                ret.Add("UserImgUrl", "");
                            }
                        }
                        else
                        {
                            ret.Add("UserImgUrl", "");
                        }

                        if (sdr["个性签名"] != null)
                        {
                            ret.Add("qianming", sdr["个性签名"].ToString());
                        }
                        else
                        {
                            ret.Add("qianming", "");
                        }



                    }

                }
                con.Close();


                return ret;

            }
            public static JSONObject 加载咨询师详情(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addObjTxt_ret");
                string touserid = 请求参数["toUserId"].ToString();
                string userid = 请求参数["userId"].ToString();
                //头像,昵称,性别,交易量，关注量，好评率，桌面图片，是否已关注，咨询简介，印象，服务全部，

                string sql = @"select user.UserImgUrl,user.CName,user.性别,user.被关注,userbusiness.咨询介绍,userbusiness.封面图片,userbusiness.咨询评分,userbusiness.总订单量,userbusiness.咨询评分,userbusiness.saturation_zhiliang_avg,userbusiness.saturation_taidu_avg,userbusiness.saturation_sudu_avg
        from    user INNER  JOIN   userbusiness  ON  user.id=userbusiness.userid
        where   user.id=@touserid;";

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@touserid", touserid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {



                        ret.Add("userImg", 图片服务器ip + sdr["UserImgUrl"].ToString());
                        ret.Add("CName", sdr["CName"].ToString());
                        ret.Add("sex", sdr["性别"].ToString());
                        ret.Add("beiguanzhu", sdr["被关注"].ToString());
                        ret.Add("serviceTxt", sdr["咨询介绍"].ToString());
                        ret.Add("serviceImg", 图片服务器ip + sdr["封面图片"].ToString());


                        Double zixunpingfen = Convert.ToDouble(sdr["咨询评分"]);

                        ret.Add("zixunpingfen", zixunpingfen);
                        ret.Add("zongdingdanliang", sdr["总订单量"].ToString());

                        ret.Add("saturation_zhiliang_avg", Convert.ToDecimal(sdr["saturation_zhiliang_avg"]).ToString("0.0"));
                        ret.Add("saturation_taidu_avg", Convert.ToDecimal(sdr["saturation_taidu_avg"]).ToString("0.0"));
                        ret.Add("saturation_sudu_avg", Convert.ToDecimal(sdr["saturation_sudu_avg"]).ToString("0.0"));
                    }

                }

                con.Close();
                ret.Add("serviceList", 加载服务页面(touserid));
                ret.Add("userRating", 加载用户评论(touserid));
                ret.Add("isFollow", letter.判断是否关注(userid, touserid));
                ret.Add("bq", addObjTextbq(touserid));//加载印象标签
                ret.Add("city", personalData.查找用户所在地(touserid));

                return ret;
            }
            public static JSONObject 加载咨询师履历(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addObjResume_ret");
                string userId = 请求参数["userId"].ToString();
                string sql = "select  userbusiness.入驻时间, userbusiness.从业年限,userbusiness.从业经历,userbusiness.擅长类别,userbusiness.占卜方式 from userbusiness where userbusiness.userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        int a = DateTime.Now.Year;
                        int b = DateTime.Parse(sdr["入驻时间"].ToString()).Year;
                        int c = a - b;
                        if (c > 0)
                        {
                            int d = DateTime.Now.Month;
                            int e = DateTime.Parse(sdr["入驻时间"].ToString()).Month;
                            int f = d - e;
                            ret.Add("WorkingYears", c + "年" + f + "个月");
                        }

                        if (c == 0)
                        {
                            int d = DateTime.Now.Month;
                            int e = DateTime.Parse(sdr["入驻时间"].ToString()).Month;
                            int f = d - e;
                            ret.Add("WorkingYears", f + "个月");
                        }




                        ret.Add("experience", Convert.ToString(sdr["从业经历"]));
                        ret.Add("GoodAtCategory", Convert.ToString(sdr["擅长类别"]));
                        ret.Add("tarotType", Convert.ToString(sdr["占卜方式"]));




                    }

                }
                con.Close();

                return ret;

            }
            public static JArray addObjTextbq(string userId)
            {
                //加载咨询师详情页面印象标签
                // JSONObject ret = new JSONObject();
                JArray rows = new JArray();
                string sql = "select id,txt,userId,sum from objimpression where userId=@userid order by  sum desc ;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        JSONObject row = new JSONObject();
                        row.Add("id", Convert.ToString(sdr["id"]));
                        row.Add("txt", Convert.ToString(sdr["txt"]));
                        row.Add("userId", Convert.ToString(sdr["userId"]));
                        row.Add("sum", Convert.ToString(sdr["sum"]));

                        rows.Add(row);


                    }

                }
                con.Close();
                // ret.Add("bq", rows);
                return rows;

            }

            public static JSONObject updataUserImg(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "updataUserImg_ret");
                string userid = "";
                if (请求参数["userid"] != null)
                {
                    userid = 请求参数["userid"].ToString();

                }
                else
                {
                    // ret.Add("type","userid is null");
                    ret["type"] = "userid is null";
                    return ret;
                }

                string imgUri = "";
                if (请求参数["userImgUri"] != null)
                {
                    imgUri = 请求参数["userImgUri"].ToString();
                    //tool.发送邮件("cuowutiaoshi", imgUri, "taluoguan@163.com");
                }
                else
                {
                    //ret.Add("type", "imgUri is null");
                    ret["type"] = "imgUri is null";
                    return ret;
                }


                //下面开始转换成img并保存

                string imgUrl = tool.base64ChangeImgSave(imgUri);
                string a = tool.删除旧头像(userid);
                if (a != "ok")
                {
                    ret["type"] = "error";
                    ret.Add("meg", a);
                    return ret;
                }
                //将文件路径写入数据库

                string sql = "update user set UserImgUrl=@imgUrl  where id=@userid;";

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);
                cmd.Parameters.AddWithValue("@imgUrl", imgUrl);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                cmd.ExecuteNonQuery();
                if (con.State == System.Data.ConnectionState.Open)
                {

                }
                con.Close();
                ret.Add("imgUrl", imgUri);
                ret.Add("ceshi", "ok");
                return ret;
            }
            public static JSONObject 修改从业经历(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setExperience_ret");
                string userId = 请求参数["userId"].ToString();
                string serviceTxt = 请求参数["serviceTxt"].ToString();

                string sql = "update userbusiness set userbusiness.从业经历=@serviceTxt  where userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@serviceTxt", serviceTxt);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                ret.Add("count", cmd.ExecuteNonQuery());
                if (con.State == System.Data.ConnectionState.Open)
                {


                }
                con.Close();
                return ret;
            }

            public static JSONObject 加载从业经历(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addExperience_ret");
                string userid = 请求参数["userId"].ToString();

                string sql = "SELECT userbusiness.从业经历 from userbusiness WHERE userbusiness.userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("txt", sdr["从业经历"].ToString());


                    }

                }
                con.Close();

                return ret;
            }





            public static JSONObject 删除桌面拍照(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();

                ret.Add("type", "deleteServiceImg_ret");

                string userid = 请求参数["userId"].ToString();
                string imgUrl = 请求参数["imgUrl"].ToString();
                ArrayList 图片列表 = new ArrayList();
                string sql = "select userbusiness.封面图片 as 图片列表 from userbusiness where userid=@userid";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        // string []  图片列表str = sdr["图片列表"].ToString().Split(',');
                        if (sdr["图片列表"].ToString().Trim() != "")
                        {
                            图片列表 = new ArrayList(sdr["图片列表"].ToString().Split(','));
                        }


                    }

                }
                con.Close();

                if (图片列表.Count != 0)
                {
                    //删除物理文件



                    string 当前服务路径 = basePath1;
                    string 保存绝对路径 = 当前服务路径 + imgUrl.Replace(图片服务器ip, "");
                    //删除文件
                    try
                    {
                        System.IO.File.Delete(保存绝对路径);
                    }
                    catch (Exception e)
                    {
                        ret.Add("error", e.Message);


                    }


                    int i = 图片列表.IndexOf(imgUrl.Replace(图片服务器ip, ""));//查找要删除元素的索引
                    图片列表.RemoveAt(i);//通过索引删除元素
                    string 图片列表str = string.Join(",", (string[])图片列表.ToArray(typeof(string)));//动态数组转带,的字符串


                    //更新数据库
                    cmd.CommandText = "update userbusiness set userbusiness.封面图片=@封面图片  where userid=@userid";

                    cmd.Parameters.AddWithValue("@封面图片", 图片列表str);

                    con.Open();
                    int count = cmd.ExecuteNonQuery();
                    if (con.State == System.Data.ConnectionState.Open)
                    {


                    }
                    con.Close();




                }
                else
                {

                    ret["type"] = "err_not_select_imgUrl";
                }


                return ret;
            }
            public static JSONObject 修改占卜牌阵(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setSkill_ret");
                string userId = 请求参数["userId"].ToString();
                string serviceTxt = 请求参数["serviceTxt"].ToString();

                string sql = "update userbusiness set userbusiness.占卜方式=@serviceTxt  where userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@serviceTxt", serviceTxt);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                ret.Add("count", cmd.ExecuteNonQuery());
                if (con.State == System.Data.ConnectionState.Open)
                {


                }
                con.Close();
                return ret;
            }


            public static JSONObject 加载占卜牌阵(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addSkill_ret");
                string userid = 请求参数["userId"].ToString();

                string sql = "SELECT userbusiness.占卜方式 from userbusiness WHERE userbusiness.userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("txt", sdr["占卜方式"].ToString());


                    }

                }
                con.Close();

                return ret;
            }





            public static JSONObject 加载咨询说明(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addServiceTxt_ret");
                string userid = 请求参数["userId"].ToString();

                string sql = "SELECT userbusiness.咨询介绍 from userbusiness WHERE userbusiness.userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("txt", sdr["咨询介绍"].ToString());


                    }

                }
                con.Close();

                return ret;
            }
            public static JSONObject addbage(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addbage_ret");

                string userid = 请求参数["userId"].ToString();


                ret.Add("badgeRows", personalData.加载咨询师标签(userid));
                ret.Add("badgeRows_", personalData.加载所有咨询师标签());



                return ret;


            }
            public static JSONObject 加载名片编辑页面数据(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addUserDataExplain_ret");

                string userid = 请求参数["userId"].ToString();
                string 图片数组字符串 = "";

                string sql = "select userbusiness.封面图片,userbusiness.咨询介绍 from userbusiness where userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        if (sdr["封面图片"].ToString().Trim() != "")
                        {
                            图片数组字符串 = sdr["封面图片"].ToString();
                        }

                        ret.Add("serviceTxt", sdr["咨询介绍"].ToString());


                    }

                }
                con.Close();
                string[] 图片数组 = 图片数组字符串.Split(',');
                for (int i = 0; i < 图片数组.Length; i++)
                {
                    if (图片数组[i].Trim() != "")
                    {
                        图片数组[i] = 图片服务器ip + 图片数组[i];
                    }

                }
                图片数组字符串 = string.Join(",", 图片数组);
                ret.Add("serviceImgs", 图片数组字符串);

                ret.Add("badgeRows", personalData.加载咨询师标签(userid));
                ret.Add("badgeRows_", personalData.加载所有咨询师标签());
                ret.Add("city", 查找用户所在地(userid));
                ret.Add("userImg", 图片服务器ip + personalData.查找用户头像URL(userid));
                return ret;
            }
            public static string 查找用户所在地(string userid)
            {
                string 所在地 = "";
                string sql = "SELECT  user.所在地 from user WHERE  user.id=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        所在地 = sdr["所在地"].ToString();

                    }

                }
                con.Close();

                return 所在地;
            }
            public static string 查找用户昵称(string userid)
            {
                string CName = "";
                string sql = "SELECT  user.CName from user WHERE  user.id=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        CName = sdr["CName"].ToString();

                    }

                }
                con.Close();

                return CName;
            }
            public static string 查找用户头像URL(string userid)
            {
                string userImg = "";
                string sql = "SELECT  user.UserImgUrl from user WHERE  user.id=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        userImg = sdr["UserImgUrl"].ToString();

                    }

                }
                con.Close();

                return userImg;
            }
            public static JSONObject 更新用户数据(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setUserData_ok");

                string userid = "";
                if (请求参数["userId"] != null)
                {
                    userid = 请求参数["userId"].ToString();
                }
                else
                {
                    ret.Add("error", "userid is ''");
                }

                string cname = "";
                if (请求参数["cname"] != null)
                {
                    cname = 请求参数["cname"].ToString();
                }
                else
                {
                    ret.Add("error", "cname is ''");
                }

                string sex = "";
                if (请求参数["sex"] != null)
                {
                    sex = 请求参数["sex"].ToString();
                }
                else
                {
                    ret.Add("error", "sex is ''");
                }

                string stratDate = "";
                if (请求参数["stratDate"] != null)
                {
                    stratDate = 请求参数["stratDate"].ToString();
                }
                else
                {
                    ret.Add("error", "stratDate is ''");
                }

                string qianming = "";
                if (请求参数["qianming"] != null)
                {
                    qianming = 请求参数["qianming"].ToString();
                }
                else
                {
                    ret.Add("error", "qianming is ''");
                }

                string updata_sum = "";

                if (userid != "")
                {
                    if (cname != "")
                    {

                        tool.简单查询("update user set CName='" + cname + "'  where id=" + userid + ";");
                        updata_sum += "cname,";
                    }
                    if (sex != "")
                    {
                        tool.简单查询("update user set 性别=" + sex + "  where id=" + userid + "");
                        updata_sum += "sex,";
                    }
                    if (stratDate != "")
                    {
                        if (stratDate == "0000-00-00")
                        {

                        }
                        else
                        {
                            tool.简单查询("update user set 出生日期='" + stratDate + "'  where id=" + userid + "");
                            updata_sum += "stratDate,";
                        }


                    }
                    if (qianming != "")
                    {
                        tool.简单查询("update user set 个性签名='" + qianming + "'  where id=" + userid + "");
                        updata_sum += "qianming";
                    }
                }
                else
                {
                    JSONObject error = new JSONObject();
                    error.Add("error", "userif is ''");

                }






                ret.Add("updata_sum", updata_sum);



                return ret;


            }
            public static JSONObject 上传桌面拍照(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "upUserServiceImg_ret");
                string userid = 请求参数["userid"].ToString();
                string imgBase64 = 请求参数["imgBase64"].ToString();
                string 图片保持路径 = tool.base64ChangeImgSave(imgBase64);
                //string 现有图片 = "";
                //ArrayList 现有图片数组 = new ArrayList();
                string sql = "update  userbusiness set userbusiness.封面图片=@图片保持路径 where userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);
                cmd.Parameters.AddWithValue("@图片保持路径", 图片保持路径);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    ret.Add("msg", "upuserimg_ok");

                }
                con.Close();






                return ret;
            }
        }
        public class service
        {
            public static JSONObject 加载最佳评价的服务(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addpl_ret");
                string sql = @"select 评价.评价日期,评价.评价内容,评价.ObjUserId,user.UserImgUrl,user.CName,评价.评分,评价.serviceId,评价.BuyserviceName from  user inner join 评价 on user .id=评价.userId where 评价.订单号 = (select 评价.订单号 from userservice inner join 评价 on userservice.服务名称 =评价.BuyserviceName  where 评分>=4.9 order by 评分 desc limit 0,1);";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                // cmd.Parameters.AddWithValue("@serviceId", serviceId);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                MySqlDataReader sdr = null;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("date", Convert.ToDateTime(sdr["评价日期"]).ToString("yyyy/MM/dd"));
                        ret.Add("txt", sdr["评价内容"].ToString());
                        ret.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
                        ret.Add("CName", sdr["CName"].ToString());
                        ret.Add("pingfen", sdr["评分"].ToString());
                        ret.Add("serviceId", sdr["serviceId"].ToString());
                        ret.Add("BuyserviceName", sdr["BuyserviceName"].ToString());
                        ret.Add("ObjUserId", sdr["ObjUserId"].ToString());
                    }


                }
                con.Close();
                return ret;
            }

            public static bool 统计分数(string userId)
            {
                bool ret = false;

                string sql = @"UPDATE  userbusiness set
          saturation_taidu_avg=(SELECT avg(评价.saturation_taidu) from 评价 WHERE  评价.userId=@userId),
          saturation_zhiliang_avg=(SELECT avg(评价.saturation_zhiliang) from 评价 WHERE  评价.userId=@userId),
          saturation_sudu_avg=(SELECT avg(评价.saturation_sudu) from 评价 WHERE  评价.userId=@userId),
          userbusiness.咨询评分 =(SELECT  * FROM
        (SELECT ((userbusiness.saturation_sudu_avg)+(userbusiness.saturation_taidu_avg)+ (userbusiness.saturation_zhiliang_avg)) /3 *2 /10    from userbusiness WHERE userid=@userId ) as a)
          WHERE userbusiness.userid=@userId;";

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);

                cmd.CommandText = sql;
                int a = 0;
                cmd.Connection = con;
                con.Open();
                a = cmd.ExecuteNonQuery();
                con.Close();

                if (a >= 1)
                {
                    ret = true;
                }
                return ret;
            }
            public static JSONObject 加载订单页服务内容(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();

                ret.Add("type", "addOrderServiceTxt_ret");

                string serviceId = 请求参数["serviceId"].ToString();



                string sql = "SELECT userservice.`服务名称`,userservice.`服务介绍` FROM userservice where userservice.serviceId=@serviceId;";

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@serviceId", serviceId);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                MySqlDataReader sdr = null;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("serviceName", sdr["服务名称"].ToString());
                        ret.Add("serviceTxt", sdr["服务介绍"].ToString());
                    }


                }
                con.Close();

                return ret;
            }
            public static JSONObject 加载对话咨询师数据(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "consultTime_addToUserData_ret");

                string toUserId = 请求参数["toUserId"].ToString();
                string orderId = "";
                string sql = "select `user`.`name`,`user`.UserImgUrl from user where `user`.id=@toUserId;";
                if (请求参数["orderId"] != null)
                {
                    orderId = 请求参数["orderId"].ToString();
                    if (tool.判断用户是否该订单咨询师咨询师(toUserId, orderId))
                    {
                        //对方是咨询师
                    }
                    else
                    {
                        //对方是咨询用户  显示用户姓名而不是昵称
                        sql = "select `订单`.`用户姓名` as name,`user`.UserImgUrl from user  inner join  订单  on user.id=订单.下单用户id  where 订单.订单号=@orderId;";
                    }
                }
                else
                {
                    sql = "select `user`.`name`,`user`.UserImgUrl from user where `user`.id=@toUserId;";
                }






                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@toUserId", toUserId);
                cmd.Parameters.AddWithValue("@orderId", orderId);
                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                MySqlDataReader sdr = null;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("name", sdr["name"].ToString());
                        ret.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
                    }


                }
                con.Close();

                bool isline = false;
                object c = MemoryCache.Get(toUserId);
                if (c != null)
                {
                    if (MemoryCache.Get(toUserId).ToString() != "")
                    {
                        isline = true;
                    }
                }

                ret.Add("isline", isline.ToString());
                return ret;

            }
            public static JSONObject 加载营业设置(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addMySetServiceDatePage_ret");
                string userId = 请求参数["userId"].ToString();
                ret.Add("serviceExistence", "0");
                //判断是否完善服务资料
                if (is存在服务(userId))
                {
                    //服务存在
                    ret["serviceExistence"] = "1";

                }
                else
                {
                    ret["serviceExistence"] = "0";
                }

                Boolean a = 查询营业状态(userId);
                ret.Add("serviceState", "0");
                if (a)
                {
                    //已经开启服务
                    ret["serviceState"] = 1;
                }
                else
                {
                    ret["serviceState"] = 0;
                }

                string sql = "SELECT userbusiness.serviceShortMessage,userbusiness.serviceSystemNotification FROM  userbusiness WHERE userbusiness.userid=@userId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);


                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                MySqlDataReader sdr = null;

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("serviceShortMessage", sdr["serviceShortMessage"].ToString());
                        ret.Add("serviceSystemNotification", sdr["serviceSystemNotification"].ToString());
                    }

                }
                con.Close();

                return ret;
            }
            public static JSONObject deleteService(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "deleteService_ret");
                string userId = 请求参数["userId"].ToString();
                string serviceId = 请求参数["serviceId"].ToString();



                string sql = "delete from userservice where userid=@userId and serviceid=@serviceId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);

                cmd.Parameters.AddWithValue("@serviceId", serviceId);




                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                int updateCount = cmd.ExecuteNonQuery();
                if (con.State == System.Data.ConnectionState.Open)
                {

                }
                con.Close();
                ret.Add("updateCount", updateCount);


                return ret;
            }
            public static Boolean is存在服务(string userId)
            {

                Boolean c = false;


                string sql = "select count(*) as count from  userservice where userId=@userId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);
                int count = 0;
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        count = Convert.ToInt16(sdr["count"]);
                    }

                }
                con.Close();


                if (count > 0)
                {
                    c = true;
                }

                return c;
            }
            public static Boolean 查询营业状态(string userId)
            {

                Boolean c = false;


                string sql = "select userbusiness.营业状态 from userbusiness where userbusiness.userid=@userId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);
                int serviceState = 0;
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        serviceState = Convert.ToInt16(sdr["营业状态"]);
                    }

                }
                con.Close();
                if (serviceState == 1)
                {
                    c = true;
                }
                else
                {
                    c = false;
                }

                return c;



            }
            public static JSONObject 创建服务(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "creatService_ret");

                string userId = 请求参数["userId"].ToString();

                string serviceName = 请求参数["serviceName"].ToString();
                string serviceText = 请求参数["serviceText"].ToString();
                string serviceMoney = 请求参数["serviceMoney"].ToString();
                serviceMoney = Convert.ToString(Math.Truncate(Convert.ToDouble(serviceMoney) * 100) / 100);


                string sql = "INSERT into userservice (服务名称,服务介绍,单价,开启状态,userid,创建日期) values(@serviceName,@serviceText,@serviceMoney,1,@userId,CURDATE());";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);

                cmd.Parameters.AddWithValue("@serviceName", serviceName);
                cmd.Parameters.AddWithValue("@serviceText", serviceText);
                cmd.Parameters.AddWithValue("@serviceMoney", serviceMoney);



                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                int updateCount = cmd.ExecuteNonQuery();

                con.Close();
                ret.Add("updateCount", updateCount);

                service.更新最低价格(userId);

                return ret;
            }
            public static JSONObject 设置服务内容(JSONObject 请求参数)
            {
                //这是更新服务内容
                JSONObject ret = new JSONObject();
                ret.Add("type", "upServiceDate_ret");

                string userId = 请求参数["userId"].ToString();
                string serviceId = 请求参数["serviceId"].ToString();
                string serviceName = 请求参数["serviceName"].ToString();
                string serviceText = 请求参数["serviceText"].ToString();
                string serviceMoney = 请求参数["serviceMoney"].ToString();
                serviceMoney = Convert.ToString(Math.Truncate(Convert.ToDouble(serviceMoney) * 100) / 100);

                string state = 请求参数["state"].ToString();


                string sql = "UPDATE userservice set 服务名称=@serviceName,服务介绍=@serviceText,单价=@serviceMoney,开启状态=@state where userid=@userId and serviceid=@serviceId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);
                cmd.Parameters.AddWithValue("@serviceId", serviceId);
                cmd.Parameters.AddWithValue("@serviceName", serviceName);
                cmd.Parameters.AddWithValue("@serviceText", serviceText);
                cmd.Parameters.AddWithValue("@serviceMoney", serviceMoney);
                cmd.Parameters.AddWithValue("@state", state);


                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                int updateCount = cmd.ExecuteNonQuery();

                con.Close();

                //更新minMoney
                service.更新最低价格(userId);

                ret.Add("updateCount", updateCount);
                return ret;
            }
            public static bool 更新最低价格(string userid)
            {
                decimal 最低价格 = Convert.ToDecimal(tool.查询价格最低的服务(userid));
                Boolean isSess = false;
                string sql = "UPDATE  userbusiness SET userbusiness.minMoney=@minMonye WHERE userbusiness.userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                cmd.Parameters.AddWithValue("@minMonye", 最低价格);
                cmd.Parameters.AddWithValue("@userid", userid);
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();



                }
                con.Close();

                return isSess;

            }
            public static JSONObject 设置服务状态(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "setServiceState_ret");

                string userId = 请求参数["userId"].ToString();

                string serviceState = 请求参数["serviceState"].ToString();

                string minMoney = tool.查询价格最低的服务(userId);

                string sql = "update userbusiness set 营业状态=@serviceState,minMoney=@minMoney where userid=@userId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);
                cmd.Parameters.AddWithValue("@minMoney", minMoney);
                cmd.Parameters.AddWithValue("@serviceState", serviceState);


                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                int updateCount = cmd.ExecuteNonQuery();
                if (con.State == System.Data.ConnectionState.Open)
                {

                }
                con.Close();
                ret.Add("updateCount", updateCount);
                return ret;
            }
            public static JSONObject 加载服务内容(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addMyServiceSetPage_ret");



                string userId = 请求参数["userId"].ToString();
                string serviceId = 请求参数["serviceId"].ToString();

                string sql = "select * from  userservice where userservice.userId=@userid and userservice.serviceId=@serviceId";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@serviceId", serviceId);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                int i = 0;
                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        i++;


                        ret.Add("serviceName", sdr["服务名称"].ToString());
                        ret.Add("serviceText", sdr["服务介绍"].ToString());
                        ret.Add("serviceMoney", sdr["单价"].ToString());
                        DateTime dt = Convert.ToDateTime(sdr["创建日期"]);
                        ret.Add("date", dt.ToString());
                        ret.Add("state", sdr["开启状态"].ToString());




                    }

                }
                con.Close();

                ret.Add("listSum", i);

                return ret;
            }
        }

        public class money

        {
            public static decimal 查询用户付款金额(string orderId)
            {
                decimal ret = 0;


                string sql = "select  订单.已缴金额 from 订单 where  订单号='" + orderId + "';";


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        ret = Convert.ToDecimal(sdr["已缴金额"]);
                    }


                }

                return ret;
            }

            public static JSONObject 提款申请(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();

                //1、查询提款记录是否已经存在 如果有 则ret
                ret.Add("type", "withdrawalsMoney_ret");
                string userId = 请求参数["userId"].ToString();
                string money = 请求参数["money"].ToString();

                string sql = "SELECT  CASE  exists(SELECT *  FROM  withdrawalsrecord WHERE  withdrawalsrecord.userId=@userId and withdrawalsrecord.state=0) when 1  then 1 ELSE 0 end as a;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);
                cmd.Parameters.AddWithValue("@money", money);




                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                int a = 0;



                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        a = Convert.ToInt16(sdr["a"]);





                    }


                }
                con.Close();


                if (a == 1)
                {
                    //已经存在记录

                    ret.Add("meg", "1");



                }
                else
                {
                    //2、 写入提款记录

                    tool.简单查询("INSERT into withdrawalsrecord(userId,state,date,money) VALUES (" + userId + ",0,now()," + money + ");");


                    ret.Add("meg", "ok");

                }


                return ret;


            }
            public static JSONObject 加载提现记录(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();


                ret.Add("type", "addMyWalletRecordPage_ret");
                string userId = 请求参数["userId"].ToString();


                string sql = @"SELECT withdrawalsrecord.money,withdrawalsrecord.date,withdrawalsrecord.state
        from withdrawalsrecord
        where withdrawalsrecord.userId = @userId; ";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                int count = 0;

                JArray rows = new JArray();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();


                        row.Add("money", sdr["money"].ToString());
                        int state = Convert.ToInt16(sdr["state"]);
                        DateTime date = Convert.ToDateTime(sdr["date"]);
                        row.Add("date", date.ToString("yyyy") + "/" + date.ToString("MM") + "/" + date.ToString("dd") + "/" + date.ToString("hh") + ":" + date.ToString("mm"));
                        if (state == 0)
                        {
                            //等待处理
                            row.Add("state", "待处理");

                        }
                        else
                        {
                            row.Add("state", "已转账");
                        }
                        rows.Add(row);
                        count++;
                    }


                }
                con.Close();
                ret.Add("count", count);
                ret.Add("rows", rows);

                return ret;


            }
            public static bool 付款后更新订单(string 金额, string 订单号)
            {
                bool ok = false;


                string sql = "update 订单 set 付款日期=now() , 订单状态=1 ,已缴金额=@money  where 订单号=@ordernab;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@money", 金额);
                cmd.Parameters.AddWithValue("@ordernab", 订单号);

                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                int i = cmd.ExecuteNonQuery();



                con.Close();

                if (i == 1)
                {
                    ok = true;
                }


                //1 查询要发生的数据 咨询师id，买方用户名 购买的服务名 


                JSONObject a = new JSONObject();
                a.Add("orderId", 订单号);
                a = transaction.加载订单详情(a);
                JSONObject sendData = new JSONObject();
                sendData.Add("touser", a["objId"].ToString());
                sendData.Add("userName", a["userName"].ToString());
                sendData.Add("serviceName", a["serviceName"].ToString());
                sendData.Add("type", "receivedNewService");


                tool.向对端推送数据(sendData);


                return ok;




            }
            public static JSONObject 订单处理(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "generateOrder_ret");
                string serviceId = 请求参数["serviceId"].ToString();
                string localUserId = 请求参数["localUserId"].ToString();
                string toUserId = 请求参数["toUserId"].ToString();
                string userName = 请求参数["userName"].ToString();
                string userSex = 请求参数["userSex"].ToString();
                string userAge = 请求参数["userAge"].ToString();
                string orderTxt = 请求参数["orderTxt"].ToString();//订单留言

                string 订单号 = new tool.RandomNumber().GetRandom1();//生成订单号
                string title = "";
                string txt = "";
                decimal money = 0;

                string sql = "select userservice.服务介绍,userservice.单价,userservice.服务名称 from userservice where userservice.serviceId=@serviceId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@serviceId", serviceId);
                // cmd.Parameters.AddWithValue("@userId", localUserId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();


                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        title = sdr["服务名称"].ToString();
                        txt = sdr["服务介绍"].ToString();
                        money = Convert.ToDecimal(sdr["单价"]);

                    }

                }
                con.Close();


                //保存订单
                if (保存订单(serviceId, localUserId, toUserId, 订单号, money, orderTxt, userName, userAge, userSex))
                {
                    //保存订单成功
                }
                else
                {
                    //保存订单失败 返回错误
                    ret.Add("error", "保存订单 失败");

                }
                //生成请求订单数据
                string orderString = pay(title, txt, money, 订单号, serviceId);
                ret.Add("orderString", orderString);
                ret.Add("orderId", 订单号);
                return ret;
            }
            public static bool 保存订单(string serviceId, string localUserId, string toUserId, string OutTradeNo, decimal money, string orderTxt, string userName, string userAge, string userSex)
            {

                string sql = "insert 订单(咨询师id,下单用户id,下单日期,订单状态,订单留言,订单号,serviceId,单价,用户姓名,用户性别,用户年龄) values(@toUserId,@localUserId,now(),0,@orderTxt,@OutTradeNo,@serviceId,@money,@userName,@userSex,@userAge)";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@serviceId", serviceId);
                cmd.Parameters.AddWithValue("@localUserId", localUserId);
                cmd.Parameters.AddWithValue("@toUserId", toUserId);
                cmd.Parameters.AddWithValue("@OutTradeNo", OutTradeNo);
                cmd.Parameters.AddWithValue("@orderTxt", orderTxt);//订单留言
                cmd.Parameters.AddWithValue("@money", money);
                cmd.Parameters.AddWithValue("@userName", userName);
                cmd.Parameters.AddWithValue("@userAge", userAge);
                cmd.Parameters.AddWithValue("@userSex", userSex);


                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();

                int i = 0;
                // ArrayList LetterList = new ArrayList();
                i = cmd.ExecuteNonQuery();
                if (con.State == System.Data.ConnectionState.Open)
                {


                }
                con.Close();

                if (i > 0)
                    return true;
                else
                    return false;
            }
            public static string notify_url(string out_trade_no, decimal total_amount, string seller_id, string app_id, string trade_status)
            {
                ////第一步 判断订单号与应付款金额
                //if(根据订单查询要付款金额(out_trade_no)== total_amount)
                //{

                //}
                //else
                //{

                //}


                return "";
            }
            public static string pay(string title, string txt, decimal money, string OutTradeNo, string serviceId)
            {
                //txt 商品描述信息
                //title 商品标题
                //money 支付金额 必须从数据库取值
                //OutTradeNo 订单号
                //serviceId 服务id


                string APPID = "2017071307744801";//2017071307744801
                string APP_PRIVATE_KEY = "MIIEowIBAAKCAQEAxxqW2ymVRHrDVDmWbYEdlhasv81NMhaIMQgrFa/5BNFw0nhjQTi7tZ51lBjkm+sq32vDLIi9V3sP9GJb0bDigvg7FBUIBhY2Mf5KPFA/BMDOmZJa2dQlEv5yIslwtmEOxDRjhLTOCQVMTNuqVEzFfSAHFi0+gEv0VCPgVA8Vjva0goFscu59D+rE6f6hSNh9c2rldJqHo4byvblCLNUp7rxQWsbH1AzUOniiDrjX4x061fyAryTlurmo+0t/etQ0z4UD4ldOsqL57+9EWdjFtVexSlO7Mv46259OTtR9kfiGF0OJVSw52Ip5UwqLM90dtg5gWwdJaYpLZ6kbIl2CBQIDAQABAoIBAHxHsJqk3jOcnYhZWfiIe7tP9AzVTbZSMjjI7HvhGANV6KK32ty/WQwJGUOUNj7NEDndvjpyMB4HBvJ44u+FBh7Sa64hYpzKCJI0NIppXKzO3ScnH+aQcYPlp8DnFKAC/YCjYutXILSoxfPDuhJcyXlNIJ9LJpRW1PAgZMqTj9VoN3ITzkqn/ZD9gMbKl1zlf4L1hrHC/uXd9BNbLgHwT3Gr3LDq5SYhUgDijmK3RvkHtBm/VwBmuXY9hbD4G037bJB/PFkf3kfehr6z7HuhknRgHA78waiucHuQDnhK++TQ9mX6+zdr2alW8Nmd9InhG3ee5TqRR7h+GLYK2aJk2AECgYEA4vO3CEV4sHoFs881ilxMMr548rpV5kKpUNEQUxJEXjbssnmgHg0FW/lUGaCT87FQDP4OL7Ajeh8+kBHPiSeSYCKtMFTP8QVAt3nrPJL3fbKTXacwDL5+UvRIYLAPkmNMbeet7pZhV4LtRgXC3ISIt+/tgCcWAv/3GF7ihXUnM4UCgYEA4JZnqeaUtkaszzGxi9NcVBDa9WkUVwdSXlsBMAERmcRoBTsXwaBW8d69QaHmQFWnv96rAFIACCzSW8gH0COBJS2IXscAGREa+k/M8MaERnJXr6J7w6Xi/9i3tp+JPeN4ryJVfZffupOWx0+wxv3k5cgqjspXvacXfBnmc8AyHIECgYEAsZ1/D1AfZi35LIHsKv6U+9mpmn1OIMjm7cLQfdL8AqgFkqAxOZODMDnvIadUYxHPzns96wB0o2y0b9ggjfyUR/ybggm+O6iav30BJwT2AD+zqUXhCvhCsPVRd6oSZcSk2hbJPsIeKHjk7ToxCJgIz7tMKlFsnqhoX4BS05OePGkCgYBcRo/bJ+ksJ0ezbbiEOdhyleZQ9Natl02JhRysy5OeuSsAEzKElMuEXz8la06+WjMtS2C5JffrY/ceTMahByV10Ap63oq0welytT0AJKCOjUZn3Hu7fDoTYsjA2TW7Xu3kD1hO3QrIjwFhbOW2LPVST/bkalC4lKG6lK2yG2K7gQKBgDdZ8T2pcS0oC3QklmqKJnFm38/ugMuT1k1x2V0juuX1Bawlh+iiJgDKAAnhx8uiBE99iTq7l+zD8PQ5jz72RQUDlaZM5AE209SFpknZDXIuF801qlFlWkc30L559Pf+GrbA51+D9KWYHEBokCyFJ6Mw1BlF2/SXiZfXtNj9sLp2";   //开发者应用私钥，由开发者自己生成
                string ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApEdd7cyctmuuuiXrerHQTt6Qng0swOgP7+BzZxik3cHdEYvDmApFkTs95/HYuvOdM2rIFKJJ1jV/6ZnLO6PqReHbczQ/zwlJh7ytxNA63Uy9+eELTdxRhF7d3ZbljBO/jzwkIFLoGjDU/VVmw5BSi4RVrfvR4l6B1bJ9yFlKu7W3YfjJ0W+D5vntvo7KlUCIaZ13OsC71Fwy/4HcMkUQy4aUIr21tCb+o8gLVKuBFAN1kO2SIwscJmVlSgzJshO+nL2dpOUNQcYfJqLmxJBMo92EjAYqwxP+1th06k4n/W5jSS1mM5AMXevWKzzvGCt7gflk9dmPyT9STHJocQa75wIDAQAB"; //支付宝公钥
                string CHARSET = "UTF-8";//请求和签名使用的字符编码格式，支持GBK和UTF-8  //https://openapi.alipay.com/gateway.do
                IAopClient client = new DefaultAopClient("https://openapi.alipay.com/gateway.do", APPID, APP_PRIVATE_KEY, "json", "1.0", "RSA2", ALIPAY_PUBLIC_KEY, CHARSET, false);
                AlipayTradeAppPayRequest request = new AlipayTradeAppPayRequest();
                AlipayTradeAppPayModel model = new AlipayTradeAppPayModel();
                model.Body = txt;//对一笔交易的具体描述信息
                model.Subject = title;//商品的标题/交易标题/订单标题/订单关键字等。
                model.TotalAmount = money.ToString();
                model.ProductCode = "QUICK_MSECURITY_PAY";//固定值
                model.OutTradeNo = OutTradeNo;//商户订单号.

                model.TimeoutExpress = "30m";//交易最晚时间 

                request.SetBizModel(model);
                request.SetNotifyUrl("http://app.xn--omsu12gtnr.com/pay.aspx");
                //这里和普通的接口调用不同，使用的是sdkExecute
                AlipayTradeAppPayResponse response = client.SdkExecute(request);
                //HttpUtility.HtmlEncode是为了输出到页面时防止被浏览器将关键参数html转义，实际打印到日志以及http传输不会有这个问题
                // HttpUtility.HtmlEncode(response.Body);
                string orderString = response.Body;
                //页面输出的response.Body就是orderString 可以直接给客户端请求，无需再做处理。


                return orderString;

            }
            /// <summary>
            /// 退款功能  
            /// </summary>
            /// <param name="money">money参数支持2位小数</param>
            /// <param name="orderid">orderid 订单号 </param>
            /// <returns></returns>
            public static string repund(decimal money, string orderid)
            {
                string APPID = "2017071307744801";//2017071307744801
                string APP_PRIVATE_KEY = "MIIEowIBAAKCAQEAxxqW2ymVRHrDVDmWbYEdlhasv81NMhaIMQgrFa/5BNFw0nhjQTi7tZ51lBjkm+sq32vDLIi9V3sP9GJb0bDigvg7FBUIBhY2Mf5KPFA/BMDOmZJa2dQlEv5yIslwtmEOxDRjhLTOCQVMTNuqVEzFfSAHFi0+gEv0VCPgVA8Vjva0goFscu59D+rE6f6hSNh9c2rldJqHo4byvblCLNUp7rxQWsbH1AzUOniiDrjX4x061fyAryTlurmo+0t/etQ0z4UD4ldOsqL57+9EWdjFtVexSlO7Mv46259OTtR9kfiGF0OJVSw52Ip5UwqLM90dtg5gWwdJaYpLZ6kbIl2CBQIDAQABAoIBAHxHsJqk3jOcnYhZWfiIe7tP9AzVTbZSMjjI7HvhGANV6KK32ty/WQwJGUOUNj7NEDndvjpyMB4HBvJ44u+FBh7Sa64hYpzKCJI0NIppXKzO3ScnH+aQcYPlp8DnFKAC/YCjYutXILSoxfPDuhJcyXlNIJ9LJpRW1PAgZMqTj9VoN3ITzkqn/ZD9gMbKl1zlf4L1hrHC/uXd9BNbLgHwT3Gr3LDq5SYhUgDijmK3RvkHtBm/VwBmuXY9hbD4G037bJB/PFkf3kfehr6z7HuhknRgHA78waiucHuQDnhK++TQ9mX6+zdr2alW8Nmd9InhG3ee5TqRR7h+GLYK2aJk2AECgYEA4vO3CEV4sHoFs881ilxMMr548rpV5kKpUNEQUxJEXjbssnmgHg0FW/lUGaCT87FQDP4OL7Ajeh8+kBHPiSeSYCKtMFTP8QVAt3nrPJL3fbKTXacwDL5+UvRIYLAPkmNMbeet7pZhV4LtRgXC3ISIt+/tgCcWAv/3GF7ihXUnM4UCgYEA4JZnqeaUtkaszzGxi9NcVBDa9WkUVwdSXlsBMAERmcRoBTsXwaBW8d69QaHmQFWnv96rAFIACCzSW8gH0COBJS2IXscAGREa+k/M8MaERnJXr6J7w6Xi/9i3tp+JPeN4ryJVfZffupOWx0+wxv3k5cgqjspXvacXfBnmc8AyHIECgYEAsZ1/D1AfZi35LIHsKv6U+9mpmn1OIMjm7cLQfdL8AqgFkqAxOZODMDnvIadUYxHPzns96wB0o2y0b9ggjfyUR/ybggm+O6iav30BJwT2AD+zqUXhCvhCsPVRd6oSZcSk2hbJPsIeKHjk7ToxCJgIz7tMKlFsnqhoX4BS05OePGkCgYBcRo/bJ+ksJ0ezbbiEOdhyleZQ9Natl02JhRysy5OeuSsAEzKElMuEXz8la06+WjMtS2C5JffrY/ceTMahByV10Ap63oq0welytT0AJKCOjUZn3Hu7fDoTYsjA2TW7Xu3kD1hO3QrIjwFhbOW2LPVST/bkalC4lKG6lK2yG2K7gQKBgDdZ8T2pcS0oC3QklmqKJnFm38/ugMuT1k1x2V0juuX1Bawlh+iiJgDKAAnhx8uiBE99iTq7l+zD8PQ5jz72RQUDlaZM5AE209SFpknZDXIuF801qlFlWkc30L559Pf+GrbA51+D9KWYHEBokCyFJ6Mw1BlF2/SXiZfXtNj9sLp2";   //开发者应用私钥，由开发者自己生成
                string ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApEdd7cyctmuuuiXrerHQTt6Qng0swOgP7+BzZxik3cHdEYvDmApFkTs95/HYuvOdM2rIFKJJ1jV/6ZnLO6PqReHbczQ/zwlJh7ytxNA63Uy9+eELTdxRhF7d3ZbljBO/jzwkIFLoGjDU/VVmw5BSi4RVrfvR4l6B1bJ9yFlKu7W3YfjJ0W+D5vntvo7KlUCIaZ13OsC71Fwy/4HcMkUQy4aUIr21tCb+o8gLVKuBFAN1kO2SIwscJmVlSgzJshO+nL2dpOUNQcYfJqLmxJBMo92EjAYqwxP+1th06k4n/W5jSS1mM5AMXevWKzzvGCt7gflk9dmPyT9STHJocQa75wIDAQAB"; //支付宝公钥
                string CHARSET = "UTF-8";//请求和签名使用的字符编码格式，支持GBK和UTF-8  //https://openapi.alipay.com/gateway.do
                IAopClient client = new DefaultAopClient("https://openapi.alipay.com/gateway.do", APPID, APP_PRIVATE_KEY, "json", "1.0", "RSA2", ALIPAY_PUBLIC_KEY, CHARSET, false);
                AlipayTradeRefundRequest request = new AlipayTradeRefundRequest();

                JSONObject obj = new JSONObject();
                obj.Add("out_trade_no", orderid);//商户订单号 
                obj.Add("refund_amount", money);//退款金额 支持2位小数
                obj.Add("refund_reason", "塔罗馆退款");//退款说明


                request.BizContent = obj.ToString();  //将请求json对象转为字符串
                request.SetNotifyUrl("http://app.xn--omsu12gtnr.com/al_refund.aspx");
                AlipayTradeRefundResponse response = client.Execute(request);
                Console.WriteLine(response.Body);
                string ret = "";
                try
                {
                    JSONObject data;
                    data = JSONObject.Parse(response.Body);

                    string isok = data["alipay_trade_refund_response"]["code"].ToString();
                    if (isok == "10000")
                    {
                        Console.WriteLine("response.Body fund_change == y");
                        ret = "Y";
                    }
                    else
                    {
                        Console.WriteLine("response.Body fund_change  != y");
                        ret = "N";
                    }
                }
                catch (Exception)
                {
                    Console.WriteLine("response.Body 解析失败");
                    throw;
                }


                return "";

            }
            public static JSONObject addBuyOrderData(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addBuyData_ret");
                string serviceId = 请求参数["serviceId"].ToString();
                string userId = 请求参数["userId"].ToString();

                string sql = "select user.CName,userservice.`服务名称`,userservice.`单价` from user,userservice where  userservice.serviceId=@serviceId and userservice.userId=user.ID ;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@serviceId", serviceId);



                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();


                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("CName", sdr["CName"].ToString());
                        ret.Add("serviceName", sdr["服务名称"].ToString());
                        ret.Add("money", sdr["单价"].ToString());


                    }

                }
                con.Close();

                ret.Add("rows", 加载优惠券(userId));

                return ret;
            }

            public static JSONObject 加载优惠券(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                string userId = 请求参数["userId"].ToString();

                ret.Add("type", "addMyCouponPage_ret");
                JArray rows = new JArray();

                string sql = "select * from 优惠券 where userid=@userid and 优惠券.是否可用=1;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);



                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                int i = 0;
                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        i++;
                        JSONObject row = new JSONObject();

                        row.Add("userid", sdr["userid"].ToString());
                        row.Add("couponName", sdr["优惠券名称"].ToString());
                        row.Add("couponText", sdr["优惠说明"].ToString());
                        row.Add("couponMoney", sdr["优惠金额"].ToString());
                        if (sdr["有效期"] != null)
                        {
                            try
                            {
                                //  row.Add("date", (Convert.ToDateTime(sdr["有效期"].ToString())));
                                row.Add("date", "无限制");
                            }
                            catch (Exception ex)
                            {
                                row.Add("date", "无限制");
                            }
                        }
                        else
                        {
                            row.Add("date", "无限制");
                        }




                        rows.Add(row);


                    }

                }
                con.Close();
                ret.Add("rows", rows);
                ret.Add("listSum", i);

                return ret;
            }
            public static JArray 加载优惠券(string userid)
            {
                JArray rows = new JArray();

                string sql = "select * from 优惠券 where userid=@userid and 优惠券.是否可用=1;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);



                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                int i = 0;
                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        i++;
                        JSONObject row = new JSONObject();

                        row.Add("userid", sdr["userid"].ToString());
                        row.Add("couponId", sdr["id"].ToString());
                        row.Add("couponName", sdr["优惠券名称"].ToString());
                        row.Add("couponText", sdr["优惠说明"].ToString());
                        row.Add("couponMoney", sdr["优惠金额"].ToString());
                        if (sdr["有效期"] != null)
                        {
                            try
                            {
                                //  row.Add("date", (Convert.ToDateTime(sdr["有效期"].ToString())));
                                row.Add("date", "无限制");
                            }
                            catch (Exception ex)
                            {
                                row.Add("date", "无限制");
                            }
                        }
                        else
                        {
                            row.Add("date", "无限制");
                        }




                        rows.Add(row);


                    }

                }
                con.Close();


                return rows;
            }
            public static decimal 根据订单查询要付款金额(string 订单号)
            {

                decimal 金额 = 0;
                string sql = "select 单价 from 订单 where 订单号=@dingdanhao;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@dingdanhao", 订单号);



                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();


                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        金额 = Convert.ToDecimal(sdr["单价"]);

                    }

                }
                con.Close();


                return 金额;
            }
            public static JSONObject 加载钱包(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                string userId = 请求参数["userId"].ToString();

                ret.Add("type", "addMywalletPage_ret");


                string sql = "select 存款 from user where id=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);



                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();


                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {


                        if (sdr["存款"] != null)
                        {
                            ret.Add("money", sdr["存款"].ToString());
                        }
                        else
                        {
                            ret.Add("money", "");
                        }

                    }

                }
                con.Close();


                return ret;
            }
        }

        public class letter
        {
            public static JSONObject 发送输入焦点事件(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();

                string userId = 请求参数["userId"].ToString();
                string toUserId = 请求参数["toUserId"].ToString();
                string state = 请求参数["state"].ToString();

                ret.Add("sendUserId", userId);
                ret.Add("touser", toUserId);
                ret.Add("state", state);
                ret.Add("type", "receiveSendFocus");
                return ret;

            }
            public static JSONObject 上传音频(JSONObject 请求参数)
            {
                JSONObject retToRemote = new JSONObject();//发送到远程的json
                                                          // 注意 userid 是发送者  touserid 是接受者
                JSONObject ret = new JSONObject();
                ret.Add("type", "upAudio_ret");
                retToRemote.Add("type", "receiveMessages");
                string base64 = 请求参数["base64"].ToString();
                string userId = 请求参数["userId"].ToString();
                string toUserId = 请求参数["toUserId"].ToString();
                string timeLength = 请求参数["timeLength"].ToString();
                string orderId = "";
                if (请求参数["orderId"] == null)
                {

                }
                else
                {
                    orderId = 请求参数["orderId"].ToString();
                }
                string touser = "";
                if (请求参数["touser"] != null)
                {
                    touser = 请求参数["touser"].ToString();
                    // ret.Add("touser", touser);
                }

                string savePeth = tool.base64转音频(base64);
                string isAudio = "1";

                string nexus = "";
                if (Convert.ToInt16(userId) < Convert.ToInt16(toUserId))
                {
                    nexus = userId + "-" + toUserId;
                }
                else
                {
                    nexus = toUserId + "-" + userId;
                }

                string sql = "INSERT consultation (userId,toUserId,date,isAudio,timeLength,audioUrl,OrderNumer,nexus) VALUES(@userId,@touserid,NOW(),@isAudio,@timeLength,@savePeth,@orderId,@nexus) ; SELECT LAST_INSERT_ID() as uuid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@touserid", toUserId);
                cmd.Parameters.AddWithValue("@savePeth", savePeth);
                cmd.Parameters.AddWithValue("@timeLength", timeLength);
                cmd.Parameters.AddWithValue("@isAudio", isAudio);
                cmd.Parameters.AddWithValue("@orderId", orderId);
                cmd.Parameters.AddWithValue("@nexus", nexus);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                string consultationId = "";

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        consultationId = sdr["uuid"].ToString();

                    }

                }
                con.Close();
                //组合发送到远程的消息

                JArray rows = new JArray();
                JSONObject rows_obj = new JSONObject();

                rows_obj.Add("userId", userId);
                rows_obj.Add("timeLength", timeLength);
                rows_obj.Add("toUserId", toUserId);
                rows_obj.Add("audioUrl", 图片服务器ip + savePeth);
                rows_obj.Add("isAudio", isAudio);
                rows_obj.Add("text", "");
                rows_obj.Add("consultationId", consultationId);
                rows_obj.Add("date", tool.日期时间处理(new DateTime()));





                rows.Add(rows_obj);

                ret.Add("rows", rows);

                retToRemote.Add("rows", rows);
                retToRemote.Add("touser", toUserId);




                JSONObject retOk = new JSONObject();
                retOk.Add("type", "upAudio_retAndreceiveMessages");
                retOk.Add("upAudio_ret", ret);
                retOk.Add("receiveMessages", retToRemote);

                设置私信是否被查看(userId, toUserId, 0); //设置为有新数据没有查看

                return retOk;


            }
            public static JSONObject 设置关注(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "ret_setUpFollow");
                string userId = 请求参数["userId"].ToString();
                string toUserId = 请求参数["toUserId"].ToString();
                string setType = 请求参数["setType"].ToString();

                if (userId == toUserId)
                {
                    ret.Add("error", "userId==toUserId");
                    return ret;
                }
                string sql = "";
                if (setType == "cancel")
                {
                    //取消关注
                    sql = "delete from userfollow where userid=@userid and followid=@touserid;";
                }
                else
                {
                    //关注
                    sql = "INSERT userfollow (userid,followid)  values(@userid,@touserid);";
                }
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@touserid", toUserId);


                cmd.CommandText = sql;

                cmd.Connection = con;
                con.Open();
                int i = cmd.ExecuteNonQuery();

                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {


                }
                con.Close();
                ret.Add("count", i);
                return ret;
            }
            public static bool 判断是否关注(string userId, string toUserId)
            {
                bool a = false;

                if (userId == "" || toUserId == "")
                {
                    return false;
                }

                string sql = "select  * from userfollow where userid=@userId and followid=@touserid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@touserid", toUserId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();


                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        a = true;

                    }

                }
                con.Close();

                return a;
            }
            public static JSONObject 查询用户是否存在没有被查看的记录(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                string userId = 请求参数["userId"].ToString();
                ret.Add("type", "addLetterIsShow_ret");
                Boolean c = 查询用户是否存在没有被查看的记录(userId);
                if (c)
                {
                    ret.Add("isShow", "1");
                }
                else
                {
                    ret.Add("isShow", "0");
                }




                return ret;
            }

            public static bool 查询用户是否存在没有被查看的记录(string sendUserId)
            {
                bool a = false;

                string sql = "SELECT count(*) as isRedSum FROM  isredletter WHERE isredletter.sendUserId =@sendUserId and isredletter.isRed=0;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@sendUserId", sendUserId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();


                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        if (Convert.ToInt16(sdr["isRedSum"]) == 0)
                        {
                            //都看过了
                            a = false;
                        }
                        else
                        {
                            //存在没查看的
                            a = true;
                        }

                    }

                }
                con.Close();

                return a;
            }
            public static bool 查询私信对话是否被查看(string sendUserId, string getUserId)
            {
                bool a = true;
                string nexus = sendUserId + "-" + getUserId;
                string sql = "SELECT isredletter.isRed FROM  isredletter WHERE isredletter.nexus=@nexus;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@sendUserId", sendUserId);
                cmd.Parameters.AddWithValue("@getUserId", getUserId);
                cmd.Parameters.AddWithValue("@nexus", nexus);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();


                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        if (Convert.ToInt16(sdr["isRed"]) == 0)
                        {
                            //没有查看
                            a = false;
                        }
                        else
                        {
                            a = true;
                        }

                    }

                }
                con.Close();

                return a;
            }
            //public static JSONObject 分页加载私信对话内容(JSONObject 请求参数)
            //{
            //    JSONObject ret = new JSONObject();
            //    ret.Add("type", "addMyLetterData_ret");
            //    JArray rows = new JArray();
            //    string userId = "";
            //    string deviceId = "";
            //    int isLogin = Convert.ToInt16(请求参数["isLogin"]);
            //    string toUserId = 请求参数["toUserId"].ToString();
            //    string nexus = "";
            //    string sql = "";
            //    bool isObj;
            //    isObj =  service.is存在服务(toUserId);
            //    if (isLogin == 1)
            //    {
            //        //已经登录
            //        userId = 请求参数["userId"].ToString();


            //        if (Convert.ToInt16(userId) < Convert.ToInt16(toUserId))
            //        {
            //            nexus = userId + "-" + toUserId;
            //        }
            //        else
            //        {
            //            nexus = toUserId + "-" + userId;
            //        }


            //        sql = "select * from  (select 私信.letter,私信.date,私信.userid,user.UserImgUrl from 私信 inner join  user  on user.id=私信.userid where 私信.nexus=@nexus   order by date desc   LIMIT 0,10) as a order by date ;";

            //        if (isObj)
            //        {
            //            ret.Add("isObj", "1");
            //        }
            //        else
            //        {
            //            ret.Add("isObj", "0");
            //        }
            //    }
            //    else
            //    {
            //        //没有登录
            //        deviceId = 请求参数["deviceId"].ToString();
            //        sql = "select  * from   (select 私信.letter,私信.date,私信.userid from 私信 where 私信.deviceId=@deviceId and 私信.touserid=@touserid   or 私信.deviceId=@deviceId and 私信.userid=@touserid   order by date desc   LIMIT 0,10) as a order by date ;";
            //        if (isObj)
            //        {
            //            ret.Add("isObj", "1");
            //        }
            //        else
            //        {
            //            ret.Add("isObj", "0");
            //        }
            //    }



            //    int startPage = Convert.ToInt16(请求参数["startPage"]) * 10;//记住 传页数要从第0页开始
            //                                                            //string sum = "10";

            //    MySqlConnection con = new MySqlConnection();
            //    con.ConnectionString = 连接字符串;
            //    MySqlCommand cmd = new MySqlCommand();

            //    cmd.Parameters.AddWithValue("@userid", userId);
            //    cmd.Parameters.AddWithValue("@touserid", toUserId);
            //    cmd.Parameters.AddWithValue("@deviceId", deviceId);
            //    cmd.Parameters.AddWithValue("@nexus", nexus);

            //    cmd.CommandText = sql;
            //    MySqlDataReader sdr = null;
            //    cmd.Connection = con;
            //    con.Open();

            //    int i = 0;
            //    ArrayList LetterList = new ArrayList();

            //    if (con.State == System.Data.ConnectionState.Open)
            //    {
            //        sdr = cmd.ExecuteReader();
            //        while (sdr.Read())
            //        {
            //            JSONObject row = new JSONObject();

            //            row.Add("userid", sdr["userid"].ToString());
            //            // row.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
            //            if (isLogin == 1)
            //            {
            //                row.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
            //            }
            //            row.Add("letter", sdr["letter"].ToString());
            //            row.Add("date", tool.日期时间处理(Convert.ToDateTime(sdr["date"].ToString())));
            //            LetterList.Add(sdr["userid"].ToString());

            //            if (i == 0)
            //            {
            //                ret.Add("DateMin", tool.日期时间处理(Convert.ToDateTime(sdr["date"].ToString())));
            //                i++;
            //            }

            //            rows.Add(row);


            //        }

            //    }
            //    con.Close();
            //    ret.Add("leList", string.Join(",", (string[])LetterList.ToArray(typeof(string))));
            //    ret.Add("rows", rows);

            //    设置私信是否被查看(toUserId, userId, 1); //设为以查看
            //    return ret;
            //}
            //public static JSONObject 分页加载私信对话内容(int startPage, int sum, string sendUserId, string toUserId)
            //{
            //    JSONObject ret = new JSONObject();
            //    ret.Add("type", "addMyLetterData_ret");
            //    JArray rows = new JArray();

            //    string nexus = "";
            //    if (Convert.ToInt16(sendUserId) < Convert.ToInt16(toUserId))
            //    {
            //        nexus = sendUserId + "-" + toUserId;
            //    }
            //    else
            //    {
            //        nexus = toUserId + "-" + sendUserId;
            //    }

            //    string sql = " select  私信.letter,私信.date,私信.userid,user.UserImgUrl from 私信  inner join   user on 私信.userid=user.id where 私信.nexus=@nexus order by date desc limit 1;";
            //    MySqlConnection con = new MySqlConnection();
            //    con.ConnectionString = 连接字符串;
            //    MySqlCommand cmd = new MySqlCommand();

            //    cmd.Parameters.AddWithValue("@userid", sendUserId);
            //    cmd.Parameters.AddWithValue("@touserid", toUserId);
            //    cmd.Parameters.AddWithValue("@nexus", nexus);
            //    //cmd.Parameters.AddWithValue("@startPage", startPage);
            //    //cmd.Parameters.AddWithValue("@sum", sum);


            //    cmd.CommandText = sql;
            //    MySqlDataReader sdr = null;
            //    cmd.Connection = con;
            //    con.Open();



            //    ArrayList LetterList = new ArrayList();

            //    if (con.State == System.Data.ConnectionState.Open)
            //    {
            //        sdr = cmd.ExecuteReader();
            //        while (sdr.Read())
            //        {
            //            JSONObject row = new JSONObject();

            //            row.Add("userid", sdr["userid"].ToString());
            //            row.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
            //            row.Add("letter", sdr["letter"].ToString());
            //            row.Add("date", tool.日期时间处理(Convert.ToDateTime(sdr["date"].ToString())));
            //            LetterList.Add(sdr["userid"].ToString());


            //            rows.Add(row);


            //        }

            //    }
            //    con.Close();
            //    ret.Add("leList", string.Join(",", (string[])LetterList.ToArray(typeof(string))));
            //    ret.Add("rows", rows);


            //    设置私信是否被查看(sendUserId, toUserId, 1); //设为以查看
            //    return ret;
            //}
            public static JSONObject 分页加载咨询对话内容(JSONObject 请求参数, string more = "")
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addConsultTime_ret");
                JArray rows = new JArray();
                string userId = 请求参数["userId"].ToString();
                string toUserId = 请求参数["toUserId"].ToString();
                //string orderId = 请求参数["orderId"].ToString();
                string nexus = "";
                if (Convert.ToInt16(userId) < Convert.ToInt16(toUserId))
                {

                    nexus = userId + "-" + toUserId;
                }
                else
                {
                    nexus = toUserId + "-" + userId;
                }
                int startPage = Convert.ToInt16(请求参数["startPage"]) + 10;
                ret.Add("startPage", startPage);

                //DateTime readdMaxDate ;
                //if(请求参数["addMaxDate"]!=null){
                //    readdMaxDate = Convert.ToDateTime(请求参数["addMaxDate"]);
                //}
                ////判断最后更新日期 是否继续查询
                //DateTime maxdate = Convert.ToDateTime(tool.获取最后一条对话的日期(orderId));
                //if(maxdate > readdMaxDate){

                //}

                //注意 ！  比较id就可以 不需要比较日期大小

                string addMaxDate = "";
                string sql = @"select  a.consultationId,a.audioUrl,a.isAudio,a.text,a.userId,a.toUserId,a.timeLength,
        a.date,a.isImg,a.imgUrl,a.isTxt from
          (select consultation.consultationId, consultation.audioUrl, consultation.isAudio, consultation.text, consultation.userId, consultation.toUserId, consultation.timeLength, consultation.date, consultation.isImg, consultation.imgUrl, consultation.isTxt  from
                      consultation where consultation.nexus = @nexus  order by date desc LIMIT 0,10 ) as a order by a.date asc; ; ";

                string PageTo = "";

                if (请求参数["PageTo"] != null)
                {
                    PageTo = 请求参数["PageTo"].ToString();

                    if (PageTo == "top")
                    {
                        ret.Add("PageTo", PageTo);
                        //向上加载  加载以前的历史数据
                        sql = @"select  a.consultationId,a.audioUrl,a.isAudio,a.text,a.userId,a.toUserId,a.timeLength,
        a.date,a.isImg,a.imgUrl,a.isTxt from
          (select consultation.consultationId, consultation.audioUrl, consultation.isAudio, consultation.text, consultation.userId, consultation.toUserId, consultation.timeLength, consultation.date, consultation.isImg, consultation.imgUrl, consultation.isTxt  from
                      consultation where consultation.nexus = @nexus  order by date desc LIMIT @startPage,10) as a order by a.date asc;
                            ";
                    }
                    else
                    {
                        //向下加载
                        ret.Add("PageTo", PageTo);
                    }


                }

                if (more != "")
                {
                    //一次加载全部
                    sql = @"select  a.consultationId,a.audioUrl,a.isAudio,a.text,a.userId,a.toUserId,a.timeLength,
        a.date,a.isImg,a.imgUrl,a.isTxt from
          (select consultation.consultationId, consultation.audioUrl, consultation.isAudio, consultation.text, consultation.userId, consultation.toUserId, consultation.timeLength, consultation.date, consultation.isImg, consultation.imgUrl, consultation.isTxt  from
                      consultation where consultation.nexus = @nexus  order by date desc  ) as a order by a.date asc;  ";
                    ret["type"] = "addConsultTimeMore_ret";
                }



                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                //cmd.Parameters.AddWithValue("@orderId", orderId);
                cmd.Parameters.AddWithValue("@startPage", startPage);
                cmd.Parameters.AddWithValue("@nexus", nexus);
                // cmd.Parameters.AddWithValue("@touserid", toUserId);



                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                int i = 0;
                int count = 0;
                ArrayList LetterList = new ArrayList();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();

                        row.Add("userId", sdr["userid"].ToString());
                        row.Add("timeLength", sdr["timeLength"].ToString());
                        row.Add("toUserId", sdr["toUserId"].ToString());
                        row.Add("audioUrl", 图片服务器ip + sdr["audioUrl"].ToString());
                        row.Add("isAudio", sdr["isAudio"].ToString());
                        //row.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
                        row.Add("text", sdr["text"].ToString());
                        row.Add("consultationId", sdr["consultationId"].ToString());
                        //row.Add("date", tool.日期时间处理(Convert.ToDateTime(sdr["date"].ToString())));
                        row.Add("date", sdr["date"].ToString());
                        LetterList.Add(sdr["userid"].ToString());
                        row.Add("isImg", sdr["isImg"].ToString());
                        row.Add("isTxt", sdr["isTxt"].ToString());
                        row.Add("imgUrl", 图片服务器ip + sdr["imgUrl"].ToString());
                        if (row["isImg"].ToString() == "1")
                        {
                            //是图片
                            row["isAudio"] = "";

                            row["audioUrl"] = "";

                            row["timeLength"] = "";
                        }

                        if (i == 0)
                        {
                            ret.Add("DateMin", tool.日期时间处理(Convert.ToDateTime(sdr["date"].ToString())));
                            i++;
                        }

                        addMaxDate = sdr["date"].ToString();
                        rows.Add(row);
                        count++;

                    }

                }
                con.Close();
                ret.Add("leList", string.Join(",", (string[])LetterList.ToArray(typeof(string))));
                ret.Add("userImgUrl", personalData.查询用户头像(toUserId));
                ret.Add("tousercname", personalData.查找用户昵称(toUserId));
                ret.Add("addMaxDate", addMaxDate);
                ret.Add("count", count);
                ret.Add("rows", rows);



                设置私信是否被查看(toUserId, userId, 1); //设为以查看
                return ret;
            }

            public static void 设置私信是否被查看(string sendUserId, string getUserId, int isRed)
            {


                string nexus = sendUserId + "-" + getUserId; //发送者一定在左边 !
                string sql = "SELECT count(*) as sum FROM  isredletter WHERE isredletter.nexus=@nexus;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@sendUserId", sendUserId);
                cmd.Parameters.AddWithValue("@getUserId", getUserId);
                cmd.Parameters.AddWithValue("@isRed", isRed);
                cmd.Parameters.AddWithValue("@nexus", nexus);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                int a = 0;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {

                        a = Convert.ToInt16(sdr["sum"]);

                    }

                }
                con.Close();

                if (a != 0)
                {
                    //已经存在记录，进行更新
                    更新私信被查看(isRed, sendUserId, getUserId);
                }

                else
                {
                    写入私信被查看(sendUserId, getUserId, isRed, nexus);
                }


            }
            public static void 写入私信被查看(string sendUserId, string getUserId, int isRed, string nexus)
            {


                //nexus 发送者一定在左边 !
                string sql = "INSERT  INTO isredletter(isredletter.sendUserId,isredletter.getUserId,isredletter.nexus,isredletter.isRed) values(@sendUserId,@getUserId,@nexus,@isRed)";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@sendUserId", sendUserId);
                cmd.Parameters.AddWithValue("@getUserId", getUserId);
                cmd.Parameters.AddWithValue("@isRed", isRed);
                cmd.Parameters.AddWithValue("@nexus", nexus);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();


                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();


                }
                con.Close();


            }
            public static void 更新私信被查看(int isRed, string sendUserId, string getUserId)
            {


                //nexus 发送者一定在左边 !
                string nexus = sendUserId + "-" + getUserId;

                string sql = "UPDATE  isredletter SET isredletter.isRed=@isRed WHERE isredletter.nexus=@nexus;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();


                cmd.Parameters.AddWithValue("@isRed", isRed);
                cmd.Parameters.AddWithValue("@nexus", nexus);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();


                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();


                }
                con.Close();


            }

            //public static JSONObject 发送私信(JSONObject 请求参数)
            //{
            //    JSONObject ret = new JSONObject();



            //    string sendUserId = "";
            //    string toUserid = 请求参数["toUserid"].ToString();
            //    if (请求参数["sendUserId"] != null)
            //    {
            //        sendUserId = 请求参数["sendUserId"].ToString();
            //    }
            //    string sendTxt = 请求参数["sendTxt"].ToString();
            //    string touser = 请求参数["touser"].ToString();
            //    int isLogin = Convert.ToInt16(请求参数["isLogin"]);
            //    string deviceId = "";
            //    string sql = "";
            //    bool isObj;
            //    isObj =  service.is存在服务(toUserid);
            //    string nexus = "";
            //    if (isLogin == 0)
            //    {
            //        //用户没有登录
            //        deviceId = 请求参数["deviceId"].ToString();
            //        sql = "insert  into 私信 (deviceId,touserid,letter,date)  values(@deviceId,@touserid,@sendTxt,NOW());";
            //        if (isObj)
            //        {
            //            ret.Add("isObj", "1");
            //        }
            //        else
            //        {
            //            ret.Add("isObj", "0");
            //        }
            //    }
            //    else
            //    {
            //        //用户已经登录

            //        if (Convert.ToInt16(toUserid) < Convert.ToInt16(sendUserId))
            //        {
            //            nexus = toUserid + "-" + sendUserId;
            //        }
            //        else
            //        {
            //            nexus = sendUserId + "-" + toUserid;
            //        }
            //        sql = "insert  into 私信 (userid,touserid,letter,date,nexus)  values(@userid,@touserid,@sendTxt,NOW(),@nexus);";
            //        if (isObj)
            //        {

            //            ret.Add("isObj", "1");

            //        }
            //        else
            //        {
            //            ret.Add("isObj", "0");
            //        }
            //    }


            //    ret.Add("touser", touser);
            //    int insertUum = 0;
            //    MySqlConnection con = new MySqlConnection();
            //    con.ConnectionString = 连接字符串;
            //    MySqlCommand cmd = new MySqlCommand();

            //    cmd.Parameters.AddWithValue("@userid", sendUserId);
            //    cmd.Parameters.AddWithValue("@touserid", toUserid);
            //    cmd.Parameters.AddWithValue("@sendTxt", sendTxt);
            //    cmd.Parameters.AddWithValue("@deviceId", deviceId);
            //    cmd.Parameters.AddWithValue("@nexus", nexus);


            //    cmd.CommandText = sql;

            //    cmd.Connection = con;
            //    con.Open();

            //    insertUum = cmd.ExecuteNonQuery();

            //    con.Close();

            //    //ret.Add("rows");

            //    JArray rows = new JArray();
            //    JSONObject row = new JSONObject();
            //    row.Add("letter", sendTxt);
            //    row.Add("date", DateTime.Now.ToString());
            //    row.Add("UserImgUrl", "");
            //    row.Add("userid", sendUserId);

            //    rows.Add(row);
            //    ret.Add("rows", rows);

            //    ret.Add("insertUum", insertUum.ToString());
            //    //ret.Add("rows", 分页加载私信对话内容(0, 50, sendUserId, toUserid)["rows"]);
            //    // ret = new JSONObject(分页加载私信对话内容(0, 50, sendUserId, toUserid));
            //    ret["type"] = "sendLetterData_ret";

            //    设置私信是否被查看(toUserid, sendUserId, 0); //设置为有新数据没有查看

            //    return ret;
            //}

            public static JSONObject 发送咨询对话文本(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                //ret.Add("type", "sendLetterData_ret");

                ret["type"] = "receiveMessages";

                string sendUserId = 请求参数["sendUserId"].ToString();



                string toUserid = 请求参数["toUserid"].ToString();
                string sendTxt = 请求参数["sendTxt"].ToString();

                string touser = 请求参数["touser"].ToString();
                string orderId = "";
                if (请求参数["orderId"] == null)
                {

                }
                else
                {
                    orderId = 请求参数["orderId"].ToString();
                }
                JArray rows = new JArray();

                JSONObject row = new JSONObject();

                ret.Add("touser", touser);
                int insertUum = 0;

                string nexus = "";
                if (Convert.ToInt16(toUserid) < Convert.ToInt16(sendUserId))
                {
                    nexus = toUserid + "-" + sendUserId;
                }
                else
                {
                    nexus = sendUserId + "-" + toUserid;
                }
                string sql = "INSERT consultation (date,text,userId,toUserId,isTxt,OrderNumer,nexus) VALUES(NOW(),@sendTxt,@userid,@touserid,1,@orderId,@nexus); SELECT LAST_INSERT_ID() as uuid;";

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", sendUserId);
                cmd.Parameters.AddWithValue("@touserid", toUserid);
                cmd.Parameters.AddWithValue("@sendTxt", sendTxt);
                cmd.Parameters.AddWithValue("@orderId", orderId);
                cmd.Parameters.AddWithValue("@nexus", nexus);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        row.Add("consultationId", sdr["uuid"].ToString());


                    }

                }

                con.Close();

                //ret.Add("rows");



                row.Add("userId", sendUserId);
                row.Add("toUserId", toUserid);
                // row.Add("isAudio", "0");
                row.Add("isTxt", "1");
                row.Add("text", sendTxt);
                rows.Add(row);

                ret.Add("insertUum", insertUum.ToString());

                ret.Add("rows", rows);

                设置私信是否被查看(sendUserId, toUserid, 0); //设置为有新数据没有查看

                return ret;
            }

            public static JSONObject 发送咨询对话图片(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                //ret.Add("type", "sendLetterData_ret");

                ret["type"] = "receiveMessages";

                string sendUserId = 请求参数["userid"].ToString();
                string orderId = "";
                if (请求参数["orderId"] == null)
                {

                }
                else
                {
                    orderId = 请求参数["orderId"].ToString();
                }


                string toUserid = 请求参数["toUserId"].ToString();
                string imgBase64 = 请求参数["userImgUri"].ToString();
                string imgSaveUrl = tool.base64ChangeImgSave(imgBase64);
                string touser = toUserid;

                JArray rows = new JArray();

                JSONObject row = new JSONObject();

                ret.Add("touser", touser);
                string nexus = "";
                if (Convert.ToInt16(toUserid) < Convert.ToInt16(sendUserId))
                {
                    nexus = toUserid + "-" + sendUserId;
                }
                else
                {
                    nexus = sendUserId + "-" + toUserid;
                }

                string sql = "INSERT consultation (date,imgUrl,userId,toUserId,isImg,OrderNumer,nexus) VALUES(NOW(),@imgSaveUrl,@userid,@touserid,1,@orderId,@nexus); SELECT LAST_INSERT_ID() as uuid;";

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", sendUserId);
                cmd.Parameters.AddWithValue("@touserid", toUserid);
                cmd.Parameters.AddWithValue("@imgSaveUrl", imgSaveUrl);
                cmd.Parameters.AddWithValue("@orderId", orderId);
                cmd.Parameters.AddWithValue("@nexus", nexus);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        row.Add("consultationId", sdr["uuid"].ToString());


                    }

                }

                con.Close();

                //ret.Add("rows");



                row.Add("userId", sendUserId);
                row.Add("toUserId", toUserid);
                row.Add("isImg", "1");
                row.Add("date", tool.日期时间处理(new DateTime().ToLocalTime()));
                row.Add("imgUrl", 图片服务器ip + imgSaveUrl);
                rows.Add(row);

                设置私信是否被查看(sendUserId, toUserid, 0); //设置为有新数据没有查看

                ret.Add("rows", rows);
                return ret;
            }

            public static JSONObject 加载我的咨询列表(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addContactIng_ret");
                JArray rows = new JArray();
                string userId = 请求参数["userId"].ToString();
                string page = 请求参数["page"] == null ? "0" : 请求参数["page"].ToString();
                string sql = @"SELECT consultation.userId,consultation.toUserId,consultation.nexus,consultation.OrderNumer,consultation.date FROM consultation
        WHERE  consultation.toUserId=@userId
          GROUP BY consultation.userId ORDER BY consultation.date DESC limit @page,10";
                ret.Add("page", page);

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@page", (Convert.ToInt16(page) - 1) * 10);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();
                        //row.Add("isRed", sdr["isRed"].ToString());
                        //row.Add("letter", sdr["letter"].ToString());
                        ////   row.Add("letter", 查询发送的随后一封信(sdr["userid"].ToString(), userId));
                        //row.Add("CName", sdr["CName"].ToString());
                        //row.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
                        //row.Add("userid", sdr["userid"].ToString());

                        //row.Add("date", tool.日期时间处理(Convert.ToDateTime(sdr["date"].ToString())));

                        string userid_ = sdr["userId"].ToString();
                        string toUserId_ = sdr["toUserId"].ToString();
                        if (Convert.ToInt16(userid_) == Convert.ToInt16(userId))
                        {
                            //目前登录用户为发送方 获取接收方头像昵称
                            row.Add("UserImgUrl", personalData.查询用户头像(toUserId_));
                            row.Add("CName", personalData.查找用户昵称(toUserId_));
                            row.Add("letter", 查询发送的随后一封信(toUserId_, userid_));
                            row.Add("userid", toUserId_);
                            // row.Add("orderId", sdr["OrderNumer"].ToString());
                            row.Add("date", tool.日期时间处理(Convert.ToDateTime(sdr["date"].ToString())));
                            //
                            // row.Add("isRed", 查询私信对话是否被查看(userid_, toUserId_ ) == false ? "0":"1");
                        }
                        else
                        {
                            //目前登录用户为接受方
                            row.Add("UserImgUrl", personalData.查询用户头像(userid_));
                            row.Add("CName", personalData.查找用户昵称(userid_));
                            row.Add("letter", 查询发送的随后一封信(userid_, toUserId_));
                            row.Add("userid", userid_);

                            //   row.Add("orderId", sdr["OrderNumer"].ToString());
                            row.Add("date", tool.日期时间处理(Convert.ToDateTime(sdr["date"].ToString())));

                            //  row.Add("isRed", 查询私信对话是否被查看(userid_, toUserId_) == false ? "0" : "1");

                        }
                        row.Add("isRed", 查询私信对话是否被查看(userid_, toUserId_) == false ? "0" : "1");
                        rows.Add(row);


                    }

                }
                con.Close();

                ret.Add("rows", rows);

                return ret;

            }
            //   public static JSONObject 加载我的私信列表(JSONObject 请求参数)
            //   {
            //       JSONObject ret = new JSONObject();
            //       ret.Add("type", "addLetterList_ret");
            //       JArray rows = new JArray();
            //       string userId = 请求参数["userId"].ToString();

            //       string sql = "";
            //       sql = @"select  私信.id,userid,touserid,isRed,letter,max(date) as date,user.CName,user.UserImgUrl
            //from  私信 inner join user on 私信.userid=user.id
            //where 私信.touserid=@userid
            //group by 私信.userid
            //order by 私信.date desc;";
            //       MySqlConnection con = new MySqlConnection();
            //       con.ConnectionString = 连接字符串;
            //       MySqlCommand cmd = new MySqlCommand();

            //       cmd.Parameters.AddWithValue("@userid", userId);



            //       cmd.CommandText = sql;
            //       MySqlDataReader sdr = null;
            //       cmd.Connection = con;
            //       con.Open();

            //       if (con.State == System.Data.ConnectionState.Open)
            //       {
            //           sdr = cmd.ExecuteReader();
            //           while (sdr.Read())
            //           {
            //               JSONObject row = new JSONObject();
            //               row.Add("isRed", sdr["isRed"].ToString());
            //                row.Add("letter", sdr["letter"].ToString());
            //            //   row.Add("letter", 查询发送的随后一封信(sdr["userid"].ToString(), userId));
            //               row.Add("CName", sdr["CName"].ToString());
            //               row.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());
            //               row.Add("userid", sdr["userid"].ToString());

            //               row.Add("date", tool.日期时间处理(Convert.ToDateTime(sdr["date"].ToString())));

            //               rows.Add(row);


            //           }

            //       }
            //       con.Close();

            //       ret.Add("rows", rows);

            //       return ret;

            //   }
            public static string 查询发送的随后一封信(string userid, string touserid)
            {
                string letter = "";

                string sql = "select letter from 私信 where 私信.touserid=@touserid and 私信.userid=@userid  order by 私信.date desc LIMIT 0,1;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userid);
                cmd.Parameters.AddWithValue("@touserid", touserid);




                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        letter = sdr["letter"].ToString();


                    }

                }
                con.Close();


                return letter;

            }

            public static JSONObject 加载我的关注列表(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                JArray rows = new JArray();

                ret.Add("type", "addFollowList_ret");
                string userId = 请求参数["userId"].ToString();

                string sql = "select user.id,user.UserImgUrl,user.Cname from user , userfollow where user.id=userfollow.followid and userfollow.userid=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();
                        row.Add("userid", sdr["id"].ToString());
                        row.Add("userImg", 图片服务器ip + sdr["UserImgUrl"].ToString());
                        row.Add("userName", sdr["Cname"].ToString());


                        rows.Add(row);


                    }

                }
                con.Close();
                ret.Add("rows", rows);

                return ret;
            }




        }
        public class 专题
        {

            public static JSONObject 加载专题列表(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                JArray rows = new JArray();

                ret.Add("type", "addSpeciallist_ret");
                // string specialId = 请求参数["specialId"].ToString();

                string sql = "SELECT  * from 专题 ORDER BY 专题.creat_date DESC;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                //  cmd.Parameters.AddWithValue("@specialId", specialId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();
                        row.Add("id", sdr["专题id"].ToString());
                        row.Add("title", sdr["title"].ToString());
                        row.Add("imgUrl", 图片服务器ip + sdr["imgUrl"].ToString());
                        row.Add("txt", sdr["txt"].ToString());
                        row.Add("creat_date", DateTime.Parse(sdr["creat_date"].ToString()).ToString("MM月dd日"));



                        rows.Add(row);

                    }


                }
                con.Close();

                ret.Add("rows", rows);


                return ret;
            }
            public static JSONObject 加载专题页面(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                // JArray rows = new JArray();

                ret.Add("type", "addSpecialPage_ret");
                string specialId = 请求参数["specialId"].ToString();

                string sql = "SELECT  * FROM  专题 WHERE 专题.专题id=@specialId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@specialId", specialId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        // JSONObject row = new JSONObject();
                        ret.Add("title", sdr["title"].ToString());
                        ret.Add("imgUrl", 图片服务器ip + sdr["imgUrl"].ToString());
                        ret.Add("txt", sdr["txt"].ToString());
                        ret.Add("creat_date", DateTime.Parse(sdr["creat_date"].ToString()).ToString("MM月dd日"));

                    }

                }
                con.Close();

                ret.Add("objItem", 专题.查询咨询师列表(specialId));


                return ret;
            }
            public static JArray 查询咨询师列表(string 专题Id)
            {



                //
                JArray rows = new JArray();






                int sum = 0;//统计行数

                string sql = "select  user.id, user.CName,user.UserImgUrl,userbusiness.总订单量, userbusiness.封面图片,userbusiness.咨询评分,userbusiness.咨询介绍  from ( user INNER  JOIN  userbusiness ON user.id=userbusiness.userid) INNER  join 专题咨询师  on  userbusiness.userid=专题咨询师.咨询师id  where  专题咨询师.专题id=@专题Id  and userbusiness.营业状态=1 order by userbusiness.最后接单日期 desc LIMIT 0,20;";



                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@专题Id", 专题Id);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    string userid = "";
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();


                        row.Add("ObjID", sdr["ID"].ToString());
                        userid = sdr["ID"].ToString();
                        row.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());


                        row.Add("CName", sdr["CName"].ToString());

                        //row.Add("GoodTyoe", sdr["GoodTyoe"].ToString());
                        row.Add("zongdingdanliang", sdr["总订单量"].ToString());
                        row.Add("danjia", tool.查询价格最低的服务(userid));
                        if (sdr["封面图片"] == System.DBNull.Value)
                        {

                            row.Add("fnengmianurl", "");
                        }
                        else
                        {
                            row.Add("fnengmianurl", 图片服务器ip + sdr["封面图片"].ToString().Trim());

                        }

                        Double zixunpingfen = Convert.ToDouble(sdr["咨询评分"]);
                        zixunpingfen = zixunpingfen * 100;
                        row.Add("zixunpingfen", Math.Floor(zixunpingfen));
                        row.Add("zixunjieshao", sdr["咨询介绍"].ToString());
                        if (tool.判断用户是否在线(userid))
                        {
                            row.Add("isLine", "1");
                        }
                        else
                        {
                            row.Add("isLine", "0");
                        }



                        rows.Add(row);
                        sum++;
                    }

                }
                con.Close();

                return rows;
            }
        }
        public class transaction
        {
            //交易
            public static string select_orderId_To_serviceId(string orderId)
            {
                string serviceId = "";

                string sql = @"SELECT  serviceId FROM 订单 WHERE  订单.订单号='" + orderId + "';";



                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        serviceId = sdr["serviceId"].ToString();

                    }

                }
                con.Close();

                return serviceId;
            }
            public static bool executeTransaction(List<string> strSQL)
            {


                MySqlConnection conn = new MySqlConnection();
                conn.ConnectionString = 连接字符串;


                conn.Open();
                MySqlTransaction transaction = conn.BeginTransaction();
                MySqlCommand cmd = new MySqlCommand();
                cmd.Connection = conn;
                cmd.Transaction = transaction;
                try
                {
                    for (int n = 0; n < strSQL.Count; n++)
                    {
                        string strsql = strSQL[n];
                        if (strsql.Trim().Length > 1)
                        {
                            cmd.CommandText = strsql;
                            cmd.ExecuteNonQuery();
                        }
                    }
                    cmd.ExecuteNonQuery();
                    transaction.Commit();
                    conn.Close();

                    return true;
                }
                catch
                {
                    transaction.Rollback();
                    conn.Close();
                    return false;
                }




            }
            public static void 处理超时订单()
            {
                //1、查找出超时订单ID列表 

                string sql = @"SELECT 订单.订单号,订单.咨询师id from 订单 WHERE  订单.订单状态 =1  AND  (DATE_ADD(订单.付款日期,INTERVAL 7 DAY))<now();";



                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        //2、遍历 改变订单状态并交换金额

                        transaction.提交评价(sdr["订单号"].ToString(), sdr["咨询师id"].ToString());

                    }

                }
                con.Close();

            }
            public static int 查询订单状态(string orderId)
            {
                //1、查找出超时订单ID列表 

                string sql = @"SELECT  订单.订单状态 FROM  订单 WHERE  订单.订单号=@orderId;";

                int orderSate = 99;

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                cmd.Parameters.AddWithValue("@orderId", orderId);
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        orderSate = Convert.ToInt16(sdr["订单状态"]);

                    }

                }
                con.Close();

                return orderSate;

            }
            public static JSONObject 提交评价(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "submitEvaluate_ret");
                string userId = 请求参数["userId"].ToString();
                string orderId = 请求参数["orderId"].ToString();
                string saturation_taidu = 请求参数["saturation_taidu"].ToString();
                string saturation_zhiliang = 请求参数["saturation_zhiliang"].ToString();
                string saturation_sudu = 请求参数["saturation_sudu"].ToString();
                string evaluateText = 请求参数["evaluateText"].ToString();
                string serviceId = Program.transaction.select_orderId_To_serviceId(orderId);
                JSONObject stra = tool.select_服务名和咨询师ID(orderId);
                string objUserId = stra["objUserId"].ToString();
                string serviceName = stra["serviceName"].ToString();

                //处理印象标签变量
                if (请求参数["selectbadgeEd_item"] != null && 请求参数["selectbadgeEd_item"].ToString() != "")
                {

                    string[] a = 请求参数["selectbadgeEd_item"].ToString().Split(',');
                    if (a.Length > 0)
                    {
                        //更新印象标签
                        for (int i = 0; i < a.Length; i++)
                        {
                            personalData.更新印象标签(a[i]);
                        }

                    }
                }
                if (请求参数["addbadgeEd_txt"] != null && 请求参数["addbadgeEd_txt"].ToString() != "")
                {
                    if (personalData.查询咨询师标签是否重复(objUserId, 请求参数["addbadgeEd_txt"].ToString().Trim()))
                    {

                        //不重复 添加
                        personalData.写入咨询师印象标签(objUserId, 请求参数["addbadgeEd_txt"].ToString());
                    }
                    else
                    {
                        //重复不添加
                    }
                }
                //处理印象标签变量 结束


                bool isTransactionOk = false;


                MySqlConnection conn = new MySqlConnection();
                conn.ConnectionString = 连接字符串;




                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@orderId", orderId);
                cmd.Parameters.AddWithValue("@userId", userId);
                cmd.Parameters.AddWithValue("@saturation_taidu", saturation_taidu);
                cmd.Parameters.AddWithValue("@saturation_zhiliang", saturation_zhiliang);
                cmd.Parameters.AddWithValue("@saturation_sudu", saturation_sudu);
                cmd.Parameters.AddWithValue("@evaluateText", evaluateText);
                cmd.Parameters.AddWithValue("@objUserId", objUserId);
                cmd.Parameters.AddWithValue("@serviceName", serviceName);
                cmd.Parameters.AddWithValue("@serviceId", serviceId);

                cmd.Connection = conn;

                int orderSate = 查询订单状态(orderId);

                conn.Open();
                MySqlTransaction transaction = conn.BeginTransaction();
                cmd.Transaction = transaction;
                try
                {
                    if (orderSate == 2)
                    {
                        //已经处理交易 只是没评价
                        cmd.CommandText = "update 订单 set 订单.订单状态=3 , 完结日期=now()  where 订单.订单号=@orderId;";
                        cmd.ExecuteNonQuery();

                        cmd.CommandText = "insert  评价(订单号,userId,objUserId,BuyserviceName,评价内容,评价日期,saturation_taidu,saturation_zhiliang,saturation_sudu,serviceId) values(@orderId,@userId,@objUserId,@serviceName,@evaluateText,now(),@saturation_taidu,@saturation_zhiliang,@saturation_sudu,@serviceId);";
                        cmd.ExecuteNonQuery();
                        transaction.Commit();
                        conn.Close();
                        isTransactionOk = true;
                    }
                    else
                    {
                        //正常流程
                        cmd.CommandText = "update 订单 set 订单.订单状态=3 where 订单.订单号=@orderId;";
                        cmd.ExecuteNonQuery();

                        cmd.CommandText = "update `user` set `user`.存款 = `user`.存款 + (select 订单.已缴金额 * 0.8 from 订单 where 订单.订单号=@orderId) where `user`.id=@userId and exists(SELECT  * FROM  订单 WHERE 订单.订单号=@orderId)=1;";
                        cmd.ExecuteNonQuery();


                        cmd.CommandText = "insert  评价(订单号,userId,objUserId,BuyserviceName,评价内容,评价日期,saturation_taidu,saturation_zhiliang,saturation_sudu,serviceId) values(@orderId,@userId,@objUserId,@serviceName,@evaluateText,now(),@saturation_taidu,@saturation_zhiliang,@saturation_sudu,@serviceId);";
                        cmd.ExecuteNonQuery();

                        transaction.Commit();
                        conn.Close();
                        isTransactionOk = true;
                    }




                }
                catch
                {
                    transaction.Rollback();
                    conn.Close();
                    isTransactionOk = false;
                }
                ret.Add("isTransactionOk", isTransactionOk);

                service.统计分数(objUserId);

                return ret;
            }
            /// <summary>
            /// 提交评价 //过时订单处理 订单状态设置为2 超时未评价 但金额已经交换
            /// </summary>
            /// <param name="orderId">orderId</param>
            /// <param name="objUserId">objUserId</param>
            public static void 提交评价(string orderId, string objUserId)
            {


                MySqlConnection conn = new MySqlConnection();
                conn.ConnectionString = 连接字符串;


                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@orderId", orderId);
                cmd.Parameters.AddWithValue("@userId", objUserId);


                cmd.Connection = conn;


                conn.Open();
                MySqlTransaction transaction = conn.BeginTransaction();
                cmd.Transaction = transaction;
                try
                {
                    cmd.CommandText = "update 订单 set 订单.订单状态=2 ,完结日期=now()  where 订单.订单号=@orderId;";  //更新状态为2 代表用户未评价
                    cmd.ExecuteNonQuery();

                    cmd.CommandText = "update `user` set `user`.存款 = `user`.存款 + (select 订单.已缴金额 * 0.8 from 订单 where 订单.订单号=@orderId) where `user`.id=@userId and exists(SELECT  * FROM  订单 WHERE 订单.订单号=@orderId)=1;";
                    cmd.ExecuteNonQuery();

                    transaction.Commit();
                    conn.Close();


                }
                catch
                {
                    transaction.Rollback();
                    conn.Close();

                }


            }

            public static JSONObject 加载订单详情(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addMyOrderListShowPage_ret");
                string orderId = 请求参数["orderId"].ToString();
                //  string userId = 请求参数["userId"].ToString();

                string sql = @"select date_add(订单.`付款日期`,INTERVAL 7 DAY) as 截止日期,
        `user`.CName as name,userservice.`服务名称`,订单.`付款日期`,订单.`已缴金额`,订单.`用户性别`,订单.`用户姓名`,订单.`用户年龄`,订单.`完结日期`,订单.`订单留言`,订单.`订单状态`,订单.咨询师id
        from
         (订单 inner join `user` on 订单.咨询师id= `user`.ID) inner join userservice on 订单.serviceId=userservice.serviceId
        where  订单.`订单号`=@orderId;";
                ret.Add("isObj", "0");
                string objUserId = "";

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@orderId", orderId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("objId", sdr["咨询师id"].ToString());
                        ret.Add("name", sdr["name"].ToString());
                        ret.Add("serviceName", sdr["服务名称"].ToString());
                        ret.Add("payDate", sdr["付款日期"].ToString());
                        ret.Add("payMoney", sdr["已缴金额"].ToString());
                        ret.Add("userSex", sdr["用户性别"].ToString());
                        ret.Add("userName", sdr["用户姓名"].ToString());
                        ret.Add("userAge", sdr["用户年龄"].ToString());
                        ret.Add("okDate", sdr["完结日期"].ToString());
                        ret.Add("orderText", sdr["订单留言"].ToString());
                        ret.Add("orderState", sdr["订单状态"].ToString());
                        ret.Add("objUserId", sdr["咨询师id"].ToString());
                        ret.Add("截止日期", Convert.ToDateTime(sdr["截止日期"]).ToString("yyyy/MM/dd HH:mm:ss"));
                        //Console.WriteLine("6787=" + Convert.ToDateTime(sdr["截止日期"]).ToString("yyyy/MM/dd HH:mm:ss"));


                        objUserId = sdr["咨询师id"].ToString();

                    }

                }
                con.Close();

                if (Convert.ToInt16(ret["orderState"]) != 1)
                {

                    // return ret;

                    DateTime d2 = Convert.ToDateTime(ret["截止日期"]);
                    TimeSpan d3 = d2.Subtract(DateTime.Now);
                    if (d3.TotalSeconds <= 0)
                    {
                        ret.Add("剩余时间", "已过期");
                    }
                    else
                    {
                        string a =
                     d3.Days.ToString() + "天"
                    + d3.Hours.ToString() + "小时";
                        ret.Add("剩余时间", a);
                    }



                }


                //+ d3.Minutes.ToString() + "分钟"
                //+d3.Seconds.ToString() + "秒"



                ret.Add("objUserImg", personalData.查询用户头像(objUserId));
                return ret;
            }
            public static JSONObject 加载用户订单详情(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addObjOrderListShowPage_ret");
                string orderId = 请求参数["orderId"].ToString();
                //  string userId = 请求参数["userId"].ToString();



                string sql = @"select
        `user`.CName as name,
          userservice.`服务名称`,
          订单.`付款日期`,
          订单.`已缴金额`,
          订单.`用户性别`,
          订单.`用户姓名`,
          订单.`用户年龄`,
          订单.`完结日期`,
          订单.`订单留言`,
          订单.`订单状态`,
          订单.咨询师id
        from
         (订单 inner join `user` on 订单.下单用户id= `user`.ID) inner join userservice on 订单.serviceId=userservice.serviceId
        where  订单.`订单号`=@orderId;";
                ret.Add("isObj", "0");
                string objUserId = "";

                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@orderId", orderId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("objId", sdr["咨询师id"].ToString());
                        ret.Add("name", sdr["name"].ToString());
                        ret.Add("serviceName", sdr["服务名称"].ToString());
                        ret.Add("payDate", sdr["付款日期"].ToString());
                        ret.Add("payMoney", sdr["已缴金额"].ToString());
                        ret.Add("userSex", sdr["用户性别"].ToString());
                        ret.Add("userName", sdr["用户姓名"].ToString());
                        ret.Add("userAge", sdr["用户年龄"].ToString());
                        ret.Add("okDate", sdr["完结日期"].ToString());
                        ret.Add("orderText", sdr["订单留言"].ToString());
                        ret.Add("orderState", sdr["订单状态"].ToString());
                        ret.Add("objUserId", sdr["咨询师id"].ToString());
                        objUserId = sdr["咨询师id"].ToString();
                    }

                }
                con.Close();

                ret.Add("objUserImg", personalData.查询用户头像(objUserId));

                return ret;
            }
            public static JSONObject 加载订单评价详情(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addObjOrderSaturation_ret");
                string orderId = 请求参数["orderId"].ToString();
                //  string userId = 请求参数["userId"].ToString();



                string sql = @"SELECT
          评价.saturation_sudu,
          评价.saturation_taidu,
          评价.saturation_zhiliang,
          评价.评价内容
        FROM
          评价
        WHERE
          评价.订单号=@orderId";
                ret.Add("isObj", "0");


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@orderId", orderId);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("saturation_sudu", sdr["saturation_sudu"].ToString());
                        ret.Add("saturation_taidu", sdr["saturation_taidu"].ToString());
                        ret.Add("saturation_zhiliang", sdr["saturation_zhiliang"].ToString());
                        ret.Add("评价内容", sdr["评价内容"].ToString());

                    }

                }
                con.Close();

                return ret;
            }
            public static JSONObject 分页加载我的订单(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                JArray rows = new JArray();
                ret.Add("type", "addMyOrderList_ret");
                string userId = 请求参数["userId"].ToString();
                string selectType = 请求参数["selectType"].ToString();
                int page = Convert.ToInt16(请求参数["page"]);
                ret.Add("selectType", selectType);
                if (selectType == "jinxingzhong")
                {
                    selectType = "1";
                }
                else if (selectType == "daipingjia")
                {
                    selectType = "2";
                }
                else
                {
                    selectType = "3";
                }


                string sql = "select `订单`.`咨询师id` as toUserId ,`user`.CName,`user`.UserImgUrl,`订单`.`订单号`,`订单`.`付款日期`,`订单`.`订单状态`,`userservice`.`服务名称`,`user`.CName AS CName,`订单`.`订单留言`,userservice.`serviceId`  from `user`,`订单`,`userservice` where `订单`.`咨询师id`=`user`.ID and `订单`.`下单用户id`=@userid  and `订单`.`订单状态`=@selectType and `userservice`.serviceId=`订单`.serviceId ORDER BY `订单`.`付款日期` desc  LIMIT @page,10 ;";


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@page", page);
                cmd.Parameters.AddWithValue("@selectType", selectType);
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                int count = 0;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();

                        row.Add("toUserId", sdr["toUserId"].ToString());

                        string name = sdr["CName"].ToString();
                        row.Add("name", name);


                        row.Add("serviceId", sdr["serviceId"].ToString());
                        row.Add("orderTxt", sdr["订单留言"].ToString());
                        row.Add("toUserImg", 图片服务器ip + sdr["UserImgUrl"].ToString());
                        row.Add("orderId", sdr["订单号"].ToString());
                        row.Add("buyDate", (sdr["付款日期"] == DBNull.Value) ? "" : Convert.ToDateTime(sdr["付款日期"]).ToString("MM月dd HH:mm"));
                        row.Add("serviceName", sdr["服务名称"].ToString());
                        row.Add("orderState", sdr["订单状态"].ToString());
                        string orderState = sdr["订单状态"].ToString();
                        string orderStateTxt = "";
                        if (orderState.Trim() == "0")
                        {
                            orderStateTxt = "等待付款";
                        }
                        else if (orderState.Trim() == "1")
                        {
                            orderStateTxt = "咨询中";
                        }
                        else if (orderState.Trim() == "2")
                        {
                            orderStateTxt = "等待评价";
                        }
                        else if (orderState.Trim() == "3")
                        {
                            orderStateTxt = "已完成";
                        }
                        row.Add("orderStateTxt", orderStateTxt);
                        rows.Add(row);
                        count++;
                    }

                }
                con.Close();
                page = page + 10;
                ret.Add("rows", rows);
                ret.Add("count", count);
                ret.Add("page", page);

                return ret;
            }
            public static JSONObject 分页加载用户订单(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                JArray rows = new JArray();
                ret.Add("type", "addObjOrderList_ret");
                string userId = 请求参数["userId"].ToString();
                string selectType = 请求参数["selectType"].ToString();
                int page = Convert.ToInt16(请求参数["page"]);
                ret.Add("selectType", selectType);
                if (selectType == "jinxingzhong")
                {
                    selectType = "1";
                }
                else if (selectType == "daipingjia")
                {
                    selectType = "2";
                }
                else
                {
                    selectType = "3";
                }


                string sql = @"
        select
          `订单`.下单用户id as toUserId ,
          `user`.CName,
          `user`.UserImgUrl,
          `订单`.`订单号`,
          `订单`.`付款日期`,
          `订单`.`订单状态`,
          `userservice`.`服务名称`,
          `user`.CName AS CName,
          `订单`.`订单留言`,
          userservice.`serviceId`
        from

          ( user INNER JOIN 订单 on  `订单`.`下单用户id`=`user`.ID ) INNER  JOIN userservice ON `userservice`.serviceId=`订单`.serviceId
        where
           `订单`.咨询师id=@userid  and `订单`.`订单状态`=@selectType   ORDER BY `订单`.`付款日期` desc  LIMIT @page,10;
        ";


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);
                cmd.Parameters.AddWithValue("@page", page);
                cmd.Parameters.AddWithValue("@selectType", selectType);
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                int count = 0;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();

                        row.Add("toUserId", sdr["toUserId"].ToString());

                        string name = sdr["CName"].ToString();
                        row.Add("name", name);


                        row.Add("serviceId", sdr["serviceId"].ToString());
                        row.Add("orderTxt", sdr["订单留言"].ToString());
                        row.Add("toUserImg", 图片服务器ip + sdr["UserImgUrl"].ToString());
                        row.Add("orderId", sdr["订单号"].ToString());
                        row.Add("buyDate", (sdr["付款日期"] == System.DBNull.Value) ? "" : Convert.ToDateTime(sdr["付款日期"]).ToString("MM月dd hh:mm"));
                        row.Add("serviceName", sdr["服务名称"].ToString());
                        row.Add("orderState", sdr["订单状态"].ToString());
                        string orderState = sdr["订单状态"].ToString();
                        string orderStateTxt = "";
                        if (orderState.Trim() == "0")
                        {
                            orderStateTxt = "等待付款";
                        }
                        else if (orderState.Trim() == "1")
                        {
                            orderStateTxt = "咨询中";
                        }
                        else if (orderState.Trim() == "2")
                        {
                            orderStateTxt = "等待评价";
                        }
                        else if (orderState.Trim() == "3")
                        {
                            orderStateTxt = "已完成";
                        }
                        row.Add("orderStateTxt", orderStateTxt);
                        rows.Add(row);
                        count++;
                    }

                }
                con.Close();
                page = page + 10;
                ret.Add("rows", rows);
                ret.Add("count", count);
                ret.Add("page", page);

                return ret;
            }


        }
        public class Search
        {
            public static JSONObject 搜索咨询师(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                JSONObject userdata = new JSONObject();
                //
                JArray rows = new JArray();



                string key = 请求参数["key"].ToString();
                key.Trim();
                key = "%" + key + "%";

                ret.Add("type", "search_ret");



                int sum = 0;//统计行数

                string sql = "select  user.id, user.CName,user.UserImgUrl,userbusiness.总订单量, userbusiness.封面图片,userbusiness.咨询评分,userbusiness.咨询介绍  from user,userbusiness where user.id=userbusiness.userid  and userbusiness.营业状态=1 and user.CName like @key  order by userbusiness.最后接单日期 desc LIMIT 0,10;";



                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@key", key);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    string userid = "";
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();


                        row.Add("ObjID", sdr["ID"].ToString());
                        userid = sdr["ID"].ToString();
                        row.Add("UserImgUrl", 图片服务器ip + sdr["UserImgUrl"].ToString());


                        row.Add("CName", sdr["CName"].ToString());

                        //row.Add("GoodTyoe", sdr["GoodTyoe"].ToString());
                        row.Add("zongdingdanliang", sdr["总订单量"].ToString());
                        row.Add("danjia", tool.查询价格最低的服务(userid));
                        if (sdr["封面图片"] == System.DBNull.Value)
                        {

                            row.Add("fnengmianurl", "");
                        }
                        else
                        {
                            row.Add("fnengmianurl", 图片服务器ip + sdr["封面图片"].ToString().Trim());

                        }


                        Double zixunpingfen = Convert.ToDouble(sdr["咨询评分"]);
                        zixunpingfen = zixunpingfen * 100;
                        row.Add("zixunpingfen", Math.Floor(zixunpingfen));

                        row.Add("zixunjieshao", sdr["咨询介绍"].ToString());
                        if (tool.判断用户是否在线(userid))
                        {
                            row.Add("isLine", "1");
                        }
                        else
                        {
                            row.Add("isLine", "0");
                        }



                        rows.Add(row);
                        sum++;
                    }

                }
                con.Close();
                ret.Add("rows", rows);

                ret.Add("addsum", sum.ToString());
                // ret.Add("core", 请求参数["core"].ToString());

                return ret;
            }
        }
        public class tool
        {
            public class AES
            {
                //默认密钥向量
                private static byte[] Keys = { 0x41, 0x72, 0x65, 0x79, 0x6F, 0x75, 0x6D, 0x79, 0x53, 0x6E, 0x6F, 0x77, 0x6D, 0x61, 0x6E, 0x3F };

                public static string Encode(string encryptString, string encryptKey)
                {
                    encryptKey = GetSubString(encryptKey, 0, 32, "");
                    encryptKey = encryptKey.PadRight(32, ' ');

                    RijndaelManaged rijndaelProvider = new RijndaelManaged();
                    rijndaelProvider.Key = Encoding.UTF8.GetBytes(encryptKey.Substring(0, 32));
                    rijndaelProvider.IV = Keys;
                    ICryptoTransform rijndaelEncrypt = rijndaelProvider.CreateEncryptor();

                    byte[] inputData = Encoding.UTF8.GetBytes(encryptString);
                    byte[] encryptedData = rijndaelEncrypt.TransformFinalBlock(inputData, 0, inputData.Length);

                    return Convert.ToBase64String(encryptedData);
                }

                public static string Decode(string decryptString, string decryptKey)
                {
                    try
                    {
                        decryptKey = GetSubString(decryptKey, 0, 32, "");
                        decryptKey = decryptKey.PadRight(32, ' ');

                        RijndaelManaged rijndaelProvider = new RijndaelManaged();
                        rijndaelProvider.Key = Encoding.UTF8.GetBytes(decryptKey);
                        rijndaelProvider.IV = Keys;
                        ICryptoTransform rijndaelDecrypt = rijndaelProvider.CreateDecryptor();

                        byte[] inputData = Convert.FromBase64String(decryptString);
                        byte[] decryptedData = rijndaelDecrypt.TransformFinalBlock(inputData, 0, inputData.Length);

                        return Encoding.UTF8.GetString(decryptedData);
                    }
                    catch
                    {
                        return "";
                    }

                }

                public static string GetSubString(string p_SrcString, int p_StartIndex, int p_Length, string p_TailString)
                {
                    string myResult = p_SrcString;

                    Byte[] bComments = Encoding.UTF8.GetBytes(p_SrcString);
                    foreach (char c in Encoding.UTF8.GetChars(bComments))
                    {    //当是日文或韩文时(注:中文的范围:\u4e00 - \u9fa5, 日文在\u0800 - \u4e00, 韩文为\xAC00-\xD7A3)
                        if ((c > '\u0800' && c < '\u4e00') || (c > '\xAC00' && c < '\xD7A3'))
                        {
                            //if (System.Text.RegularExpressions.Regex.IsMatch(p_SrcString, "[\u0800-\u4e00]+") || System.Text.RegularExpressions.Regex.IsMatch(p_SrcString, "[\xAC00-\xD7A3]+"))
                            //当截取的起始位置超出字段串长度时
                            if (p_StartIndex >= p_SrcString.Length)
                                return "";
                            else
                                return p_SrcString.Substring(p_StartIndex,
                                                               ((p_Length + p_StartIndex) > p_SrcString.Length) ? (p_SrcString.Length - p_StartIndex) : p_Length);
                        }
                    }

                    if (p_Length >= 0)
                    {
                        byte[] bsSrcString = Encoding.Default.GetBytes(p_SrcString);

                        //当字符串长度大于起始位置
                        if (bsSrcString.Length > p_StartIndex)
                        {
                            int p_EndIndex = bsSrcString.Length;

                            //当要截取的长度在字符串的有效长度范围内
                            if (bsSrcString.Length > (p_StartIndex + p_Length))
                            {
                                p_EndIndex = p_Length + p_StartIndex;
                            }
                            else
                            {   //当不在有效范围内时,只取到字符串的结尾

                                p_Length = bsSrcString.Length - p_StartIndex;
                                p_TailString = "";
                            }

                            int nRealLength = p_Length;
                            int[] anResultFlag = new int[p_Length];
                            byte[] bsResult = null;

                            int nFlag = 0;
                            for (int i = p_StartIndex; i < p_EndIndex; i++)
                            {
                                if (bsSrcString[i] > 127)
                                {
                                    nFlag++;
                                    if (nFlag == 3)
                                        nFlag = 1;
                                }
                                else
                                    nFlag = 0;

                                anResultFlag[i] = nFlag;
                            }

                            if ((bsSrcString[p_EndIndex - 1] > 127) && (anResultFlag[p_Length - 1] == 1))
                                nRealLength = p_Length + 1;

                            bsResult = new byte[nRealLength];

                            Array.Copy(bsSrcString, p_StartIndex, bsResult, 0, nRealLength);

                            myResult = Encoding.Default.GetString(bsResult);
                            myResult = myResult + p_TailString;
                        }
                    }

                    return myResult;
                }

            }
            /// <summary>
            /// 此代码示例通过创建哈希字符串适用于任何 MD5 哈希函数 （在任何平台） 上创建 32 个字符的十六进制格式哈希字符串
            /// 官网案例改编 32位加密
            /// </summary>
            /// <param name="source"></param>
            /// <returns></returns>



            public static string Base64Encode(string content)
            {


                byte[] bytes = Encoding.UTF8.GetBytes(content);
                return Convert.ToBase64String(bytes);
            }

            public static string Base64Decode(string content)
            {
                byte[] bytes = Convert.FromBase64String(content);
                return Encoding.UTF8.GetString(bytes);
            }
            public static string Get32MD5One(string source)
            {
                using (MD5 md5Hash = MD5.Create())
                {
                    byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(source));
                    StringBuilder sBuilder = new StringBuilder();
                    for (int i = 0; i < data.Length; i++)
                    {
                        sBuilder.Append(data[i].ToString("x2"));
                    }

                    string hash = sBuilder.ToString();
                    return hash.ToUpper();
                }
            }
            /// <summary>
            /// 获取16位md5加密
            /// </summary>
            /// <param name="source"></param>
            /// <returns></returns>
            public static string Get16MD5One(string source)
            {
                using (MD5 md5Hash = MD5.Create())
                {
                    byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(source));
                    //转换成字符串，并取9到25位
                    string sBuilder = BitConverter.ToString(data, 4, 8);
                    //BitConverter转换出来的字符串会在每个字符中间产生一个分隔符，需要去除掉
                    sBuilder = sBuilder.Replace("-", "");
                    return sBuilder.ToString().ToUpper();
                }
            }


            public static void error(Exception ex)
            {
                StringBuilder msg = new StringBuilder();
                msg.Append("*************************************** \n");
                msg.AppendFormat(" 异常发生时间： {0} \n", DateTime.Now);
                msg.AppendFormat(" 异常类型： {0} \n", ex.HResult);
                msg.AppendFormat(" 导致当前异常的 Exception 实例： {0} \n", ex.InnerException);
                msg.AppendFormat(" 导致异常的应用程序或对象的名称： {0} \n", ex.Source);
                msg.AppendFormat(" 引发异常的方法： {0} \n", ex.TargetSite);
                msg.AppendFormat(" 异常堆栈信息： {0} \n", ex.StackTrace);
                msg.AppendFormat(" 异常消息： {0} \n", ex.Message);
                msg.Append("***************************************");

                tool.输出log记录(msg.ToString());
            }

            public class RandomNumber
            {/// <summary>
             /// 生成订单号
             /// </summary>
                public static object _lock = new object();
                public static int count = 1;

                public string GetRandom1()
                {
                    lock (_lock)
                    {
                        if (count >= 10000)
                        {
                            count = 1;
                        }
                        var number = "P" + DateTime.Now.ToString("yyMMddHHmmss") + count.ToString("0000");
                        count++;
                        return number;
                    }
                }


                public string GetRandom2()
                {
                    lock (_lock)
                    {
                        return "T" + DateTime.Now.Ticks;

                    }
                }

                public string GetRandom3()
                {
                    lock (_lock)
                    {
                        Random ran = new Random();
                        return "U" + DateTime.Now.ToString("yyyyMMddHHmmssfff") + ran.Next(1000, 9999).ToString();
                    }
                }
            }
            public static bool 向对端推送数据(JSONObject data)
            {
                bool sendOk = false;
                string countxt = "";
                int count = 0;
                string touserid = data["touser"].ToString();
                allSockets1.ToList().ForEach(s =>
                {
                    countxt += s.ConnectionInfo.Id.ToString() + "=" + MemoryCache.Get(touserid).ToString();
                    if (s.ConnectionInfo.Id.ToString() == MemoryCache.Get(touserid).ToString())
                    {
                        count++;
                        s.Send(data.ToString());
                        sendOk = true;

                    }

                });

                return sendOk;
            }
            public static void 定时遍历清除掉线()
            {

                //遍历哈希表




                string userId = "";
                foreach (DictionaryEntry de in xint_)
                {
                    userId = de.Key.ToString();
                    DateTime dt_last = Convert.ToDateTime(de.Value);
                    TimeSpan ts = DateTime.Now - dt_last;

                    if (ts.TotalMinutes > 5)
                    {
                        //超时5分钟 判断为掉线

                        if (MemoryCache.Get(userId) != null)
                        {
                            string cache_seeion = MemoryCache.Get(userId).ToString();//根据userid 取出连接编码

                            MemoryCache.Remove(userId);//删除cache中的连接编码
                            MemoryCache.Remove(cache_seeion);//根据seeion删除userid

                            allSockets1.ToList().ForEach(s =>
                            {

                                if (s.ConnectionInfo.Id.ToString() == cache_seeion)
                                {
                                    allSockets1.Remove(s);


                                }

                            });

                            //到此为止 已删除所有残余的连接
                        }



                    }

                }

            }
            public static JSONObject 查询被举报的订单(string orderId)
            {
                JSONObject ret = new JSONObject();


                string sql = "SELECT  * FROM  举报 where orderId=@orderId; ";


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@orderId", orderId);
                bool isjubao = false;

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        isjubao = true;
                        ret.Add("txt", sdr["txt"].ToString());
                        ret.Add("date", sdr["date"].ToString());
                    }


                }
                ret.Add("isjubao", isjubao);
                return ret;
            }
            public static JSONObject select_服务名和咨询师ID(string orderId)
            {
                JSONObject ret = new JSONObject();
                string sql = "SELECT  订单.咨询师id,userservice.服务名称 FROM  userservice INNER JOIN 订单 on 订单.serviceId=userservice.serviceId  where 订单.订单号=@orderId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@orderId", orderId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        ret.Add("objUserId", sdr["咨询师id"].ToString());
                        ret.Add("serviceName", sdr["服务名称"].ToString());
                    }

                }
                con.Close();


                return ret;
            }

            public static int 查询订单总数()
            {
                int ret = 0;
                string sql = "select count(*) as i from 订单;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        ret = Convert.ToInt16(sdr["i"]);

                    }

                }
                con.Close();


                return ret;
            }

            public static Boolean 判断用户是否咨询师(string userId)
            {
                bool ret = false;

                string sql = "SELECT  userbusiness.行业 FROM userbusiness WHERE  userbusiness.userid=@userId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        string 行业 = sdr["行业"].ToString();
                        if (行业 == "tarot")
                        {
                            ret = true;
                        }

                    }

                }
                con.Close();


                return ret;

            }
            public static Boolean 判断用户是否该订单咨询师咨询师(string userId, string orderId)
            {
                bool ret = false;

                string sql = "select 订单.咨询师id from 订单 WHERE  订单.订单号=@orderId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@orderId", orderId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                        string 咨询师id = sdr["咨询师id"].ToString();
                        if (咨询师id == userId)
                        {
                            ret = true;
                        }

                    }

                }
                con.Close();


                return ret;

            }
            public static Boolean 判断用户是否在线(string userid)
            {
                Boolean isLine = false;

                //判断语句
                // MemoryCache.Count;
                // int c = HttpRuntime.Cache.Count;
                if (MemoryCache.Get(userid) != null)
                {
                    isLine = true;
                }
                else
                {
                    isLine = false;
                }


                return isLine;

            }
            public static string base64转音频(string bace64)
            {
                //bace64 = bace64.Replace("data:audio/mpeg;base64,", "");
                int sum = bace64.IndexOf(",") + 1;
                bace64 = bace64.Substring(sum);


                byte[] arr = Convert.FromBase64String(bace64);



                string imgPath = "";
                using (MemoryStream ms = new MemoryStream(arr))
                {



                    string savePath = (@"/audio/user/" + DateTime.Now.ToString("yyyy") + "/" + DateTime.Now.ToString("MM") + "/");
                    string 文件名 = DateTime.Now.ToString("ddhhmmssff") + ".m4a";

                    string 当前服务路径 = basePath1;
                    string 保存绝对路径 = 当前服务路径 + savePath;
                    //保存绝对路径 = 保存绝对路径.Replace("//", "\\").Replace("//", "\\");

                    保存绝对路径 = 保存绝对路径.Replace(@"//", @"/");
                    if (!Directory.Exists(保存绝对路径))
                    {
                        Directory.CreateDirectory(保存绝对路径);

                    }
                    FileStream fs;
                    fs = File.Create(保存绝对路径 + 文件名);
                    fs.Write(arr, 0, arr.Length);
                    fs.Close();

                    imgPath = savePath + 文件名;
                }

                return imgPath;
            }
            public static void 输出log记录(string txt)
            {
                System.IO.StreamWriter writer = null;
                string Path = (@"/error/" + DateTime.Now.ToString("yyyy") + "/" + DateTime.Now.ToString("MM"));
                string 文件名 = "log.txt";
                //
                string 当前服务路径 = basePath2;
                string 保存绝对路径 = 当前服务路径 + Path;
                try
                {


                    //如果目录不存在则创建 
                    if (!System.IO.Directory.Exists(保存绝对路径))
                    {
                        System.IO.Directory.CreateDirectory(保存绝对路径);
                    }
                    System.IO.FileInfo file = new System.IO.FileInfo(保存绝对路径 + "/" + 文件名);

                    writer = new System.IO.StreamWriter(file.FullName, true);//文件不存在就创建,true表示追加 

                    //  DateTime date = new DateTime();

                    writer.WriteLine(DateTime.Now.ToString());

                    writer.WriteLine(txt);
                    writer.WriteLine("--------------------------------------------------------------------------------------");
                    writer.Close();

                }
                finally
                {
                    if (writer != null)
                        writer.Close();

                }
            }
            public static string 日期时间处理(DateTime 日期)
            {
                string 发布日期 = "";

                int 天数 = Convert.ToInt16(日期.Day);
                int 今天天数 = Convert.ToInt16(DateTime.Now.Day);

                int 月数 = Convert.ToInt16(日期.Month);
                int 现在月数 = Convert.ToInt16(DateTime.Now.Month);
                int 年数 = 日期.Year;
                int 现在年数 = DateTime.Now.Year;
                if (现在年数 - 年数 == 0)
                {
                    //今年发布
                    if (现在月数 - 月数 == 0)
                    {
                        if (今天天数 - 天数 == 0)
                        {
                            //今天发布
                            int 小时 = Convert.ToInt16(日期.Hour);
                            int 现在小时 = Convert.ToInt16(DateTime.Now.Hour);
                            if (现在小时 - 小时 == 0)
                            {
                                int 分钟 = Convert.ToInt16(日期.Minute);
                                int 现在分钟 = DateTime.Now.Minute;
                                if (现在分钟 - 分钟 == 0)
                                {
                                    发布日期 = "刚刚";
                                    //  Response.Write("<script>alert(" + 现在分钟 + "-" + 分钟 + ")</script>");
                                    发布日期 = Convert.ToString(现在分钟 - 分钟) + "分钟前";
                                }
                                else
                                {
                                    发布日期 = 现在分钟 - 分钟 + " 分钟前";
                                }
                            }
                            else
                            {
                                发布日期 = "今天 " + 日期.ToString("HH:mm");
                            }
                        }
                        else
                        {
                            发布日期 = Convert.ToString(今天天数 - 天数) + " 天前";
                        }
                    }
                    else if (现在月数 - 月数 == 1)
                    {

                        发布日期 = " 上个月" + 天数 + "日";
                        //Convert.ToString(现在月数 - 月数) +
                    }
                    else
                    {
                        发布日期 = 月数 + " 月" + 天数 + "日";
                    }
                }
                else
                {
                    发布日期 = 年数 + "/" + 月数;
                }


                return 发布日期;
            }
            public static string 删除旧头像(string userId)
            {
                string sql = "select UserImgUrl from user where id=@userid";
                string imgurl = "";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        imgurl = sdr["UserImgUrl"].ToString();

                    }

                }
                con.Close();


                string 当前服务路径 = basePath1;
                string 保存绝对路径 = 当前服务路径 + imgurl;
                //删除文件
                try
                {
                    System.IO.File.Delete(保存绝对路径);
                }
                catch (Exception e)
                {
                    return e.Message;
                    throw;
                }


                return "ok";
            }
            public static string base64ChangeImgSave(string bace64)
            {
                //base64转图像并保存 返回保存路径
                string imgPath = "";
        
                // bace64 = bace64.Substring(0, bace64.IndexOf("bace64,")+7);
                bace64 = bace64.Replace("data:image/jpeg;base64,", "");
                byte[] arr = Convert.FromBase64String(bace64);
                using (MemoryStream ms = new MemoryStream(arr))
                {
                      Console.Write("--------------------------------3");
                    System.DrawingCore.Bitmap bmp = new System.DrawingCore.Bitmap(ms);
                     Console.Write("--------------------------------3.1");
                    ms.Close();
                    Bitmap bmp2 = new Bitmap(bmp);
                    bmp.Dispose();
                    string savePath = (@"/img/user/" + DateTime.Now.ToString("yyyy") + "/" + DateTime.Now.ToString("MM") + "/");
                    string 文件名 = DateTime.Now.ToString("ddhhmmss") + ".jpg";

                    string 当前服务路径 = basePath1;
                    string 保存绝对路径 = 当前服务路径 + savePath;


                    if (保存绝对路径.IndexOf(@"//") >= 0)
                    {
                        保存绝对路径 = 保存绝对路径.Replace(@"//", @"/");
                    }

                    //  保存绝对路径 = 保存绝对路径.Replace(Replace("//", "\\").Replace("//", "\\");

                    if (!Directory.Exists(保存绝对路径))
                    {
                        Directory.CreateDirectory(保存绝对路径);

                    }
  Console.Write("--------------------------------5");
                    bmp2.Save(保存绝对路径 + 文件名, System.DrawingCore.Imaging.ImageFormat.Jpeg);
                      Console.Write("--------------------------------6");
                    //bmp2.Save(filePath + ".jpg", System.Drawing.Imaging.ImageFort.Jpeg);
                    //bmp2.Save(filePath + ".bmp", System.Drawing.Imaging.ImageFoat.Bmp);
                    //bmp2.Save(filePath + ".gif", System.Drawing.Imaging.ImageFoat.Gif);
                    //bmp2.Save(filePath + ".png", System.Drawing.Imaging.ImageFoat.Png);
                    bmp.Dispose();
                    imgPath = savePath + 文件名;
                }


                return imgPath;
            }

            public static void 简单查询(string sql)
            {


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {

                    }

                }
                con.Close();



            }
            public static string 获取最后一条对话的日期(string orderId)
            {
                string date = "";
                string sql = "SELECT max(date) as date from consultation where consultation.OrderNumer=@orderId";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                cmd.Parameters.AddWithValue("@orderId", orderId);
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        date = sdr["date"].ToString();
                    }

                }
                con.Close();


                return date;
            }

            public static string 查询价格最低的服务(string userid)
            {

                string 单价 = "";

                string sql = "select  单价   from userservice where  userservice.userid ='" + userid + "' order by 单价   limit 0,1";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        单价 = sdr["单价"].ToString();
                    }

                }
                con.Close();


                return 单价;


            }

            public static string 查询服务价格(string serviceId)
            {

                string 单价 = "";

                string sql = "select  单价   from userservice where  userservice.serviceId ='" + serviceId + "' order by 单价   limit 0,1";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();

                    while (sdr.Read())
                    {
                        单价 = sdr["单价"].ToString();
                    }

                }
                con.Close();


                return 单价;


            }
        }

        public class home_pl
        {
            public static JSONObject add_home_评论(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "addpinglList_ret");


                JArray rows = new JArray();
                string addSum = "";
                ret.Add("pages", 请求参数["addSum"]);

                if (请求参数["addSum"] != null && 请求参数["addSum"].ToString() != "")
                {
                    if (Convert.ToInt16(请求参数["addSum"]) <= 0)
                    {
                        addSum = "0";
                        // ret.Add("pages", "1");
                    }
                    else
                    {
                        // ret.Add("pages", Convert.ToInt16(请求参数["addSum"])+1);
                        addSum = (Convert.ToInt16(请求参数["addSum"]) * 10).ToString();
                    }

                }
                else
                {
                    ret.Add("type", "error");
                    ret.Add("msg", "addSum err");
                }





                string sql = "select  评价.评价内容,userId,ObjUserId,BuyserviceName,serviceId,评价.评价日期 from 评价 where  评价.评价内容 is not  null  and 评价.评价内容 !=''  order by 评价.评价日期 desc limit " + addSum + ",10;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                //  cmd.Parameters.AddWithValue("@addSum", addSum);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();
                        row.Add("plTxt", sdr["评价内容"].ToString());
                        row.Add("userId", sdr["userId"].ToString());
                        row.Add("ObjUserId", sdr["ObjUserId"].ToString());
                        row.Add("serviceName", sdr["BuyserviceName"].ToString());
                        row.Add("obj_img", personalData.查询用户头像(sdr["ObjUserId"].ToString()));
                        //  row.Add("obj_cname", personalData.查询用户昵称(sdr["ObjUserId"].ToString()));
                        row.Add("service_money", tool.查询服务价格(sdr["serviceId"].ToString()));

                        row.Add("user_cname", personalData.查询用户昵称(sdr["userId"].ToString()));
                        row.Add("user_img", personalData.查询用户头像(sdr["userId"].ToString()));
                        row.Add("date", DateTime.Parse(sdr["评价日期"].ToString()).ToString("MM月dd日 HH:mm"));
                        rows.Add(row);

                    }


                }
                con.Close();

                ret.Add("rows", rows);
                return ret;

            }
        }


        public class admin
        {
            public static JSONObject admin_exRefund(JSONObject h)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "admin_exRefund_ret");
                string orderId = h["orderId"].ToString();
                //1、执行退款api 返回成功值 执行数据库操作
                decimal fund = money.查询用户付款金额(orderId);
                JSONObject c = tool.select_服务名和咨询师ID(orderId);

                string objUserId = c["objUserId"].ToString();
                string isok = money.repund(fund, orderId); //

                if (isok == "Y")
                {
                    ret.Add("msg", "Y");
                    transaction.提交评价(orderId, objUserId);
                }
                else
                {
                    ret.Add("msg", "N");
                    ret.Add("info", "退款失败 未修改订单！");
                }

                return ret;
            }


            public static JSONObject admin_jubInfo(JSONObject h)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "admin_jubInfo_ret");
                string jubId = h["jubId"].ToString();

                string sql = @"
        select  订单.用户姓名,订单.用户性别,订单.订单号,
        (select user.手机号 from user,举报 where  举报.userid=user.id and 举报.id=9) as 客户手机号,
          (select user.手机号 from user,举报 where  举报.toUserId=user.id and 举报.id=9) as 咨询师手机号,
          (select user.CName from user,举报 where  举报.toUserId=user.id and 举报.id=9) as 咨询师昵称,
        (select user.性别 from user,举报 where  举报.toUserId=user.id and 举报.id=9) as 咨询师性别,
          订单.已缴金额,
          userservice.服务名称,
          举报.date as 投诉日期,
          订单.付款日期,
          订单.订单状态,
          举报.txt
        from ((user inner join  举报 on 举报.userid=user.id) inner join 订单 on 订单.订单号=举报.orderId) inner join userservice on  userservice.serviceId = 订单.serviceId where  举报.id=9

        ";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@jubId", jubId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("userName", sdr["用户姓名"].ToString());
                        ret.Add("userSex", sdr["用户性别"].ToString());
                        ret.Add("userPhone", sdr["客户手机号"].ToString());
                        ret.Add("objPhone", sdr["咨询师手机号"].ToString());
                        ret.Add("objCName", sdr["咨询师昵称"].ToString());
                        ret.Add("objSex", sdr["咨询师性别"].ToString());
                        ret.Add("orderMoney", sdr["已缴金额"].ToString());
                        ret.Add("serviceName", sdr["服务名称"].ToString());
                        ret.Add("jubDate", sdr["投诉日期"].ToString());
                        ret.Add("moneyDate", sdr["付款日期"].ToString());
                        ret.Add("orderId", sdr["订单号"].ToString());
                        ret.Add("orderState", sdr["订单状态"].ToString());
                        ret.Add("jubText", sdr["txt"].ToString());

                    }


                }
                con.Close();

                return ret;
            }
            public static JSONObject admin_objReject(JSONObject h)
            {
                //申请被驳回
                // 逻辑：  将是否被处理和是否通过字段设为驳回相对应的值
                JSONObject ret = new JSONObject();
                ret.Add("type", "admin_objReject_ret");
                ret.Add("msg", "ok");

                string applicationconsultantId = h["applicationconsultantId"].ToString();

                string sql = "update applicationconsultant set applicationconsultant.是否通过=0, applicationconsultant.Handle=2 where applicationconsultant.id=@applicationconsultantId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@applicationconsultantId", applicationconsultantId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {

                }
                con.Close();


                return ret;
            }
            public static JSONObject admin_objInfo(JSONObject h)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "admin_objInfo_ret");
                string userId = h["userId"].ToString();

                string sql = @"select  user.cname,user.性别,user.申请日期 ,user.手机号,userbusiness.总订单量,userbusiness.咨询评分,userbusiness.营业状态,userbusiness.isDisabled,user.存款
                                       from  user inner  join  userbusiness on user.id =userbusiness.userid where  user.id=@userid;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userid", userId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();

                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("cName", sdr["cname"].ToString());
                        ret.Add("sqDate", sdr["申请日期"].ToString());
                        ret.Add("sex", sdr["性别"].ToString());
                        ret.Add("sumOrder", sdr["总订单量"].ToString());
                        ret.Add("score", sdr["咨询评分"].ToString());
                        ret.Add("shopState", sdr["营业状态"].ToString());
                        ret.Add("isDisabled", sdr["isDisabled"].ToString());
                        ret.Add("money", sdr["存款"].ToString());
                        ret.Add("phone", sdr["手机号"].ToString());

                    }


                }
                con.Close();

                return ret;
            }
            public static JSONObject admin_set_Disabled(JSONObject h)
            {
                //冻结用户和取消

                JSONObject ret = new JSONObject();
                ret.Add("type", "admin_set_Disabled_ret");
                ret.Add("msg", "ok");

                string userId = h["userId"].ToString();
                string disabled = h["disabled"].ToString();


                string sql = "update  userbusiness set isDisabled=@disabled  where  userid=@userId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@userId", userId);
                cmd.Parameters.AddWithValue("@disabled", disabled);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {

                }
                con.Close();


                return ret;
            }
            public static JSONObject admin_objadopt(JSONObject h)
            {
                //申请被通过
                // 逻辑：  将申请表中的必要字段写入userbusiness表

                JSONObject ret = new JSONObject();
                ret.Add("type", "admin_objadopt_ret");
                ret.Add("msg", "ok");

                string applicationconsultantId = h["applicationconsultantId"].ToString();

                string sql = "insert into userbusiness(userid,行业,从业年限,营业状态,咨询评分,入驻时间) select applicationconsultant.userId,'tarot',通过日期,0,1,通过日期 from applicationconsultant where applicationconsultant.id=@applicationconsultantId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@applicationconsultantId", applicationconsultantId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {

                }
                con.Close();


                return ret;
            }
            public static JSONObject adminlogin(JSONObject h)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "adminlogin_ret");
                return ret;
            }
            public static JSONObject upwzzt(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "upwzzt_ret");


                string title = 请求参数["title"].ToString();
                string html = 请求参数["html"].ToString();
                string img = 请求参数["img"].ToString();
                img = tool.base64ChangeImgSave(img);

                string sql = "insert into 专题(title, txt, creat_date, imgUrl) values (@title,@html,now(),@img)";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@title", title);
                cmd.Parameters.AddWithValue("@html", html);
                cmd.Parameters.AddWithValue("@img", img);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();



                }
                con.Close();



                return ret;
            }
            public static JSONObject addOrderList(JSONObject 请求参数)
            {

                //   type:"admin_add_order_list",
                //   pages:0


                JSONObject ret = new JSONObject();
                JArray rows = new JArray();
                ret.Add("type", "admin_add_order_list_ret");
                string pages = 请求参数["pages"].ToString();
                ret.Add("page1", pages);//返回当前页
                int counti = tool.查询订单总数();
                ret.Add("counti", counti);//返回订单总数
                int itemCount = counti / 10;
                ret.Add("itemCount", itemCount);//返回总记录数


                int i = Convert.ToInt16(pages);
                int page = 0;
                if (i == 0)
                {
                    page = 0;

                }
                else
                {
                    page = i * 10;
                }



                string sql = @"select  订单.咨询师id,订单.下单用户id,订单.订单状态,订单.订单号,订单.已缴金额,订单.付款日期,订单.用户姓名,订单.serviceId, userservice.服务名称 from  订单 inner join userservice on 订单.serviceId =userservice.serviceId  order by 订单.付款日期 desc limit @page,10;";


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();


                cmd.Parameters.AddWithValue("@page", page);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                int count = 0;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();



                        string name = sdr["用户姓名"].ToString();
                        row.Add("name", name);

                        row.Add("objName", personalData.查找用户昵称(sdr["咨询师id"].ToString()));


                        row.Add("serviceId", sdr["serviceId"].ToString());
                        //row.Add("orderTxt", sdr["订单留言"].ToString());
                        //row.Add("toUserImg", 图片服务器ip + sdr["UserImgUrl"].ToString());
                        row.Add("orderId", sdr["订单号"].ToString());
                        row.Add("buyDate", (sdr["付款日期"] == DBNull.Value) ? "" : Convert.ToDateTime(sdr["付款日期"]).ToString("MM月dd HH:mm"));
                        row.Add("serviceName", sdr["服务名称"].ToString());
                        row.Add("money", sdr["已缴金额"].ToString());
                        row.Add("orderState", sdr["订单状态"].ToString());
                        string orderState = sdr["订单状态"].ToString();
                        string orderStateTxt = "";
                        if (orderState.Trim() == "0")
                        {
                            orderStateTxt = "等待付款";
                        }
                        else if (orderState.Trim() == "1")
                        {
                            orderStateTxt = "咨询中";
                        }
                        else if (orderState.Trim() == "2")
                        {
                            orderStateTxt = "等待评价";
                        }
                        else if (orderState.Trim() == "3")
                        {
                            orderStateTxt = "已完成";
                        }
                        row.Add("orderStateTxt", orderStateTxt);
                        rows.Add(row);
                        count++;
                    }

                }
                con.Close();
                page = page + 10;
                ret.Add("rows", rows);
                ret.Add("count", count);
                ret.Add("page", page);

                return ret;
            }
            public static JSONObject admin_add_objshenqShowInfo(JSONObject 请求参数)
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "admin_add_objshenqShowInfo_ret");


                string applicationconsultantId = 请求参数["applicationconsultantId"].ToString();


                string sql = "select applicationconsultant.*,user.CName,user.手机号 from applicationconsultant inner join user on user.ID=applicationconsultant.userId where applicationconsultant.id=@applicationconsultantId;";
                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();

                cmd.Parameters.AddWithValue("@applicationconsultantId", applicationconsultantId);


                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        ret.Add("userId", sdr["userId"].ToString());
                        ret.Add("CName", sdr["CName"].ToString());
                        ret.Add("name", sdr["input_name"].ToString());
                        ret.Add("申请日期", sdr["申请日期"].ToString());
                        ret.Add("通过日期", System.DBNull.Value.Equals(sdr["通过日期"]) ? sdr["通过日期"].ToString() : "");

                        ret.Add("是否通过", sdr["是否通过"].ToString());
                        ret.Add("手机号", sdr["手机号"].ToString());
                        ret.Add("input_age", sdr["input_age"].ToString());
                        ret.Add("applicationconsultantId", sdr["id"].ToString());
                        ret.Add("input_gender", sdr["input_gender"].ToString());
                        ret.Add("input_workYears", sdr["input_workYears"].ToString());
                        ret.Add("input_otherPlatforms", sdr["input_otherPlatforms"].ToString());
                        ret.Add("Handle", sdr["Handle"].ToString());
                    }


                }
                con.Close();



                return ret;
            }
            public static JSONObject addjubList(JSONObject 请求参数)
            {

                //   type:"admin_add_order_list",
                //   pages:0


                JSONObject ret = new JSONObject();
                JArray rows = new JArray();
                ret.Add("type", "admin_add_jub_list_ret");
                // string pages = 请求参数["pages"].ToString();
                // ret.Add("page1", pages);//返回当前页
                // int counti = tool.查询订单总数();
                // ret.Add("counti", counti);//返回订单总数
                // int itemCount = counti / 10;
                // ret.Add("itemCount", itemCount);//返回总记录数


                // int i = Convert.ToInt16(pages);
                // int page = 0;
                // if (i == 0)
                // {
                //     page = 0;

                // }
                // else
                // {
                //     page = i * 10;
                // }



                string sql = @"select  订单.咨询师id,订单.下单用户id,订单.订单状态,订单.已缴金额,订单.订单号,订单.serviceId,订单.用户姓名,订单.付款日期,服务名称,举报.txt as jubinfo,举报.id as jubId  from (订单 inner join userservice on 订单.serviceId =userservice.serviceId) inner join  举报 on  举报.orderId = 订单.订单号 order by 举报.id desc;";


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();


                //cmd.Parameters.AddWithValue("@page", page);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                int count = 0;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();



                        string name = sdr["用户姓名"].ToString();
                        row.Add("name", name);

                        row.Add("objName", personalData.查找用户昵称(sdr["咨询师id"].ToString()));
                        //jubId
                        row.Add("jubId", sdr["jubId"].ToString());
                        row.Add("jubinfo", sdr["jubinfo"].ToString());


                        row.Add("serviceId", sdr["serviceId"].ToString());
                        //row.Add("orderTxt", sdr["订单留言"].ToString());
                        //row.Add("toUserImg", 图片服务器ip + sdr["UserImgUrl"].ToString());
                        row.Add("orderId", sdr["订单号"].ToString());
                        row.Add("buyDate", (sdr["付款日期"] == DBNull.Value) ? "" : Convert.ToDateTime(sdr["付款日期"]).ToString("MM月dd HH:mm"));
                        row.Add("serviceName", sdr["服务名称"].ToString());
                        row.Add("money", sdr["已缴金额"].ToString());
                        row.Add("orderState", sdr["订单状态"].ToString());
                        string orderState = sdr["订单状态"].ToString();
                        string orderStateTxt = "";
                        if (orderState.Trim() == "0")
                        {
                            orderStateTxt = "等待付款";
                        }
                        else if (orderState.Trim() == "1")
                        {
                            orderStateTxt = "咨询中";
                        }
                        else if (orderState.Trim() == "2")
                        {
                            orderStateTxt = "等待评价";
                        }
                        else if (orderState.Trim() == "3")
                        {
                            orderStateTxt = "已完成";
                        }
                        row.Add("orderStateTxt", orderStateTxt);
                        rows.Add(row);
                        count++;
                    }

                }
                con.Close();
                //   page = page + 10;
                ret.Add("rows", rows);
                ret.Add("count", count);
                // ret.Add("page", page);

                return ret;
            }
            public static JSONObject addobjuser(JSONObject 请求参数)
            {
                //加载咨询师列表


                JSONObject ret = new JSONObject();
                JArray rows = new JArray();
                ret.Add("type", "admin_addobjuser_ret");

                string sql = @"select  userbusiness.userId,userbusiness.营业状态,userbusiness.咨询评分,userbusiness.最后接单日期,userbusiness.总订单量,
                    user.CName,user.存款,user.性别 from  userbusiness inner join user on userbusiness.userid=user.ID order by userbusiness.最后接单日期 desc ;";


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();


                //cmd.Parameters.AddWithValue("@page", page);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                int count = 0;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();

                        row.Add("userId", sdr["userId"].ToString());
                        row.Add("营业状态", sdr["营业状态"].ToString());
                        row.Add("咨询评分", sdr["咨询评分"].ToString());
                        row.Add("最后接单日期", sdr["最后接单日期"].ToString());
                        row.Add("总订单量", sdr["总订单量"].ToString());
                        row.Add("CName", sdr["CName"].ToString());
                        row.Add("存款", sdr["存款"].ToString());
                        row.Add("性别", sdr["性别"].ToString());







                        rows.Add(row);
                        count++;
                    }

                }
                con.Close();
                //   page = page + 10;
                ret.Add("rows", rows);
                ret.Add("count", count);





                return ret;

            }
            public static JSONObject order_list_objshenq(JSONObject 请求参数)
            {
                //加载咨询师申请列表


                JSONObject ret = new JSONObject();
                JArray rows = new JArray();
                ret.Add("type", "admin_add_addobjshenq_ret");

                string sql = @"select  applicationconsultant.userId,user.CName,applicationconsultant.申请日期,applicationconsultant.是否通过,user.手机号,applicationconsultant.input_age,applicationconsultant.input_gender,applicationconsultant.id as applicationconsultantId from user inner join applicationconsultant on user.id =applicationconsultant.userId order by  applicationconsultant.id desc ;";


                MySqlConnection con = new MySqlConnection();
                con.ConnectionString = 连接字符串;
                MySqlCommand cmd = new MySqlCommand();


                //cmd.Parameters.AddWithValue("@page", page);

                cmd.CommandText = sql;
                MySqlDataReader sdr = null;
                cmd.Connection = con;
                con.Open();
                int count = 0;
                if (con.State == System.Data.ConnectionState.Open)
                {
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        JSONObject row = new JSONObject();

                        row.Add("userId", sdr["userId"].ToString());
                        row.Add("CName", sdr["CName"].ToString());
                        row.Add("申请日期", sdr["申请日期"].ToString());
                        row.Add("是否通过", sdr["是否通过"].ToString());
                        row.Add("手机号", sdr["手机号"].ToString());
                        row.Add("input_age", sdr["input_age"].ToString());
                        row.Add("applicationconsultantId", sdr["applicationconsultantId"].ToString());
                        row.Add("input_gender", sdr["input_gender"].ToString());

                        rows.Add(row);
                        count++;
                    }

                }
                con.Close();
                //   page = page + 10;
                ret.Add("rows", rows);
                ret.Add("count", count);





                return ret;

            }

        }


        public class weixin
        {


            public static async void access_token()
            {
                if (MemoryCache.Get("access_token") == null)
                {
                    var queryString = HttpUtility.ParseQueryString(string.Empty);
                    queryString["grant_type"] = "client_credential";
                    queryString["appid"] = "wxeb2f7e50c8951e05";
                    queryString["secret"] = "678b776a6e7736ec407ebc5df5902ab5";

                    var uri = "https://api.weixin.qq.com/cgi-bin/token?" + queryString;

                    HttpResponseMessage response;
                    var hc = new HttpClient();
                    response = await hc.GetAsync(uri);

                    var msg = await response.Content.ReadAsStringAsync();
                    var jsonobj = Newtonsoft.Json.Linq.JObject.Parse(msg);


                    using (var ce = MemoryCache.CreateEntry("access_token"))
                    {
                        ce.Value = (string)jsonobj["access_token"];
                        ce.AbsoluteExpirationRelativeToNow = new TimeSpan(0, 0, 0);
                    }
                    // HttpRuntime.Cache.Add("access_token",
                    //     (string)jsonobj["access_token"],
                    //     null,
                    //     DateTime.Now.AddMinutes((int)jsonobj["expires_in"]),
                    //     new TimeSpan(0, 0, 0),
                    //     System.Web.Caching.CacheItemPriority.AboveNormal,
                    //     null
                    //     );


                }
            }
            public static async void jsapi()
            {
                if (MemoryCache.Get("jsapi_ticket") == null)
                {

                    var queryString = HttpUtility.ParseQueryString(string.Empty);
                    queryString["access_token"] = (string)MemoryCache.Get("access_token");
                    queryString["type"] = "jsapi";

                    var uri = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?" + queryString;

                    HttpResponseMessage response;


                    var hc = new HttpClient();
                    response = await hc.GetAsync(uri);
                    var msg = await response.Content.ReadAsStringAsync();
                    var jsonobj = Newtonsoft.Json.Linq.JObject.Parse(msg);
                    if (jsonobj["errcode"] != null && jsonobj["errcode"].ToString() != "")
                    {
                        tool.输出log记录("获取jsapi_ticket时出错，返回错误代码为" + jsonobj["errcode"]);
                        return;
                    }
                    using (var ce = MemoryCache.CreateEntry("jsapi_ticket"))
                    {
                        ce.Value = (string)jsonobj["ticket"];
                        ce.AbsoluteExpirationRelativeToNow = new TimeSpan(0, 0, 0);
                    }
                    //HttpRuntime.Cache.Add("jsapi_ticket", (string)jsonobj["ticket"], null, DateTime.Now.AddMinutes((int)jsonobj["expires_in"]), new TimeSpan(0, 0, 0), System.Web.Caching.CacheItemPriority.AboveNormal, null);
                }
            }
            public static JSONObject getSignature(JSONObject 请求参数)
            {
                string url = 请求参数["url"].ToString();
                access_token();
                jsapi();
                JSONObject ret = new JSONObject();
                //string AppId = "wxeb2f7e50c8951e05";
                //string AppSecret = "678b776a6e7736ec407ebc5df5902ab5";
                string noncestr = CreatenNonce_str();//随机字符串
                long timestamp = CreatenTimestamp();//时间戳

                // string access_token = (string)HttpRuntime.Cache["access_token"]; //获取全局的access_token
                string jsapi_ticket = (string)MemoryCache.Get("jsapi_ticket"); //获取jsapi_ticket

                string strSha1 = string.Format("jsapi_ticket={0}&noncestr={1}&timestamp={2}&url={3}", jsapi_ticket, noncestr, timestamp, url);
                string signature = tool.Get16MD5One(strSha1).ToLower();

                ret.Add("type", "getSignature_ret");
                ret.Add("noncestr", noncestr);
                ret.Add("timestamp", timestamp);
                ret.Add("signature", signature);

                return ret;
            }
            private static string[] strs = new string[]
    {
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
    };
            /// <summary>
            /// 创建随机字符串 
            /// </summary>
            /// <returns></returns>
            public static string CreatenNonce_str()
            {
                Random r = new Random();
                var sb = new StringBuilder();
                var length = strs.Length;
                for (int i = 0; i < 15; i++)
                {
                    sb.Append(strs[r.Next(length - 1)]);
                }
                return sb.ToString();
            }
            /// <summary>
            /// 创建时间戳 
            /// </summary>
            /// <returns></returns>

            public static long CreatenTimestamp()
            {

                return (DateTime.Now.ToUniversalTime().Ticks - 621355968000000000) / 10000000;
            }

            // public void ConfigureServices(IServiceCollection services)
            // {
            //     services.AddMemoryCache();
            //     services.AddMvc();
            // }
            // public class HomeController : Controller
            // {
            //     private IMemoryCache _cache;

            //     public HomeController(IMemoryCache memoryCache)
            //     {
            //         _cache = memoryCache;

            //     }

            // }


        }
        public class 定时维护
        {
            public static void startTime处理掉线()
            {
                System.Timers.Timer timer = new System.Timers.Timer();
                timer.Enabled = true;
                timer.Interval = 60000;//执行间隔时间,单位为毫秒   1分钟
                timer.Start();
                timer.Elapsed += new System.Timers.ElapsedEventHandler(Timer2_Elapsed);
                tool.输出log记录("startTime处理掉线()!");
            }
            public static void Timer2_Elapsed(object sender, System.Timers.ElapsedEventArgs e)
            {
                tool.输出log记录("Timer2_Elapsed()! 开始处理掉线");
                tool.定时遍历清除掉线();
            }
        }

    }



}
