using System;
using System.Collections.Generic;
using System.Text;
using ABP.Hello.Localization;
using Volo.Abp.Application.Services;

namespace ABP.Hello
{
    /* Inherit your application services from this class.
     */
    public abstract class HelloAppService : ApplicationService
    {
        protected HelloAppService()
        {
            LocalizationResource = typeof(HelloResource);
        }
    }
}
