import{P as f}from"./cast-BA_-jlhc.js";import{s as h}from"./Accessor-BHnuXKD2.js";import{f as c,i as d,s as u}from"./utils-Cy8wFNQo.js";import{r as v}from"./serverVersionUtils-CT0ARoHu.js";import"./index-tefRSezt.js";import"./JSONSupport-CGdeqxpk.js";const o=new Map;async function y(e,t,i){o.has(e)||await v(o,e);const r=o.get(e);if(((r==null?void 0:r.serverVersion)??0)<=11.1)throw new h("deleteVersion:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");const s=c(e),n=t.toJSON(),a=d(s.query,{query:u({...n,f:"json"}),...i,authMode:"immediate",method:"post"}),m=`${s.path}/delete`,{data:p}=await f(m,a);return p.success}export{y as deleteVersion,o as serverVersionCacheMap};
