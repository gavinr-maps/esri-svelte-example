const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./symbolLayerUtils-9ZRBOe8t.js","./index-CeCSsEgo.js","./index-CjOb8WjV.css","./assets-C2mb-ea2.js","./subclass-BR3PhgZG.js","./Evented-CXIxDjmW.js","./Accessor-D6mNnsWy.js","./LRUCache-ju6LnIBZ.js","./MemCache-C6WUx-5V.js","./mathUtils-ClvKsMak.js","./aaBoundingBox-rJEWaOSN.js","./Extent-DHjqVB-p.js","./Point-DB4Hp4hH.js","./jsonMap-DCC6W5ex.js","./writer-3zufXUNV.js","./Polyline-D97hl-6E.js","./symbols-CsUQ5BxR.js","./enumeration--HlxOQ_N.js","./fieldUtils-CNduWQU9.js","./intl-Dpfm8vPB.js","./Promise-CZrWwByK.js","./geometry-DpwwkAX1.js","./TextSymbol-gKE-H_J6.js","./Color-DDUWtbqR.js","./colorUtils-CS9vdHXB.js","./screenUtils-PfxkaaMN.js","./materialUtils-CQ3JLQ1x.js","./opacityUtils-BT7mQkwC.js","./persistableUrlUtils-BcifXQ1Z.js","./reactiveUtils-BFQ0BtrB.js","./shared-B3wH2qpO.js","./collectionUtils-Dm1icNvk.js","./Portal-liet8xHC.js","./Clonable-cKbRam6-.js"])))=>i.map(i=>d[i]);
import{_ as S}from"./index-CeCSsEgo.js";import{u as f}from"./Color-DDUWtbqR.js";import{x as y,S as p,l as z}from"./symbols-CsUQ5BxR.js";import{e as v}from"./reactiveUtils-BFQ0BtrB.js";import"./subclass-BR3PhgZG.js";import{u,e as _}from"./screenUtils-PfxkaaMN.js";import{U as E}from"./mathUtils-ClvKsMak.js";import{i as C}from"./jsonUtils-C4Wp5KpV.js";import{C as w}from"./cimSymbolUtils-D00GIWna.js";import{n as R,U as O}from"./assets-C2mb-ea2.js";import{e as U}from"./LRUCache-ju6LnIBZ.js";const g="picture-fill",k="simple-fill",A="simple-line",$="simple-marker",I="text",M="cim",b=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),d=new U(1e3);function ct(t){const o=t.style;let n=null;if(t)switch(t.type){case $:o!=="cross"&&o!=="x"&&(n=t.color);break;case k:o&&o!=="solid"?o!=="none"&&(n={type:"pattern",x:0,y:0,src:R(`esri/symbols/patterns/${o}.png`),width:5,height:5}):n=t.color;break;case g:n={type:"pattern",src:t.url,width:u(t.width)*t.xscale,height:u(t.height)*t.yscale,x:u(t.xoffset),y:u(t.yoffset)};break;case I:n=t.color;break;case M:n=w(t)}return n}function ut(t,o){const n=t+"-"+o;return d.get(n)!==void 0?Promise.resolve(d.get(n)):O(t,{responseType:"image"}).then(r=>{const e=r.data,l=e.naturalWidth,i=e.naturalHeight,a=document.createElement("canvas");a.width=l,a.height=i;const s=a.getContext("2d");s.fillStyle=o,s.fillRect(0,0,l,i),s.globalCompositeOperation="destination-in",s.drawImage(e,0,0);const c=a.toDataURL();return d.put(n,c),c})}function x(t){if(!t)return null;let o=null;switch(t.type){case k:case g:case $:o=x(t.outline);break;case A:{const n=u(t.width);t.style!=null&&t.style!=="none"&&n!==0&&(o={color:t.color,style:N(t.style),width:n,cap:t.cap,join:t.join==="miter"?u(t.miterLimit):t.join},o.dashArray=D(o).join(",")||"none");break}default:o=null}return o}function D(t){if(!(t!=null&&t.style))return[];const{dashArray:o,style:n,width:r}=t;if(typeof o=="string"&&o!=="none")return o.split(",").map(i=>Number(i));const e=r??0,l=b.has(n)?b.get(n).map(i=>i*e):[];if(t.cap!=="butt")for(const[i,a]of l.entries())l[i]=i%2==1?a+e:Math.max(a-e,1);return l}const N=(()=>{const t={};return o=>{if(t[o])return t[o];const n=o.replaceAll("-","");return t[o]=n,n}})(),ft=new f([128,128,128]),P=new f("white");function J(t){var n,r;const o=(n=t.symbolLayers)==null?void 0:n.at(-1);if(o&&"outline"in o)return(r=o==null?void 0:o.outline)==null?void 0:r.size}function mt(t){var o;if(!t)return 0;if(y(t)){const n=J(t);return n??0}return _((o=x(t))==null?void 0:o.width)}function ht(t){if(t==null||!("symbolLayers"in t)||t.symbolLayers==null)return!1;switch(t.type){case"point-3d":return t.symbolLayers.some(o=>o.type==="object");case"line-3d":return t.symbolLayers.some(o=>o.type==="path");case"polygon-3d":return t.symbolLayers.some(o=>o.type==="object"||o.type==="extrude");default:return!1}}function yt(t){var o;return((o=t.resource)==null?void 0:o.href)??""}function pt(t,o){if(!t)return null;let n=null;return y(t)?n=T(t):p(t)&&(n=t.type==="cim"?w(t):t.color?new f(t.color):null),n?h(n,o):null}function T(t){const o=t.symbolLayers;if(!o)return null;let n=null;return o.forEach(r=>{var e;r.type==="object"&&((e=r.resource)!=null&&e.href)||(n=r.type==="water"?r.color:r.material?r.material.color:null)}),n?new f(n):null}function h(t,o){if(o==null||t==null)return t;const n=t.toRgba();return n[3]=n[3]*o,new f(n)}function H(t,o,n){const r=t.symbolLayers;if(!r)return;const e=l=>h(o=o??l??(n!=null?P:null),n);r.forEach(l=>{var i,a;if(l.type!=="object"||!((i=l.resource)!=null&&i.href)||o)if(l.type==="water")l.color=e(l.color);else{const s=l.material!=null?l.material.color:null,c=e(s);l.material==null?l.material=new z({color:c}):l.material.color=c,n!=null&&"outline"in l&&((a=l.outline)==null?void 0:a.color)!=null&&(l.outline.color=h(l.outline.color,n))}})}function V(t,o,n){var r;(o=o??t.color)&&(t.color=h(o,n)),n!=null&&"outline"in t&&((r=t.outline)!=null&&r.color)&&(t.outline.color=h(t.outline.color,n))}function dt(t,o,n){t&&(o||n!=null)&&(o&&(o=new f(o)),y(t)?H(t,o,n):p(t)&&V(t,o,n))}async function W(t,o){const n=t.symbolLayers;n&&await v(n,async r=>q(r,o))}async function q(t,o){switch(t.type){case"extrude":F(t,o);break;case"icon":case"line":case"text":B(t,o);break;case"path":K(t,o);break;case"object":await G(t,o)}}function B(t,o){const n=L(o);n!=null&&(t.size=n)}function L(t){for(const o of t)if(typeof o=="number")return o;return null}function F(t,o){t.size=typeof o[2]=="number"?o[2]:0}async function G(t,o){const{resourceSize:n,symbolSize:r}=await Q(t),e=j(o,n,r);t.width=m(o[0],r[0],n[0],e),t.depth=m(o[1],r[1],n[1],e),t.height=m(o[2],r[2],n[2],e)}function K(t,o){const n=j(o,E,[t.width,void 0,t.height]);t.width=m(o[0],t.width,1,n),t.height=m(o[2],t.height,1,n)}function j(t,o,n){for(let r=0;r<3;r++){const e=t[r];switch(e){case"symbol-value":{const l=n[r];return l!=null?l/o[r]:1}case"proportional":break;default:if(e&&o[r])return e/o[r]}}return 1}async function Q(t){const{computeObjectLayerResourceSize:o}=await S(()=>import("./symbolLayerUtils-9ZRBOe8t.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]),import.meta.url),n=await o(t,10),{width:r,height:e,depth:l}=t,i=[r,l,e];let a=1;for(let s=0;s<3;s++){const c=i[s];if(c!=null){a=c/n[s];break}}for(let s=0;s<3;s++)i[s]==null&&(i[s]=n[s]*a);return{resourceSize:n,symbolSize:i}}function m(t,o,n,r){switch(t){case"proportional":return n*r;case"symbol-value":return o??n;default:return t}}function X(t,o){const n=L(o);if(n!=null)switch(t.type){case"simple-marker":t.size=n;break;case"picture-marker":{const r=t.width/t.height;r>1?(t.width=n,t.height=n*r):(t.width=n*r,t.height=n);break}case"simple-line":t.width=n;break;case"text":t.font.size=n}}async function bt(t,o){if(t&&o)return y(t)?W(t,o):void(p(t)&&X(t,o))}function wt(t,o,n){if(t&&o!=null)if(y(t)){const r=t.symbolLayers;r&&r.forEach(e=>{if(e&&e.type==="object")switch(n){case"tilt":e.tilt=(e.tilt??0)+o;break;case"roll":e.roll=(e.roll??0)+o;break;default:e.heading=(e.heading??0)+o}})}else p(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle+=o))}function gt(t){if(!t)return null;const o=t.effects.filter(n=>n.type!=="bloom").map(n=>n.toJSON());return C(o)}function kt(t){return t!=null&&t.type==="polygon-3d"&&t.symbolLayers.some(o=>o.type==="extrude")}async function $t(t,o){return await t.fetchSymbol(o)||t.fetchCIMSymbol(o)}export{wt as D,gt as I,kt as J,$t as N,bt as R,ht as a,ft as b,dt as c,ut as f,D as g,pt as h,mt as m,yt as p,ct as u,N as w,x as y};
