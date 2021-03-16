using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace Volo.BloggingTestApp
{
    public class Program
    {
        public static int Main(string[] args)
        {
            Activity.DefaultIdFormat = ActivityIdFormat.W3C;
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .CreateLogger();

            try
            {
                Log.Information("启动 Web Host.");
                CreateHostBuilder(args).Build().Run();
                return 0;
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "Host terminated unexpectedly!");
                return 1;
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        internal static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(config =>
                {
                    config
                        .AddJsonFile("serilog.json", false, true)
                        .AddJsonFile("admin.json", false, true)
                        .AddEnvironmentVariables();
                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                })
                .UseAutofac()
                .UseSerilog((HostBuilderContext hostingContext, LoggerConfiguration loggerConfig) =>
                {
                    LoggerConfiguration config = loggerConfig.ReadFrom.Configuration(hostingContext.Configuration);
                }
                );
    }
}
