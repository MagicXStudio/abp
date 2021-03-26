using System.Threading.Tasks;

namespace ABP.Hello.Data
{
    public interface IHelloDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
