

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Session;
using Aop.Api.Util;
using System.Collections;
using System.Collections.Specialized;
using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication;
using JSONObject = Newtonsoft.Json.Linq.JObject;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc.Formatters;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class loginController : ControllerBase
    {
        static JSONObject tou;
        [HttpGet]
        public string get(string data)
        {
            JSONObject ret = new JSONObject(); ;
            ret.Add("type", "error");

            return data;
        }
        [HttpPost]
        public string post(string data_)
        {
            string data = Request.Form["data"];
            Console.WriteLine("login data=" + data);

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

            JSONObject ret = TodoApi.Program.请求接口.请求处理(tou.ToString());
            //return  TodoApi.Program.请求接口.请求处理(tou.ToString()).ToString();
            if (ret["code"].ToString() == "200")
            {
                Console.WriteLine("login ok=" + ret["code"].ToString());
                //token md5 = 手机号 + 短信验证码 

                //  string token = Program.tool.Get32MD5One(ret["phonenumber"].ToString() + ret["VerificationCode"].ToString());
                //--构造token json对象 start
                JSONObject token = new JSONObject();
                token.Add("userid", ret["userid"].ToString());
                token.Add("date", DateTime.Now.ToString("yyyy-MM-dd HH:mm"));

                //--构造token json对象 end

                //--加密  start
                string ciphertext = Program.tool.AES.Encode(token.ToString(), "jsd7yfjysd98f7");
                //  string ciphertext = Program.tool.AES.Encode(token.ToString(), "HttpContextSessionSetString");
                //  Console.WriteLine("密文=" + ciphertext);

                //--加密 end

                //  Console.WriteLine("login token=" + token);
                // Response.HttpContext.Session.SetString("token", token.ToString());
                // Response.HttpContext.Session.SetString("userid", ret["userid"].ToString());

                ret.Add("token", ciphertext);
            }




            return ret.ToString();
        }
        //加密




    }

}