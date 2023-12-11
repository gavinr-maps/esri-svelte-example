import{aX as a,d0 as h,fI as y,fJ as d,fK as S,_ as M,fL as g}from"./index-XUlETPJZ.js";import"./parser-5WRmuohq.js";import{f as C,u as I,M as L,y as z,m as j}from"./utils-SpCi_Vow.js";import{e as x}from"./LRUCache-P08N0BvZ.js";function P(o){const t=[];return b(C(o),t),t.length?new a(I(t[0])):null}function b(o,t){var e;if(!o)return;let r;r=o.type==="CIMTextSymbol"?o.symbol:o;const l=o.type==="CIMPolygonSymbol";if(r!=null&&r.symbolLayers){for(const n of r.symbolLayers)if(!(n.colorLocked||l&&(L(n)||z(n)&&n.markerPlacement&&j(n.markerPlacement))))switch(n.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":n.tintColor&&p(t,n.tintColor);break;case"CIMVectorMarker":(e=n.markerGraphics)==null||e.forEach(c=>{b(c.symbol,t)});break;case"CIMSolidStroke":case"CIMSolidFill":p(t,n.color);break;case"CIMHatchFill":b(n.lineSymbol,t)}}}function p(o,t){for(const r of o)if(r.join(".")===t.join("."))return;o.push(t)}new x(1e3);new a([128,128,128]);const _=new a("white");function U(o,t){if(!o)return null;let r=null;return h(o)?r=$(o):y(o)&&(r=o.type==="cim"?P(o):o.color?new a(o.color):null),r?m(r,t):null}function $(o){const t=o.symbolLayers;if(!t)return null;let r=null;return t.forEach(l=>{var e;l.type==="object"&&((e=l.resource)!=null&&e.href)||(r=l.type==="water"?l.color:l.material?l.material.color:null)}),r?new a(r):null}function m(o,t){if(t==null||o==null)return o;const r=o.toRgba();return r[3]=r[3]*t,new a(r)}function v(o,t,r){const l=o.symbolLayers;if(!l)return;const e=n=>m(t=t??n??(r!=null?_:null),r);l.forEach(n=>{var c,u;if(n.type!=="object"||!((c=n.resource)!=null&&c.href)||t)if(n.type==="water")n.color=e(n.color);else{const i=n.material!=null?n.material.color:null,s=e(i);n.material==null?n.material=new g({color:s}):n.material.color=s,r!=null&&"outline"in n&&((u=n.outline)==null?void 0:u.color)!=null&&(n.outline.color=m(n.outline.color,r))}})}function E(o,t,r){var l;(t=t??o.color)&&(o.color=m(t,r)),r!=null&&"outline"in o&&((l=o.outline)!=null&&l.color)&&(o.outline.color=m(o.outline.color,r))}function X(o,t,r){o&&(t||r!=null)&&(t&&(t=new a(t)),h(o)?v(o,t,r):y(o)&&E(o,t,r))}async function R(o,t){const r=o.symbolLayers;r&&await d(r,async l=>F(l,t))}async function F(o,t){switch(o.type){case"extrude":D(o,t);break;case"icon":case"line":case"text":O(o,t);break;case"path":V(o,t);break;case"object":await T(o,t)}}function O(o,t){const r=w(t);r!=null&&(o.size=r)}function w(o){for(const t of o)if(typeof t=="number")return t;return null}function D(o,t){o.size=typeof t[2]=="number"?t[2]:0}async function T(o,t){const{resourceSize:r,symbolSize:l}=await A(o),e=k(t,r,l);o.width=f(t[0],l[0],r[0],e),o.depth=f(t[1],l[1],r[1],e),o.height=f(t[2],l[2],r[2],e)}function V(o,t){const r=k(t,S,[o.width,void 0,o.height]);o.width=f(t[0],o.width,1,r),o.height=f(t[2],o.height,1,r)}function k(o,t,r){for(let l=0;l<3;l++){const e=o[l];switch(e){case"symbol-value":{const n=r[l];return n!=null?n/t[l]:1}case"proportional":break;default:if(e&&t[l])return e/t[l]}}return 1}async function A(o){const{computeObjectLayerResourceSize:t}=await M(()=>import("./symbolLayerUtils-9oAjEGNv.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),r=await t(o,10),{width:l,height:e,depth:n}=o,c=[l,n,e];let u=1;for(let i=0;i<3;i++){const s=c[i];if(s!=null){u=s/r[i];break}}for(let i=0;i<3;i++)c[i]==null&&(c[i]=r[i]*u);return{resourceSize:r,symbolSize:c}}function f(o,t,r,l){switch(o){case"proportional":return r*l;case"symbol-value":return t??r;default:return o}}function G(o,t){const r=w(t);if(r!=null)switch(o.type){case"simple-marker":o.size=r;break;case"picture-marker":{const l=o.width/o.height;l>1?(o.width=r,o.height=r*l):(o.width=r*l,o.height=r);break}case"simple-line":o.width=r;break;case"text":o.font.size=r}}async function q(o,t){if(o&&t)return h(o)?R(o,t):void(y(o)&&G(o,t))}function B(o,t,r){if(o&&t!=null)if(h(o)){const l=o.symbolLayers;l&&l.forEach(e=>{if(e&&e.type==="object")switch(r){case"tilt":e.tilt=t;break;case"roll":e.roll=t;break;default:e.heading=t}})}else y(o)&&(o.type!=="simple-marker"&&o.type!=="picture-marker"&&o.type!=="text"||(o.angle=t))}async function Q(o,t){return await o.fetchSymbol(t)||o.fetchCIMSymbol(t)}export{B as D,Q as N,q as R,U as h,X as k};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./symbolLayerUtils-9oAjEGNv.js","./index-XUlETPJZ.js","./index-MxuoigYw.css","./LRUCache-P08N0BvZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}