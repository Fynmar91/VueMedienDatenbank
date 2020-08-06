(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1071:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit"}},[a("div",{staticClass:"container"},[a("EditMedia"),a("RelatedMedia")],1)])},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-container"},t._l(t.getSingleMedia,(function(e){return a("div",{key:e._id,staticClass:"media",on:{dblclick:function(a){return t.openEdit(e._id)}}},[a("p",{staticClass:"text title"},[t._v(t._s(e.name))]),a("p",{staticClass:"text title"},[t._v(t._s(e.season))]),a("p",{staticClass:"text title"},[t._v(t._s(e.author))]),a("p",{staticClass:"text prop"},[t._v(t._s(e.format))]),a("p",{staticClass:"text date"},[t._v(t._s(e.releaseDate))]),a("p",{staticClass:"text date"},[t._v("Angefangen am "+t._s(e.startDate.getFullYear()+"-"+("0"+(e.startDate.getMonth()+1)).slice(-2)+"-"+("0"+e.startDate.getDate()).slice(-2)))]),a("p",{staticClass:"text date"},[t._v(t._s(e.rating)+" %")]),a("p",{staticClass:"text date"},[t._v(t._s(e.image))]),a("img",{attrs:{src:e.image}}),a("button",{on:{click:function(a){return t.deleteMedia(e._id)}}},[t._v("x")])])})),0)},r=[],o=a("5530"),c=a("94ea"),l={name:"EditMedia",methods:Object(o["a"])({},Object(c["b"])(["fetchSingleMedia","setError","deleteMedia"])),computed:Object(o["a"])({},Object(c["c"])(["getSingleMedia"])),watch:{$route:function(t,e){if(t!==e)try{this.fetchSingleMedia(this.$router.history.current.params.id)}catch(a){this.setError("EditMedia.vue: ",a.message)}}},created:function(){try{this.fetchSingleMedia(this.$router.history.current.params.id)}catch(t){this.setError("EditMedia.vue: ",t.message)}}},u=l,d=(a("f691"),a("2877")),m=Object(d["a"])(u,i,r,!1,null,"8b5afc32",null),p=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-container"},t._l(t.getRelatedMedia,(function(e){return a("div",{key:e._id,staticClass:"media",on:{dblclick:function(a){return t.openEdit(e._id)}}},[a("img",{attrs:{src:e.image}}),a("p",{staticClass:"text title"},[t._v(t._s(e.name)+" "+t._s(e.season))])])})),0)},h=[],f={name:"RelatedMedia",methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["setError"])),{},{openEdit:function(t){this.$router.push("/edit/".concat(t))}}),computed:Object(o["a"])({},Object(c["c"])(["getRelatedMedia"]))},_=f,g=(a("484c"),Object(d["a"])(_,v,h,!1,null,"5184d684",null)),b=g.exports,y={name:"Edit",components:{EditMedia:p,RelatedMedia:b}},C=y,M=(a("e03c"),Object(d["a"])(C,s,n,!1,null,"437b8416",null));e["default"]=M.exports},"1a33":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"container"},[a("FilterMedia"),a("MediaList")],1)])},n=[],i=a("9ef8"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"media-container"},[a("table",{attrs:{id:"t01"}},[t._m(0),t._l(t.getAllMedia,(function(e){return a("tr",{key:e._id,staticClass:"media",attrs:{div:""},on:{dblclick:function(a){return t.openEdit(e._id)}}},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.finished))]),a("td",[t._v(t._s(e.format))]),a("td",[t._v(t._s(e.releaseDate))]),a("td",[t._v(t._s(e.rating))])])}))],2)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Beendet")]),a("th",[t._v("Format")]),a("th",[t._v("Erschienen")]),a("th",[t._v("Bewertung")])])}],c=a("5530"),l=a("94ea"),u={name:"Media",methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["fetchMedia","deleteMedia","updateMedia","setError"])),{},{openEdit:function(t){this.$router.push("/edit/".concat(t))}}),computed:Object(c["a"])({},Object(l["c"])(["getAllMedia"])),created:function(){try{this.fetchMedia()}catch(t){this.setError(t.message)}}},d=u,m=(a("51f8"),a("2877")),p=Object(m["a"])(d,r,o,!1,null,"2f387fea",null),v=p.exports,h={name:"Home",components:{FilterMedia:i["a"],MediaList:v}},f=h,_=(a("c615"),Object(m["a"])(f,s,n,!1,null,"9d99ba00",null));e["default"]=_.exports},"1c15":function(t,e,a){},"484c":function(t,e,a){"use strict";var s=a("7c40"),n=a.n(s);n.a},"51f8":function(t,e,a){"use strict";var s=a("1c15"),n=a.n(s);n.a},"612a":function(t,e,a){"use strict";var s=a("d210"),n=a.n(s);n.a},6426:function(t,e,a){},"7c40":function(t,e,a){},"7e55":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"container"},[a("AddMedia")],1)])},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"add"},[a("form",{on:{submit:t.onSubmit}},[a("p",{staticClass:"topic"},[t._v("HINZUFÜGEN:")]),a("div",{staticClass:"flex"},[a("p",{staticClass:"desc"},[t._v("Format:")]),a("p",{staticClass:"desc"},[t._v("Name:")]),t.hasAuthor?a("p",{staticClass:"desc"},[t._v("Autor:")]):t._e(),t.hasSeason?a("p",{staticClass:"desc"},[t._v("Season:")]):t._e(),a("p",{staticClass:"desc"},[t._v("Erschienen:")]),a("p",{staticClass:"desc"},[t._v("Angefangen:")]),a("p",{staticClass:"desc"},[t._v("Bewertung:")]),a("p",{staticClass:"desc"},[t._v("Beendet:")]),a("p",{staticClass:"desc"},[t._v("Bild:")])]),a("div",{staticClass:"flex"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.format,expression:"format"}],staticClass:"input",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.format=e.target.multiple?a:a[0]},function(e){return t.onSelect()}]}},t._l(t.getAllFormats,(function(e){return a("option",{key:e.singular,domProps:{value:e.singular}},[t._v(t._s(e.singular))])})),0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Name..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.hasAuthor?a("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input",attrs:{type:"text",placeholder:"Autor..."},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}):t._e(),t.hasSeason?a("input",{directives:[{name:"model",rawName:"v-model",value:t.season,expression:"season"}],staticClass:"input",attrs:{type:"text",placeholder:"Season..."},domProps:{value:t.season},on:{input:function(e){e.target.composing||(t.season=e.target.value)}}}):t._e(),a("select",{directives:[{name:"model",rawName:"v-model",value:t.releaseDate,expression:"releaseDate"}],staticClass:"input",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.releaseDate=e.target.multiple?a:a[0]}}},t._l(t.years,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0),a("div",{staticClass:"start"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.startYear,expression:"startYear"}],staticClass:"input",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.startYear=e.target.multiple?a:a[0]}}},t._l(t.years,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0),a("select",{directives:[{name:"model",rawName:"v-model",value:t.startMonth,expression:"startMonth"}],staticClass:"input",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.startMonth=e.target.multiple?a:a[0]}}},t._l(t.months,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0),a("select",{directives:[{name:"model",rawName:"v-model",value:t.startDay,expression:"startDay"}],staticClass:"input",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.startDay=e.target.multiple?a:a[0]}}},t._l(t.days,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rating,expression:"rating"}],staticClass:"input",attrs:{type:"text",placeholder:"Bewertung..."},domProps:{value:t.rating},on:{input:function(e){e.target.composing||(t.rating=e.target.value)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.finished,expression:"finished"}],staticClass:"input",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.finished=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"true"}},[t._v("Ja")]),a("option",{attrs:{value:"false"}},[t._v("Nein")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.image,expression:"image"}],staticClass:"input",attrs:{type:"text",placeholder:"Bild..."},domProps:{value:t.image},on:{input:function(e){e.target.composing||(t.image=e.target.value)}}})]),a("input",{attrs:{type:"submit",value:"Submit"}})]),a("p",[t._v("https://i.imgur.com/yD1Snju.jpg")]),a("p",[t._v("https://i.imgur.com/OytCq8h.jpg")]),a("p",[t._v("https://i.imgur.com/EZbpzu1.jpg")]),a("p",[t._v("https://i.imgur.com/GKbiunb.jpg")]),a("p",[t._v("https://i.imgur.com/YHPJU8H.jpg")]),a("p",[t._v("https://i.imgur.com/nZEX3mP.jpg")])])])},r=[],o=(a("a630"),a("b0c0"),a("3ca3"),a("5530")),c=a("94ea"),l={name:"AddMedia",data:function(){return{format:"",name:"",author:"",season:"",releaseDate:(new Date).getFullYear(),startYear:(new Date).getFullYear(),startMonth:(new Date).getMonth()+1,startDay:(new Date).getDate(),rating:"",finished:"true",image:"",hasSeason:!1,hasAuthor:!1}},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["addMedia","fetchFormats","setError"])),{},{onSubmit:function(t){t.preventDefault();var e={format:this.format,name:this.name,author:this.author,season:this.season,releaseDate:this.releaseDate,startDate:new Date(this.startYear,this.startMonth-1,this.startDay),rating:this.rating,finished:this.finished,image:this.image};this.addMedia(e),this.format="",this.name="",this.author="",this.season="",this.releaseDate=(new Date).getFullYear(),this.startYear=(new Date).getFullYear(),this.startMonth=(new Date).getMonth()+1,this.startDay=(new Date).getDate(),this.rating="",this.finished="true",this.image=""},onSelect:function(){this.hasSeason=!1,this.hasAuthor=!1,"Serie"===this.format?this.hasSeason=!0:"Buch"===this.format&&(this.hasAuthor=!0)}}),computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["getAllFormats"])),{},{years:function(){var t=(new Date).getFullYear();return Array.from({length:t-1949},(function(e,a){return t-a}))},months:function(){return Array.from({length:12},(function(t,e){return 1+e}))},days:function(){return Array.from({length:31},(function(t,e){return 1+e}))}}),created:function(){try{this.fetchFormats()}catch(t){this.setError("AddMedia.vue: ",t.message)}}},u=l,d=(a("c71c"),a("2877")),m=Object(d["a"])(u,i,r,!1,null,"49220235",null),p=m.exports,v={name:"Home",components:{AddMedia:p}},h=v,f=(a("612a"),Object(d["a"])(h,s,n,!1,null,"312cf26b",null));e["default"]=f.exports},b12a:function(t,e,a){},c615:function(t,e,a){"use strict";var s=a("6426"),n=a.n(s);n.a},c71c:function(t,e,a){"use strict";var s=a("ca46"),n=a.n(s);n.a},ca46:function(t,e,a){},d210:function(t,e,a){},e03c:function(t,e,a){"use strict";var s=a("b12a"),n=a.n(s);n.a},e3a2:function(t,e,a){},f691:function(t,e,a){"use strict";var s=a("e3a2"),n=a.n(s);n.a}}]);
//# sourceMappingURL=about.6a535f66.js.map