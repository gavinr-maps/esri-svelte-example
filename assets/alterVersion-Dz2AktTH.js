import{U as h}from"./assets-C43MgM-v.js";import{b as n}from"./subclass-BZA_h8Db.js";import{f as u,i as g,s as v}from"./utils-6jMaHUrH.js";import{r as w}from"./serverVersionUtils-XL3pUZsI.js";import"./index-Bh2oEzTI.js";import"./tslib.es6-B3Jf3DVX.js";import"./Accessor-BLX9ikPh.js";const i=new Map;async function A(e,r,a,p){i.has(e)||await w(i,e);const s=i.get(e);if(((s==null?void 0:s.serverVersion)??0)<=11.1)throw new n("alterVersion:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!r)throw new n("alterVersion:missing-guid","guid for version is missing");const o=u(e),m=a.toJSON(),c=g(o.query,{query:v({...m,f:"json"}),...p,authMode:"immediate",method:"post"});r.startsWith("{")&&(r=r.slice(1,-1));const f=`${o.path}/versions/${r}/alter`,{data:t}=await h(f,c);return!!t&&t.success}export{A as alterVersion,i as serverVersionCacheMap};
