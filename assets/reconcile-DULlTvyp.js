import{P as f}from"./cast-BA_-jlhc.js";import{r,m as t,a as v,s as c}from"./Accessor-BHnuXKD2.js";import{f as w,i as y,s as g}from"./utils-Cy8wFNQo.js";import{r as j}from"./serverVersionUtils-CT0ARoHu.js";import{S as P}from"./JSONSupport-CGdeqxpk.js";import"./index-tefRSezt.js";let s=class extends P{constructor(e){super(e),this.hasConflicts=!1,this.moment=null,this.didPost=!1,this.success=!1}};r([t({type:Boolean,json:{write:!0}})],s.prototype,"hasConflicts",void 0),r([t({type:Date,json:{type:Number,write:{writer:(e,o)=>{o.moment=e?e.getTime():null}}}})],s.prototype,"moment",void 0),r([t({type:Boolean,json:{write:!0}})],s.prototype,"didPost",void 0),r([t({type:Boolean,json:{write:!0}})],s.prototype,"success",void 0),s=r([v("esri.rest.versionManagement.gdbVersion.support.ReconcileResult")],s);const S=s,n=new Map;async function $(e,o,p,m){n.has(e)||await j(n,e);const i=n.get(e);if(((i==null?void 0:i.serverVersion)??0)<=11.1)throw new c("reconcile:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!o)throw new c("reconcile:missing-guid","guid for version is missing");const a=w(e),l=p.toJSON(),h=y(a.query,{query:g({...l,f:"json"}),...m,method:"post"});o.startsWith("{")&&(o=o.slice(1,-1));const u=`${a.path}/versions/${o}/reconcile`,{data:d}=await f(u,h);return S.fromJSON(d)}export{$ as reconcile,n as serverVersionCacheMap};
