
using Microsoft.AspNetCore.Mvc;

using System;

// using Senparc.Weixin.TenPay.V2;
using Senparc.Weixin.TenPay.V3;
// using Senparc.Weixin.MP.Sample;

namespace TodoApi.Controllers
{
     [Route("api/[controller]")]
    [ApiController]
    public class weCharPayController : ControllerBase
    {
        ///<summary>
        /// 微信支付回调地址
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public string PayNotifyUrl()
        {
            Console.WriteLine("---------PayNotifyUrl!-----------");
            // ResponseResult result = new ResponseResult();
            ResponseHandler resHandler = new ResponseHandler(HttpContext);
            string return_code = resHandler.GetParameter("return_code");
            string return_msg = resHandler.GetParameter("return_msg");
            Console.Write("return_msg=" + return_msg);

            try
            {

                resHandler.SetKey("z76h28p279z76h28p279kidjs7dh82k1");

                var notifyXml = resHandler.ParseXML();
                bool signFlag = resHandler.IsTenpaySign();
                if (signFlag && return_code.ToUpper() == "SUCCESS")
                {
                    string attach = resHandler.GetParameter("attach");
                    string device_info = resHandler.GetParameter("device_info");
                    string out_trade_no = resHandler.GetParameter("out_trade_no");
                    string transaction_id = resHandler.GetParameter("transaction_id");
                    string total_fee = resHandler.GetParameter("total_fee");

                    // PayOrderNotifyParam param = new PayOrderNotifyParam()
                    // {
                    //     PayNo = out_trade_no,
                    //     Attach = attach,
                    //     PayPrice = decimal.Parse(total_fee) / 100,
                    //     TransactionNo = transaction_id,
                    // };

                    //回调参数说明：https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_7&index=3
                    //Logger.Info(string.Format("支付回调接收参数成功，notifyXml={0},param={1}", notifyXml, param.SerializeObject()));

                    // result = Service.PayNotifyUrl(param);

                    //正确的订单处理
                    TodoApi.Program.money.付款后更新订单(total_fee, out_trade_no);
                    TodoApi.Program.tool.输出log记录("TodoApi.Program.money.付款后更新订单 ok");



                    string xml = string.Format(@"<xml>
       <return_code><![CDATA[{0}]]></return_code>
       <return_msg><![CDATA[{1}]]></return_msg>
       </xml>", return_code, return_msg);

                    return xml;

                }
                else
                {
                    TodoApi.Program.tool.输出log记录("TodoApi.Program.money.付款后更新订单 验证失败");
                    Console.Write(" 验证失败");
                    //错误的订单处理
                    //  Logger.Error(string.Format("支付回调接失败，signFlag={0},notifyXml={1}", signFlag, notifyXml));
                }


            }
            catch (Exception ex)
            {
                Console.Write(" 验证失败2="+ex);
                //   Logger.Error(string.Format("支付回调异常：Message={0}，StackTrace={1}", ex.Message, ex.StackTrace));
            }

            return "fail";
        }
        [HttpGet]
        public string get1(){
            return "error";
        }
        //         [HttpPost]
        //         public string WxNotify()
        //         {
        //              Console.WriteLine("HttpContext="+HttpContext.ToString());
        //             ResponseHandler resHandler = new ResponseHandler(HttpContext);


        //             string return_code = resHandler.GetParameter("return_code");

        //             string return_msg = resHandler.GetParameter("return_msg");
        //             string out_trade_no = resHandler.GetParameter("out_trade_no");//订单号
        //             string total_fee = resHandler.GetParameter("total_fee");//订单金额，单位分
        //             total_fee = (Convert.ToDecimal(total_fee) / 100).ToString("#0.00");//订单金额，单位元

        //             string res = null;


        //             resHandler.SetKey("z76h28p279z76h28p279kidjs7dh82k1");
        //             //验证请求是否从微信发过来（安全）
        //             if (resHandler.IsTenpaySign())
        //             {
        //                 res = "success";


        //                 //正确的订单处理
        //                 TodoApi.Program.money.付款后更新订单(total_fee, out_trade_no);
        //                 TodoApi.Program.tool.输出log记录("TodoApi.Program.money.付款后更新订单 ok");
        //             }
        //             else
        //             {
        //                 res = "wrong";
        //                 TodoApi.Program.tool.输出log记录("TodoApi.Program.money.付款后更新订单 失败");

        //                 //错误的订单处理
        //             }

        //             return res;
        //         }
    }
}