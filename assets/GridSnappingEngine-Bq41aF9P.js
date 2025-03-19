import{g as V,B as X,r as p,m as l,a as Y}from"./Accessor-BHnuXKD2.js";import{s as U}from"./mathUtils-DV9iOXpW.js";import{x as D}from"./Point-XGrwlf63.js";import{w as E}from"./vec32-Dvg_eL9J.js";import{U as F,O as G}from"./projection-B2I9Bzj_.js";import{P as W}from"./normalizeUtils-XRAPXbWa.js";import{u as B}from"./scaleUtils-CfLu-sg1.js";import{l as H,u as I,t as T}from"./gridUtils-DagZsDOv.js";import{f as d,d as _,c as k}from"./RightAngleSnappingHint-CCcBBYgG.js";import{r as j,a as q}from"./SnappingManager-CF4NflXd.js";import"./cast-BA_-jlhc.js";import"./index-tefRSezt.js";import"./JSONSupport-CGdeqxpk.js";import"./writer-B2bQV2uU.js";import"./vec3f64-BLpZdpfb.js";import"./common-DQOJ18NT.js";import"./SimpleObservable-7oieNGD8.js";import"./Extent-CBBGeHb-.js";import"./Polyline-BmuD2-ZN.js";import"./projectBuffer-DOU0xvVi.js";import"./geodesicConstants-yASAK_zX.js";import"./normalizeUtilsCommon-D0zPTJCj.js";import"./jsonUtils-Cu7OBRmN.js";import"./utils-Cy8wFNQo.js";import"./utils-CkSELPnj.js";import"./geodesicUtils-Bh_GX0Qj.js";import"./Color-gncXBiLc.js";import"./colorUtils-Rxh2V3ai.js";import"./reactiveUtils-BR0C1Kq4.js";import"./Evented-DCWccWGU.js";import"./opacityUtils-CSd4XoR2.js";import"./Promise-CmQqe-ke.js";import"./timeUtils-D2X862bk.js";import"./projectVectorToVector-dS8io47t.js";import"./projectPointToVector-BS0u8fq6.js";import"./Query-DCBIeen2.js";import"./enumeration-Cr5WIZs4.js";import"./typeUtils-BSg8Y507.js";import"./Field-Cyk7Ur5d.js";import"./fieldType-L-VlbZqy.js";import"./FullTextSearch-BWm_kPUE.js";import"./Clonable-DvJsj5LF.js";import"./TimeExtent-J5qnUFx_.js";import"./InputManager-Bs9UE-jw.js";import"./Queue-BOnccek2.js";import"./signal-DSa0yokC.js";import"./keybindings-DrKrBFID.js";import"./utils-D02V2_jH.js";import"./Version-9k2AOv05.js";import"./vec2-maR1OrZI.js";import"./vec2f64-Dy6m9Nrb.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./plane-4dpuo6-e.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-CCm9z-pX.js";import"./mathUtils-B9R7G-2c.js";import"./sphere-DQxj5tsv.js";import"./mat4-Fi6iAz29.js";import"./mat3-CR8GKnhD.js";import"./elevationInfoUtils-RSZ4Logn.js";import"./unitConversionUtils-C4AR5obr.js";import"./lengthUtils-DjJgJFRg.js";import"./geometry2dUtils-vtViF5g_.js";import"./screenUtils-_ZIvrt5o.js";import"./viewUtils-Ce2x26K8.js";let n=class extends V{constructor(t){super(t),this.options=null}destroy(){this._set("options",null)}get grid(){return this.view.grid}get effectiveViewRotation(){var t;return(t=this.grid)!=null&&t.rotateWithMap?0:U(this.view.rotation??0)}get gridRotation(){var t;return U(((t=this.grid)==null?void 0:t.rotation)??0)}get gridCenter(){var r;const{spatialReference:t,grid:i}=this;if(!i||!t||!F(i.center.spatialReference,t))return null;try{const e=G(i.center,t),o=t.isWrappable&&((r=this.view)==null?void 0:r.center)!=null?W(e.x,this.view.center.x,t):e.x;return d(o,e.y,e.z)}catch(e){return X.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.",e),null}}get offsetScaleFactor(){const{pixelsPerStride:t,grid:i}=this;if(!i||!t)return 1;const{majorLineInterval:r,dynamicScaling:e}=i;return r<1?null:H(r,t,e)}get spatialReference(){return this.view.spatialReference}get gridMetersPerStride(){const{grid:t}=this;return t?D(t.spacing,t.units,"meters"):null}get viewMetersPerPixel(){const{viewMetersPerSRUnit:t}=this;return t==null?null:t*B(this.view.scale,this.view.spatialReference)}get viewMetersPerSRUnit(){const{spatialReference:t}=this.view;return this.gridCenter?I(this.gridCenter[0],this.gridCenter[1],t):null}get pixelsPerStride(){const{gridMetersPerStride:t,viewMetersPerPixel:i}=this;return i&&t?t/i:null}get updating(){return this.grid!=null&&this.spatialReference!=null&&this.viewMetersPerSRUnit==null}async fetchCandidates(t,i,r){var m;const{options:e,view:o}=this;if(!(e!=null&&e.effectiveGridEnabled)||!o.grid||(m=r.feature)!=null&&m.attributes&&_ in r.feature.attributes)return[];const s=r.coordinateHelper.arrayToPoint(t),a=e.distance*(r.pointer==="touch"?e.touchSensitivityMultiplier:1);return this.fetchCandidatesSync(s,a)}fetchCandidatesSync(t,i){const r=[],{grid:e,effectiveViewRotation:o,gridRotation:s,gridCenter:a,viewMetersPerPixel:m,viewMetersPerSRUnit:g,offsetScaleFactor:S,spatialReference:f,gridMetersPerStride:C,pixelsPerStride:$}=this;if(!(e&&m&&g&&a&&f&&S&&C&&$)||!e.dynamicScaling&&$<T||!F(t.spatialReference,f))return r;const y=G(t,f),L=d(y.x,y.y,y.z),u=h(L,-s,a,-o),P=C/g*S,c=A(u,P,a),{shouldSnapX:w,shouldSnapY:v}=J(c,u,i,m,g);if(!w&&!v)return[];const O=d((w?c:u)[0],(v?c:u)[1]),M=h(O,s,a,o),b=h(c,s,a,o);if(v){const R=z(c,u,P,"y"),x=h(R,s,a,o);r.push(new j({lineStart:b,lineEnd:x,targetPoint:M,isDraped:!1}))}if(w){const R=z(c,u,P,"x"),x=h(R,s,a,o);r.push(new j({lineStart:b,lineEnd:x,targetPoint:M,isDraped:!1}))}return w&&v&&r.push(new q(M,r[0],r[1],!1)),r}};p([l({constructOnly:!0})],n.prototype,"view",void 0),p([l()],n.prototype,"options",void 0),p([l()],n.prototype,"grid",null),p([l()],n.prototype,"effectiveViewRotation",null),p([l()],n.prototype,"gridRotation",null),p([l()],n.prototype,"gridCenter",null),p([l()],n.prototype,"offsetScaleFactor",null),p([l()],n.prototype,"spatialReference",null),p([l()],n.prototype,"gridMetersPerStride",null),p([l()],n.prototype,"viewMetersPerPixel",null),p([l()],n.prototype,"viewMetersPerSRUnit",null),p([l()],n.prototype,"pixelsPerStride",null),p([l()],n.prototype,"updating",null),n=p([Y("esri.views.interactive.snapping.GridSnappingEngine")],n);const h=(t,i,r,e)=>{const o=k(t[0],t[1],t[2]);return E(o,E(o,o,r,i),r,e)},A=(t,i,r)=>{const e=(t[0]-r[0])/i,o=(t[1]-r[1])/i,s=Math.trunc(e),a=Math.trunc(o),m=Math.round(e%1),g=Math.round(o%1),S=r[0]+(s+m)*i,f=r[1]+(a+g)*i;return d(S,f)},J=(t,i,r,e,o)=>{if(e<=0)return{shouldSnapX:!1,shouldSnapY:!1};const s=(t[0]-i[0])/e,a=(t[1]-i[1])/e;return{shouldSnapX:Math.abs(s*o)<r,shouldSnapY:Math.abs(a*o)<r}},z=(t,i,r,e)=>{if(e==="y"){const s=i[0]>t[0]?1:-1;return d(t[0]+r*s,t[1])}const o=i[1]>t[1]?1:-1;return d(t[0],t[1]+r*o)};export{n as GridSnappingEngine};
