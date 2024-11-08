import{r as a}from"./tslib.es6-B3Jf3DVX.js";import{b as c}from"./Accessor-BLX9ikPh.js";import{watch as h,initial as f,whenOnce as d}from"./reactiveUtils-C5zUhJQJ.js";import{m as s,a as u}from"./subclass-BZA_h8Db.js";import{s as g}from"./cast-Bjksrh93.js";import{_ as B,J as _,W as R}from"./projection-B971H0Re.js";import{s as l}from"./Point-Cg0-ChZE.js";import{b as o,m as x,j as v,O as b}from"./basemapUtils-B9TjOm47.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./Evented-BHRw9x22.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./index-Bh2oEzTI.js";import"./vec3f64-BLpZdpfb.js";import"./Extent-Bf3YTe7m.js";import"./Polyline-D9YkgmM_.js";import"./writer-DNAwXnhG.js";import"./mathUtils-C4_ghTv4.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./assets-C43MgM-v.js";import"./jsonMap-0cxwUWs2.js";import"./Basemap-DVYOaWHz.js";import"./collectionUtils-D_lHIu88.js";import"./Loadable-BabW5Xcc.js";import"./Promise-B2Hu02L7.js";import"./loadAll-B6mYSptb.js";import"./Portal-C10FKnaA.js";import"./locale-C9TlLpzi.js";import"./PortalItem-DzgXrpyc.js";import"./persistableUrlUtils-fa1mAujs.js";import"./messages-OmQvZhAg.js";import"./writeUtils-Dz7BsE1e.js";import"./layerUtils-BrNoooE9.js";import"./utils-93yNk4Xc.js";import"./colorUtils-0bJDPow9.js";import"./screenUtils-_ZIvrt5o.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-GpOFENPA.js";import"./common-DQOJ18NT.js";let t=class extends c{constructor(e){super(e),this._basemapCache={},this._loadingProjectionEngine=!1,this.nextBasemap=o("hybrid",this._basemapCache),this.view=null}initialize(){h(()=>this.nextBasemap,e=>{e&&!e.loaded&&e.load().catch(()=>{})},f)}destroy(){this.view=null,x(this._basemapCache),this._basemapCache=null}get _nextBasemapSpatialReferenceTask(){return v(this.view,this.nextBasemap)}get _viewSpatialReferenceLocked(){const{view:e}=this;return!e||!("spatialReferenceLocked"in e)||e.spatialReferenceLocked}get activeBasemap(){var e,i;return o(((i=(e=this.view)==null?void 0:e.map)==null?void 0:i.basemap)??"topo-vector",this._basemapCache)}castNextBasemap(e){return o(e,this._basemapCache)}get state(){const{view:e}=this;if(!(e!=null&&e.ready)||this._nextBasemapSpatialReferenceTask.updating)return"disabled";const{spatialReference:i}=this._nextBasemapSpatialReferenceTask;return this._viewSpatialReferenceLocked&&i!=null&&!e.spatialReference.equals(i)?"incompatible-next-basemap":this._loadingProjectionEngine?"loading":"ready"}async toggle(){const{activeBasemap:e,nextBasemap:i,state:n,view:p}=this;if(!p||n==="disabled"||n==="incompatible-next-basemap")return;const m=this._viewSpatialReferenceLocked;if(!m){if(await d(()=>!this._nextBasemapSpatialReferenceTask.updating),i!==this.nextBasemap||e!==this.activeBasemap)return;const{spatialReference:r}=this._nextBasemapSpatialReferenceTask;if(r==null||l(p.spatialReference,r)||B()||_(p.spatialReference,r)||(this._loadingProjectionEngine=!0,await R(),this._loadingProjectionEngine=!1),i!==this.nextBasemap||e!==this.activeBasemap)return}p.map.basemap=i,m||this._nextBasemapSpatialReferenceTask.spatialReference==null||l(p.spatialReference,this._nextBasemapSpatialReferenceTask.spatialReference)||(p.spatialReference=this._nextBasemapSpatialReferenceTask.spatialReference),this.nextBasemap=e}static getThumbnailUrl(e){return b(e)}};a([s()],t.prototype,"_loadingProjectionEngine",void 0),a([s({readOnly:!0})],t.prototype,"_nextBasemapSpatialReferenceTask",null),a([s({readOnly:!0})],t.prototype,"_viewSpatialReferenceLocked",null),a([s({readOnly:!0})],t.prototype,"activeBasemap",null),a([s()],t.prototype,"nextBasemap",void 0),a([g("nextBasemap")],t.prototype,"castNextBasemap",null),a([s({readOnly:!0})],t.prototype,"state",null),a([s()],t.prototype,"view",void 0),a([s()],t.prototype,"toggle",null),t=a([u("esri.widgets.BasemapToggle.BasemapToggleViewModel")],t);const le=t;export{le as default};