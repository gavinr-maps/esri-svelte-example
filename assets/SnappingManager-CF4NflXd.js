const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SelfSnappingEngine-4KwLoWjo.js","./Accessor-BHnuXKD2.js","./reactiveUtils-BR0C1Kq4.js","./Evented-DCWccWGU.js","./SimpleObservable-7oieNGD8.js","./Cyclical-CPiNl4ru.js","./mathUtils-DV9iOXpW.js","./quantityUtils-1LswOhxZ.js","./Point-XGrwlf63.js","./cast-BA_-jlhc.js","./index-tefRSezt.js","./index-Cx51aysm.css","./JSONSupport-CGdeqxpk.js","./writer-B2bQV2uU.js","./vec3f64-BLpZdpfb.js","./elevationInfoUtils-RSZ4Logn.js","./unitConversionUtils-C4AR5obr.js","./lengthUtils-DjJgJFRg.js","./RightAngleSnappingHint-CCcBBYgG.js","./Color-gncXBiLc.js","./colorUtils-Rxh2V3ai.js","./opacityUtils-CSd4XoR2.js","./Promise-CmQqe-ke.js","./timeUtils-D2X862bk.js","./vec32-Dvg_eL9J.js","./common-DQOJ18NT.js","./projectVectorToVector-dS8io47t.js","./Extent-CBBGeHb-.js","./Polyline-BmuD2-ZN.js","./projectBuffer-DOU0xvVi.js","./geodesicConstants-yASAK_zX.js","./projectPointToVector-BS0u8fq6.js","./projection-B2I9Bzj_.js","./Query-DCBIeen2.js","./enumeration-Cr5WIZs4.js","./jsonUtils-Cu7OBRmN.js","./typeUtils-BSg8Y507.js","./Field-Cyk7Ur5d.js","./fieldType-L-VlbZqy.js","./FullTextSearch-BWm_kPUE.js","./Clonable-DvJsj5LF.js","./TimeExtent-J5qnUFx_.js","./InputManager-Bs9UE-jw.js","./Queue-BOnccek2.js","./signal-DSa0yokC.js","./keybindings-DrKrBFID.js","./utils-D02V2_jH.js","./Version-9k2AOv05.js","./vec2-maR1OrZI.js","./vec2f64-Dy6m9Nrb.js","./vec42-YcqnINSP.js","./vec4f64-o2zAXfmz.js","./geodesicUtils-Bh_GX0Qj.js","./plane-4dpuo6-e.js","./mat3f64-BBpwCtoL.js","./mat4f64-Dk4dwAN8.js","./quatf64-CCm9z-pX.js","./mathUtils-B9R7G-2c.js","./sphere-DQxj5tsv.js","./mat4-Fi6iAz29.js","./mat3-CR8GKnhD.js","./geometry2dUtils-vtViF5g_.js","./angularMeasurementUtils-lDJJxFDs.js","./geodesicLengthMeasurementUtils-C8eO8ivV.js","./geometryEngine-CtEcpiHE.js","./geometryEngineBase-yFIvKOkM.js","./_commonjsHelpers-DCkdB7M8.js","./hydrated-Dw-Mfo_Y.js","./geodesicMeasurementUtils-ChQtpZ42.js","./screenUtils-_ZIvrt5o.js","./viewUtils-Ce2x26K8.js","./GridSnappingEngine-Bq41aF9P.js","./normalizeUtils-XRAPXbWa.js","./normalizeUtilsCommon-D0zPTJCj.js","./utils-Cy8wFNQo.js","./utils-CkSELPnj.js","./scaleUtils-CfLu-sg1.js","./gridUtils-DagZsDOv.js","./FeatureSnappingEngine-CoGxIJ7e.js","./UpdatingHandles-ptqz1ck8.js","./FeatureFilter-DEE1jTWq.js","./floorFilterUtils-DZ5C6FQv.js","./layerUtils-dJgsXxkC.js","./layerViewUtils-tkZ5z_iY.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./index-tefRSezt.js";import{r as o,m as c,a as H,g as z,B as ee,ap as te,D as N,H as ie}from"./Accessor-BHnuXKD2.js";import{V as T,d as G,A as ne,a as se,C as re}from"./reactiveUtils-BR0C1Kq4.js";import{i as ae}from"./Evented-DCWccWGU.js";import{O as k,Q as oe}from"./projection-B2I9Bzj_.js";import{j as q}from"./elevationInfoUtils-RSZ4Logn.js";import{p as $,i as f,F as de,n as g,k as _,G as ce,h as pe,o as he,R as X,v as B,r as le,a as Q,z as ue,s as Z,w as P,e as F,x as j,E as fe,C as ge}from"./RightAngleSnappingHint-CCcBBYgG.js";import{c as _e,u as ye,H as R,I as Ee}from"./vec32-Dvg_eL9J.js";import{t as ve,n as J}from"./vec3f64-BLpZdpfb.js";import{m as Se}from"./vec2-maR1OrZI.js";import{c as me,f as we}from"./screenUtils-_ZIvrt5o.js";import{e as be}from"./projectVectorToVector-dS8io47t.js";import{i as Te}from"./viewUtils-Ce2x26K8.js";let S=class extends z{constructor(e){super(e),this.layer=null,this.enabled=!0,this.updating=!1,this.availability=1,this.sublayerSources=new T}};o([c({constructOnly:!0})],S.prototype,"layer",void 0),o([c()],S.prototype,"enabled",void 0),o([c()],S.prototype,"updating",void 0),o([c()],S.prototype,"availability",void 0),o([c()],S.prototype,"sublayerSources",void 0),S=o([H("esri.views.interactive.snapping.FeatureSnappingLayerSource")],S);const K=S;let l=class extends z{constructor(e){super(e),this.enabled=!1,this.enabledToggled=!1,this.forceDisabled=!1,this.selfEnabled=!0,this.featureEnabled=!0,this.gridEnabled=!1,this.attributeRulesEnabled=!1,this.featureSources=new T,this.distance=$.distance,this.touchSensitivityMultiplier=$.touchSensitivityMultiplier}get effectiveEnabled(){return!this.forceDisabled&&(this.enabledToggled?!this.enabled:this.enabled)}get effectiveGridEnabled(){return this.effectiveEnabled&&this.gridEnabled}get effectiveSelfEnabled(){return this.effectiveEnabled&&this.selfEnabled}get effectiveFeatureEnabled(){return this.effectiveEnabled&&this.featureEnabled}get _effectiveFeatureSources(){var p;const e=this.featureSources;e.some(W)&&ee.getLogger(this).warnOnce("Do not configure SubtypeGroupLayer sources in SnappingOptions.featureSources directly. Create a FeatureSnappingLayerSource for each SubtypeSublayer.");const t=e.filter(Ce),i=((p=this._get("_effectiveFeatureSources"))==null?void 0:p.filter(W))??new T;for(const d of t){const h=i.find(u=>u.layer===d.layer.parent);if(h)h.sublayerSources.includes(d)||h.sublayerSources.add(d);else if(d.layer.parent){const u=new K({layer:d.layer.parent});u.sublayerSources.add(d),i.add(u)}}for(const d of i){const h=d.sublayerSources.filter(u=>!t.includes(u));d.sublayerSources.removeMany(h)}i.removeMany(i.filter(d=>d.sublayerSources.length===0));const n=e.filter(Re),s=this._get("_effectiveFeatureSources")??new T,{added:r,removed:a}=te(s.toArray(),[...n,...i]);return s.removeMany(a),s.addMany(r),s}};o([c()],l.prototype,"enabled",void 0),o([c()],l.prototype,"enabledToggled",void 0),o([c()],l.prototype,"forceDisabled",void 0),o([c()],l.prototype,"selfEnabled",void 0),o([c()],l.prototype,"featureEnabled",void 0),o([c()],l.prototype,"gridEnabled",void 0),o([c()],l.prototype,"attributeRulesEnabled",void 0),o([c({type:T.ofType(K)})],l.prototype,"featureSources",void 0),o([c()],l.prototype,"distance",void 0),o([c()],l.prototype,"touchSensitivityMultiplier",void 0),o([c({readOnly:!0})],l.prototype,"effectiveEnabled",null),o([c({readOnly:!0})],l.prototype,"effectiveGridEnabled",null),o([c({readOnly:!0})],l.prototype,"effectiveSelfEnabled",null),o([c({readOnly:!0})],l.prototype,"effectiveFeatureEnabled",null),o([c({readOnly:!0})],l.prototype,"_effectiveFeatureSources",null),l=o([H("esri.views.interactive.snapping.SnappingOptions")],l);const Pe=l;function W(e){return e.layer.type==="subtype-group"}function Re(e){return e.layer.type!=="subtype-group"}function Ce(e){return e.layer.type==="subtype-sublayer"}class w{constructor(t,i,n,s){this.targetPoint=t,this.constraint=i,this.isDraped=n,this.domain=s}}let Y=class extends w{constructor({targetPoint:t,objectId:i,constraint:n,isDraped:s}){super(t,n,s,f.FEATURE),this.objectId=i}},xe=class extends Y{constructor(t){super({...t,isDraped:!0,constraint:new de(t.edgeStart,t.edgeEnd,t.getGroundElevation)})}get hints(){return[new g(_.REFERENCE,this.constraint.start,this.constraint.end,this.isDraped,this.domain)]}},$e=class extends Y{constructor(t){super({...t,constraint:new ce(t.edgeStart,t.edgeEnd)})}get hints(){return[new g(_.REFERENCE,this.constraint.start,this.constraint.end,this.isDraped,this.domain)]}},x=class extends w{constructor(t,i,n,s){super(t,new pe(t),s,f.ALL),this.first=i,this.second=n}get hints(){return this.first.targetPoint=this.targetPoint,this.second.targetPoint=this.targetPoint,[...this.first.hints,...this.second.hints,new he(this.targetPoint,this.isDraped,this.domain)]}};class Le extends w{constructor({lineStart:t,lineEnd:i,targetPoint:n,isDraped:s}){super(n,new X(t,i),s,f.SELF),this._referenceLineHint=new g(_.REFERENCE_EXTENSION,t,i,s,this.domain)}get hints(){return[this._referenceLineHint,new g(_.TARGET,this._lineEndClosestToTarget(),this.targetPoint,this.isDraped,this.domain)]}_lineEndClosestToTarget(){return this.constraint.closestEndTo(this.targetPoint)}}let De=class extends w{constructor({referenceLine:t,lineStart:i,targetPoint:n,isDraped:s}){const r=ve(i),{left:a,right:p}=t;_e(r,ye(r,r,p),a),super(n,new X(i,B(r)),s,f.SELF),this._referenceLines=[{edge:t,fadeLeft:!0,fadeRight:!0}]}get hints(){return[new g(_.TARGET,this.constraint.start,this.targetPoint,this.isDraped,this.domain),new le(this.constraint.start,this.targetPoint,this.isDraped,this.domain),...this._referenceLines.map(t=>new g(_.REFERENCE,t.edge.left,t.edge.right,this.isDraped,this.domain,t.fadeLeft,t.fadeRight))]}addReferenceLine(t){const i={edge:t,fadeLeft:!0,fadeRight:!0};this._referenceLines.forEach(n=>{R(t.right,n.edge.left)&&(n.fadeLeft=!1,i.fadeRight=!1),R(t.right,n.edge.right)&&(n.fadeRight=!1,i.fadeRight=!1),R(t.left,n.edge.right)&&(n.fadeRight=!1,i.fadeLeft=!1),R(t.left,n.edge.left)&&(n.fadeLeft=!1,i.fadeLeft=!1)}),this._referenceLines.push(i)}},Me=class extends w{constructor({targetPoint:t,constraint:i,previousVertex:n,otherVertex:s,otherVertexType:r,isDraped:a,selfSnappingType:p,objectId:d,domain:h}){super(t,i,a,h??f.SELF),this.previousVertex=n,this.otherVertex=s,this.otherVertexType=r,this.selfSnappingType=p??D.None,this.objectId=d??null}get hints(){const t=this.previousVertex,i=this.otherVertexType===L.CENTER?this.otherVertex:this.targetPoint,n=this.otherVertexType===L.CENTER?this.targetPoint:this.otherVertex;return[new g(_.TARGET,i,n,this.isDraped,this.domain),new g(_.REFERENCE,t,i,this.isDraped,this.domain),new Q(this.previousVertex,i,n,this.isDraped,this.domain)]}};var L,D;(function(e){e[e.NEXT=0]="NEXT",e[e.CENTER=1]="CENTER"})(L||(L={})),function(e){e[e.None=0]="None",e[e.LastVertex=1]="LastVertex",e[e.FirstVertex=2]="FirstVertex",e[e.ExistingEdge=3]="ExistingEdge"}(D||(D={}));class Ne extends w{constructor({targetPoint:t,point1:i,point2:n,isDraped:s}){super(t,new ue(B(Ee(J(),i,n,.5)),.5*Se(Z(i),Z(n))),s,f.SELF),this._p1=i,this._p2=n}get hints(){return[new g(_.REFERENCE,this.targetPoint,this._p1,this.isDraped,this.domain),new g(_.REFERENCE,this.targetPoint,this._p2,this.isDraped,this.domain),new Q(this._p1,this.targetPoint,this._p2,this.isDraped,this.domain)]}}function Fe(e,t,i,n){return n.type==="2d"?(C.x=e[0],C.y=e[1],C.spatialReference=t,n.toScreen(C)):(Te(e,t,i,n,U),n.state.camera.projectToScreen(U,I),me(I[0],I[1]))}const C=be(0,0,0,null),U=J(),I=we();let y=class extends ae.EventedMixin(z){constructor(e){super(e),this.options=new Pe,this._engineCache=new Map,this._loadTask=null,this._engines=[],this._currentMainCandidate=null,this._currentOtherActiveCandidates=[],this._currentSnappedType=E.MAIN}initialize(){this.addHandles([G(()=>{const{distance:e,touchSensitivityMultiplier:t,effectiveSelfEnabled:i,effectiveFeatureEnabled:n,effectiveGridEnabled:s}=this.options;return{selfEnabled:i,featureEnabled:n,gridEnabled:this.view.type==="2d"&&s,viewReady:this.view.ready,viewSpatialReference:this.view.spatialReference,distance:e,touchSensitivityMultiplier:t}},(e,t)=>{var i;t&&(this.doneSnapping(),this.emit("changed")),(i=this._loadTask)==null||i.abort(),this._loadTask=se(n=>this._updateEngines(e,t,n))},ne),G(()=>this.options,e=>{for(const t of this._engines)t.options=e},re)])}destroy(){var e;(e=this._loadTask)==null||e.abort(),this._destroyEngines()}get updating(){var e;return this._engines.some(t=>t.updating)||!((e=this._loadTask)!=null&&e.finished)}_destroyEngines(){this._engineCache.forEach(e=>e.destroy()),this._engineCache.clear(),this._engines=[]}async _updateEngines(e,t,i){var r;if(!e.viewReady)return void this._destroyEngines();(t==null?void 0:t.viewSpatialReference)!==e.viewSpatialReference&&this._destroyEngines();const n=this._engineCache,s=await Promise.allSettled([e.featureEnabled&&!n.has("feature")?this._createFeatureSnappingEngine(i):void 0,e.selfEnabled&&!n.has("self")?this._createSelfSnappingEngine(i):void 0,e.gridEnabled&&!n.has("grid")?this._createGridSnappingEngine(i):void 0]);if(i.aborted)for(const a of s)a.status==="fulfilled"&&((r=a.value)==null||r.engine.destroy());else{for(const a of s)a.status==="fulfilled"&&a.value&&n.set(a.value.type,a.value.engine);this._engines=Array.from(n.values())}}async _createSelfSnappingEngine(e){const{SelfSnappingEngine:t}=await M(()=>import("./SelfSnappingEngine-4KwLoWjo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70]),import.meta.url);return N(e),{type:"self",engine:new t({view:this.view,options:this.options})}}async _createGridSnappingEngine(e){const{view:t}=this;if(t.type!=="2d")return;const{GridSnappingEngine:i}=await M(()=>import("./GridSnappingEngine-Bq41aF9P.js"),__vite__mapDeps([71,1,6,8,9,10,11,12,13,24,14,25,32,4,27,28,29,30,72,73,35,74,75,76,77,52,18,19,20,2,3,21,22,23,26,31,33,34,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,53,54,55,56,57,58,59,60,15,16,17,61,69,70]),import.meta.url);return N(e),{type:"grid",engine:new i({view:t,options:this.options})}}async _createFeatureSnappingEngine(e){const{FeatureSnappingEngine:t}=await M(()=>import("./FeatureSnappingEngine-CoGxIJ7e.js"),__vite__mapDeps([78,10,11,1,2,3,4,8,9,12,13,48,25,24,14,79,15,16,17,18,19,20,6,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,55,56,57,58,59,60,61,80,81,82,83,69,70]),import.meta.url);N(e);const{view:i,options:n}=this,{spatialReference:s}=i;return{type:"feature",engine:new t({view:i,options:n,spatialReference:s})}}get _squaredMouseProximityThreshold(){return this.options.distance*this.options.distance}get _squaredTouchProximityThreshold(){const{distance:e,touchSensitivityMultiplier:t}=this.options,i=e*t;return i*i}snap(e){return Ae(e)?this._snapMultiPoint(e):this._snapSinglePoint(e)}update(e){const{point:t,context:i}=e;this._removeVisualization();const n=this._currentMainCandidate;if(n==null)return t;const s=this._selectUpdateInput(e);if(s==null)return t;const{spatialReference:r}=i,a=k(s,r);if(a==null)return t;const{view:p}=this,{elevationInfo:d,visualizer:h}=i,u=[],v=P(a,p,d),m=n.constraint.closestTo(v);if(!this._arePointsWithinScreenThreshold(v,m,i)||!A(n,i.drawConstraints))return this._resetSnappingState(),t;n.targetPoint=F(m),u.push(...n.hints);for(const b of this._currentOtherActiveCandidates)A(b,i.drawConstraints)&&(b.targetPoint=F(m),u.push(...b.hints));return h!=null&&this.addHandles(h.draw(u,{spatialReference:r,elevationInfo:Oe(i),view:p,selfSnappingZ:i.selfSnappingZ}),V),j(m,p,t,i)}doneSnapping(){this._removeVisualization(),this._resetSnappingState()}_selectUpdateInput({point:e,scenePoint:t}){switch(this._currentSnappedType){case E.MAIN:return e;case E.SCENE:return t}}_resetSnappingState(){this._currentMainCandidate=null,this._currentOtherActiveCandidates=[],this._currentSnappedType=E.MAIN}_removeVisualization(){this.removeHandles(V)}async _snapSinglePoint({point:e,context:t,signal:i}){const{view:n}=this,{elevationInfo:s}=t,r=P(e,n,s),a=await this._fetchCandidates(r,f.ALL,t,i);return this._createSnapResult(r,E.MAIN,a,n,e,t,i)}async _snapMultiPoint({point:e,scenePoint:t,context:i,signal:n}){const{view:s}=this,{coordinateHelper:r,elevationInfo:a,spatialReference:p}=i;await oe(t.spatialReference,p);const d=k(t,p),h=P(d,s,a),u=await this._fetchCandidates(h,f.FEATURE,i,n);if(u.length>0){const b=await this._fetchCandidates(h,f.SELF,i,n);return this._createSnapResult(h,E.SCENE,[...u,...b],s,d,i,n)}const v=P(e,s,a),m=await this._fetchCandidates(v,f.SELF,i,n);return this._createSnapResult(v,E.MAIN,m,s,{z:r.hasZ()&&e.hasZ?e.z??0:void 0,m:r.hasM()&&e.hasM?e.m??0:void 0},i,n)}async _fetchCandidates(e,t,i,n){return(await Promise.all(this._engines.map(s=>s.fetchCandidates(e,t,i,n)))).flat()}_createSnapResult(e,t,i,n,s,r,a){return{get valid(){return!ie(a)},apply:()=>{const{spatialReference:p}=r,{snappedPoint:d,hints:h}=this._processCandidates(e,t,i,r);return this._removeVisualization(),r.visualizer!=null&&this.addHandles(r.visualizer.draw(h,{spatialReference:p,elevationInfo:q,view:n,selfSnappingZ:r.selfSnappingZ}),V),j(d,n,s,r)}}}_processCandidates(e,t,i,n){if(i.length<1)return this.doneSnapping(),{snappedPoint:e,hints:[]};this._currentSnappedType!==t&&this._resetSnappingState(),fe(e,i);const s=this._currentMainCandidate;if(s!=null){const r=Ve(s,i);if(r>=0){if(!(i[r]instanceof x))return this._intersectWithOtherCandidates(r,i,e,t,n);if(this._arePointsWithinScreenThreshold(e,s.targetPoint,n))return this._updateSnappingCandidate(s,t,i,n)}}return this._intersectWithOtherCandidates(0,i,e,t,n)}_intersectWithOtherCandidates(e,t,i,n,s){const{coordinateHelper:r}=s,a=t[e],p=[];for(let d=0;d<t.length;++d){if(d===e)continue;const h=t[d],u=a.constraint.intersect(h.constraint);if(u)for(const v of u.closestPoints(a.targetPoint))p.push([new x(F(v),a,h,h.isDraped),this._squaredScreenDistance(i,v,r)])}return p.length>0&&(p.sort((d,h)=>d[1]-h[1]),p[0][1]<this._squaredPointProximityThreshold(s.pointer))?this._updateSnappingCandidate(p[0][0],n,t,s):A(a,s.drawConstraints)?this._updateSnappingCandidate(a,n,t,s):{snappedPoint:i,hints:[]}}_updateSnappingCandidate(e,t,i,n){this.doneSnapping(),this._currentMainCandidate=e,this._currentSnappedType=t;const s=this._currentMainCandidate.targetPoint,r=[];r.push(...e.hints);for(const a of i){if(e instanceof x){if(a.constraint.equals(e.first.constraint)||a.constraint.equals(e.second.constraint))continue}else if(a.constraint.equals(e.constraint))continue;const p=a.constraint.closestTo(s);this._squaredScreenDistance(p,s,n.coordinateHelper)<Ie()&&(a.targetPoint=s,this._currentOtherActiveCandidates.push(a),r.push(...a.hints))}return{snappedPoint:s,hints:r}}_squaredPointProximityThreshold(e){return e==="touch"?this._squaredTouchProximityThreshold:this._squaredMouseProximityThreshold}_arePointsWithinScreenThreshold(e,t,i){return this._squaredScreenDistance(e,t,i.coordinateHelper)<this._squaredPointProximityThreshold(i.pointer)}_squaredScreenDistance(e,t,i){return ge(this._toScreen(e,i),this._toScreen(t,i))}_toScreen(e,t){return Fe(e,t.spatialReference,q,this.view)}get test(){}};var E;o([c({constructOnly:!0})],y.prototype,"view",void 0),o([c()],y.prototype,"options",void 0),o([c({readOnly:!0})],y.prototype,"updating",null),o([c()],y.prototype,"_loadTask",void 0),o([c()],y.prototype,"_engines",void 0),o([c()],y.prototype,"_squaredMouseProximityThreshold",null),o([c()],y.prototype,"_squaredTouchProximityThreshold",null),y=o([H("esri.views.interactive.snapping.SnappingManager")],y),function(e){e[e.MAIN=0]="MAIN",e[e.SCENE=1]="SCENE"}(E||(E={}));const V="visualization-handle";function Ie(){return $.satisfiesConstraintScreenThreshold*$.satisfiesConstraintScreenThreshold}function A(e,t){return!t||t.direction==null&&t.distance==null||!(e instanceof xe||e instanceof $e||e instanceof Le||e instanceof De||e instanceof Ne)&&(!(e instanceof Me)||t.direction==null&&e.selfSnappingType===D.LastVertex)}function Ve(e,t){return e instanceof x?O(t,e.first)>=0&&O(t,e.second)>=0?0:-1:O(t,e)}function O(e,t){let i=-1;for(let n=0;n<e.length;++n)if(t.constraint.equals(e[n].constraint)){i=n;break}return i}function Ae(e){return e.scenePoint!=null}function Oe({coordinateHelper:e,elevationInfo:t}){return e.hasZ()?q:t}export{y as I,x as a,xe as b,$e as c,Pe as d,Me as e,D as f,De as g,Ne as h,Y as n,L as o,K as p,Le as r,Fe as s};
