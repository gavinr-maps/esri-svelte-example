import{P as v}from"./cast-CsZslgGN.js";import{r as i,m,a as f,s as c}from"./Accessor-BmwT4B0c.js";import{f as l,i as y,s as d}from"./utils-YowqfOgk.js";import{r as S}from"./serverVersionUtils-DbFDrZd4.js";import{S as j}from"./JSONSupport-DcrLLGjL.js";import"./index-4eY77cms.js";let t=class extends j{constructor(s){super(s),this.moment=null,this.success=!1}};i([m({type:Date,json:{type:Number,write:{writer:(s,r)=>{r.moment=s?s.getTime():null}}}})],t.prototype,"moment",void 0),i([m({type:Boolean,json:{write:!0}})],t.prototype,"success",void 0),t=i([f("esri.rest.versionManagement.gdbVersion.support.PostResult")],t);const N=t,n=new Map;async function $(s,r,e,u){n.has(s)||await S(n,s);const o=n.get(s);if(((o==null?void 0:o.serverVersion)??0)<=11.1)throw new c("post:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!r)throw new c("post:missing-guid","guid for version is missing");const p=l(s),a=e.toJSON();e.rows&&(a.rows=JSON.stringify(e.rows));const w=y(p.query,{query:d({...a,f:"json"}),...u,method:"post"});r.startsWith("{")&&(r=r.slice(1,-1));const g=`${p.path}/versions/${r}/post`,{data:h}=await v(g,w);return N.fromJSON(h)}export{$ as post,n as serverVersionCacheMap};
