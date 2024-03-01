import{aX as y,aY as O,em as P,en as j,F as s,_ as F,eo as x,ep as E,aw as m,b4 as R}from"./index-B1qcMJFy.js";import{m as C}from"./jsonUtils-T1v-OExy.js";import{A as _}from"./UniqueValueRenderer-0DBTeu6a.js";import{c as L}from"./AttachmentQuery-B2yhFws1.js";import q from"./RelationshipQuery-DLL_bDIJ.js";async function M(e,t,n){t=t.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(t.maxRecordCountFactor=A(e));const r=T(e),a=e.capabilities.query.supportsPagination;t.start=0,t.num=r;let o=null;for(;;){const i=await e.source.queryFeaturesJSON(t,n);if(o==null?o=i:o.features=o.features.concat(i.features),o.exceededTransferLimit=i.exceededTransferLimit,!a||!i.exceededTransferLimit)break;t.start+=r}return o}function T(e){return A(e)*S(e)}function S(e){return e.capabilities.query.maxRecordCount||2e3}function A(e){return e.capabilities.query.supportsMaxRecordCountFactor?y.MAX_MAX_RECORD_COUNT_FACTOR:1}const U=new O({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function J(e,t,n,r){const a=await f(e);if(await w(e,t,r),!a.addAttachment)throw new s(r,"Layer source does not support addAttachment capability");return a.addAttachment(t,n)}function w(e,t,n){var o,i;const{attributes:r}=t,{objectIdField:a}=e;return(i=(o=e.capabilities)==null?void 0:o.data)!=null&&i.supportsAttachment?t?r?a&&r[a]?Promise.resolve():Promise.reject(new s(n,`feature is missing the identifying attribute ${a}`)):Promise.reject(new s(n,"'attributes' are required on a feature to query attachments")):Promise.reject(new s(n,"A feature is required to add/delete/update attachments")):Promise.reject(new s(n,"this layer doesn't support attachments"))}async function k(e,t,n,r,a){const o=await f(e);if(await w(e,t,a),!o.updateAttachment)throw new s(a,"Layer source does not support updateAttachment capability");return o.updateAttachment(t,n,r)}async function Z(e,t,n){const{applyEdits:r}=await F(()=>import("./editingSupport-aW3a__SR.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),a=await e.load(),{source:o,globalIdField:i}=a;let l=n;return a.type==="feature"&&a.infoFor3D&&t.deleteFeatures!=null&&i!=null&&(l={...l,globalIdToObjectId:await D(e,t.deleteFeatures,i)}),r(a,o,t,n)}async function X(e,t,n){const{uploadAssets:r}=await F(()=>import("./editingSupport-aW3a__SR.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),a=await e.load();return r(a,a.source,t,n)}async function H(e,t,n,r){const a=await f(e);if(await w(e,t,r),!a.deleteAttachments)throw new s(r,"Layer source does not support deleteAttachments capability");return a.deleteAttachments(t,n)}async function z(e,t,n){const r=(await e.load({signal:t==null?void 0:t.signal})).source;if(!r.fetchRecomputedExtents)throw new s(n,"Layer source does not support fetchUpdates capability");return r.fetchRecomputedExtents(t)}async function Y(e,t,n,r){var g,I;t=L.from(t),await e.load();const a=e.source,o=e.capabilities;if(!((g=o==null?void 0:o.data)!=null&&g.supportsAttachment))throw new s(r,"this layer doesn't support attachments");const{attachmentTypes:i,objectIds:l,globalIds:d,num:u,size:c,start:p,where:b}=t;if(!((I=o==null?void 0:o.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(d==null?void 0:d.length)>0||(c==null?void 0:c.length)>0||u||p||b))throw new s(r,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(l!=null&&l.length||d!=null&&d.length||b))throw new s(r,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!a.queryAttachments)throw new s(r,"Layer source does not support queryAttachments capability",t);return a.queryAttachments(t)}async function B(e,t,n,r){const a=await f(e);if(!a.queryObjectIds)throw new s(r,"Layer source does not support queryObjectIds capability");return a.queryObjectIds(y.from(t)??e.createQuery(),n)}async function K(e,t,n,r){const a=await f(e);if(!a.queryFeatureCount)throw new s(r,"Layer source does not support queryFeatureCount capability");return a.queryFeatureCount(y.from(t)??e.createQuery(),n)}async function W(e,t,n,r){const a=await f(e);if(!a.queryExtent)throw new s(r,"Layer source does not support queryExtent capability");return a.queryExtent(y.from(t)??e.createQuery(),n)}async function ee(e,t,n,r){const a=await f(e);if(!a.queryRelatedFeatures)throw new s(r,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(q.from(t),n)}async function te(e,t,n,r){const a=await f(e);if(!a.queryRelatedFeaturesCount)throw new s(r,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(q.from(t),n)}async function re(e){const t=e.source;if(t!=null&&t.refresh)try{const{dataChanged:n,updates:r}=await t.refresh();if(r!=null&&(e.sourceJSON={...e.sourceJSON,...r},e.read(r,{origin:"service",url:e.parsedUrl})),n)return!0}catch{}if(e.definitionExpression)try{return(await x(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function ne(e){var i,l;const t=new y,n=(i=e.capabilities)==null?void 0:i.data,r=(l=e.capabilities)==null?void 0:l.query;t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,r&&(t.compactGeometryEnabled=r.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),n&&(n.supportsZ&&e.returnZ!=null&&(t.returnZ=e.returnZ),n.supportsM&&e.returnM!=null&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:a,timeExtent:o}=e;return t.timeExtent=a!=null&&o!=null?o.offset(-a.value,a.unit):o||null,t.multipatchOption=e.geometryType==="multipatch"?"xyFootprint":null,t}function ae(e){const{globalIdField:t,fields:n}=e;if(t)return t;if(n){for(const r of n)if(r.type==="esriFieldTypeGlobalID")return r.name}}function oe(e){const{objectIdField:t,fields:n}=e;if(t)return t;if(n){for(const r of n)if(r.type==="esriFieldTypeOID")return r.name}}function ie(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}async function f(e){return(await e.load()).source}async function v(e,t){if(!m||m.findCredential(e))return;let n;try{const r=await R(e,t);r&&(n=await m.checkSignInStatus(`${r}/sharing`))}catch{}if(n)try{const r=t!=null?t.signal:null;await m.getCredential(e,{signal:r})}catch{}}async function se(e,t,n){var a;const r=(a=e.parsedUrl)==null?void 0:a.path;r&&e.authenticationTriggerEvent===t&&await v(r,n)}function ue(e){var t;return!((t=e.sourceJSON)!=null&&t.isMultiServicesView)&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const h=P({types:j});function ce(e,t){var n;if(e.defaultSymbol)return(n=e.types)!=null&&n.length?new _({defaultSymbol:h(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map(r=>({id:r.id,symbol:h(r.symbol,r,t)}))}):new C({symbol:h(e.defaultSymbol,e,t)})}function le(e){var r,a,o;let t=(r=e.sourceJSON)==null?void 0:r.cacheMaxAge;if(!t)return!1;const n=(o=(a=e.editingInfo)==null?void 0:a.lastEditDate)==null?void 0:o.getTime();return n==null||(t*=1e3,Date.now()-n<t)}async function D(e,t,n){if(t==null)return null;const r=[],{objectIdField:a}=e;if(t.forEach(u=>{let c=null;if("attributes"in u){const{attributes:p}=u;c={globalId:p[n],objectId:p[a]!=null&&p[a]!==-1?p[a]:null}}else c={globalId:u.globalId,objectId:u.objectId!=null&&u.objectId!==-1?u.objectId:null};c.globalId!=null&&(c.objectId!=null&&c.objectId!==-1||r.push(c.globalId))}),r.length===0)return null;const o=e.createQuery();o.where=r.map(u=>`${n}='${u}'`).join(" OR "),o.returnGeometry=!1,o.outFields=[a,n],o.cacheHint=!1;const i=await E(M(e,o));if(!i.ok)return null;const l=new Map,d=i.value.features;for(const u of d){const c=u.attributes[n],p=u.attributes[a];c!=null&&p!=null&&p!==-1&&l.set(c,p)}return l}export{K as A,ie as C,ce as D,te as E,B as F,z as I,oe as M,W as O,ee as P,se as Q,ae as R,re as S,ue as T,le as U,D as V,Z as b,U as f,X as g,H as j,J as m,Y as q,k as w,ne as x};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./editingSupport-aW3a__SR.js","./index-B1qcMJFy.js","./index-DAhQBRAS.css","./EditBusLayer-BstQh227.js","./infoFor3D-DsOdlPuA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
