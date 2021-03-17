using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories.Dapper;
using Volo.Abp.EntityFrameworkCore;
using Volo.Blogging.EntityFrameworkCore;

namespace Volo.Blogging.Blogs
{
    public class DapperSummaryRepository : DapperRepository<BloggingDbContext>, ITransientDependency, ISummaryRepository
    {
        public DapperSummaryRepository(IDbContextProvider<BloggingDbContext> dbContextProvider) : base(dbContextProvider)
        {

        }
    }
}
