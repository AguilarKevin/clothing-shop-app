(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{289:function(t,e,r){"use strict";var n=r(134),o=r(106),c={name:"App",components:{CThemeProvider:n.a,CColorModeProvider:o.c}},l=r(80),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("CThemeProvider",[r("CColorModeProvider",[r("c-box",{attrs:{"font-family":"HelveticaNeueCyr",w:"100%",color:"white",as:"main",px:["6","16"]}},[r("c-reset"),t._v(" "),r("the-header"),t._v(" "),r("Nuxt")],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{TheHeader:r(421).default});r(207)(component,{CReset:r(79).CReset,CBox:r(79).CBox,CColorModeProvider:r(79).CColorModeProvider,CThemeProvider:r(79).CThemeProvider})},291:function(t,e,r){r(292),t.exports=r(293)},323:function(t,e,r){var content=r(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(138).default)("40ae41ba",content,!0,{sourceMap:!1})},324:function(t,e,r){var n=r(137)(!1);n.push([t.i,"body,html{background:#1c1f22}",""]),t.exports=n},421:function(t,e,r){"use strict";r.r(e);var n={},o=r(80),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("c-flex",{attrs:{py:"6","align-items":"center",justify:"space-between","font-weight":"regular"}},[r("nuxt-link",{attrs:{to:"/"}},[r("c-heading",{attrs:{"font-size":"16pt","font-weight":"regular"}},[t._v("FALONI")])],1),t._v(" "),r("c-flex",{attrs:{"font-size":"11pt","grid-gap":"6","text-transform":"uppercase"}},[r("c-text",[t._v("cart")]),t._v(" "),r("c-text",[t._v("menu")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;r(207)(component,{CHeading:r(79).CHeading,CText:r(79).CText,CFlex:r(79).CFlex})},422:function(t,e,r){"use strict";r.r(e);var n=r(27),o=(r(103),r(33),r(206)),c="https://kevs-clothing-shop.herokuapp.com/api",l=function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("".concat(c,"/clothe/").concat(t)).json();case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))()},d=function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("".concat(c,"/discounts")).json();case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},f={getProduct:function(t,e){var r=t.commit;l(e).then((function(t){r("setCurrentProduct",t)}))},getLatestDiscounts:function(t){var e=t.commit;d().then((function(t){e("setDiscounts",t)}))}};e.default={namespaced:!0,state:function(){return{currentProduct:{},discounts:[]}},getters:{},actions:f,mutations:{setCurrentProduct:function(t,e){t.currentProduct=e},setDiscounts:function(t,e){t.discounts=e}}}}},[[291,12,1,13]]]);