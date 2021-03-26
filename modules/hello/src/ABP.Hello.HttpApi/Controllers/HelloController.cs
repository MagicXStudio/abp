using ABP.Hello.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ABP.Hello.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class HelloController : AbpController
    {
        protected HelloController()
        {
            LocalizationResource = typeof(HelloResource);
        }
    }
}