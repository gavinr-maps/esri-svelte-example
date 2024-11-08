import{r as l}from"./tslib.es6-B3Jf3DVX.js";import"./geometry-D964gYQX.js";import{d as I}from"./Graphic-DsxsIjhH.js";import{d as X}from"./asyncUtils-CWX51uTe.js";import{V as S}from"./Collection-CEdjem1-.js";import{m,a as A,t as Y,n as q,b as B}from"./subclass-BZA_h8Db.js";import{o as N}from"./Evented-BHRw9x22.js";import{q as E,n as T,e as O}from"./Accessor-BLX9ikPh.js";import{watch as V,syncAndInitial as J,sync as L,pausable as Q,when as W,initial as tt}from"./reactiveUtils-C5zUhJQJ.js";import{t as et,d as it,y as ot,e as G}from"./Polyline-D9YkgmM_.js";import st from"./GraphicsLayer-i3FeUJ_n.js";import{y as b}from"./TextSymbol-D8QO_KUV.js";import{l as rt}from"./ViewingMode-Dodu7ZZk.js";import{d as nt}from"./SnappingVisualizer2D-Br8KvMdL.js";import{i as pt}from"./drawUtils-D0InE6Wy.js";import at from"./GraphicMover-LrqTUoJ7.js";import{h as ht}from"./HighlightHelper-BXjDLAgC.js";import{e as ct}from"./layerUtils-BS1Di3Pm.js";import{h as k}from"./quantityUtils-D0GB2dMc.js";import{c as lt}from"./screenUtils-_ZIvrt5o.js";import{j as w}from"./Point-Cg0-ChZE.js";import{r as mt,K as dt,H as vt,k as yt,G as _t}from"./SketchTooltipInfo-BA57LzDt.js";import{i as ut,p as gt}from"./SelectedVertexTooltipInfo-Jy1UVcy1.js";import{i as ft}from"./TranslateTooltipInfo-BDJmumyy.js";import{u as U}from"./automaticAreaMeasurementUtils-12dUsEmf.js";import{c as z,m as xt}from"./automaticLengthMeasurementUtils-BXgXm1JY.js";import{R as Gt}from"./quantityFormatUtils-CX8UdSzC.js";import{h as bt}from"./settings-Bydk1FJ-.js";import{_ as Vt}from"./InputManager-Ba9xzDpe.js";import{P as wt,E as Mt}from"./EditGeometryOperations-Cl8Sbfxr.js";import{p as St}from"./keybindings-DoOdil3D.js";import{l as P}from"./isSupportedObject-6I_Nw0mS.js";import{e as Et}from"./SnappingContext-lR2hMWGP.js";import"./Extent-Bf3YTe7m.js";import"./jsonMap-0cxwUWs2.js";import"./PopupTemplate-BHMhS05j.js";import"./Clonable-D3rtuBWg.js";import"./assets-C43MgM-v.js";import"./index-Bh2oEzTI.js";import"./cast-Bjksrh93.js";import"./writer-DNAwXnhG.js";import"./fieldUtils-tmQlKvWo.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./mathUtils-C4_ghTv4.js";import"./enumeration-Ba5njXdz.js";import"./Color-BCS62Hs5.js";import"./colorUtils-0bJDPow9.js";import"./ActionToggle-iT4slXc7.js";import"./Identifiable-B1UbsKNt.js";import"./symbols-CNimns--.js";import"./materialUtils-DarhapKC.js";import"./opacityUtils-C68Tlu6_.js";import"./vec3f64-BLpZdpfb.js";import"./aaBoundingBox-BE7cC1jD.js";import"./persistableUrlUtils-fa1mAujs.js";import"./collectionUtils-D_lHIu88.js";import"./Portal-C10FKnaA.js";import"./Loadable-BabW5Xcc.js";import"./Promise-B2Hu02L7.js";import"./jsonUtils-CEfjT-BK.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./GraphicsCollection-FfahqxsR.js";import"./Layer-CVt7Hb5J.js";import"./TimeExtent-DocT5yPf.js";import"./timeUtils-8fb_2oAt.js";import"./BlendLayer-CXM4n_Ge.js";import"./jsonUtils-CSnQD004.js";import"./parser-CTsgEym6.js";import"./utils-93yNk4Xc.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-GpOFENPA.js";import"./common-DQOJ18NT.js";import"./ScaleRangeLayer-Bb8Ig1Hz.js";import"./ElevationInfo-CA5m_tHv.js";import"./unitConversionUtils-BMfW9yAe.js";import"./lengthUtils-DL1-FDQQ.js";import"./vec2-maR1OrZI.js";import"./vec2f64-miziP1SN.js";import"./enums-CmIX1y88.js";import"./SnappingManager-BJPyuu7J.js";import"./projection-B971H0Re.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./elevationInfoUtils-BC_66_Fg.js";import"./projectVectorToVector-G2uWGoIb.js";import"./projectPointToVector-GINIbYMz.js";import"./vec32-Dvg_eL9J.js";import"./Query-5Xpquc1r.js";import"./DataLayerSource-BKkswDvG.js";import"./Field-ybkHhtnK.js";import"./fieldType-BuzM0UHS.js";import"./FullTextSearch-Csd1Hktu.js";import"./utils-BpB3MnW1.js";import"./Version-BSlAgupz.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./geodesicUtils-FCYOaNwu.js";import"./plane-IENfwZlB.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-CCm9z-pX.js";import"./mathUtils-BG-eq9fO.js";import"./sphere-C77djCO6.js";import"./mat3-BRl2i9Bz.js";import"./geometry2dUtils-DdyQE7AQ.js";import"./viewUtils-DrPohWV3.js";import"./SnappingVisualizer-BtjTdiTG.js";import"./PointSnappingHint-D7X20mlb.js";import"./GraphicManipulator-Dc-QfW2U.js";import"./defaults-DZ1kfMRx.js";import"./defaultsJSON-GKolV7NZ.js";import"./drapedUtils-HWKOCxgF.js";import"./screenUtils-WcqhHU65.js";import"./layerViewUtils-DhFEu8Rd.js";import"./featureUtils-Do2jvOGL.js";import"./layerUtils-BrNoooE9.js";import"./utils-BwQ00KBJ.js";import"./Basemap-DVYOaWHz.js";import"./loadAll-B6mYSptb.js";import"./PortalItem-DzgXrpyc.js";import"./writeUtils-Dz7BsE1e.js";import"./Queue-yu3bZ02p.js";import"./signal-D4lghLjV.js";import"./coordinateFormatter-Bqv90CKy.js";import"./MeshTransform-D2t3aEmK.js";import"./quat-4pa1e6ds.js";import"./axisAngleDegrees-Ci2HA7Jo.js";import"./meshVertexSpaceUtils-CXzOFlTI.js";import"./MeshLocalVertexSpace-LEHwMUnu.js";import"./themeUtils-C3zvZbsE.js";import"./jsxFactory-CJa39Fro.js";import"./uuid-fwrPAdZb.js";import"./a11yUtils-cyWndM8Q.js";import"./memoize-DsJmrG76.js";import"./unitFormatUtils-CZ2bRlFg.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./Cyclical-oTUX3aX7.js";import"./getDefaultUnitForView-Ce2vZZap.js";import"./angularMeasurementUtils-7e2vxqzG.js";import"./directionModeIcons-Br5woIHu.js";import"./geodesicMeasurementUtils-Bt9h4589.js";import"./euclideanAreaMeasurementUtils-CfO9bFtV.js";import"./earcut-Lltz9D9k.js";import"./triangle-PTGDC_xJ.js";import"./lineSegment-D7sKPPYf.js";import"./geodesicAreaMeasurementUtils-BILXFcc4.js";import"./geometryEngine-DGiYLHJy.js";import"./geometryEngineBase-yFIvKOkM.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-C9rxSL4a.js";import"./geodesicLengthMeasurementUtils-he3vjGJN.js";import"./spatialReferenceEllipsoidUtils-DBE_OFra.js";import"./compilerUtils-Dw3R0f-Z.js";import"./SketchLabelOptions-DDQnGNSN.js";let x=class extends mt{constructor(t){super(t),this.type="translate-vertex",this.distance=k,this.elevation=null,this.area=null,this.totalLength=null}clear(){this.distance=k,this.elevation=null,this.area=null,this.totalLength=null}};l([m()],x.prototype,"type",void 0),l([m()],x.prototype,"distance",void 0),l([m()],x.prototype,"elevation",void 0),l([m()],x.prototype,"area",void 0),l([m()],x.prototype,"totalLength",void 0),x=l([A("esri.views.interactive.tooltip.infos.TranslateVertexTooltipInfo")],x);function It(t){const e={sketchOptions:t,viewType:"2d"};return{movePoint:new ut(e),selectedVertex:new gt(e),translateGraphic:new ft(e),translateVertices:new x(e)}}function kt(t,e){function i(){const r=e(),n=r.sketchOptions.tooltips.effectiveEnabled?r.activeTooltipInfo:null;return{...r,activeTooltipInfo:n}}let o=!1;function s(r){o||(o=!0,r(),o=!1)}return Y([V(()=>{var n,p;const r=i();return{context:r,geometry:(n=r.graphic)==null?void 0:n.geometry,vertexGeometry:(p=r.selectedVertex)==null?void 0:p.geometry}},({context:r})=>{s(()=>{Tt(r),t.info=r.activeTooltipInfo})},J),V(()=>{const r=i(),{activeTooltipInfo:n}=r;if(n&&"key"in n)return{context:r,key:n.key}},(r,n)=>{r&&n&&r.key!==n.key&&s(()=>C(r.context))},L),dt(t,{onBeforePaste:()=>{o=!0},onAfterPaste:()=>{C(i()),o=!1}})])}function Tt(t){const e=t.activeTooltipInfo;if(e){switch(e==null?void 0:e.type){case"move-point":return Ot(e,t);case"selected-vertex":return Ct(e,t)}e.sketchOptions=t.sketchOptions}}function Ot(t,{graphic:e}){D(t,e,e==null?void 0:e.geometry)}function Ct(t,{graphic:e,selectedVertex:i}){D(t,e,i==null?void 0:i.geometry);const o=e==null?void 0:e.geometry;switch(o==null?void 0:o.type){case"polygon":t.geometryType="polygon",t.totalLength.visible=!1,t.area.actual=U(o);break;case"polyline":t.geometryType="polyline",t.totalLength.actual=z(o),t.area.visible=!1}}function D(t,e,i){var o;e&&(i==null?void 0:i.type)==="point"&&(t.setLocationFromPoint(i),t.elevation.actual=Gt(i),t.elevation.visible=!!((o=e.geometry)!=null&&o.hasZ),t.elevation.readOnly=!1,t.elevation.showAsZ=!0)}function C(t){function e(r,n){const p=n==null?void 0:n.geometry;if(!p||p.type!=="point")return;const{dx:a,dy:c,dz:h}=vt(r,p);if(a===0&&c===0&&h===0)return;const{x:d,y:_,z:u,m:g,spatialReference:f}=p,M=new w({x:d+a,y:_+c,z:u!=null?u+h:void 0,m:g,spatialReference:f});t.updateGeometry(n,M,p,a,c)}const{activeTooltipInfo:i,graphic:o,selectedVertex:s}=t;switch(i==null?void 0:i.type){case"move-point":return e(i,o);case"selected-vertex":return e(i,s)}}function Ht(t,e,i){t.clear(),F(t,e,i)}function $t(t,e,i,o){t.clear(),(i==null?void 0:i.type)==="polygon"?t.area=U(i):(i==null?void 0:i.type)==="polyline"&&(t.totalLength=z(i)),F(t,e,o)}function F(t,e,i){if(!i)return;const{x:o,y:s}=i.origin,r=e.toMap(i),n=e.toMap(lt(o,s)),p=xt(n,r);t.distance=p??k}class Rt{constructor(e,i,o){this.graphic=e,this.mover=i,this.selected=o,this.type="reshape-start"}}class At{constructor(e,i,o){this.graphic=e,this.mover=i,this.selected=o,this.type="reshape"}}class Lt{constructor(e,i,o){this.graphic=e,this.mover=i,this.selected=o,this.type="reshape-stop"}}class Ut{constructor(e,i,o){this.mover=e,this.dx=i,this.dy=o,this.type="move-start"}}class zt{constructor(e,i,o){this.mover=e,this.dx=i,this.dy=o,this.type="move"}}class Pt{constructor(e,i,o){this.mover=e,this.dx=i,this.dy=o,this.type="move-stop"}}class Dt{constructor(e){this.added=e,this.type="vertex-select"}}class Ft{constructor(e){this.removed=e,this.type="vertex-deselect"}}class Zt{constructor(e,i,o,s){this.added=e,this.graphic=i,this.oldGraphic=o,this.vertices=s,this.type="vertex-add"}}class Kt{constructor(e,i,o,s){this.removed=e,this.graphic=i,this.oldGraphic=o,this.vertices=s,this.type="vertex-remove"}}const y=bt.reshapeGraphics,jt={vertices:{default:new b({style:"circle",size:y.vertex.size,color:y.vertex.color,outline:{color:y.vertex.outlineColor,width:1}}),hover:new b({style:"circle",size:y.vertex.hoverSize,color:y.vertex.hoverColor,outline:{color:y.vertex.hoverOutlineColor,width:1}}),selected:new b({style:"circle",size:y.selected.size,color:y.selected.color,outline:{color:y.selected.outlineColor,width:1}})},midpoints:{default:new b({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}}),hover:new b({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}})}};let v=class extends N.EventedAccessor{constructor(t){super(t),this._updateHandlesOnExternalGeometryChange=null,this._activeOperationInfo=null,this._editGeometryOperations=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingContext=null,this._snappingGraphicsLayer=null,this._hoverGraphic=null,this._snappingTask=null,this._stagedVertex=null,this.tooltip=null,this.activeTooltipInfo=null,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new S,this.midpointSymbol=new b({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=new S,this.snappingManager=null,this.symbols=jt,this.sketchOptions=new P,this.type="reshape",this.vertexGraphics=new S,this.view=null}initialize(){const t=this.view;this._highlightHelper=new ht({view:t}),this._setup(),this._updateHandlesOnExternalGeometryChange=Q(()=>{var e;return(e=this.graphic)==null?void 0:e.geometry},e=>{if(!e)return;const i=new Set(this.selectedVertices.map(c=>{var h;return(h=c.attributes)==null?void 0:h.pointIndex}));this._highlightHelper.removeAll(),this._setUpHighlights(),this._setupGraphics(),this._clearSelection(),this.vertexGraphics.filter(c=>i.has(c.attributes.pointIndex)).forEach(c=>this._addToSelection(c));const{enableMovement:o,_mover:s,graphic:r,midpointGraphics:n,vertexGraphics:p}=this,a=p.concat(n).items;o&&a.push(r),s==null||s.set("graphics",a)},L),this.tooltip=yt(()=>({view:t,options:this.sketchOptions.tooltips})),this.tooltipInfos=It(this.sketchOptions),this.addHandles([W(()=>t==null?void 0:t.ready,()=>{const{layer:e,view:i}=this;ct(i,e),this.addHandles(i.on("key-down",o=>this._keyDownHandler(o),Vt.TOOL))},{once:!0,initial:!0}),V(()=>this.graphic,()=>this.refresh()),V(()=>this.layer,(e,i)=>{i&&(this._clearSelection(),this._resetGraphics(i)),this.refresh()}),V(()=>this.enableMidpoints,()=>this.refresh()),kt(this.tooltip,()=>this._tooltipsContext),V(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),tt),this._updateHandlesOnExternalGeometryChange]),this._updateTooltip()}destroy(){var t;this._reset(),(t=this._mover)==null||t.destroy(),this._mover=null,this.tooltip=E(this.tooltip)}get _coordinateHelper(){var t,e,i;return((t=this._editGeometryOperations)==null?void 0:t.data.coordinateHelper)??wt(!!((e=this.graphic.geometry)!=null&&e.hasZ),!!((i=this.graphic.geometry)!=null&&i.hasM),this.view.spatialReference)}get _selectedVertex(){return this.selectedVertices.length===1?this.selectedVertices.at(0):void 0}get _tooltipsContext(){return{sketchOptions:this.sketchOptions,activeTooltipInfo:this.activeTooltipInfo,graphic:this.graphic,selectedVertex:this._selectedVertex,updateGeometry:(t,e,i,o,s)=>{this._setUpGeometryHelper();const r=t===this.graphic;if(r?this._emitMoveStartEvent(0,0):this._emitReshapeStartEvent(t),this._syncGeometryAfterVertexMove(t,e,o,s,!0),r){const{view:p}=this,a=p.toScreen(i),c=p.toScreen(e),h=((c==null?void 0:c.x)??0)-((a==null?void 0:a.x)??0),d=((c==null?void 0:c.y)??0)-((a==null?void 0:a.y)??0);this._emitMoveEvent(h,d),this._emitMoveStopEvent(h,d)}else this._emitReshapeEvent(t),this._emitReshapeStopEvent(t);this._editGeometryOperations=E(this._editGeometryOperations)}}}set highlightsEnabled(t){var e;(e=this._highlightHelper)==null||e.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=this.view.ready,e=!(!this.graphic||!this.layer);return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){const e=[];return this.graphic&&e.push(this.graphic),e.concat(this.vertexGraphics.items,this.midpointGraphics.items),e.length>0&&e.includes(t)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){const{selectedVertices:t}=this;t.length&&this._removeVertices(t)}_setup(){const{graphic:t,layer:e}=this;if(!e||(t==null?void 0:t.geometry)==null)return;const i=t.geometry;i.type!=="mesh"&&i.type!=="extent"?(i.type==="polygon"&&et(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphic&&((t=this._highlightHelper)==null||t.add(this.graphic))}_setUpGeometryHelper(){const t=this.graphic.geometry;if(t==null||t.type==="mesh"||t.type==="extent")return void this._logGeometryTypeError();const e=t.type==="multipoint"?new it({paths:[t.points],spatialReference:t.spatialReference}):t;this._editGeometryOperations=Mt.fromGeometry(e,rt.Local)}_saveSnappingContextForHandle(t,e){var o;this._snappingGraphicsLayer=new st({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer);const i=this._editGeometryOperations;T(i),this._snappingContext=new Et({editGeometryOperations:i,elevationInfo:{mode:"on-the-ground",offset:0},pointer:((o=e.viewEvent)==null?void 0:o.pointerType)||"mouse",excludeFeature:this.graphic,feature:this.graphic,visualizer:new nt(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(t)})}_reset(){var t;this._clearSelection(),(t=this._highlightHelper)==null||t.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){var t;this.snappingManager!=null&&this.snappingManager.doneSnapping(),this._snappingGraphicsLayer!=null&&((t=this.view)!=null&&t.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=E(this._editGeometryOperations),this._snappingTask=O(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(t){this._removeMidpointGraphics(t),this._removeVertexGraphics(t),this.selectedVertices.removeAll(),this._updateTooltip()}_removeMidpointGraphics(t){const e=t||this.layer;e&&e.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(i=>i.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(t){const e=t||this.layer;e&&e.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(i=>i.destroy()),this.vertexGraphics.removeAll()}_setupGraphics(){const t=this.graphic.geometry;if(t!=null&&(t.type==="polyline"||t.type==="polygon")){const e=H(t);this.enableMidpoints&&this._setUpMidpointGraphics(e),this.enableVertices&&this._setUpVertexGraphics(e)}}_setUpMidpointGraphics(t){this._removeMidpointGraphics();const e=this._createMidpointGraphics(t);this.midpointGraphics.addMany(e),this.layer.addMany(e)}_setUpVertexGraphics(t){this._removeVertexGraphics();const e=this._createVertexGraphics(t);this.vertexGraphics.addMany(e),this._storeRelatedVertexIndices(),this.layer.addMany(e)}_createVertexGraphics(t){const{_graphicAttributes:e,symbols:i}=this,o=[];return t==null||t.forEach((s,r)=>{s.forEach((n,p)=>{var a;o.push(new I({geometry:this._coordinateHelper.arrayToPoint(n),symbol:(a=i==null?void 0:i.vertices)==null?void 0:a.default,attributes:{...e,pathIndex:r,pointIndex:p}}))})}),o}_createMidpointGraphics(t){var s;const{_graphicAttributes:e,symbols:i}=this,o=[];for(let r=0;r<t.length;r++){const n=t[r];for(let p=0;p<n.length;p++){const a=(p+1)%n.length;if(((s=this.graphic.geometry)==null?void 0:s.type)==="polyline"&&a===0)continue;const c=n[p],h=n[a],d=this._getMidpoint(c,h);o.push(new I({geometry:d,symbol:i.midpoints.default,attributes:{...e,pathIndex:r,pointIndexStart:p,pointIndexEnd:a}}))}}return o}_updateSymbolsForTheme(){var e;const t=this.view.effectiveTheme.accentColor;this.symbols={vertices:{...this.symbols.vertices,default:this.symbols.vertices.default.clone().set("color",t),hover:(e=this.symbols.vertices.hover)==null?void 0:e.clone().set("color",t)},midpoints:{...this.symbols.midpoints}};for(const i of this.vertexGraphics)this._isSelected(i)?i.symbol=this.symbols.vertices.selected:this._hoverGraphic===i?i.symbol=this.symbols.vertices.hover:i.symbol=this.symbols.vertices.default}_storeRelatedVertexIndices(){const t=this.vertexGraphics.items;if(!t)return;const e=t.map(({geometry:i})=>({x:i.x,y:i.y}));for(let i=0;i<e.length;i++){const o=[];for(let s=0;s<e.length;s++){if(i===s)continue;const r=e[i],n=e[s];r.x===n.x&&r.y===n.y&&o.push(s)}t[i].attributes.relatedGraphicIndices=o}}_setupMover(){const{enableMovement:t,graphic:e,midpointGraphics:i,vertexGraphics:o,view:s}=this,r=o.concat(i).items;t&&r.push(e),this._mover=new at({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:r,view:s,callbacks:{onGraphicClick:n=>this._onGraphicClickCallback(n),onGraphicMoveStart:n=>this._onGraphicMoveStartCallback(n),onGraphicMove:n=>this._onGraphicMoveCallback(n),onGraphicMoveStop:n=>this._onGraphicMoveStopCallback(n),onGraphicPointerOver:n=>this._onGraphicPointerOverCallback(n),onGraphicPointerOut:n=>this._onGraphicPointerOutCallback(n)}})}_onGraphicClickCallback(t){var i,o;t.viewEvent.stopPropagation();const e=t.graphic;if(e===this.graphic)this.clearSelection(),this.emit("graphic-click",t),(o=(i=this.callbacks).onGraphicClick)==null||o.call(i,t);else if(this._isMidpoint(e)){if(t.viewEvent.button===2)return;const s=this.graphic.clone(),r=this._createVertexFromMidpoint(e);this.refresh(),this._emitVertexAddEvent([e],s,r)}else this._isVertex(e)&&(t.viewEvent.stopPropagation(),t.viewEvent.button===2?this._removeVertices(e):(t.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(e)?this._removeFromSelection(e,!0):this._addToSelection(e)))}_setUpOperation(t){const{graphic:e,dx:i,dy:o}=t,s=e===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(e,t),this._activeOperationInfo={target:this.graphic,mover:e,operationType:s?"move":"reshape",totalDx:i,totalDy:o}}_onGraphicMoveStartCallback(t){const{dx:e,dy:i,graphic:o}=t;if(o===this.graphic){const{geometry:s}=o;return this._setUpOperation(t),this._emitMoveStartEvent(e,i),void(s!=null&&s.type==="point"&&this._onHandleMove(o,e,i,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)}))}if(!this.selectedVertices.includes(o)){if(this._clearSelection(),this._isMidpoint(o)){const s=this.graphic.clone(),r=this._createVertexFromMidpoint(o);this._emitVertexAddEvent([o],s,r)}this._addToSelection(o)}this._setUpOperation(t),this._emitReshapeStartEvent(o),this._onHandleMove(o,e,i,t,()=>{this._updateTooltip(o,t.viewEvent),this._emitReshapeEvent(o)})}_onGraphicMoveCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:o,graphic:s}=t;e.totalDx+=i,e.totalDy+=o;const{operationType:r}=e,{geometry:n}=s;if(n!=null){if(r!=="move")this._onHandleMove(s,i,o,t,()=>{this._updateTooltip(s,t.viewEvent),this._emitReshapeEvent(s)});else if(n.type==="point")this._onHandleMove(s,i,o,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,o)});else if(n.type==="polyline"||n.type==="polygon"){const p=H(n);this._updateVertexGraphicLocations(p),this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,o)}}}_onGraphicMoveStopCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:o,graphic:s}=t,{operationType:r}=e;e.totalDx+=i,e.totalDy+=o,this._onHandleMove(s,i,o,t,()=>r==="move"?this._emitMoveStopEvent():this._emitReshapeStopEvent(s)),this._isMidpoint(s)?this.refresh():(this._updateTooltip(this._isVertex(s)?s:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(t){const{_coordinateHelper:e}=this;for(const i of this.vertexGraphics){const{pathIndex:o,pointIndex:s}=i.attributes;i.geometry=e.arrayToPoint(t[o][s])}this._updateMidpointGraphicLocations(t)}_updateMidpointGraphicLocations(t){for(const e of this.midpointGraphics){const{pathIndex:i,pointIndexStart:o,pointIndexEnd:s}=e.attributes,r=t[i];e.geometry=this._getMidpoint(r[o],r[s])}}_getMidpoint(t,e){const{_coordinateHelper:i}=this,o=i.arrayToVector(t),s=i.arrayToVector(e),r=i.toXYZ(o),n=i.toXYZ(s),[p,a,c]=ot(r,n),h=i.hasM()?0:void 0;return new w({x:p,y:a,z:c,m:h,spatialReference:i.spatialReference})}_getVertexFromEditGeometry(t){const[e,i]=$(t);return T(this._editGeometryOperations),this._editGeometryOperations.data.components[e].vertices[i]}_onHandleMove(t,e,i,o,s){O(this._snappingTask);const r=this._snappingContext;if(!r)return;const n=t.geometry,p=o.type==="graphic-move-stop";if(this.snappingManager!=null&&this.selectedVertices.length<2&&!p){const a=this.snappingManager;this._stagedVertex=a.update({point:n,context:r}),this._syncGeometryAfterVertexMove(t,new w(this._stagedVertex),e,i,p),s(),this._snappingTask=X(async c=>{const h=await a.snap({point:n,context:r,signal:c});h.valid&&(this._stagedVertex=h.apply(),this._syncGeometryAfterVertexMove(t,new w(this._stagedVertex),e,i,p),s())})}else{const a=this._stagedVertex!=null?new w(this._stagedVertex):n;this._syncGeometryAfterVertexMove(t,a,e,i,p),s()}}_syncGeometryAfterVertexMove(t,e,i,o,s=!1){var n,p;const r=(n=this._editGeometryOperations)==null?void 0:n.data.geometry;if(r)if(r.type==="point")t.geometry=e;else if(r.type==="mesh")t.geometry=r.centerAt(e);else{const{_coordinateHelper:a}=this,[c,h]=$(t);let d=G(r);const _=d[c].length-1,u=a.pointToArray(e);d[c][h]=u,r.type==="polygon"&&(h===0?d[c][_]=u:h===_&&(d[c][0]=u)),this._isVertex(t)&&(d=this._moveRelatedCoordinates(d,t,u),d=this._moveSelectedHandleCoordinates(d,t,i,o,r.type==="polygon"),this._updateMidpointGraphicLocations(d)),this._updateGraphicGeometry(r.clone());const g=a.pointToVector(e),f=this._getVertexFromEditGeometry(t),M=a.getZ(g),Z=g[0]-f.pos[0],K=g[1]-f.pos[1],j=M!=null?M-f.pos[2]:0;(p=this._editGeometryOperations)==null||p.moveVertices([f],Z,K,j),s&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(t),e):t.geometry=e)}}_moveRelatedCoordinates(t,e,i){const{relatedGraphicIndices:o}=e.attributes;for(const s of o){const r=this.vertexGraphics.at(s),{pathIndex:n,pointIndex:p}=r.attributes;t[n][p]=i,r.geometry=e.geometry}return t}_moveSelectedHandleCoordinates(t,e,i,o,s){for(const r of this.selectedVertices)if(r!==e){const{pathIndex:n,pointIndex:p,relatedGraphicIndices:a}=r.attributes,c=pt(r.geometry,i,o,this.view),h=G(c),d=t[n].length-1;t[n][p]=h,r.geometry=c,s&&(p===0?t[n][d]=h:p===d&&(t[n][0]=h));for(const _ of a){const u=this.vertexGraphics.at(_),{pathIndex:g,pointIndex:f}=u.attributes;t[g][f]=h,u.geometry=c}}return t}_onGraphicPointerOverCallback(t){const e=t.graphic;this._hoverGraphic=e;const i=this._isVertex(e);i&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.hover),this._updateTooltip(i?e:null),this._updateHoverCursor(e)}_onGraphicPointerOutCallback(t){const e=t.graphic;this._hoverGraphic=null,this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(t){const{_graphicAttributes:e,graphic:i}=this,o=i.geometry;if(o==null||o.type!=="polygon"&&o.type!=="polyline")return[];const s=o.clone(),r=[],{pathIndex:n,pointIndexStart:p,pointIndexEnd:a}=t.attributes,c=G(t.geometry),h=a===0?p+1:a,d=G(s);return d[n].splice(h,0,c),t.attributes={...e,pathIndex:n,pointIndex:h,relatedGraphicIndices:[]},r.push({coordinates:d[n][h],componentIndex:n,vertexIndex:h}),this._updateGraphicGeometry(s),r}_addToSelection(t){const e=R(t);for(const i of e)i.symbol=this.symbols.vertices.selected,this.selectedVertices.add(i),this._updateTooltip(i);this._emitSelectEvent(e)}_removeFromSelection(t,e){const{vertices:i}=this.symbols,o=e?i.hover:i.default;this.selectedVertices.remove(t),t.symbol=o,this._emitDeselectEvent([t]),this._updateTooltip()}_clearSelection(){const t=this.selectedVertices.toArray();if(t.length>0){for(const e of t)e.set("symbol",this.symbols.vertices.default);this.selectedVertices.removeAll(),this._emitDeselectEvent(t),this._updateTooltip()}}_keyDownHandler(t){this._activeOperationInfo==null&&_t(t,this.tooltip)||St.delete.includes(t.key)&&!t.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(t){const e=this.graphic.geometry;if(e==null||e.type!=="polygon"&&e.type!=="polyline"||e.type==="polygon"&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;const i=this.graphic.clone(),o=e.clone();let s=G(o);const r=[],n=R(t);for(const p of n){const{x:a,y:c}=p.geometry;for(let h=0;h<s.length;h++){const d=s[h];for(let _=0;_<d.length;_++){const[u,g]=d[_];a===u&&c===g&&(r.push({coordinates:s[h][_],componentIndex:h,vertexIndex:_}),s[h].splice(Number(_),1))}}}if(o.type==="polygon")s=s.filter(p=>{if(p.length<2)return!1;const[a,c]=p[0],[h,d]=p[p.length-1];return(p.length!==2||a!==h||c!==d)&&(a===h&&c===d||p.push(p[0]),!0)}),o.rings=s;else{for(const p of s)p.length===1&&s.splice(s.indexOf(p),1);o.paths=s}this._updateGraphicGeometry(o),this.refresh(),this._emitVertexRemoveEvent(n,i,r)}_isVertex(t){return this.vertexGraphics.includes(t)}_isSelected(t){return this._isVertex(t)&&this.selectedVertices.includes(t)}_isMidpoint(t){return this.midpointGraphics.includes(t)}_updateHoverCursor(t){this.view.cursor=this._isMidpoint(t)?"copy":"move"}_updateTooltip(t,e){let i=null;const{graphic:o,view:s,tooltipInfos:r}=this,n=o==null?void 0:o.geometry;(n==null?void 0:n.type)==="point"?i=r.movePoint:this._selectedVertex?i=r.selectedVertex:t===this.graphic?(i=r.translateGraphic,Ht(i,s,e)):t&&this.selectedVertices.length>1&&(i=r.translateVertices,$t(i,s,n,e)),this.activeTooltipInfo=i}_updateGraphicGeometry(t){var e,i;(e=this._updateHandlesOnExternalGeometryChange)==null||e.pause(),this.graphic.geometry=t,(i=this._updateHandlesOnExternalGeometryChange)==null||i.resume()}_emitMoveStartEvent(t,e){var o,s;const i=new Ut(this.graphic,t,e);this.emit("move-start",i),(s=(o=this.callbacks).onMoveStart)==null||s.call(o,i)}_emitMoveEvent(t,e){var o,s;const i=new zt(this.graphic,t,e);this.emit("move",i),(s=(o=this.callbacks).onMove)==null||s.call(o,i)}_emitMoveStopEvent(t,e){var o,s;if(t==null||e==null){const r=this._activeOperationInfo;if(!r)return;t=r.totalDx,e=r.totalDy}const i=new Pt(this.graphic,t,e);this.emit("move-stop",i),(s=(o=this.callbacks).onMoveStop)==null||s.call(o,i)}_emitReshapeStartEvent(t){var i,o;const e=new Rt(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape-start",e),(o=(i=this.callbacks).onReshapeStart)==null||o.call(i,e)}_emitReshapeEvent(t){var i,o;const e=new At(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape",e),(o=(i=this.callbacks).onReshape)==null||o.call(i,e)}_emitReshapeStopEvent(t){var i,o;const e=new Lt(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape-stop",e),(o=(i=this.callbacks).onReshapeStop)==null||o.call(i,e)}_emitSelectEvent(t){var i,o;const e=new Dt(t);this.emit("select",e),(o=(i=this.callbacks).onVertexSelect)==null||o.call(i,e)}_emitDeselectEvent(t){var i,o;const e=new Ft(t);this.emit("deselect",e),(o=(i=this.callbacks).onVertexDeselect)==null||o.call(i,e)}_emitVertexAddEvent(t,e,i){var s,r;const o=new Zt(t,this.graphic,e,i);this.emit("vertex-add",o),(r=(s=this.callbacks).onVertexAdd)==null||r.call(s,o)}_emitVertexRemoveEvent(t,e,i){var s,r;const o=new Kt(t,this.graphic,e,i);this.emit("vertex-remove",o),(r=(s=this.callbacks).onVertexRemove)==null||r.call(s,o)}_logGeometryTypeError(){q.getLogger(this).error(new B("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};function H(t){const e=G(t.clone());if(t.type==="polygon")for(const i of e){const o=i[i.length-1];i[0][0]===o[0]&&i[0][1]===o[1]&&i.length>2&&i.pop()}return e}function $({attributes:t}){return[(t==null?void 0:t.pathIndex)||0,(t==null?void 0:t.pointIndex)||0]}function R(t){return t instanceof I?[t]:[...t]}l([m()],v.prototype,"_activeOperationInfo",void 0),l([m()],v.prototype,"_coordinateHelper",null),l([m()],v.prototype,"_editGeometryOperations",void 0),l([m()],v.prototype,"tooltip",void 0),l([m()],v.prototype,"tooltipInfos",void 0),l([m()],v.prototype,"activeTooltipInfo",void 0),l([m()],v.prototype,"_selectedVertex",null),l([m()],v.prototype,"_tooltipsContext",null),l([m()],v.prototype,"callbacks",void 0),l([m()],v.prototype,"enableMidpoints",void 0),l([m()],v.prototype,"enableMovement",void 0),l([m()],v.prototype,"enableVertices",void 0),l([m()],v.prototype,"graphic",void 0),l([m({value:!0})],v.prototype,"highlightsEnabled",null),l([m()],v.prototype,"layer",void 0),l([m({readOnly:!0})],v.prototype,"midpointGraphics",void 0),l([m()],v.prototype,"midpointSymbol",void 0),l([m({readOnly:!0})],v.prototype,"selectedVertices",void 0),l([m()],v.prototype,"snappingManager",void 0),l([m({readOnly:!0})],v.prototype,"state",null),l([m()],v.prototype,"symbols",void 0),l([m({type:P})],v.prototype,"sketchOptions",void 0),l([m({readOnly:!0})],v.prototype,"type",void 0),l([m({readOnly:!0})],v.prototype,"vertexGraphics",void 0),l([m()],v.prototype,"view",void 0),v=l([A("esri.views.draw.support.Reshape")],v);const Zo=v;export{Zo as default};