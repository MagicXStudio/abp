(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"57a7":function(t,e,n){"use strict";(function(t){n("6dbd");r(n("66fd"));var e=r(n("b9d4"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"5c6f":function(t,e,n){"use strict";n.r(e);var r=n("9cb7"),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=c.a},"6e6f":function(t,e,n){},"86c2":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var c=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"9cb7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={data:function(){return{}},methods:o(o({},(0,r.mapMutations)(["logout"])),{},{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var e=this;t.showModal({content:"确定要退出登录么",success:function(n){n.confirm&&(e.logout(),setTimeout((function(){t.navigateBack()}),200))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=a}).call(this,n("543d")["default"])},"9e02":function(t,e,n){"use strict";var r=n("6e6f"),c=n.n(r);c.a},b9d4:function(t,e,n){"use strict";n.r(e);var r=n("86c2"),c=n("5c6f");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("9e02");var u,a=n("f0c5"),i=Object(a["a"])(c["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=i.exports}},[["57a7","common/runtime","common/vendor"]]]);