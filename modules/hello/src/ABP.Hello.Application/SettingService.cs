using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Caching;
using Volo.Abp.Security.Encryption;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;

namespace LintSense.Inspection.Dashboard
{
    /// <summary>
    /// 
    /// </summary>
    public class SettingService : ApplicationService
    {
        IDistributedCache<SettingCacheItem> Cache { get; }
        private ISettingManagementStore SettingManagementStore { get; }
        private readonly IStringEncryptionService _encryptionService;
        public SettingService(
        IDistributedCache<SettingCacheItem> cache,
        IStringEncryptionService encryptionService,
        ISettingManagementStore settingManagementStore)
        {
            _encryptionService = encryptionService;
            SettingManagementStore = settingManagementStore;
            Cache = cache;
        }

        public async Task<List<object>> GetAllAsync(string providerName, string providerKey)
        {
            IOrderedEnumerable<PropertyInfo> properties = typeof(SettingValue).GetProperties().OrderBy(item => item.Name);
            List<SettingValue> values = new List<SettingValue>();
            providerKey = string.IsNullOrEmpty(providerKey) ? CurrentTenant.Id.Value.ToString() : providerKey;
            List<SettingValue> items = await SettingManagementStore.GetListAsync(providerName, providerKey);
            IEnumerable<SettingValue> settings = items.Concat(values);

            var groups = from s in settings
                         group s by s.Name into gg
                         where gg.Count()>0
                         select new
                         {
                             gg.Key,
                             Items = gg.ToList()
                         };
            List<object> list = new List<object>();
            foreach (var group in groups)
            {
                list.Add(
                    new
                    {
                        Name = group.Key,
                        Value = group.Items[0].Value,
                        Description = group.Items[1].Value
                    });
            }
            return list;
        }

        public Task SetAsync(string name, string value, string providerName, string providerKey)
        {
            providerKey = string.IsNullOrEmpty(providerKey) ? CurrentTenant.Id.Value.ToString() : providerKey;
            string cacheKey = SettingCacheItem.CalculateCacheKey(name, providerName, providerKey);
            return SettingManagementStore.SetAsync(name, value, providerName, providerKey).ContinueWith(x =>
            {
                if (x.IsCompletedSuccessfully)
                {
                    Cache.RefreshAsync(cacheKey);
                }
            });
        }

        public string Encrypt(string plain)
        {
            return _encryptionService.Encrypt(plain);
        }

        public string Decrypt(string encrypted)
        {
            return _encryptionService.Decrypt(encrypted);
        }

          public List<object> GetFactoryColors()
        {
            return new List<object>() {
             new { Name="A",Color="#CC99FF"},
             new {Name="B",Color="#004040" },
             new {Name="C",Color="#993300" }
            };
        }
    }
}
