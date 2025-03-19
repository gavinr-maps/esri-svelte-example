import{r,m as s,a as P}from"./Accessor-BmwT4B0c.js";import{d as F}from"./Viewshed-DKHDZnpP.js";import{c as C}from"./Analysis-DG4TFZ53.js";import{d as N,A as S,V as T}from"./reactiveUtils-XM7cS2OP.js";import{n as H,t as J}from"./collectionUtils-CTT-51g7.js";import{a as $}from"./Cyclical-Dlbl-cQK.js";import{s as R,r as A}from"./mathUtils-Cfq9PL9W.js";import{w as D}from"./Extent-g5W9hy0j.js";import{Y as G}from"./projection-CyCZAIaD.js";import{S as U}from"./MultiOriginJSONSupport-DbmrbwMa.js";import{r as Y}from"./writer-DKgfqj4X.js";import{f as k}from"./Layer-DH4_Pn8a.js";import{b as B}from"./OperationalLayer-B__lrMRq.js";import"./featureReferenceUtils-D6mA_na5.js";import"./vec32-Dvg_eL9J.js";import"./vec3f64-BLpZdpfb.js";import"./common-DQOJ18NT.js";import"./sphere-Cin5efBj.js";import"./mat4-Fi6iAz29.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./Polyline-s-JzsQqo.js";import"./Point-Cz2JYYmX.js";import"./cast-CsZslgGN.js";import"./index-4eY77cms.js";import"./JSONSupport-DcrLLGjL.js";import"./mat3-CR8GKnhD.js";import"./mat3f64-BBpwCtoL.js";import"./plane-CpXmOyqq.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-CCm9z-pX.js";import"./vec2f64-Dy6m9Nrb.js";import"./mathUtils-BgCEaV43.js";import"./intersectorUtils-BNnvTT1E.js";import"./boundedPlane-DuGhiiFM.js";import"./lineSegment-v806maA5.js";import"./intersectorUtilsConversions-CiJ6bOx7.js";import"./aaBoundingBox-Dw3yBk2f.js";import"./Intersector-zrebwyaY.js";import"./Clonable-Z-AWS-16.js";import"./Identifiable-BHVfzH03.js";import"./Evented-Dw4_VOGn.js";import"./SimpleObservable-CvOkykwM.js";import"./projectBuffer-CQnuEMuP.js";import"./geodesicConstants-RQL9oKdk.js";import"./Portal-CmmHxpLg.js";import"./Promise-DfET-uns.js";import"./TimeExtent-BO6BsF_x.js";import"./timeUtils-C1c_L2Fd.js";import"./layerContainerType-C5CzMsLd.js";import"./commonProperties-B0GHoNP5.js";import"./ElevationInfo-BPOqhCue.js";import"./opacityUtils-Dim20wpZ.js";import"./unitConversionUtils-rg07EgOm.js";import"./lengthUtils-_77UiyVF.js";import"./AttributeTableTemplate-cR37sM72.js";const _=T.ofType(F);let l=class extends C{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(N(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},S))}get viewsheds(){return this._get("viewsheds")||new _}set viewsheds(e){this._set("viewsheds",H(e,this.viewsheds,_))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const i=this.viewsheds.filter(t=>t.observer!=null),h=i.map(t=>t.observer).toArray(),p=G(h,e);return p.pending!=null?{pending:p.pending,extent:null}:{pending:null,extent:p.geometries.map((t,a)=>{const x=i.at(a);return t!=null&&x!=null?this._computeViewshedExtent(this.viewsheds.at(a),t):null}).filter(t=>t!=null).reduce((t,a)=>I(t,a),null)}}_computeViewshedExtent(e,i){const{farDistance:h,heading:p,tilt:t,horizontalFieldOfView:a,verticalFieldOfView:x}=e,{spatialReference:f}=i,g=a/2,b=x/2,O=h/f.metersPerUnit,j=[$.normalize(p-g),p,$.normalize(p+g)],m=D.fromPoint(i),w=y=>{const u=j.map(n=>$.normalize(n-y));if(u[0]>u[2]||a===360)return O;const d=u.map(n=>Math.abs(n>180?360-n:n)).reduce((n,v)=>n>v?v:n);return d>90?0:O*Math.cos(R(d))};m.xmax+=w(90),m.xmin-=w(-90),m.ymax+=w(0),m.ymin-=w(180);const c=i.z;if(c!=null){let y=c,u=c;const d=t-90,n=A(d+b,-90,90),v=A(d-b,-90,90),V=f!=null&&f.isGeographic?h:O;y+=V*E(n),u+=V*E(v);const q=L(b)*V,M=E(d)*q*(1-L(g));t<90&&(y-=M),t>90&&(u-=M),m.zmax=Math.max(y,c),m.zmin=Math.min(u,c)}return m}clear(){this.viewsheds.removeAll()}};function I(e,i){return e==null?i:i==null?e:e.union(i)}function L(e){return Math.cos(R(e))}function E(e){return Math.sin(R(e))}r([s({type:["viewshed"]})],l.prototype,"type",void 0),r([s({cast:J,type:_,nonNullable:!0})],l.prototype,"viewsheds",null),r([s({readOnly:!0})],l.prototype,"spatialReference",null),r([s()],l.prototype,"_extent",void 0),r([s({readOnly:!0})],l.prototype,"extent",null),r([s({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=r([P("esri.analysis.ViewshedAnalysis")],l);const z=l;let o=class extends B(U(k)){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new z,this.opacity=1}initialize(){this.addHandles(N(()=>this.source,(e,i)=>{i!=null&&i.parent===this&&(i.parent=null),e!=null&&(e.parent=this)},S))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new z)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,i,h,p){i.viewsheds=e.filter(t=>t.isValid()).map(t=>t.toJSON(p)).toJSON()}};r([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([s({type:["ViewshedLayer"]})],o.prototype,"operationalLayerType",void 0),r([s({type:z,nonNullable:!0})],o.prototype,"source",void 0),r([s({readOnly:!0})],o.prototype,"spatialReference",null),r([s({readOnly:!0})],o.prototype,"fullExtent",null),r([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),r([s({type:["show","hide"]})],o.prototype,"listMode",void 0),r([s({type:T.ofType(F),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],o.prototype,"viewsheds",null),r([Y("web-scene","viewsheds")],o.prototype,"writeViewsheds",null),o=r([P("esri.layers.ViewshedLayer")],o);const We=o;export{We as default};
