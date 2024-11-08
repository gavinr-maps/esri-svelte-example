import{b as v}from"./index-c99fc80c-xXzSzjCa.js";import{L as b,M as g}from"./index-d2df902e-QBEsANpt.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */var C=l=>v(l),d=l=>({blocking:t=!1,name:s}={})=>v((e,r)=>{if(r.onLifecycle(()=>b(e.el,l("./assets"),({t9nLocale:n,t9nStrings:o,lang:c})=>{r.exports={...o,_lang:c,_t9nLocale:n};const L=o.componentLabel??o.widgetLabel;typeof L=="string"&&"label"in e&&e.label==null&&(e.label??(e.label=L))},s)),t)return r.ready;const a=g(e.el);return{_lang:a.lang,_t9nLocale:a.t9nLocale}}),y=l=>m,i="arcgisPropertyChange",m=(...l)=>v((t,s)=>{const e=t;t.manager.isLit&&(e[i]={emit:a=>{const n=new CustomEvent(i,{detail:a,cancelable:!0});return t.el.dispatchEvent(n),n}});const r=e[i];return s.onLoad(()=>s.onLifecycle(()=>l.map(a=>t.manager.watch(a,()=>r.emit({name:a}))))),r});export{C as l,d as m,y as u};
