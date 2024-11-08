import{r as p}from"./tslib.es6-B3Jf3DVX.js";import"./symbols-CNimns--.js";import{o as b}from"./Evented-BHRw9x22.js";import{g as k,m,a as E}from"./subclass-BZA_h8Db.js";import{watch as u,when as O}from"./reactiveUtils-C5zUhJQJ.js";import H from"./GraphicsLayer-i3FeUJ_n.js";import{i as w}from"./drawUtils-D0InE6Wy.js";import{h as M}from"./HighlightHelper-BXjDLAgC.js";import{e as D,r as P}from"./layerUtils-BS1Di3Pm.js";import{_ as g}from"./InputManager-Ba9xzDpe.js";import{S as U}from"./GraphicManipulator-Dc-QfW2U.js";import{n as y}from"./screenUtils-WcqhHU65.js";import{y as _,d as $,S as T}from"./TextSymbol-D8QO_KUV.js";import"./enumeration-Ba5njXdz.js";import"./jsonMap-0cxwUWs2.js";import"./writer-DNAwXnhG.js";import"./fieldUtils-tmQlKvWo.js";import"./Accessor-BLX9ikPh.js";import"./index-Bh2oEzTI.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./assets-C43MgM-v.js";import"./mathUtils-C4_ghTv4.js";import"./geometry-D964gYQX.js";import"./Extent-Bf3YTe7m.js";import"./Point-Cg0-ChZE.js";import"./cast-Bjksrh93.js";import"./Polyline-D9YkgmM_.js";import"./Color-BCS62Hs5.js";import"./colorUtils-0bJDPow9.js";import"./screenUtils-_ZIvrt5o.js";import"./materialUtils-DarhapKC.js";import"./opacityUtils-C68Tlu6_.js";import"./vec3f64-BLpZdpfb.js";import"./aaBoundingBox-BE7cC1jD.js";import"./persistableUrlUtils-fa1mAujs.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./collectionUtils-D_lHIu88.js";import"./Portal-C10FKnaA.js";import"./Loadable-BabW5Xcc.js";import"./Promise-B2Hu02L7.js";import"./Clonable-D3rtuBWg.js";import"./asyncUtils-CWX51uTe.js";import"./GraphicsCollection-FfahqxsR.js";import"./Graphic-DsxsIjhH.js";import"./PopupTemplate-BHMhS05j.js";import"./ActionToggle-iT4slXc7.js";import"./Identifiable-B1UbsKNt.js";import"./jsonUtils-CEfjT-BK.js";import"./Layer-CVt7Hb5J.js";import"./TimeExtent-DocT5yPf.js";import"./timeUtils-8fb_2oAt.js";import"./BlendLayer-CXM4n_Ge.js";import"./jsonUtils-CSnQD004.js";import"./parser-CTsgEym6.js";import"./utils-93yNk4Xc.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-GpOFENPA.js";import"./common-DQOJ18NT.js";import"./ScaleRangeLayer-Bb8Ig1Hz.js";import"./ElevationInfo-CA5m_tHv.js";import"./unitConversionUtils-BMfW9yAe.js";import"./lengthUtils-DL1-FDQQ.js";import"./layerViewUtils-DhFEu8Rd.js";import"./featureUtils-Do2jvOGL.js";import"./layerUtils-BrNoooE9.js";import"./utils-BwQ00KBJ.js";import"./Basemap-DVYOaWHz.js";import"./loadAll-B6mYSptb.js";import"./PortalItem-DzgXrpyc.js";import"./writeUtils-Dz7BsE1e.js";import"./Queue-yu3bZ02p.js";import"./signal-D4lghLjV.js";import"./vec2-maR1OrZI.js";import"./vec32-Dvg_eL9J.js";import"./projection-B971H0Re.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./projectPointToVector-GINIbYMz.js";import"./elevationInfoUtils-BC_66_Fg.js";import"./defaults-DZ1kfMRx.js";import"./defaultsJSON-GKolV7NZ.js";import"./drapedUtils-HWKOCxgF.js";class L{constructor(e,i,s,r,h){this.graphic=e,this.index=i,this.x=s,this.y=r,this.viewEvent=h,this.type="graphic-click"}}class V{constructor(e,i,s,r,h){this.graphic=e,this.index=i,this.x=s,this.y=r,this.viewEvent=h,this.type="graphic-double-click"}}class A{constructor(e,i,s,r,h,o,a,l,d,v){this.graphic=e,this.allGraphics=i,this.index=s,this.x=r,this.y=h,this.dx=o,this.dy=a,this.totalDx=l,this.totalDy=d,this.viewEvent=v,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class I{constructor(e,i,s,r,h,o,a,l,d,v){this.graphic=e,this.allGraphics=i,this.index=s,this.x=r,this.y=h,this.dx=o,this.dy=a,this.totalDx=l,this.totalDy=d,this.viewEvent=v,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class S{constructor(e,i,s,r,h,o,a,l,d,v){this.graphic=e,this.allGraphics=i,this.index=s,this.x=r,this.y=h,this.dx=o,this.dy=a,this.totalDx=l,this.totalDy=d,this.viewEvent=v,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class C{constructor(e,i,s,r,h){this.graphic=e,this.index=i,this.x=s,this.y=r,this.viewEvent=h,this.type="graphic-pointer-over"}}class G{constructor(e,i,s,r,h){this.graphic=e,this.index=i,this.x=s,this.y=r,this.viewEvent=h,this.type="graphic-pointer-out"}}class z{constructor(e,i,s,r,h){this.graphic=e,this.index=i,this.x=s,this.y=r,this.viewEvent=h,this.type="graphic-pointer-down"}}class q{constructor(e,i,s,r,h){this.graphic=e,this.index=i,this.x=s,this.y=r,this.viewEvent=h,this.type="graphic-pointer-up"}}const x="indicator-symbols";let n=class extends b.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._dragEvent=null,this._hoverGraphic=null,this._indicators=[],this._initialDragGeometry=null,this._manipulators=[],this._layerViews=null,this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!1,this.layer=new H({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){D(this.view,this.layer),this._highlightHelper=new M({view:this.view}),this.refresh(),this.addHandles([u(()=>this.graphics.length,()=>this.refresh()),O(()=>{var t;return(t=this.view)==null?void 0:t.ready},()=>{this.addHandles([this.view.on("immediate-click",t=>this._clickHandler(t),g.TOOL),this.view.on("double-click",t=>this._doubleClickHandler(t),g.TOOL),this.view.on("pointer-down",t=>this._pointerDownHandler(t),g.TOOL),this.view.on("pointer-move",t=>this._pointerMoveHandler(t),g.TOOL),this.view.on("pointer-up",t=>this._pointerUpHandler(t),g.TOOL),this.view.on("drag",t=>this._dragHandler(t),g.TOOL),this.view.on("key-down",t=>this._keyDownHandler(t),g.TOOL)])},{once:!0,initial:!0}),u(()=>this.view,t=>{this._highlightHelper.removeAll(),this._highlightHelper.view=t})])}destroy(){var t;this._removeIndicators(),(t=this.view.map)==null||t.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach(e=>e.destroy()),this._manipulators=null}set highlightsEnabled(t){var e,i;(e=this._highlightHelper)==null||e.removeAll(),this._set("highlightsEnabled",t),t&&((i=this._highlightHelper)==null||i.add(this.graphics))}get state(){const t=this.view.ready,e=this.graphics.length>0,i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"}refresh(){this.reset(),this._setup()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null,this._highlightHelper.removeAll()}updateGeometry(t,e){const i=this.graphics[t];i&&(i.set("geometry",e),this._setUpIndicators())}_setup(){this._setUpHighlights(),this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}_clickHandler(t){const e=this._findTargetGraphic(y(t));if(e){const i=new L(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}_doubleClickHandler(t){const e=this._findTargetGraphic(y(t));if(e){const i=new V(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}_pointerDownHandler(t){const e=this._findTargetGraphic(y(t));if(e){this._activeGraphic=e;const{x:i,y:s}=t,r=new z(e,this.graphics.indexOf(e),i,s,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._activeGraphic),r=new q(this._activeGraphic,s,e,i,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}_pointerMoveHandler(t){if(this._dragEvent)return;const e=this._findTargetGraphic(y(t));if(e){const{x:i,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===e)return;const o=this.graphics.indexOf(this._hoverGraphic),a=new G(this.graphics[o],o,i,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",a),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}const r=this.graphics.indexOf(e),h=new C(e,r,i,s,t);return this._hoverGraphic=e,this.emit("graphic-pointer-over",h),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(h))}if(this._hoverGraphic){const{x:i,y:s}=t,r=this.graphics.indexOf(this._hoverGraphic),h=new G(this.graphics[r],r,i,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",h),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(h)}}_dragHandler(t){var f;if(t.action!=="start"&&!this._dragEvent||!((f=this._activeGraphic)!=null&&f.geometry))return;t.action==="start"&&this._removeIndicators(),t.stopPropagation();const{action:e,x:i,y:s}=t,r=this.graphics.indexOf(this._activeGraphic),h=this._dragEvent?i-this._dragEvent.x:0,o=this._dragEvent?s-this._dragEvent.y:0,a=i-t.origin.x,l=s-t.origin.y,d=e==="start"?this._activeGraphic.geometry:this._initialDragGeometry,v=w(d,a,l,this.view);if(this._activeGraphic.geometry=v,this.enableMoveAllGraphics&&this.graphics.forEach(c=>{c!==this._activeGraphic&&(c.geometry=w(c.geometry,h,o,this.view))}),this._dragEvent=t,e==="start"){this._initialDragGeometry=k(d);const c=new A(this._activeGraphic,this.graphics,r,i,s,h,o,a,l,t);this.emit("graphic-move-start",c),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(c),c.defaultPrevented&&this._activeGraphic.set("geometry",d)}else if(e==="update"){const c=new I(this._activeGraphic,this.graphics,r,i,s,h,o,a,l,t);this.emit("graphic-move",c),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(c),c.defaultPrevented&&(this._activeGraphic.geometry=d)}else{const c=new S(this._activeGraphic,this.graphics,r,i,s,h,o,a,l,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",c),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(c),c.defaultPrevented&&(this.graphics[r].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){t.key!=="a"&&t.key!=="d"&&t.key!=="n"||this.state!=="moving"||t.stopPropagation()}_findTargetGraphic(t){const e=this.view.toMap(t),i=this.graphics;let s=null,r=Number.MAX_VALUE;this._syncLayerViews();const h=this._layerViews.flatMap(o=>"graphicsViews"in o?Array.from(o.graphicsViews(),a=>a.hitTest(e)).flat():o.graphicsView.hitTest(e)).filter(o=>i.includes(o)).sort((o,a)=>i.indexOf(o)-i.indexOf(a));return h.length?h[0]:(this._manipulators.forEach(o=>{const a=o.intersectionDistance(t);a!=null&&a<r&&(r=a,s=o.graphic)}),s)}_syncLayerViews(){this._layerViews=[];const t=new Set;for(const e of this.graphics){const i=P(this.view,e.layer);i&&t.add(i)}this._layerViews=[...t]}_setUpManipulators(){const{graphics:t,view:e}=this;this._manipulators.forEach(i=>i.destroy()),this._manipulators=t.length?t.map(i=>new U({graphic:i,view:e})):[]}_setUpHighlights(){this.highlightsEnabled&&this._highlightHelper.add(this.graphics)}_setUpIndicators(){if(this._removeIndicators(),this.indicatorsEnabled){for(const t of this.graphics){const e=t.clone();e.symbol=j(t),this._indicators.push(e),this.addHandles(u(()=>t.symbol,()=>this._setUpIndicators()),x)}this.layer.addMany(this._indicators)}}_removeIndicators(){this.removeHandles(x),this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach(t=>t.destroy()),this._indicators=[])}};function j(t){if(t.symbol==null)return null;switch(t.symbol.type){case"cim":return new _({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:i,yoffset:s,height:r,width:h}=t.symbol,o=r===h?h:Math.max(r,h);return new _({xoffset:i,yoffset:s,size:o,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:i,yoffset:s,size:r,style:h}=t.symbol;return new _({xoffset:i,yoffset:s,style:h==="circle"?"circle":"square",size:r+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new T({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new $({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:i,yoffset:s}=t.symbol;return new _({xoffset:i,yoffset:s,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}p([m()],n.prototype,"_activeGraphic",void 0),p([m({readOnly:!0})],n.prototype,"type",void 0),p([m()],n.prototype,"callbacks",void 0),p([m()],n.prototype,"enableMoveAllGraphics",void 0),p([m()],n.prototype,"graphics",void 0),p([m({value:!1})],n.prototype,"highlightsEnabled",null),p([m()],n.prototype,"indicatorsEnabled",void 0),p([m()],n.prototype,"layer",void 0),p([m({readOnly:!0})],n.prototype,"state",null),p([m()],n.prototype,"view",void 0),n=p([E("esri.views.draw.support.GraphicMover")],n);const xi=n;export{xi as default};
