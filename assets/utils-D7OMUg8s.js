const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./visualVariableUtils-DzaXbn8H.js","./Color-DDUWtbqR.js","./colorUtils-CS9vdHXB.js","./mathUtils-ClvKsMak.js","./subclass-BR3PhgZG.js","./Graphic-Dc7F67nR.js","./Evented-CXIxDjmW.js","./Accessor-D6mNnsWy.js","./geometry-DpwwkAX1.js","./Extent-DHjqVB-p.js","./Point-DB4Hp4hH.js","./jsonMap-DCC6W5ex.js","./writer-3zufXUNV.js","./assets-C2mb-ea2.js","./index-CeCSsEgo.js","./index-CjOb8WjV.css","./Polyline-D97hl-6E.js","./PopupTemplate-ByHks6sq.js","./Clonable-cKbRam6-.js","./reactiveUtils-BFQ0BtrB.js","./shared-B3wH2qpO.js","./fieldUtils-CNduWQU9.js","./intl-Dpfm8vPB.js","./Promise-CZrWwByK.js","./enumeration--HlxOQ_N.js","./ActionToggle-C0Z1k2jc.js","./Identifiable-BLvpQbOc.js","./symbols-CsUQ5BxR.js","./TextSymbol-gKE-H_J6.js","./screenUtils-PfxkaaMN.js","./materialUtils-CQ3JLQ1x.js","./opacityUtils-BT7mQkwC.js","./aaBoundingBox-rJEWaOSN.js","./persistableUrlUtils-BcifXQ1Z.js","./collectionUtils-Dm1icNvk.js","./Portal-liet8xHC.js","./jsonUtils-Cma_7A64.js","./compilerUtils-BA04t1lN.js","./lengthUtils-D7_DvYH0.js","./sizeVariableUtils-Cmcuvw-4.js"])))=>i.map(i=>d[i]);
import{ab as I,r as C}from"./subclass-BR3PhgZG.js";import{E}from"./Promise-CZrWwByK.js";import{b as x}from"./fieldUtils-CNduWQU9.js";import{l as V}from"./intl-Dpfm8vPB.js";import"./ColorStop-CXfPDZon.js";import"./geometry-DpwwkAX1.js";import"./Point-DB4Hp4hH.js";import"./Basemap-DhGpUWGY.js";import"./reactiveUtils-BFQ0BtrB.js";import"./assets-C2mb-ea2.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-ybYUU6jq.js";import{h as p}from"./utils-C1cS-0Yj.js";import{_ as h}from"./index-CeCSsEgo.js";import{u as A}from"./Color-DDUWtbqR.js";import"./symbols-CsUQ5BxR.js";import{r as $}from"./timeUtils-DQR2jUPL.js";import{Z as N,N as R}from"./utils-BaQRRNPl.js";import{d as U}from"./TextSymbol-gKE-H_J6.js";import{l as O}from"./HeatmapColorStop-CgvKf0-E.js";const B=/^-?(\d+)(\.(\d+))?$/i;function M(t,e){return t-e}function _(t,e){let o,a;return o=Number(t.toFixed(e)),o<t?a=o+1/10**e:(a=o,o-=1/10**e),o=Number(o.toFixed(e)),a=Number(a.toFixed(e)),[o,a]}function S(t,e,o,a,n){const r=k(t,e,o,a),l=r.previous==null||r.previous<=n,i=r.next==null||r.next<=n;return l&&i||r.previous+r.next<=2*n}function v(t){const e=String(t),o=e.match(B);if(o!=null&&o[1])return{integer:o[1].split("").length,fractional:o[3]?o[3].split("").length:0};if(e.toLowerCase().includes("e")){const a=e.split("e"),n=a[0],r=a[1];if(n&&r){const l=Number(n);let i=Number(r);const u=i>0;u||(i=Math.abs(i));const s=v(l);return u?(s.integer+=i,i>s.fractional?s.fractional=0:s.fractional-=i):(s.fractional+=i,i>s.integer?s.integer=1:s.integer-=i),s}}return{integer:0,fractional:0}}function k(t,e,o,a){const n={previous:null,next:null};if(o!=null){const r=t-o,l=e-o-r;n.previous=Math.floor(Math.abs(100*l/r))}if(a!=null){const r=a-t,l=a-e-r;n.next=Math.floor(Math.abs(100*l/r))}return n}function gt(t,e={}){const o=t.slice(0),{tolerance:a=2,strictBounds:n=!1,indexes:r=o.map((l,i)=>i)}=e;r.sort(M);for(let l=0;l<r.length;l++){const i=r[l],u=o[i],s=i===0?null:o[i-1],c=i===o.length-1?null:o[i+1],m=v(u).fractional;if(m){let d,w=0,g=!1;for(;w<=m&&!g;){const b=_(u,w);d=n&&l===0?b[1]:b[0],g=S(u,d,s,c,a),w++}g&&(o[i]=d)}}return o}const T={maximumFractionDigits:20};function q(t){return V(t,T)}const F="<",Q=">";function L(t,e,o,a){let n="";return e===0?n=`${F} `:e===o&&(n=`${Q} `),n+(a?R(t,a):q(t))}const ht=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="];async function j(t){if(!("visualVariables"in t)||!t.visualVariables)return null;const e=t.visualVariables.find(l=>l.type==="color");if(!e)return null;let o=null,a=null;if(e.stops){if(e.stops.length===1)return e.stops[0].color;o=e.stops[0].value,a=e.stops[e.stops.length-1].value}const n=o!=null&&a!=null?o+(a-o)/2:0,{getColor:r}=await h(async()=>{const{getColor:l}=await import("./visualVariableUtils-DzaXbn8H.js");return{getColor:l}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url);return r(e,n)??null}async function bt(t,e){const o=t.trailCap,a=t.trailWidth||1,n=e||await j(t)||t.color;return new U({cap:o,color:n,width:a})}function vt(t){return t!=null&&typeof t=="object"&&"min"in t&&"max"in t}function D(t,e){var o,a;if(!e.field)return null;if("featureReduction"in t)switch((o=t.featureReduction)==null?void 0:o.type){case"cluster":case"binning":{const n=t.featureReduction.fields.find(({name:r})=>r.toLowerCase()===e.field.toLowerCase());return n&&"getField"in t?t.getField(n.onStatisticField):null}}return"getField"in t?(a=t.getField)==null?void 0:a.call(t,e.field):null}function K(t,e){var a,n,r;const o="popupTemplate"in t?(a=t.popupTemplate)==null?void 0:a.fieldInfos:null;if(o!=null&&o.length&&e)return(r=(n=o.find(l=>{var i;return((i=l.fieldName)==null?void 0:i.toLowerCase())===e.toLowerCase()}))==null?void 0:n.format)==null?void 0:r.dateFormat}function yt(t,e,o){var r,l,i,u;const a=D(t,e);if(!a||!N(a)&&!x(a))return null;let n=K(t,a.name);if(!n&&a.type==="date"){let s=0,c=0;e.stops?(s=((l=(r=e.stops)==null?void 0:r.at(0))==null?void 0:l.value)??s,c=((u=(i=e.stops)==null?void 0:i.at(-1))==null?void 0:u.value)??c):"minDataValue"in e&&"maxDataValue"in e&&(s=e.minDataValue??s,c=e.maxDataValue??c),n=c-s>2*$.days?"short-date":"short-date-short-time"}return{fieldType:a.type,format:n,timeZoneOptions:{layerTimeZone:"preferredTimeZone"in t?t.preferredTimeZone:null,viewTimeZone:o,datesInUnknownTimezone:"datesInUnknownTimezone"in t&&t.datesInUnknownTimezone}}}function It(t){var e,o;if("authoringInfo"in t)return(o=(e=t.authoringInfo)==null?void 0:e.visualVariables)==null?void 0:o.find(({theme:a})=>a==="reference-size")}const W=new A([64,64,64]);function y(t,e){const o=[],a=t.length-1;return t.length===5?o.push(0,2,4):o.push(0,a),t.map((n,r)=>o.includes(r)?L(n,r,a,e):null)}async function G(t,e,o){let a=!1,n=[],r=[];if(t.stops){const s=t.stops;n=s.map(c=>c.value),a=s.some(c=>!!c.label),a&&(r=s.map(c=>c.label))}const l=n[0],i=n[n.length-1];if(l==null&&i==null)return null;const u=a?null:y(n,o);return(await Promise.all(n.map(async(s,c)=>({value:s,color:t.type==="opacity"?await P(s,t,e):(await h(async()=>{const{getColor:m}=await import("./visualVariableUtils-DzaXbn8H.js");return{getColor:m}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url)).getColor(t,s),label:a?r[c]:(u==null?void 0:u[c])??""})))).reverse()}async function P(t,e,o){const a=new A(o??W),n=(await h(async()=>{const{getOpacity:r}=await import("./visualVariableUtils-DzaXbn8H.js");return{getOpacity:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url)).getOpacity(e,t);return n!=null&&(a.a=n),a}function Ct(t){let e=!1,o=[],a=[];o=t.map(i=>i.value),e=t.some(i=>!!i.label),e&&(a=t.map(i=>i.label??""));const n=o[0],r=o[o.length-1];if(n==null&&r==null)return null;const l=e?null:y(o);return o.map((i,u)=>({value:i,color:Z(i,t),label:e?a[u]:(l==null?void 0:l[u])??""})).reverse()}function Z(t,e){const{startIndex:o,endIndex:a,weight:n}=z(t,e);if(o===a)return e[o].color;const r=A.blendColors(e[o].color,e[a].color,n);return new A(r)}function z(t,e){let o=0,a=e.length-1;return e.some((n,r)=>t<n.value?(a=r,!0):(o=r,!1)),{startIndex:o,endIndex:a,weight:(t-e[o].value)/(e[a].value-e[o].value)}}function Et(t,e){let o=[];if(t&&t.type==="multipart")t.colorRamps.reverse().forEach((a,n)=>{n===0?o.push({value:e.max,color:new A(a.toColor),label:"high"}):o.push({value:null,color:new A(a.toColor),label:""}),n===t.colorRamps.length-1?o.push({value:e.min,color:new A(a.fromColor),label:"low"}):o.push({value:null,color:new A(a.fromColor),label:""})});else{let a,n;t&&t.type==="algorithmic"?(a=t.fromColor,n=t.toColor):(a=[0,0,0,1],n=[255,255,255,1]),o=[{value:e.max,color:new A(n),label:"high"},{value:e.min,color:new A(a),label:"low"}]}return o}function H(t){if(!t.colorStops)return[];const e=[...t.colorStops].filter(a=>{var n;return((n=a.color)==null?void 0:n.a)>0});let o=e.length-1;if(e&&e[0]){const a=e[o];a&&a.ratio!==1&&(e.push(new O({ratio:1,color:a.color})),o++)}return e.map((a,n)=>{var l,i;let r="";return n===0?r=((l=t.legendOptions)==null?void 0:l.minLabel)||"low":n===o&&(r=((i=t.legendOptions)==null?void 0:i.maxLabel)||"high"),{color:a.color,label:r,ratio:a.ratio}}).reverse()}const xt=E("short-date");async function f(t,e,o){C(t,e,()=>[]).push(...o)}async function Vt(t){var o,a;const e=new Map;if(!t)return e;if("visualVariables"in t&&t.visualVariables){const n=t.visualVariables.filter(r=>r.type==="color");for(const r of n){const l=(await G(r)??[]).map(i=>i.color);await f(e,r.field||r.valueExpression,l)}}if(t.type==="heatmap"){const n=H(t).map(r=>r.color);await f(e,t.field||t.valueExpression,n)}else if(t.type==="pie-chart"){for(const n of t.attributes)await f(e,n.field||n.valueExpression,[n.color]);await f(e,"default",[(o=t==null?void 0:t.othersCategory)==null?void 0:o.color,p(t.backgroundFillSymbol,null)])}else if(t.type==="dot-density"){for(const n of t.attributes)await f(e,n.field||n.valueExpression,[n.color]);await f(e,"default",[t.backgroundColor])}else if(t.type==="unique-value")if(((a=t.authoringInfo)==null?void 0:a.type)==="predominance")for(const n of t.uniqueValueInfos??[])await f(e,n.value.toString(),[p(n.symbol,null)]);else{const n=(t.uniqueValueInfos??[]).map(s=>p(s.symbol,null)),{field:r,field2:l,field3:i,valueExpression:u}=t;(r||u)&&await f(e,r||u,n),l&&await f(e,l,n),i&&await f(e,i,n)}else if(t.type==="class-breaks"){const n=t.classBreakInfos.map(i=>p(i.symbol,null)),{field:r,valueExpression:l}=t;await f(e,r??l,n)}else t.type==="simple"&&await f(e,"default",[p(t.symbol,null)]);return"defaultSymbol"in t&&t.defaultSymbol&&await f(e,"default",[p(t.defaultSymbol,null)]),e.forEach((n,r)=>{const l=I(n.filter(Boolean),(i,u)=>JSON.stringify(i)===JSON.stringify(u));e.set(r,l)}),e}export{F as a,Q as b,Z as c,Ct as d,H as e,vt as f,Et as g,j as h,v as i,yt as j,G as k,k as l,bt as p,L as r,ht as s,gt as u,xt as v,It as w,Vt as x};
