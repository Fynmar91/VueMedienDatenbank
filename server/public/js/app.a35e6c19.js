(function(e){function t(t){for(var a,n,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,n=1;n<r.length;n++){var c=r[n];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},n={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6512d966"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={about:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"30a8da47"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],d.parentNode.removeChild(d),r(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,r[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"245b":function(e,t,r){"use strict";var a=r("e49d"),n=r.n(a);n.a},4184:function(e,t,r){"use strict";var a=r("f1fb"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("h1",[e._v("Mediendatenbank")]),r("hr"),r("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Kacheln")]),e._v(" | "),r("router-link",{attrs:{to:"/list"}},[e._v("Liste")]),e._v(" | "),r("router-link",{attrs:{to:"/add"}},[e._v("Hinzufügen")])],1)])},c=[],u={name:"Header"},s=u,l=(r("245b"),r("2877")),f=Object(l["a"])(s,i,c,!1,null,"5a6a9e7a",null),d=f.exports,m={name:"app",components:{Header:d}},p=m,v=(r("034f"),Object(l["a"])(p,n,o,!1,null,null,null)),h=v.exports,g=r("94ea"),b=(r("99af"),r("4de4"),r("c740"),r("d81d"),r("a434"),r("5530")),_=(r("96cf"),r("1da1")),w=r("bc3a"),D=r.n(w),y="api/media/",M="api/format/",O={media:[],formats:[],error:""},j={getAllMedia:function(e){return e.media},getAllFormats:function(e){return e.formats},getError:function(e){return e.error}},x={fetchMedia:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,D.a.get(y);case 3:a=t.sent,n=a.data.map((function(e){return Object(b["a"])(Object(b["a"])({},e),{},{startDate:new Date(e.startDate)})})),r("setMedia",n);case 6:case"end":return t.stop()}}),t)})))()},addMedia:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.next=3,D.a.post(y,t);case 3:n=r.sent,n.data.startDate=new Date(n.data.startDate),a("newMedia",n.data);case 6:case"end":return r.stop()}}),r)})))()},deleteMedia:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.next=3,D.a.delete("".concat(y).concat(t));case 3:a("removeMedia",t);case 4:case"end":return r.stop()}}),r)})))()},filterMedia:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var a,n,o,i,c,u,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,n=t.limit,o=t.format,i=t.fromDate,c=t.toDate,r.next=4,D.a.get("".concat(y,"filter/").concat(n,"/").concat(o,"/").concat(i,"/").concat(c));case 4:u=r.sent,s=u.data.map((function(e){return Object(b["a"])(Object(b["a"])({},e),{},{startDate:new Date(e.startDate)})})),a("setMedia",s);case 7:case"end":return r.stop()}}),r)})))()},fetchFormats:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,D.a.get(M);case 3:a=t.sent,n=a.data,console.log(n),r("setFormat",n);case 7:case"end":return t.stop()}}),t)})))()},setError:function(e,t){var r=e.commit;r("writeError",t)}},E={setMedia:function(e,t){return e.media=t},newMedia:function(e,t){return e.media.unshift(t)},removeMedia:function(e,t){return e.media=e.media.filter((function(e){return e._id!==t}))},changeMedia:function(e,t){var r=e.media.findIndex((function(e){return e.id===t.id}));-1!==r&&e.media.splice(r,1,t)},setFormat:function(e,t){return e.formats=t},writeError:function(e,t){return e.error=t}},k={state:O,getters:j,actions:x,mutations:E};a["a"].use(g["a"]);var A=new g["a"].Store({modules:{media:k}}),C=(r("d3b7"),r("4af9")),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("div",{staticClass:"container"},[r("FilterMedia"),r("Media")],1)])},R=[],P=r("9ef8"),N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.getError?r("p",{staticClass:"error-p"},[e._v(e._s(e.getError))]):e._e(),r("div",{staticClass:"media-container"},e._l(e.getAllMedia,(function(t){return r("div",{key:t._id,staticClass:"media",on:{dblclick:function(r){return e.deleteMedia(t._id)}}},[r("p",{staticClass:"text title"},[e._v(e._s(t.name))]),r("img",{attrs:{src:t.image}}),r("p",{staticClass:"text prop"},[e._v(e._s(t.format))]),r("p",{staticClass:"text date"},[e._v(e._s(t.releaseDate))]),r("p",{staticClass:"text date"},[e._v(e._s(t.startDate.getFullYear()+"-"+("0"+(t.startDate.getMonth()+1)).slice(-2)+"-"+("0"+t.startDate.getDate()).slice(-2)))])])})),0)])},S=[],T={name:"Media",methods:Object(b["a"])({},Object(g["b"])(["fetchMedia","deleteMedia","updateMedia","setError"])),computed:Object(b["a"])({},Object(g["c"])(["getAllMedia","getError"])),created:function(){try{this.fetchMedia()}catch(e){this.setError(e.message)}}},Y=T,H=(r("4184"),Object(l["a"])(Y,N,S,!1,null,"01052209",null)),L=H.exports,$={name:"Home",components:{FilterMedia:P["a"],Media:L}},B=$,I=(r("cccb"),Object(l["a"])(B,F,R,!1,null,null,null)),q=I.exports;a["a"].use(C["a"]);var J=[{path:"/",name:"Home",component:q},{path:"/list",name:"list",component:function(){return r.e("about").then(r.bind(null,"1a33"))}},{path:"/add",name:"add",component:function(){return r.e("about").then(r.bind(null,"7e55"))}}],K=new C["a"]({routes:J}),z=K;a["a"].config.productionTip=!1,new a["a"]({store:A,router:z,render:function(e){return e(h)}}).$mount("#app")},"5ced":function(e,t,r){},"85ec":function(e,t,r){},"9ef8":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"filter"},[r("form",{on:{submit:e.onReset}},[r("p",{staticClass:"desc"},[e._v("FILTERN:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.limit,expression:"limit"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.limit=t.target.multiple?r:r[0]},function(t){return e.filterMedia({limit:e.limit,format:e.format,fromDate:e.fromDate,toDate:e.toDate})}]}},[r("option",{attrs:{value:"100"}},[e._v("100")]),r("option",{attrs:{value:"10"}},[e._v("10")])]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.format,expression:"format"}],staticClass:"format",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.format=t.target.multiple?r:r[0]},function(t){return e.filterMedia({limit:e.limit,format:e.format,fromDate:e.fromDate,toDate:e.toDate})}]}},[r("option",{attrs:{value:"Alle"}},[e._v("Alle")]),e._l(e.getAllFormats,(function(t){return r("option",{key:t._id,domProps:{value:t.singular}},[e._v(e._s(t.name))])}))],2),r("select",{directives:[{name:"model",rawName:"v-model",value:e.fromDate,expression:"fromDate"}],staticClass:"input",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.fromDate=t.target.multiple?r:r[0]},function(t){return e.filterMedia({limit:e.limit,format:e.format,fromDate:e.fromDate,toDate:e.toDate})}]}},e._l(e.years,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),r("select",{directives:[{name:"model",rawName:"v-model",value:e.toDate,expression:"toDate"}],staticClass:"input",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.toDate=t.target.multiple?r:r[0]},function(t){return e.filterMedia({limit:e.limit,format:e.format,fromDate:e.fromDate,toDate:e.toDate})}]}},e._l(e.years,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),r("input",{attrs:{type:"submit",value:"Reset"}})])])},n=[],o=(r("a630"),r("3ca3"),r("5530")),i=r("94ea"),c={name:"FilterMedia",data:function(){return{limit:"100",format:"Alle",fromDate:(new Date).getFullYear()-((new Date).getFullYear()-1950),toDate:(new Date).getFullYear()}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["fetchFormats","fetchMedia","filterMedia","setError"])),{},{onReset:function(e){console.log("Test"),e.preventDefault(),this.limit="100",this.format="Alle",this.fromDate=(new Date).getFullYear()-((new Date).getFullYear()-1950),this.toDate=(new Date).getFullYear(),this.fetchMedia()}}),computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["getAllFormats"])),{},{years:function(){var e=(new Date).getFullYear();return Array.from({length:e-1949},(function(t,r){return e-r}))}}),created:function(){try{this.fetchFormats()}catch(e){this.setError(e.message)}}},u=c,s=(r("caad"),r("2877")),l=Object(s["a"])(u,a,n,!1,null,"0d79e31e",null);t["a"]=l.exports},c7d1:function(e,t,r){},caad:function(e,t,r){"use strict";var a=r("c7d1"),n=r.n(a);n.a},cccb:function(e,t,r){"use strict";var a=r("5ced"),n=r.n(a);n.a},e49d:function(e,t,r){},f1fb:function(e,t,r){}});
//# sourceMappingURL=app.a35e6c19.js.map