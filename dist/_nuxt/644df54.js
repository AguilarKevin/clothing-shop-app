(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,5,6,7],{426:function(e,t,r){"use strict";r.r(t);var n=r(427),o=r.n(n);for(var l in n)["default"].indexOf(l)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(l);t.default=o.a},427:function(e,t){},429:function(e,t,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(138).default)("1e73ac2e",content,!0,{sourceMap:!1})},430:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"24px",height:"24px",fill:"#FFF",viewBox:"0 0 512 512","xml:space":"preserve"}},[r("g",[r("g",[r("path",{attrs:{d:"M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20\n\t\t\tc-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285\n\t\t\tl104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018\n\t\t\tl104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"}})])]),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g"),e._v(" "),r("g")])])},o=[]},431:function(e,t,r){"use strict";r.r(t);var n=r(430),o=r(426);for(var l in o)["default"].indexOf(l)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(l);var c=r(67),component=Object(c.a)(o.default,n.a,n.b,!1,null,null,null);t.default=component.exports},432:function(e,t,r){"use strict";r.r(t);r(12);var n={props:{id:{type:Number,required:!0},title:{type:String,required:!0},price:{type:Number,required:!0},discount:{type:Number,required:!0},mediaSrc:{type:String,required:!0}}},o=r(67),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("c-stack",{attrs:{w:"full"}},[r("nuxt-link",{attrs:{to:"/products/"+e.id}},[r("c-stack",[r("c-box",{attrs:{w:["260px","100%"],h:["320px","70vh"]}},[r("c-image",{attrs:{h:"full",w:"full","object-fit":"cover",src:e.mediaSrc,alt:"product"}})],1),e._v(" "),r("c-flex",{attrs:{justify:"space-between",align:"center"}},[r("c-stack",[r("c-heading",{attrs:{as:"h4","font-size":"12px","font-weight":"regular",m:"0",p:"0",color:"#eeeeee","text-transform":"uppercase"}},[e._v(e._s(e.title))]),e._v(" "),r("c-flex",{attrs:{gap:"4px"}},[r("c-text",{attrs:{color:"#aaaaaa","text-decoration":"line-through"}},[e._v("$"+e._s(e.price.toFixed(2)))]),e._v(" "),e.discount?r("c-text",[e._v(" - $"+e._s(e.discount))]):e._e()],1)],1),e._v(" "),r("c-button",{attrs:{size:"sm",color:"gray.800",rounded:"full"}},[e._v(" + ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;r(174)(component,{CImage:r(37).CImage,CBox:r(37).CBox,CHeading:r(37).CHeading,CText:r(37).CText,CFlex:r(37).CFlex,CStack:r(37).CStack,CButton:r(37).CButton})},435:function(e,t,r){"use strict";r(429)},436:function(e,t,r){var n=r(137)(!1);n.push([e.i,'.banner-container{display:grid;width:100%;grid-template-areas:"header-new ." "header-sport header-sport" "header-collection header-collection" "image-big ." "image-big image-small" "banner-p banner-p" "banner-arrow banner-arrow";grid-template-columns:repeat(2,1fr);grid-column-gap:14px;-moz-column-gap:14px;column-gap:14px}.header-new{grid-area:header-new}.header-sport{grid-area:header-sport}.header-collection{grid-area:header-collection}.image-big{grid-area:image-big;height:100%}.image-small{grid-area:image-small;align-self:end}.banner-p{grid-area:banner-p}.banner-arrow{grid-area:banner-arrow;justify-self:center;margin-top:24px;width:72px;height:72px}@media screen and (min-width:678px){.banner-container{grid-column-gap:18px;-moz-column-gap:18px;column-gap:18px;grid-row-gap:34px;row-gap:34px;grid-template-columns:28% 25% 1fr 1fr;grid-template-areas:"header-new . header-sport header-sport" "image-big header-collection header-collection header-collection" "image-big image-small banner-p banner-p" "image-big image-small . ." "image-big image-small banner-arrow ."}.header-collection{justify-self:end}.banner-arrow{grid-area:banner-arrow;justify-self:start;margin-top:0;width:82px;height:82px}}',""]),e.exports=n},440:function(e,t,r){"use strict";r.r(t);var n=r(132),o={computed:Object(n.c)({lastetsDiscounts:function(e){return e.discounts}}),created:function(){this.$store.dispatch("getLatestDiscounts")},methods:Object(n.b)({getLatestDiscounts:"getLatestDiscounts"})},l=r(67),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"chakra",rawName:"v-chakra"}],staticClass:"sales-container",attrs:{py:["0","20"],h:["380px","98vh"]}},[r("c-heading",{attrs:{as:"h3",size:"2xl","font-weight":"light","text-transform":"uppercase","font-size":"44pt",mb:"4"}},[e._v("\n    sales\n  ")]),e._v(" "),r("c-flex",{attrs:{gap:"24px","overflow-x":"auto",w:"full"}},e._l(e.lastetsDiscounts,(function(e){return r("index-sales-card",{key:e.id,attrs:{id:e.id,title:e.title,price:e.price,discount:e.discount,"media-src":e.media[0].url}})})),1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{IndexSalesCard:r(432).default});r(174)(component,{CHeading:r(37).CHeading,CFlex:r(37).CFlex})},441:function(e,t,r){"use strict";r.r(t);r(435);var n=r(67),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"banner-container"},[r("c-heading",{staticClass:"header-new",attrs:{as:"h1",size:"2xl","font-size":["44pt","72pt"],"line-height":"48pt","font-weight":"light","text-transform":"uppercase"}},[e._v("new")]),e._v(" "),r("c-heading",{staticClass:"header-sport",attrs:{as:"h1","line-height":"48pt",justify:"center",size:"2xl",ml:["0","auto"],display:"inline","font-weight":"light","font-size":["44pt","72pt"],"text-transform":"uppercase","word-break":"break-word"}},[r("nuxt-link",{attrs:{to:"/products"}},[r("c-button",{attrs:{"font-size":"12px",py:"8px",px:"14px",mb:"2","text-transform":"uppercase","border-radius":"full",color:"#181818"}},[e._v("\n        view more\n      ")])],1),e._v("\n    sport\n  ")],1),e._v(" "),r("c-box",{staticClass:"image-big"},[r("c-image",{attrs:{h:["220px","440px"],w:"full","object-fit":"cover",src:"https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",alt:"image"}})],1),e._v(" "),r("c-heading",{staticClass:"header-collection",attrs:{as:"h1",size:"2xl","font-size":["44pt","72pt"],"line-height":"48pt","font-weight":"light","text-transform":"uppercase","word-break":"break-word"}},[e._v("collection")]),e._v(" "),r("c-box",{staticClass:"image-small"},[r("c-image",{attrs:{h:["170px","320px"],w:"full","object-fit":"cover",src:"https://images.unsplash.com/photo-1546102597-4ac3be10560e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=313&q=80",alt:"image"}})],1),e._v(" "),r("c-text",{staticClass:"banner-p",attrs:{"font-weight":"regular",mt:"4"}},[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, minus\n    quasi quibusdam neque illo optio atque rem dolores sed quos? Error maxime\n    rerum hic facilis, magnam voluptate fugiat modi molestiae?\n  ")]),e._v(" "),r("c-flex",{staticClass:"banner-arrow",attrs:{"border-width":"1px",rounded:"full",align:"center",justify:"center"}},[r("down-arrow-icon",{attrs:{w:"10",h:"10"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DownArrowIcon:r(431).default});r(174)(component,{CHeading:r(37).CHeading,CButton:r(37).CButton,CImage:r(37).CImage,CBox:r(37).CBox,CText:r(37).CText,CFlex:r(37).CFlex})},442:function(e,t,r){"use strict";r.r(t);var n=r(67),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"chakra",rawName:"v-chakra"}],attrs:{position:"relative",w:"full",h:["220px","480px"]}},[r("c-box",{attrs:{position:"relative",w:"full",h:["220px","480px"]}},[r("video",{directives:[{name:"chakra",rawName:"v-chakra"}],attrs:{w:"full",h:"full",autoplay:"","object-fit":"cover"}},[r("source",{attrs:{src:"https://media.istockphoto.com/videos/man-dressing-up-video-id181842863",type:"video/mp4"}}),e._v("\n      Your browser does not support the video tag.\n    ")])]),e._v(" "),r("c-button",{attrs:{position:"absolute",bottom:[3,20],left:[10,24],size:"md",rounded:"full",bg:"#1c1f22",color:"#FFFFFF"}},[r("c-text",{attrs:{"font-size":"10px","text-transform":"uppercase"}},[e._v("play video")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;r(174)(component,{CBox:r(37).CBox,CText:r(37).CText,CButton:r(37).CButton})},450:function(e,t,r){"use strict";r.r(t);var n=r(67),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("c-flex",{attrs:{"flex-dir":"column",gap:"44px",py:"14px"}},[r("index-banner"),e._v(" "),r("index-video-card"),e._v(" "),r("index-sales-container")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{IndexBanner:r(441).default,IndexVideoCard:r(442).default,IndexSalesContainer:r(440).default});r(174)(component,{CFlex:r(37).CFlex})}}]);