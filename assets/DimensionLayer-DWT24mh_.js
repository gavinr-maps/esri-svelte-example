import{e as t}from"./Evented-CXIxDjmW.js";import{c as R}from"./Analysis-ffiH0xaW.js";import{u as a}from"./Color-DDUWtbqR.js";import{l as N}from"./Clonable-cKbRam6-.js";import{u as O}from"./assets-C2mb-ea2.js";import{o as f,e as $}from"./screenUtils-PfxkaaMN.js";import{y as i,N as d,b as c}from"./subclass-BR3PhgZG.js";import{u as x}from"./LengthDimension-oswN1BvH.js";import{V as b,d as v,A as P}from"./reactiveUtils-BFQ0BtrB.js";import{t as S,n as j}from"./collectionUtils-Dm1icNvk.js";import{w as g}from"./Extent-DHjqVB-p.js";import{X as E}from"./projection-A9yUaaTs.js";import{S as q}from"./MultiOriginJSONSupport-DjAXzJun.js";import{r as D}from"./writer-3zufXUNV.js";import{f as k}from"./Layer-C96_yo4i.js";import{b as z}from"./OperationalLayer-B61mRSes.js";import"./Accessor-D6mNnsWy.js";import"./Identifiable-BLvpQbOc.js";import"./colorUtils-CS9vdHXB.js";import"./mathUtils-ClvKsMak.js";import"./index-CeCSsEgo.js";import"./geometry-DpwwkAX1.js";import"./Point-DB4Hp4hH.js";import"./jsonMap-DCC6W5ex.js";import"./Polyline-D97hl-6E.js";import"./Cyclical-BY_I03kj.js";import"./shared-B3wH2qpO.js";import"./projectBuffer-vsa0P_cF.js";import"./geodesicConstants-XRAvAZCD.js";import"./TimeExtent-41gxTbrv.js";import"./timeUtils-DQR2jUPL.js";import"./Promise-CZrWwByK.js";import"./Portal-liet8xHC.js";import"./layerContainerType-C5CzMsLd.js";import"./commonProperties-C-F8Nu9F.js";import"./persistableUrlUtils-BcifXQ1Z.js";import"./ElevationInfo-BxYXLfrw.js";import"./fieldUtils-CNduWQU9.js";import"./intl-Dpfm8vPB.js";import"./unitConversionUtils-Dl04YuQU.js";import"./lengthUtils-D7_DvYH0.js";import"./opacityUtils-BT7mQkwC.js";let s=class extends O(N){constructor(e){super(e),this.type="simple",this.color=new a("black"),this.lineSize=2,this.fontSize=10,this.textColor=new a("black"),this.textBackgroundColor=new a([255,255,255,.6])}};t([i({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],s.prototype,"type",void 0),t([i({type:a,nonNullable:!0,json:{type:[d],write:{isRequired:!0}}})],s.prototype,"color",void 0),t([i({type:Number,cast:f,nonNullable:!0,range:{min:$(1)},json:{write:{isRequired:!0}}})],s.prototype,"lineSize",void 0),t([i({type:Number,cast:f,nonNullable:!0,json:{write:{isRequired:!0}}})],s.prototype,"fontSize",void 0),t([i({type:a,nonNullable:!0,json:{type:[d],write:{isRequired:!0}}})],s.prototype,"textColor",void 0),t([i({type:a,nonNullable:!0,json:{type:[d],write:{isRequired:!0}}})],s.prototype,"textBackgroundColor",void 0),s=t([c("esri.analysis.DimensionSimpleStyle")],s);const h=s,y=b.ofType(x);let l=class extends R{constructor(e){super(e),this.type="dimension",this.style=new h,this.extent=null}initialize(){this.addHandles(v(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},P))}get dimensions(){return this._get("dimensions")||new y}set dimensions(e){this._set("dimensions",j(e,this.dimensions,y))}get spatialReference(){for(const e of this.dimensions){if(e.startPoint!=null)return e.startPoint.spatialReference;if(e.endPoint!=null)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,o)=>(e.push(o.startPoint,o.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(e==null)return{pending:null,extent:null};const o=[];for(const r of this.dimensions)r.startPoint!=null&&o.push(r.startPoint),r.endPoint!=null&&o.push(r.endPoint);const p=E(o,e);if(p.pending!=null)return{pending:p.pending,extent:null};let m=null;return p.geometries!=null&&(m=p.geometries.reduce((r,u)=>r==null?u!=null?g.fromPoint(u):null:u!=null?r.union(g.fromPoint(u)):r,null)),{pending:null,extent:m}}clear(){this.dimensions.removeAll()}};t([i({type:["dimension"]})],l.prototype,"type",void 0),t([i({cast:S,type:y,nonNullable:!0})],l.prototype,"dimensions",null),t([i({readOnly:!0})],l.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:h}},nonNullable:!0})],l.prototype,"style",void 0),t([i({value:null,readOnly:!0})],l.prototype,"extent",void 0),t([i({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=t([c("esri.analysis.DimensionAnalysis")],l);const w=l;let n=class extends z(q(k)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new w,this.opacity=1,e){const{source:o,style:p}=e;o&&p&&(o.style=p)}}initialize(){this.addHandles([v(()=>this.source,(e,o)=>{o!=null&&o.parent===this&&(o.parent=null),e!=null&&(e.parent=this)},P)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new w)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,o,p,m){o.dimensions=e.filter(({startPoint:r,endPoint:u})=>r!=null&&u!=null).map(r=>r.toJSON(m)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([i({type:["ArcGISDimensionLayer"]})],n.prototype,"operationalLayerType",void 0),t([i({nonNullable:!0})],n.prototype,"source",void 0),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:h}},json:{write:{ignoreOrigin:!0}}})],n.prototype,"style",null),t([i({readOnly:!0})],n.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([i({type:["show","hide"]})],n.prototype,"listMode",void 0),t([i({type:b.ofType(x),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"dimensions",null),t([D("web-scene","dimensions")],n.prototype,"writeDimensions",null),n=t([c("esri.layers.DimensionLayer")],n);const Pe=n;export{Pe as default};
