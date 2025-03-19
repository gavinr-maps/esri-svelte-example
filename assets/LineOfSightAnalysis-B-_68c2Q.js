import{r,m as o,a as c}from"./Accessor-BmwT4B0c.js";import{c as y}from"./Analysis-DG4TFZ53.js";import{f,u as v}from"./LineOfSightAnalysisTarget-BdC6usKT.js";import{d as x,A as b,V as z}from"./reactiveUtils-XM7cS2OP.js";import{n as E,t as _}from"./collectionUtils-CTT-51g7.js";import{X as $}from"./projection-CyCZAIaD.js";import{a as w,l as A,c as O}from"./aaBoundingBox-Dw3yBk2f.js";import{i as R}from"./elevationInfoUtils-D26wVF2d.js";const p=z.ofType(f);let t=class extends y{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(x(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},b))}get targets(){return this._get("targets")||new p}set targets(e){this._set("targets",E(e,this.targets,p))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var d;const e=this.spatialReference;if(((d=this.observer)==null?void 0:d.position)==null||e==null)return null;const u=i=>R(i.position,i.elevationInfo)==="absolute-height",n=this.observer.position,a=w(n.x,n.y,n.z,n.x,n.y,n.z);for(const i of this.targets)if(i.position!=null){const s=$(i.position,e);if(s.pending!=null)return{pending:s.pending,extent:null};if(s.geometry!=null){const{x:g,y:m,z:h}=s.geometry;A(a,[g,m,h])}}const l=O(a,e);return u(this.observer)&&this.targets.every(u)||(l.zmin=void 0,l.zmax=void 0),{pending:null,extent:l}}clear(){this.observer=null,this.targets.removeAll()}};r([o({type:["line-of-sight"]})],t.prototype,"type",void 0),r([o({type:v,json:{read:!0,write:!0}})],t.prototype,"observer",void 0),r([o({cast:_,type:p,nonNullable:!0,json:{read:!0,write:!0}})],t.prototype,"targets",null),r([o({value:null,readOnly:!0})],t.prototype,"extent",void 0),r([o({readOnly:!0})],t.prototype,"spatialReference",null),r([o({readOnly:!0})],t.prototype,"requiredPropertiesForEditing",null),t=r([c("esri.analysis.LineOfSightAnalysis")],t);const L=t;export{L as v};
