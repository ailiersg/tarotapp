using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aop.Api.Util;
using System.Collections;
using System.Collections.Specialized;
using System;
using Microsoft.AspNetCore.Http;
namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AliRefundController : ControllerBase
    {
        [HttpGet]
        public string test(string a)
        {
            return "error";
        }

        [HttpPost]
        public string refund(string d)
        {
            Program.tool.输出log记录("refund.aspx页面 Page_Load被执行");
            //支付宝的公钥
            string alipaypublicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApEdd7cyctmuuuiXrerHQTt6Qng0swOgP7+BzZxik3cHdEYvDmApFkTs95/HYuvOdM2rIFKJJ1jV/6ZnLO6PqReHbczQ/zwlJh7ytxNA63Uy9+eELTdxRhF7d3ZbljBO/jzwkIFLoGjDU/VVmw5BSi4RVrfvR4l6B1bJ9yFlKu7W3YfjJ0W+D5vntvo7KlUCIaZ13OsC71Fwy/4HcMkUQy4aUIr21tCb+o8gLVKuBFAN1kO2SIwscJmVlSgzJshO+nL2dpOUNQcYfJqLmxJBMo92EjAYqwxP+1th06k4n/W5jSS1mM5AMXevWKzzvGCt7gflk9dmPyT9STHJocQa75wIDAQAB";
            string charset = "UTF-8";
            if (Request.Form["out_trade_no"] != "")
            {

            }
            else
            {
                Program.tool.输出log记录(" Request.Form[out_trade_no] == null  error!");
                return ("error");


            }
            IFormCollection coll = Request.Form;
            bool flag = AlipaySignature.RSACheckV1(GetRequestPost(coll), alipaypublicKey, charset, "RSA2", false);
            if (flag)
            {
                Program.tool.输出log记录("flag 通过");
                string out_trade_no = Request.Form["out_trade_no"]; //商户订单号
                Program.tool.输出log记录("out_trade_no=" + out_trade_no);
                string trade_no = Request.Form["trade_no"];//支付宝交易号
                Program.tool.输出log记录("trade_no=" + trade_no);
                decimal refund_fee = Convert.ToDecimal(Request.Form["refund_fee"]); //退款总金额
                Program.tool.输出log记录("refund_fee=" + refund_fee);
                string gmt_refund_pay = Request.Form["gmt_refund_pay"]; //退款支付时间
                Program.tool.输出log记录("gmt_refund_pay=" + gmt_refund_pay);


                Program.money.退款后更新订单(out_trade_no);

                return ("success");

            }
            else
            {
                //验签失败

                Program.tool.输出log记录("flag 失败输出 failure");
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
}