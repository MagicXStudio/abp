(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"0219":function(t,e,n){"use strict";var a=n("386e"),o=n.n(a);o.a},"1a8a":function(t,e,n){"use strict";n.r(e);var a=n("29d1"),o=n("2145");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("0219");var i,u=n("f0c5"),d=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=d.exports},2145:function(t,e,n){"use strict";n.r(e);var a=n("ca15"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},"29d1":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"6f89"))}},o=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"386e":function(t,e,n){},ca15:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("9109"));function o(t){return t&&t.__esModule?t:{default:t}}var r=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("6f89"))}.bind(null,n)).catch(n.oe)},i=function(){n.e("components/empty").then(function(){return resolve(n("5985"))}.bind(null,n)).catch(n.oe)},u={components:{uniLoadMore:r,empty:i},data:function(){return{tabCurrentIndex:0,navList:[{state:0,text:"全部",loadingType:"more",orderList:[]},{state:1,text:"待付款",loadingType:"more",orderList:[]},{state:2,text:"待收货",loadingType:"more",orderList:[]},{state:3,text:"待评价",loadingType:"more",orderList:[]},{state:4,text:"售后",loadingType:"more",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=+t.state,0==t.state&&this.loadData()},methods:{loadData:function(t){var e=this,n=this.tabCurrentIndex,o=this.navList[n],r=o.state;"tabChange"===t&&!0===o.loaded||"loading"!==o.loadingType&&(o.loadingType="loading",setTimeout((function(){var t=a.default.orderList.filter((function(t){return t=Object.assign(t,e.orderStateExp(t.state)),0===r?t:t.state===r}));t.forEach((function(t){o.orderList.push(t)})),e.$set(o,"loaded",!0),o.loadingType="more"}),600))},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t},deleteOrder:function(e){var n=this;t.showLoading({title:"请稍后"}),setTimeout((function(){n.navList[n.tabCurrentIndex].orderList.splice(e,1),t.hideLoading()}),600)},cancelOrder:function(e){var n=this;t.showLoading({title:"请稍后"}),setTimeout((function(){var a=n.orderStateExp(9),o=a.stateTip,r=a.stateTipColor;e=Object.assign(e,{state:9,stateTip:o,stateTipColor:r});var i=n.navList[1].orderList,u=i.findIndex((function(t){return t.id===e.id}));-1!==u&&i.splice(u,1),t.hideLoading()}),600)},orderStateExp:function(t){var e="",n="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 9:e="订单已关闭",n="#909399";break}return{stateTip:e,stateTipColor:n}}}};e.default=u}).call(this,n("543d")["default"])},f8c4:function(t,e,n){"use strict";(function(t){n("6dbd");a(n("66fd"));var e=a(n("1a8a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["f8c4","common/runtime","common/vendor"]]]);