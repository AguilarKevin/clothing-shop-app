(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8],{439:function(t,e,o){"use strict";o.r(e);o(12);var n={props:{id:{type:Number,required:!0},title:{type:String,required:!0},price:{type:Number,required:!0},discount:{type:Number,required:!0},mediaSrc:{type:String,required:!0}}},r=o(67),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("c-stack",{attrs:{w:"full"}},[o("nuxt-link",{attrs:{to:"/products/"+t.id}},[o("c-stack",[o("c-box",{attrs:{w:"100%",h:["320px","70vh"]}},[o("c-image",{attrs:{h:"full",w:"full","object-fit":"cover",src:t.mediaSrc,alt:"product"}})],1),t._v(" "),o("c-flex",{attrs:{justify:"space-between",align:"center"}},[o("c-stack",[o("c-heading",{attrs:{as:"h4","font-size":"12px","font-weight":"regular",m:"0",p:"0",color:"#eeeeee","text-transform":"uppercase"}},[t._v(t._s(t.title))]),t._v(" "),o("c-flex",{attrs:{gap:"4px"}},[o("c-text",{attrs:{color:"#aaaaaa","text-decoration":"line-through"}},[t._v("$"+t._s(t.price.toFixed(2)))]),t._v(" "),t.discount?o("c-text",[t._v(" - $"+t._s(t.discount))]):t._e()],1)],1),t._v(" "),o("c-button",{attrs:{size:"sm",color:"gray.800",rounded:"full"}},[t._v(" + ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o(174)(component,{CImage:o(37).CImage,CBox:o(37).CBox,CHeading:o(37).CHeading,CText:o(37).CText,CFlex:o(37).CFlex,CStack:o(37).CStack,CButton:o(37).CButton})},447:function(t,e,o){"use strict";o.r(e);var n=o(27),r=(o(99),o(139)),c={data:function(){return{products:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.a)("https://kevs-clothing-shop.herokuapp.com/api/products").json();case 2:o=e.sent,t.products=o.data;case 4:case"end":return e.stop()}}),e)})))()}},l=o(67),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("c-stack",[o("c-flex",{attrs:{py:["28px","0"],"flex-dir":"column",align:"center",justify:"center",gap:"14px"}},[o("c-heading",{attrs:{as:"h1","font-size":["24pt","44pt"],"text-transform":"uppercase","line-height":["24pt","44pt"],align:"center"}},[t._v("New Arrivals")]),t._v(" "),o("c-text",{attrs:{align:"center"}},[t._v("Thoughtfully designed objects for the workspace, home, and\n      travel.")])],1),t._v(" "),o("c-flex",{attrs:{"flex-dir":["column","row"],justify:"space-between",py:"4",gap:"8px",w:"100%"}},[o("c-menu",{attrs:{"close-on-select":!1}},[o("c-menu-button",{attrs:{rounded:"lg","right-icon":"chevron-down",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Sort")])],1),t._v(" "),o("c-menu-list",[o("c-menu-option-group",{attrs:{"default-value":"asc",title:"Order",color:"#303030",type:"radio"}},[o("c-menu-item-option",{attrs:{value:"asc",selected:"",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Asc")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"desc",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Desc")])],1)],1)],1)],1),t._v(" "),o("c-flex",{attrs:{gap:"14px"}},[o("c-menu",{attrs:{"close-on-select":!1}},[o("c-menu-button",{attrs:{rounded:"lg","right-icon":"chevron-down",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Category")])],1),t._v(" "),o("c-menu-list",[o("c-menu-option-group",{attrs:{"default-value":"all",title:"Option",color:"#303030",type:"radio"}},[o("c-menu-item-option",{attrs:{value:"all",selected:"",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("All")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Shirts",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Shirts")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Wearables",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Wearables")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Shoes",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Shoes")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Pants",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Pants")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Other",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Other")])],1)],1)],1)],1),t._v(" "),o("c-menu",{attrs:{"close-on-select":!1}},[o("c-menu-button",{attrs:{rounded:"lg","right-icon":"chevron-down",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Brand")])],1),t._v(" "),o("c-menu-list",[o("c-menu-option-group",{attrs:{"default-value":"all",title:"Option",color:"#303030",type:"radio"}},[o("c-menu-item-option",{attrs:{value:"all",selected:"",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Addidas")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Shirts",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Nike")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Wearables",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Pull&Bear")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Shoes",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Bershka")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Pants",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Forever21")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Other",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Calvin Klein")])],1)],1)],1)],1),t._v(" "),o("c-menu",{attrs:{"close-on-select":!1}},[o("c-menu-button",{attrs:{rounded:"lg","right-icon":"chevron-down",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("Size")])],1),t._v(" "),o("c-menu-list",[o("c-menu-option-group",{attrs:{"default-value":"all",title:"Option",color:"#303030",type:"radio"}},[o("c-menu-item-option",{attrs:{value:"all",selected:"",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("XS")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Shirts",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("S")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Wearables",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("M")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Shoes",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("L")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Pants",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("XL")])],1),t._v(" "),o("c-menu-item-option",{attrs:{value:"Other",color:"#303030"}},[o("c-text",{attrs:{"font-size":"11pt","font-weight":"thin"}},[t._v("2XL")])],1)],1)],1)],1)],1)],1),t._v(" "),o("c-grid",{attrs:{gap:"24px",justify:"center","template-columns":["100%","repeat(2,1fr)","repeat(3,1fr)"]}},t._l(t.products,(function(t){return o("product-card",{key:t.id,attrs:{id:t.id,title:t.title,price:t.price,discount:t.discount||0,"media-src":t.media[0].url}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductCard:o(439).default});o(174)(component,{CHeading:o(37).CHeading,CText:o(37).CText,CFlex:o(37).CFlex,CMenuButton:o(37).CMenuButton,CMenuItemOption:o(37).CMenuItemOption,CMenuOptionGroup:o(37).CMenuOptionGroup,CMenuList:o(37).CMenuList,CMenu:o(37).CMenu,CGrid:o(37).CGrid,CStack:o(37).CStack})}}]);