import{g as v,az as S,D as d,X as w,a7 as k,r as a,m as l,a as b}from"./Accessor-BmwT4B0c.js";import{P as u,d as E,v as C,a as F}from"./reactiveUtils-XM7cS2OP.js";import{t as P}from"./memoize-DmxaQ-k8.js";import{h as $}from"./UpdatingHandles-CzJ4c3KT.js";import{j as A}from"./Polyline-s-JzsQqo.js";import{Q as G,L as O,O as H}from"./projection-CyCZAIaD.js";import{a as I}from"./normalizeUtilsSync-12EQcOVf.js";import{y as R}from"./typeUtils-B6WBEKDM.js";import{s as Z}from"./featureConversionUtils-CvnFcmH_.js";import{s as x}from"./OptimizedFeature-P2towpqD.js";import{u as z}from"./executeQueryForSnapping-DWE9tz1Z.js";import{f as L}from"./FeatureStore-BuDu5Iw5.js";import{L as M}from"./QueryEngine-BokU27l9.js";import{Z as W}from"./FieldsIndex-FW1AMU67.js";import{y as N}from"./elevationInfoUtils-D26wVF2d.js";import{N as y}from"./utils-aIx1khaq.js";import{E as j,y as q}from"./RightAngleSnappingHint-BepRvd6S.js";import{i as T,o as D}from"./queryEngineUtils-CQH4BPtw.js";import{i as g,r as J,n as f}from"./symbologySnappingCandidates-nlxK9MZn.js";import{g as U}from"./Scheduler-i_u8qdlN.js";import"./Evented-Dw4_VOGn.js";import"./SimpleObservable-CvOkykwM.js";import"./writer-DKgfqj4X.js";import"./Extent-g5W9hy0j.js";import"./Point-Cz2JYYmX.js";import"./cast-CsZslgGN.js";import"./index-4eY77cms.js";import"./JSONSupport-DcrLLGjL.js";import"./mathUtils-Cfq9PL9W.js";import"./vec3f64-BLpZdpfb.js";import"./projectBuffer-CQnuEMuP.js";import"./geodesicConstants-RQL9oKdk.js";import"./jsonUtils-CwFG8yN4.js";import"./normalizeUtilsCommon-lGDszWRI.js";import"./aaBoundingBox-Dw3yBk2f.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-BJqUA4Pi.js";import"./memoryEstimations-Bcyf-mHz.js";import"./normalizeUtils-BTGdXlpz.js";import"./utils-YowqfOgk.js";import"./utils-B-dlKIhi.js";import"./queryUtils-DBEPdow2.js";import"./json-Wa8cmqdu.js";import"./timeSupport-C7DiFkF_.js";import"./BoundsStore-CI-maf3v.js";import"./PooledRBush--ue4CxG1.js";import"./quickselect-QQC62dOK.js";import"./optimizedFeatureQueryEngineAdapter-D7doR0mc.js";import"./WhereClauseCache-CJbuf62r.js";import"./LRUCache-CXiGQWMN.js";import"./MemCache-CmojB_Z1.js";import"./WhereClause-xGR0ztic.js";import"./TimeOnly-CveCl9ie.js";import"./opacityUtils-Dim20wpZ.js";import"./Promise-DfET-uns.js";import"./fieldType-CBeoJWlv.js";import"./QueryEngineCapabilities-B_pTbIiR.js";import"./timeUtils-C1c_L2Fd.js";import"./quantizationUtils-DgFbqZi7.js";import"./utils-Co_tyUES.js";import"./screenUtils-_ZIvrt5o.js";import"./heatmapUtils-Cyq-bAyG.js";import"./vec42-YcqnINSP.js";import"./common-DQOJ18NT.js";import"./vec4f64-o2zAXfmz.js";import"./utils-v4CMtYiY.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-Fi6iAz29.js";import"./intl-Duiy0OzY.js";import"./timeZoneUtils-DxzjpEBb.js";import"./utils-Dyua10sr.js";import"./ClassBreaksDefinition-C7KVmBug.js";import"./enumeration-DpvDkLNI.js";import"./SnappingCandidate-DGkpYqI6.js";import"./FixedIntervalBinParameters-ZfcJap1f.js";import"./NormalizationBinParametersMixin-CZD0XfhN.js";import"./Clonable-Z-AWS-16.js";import"./unitConversionUtils-rg07EgOm.js";import"./lengthUtils-_77UiyVF.js";import"./Color-VJEMvW-n.js";import"./colorUtils-Rxh2V3ai.js";import"./jsonUtils-DZz5FrgB.js";import"./utils-DYurMneM.js";import"./cimSymbolUtils-DzhKvmq_.js";import"./utils-UPZJIDfz.js";import"./defaultCIMValues-Bb-CUowV.js";import"./enums-BTM-fOHQ.js";import"./Graphic-Dt0LgVGU.js";import"./ActionToggle-D7439N1A.js";import"./Identifiable-BHVfzH03.js";import"./TextSymbol-BLIQ6RKX.js";import"./collectionUtils-CTT-51g7.js";import"./Portal-CmmHxpLg.js";import"./vec32-Dvg_eL9J.js";import"./projectVectorToVector-CCOy_B5J.js";import"./projectPointToVector-BoxjK-qy.js";import"./Query-B_2mhyL4.js";import"./Field-BDG0QV_T.js";import"./FullTextSearch-CBnxSwz4.js";import"./TimeExtent-BO6BsF_x.js";import"./InputManager-DZ3jJnlx.js";import"./Queue-BQesTh_6.js";import"./signal-CySMLEX9.js";import"./keybindings-CTmT1RTo.js";import"./utils-BjSXFjBJ.js";import"./Version-Cd3TlGH0.js";import"./vec2-ChnYg_BJ.js";import"./vec2f64-Dy6m9Nrb.js";import"./geodesicUtils-Cvz9v8ds.js";import"./plane-CpXmOyqq.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-CCm9z-pX.js";import"./mathUtils-BgCEaV43.js";import"./sphere-Cin5efBj.js";import"./mat3-CR8GKnhD.js";import"./geometry2dUtils-D9Oax6Qb.js";import"./SnappingManager-DoaI-UDx.js";import"./viewUtils-CV6QVz7y.js";import"./VertexSnappingCandidate-2c3r5xpK.js";import"./PointSnappingHint-DWAfJfrj.js";import"./debugFlags-B1LM_Apo.js";const _="graphics-collections";let n=class extends v{get updating(){return this._updatingHandles.updating}get _hasZ(){const t=this.view;return t!=null&&t.type==="3d"&&this.layerSource.layer.type!=="map-notes"}get _snappingElevationAligner(){const{view:t}=this,{layer:e}=this.layerSource,i=t!=null&&t.type==="3d";if(!i||e.type==="map-notes")return g();const o=async(r,s)=>(await k(t.whenLayerView(e),s)).elevationAlignPointsInFeatures(r,s);return g(i,{elevationInfo:e.elevationInfo,alignPointsInFeatures:o})}get _snappingElevationFilter(){const{view:t}=this,e=t!=null&&t.type==="3d"&&this.layerSource.layer.type!=="map-notes";return J(e)}get _symbologySnappingFetcher(){const{view:t}=this,{layer:e}=this.layerSource,i=t!=null&&t.type==="3d",o=this._extrudedPolygonSymbolsCount>0;return i&&e.type!=="map-notes"&&o?f(o,async(r,s)=>{const p=await t.whenLayerView(e);return d(s),p.queryForSymbologySnapping({candidates:r,spatialReference:t.spatialReference},s)}):f()}constructor(t){super(t),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new $,this._memoizedMakeGetGroundElevation=P(T)}destroy(){for(const t of this._pendingAdds)t.task.abort();this._pendingAdds.length=0,this._mapSources(t=>this._destroySource(t)),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),i=>{this._updatingHandles.removeHandles(_);for(const o of i)this._addMany(o.graphics.toArray()),this.addHandles([o.on("graphic-update",r=>this._onGraphicUpdate(r)),this._updatingHandles.addOnCollectionChange(()=>o.graphics,r=>this._onGraphicsChanged(r))],_)},u);const{view:t}=this,{layer:e}=this.layerSource;t!=null&&t.type==="3d"&&e.type!=="map-notes"&&t.elevationProvider&&this.addHandles([t.elevationProvider.on("elevation-change",({context:i})=>{N(i,e.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),E(()=>e.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),u),C(()=>e,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(t,e){const{point:i,coordinateHelper:{spatialReference:o}}=t,r=await S(this._mapSources(m=>this._fetchCandidatesForSource(m,t,e)));d(e);const s=this._memoizedMakeGetGroundElevation(this.view,o),p=r.flat().map(m=>D(m,s));return j(i,p),p}async _fetchCandidatesForSource(t,e,i){var h;const o=q(e,((h=this.view)==null?void 0:h.type)??"2d"),r=await z(t.queryEngine,o,i);d(i);const s=await this._snappingElevationAligner.alignCandidates(r.candidates,e.coordinateHelper.spatialReference,i);d(i);const p=await this._symbologySnappingFetcher.fetch(s,i);d(i);const m=p.length===0?s:[...s,...p];return this._snappingElevationFilter.filter(o,m)}refresh(){}_onGraphicUpdate(t){if(this.getGraphicsLayers().some(e=>e.graphics.includes(t.graphic)))switch(t.property){case"geometry":case"visible":this._remove(t.graphic),this._addMany([t.graphic])}}_onGraphicsChanged(t){for(const e of t.removed)this._remove(e);this._addMany(t.added)}_addMany(t){const e=[],i=new Map;for(const o of t)o.geometry!=null&&(this._needsInitializeProjection(o.geometry.spatialReference)?(e.push(o.geometry.spatialReference),i.set(o.uid,o)):this._add(o));this._createPendingAdd(e,i)}_createPendingAdd(t,e){if(!t.length)return;const i=F(async s=>{await G(t.map(p=>({source:p,dest:this.spatialReference})),{signal:s}),this._markLoadedSpatialReferences(t);for(const p of e.values())this._add(p)});this._updatingHandles.addPromise(i.promise);const o={task:i,graphics:e},r=()=>w(this._pendingAdds,o);i.promise.then(r,r),this._pendingAdds.push(o)}_markLoadedSpatialReferences(t){for(const e of t){e.wkid!=null&&this._loadedWkids.add(e.wkid);const i=e.wkt2||e.wkt;i&&this._loadedWkts.add(i)}}_add(t){if(t.geometry==null||!t.visible)return;let e=t.geometry;if(e.type==="mesh")return;e.type==="extent"&&(e=A.fromExtent(e));const i=this._ensureSource(e.type);if(i==null)return;const o=this._createOptimizedFeature(t.uid,e);o!=null&&(i.featureStore.add(o),y(t.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(t){if(t.wkid!=null&&this._loadedWkids.has(t.wkid))return!1;const e=t.wkt2||t.wkt;return(!e||!this._loadedWkts.has(e))&&!O(t,this.spatialReference)}_createOptimizedFeature(t,e){const i=H(I(e),this.spatialReference);if(!i)return null;const o=this._ensureGeometryHasZ(i),r=Z(o,this._hasZ,!1);return new x(r,{[c]:t},null,t)}_ensureGeometryHasZ(t){if(!this._hasZ)return t;const e=o=>{for(;o.length<3;)o.push(0)},i=t.clone();switch(i.hasZ=!0,i.type){case"point":i.z=i.z??0;break;case"multipoint":i.points.forEach(e);break;case"polyline":i.paths.forEach(o=>o.forEach(e));break;case"polygon":i.rings.forEach(o=>o.forEach(e))}return i}_ensureSource(t){const e=this._sources[t];if(e!=null)return e;const i=this._createSource(t);return this._sources[t]=i,i}_createSource(t){const e=R.toJSON(t),i=this._hasZ,o=new L({geometryType:e,hasZ:i,hasM:!1});return{featureStore:o,queryEngine:new M({featureStore:o,fieldsIndex:W.fromLayerJSON({fields:[{name:c,type:"esriFieldTypeOID",alias:c}]}),geometryType:e,hasM:!1,hasZ:i,objectIdField:c,spatialReference:this.spatialReference,priority:U.SNAPPING,scheduler:this.view!=null&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:t}}_remove(t){this._mapSources(e=>this._removeFromSource(e,t));for(const e of this._pendingAdds)e.graphics.delete(t.uid),e.graphics.size===0&&e.task.abort()}_removeFromSource(t,e){const i=e.uid;t.featureStore.has(i)&&(t.featureStore.removeById(e.uid),y(e.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(t){t.queryEngine.destroy(),this._sources[t.type]=null}_mapSources(t){const{point:e,polygon:i,polyline:o,multipoint:r}=this._sources,s=[];return e!=null&&s.push(t(e)),i!=null&&s.push(t(i)),o!=null&&s.push(t(o)),r!=null&&s.push(t(r)),s}};a([l()],n.prototype,"getGraphicsLayers",void 0),a([l({constructOnly:!0})],n.prototype,"layerSource",void 0),a([l({constructOnly:!0})],n.prototype,"spatialReference",void 0),a([l({constructOnly:!0})],n.prototype,"view",void 0),a([l({readOnly:!0})],n.prototype,"updating",null),a([l({readOnly:!0})],n.prototype,"availability",void 0),a([l()],n.prototype,"_hasZ",null),a([l()],n.prototype,"_snappingElevationAligner",null),a([l()],n.prototype,"_snappingElevationFilter",null),a([l()],n.prototype,"_symbologySnappingFetcher",null),a([l()],n.prototype,"_extrudedPolygonSymbolsCount",void 0),n=a([b("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],n);const c="OBJECTID";export{n as GraphicsSnappingSource};
