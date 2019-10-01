using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;


using Microsoft.AspNetCore.Http;



namespace TodoApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDistributedMemoryCache();//启用session之前必须先添加内存
            services.AddSession(opt =>
               {
                   opt.Cookie.IsEssential = true;

                   opt.Cookie.Domain = "localhost";
                   opt.Cookie.SameSite = Microsoft.AspNetCore.Http.SameSiteMode.None;
               });

            services.Configure<CookiePolicyOptions>(options =>
                        {
                            // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                            options.CheckConsentNeeded = context => false;//这里要改为false，默认是true，true的时候session无效
                            options.MinimumSameSitePolicy = SameSiteMode.None;


                        });

            // services.AddSession();// 添加session服务
            services.AddCors(options =>
            {


                options.AddPolicy("全局跨域",
                    p =>
                    {
                        p.SetIsOriginAllowed(origin => true)
                     //允许任何来源的主机访问
                     //   .WithOrigins("*")    ////允许http://localhost:8080的主机访问\\
                     //  .AllowAnyOrigin()

                     .AllowAnyHeader()
                             .AllowAnyMethod()

                               .AllowCredentials()
                            ;


                    });
            }

          );




            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }




        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseSession();// 启用session
            app.UseCors("全局跨域");
            app.UseStaticFiles();//使用静态文件
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
