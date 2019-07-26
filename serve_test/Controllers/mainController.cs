
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

            tou.Add("islogin", false);

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

            }

            return TodoApi.Program.请求接口.请求处理(tou.ToString()).ToString();

            //     return TodoApi.Program.请求接口.请求处理(tou.ToString()).ToString();
            // }
            // catch (Exception)
            // {
            //     Console.WriteLine("token=" + HttpContext.Session.GetString("token"));

            //     string a1 = "{'type':'error','message':'string change JSONObject Error'}";
            //     a1 = a1.Replace("\'", "\"");
            //     return a1;
            // }








        }
        [HttpPost]
        public string post(string data_)
        {

            // Console.WriteLine("cookie-------=" + Request.Cookies["cookie"]);
            // Response.Cookies.Append("cookie", "ok",new CookieOptions(){IsEssential=true,HttpOnly=true,SameSite=Microsoft.AspNetCore.Http.SameSiteMode.None,Domain="localhost"});
            // Console.WriteLine("cookie-------=" + Request.Cookies["cookie"]);

            // Console.WriteLine("session-------=" + HttpContext.Session.GetString("cookie"));
            // HttpContext.Session.SetString("cookie", "ok");
            // Console.WriteLine("session-------=" + HttpContext.Session.GetString("cookie"));
            //  Console.WriteLine("请求token=" + Request.HttpContext.Session.GetString("token"));


            // Console.WriteLine("加密=" + ciphertext);
            // Console.WriteLine("解密=" + );
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

                    string data = Request.Form["data"];

                    try
                    {
                        tou = JSONObject.Parse(data);
                        return TodoApi.Program.请求接口.请求处理(tou.ToString()).ToString();
                    }
                    catch (Exception)
                    {
                        string a1 = "{'type':'error','message':'string change JSONObject Error'}";
                        a1 = a1.Replace("\'", "\"");
                        return a1;
                    }

                }
                else
                {
                    //过期
                    JSONObject ret = new JSONObject();
                    ret.Add("tyoe", "error");
                    ret.Add("msg", "date  expire");
                    return ret.ToString();

                }
                //-----判断有效期 end

            }
            else
            {
                JSONObject ret = new JSONObject();
                ret.Add("tyoe", "error");
                ret.Add("msg", "token is null");
                return ret.ToString();
            }

            // string token = Request.Headers["token"];
            // Console.WriteLine("token=" + token);


        }




    }

}