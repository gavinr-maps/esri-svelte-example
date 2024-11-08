import{r as T}from"./tslib.es6-B3Jf3DVX.js";import{b as X}from"./Accessor-BLX9ikPh.js";import{V as Y}from"./Collection-CEdjem1-.js";import{m as q,a as K}from"./subclass-BZA_h8Db.js";import{s as Q,r as H}from"./Cyclical-oTUX3aX7.js";import{f as G,o as b}from"./quantityUtils-D0GB2dMc.js";import{n as C}from"./vec3f64-BLpZdpfb.js";import{j as u}from"./elevationInfoUtils-BC_66_Fg.js";import{p as P,N as m,S as _,D as x,s as c,U as $,g as F,H as z,c as Z,V as ee,j as N,W as te,X as L,A as ie,C as re,B as se,Y as oe,v as ne,E as he}from"./SnappingManager-BJPyuu7J.js";import{z as ae}from"./Point-Cg0-ChZE.js";import{m as A,b as U,e as B,j as pe,p as de,d as le,_ as ce}from"./vec2-maR1OrZI.js";import{y as R,M as J}from"./angularMeasurementUtils-7e2vxqzG.js";import{u as W}from"./geodesicLengthMeasurementUtils-he3vjGJN.js";import{j as ge,I as M,N as me}from"./geometry2dUtils-DdyQE7AQ.js";import{n as I}from"./vec2f64-miziP1SN.js";import{q as fe,c as ue,o as xe}from"./vec32-Dvg_eL9J.js";import"./Evented-BHRw9x22.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./mathUtils-C4_ghTv4.js";import"./unitConversionUtils-BMfW9yAe.js";import"./lengthUtils-DL1-FDQQ.js";import"./index-Bh2oEzTI.js";import"./asyncUtils-CWX51uTe.js";import"./reactiveUtils-C5zUhJQJ.js";import"./projection-B971H0Re.js";import"./Extent-Bf3YTe7m.js";import"./Polyline-D9YkgmM_.js";import"./writer-DNAwXnhG.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./projectVectorToVector-G2uWGoIb.js";import"./projectPointToVector-GINIbYMz.js";import"./Color-BCS62Hs5.js";import"./colorUtils-0bJDPow9.js";import"./assets-C43MgM-v.js";import"./fieldUtils-tmQlKvWo.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./geometry-D964gYQX.js";import"./timeUtils-8fb_2oAt.js";import"./Query-5Xpquc1r.js";import"./cast-Bjksrh93.js";import"./enumeration-Ba5njXdz.js";import"./jsonUtils-CEfjT-BK.js";import"./DataLayerSource-BKkswDvG.js";import"./Field-ybkHhtnK.js";import"./fieldType-BuzM0UHS.js";import"./FullTextSearch-Csd1Hktu.js";import"./Clonable-D3rtuBWg.js";import"./TimeExtent-DocT5yPf.js";import"./InputManager-Ba9xzDpe.js";import"./Queue-yu3bZ02p.js";import"./signal-D4lghLjV.js";import"./keybindings-DoOdil3D.js";import"./utils-BpB3MnW1.js";import"./Version-BSlAgupz.js";import"./vec42-YcqnINSP.js";import"./common-DQOJ18NT.js";import"./vec4f64-o2zAXfmz.js";import"./geodesicUtils-FCYOaNwu.js";import"./plane-IENfwZlB.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-CCm9z-pX.js";import"./mathUtils-BG-eq9fO.js";import"./sphere-C77djCO6.js";import"./mat4-GpOFENPA.js";import"./mat3-BRl2i9Bz.js";import"./screenUtils-_ZIvrt5o.js";import"./viewUtils-DrPohWV3.js";import"./geometryEngine-DGiYLHJy.js";import"./geometryEngineBase-yFIvKOkM.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-C9rxSL4a.js";import"./geodesicMeasurementUtils-Bt9h4589.js";class k{constructor(i,e){this.view=i,this.options=e,this.squaredShortLineThreshold=P.shortLineThreshold*P.shortLineThreshold}snap(i,e){return e.vertexHandle!=null?e.vertexHandle.type!=="vertex"?[]:this.snapExistingVertex(i,e):this.snapNewVertex(i,e)}edgeExceedsShortLineThreshold(i,e){return this.exceedsShortLineThreshold(m(i.leftVertex.pos,this.view,e),m(i.rightVertex.pos,this.view,e),e)}exceedsShortLineThreshold(i,e,{spatialReference:t}){return this.squaredShortLineThreshold===0||_(x(e,t,u,this.view),x(i,t,u,this.view))>this.squaredShortLineThreshold}isVertical(i,e,{spatialReference:t}){const r=ae(t);return A(c(i),c(e))*r<P.verticalLineThresholdMeters}squaredProximityThreshold(i){return i==="touch"?this._squaredTouchProximityThreshold:this._squaredMouseProximityThreshold}get _squaredMouseProximityThreshold(){return this.options.distance*this.options.distance}get _squaredTouchProximityThreshold(){const{distance:i,touchSensitivityMultiplier:e}=this.options,t=i*e;return t*t}}class ve extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],r=t.edges.length,s=[];if(r<1)return s;const{spatialReference:o}=e,h=x(i,o,u,this.view),{view:n}=this,a=t.edges[r-1];let p=a;do{if(this.edgeExceedsShortLineThreshold(p,e)){const g=$(p,n,e);this._processCandidateProposal(g.left,g.right,i,h,e,s)}p=p.leftVertex.leftEdge}while(p&&p!==a);return s}snapExistingVertex(i,e){const t=[],r=e.vertexHandle,s=r.component;if(s.edges.length<2)return t;const{view:o}=this,{spatialReference:h}=e,n=x(i,h,u,o),a=r.leftEdge,p=r.rightEdge;a&&p&&this.edgeExceedsShortLineThreshold(a,e)&&this.edgeExceedsShortLineThreshold(p,e)&&this._processCandidateProposal(m(a.leftVertex.pos,o,e),m(p.rightVertex.pos,o,e),i,n,e,t);const g=s.edges[0];let l=g;do{if(l!==r.leftEdge&&l!==r.rightEdge&&this.edgeExceedsShortLineThreshold(l,e)){const f=$(l,o,e);this._processCandidateProposal(f.left,f.right,i,n,e,t)}l=l.rightVertex.rightEdge}while(l&&l!==g);return t}_processCandidateProposal(i,e,t,r,s,o){var g;const{spatialReference:h,pointer:n}=s,a=C();Ee(a,i,e,t,s);const p=F(z(a));_(r,x(p,h,u,this.view))<this.squaredProximityThreshold(n)&&o.push(new Z({lineStart:i,lineEnd:e,targetPoint:p,isDraped:((g=s.elevationInfo)==null?void 0:g.mode)==="on-the-ground"}))}}function Ee(d,i,e,t,r){we(d,i,e,t,r)||Ve(d,t,i,e)}function we(d,i,e,t,{spatialReference:r}){const s=R(i,e,r,r);if(s==null)return!1;const o=R(e,t,r,r);if(o==null)return!1;const h=W(e,t,r);if(h==null)return!1;const n=Math.abs(Q.shortestSignedDiff(s,o))>Math.PI/2?H.normalize(s+Math.PI):s;return J(d,e,r,G(h,"meters"),b(n,"radians","geographic"),"geodesic"),d[2]=t[2],!0}function Ve(d,i,e,t){ee(i,{start:e,end:t,type:ge.LINE},d),d[2]=i[2]}let Pe=class extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],r=t.edges.length,s=t.vertices.length,o=[];if(r<2)return o;const{view:h}=this,n=x(i,e.spatialReference,u,h),a=m(t.vertices[s-1].pos,h,e),p=m(t.vertices[0].pos,h,e),g=t.edges[r-1];let l=g;do{if(this.edgeExceedsShortLineThreshold(l,e)){const f=$(l,h,e);this._checkEdgeForParallelLines(f,a,i,n,e,o),this._checkEdgeForParallelLines(f,p,i,n,e,o)}l=l.leftVertex.leftEdge}while(l&&l!==g);return o}snapExistingVertex(i,e){const t=[],r=e.vertexHandle,s=r.component;if(s.edges.length<3)return t;const{view:o}=this,h=x(i,e.spatialReference,u,o),n=r.leftEdge,a=r.rightEdge,p=s.vertices[0],g=m(p.pos,o,e),l=s.vertices.length,f=s.vertices[l-1],w=m(f.pos,o,e),y=s.edges[0];let v=y;do{if(v!==n&&v!==a&&this.edgeExceedsShortLineThreshold(v,e)){const S=$(v,o,e);n&&this._checkEdgeForParallelLines(S,m(n.leftVertex.pos,o,e),i,h,e,t),a&&this._checkEdgeForParallelLines(S,m(a.rightVertex.pos,o,e),i,h,e,t),r===p?this._checkEdgeForParallelLines(S,w,i,h,e,t):r===f&&this._checkEdgeForParallelLines(S,g,i,h,e,t)}v=v.rightVertex.rightEdge}while(v&&v!==y);return t}_checkEdgeForParallelLines(i,e,t,r,s,o){var l;const h=i.left,n=i.right;if(M(E,c(e),c(h),c(n)),U(E,c(e))<P.parallelLineThreshold)return;M(E,c(t),c(h),c(n),c(e));const{spatialReference:a,pointer:p}=s,g=F(N(E[0],E[1],t[2]));if(_(r,x(g,a,u,this.view))<this.squaredProximityThreshold(p)){if(this.isVertical(g,e,s)||this.isVertical(h,n,s)||_e(i,o))return;o.push(new te({referenceLine:i,lineStart:e,targetPoint:g,isDraped:((l=s.elevationInfo)==null?void 0:l.mode)==="on-the-ground"}))}}};function _e(d,i){const e=d.left,t=d.right;for(const r of i)if(M(E,c(t),c(r.constraint.start),c(r.constraint.end),c(e)),U(E,c(t))<P.parallelLineThreshold)return r.addReferenceLine(d),!0;return!1}const E=I();class ye extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],r=[];if(t.vertices.length<2)return r;const{view:s}=this,o=x(i,e.spatialReference,u,s),h=t.vertices.at(-1);this._checkForSnappingCandidate(L.LastVertex,r,h.leftEdge,h,h.leftEdge.leftVertex,i,o,e);const n=t.vertices[0];return this._checkForSnappingCandidate(L.FirstVertex,r,n.rightEdge,n,n.rightEdge.rightVertex,i,o,e),r}snapExistingVertex(i,e){const t=[],r=e.vertexHandle;if(r.component.vertices.length<3)return t;const{view:s}=this,o=x(i,e.spatialReference,u,s),h=r.leftEdge,n=r.rightEdge;if(h!=null&&h.leftVertex.leftEdge){const a=h.leftVertex.leftEdge;this._checkForSnappingCandidate(L.ExistingEdge,t,a,a.rightVertex,a.leftVertex,i,o,e)}if(n!=null&&n.rightVertex.rightEdge){const a=n.rightVertex.rightEdge;this._checkForSnappingCandidate(L.ExistingEdge,t,a,a.leftVertex,a.rightVertex,i,o,e)}return t}_checkForSnappingCandidate(i,e,t,r,s,o,h,n){if(!this.edgeExceedsShortLineThreshold(t,n))return;const a=this.view,p=m(r.pos,a,n),g=m(s.pos,a,n);Se(O,g,p,o,n),this._checkForSnappingCandidateAlongProjectedRay(i,e,g,p,O,o,h,n)}_checkForSnappingCandidateAlongProjectedRay(i,e,t,r,s,o,h,n){var v;const{spatialReference:a,pointer:p}=n,g=B(j,c(o),c(r)),l=pe(s,g)/de(s),f=le(j,c(r),s,l),w=F(N(f[0],f[1],o[2]));if(_(h,x(w,a,u,this.view))>this.squaredProximityThreshold(p)||this.isVertical(w,r,n)||this.isVertical(r,t,n))return;const y=fe(C(),r,s,Math.sign(l));e.push(new ie({targetPoint:w,constraint:new re(r,z(y)),previousVertex:t,otherVertex:r,otherVertexType:se.CENTER,selfSnappingType:i,isDraped:((v=n.elevationInfo)==null?void 0:v.mode)==="on-the-ground"}))}}function Se(d,i,e,t,r){Te(d,i,e,t,r)||Le(d,i,e)}function Te(d,i,e,t,{spatialReference:r}){const s=R(i,e,r,r);if(s==null)return!1;const o=R(e,t,r,r);if(o==null)return!1;const h=Math.sign(H.shortestSignedDiff(s,o))*Math.PI*.5,n=b(s+h,"radians","geographic"),a=C(),p=W(e,t,r);return p!=null&&(J(a,e,r,G(p,"meters"),n,"geodesic"),ue(d,a,e),!0)}function Le(d,i,e){const t=B(j,c(e),c(i));xe(d,t[1],-t[0],0)}const j=I(),O=C();let $e=class extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],r=[],s=t.vertices.length;if(e.editGeometryOperations.data.type!=="polygon"||s<2)return r;const{view:o}=this,h=t.vertices[0],n=t.vertices[s-1],a=m(h.pos,o,e),p=m(n.pos,o,e);return this._processCandidateProposal(a,p,i,e,r),r}snapExistingVertex(i,e){const t=[],r=e.vertexHandle,s=r.component;if(s.edges.length<2||e.editGeometryOperations.data.type==="polyline"&&(r.index===0||r.index===s.vertices.length-1))return t;const{view:o}=this,h=m(r.leftEdge.leftVertex.pos,o,e),n=m(r.rightEdge.rightVertex.pos,o,e);return this._processCandidateProposal(h,n,i,e,t),t}_processCandidateProposal(i,e,t,r,s){var f;if(!this.exceedsShortLineThreshold(i,e,r))return;const o=ce(D,c(i),c(e),.5),h=.5*A(c(i),c(e)),n=me(D,c(t),o,h),a=F(N(n[0],n[1],t[2])),{spatialReference:p,pointer:g}=r,l=x(t,p,u,this.view);if(_(l,x(a,p,u,this.view))<this.squaredProximityThreshold(g)){if(this.isVertical(i,a,r)||this.isVertical(a,e,r))return;s.push(new oe({targetPoint:a,point1:i,point2:e,isDraped:((f=r.elevationInfo)==null?void 0:f.mode)==="on-the-ground"}))}}};const D=I();let V=class extends X{constructor(d){super(d),this.updating=!1,this._snappers=new Y,this._domain=ne.SELF}initialize(){this._snappers.push(new Pe(this.view,this.options),new ve(this.view,this.options),new ye(this.view,this.options),new $e(this.view,this.options))}set options(d){this._set("options",d);for(const i of this._snappers)i.options=d}async fetchCandidates(d,i,e){if(!(i&this._domain&&this.options.effectiveSelfEnabled))return[];const t=[];for(const r of this._snappers.items)for(const s of r.snap(d,e))t.push(s);return he(d,t),t}};T([q({readOnly:!0})],V.prototype,"updating",void 0),T([q({constructOnly:!0})],V.prototype,"view",void 0),T([q()],V.prototype,"options",null),V=T([K("esri.views.interactive.snapping.SelfSnappingEngine")],V);export{V as SelfSnappingEngine};
