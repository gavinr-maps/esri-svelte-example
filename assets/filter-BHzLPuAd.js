import{S as d,i as g,r as M,b as l,f as R,a as U,c as $}from"./debounce-C5YDvsuO.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */function N(r,e){for(var t=-1,o=r==null?0:r.length,i=Array(o);++t<o;)i[t]=e(r[t],t,r);return i}var C=Array.isArray;const E=C;var G=1/0,T=d?d.prototype:void 0,A=T?T.toString:void 0;function F(r){if(typeof r=="string")return r;if(E(r))return N(r,F)+"";if(U(r))return A?A.call(r):"";var e=r+"";return e=="0"&&1/r==-G?"-0":e}function L(r){return r}var _="[object AsyncFunction]",D="[object Function]",K="[object GeneratorFunction]",V="[object Proxy]";function q(r){if(!$(r))return!1;var e=l(r);return e==D||e==K||e==_||e==V}var X=9007199254740991,H=/^(?:0|[1-9]\d*)$/;function W(r,e){var t=typeof r;return e=e??X,!!e&&(t=="number"||t!="symbol"&&H.test(r))&&r>-1&&r%1==0&&r<e}var Y=9007199254740991;function v(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Y}function z(r){return r!=null&&v(r.length)&&!q(r)}var J=Object.prototype;function Q(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||J;return r===t}function Z(r,e){for(var t=-1,o=Array(r);++t<r;)o[t]=e(t);return o}var k="[object Arguments]";function j(r){return g(r)&&l(r)==k}var w=Object.prototype,rr=w.hasOwnProperty,er=w.propertyIsEnumerable,tr=j(function(){return arguments}())?j:function(r){return g(r)&&rr.call(r,"callee")&&!er.call(r,"callee")};const nr=tr;function or(){return!1}var O=typeof exports=="object"&&exports&&!exports.nodeType&&exports,m=O&&typeof module=="object"&&module&&!module.nodeType&&module,ar=m&&m.exports===O,x=ar?M.Buffer:void 0,sr=x?x.isBuffer:void 0,ir=sr||or;const fr=ir;var ur="[object Arguments]",cr="[object Array]",pr="[object Boolean]",yr="[object Date]",br="[object Error]",gr="[object Function]",lr="[object Map]",dr="[object Number]",Tr="[object Object]",Ar="[object RegExp]",jr="[object Set]",mr="[object String]",xr="[object WeakMap]",hr="[object ArrayBuffer]",Ir="[object DataView]",$r="[object Float32Array]",Er="[object Float64Array]",Fr="[object Int8Array]",vr="[object Int16Array]",wr="[object Int32Array]",Or="[object Uint8Array]",Pr="[object Uint8ClampedArray]",Sr="[object Uint16Array]",Br="[object Uint32Array]",n={};n[$r]=n[Er]=n[Fr]=n[vr]=n[wr]=n[Or]=n[Pr]=n[Sr]=n[Br]=!0;n[ur]=n[cr]=n[hr]=n[pr]=n[Ir]=n[yr]=n[br]=n[gr]=n[lr]=n[dr]=n[Tr]=n[Ar]=n[jr]=n[mr]=n[xr]=!1;function Mr(r){return g(r)&&v(r.length)&&!!n[l(r)]}function Rr(r){return function(e){return r(e)}}var P=typeof exports=="object"&&exports&&!exports.nodeType&&exports,y=P&&typeof module=="object"&&module&&!module.nodeType&&module,Ur=y&&y.exports===P,b=Ur&&R.process,Nr=function(){try{var r=y&&y.require&&y.require("util").types;return r||b&&b.binding&&b.binding("util")}catch{}}();const h=Nr;var I=h&&h.isTypedArray,Cr=I?Rr(I):Mr;const Gr=Cr;function Lr(r,e){var t=E(r),o=!t&&nr(r),i=!t&&!o&&fr(r),f=!t&&!o&&!i&&Gr(r),a=t||o||i||f,u=a?Z(r.length,String):[],c=u.length;for(var s in r)a&&(s=="length"||i&&(s=="offset"||s=="parent")||f&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||W(s,c))||u.push(s);return u}function _r(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Dr=Object.prototype,Kr=Dr.hasOwnProperty;function Vr(r){if(!$(r))return _r(r);var e=Q(r),t=[];for(var o in r)o=="constructor"&&(e||!Kr.call(r,o))||t.push(o);return t}function qr(r){return z(r)?Lr(r):Vr(r)}function Xr(r){return r==null?"":F(r)}function Hr(r){return function(e,t,o){for(var i=-1,f=Object(e),a=o(e),u=a.length;u--;){var c=a[++i];if(t(f[c],c,f)===!1)break}return e}}var Wr=Hr();const Yr=Wr;function zr(r){return typeof r=="function"?r:L}var S=/[\\^$.*+?()[\]{}|]/g,Jr=RegExp(S.source);function Qr(r){return r=Xr(r),r&&Jr.test(r)?r.replace(S,"\\$&"):r}function Zr(r,e){return r==null?r:Yr(r,zr(e),qr)}const re=(r,e,t)=>{const o=Qr(e),i=new RegExp(o,"i");r.length===0&&console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);const f=(a,u,c)=>{if(a!=null&&a.constant||a!=null&&a.filterDisabled)return!0;let s=!1;return Zr(a,(p,B)=>{typeof p=="function"||p==null||c&&!c.includes(B)||(Array.isArray(p)||typeof p=="object"&&p!==null?f(p,u)&&(s=!0):u.test(p)&&(s=!0))}),s};return r.filter(a=>f(a,i,t))};export{Qr as e,re as f};
