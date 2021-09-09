import{dk as e,dl as t,q as a,r,m as s,dm as o,L as n}from"./vendor.5b1a85aa.js";async function c(a,r={},s){await a.load(s);const o=e(a.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:l="asc",sortField:i="created"}=r,u={query:{start:n,num:c,sortOrder:l,sortField:i,token:a.apiKey},signal:t(s,"signal")},d=await a.portal._request(o,u);return{total:d.total,nextStart:d.nextStart,resources:d.resources.map((({created:e,size:t,resource:r})=>({created:new Date(e),size:t,resource:a.resourceFromPath(r)})))}}async function l(s,o,n,c){if(!s.hasPath())throw new a(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const l=s.portalItem;await l.load(c);const i=e(l.userItemUrl,"add"===o?"addResources":"updateResources"),[u,p]=d(s.path),h=await m(n),f=new FormData;return u&&"."!==u&&f.append("resourcesPrefix",u),f.append("fileName",p),f.append("file",h,p),f.append("f","json"),r(c)&&c.access&&f.append("access",c.access),await l.portal._request(i,{method:"post",body:f,signal:t(c,"signal")}),s}async function i(r,s,o){if(!s.hasPath())throw new a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await r.load(o);const n=e(r.userItemUrl,"removeResources");await r.portal._request(n,{method:"post",query:{resource:s.path},signal:t(o,"signal")}),s.portalItem=null}async function u(a,r){await a.load(r);const s=e(a.userItemUrl,"removeResources");return a.portal._request(s,{method:"post",query:{deleteAll:!0},signal:t(r,"signal")})}function d(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,a]=function(e){const t=o(e);return s(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[r,n]=d(t);return[r,n,a]}async function m(e){return e instanceof Blob?e:(await n(e.url,{responseType:"blob"})).data}function h(t,a){if(!t.hasPath())return null;const[r,,s]=p(t.path);return t.portalItem.resourceFromPath(e(r,a+s))}function f(t,a){if(!t.hasPath())return null;const[r,,s]=p(t.path);return t.portalItem.resourceFromPath(e(r,a+s))}export{l as addOrUpdateResource,m as contentToBlob,c as fetchResources,h as getSiblingOfSameType,f as getSiblingOfSameTypeI,u as removeAllResources,i as removeResource,p as splitPrefixFileNameAndExtension};
