import{d9 as x,bb as P,fX as d,f as i,g as s,aL as w,j as h,a5 as T,gQ as N,V as v,t as k,k as $,fk as O,q as L,gU as C,dz as H,gV as U,gW as V,bP as M}from"./index-27db053b.js";import{c as Q}from"./Analysis-4f128098.js";import{j as f}from"./persistable-2359aba1.js";import{h as R}from"./ElevationInfo-aaff1467.js";import{r as W}from"./elevationInfoUtils-179f43ec.js";import{m as X}from"./MultiOriginJSONSupport-9d9b01a6.js";import{u as B}from"./OperationalLayer-b2407116.js";import"./MD5-715f37cd.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-c56f9c27.js";import"./lengthUtils-535759c3.js";import"./commonProperties-665c2ea3.js";function E(t,e){return I(t)===I(e)}function I(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let n=null;return n=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,n==null?null:`o-${e}-${n}`}const z={json:{write:{writer:D,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:G}}}};function D(t,e){var n;((n=t==null?void 0:t.layer)==null?void 0:n.objectIdField)!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function G(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let a=class extends x(P(T)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return d(this.position,e.position)&&d(this.elevationInfo,e.elevationInfo)&&E(this.feature,e.feature)}};i([s({type:w,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),i([s({type:R}),f()],a.prototype,"elevationInfo",void 0),i([s(z)],a.prototype,"feature",void 0),a=i([h("esri.analysis.LineOfSightAnalysisObserver")],a);const F=a;let u=class extends x(N){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return d(this.position,t.position)&&d(this.elevationInfo,t.elevationInfo)&&E(this.feature,t.feature)}};i([s({type:w}),f()],u.prototype,"position",void 0),i([s({type:R}),f()],u.prototype,"elevationInfo",void 0),i([s(z)],u.prototype,"feature",void 0),u=i([h("esri.analysis.LineOfSightAnalysisTarget")],u);const S=u,g=v.ofType(S);let o=class extends Q{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles($(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},O))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",L(e,this.targets,g))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var m;const e=this.spatialReference;if(((m=this.observer)==null?void 0:m.position)==null||e==null)return null;const n=p=>W(p.position,p.elevationInfo)==="absolute-height",l=this.observer.position,b=C(l.x,l.y,l.z,l.x,l.y,l.z);for(const p of this.targets)if(p.position!=null){const y=H(p.position,e);if(y.pending!=null)return{pending:y.pending,extent:null};if(y.geometry!=null){const{x:q,y:A,z:_}=y.geometry;U(b,[q,A,_])}}const c=V(b,e);return n(this.observer)&&this.targets.every(n)||(c.zmin=void 0,c.zmax=void 0),{pending:null,extent:c}}clear(){this.observer=null,this.targets.removeAll()}};i([s({type:["line-of-sight"]})],o.prototype,"type",void 0),i([s({type:F,json:{read:!0,write:!0}})],o.prototype,"observer",void 0),i([s({cast:k,type:g,nonNullable:!0,json:{read:!0,write:!0}})],o.prototype,"targets",null),i([s({value:null,readOnly:!0})],o.prototype,"extent",void 0),i([s({readOnly:!0})],o.prototype,"spatialReference",null),i([s({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",null),o=i([h("esri.analysis.LineOfSightAnalysis")],o);const j=o,J=v.ofType(S);let r=class extends B(X(M)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new j,this.opacity=1}initialize(){this.addHandles($(()=>this.analysis,(t,e)=>{e!=null&&e.parent===this&&(e.parent=null),t!=null&&(t.parent=this)},O))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var t;return(t=this.analysis)==null?void 0:t.observer}set observer(t){const{analysis:e}=this;e&&(e.observer=t)}get targets(){return this.analysis!=null?this.analysis.targets:new v}set targets(t){var e;L(t,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new j)}};i([s({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([s({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),i([s({type:F,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null),i([s({type:J,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"targets",null),i([s({nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),i([s({readOnly:!0})],r.prototype,"fullExtent",null),i([s({readOnly:!0})],r.prototype,"spatialReference",null),i([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),i([s({type:["show","hide"]})],r.prototype,"listMode",void 0),r=i([h("esri.layers.LineOfSightLayer")],r);const yt=r;export{yt as default};
