import{a0 as Ye,aV as Nt,N as zt,r as u,aR as jt,B as Ft}from"./Accessor-BmwT4B0c.js";import{n as Ze,c as Xe,H as Ut}from"./mat4-Fi6iAz29.js";import{o as Wt,e as Re}from"./mat4f64-Dk4dwAN8.js";import{I as Mt,E as B,p as We,o as k,u as ye,H as Vt,s as Z,c as Le,P as Qe,g as De,r as Bt}from"./vec32-Dvg_eL9J.js";import{n as R,r as qe}from"./vec3f64-BLpZdpfb.js";import{U as Ke,E as kt}from"./sphere-Cin5efBj.js";import{m as Ht}from"./mathUtils-BgCEaV43.js";import{t as Jt}from"./basicInterfaces-CZwQPxTp.js";import{r as vt,e as Me,n as Gt,p as re}from"./Material-C_-mgXN8.js";import{a4 as Yt,j as Zt,E as gt,q as St,F as Tt,s as Y,a5 as et,x as Xt,d as Qt,h as Ve,w as Be,k as qt,c as je,O as Kt,y as ei,u as ti,g as ii,a as ri,o as ai,G as si,H as oi,z as ni,r as pe,m as li,t as ci,C as tt,I as pi,$ as it,a0 as di,a1 as rt,D as hi,J as fi,a2 as mi,K as ui,a6 as vi,a7 as at,a8 as gi,a9 as Si,aa as Ti,A as V,ab as _i,e as bi}from"./FloatArray-BQXWSSJh.js";import{s as yi,m as Oi,H as Ai}from"./InterleavedLayout-_dYEAUNK.js";import{E as Ei,e as l}from"./VertexAttribute-Cq4MnHjR.js";import{n as Ri,r as Li,i as Di}from"./sdfPrimitives-DBgFWIDT.js";import{i as xi}from"./Evented-Dw4_VOGn.js";import{b as Ci,j as ge}from"./Octree-CmoRJhci.js";import{r as xe}from"./mathUtils-Cfq9PL9W.js";import{y as ae}from"./screenUtils-_ZIvrt5o.js";import{r as Pi}from"./vec2-ChnYg_BJ.js";import{s as $i,n as Ii,N as wi}from"./vec4f64-o2zAXfmz.js";import{M as Ni,b as Ce,B as zi,v as _t}from"./lineSegment-v806maA5.js";import{p as Se,V as W,O as st,M as Ae}from"./plane-CpXmOyqq.js";import{e as Te,t as ji,n as se,u as ce,j as Fi,S as Ui,C as ot,k as Wi,c as Fe}from"./Matrix3PassUniform-uCCQMnlP.js";import{_ as Mi}from"./index-4eY77cms.js";import{G as bt,D as yt,E as nt,f as _e}from"./enums-D9v74xTE.js";import{B as be,g as Pe,c as lt}from"./renderState-Ci93M1-P.js";import{n as o,t as Vi}from"./glsl-BH37Aalp.js";import"./BindType-BBwFZqyN.js";import{o as Bi}from"./floatRGBA-Cb__GiDF.js";import{p as Ot,w as At}from"./Texture-BVJ22uHh.js";import{s as ki}from"./vec42-YcqnINSP.js";import{i as v}from"./ShaderTechniqueConfiguration-D4dZMCXS.js";import"./vec2f64-Dy6m9Nrb.js";import{i as Hi}from"./ShaderBuilder-BKul5qh8.js";import{t as Ji}from"./RgbaFloatEncoding.glsl-_io2eW3M.js";var Oe;(function(i){i[i.ASYNC=0]="ASYNC",i[i.SYNC=1]="SYNC"})(Oe||(Oe={}));let Kr=class extends vt{get geometries(){return this._geometries}get transformation(){return this._transformation??Wt}set transformation(e){this._transformation=Ze(this._transformation??Re(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Ze(this._shaderTransformation??Re(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Me.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new Et),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){yi(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];t&&(this._emit("geometryRemoved",{object:this,geometry:t}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,r=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:r}),Ei(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new Yt;for(const t of this._geometries)t.occludees=Ri(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=Li(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new Zt(e);for(const r of this._geometries)r.addHighlight(t);return this._emit("highlightChanged",this),t}removeHighlight(e){for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===Jt.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return Xe(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=Re()){return Xe(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new ct,this._validateBoundingVolume(this._bvWorldSpace,de.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new ct,this._validateBoundingVolume(this._bvObjectSpace,de.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,t){const r=t===de.ObjectSpace;for(const s of this._geometries){const a=s.boundingInfo;a&&Gi(a,e,r?s.transformation:this.getCombinedShaderTransformation(s))}Mt(Ke(e.bounds),e.min,e.max,.5);for(const s of this._geometries){const a=s.boundingInfo;if(a==null)continue;const h=r?s.transformation:this.getCombinedShaderTransformation(s),d=Ht(h);B(pt,a.center,h);const n=We(pt,Ke(e.bounds)),c=a.radius*d;e.bounds[3]=Math.max(e.bounds[3],n+c)}}_invalidateBoundingVolume(){var t;const e=(t=this._bvWorldSpace)==null?void 0:t.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,t){this._parentLayer&&this._parentLayer.events.emit(e,t)}get test(){}};class Et{constructor(){this.min=qe(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=qe(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class ct extends Et{constructor(){super(...arguments),this.bounds=kt()}}function Gi(i,e,t){const r=i.bbMin,s=i.bbMax;if(Ut(t)){const a=k(Yi,t[12],t[13],t[14]);ye(w,r,a),ye(F,s,a);for(let h=0;h<3;++h)e.min[h]=Math.min(e.min[h],w[h]),e.max[h]=Math.max(e.max[h],F[h])}else if(B(w,r,t),Vt(r,s))for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],w[a]),e.max[a]=Math.max(e.max[a],w[a]);else{B(F,s,t);for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],w[a],F[a]),e.max[a]=Math.max(e.max[a],w[a],F[a]);for(let a=0;a<3;++a){Z(w,r),Z(F,s),w[a]=s[a],F[a]=r[a],B(w,w,t),B(F,F,t);for(let h=0;h<3;++h)e.min[h]=Math.min(e.min[h],w[h],F[h]),e.max[h]=Math.max(e.max[h],w[h],F[h])}}}const Yi=R(),w=R(),F=R(),pt=R();var de;(function(i){i[i.WorldSpace=0]="WorldSpace",i[i.ObjectSpace=1]="ObjectSpace"})(de||(de={}));const Zi=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let ta=class extends vt{constructor(e,t,r=""){super(),this.stage=e,this.apiLayerUid=r,this.type=Me.Layer,this.events=new xi,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Ye,this._handles=new Nt,this._objects=new Ye,this._pickable=!0,this.visible=(t==null?void 0:t.visible)??!0,this._pickable=(t==null?void 0:t.pickable)??!0,this.updatePolicy=(t==null?void 0:t.updatePolicy)??Oe.ASYNC,this._disableOctree=(t==null?void 0:t.disableOctree)??!1,e.add(this);for(const s of Zi)this._handles.add(this.events.on(s,a=>e.handleEvent(s,a)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),t.length!==0){for(const r of t)r.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),this._octree!=null){for(let r=0;r<t.length;)this._objectsAdded.removeUnordered(t[r])?(t[r]=t[t.length-1],t.length-=1):++r;this._octree.remove(t)}}}sync(){this.updatePolicy!==Oe.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new Ci(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=zt(this._octree),this._objectsAdded.clear()}};function ra(i){return i!=null&&i.type===Me.Layer}var ee,fe;(function(i){i[i.Draped=0]="Draped",i[i.Screen=1]="Screen",i[i.World=2]="World",i[i.COUNT=3]="COUNT"})(ee||(ee={})),function(i){i[i.Center=0]="Center",i[i.Tip=1]="Tip",i[i.COUNT=2]="COUNT"}(fe||(fe={}));let N=class extends gt{constructor(){super(...arguments),this.space=ee.Screen,this.anchor=fe.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=St.None,this.emissionSource=Tt.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===ee.Draped}};u([v({count:ee.COUNT})],N.prototype,"space",void 0),u([v({count:fe.COUNT})],N.prototype,"anchor",void 0),u([v()],N.prototype,"occluder",void 0),u([v()],N.prototype,"writeDepth",void 0),u([v()],N.prototype,"hideOnShortSegments",void 0),u([v()],N.prototype,"hasCap",void 0),u([v()],N.prototype,"hasTip",void 0),u([v()],N.prototype,"vvSize",void 0),u([v()],N.prototype,"vvColor",void 0),u([v()],N.prototype,"vvOpacity",void 0),u([v()],N.prototype,"hasOccludees",void 0),u([v()],N.prototype,"terrainDepthTest",void 0),u([v()],N.prototype,"cullAboveTerrain",void 0);const dt=8;function Xi(i,e){const t=i.vertex;t.uniforms.add(new Y("intrinsicWidth",r=>r.width)),e.vvSize?(i.attributes.add(l.SIZEFEATUREATTRIBUTE,"float"),t.uniforms.add(new Te("vvSizeMinSize",r=>r.vvSize.minSize),new Te("vvSizeMaxSize",r=>r.vvSize.maxSize),new Te("vvSizeOffset",r=>r.vvSize.offset),new Te("vvSizeFactor",r=>r.vvSize.factor)),t.code.add(o`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(i.attributes.add(l.SIZE,"float"),t.code.add(o`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(i.attributes.add(l.OPACITYFEATUREATTRIBUTE,"float"),t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new et("vvOpacityValues",r=>r.vvOpacity.values,dt),new et("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,dt)),t.code.add(o`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):t.code.add(o`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(i.include(Xt,e),i.attributes.add(l.COLORFEATUREATTRIBUTE,"float"),t.code.add(o`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(i.attributes.add(l.COLOR,"vec4"),t.code.add(o`vec4 getColor(){
return applyOpacity(color);
}`))}class Qi{constructor(e,t,r){this._createTexture=e,this._parametersKey=t,this._repository=new Map,this._orphanCache=r.newCache(`procedural-texture-repository:${jt()}`,s=>s.dispose())}destroy(){for(const{texture:e}of this._repository.values())e.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(e,t=null){const r=this._acquire(e);return this.release(t),r}release(e){if(e==null)return;const t=this._parametersKey(e),r=this._repository.get(t);if(r&&(r.refCount--,r.refCount===0)){this._repository.delete(t);const{texture:s}=r;this._orphanCache.put(t,s)}}_acquire(e){if(e==null)return null;const t=this._parametersKey(e),r=this._repository.get(t);if(r)return r.refCount++,r.texture;const s=this._orphanCache.pop(t)??this._createTexture(e),a=new qi(s);return this._repository.set(t,a),s}}class qi{constructor(e){this.texture=e,this.refCount=1}}function sa(i,e){return new Qi(t=>{const{encodedData:r,textureSize:s}=Ki(t),a=new Ot;return a.internalFormat=bt.RGBA,a.width=s,a.height=1,a.wrapMode=yt.REPEAT,new At(i,a,r)},t=>`${t.pattern.join(",")}-r${t.pixelRatio}`,e)}function Ki(i){const e=ke(i),t=1/i.pixelRatio,r=Rt(i),s=Lt(i),a=(Math.floor(.5*(s-1))+.5)*t,h=[];let d=1;for(const T of e){for(let E=0;E<T;E++){const z=d*(Math.min(E,T-1-E)+.5)*t/a*.5+.5;h.push(z)}d=-d}const n=Math.round(e[0]/2),c=[...h.slice(n),...h.slice(0,n)],p=new Uint8Array(4*r);let b=0;for(const T of c)Bi(T,p,b),b+=4;return{encodedData:p,textureSize:r}}function ke(i){return i.pattern.map(e=>Math.round(e*i.pixelRatio))}function Rt(i){if(i==null)return 1;const e=ke(i);return Math.floor(e.reduce((t,r)=>t+r))}function Lt(i){return ke(i).reduce((e,t)=>Math.max(e,t))}function er(i){return i==null?$i:i.length===4?i:ki(tr,i[0],i[1],i[2],1)}const tr=Ii();function ir(i,e){if(!e.stippleEnabled)return void i.fragment.code.add(o`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const t=!(e.draped&&e.stipplePreferContinuous),{vertex:r,fragment:s}=i;s.include(Ji),e.draped||(Qt(r,e),r.uniforms.add(new Ve("worldToScreenPerDistanceRatio",({camera:a})=>1/a.perScreenPixelRatio)).code.add(o`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),i.varyings.add("vStippleDistance","float"),i.varyings.add("vStippleDistanceLimits","vec2"),i.varyings.add("vStipplePatternStretch","float"),r.code.add(o`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${o.float(ar)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(o`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(o`
    if (segmentLengthPseudoScreen >= ${t?"patternLength":"1e4"}) {
  `),Be(r),r.code.add(o`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),s.uniforms.add(new qt("stipplePatternTexture",a=>a.stippleTexture),new Y("stipplePatternSDFNormalizer",a=>rr(a.stipplePattern)),new Y("stipplePatternPixelSizeInv",a=>1/Dt(a))),e.stippleOffColorEnabled&&s.uniforms.add(new je("stippleOffColor",a=>er(a.stippleOffColor))),s.code.add(o`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),s.code.add(o`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${Vi(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function rr(i){return i?(Math.floor(.5*(Lt(i)-1))+.5)/i.pixelRatio:1}function Dt(i){const e=i.stipplePattern;return e?Rt(i.stipplePattern)/e.pixelRatio:1}const ar=.4,he=64,xt=he/2,Ct=xt/5,sr=he/Ct,oa=.25;function na(i,e){const t=Di(i,he,xt,Ct),r=new Ot;return r.internalFormat=bt.RGBA,r.width=he,r.height=he,r.wrapMode=yt.CLAMP_TO_EDGE,new At(e,r,t)}function or(i,e){const t=i.vertex;Be(t),t.uniforms.get("markerScale")==null&&t.constants.add("markerScale","float",1),t.constants.add("markerSizePerLineWidth","float",sr).code.add(o`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===ee.World&&(t.constants.add("maxSegmentLengthFraction","float",.45),t.uniforms.add(new Ve("perRenderPixelRatio",r=>r.camera.perRenderPixelRatio)),t.code.add(o`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var te;(function(i){i[i.BUTT=0]="BUTT",i[i.SQUARE=1]="SQUARE",i[i.ROUND=2]="ROUND",i[i.COUNT=3]="COUNT"})(te||(te={}));class _ extends gt{constructor(){super(...arguments),this.capType=te.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=St.None,this.emissionSource=Tt.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}}u([v({count:te.COUNT})],_.prototype,"capType",void 0),u([v()],_.prototype,"hasPolygonOffset",void 0),u([v()],_.prototype,"writeDepth",void 0),u([v()],_.prototype,"draped",void 0),u([v()],_.prototype,"stippleEnabled",void 0),u([v()],_.prototype,"stippleOffColorEnabled",void 0),u([v()],_.prototype,"stipplePreferContinuous",void 0),u([v()],_.prototype,"roundJoins",void 0),u([v()],_.prototype,"applyMarkerOffset",void 0),u([v()],_.prototype,"vvSize",void 0),u([v()],_.prototype,"vvColor",void 0),u([v()],_.prototype,"vvOpacity",void 0),u([v()],_.prototype,"falloffEnabled",void 0),u([v()],_.prototype,"innerColorEnabled",void 0),u([v()],_.prototype,"hasOccludees",void 0),u([v()],_.prototype,"occluder",void 0),u([v()],_.prototype,"terrainDepthTest",void 0),u([v()],_.prototype,"cullAboveTerrain",void 0),u([v()],_.prototype,"wireframe",void 0),u([v()],_.prototype,"discardInvisibleFragments",void 0),u([v()],_.prototype,"objectAndLayerIdColorInstanced",void 0);const me=1;function Pt(i){const e=new Hi,{attributes:t,varyings:r,vertex:s,fragment:a}=e,{applyMarkerOffset:h,draped:d,output:n,capType:c,stippleEnabled:p,falloffEnabled:b,roundJoins:T,wireframe:E,innerColorEnabled:z}=i;e.include(Kt),e.include(Xi,i),e.include(ir,i),e.include(ei,i),e.include(ti,i);const A=h&&!d;A&&(s.uniforms.add(new Y("markerScale",f=>f.markerScale)),e.include(or,{space:ee.World})),ii(s,i),s.uniforms.add(new ji("inverseProjectionMatrix",f=>f.camera.inverseProjectionMatrix),new ri("nearFar",f=>f.camera.nearFar),new Y("miterLimit",f=>f.join!=="miter"?0:f.miterLimit),new ai("viewport",f=>f.camera.fullViewport)),s.constants.add("LARGE_HALF_FLOAT","float",65500),t.add(l.POSITION,"vec3"),t.add(l.PREVPOSITION,"vec3"),t.add(l.NEXTPOSITION,"vec3"),t.add(l.SUBDIVISIONFACTOR,"float"),t.add(l.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const j=p;j&&r.add("vLineSizeInv","float");const y=c===te.ROUND,S=p&&y,$=b||S;$&&r.add("vLineDistanceNorm","float"),y&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),s.code.add(o`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),s.code.add(o`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),s.code.add(o`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),Be(s),s.constants.add("aaWidth","float",p?0:1).main.add(o`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${j?o`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),A&&s.main.add(o`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),s.main.add(o`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(p||y)&&s.main.add(o`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${y?o`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),s.main.add(o`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),T?s.main.add(o`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${p?o`min(1.0, subdivisionFactor * ${o.float((me+2)/(me+1))})`:o`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):s.main.add(o`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const g=c!==te.BUTT;return s.main.add(o`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${g?o`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),s.main.add(o`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${$?o`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),y&&s.main.add(o`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),p&&(d?s.uniforms.add(new Ve("worldToScreenRatio",f=>1/f.screenToPCSRatio)):s.main.add(o`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),s.main.add(o`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),d?s.main.add(o`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):s.main.add(o`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),s.uniforms.add(new Y("stipplePatternPixelSize",f=>Dt(f))),s.main.add(o`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),s.main.add(o`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${E&&!d?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.fragment.include(si,i),e.include(oi,i),a.include(ni),a.main.add(o`discardBySlice(vpos);
discardByTerrainDepth();`),E?a.main.add(o`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(y&&a.main.add(o`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${o.float(pe)}) {
          discard;
        }
      `),S?a.main.add(o`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${o.float(pe)}, stippleCoverage);
      `):a.main.add(o`float stippleAlpha = getStippleAlpha();`),n!==se.ObjectAndLayerIdColor&&a.main.add(o`discardByStippleAlpha(stippleAlpha, ${o.float(pe)});`),a.uniforms.add(new je("intrinsicColor",f=>f.color)),a.main.add(o`vec4 color = intrinsicColor * vColor;`),z&&(a.uniforms.add(new je("innerColor",f=>f.innerColor??f.color),new Y("innerWidth",(f,D)=>f.innerWidth*D.camera.pixelRatio)),a.main.add(o`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.main.add(o`vec4 finalColor = blendStipple(color, stippleAlpha);`),b&&(a.uniforms.add(new Y("falloff",f=>f.falloff)),a.main.add(o`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),p||a.main.add(o`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),a.main.add(o`outputColorHighlightOID(finalColor, vpos);`),e}const nr=Object.freeze(Object.defineProperty({__proto__:null,build:Pt,ribbonlineNumRoundJoinSubdivisions:me},Symbol.toStringTag,{value:"Module"}));class lr extends li{constructor(e,t){super(e,t,new ci(nr,()=>Mi(()=>Promise.resolve().then(()=>Sr),void 0,import.meta.url)),$t),this.primitiveType=t.wireframe?nt.LINES:nt.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:r,output:s,hasOccludees:a,hasPolygonOffset:h}=e,d=r===tt.NONE,n=r===tt.FrontFace;return be({blending:ce(s)?ui(r):null,depthTest:{func:mi(r)},depthWrite:fi(e),drawBuffers:s===se.Depth?{buffers:[_e.NONE]}:hi(r,s),colorWrite:Pe,stencilWrite:a?rt:null,stencilTest:a?t?it:di:null,polygonOffset:d||n?h?ht:null:pi})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?ht:null;this._occluderPipelineTransparent=be({blending:lt,polygonOffset:t,depthTest:at,depthWrite:null,colorWrite:Pe,stencilWrite:null,stencilTest:vi,drawBuffers:e.output===se.Depth?{buffers:[_e.NONE]}:null}),this._occluderPipelineOpaque=be({blending:lt,polygonOffset:t,depthTest:at,depthWrite:null,colorWrite:Pe,stencilWrite:Si,stencilTest:gi,drawBuffers:e.output===se.Depth?{buffers:[_e.NONE]}:null}),this._occluderPipelineMaskWrite=be({blending:null,polygonOffset:t,depthTest:Ti,depthWrite:null,colorWrite:null,stencilWrite:rt,stencilTest:it,drawBuffers:e.output===se.Depth?{buffers:[_e.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case V.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case V.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const ht={factor:0,units:-4},$t=new Map([[l.POSITION,0],[l.PREVPOSITION,1],[l.NEXTPOSITION,2],[l.SUBDIVISIONFACTOR,3],[l.UV0,4],[l.COLOR,5],[l.COLORFEATUREATTRIBUTE,5],[l.SIZE,6],[l.SIZEFEATUREATTRIBUTE,6],[l.OPACITYFEATUREATTRIBUTE,7],[l.OBJECTANDLAYERIDCOLOR,8]]);var I;(function(i){i[i.LEFT_JOIN_START=-2]="LEFT_JOIN_START",i[i.LEFT_JOIN_END=-1]="LEFT_JOIN_END",i[i.LEFT_CAP_START=-4]="LEFT_CAP_START",i[i.LEFT_CAP_END=-5]="LEFT_CAP_END",i[i.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",i[i.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",i[i.RIGHT_CAP_START=4]="RIGHT_CAP_START",i[i.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(I||(I={}));class la extends Gt{constructor(e){super(e,pr),this._configuration=new _,this.vertexAttributeLocations=$t,this.produces=new Map([[V.OPAQUE_MATERIAL,t=>Fi(t)||ce(t)&&this.parameters.renderOccluded===re.OccludeAndTransparentStencil],[V.OPAQUE_MATERIAL_WITHOUT_NORMALS,t=>Ui(t)],[V.OCCLUDER_MATERIAL,t=>ot(t)&&this.parameters.renderOccluded===re.OccludeAndTransparentStencil],[V.TRANSPARENT_OCCLUDER_MATERIAL,t=>ot(t)&&this.parameters.renderOccluded===re.OccludeAndTransparentStencil],[V.TRANSPARENT_MATERIAL,t=>ce(t)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==re.OccludeAndTransparentStencil],[V.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>ce(t)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==re.OccludeAndTransparentStencil],[V.DRAPED_MATERIAL,t=>Wi(t)]])}getConfiguration(e,t){this._configuration.output=e,this._configuration.oitPass=t.oitPass,this._configuration.draped=t.slot===V.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&e!==se.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&hr(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===re.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=t.terrainDepthTest&&ce(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){var e;return this.parameters.color[3]>=pe||this.parameters.stipplePattern!=null&&(((e=this.parameters.stippleOffColor)==null?void 0:e[3])??0)>pe}intersectDraped({attributes:e,screenToWorldRatio:t},r,s,a,h,d){if(!s.options.selectionMode)return;const n=e.get(l.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const y=e.get(l.SIZEFEATUREATTRIBUTE).data[0];c*=xe(this.parameters.vvSize.offset[0]+y*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else n&&(c*=n.data[0]);const p=a[0],b=a[1],T=(c/2+4)*t;let E=Number.MAX_VALUE,z=0;const A=e.get(l.POSITION).data,j=Ue(this.parameters,e)?A.length-2:A.length-5;for(let y=0;y<j;y+=3){const S=A[y],$=A[y+1],g=(y+3)%A.length,f=p-S,D=b-$,m=A[g]-S,G=A[g+1]-$,L=xe((m*f+G*D)/(m*m+G*G),0,1),ie=m*L-f,x=G*L-D,X=ie*ie+x*x;X<E&&(E=X,z=y/3)}E<T*T&&h(d.dist,d.normal,z,!1)}intersect(e,t,r,s,a,h){if(!r.options.selectionMode||!e.visible)return;if(!Oi(t))return void Ft.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const d=e.attributes,n=d.get(l.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const S=d.get(l.SIZEFEATUREATTRIBUTE).data[0];c*=xe(this.parameters.vvSize.offset[0]+S*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else d.has(l.SIZE)&&(c*=d.get(l.SIZE).data[0]);const p=r.camera,b=fr;Pi(b,r.point);const T=c*p.pixelRatio/2+4*p.pixelRatio;k(le[0],b[0]-T,b[1]+T,0),k(le[1],b[0]+T,b[1]+T,0),k(le[2],b[0]+T,b[1]-T,0),k(le[3],b[0]-T,b[1]-T,0);for(let S=0;S<4;S++)if(!p.unprojectFromRenderScreen(le[S],J[S]))return;Se(p.eye,J[0],J[1],Ie),Se(p.eye,J[1],J[2],we),Se(p.eye,J[2],J[3],Ne),Se(p.eye,J[3],J[0],ze);let E=Number.MAX_VALUE,z=0;const A=Ue(this.parameters,d)?n.length-2:n.length-5;for(let S=0;S<A;S+=3){C[0]=n[S]+t[12],C[1]=n[S+1]+t[13],C[2]=n[S+2]+t[14];const $=(S+3)%n.length;if(P[0]=n[$]+t[12],P[1]=n[$+1]+t[13],P[2]=n[$+2]+t[14],W(Ie,C)<0&&W(Ie,P)<0||W(we,C)<0&&W(we,P)<0||W(Ne,C)<0&&W(Ne,P)<0||W(ze,C)<0&&W(ze,P)<0)continue;if(p.projectToRenderScreen(C,q),p.projectToRenderScreen(P,K),q[2]<0&&K[2]>0){Le(M,C,P);const f=p.frustum,D=-W(f[ge.NEAR],C)/Qe(M,st(f[ge.NEAR]));De(M,M,D),ye(C,C,M),p.projectToRenderScreen(C,q)}else if(q[2]>0&&K[2]<0){Le(M,P,C);const f=p.frustum,D=-W(f[ge.NEAR],P)/Qe(M,st(f[ge.NEAR]));De(M,M,D),ye(P,P,M),p.projectToRenderScreen(P,K)}else if(q[2]<0&&K[2]<0)continue;q[2]=0,K[2]=0;const g=Ni(Ce(q,K,ut),b);g<E&&(E=g,Z(ft,C),Z(mt,P),z=S/3)}const j=r.rayBegin,y=r.rayEnd;if(E<T*T){let S=Number.MAX_VALUE;if(zi(Ce(ft,mt,ut),Ce(j,y,mr),Q)){Le(Q,Q,j);const $=Bt(Q);De(Q,Q,1/$),S=$/We(j,y)}h(S,Q,z,!1)}}get _layout(){const e=Ai().vec3f(l.POSITION).vec3f(l.PREVPOSITION).vec3f(l.NEXTPOSITION).f32(l.SUBDIVISIONFACTOR).vec2f(l.UV0);return this.parameters.vvSize?e.f32(l.SIZEFEATUREATTRIBUTE):e.f32(l.SIZE),this.parameters.vvColor?e.f32(l.COLORFEATUREATTRIBUTE):e.vec4f(l.COLOR),this.parameters.vvOpacity&&e.f32(l.OPACITYFEATUREATTRIBUTE),Fe()&&e.vec4u8(l.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new dr(this._layout,this.parameters)}createGLMaterial(e){return new cr(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}}class cr extends bi{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(lr,e)}}class pr extends _i{constructor(){super(...arguments),this.width=0,this.color=wi,this.join="miter",this.cap=te.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){var e;return this.color[3]<1||this.stipplePattern!=null&&(((e=this.stippleOffColor)==null?void 0:e[3])??0)<1}}class dr{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t,this.numJoinSubdivisions=0;const r=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=me+r}}_isClosed(e){return Ue(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const r=e.get(l.POSITION).indices.length/2+1,s=this._isClosed(e);let a=s?2:2*2;return a+=((s?r:r-1)-(s?0:1))*(2*this.numJoinSubdivisions+4),a+=2,this._parameters.wireframe&&(a=2+4*(a-2)),a}write(e,t,r,s,a,h){var He,Je,Ge;const d=ur,n=vr,c=gr,p=r.get(l.POSITION),b=p.indices,T=p.data.length/3,E=(He=r.get(l.DISTANCETOSTART))==null?void 0:He.data;b&&b.length!==2*(T-1)&&console.warn("RibbonLineMaterial does not support indices");const z=((Je=r.get(l.SIZEFEATUREATTRIBUTE))==null?void 0:Je.data[0])??((Ge=r.get(l.SIZE))==null?void 0:Ge.data[0])??1;let A=[1,1,1,1],j=0;const y=this.vertexBufferLayout.fields.has(l.COLORFEATUREATTRIBUTE);y?j=r.get(l.COLORFEATUREATTRIBUTE).data[0]:r.has(l.COLOR)&&(A=r.get(l.COLOR).data);const S=this.vertexBufferLayout.fields.has(l.OPACITYFEATUREATTRIBUTE),$=S?r.get(l.OPACITYFEATUREATTRIBUTE).data[0]:0,g=new Float32Array(a.buffer),f=Fe()?new Uint8Array(a.buffer):null,D=this.vertexBufferLayout.stride/4;let m=h*D;const G=m;let L=0;const ie=E?(O,U,H)=>L=E[H]:(O,U,H)=>L+=We(O,U),x=(O,U,H,ne,ue,It,wt)=>{if(g[m++]=U[0],g[m++]=U[1],g[m++]=U[2],g[m++]=O[0],g[m++]=O[1],g[m++]=O[2],g[m++]=H[0],g[m++]=H[1],g[m++]=H[2],g[m++]=ne,g[m++]=wt,g[m++]=ue,g[m++]=z,y)g[m++]=j;else{const ve=Math.min(4*It,A.length-4);g[m++]=A[ve],g[m++]=A[ve+1],g[m++]=A[ve+2],g[m++]=A[ve+3]}S&&(g[m++]=$),Fe()&&(s&&(f[4*m]=s[0],f[4*m+1]=s[1],f[4*m+2]=s[2],f[4*m+3]=s[3]),m++)};m+=D,k(n,p.data[0],p.data[1],p.data[2]),e&&B(n,n,e);const X=this._isClosed(r);if(X){const O=p.data.length-3;k(d,p.data[O],p.data[O+1],p.data[O+2]),e&&B(d,d,e)}else k(c,p.data[3],p.data[4],p.data[5]),e&&B(c,c,e),x(n,n,c,1,I.LEFT_CAP_START,0,0),x(n,n,c,1,I.RIGHT_CAP_START,0,0),Z(d,n),Z(n,c);const Ee=X?0:1,oe=X?T:T-1;for(let O=Ee;O<oe;O++){const U=(O+1)%T*3;k(c,p.data[U],p.data[U+1],p.data[U+2]),e&&B(c,c,e),ie(d,n,O),x(d,n,c,0,I.LEFT_JOIN_END,O,L),x(d,n,c,0,I.RIGHT_JOIN_END,O,L);const H=this.numJoinSubdivisions;for(let ne=0;ne<H;++ne){const ue=(ne+1)/(H+1);x(d,n,c,ue,I.LEFT_JOIN_END,O,L),x(d,n,c,ue,I.RIGHT_JOIN_END,O,L)}x(d,n,c,1,I.LEFT_JOIN_START,O,L),x(d,n,c,1,I.RIGHT_JOIN_START,O,L),Z(d,n),Z(n,c)}X?(k(c,p.data[3],p.data[4],p.data[5]),e&&B(c,c,e),L=ie(d,n,oe),x(d,n,c,0,I.LEFT_JOIN_END,Ee,L),x(d,n,c,0,I.RIGHT_JOIN_END,Ee,L)):(L=ie(d,n,oe),x(d,n,n,0,I.LEFT_CAP_END,oe,L),x(d,n,n,0,I.RIGHT_CAP_END,oe,L)),$e(g,G+D,g,G,D),m=$e(g,m-D,g,m,D),this._parameters.wireframe&&this._addWireframeVertices(a,G,m,D)}_addWireframeVertices(e,t,r,s){const a=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),h=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,r-t);let d=0;const n=c=>d=$e(h,c,a,d,s);for(let c=0;c<h.length-1;c+=2*s)n(c),n(c+2*s),n(c+1*s),n(c+2*s),n(c+1*s),n(c+3*s)}}function $e(i,e,t,r,s){for(let a=0;a<s;a++)t[r++]=i[e++];return r}function Ue(i,e){return i.isClosed?e.get(l.POSITION).indices.length>2:!1}function hr(i){return i.anchor===fe.Tip&&i.hideOnShortSegments&&i.placement==="begin-end"&&i.worldSpace}const C=R(),P=R(),M=R(),Q=R(),fr=R(),q=ae(),K=ae(),ft=R(),mt=R(),ut=_t(),mr=_t(),ur=R(),vr=R(),gr=R(),le=[ae(),ae(),ae(),ae()],J=[R(),R(),R(),R()],Ie=Ae(),we=Ae(),Ne=Ae(),ze=Ae(),Sr=Object.freeze(Object.defineProperty({__proto__:null,build:Pt,ribbonlineNumRoundJoinSubdivisions:me},Symbol.toStringTag,{value:"Module"}));export{Kr as A,Oe as C,la as W,ta as a,fe as b,Xi as c,xt as d,N as e,te as f,na as g,ra as l,he as m,or as n,sr as p,ee as s,Qi as t,sa as u,oa as w};
