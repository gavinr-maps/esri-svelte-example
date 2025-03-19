const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineBase-yFIvKOkM.js","./_commonjsHelpers-DCkdB7M8.js","./hydrated-Dw-Mfo_Y.js","./Extent-CBBGeHb-.js","./Accessor-BHnuXKD2.js","./Point-XGrwlf63.js","./cast-BA_-jlhc.js","./index-tefRSezt.js","./index-Cx51aysm.css","./JSONSupport-CGdeqxpk.js","./writer-B2bQV2uU.js","./Polyline-BmuD2-ZN.js","./mathUtils-DV9iOXpW.js"])))=>i.map(i=>d[i]);
import{_ as C}from"./index-tefRSezt.js";import{D as ln,y as V,s as un,ac as b}from"./Accessor-BHnuXKD2.js";import{s as an}from"./SimpleObservable-7oieNGD8.js";import{n as H}from"./vec3f64-BLpZdpfb.js";import{c as j,ap as g,$ as D,_ as cn,a6 as fn,aq as pn,e as hn,aa as K,g as Z,N as d,j as mn,r as dn,F as q,O as B,af as F}from"./Point-XGrwlf63.js";import{w as gn}from"./Extent-CBBGeHb-.js";import{j as wn,P as _n,u as yn}from"./Polyline-BmuD2-ZN.js";import{o as O,G as kn}from"./projectBuffer-DOU0xvVi.js";function N(e,t,n,s,i,o){return z[0]=e,z[1]=t,z[2]=n,O(z,s,0,i,o,0)}const z=H();let E=0;class k{static fromGE(t){const n=new k;return n._wkt=t.wkt,n._wkid=t.wkid,n._isInverse=t.isInverse,n}constructor(t){this.uid=E++,t?(this._wkt=t.wkt!=null?t.wkt:null,this._wkid=t.wkid!=null?t.wkid:-1,this._isInverse=t.isInverse!=null&&t.isInverse===!0):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}get wkt(){return this._wkt}set wkt(t){this._wkt=t,this.uid=E++}get wkid(){return this._wkid}set wkid(t){this._wkid=t,this.uid=E++}get isInverse(){return this._isInverse}set isInverse(t){this._isInverse=t,this.uid=E++}getInverse(){const t=new k;return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t}}let L=class v{static cacheKey(t,n){var s,i,o,r,u,l;return[((s=t.wkid)==null?void 0:s.toString())??"-1",((i=t.wkt)==null?void 0:i.toString())??"",((o=t.wkt2)==null?void 0:o.toString())??"",((r=n.wkid)==null?void 0:r.toString())??"-1",((u=n.wkt)==null?void 0:u.toString())??"",((l=n.wkt2)==null?void 0:l.toString())??""].join()}static fromGE(t){const n=new v;let s="";for(const i of t.steps){const o=k.fromGE(i);n.steps.push(o),s+=o.uid.toString()+","}return n._cachedProjection={},n._gtlistentry=null,n._chain=s,n}constructor(t){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,t==null?void 0:t.steps)for(const n of t.steps)n instanceof k?this.steps.push(n):this.steps.push(new k({wkid:n.wkid,wkt:n.wkt,isInverse:n.isInverse}))}getInverse(){const t=new v;t.steps=[];for(let n=this.steps.length-1;n>=0;n--){const s=this.steps[n];t.steps.push(s.getInverse())}return t}getGTListEntry(){let t="";for(const n of this.steps)t+=n.uid.toString()+",";return t!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=t),this._gtlistentry}assignCachedGe(t,n,s){this._cachedProjection[v.cacheKey(t,n)]=s}getCachedGeTransformation(t,n){let s="";for(const o of this.steps)s+=o.uid.toString()+",";s!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=s);const i=this._cachedProjection[v.cacheKey(t,n)];return i===void 0?null:i}};function vn(e,t,n){if(t==null||n==null||n.vcsWkid||j(t,n)||g(t)||g(n))return null;const s=D(t)/D(n);if(s===1)return null;switch(e){case"point":case"esriGeometryPoint":return i=>Rn(i,s);case"polyline":case"esriGeometryPolyline":return i=>$n(i,s);case"polygon":case"esriGeometryPolygon":return i=>jn(i,s);case"multipoint":case"esriGeometryMultipoint":return i=>xn(i,s);case"extent":case"esriGeometryEnvelope":return i=>Pn(i,s);default:return null}}function Rn(e,t){(e==null?void 0:e.z)!=null&&(e.z*=t)}function jn(e,t){if(e)for(const n of e.rings)for(const s of n)s.length>2&&(s[2]*=t)}function $n(e,t){if(e)for(const n of e.paths)for(const s of n)s.length>2&&(s[2]*=t)}function xn(e,t){if(e)for(const n of e.points)n.length>2&&(n[2]*=t)}function Pn(e,t){e&&e.zmin!=null&&e.zmax!=null&&(e.zmin*=t,e.zmax*=t)}let m=null,w=null,R=null,S={};const W=new an;function P(){return!!m&&dn()}function J(){return!!P()||(V(W),$(),!1)}function Gn(e,t){return!e||!t||_(e,t)||J()}function In(e,t){return!_(e,t)&&!P()}function $(e){return R==null&&(R=Promise.all([cn(),C(()=>import("./geometryEngineBase-yFIvKOkM.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.g),C(()=>import("./hydrated-Dw-Mfo_Y.js"),__vite__mapDeps([2,3,4,5,6,7,8,9,10,11,12]),import.meta.url)])),R.then(([,t,{hydratedAdapter:n}])=>{ln(e),w=n,m=t.default,m._enableProjection(fn),W.notify()})}function Q(e,t,n=null,s=null){return Array.isArray(e)?e.length===0?[]:(pn(e),A(w,e,e[0].spatialReference,t,n,s)):(hn(e),A(w,[e],e.spatialReference,t,n,s)[0])}function A(e,t,n,s,i=null,o=null){if(n==null||s==null)return t;if(_(n,s,i))return t.map(r=>M(r,n,s));if(i==null&&K(n))return t.map(r=>M(r,n,Z.WGS84)).map(r=>x(r,s));if(i==null&&K(s))return t.map(r=>x(r,Z.WGS84)).map(r=>M(r,Z.WGS84,s));if(i==null){const r=L.cacheKey(n,s);S[r]!==void 0?i=S[r]:((i=X(n,s,void 0))==null&&(i=new L),S[r]=i)}if(m==null||e==null)throw new T;return o!=null?m._project(e,t,n,s,i,o):m._project(e,t,n,s,i)}function zn(e,t){const n=U([e],t);return n.pending!=null?{pending:n.pending,geometry:null}:n.geometries!=null?{pending:null,geometry:n.geometries[0]}:{pending:null,geometry:null}}function U(e,t){if(!P()){for(const n of e)if(n!=null&&!j(n.spatialReference,t)&&d(n.spatialReference)&&d(t)&&!_(n.spatialReference,t))return V(W),{pending:$(),geometries:null}}return{pending:null,geometries:e.map(n=>n==null?null:j(n.spatialReference,t)?n:d(n.spatialReference)&&d(t)?x(n,t):null)}}function X(e,t,n=null){if(e==null||t==null)return null;if(m==null||w==null)throw new T;const s=m._getTransformation(w,e,t,n,n==null?void 0:n.spatialReference);return s!==null?L.fromGE(s):null}function En(e,t,n=null){if(m==null||w==null)throw new T;const s=m._getTransformationBySuitability(w,e,t,n,n==null?void 0:n.spatialReference);if(s!==null){const i=[];for(const o of s)i.push(L.fromGE(o));return i}return[]}class T extends un{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}function Sn(){m=null,w=null,R=null,S={}}const Mn={get loadPromise(){return R}};function x(e,t){try{const n=Q(e,t);if(n==null)return null;"xmin"in e&&"xmin"in n&&(n.zmin=e.zmin,n.zmax=e.zmax);const s=vn(n.type,e.spatialReference,t);return s!=null&&s(n),n}catch(n){if(!(n instanceof T))throw n;return null}}async function Ln(e,t,n){const s=e.spatialReference;return s!=null&&t!=null&&await Y(s,t,null,n),x(e,t)}function _(e,t,n){return!n&&(!!j(e,t)||d(e)&&d(t)&&!!kn(e,t))}function On(e,t){if(j(e,t))return!0;if(!d(e)||!d(t))return!1;const n=q(e)||B(e)||F(e),s=q(t)||B(t)||F(t);return n&&s}async function Y(e,t,n,s){if(P())return b(s);if(Array.isArray(e)){for(const{source:i,dest:o,geographicTransformation:r}of e)if(i&&o&&!_(i,o,r))return $(s)}else if(e&&t&&!_(e,t,n))return $(s);return b(s)}function M(e,t,n){return e?"x"in e?nn(e,t,new mn,n,0):"xmin"in e?on(e,t,new gn,n,0):"rings"in e?sn(e,t,new wn,n,0):"paths"in e?en(e,t,new _n,n,0):"points"in e?tn(e,t,new yn,n,0):null:null}function Tn(e,t,n=t.spatialReference,s=0){return n!=null&&e.spatialReference!=null&&nn(e,e.spatialReference,t,n,s)!=null}function nn(e,t,n,s,i){a[0]=e.x,a[1]=e.y;const o=e.z;return a[2]=o!==void 0?o:i,O(a,t,0,a,s,0)?(n.x=a[0],n.y=a[1],n.spatialReference=s,o!==void 0||g(s)?(n.z=a[2],n.hasZ=!0):(n.z=void 0,n.hasZ=!1),e.m===void 0?(n.m=void 0,n.hasM=!1):(n.m=e.m,n.hasM=!0),n):null}function Zn(e,t,n=t.spatialReference,s=0){return e.spatialReference!=null&&n!=null&&tn(e,e.spatialReference,t,n,s)!=null}function tn(e,t,n,s,i){const{points:o,hasZ:r,hasM:u}=e,l=[],p=o.length,h=[];for(const c of o)h.push(c[0],c[1],r?c[2]:i);if(!O(h,t,0,h,s,0,p))return null;const f=r||g(s);for(let c=0;c<p;++c){const y=3*c,G=h[y],I=h[y+1];f&&u?l.push([G,I,h[y+2],o[c][3]]):f?l.push([G,I,h[y+2]]):u?l.push([G,I,o[c][2]]):l.push([G,I])}return n.points=l,n.spatialReference=s,n.hasZ=r,n.hasM=u,n}function An(e,t,n=t.spatialReference,s=0){return e.spatialReference!=null&&n!=null&&en(e,e.spatialReference,t,n,s)!=null}function en(e,t,n,s,i){const{paths:o,hasZ:r,hasM:u}=e,l=[];if(!rn(o,r??!1,u??!1,t,l,s,i))return null;const p=r||g(s);return n.paths=l,n.spatialReference=s,n.hasZ=p,n.hasM=u,n}function Wn(e,t,n=t.spatialReference,s=0){return e.spatialReference!=null&&n!=null&&sn(e,e.spatialReference,t,n,s)!=null}function sn(e,t,n,s,i){const{rings:o,hasZ:r,hasM:u}=e,l=[];if(!rn(o,r??!1,u??!1,t,l,s,i))return null;const p=r||g(s);return n.rings=l,n.spatialReference=s,n.hasZ=p,n.hasM=u,n}function Cn(e,t,n=t.spatialReference,s=0){return e.spatialReference!=null&&n!=null&&on(e,e.spatialReference,t,n,s)!=null}function on(e,t,n,s,i){const{xmin:o,ymin:r,xmax:u,ymax:l,hasZ:p,hasM:h}=e,f=p?e.zmin:i;if(!N(o,r,f,t,a,s))return null;const c=p||g(s);n.xmin=a[0],n.ymin=a[1],c&&(n.zmin=a[2]);const y=p?e.zmax:i;return N(u,l,y,t,a,s)?(n.xmax=a[0],n.ymax=a[1],c&&(n.zmax=a[2]),h&&(n.mmin=e.mmin,n.mmax=e.mmax),n.spatialReference=s,n):null}function rn(e,t,n,s,i,o,r=0){const u=new Array;for(const h of e)for(const f of h)u.push(f[0],f[1],t?f[2]:r);if(!O(u,s,0,u,o,0))return!1;let l=0;i.length=0;const p=t||g(o);for(const h of e){const f=new Array;for(const c of h)p&&n?f.push([u[l++],u[l++],u[l++],c[3]]):p?f.push([u[l++],u[l++],u[l++]]):n?(f.push([u[l++],u[l++],c[2]]),l++):(f.push([u[l++],u[l++]]),l++);i.push(f)}return!0}const a=H(),Hn=Object.freeze(Object.defineProperty({__proto__:null,canProjectWithoutEngine:_,getTransformation:X,getTransformations:En,initializeProjection:Y,isEqualBaseGCS:On,isLoaded:P,isLoadedOrLoad:J,isLoadedOrLoadFor:Gn,load:$,project:Q,projectExtent:Cn,projectMany:A,projectMultipoint:Zn,projectOrLoad:zn,projectOrLoadMany:U,projectPoint:Tn,projectPolygon:Wn,projectPolyline:An,projectWithZConversion:Ln,projectWithoutEngine:M,requiresLoad:In,test:Mn,tryProjectWithZConversion:x,unload:Sn},Symbol.toStringTag,{value:"Module"}));export{M as $,x as I,Ln as J,$ as K,_ as L,On as N,Q as O,Y as Q,Gn as U,A as V,In as W,zn as X,U as Y,L as a,P as k,Tn as n,vn as o,Hn as p,X as q,Wn as s,N as t};
