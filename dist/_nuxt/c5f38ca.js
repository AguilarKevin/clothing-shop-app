(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{448:function(t,e,c){"use strict";c.r(e);var n=c(27),r=(c(99),c(139)),o={data:function(){return{collection:{}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.a)("https://kevs-clothing-shop.herokuapp.com/api/collections/".concat(t.$route.params.id)).json();case 2:c=e.sent,t.collection=c.data;case 4:case"end":return e.stop()}}),e)})))()}},l=c(67),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("c-stack",[c("c-grid",{attrs:{w:"full","template-columns":"repeat(2,1fr)","template-rows":"repeat(2,50vw)"}},[t._l(t.collection.media,(function(e,n){return[n>0?c("c-box",{key:n,attrs:{w:"full",h:"full"}},[c("c-image",{attrs:{w:"full",h:"full","object-fit":"cover",src:e.url}})],1):t._e()]}))],2),t._v(" "),c("c-heading",[t._v(t._s(t.collection.title))]),t._v(" "),c("c-text",[t._v(t._s(t.collection.description))])],1)}),[],!1,null,null,null);e.default=component.exports;c(174)(component,{CImage:c(37).CImage,CBox:c(37).CBox,CGrid:c(37).CGrid,CHeading:c(37).CHeading,CText:c(37).CText,CStack:c(37).CStack})}}]);