using System;
using System.Threading.Tasks;
using Castle.Core.Logging;
using Castle.DynamicProxy;
using Volo.Abp.DynamicProxy;
using Microsoft.Extensions.Logging;
using ILoggerFactory = Microsoft.Extensions.Logging.ILoggerFactory;
using ILogger = Microsoft.Extensions.Logging.ILogger;

namespace Volo.Abp.Castle.DynamicProxy
{
    public class CastleAsyncAbpInterceptorAdapter<TInterceptor> : AsyncInterceptorBase
        where TInterceptor : IAbpInterceptor
    {
        private readonly TInterceptor _abpInterceptor;
        private readonly ILoggerFactory _loggerFactory;
        private ILogger Log { get; }

        public CastleAsyncAbpInterceptorAdapter(TInterceptor abpInterceptor, ILoggerFactory loggerFactory)
        {
            _abpInterceptor = abpInterceptor;
            _loggerFactory = loggerFactory;
            Log = _loggerFactory.CreateLogger("Castle Async Interceptor Adapter");
        }

        protected override async Task InterceptAsync(IInvocation invocation, IInvocationProceedInfo proceedInfo, Func<IInvocation, IInvocationProceedInfo, Task> proceed)
        {
            Log.LogInformation($"异步拦截InterceptAsync :Method.Name={invocation.Method.Name} Arguments={string.Join("|", invocation.Arguments)} ");
            await _abpInterceptor.InterceptAsync(new CastleAbpMethodInvocationAdapter(invocation, proceedInfo, proceed));
        }

        protected override async Task<TResult> InterceptAsync<TResult>(IInvocation invocation, IInvocationProceedInfo proceedInfo, Func<IInvocation, IInvocationProceedInfo, Task<TResult>> proceed)
        {
            var adapter = new CastleAbpMethodInvocationAdapterWithReturnValue<TResult>(invocation, proceedInfo, proceed);

            await _abpInterceptor.InterceptAsync(
                adapter
            );

            return (TResult)adapter.ReturnValue;
        }
    }
}