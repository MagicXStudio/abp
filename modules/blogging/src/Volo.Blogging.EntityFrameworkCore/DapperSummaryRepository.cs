using Dapper;
using System.Data;
using System.Data.Common;
using System.Threading.Tasks;
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

        public async Task<decimal> GetBalance(int userId)
        {
            string queryCommand = @"
                          SELECT [Balance]
                          FROM [Transaction] WITH(tablock)
                          WHERE  [UserId]=@UserId 
                        ";
            IDbConnection conn = await GetDbConnectionAsync();
            IDbTransaction tran = await GetDbTransactionAsync();
            return await conn.QueryFirstAsync<decimal>(queryCommand, new { UserId = userId }, transaction: tran);
        }

        public async Task<int> Transfer(int from, int to, decimal amount)
        {
            string queryCommand = @"
                          SELECT [Balance]
                          FROM [Transaction] WITH(tablock)
                          WHERE  [UserId]=@UserId 
                        ";

            string sql = @"
                            UPDATE [Transaction]
                            SET [Balance]=[Balance]+@Amount
                            WHERE  [UserId]=@To;
                            UPDATE [Transaction]
                            SET [Balance]=[Balance]-@Amount
                            WHERE  [UserId]=@From;
                        ";
            int retval = 0;
            IDbConnection conn = await GetDbConnectionAsync();
            conn.Open();
            IDbTransaction tran = conn.BeginTransaction(IsolationLevel.ReadUncommitted);
            try
            {
                decimal balance = await conn.QueryFirstAsync<decimal>(queryCommand, new { UserId = from }, transaction: tran);
                if (balance < amount)
                {
                    retval = -1;
                    return retval;
                }
                retval = conn.Execute(sql, new { From = from, To = to, Amount = amount }, transaction: tran);
                tran.Commit();
                balance = await GetBalance(from);
            }
            catch (DbException ex)
            {
                tran.Rollback();
            }
            finally
            {
                tran.Dispose();
                conn.Close();
                conn.Dispose();
            }
            return retval;
        }
    }
}
