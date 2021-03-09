using Castle.DynamicProxy;
using Microsoft.Extensions.Logging;
using Volo.Abp.DynamicProxy;

namespace Volo.Abp.Castle.DynamicProxy
{
    public class AbpAsyncDeterminationInterceptor<TInterceptor> : AsyncDeterminationInterceptor
        where TInterceptor : IAbpInterceptor
    {
        public AbpAsyncDeterminationInterceptor(TInterceptor abpInterceptor, ILoggerFactory loggerFactory)
            : base(new CastleAsyncAbpInterceptorAdapter<TInterceptor>(abpInterceptor, loggerFactory))
        {

        }
    }
}