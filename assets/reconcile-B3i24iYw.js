import{f as d,U as v}from"./assets-C2mb-ea2.js";import{y as r,b as w,c as a}from"./subclass-BR3PhgZG.js";import{f as y,i as g,s as j}from"./utils-D61i9O7E.js";import{r as b}from"./serverVersionUtils-D13-2X18.js";import{e as t}from"./Evented-CXIxDjmW.js";import"./index-CeCSsEgo.js";import"./Accessor-D6mNnsWy.js";let s=class extends d{constructor(e){super(e),this.hasConflicts=!1,this.moment=null,this.didPost=!1,this.success=!1}};t([r({type:Boolean,json:{write:!0}})],s.prototype,"hasConflicts",void 0),t([r({type:Date,json:{type:Number,write:{writer:(e,o)=>{o.moment=e?e.getTime():null}}}})],s.prototype,"moment",void 0),t([r({type:Boolean,json:{write:!0}})],s.prototype,"didPost",void 0),t([r({type:Boolean,json:{write:!0}})],s.prototype,"success",void 0),s=t([w("esri.rest.versionManagement.gdbVersion.support.ReconcileResult")],s);const q=s,n=new Map;async function x(e,o,p,m){n.has(e)||await b(n,e);const i=n.get(e);if(((i==null?void 0:i.serverVersion)??0)<=11.1)throw new a("reconcile:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!o)throw new a("reconcile:missing-guid","guid for version is missing");const c=y(e),l=p.toJSON(),f=g(c.query,{query:j({...l,f:"json"}),...m,method:"post"});o.startsWith("{")&&(o=o.slice(1,-1));const h=`${c.path}/versions/${o}/reconcile`,{data:u}=await v(h,f);return q.fromJSON(u)}export{x as reconcile,n as serverVersionCacheMap};
