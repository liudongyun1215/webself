(function(t){function e(e){for(var o,r,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},s=[];function r(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b1a8e683"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=r(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",u.name="ChunkLoadError",u.type=o,u.request=s,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/webself/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10e5":function(t,e,n){},2395:function(t,e,n){},"2bcc":function(t,e,n){},4058:function(t,e,n){"use strict";var o=n("10e5"),i=n.n(o);i.a},"43f2":function(t,e,n){t.exports=n.p+"img/logo.b5b8b6b5.jpeg"},"47b0":function(t,e,n){"use strict";var o=n("cac2"),i=n.n(o);i.a},"4b96":function(t,e,n){},"4ee2":function(t,e,n){t.exports=n.p+"media/1.dfe3a8d9.mp4"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],r=(n("7c55"),n("2877")),a={},c=Object(r["a"])(a,i,s,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showPage,expression:"!showPage"}],staticClass:"phoneBox"},[n("p",[t._v(t._s(t.introShow))])]),n("full-page",{directives:[{name:"show",rawName:"v-show",value:t.showPage,expression:"showPage"}],ref:"fullpage",attrs:{options:t.options,id:"fullpage"}},[n("div",{staticClass:"section"},[n("pageOne")],1),n("div",{staticClass:"section"},[n("pageTwo")],1)])],1)},f=[],p=(n("fb6a"),n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageOneBox"},[n("navBar"),n("div",{staticClass:"pageOne"},[n("p",{staticClass:"info"},[t._v(t._s(t.introShow))])])],1)}),h=[],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navBar"},[t._m(0),o("p",{staticClass:"title"},[t._v("dorryLiu 2020")]),o("div",{staticClass:"erCode"},[o("span",{staticClass:"font",on:{click:t.showErcode}},[t._v("点击查看二维码("+t._s(t.time)+"s)")]),o("p",{directives:[{name:"show",rawName:"v-show",value:t.ercode,expression:"ercode"}],staticClass:"code"},[o("img",{attrs:{src:n("805d"),alt:""}})])])])},v=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"logo"},[o("img",{attrs:{src:n("43f2"),alt:""}})])}],b={name:"navBar",data:function(){return{ercode:!1,time:5}},methods:{showErcode:function(t){var e=this;this.ercode=!0;var n=null;this.time>0?n=setTimeout((function(){e.time--,console.log(333),e.showErcode(e.time)}),1e3):(this.ercode=!1,n=clearTimeout(n),this.time=5)}}},_=b,w=(n("b213"),Object(r["a"])(_,m,v,!1,null,"32caad28",null)),g=w.exports,O={name:"pageOne",data:function(){return{intro:"",introShow:"",num:0,timer:null}},components:{navBar:g},methods:{showIntro:function(){var t=this.intro.length;this.num<=t?(this.introShow=this.intro.slice(0,this.num++)+"_",this.timer=setTimeout(this.showIntro,150)):(clearTimeout(this.timer),this.introShow=this.introShow.replace("_",""))}},mounted:function(){var t=this;console.log("222:",Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://liudongyun1215.github.io/webself/",VUE_APP_PATH:"/webself/",BASE_URL:"/webself/"})),this.http.get("https://liudongyun1215.github.io/webself/data/firstPage.json").then((function(e){t.intro=e.data.intro,t.showIntro()}))}},j=O,S=(n("5ee8"),Object(r["a"])(j,p,h,!1,null,"b03c3b62",null)),y=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageTwo"},[n("ul",{staticClass:"listsBox"},t._l(t.listsData,(function(e){return n("li",{key:e.id},[n("span",{staticClass:"pic"},[n("img",{attrs:{src:e.img,alt:""}})]),n("div",{staticClass:"baseInfo"},[n("div",[n("p",[t._m(0,!0),t._v(t._s(e.title)+" ")]),n("p",[t._m(1,!0),t._v(t._s(e.intro)+" ")]),n("p",[t._m(2,!0),t._v(t._s(e.date)+" ")])]),n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(n){return t.showFn(e.id)}}},[t._v(" 查看详情 ")])])])})),0),n("drawer",{attrs:{videoUrlId:t.videoInfo}})],1)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("em",[t._v("「")]),t._v("标题"),n("em",[t._v("」")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("em",[t._v("「")]),t._v("简介"),n("em",[t._v("」")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("em",[t._v("「")]),t._v("提交时间"),n("em",[t._v("」")])])}],P=n("5530"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drawerBox",class:t.videoStatus?"slideRight":"slideLeft"},[n("span",{staticClass:"closeBtn",on:{click:t.closeFn}},[t._v("关闭")]),n("div",{staticClass:"videoBox"},[n("video",{ref:"video",staticClass:"video",attrs:{controls:"controls"}},[t._v(" 您的浏览器不支持 video 标签。 ")])])])},T=[],B=n("2f62"),I={name:"drawer",data:function(){return{thisSrc:""}},props:["videoUrlId"],watch:{videoUrlId:function(t,e){this.thisSrc=n("ad1c")("./"+this.videoUrlId+".mp4"),this.$refs.video.src=this.thisSrc}},computed:Object(P["a"])({},Object(B["c"])({videoStatus:function(t){return t.videoStatus}})),methods:Object(P["a"])(Object(P["a"])({},Object(B["b"])(["changeVideoStatus"])),{},{closeFn:function(){this.openVideo=!1,this.changeVideoStatus(!1),this.$refs.video.pause()}}),mounted:function(){}},U=I,$=(n("e688"),Object(r["a"])(U,C,T,!1,null,"14bed3c2",null)),A=$.exports,V={name:"pageTwo",data:function(){return{listsData:[],videoInfo:""}},components:{drawer:A},computed:Object(P["a"])({},Object(B["c"])(["videoStatus"])),methods:Object(P["a"])(Object(P["a"])({},Object(B["b"])(["changeVideoStatus"])),{},{showFn:function(t){this.videoInfo=t,this.changeVideoStatus(!0)}}),mounted:function(){var t=this;console.log("444:",Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://liudongyun1215.github.io/webself/",VUE_APP_PATH:"/webself/",BASE_URL:"/webself/"})),this.http.get("https://liudongyun1215.github.io/webself/data/secondPage.json").then((function(e){t.listsData=e.data.lists}))}},k=V,L=(n("4058"),Object(r["a"])(k,E,x,!1,null,"32d9f908",null)),N=L.exports,D={name:"Home",data:function(){return{intro:"",introShow:"",num:0,timer:null,showPage:!0,options:{scrollOverflow:!0}}},components:{pageOne:y,pageTwo:N},methods:{showIntro:function(){var t=this.intro.length;this.num<=t?(this.introShow=this.intro.slice(0,this.num++)+"_",this.timer=setTimeout(this.showIntro,150)):(clearTimeout(this.timer),this.introShow=this.introShow.replace("_",""))}},mounted:function(){var t=this;document.body.clientWidth<1100&&(this.showPage=!1,this.http.get("https://liudongyun1215.github.io/webself/data/firstPage.json").then((function(e){t.intro=e.data.phone,t.showIntro()})))}},F=D,M=(n("47b0"),Object(r["a"])(F,d,f,!1,null,"70fc9f84",null)),R=M.exports;o["a"].use(l["a"]);var H=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],J=new l["a"]({routes:H,mode:"hash"}),q=J;o["a"].use(B["a"]);var W=new B["a"].Store({state:{videoStatus:!1},mutations:{changeVideoStatus:function(t,e){t.videoStatus=e,console.log("status:",e)}},actions:{},modules:{}}),z=(n("499a"),n("a0a0"),n("a45e")),G=n.n(z),K=n("bc3a"),Q=n.n(K);o["a"].use(G.a),o["a"].config.productionTip=!1,o["a"].prototype.http=Q.a,new o["a"]({router:q,store:W,render:function(t){return t(u)}}).$mount("#app")},"5ee8":function(t,e,n){"use strict";var o=n("4b96"),i=n.n(o);i.a},6614:function(t,e,n){t.exports=n.p+"media/2.e7e2abb6.mp4"},7732:function(t,e,n){t.exports=n.p+"media/3.e586fc88.mp4"},"7c55":function(t,e,n){"use strict";var o=n("2395"),i=n.n(o);i.a},"805d":function(t,e,n){t.exports=n.p+"img/ercode.25d0476e.png"},8280:function(t,e,n){t.exports=n.p+"media/5.dc414949.mp4"},ad1c:function(t,e,n){var o={"./1.mp4":"4ee2","./2.mp4":"6614","./3.mp4":"7732","./4.mp4":"f133","./5.mp4":"8280","./6.mp4":"e714"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=s,t.exports=i,i.id="ad1c"},b213:function(t,e,n){"use strict";var o=n("2bcc"),i=n.n(o);i.a},c2b5:function(t,e,n){},cac2:function(t,e,n){},e688:function(t,e,n){"use strict";var o=n("c2b5"),i=n.n(o);i.a},e714:function(t,e,n){t.exports=n.p+"media/6.44ac4a92.mp4"},f133:function(t,e,n){t.exports=n.p+"media/4.6f318665.mp4"}});
//# sourceMappingURL=app.4d04c93c.js.map