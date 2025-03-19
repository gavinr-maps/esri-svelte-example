import{r as t,m as i,$ as d,a as c}from"./Accessor-BmwT4B0c.js";import{c as $}from"./Analysis-DG4TFZ53.js";import{h as a}from"./Color-VJEMvW-n.js";import{a as R}from"./Clonable-Z-AWS-16.js";import{S}from"./JSONSupport-DcrLLGjL.js";import{e as O,o as h}from"./screenUtils-_ZIvrt5o.js";import{u as x}from"./LengthDimension-BswUxyjY.js";import{d as b,A as v,V as P}from"./reactiveUtils-XM7cS2OP.js";import{n as N,t as j}from"./collectionUtils-CTT-51g7.js";import{w as g}from"./Extent-g5W9hy0j.js";import{Y as E}from"./projection-CyCZAIaD.js";import{S as q}from"./MultiOriginJSONSupport-DbmrbwMa.js";import{r as A}from"./writer-DKgfqj4X.js";import{f as D}from"./Layer-DH4_Pn8a.js";import{b as k}from"./OperationalLayer-B__lrMRq.js";import"./Identifiable-BHVfzH03.js";import"./colorUtils-Rxh2V3ai.js";import"./mathUtils-Cfq9PL9W.js";import"./Cyclical-Dlbl-cQK.js";import"./cast-CsZslgGN.js";import"./index-4eY77cms.js";import"./Point-Cz2JYYmX.js";import"./Evented-Dw4_VOGn.js";import"./SimpleObservable-CvOkykwM.js";import"./vec3f64-BLpZdpfb.js";import"./Polyline-s-JzsQqo.js";import"./projectBuffer-CQnuEMuP.js";import"./geodesicConstants-RQL9oKdk.js";import"./Portal-CmmHxpLg.js";import"./Promise-DfET-uns.js";import"./TimeExtent-BO6BsF_x.js";import"./timeUtils-C1c_L2Fd.js";import"./layerContainerType-C5CzMsLd.js";import"./commonProperties-B0GHoNP5.js";import"./ElevationInfo-BPOqhCue.js";import"./opacityUtils-Dim20wpZ.js";import"./unitConversionUtils-rg07EgOm.js";import"./lengthUtils-_77UiyVF.js";import"./AttributeTableTemplate-cR37sM72.js";let s=class extends S.JSONSupportMixin(R){constructor(e){super(e),this.type="simple",this.color=new a("black"),this.lineSize=2,this.fontSize=10,this.textColor=new a("black"),this.textBackgroundColor=new a([255,255,255,.6])}};t([i({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],s.prototype,"type",void 0),t([i({type:a,nonNullable:!0,json:{type:[d],write:{isRequired:!0}}})],s.prototype,"color",void 0),t([i({type:Number,cast:h,nonNullable:!0,range:{min:O(1)},json:{write:{isRequired:!0}}})],s.prototype,"lineSize",void 0),t([i({type:Number,cast:h,nonNullable:!0,json:{write:{isRequired:!0}}})],s.prototype,"fontSize",void 0),t([i({type:a,nonNullable:!0,json:{type:[d],write:{isRequired:!0}}})],s.prototype,"textColor",void 0),t([i({type:a,nonNullable:!0,json:{type:[d],write:{isRequired:!0}}})],s.prototype,"textBackgroundColor",void 0),s=t([c("esri.analysis.DimensionSimpleStyle")],s);const f=s,y=P.ofType(x);let l=class extends ${constructor(e){super(e),this.type="dimension",this.style=new f,this.extent=null}initialize(){this.addHandles(b(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},v))}get dimensions(){return this._get("dimensions")||new y}set dimensions(e){this._set("dimensions",N(e,this.dimensions,y))}get spatialReference(){for(const e of this.dimensions){if(e.startPoint!=null)return e.startPoint.spatialReference;if(e.endPoint!=null)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,r)=>(e.push(r.startPoint,r.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(e==null)return{pending:null,extent:null};const r=[];for(const o of this.dimensions)o.startPoint!=null&&r.push(o.startPoint),o.endPoint!=null&&r.push(o.endPoint);const p=E(r,e);if(p.pending!=null)return{pending:p.pending,extent:null};let m=null;return p.geometries!=null&&(m=p.geometries.reduce((o,u)=>o==null?u!=null?g.fromPoint(u):null:u!=null?o.union(g.fromPoint(u)):o,null)),{pending:null,extent:m}}clear(){this.dimensions.removeAll()}};t([i({type:["dimension"]})],l.prototype,"type",void 0),t([i({cast:j,type:y,nonNullable:!0})],l.prototype,"dimensions",null),t([i({readOnly:!0})],l.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:f}},nonNullable:!0})],l.prototype,"style",void 0),t([i({value:null,readOnly:!0})],l.prototype,"extent",void 0),t([i({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=t([c("esri.analysis.DimensionAnalysis")],l);const w=l;let n=class extends k(q(D)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new w,this.opacity=1,e){const{source:r,style:p}=e;r&&p&&(r.style=p)}}initialize(){this.addHandles([b(()=>this.source,(e,r)=>{r!=null&&r.parent===this&&(r.parent=null),e!=null&&(e.parent=this)},v)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new w)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,r,p,m){r.dimensions=e.filter(({startPoint:o,endPoint:u})=>o!=null&&u!=null).map(o=>o.toJSON(m)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([i({type:["ArcGISDimensionLayer"]})],n.prototype,"operationalLayerType",void 0),t([i({nonNullable:!0})],n.prototype,"source",void 0),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:f}},json:{write:{ignoreOrigin:!0}}})],n.prototype,"style",null),t([i({readOnly:!0})],n.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([i({type:["show","hide"]})],n.prototype,"listMode",void 0),t([i({type:P.ofType(x),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"dimensions",null),t([A("web-scene","dimensions")],n.prototype,"writeDimensions",null),n=t([c("esri.layers.DimensionLayer")],n);const xe=n;export{xe as default};
