using Microsoft.Extensions.Logging;
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Linq;

namespace Volo.Blogging.Admin
{
    public class AdminSafeMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<AdminSafeMiddleware> _logger;
        private readonly byte[][] _safelist;

        public AdminSafeMiddleware(RequestDelegate next, ILogger<AdminSafeMiddleware> logger, string safelist)
        {
            string[] ips = safelist.Split(';');
            _safelist = new byte[ips.Length][];
            for (var i = 0; i < ips.Length; i++)
            {
                _safelist[i] = IPAddress.Parse(ips[i]).GetAddressBytes();
            }
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context)
        {
            IPAddress remoteIp = context.Connection.RemoteIpAddress;
            _logger.LogInformation($"AdminSafeMiddleware 客户端IP：{remoteIp}");
            if (context.Request.Path.Value != "Admin")
            {
                byte[] bytes = remoteIp.GetAddressBytes();
                bool badIp = true;
                foreach (var address in _safelist)
                {
                    if (address.SequenceEqual(bytes))
                    {
                        badIp = false;
                        break;
                    }
                }
                if (badIp)
                {
                    _logger.LogWarning("Forbidden Request from Remote IP address: {RemoteIp}", remoteIp);
                    context.Response.StatusCode = StatusCodes.Status403Forbidden;
                    return;
                }
            }
            await _next.Invoke(context);
        }
    }
}
