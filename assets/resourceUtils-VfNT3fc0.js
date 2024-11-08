import{V as p,H as R,U as x}from"./assets-C43MgM-v.js";import{b as h}from"./subclass-BZA_h8Db.js";import"./index-Bh2oEzTI.js";import"./tslib.es6-B3Jf3DVX.js";import"./Accessor-BLX9ikPh.js";async function U(e,t={},s){await e.load(s);const r=p(e.itemUrl,"resources"),{start:a=1,num:d=10,sortOrder:n="asc",sortField:f="resource"}=t,i={query:{start:a,num:d,sortOrder:n,sortField:f,token:e.apiKey},signal:s==null?void 0:s.signal},o=await e.portal.request(r,i);return{total:o.total,nextStart:o.nextStart,resources:o.resources.map(({created:m,size:c,resource:l})=>({created:new Date(m),size:c,resource:e.resourceFromPath(l)}))}}async function O(e,t,s,r){const a=new Map;for(const{resource:n,content:f,compress:i,access:o}of t){if(!n.hasPath())throw new h(`portal-item-resource-${s}:invalid-path`,"Resource does not have a valid path");const[m,c]=g(n.path),l=`${m}/${i??""}/${o??""}`;a.has(l)||a.set(l,{prefix:m,compress:i,access:o,files:[]}),a.get(l).files.push({fileName:c,content:f})}await e.load(r);const d=p(e.userItemUrl,s==="add"?"addResources":"updateResources");for(const{prefix:n,compress:f,access:i,files:o}of a.values())for(let c=0;c<o.length;c+=25){const l=o.slice(c,c+25),u=new FormData;n&&n!=="."&&u.append("resourcesPrefix",n),f&&u.append("compress","true"),i&&u.append("access",i);let y=0;for(const{fileName:b,content:v}of l)u.append("file"+ ++y,v,b);u.append("f","json"),await e.portal.request(d,{method:"post",body:u,signal:r==null?void 0:r.signal})}}async function j(e,t,s){if(!t.hasPath())throw new h("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(s);const r=p(e.userItemUrl,"removeResources");await e.portal.request(r,{method:"post",query:{resource:t.path},signal:s==null?void 0:s.signal}),t.portalItem=null}async function T(e,t){await e.load(t);const s=p(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t==null?void 0:t.signal})}function g(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function w(e){const[t,s]=P(e),[r,a]=g(t);return[r,a,s]}function P(e){const t=R(e);return t==null?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function A(e){return e.type==="blob"?e.blob:e.type==="json"?new Blob([e.jsonString],{type:"application/json"}):(await x(e.url,{responseType:"blob"})).data}function N(e,t){if(!e.hasPath())return null;const[s,,r]=w(e.path);return e.portalItem.resourceFromPath(p(s,t+r))}function z(e,t){if(!e.hasPath())return null;const[s,,r]=w(e.path);return e.portalItem.resourceFromPath(p(s,t+r))}export{O as addOrUpdateResources,A as contentToBlob,U as fetchResources,N as getSiblingOfSameType,z as getSiblingOfSameTypeI,T as removeAllResources,j as removeResource,w as splitPrefixFileNameAndExtension};
