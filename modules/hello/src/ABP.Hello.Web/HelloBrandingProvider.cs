using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace ABP.Hello.Web
{
    [Dependency(ReplaceServices = true)]
    public class HelloBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Hello";
    }
}
