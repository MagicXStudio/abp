using MediatR;
using Volo.Abp.Account;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AutoMapper;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.TenantManagement;

namespace ABP.Hello
{
    [DependsOn(
        typeof(HelloDomainModule),
        typeof(AbpAccountApplicationModule),
        typeof(HelloApplicationContractsModule),
        typeof(AbpIdentityApplicationModule),
        typeof(AbpPermissionManagementApplicationModule),
        typeof(AbpTenantManagementApplicationModule),
        typeof(AbpFeatureManagementApplicationModule)
        )]
    public class HelloApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMediatR(mediatr => mediatr.AsScoped(), typeof(IEntityDto), typeof(EntityDto));
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<HelloApplicationModule>();
            });
        }
    }
}
