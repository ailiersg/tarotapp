using Microsoft.AspNetCore.Mvc;

using System.Collections.Generic;
using System.Linq;

using Alipay.AopSdk.Core.Util;
using System;
using Microsoft.AspNetCore.Http;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Alipay : ControllerBase
    {
        [HttpGet]
        public string test(string a)
        {
            return "error";
        }

        [HttpPost]
        public string pay(string d)
        {
            string a = Request.Form["d"].ToString();


            return "{d:" + a + "}";

            Program.tool.输出log记录("pay.aspx页面 Page_Load被执行");
            //支付宝的公钥
            string alipaypublicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApEdd7cyctmuuuiXrerHQTt6Qng0swOgP7+BzZxik3cHdEYvDmApFkTs95/HYuvOdM2rIFKJJ1jV/6ZnLO6PqReHbczQ/zwlJh7ytxNA63Uy9+eELTdxRhF7d3ZbljBO/jzwkIFLoGjDU/VVmw5BSi4RVrfvR4l6B1bJ9yFlKu7W3YfjJ0W+D5vntvo7KlUCIaZ13OsC71Fwy/4HcMkUQy4aUIr21tCb+o8gLVKuBFAN1kO2SIwscJmVlSgzJshO+nL2dpOUNQcYfJqLmxJBMo92EjAYqwxP+1th06k4n/W5jSS1mM5AMXevWKzzvGCt7gflk9dmPyT9STHJocQa75wIDAQAB";
            string charset = "UTF-8";

            if (Request.Form["out_trade_no"] != "")
            {

            }
            else
            {
                return ("error");

            }


            IFormCollection coll = Request.Form;

            // NameValueCollection coll;
            // //Load Form variables into NameValueCollection variable.
            // coll = Request.Form;


            // Get names of all forms into a string array.



            bool flag = AlipaySignature.RSACheckV1(GetRequestPost(coll), alipaypublicKey, charset, "RSA2", false);
            if (flag)
            {
                TodoApi.Program.tool.输出log记录("flag 通过");
                //
                string out_trade_no = Request.Form["out_trade_no"];
                TodoApi.Program.tool.输出log记录("out_trade_no=" + out_trade_no);
                decimal total_amount = Convert.ToDecimal(Request.Form["total_amount"]);
                TodoApi.Program.tool.输出log记录("total_amount=" + total_amount);
                string seller_id = Request.Form["seller_id"];
                TodoApi.Program.tool.输出log记录("seller_id=" + seller_id);
                string app_id = Request.Form["app_id"];
                TodoApi.Program.tool.输出log记录("app_id=" + app_id);
                string trade_status = Request.Form["trade_status"];
                TodoApi.Program.tool.输出log记录("trade_status=" + trade_status);


                decimal 应付款 = TodoApi.Program.money.根据订单查询要付款金额(out_trade_no);
                TodoApi.Program.tool.输出log记录("根据订单查询要付款金额()=应付款=" + 应付款);
                TodoApi.Program.tool.输出log记录("应付款== total_amount---" + 应付款 + "==" + total_amount);
                if (应付款 == total_amount)
                {
                    TodoApi.Program.tool.输出log记录("应付款== total_amount 应付款判断成功");

                    //第二部 验证 app_id
                    string appid = "2017071307744801";
                    TodoApi.Program.tool.输出log记录("appid=app_id" + appid + "==" + app_id);
                    if (app_id == appid)
                    {
                        TodoApi.Program.tool.输出log记录("appid验证通过");

                        if (trade_status == "WAIT_BUYER_PAY")
                        {
                            //交易创建，等待买家付款
                            TodoApi.Program.tool.输出log记录("交易创建，等待买家付款");
                            return ("success");
                        }
                        else if (trade_status == "TRADE_CLOSED")
                        {
                            //未付款交易超时关闭，或支付完成后全额退款
                            TodoApi.Program.tool.输出log记录("未付款交易超时关闭，或支付完成后全额退款");
                            return ("success");
                        }
                        else if (trade_status == "TRADE_SUCCESS" || trade_status == "TRADE_FINISHED")
                        {
                            //交易支付成功 or 交易结束，不可退款
                            //更新订单
                            if (TodoApi.Program.money.付款后更新订单(total_amount.ToString(), out_trade_no))
                            {

                                TodoApi.Program.tool.输出log记录("付款后更新订单 ok 输出 success 程序执行完成");
                                return ("success");

                            }
                            else
                            {
                                TodoApi.Program.tool.输出log记录("付款后更新订单 失败");
                                return ("failure");

                            }
                        }
                        else
                        {
                            TodoApi.Program.tool.输出log记录(" error trade_status 不是任何一种");
                            return ("failure");

                        }


                    }
                    else
                    {
                        TodoApi.Program.tool.输出log记录("appid验证失败 输出 failure");
                        return ("failure");
                    }

                }
                else
                {
                    TodoApi.Program.tool.输出log记录("应付款== total_amount 应付款判断失败 输出 failure");
                    return ("failure");
                }


            }
            else
            {
                //验签失败

                TodoApi.Program.tool.输出log记录("flag 失败输出 failure");
                return ("failure");
            }

            //string 订单号 = c["out_trade_no"].ToString();
            //string 买家支付宝账号 = c["buyer_logon_id"].ToString();
            //string 实际收到的款 = c["receipt_amount"].ToString();
            //string 交易状态 = c["trade_status"].ToString();//TRADE_SUCCESS	TRADE_FINISHED 交易支付成功


        }
        public Dictionary<string, string> GetRequestPost(IFormCollection coll)
        {
            int i = 0;

            Dictionary<string, string> sArray = new Dictionary<string, string>();
            // NameValueCollection coll1;
            //Load Form variables into NameValueCollection variable.
            //  coll = Request.Form;


            // Get names of all forms into a string array.
            String[] requestItem = coll.Keys.ToArray();

            for (i = 0; i < requestItem.Length; i++)
            {
                sArray.Add(requestItem[i], Request.Form[requestItem[i]]);
            }

            return sArray;
        }

    }
    public class tool
    {

    }
}