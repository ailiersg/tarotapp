
using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.AspNetCore.Http;

using JSONObject = Newtonsoft.Json.Linq.JObject;
using System.Security.Cryptography;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class mainController : ControllerBase
    {
        static JSONObject tou;




        [HttpGet]
        public string get(string data)
        {
            // try
            // {
            //     tou = JSONObject.Parse(data);

            //     //  string userid="1";
            //     //  string userpasword="123";
            //     //  string mw=userid+userpasword;

            //     //  HttpContext.Session.SetString("token",Program.tool.Get32MD5One(mw));

            Console.Write("get data=" + data);

            try
            {
                tou = JSONObject.Parse(data);


            }
            catch (Exception)
            {
                string a1 = "{'type':'error','message':'string change JSONObject Error'}";
                a1 = a1.Replace("\'", "\"");
                return a1;
            }

            if (Request.Headers["token"].ToString().Trim() != "")
            {
                string retxt = Program.tool.AES.Decode(Request.Headers["token"].ToString(), "jsd7yfjysd98f7");
                JSONObject obj;
                obj = JSONObject.Parse(retxt);

                //-----判断有效期 start
                DateTime objdatetime = (Convert.ToDateTime(obj["date"]));
                DateTime carrdatetime = DateTime.Now;
                TimeSpan ts = carrdatetime - objdatetime;
                if (ts.Days < 30)
                {
                    //有效

                    tou.Add("islogin", true);
                    tou.Add("crrloginuserid", obj["userid"].ToString());

                }
                else
                {
                    tou.Add("islogin", false);
                }

            }
            else
            {

                try
                {
                    tou.Add("islogin", false);
                }
                finally
                {

                }

            }

            return TodoApi.Program.请求接口.请求处理(tou.ToString()).ToString();









        }
        [HttpPost]
        public string post(string data_)
        {

            string data = Request.Form["data"];

            try
            {
                tou = JSONObject.Parse(data);

            }
            catch (Exception)
            {
                string a1 = "{'type':'error','message':'string change JSONObject Error'}";
                a1 = a1.Replace("\'", "\"");
                return a1;
            }



            if (Request.Headers["token"].ToString().Trim() != null)
            {
                string retxt = Program.tool.AES.Decode(Request.Headers["token"].ToString(), "jsd7yfjysd98f7");

                JSONObject obj;
                obj = JSONObject.Parse(retxt);

                //-----判断有效期 start
                DateTime objdatetime = (Convert.ToDateTime(obj["date"]));
                DateTime carrdatetime = DateTime.Now;
                TimeSpan ts = carrdatetime - objdatetime;
                if (ts.Days < 30)
                {
                    //有效


                    if (tou["type"] != null)
                    {
                        if (tou["type"].ToString() == "checkLogin")
                        {
                            //这个请求是判断是否登录
                            JSONObject ret = new JSONObject();
                            ret.Add("type", "checkLogin");
                            ret.Add("islogin", 0);

                        }
                    }

                    if (tou["type"] != null)
                    {
                        //对于创建订单支付接口添加请求方ip
                        if (tou["type"].ToString() == "generateOrder")
                        {
                            Console.WriteLine("当前获取的客户端ip为====" + HttpContext.Connection.RemoteIpAddress.ToString());
                            tou.Add("addres", HttpContext.Connection.RemoteIpAddress.ToString());
                        }
                    }
                    return TodoApi.Program.请求接口.请求处理(tou.ToString()).ToString();

                }
                else
                {
                    //过期
                    JSONObject ret = new JSONObject();
                    ret.Add("type", "error");
                    ret.Add("msg", "date  expire");


                    //这个请求是判断是否登录
                    if (tou["type"] != null)
                    {
                        if (tou["type"].ToString() == "checkLogin")
                        {

                            ret["type"] = "type";
                            ret.Add("islogin", 0);

                        }
                    }

                    return ret.ToString();

                }
                //-----判断有效期 end

            }
            else
            {
                JSONObject ret = new JSONObject();
                ret.Add("type", "error");
                ret.Add("msg", "token is null");


                //这个请求是判断是否登录
                if (tou["type"] != null)
                {
                    if (tou["type"].ToString() == "checkLogin")
                    {

                        ret["type"] = "type";
                        ret.Add("islogin", 0);

                    }
                }

                return ret.ToString();
            }



        }




    }

}