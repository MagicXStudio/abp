using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Domain.Entities;

namespace ABP.Hello
{
    /// <summary>
    /// 瑕疵分类
    /// 瑕疵分类
    /// </summary>
    public class Defect : Entity<string>, ISoftDelete
    {
        public Defect()
        {
        }
        public Defect(string id) : base(id)
        {
        }
        public string FabricCategory { get; set; }
        public string Name { get; set; }
        public string CustomerCode { get; set; }
        public string Color { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsVisiable { get; set; }

        public int ZIndex { get; set; }
    }
}
