using ABP.Hello.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ABP.Hello
{
    [DependsOn(
        typeof(HelloEntityFrameworkCoreTestModule)
        )]
    public class HelloDomainTestModule : AbpModule
    {

    }
}