import{e as w}from"./Evented-CXIxDjmW.js";import{U as L}from"./assets-C2mb-ea2.js";import{S as M,U as D,b}from"./Accessor-D6mNnsWy.js";import{y as C,b as v,n as m}from"./subclass-BR3PhgZG.js";import{d as R}from"./reactiveUtils-BFQ0BtrB.js";import{d as J,u as y,m as p}from"./ILyr3DWasmPerSceneView-vPx4somd.js";import{h as I}from"./WorkerHandle-B37YGie-.js";import{n as V}from"./Lyr3DModule-0v2ZGPhA.js";import{R as F}from"./elevationInfoUtils-Bl7QRRwv.js";import{e as W}from"./makeScheduleFunction-CggzEh3c.js";import"./index-CeCSsEgo.js";import"./shared-B3wH2qpO.js";import"./workers-8Q6jrI18.js";import"./Queue-DpHko4Yk.js";import"./intl-Dpfm8vPB.js";import"./Promise-CZrWwByK.js";import"./jsonMap-DCC6W5ex.js";import"./Point-DB4Hp4hH.js";import"./writer-3zufXUNV.js";import"./unitConversionUtils-Dl04YuQU.js";import"./lengthUtils-D7_DvYH0.js";class P extends I{constructor(t){super("Lyr3DWorker","process",{process:i=>i.inputs},t,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}}var o,a;(function(e){e[e.Lifetime=0]="Lifetime",e[e.Jobs=1]="Jobs",e[e.Renderables=2]="Renderables"})(o||(o={})),function(e){e[e.Critical=0]="Critical",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Info=3]="Info"}(a||(a={}));let g=class extends M{constructor(e){super(e),this._lyr3DMainPromise=null,this._lyr3DMain=null,this._layers=new Map,this._debugFlags=new Set,this._debugLevel=a.Critical,this._wasmNotLoaded="method requiring WASM was called when WASM isn't loaded",this._pulseTaskHandle=null,this._session=null,this._debugFlags.add(o.Lifetime),this._debugFlags.add(o.Jobs),this._debugFlags.add(o.Renderables)}_debugLog(e,t,i,r=!0){if(this._debugFlags.has(e)&&this._debugLevel>=t){const s=r?`[js] ${i}`:`${i}`;t===a.Critical||t===a.Error?m.getLogger(this).error(s):t===a.Warning&&m.getLogger(this).warn(s),m.getLogger(this).info(s)}}initialize(){this._debugLevel>a.Warning&&(m.getLogger(this).level="info"),this._debugLog(o.Lifetime,a.Info,"Lyr3DWasmPerSceneView.initialize()"),this.addHandles([R(()=>{var e;return(e=this.view.state)==null?void 0:e.contentCamera},()=>this._updateWasmCamera())]),this._pulseTaskHandle=D({preRender:()=>this._pulseTask()})}destroy(){var t;this._debugLog(o.Lifetime,a.Info,"Lyr3DWasmPerSceneView.destroy()"),this._lyr3DMain&&(this._layers.forEach(i=>{i.abortController.abort()}),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);const e=this._worker;e&&e.destroyWasm().then(()=>{var i;(i=this._worker)==null||i.destroy(),this._worker=null}),(t=this._pulseTaskHandle)==null||t.remove(),this._pulseTaskHandle=null}add3DTilesLayerView(e){return this._lyr3DMain?this._add3DTilesLayerView(e):(this._debugLog(o.Lifetime,a.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),J)}remove3DTilesLayerView(e){if(!this._lyr3DMain)return this._debugLog(o.Lifetime,a.Error,this._wasmNotLoaded),0;this._doRemoveLayerView(e);const t=this._layers.size;return t===0&&(this._debugLog(o.Lifetime,a.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy()),t}setEnabled(e,t){if(!this._lyr3DMain)return void this._debugLog(o.Lifetime,a.Error,this._wasmNotLoaded);const i=this._layers.get(e.wasmLayerId);i&&(this._lyr3DMain.set_enabled(e.wasmLayerId,t),i.needMemoryUsageUpdate=!0,i.needFrame=!0,i.layerView.updatingFlagChanged())}setLayerOffset(e,t){if(!this._lyr3DMain)return void this._debugLog(o.Lifetime,a.Error,this._wasmNotLoaded);this._layers.get(e.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(e.wasmLayerId,t)}getAttributionText(){return this._lyr3DMain?this._lyr3DMain.get_current_attribution_text().split("|"):(this._debugLog(o.Lifetime,a.Error,this._wasmNotLoaded),[])}onRenderableEvicted(e,t,i){if(!this._lyr3DMain)return void this._debugLog(o.Lifetime,a.Error,this._wasmNotLoaded);this._layers.get(e.wasmLayerId)&&this._lyr3DMain.on_renderable_evicted(e.wasmLayerId,t,i)}isUpdating(e){if(!this._lyr3DMain&&this._lyr3DMainPromise)return!0;const t=this._layers.get(e);return!!t&&(t.outstandingJobCount>0||t.outstandingRenderableCount>0||t.needFrame)}initializeWasm(){return this._lyr3DMain?Promise.resolve():(this._debugLog(o.Lifetime,a.Info,"Lyr3DWasmPerSceneView.initializeWasm()"),this._lyr3DMainPromise||(this._lyr3DMainPromise=V().then(e=>{var _,c,f;this._lyr3DMain=e,this._lyr3DMainPromise=null;const t=this._lyr3DMain.addFunction(this._onNewJob.bind(this),"v"),i=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),r=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),s=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),l=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),h=this.view.viewingMode==="global",n=(_=this.view.renderSpatialReference)!=null&&_.isWebMercator?3857:((c=this.view.renderSpatialReference)==null?void 0:c.wkid)??-1,u=(f=this.view.heightModelInfo)==null?void 0:f.heightModel,d=!u||u==="gravity-related-height";return this._lyr3DMain.initialize_lyr3d_wasm(l,t,i,r,s,h,d,n,this._debugLevel)?(this._worker=new P(W(this.view.resourceController)),this._worker.promise?this._worker.promise:void 0):(this._lyr3DMain=null,void this._debugLog(o.Lifetime,a.Critical,"Lyr3d Main WASM failed to initialize",!1))}).catch(e=>{this._debugLog(o.Lifetime,a.Critical,`Lyr3d WASM failed to download error = ${e}`,!1)})),this._lyr3DMainPromise)}_pulseTask(){if(this._lyr3DMain){let e=0,t=0;this._layers.forEach(s=>{e+=s.layerView.usedMemory,t+=s.layerView.unloadedMemory}),e/=1048576,t/=1048576;const i=this.view.resourceController.memoryController,r=i.usedMemory*i.maxMemory-e;this._lyr3DMain.frame_pulse(i.memoryFactor,e,t,r,i.maxMemory),this._layers.forEach(s=>{s.needFrame===!0&&(s.needFrame=!1,s.layerView.updatingFlagChanged())})}}_incrementJobCount(e){e.outstandingJobCount+=1,e.outstandingJobCount===1&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_decrementJobCount(e){e.outstandingJobCount-=1,e.outstandingJobCount===0&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_incrementRenderableCount(e){e.outstandingRenderableCount+=1,e.outstandingJobCount<1&&e.outstandingRenderableCount===1&&e.layerView.updatingFlagChanged()}_decrementRenderableCount(e){e.outstandingRenderableCount-=1,e.outstandingJobCount<1&&e.outstandingRenderableCount===0&&e.layerView.updatingFlagChanged()}_onJobFailed(e,t,i){t.error.length&&this._debugLog(o.Jobs,a.Error,t.error,!1),this._lyr3DMain&&this._lyr3DMain.on_job_failed(i.jobId,i.desc),this._decrementJobCount(e)}_onJobSucceeded(e,t,i){if(this._lyr3DMain){const r=t.data.byteLength,s=this._lyr3DMain._malloc(r);new Uint8Array(this._lyr3DMain.HEAPU8.buffer,s,r).set(t.data),this._lyr3DMain.on_job_completed(i.jobId,t.jobDescJson,s,r),this._lyr3DMain._free(s)}this._decrementJobCount(e)}_getRequestPromises(e,t,i){const r=[];for(const s of e){const l=new URL(s),h=l.searchParams.get("session");h?this._session=h:!this._session||l.origin===i.origin&&l.pathname===i.pathname||l.searchParams.append("session",this._session),r.push(L(l.toString(),t).then(n=>n.data))}return r}_onNewJob(){const e=this._lyr3DMain.get_next_job(),t=this._layers.get(e.layerId);if(!t)return;this._incrementJobCount(t);const i=t.abortController.signal,r={responseType:"array-buffer",signal:i,query:{...t.customParameters,token:t.apiKey}},s={inputs:[],jobDescJson:e.desc,isMissingResourceCase:!1},l=new URL(t.layerView.layer.url),h=this._getRequestPromises(e.urls,r,l);Promise.all(h).then(n=>(s.inputs=n,this._worker.invoke(s,i))).then(n=>n).catch(n=>(b(n)?this._debugLog(o.Jobs,a.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(o.Jobs,a.Error,`job ${e.jobId} failed with error ${n}.`),{status:y.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]})).then(n=>{if(n.status===y.Failed)this._onJobFailed(t,n,e);else if(n.status===y.Succeeded)this._onJobSucceeded(t,n,e);else if(n.status===y.MissingInputs){const u=this._getRequestPromises(n.missingInputUrls,r,l);Promise.all(u).then(d=>{s.jobDescJson=n.jobDescJson,n.originalInputs?s.inputs=n.originalInputs:s.inputs=[],s.isMissingResourceCase=!0;for(const _ of d)s.inputs.push(_);return this._worker.invoke(s,i)}).then(d=>{d.status===y.Failed?this._onJobFailed(t,d,e):d.status===y.Succeeded&&this._onJobSucceeded(t,d,e)}).catch(d=>{this._decrementJobCount(t),b(d)?this._debugLog(o.Jobs,a.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(o.Jobs,a.Error,`job ${e.jobId} failed with error2 ${d}.`),this._lyr3DMain&&this._lyr3DMain.on_job_failed(e.jobId,e.desc)})}})}_onNewRenderable(){const e=this._lyr3DMain.get_next_renderable(),t=e.meshData;if(t.data&&t.data.byteLength>0){const r=t.data.slice();t.data=r}const i=this._layers.get(e.layerId);i&&(this._incrementRenderableCount(i),i.layerView.createRenderable(e).then(r=>{this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!0,e.layerId,e.handle,r.memUsageBytes),this._decrementRenderableCount(i)}).catch(r=>{b(r)||this._debugLog(o.Renderables,a.Error,`createRenderable failed with error ${r}.`),this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!1,e.layerId,e.handle,0),this._decrementRenderableCount(i)}))}_freeRenderables(e,t,i){if(i<1)return;const r=this._layers.get(e);if(!r)return;const s=r.layerView,l=[],h=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,i);for(let n=0;n<i;++n)l.push(h[n]);for(let n=0;n<i;++n)s.freeRenderable(l[n])}_setRenderableVisibility(e,t,i,r){if(r<1)return;const s=this._layers.get(e);if(!s)return;const l=s.layerView,h=[],n=[],u=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,r),d=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,i,r);for(let _=0;_<r;++_)h.push(u[_]),n.push(d[_]===1);l.setRenderableVisibility(h,n,r)}_onWasmError(e,t,i,r){this._lyr3DMain&&this._debugLog(i,r,this._lyr3DMain.UTF8ToString(e,t),!1)}_doRemoveLayerView(e){const t=this._layers.get(e.wasmLayerId);return!!t&&(t.abortController.abort(),this._lyr3DMain.remove_layer(e.wasmLayerId),this._layers.delete(e.wasmLayerId),!0)}_add3DTilesLayerView(e){const t=e.layer;if(!t.url)return p;const i=this._lyr3DMain.get_next_layer_id(),r=new AbortController;this._layers.set(i,{layerView:e,abortController:r,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0,customParameters:t.customParameters,apiKey:t.apiKey,needFrame:!1});const s=F(t.elevationInfo);return this._lyr3DMain.add_layer(t.url,i,s)?(this._updateWasmCamera(),i):(this._layers.delete(i),p)}_updateWasmCamera(){var d;const e=(d=this.view.state)==null?void 0:d.contentCamera;if(!e||!this._lyr3DMain)return;const{eye:t,center:i,up:r,near:s,far:l,fovY:h}=e,n=[e.viewport[2],e.viewport[3]],u=e.width/e.height;this._lyr3DMain.set_camera_parameters({eye:t,center:i,up:r,near:s,far:l,fov:h,aspectRatio:u,viewport:n})}};w([C({constructOnly:!0})],g.prototype,"view",void 0),g=w([v("esri.layers.Lyr3DWasmPerSceneView")],g);const ee=g;export{ee as default};
