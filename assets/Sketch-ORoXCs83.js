const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-BwrklJA_.js","./geometryEngineBase-yFIvKOkM.js","./_commonjsHelpers-DCkdB7M8.js","./json-Wa8cmqdu.js","./calcite-action-Bys6x4p_.js","./action-D0Er9Ef6.js","./jsxFactory-CJa39Fro.js","./tslib.es6-B3Jf3DVX.js","./intl-CChhNOV8.js","./date-DlqISzcw.js","./jsonMap-0cxwUWs2.js","./subclass-BZA_h8Db.js","./locale-C9TlLpzi.js","./messages-OmQvZhAg.js","./Accessor-BLX9ikPh.js","./assets-C43MgM-v.js","./index-Bh2oEzTI.js","./index-2kwcjS9-.css","./Evented-BHRw9x22.js","./Promise-B2Hu02L7.js","./reactiveUtils-C5zUhJQJ.js","./asyncUtils-CWX51uTe.js","./Collection-CEdjem1-.js","./shared-B3wH2qpO.js","./SimpleObservable-KocWTzVy.js","./uuid-fwrPAdZb.js","./cast-Bjksrh93.js","./dom-D_AJDzAj.js","./interactive-y84HQRWL.js","./loadable-DM18hPdE.js","./locale-A4FuYD8q.js","./key-D63ExP77.js","./observers-D2xgmA06.js","./component-6CIDVndn.js","./t9n-D0ry3MEw.js","./icon-BQO9J86c.js","./loader-C-zIPscB.js","./calcite-icon-Cu0W9dtm.js"])))=>i.map(i=>d[i]);
import{_ as B}from"./index-Bh2oEzTI.js";import{r as s}from"./tslib.es6-B3Jf3DVX.js";import{s as ce}from"./intl-CChhNOV8.js";import{m as r,a as $,e as J,n as R,t as F}from"./subclass-BZA_h8Db.js";import{b as G,q as X,D as U,j as E,C as pe,m as de,l as I,Y as N}from"./Accessor-BLX9ikPh.js";import{watch as A,syncAndInitial as j,when as ue}from"./reactiveUtils-C5zUhJQJ.js";import{b as he}from"./isSupportedObject-6I_Nw0mS.js";import{n as c,e as V,B as ee,r as te,u as W}from"./jsxFactory-CJa39Fro.js";import{c as me}from"./SketchViewModel-BKa9ySXO.js";import{n as oe,v as ve,k as ye}from"./SnappingControls-ClZP8Zqn.js";import{e as L}from"./globalCss-CZa70j6i.js";import{s as ge}from"./cast-Bjksrh93.js";import{o as z}from"./Evented-BHRw9x22.js";import{r as _e,s as ie,a as se,u as fe,i as we}from"./layerUtils-BrNoooE9.js";import{r as q}from"./layerUtils-BS1Di3Pm.js";import{l as D}from"./layerViewUtils-DhFEu8Rd.js";import"./geometry-D964gYQX.js";import{d as be}from"./asyncUtils-CWX51uTe.js";import{V as Te}from"./Collection-CEdjem1-.js";import{c as Oe}from"./screenUtils-_ZIvrt5o.js";import{K,P as Me,h as Ce,b as $e,q as ke,s as Se,c as Ae,v as Be}from"./Polyline-D9YkgmM_.js";import{o as Ee}from"./mat2df64-CBKYtunK.js";import{F as Ie,u as Q,W as xe}from"./surfaceCoordinateSystems-DhFxihAh.js";import{L as De,T as Re,v as Ne,b as Ge}from"./createUtils-ibzYx0GK.js";import{n as He}from"./InteractiveToolBase-vg6J8uyT.js";import{p as x}from"./keybindings-DoOdil3D.js";import{_ as Pe}from"./fieldUtils-tmQlKvWo.js";import{o as Ve,r as Le}from"./drapedUtils-HWKOCxgF.js";import{j as Fe}from"./Point-Cg0-ChZE.js";import{e as Ue}from"./vmEvent-D4Ubqkbq.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./assets-C43MgM-v.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./SketchLabelOptions-DDQnGNSN.js";import"./angularMeasurementUtils-7e2vxqzG.js";import"./Cyclical-oTUX3aX7.js";import"./mathUtils-C4_ghTv4.js";import"./quantityUtils-D0GB2dMc.js";import"./vec2-maR1OrZI.js";import"./common-DQOJ18NT.js";import"./vec2f64-miziP1SN.js";import"./vec32-Dvg_eL9J.js";import"./vec3f64-BLpZdpfb.js";import"./projectVectorToVector-G2uWGoIb.js";import"./Extent-Bf3YTe7m.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./projectPointToVector-GINIbYMz.js";import"./projection-B971H0Re.js";import"./geodesicUtils-FCYOaNwu.js";import"./elevationInfoUtils-BC_66_Fg.js";import"./unitConversionUtils-BMfW9yAe.js";import"./lengthUtils-DL1-FDQQ.js";import"./Promise-B2Hu02L7.js";import"./uuid-fwrPAdZb.js";import"./symbols-CNimns--.js";import"./enumeration-Ba5njXdz.js";import"./writer-DNAwXnhG.js";import"./TextSymbol-D8QO_KUV.js";import"./Color-BCS62Hs5.js";import"./colorUtils-0bJDPow9.js";import"./materialUtils-DarhapKC.js";import"./opacityUtils-C68Tlu6_.js";import"./aaBoundingBox-BE7cC1jD.js";import"./persistableUrlUtils-fa1mAujs.js";import"./collectionUtils-D_lHIu88.js";import"./Portal-C10FKnaA.js";import"./Loadable-BabW5Xcc.js";import"./Clonable-D3rtuBWg.js";import"./GraphicsLayer-i3FeUJ_n.js";import"./GraphicsCollection-FfahqxsR.js";import"./Graphic-DsxsIjhH.js";import"./PopupTemplate-BHMhS05j.js";import"./ActionToggle-iT4slXc7.js";import"./Identifiable-B1UbsKNt.js";import"./jsonUtils-CEfjT-BK.js";import"./Layer-CVt7Hb5J.js";import"./TimeExtent-DocT5yPf.js";import"./timeUtils-8fb_2oAt.js";import"./BlendLayer-CXM4n_Ge.js";import"./jsonUtils-CSnQD004.js";import"./parser-CTsgEym6.js";import"./utils-93yNk4Xc.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-GpOFENPA.js";import"./ScaleRangeLayer-Bb8Ig1Hz.js";import"./ElevationInfo-CA5m_tHv.js";import"./InputManager-Ba9xzDpe.js";import"./Queue-yu3bZ02p.js";import"./signal-D4lghLjV.js";import"./SnappingManager-BJPyuu7J.js";import"./Query-5Xpquc1r.js";import"./DataLayerSource-BKkswDvG.js";import"./Field-ybkHhtnK.js";import"./fieldType-BuzM0UHS.js";import"./FullTextSearch-Csd1Hktu.js";import"./utils-BpB3MnW1.js";import"./Version-BSlAgupz.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./plane-IENfwZlB.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-CCm9z-pX.js";import"./mathUtils-BG-eq9fO.js";import"./sphere-C77djCO6.js";import"./mat3-BRl2i9Bz.js";import"./geometry2dUtils-DdyQE7AQ.js";import"./viewUtils-DrPohWV3.js";import"./hitTestSelectUtils-UXJPjatw.js";import"./screenUtils-WcqhHU65.js";import"./compilerUtils-Dw3R0f-Z.js";import"./directionModeIcons-Br5woIHu.js";import"./layerListUtils-Cb_jjipP.js";import"./LayerListViewModel-C5g5Lp46.js";import"./utils-BQBvadb7.js";import"./ListItem-D2lt9R2a.js";import"./widget-DwhGPDuv.js";import"./memoize-DsJmrG76.js";import"./ReactiveSet-BU2iaegS.js";import"./diffUtils-BP7jmOAy.js";import"./UpdatingHandles-GfwcIh5z.js";import"./dehydratedFeatureComparison-06VFTqH5.js";import"./ViewingMode-Dodu7ZZk.js";import"./EditGeometryOperations-Cl8Sbfxr.js";import"./SnappingContext-lR2hMWGP.js";import"./SnappingDragPipelineStep-rzVcndp8.js";import"./hydratedFeatures-DBKLr8hT.js";import"./Scheduler-CJu5awNf.js";import"./debugFlags-BF6Z0j0F.js";import"./SnappingOperation-CaI4DIP4.js";import"./mat2d-D9DBP-jx.js";import"./quat-4pa1e6ds.js";import"./Circle-BInHZHdw.js";import"./geometryEngine-DGiYLHJy.js";import"./geometryEngineBase-yFIvKOkM.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-C9rxSL4a.js";import"./meshVertexSpaceUtils-CXzOFlTI.js";import"./MeshLocalVertexSpace-LEHwMUnu.js";import"./interfaces-D6pIddIh.js";let b=class extends G{constructor(e){super(e),this.point=!0,this.polyline=!0,this.polygon=!0,this.rectangle=!0,this.circle=!0,this.multipoint=!0,this.mesh=!0}};s([r({type:Boolean,nonNullable:!0})],b.prototype,"point",void 0),s([r({type:Boolean,nonNullable:!0})],b.prototype,"polyline",void 0),s([r({type:Boolean,nonNullable:!0})],b.prototype,"polygon",void 0),s([r({type:Boolean,nonNullable:!0})],b.prototype,"rectangle",void 0),s([r({type:Boolean,nonNullable:!0})],b.prototype,"circle",void 0),s([r({type:Boolean,nonNullable:!0})],b.prototype,"multipoint",void 0),s([r({type:Boolean,nonNullable:!0})],b.prototype,"mesh",void 0),b=s([$("esri.widgets.Sketch.VisibleElements.CreateToolVisibilityMap")],b);let S=class extends G{constructor(e){super(e),this["rectangle-selection"]=!0,this["lasso-selection"]=!0,this["custom-selection"]=!0}};s([r({nonNullable:!0})],S.prototype,"rectangle-selection",void 0),s([r({nonNullable:!0})],S.prototype,"lasso-selection",void 0),s([r({nonNullable:!0})],S.prototype,"custom-selection",void 0),S=s([$("esri.widgets.Sketch.VisibleElements.SelectionToolVisibilityMap")],S);let g=class extends G{constructor(t){super(t),this.createTools=new b,this.directionModePicker=!1,this.duplicateButton=!0,this.labelsToggle=!0,this.selectionTools=new S,this.settingsMenu=!0,this.snappingControls=!0,this.snappingControlsElements=new oe,this.tooltipsToggle=!0,this.undoRedoMenu=!0}};s([r({type:b,nonNullable:!0})],g.prototype,"createTools",void 0),s([r({type:Boolean,nonNullable:!0})],g.prototype,"directionModePicker",void 0),s([r({type:Boolean,nonNullable:!0})],g.prototype,"duplicateButton",void 0),s([r({type:Boolean,nonNullable:!0})],g.prototype,"labelsToggle",void 0),s([r({type:S,nonNullable:!0})],g.prototype,"selectionTools",void 0),s([r({type:Boolean,nonNullable:!0})],g.prototype,"settingsMenu",void 0),s([r({type:Boolean,nonNullable:!0})],g.prototype,"snappingControls",void 0),s([r({type:oe,nonNullable:!0})],g.prototype,"snappingControlsElements",void 0),s([r({type:Boolean,nonNullable:!0})],g.prototype,"tooltipsToggle",void 0),s([r({type:Boolean,nonNullable:!0})],g.prototype,"undoRedoMenu",void 0),g=s([$("esri.widgets.Sketch.VisibleElements")],g);const ne=g;let m=class extends G{constructor(t){super(t),this.coordinates=void 0,this.strokeDash=[],this.strokeWidth=1,this.strokeColor=[0,0,0,1],this.strokeDashColor=[255,255,255,1],this.fillColor=[0,0,0,0],this.visible=!0,this.isDecoration=!0}get _strokeStyle(){const t=this.strokeColor;return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}get _strokeBackgroundStyle(){const t=this.strokeDashColor;return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}get _fillStyle(){const t=this.fillColor;return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}get _renderCoordinates(){const t=[];if(!this.coordinates)return{coordinates:t,rect:K};const o=Me(Ce($e(K),this.coordinates),2*this.strokeWidth);o[0]=Math.floor(o[0]),o[1]=Math.floor(o[1]),o[2]=Math.ceil(o[2]+.5),o[3]=Math.ceil(o[3]+.5);for(const i of this.coordinates)t.push([Math.floor(i[0]-o[0])+.5,Math.floor(i[1]-o[1])+.5]);return t.reverse(),{coordinates:t,rect:o}}render(){const{coordinates:t,rect:o}=this._renderCoordinates,i=ke(o),n=Se(o);return c("div",{classes:{"esri-outline-overlay-item":!0},styles:{left:o[0]+"px",top:o[1]+"px",width:i+"px",height:n+"px",visibility:this.visible?"visible":"hidden"}},c("svg",{height:n,styles:{display:"block"},width:i},c("polygon",{fill:this._fillStyle,points:t.map(([l,a])=>`${l},${a}`).join(" "),stroke:this._strokeBackgroundStyle,"stroke-width":this.strokeWidth}),c("polygon",{fill:"transparent",points:t.map(([l,a])=>`${l},${a}`).join(" "),stroke:this._strokeStyle,"stroke-dasharray":this.strokeDash.length?this.strokeDash.join(" "):void 0,"stroke-width":this.strokeWidth})))}renderCanvas(){}};s([r()],m.prototype,"coordinates",void 0),s([r()],m.prototype,"strokeDash",void 0),s([r()],m.prototype,"strokeWidth",void 0),s([r()],m.prototype,"strokeColor",void 0),s([r()],m.prototype,"strokeDashColor",void 0),s([r()],m.prototype,"fillColor",void 0),s([r()],m.prototype,"visible",void 0),s([r()],m.prototype,"isDecoration",void 0),s([r({readOnly:!0})],m.prototype,"_strokeStyle",null),s([r({readOnly:!0})],m.prototype,"_strokeBackgroundStyle",null),s([r({readOnly:!0})],m.prototype,"_fillStyle",null),s([r({readOnly:!0})],m.prototype,"_renderCoordinates",null),m=s([$("esri.views.overlay.OutlineOverlayItem")],m);const ze=m;let _=class extends z.EventedMixin(He){constructor(t){super(t),this._overlayItem=void 0,this.geometryType=null,this.mode=null,this.type="draw-screen"}initialize(){this.drawOperation=this._makeDrawOperation();const t=o=>this.drawOperation.on(o,i=>{this._updateVisuals(),this.emit(o,i)});this.addHandles([t("vertex-add"),t("vertex-remove"),t("vertex-update"),t("cursor-update"),t("complete")]),this.finishToolCreation()}destroy(){this.drawOperation=X(this.drawOperation),this._set("view",null)}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centeredToggled(t){this._set("centeredToggled",t),this._updateVisuals()}set enabled(t){this.drawOperation.interactive=t,this._set("enabled",t)}set uniformSizeToggled(t){this._set("uniformSizeToggled",t),this._updateVisuals()}get updating(){var t;return((t=this.drawOperation)==null?void 0:t.updating)??!1}get cursor(){return this.geometryType==="point"?"default":"crosshair"}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(t){this.destroyed||this.drawOperation.onInputEvent(t)}redo(){this.drawOperation.redo()}undo(){this.drawOperation.undo()}reset(){}_makeDrawOperation(){const{view:t}=this;return new Ie({view:t,manipulators:this.manipulators,geometryType:je(this.geometryType),drawingMode:this.mode,hasZ:!1,defaultZ:0,snapToSceneEnabled:!1,drawSurface:new Q,hasM:!1,snappingManager:null,snappingVisualizer:null,graphic:null,cursor:this.cursor})}get coordinates(){var a,d,T;const{drawOperation:t}=this;if(!(t!=null&&t.geometryIncludingUncommittedVertices.length))return[];const{coordinateHelper:o}=t,i=t.committableVertex,n=t.committedVertices.slice();i!=null&&n.push(o.pointToArray(i));const l=n.length;switch(this.geometryType){case"circle":case"rectangle":{const v=new xe(Ee,Q.spatialReference),M=this.geometryType==="circle"?De:Re,f=this.geometryType==="circle"?Ne:Ge;if(l===1&&t.isCompleted){const w=n[0],O=v.makeMapPoint(w[0]+We,w[1]);return((a=M([w,O],v,!0))==null?void 0:a.geometry.rings[0])??[]}if(l===2){const w=this.geometryType!=="rectangle",O=this.centeredToggled!==w,ae=this.geometryType!=="rectangle";return(this.uniformSizeToggled!==ae?(d=M(n,v,O))==null?void 0:d.geometry.rings[0]:(T=f(n,v,O))==null?void 0:T.geometry.rings[0])??[]}return[]}}return n}_updateVisuals(){var t;if(!this._overlayItem){const o=new ze({strokeDash:[5],strokeDashColor:[255,255,255,255]});(t=this.view.overlay)==null||t.addItem(o),this.addHandles(J(()=>{var i;(i=this.view.overlay)==null||i.removeItem(o),o==null||o.destroy(),this._overlayItem=void 0})),this._overlayItem=o}this._overlayItem.coordinates=this.coordinates}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}};function je(e){switch(e){case"polygon":case"point":return e;case"circle":case"rectangle":return"segment"}}s([r({value:!1})],_.prototype,"centeredToggled",null),s([r()],_.prototype,"drawOperation",void 0),s([r({value:!0})],_.prototype,"enabled",null),s([r({value:!1})],_.prototype,"uniformSizeToggled",null),s([r({constructOnly:!0})],_.prototype,"geometryType",void 0),s([r({constructOnly:!0})],_.prototype,"mode",void 0),s([r({readOnly:!0})],_.prototype,"type",void 0),s([r({readOnly:!0})],_.prototype,"updating",null),s([r({constructOnly:!0,nonNullable:!0})],_.prototype,"view",void 0),s([r()],_.prototype,"cursor",null),_=s([$("esri.views.draw.DrawScreenTool")],_);const We=48;async function qe(){return B(()=>import("./geometryEngineJSON-BwrklJA_.js").then(e=>e.g),__vite__mapDeps([0,1,2,3]),import.meta.url)}async function Ke(){return qe().then(({contains:e,intersects:t,overlaps:o,simplify:i})=>({contains:e,intersects:t,overlaps:o,simplify:i}))}async function Qe(e){const{currentSelection:t,selector:o,signal:i,sources:n,view:l}=e;if(!(n!=null&&n.length))return{added:[],removed:[]};const{layers:a,layerViews:d,graphicsLayers:T}=Xe(n),v=(await U(Promise.all([Ye(o,a,l,i),Je(o,d,l,i),Ze(o,T,l)]),i)).flat();if(!t)return{added:v,removed:[]};const M=t.toArray(),f=v.filter(O=>!Z(M,O)),w=M.filter(O=>!Z(v,O));return t.removeMany(w),t.addMany(f),{added:f,removed:w}}const Ze=async(e,t,o)=>it({candidates:t.flatMap(i=>i.graphics.toArray())??[],selector:e,view:o}),Ye=async(e,t,o,i)=>{const n=await E(tt({selector:e,signal:i,layers:t,view:o}));return n?re(n):[]},Je=async(e,t,o,i)=>{const n=await E(et({selector:e,signal:i,layerViews:t,view:o}));return n?re(n):[]};function re(e){const t=[];for(let o=0;o<e.length;o++){const i=e[o];i.status==="fulfilled"&&t.push(...i.value)}return t}function Xe(e){const t=[],o=[],i=[];return e.forEach(n=>{var l,a;_e(n)?t.push(n):(ie(n)||se(n))&&((l=n.layers)!=null&&l.length)?t.push(...n.layers.toArray()):fe(n)&&((a=n.sublayers)!=null&&a.length)?i.push(...n.sublayers.toArray()):we(n)?i.push(n):D(n)&&o.push(n)}),{layers:t,layerViews:o,graphicsLayers:i}}function Z(e,t){if(e.includes(t))return!0;const o=t.getObjectId(),i=o!=null,{layer:n,uid:l}=t;return i?e.some(a=>{if(n===a.layer)return o===a.getObjectId()}):e.some(a=>{if(n===a.layer)return l===a.uid})}async function et(e){const{layerViews:t,selector:o,signal:i,view:n}=e;return U(Promise.allSettled(t.map(async l=>{const a=l.createQuery(),{geometry:d}=le(o,l.layer,n);return a.outFields=["*"],a.geometry=d,a.returnGeometry=!0,a.outSpatialReference=n.spatialReference,l.queryFeatures(a,{signal:i}).then(({features:T})=>T)})),i)}async function tt(e){const{layers:t,selector:o,signal:i,view:n}=e;return U(Promise.allSettled(t.map(async l=>l.queryFeatures(ot(l.createQuery(),o,l,n),{signal:i}).then(({features:a})=>a))),i)}function le(e,t,o){const i="displayField"in t?t.displayField:null,n=Pe({displayField:i,fields:t.fields}),l=[t.objectIdField];n!=null&&t.fieldsIndex.has(n)&&l.push(n);const a="renderer"in t?Ve({renderer:t.renderer}):0;return{geometry:e.type==="point"?Le(e,a,o):e,outFields:l}}function ot(e,t,o,i){const{outFields:n,geometry:l}=le(t,o,i);return e.outFields=n,e.geometry=l,e.returnGeometry=!0,e.outSpatialReference=i.spatialReference,e}async function it(e){const{selector:t,candidates:o,view:i}=e;if(!(o!=null&&o.length)||!t)return[];const{spatialReference:n}=i,l=t,a=await Ke();return o.filter(d=>a.intersects(n,l,d.geometry))}const st=100;let k=class extends z.EventedAccessor{constructor(t){super(t),this._processTask=null,this.options=null,this.selection=new Te,this.sources=null,this._process=pe(async(o,i)=>{const{callback:n,selector:l,completed:a}=o,d=be(async T=>{var w;const{sources:v,selection:M,view:f}=this;if(!(!(v!=null&&v.length)&&!(f!=null&&f.selectionManager.sources.length))&&f){if(l&&v!=null){const O=await Qe({currentSelection:M,selector:l,signal:T,sources:v,view:f});a&&((w=f.selectionManager)==null||w.updateSelection({current:M.toArray(),...O}))}n&&n()}else M.removeAll()});return de(i,()=>d.abort()),this._processTask=d,d.promise},st)}initialize(){this._setup()}cancel(){var t;this.removeAllHandles(),(t=this._processTask)==null||t.abort()}async _setup(){const{view:t}=this;if(await t.whenReady(),this.destroyed)return;const o=this.options,i=(o==null?void 0:o.createTool)??"rectangle",n=(o==null?void 0:o.mode)??(i==="polygon"?"click":"hybrid"),l=Symbol();this._tool=new _({view:t,mode:n,geometryType:i}),o!=null&&o.selectOnComplete||this.addHandles(this._tool.on(["cursor-update","vertex-add","vertex-remove"],()=>E(this._process({selector:this._selectionArea}))),l),this.addHandles([t.on("key-down",a=>{if(!a.repeat)switch(a.key){case x.constraint:this._tool.uniformSizeToggled=!0,a.stopPropagation();break;case x.center:this._tool.centeredToggled=!0,a.stopPropagation()}}),t.on("key-up",a=>{switch(a.key){case x.constraint:this._tool.uniformSizeToggled=!1,a.stopPropagation();break;case x.center:this._tool.centeredToggled=!1,a.stopPropagation()}}),this._tool.on("complete",async a=>{this.removeHandles(l);const d=()=>{this.removeAllHandles(),this.emit("complete",{aborted:a.aborted,selection:this.selection.toArray()})};a.aborted?(this.cancel(),this.selection.removeAll(),d()):await this._process({selector:this._selectionArea,callback:d,completed:!0})})],l),this.addHandles(J(()=>t.tools.remove(this._tool))),t.addAndActivateTool(this._tool)}get _selectionArea(){const t=Oe(),o=this._tool.coordinates,i=this.view.spatialReference,n=a=>{t.x=a[0],t.y=a[1];const{x:d,y:T}=this.view.toMap(t);return[d,T]};if(o.length===1){const[a,d]=n(o[0]);return new Fe({x:a,y:d,spatialReference:i})}const l=this._tool.coordinates.map(n);if(l.length!==0)return Ae(l)||l.reverse(),new Be({spatialReference:i,rings:[l]})}};s([r()],k.prototype,"options",void 0),s([r({readOnly:!0})],k.prototype,"selection",void 0),s([r()],k.prototype,"sources",void 0),s([r({constructOnly:!0})],k.prototype,"view",void 0),k=s([$("esri.widgets.support.Selector2D.SelectionOperation")],k);const nt=k;let C=class extends z.EventedAccessor{constructor(e){super(e),this._operationHandlesGroup=null,this.activeOperation=null,this.sources=null}initialize(){this.addHandles([A(()=>this._sources,e=>{this.activeOperation&&(this.activeOperation.sources=e)})])}destroy(){this._operationHandlesGroup=I(this._operationHandlesGroup)}get _sources(){const{sources:e,view:t}=this;return t&&(e!=null&&e.length)?e.flatMap(o=>{if(D(o))return o;if(ie(o)||se(o)){const n=o.layers||[],l=n.map(a=>{const d=q(t,a)||void 0;return D(d)?d:a});return l.length?l.toArray():n.length?n.toArray():o}const i=q(t,o)||void 0;return D(i)?i:o}):[]}get layers(){return N(R.getLogger(this),"layers",{replacement:"Use SelectionToolbar.sources instead."}),this.sources}set layers(e){N(R.getLogger(this),"layers",{replacement:"Use SelectionToolbar.sources instead."}),this.sources=e}get state(){const{_sources:e,view:t}=this,o=!(e!=null&&e.length)&&!(t!=null&&t.selectionManager.sources.length);return this.activeOperation?"active":t!=null&&t.ready&&!o?"ready":"disabled"}cancel(){var e;this.state==="active"&&((e=this.activeOperation)==null||e.cancel(),this._set("activeOperation",null))}activate(e){const{_sources:t,state:o,view:i}=this,n=!(t!=null&&t.length)&&!(i!=null&&i.selectionManager.sources.length);if(o==="disabled"||n||!this.view)return;o==="active"&&this.cancel();const l=new nt({view:this.view,sources:t,options:e});return this._operationHandlesGroup=F([l.selection.on("change",a=>this.emit("selection-change",a)),l.once("complete",a=>this._onOperationComplete(a))]),this._set("activeOperation",l),l}_onOperationComplete(e){this._operationHandlesGroup=I(this._operationHandlesGroup),this._set("activeOperation",null),this.emit("complete",e)}};s([r()],C.prototype,"_sources",null),s([r({readOnly:!0})],C.prototype,"activeOperation",void 0),s([r()],C.prototype,"layers",null),s([r()],C.prototype,"sources",void 0),s([r({readOnly:!0})],C.prototype,"state",null),s([r()],C.prototype,"view",void 0),C=s([$("esri.widgets.support.SelectionToolbar.SelectionToolbarViewModel")],C);const rt=C,Y={lassoTool:!0,rectangleTool:!0},lt={createTool:"polygon",mode:"freehand"},at={createTool:"rectangle"},H="esri-selection-toolbar",P={base:H,container:`${H}__container`,toolButton:`${H}__tool-button`};let y=class extends ee{constructor(e,t){super(e,t),this._viewModelHandlesGroup=null,this.activeToolInfo=null,this.messages=null,this.toolConfigs=[],this.viewModel=new rt,this.visibleElements={...Y},this._viewModelHandlesGroup=F([this.viewModel.on("complete",o=>{this._set("activeToolInfo",null),this.emit("complete",o)})])}destroy(){this._viewModelHandlesGroup=I(this._viewModelHandlesGroup)}loadDependencies(){return te({action:()=>B(()=>import("./calcite-action-Bys6x4p_.js"),__vite__mapDeps([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]),import.meta.url),icon:()=>B(()=>import("./calcite-icon-Cu0W9dtm.js"),__vite__mapDeps([37,35,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,32]),import.meta.url)})}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get layers(){return N(R.getLogger(this),"layers",{replacement:"Use SelectionToolbar.sources instead."}),this.viewModel.sources}set layers(e){N(R.getLogger(this),"layers",{replacement:"Use SelectionToolbar.sources instead."}),this.viewModel.sources=e}get sources(){return this.viewModel.sources}set sources(e){this.viewModel.sources=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}castVisibleElements(e){return{...Y,...e}}get visibleToolCount(){const{view:e,toolConfigs:t,visibleElements:o}=this;return((t==null?void 0:t.length)??0)+((e==null?void 0:e.type)==="2d"?(o.lassoTool?1:0)+(o.rectangleTool?1:0):0)}activate(e){if(this.cancel(),this.viewModel.state!=="disabled")switch(e){case"lasso":this._activateTool("lasso");break;case"rectangle":this._activateTool("rectangle");break;default:this._activateTool(e)}}cancel(){this.viewModel.cancel(),this._set("activeToolInfo",null)}render(){return c("div",{"aria-label":this.label,class:this.classes(P.base,L.widget)},c("div",{class:P.container},this._renderDefaultTools(),this._renderCustomTools()))}_renderDefaultTools(){var e;if(((e=this.view)==null?void 0:e.type)==="2d")return[this._renderRectangleTool(),this._renderLassoTool()]}_renderCustomTools(){var e;if((e=this.toolConfigs)!=null&&e.length)return this.toolConfigs.map(({toolName:t,icon:o})=>{var i;return c("calcite-action",{active:((i=this.activeToolInfo)==null?void 0:i.toolName)===t,bind:this,class:P.toolButton,disabled:this.viewModel.state==="disabled",onclick:()=>this._onCustomToolClick(t),scale:"s",text:t,title:t},c("calcite-icon",{icon:o||"selection",scale:"s"}))})}_renderLassoTool(){const{activeToolInfo:e,messages:t,visibleElements:o}=this;if(!o.lassoTool)return;const i=t.selectByLasso;return c("calcite-action",{active:(e==null?void 0:e.toolName)==="lasso",bind:this,disabled:this.viewModel.state==="disabled",onclick:this._onLassoToolClick,scale:"s",text:i,title:i},c("calcite-icon",{icon:"lasso-select",scale:"s"}))}_renderRectangleTool(){const{activeToolInfo:e,messages:t,visibleElements:o}=this;if(!o.rectangleTool)return;const i=t.selectByRectangle;return c("calcite-action",{active:(e==null?void 0:e.toolName)==="rectangle",bind:this,disabled:this.viewModel.state==="disabled",onclick:this._onRectangleToolClick,scale:"s",text:i,title:i},c("calcite-icon",{icon:"cursor-marquee",scale:"s"}))}_onCustomToolClick(e){this._toggleTool(e)}_onLassoToolClick(){this._toggleTool("lasso")}_onRectangleToolClick(){this._toggleTool("rectangle")}_activateTool(e){const t=this._getToolOptions(e);if(!t)return;const o=this.viewModel.activate(t);o&&this._set("activeToolInfo",{toolName:e,operation:o})}_toggleTool(e){if(this.activeToolInfo){const t=this.activeToolInfo.toolName;if(this.cancel(),t===e)return}this._activateTool(e)}_getToolOptions(e){return e==="lasso"?lt:e==="rectangle"?at:this.toolConfigs.find(t=>t.toolName===e)}};s([r({readOnly:!0})],y.prototype,"activeToolInfo",void 0),s([r()],y.prototype,"label",null),s([r()],y.prototype,"layers",null),s([r(),V("esri/widgets/support/SelectionToolbar/t9n/SelectionToolbar")],y.prototype,"messages",void 0),s([r()],y.prototype,"sources",null),s([r()],y.prototype,"toolConfigs",void 0),s([r()],y.prototype,"view",null),s([r()],y.prototype,"viewModel",void 0),s([r()],y.prototype,"visibleElements",void 0),s([ge("visibleElements")],y.prototype,"castVisibleElements",null),s([r()],y.prototype,"visibleToolCount",null),y=s([$("esri.widgets.support.SelectionToolbar")],y);const ct=y,u="esri-sketch",h={base:u,verticalLayout:`${u}--vertical`,horizontalLayout:`${u}--horizontal`,panel:`${u}__panel`,infoPanel:`${u}__info-panel`,section:`${u}__section`,toolSection:`${u}__tool-section`,infoSection:`${u}__info-section`,infoCountSection:`${u}__info-count-section`,menuContainer:`${u}__menu-container`,menuHeader:`${u}__menu-header`,menuTitle:`${u}__menu-title`,featureCountBadge:`${u}__feature-count-badge`,featureCountText:`${u}__feature-count-text`,featureCountNumber:`${u}__feature-count-number`,actionToggle:`${u}__action-toggle`,actionToggleOn:`${u}__action-toggle--on`,actionTitle:`${u}__item-action-title`,actionIcon:`${u}__item-action-icon`};let p=class extends ee{constructor(e,t){super(e,t),this._activeCustomToolOptions=null,this._activeCreateOptions=null,this._menuOpen=!1,this._selectionToolbar=null,this._viewModelHandlesGroup=null,this.availableCreateTools=["point","polyline","polygon","rectangle","circle"],this.creationMode="continuous",this.customToolOptions=null,this.layout="horizontal",this.messages=null,this.messagesCommon=null,this.visibleElements=new ne,this._activateCreateTool=this._activateCreateTool.bind(this),this.viewModel=(e==null?void 0:e.viewModel)||new me}initialize(){const{layer:e,view:t}=this,o=new ct({view:(t==null?void 0:t.type)==="2d"?t:null,sources:e?[e]:null});this.addHandles([A(()=>this.viewModel,i=>{this._viewModelHandlesGroup=I(this._viewModelHandlesGroup),i&&(this._viewModelHandlesGroup=F([i.on("create",n=>{this.scheduleRender(),this._onCreateOperation(n)}),i.on("update",()=>this.scheduleRender()),i.on("delete",n=>this.emit("delete",n)),i.on("undo",()=>this.scheduleRender()),i.on("redo",()=>this.scheduleRender()),A(()=>i.layer,n=>{this._selectionToolbar&&(this._selectionToolbar.sources=n?[n]:null)}),A(()=>i.view,n=>{this._selectionToolbar&&(this._selectionToolbar.view=(n==null?void 0:n.type)==="2d"?n:null)}),A(()=>i.state,()=>this.notifyChange("state"))]))},j),ue(()=>o.activeToolInfo,()=>this.viewModel.cancel()),o.on("complete",i=>this._onSelectionOperationComplete(i)),A(()=>{const{selectionTools:i}=this.visibleElements;return{lassoTool:!!(i!=null&&i["lasso-selection"]),rectangleTool:!!(i!=null&&i["rectangle-selection"])}},i=>{Object.assign(o.visibleElements,i)},j)]),this._selectionToolbar=o}loadDependencies(){return te({action:()=>B(()=>import("./calcite-action-Bys6x4p_.js"),__vite__mapDeps([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]),import.meta.url),icon:()=>B(()=>import("./calcite-icon-Cu0W9dtm.js"),__vite__mapDeps([37,35,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,32]),import.meta.url)})}destroy(){var e;(e=this._selectionToolbar)==null||e.destroy(),this._viewModelHandlesGroup=I(this._viewModelHandlesGroup)}get activeTool(){var t;const e=(t=this._selectionToolbar)==null?void 0:t.activeToolInfo;if(e)switch(e.toolName){case"lasso":return"lasso-selection";case"rectangle":return"rectangle-selection";case"default":return"custom-selection"}return this.viewModel.activeTool}get activeTooltip(){return this.viewModel.activeTooltip}get createGraphic(){return this.viewModel.createGraphic}get defaultCreateOptions(){return this.viewModel.defaultCreateOptions}set defaultCreateOptions(e){this.viewModel.defaultCreateOptions=e}get defaultUpdateOptions(){return this.viewModel.defaultUpdateOptions}set defaultUpdateOptions(e){this.viewModel.defaultUpdateOptions=e}get icon(){return"pencil"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get labelOptions(){return this.viewModel.labelOptions}set labelOptions(e){this.viewModel.labelOptions=e}get layer(){return this.viewModel.layer}set layer(e){this.viewModel.layer=e}get snappingOptions(){return this.viewModel.snappingOptions}set snappingOptions(e){this.viewModel.snappingOptions=e}get state(){var e;return(e=this._selectionToolbar)!=null&&e.activeToolInfo?"active":this.viewModel.state}get tooltipOptions(){return this.viewModel.tooltipOptions}set tooltipOptions(e){this.viewModel.tooltipOptions=e}get updateGraphics(){return this.viewModel.updateGraphics}get valueOptions(){return this.viewModel.valueOptions}set valueOptions(e){this.viewModel.valueOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}set viewModel(e){const t=this._get("viewModel");e!==t&&(t&&X(t),this._set("viewModel",e))}get _effectiveAvailableCreateTools(){const{availableCreateTools:e,visibleElements:t}=this;return e==null?void 0:e.filter(o=>{var i;return!!((i=t.createTools)!=null&&i[o])})}create(e,t,o){const i=(o==null?void 0:o.createOptions)??t;return this._activeCreateOptions=i||null,this._activeCustomToolOptions=o,E(this.viewModel.create(e,i))}update(e,t){return E(this.viewModel.update(e,t))}complete(){this.viewModel.complete()}cancel(){var e;(e=this._selectionToolbar)==null||e.cancel(),this.viewModel.cancel(),this._activeCustomToolOptions=null}undo(){var e;this.viewModel.undo(),(e=this.view)==null||e.focus()}redo(){var e;this.viewModel.redo(),(e=this.view)==null||e.focus()}delete(){this.viewModel.delete()}duplicate(){return this.viewModel.duplicate()}render(){const{label:e,layout:t,viewModel:{state:o}}=this;return c("div",{"aria-label":e,class:this.classes(h.base,L.widget,{[L.disabled]:o==="disabled",[h.verticalLayout]:t==="vertical",[h.horizontalLayout]:t==="horizontal"})},c("div",{class:h.panel,role:"toolbar"},this._renderTopPanelContents()),c("div",{class:this.classes(h.panel,h.infoPanel)},this._renderInfoPanelContents()))}_renderTopPanelContents(){var d;const e=this.classes(h.section,h.toolSection),{_effectiveAvailableCreateTools:t,customToolOptions:o,visibleElements:i,viewModel:n}=this,l=n.updateOnGraphicClick||((d=this._selectionToolbar)==null?void 0:d.visibleToolCount),a=!(!(t!=null&&t.length)&&!(o!=null&&o.length));return[l?c("div",{class:e,key:"selection-button-container",role:"menu"},this._renderDefaultSelectionButton(),this._renderSelectionToolbar()):null,a?c("div",{class:e,role:"menu"},this._renderDrawActions(),this._renderCustomToolActions()):null,i.undoRedoMenu?c("div",{class:e,key:"undo-redo-menu-button-container",role:"menu"},this._renderUndoRedoMenuButtons()):null,i.settingsMenu?c("div",{class:h.section,key:"settings-menu-button-container"},this._renderSettingsMenuButton()):null]}_renderInfoPanelContents(){return this._menuOpen?this._renderSettingsMenu():this.updateGraphics.length?[c("div",{class:this.classes(h.section,h.infoSection,h.infoCountSection),key:"feature-count-container"},this._renderFeatureCount()),c("div",{class:this.classes(h.section,h.infoSection),key:"delete-button-container"},this._renderDuplicateButton(),this._renderDeleteButton())]:void 0}_renderSettingsMenu(){const{messagesCommon:e,snappingOptions:t,view:o,viewModel:i,visibleElements:n}=this,l={directionModePicker:n.directionModePicker,labelsToggle:n.labelsToggle,tooltipsToggle:n.tooltipsToggle};return c("div",{class:h.menuContainer,"data-testid":"menu",key:"settings-menu-container",role:"menu"},c("header",{class:h.menuHeader,key:"settings-menu-header"},c("span",{class:h.menuTitle},e.settings)),Object.values(l).includes(!0)?c(ye,{sketchOptions:i.sketchOptions,viewType:o==null?void 0:o.type,visibleElements:l}):void 0,n.snappingControls&&o&&t?c(ve,{snappingManager:this.viewModel.snappingManager,snappingOptions:t,view:o,visibleElements:n.snappingControlsElements}):void 0)}_renderFeatureCount(){const{layout:e,messages:t,updateGraphics:{length:o}}=this,i=ce(t.selectedCount,{count:o});return c("div",{"aria-label":i,class:h.featureCountBadge},c("span",{class:h.featureCountNumber},e==="vertical"?o:i))}_renderDuplicateButton(){if(!this.visibleElements.duplicateButton)return;const e=this.messages,t=this.updateGraphics.length>1?e.duplicateFeatures:e.duplicateFeature;return c("calcite-action",{bind:this,onclick:this._onDuplicateSelect,scale:"s",text:t,title:t},c("calcite-icon",{icon:"copy",scale:"s"}))}_renderDeleteButton(){const e=this.messages,t=this.updateGraphics.length>1?e.deleteFeatures:e.deleteFeature;return c("calcite-action",{bind:this,onclick:this.delete,scale:"s",text:t,title:t},c("calcite-icon",{icon:"trash",scale:"s"}))}_renderDefaultSelectionButton(){if(!this.viewModel.updateOnGraphicClick)return;const{messages:e,state:t}=this,o=e.selectFeature;return c("calcite-action",{active:t==="ready",bind:this,disabled:t==="disabled",onclick:this._activateDefaultSelectTool,scale:"s",text:o,title:o},c("calcite-icon",{icon:"cursor",scale:"s"}))}_renderSelectionToolbar(){var e;if(((e=this.view)==null?void 0:e.type)==="2d"&&this._selectionToolbar)return this._selectionToolbar.render()}_renderDrawActions(){var t;const{messages:e}=this;return(t=this._effectiveAvailableCreateTools)==null?void 0:t.map(o=>{switch(o){case"point":return this._renderAction(o,e.drawPoint,"pin");case"polyline":return this._renderAction(o,e.drawPolyline,"line");case"polygon":return this._renderAction(o,e.drawPolygon,"polygon");case"rectangle":return this._renderAction(o,e.drawRectangle,"rectangle");case"circle":return this._renderAction(o,e.drawCircle,"circle");default:return}})}_renderCustomToolActions(){var e;return(e=this.customToolOptions)==null?void 0:e.map(t=>this._renderCustomToolAction(t))}_renderCustomToolAction(e){var l;const{icon:t,label:o,toolKey:i,toolName:n}=e;return c("calcite-action",{active:((l=this._activeCustomToolOptions)==null?void 0:l.toolKey)===i,bind:this,disabled:this.state==="disabled",onclick:()=>this._activateCreateTool(n,null,e),scale:"s",text:o,title:o},c("calcite-icon",{icon:t,scale:"s"}))}_renderAction(e,t,o){return c("calcite-action",{active:this.activeTool===e&&!this._activeCustomToolOptions,bind:this,disabled:this.state==="disabled",onclick:()=>this._activateCreateTool(e),scale:"s",text:t,title:t},c("calcite-icon",{icon:o,scale:"s"}))}_renderUndoRedoMenuButtons(){return[this._renderUndoButton(),this._renderRedoButton()]}_renderUndoButton(){const e=this.messages.undo;return c("calcite-action",{bind:this,disabled:!this.viewModel.canUndo()||this.state==="disabled",onclick:this.undo,scale:"s",text:e,title:e},c("calcite-icon",{icon:W(this.container)?"redo":"undo",scale:"s"}))}_renderRedoButton(){const e=this.messages.redo;return c("calcite-action",{bind:this,disabled:!this.viewModel.canRedo()||this.state==="disabled",onclick:this.redo,scale:"s",text:e,title:e},c("calcite-icon",{icon:W(this.container)?"undo":"redo",scale:"s"}))}_renderSettingsMenuButton(){const e=this.messagesCommon.settings;return c("calcite-action",{active:this._menuOpen,bind:this,"data-testid":"settings-menu-action",disabled:this.state==="disabled",onclick:this._toggleMenu,scale:"s",text:e,title:e},c("calcite-icon",{icon:"gear",scale:"s"}))}_activateCreateTool(e,t,o){var n;const i=this._activeCustomToolOptions;if(o||i){if((o==null?void 0:o.toolKey)===(i==null?void 0:i.toolKey))return void this.cancel()}else if(this.activeTool===e)return void this.cancel();(n=this._selectionToolbar)==null||n.cancel(),this.create(e,t,o)}_onCreateOperation(e){if(e.state!=="complete")return;const{creationMode:t}=this,{type:o}=e;if(o==="create"){const{tool:i,graphic:n}=e,l=this._activeCreateOptions;this._activeCreateOptions=null,t==="continuous"?this.create(i,l,this._activeCustomToolOptions):(this._activeCustomToolOptions=null,t==="update"&&this.update([n]))}}_toggleMenu(){this._menuOpen=!this._menuOpen,this.scheduleRender()}_onDuplicateSelect(){const e=this.duplicate(),t=this.viewModel.activeTool;t!=="transform"&&t!=="reshape"||this.update(e,{tool:t})}_onSelectionOperationComplete(e){const{viewModel:{defaultUpdateOptions:t}}=this,{selection:o}=e;if(!e.aborted&&o.length){const i=t.tool,n=o.length>1&&i==="reshape"?"transform":i;this.update(o,{...t,tool:n})}this.notifyChange("state")}_activateDefaultSelectTool(){var e;this.cancel(),(e=this.view)==null||e.focus()}};s([r()],p.prototype,"_activeCustomToolOptions",void 0),s([r()],p.prototype,"_activeCreateOptions",void 0),s([r()],p.prototype,"activeTool",null),s([r({readOnly:!0})],p.prototype,"activeTooltip",null),s([r({cast:e=>{if(!(e!=null&&e.length))return null;const t=new Set(["point","polyline","polygon","rectangle","circle"]);return e.filter(o=>t.has(o))}})],p.prototype,"availableCreateTools",void 0),s([r({readOnly:!0})],p.prototype,"createGraphic",null),s([r()],p.prototype,"creationMode",void 0),s([r()],p.prototype,"customToolOptions",void 0),s([r()],p.prototype,"defaultCreateOptions",null),s([r()],p.prototype,"defaultUpdateOptions",null),s([r()],p.prototype,"icon",null),s([r()],p.prototype,"label",null),s([r()],p.prototype,"labelOptions",null),s([r()],p.prototype,"layer",null),s([r({type:["horizontal","vertical"]})],p.prototype,"layout",void 0),s([r(),V("esri/widgets/Sketch/t9n/Sketch")],p.prototype,"messages",void 0),s([r(),V("esri/t9n/common")],p.prototype,"messagesCommon",void 0),s([r()],p.prototype,"snappingOptions",null),s([r()],p.prototype,"state",null),s([r()],p.prototype,"tooltipOptions",null),s([r({readOnly:!0})],p.prototype,"updateGraphics",null),s([r({type:he,nonNullable:!0})],p.prototype,"valueOptions",null),s([r()],p.prototype,"view",null),s([r(),Ue(["create","update","undo","redo"])],p.prototype,"viewModel",null),s([r({type:ne,nonNullable:!0})],p.prototype,"visibleElements",void 0),s([r()],p.prototype,"_effectiveAvailableCreateTools",null),p=s([$("esri.widgets.Sketch")],p);const Ji=p;export{Ji as default};