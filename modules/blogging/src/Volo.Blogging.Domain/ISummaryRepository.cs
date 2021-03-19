using System.Threading.Tasks;

namespace Volo.Blogging.Blogs
{
    public interface ISummaryRepository
    {
        Task<decimal> GetBalance(int userId);
        Task<int> Transfer(int from, int to, decimal amount);
    }
}
