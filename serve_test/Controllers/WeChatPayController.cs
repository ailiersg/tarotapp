
using Microsoft.AspNetCore.Mvc;

using System;

// using Senparc.Weixin.TenPay.V2;
using Senparc.Weixin.TenPay.V3;
// using Senparc.Weixin.MP.Sample;

namespace TodoApi.Controllers
{
    public class weCharPayController : ControllerBase
    {
        [HttpPost]
        public string WxNotify()
        {
            ResponseHandler resHandler = new ResponseHandler(HttpContext);


            string return_code = resHandler.GetParameter("return_code");
            string return_msg = resHandler.GetParameter("return_msg");
            string out_trade_no = resHandler.GetParameter("out_trade_no");//订单号
            string total_fee = resHandler.GetParameter("total_fee");//订单金额，单位分
            total_fee = (Convert.ToDecimal(total_fee) / 100).ToString("#0.00");//订单金额，单位元

            string res = null;


            resHandler.SetKey("z76h28p279z76h28p279kidjs7dh82k1");
            //验证请求是否从微信发过来（安全）
            if (resHandler.IsTenpaySign())
            {
                res = "success";


                //正确的订单处理
                TodoApi.Program.money.付款后更新订单(total_fee, out_trade_no);
                TodoApi.Program.tool.输出log记录("TodoApi.Program.money.付款后更新订单 ok");
            }
            else
            {
                res = "wrong";
                TodoApi.Program.tool.输出log记录("TodoApi.Program.money.付款后更新订单 失败");

                //错误的订单处理
            }

            return res;
        }
    }
}