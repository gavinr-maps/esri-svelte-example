import{g as b,aA as w,N as d,r as p,m,a as k}from"./Accessor-BHnuXKD2.js";import{d as g,P as _}from"./reactiveUtils-BR0C1Kq4.js";import{h as f}from"./UpdatingHandles-ptqz1ck8.js";import{h as v}from"./GraphicsLayer-Acqd2VFm.js";import{a as B,j as M,T as V,w as L}from"./Stop-C_sFsdNo.js";import{y as S}from"./SketchViewModel-BHWV3FYM.js";import"./Evented-DCWccWGU.js";import"./SimpleObservable-7oieNGD8.js";import"./GraphicsCollection-CkliHSk1.js";import"./Graphic-CFXUQZlS.js";import"./Clonable-DvJsj5LF.js";import"./JSONSupport-CGdeqxpk.js";import"./cast-BA_-jlhc.js";import"./index-tefRSezt.js";import"./writer-B2bQV2uU.js";import"./opacityUtils-CSd4XoR2.js";import"./Promise-CmQqe-ke.js";import"./Point-XGrwlf63.js";import"./enumeration-Cr5WIZs4.js";import"./Color-gncXBiLc.js";import"./colorUtils-Rxh2V3ai.js";import"./mathUtils-DV9iOXpW.js";import"./ActionToggle-__-l4AdQ.js";import"./Identifiable-BrT7zvUW.js";import"./jsonUtils-Cu7OBRmN.js";import"./Extent-CBBGeHb-.js";import"./Polyline-BmuD2-ZN.js";import"./typeUtils-BSg8Y507.js";import"./TextSymbol-BQ_NW9Xo.js";import"./screenUtils-_ZIvrt5o.js";import"./collectionUtils-CbaToa73.js";import"./Portal-CTRRujjZ.js";import"./vec3f64-BLpZdpfb.js";import"./aaBoundingBox-CeBivBRq.js";import"./Layer-C9uQlTBT.js";import"./TimeExtent-J5qnUFx_.js";import"./timeUtils-D2X862bk.js";import"./ScaleRangeLayer-C59zG_yk.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-TjZmCq6l.js";import"./utils-DYurMneM.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-Fi6iAz29.js";import"./common-DQOJ18NT.js";import"./ElevationInfo-Di4W6v5U.js";import"./unitConversionUtils-C4AR5obr.js";import"./lengthUtils-DjJgJFRg.js";import"./networkEnums-n7t8Au-e.js";import"./projection-B2I9Bzj_.js";import"./projectBuffer-DOU0xvVi.js";import"./geodesicConstants-yASAK_zX.js";import"./layerUtils-dJgsXxkC.js";import"./elevationInfoUtils-RSZ4Logn.js";import"./layerUtils-BS1Di3Pm.js";import"./InputManager-Bs9UE-jw.js";import"./Queue-BOnccek2.js";import"./signal-DSa0yokC.js";import"./keybindings-DrKrBFID.js";import"./SketchLabelOptions-CwtwEofC.js";import"./SketchOptions-92Ul6Fzp.js";import"./angularMeasurementUtils-lDJJxFDs.js";import"./Cyclical-CPiNl4ru.js";import"./quantityUtils-1LswOhxZ.js";import"./vec2-maR1OrZI.js";import"./vec2f64-Dy6m9Nrb.js";import"./vec32-Dvg_eL9J.js";import"./projectVectorToVector-dS8io47t.js";import"./projectPointToVector-BS0u8fq6.js";import"./geodesicUtils-Bh_GX0Qj.js";import"./SnappingManager-CF4NflXd.js";import"./RightAngleSnappingHint-CCcBBYgG.js";import"./Query-DCBIeen2.js";import"./Field-Cyk7Ur5d.js";import"./fieldType-L-VlbZqy.js";import"./FullTextSearch-BWm_kPUE.js";import"./utils-D02V2_jH.js";import"./Version-9k2AOv05.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./plane-4dpuo6-e.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-CCm9z-pX.js";import"./mathUtils-B9R7G-2c.js";import"./sphere-DQxj5tsv.js";import"./mat3-CR8GKnhD.js";import"./geometry2dUtils-vtViF5g_.js";import"./viewUtils-Ce2x26K8.js";import"./hitTestSelectUtils-UXJPjatw.js";import"./screenUtils-DyhV4TAA.js";function h(r,e){r.networkFeature=e}function F(r){const e=l(r.graphic);return{...r,networkFeature:e}}function $(r){const e=r.graphics.map(o=>l(o));return{...r,networkFeatures:e}}function l(r){return r.networkFeature}function N(r){return(r==null?void 0:r.type)==="point"||(r==null?void 0:r.type)==="polyline"||(r==null?void 0:r.type)==="polygon"}let s=class extends b{constructor(r){super(r),this._createMode=null,this._graphicsLayer=new v({internal:!0,listMode:"hide",title:"Banana"}),this._updatingHandles=new f,this.enabled=!0,this._handleSketchViewModelEvents=async e=>{var o,a;switch(e.type){case"update":switch(e.state){case"active":case"complete":for(const t of e.graphics)l(t).geometry=N(t.geometry)?t.geometry.clone():null}break;case"undo":case"redo":break;case"delete":for(const t of e.graphics){const n=l(t);this._removeNetworkFeature(n)}break;case"create":if(e.graphic&&e.state==="complete"&&this._createMode){const t=(o=e.graphic.geometry)==null?void 0:o.clone(),n=(a=e.graphic.symbol)==null?void 0:a.clone();if(!t)break;switch(this._createMode){case"stop":{if(t.type!=="point")break;const{stops:i}=this.layer;if(i.length>0&&i.every(({geometry:c})=>!c)){i.at(0).geometry=t;break}if(i.length>1&&i.filter((c,u)=>u!==0).every(({geometry:c})=>!c)){i.at(1).geometry=t;break}const y=new L({geometry:t});i.add(y),h(e.graphic,y);break}case"point-barrier":{if(t.type!=="point")break;const i=new V({geometry:t,symbol:n});this.layer.pointBarriers.add(i),h(e.graphic,i);break}case"polyline-barrier":{if(t.type!=="polyline")break;const i=new M({geometry:t,symbol:n});this.layer.polylineBarriers.add(i),h(e.graphic,i);break}case"polygon-barrier":{if(t.type!=="polygon")break;const i=new B({geometry:t,symbol:n});this.layer.polygonBarriers.add(i),h(e.graphic,i);break}}}}(await this.view.whenLayerView(this.layer)).emit(e.type,e.type==="create"?F(e):$(e))}}initialize(){this._sketchViewModel=new S({layer:this._graphicsLayer,view:this.view}),this.addHandles([g(()=>this.enabled,r=>{r?this._activate():this._deactivate()},_),g(()=>{const{stops:r,pointBarriers:e,polylineBarriers:o,polygonBarriers:a}=this.layer;return{stops:r,pointBarriers:e,polylineBarriers:o,polygonBarriers:a}},()=>{this.enabled&&this._loadClonedGraphics()}),this._sketchViewModel.on(["create","delete","redo","undo","update"],this._handleSketchViewModelEvents),w(this._updatingHandles)])}destroy(){this.view.map.remove(this._graphicsLayer),this._graphicsLayer.removeAll(),this._graphicsLayer=d(this._graphicsLayer),this._sketchViewModel=d(this._sketchViewModel)}get selectedNetworkFeatures(){return this._sketchViewModel.updateGraphics.map(r=>l(r))}get updating(){return this._updatingHandles.updating}create(r){var e;switch(this._createMode=r,r){case"stop":(e=this.layer.defaultSymbols.stops)!=null&&e.unlocated&&(this._sketchViewModel.pointSymbol=this.layer.defaultSymbols.stops.unlocated.clone());break;case"point-barrier":this.layer.defaultSymbols.pointBarriers&&(this._sketchViewModel.pointSymbol=this.layer.defaultSymbols.pointBarriers.clone());break;case"polyline-barrier":this.layer.defaultSymbols.polylineBarriers&&(this._sketchViewModel.polylineSymbol=this.layer.defaultSymbols.polylineBarriers.clone());break;case"polygon-barrier":this.layer.defaultSymbols.polygonBarriers&&(this._sketchViewModel.polygonSymbol=this.layer.defaultSymbols.polygonBarriers.clone())}switch(r){case"stop":case"point-barrier":return this._sketchViewModel.create("point");case"polyline-barrier":return this._sketchViewModel.create("polyline");case"polygon-barrier":return this._sketchViewModel.create("polygon")}}remove(r){const e=this._graphicsLayer.graphics.find(o=>l(o)===r);e&&this._graphicsLayer.remove(e),this._removeNetworkFeature(r)}_activate(){this._loadClonedGraphics(),this.view.map.add(this._graphicsLayer)}_deactivate(){var r;this._sketchViewModel.cancel(),(r=this.view.map)==null||r.remove(this._graphicsLayer),this._graphicsLayer.removeAll()}_loadClonedGraphics(){const r=[this.layer.stops,this.layer.pointBarriers,this.layer.polylineBarriers,this.layer.polygonBarriers].flatMap(e=>e.toArray().map(o=>{const a=o.toGraphic();return a.networkFeature=o,a}));this._graphicsLayer.removeAll().addMany(r)}_removeNetworkFeature(r){switch(r.type){case"stop":this.layer.stops.remove(r);break;case"point-barrier":this.layer.pointBarriers.remove(r);break;case"polyline-barrier":this.layer.polylineBarriers.remove(r);break;case"polygon-barrier":this.layer.polygonBarriers.remove(r)}}};p([m()],s.prototype,"enabled",void 0),p([m({constructOnly:!0})],s.prototype,"layer",void 0),p([m({readOnly:!0})],s.prototype,"selectedNetworkFeatures",null),p([m()],s.prototype,"updating",null),p([m({constructOnly:!0})],s.prototype,"view",void 0),s=p([k("esri.views.2d.layers.support.RouteLayerInteraction")],s);export{s as RouteLayerInteraction};
