webpackJsonp([0],{"/w7L":function(e,t,r){"use strict";var n=r("S1cf");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},"2OHv":function(e,t,r){"use strict";var n=r("S1cf");e.exports=function(e,t){t=t||{};var r={};return n.forEach(["url","method","params","data"],function(e){void 0!==t[e]&&(r[e]=t[e])}),n.forEach(["headers","auth","proxy"],function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])}),n.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}),r}},"3bIi":function(e,t,r){"use strict";var n=r("YdsM");e.exports=function(e,t,r,o,s){var a=new Error(e);return n(a,t,r,o,s)}},"5/+H":function(e,t){},"7/2Y":function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},BXyq:function(e,t,r){"use strict";(function(t){var n=r("S1cf"),o=r("M8l6"),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,u={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?i=r("KRuG"):"undefined"!=typeof XMLHttpRequest&&(i=r("KRuG")),i),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){u.headers[e]={}}),n.forEach(["post","put","patch"],function(e){u.headers[e]=n.merge(s)}),e.exports=u}).call(t,r("W2nU"))},"ED/T":function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},H6Qo:function(e,t,r){"use strict";var n=r("S1cf");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(n.isURLSearchParams(t))s=t.toString();else{var a=[];n.forEach(t,function(e,t){null!==e&&void 0!==e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))}))}),s=a.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},"Jru/":function(e,t){},KRuG:function(e,t,r){"use strict";var n=r("S1cf"),o=r("aS8y"),s=r("H6Qo"),a=r("ZeD7"),i=r("/w7L"),u=r("3bIi");e.exports=function(e){return new Promise(function(t,c){var f=e.data,p=e.headers;n.isFormData(f)&&delete p["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(d+":"+m)}if(l.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l};o(t,c,n),l=null}},l.onabort=function(){l&&(c(u("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){c(u("Network Error",e,null,l)),l=null},l.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},n.isStandardBrowserEnv()){var h=r("dn2M"),v=(e.withCredentials||i(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in l&&n.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),c(e),l=null)}),void 0===f&&(f=null),l.send(f)})}},M8l6:function(e,t,r){"use strict";var n=r("S1cf");e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-link",{attrs:{to:"/login"}},[this._v("登录")]),this._v(" "),t("router-link",{attrs:{to:"/regest"}},[this._v("注册")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")({name:"App"},o,!1,function(e){r("5/+H")},null,null).exports,a=r("/ocq"),i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"login"},[this._v("\n  登录\n  \n")])},staticRenderFns:[]};var u=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(e){r("Jru/")},"data-v-e57dca32",null).exports,c=r("dZBD"),f=r.n(c),p={name:"HelloWorld",data:function(){return{userName:"",userPassword:"",surePassword:"",userEamil:"",userPhone:"",userQuestion:"",userAnswer:""}},methods:{submit:function(){f.a.post("/user/register",{userName:this.userName,userPassword:this.userPassword,userEamil:this.userEamil,userPhone:this.userPhone,userQuestion:this.userQuestion,userAnswer:this.userAnswer})}},computed:{iserr:function(){return this.userPassword!==this.surePassword}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"regest"},[e._v("\n  注册\n  "),r("form",{attrs:{action:""}},[r("label",{attrs:{for:"userName"}},[e._v("用户名")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",name:"",id:"userName"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"userPassword"}},[e._v("密码")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword,expression:"userPassword"}],attrs:{type:"text",name:"",id:"userPassword"},domProps:{value:e.userPassword},on:{input:function(t){t.target.composing||(e.userPassword=t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"userPassword"}},[e._v("确认密码")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.surePassword,expression:"surePassword"}],attrs:{type:"text",id:"surePassword"},domProps:{value:e.surePassword},on:{input:function(t){t.target.composing||(e.surePassword=t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.iserr,expression:"iserr"}],attrs:{id:"errWarn"}}),e._v(" "),r("label",{attrs:{for:"userEamil"}},[e._v("邮箱")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userEamil,expression:"userEamil"}],attrs:{type:"text",name:"",id:"userEamil"},domProps:{value:e.userEamil},on:{input:function(t){t.target.composing||(e.userEamil=t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"userPhone"}},[e._v("手机号")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userPhone,expression:"userPhone"}],attrs:{type:"text",name:"",id:"userPhone"},domProps:{value:e.userPhone},on:{input:function(t){t.target.composing||(e.userPhone=t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"userQuestion"}},[e._v("密保问题")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.userQuestion,expression:"userQuestion"}],attrs:{name:"userQuestion",id:"userQuestion"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.userQuestion=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"0"}},[e._v("我的出生地")]),e._v(" "),r("option",{attrs:{value:"1"}},[e._v("我的出生年月")]),e._v(" "),r("option",{attrs:{value:"2"}},[e._v("我的母校名称")]),e._v(" "),r("option",{attrs:{value:"3"}},[e._v("我的班主任名称")])]),e._v(" "),r("label",{attrs:{for:"userAnswer"}},[e._v("密保答案")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userAnswer,expression:"userAnswer"}],attrs:{type:"text",name:"userAnswer",id:"userAnswer"},domProps:{value:e.userAnswer},on:{input:function(t){t.target.composing||(e.userAnswer=t.target.value)}}})]),e._v(" "),r("button",{on:{click:e.submit}},[e._v("提交")])])},staticRenderFns:[]};var d=r("VU/8")(p,l,!1,function(e){r("m1Es")},"data-v-6bbafe6e",null).exports;n.a.use(a.a);var m=new a.a({routes:[{path:"/login",name:"login",component:u},{path:"/regest",name:"regest",component:d}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:m,render:function(e){return e(s)}})},OvAf:function(e,t,r){"use strict";var n=r("S1cf"),o=r("H6Qo"),s=r("rj2i"),a=r("uz6X"),i=r("2OHv");function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},u.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}}),n.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}}),e.exports=u},S1cf:function(e,t,r){"use strict";var n=r("ED/T"),o=r("q/Zl"),s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function i(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===s.call(e)}function c(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:u,isStream:function(e){return i(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},"V3+0":function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},X8jb:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},YdsM:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},ZeD7:function(e,t,r){"use strict";var n=r("S1cf"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,a={};return e?(n.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}}),a):a}},a2Uu:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},aS8y:function(e,t,r){"use strict";var n=r("3bIi");e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},dZBD:function(e,t,r){e.exports=r("nUiQ")},dn2M:function(e,t,r){"use strict";var n=r("S1cf");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},m1Es:function(e,t){},"mI+K":function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},nUiQ:function(e,t,r){"use strict";var n=r("S1cf"),o=r("ED/T"),s=r("OvAf"),a=r("2OHv");function i(e){var t=new s(e),r=o(s.prototype.request,t);return n.extend(r,s.prototype,t),n.extend(r,t),r}var u=i(r("BXyq"));u.Axios=s,u.create=function(e){return i(a(u.defaults,e))},u.Cancel=r("mI+K"),u.CancelToken=r("tsWd"),u.isCancel=r("V3+0"),u.all=function(e){return Promise.all(e)},u.spread=r("X8jb"),e.exports=u,e.exports.default=u},"q/Zl":function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},rj2i:function(e,t,r){"use strict";var n=r("S1cf");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},tsWd:function(e,t,r){"use strict";var n=r("mI+K");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},uz6X:function(e,t,r){"use strict";var n=r("S1cf"),o=r("woEt"),s=r("V3+0"),a=r("BXyq"),i=r("7/2Y"),u=r("a2Uu");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!i(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},woEt:function(e,t,r){"use strict";var n=r("S1cf");e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}}},["NHnr"]);
//# sourceMappingURL=app.5526adc67ac59356cd43.js.map