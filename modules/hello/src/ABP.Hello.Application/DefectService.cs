using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Caching;
using Volo.Abp.Domain.Repositories;

namespace ABP.Hello
{
    [Authorize]
    public class DefectService :
        CrudAppService<
            Defect,
            DefectDto,
            string,
            PagedAndSortedResultRequestDto,
            DefectDto,
            DefectDto>
    {

        IRepository<Defect, string> Repository { get; }

        public DefectService(IRepository<Defect, string> repository, IDistributedCache<string> cache)
             : base(repository)
        {
            Repository = repository;
        }
        public  Task<List<Defect>> GetItemsAsync(PagedAndSortedResultRequestDto input)
        {
            input.Sorting = "ZIndex";
            input.MaxResultCount = 999;
            return Repository.GetListAsync(true);

        }
    }
}

