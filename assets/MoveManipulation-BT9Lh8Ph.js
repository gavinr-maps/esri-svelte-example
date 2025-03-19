import{aV as X,N as V,e as j,t as L,l as nt,M as rt}from"./Accessor-BmwT4B0c.js";import{d as z,P as W,p as ot}from"./reactiveUtils-XM7cS2OP.js";import{e as P,a as d,f as S}from"./RenderObject-DqJETQox.js";import{h as Y}from"./Color-VJEMvW-n.js";import{i as J}from"./Evented-Dw4_VOGn.js";import{q as H,R as lt,c as I,p as ut,d as R,i as ct,l as ht}from"./mat4-Fi6iAz29.js";import{e as U}from"./mat4f64-Dk4dwAN8.js";import{o as b,W as pt,c as dt,A as q,P as _t,_ as B,g as mt}from"./vec32-Dvg_eL9J.js";import{r as f,n as F}from"./vec3f64-BLpZdpfb.js";import{c as $,a as w}from"./plane-CpXmOyqq.js";import{M as K,G as ft}from"./dragEventPipeline3D-BPjuyc9D.js";import{f as Mt,g as gt,p as C,M as Q,m as vt,j as N,w as wt}from"./dragEventPipeline-Dj33NxJd.js";import{e as tt}from"./basicInterfaces-CZwQPxTp.js";import{g as yt,O as xt,f as Tt,p as At,a as Et}from"./GeometryUtil-D-PMXorz.js";import{p as D}from"./Material-C_-mgXN8.js";import{A as at}from"./ColorMaterial.glsl-B6FVFiO0.js";import{t as _}from"./interfaces-D6pIddIh.js";import{p as St}from"./elevationInfoUtils-D26wVF2d.js";import{I as bt}from"./colorUtils-DaPfwnk3.js";import{r as $t}from"./mathUtils-Cfq9PL9W.js";import{j as Dt}from"./settings-PZrBMq9n.js";var m;(function(l){l[l.TRANSLATE_Z=0]="TRANSLATE_Z",l[l.TRANSLATE_XY=1]="TRANSLATE_XY",l[l.SCALE=2]="SCALE",l[l.ROTATE=3]="ROTATE",l[l.SCALE_ROTATE=4]="SCALE_ROTATE"})(m||(m={}));let O=class{constructor(){this._available=!0}set location(t){this._forEachManipulator3D(a=>a.location=t)}set elevationAlignedLocation(t){this._forEachManipulator3D(a=>a.elevationAlignedLocation=t)}set elevationInfo(t){this._forEachManipulator3D(a=>a.elevationInfo=t)}get renderLocation(){let t;return this._forEachManipulator3D(a=>{t||(t=a.renderLocation)}),t}set renderLocation(t){this._forEachManipulator3D(a=>a.renderLocation=t)}get available(){return this._available}set available(t){this._available=t,this._forEachManipulator3D(a=>a.available=t)}get hovering(){return this.someManipulator(t=>t.hovering)}get grabbing(){return this.someManipulator(t=>t.grabbing)}get dragging(){return this.someManipulator(t=>t.dragging)}get selected(){return this.someManipulator(t=>t.selected)}hasManipulator(t){return this.someManipulator(a=>a===t)}someManipulator(t){let a=!1;return this.forEachManipulator(e=>{!a&&t(e)&&(a=!0)}),a}_forEachManipulator3D(t){this.forEachManipulator((a,e)=>{a instanceof P&&t(a,e)})}},Pt=class extends O{constructor(){super(...arguments),this._interactive=!0}get interactive(){return this._interactive}set interactive(t){this._interactive!==t&&(this._interactive=t),this._updateManipulatorInteractivity()}_updateManipulatorInteractivity(){const t=!this.grabbing&&this._interactive;this.forEachManipulator(a=>{a.interactive=t||a.grabbing})}};const Ot=128,M=70,It=80,et=.02,Lt=54,Rt=100,Xt=Math.ceil(M/3*2),it=160,ha=.5,pa=24,da=9,_a=it+30,ma=it+53,fa=60,Ma=23,ga=5*Math.PI/12,va=1*Math.PI/3,wa=10,ya=.2,xa=30,Ta=53,Aa=.2,Ea=.3,Sa=200,ba=3,$a=1e6;function Z(l,t,a){const e=(i,s)=>{t({action:i,object:l,dxScreen:s.screenDeltaX,dyScreen:s.screenDeltaY})};return a((i,s,r)=>(s.next(n=>(n.action==="start"&&e("start",n),n)).next(Mt(l)).next(n=>{switch(n.action){case"start":case"update":(n.translationX||n.translationY||n.translationZ)&&e("update",n);break;case"end":e("end",n)}return n}),{steps:s,cancel:r=r.next(gt(l)).next(n=>(e("end",{screenDeltaX:0,screenDeltaY:0}),n))}))}function Da(l){if((l==null?void 0:l.axis)==null)return 1;const{mapStart:t,mapEnd:a,axis:e}=l,i=[a.x-t.x,a.y-t.y];return i[0]*e[0]+i[1]*e[1]>0?1:-1}let jt=class extends O{constructor(t){super(),this._handles=new X,this._arrowManipulatorInfos=new Array,this._angle=0,this._scale=1,this._radius=M,this._updateAfterDrag=!1,this.events=new J,this._tool=t.tool,this._view=t.view,this._opaqueMaterial=this._createMaterial(),this._transparentMaterial=this._createMaterial(.5),t.radius!=null&&(this._radius=t.radius),this._createManipulators(),this.forEachManipulator(a=>this._tool.manipulators.add(a))}set orthogonalAvailable(t){this._arrowManipulatorInfos.length>=3&&(this._arrowManipulatorInfos[1].manipulator.available=t,this._arrowManipulatorInfos[3].manipulator.available=t)}destroy(){this._handles=V(this._handles),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._arrowManipulatorInfos.length=0}forEachManipulator(t){for(const{manipulator:a}of this._arrowManipulatorInfos)t(a,m.TRANSLATE_XY)}createManipulatedObjectDragPipeline(t,a,e){if(!a.operations)return j();const i=a.operations.data.spatialReference,s=a.graphic;return Z(a,e,r=>this.createDragPipeline((n,o,u,c,h)=>({steps:o,cancel:u}=t(n,o,u,c,h),r(n,o,u)),a.elevationInfo,i,s))}createDragPipeline(t,a,e,i){return L(this._arrowManipulatorInfos.map(({manipulator:s},r)=>C(s,(n,o,u,c,h)=>{const p=o.next(g=>({...g,manipulatorType:m.TRANSLATE_XY})).next(Q(this._view,n.elevationAlignedLocation)).next(K(this._view,n.elevationAlignedLocation,a,e,i)).next(vt(n.location,this.angle+(r+1)*Math.PI*.5)).next(N());t(n,p,u,c,h)})))}get angle(){return this._angle}set angle(t){this._angle=t,this.dragging?this._updateAfterDrag=!0:this._updateManipulatorTransform()}get displayScale(){return this._scale}set displayScale(t){this._scale=t,this._updateManipulatorTransform()}get radius(){return this._radius}set radius(t){this._radius!==t&&(this._radius=t,this._updateManipulators())}_updateManipulators(){for(let t=0;t<this._arrowManipulatorInfos.length;t++)this._updateArrowManipulator(this._arrowManipulatorInfos[t],t);this._updateManipulatorTransform()}_updateArrowManipulator({manipulator:t,transform:a},e){const i=this._radius/M,s=Lt*i,r=s*Math.sqrt(3)/2,n=yt(this._opaqueMaterial,r,s/2,s/2,et);xt(n,H(w.get(),b($.get(),0,-r/3,0))),t.renderObjects=[new d(n,_.Focused),new d(n.instantiate({material:this._transparentMaterial}),_.Unfocused)],t.radius=r/3*2*1.2;const o=lt(w.get(),e*Math.PI/2),u=H(w.get(),b($.get(),0,Rt*i,0));I(a,o,u)}_createManipulators(){for(let t=0;t<4;t++){const a=this._createArrowManipulator(t);this._arrowManipulatorInfos.push(a)}this._updateManipulatorTransform()}_updateManipulatorTransform(){const t=this.angle,a=ut(w.get(),t,f(0,0,1));if(a==null)return;const e=R(w.get(),b($.get(),this.displayScale,this.displayScale,this.displayScale)),i=I(w.get(),e,a);for(const s of this._arrowManipulatorInfos){const r=I(w.get(),i,s.transform);s.manipulator.modelTransform=r}}_createArrowManipulator(t){const a=new P({view:this._view,autoScaleRenderObjects:!1,worldOriented:!0,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:f(0,0,1)}}),e={manipulator:a,transform:U()};return this._updateArrowManipulator(e,t),this._handles.add(a.events.on("drag",i=>{this._updateAfterDrag&&i.action==="end"&&!this.dragging&&(this._updateManipulatorTransform(),this._updateAfterDrag=!1)})),e}_createMaterial(t=1){const a=new at({cullFace:tt.Back,renderOccluded:D.Transparent,isDecoration:!0});return this._handles.add(z(()=>Y.toUnitRGBA(this._view.effectiveTheme.accentColor),e=>{e[3]*=t,a.setParameters({color:e})},W)),a}get test(){}};class zt{constructor(){this._view=null,this._elevationInfo=null,this._lastDragEvent=null,this._next=null,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&this._lastDragEvent!=null&&this._next!=null){const a=this._lastDragEvent.mapEnd,e=this._snap(this._lastDragEvent.screenEnd);if(e!=null){const i={action:"update",mapStart:this._lastDragEvent.mapStart,mapEnd:t===!0?e:a,screenStart:this._lastDragEvent.screenEnd,screenEnd:this._lastDragEvent.screenEnd};this._next.execute(i)}}this._enabled=t}_snap(t){const a=this._view!=null?this._view.toMap(t,{exclude:[]}):null;return a!=null&&this._view!=null&&(a.z=St(a,this._view,this._elevationInfo)),a}createDragEventPipelineStep(t,a){this._view=t,this._elevationInfo=a,this._lastDragEvent=null;const e=new wt;return this._next=e,[i=>{if(this._lastDragEvent=i.action!=="end"?{...i}:null,this._enabled){const s=this._snap(i.screenEnd);return s!=null?{action:i.action,mapStart:i.mapStart,mapEnd:s,screenStart:i.screenStart,screenEnd:i.screenEnd}:null}return{action:i.action,mapStart:i.mapStart,mapEnd:i.mapEnd,screenStart:i.screenStart,screenEnd:i.screenEnd}},e]}}class Yt extends O{constructor(t){super(),this._handles=new X,this._snapToScene=new zt,this._scale=1,this._radius=M,this._view=t.view,this._tool=t.tool,this._discMaterial=this._createMaterial(),this._discMaterialTransparent=this._createMaterial(.5),t.snapToScene!=null&&(this.snapToScene=t.snapToScene),t.radius!=null&&(this._radius=t.radius),this._createManipulator(),this.forEachManipulator(a=>this._tool.manipulators.add(a))}destroy(){this._handles=V(this._handles),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null}forEachManipulator(t){t(this._manipulator,m.TRANSLATE_XY)}get displayScale(){return this._scale}set displayScale(t){this._scale=t,this._updateManipulatorTransform()}get snapToScene(){return this._snapToScene.enabled}set snapToScene(t){this._snapToScene.enabled=t}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=t,this._updateManipulator())}get discManipulator(){return this._manipulator}createManipulatedObjectDragPipeline(t,a,e){if(!a.operations)return j();const i=a.graphic,s=a.elevationInfo,r=a.operations.data.spatialReference;return Z(a,e,n=>this.createDragPipeline((o,u,c,h,p)=>({steps:u,cancel:c}=t(o,u,c,h,p),n(o,u,c)),s,r,i))}createDragPipeline(t,a,e,i){const s=this._view;return C(this._manipulator,(r,n,o,u,c)=>{const h=n.next(Q(s,r.elevationAlignedLocation)).next(K(s,r.elevationAlignedLocation,a,e,i)).next(...this._snapToScene.createDragEventPipelineStep(s,a)).next(p=>({...p,manipulatorType:m.TRANSLATE_XY})).next(N());t(r,h,o,u,c)})}_updateManipulatorTransform(){const t=R(w.get(),b($.get(),this.displayScale,this.displayScale,this.displayScale));this._manipulator.modelTransform=t}_createManipulator(){const t=this._view;this._manipulator=new P({view:t,worldSized:!1,autoScaleRenderObjects:!1,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:f(0,0,1)},worldOriented:!0}),this._updateManipulator()}_updateManipulator(){const t=Tt(this._discMaterial,et,1,Ot,f(0,0,1),f(0,0,0));t.transformation=R(U(),f(this._radius,this._radius,this._radius)),this._manipulator.renderObjects=[new d(t,_.Focused),new d(t.instantiate({material:this._discMaterialTransparent}),_.Unfocused)],this._manipulator.radius=It*(this._radius/M)}_createMaterial(t=1){const a=new at({cullFace:tt.Back,renderOccluded:D.Transparent,isDecoration:!0});return this._handles.add(z(()=>Y.toUnitRGBA(this._view.effectiveTheme.accentColor),e=>{e[3]*=t,a.setParameters({color:e})},W)),a}get test(){}}class Ut extends O{constructor(t){super(),this._radius=M,this.events=new J,this._tool=t.tool,this._view=t.view;const a=new Dt({getTheme:()=>this._view.effectiveTheme});this._settings=a,t.radius!=null&&(this._radius=t.radius);const e=this._view.effectiveTheme.accentColor;this._materials={materialUnfocused:S(v(e,1,.25),D.Occlude),materialFocused:S(v(e,1,0),D.Occlude),materialOccludedUnfocused:S(v(e,.7,0),a.zManipulator.renderOccluded),materialOccludedFocused:S(v(e,.85,0),a.zManipulator.renderOccluded)},this._themeHandle=z(()=>this._view.effectiveTheme.accentColor,i=>{const s=v(i,1,.25),r=v(i,1,0),n=v(i,.7,0),o=v(i,.85,0),{materialUnfocused:u,materialFocused:c,materialOccludedUnfocused:h,materialOccludedFocused:p}=this._materials;u.setParameters({color:s}),c.setParameters({color:r}),h.setParameters({color:n}),p.setParameters({color:o})}),this._createManipulator(),this.forEachManipulator(i=>this._tool.manipulators.add(i))}destroy(){this._themeHandle=nt(this._themeHandle),this._manipulator.applyObjectTransform=Ct,this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()})}forEachManipulator(t){t(this._manipulator,m.TRANSLATE_Z)}createManipulatedObjectDragPipeline(t,a,e){if(!a.operations)return j();const i=a.operations.data.spatialReference;return Z(a,e,s=>this.createDragPipeline((r,n,o,u,c)=>({steps:n,cancel:o}=t(r,n,o,u,c),s(r,n,o)),i))}createDragPipeline(t,a){const e=this._view;return C(this._manipulator,(i,s,r,n,o)=>{const u=s.next(c=>({...c,manipulatorType:m.TRANSLATE_Z})).next(ft(e,i.renderLocation,a)).next(N());t(i,u,r,n,o)})}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=t,this._updateManipulator())}_updateManipulator(){const t=this._settings,a=this._radius/M,e=t.zManipulator.height*a,i=t.zManipulator.coneHeight*a,s=t.zManipulator.coneWidth*a,r=t.zManipulator.width*a,n=[f(0,0,0),f(0,0,e)],o=[f(0,0,0),f(0,0,e+i)],u=(()=>{const T=U();return ct(T,T,[0,0,e]),ht(T,T,Math.PI/2),T})(),{materialUnfocused:c,materialFocused:h,materialOccludedUnfocused:p,materialOccludedFocused:g}=this._materials,A=At(c,n,r/2,16,!1),x=Et(c,i,s/2,16,!1);x.transformation=u,this._manipulator.renderObjects=[new d(x,_.Unfocused),new d(A,_.Unfocused),new d(x.instantiate({material:h}),_.Focused),new d(A.instantiate({material:h}),_.Focused),new d(x.instantiate({material:p}),_.Unfocused),new d(A.instantiate({material:p}),_.Unfocused),new d(x.instantiate({material:g}),_.Focused),new d(A.instantiate({material:g}),_.Focused)],this._manipulator.radius=r/2+2,this._manipulator.collisionType={type:"line",paths:[o]}}_createManipulator(){const t=this._view,a=new P({view:t,autoScaleRenderObjects:!1,worldSized:!1,selectable:!1,cursor:"ns-resize",elevationInfo:this.elevationInfo,worldOriented:!0,collisionPriority:1.6});a.applyObjectTransform=e=>{const i=t.state.camera,s=k;t.renderCoordsHelper.toRenderCoords(this._manipulator.elevationAlignedLocation,s);const r=pt(i.eye,s),n=i.computeRenderPixelSizeAtDist(r),o=dt(E,s,i.eye);q(o,o);const u=Ft;t.renderCoordsHelper.worldUpAtPosition(k,u);const c=Math.abs(_t(o,u)),h=B(E,o,u),p=B(E,h,u),g=$t(c,.01,1),A=1-Math.sqrt(1-g*g)/g/i.fullWidth,x=this._settings,T=this._radius/M,st=x.zManipulator.width*T;mt(p,q(p,p),(1/A-1)*r+n*st),e[12]-=E[0],e[13]-=E[1],e[14]-=E[2]},this._manipulator=a,this._updateManipulator()}get test(){}}function v(l,t,a){const e=bt(l,a);return e.a*=t,Y.toUnitRGBA(e)}const k=F(),E=F(),Ft=F(),Ct=()=>{};class Oa extends Pt{constructor(t){super(),this._handles=new X;const{tool:a,view:e,snapToScene:i,radius:s}=t;this._view=e,this.xyManipulation=new Yt({tool:a,view:e,snapToScene:i,radius:s}),this.xyAxisManipulation=new jt({tool:a,view:e,radius:s}),this.zManipulation=new Ut({tool:a,view:e,radius:s}),this.xyManipulation.available=t.xyAvailable,this.xyAxisManipulation.available=t.xyAxisAvailable,this.zManipulation.available=t.zAvailable,this._autoHideXYAxis(),this.forEachManipulator(r=>this._handles.add(r.events.on("grab-changed",()=>this._updateManipulatorInteractivity())))}destroy(){this._handles.destroy(),this.xyManipulation.destroy(),this.xyAxisManipulation.destroy(),this.zManipulation.destroy()}createManipulatedObjectDragPipeline(t,a,e){return L([this.xyManipulation.createManipulatedObjectDragPipeline((i,s,r,n,o)=>t(y.XY,i,s,r,n,o),a,e),this.xyAxisManipulation.createManipulatedObjectDragPipeline((i,s,r,n,o)=>t(y.XY_AXIS,i,s,r,n,o),a,e),this.zManipulation.createManipulatedObjectDragPipeline((i,s,r,n,o)=>t(y.Z,i,s,r,n,o),a,e)])}createDragPipeline(t,a,e,i){return L([this.xyManipulation.createDragPipeline((s,r,n,o,u)=>t(y.XY,s,r,n,o,u),a,e,i),this.xyAxisManipulation.createDragPipeline((s,r,n,o,u)=>t(y.XY_AXIS,s,r,n,o,u),a,e,i),this.zManipulation.createDragPipeline((s,r,n,o,u)=>t(y.Z,s,r,n,o,u),e)])}set snapToScene(t){this.xyManipulation.snapToScene=t}set angle(t){this.xyAxisManipulation.angle=t}set radius(t){this.xyAxisManipulation.radius=t,this.xyManipulation.radius=t,this.zManipulation.radius=t}set displayScale(t){this.xyManipulation.displayScale=t,this.xyAxisManipulation.displayScale=t}forEachManipulator(t){this.xyManipulation.forEachManipulator(a=>t(a,m.TRANSLATE_XY)),this.xyAxisManipulation.forEachManipulator(a=>t(a,m.TRANSLATE_XY)),this.zManipulation.forEachManipulator(a=>t(a,m.TRANSLATE_Z))}get _xyAxisVisible(){const t=this.xyManipulation.someManipulator(a=>a.focused)||this.xyAxisManipulation.someManipulator(a=>a.focused);return this._view.inputManager&&this._view.inputManager.latestPointerType==="touch"||t}_autoHideXYAxis(){const t=this.xyAxisManipulation,a=this.xyManipulation;if(rt("esri-mobile"))return;const e=[];a.forEachManipulator(s=>e.push(s)),t.forEachManipulator(s=>e.push(s));const i=()=>{const s=[];this._xyAxisVisible||t.forEachManipulator(r=>s.push(r.disableDisplay())),this._handles.remove(G),this._handles.add(s,G)};for(const s of e)this._handles.add(s.events.on("focus-changed",i));this._view.inputManager&&this._handles.add(ot(()=>{var s;return(s=this._view.inputManager)==null?void 0:s.latestPointerType},i)),i()}static radiusForSymbol(t){const a=t!=null&&t.type==="point-3d"&&t.symbolLayers;return a&&a.some(e=>e.type==="icon")?Xt:M}}const G="disable-xy-axis-display";var y;(function(l){l[l.XY=0]="XY",l[l.XY_AXIS=1]="XY_AXIS",l[l.Z=2]="Z"})(y||(y={}));export{m as A,it as I,ha as P,M as a,Da as b,y as c,_a as d,Ot as e,ya as f,xa as g,va as h,pa as i,Ta as j,Aa as k,da as l,Ea as m,Z as n,Xt as o,ma as p,Sa as q,fa as r,Ma as s,O as t,Oa as u,wa as v,ba as w,ga as x,$a as y,Pt as z};
