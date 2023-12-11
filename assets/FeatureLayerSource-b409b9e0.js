import{gd as D,$ as G,aK as V,ge as C,gf as H,s as $,E as F,m as W,b3 as Y,B as Q,f as _,g as T,j as z,fc as B,eq as X,x as P,H as y,n as M,aH as Z,aP as K,du as tt,bd as et,bS as U,_ as at,gg as st,bs as rt,aG as it,dY as nt,aJ as ot,gh as ut}from"./index-27db053b.js";import{e as lt}from"./mat4f64-1413b4a7.js";import{m as dt}from"./MeshGeoreferencedRelativeVertexSpace-2aebf195.js";import{r as ct}from"./vec32-c805d126.js";import{v as pt}from"./External-0c77b5a6.js";import{isFeatureIdentifierArrayWithGlobalId as ht,isFeatureIdentifierArrayWithObjectId as yt}from"./editingSupport-8193741a.js";import{o as mt}from"./clientSideDefaults-b5747dee.js";import{x as ft}from"./QueryTask-d7032e54.js";import{Q as x}from"./featureLayerUtils-26394dd6.js";import{s as gt}from"./executeQueryJSON-2230884c.js";import{i as bt}from"./editsZScale-1cb0e85a.js";import{b as wt}from"./Query-4d8a66d0.js";import{s as Rt,a as St,r as qt}from"./EditBusLayer-80e4b87f.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./defaultsJSON-b087dd4d.js";import"./executeForIds-d3076dfe.js";import"./query-633304fb.js";import"./pbfQueryUtils-1b37294c.js";import"./pbf-4aa35e16.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-54772c3a.js";import"./executeQueryPBF-9b058192.js";import"./featureConversionUtils-94d8cb55.js";import"./FeatureSet-b143a95b.js";import"./Field-a20a79af.js";import"./fieldType-c94915e3.js";import"./jsonUtils-f1e152aa.js";import"./UniqueValueRenderer-049bb9e4.js";import"./LegendOptions-28b8c5c0.js";import"./diffUtils-135dddd3.js";import"./SizeVariable-10764cb7.js";import"./colorRamps-9cc2c549.js";import"./lengthUtils-535759c3.js";import"./ColorStop-6362a997.js";import"./jsonUtils-29e80207.js";import"./styleUtils-5b1b6fcb.js";import"./DictionaryLoader-9d5448cd.js";import"./LRUCache-016147c2.js";import"./Version-3276c9a1.js";import"./FieldsIndex-f11b6b69.js";import"./UnknownTimeZone-08907062.js";import"./heatmapUtils-37a4ad14.js";import"./vec4f64-3c9d0901.js";import"./AttachmentQuery-583c0dcb.js";import"./RelationshipQuery-c3b68820.js";function At(t){const{vertexSpace:e}=t;if(e.isRelative)return t.clone();const{anchor:a}=t,s=a.clone(),r=D(It,[-s.x,-s.y,-s.z]),i=new dt({origin:[s.x,s.y,s.z]}),n=t.cloneWithVertexSpace(i),{position:o}=n.vertexAttributes;return n.vertexAttributes.position=ct(new Float64Array(o.length),o,r),n.vertexAttributesChanged(),n}const It=lt();async function j(t,e,a){const{geometry:s}=e,r={...e.attributes};if(a!=null&&(s==null?void 0:s.type)==="mesh"){const{transformFieldRoles:i}=a,{origin:n,spatialReference:o,transform:u}=s,l=t.spatialReference;await G(o,l);const c=V(n,l);if(r[i.originX]=c.x,r[i.originY]=c.y,r[i.originZ]=c.z??0,u!=null){const{translation:p,scale:h,rotation:m}=u,{vertexSpace:R}=s,d=R.isGeoreferenced?1:C(o)/C(l);r[i.translationX]=p[0]*d,r[i.translationY]=p[2]*d,r[i.translationZ]=-p[1]*d,r[i.scaleX]=h[0],r[i.scaleY]=h[2],r[i.scaleZ]=h[1],r[i.rotationX]=m[0],r[i.rotationY]=m[2],r[i.rotationZ]=-m[1],r[i.rotationDeg]=m[3]}return{attributes:r}}return s==null?{attributes:r}:s.type==="mesh"||s.type==="extent"?null:{geometry:s.toJSON(),attributes:r}}async function Ft(t,e){const a=await Promise.all((e.addAttachments??[]).map(i=>L(t,i))),s=await Promise.all((e.updateAttachments??[]).map(i=>L(t,i))),r=e.deleteAttachments??[];return a.length||s.length||r.length?{adds:a,updates:s,deletes:[...r]}:null}async function L(t,e){var c;const{feature:a,attachment:s}=e,{globalId:r,name:i,contentType:n,data:o,uploadId:u}=s,l={globalId:r};if(a&&("attributes"in a?l.parentGlobalId=(c=a.attributes)==null?void 0:c[t.globalIdField]:a.globalId&&(l.parentGlobalId=a.globalId)),u)l.uploadId=u;else if(o){const p=await H(o);p&&(l.contentType=p.mediaType,l.data=p.data),o instanceof File&&(l.name=o.name)}return i&&(l.name=i),n&&(l.contentType=n),l}function Ot(t,e,a){if(!e||e.length===0)return[];if(a&&ht(e))return e.map(r=>r.globalId);if(yt(e))return e.map(r=>r.objectId);const s=a?t.globalIdField:t.objectIdField;return s?e.map(r=>r.getAttribute(s)):[]}function Et(t){var r,i,n;const e=t==null?void 0:t.assetMaps;if(e){for(const o of e.addResults)o.success||$.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${o.globalId}.`);for(const o of e.updateResults)o.success||$.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${o.globalId}.`)}const a=t==null?void 0:t.attachments,s={addFeatureResults:((r=t==null?void 0:t.addResults)==null?void 0:r.map(w))??[],updateFeatureResults:((i=t==null?void 0:t.updateResults)==null?void 0:i.map(w))??[],deleteFeatureResults:((n=t==null?void 0:t.deleteResults)==null?void 0:n.map(w))??[],addAttachmentResults:a!=null&&a.addResults?a.addResults.map(w):[],updateAttachmentResults:a!=null&&a.updateResults?a.updateResults.map(w):[],deleteAttachmentResults:a!=null&&a.deleteResults?a.deleteResults.map(w):[]};return t!=null&&t.editMoment&&(s.editMoment=t.editMoment),s}function w(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new F("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}function v(t,e){return new W({attributes:t.attributes,geometry:Y({...t.geometry,spatialReference:e})})}function _t(t,e){var a,s,r;return{adds:((a=t==null?void 0:t.adds)==null?void 0:a.map(i=>v(i,e)))||[],updates:((s=t==null?void 0:t.updates)==null?void 0:s.map(i=>({original:v(i[0],e),current:v(i[1],e)})))||[],deletes:((r=t==null?void 0:t.deletes)==null?void 0:r.map(i=>v(i,e)))||[],spatialReference:e}}function xt(t){const e=t.details.raw,a=+e.code,s=+e.extendedCode;return a===500&&(s===-2147217144||s===-2147467261)}const vt=new Q({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),$t=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),Tt=new Q({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let A=class extends B{constructor(){super(...arguments),this.type="feature-layer",this.refresh=X(async()=>{var a,s;await this.load();const t=(a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==((s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate);return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,a=this._fetchService(e,{...t}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t)).then(()=>this._ensureLatestMetadata(t));return this.addResolvingPromise(a),Promise.resolve(this)}get queryTask(){var l;const{capabilities:t,parsedUrl:e,dynamicDataSource:a,infoFor3D:s,gdbVersion:r,spatialReference:i,fieldsIndex:n}=this.layer,o=P("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF)&&s==null,u=((l=t==null?void 0:t.operations)==null?void 0:l.supportsQueryAttachments)??!1;return new ft({url:e.path,pbfSupported:o,fieldsIndex:n,infoFor3D:s,dynamicDataSource:a,gdbVersion:r,sourceSpatialReference:i,queryAttachmentsSupported:u})}async addAttachment(t,e){await this.load();const{layer:a}=this;await x(a,"editing");const s=t.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/addAttachment",i=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(e,i.query);try{const o=await y(r,{body:n});return w(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}async updateAttachment(t,e,a){await this.load();const{layer:s}=this;await x(s,"editing");const r=t.attributes[s.objectIdField],i=s.parsedUrl.path+"/"+r+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(a,n.query);try{const u=await y(i,{body:o});return w(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(t,e){var g,q,E,N,J,k;await this.load();const{layer:a}=this;await x(a,"editing");const s=a.infoFor3D,r=s!=null,i=r||((e==null?void 0:e.globalIdUsed)??!1),n=r?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,o=((g=t.addFeatures)==null?void 0:g.map(b=>j(this.layer,b,s)))??[],u=(await Promise.all(o)).filter(M),l=((q=t.updateFeatures)==null?void 0:q.map(b=>j(this.layer,b,s)))??[],c=(await Promise.all(l)).filter(M),p=Ot(this.layer,t.deleteFeatures,i);bt(u,c,a.spatialReference);const h=await Ft(this.layer,t),m=a.capabilities.editing.supportsAsyncApplyEdits&&r,R=(e==null?void 0:e.gdbVersion)||a.gdbVersion,d={gdbVersion:R,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:i,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,async:m};await Rt(this.layer.url,R,!0);const O=St(this.layer.url,R||null);e!=null&&e.returnServiceEditsOption?(d.edits=JSON.stringify([{id:a.layerId,adds:u,updates:c,deletes:p,attachments:h,assetMaps:n}]),d.returnServiceEditsOption=vt.toJSON(e==null?void 0:e.returnServiceEditsOption),d.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(d.adds=u.length?JSON.stringify(u):null,d.updates=c.length?JSON.stringify(c):null,d.deletes=p.length?i?JSON.stringify(p):p.join(","):null,d.attachments=h&&JSON.stringify(h),d.assetMaps=n!=null?JSON.stringify(n):void 0);const f=this._getLayerRequestOptions({method:"post",query:d});O&&(f.authMode="immediate",f.query.returnEditMoment=!0,f.query.sessionId=qt);const S=e!=null&&e.returnServiceEditsOption?a.url:a.parsedUrl.path;let I;try{I=m?await this._asyncApplyEdits(S+"/applyEdits",f):await y(S+"/applyEdits",f)}catch(b){if(!xt(b))throw b;f.authMode="immediate",I=m?await this._asyncApplyEdits(S+"/applyEdits",f):await y(S+"/applyEdits",f)}if(!((E=a.capabilities.operations)!=null&&E.supportsEditing)&&((J=(N=a.effectiveCapabilities)==null?void 0:N.operations)!=null&&J.supportsEditing)){const b=(k=Z)==null?void 0:k.findCredential(a.url);await(b==null?void 0:b.refreshToken())}return this._createEditsResult(I)}async deleteAttachments(t,e){await this.load();const{layer:a}=this;await x(a,"editing");const s=t.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await y(r,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(w)}catch(i){throw this._createAttachmentErrorResult(s,i)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const a=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:s,url:r}=this.layer,{data:i}=await y(`${r}/${s}`,a),{id:n,extent:o,fullExtent:u,timeExtent:l}=i,c=o||u;return{id:n,fullExtent:c&&K.fromJSON(c),timeExtent:l&&tt.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(t,e={}){await this.load();const a=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){var s;await this.load();const a=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return(s=t.outStatistics)!=null&&s.length&&a.features.length&&a.features.forEach(r=>{var n;const i=r.attributes;(n=t.outStatistics)==null||n.forEach(({outStatisticFieldName:o})=>{if(o){const u=o.toLowerCase();u&&u in i&&o!==u&&(i[o]=i[u],delete i[u])}})}),a}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!et(this.layer.url))return"unavailable";const t=U(this.layer.url,"status"),e=await y(t,{query:{f:"json"}});return Tt.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:a}=await at(()=>import("./uploadAssets-b525e0a7.js"),["./uploadAssets-b525e0a7.js","./index-27db053b.js","./index-5ad293c9.css","./External-0c77b5a6.js"],import.meta.url);return a(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}async _asyncApplyEdits(t,e){const a=(await y(t,e)).data.statusUrl;for(;;){const s=(await y(a,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return y(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new F("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new F("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await st(Mt)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const s={};P("featurelayer-advanced-symbols")&&(s.returnAdvancedSymbols=!0),e!=null&&e.cacheBust&&(s._ts=Date.now());const{data:r}=await y(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:s,signal:e==null?void 0:e.signal}));t=r}this.sourceJSON=await this._patchServiceJSON(t,e==null?void 0:e.signal);const a=t.type;if(!$t.has(a))throw new F("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}async _patchServiceJSON(t,e){var a;if(t.type!=="Table"&&t.geometryType&&!((a=t==null?void 0:t.drawingInfo)!=null&&a.renderer)&&!t.defaultSymbol){const s=mt(t.geometryType).renderer;rt("drawingInfo.renderer",s,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{const{data:s}=await y(this.layer.url,this._getLayerRequestOptions({signal:e}));s.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){it(s)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!(e!=null&&e.length))return null;const a=await this._filterRedundantAssetMaps(e);if(!(e!=null&&e.length))return null;const s=new Array,r=new Map;for(const i of a){const{geometry:n}=i,{vertexSpace:o}=n;if(o.isRelative)s.push(n);else{const u=At(n);r.set(u,n),i.geometry=u,s.push(u)}}await this.uploadAssets(s);for(const[i,n]of r)n.addExternalSources(i.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(a),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,a=this.layer.globalIdField,s=this.layer.parsedUrl;for(const r of t){const i=r.geometry,{metadata:n}=i,o=n.getExternalSourcesOnService(s),u=r.getAttribute(a);if(o.length===0){$.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:l}=o.find(pt)??o[0],{vertexSpace:c}=i,p=c.isGeoreferenced?["PROJECT_VERTICES"]:[];for(const h of l)h.parts.length===1?e.push({globalId:nt(),parentGlobalId:u,assetName:h.assetName,assetHash:h.parts[0].partHash,flags:p}):$.getLogger(this).error(`Skipping asset ${h.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:a}=this.layer,s=[];let r=null;if(Array.isArray(e))for(const n of e)s.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===a&&(r={addResults:n.addResults??[],updateResults:n.updateResults??[],deleteResults:n.deleteResults??[],attachments:n.attachments,editMoment:n.editMoment});else r=e;const i=Et(r);if(s.length>0){i.editedFeatureResults=[];for(const n of s){const{editedFeatures:o}=n,u=o!=null&&o.spatialReference?new ot(o.spatialReference):null;i.editedFeatureResults.push({layerId:n.id,editedFeatures:_t(o,u)})}}return i}_createAttachmentErrorResult(t,e){var r;const a=((r=e.details.messages)==null?void 0:r[0])||e.message,s=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new F("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(t,e){const a=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(a)for(const s in e){const r=e[s];r!=null&&(a.set?a.set(s,r):a.append(s,r))}return a}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...t,query:{gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _filterRedundantAssetMaps(t){const{layer:e}=this,{globalIdField:a,infoFor3D:s,parsedUrl:r}=e;if(s==null||a==null)return t;const i=ut(s);if(i==null)return t;const n=U(r.path,`../${i.id}`),o=new Array,u=new Array;for(const d of t)d.geometry.metadata.getExternalSourcesOnService(r).length>0?u.push(d):o.push(d);const l=u.map(d=>d.getAttribute(a)).filter(M);if(l.length===0)return t;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:p}}=s,h=new wt;h.where=`${c} IN (${l.map(d=>`'${d}'`)})`,h.outFields=[p,c],h.returnGeometry=!1;const m=await gt(n,h),{features:R}=m;return R.length===0?t:[...o,...u.filter(d=>{const O=d.getAttribute(a);if(!O)return!0;const{metadata:f}=d.geometry,S=R.filter(g=>g.getAttribute(c)===O);if(S.length===0)return!0;const I=S.map(g=>g.getAttribute(p));return f.getExternalSourcesOnService(r).flatMap(({source:g})=>g.flatMap(q=>q.parts.map(E=>E.partHash))).some(g=>I.every(q=>g!==q))})]}};_([T()],A.prototype,"type",void 0),_([T({constructOnly:!0})],A.prototype,"layer",void 0),_([T({readOnly:!0})],A.prototype,"queryTask",null),A=_([z("esri.layers.graphics.sources.FeatureLayerSource")],A);const Mt=1e3,Oe=A;export{Oe as default};
