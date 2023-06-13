import{b9 as K,eQ as tt,as as g,Q as P,b5 as H,a as h,b as p,c as w,P as G,C as Z,cb as x,hs as D,e0 as $,ht as R,df as et,d4 as st,ds as W,aY as it,aC as rt,a6 as nt,s as at,fi as ot,dF as lt,bw as I,hu as X,ei as ut,aM as ct,aN as z,fm as ht,gH as N,N as M,l as U,er as dt}from"./index-e8c6bcc0.js";import{m as pt}from"./FeatureStore-69342fcb.js";import{e as ft}from"./QueryEngine-fe077530.js";import{b}from"./Query-ce383482.js";import{r as _t,h as gt}from"./ElevationInfo-9f2bd050.js";import{e as Y}from"./LRUCache-3922d825.js";import{f as yt,i as mt,y as Et}from"./featureConversionUtils-096a49d9.js";import{a as Ct}from"./pbfQueryUtils-a8ac8764.js";import{S as Ft,c as Tt,m as vt,p as bt}from"./query-0796d492.js";import{t as St,c as j}from"./byteSizeEstimations-7cf1c05d.js";import{E as It}from"./ByteSizeUnit-d4757d40.js";import{o as wt}from"./BoundsStore-dc194457.js";import"./projectionSupport-380694fd.js";import"./json-48e3ea08.js";import"./OptimizedGeometry-33b2eb0d.js";import"./timeSupport-d59847c8.js";import"./normalizeUtils-f64efc29.js";import"./normalizeUtilsCommon-123fc71f.js";import"./utils-c9a76eea.js";import"./WhereClause-0a306758.js";import"./executionError-c92d3b85.js";import"./QueryEngineCapabilities-42e44ded.js";import"./quantizationUtils-4ff178e4.js";import"./utils-68382e8f.js";import"./generateRendererUtils-5874bc54.js";import"./FieldsIndex-888b8bd2.js";import"./Field-fadcb771.js";import"./fieldType-a79b2e2e.js";import"./lengthUtils-b9fae671.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./pbf-2b43d9bb.js";import"./queryZScale-c236a6ea.js";import"./PooledRBush-4ae7c2cc.js";function q(s=!1,t){if(s){const{elevationInfo:e,alignPointsInFeatures:i,spatialReference:r}=t;return new At(e,i,r)}return new Ot}let Ot=class{async alignCandidates(t,e){return t}notifyElevationSourceChange(){}};const xt=1024;let At=class{constructor(t,e,i){this._elevationInfo=t,this._alignPointsInFeatures=e,this.spatialReference=i,this._alignmentsCache=new Y(xt),this._cacheVersion=0,this._metersPerVerticalUnit=K(i)}async alignCandidates(t,e){const i=this._elevationInfo;return i==null||i.mode!=="absolute-height"||i.featureExpressionInfo?this._alignComputedElevationCandidates(t,e):(this._alignAbsoluteElevationCandidates(t,i),t)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(t,e){const{offset:i,unit:r}=e;if(i==null)return;const n=i*(_t(r??"meters")/this._metersPerVerticalUnit);for(const a of t)switch(a.type){case"edge":a.start.z+=n,a.end.z+=n;continue;case"vertex":a.target.z+=n;continue}}async _alignComputedElevationCandidates(t,e){const i=new Map;for(const f of t)tt(i,f.objectId,Rt).push(f);const[r,n,a]=this._prepareQuery(i),o=await this._alignPointsInFeatures(r,e);if(g(e),a!==this._cacheVersion)return this._alignComputedElevationCandidates(t,e);this._applyCacheAndResponse(r,o,n);const{drapedObjectIds:u,failedObjectIds:c}=o,d=[];for(const f of t){const{objectId:y}=f;u.has(y)&&f.type==="edge"&&(f.draped=!0),c.has(y)||d.push(f)}return d}_prepareQuery(t){const e=[],i=[];for(const[r,n]of t){const a=[];for(const o of n)this._addToQueriesOrCachedResult(r,o.target,a,i),o.type==="edge"&&(this._addToQueriesOrCachedResult(r,o.start,a,i),this._addToQueriesOrCachedResult(r,o.end,a,i));a.length!==0&&e.push({objectId:r,points:a})}return[e,i,this._cacheVersion]}_addToQueriesOrCachedResult(t,e,i,r){const n=B(t,e),a=this._alignmentsCache.get(n);a==null?i.push(e):r.push(new $t(e,a))}_applyCacheAndResponse(t,{elevations:e,drapedObjectIds:i,failedObjectIds:r},n){for(const u of n)u.apply();let a=0;const o=this._alignmentsCache;for(const{objectId:u,points:c}of t){if(r.has(u)){a+=c.length;continue}const d=!i.has(u);for(const f of c){const y=B(u,f),m=e[a++];f.z=m,d&&o.put(y,m,1)}}}};class $t{constructor(t,e){this.point=t,this.z=e}apply(){this.point.z=this.z}}function B(s,{x:t,y:e,z:i}){return`${s}-${t}-${e}-${i??0}}`}function Rt(){return[]}let Pt=class{filter(t,e){return e}notifyElevationSourceChange(){}},Ht=class{filter(t,e){const{point:i,distance:r}=t,{z:n}=i;if(n==null||e.length===0)return e;const a=Ut(r),o=this._updateCandidatesTo3D(e,i,a).filter(Dt);return o.sort(jt),o}_updateCandidatesTo3D(t,e,i){for(const r of t)switch(r.type){case"edge":zt(r,e,i);continue;case"vertex":Mt(r,e,i);continue}return t}};function Dt(s){return s.distance<=1}function V(s=!1){return s?new Ht:new Pt}function zt(s,t,{x:e,y:i,z:r}){const{start:n,end:a,target:o}=s;s.draped||Nt(o,t,n,a);const u=(t.x-o.x)/e,c=(t.y-o.y)/i,d=(t.z-o.z)/r;s.distance=Math.sqrt(u*u+c*c+d*d)}function Nt(s,t,e,i){const r=i.x-e.x,n=i.y-e.y,a=i.z-e.z,o=r*r+n*n+a*a,u=(t.x-e.x)*r+(t.y-e.y)*n+a*(t.z-e.z),c=Math.min(1,Math.max(0,u/o)),d=e.x+r*c,f=e.y+n*c,y=e.z+a*c;s.x=d,s.y=f,s.z=y}function Mt(s,t,{x:e,y:i,z:r}){const{target:n}=s,a=(t.x-n.x)/e,o=(t.y-n.y)/i,u=(t.z-n.z)/r,c=Math.sqrt(a*a+o*o+u*u);s.distance=c}function Ut(s){return typeof s=="number"?{x:s,y:s,z:s}:s}function jt(s,t){return s.distance-t.distance}function k(s=!1,t){return s?new Vt(t):new qt}class qt{async fetch(){return[]}notifySymbologyChange(){}}const Bt=1024;class Vt{constructor(t){this._getSymbologyCandidates=t,this._candidatesCache=new Y(Bt),this._cacheVersion=0}async fetch(t,e){if(t.length===0)return[];const i=[],r=[],n=this._candidatesCache;for(const f of t){const y=Q(f),m=n.get(y);if(m)for(const v of m)r.push(P(v));else i.push(f),n.put(y,[],1)}if(i.length===0)return r;const a=this._cacheVersion,{candidates:o,sourceCandidateIndices:u}=await this._getSymbologyCandidates(i,e);if(g(e),a!==this._cacheVersion)return this.fetch(t,e);const c=[],{length:d}=o;for(let f=0;f<d;++f){const y=o[f],m=Q(i[u[f]]),v=n.get(m);v.push(y),n.put(m,v,v.length),c.push(P(y))}return r.concat(c)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function Q(s){switch(s.type){case"vertex":{const{objectId:t,target:e}=s,i=`${t}-vertex-${e.x}-${e.y}-${e.z??0}`;return H(i).toString()}case"edge":{const{objectId:t,start:e,end:i}=s,r=`${t}-edge-${e.x}-${e.y}-${e.z??0}-to-${i.x}-${i.y}-${i.z??0}`;return H(r).toString()}default:return""}}let S=class extends G{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(t,e){this._pending.push({promise:t,callback:e}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const t=this._pending[0];t.promise.then(e=>t.callback(e)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};h([p()],S.prototype,"updating",void 0),S=h([w("esri.core.AsyncSequence")],S);class kt{constructor(t,e){this.data=t,this.resolution=e,this.state={type:l.CREATED},this.alive=!0}process(t){switch(this.state.type){case l.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_COUNT:break;case l.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_FEATURES:break;case l.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case l.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case l.CREATED:case l.FETCH_COUNT:return 0;case l.FETCHED_COUNT:return this.state.featureCount;case l.FETCH_FEATURES:return this.state.previous.featureCount;case l.FETCHED_FEATURES:return this.state.features.length;case l.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case l.CREATED:return"created";case l.FETCH_COUNT:return"fetch-count";case l.FETCHED_COUNT:return"fetched-count";case l.FETCH_FEATURES:return"fetch-features";case l.FETCHED_FEATURES:return"fetched-features";case l.DONE:return"done"}}_gotoFetchCount(t,e){return{type:l.FETCH_COUNT,previous:t,task:x(async i=>{const r=await D(e.fetchCount(this,i));this.state.type===l.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(t,e){return{type:l.FETCHED_COUNT,featureCount:e,previous:t}}_gotoFetchFeatures(t,e){return{type:l.FETCH_FEATURES,previous:t,task:x(async i=>{const r=await D(e.fetchFeatures(this,t.featureCount,i));this.state.type===l.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(t,e){return{type:l.FETCHED_FEATURES,previous:t,features:e}}_goToDone(t,e){return e.finish(this,t.features),{type:l.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:l.CREATED},t.type){case l.CREATED:case l.FETCHED_COUNT:case l.FETCHED_FEATURES:case l.DONE:break;case l.FETCH_COUNT:case l.FETCH_FEATURES:t.task.abort()}}intersects(t){return t==null||!this.data.extent||($(t,J),R(this.data.extent,J))}}var l;(function(s){s[s.CREATED=0]="CREATED",s[s.FETCH_COUNT=1]="FETCH_COUNT",s[s.FETCHED_COUNT=2]="FETCHED_COUNT",s[s.FETCH_FEATURES=3]="FETCH_FEATURES",s[s.FETCHED_FEATURES=4]="FETCHED_FEATURES",s[s.DONE=5]="DONE"})(l||(l={}));const J=Z();let _=class extends et{get _minimumVerticesPerFeature(){var t;switch((t=this.store)==null?void 0:t.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(t){const e=this._get("filter"),i=this._filterProperties(t);JSON.stringify(e)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(t){const e=this._get("customParameters");JSON.stringify(e)!==JSON.stringify(t)&&this._set("customParameters",t)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const e=this._get("tileInfo");e!==t&&(t!=null&&e!=null&&JSON.stringify(t)===JSON.stringify(e)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this.updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(t){super(t),this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._pendingEdits=new S,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this._configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(t,e)=>{st(t,e,({id:i},{id:r})=>i===r)||this._process()},W)}destroy(){this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null}refresh(){this.store.refresh(),this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._process()}applyEdits(t){this._pendingEdits.push(t,async e=>{if(e.addedFeatures.length===0&&e.updatedFeatures.length===0&&e.deletedFeatures.length===0)return;for(const[,r]of this._pendingTiles)r.reset();const i={...e,deletedFeatures:e.deletedFeatures.map(({objectId:r,globalId:n})=>r&&r!==-1?r:this._lookupObjectIdByGlobalId(n))};await this.updatingHandles.addPromise(this.store.processEdits(i,(r,n)=>this._queryFeaturesById(r,n),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!it(this.url))return;const t=x(async e=>{var i;try{const r=await Ft(this.url,new b({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:e});this.store.extent=rt.fromJSON((i=r.data)==null?void 0:i.extent)}catch(r){nt(r),at.getLogger(this).warn("Failed to fetch data extent",r)}});this.updatingHandles.addPromise(t.promise.then(()=>this._process())),this.handles.add(ot(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(t=>t.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,t]of this._pendingTiles)t.alive=!1}_createPendingTiles(){const t=this._collectMissingTilesInfo();if(this._setAvailability(t==null?1:t.coveredArea/t.fullArea),t!=null)for(const{data:e,resolution:i}of t.missingTiles){const r=this._pendingTiles.get(e.id);r?(r.resolution=i,r.alive=!0):this._createPendingTile(e,i)}}_collectMissingTilesInfo(){let t=null;for(let e=this.tilesOfInterest.length-1;e>=0;e--){const i=this.tilesOfInterest[e],r=this.store.process(i,(n,a)=>this._verifyTileComplexity(n,a));t==null?t=r:t.prepend(r)}return t}_deletePendingTiles(){for(const[,t]of this._pendingTiles)t.alive||this._deletePendingTile(t)}_processPendingTiles(){const t={fetchCount:(e,i)=>this._fetchCount(e,i),fetchFeatures:(e,i,r)=>this._fetchFeatures(e,i,r),finish:(e,i)=>this._finishPendingTile(e,i),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(t))for(const[,e]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(e.data),e.resolution)&&this.updatingHandles.addPromise(e.process(t))}_verifyTileComplexity(t,e){return this._verifyVertexComplexity(t)&&this._verifyFeatureDensity(t,e)}_verifyVertexComplexity(t){return t*this._minimumVerticesPerFeature<Jt}_verifyFeatureDensity(t,e){if(this.tileInfo==null)return!1;const i=this.tileSize*e;return t*(Lt/(i*i))<Gt}_ensureFetchAllCounts(t){let e=!0;for(const[,i]of this._pendingTiles)i.state.type<l.FETCHED_COUNT&&this.updatingHandles.addPromise(i.process(t)),i.state.type<=l.FETCH_COUNT&&(e=!1);return e}_finishPendingTile(t,e){this.store.add(t.data,e),this._deletePendingTile(t),this._updateAvailability()}_updateAvailability(){const t=this._collectMissingTilesInfo();this._setAvailability(t==null?1:t.coveredArea/t.fullArea)}_setAvailability(t){this._set("availability",t)}_createPendingTile(t,e){const i=new kt(t,e);return this._pendingTiles.set(t.id,i),i}_deletePendingTile(t){t.reset(),this._pendingTiles.delete(t.data.id)}async _fetchCount(t,e){return this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:O,signal:e})}async _fetchFeatures(t,e,i){let r=0;const n=[];let a=0,o=e;for(;;){const u=this._createFeaturesQuery(t),c=this._setPagingParameters(u,r,o),{features:d,exceededTransferLimit:f}=await this._queryFeatures(u,i);c&&(r+=u.num),a+=d.length;for(const y of d)n.push(y);if(o=e-a,!c||!f||o<=0)return n}}_filterProperties(t){return t==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}_lookupObjectIdByGlobalId(t){const e=this.globalIdField,i=this.objectIdField;if(e==null)throw new Error("Expected globalIdField to be defined");let r=null;if(this.store.featureStore.forEach(n=>{t===n.attributes[e]&&(r=n.objectId??n.attributes[i])}),r==null)throw new Error(`Expected to find a feature with globalId ${t}`);return r}_queryFeaturesById(t,e){const i=this._createFeaturesQuery();return i.objectIds=t,this._queryFeatures(i,e)}_queryFeatures(t,e){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(t,e):this._queryFeaturesJSON(t,e)}async _queryFeaturesPBF(t,e){const{sourceSpatialReference:i}=this,{data:r}=await Tt(this.url,t,new Ct({sourceSpatialReference:i}),{query:this._configuration.customParameters,timeout:O,signal:e});return yt(r)}async _queryFeaturesJSON(t,e){const{sourceSpatialReference:i}=this,{data:r}=await vt(this.url,t,i,{query:this._configuration.customParameters,timeout:O,signal:e});return mt(r,this.objectIdField)}_createCountQuery(t){const e=this._createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(e.cacheHint=!0),e}_createFeaturesQuery(t=null){const e=this._createBaseQuery(t);return e.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],e.returnGeometry=!0,t!=null&&(this.capabilities.query.supportsResultType?e.resultType="tile":this.capabilities.query.supportsCacheHint&&(e.cacheHint=!0)),e}_createBaseQuery(t){const e=new b({returnZ:this.hasZ,returnM:!1,geometry:this.tileInfo!=null&&t!=null?lt(t.data.extent,this.tileInfo.spatialReference):void 0}),i=this._configuration.filter;return i!=null&&(e.where=i.where,e.gdbVersion=i.gdbVersion,e.timeExtent=i.timeExtent),e.outSpatialReference=this.spatialReference,e}_setPagingParameters(t,e,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:n,tileMaxRecordCount:a,maxRecordCount:o,supportsResultType:u}=this.capabilities.query,c=r?b.MAX_MAX_RECORD_COUNT_FACTOR:1,d=c*((u||n)&&a?a:o||Qt);return t.start=e,r?(t.maxRecordCountFactor=Math.min(c,Math.ceil(i/d)),t.num=Math.min(i,t.maxRecordCountFactor*d)):t.num=Math.min(i,d),!0}};h([p({constructOnly:!0})],_.prototype,"url",void 0),h([p({constructOnly:!0})],_.prototype,"objectIdField",void 0),h([p({constructOnly:!0})],_.prototype,"globalIdField",void 0),h([p({constructOnly:!0})],_.prototype,"capabilities",void 0),h([p({constructOnly:!0})],_.prototype,"sourceSpatialReference",void 0),h([p({constructOnly:!0})],_.prototype,"spatialReference",void 0),h([p({constructOnly:!0})],_.prototype,"store",void 0),h([p({readOnly:!0})],_.prototype,"_minimumVerticesPerFeature",null),h([p()],_.prototype,"filter",null),h([p()],_.prototype,"customParameters",null),h([p({readOnly:!0})],_.prototype,"_configuration",null),h([p()],_.prototype,"tileInfo",null),h([p()],_.prototype,"tileSize",null),h([p()],_.prototype,"tilesOfInterest",void 0),h([p({readOnly:!0})],_.prototype,"updating",null),h([p({readOnly:!0})],_.prototype,"updatingExcludingEdits",null),h([p({readOnly:!0})],_.prototype,"availability",void 0),h([p()],_.prototype,"hasZ",null),_=h([w("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],_);const Qt=2e3,O=6e5,Jt=1e6,Lt=25,Gt=1;class Zt{constructor(){this._store=new Map,this._byteSize=0}set(t,e){this.delete(t),this._store.set(t,e),this._byteSize+=e.byteSize}delete(t){const e=this._store.get(t);return!!this._store.delete(t)&&(e!=null&&(this._byteSize-=e.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,e){for(const[i,r]of this._store){if(this._byteSize<=t)break;this.delete(i),e(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const e=this._store.get(t);e&&(this._store.delete(t),this._store.set(t,e))}}let F=class extends G{constructor(s){super(s),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*It.MEGABYTES,this._tileBounds=new wt,this._tiles=new Zt,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=Z()}add(s,t){const e=[];for(const i of t)this._referenceFeature(i.objectId)===C.ADDED&&e.push(i);this._addTileStorage(s,new Set(t.map(i=>i.objectId)),Wt(t)),this.featureStore.addMany(e),this._tiles.applyByteSizeLimit(this.maximumByteSize,i=>this._removeTileStorage(i))}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(s,t,e){return this._processEditsDelete(s.deletedFeatures.concat(s.updatedFeatures)),this._processEditsRefetch(s.addedFeatures.concat(s.updatedFeatures),t,e)}_addTileStorage(s,t,e){const i=s.id;this._tiles.set(i,new Kt(s,t,e)),this._tileBounds.set(i,s.extent),this._tileFeatureCounts.set(i,t.size)}_remove({id:s}){const t=this._tiles.get(s);t&&this._removeTileStorage(t)}_removeTileStorage(s){const t=[];for(const i of s.objectIds)this._unreferenceFeature(i)===C.REMOVED&&t.push(i);this.featureStore.removeManyById(t);const e=s.data.id;this._tiles.delete(e),this._tileBounds.delete(e)}_processEditsDelete(s){this.featureStore.removeManyById(s);for(const[,t]of this._tiles){for(const e of s)t.objectIds.delete(e);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of s)this._refCounts.delete(t)}async _processEditsRefetch(s,t,e){const i=(await t(s,e)).features,{hasZ:r,hasM:n}=this.featureStore;for(const a of i){const o=Et(this._tmpBoundingRect,a.geometry,r,n);o!=null&&this._tileBounds.forEachInBounds(o,u=>{const c=this._tiles.get(u);this.featureStore.add(a);const d=a.objectId;c.objectIds.has(d)||(c.objectIds.add(d),this._referenceFeature(d),this._tileFeatureCounts.set(c.data.id,c.objectIds.size))})}}process(s,t=()=>!0){if(this.tileInfo==null||!s.extent||this.extent!=null&&!R($(this.extent,this._tmpBoundingRect),s.extent))return new A(s);if(this._tiles.has(s.id))return new A(s);const e=this._createTileTree(s,this.tileInfo);return this._simplify(e,t,null,0,1),this._collectMissingTiles(s,e,this.tileInfo)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:s})=>({data:s,featureCount:this._tileFeatureCounts.get(s.id)||0}))}getFeatureCount(s){return this._tileFeatureCounts.get(s.id)??0}async fetchCount(s,t,e,i){const r=this._tileFeatureCounts.get(s.id);if(r!=null)return r;const n=await bt(t,e,i);return this._tileFeatureCounts.set(s.id,n.data.count),n.data.count}_createTileTree(s,t){const e=new L(s.level,s.row,s.col);return t.updateTileInfo(e,I.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(s.extent,i=>{var n;const r=(n=this._tiles.get(i))==null?void 0:n.data;r&&this._tilesAreRelated(s,r)&&this._populateChildren(e,r,t,this._tileFeatureCounts.get(r.id)||0)}),e}_tilesAreRelated(s,t){if(!s||!t)return!1;if(s.level===t.level)return s.row===t.row&&s.col===t.col;const e=s.level<t.level,i=e?s:t,r=e?t:s,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}_populateChildren(s,t,e,i){const r=t.level-s.level-1;if(r<0)return void(s.isLeaf=!0);const n=t.row>>r,a=t.col>>r,o=s.row<<1,u=a-(s.col<<1)+(n-o<<1),c=s.children[u];if(c!=null)this._populateChildren(c,t,e,i);else{const d=new L(s.level+1,n,a);e.updateTileInfo(d,I.ExtrapolateOptions.POWER_OF_TWO),s.children[u]=d,this._populateChildren(d,t,e,i)}}_simplify(s,t,e,i,r){const n=r*r;if(s.isLeaf)return t(this.getFeatureCount(s),r)?0:(this._remove(s),e!=null&&(e.children[i]=null),n);const a=r/2,o=a*a;let u=0;for(let c=0;c<s.children.length;c++){const d=s.children[c];u+=d!=null?this._simplify(d,t,s,c,a):o}return u===0?this._mergeChildren(s):1-u/n<ee&&(this._purge(s),e!=null&&(e.children[i]=null),u=n),u}_mergeChildren(s){const t=new Set;let e=0;this._forEachLeaf(s,i=>{const r=this._tiles.get(i.id);if(r){e+=r.byteSize;for(const n of r.objectIds)t.has(n)||(t.add(n),this._referenceFeature(n));this._remove(i)}}),this._addTileStorage(s,t,e),s.isLeaf=!0,s.children[0]=s.children[1]=s.children[2]=s.children[3]=null,this._tileFeatureCounts.set(s.id,t.size)}_forEachLeaf(s,t){for(const e of s.children)e!=null&&(e.isLeaf?t(e):this._forEachLeaf(e,t))}_purge(s){if(s!=null)if(s.isLeaf)this._remove(s);else for(let t=0;t<s.children.length;t++){const e=s.children[t];this._purge(e),s.children[t]=null}}_collectMissingTiles(s,t,e){const i=new te(e,s,this.extent);return this._collectMissingTilesRecurse(t,i,1),i.info}_collectMissingTilesRecurse(s,t,e){if(s.isLeaf)return;if(!s.hasChildren)return void t.addMissing(s.level,s.row,s.col,e);const i=e/2;for(let r=0;r<s.children.length;r++){const n=s.children[r];n==null?t.addMissing(s.level+1,(s.row<<1)+((2&r)>>1),(s.col<<1)+(1&r),i):this._collectMissingTilesRecurse(n,t,i)}}_referenceFeature(s){const t=(this._refCounts.get(s)||0)+1;return this._refCounts.set(s,t),t===1?C.ADDED:C.UNCHANGED}_unreferenceFeature(s){const t=(this._refCounts.get(s)||0)-1;return t===0?(this._refCounts.delete(s),C.REMOVED):(t>0&&this._refCounts.set(s,t),C.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(s=>`${s.data.id}:[${Array.from(s.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(s=>`${s}:${this._refCounts.get(s)}`)}}};function Wt(s){return s.reduce((t,e)=>t+Xt(e),0)}function Xt(s){return 32+Yt(s.geometry)+St(s.attributes)}function Yt(s){if(s==null)return 0;const t=j(s.lengths,4);return 32+j(s.coords,8)+t}h([p({constructOnly:!0})],F.prototype,"featureStore",void 0),h([p()],F.prototype,"tileInfo",void 0),h([p()],F.prototype,"extent",void 0),h([p()],F.prototype,"maximumByteSize",void 0),F=h([w("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],F);let Kt=class{constructor(t,e,i){this.data=t,this.objectIds=e,this.byteSize=i}};class L{constructor(t,e,i){this.level=t,this.row=e,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}}class A{constructor(t,e=[]){this.missingTiles=e,this.fullArea=0,this.coveredArea=0,this.fullArea=X(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class te{constructor(t,e,i){this._tileInfo=t,this._extent=null,this.info=new A(e),i!=null&&(this._extent=$(i))}addMissing(t,e,i,r){const n=new ut(null,t,e,i);this._tileInfo.updateTileInfo(n,I.ExtrapolateOptions.POWER_OF_TWO),n.extent==null||this._extent!=null&&!R(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=X(n.extent))}}const ee=.18751;var C;(function(s){s[s.ADDED=0]="ADDED",s[s.REMOVED=1]="REMOVED",s[s.UNCHANGED=2]="UNCHANGED"})(C||(C={}));let T=class extends ct.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=z(),this._elevationAligner=q(),this._elevationFilter=V(),this._symbologyCandidatesFetcher=k(),this._handles=new ht,this._updatingHandles=new N,this._editsUpdatingHandles=new N,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(s,t)=>{const e={points:s},i=await this.remoteClient.invoke("alignElevation",e,{signal:t});return g(t),i},this._getSymbologyCandidates=async(s,t)=>{const e={candidates:s,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",e,{signal:t});return g(t),i}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){var s,t,e,i;(s=this._featureFetcher)==null||s.destroy(),(t=this._queryEngine)==null||t.destroy(),(e=this._featureStore)==null||e.clear(),(i=this._handles)==null||i.destroy()}async setup(s){if(this.destroyed)return{result:{}};const{geometryType:t,objectIdField:e,timeInfo:i,fields:r}=s.serviceInfo,{hasZ:n}=s,a=M.fromJSON(s.spatialReference);this._spatialReference=a,this._featureStore=new pt({...s.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new ft({spatialReference:s.spatialReference,featureStore:this._featureStore,geometryType:t,fields:r,hasZ:n,hasM:!1,objectIdField:e,timeInfo:i}),this._featureFetcher=new _({store:new F({featureStore:this._featureStore}),url:s.serviceInfo.url,objectIdField:s.serviceInfo.objectIdField,globalIdField:s.serviceInfo.globalIdField,capabilities:s.serviceInfo.capabilities,spatialReference:a,sourceSpatialReference:M.fromJSON(s.serviceInfo.spatialReference)});const o=s.configuration.viewType==="3d";return this._elevationAligner=q(o,{elevationInfo:s.elevationInfo!=null?gt.fromJSON(s.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures,spatialReference:a}),this._elevationFilter=V(o),this._handles.add([U(()=>this._featureFetcher.availability,u=>this.emit("notify-availability",{availability:u}),W),U(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(s.configuration)}async configure(s){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(s),{result:{}}}async fetchCandidates(s,t){await this._whenSetup.promise,g(t);const e=se(s),i=t!=null?t.signal:null,r=await this._queryEngine.executeQueryForSnapping(e,i);g(i);const n=await this._elevationAligner.alignCandidates(r.candidates,i);g(i);const a=await this._symbologyCandidatesFetcher.fetch(n,i);g(i);const o=a.length===0?n:n.concat(a);return{result:{candidates:this._elevationFilter.filter(e,o)}}}async updateTiles(s,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(t),this._featureFetcher.tileSize=s.tileSize,this._featureFetcher.tilesOfInterest=s.tiles,this._featureFetcher.tileInfo=s.tileInfo!=null?I.fromJSON(s.tileInfo):null,E}async refresh(s,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(t),this._featureFetcher.refresh(),E}async whenNotUpdating(s,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(t),await dt(()=>!this.updatingExcludingEdits,t),g(t),E}async getDebugInfo(s,t){return g(t),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(s,t){this._updatingHandles.addPromise(this._whenSetup.promise),g(t);const e=z();return this._pendingApplyEdits.set(s.id,e),this._featureFetcher.applyEdits(e.promise),this._editsUpdatingHandles.addPromise(e.promise),E}async endApplyEdits(s,t){const e=this._pendingApplyEdits.get(s.id);return e&&e.resolve(s.edits),g(t),E}async notifyElevationSourceChange(s,t){return this._elevationAligner.notifyElevationSourceChange(),E}async notifySymbologyChange(s,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),E}async setSymbologySnappingSupported(s){return this._symbologyCandidatesFetcher=k(s,this._getSymbologyCandidates),E}_updateFeatureFetcherConfiguration(s){this._featureFetcher.filter=s.filter!=null?b.fromJSON(s.filter):null,this._featureFetcher.customParameters=s.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};h([p({readOnly:!0})],T.prototype,"updating",null),h([p({readOnly:!0})],T.prototype,"updatingExcludingEdits",null),h([p()],T.prototype,"_isInitializing",void 0),T=h([w("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],T);const Ve=T;function se(s){return{point:s.point,mode:s.mode,distance:s.distance,returnEdge:s.returnEdge,returnVertex:s.returnVertex,query:s.filter!=null?s.filter:{where:"1=1"}}}const E={result:{}};export{Ve as default};
