import{r as i}from"./tslib.es6-B3Jf3DVX.js";import{v as p}from"./LineOfSightAnalysis-DHWGaskk.js";import{f as a,u as m}from"./LineOfSightAnalysisTarget-Czs0z8lJ.js";import{V as s}from"./Collection-CEdjem1-.js";import{n}from"./collectionUtils-D_lHIu88.js";import{S as l}from"./MultiOriginJSONSupport-B5nfqtQh.js";import{watch as y,syncAndInitial as d}from"./reactiveUtils-C5zUhJQJ.js";import{m as e,a as h}from"./subclass-BZA_h8Db.js";import u from"./Layer-CVt7Hb5J.js";import{b as f}from"./OperationalLayer-CVyVfSPu.js";import"./Analysis-605EM8LG.js";import"./Accessor-BLX9ikPh.js";import"./Clonable-D3rtuBWg.js";import"./Identifiable-B1UbsKNt.js";import"./assets-C43MgM-v.js";import"./index-Bh2oEzTI.js";import"./projection-B971H0Re.js";import"./SimpleObservable-KocWTzVy.js";import"./vec3f64-BLpZdpfb.js";import"./Point-Cg0-ChZE.js";import"./cast-Bjksrh93.js";import"./writer-DNAwXnhG.js";import"./jsonMap-0cxwUWs2.js";import"./Extent-Bf3YTe7m.js";import"./Polyline-D9YkgmM_.js";import"./mathUtils-C4_ghTv4.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./aaBoundingBox-BE7cC1jD.js";import"./elevationInfoUtils-BC_66_Fg.js";import"./unitConversionUtils-BMfW9yAe.js";import"./lengthUtils-DL1-FDQQ.js";import"./featureReferenceUtils-DBGXy8CW.js";import"./vec32-Dvg_eL9J.js";import"./common-DQOJ18NT.js";import"./sphere-C77djCO6.js";import"./mat4-GpOFENPA.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./mat3-BRl2i9Bz.js";import"./mat3f64-BBpwCtoL.js";import"./plane-IENfwZlB.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-CCm9z-pX.js";import"./vec2f64-miziP1SN.js";import"./mathUtils-BG-eq9fO.js";import"./intersectorUtils-BK9EUwUf.js";import"./boundedPlane-EV1sS2Ke.js";import"./lineSegment-D7sKPPYf.js";import"./intersectorUtilsConversions-D_fcRVdX.js";import"./Intersector-wXoCuQ8W.js";import"./Intersector-BQ92CPLA.js";import"./persistable-DjaiFmiM.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./uuid-fwrPAdZb.js";import"./resourceExtension-D8MnQ6oV.js";import"./persistableUrlUtils-fa1mAujs.js";import"./ElevationInfo-CA5m_tHv.js";import"./fieldUtils-tmQlKvWo.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./geometry-D964gYQX.js";import"./Evented-BHRw9x22.js";import"./shared-B3wH2qpO.js";import"./asyncUtils-CWX51uTe.js";import"./Loadable-BabW5Xcc.js";import"./Promise-B2Hu02L7.js";import"./TimeExtent-DocT5yPf.js";import"./timeUtils-8fb_2oAt.js";import"./layerContainerType-C5CzMsLd.js";import"./commonProperties-CPyIG_-u.js";import"./AttributeTableTemplate-BZeVyq-j.js";import"./opacityUtils-C68Tlu6_.js";const g=s.ofType(a);let r=class extends f(l(u)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new p,this.opacity=1}initialize(){this.addHandles(y(()=>this.analysis,(t,o)=>{o!=null&&o.parent===this&&(o.parent=null),t!=null&&(t.parent=this)},d))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var t;return(t=this.analysis)==null?void 0:t.observer}set observer(t){const{analysis:o}=this;o&&(o.observer=t)}get targets(){return this.analysis!=null?this.analysis.targets:new s}set targets(t){var o;n(t,(o=this.analysis)==null?void 0:o.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new p)}};i([e({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([e({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),i([e({type:m,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null),i([e({type:g,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"targets",null),i([e({nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),i([e({readOnly:!0})],r.prototype,"fullExtent",null),i([e({readOnly:!0})],r.prototype,"spatialReference",null),i([e({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),i([e({type:["show","hide"]})],r.prototype,"listMode",void 0),r=i([h("esri.layers.LineOfSightLayer")],r);const Pt=r;export{Pt as default};
