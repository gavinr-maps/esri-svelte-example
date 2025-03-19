import{N as g,t as ee,r as s,m as r,a as C,j as te}from"./Accessor-BmwT4B0c.js";import{O as ie,n as D,e as R}from"./jsxFactory-Cnml7uXM.js";import{d as v,P as V,A as se,w as re}from"./reactiveUtils-XM7cS2OP.js";import{j as L,g as oe,x as ne,ao as $}from"./Point-Cz2JYYmX.js";import{O as k,K as ae}from"./projection-CyCZAIaD.js";import{e as pe}from"./defaultUnit-CHqZKPQE.js";import{d as j,I as le}from"./SnappingManager-DoaI-UDx.js";import{b as x,d as me}from"./Graphic-Dt0LgVGU.js";import{f as P}from"./intl-Duiy0OzY.js";import{E as I,P as W,R as ue}from"./colorUtils-DaPfwnk3.js";import{g as he,d as ce,D as de}from"./unitFormatUtils-Q7ZG7HcF.js";import{h as ge}from"./UpdatingHandles-CzJ4c3KT.js";import{geodesicLength as ve,geodesicDensify as ye,planarLength as fe}from"./geometryEngine-CLtm9OQA.js";import{P as we}from"./Polyline-s-JzsQqo.js";import{y as K,R as E,z as T}from"./geodesicUtils-Cvz9v8ds.js";import{h as O}from"./GraphicsLayer-D3KyXpUc.js";import{m as _e,a as Me,y as U}from"./TextSymbol-BLIQ6RKX.js";import{l as G}from"./ViewingMode-Dodu7ZZk.js";import{d as be}from"./SnappingVisualizer2D-xvUExsy2.js";import{l as Le}from"./Draw-BNcmHGQG.js";import{E as H,p as $e,P as Oe}from"./EditGeometryOperations-CAMJU2Wn.js";import{p as Se,E as xe,f as Ce}from"./dragEventPipeline-Dj33NxJd.js";import{S as Ae}from"./GraphicManipulator-D7rJmkQr.js";import{n as De}from"./InteractiveToolBase-rZBtMOMv.js";import{e as Re}from"./SnappingContext-lR2hMWGP.js";import{f as ke}from"./SnappingDragPipelineStep-dx2sltqU.js";import{u as Pe}from"./RightAngleSnappingHint-BepRvd6S.js";import{h as Ie}from"./Promise-DfET-uns.js";import{p as Ee,u as Te}from"./MeasurementWidgetContent-Be6iRbDh.js";import{e as z}from"./globalCss-vQlnDsEX.js";import"./Evented-Dw4_VOGn.js";import"./uuid-Cl5lrJ4c.js";import"./cast-CsZslgGN.js";import"./index-4eY77cms.js";import"./JSONSupport-DcrLLGjL.js";import"./SimpleObservable-CvOkykwM.js";import"./writer-DKgfqj4X.js";import"./vec3f64-BLpZdpfb.js";import"./Extent-g5W9hy0j.js";import"./projectBuffer-CQnuEMuP.js";import"./mathUtils-Cfq9PL9W.js";import"./geodesicConstants-RQL9oKdk.js";import"./getDefaultUnitForView-BBSnYQvp.js";import"./Portal-CmmHxpLg.js";import"./elevationInfoUtils-D26wVF2d.js";import"./unitConversionUtils-rg07EgOm.js";import"./lengthUtils-_77UiyVF.js";import"./vec32-Dvg_eL9J.js";import"./common-DQOJ18NT.js";import"./vec2-ChnYg_BJ.js";import"./screenUtils-_ZIvrt5o.js";import"./projectVectorToVector-CCOy_B5J.js";import"./projectPointToVector-BoxjK-qy.js";import"./viewUtils-CV6QVz7y.js";import"./Clonable-Z-AWS-16.js";import"./opacityUtils-Dim20wpZ.js";import"./enumeration-DpvDkLNI.js";import"./Color-VJEMvW-n.js";import"./colorUtils-Rxh2V3ai.js";import"./ActionToggle-D7439N1A.js";import"./Identifiable-BHVfzH03.js";import"./jsonUtils-CwFG8yN4.js";import"./typeUtils-B6WBEKDM.js";import"./collectionUtils-CTT-51g7.js";import"./aaBoundingBox-Dw3yBk2f.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./Cyclical-Dlbl-cQK.js";import"./quantityUtils-BsDK158M.js";import"./geometryEngineBase-B0ZyeKAX.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-DcIAHEVL.js";import"./GraphicsCollection-BJ5Nr2H8.js";import"./Layer-DH4_Pn8a.js";import"./TimeExtent-BO6BsF_x.js";import"./timeUtils-C1c_L2Fd.js";import"./ScaleRangeLayer-Cnzwr9PT.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-DZz5FrgB.js";import"./utils-DYurMneM.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-Fi6iAz29.js";import"./ElevationInfo-BPOqhCue.js";import"./vec2f64-Dy6m9Nrb.js";import"./enums-BTM-fOHQ.js";import"./SnappingVisualizer-bfo0JaXd.js";import"./PointSnappingHint-DWAfJfrj.js";import"./SnappingOperation-D1hMlFdT.js";import"./Scheduler-i_u8qdlN.js";import"./signal-CySMLEX9.js";import"./debugFlags-B1LM_Apo.js";import"./InputManager-DZ3jJnlx.js";import"./Queue-BQesTh_6.js";import"./keybindings-CTmT1RTo.js";import"./screenUtils-BWEEmpSb.js";import"./surfaceCoordinateSystems-DVyjKZ7x.js";import"./memoize-DmxaQ-k8.js";import"./ReactiveSet-DgPcISC1.js";import"./diffUtils-BanfihCO.js";import"./dehydratedFeatureComparison-j4L0peJx.js";import"./DrawingMode-Cvvf0VVz.js";import"./angularMeasurementUtils-hHgHLVYP.js";import"./SketchLabelOptions-DnwnoaXO.js";import"./hydratedFeatures-CNHxsqRS.js";import"./mat2d-D9DBP-jx.js";import"./mat2df64-CBKYtunK.js";import"./quat-CP7JhygC.js";import"./mat3f64-BBpwCtoL.js";import"./quatf64-CCm9z-pX.js";import"./plane-CpXmOyqq.js";import"./mat4f64-Dk4dwAN8.js";import"./mathUtils-BgCEaV43.js";import"./geometry2dUtils-D9Oax6Qb.js";import"./meshVertexSpaceUtils-AgAbm20L.js";import"./MeshLocalVertexSpace-CnHk-qPr.js";import"./defaults-FkBa0ybj.js";import"./defaultsJSON-GKolV7NZ.js";import"./drapedUtils--IsYcWNz.js";import"./interfaces-D6pIddIh.js";import"./Query-B_2mhyL4.js";import"./Field-BDG0QV_T.js";import"./fieldType-CBeoJWlv.js";import"./FullTextSearch-CBnxSwz4.js";import"./utils-BjSXFjBJ.js";import"./Version-Cd3TlGH0.js";import"./sphere-Cin5efBj.js";import"./mat3-CR8GKnhD.js";import"./UnitSelect-63i0421p.js";const S=1e5;let u=class extends De{constructor(e){super(e),this._measurementLayer=new O({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new O({internal:!0,listMode:"hide",visible:!1}),this._snappingLayer=new O({internal:!0,listMode:"hide",visible:!1}),this._updatingHandles=new ge,this._vertices=[],this._drawActive=!1,this.measurement=null,this.measurementLabel=null}initialize(){P("esri/core/t9n/Units").then(t=>{this.messages=t});const e=this.view;this._draw=new Le({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer,this._snappingLayer]),e.focus(),this.addHandles([Ie(async()=>{this.messages=await P("esri/core/t9n/Units")}),v(()=>[this.unit,this.messages],()=>{this._updatePolylines()},V),v(()=>[this.view.effectiveTheme.accentColor,this.view.effectiveTheme.textColor],()=>{if(!this._vertices.length)return;const t=this._vertices.map(({coord:i})=>i);for(const{handle:i}of this._vertices)i.remove();this._vertices=[],this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._snappingLayer.removeAll(),this.manipulators.removeAll(),this._updateSketch(t)})]),Pe(this)}destroy(){const{map:e}=this.view;this._draw.view=null,this._draw=g(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer,this._snappingLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._snappingLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=g(this._measurementLayer),this._manipulatorLayer=g(this._manipulatorLayer),this._snappingLayer=g(this._snappingLayer),this._updatingHandles=g(this._updatingHandles),this._resetVertices()}get cursor(){return this._drawActive?"crosshair":null}set editable(e){this._set("editable",e),e||this._draw.reset()}get snappingOptions(){return this.snappingManager.options}get updating(){return this._updatingHandles.updating||this.snappingManager.updating}onActivate(){this._drawActive||this._vertices.length!==0||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0,this._snappingLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1,this._snappingLayer.visible=!1}_getSnappingContext(e){return new Re({elevationInfo:{mode:"on-the-ground",offset:0},pointer:e,editGeometryOperations:new H(new $e("point",Oe(!1,!1,this.view.spatialReference)),G.Local),visualizer:new be(this._snappingLayer)})}_resetVertices(){for(const{handle:e}of this._vertices)e.remove();this._vertices=[]}_startSketch(){this._drawActive=!0;const{snappingManager:e}=this,t=this._draw.create("polyline",{mode:"click",snappingManager:e});t.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],i=>this._updateSketch(i.vertices)),t.on("draw-complete",()=>{this._stopSketch()})}_stopSketch(){this.manipulators.forEach(({manipulator:e})=>{e.interactive=!0}),this._drawActive=!1,this.finishToolCreation()}_updateSketch(e){const{spatialReference:t}=this.view;for(;this._vertices.length>e.length;){const{handle:n,manipulator:c}=this._vertices.pop();n.remove(),this.manipulators.remove(c)}for(let n=this._vertices.length;n<e.length;n++){const[c,d]=e[n],y=new L({x:c,y:d,spatialReference:t}),f=Ue(y,this.view,this._manipulatorLayer);this.manipulators.add(f);const _=H.fromGeometry(y,G.Local),F=[_.on("vertex-update",M=>{const w=M.vertices.at(0);w&&(this._vertices[n].coord=[w.pos[0],w.pos[1]],this._updatePolylines())}),Se(f,(M,w,Ne,J)=>{const Q=this._getSnappingContext(J),{snappingManager:X}=this,Y=this._updatingHandles,{snappingStep:Z}=ke({snappingContext:Q,snappingManager:X,updatingHandles:Y});w.next(xe(this.view)).next(b=>{if(b.action==="start"){const A=new L(b.mapStart);M.graphic.geometry=A,_.trySetGeometry(A)}return b}).next(...Z).next(Ce({operations:_})).next(()=>{M.graphic.geometry=_.data.geometry})})];this._vertices.push({manipulator:f,coord:[c,d],handle:ee(F)})}const i=this._vertices.length-1,o=this._vertices[i],[a,p]=e[i];o.coord[0]===a&&o.coord[1]===p||(o.coord=[a,p],o.manipulator.graphic.geometry=new L({x:a,y:p,spatialReference:t}));const m=this._drawActive?this._vertices[i].manipulator:null;this.manipulators.forEach(({manipulator:n})=>{n.interactive=m==null||n!==m}),this._updatePolylines()}_updatePolylines(){var y;if(this._vertices.length<2)return void this._measurementLayer.removeAll();const e=this._vertices.map(({coord:f})=>f),{measurement:t,drawing:i,original:o}=Ge(e,this.view.spatialReference);this._set("measurement",t);const a=Be(this.messages,t,this.unit);let p,m;this._set("measurementLabel",a);const{graphics:n}=this._measurementLayer,c=n.length===2,{effectiveTheme:d}=this.view;c?(p=n.at(0),m=n.at(1)):(p=new x({symbol:new me({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:3.5,color:I(d.accentColor).toArray()},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:5,color:d.accentColor.toArray()}]}}})}),m=new x({symbol:new _e({color:d.textColor,haloColor:W(I(d.textColor,ue.Low),.5),haloSize:2,font:new Me({size:14,family:"sans-serif"})})}),n.removeAll(),n.addMany([p,m])),p.geometry=i,m.geometry=(y=o.extent)==null?void 0:y.center,m.symbol.text=a}};function Ue(e,t,i){const o=W(t.effectiveTheme.accentColor,.5),a={type:"simple-line",width:0},p=8,m=new U({style:"circle",color:o,size:p,outline:a}),n=new U({style:"circle",color:o,size:1.5*p,outline:a}),c=new x({geometry:e,symbol:m});return new Ae({view:t,layer:i,graphic:c,focusedSymbol:n})}function Ge(e,t){const i=new we({paths:[e],spatialReference:t});let o,a;if(t.isGeographic)if(K(t))o=E([i],"meters")[0],a=T(i,S);else{const p=k(i,oe.WGS84),m=T(p,S);o=E([p],"meters")[0],a=k(m,t)}else t.isWebMercator?(o=ve(i,"meters"),a=ye(i,S,"meters")):(o=fe(i,"meters"),a=i);return{measurement:{geometry:a,length:o},original:i,drawing:a}}function He(e){return e!=null}function ze(e){if(!e)return!1;const{isGeographic:t,isWebMercator:i,isWGS84:o}=e;return t&&!o&&!K(e)||!t&&!i}function Be(e,t,i){if(!t||!e)return"";switch(i){case"metric":return de(e,t.length,"meters");case"imperial":return ce(e,t.length,"meters");default:return he(e,ne(t.length,"meters",i),i)}}s([r()],u.prototype,"_drawActive",void 0),s([r({readOnly:!0})],u.prototype,"cursor",null),s([r({value:!0})],u.prototype,"editable",null),s([r({readOnly:!0})],u.prototype,"measurement",void 0),s([r({readOnly:!0})],u.prototype,"measurementLabel",void 0),s([r()],u.prototype,"messages",void 0),s([r({constructOnly:!0})],u.prototype,"snappingManager",void 0),s([r()],u.prototype,"unit",void 0),s([r()],u.prototype,"updating",null),s([r({constructOnly:!0})],u.prototype,"view",void 0),u=s([C("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],u);let h=class extends Ee{constructor(e){super(e),this.supportedViewType="2d",this.unsupportedErrorMessage="DistanceMeasurement2DViewModel is only supported in 2D views.",this._snappingManager=null,this.snappingOptions=new j}initialize(){this.addHandles([v(()=>{var e;return(e=this.view)==null?void 0:e.spatialReference},()=>this.clear()),v(()=>this.unit,e=>{this.tool&&(this.tool.unit=e)},V),v(()=>this.view,e=>{this._snappingManager=g(this._snappingManager),e&&(this._snappingManager=new le({view:e,options:this.snappingOptions}))},se),v(()=>this.snappingOptions,e=>{this._snappingManager&&e&&(this._snappingManager.options=e)})])}destroy(){this._snappingManager=g(this._snappingManager)}get measurement(){var e;return((e=this.tool)==null?void 0:e.measurement)??null}get measurementLabel(){var e;return((e=this.tool)==null?void 0:e.measurementLabel)??null}get state(){var e;return this.disabled||this.view==null||!He((e=this.view)==null?void 0:e.spatialReference)?"disabled":this.tool!=null&&this.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){this._overrideIfSome("unit",this._validateUnit(e))}get unitOptions(){return $}set unitOptions(e){this._overrideIfSome("unitOptions",this._validateUnits(e))}async start(){const e=this.view;e!=null&&(await re(()=>e.ready),ze(e.spatialReference)&&await ae()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new u({snappingManager:this._snappingManager,unit:this.unit,view:this.view,visible:this.visible})}_validateUnit(e){const{unitOptions:t,defaultUnit:i}=this;return e!=null&&t.includes(e)?e:t.includes(i)?i:t.length>0?t[0]:i}_validateUnits(e){if(e==null)return[];const t=e.filter(i=>$.includes(i));return t.length===0?$.slice():t}};s([r()],h.prototype,"_snappingManager",void 0),s([r(pe)],h.prototype,"defaultUnit",void 0),s([r({readOnly:!0})],h.prototype,"measurement",null),s([r({readOnly:!0})],h.prototype,"measurementLabel",null),s([r({type:j,nonNullable:!0})],h.prototype,"snappingOptions",void 0),s([r({readOnly:!0})],h.prototype,"state",null),s([r({type:String})],h.prototype,"unit",null),s([r({type:[String]})],h.prototype,"unitOptions",null),h=s([C("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],h);const q=h,B="esri-distance-measurement-2d",N={base:B,newMeasurementButton:`${B}__clear-button`};let l=class extends ie{constructor(e,t){super(e,t),this.messages=null,this.messagesCommon=null,this.viewModel=new q}get active(){return this.viewModel.active}get icon(){return"measure-line"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get snappingOptions(){return this.viewModel.snappingOptions}set snappingOptions(e){this.viewModel.snappingOptions=e}get unit(){return this.viewModel.unit}set unit(e){this.viewModel.unit=e}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(e){this.viewModel.unitOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}render(){const{messages:e,messagesCommon:t,unit:i,unitOptions:o,viewModel:a}=this,{active:p,measurementLabel:m,state:n,supported:c}=a;return D("div",{"aria-label":this.messages.widgetLabel,class:this.classes(N.base,z.widget,z.panel),key:this,role:"presentation"},this.visible?D(Te,{active:p,measurementItems:[{key:"distance",title:e.distance,value:m}],messages:{...e,notApplicable:t.notApplicable},newMeasurementButtonClass:N.newMeasurementButton,state:n,supported:c,unit:i,unitOptions:o,onNewMeasurementClick:()=>{te(this.viewModel.start())},onUnitChange:d=>{this.unit=d}}):null)}};s([r({readOnly:!0})],l.prototype,"active",null),s([r()],l.prototype,"icon",null),s([r()],l.prototype,"label",null),s([r(),R("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],l.prototype,"messages",void 0),s([r(),R("esri/t9n/common")],l.prototype,"messagesCommon",void 0),s([r()],l.prototype,"snappingOptions",null),s([r()],l.prototype,"uiStrings",void 0),s([r()],l.prototype,"unit",null),s([r()],l.prototype,"unitOptions",null),s([r()],l.prototype,"view",null),s([r({type:q})],l.prototype,"viewModel",void 0),s([r({type:Boolean})],l.prototype,"visible",null),l=s([C("esri.widgets.DistanceMeasurement2D")],l);const ms=l;export{ms as default};
