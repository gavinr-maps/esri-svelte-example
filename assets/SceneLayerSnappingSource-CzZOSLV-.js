import{r as i}from"./tslib.es6-B3Jf3DVX.js";import{b as u,l as S,e as b,i as k,s as C}from"./Accessor-BLX9ikPh.js";import{m as n,a as y,i as g,O as H}from"./subclass-BZA_h8Db.js";import{h as L}from"./UpdatingHandles-GfwcIh5z.js";import{a as E}from"./EdgeWorkerHandle-CDPg5Y22.js";import{n as f}from"./vec3f64-BLpZdpfb.js";import{h as O}from"./WorkerHandle-T1sH-Myb.js";import{V as $}from"./sphere-C77djCO6.js";import{g as _,i as I,H as V}from"./SnappingManager-BJPyuu7J.js";import{r as R}from"./VertexSnappingCandidate-B3OqL2vp.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./Evented-BHRw9x22.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./workerHelper-DDJ6ziyx.js";import"./InterleavedLayout-e-di2fxs.js";import"./BufferView-_QDXRCew.js";import"./vec2-maR1OrZI.js";import"./common-DQOJ18NT.js";import"./vec32-Dvg_eL9J.js";import"./vec42-YcqnINSP.js";import"./Util-BIfApRF5.js";import"./vec2f64-miziP1SN.js";import"./vec4f64-o2zAXfmz.js";import"./edgeProcessing-CaTaoQ4d.js";import"./deduplicate-DIJK2kGw.js";import"./mathUtils-C4_ghTv4.js";import"./Indices-DflDlU4Z.js";import"./VertexAttribute-Cq4MnHjR.js";import"./bufferLayouts-viU4JW-U.js";import"./glUtil-D0YUa0ow.js";import"./enums-D9v74xTE.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-DzBXR8Bg.js";import"./workers-D4HfeYKj.js";import"./Queue-yu3bZ02p.js";import"./assets-C43MgM-v.js";import"./index-Bh2oEzTI.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./mat4-GpOFENPA.js";import"./Polyline-D9YkgmM_.js";import"./writer-DNAwXnhG.js";import"./Extent-Bf3YTe7m.js";import"./Point-Cg0-ChZE.js";import"./cast-Bjksrh93.js";import"./mat3-BRl2i9Bz.js";import"./mat3f64-BBpwCtoL.js";import"./plane-IENfwZlB.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-CCm9z-pX.js";import"./mathUtils-BG-eq9fO.js";import"./projection-B971H0Re.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./elevationInfoUtils-BC_66_Fg.js";import"./unitConversionUtils-BMfW9yAe.js";import"./lengthUtils-DL1-FDQQ.js";import"./projectVectorToVector-G2uWGoIb.js";import"./projectPointToVector-GINIbYMz.js";import"./Color-BCS62Hs5.js";import"./colorUtils-0bJDPow9.js";import"./fieldUtils-tmQlKvWo.js";import"./geometry-D964gYQX.js";import"./timeUtils-8fb_2oAt.js";import"./Query-5Xpquc1r.js";import"./enumeration-Ba5njXdz.js";import"./jsonUtils-CEfjT-BK.js";import"./DataLayerSource-BKkswDvG.js";import"./Field-ybkHhtnK.js";import"./fieldType-BuzM0UHS.js";import"./FullTextSearch-Csd1Hktu.js";import"./Clonable-D3rtuBWg.js";import"./TimeExtent-DocT5yPf.js";import"./InputManager-Ba9xzDpe.js";import"./signal-D4lghLjV.js";import"./keybindings-DoOdil3D.js";import"./utils-BpB3MnW1.js";import"./Version-BSlAgupz.js";import"./geodesicUtils-FCYOaNwu.js";import"./geometry2dUtils-DdyQE7AQ.js";import"./screenUtils-_ZIvrt5o.js";import"./viewUtils-DrPohWV3.js";import"./PointSnappingHint-D7X20mlb.js";let d=class extends u{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new x(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,{point:o}=e,s=P;this.renderCoordsHelper.toRenderCoords(o,r.spatialReference,s);const l=e.distance,p=typeof l=="number"?l:l.distance,m=await this._workerHandle.invoke({bounds:$(s[0],s[1],s[2],p),returnEdge:e.returnEdge,returnVertex:e.vertexMode!=="none"},t);return m.candidates.sort((h,v)=>h.distance-v.distance),m.candidates.map(h=>this._convertCandidate(r,h))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new I({objectId:t.objectId,targetPoint:_(this._convertRenderCoordinate(e,t.target)),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new R({objectId:t.objectId,targetPoint:_(this._convertRenderCoordinate(e,t.target)),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const r=f();return this.renderCoordsHelper.fromRenderCoords(t,r,e),V(r)}async _fetchAllEdgeLocations(e,t){const r=[],o=[];for(const{id:s,uid:l}of e.components)this._ids.has(s)&&r.push((async()=>{const p=await this.fetchEdgeLocations(s,t.signal),m=p.locations.buffer;return o.push(m),{id:s,uid:l,objectIds:p.objectIds,locations:m,origin:p.origin,type:p.type}})());return{result:{components:(await Promise.all(r)).filter(({id:s})=>this._ids.has(s))},transferList:o}}};i([n({constructOnly:!0})],d.prototype,"renderCoordsHelper",void 0),i([n({constructOnly:!0})],d.prototype,"fetchEdgeLocations",void 0),i([n({constructOnly:!0})],d.prototype,"schedule",void 0),i([n({readOnly:!0})],d.prototype,"availability",void 0),d=i([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")],d);let x=class extends O{constructor(t,r){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:r})}};const P=f();let a=class extends u{get updating(){return this._updatingHandles.updating}constructor(e){super(e),this.availability=1,this._updatingHandles=new L,this._abortController=new AbortController}destroy(){this._tracker=S(this._tracker),this._abortController=b(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new E(w(t)),this._workerHandle=new d({renderCoordsHelper:this.view.renderCoordsHelper,schedule:w(t),fetchEdgeLocations:async(r,o)=>{if(this._tracker==null)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(r,this._edgeWorker,o)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([g(this._workerHandle),g(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){var r;if(this.destroyed)return;const e=(r=this._abortController)==null?void 0:r.signal,t=await this.getLayerView();t==null||k(e)||(this._tracker=t.trackSnappingSources({add:(o,s)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:o,bounds:s},e))},remove:o=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:o},e))}}))}};function w(e){return t=>e.immediate.schedule(t)}i([n({constructOnly:!0})],a.prototype,"getLayerView",void 0),i([n({constructOnly:!0})],a.prototype,"view",void 0),i([n({readOnly:!0})],a.prototype,"updating",null),i([n({readOnly:!0})],a.prototype,"availability",void 0),a=i([y("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],a);let c=class extends u{get updating(){return this._i3sSources.some(e=>e.updating)}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(e=>e.destroy()),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources=t.type==="building-scene"?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const r=await Promise.all(this._i3sSources.map(o=>o.fetchCandidates(e,t)));return C(t),r.flat()}refresh(){this._i3sSources.forEach(e=>e.refresh())}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map(r=>r.type==="building-component"?new a({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(r),view:e}):null).filter(H)}_getSceneLayerI3SSource(e,t){return new a({getLayerView:async()=>{const r=await e.whenLayerView(t);return r.type==="scene-layer-graphics-3d"?void 0:r},view:e})}};i([n({constructOnly:!0})],c.prototype,"layerSource",void 0),i([n({constructOnly:!0})],c.prototype,"view",void 0),i([n({readOnly:!0})],c.prototype,"updating",null),i([n({readOnly:!0})],c.prototype,"availability",void 0),c=i([y("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],c);export{c as SceneLayerSnappingSource};
