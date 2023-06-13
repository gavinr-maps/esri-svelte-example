import{cz as P,cA as N,cB as x,cC as d,cD as O,cE as _,cF as b,cG as R,cH as y,cI as j,cJ as S,by as F,bz as A,_ as B,cK as E}from"./index-e8c6bcc0.js";import{i as J}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{t as f}from"./resourceExtension-95ca45df.js";function Z(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=z(e,t,n);for(const a of o){const i=P(t,a,n);for(const r in s)i[r]=s[r]}}}function z(e,o,t){if((e==null?void 0:e.type)==="resource")return D(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=E;return{read:n,write:s}}}}function D(e,o,t){const n=N(o,t);return{type:String,read:(s,a,i)=>{const r=x(s,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,a,i,r){if(!r||!r.resources)return typeof s=="string"?void(a[i]=d(s,r)):void(a[i]=s.write({},r));const l=C(s),c=d(l,{...r,verifyItemRelativeUrls:r&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},O.NO),u=n.type!==String&&(!J(this)||r&&r.origin&&this.originIdOf(t)>_(r.origin)),p={object:this,propertyName:t,value:s,targetUrl:c,dest:a,targetPropertyName:i,context:r,params:e};r&&r.portalItem&&c&&!b(c)?u?K(p):T(p):r&&r.portalItem&&(c==null||R(c)!=null||y(c)||u)?g(p):a[i]=c}}}}function g(e){const{targetUrl:o,params:t,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=j(o),l=(r==null?void 0:r.filename)??S(),c=(t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),u=v(n,o,s),p=F(c,l),I=`${p}.${f(u)}`,m=s.portalItem.resourceFromPath(I);y(o)&&s.resources&&s.resources.pendingOperations.push(V(o).then(w=>{m.path=`${p}.${f(w)}`,a[i]=m.itemRelativeUrl}).catch(()=>{}));const U=(t==null?void 0:t.compress)??!1;s.resources&&h({...e,resource:m,content:u,compress:U,updates:s.resources.toAdd}),a[i]=m.itemRelativeUrl}function K(e){const{context:o,targetUrl:t,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),l=v(s,t,o),c=f(l),u=A(r.path),p=(n==null?void 0:n.compress)??!1;c===u?(o.resources&&h({...e,resource:r,content:l,compress:p,updates:o.resources.toUpdate}),a[i]=t):g(e)}function T({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function h({object:e,propertyName:o,updates:t,resource:n,content:s,compress:a}){t.push({resource:n,content:s,compress:a,finish:i=>{G(e,o,i)}})}function v(e,o,t){return typeof e=="string"?{url:o}:new Blob([JSON.stringify(e.toJSON(t))],{type:"application/json"})}async function V(e){const o=(await B(()=>import("./index-e8c6bcc0.js").then(n=>n.jO),["./index-e8c6bcc0.js","./index-0da2eac5.css"],import.meta.url)).default,{data:t}=await o(e,{responseType:"blob"});return t}function C(e){return e==null?null:typeof e=="string"?e:e.url}function G(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{Z as g};
