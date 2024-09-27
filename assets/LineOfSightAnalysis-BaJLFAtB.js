import{e as r}from"./Evented-CXIxDjmW.js";import{c as y}from"./Analysis-ffiH0xaW.js";import{f,u as c}from"./LineOfSightAnalysisTarget-A3DPGN1j.js";import{V as v,d as x,A as b}from"./reactiveUtils-BFQ0BtrB.js";import{t as $,n as z}from"./collectionUtils-Dm1icNvk.js";import{y as n,b as E}from"./subclass-BR3PhgZG.js";import{V as _}from"./projection-A9yUaaTs.js";import{a as w,h as O,e as R}from"./aaBoundingBox-rJEWaOSN.js";import{i as A}from"./elevationInfoUtils-Bl7QRRwv.js";const p=v.ofType(f);let t=class extends y{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(x(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},b))}get targets(){return this._get("targets")||new p}set targets(e){this._set("targets",z(e,this.targets,p))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var m;const e=this.spatialReference;if(((m=this.observer)==null?void 0:m.position)==null||e==null)return null;const a=i=>A(i.position,i.elevationInfo)==="absolute-height",o=this.observer.position,u=w(o.x,o.y,o.z,o.x,o.y,o.z);for(const i of this.targets)if(i.position!=null){const s=_(i.position,e);if(s.pending!=null)return{pending:s.pending,extent:null};if(s.geometry!=null){const{x:d,y:g,z:h}=s.geometry;O(u,[d,g,h])}}const l=R(u,e);return a(this.observer)&&this.targets.every(a)||(l.zmin=void 0,l.zmax=void 0),{pending:null,extent:l}}clear(){this.observer=null,this.targets.removeAll()}};r([n({type:["line-of-sight"]})],t.prototype,"type",void 0),r([n({type:c,json:{read:!0,write:!0}})],t.prototype,"observer",void 0),r([n({cast:$,type:p,nonNullable:!0,json:{read:!0,write:!0}})],t.prototype,"targets",null),r([n({value:null,readOnly:!0})],t.prototype,"extent",void 0),r([n({readOnly:!0})],t.prototype,"spatialReference",null),r([n({readOnly:!0})],t.prototype,"requiredPropertiesForEditing",null),t=r([E("esri.analysis.LineOfSightAnalysis")],t);const N=t;export{N as v};
