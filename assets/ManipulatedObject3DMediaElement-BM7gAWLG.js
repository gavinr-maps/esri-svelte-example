import{e as n,o as E}from"./Evented-CXIxDjmW.js";import{y as i,b as y,$ as _,O as f}from"./subclass-BR3PhgZG.js";import{P,d as b,C as x,A as $,v as j}from"./reactiveUtils-BFQ0BtrB.js";import"./geometry-DpwwkAX1.js";import{S as v}from"./Accessor-D6mNnsWy.js";import{h as O}from"./UpdatingHandles-CMtXpTiG.js";import{N as R,K as G,I as S}from"./projection-A9yUaaTs.js";import{E as H}from"./EditGeometryOperations-BgVEmauk.js";import{j as V}from"./Polyline-D97hl-6E.js";import{_ as A}from"./Point-DB4Hp4hH.js";import{x as D,n as N}from"./mathUtils-ClvKsMak.js";import{c as T}from"./projectPointToVector-D3506wm2.js";import{b as z,a as I}from"./VideoElement-BwkhHcv_.js";import"./shared-B3wH2qpO.js";import"./Extent-DHjqVB-p.js";import"./jsonMap-DCC6W5ex.js";import"./index-CeCSsEgo.js";import"./projectBuffer-vsa0P_cF.js";import"./geodesicConstants-XRAvAZCD.js";import"./compilerUtils-BA04t1lN.js";import"./vec2-B_ymkwGp.js";import"./vec2f64-Diu2Kaa8.js";import"./vec42-B1mBkh1w.js";import"./vec4f64-CBQL1T0x.js";import"./ViewingMode-Dodu7ZZk.js";import"./plane-Bz78OrLf.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-BrpT0VRp.js";import"./mathUtils-kvswLROa.js";import"./geometry2dUtils-BraNT6Fs.js";import"./writer-3zufXUNV.js";import"./assets-C2mb-ea2.js";import"./imageUtils-9KeT6Jbh.js";import"./uuid-fwrPAdZb.js";import"./resourceExtension-CNyCBDXT.js";import"./persistableUrlUtils-BcifXQ1Z.js";import"./Identifiable-BLvpQbOc.js";import"./Portal-liet8xHC.js";import"./Promise-CZrWwByK.js";import"./MultiOriginJSONSupport-DjAXzJun.js";import"./Clonable-cKbRam6-.js";import"./perspectiveUtils-B6H5JOMW.js";import"./normalizeUtilsSync-BELDWNln.js";import"./jsonUtils-Cma_7A64.js";import"./normalizeUtilsCommon-tgSpcwHH.js";import"./mat3-DRqs2t5W.js";import"./screenUtils-PfxkaaMN.js";let d=class extends v{get operations(){return this._operations}get updating(){return this._updatingHandles.updating}constructor(e){super(e),this._updatingHandles=new O}initialize(){this.addHandles([_(this._updatingHandles),this._updatingHandles.add(()=>{const e=this.element.georeference;return(e==null?void 0:e.type)==="control-points"?e.controlPoints:null},e=>this._elementControlPointsChanged(e),P)])}_elementControlPointsChanged(e){if(this._updatedElementControlPoints===e)return;const t=e==null?void 0:e.map(({mapPoint:r})=>r).filter(f),o=this.view.spatialReference;this._updatingHandles.addPromise(this._whenProjected(t,o,r=>{if(!r)return void this._replaceOperations(null);const{_operations:s}=this,m=new V({rings:[r.map(({x:h,y:p})=>[h,p])],spatialReference:o});s!=null&&s.trySetGeometry(m)?this.onModifiedExternally():this._replaceOperations(H.fromGeometry(m,this.view.state.viewingMode))}))}_operationsGeometryChanged(){var h;const{element:{georeference:e},_operations:t}=this;if(!t||!e||e.type!=="control-points"||!e.controlPoints)return;const o=t.data.geometry,r=e.controlPoints.map(({mapPoint:p})=>p).filter(f);if(((h=o.rings[0])==null?void 0:h.length)!==r.length)return void this._updateElementControlPoints(null);const s=o.rings[0].map(([p,u])=>new A({x:p,y:u,spatialReference:o.spatialReference})),m=r.map(({spatialReference:p})=>p);this._updatingHandles.addPromise(this._whenProjected(s,m,p=>this._updateElementControlPoints(p)))}_updateElementControlPoints(e){var r;const{georeference:t}=this.element;if(!t||!e||t.type!=="control-points"||((r=t.controlPoints)==null?void 0:r.length)!==(e==null?void 0:e.length))return;e||(t.controlPoints=null);const o=t.controlPoints;if((o==null?void 0:o.length)===e.length)for(let s=0;s<o.length;s++)o[s].mapPoint=e[s]}async _whenProjected(e,t,o){if(!e)return void o(e);const{_operations:r,element:{georeference:s}}=this,m=e.map(({spatialReference:u})=>u),h=Array.isArray(t)?t:new Array(m.length).fill(t);await R(Array.from(m).map((u,g)=>({source:u,dest:h[g]})));const p=e.map((u,g)=>G(u,h[g]));r===this._operations&&s===this.element.georeference&&o(p)}_replaceOperations(e){this._operations&&(this.removeHandles(this._operations),this._operations.destroy()),this._operations=e,e&&this.addHandles(e.data.on("change",()=>this._operationsGeometryChanged()),e)}};n([i({constructOnly:!0})],d.prototype,"view",void 0),n([i({constructOnly:!0})],d.prototype,"layer",void 0),n([i({constructOnly:!0})],d.prototype,"element",void 0),n([i({constructOnly:!0})],d.prototype,"onModifiedExternally",void 0),n([i()],d.prototype,"_operations",void 0),n([i()],d.prototype,"operations",null),n([i()],d.prototype,"updating",null),d=n([y("esri.views.3d.interactive.editingTools.media.MediaElementControllerControlPoints")],d);let c=class extends v{get operations(){return this._operations}get updating(){return this._updatingHandles.updating}constructor(e){super(e),this._updatingHandles=new O}initialize(){this.addHandles([_(this._updatingHandles),this._updatingHandles.add(()=>{var e;return(e=this.element.georeference)==null?void 0:e.coords},e=>this._elementCoordinatesChanged(e),P)])}_elementCoordinatesChanged(e){this._updatedElementCoordinates!==e&&this._updatingHandles.addPromise(this._whenProjected(e,this.view.spatialReference,t=>{if(!t)return void this._replaceOperations(null);const{_operations:o}=this;o!=null&&o.trySetGeometry(t)?this.onModifiedExternally():this._replaceOperations(H.fromGeometry(t,this.view.state.viewingMode))}))}_operationsGeometryChanged(){const{element:{georeference:e},_operations:t}=this;if(!t||!e)return;const o=t.data.geometry;if(!e.coords)return void this._updateElementCoordinates(o);const r=e.coords.spatialReference;this._updatingHandles.addPromise(this._whenProjected(o,r,s=>this._updateElementCoordinates(s)))}_updateElementCoordinates(e){const{georeference:t}=this.element;t&&(t.coords=e,this._updatedElementCoordinates=t.coords)}async _whenProjected(e,t,o){if(!e)return void o(e);const{_operations:r,element:{georeference:s}}=this,m=await S(e,t);r===this._operations&&s===this.element.georeference&&o(m)}_replaceOperations(e){this._operations&&(this.removeHandles(this._operations),this._operations.destroy()),this._operations=e,e&&this.addHandles(e.data.on("change",()=>this._operationsGeometryChanged()),e),this.onModifiedExternally()}};n([i({constructOnly:!0})],c.prototype,"view",void 0),n([i({constructOnly:!0})],c.prototype,"layer",void 0),n([i({constructOnly:!0})],c.prototype,"element",void 0),n([i({constructOnly:!0})],c.prototype,"onModifiedExternally",void 0),n([i()],c.prototype,"_operations",void 0),n([i()],c.prototype,"operations",null),n([i()],c.prototype,"updating",null),c=n([y("esri.views.3d.interactive.editingTools.media.MediaElementControllerShape")],c);function L(e,t,o){return M(e.allLayerViews.find(r=>r.layer===t),o)}function M(e,t){if(!e||e.type!=="media-3d"||e.suspended)return!1;const o=e.layer.source;return!!o&&(o instanceof z||o instanceof I?o===t:"hasElement"in o&&o.hasElement(t))}let a=class extends v{grabbableForEvent(){return!0}constructor(e){super(e),this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.grabbing=!1,this.dragging=!1,this.hovering=!0,this.selected=!1,this.cursor=null,this.consumesClicks=!0,this.events=new E.EventEmitter,this.addHandles(b(()=>this.selected,t=>this.events.emit("select-changed",{action:t?"select":"deselect"}),x))}destroy(){this._set("view",null)}intersectionDistance(e){const{view:t,layer:o,element:r}=this;if(!L(t,o,r))return null;const s=t.toMap(e,{include:{layer:o,element:r}});return s&&T(s,w,t.renderSpatialReference)?D(w,t.state.camera.eye):null}onElevationChange(){}onViewChange(){}};n([i({constructOnly:!0,nonNullable:!0})],a.prototype,"element",void 0),n([i({constructOnly:!0,nonNullable:!0})],a.prototype,"layer",void 0),n([i({constructOnly:!0,nonNullable:!0})],a.prototype,"view",void 0),n([i()],a.prototype,"interactive",void 0),n([i()],a.prototype,"selectable",void 0),n([i()],a.prototype,"grabbable",void 0),n([i()],a.prototype,"grabbing",void 0),n([i()],a.prototype,"dragging",void 0),n([i()],a.prototype,"hovering",void 0),n([i()],a.prototype,"selected",void 0),n([i()],a.prototype,"cursor",void 0),a=n([y("esri.views.3d.interactive.editingTools.media.MediaElementManipulator3D")],a);const w=N(),C=Symbol();let l=class extends E.EventedAccessor{get operations(){var e;return(e=this._controller)==null?void 0:e.operations}get elevationInfo(){return{mode:"on-the-ground",offset:0}}get _layerView(){const e=this.view.allLayerViews.find(t=>t.layer===this.layer);return(e==null?void 0:e.type)==="media-3d"?e:null}get visible(){return M(this._layerView,this.element)}get isDraped(){return!0}get origin(){return null}get updating(){var e;return!!((e=this._controller)!=null&&e.updating)}get _controllerClass(){var e;return this.tool==="transform"||((e=this.element.georeference)==null?void 0:e.type)!=="control-points"?c:d}constructor(e){super(e),this.tool="transform"}initialize(){this.addHandles([b(()=>this._controllerClass,e=>this._updateController(e),$),j(()=>this._layerView,"element-render-changed",({element:e})=>{this.element===e&&this.emit("committed")})])}toMap(e){const{layer:t,element:o}=this;return this.view.toMap(e,{include:{layer:t,element:o}})}createManipulator(e){const{view:t,layer:o,element:r}=this;return new a({view:t,layer:o,element:r,...e})}_updateController(e){if(this._controller&&this._controller instanceof e)return;this.removeHandles(C);const{view:t,layer:o,element:r}=this,s=()=>{this.emit("modified-externally")};this._controller=new e({view:t,layer:o,element:r,onModifiedExternally:s}),s(),this.addHandles(_(this._controller),C)}};n([i({constructOnly:!0})],l.prototype,"view",void 0),n([i({constructOnly:!0})],l.prototype,"layer",void 0),n([i({constructOnly:!0})],l.prototype,"element",void 0),n([i()],l.prototype,"tool",void 0),n([i()],l.prototype,"_controller",void 0),n([i()],l.prototype,"elevationInfo",null),n([i()],l.prototype,"_layerView",null),n([i()],l.prototype,"visible",null),n([i()],l.prototype,"updating",null),n([i()],l.prototype,"_controllerClass",null),l=n([y("esri.views.3d.interactive.editingTools.ManipulatedObject3DMediaElement")],l);export{l as ManipulatedObject3DMediaElement};
