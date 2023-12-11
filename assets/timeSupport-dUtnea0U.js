import{A as j,hb as C,dB as D,b2 as V,O as y,Q as g,R as z,d as B,bz as J,hc as Z,hd as K,K as W,cA as x,_ as E,he as L,hf as Y,hg as k,hh as H,D as $,$ as N,cD as Q}from"./index-XUlETPJZ.js";import{x as I,j as F}from"./projectionSupport-H1hvmvka.js";import{d as X,h as G,b as ee,P,$ as te,H as re,U as ie,K as b}from"./featureConversionUtils-AHVFLuq1.js";import{t as d}from"./OptimizedGeometry-1RFAES06.js";const A=new d,ne=new d,v=new d,m={esriGeometryPoint:P,esriGeometryPolyline:te,esriGeometryPolygon:re,esriGeometryMultipoint:ie};function xe(e,t,n,r=e.hasZ,s=e.hasM){if(t==null)return null;const i=e.hasZ&&r,l=e.hasM&&s;if(n){const o=G(v,t,e.hasZ,e.hasM,"esriGeometryPoint",n,r,s);return P(o,i,l)}return P(t,i,l)}function h(e,t,n,r,s,i,l=t,o=n){var R,p,S;const a=t&&l,u=n&&o,c=r!=null?"coords"in r?r:r.geometry:null;if(c==null)return null;if(s){let f=X(ne,c,t,n,e,s,l,o);return i&&(f=G(v,f,a,u,e,i)),((R=m[e])==null?void 0:R.call(m,f,a,u))??null}if(i){const f=G(v,c,t,n,e,i,l,o);return((p=m[e])==null?void 0:p.call(m,f,a,u))??null}return ee(A,c,t,n,l,o),((S=m[e])==null?void 0:S.call(m,A,a,u))??null}function Ne(e){return e&&O in e?JSON.parse(JSON.stringify(e,se)):e}const O="_geVersion",se=(e,t)=>e!==O?t:void 0,le=new j({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),M=Object.freeze({});async function be(e,t,n){const{outFields:r,orderByFields:s,groupByFieldsForStatistics:i,outStatistics:l}=e;if(r)for(let o=0;o<r.length;o++)r[o]=r[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(l)for(let o=0;o<l.length;o++)l[o].onStatisticField&&(l[o].onStatisticField=l[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),oe(e,t,n)}async function oe(e,t,n){var i;if(!e)return null;let{where:r}=e;if(e.where=r=r==null?void 0:r.trim(),(!r||/^1 *= *1$/.test(r)||t&&t===r)&&(e.where=null),!e.geometry)return e;let s=await ue(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:l}=e.geometry;s=C(s),s.spatialReference=l}if(s){await I(s.spatialReference,n),s=ae(s,n);const l=(await D(V(s)))[0];if(l==null)throw M;const o="quantizationParameters"in e&&((i=e.quantizationParameters)==null?void 0:i.tolerance)||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,a=o&&T(s,n)?{densificationStep:8*o}:void 0,u=l.toJSON(),c=F(u,u.spatialReference,n,a);if(!c)throw M;c.spatialReference=n,e.geometry=c}return e}function T(e,t){if(!e)return!1;const n=e.spatialReference;return(y(e)||g(e)||z(e))&&!B(n,t)&&!J(n,t)}function ae(e,t){const n=e.spatialReference;return T(e,t)&&y(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function ue(e){const{distance:t,units:n}=e,r=e.geometry;if(t==null||"vertexAttributes"in r)return r;const s=r.spatialReference,i=n?le.fromJSON(n):Z(s),l=s&&(K(s)||W(s))?r:await I(s,x).then(()=>F(r,x));return(await ce())(l.spatialReference,l,t,i)}async function ce(){return(await E(()=>import("./geometryEngineJSON-t_ADQnwt.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4]),import.meta.url)).geodesicBuffer}function fe(e){return e==="mesh"?L:Y(e)}function U(e,t){return e?t?4:3:t?3:2}function me(e,t,n,r){return q(e,t,n,r.coords[0],r.coords[1])}function pe(e,t,n,r,s,i){const l=U(s,i),{coords:o,lengths:a}=r;if(!a)return!1;for(let u=0,c=0;u<a.length;u++,c+=l)if(!q(e,t,n,o[c],o[c+1]))return!1;return!0}function q(e,t,n,r,s){if(!e)return!1;const i=U(t,n),{coords:l,lengths:o}=e;let a=!1,u=0;for(const c of o)a=ye(a,l,i,u,c,r,s),u+=c*i;return a}function ye(e,t,n,r,s,i,l){let o=e,a=r;for(let u=r,c=r+s*n;u<c;u+=n){a=u+n,a===c&&(a=r);const R=t[u],p=t[u+1],S=t[a],f=t[a+1];(p<l&&f>=l||f<l&&p>=l)&&R+(l-p)/(f-p)*(S-R)<i&&(o=!o)}return o}const w="unsupported-query",Re={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},_={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function de(e){return e!=null&&_.spatialRelationship[e]===!0}function Se(e){return e!=null&&_.queryGeometry[Q(e)]===!0}function he(e){return e!=null&&_.layerGeometry[e]===!0}function ge(){return E(()=>import("./geometryEngineJSON-t_ADQnwt.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4]),import.meta.url)}function Ae(e,t,n,r,s){if(g(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const i=b(new d,t,!1,!1);return Promise.resolve(l=>me(i,!1,!1,l))}if(g(t)&&n==="esriGeometryMultipoint"){const i=b(new d,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>pe(i,!1,!1,l,r,s))}if(y(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(i=>k(t,h(n,r,s,i)));if(y(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(i=>H(t,h(n,r,s,i)));if(y(t)&&e==="esriSpatialRelIntersects"){const i=fe(n);return Promise.resolve(l=>i(t,h(n,r,s,l)))}return ge().then(i=>{const l=i[Re[e]].bind(null,t.spatialReference,t);return o=>l(h(n,r,s,o))})}async function Me(e,t,n){var i;const{spatialRel:r,geometry:s}=e;if(s){if(!de(r))throw new $(w,"Unsupported query spatial relationship",{query:e});if(N(s.spatialReference)&&N(n)){if(!Se(s))throw new $(w,"Unsupported query geometry type",{query:e});if(!he(t))throw new $(w,"Unsupported layer geometry type",{query:e});if(e.outSR)return I((i=e.geometry)==null?void 0:i.spatialReference,e.outSR)}}}function Ee(e){if(y(e))return!0;if(g(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function Fe(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:r,endTimeField:s}=e;let i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&s)await t.forEach(o=>{const a=n.getAttribute(o,r),u=n.getAttribute(o,s);a==null||isNaN(a)||(i=Math.min(i,a)),u==null||isNaN(u)||(l=Math.max(l,u))});else{const o=r||s;await t.forEach(a=>{const u=n.getAttribute(a,o);u==null||isNaN(u)||(i=Math.min(i,u),l=Math.max(l,u))})}return{start:i,end:l}}function Oe(e,t,n){var a;if(!t||!e)return null;const{startTimeField:r,endTimeField:s}=e;if(!r&&!s)return null;const{start:i,end:l}=t;if(i===null&&l===null)return null;if(i===void 0&&l===void 0)return Ge();const o=((a=n.getAttributeAsTimestamp)==null?void 0:a.bind(n))??n.getAttribute.bind(n);return r&&s?$e(o,r,s,i,l):we(o,r||s,i,l)}function $e(e,t,n,r,s){return r!=null&&s!=null?i=>{const l=e(i,t),o=e(i,n);return(l==null||l<=s)&&(o==null||o>=r)}:r!=null?i=>{const l=e(i,n);return l==null||l>=r}:s!=null?i=>{const l=e(i,t);return l==null||l<=s}:void 0}function we(e,t,n,r){return n!=null&&r!=null&&n===r?s=>e(s,t)===n:n!=null&&r!=null?s=>{const i=e(s,t);return i!=null&&i>=n&&i<=r}:n!=null?s=>{const i=e(s,t);return i!=null&&i>=n}:r!=null?s=>{const i=e(s,t);return i!=null&&i<=r}:void 0}function Ge(){return()=>!1}export{Ee as I,Me as P,be as S,h as a,M as g,Ne as h,oe as j,Fe as n,Oe as t,Ae as v,xe as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./geometryEngineJSON-t_ADQnwt.js","./geometryEngineBase-Lr10kmzU.js","./index-XUlETPJZ.js","./index-MxuoigYw.css","./json-v6EOeNTY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}