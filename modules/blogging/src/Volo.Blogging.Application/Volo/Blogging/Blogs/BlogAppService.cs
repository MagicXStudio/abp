using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Uow;
using Volo.Blogging.Blogs.Dtos;

namespace Volo.Blogging.Blogs
{
    public class BlogAppService : BloggingAppServiceBase, IBlogAppService
    {
        private readonly IBlogRepository _blogRepository;
        ISummaryRepository SummaryRepository { get; }

        public BlogAppService(IBlogRepository blogRepository,  ISummaryRepository summaryRepository)
        {
            //IOptionsMonitor<AuthorizationOptions> options, ILogger logger,
            _blogRepository = blogRepository;
          //  Logger = logger;
            SummaryRepository = summaryRepository;
        }

        protected ILogger Logger { get; }
        public async Task<ListResultDto<BlogDto>> GetListAsync()
        {
            var blogs = await _blogRepository.GetListAsync();
            await SummaryRepository.Transfer(1, 2, 3);
            return new ListResultDto<BlogDto>(
                ObjectMapper.Map<List<Blog>, List<BlogDto>>(blogs)
            );
        }

        public async Task<BlogDto> GetByShortNameAsync(string shortName)
        {
            Check.NotNullOrWhiteSpace(shortName, nameof(shortName));

            var blog = await _blogRepository.FindByShortNameAsync(shortName);

            if (blog == null)
            {
                throw new EntityNotFoundException(typeof(Blog), shortName);
            }

            return ObjectMapper.Map<Blog, BlogDto>(blog);
        }

        [UnitOfWork(false, IsolationLevel.ReadUncommitted, 20)]
        public async Task<BlogDto> GetAsync(Guid id)
        {
            var blog = await _blogRepository.GetAsync(id);

            return ObjectMapper.Map<Blog, BlogDto>(blog);
        }
    }
}
