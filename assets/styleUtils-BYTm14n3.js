import{R as d,U as p,K as b}from"./assets-C43MgM-v.js";import{b as m,j as h}from"./subclass-BZA_h8Db.js";import{p as w}from"./Accessor-BLX9ikPh.js";import{b as U,c as R}from"./Portal-C10FKnaA.js";const c=new Map;async function $(t,r){try{return{data:(await g(t,r)).data,baseUrl:d(t),styleUrl:t}}catch(e){return w(e),null}}function N(t,r,e){var f;const s=r.portal!=null?r.portal:U.getDefault();let n;const l=`${s.url} - ${(f=s.user)==null?void 0:f.username} - ${t}`,u=c.get(l);if(u)return u;const o=I(t,s,e).then(a=>(n=a,a.fetchData())).then(a=>({data:a,baseUrl:n.itemUrl??"",styleName:t}));return c.set(l,o),o}function I(t,r,e){return r.load(e).then(()=>{const s=new R({disableExtraQuery:!0,query:`owner:${y} AND type:${i} AND typekeywords:"${t}"`});return r.queryItems(s,e)}).then(({results:s})=>{var u;let n=null;const l=t.toLowerCase();if(s&&Array.isArray(s)){for(const o of s)if(((u=o.typeKeywords)==null?void 0:u.some(a=>a.toLowerCase()===l))&&o.type===i&&o.owner===y){n=o;break}}if(!n)throw new m("symbolstyleutils:style-not-found",`The style '${t}' could not be found`,{styleName:t});return n.load(e)})}function D(t,r,e){return(t==null?void 0:t.styleUrl)!=null?$(t.styleUrl,e):(t==null?void 0:t.styleName)!=null?N(t.styleName,r,e):Promise.reject(new m("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function S(t){return t===null||t.type==="CIMSymbolReference"?t:{type:"CIMSymbolReference",symbol:t}}function M(t,r,e=["gltf"]){if(r==="cimRef")return encodeURI(t.cimRef);if(t.formatInfos&&!h("enable-feature:force-wosr"))for(const s of e){const n=t.formatInfos.find(l=>l.type===s);if(n)return n.href}return encodeURI(t.webRef)}function g(t,r){const e={responseType:"json",query:{f:"json"},...r};return p(b(t),e)}const y="esri_en",i="Style",k="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";export{k as h,D as i,S as m,g as p,M as y};