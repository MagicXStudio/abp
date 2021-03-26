using ABP.Hello.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ABP.Hello.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class HelloPageModel : AbpPageModel
    {
        protected HelloPageModel()
        {
            LocalizationResourceType = typeof(HelloResource);
        }
    }
}