using Volo.Abp.Modularity;

namespace ABP.Hello
{
    [DependsOn(
        typeof(HelloApplicationModule),
        typeof(HelloDomainTestModule)
        )]
    public class HelloApplicationTestModule : AbpModule
    {

    }
}