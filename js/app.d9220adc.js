(function(t){function e(e){for(var o,a,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9b3226ef"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=a(t);var c=new Error;r=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,n[1](c)}i[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/webself/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2395:function(t,e,n){},4788:function(t,e,n){"use strict";var o=n("8071"),i=n.n(o);i.a},"4ee2":function(t,e,n){t.exports=n.p+"media/1.dfe3a8d9.mp4"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("7c55"),n("2877")),s={},u=Object(a["a"])(s,i,r,!1,null,null,null),c=u.exports,l=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("full-page",{ref:"fullpage",attrs:{options:t.options,id:"fullpage"}},[n("div",{staticClass:"section"},[n("pageOne")],1),n("div",{staticClass:"section"},[n("pageTwo")],1)])],1)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageOne"},[n("p",{staticClass:"info"},[t._v(t._s(t.introShow))])])},h=[],v=(n("fb6a"),n("ac1f"),n("5319"),{name:"pageOne",data:function(){return{intro:"",introShow:"",num:0,timer:null}},methods:{showIntro:function(){var t=this.intro.length;this.num<=t?(this.introShow=this.intro.slice(0,this.num++)+"_",this.timer=setTimeout(this.showIntro,150)):(clearTimeout(this.timer),this.introShow=this.introShow.replace("_",""))}},mounted:function(){var t=this;console.log("222:",Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://liudongyun1215.github.io/webself/",BASE_URL:"/webself/"})),this.http.get("https://liudongyun1215.github.io/webself/data/firstPage.json").then((function(e){t.intro=e.data.intro,t.showIntro()}))}}),b=v,m=(n("4788"),Object(a["a"])(b,p,h,!1,null,"49a90a04",null)),g=m.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pageTwo"},[n("ul",{staticClass:"listsBox"},t._l(t.listsData,(function(e){return n("li",{key:e.id},[n("span",{staticClass:"pic"},[n("img",{attrs:{src:e.img,alt:""}})]),n("div",{staticClass:"baseInfo"},[n("div",[n("p",[n("span",[t._v("「标题」")]),t._v(t._s(e.title))]),n("p",[n("span",[t._v("「简介」")]),t._v(t._s(e.intro))]),n("p",[n("span",[t._v("「时间」")]),t._v(t._s(e.date))]),n("p",[n("span",[t._v("「技术栈」")]),t._v(t._s(e.tech))])]),n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(n){return t.showFn(e.id)}}},[t._v(" 查看详情 ")])])])})),0),n("drawer",{attrs:{videoUrlId:t.videoInfo}})],1)},w=[],O=n("5530"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drawerBox",class:t.videoStatus?"slideRight":"slideLeft"},[n("span",{staticClass:"closeBtn",on:{click:t.closeFn}},[t._v("关闭")]),n("div",{staticClass:"videoBox"},[n("video",{ref:"video",staticClass:"video",attrs:{controls:"controls"}},[t._v(" 您的浏览器不支持 video 标签。 ")])])])},S=[],y=n("2f62"),E={name:"drawer",data:function(){return{thisSrc:""}},props:["videoUrlId"],watch:{videoUrlId:function(t,e){this.thisSrc=n("ad1c")("./"+this.videoUrlId+".mp4"),this.$refs.video.src=this.thisSrc}},computed:Object(O["a"])({},Object(y["c"])({videoStatus:function(t){return t.videoStatus}})),methods:Object(O["a"])(Object(O["a"])({},Object(y["b"])(["changeVideoStatus"])),{},{closeFn:function(){this.openVideo=!1,this.changeVideoStatus(!1)}}),mounted:function(){}},P=E,x=(n("6ba8"),Object(a["a"])(P,j,S,!1,null,"4f936368",null)),C=x.exports,U={name:"pageTwo",data:function(){return{listsData:[],videoInfo:""}},components:{drawer:C},computed:Object(O["a"])({},Object(y["c"])(["videoStatus"])),methods:Object(O["a"])(Object(O["a"])({},Object(y["b"])(["changeVideoStatus"])),{},{showFn:function(t){this.videoInfo=t,this.changeVideoStatus(!0)}}),mounted:function(){var t=this;console.log("444:",Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://liudongyun1215.github.io/webself/",BASE_URL:"/webself/"})),this.http.get("https://liudongyun1215.github.io/webself/data/secondPage.json").then((function(e){t.listsData=e.data.lists}))}},A=U,I=(n("7bff"),Object(a["a"])(A,_,w,!1,null,"04d313c1",null)),T=I.exports,V={name:"Home",data:function(){return{options:{scrollOverflow:!0}}},components:{pageOne:g,pageTwo:T}},B=V,L=Object(a["a"])(B,f,d,!1,null,"29cf3eb0",null),k=L.exports;o["a"].use(l["a"]);var D=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],N=new l["a"]({routes:D,mode:"hash"}),R=N;o["a"].use(y["a"]);var $=new y["a"].Store({state:{videoStatus:!1},mutations:{changeVideoStatus:function(t,e){t.videoStatus=e,console.log("status:",e)}},actions:{},modules:{}}),F=(n("a0a0"),n("a45e")),M=n.n(F),H=n("bc3a"),J=n.n(H);o["a"].use(M.a),o["a"].config.productionTip=!1,o["a"].prototype.http=J.a,J.a.defaults.baseURL=Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://liudongyun1215.github.io/webself/",BASE_URL:"/webself/"}).BASE_API,new o["a"]({router:R,store:$,render:function(t){return t(c)}}).$mount("#app")},6614:function(t,e,n){t.exports=n.p+"media/2.49045239.mp4"},"66ea":function(t,e,n){},"6ba8":function(t,e,n){"use strict";var o=n("66ea"),i=n.n(o);i.a},"7bff":function(t,e,n){"use strict";var o=n("ee7b"),i=n.n(o);i.a},"7c55":function(t,e,n){"use strict";var o=n("2395"),i=n.n(o);i.a},8071:function(t,e,n){},ad1c:function(t,e,n){var o={"./1.mp4":"4ee2","./2.mp4":"6614"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id="ad1c"},ee7b:function(t,e,n){}});
//# sourceMappingURL=app.d9220adc.js.map