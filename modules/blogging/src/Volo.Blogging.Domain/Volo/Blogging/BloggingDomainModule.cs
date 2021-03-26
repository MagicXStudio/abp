﻿using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Domain;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.TenantManagement;
using Volo.Blogging.Blogs;
using Volo.Blogging.Comments;
using Volo.Blogging.Posts;
using Volo.Blogging.Tagging;

namespace Volo.Blogging
{
    [DependsOn(
        typeof(BloggingDomainSharedModule),
        typeof(AbpDddDomainModule),
        typeof(AbpTenantManagementDomainModule),
        typeof(AbpAutoMapperModule))]
    public class BloggingDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<BloggingDomainModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<BloggingDomainMappingProfile>(validate: true);
            });
            Configure<AbpMultiTenancyOptions>(options =>
            {
                options.IsEnabled =true;
                options.DatabaseStyle = MultiTenancyDatabaseStyle.Hybrid;
            });
            Configure<AbpDistributedEntityEventOptions>(options =>
            {
                options.EtoMappings.Add<Blog, BlogEto>(typeof(BloggingDomainModule));
                options.EtoMappings.Add<Comment, CommentEto>(typeof(BloggingDomainModule));
                options.EtoMappings.Add<Post, PostEto>(typeof(BloggingDomainModule));
                options.EtoMappings.Add<Tag, TagEto>(typeof(BloggingDomainModule));
            });
        }
    }
}
