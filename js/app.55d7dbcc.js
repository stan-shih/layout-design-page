(function(e){function t(t){for(var r,i,l=t[0],u=t[1],a=t[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(f.length)f.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e2c":function(e,t,n){},"3b45":function(e,t,n){},5242:function(e,t,n){"use strict";n("cb4d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=Object(r["e"])("div",{class:"header"},[Object(r["e"])("input",{type:"text",id:"txn",placeholder:"交易代號"}),Object(r["e"])("input",{type:"text",id:"txnName",placeholder:"請輸入交易名稱"})],-1),o={class:"navbar"},i=Object(r["f"])("left "),l={class:"main"};function u(e,t,n,u,a,b){var p=Object(r["j"])("textfield"),f=Object(r["j"])("combobox");return Object(r["h"])(),Object(r["d"])("div",null,[c,Object(r["e"])("div",o,[i,Object(r["e"])("button",{onClick:t[0]||(t[0]=function(e){return b.addField()})},"新增欄位")]),Object(r["e"])("div",l,[Object(r["g"])(p,{title:"欄位"}),Object(r["g"])(f,{title:"下拉選單"}),(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["i"])(a.columns,(function(e,t){return Object(r["h"])(),Object(r["d"])("div",{key:t},[(Object(r["h"])(),Object(r["c"])(Object(r["k"])(e["type"]),{title:e["title"]},null,8,["title"]))])})),128))])])}var a={class:"title"},b=Object(r["e"])("input",{type:"text",class:"field"},null,-1);function p(e,t,n,c,o,i){return Object(r["h"])(),Object(r["d"])("form",null,[Object(r["e"])("span",a,Object(r["l"])(n.title),1),b])}var f={name:"textfield",props:{title:String}};n("904c");f.render=p;var s=f,d={class:"title"},j=Object(r["e"])("select",{class:"comboboxfield"},null,-1);function O(e,t,n,c,o,i){return Object(r["h"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("span",d,Object(r["l"])(n.title),1),j],64)}var v={name:"combobox",props:{title:String}};n("90b2");v.render=O;var h=v,y={name:"App",data:function(){return{columns:[{type:"textfield",title:"欄位"}]}},components:{textfield:s,combobox:h},methods:{addField:function(){this.columns.push({type:"textfield",title:"新增"})}}};n("5242");y.render=u;var m=y;Object(r["b"])(m).mount("#app")},"904c":function(e,t,n){"use strict";n("3b45")},"90b2":function(e,t,n){"use strict";n("0e2c")},cb4d:function(e,t,n){}});
//# sourceMappingURL=app.55d7dbcc.js.map