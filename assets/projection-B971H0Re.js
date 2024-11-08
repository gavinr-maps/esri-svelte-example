const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineBase-yFIvKOkM.js","./_commonjsHelpers-DCkdB7M8.js","./hydrated-C9rxSL4a.js","./Extent-Bf3YTe7m.js","./tslib.es6-B3Jf3DVX.js","./subclass-BZA_h8Db.js","./Point-Cg0-ChZE.js","./Accessor-BLX9ikPh.js","./cast-Bjksrh93.js","./writer-DNAwXnhG.js","./assets-C43MgM-v.js","./index-Bh2oEzTI.js","./index-2kwcjS9-.css","./jsonMap-0cxwUWs2.js","./Polyline-D9YkgmM_.js","./mathUtils-C4_ghTv4.js"])))=>i.map(i=>d[i]);
import{_ as A}from"./index-Bh2oEzTI.js";import{b as rn,q as F}from"./subclass-BZA_h8Db.js";import{s as ln,G as b}from"./Accessor-BLX9ikPh.js";import{s as un}from"./SimpleObservable-KocWTzVy.js";import{n as J}from"./vec3f64-BLpZdpfb.js";import{s as j,ak as w,W as C,_ as an,al as cn,a6 as K,g as Z,c as g,j as fn,v as pn,Z as q,O as D,ad as B}from"./Point-Cg0-ChZE.js";import{w as hn}from"./Extent-Bf3YTe7m.js";import{v as mn,d as dn,u as gn}from"./Polyline-D9YkgmM_.js";import{n as L,G as wn,E as _n}from"./projectBuffer-Bs7GwaPY.js";function yn(e,t,n){if(t==null||n==null||n.vcsWkid||j(t,n)||w(t)||w(n))return null;const i=C(t)/C(n);if(i===1)return null;switch(e){case"point":case"esriGeometryPoint":return s=>kn(s,i);case"polyline":case"esriGeometryPolyline":return s=>Rn(s,i);case"polygon":case"esriGeometryPolygon":return s=>vn(s,i);case"multipoint":case"esriGeometryMultipoint":return s=>jn(s,i);case"extent":case"esriGeometryEnvelope":return s=>xn(s,i);default:return null}}function kn(e,t){(e==null?void 0:e.z)!=null&&(e.z*=t)}function vn(e,t){if(e)for(const n of e.rings)for(const i of n)i.length>2&&(i[2]*=t)}function Rn(e,t){if(e)for(const n of e.paths)for(const i of n)i.length>2&&(i[2]*=t)}function jn(e,t){if(e)for(const n of e.points)n.length>2&&(n[2]*=t)}function xn(e,t){e&&e.zmin!=null&&e.zmax!=null&&(e.zmin*=t,e.zmax*=t)}function V(e,t,n,i,s,o){return $[0]=e,$[1]=t,$[2]=n,L($,i,0,s,o,0)}const $=J();let E=0;class v{static fromGE(t){const n=new v;return n._wkt=t.wkt,n._wkid=t.wkid,n._isInverse=t.isInverse,n}constructor(t){this.uid=E++,t?(this._wkt=t.wkt!=null?t.wkt:null,this._wkid=t.wkid!=null?t.wkid:-1,this._isInverse=t.isInverse!=null&&t.isInverse===!0):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}get wkt(){return this._wkt}set wkt(t){this._wkt=t,this.uid=E++}get wkid(){return this._wkid}set wkid(t){this._wkid=t,this.uid=E++}get isInverse(){return this._isInverse}set isInverse(t){this._isInverse=t,this.uid=E++}getInverse(){const t=new v;return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t}}class d{static cacheKey(t,n){var i,s,o,r,u,l;return[((i=t.wkid)==null?void 0:i.toString())??"-1",((s=t.wkt)==null?void 0:s.toString())??"",((o=t.wkt2)==null?void 0:o.toString())??"",((r=n.wkid)==null?void 0:r.toString())??"-1",((u=n.wkt)==null?void 0:u.toString())??"",((l=n.wkt2)==null?void 0:l.toString())??""].join()}static fromGE(t){const n=new d;let i="";for(const s of t.steps){const o=v.fromGE(s);n.steps.push(o),i+=o.uid.toString()+","}return n._cachedProjection={},n._gtlistentry=null,n._chain=i,n}constructor(t){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,t==null?void 0:t.steps)for(const n of t.steps)n instanceof v?this.steps.push(n):this.steps.push(new v({wkid:n.wkid,wkt:n.wkt,isInverse:n.isInverse}))}getInverse(){const t=new d;t.steps=[];for(let n=this.steps.length-1;n>=0;n--){const i=this.steps[n];t.steps.push(i.getInverse())}return t}getGTListEntry(){let t="";for(const n of this.steps)t+=n.uid.toString()+",";return t!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=t),this._gtlistentry}assignCachedGe(t,n,i){this._cachedProjection[d.cacheKey(t,n)]=i}getCachedGeTransformation(t,n){let i="";for(const o of this.steps)i+=o.uid.toString()+",";i!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=i);const s=this._cachedProjection[d.cacheKey(t,n)];return s===void 0?null:s}}let m=null,_=null,R=null,S={};const W=new un;function G(){return!!m&&pn()}function H(){return!!G()||(F(W),x(),!1)}function Pn(e,t){return!e||!t||y(e,t)||H()}function Gn(e,t){return!y(e,t)&&!G()}function x(e){return R==null&&(R=Promise.all([an(),A(()=>import("./geometryEngineBase-yFIvKOkM.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.g),A(()=>import("./hydrated-C9rxSL4a.js"),__vite__mapDeps([2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url)])),R.then(([,t,{hydratedAdapter:n}])=>{ln(e),_=n,m=t.default,m._enableProjection(cn),W.notify()})}function N(e,t,n=null,i=null){return Array.isArray(e)?e.length===0?[]:T(_,e,e[0].spatialReference,t,n,i):T(_,[e],e.spatialReference,t,n,i)[0]}function T(e,t,n,i,s=null,o=null){if(n==null||i==null)return t;if(y(n,i,s))return t.map(r=>M(r,n,i));if(s==null&&K(n))return t.map(r=>M(r,n,Z.WGS84)).map(r=>P(r,i));if(s==null&&K(i))return t.map(r=>P(r,Z.WGS84)).map(r=>M(r,Z.WGS84,i));if(s==null){const r=d.cacheKey(n,i);S[r]!==void 0?s=S[r]:((s=U(n,i,void 0))==null&&(s=new d),S[r]=s)}if(m==null||e==null)throw new O;return o!=null?m._project(e,t,n,i,s,o):m._project(e,t,n,i,s)}function In(e,t){const n=Q([e],t);return n.pending!=null?{pending:n.pending,geometry:null}:n.geometries!=null?{pending:null,geometry:n.geometries[0]}:{pending:null,geometry:null}}function Q(e,t){if(!G()){for(const n of e)if(n!=null&&!j(n.spatialReference,t)&&g(n.spatialReference)&&g(t)&&!y(n.spatialReference,t))return F(W),{pending:x(),geometries:null}}return{pending:null,geometries:e.map(n=>n==null?null:j(n.spatialReference,t)?n:g(n.spatialReference)&&g(t)?P(n,t):null)}}function U(e,t,n=null){if(e==null||t==null)return null;if(m==null||_==null)throw new O;const i=m._getTransformation(_,e,t,n,n==null?void 0:n.spatialReference);return i!==null?d.fromGE(i):null}function zn(e,t,n=null){if(m==null||_==null)throw new O;const i=m._getTransformationBySuitability(_,e,t,n,n==null?void 0:n.spatialReference);if(i!==null){const s=[];for(const o of i)s.push(d.fromGE(o));return s}return[]}class O extends rn{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}function $n(){m=null,_=null,R=null,S={}}const En={get loadPromise(){return R}};function P(e,t){try{const n=N(e,t);if(n==null)return null;"xmin"in e&&"xmin"in n&&(n.zmin=e.zmin,n.zmax=e.zmax);const i=yn(n.type,e.spatialReference,t);return i!=null&&i(n),n}catch(n){if(!(n instanceof O))throw n;return null}}async function Sn(e,t,n){const i=e.spatialReference;return i!=null&&t!=null&&await X(i,t,null,n),P(e,t)}function y(e,t,n){return!n&&(!!j(e,t)||g(e)&&g(t)&&!!wn(e,t,_n))}function Mn(e,t){if(j(e,t))return!0;if(!g(e)||!g(t))return!1;const n=q(e)||D(e)||B(e),i=q(t)||D(t)||B(t);return n&&i}async function X(e,t,n,i){if(G())return b(i);if(Array.isArray(e)){for(const{source:s,dest:o,geographicTransformation:r}of e)if(s&&o&&!y(s,o,r))return x(i)}else if(e&&t&&!y(e,t,n))return x(i);return b(i)}function M(e,t,n){return e?"x"in e?Y(e,t,new fn,n,0):"xmin"in e?sn(e,t,new hn,n,0):"rings"in e?en(e,t,new mn,n,0):"paths"in e?tn(e,t,new dn,n,0):"points"in e?nn(e,t,new gn,n,0):null:null}function Ln(e,t,n=t.spatialReference,i=0){return n!=null&&e.spatialReference!=null&&Y(e,e.spatialReference,t,n,i)!=null}function Y(e,t,n,i,s){a[0]=e.x,a[1]=e.y;const o=e.z;return a[2]=o!==void 0?o:s,L(a,t,0,a,i,0)?(n.x=a[0],n.y=a[1],n.spatialReference=i,o!==void 0||w(i)?(n.z=a[2],n.hasZ=!0):(n.z=void 0,n.hasZ=!1),e.m===void 0?(n.m=void 0,n.hasM=!1):(n.m=e.m,n.hasM=!0),n):null}function On(e,t,n=t.spatialReference,i=0){return e.spatialReference!=null&&n!=null&&nn(e,e.spatialReference,t,n,i)!=null}function nn(e,t,n,i,s){const{points:o,hasZ:r,hasM:u}=e,l=[],p=o.length,h=[];for(const c of o)h.push(c[0],c[1],r?c[2]:s);if(!L(h,t,0,h,i,0,p))return null;const f=r||w(i);for(let c=0;c<p;++c){const k=3*c,I=h[k],z=h[k+1];f&&u?l.push([I,z,h[k+2],o[c][3]]):f?l.push([I,z,h[k+2]]):u?l.push([I,z,o[c][2]]):l.push([I,z])}return n.points=l,n.spatialReference=i,n.hasZ=r,n.hasM=u,n}function Zn(e,t,n=t.spatialReference,i=0){return e.spatialReference!=null&&n!=null&&tn(e,e.spatialReference,t,n,i)!=null}function tn(e,t,n,i,s){const{paths:o,hasZ:r,hasM:u}=e,l=[];if(!on(o,r??!1,u??!1,t,l,i,s))return null;const p=r||w(i);return n.paths=l,n.spatialReference=i,n.hasZ=p,n.hasM=u,n}function Tn(e,t,n=t.spatialReference,i=0){return e.spatialReference!=null&&n!=null&&en(e,e.spatialReference,t,n,i)!=null}function en(e,t,n,i,s){const{rings:o,hasZ:r,hasM:u}=e,l=[];if(!on(o,r??!1,u??!1,t,l,i,s))return null;const p=r||w(i);return n.rings=l,n.spatialReference=i,n.hasZ=p,n.hasM=u,n}function Wn(e,t,n=t.spatialReference,i=0){return e.spatialReference!=null&&n!=null&&sn(e,e.spatialReference,t,n,i)!=null}function sn(e,t,n,i,s){const{xmin:o,ymin:r,xmax:u,ymax:l,hasZ:p,hasM:h}=e,f=p?e.zmin:s;if(!V(o,r,f,t,a,i))return null;const c=p||w(i);n.xmin=a[0],n.ymin=a[1],c&&(n.zmin=a[2]);const k=p?e.zmax:s;return V(u,l,k,t,a,i)?(n.xmax=a[0],n.ymax=a[1],c&&(n.zmax=a[2]),h&&(n.mmin=e.mmin,n.mmax=e.mmax),n.spatialReference=i,n):null}function on(e,t,n,i,s,o,r=0){const u=new Array;for(const h of e)for(const f of h)u.push(f[0],f[1],t?f[2]:r);if(!L(u,i,0,u,o,0))return!1;let l=0;s.length=0;const p=t||w(o);for(const h of e){const f=new Array;for(const c of h)p&&n?f.push([u[l++],u[l++],u[l++],c[3]]):p?f.push([u[l++],u[l++],u[l++]]):n?(f.push([u[l++],u[l++],c[2]]),l++):(f.push([u[l++],u[l++]]),l++);s.push(f)}return!0}const a=J(),Jn=Object.freeze(Object.defineProperty({__proto__:null,canProjectWithoutEngine:y,getTransformation:U,getTransformations:zn,initializeProjection:X,isEqualBaseGCS:Mn,isLoaded:G,isLoadedOrLoad:H,isLoadedOrLoadFor:Pn,load:x,project:N,projectExtent:Wn,projectMany:T,projectMultipoint:On,projectOrLoad:In,projectOrLoadMany:Q,projectPoint:Ln,projectPolygon:Tn,projectPolyline:Zn,projectWithZConversion:Sn,projectWithoutEngine:M,requiresLoad:Gn,test:En,tryProjectWithZConversion:P,unload:$n},Symbol.toStringTag,{value:"Module"}));export{Ln as $,Pn as B,P as H,Sn as I,y as J,N as K,Mn as L,X as N,T as O,M as Q,Gn as U,In as V,x as W,Q as X,U as Y,G as _,Tn as a,yn as o,Jn as p,d as s,V as t};
