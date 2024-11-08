const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LaserlinePath.glsl-CV6hrJ4l.js","./mathUtils-C4_ghTv4.js","./vec32-Dvg_eL9J.js","./vec3f64-BLpZdpfb.js","./common-DQOJ18NT.js","./vec42-YcqnINSP.js","./vec4f64-o2zAXfmz.js","./projectVectorToVector-G2uWGoIb.js","./subclass-BZA_h8Db.js","./Point-Cg0-ChZE.js","./tslib.es6-B3Jf3DVX.js","./Accessor-BLX9ikPh.js","./cast-Bjksrh93.js","./writer-DNAwXnhG.js","./assets-C43MgM-v.js","./index-Bh2oEzTI.js","./index-2kwcjS9-.css","./jsonMap-0cxwUWs2.js","./Extent-Bf3YTe7m.js","./Polyline-D9YkgmM_.js","./projectBuffer-Bs7GwaPY.js","./geodesicConstants-DWQLYX7F.js","./projectPointToVector-GINIbYMz.js","./projection-B971H0Re.js","./SimpleObservable-KocWTzVy.js","./aaBoundingBox-BE7cC1jD.js","./plane-IENfwZlB.js","./mat3f64-BBpwCtoL.js","./mat4f64-Dk4dwAN8.js","./quatf64-CCm9z-pX.js","./vec2f64-miziP1SN.js","./mathUtils-BG-eq9fO.js","./ViewingMode-Dodu7ZZk.js","./Object3DVisualElement-BVfa8i_P.js","./mat4-GpOFENPA.js","./VisualElement-Bz1W-x8t.js","./reactiveUtils-C5zUhJQJ.js","./asyncUtils-CWX51uTe.js","./Collection-CEdjem1-.js","./Evented-BHRw9x22.js","./shared-B3wH2qpO.js","./RibbonLine.glsl-BZu1FDpE.js","./computeTranslationToOriginAndRotation-Q27G6TBL.js","./dehydratedFeatureUtils-B--Sgpdi.js","./sphere-C77djCO6.js","./mat3-BRl2i9Bz.js","./intersectorUtils-BK9EUwUf.js","./boundedPlane-EV1sS2Ke.js","./lineSegment-D7sKPPYf.js","./verticalOffsetUtils-BDQLpfho.js","./orientedBoundingBox-DOAJUK5g.js","./quat-4pa1e6ds.js","./spatialReferenceEllipsoidUtils-DBE_OFra.js","./ElevationProvider-C95wyCKc.js","./VertexAttribute-Cq4MnHjR.js","./unitConversionUtils-BMfW9yAe.js","./lengthUtils-DL1-FDQQ.js","./hydratedFeatures-DBKLr8hT.js","./geometry-D964gYQX.js","./Graphic-DsxsIjhH.js","./PopupTemplate-BHMhS05j.js","./Clonable-D3rtuBWg.js","./fieldUtils-tmQlKvWo.js","./intl-CChhNOV8.js","./date-DlqISzcw.js","./locale-C9TlLpzi.js","./messages-OmQvZhAg.js","./enumeration-Ba5njXdz.js","./Color-BCS62Hs5.js","./colorUtils-0bJDPow9.js","./ActionToggle-iT4slXc7.js","./Identifiable-B1UbsKNt.js","./symbols-CNimns--.js","./TextSymbol-D8QO_KUV.js","./screenUtils-_ZIvrt5o.js","./materialUtils-DarhapKC.js","./opacityUtils-C68Tlu6_.js","./persistableUrlUtils-fa1mAujs.js","./collectionUtils-D_lHIu88.js","./Portal-C10FKnaA.js","./Loadable-BabW5Xcc.js","./Promise-B2Hu02L7.js","./jsonUtils-CEfjT-BK.js","./Material-_xx7OZxD.js","./interfaces-DDtDqZYj.js","./Texture-Fac_8AOC.js","./BindType-BmZEZMMh.js","./Util-BIfApRF5.js","./Texture-Begq2x5n.js","./enums-D9v74xTE.js","./renderState-DQLu6AJX.js","./Matrix3DrawUniform-CiBFaSz6.js","./compilerUtils-Dw3R0f-Z.js","./vec2-maR1OrZI.js","./ShaderTechniqueConfiguration-CBbn2DCi.js","./Indices-DflDlU4Z.js","./triangle-PTGDC_xJ.js","./AlphaCutoff-UcccL64p.js","./requestImageUtils-DgMiQwsm.js","./sdfPrimitives-CUWZbMRe.js","./vec3f32-nZdmKIgz.js","./doublePrecisionUtils-B0owpBza.js","./floatRGBA-CfH_2xsy.js","./Octree-C8d4sqjv.js","./frustum-CQrOepbv.js","./InterleavedLayout-e-di2fxs.js","./BufferView-_QDXRCew.js","./Float4DrawUniform-N58YDhuZ.js","./HUDMaterial.glsl-D6WRipwF.js","./graphicUtils-CWEFaVJb.js","./VertexColor.glsl-_ARMpsAT.js","./meshVertexSpaceUtils-CXzOFlTI.js","./MeshLocalVertexSpace-LEHwMUnu.js"])))=>i.map(i=>d[i]);
import{m as T,a as me}from"./subclass-BZA_h8Db.js";import{c as te,A as $,r as F,p as ie,E as b,s as E,_ as _e,u as ne,o as I}from"./vec32-Dvg_eL9J.js";import{n as h,r as G,t as X}from"./vec3f64-BLpZdpfb.js";import{l as Pe,v as z,p as U,h as ve}from"./lineSegment-D7sKPPYf.js";import{t as be}from"./VisualElement-Bz1W-x8t.js";import{r as m}from"./tslib.es6-B3Jf3DVX.js";import{B as Ee}from"./Accessor-BLX9ikPh.js";import{a as we,y as De,m as Ve,p as xe,g as Le}from"./frustum-CQrOepbv.js";import{U as Se,E as ye,k as Ae}from"./sphere-C77djCO6.js";import{l as W}from"./ViewingMode-Dodu7ZZk.js";import{g as Ce,G as Te,b as O,o as se,i as Me,e as M,c as S,h as re,j as ae,H as Re,I as q}from"./Texture-Fac_8AOC.js";import{o as $e,i as Ue}from"./Blit-B-VutIER.js";import{t as Ie}from"./aaBoundingBox-BE7cC1jD.js";import{t as Oe}from"./glUtil-D0YUa0ow.js";import{H as le}from"./InterleavedLayout-e-di2fxs.js";import{_ as oe}from"./index-Bh2oEzTI.js";import{s as H}from"./mathUtils-C4_ghTv4.js";import{o as l,t as qe,r as k}from"./interfaces-DDtDqZYj.js";import{o as ce}from"./vec2-maR1OrZI.js";import{n as he}from"./vec2f64-miziP1SN.js";import{z as de}from"./vec42-YcqnINSP.js";import{n as Ne}from"./vec4f64-o2zAXfmz.js";import{M as je,l as ze}from"./plane-IENfwZlB.js";import{o as f,h as v,i as Z}from"./Matrix3DrawUniform-CiBFaSz6.js";import{e as c}from"./VertexAttribute-Cq4MnHjR.js";import{i as We}from"./mat4-GpOFENPA.js";import{e as He}from"./mat4f64-Dk4dwAN8.js";import{r as Be}from"./MergedRenderer-Dli9s1X5.js";import{E as Fe}from"./BufferObject-BVi1lwBq.js";import{E as Ge,F as Xe,_ as J}from"./enums-D9v74xTE.js";import{i as x,a as ke}from"./ShaderTechniqueConfiguration-CBbn2DCi.js";import{a as o}from"./renderState-DQLu6AJX.js";import{a as Ze}from"./Material-_xx7OZxD.js";function pe(t,e){const n=t.fragment;n.include(Ce),t.include(Te),n.uniforms.add(new f("globalAlpha",i=>i.globalAlpha),new v("glowColor",i=>i.glowColor),new f("glowWidth",(i,s)=>i.glowWidth*s.camera.pixelRatio),new f("glowFalloff",i=>i.glowFalloff),new v("innerColor",i=>i.innerColor),new f("innerWidth",(i,s)=>i.innerWidth*s.camera.pixelRatio),new O("depthMap",(i,s)=>{var r;return(r=s.depth)==null?void 0:r.attachment}),new O("normalMap",i=>i.normals)),n.code.add(l`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),n.code.add(l`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),n.code.add(l`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),n.code.add(l`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),e.contrastControlEnabled?(n.uniforms.add(new O("frameColor",(i,s)=>i.colors),new f("globalAlphaContrastBoost",i=>i.globalAlphaContrastBoost!=null?i.globalAlphaContrastBoost:1)),n.code.add(l`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):n.code.add(l`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}const ue=H(6);function Je(t){const e=new se;e.include(Me),e.include(pe,t);const n=e.fragment;if(t.lineVerticalPlaneEnabled||t.heightManifoldEnabled)if(n.uniforms.add(new f("maxPixelDistance",(i,s)=>t.heightManifoldEnabled?2*s.camera.computeScreenPixelSizeAt(i.heightManifoldTarget):2*s.camera.computeScreenPixelSizeAt(i.lineVerticalPlaneSegment.origin))),n.code.add(l`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),t.spherical){const i=(r,a,d)=>b(r,a.heightManifoldTarget,d.camera.viewMatrix),s=(r,a)=>b(r,[0,0,0],a.camera.viewMatrix);n.uniforms.add(new M("heightManifoldOrigin",(r,a)=>(i(g,r,a),s(V,a),te(V,V,g),$(u,V),u[3]=F(V),u)),new v("globalOrigin",(r,a)=>s(g,a)),new f("cosSphericalAngleThreshold",(r,a)=>1-Math.max(2,ie(a.camera.eye,r.heightManifoldTarget)*a.camera.perRenderPixelRatio)/F(r.heightManifoldTarget))),n.code.add(l`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else n.code.add(l`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(t.pointDistanceEnabled&&(n.uniforms.add(new f("maxPixelDistance",(i,s)=>2*s.camera.computeScreenPixelSizeAt(i.pointDistanceTarget))),n.code.add(l`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),t.intersectsLineEnabled&&(n.uniforms.add(new f("perScreenPixelRatio",(i,s)=>s.camera.perScreenPixelRatio)),n.code.add(l`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(t.lineVerticalPlaneEnabled||t.intersectsLineEnabled)&&n.code.add(l`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.main.add(l`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),t.heightManifoldEnabled){n.uniforms.add(new S("angleCutoff",s=>R(s)),new M("heightPlane",(s,r)=>fe(s.heightManifoldTarget,s.renderCoordsHelper.worldUpAtPosition(s.heightManifoldTarget,g),r.camera.viewMatrix)));const i=t.spherical?l`normalize(globalOrigin - pos)`:l`heightPlane.xyz`;n.main.add(l`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${i})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return t.pointDistanceEnabled&&(n.uniforms.add(new S("angleCutoff",i=>R(i)),new M("pointDistanceSphere",(i,s)=>Ke(i,s))),n.main.add(l`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),t.lineVerticalPlaneEnabled&&(n.uniforms.add(new S("angleCutoff",i=>R(i)),new M("lineVerticalPlane",(i,s)=>Qe(i,s)),new v("lineVerticalStart",(i,s)=>Ye(i,s)),new v("lineVerticalEnd",(i,s)=>et(i,s))),n.main.add(l`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),t.intersectsLineEnabled&&(n.uniforms.add(new S("angleCutoff",i=>R(i)),new v("intersectsLineStart",(i,s)=>b(g,i.lineStartWorld,s.camera.viewMatrix)),new v("intersectsLineEnd",(i,s)=>b(g,i.lineEndWorld,s.camera.viewMatrix)),new v("intersectsLineDirection",(i,s)=>(E(u,i.intersectsLineSegment.vector),u[3]=0,$(g,de(u,u,s.camera.viewMatrix)))),new f("intersectsLineRadius",i=>i.intersectsLineRadius)),n.main.add(l`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),n.main.add(l`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),e}function R(t){return ce(tt,Math.cos(t.angleCutoff),Math.cos(Math.max(0,t.angleCutoff-H(2))))}function Ke(t,e){return b(Se(N),t.pointDistanceOrigin,e.camera.viewMatrix),N[3]=ie(t.pointDistanceOrigin,t.pointDistanceTarget),N}function Qe(t,e){const n=Pe(t.lineVerticalPlaneSegment,.5,g),i=t.renderCoordsHelper.worldUpAtPosition(n,it),s=$(V,t.lineVerticalPlaneSegment.vector),r=_e(g,i,s);return $(r,r),fe(t.lineVerticalPlaneSegment.origin,r,e.camera.viewMatrix)}function Ye(t,e){const n=E(g,t.lineVerticalPlaneSegment.origin);return t.renderCoordsHelper.setAltitude(n,0),b(n,n,e.camera.viewMatrix)}function et(t,e){const n=ne(g,t.lineVerticalPlaneSegment.origin,t.lineVerticalPlaneSegment.vector);return t.renderCoordsHelper.setAltitude(n,0),b(n,n,e.camera.viewMatrix)}function fe(t,e,n){return b(K,t,n),E(u,e),u[3]=0,de(u,u,n),ze(K,u,nt)}const tt=he(),g=h(),u=Ne(),it=h(),V=h(),K=h(),nt=je(),N=ye(),st=Object.freeze(Object.defineProperty({__proto__:null,build:Je,defaultAngleCutoff:ue},Symbol.toStringTag,{value:"Module"}));let rt=class extends qe{constructor(){super(...arguments),this.innerColor=G(1,1,1),this.innerWidth=1,this.glowColor=G(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=H(6),this.pointDistanceOrigin=h(),this.pointDistanceTarget=h(),this.lineVerticalPlaneSegment=z(),this.intersectsLineSegment=z(),this.intersectsLineRadius=3,this.heightManifoldTarget=h(),this.lineStartWorld=h(),this.lineEndWorld=h()}};class at extends re{constructor(e,n,i){super(e,n,new ae(st,()=>oe(()=>import("./LaserlinePath.glsl-CV6hrJ4l.js").then(s=>s.L),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112]),import.meta.url)),i)}}function lt(t){const e=new se;e.include(pe,t);const{vertex:n,fragment:i}=e;n.uniforms.add(new Z("modelView",(r,{camera:a})=>We(ct,a.viewMatrix,r.origin)),new Z("proj",(r,{camera:a})=>a.projectionMatrix),new f("glowWidth",(r,{camera:a})=>r.glowWidth*a.pixelRatio),new S("pixelToNDC",(r,{camera:a})=>ce(ot,2/a.fullViewport[2],2/a.fullViewport[3]))),e.attributes.add(c.START,"vec3"),e.attributes.add(c.END,"vec3"),t.spherical&&(e.attributes.add(c.START_UP,"vec3"),e.attributes.add(c.END_UP,"vec3")),e.attributes.add(c.EXTRUDE,"vec2"),e.varyings.add("uv","vec2"),e.varyings.add("vViewStart","vec3"),e.varyings.add("vViewEnd","vec3"),e.varyings.add("vViewSegmentNormal","vec3"),e.varyings.add("vViewStartNormal","vec3"),e.varyings.add("vViewEndNormal","vec3");const s=!t.spherical;return n.main.add(l`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${k(s,l`vec3 startUp = vec3(0, 0, 1);`)}
    ${k(s,l`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),i.uniforms.add(new f("perScreenPixelRatio",(r,a)=>a.camera.perScreenPixelRatio)),i.code.add(l`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),i.main.add(l`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),e}const ot=he(),ct=He(),ht=Object.freeze(Object.defineProperty({__proto__:null,build:lt},Symbol.toStringTag,{value:"Module"}));class dt extends rt{constructor(){super(...arguments),this.origin=h()}}let j=class extends re{constructor(e,n,i){super(e,n,new ae(ht,()=>oe(()=>import("./LaserlinePath.glsl-CV6hrJ4l.js").then(s=>s.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112]),import.meta.url)),i,ge)}};const ge=new Map([[c.START,0],[c.END,1],[c.EXTRUDE,2],[c.START_UP,3],[c.END_UP,4]]);let Q=class{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=h(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const n=Ie(3*e.length);let i=0;for(const s of e)n[i++]=s[0],n[i++]=s[1],n[i++]=s[2];this.buffers=[n]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const n=this._buffers[0],i=3*Math.floor(n.length/3/2);I(this._origin,n[i],n[i+1],n[i+2])}else I(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const n=this._ensureVAO(e);n!=null&&(e.bindVAO(n),e.drawArrays(Ge.TRIANGLES,0,this._count))}dispose(){this._vao!=null&&this._vao.dispose()}get _layout(){return this._renderCoordsHelper.viewingMode===W.Global?ut:ft}_ensureVAO(e){return this._buffers==null?null:(this._vao??(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,n){const i=this._createDataBuffer(n);return this._dirty=!1,new Be(e,ge,new Map([["data",Oe(this._layout)]]),new Map([["data",Fe.createVertex(e,Xe.STATIC_DRAW,i)]]))}_ensureVertexData(e,n){var s;if(!this._dirty)return;const i=this._createDataBuffer(n);(s=e.vertexBuffers.get("data"))==null||s.setData(i),this._dirty=!1}_createDataBuffer(e){const n=e.reduce((_,p)=>_+Y(p),0);this._count=n;const i=this._layout.createBuffer(n),s=this._origin;let r=0,a=0;const d="startUp"in i?this._setUpVectors.bind(this,i):void 0;for(const _ of e){for(let p=0;p<_.length;p+=3){const C=I(ee,_[p],_[p+1],_[p+2]);p===0?a=this._renderCoordsHelper.getAltitude(C):this._renderCoordsHelper.setAltitude(C,a);const P=r+2*p;d==null||d(p,P,_,C);const B=te(ee,C,s);if(p<_.length-3){for(let w=0;w<6;w++)i.start.setVec(P+w,B);i.extrude.setValues(P,0,-1),i.extrude.setValues(P+1,1,-1),i.extrude.setValues(P+2,1,1),i.extrude.setValues(P+3,0,-1),i.extrude.setValues(P+4,1,1),i.extrude.setValues(P+5,0,1)}if(p>0)for(let w=-6;w<0;w++)i.end.setVec(P+w,B)}r+=Y(_)}return i.buffer}_setUpVectors(e,n,i,s,r){const a=this._renderCoordsHelper.worldUpAtPosition(r,pt);if(n<s.length-3)for(let d=0;d<6;d++)e.startUp.setVec(i+d,a);if(n>0)for(let d=-6;d<0;d++)e.endUp.setVec(i+d,a)}};function Y(t){return 3*(2*(t.length/3-1))}const pt=h(),ee=h(),ut=le().vec3f(c.START).vec3f(c.END).vec2f(c.EXTRUDE).vec3f(c.START_UP).vec3f(c.END_UP),ft=le().vec3f(c.START).vec3f(c.END).vec2f(c.EXTRUDE);class A extends ke{constructor(){super(...arguments),this.contrastControlEnabled=!1,this.spherical=!1}}m([x()],A.prototype,"contrastControlEnabled",void 0),m([x()],A.prototype,"spherical",void 0);class y extends A{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}m([x()],y.prototype,"heightManifoldEnabled",void 0),m([x()],y.prototype,"pointDistanceEnabled",void 0),m([x()],y.prototype,"lineVerticalPlaneEnabled",void 0),m([x()],y.prototype,"intersectsLineEnabled",void 0);let D=class extends Re{constructor(t){super(t),this.produces=q.LASERLINES,this.consumes={required:[q.LASERLINES,"normals"]},this.requireGeometryDepth=!0,this._configuration=new y,this._pathTechniqueConfiguration=new A,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._passParameters=new dt;const e=t.view._stage.renderView.techniques,n=new A;n.contrastControlEnabled=t.contrastControlEnabled,e.precompile(j,n)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper,this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===W.Global,this._pathTechniqueConfiguration.contrastControlEnabled=this.contrastControlEnabled,this._techniques.precompile(j,this._pathTechniqueConfiguration),this._blit=new $e(this._techniques,Ue.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=Ee(this._pathVerticalPlaneData),this._blit=null}get _techniques(){return this.view._stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(t){this._heightManifoldEnabled!==t&&(this._heightManifoldEnabled=t,this.requestRender(o.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(t){E(this._passParameters.heightManifoldTarget,t),this.requestRender(o.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(t){t!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=t,this.requestRender(o.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(t){E(this._passParameters.pointDistanceTarget,t),this.requestRender(o.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(t){E(this._passParameters.pointDistanceOrigin,t),this.requestRender(o.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(t){t!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=t,this.requestRender(o.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){U(t,this._passParameters.lineVerticalPlaneSegment),this.requestRender(o.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(t){t!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=t,this.requestRender(o.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(t){U(t,this._passParameters.intersectsLineSegment),this.requestRender(o.UPDATE)}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(t){t!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=t,this.requestRender(o.UPDATE))}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){t!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=t,this.requestRender(o.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,this._pathVerticalPlaneData!=null&&this.requestRender(o.UPDATE))}set pathVerticalPlaneVertices(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new Q(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=t,this.pathVerticalPlaneEnabled&&this.requestRender(o.UPDATE)}set pathVerticalPlaneBuffers(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new Q(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=t,this.pathVerticalPlaneEnabled&&this.requestRender(o.UPDATE)}setParameters(t){Ze(this._passParameters,t)&&this.requestRender(o.UPDATE)}precompile(){this._acquireTechnique().release()}render(t){const e=t.find(({name:a})=>a===q.LASERLINES);if(!this.bindParameters.decorations||this._blit==null)return e;const n=this.renderingContext,i=t.find(({name:a})=>a==="normals");this._passParameters.normals=i==null?void 0:i.getTexture();const s=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(),this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return n.bindFramebuffer(e.fbo),s(),e;this._passParameters.colors=e.getTexture();const r=this.fboCache.acquire(e.fbo.width,e.fbo.height,"laser lines");return n.bindFramebuffer(r.fbo),n.setClearColor(0,0,0,0),n.clear(J.COLOR|J.DEPTH),s(),n.unbindTexture(e.getTexture()),this._blit.blend(n,r,e,this.bindParameters)||this.requestRender(o.UPDATE),r.release(),e}_acquireTechnique(){return this._configuration.heightManifoldEnabled=this.heightManifoldEnabled,this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._configuration.pointDistanceEnabled=this.pointDistanceEnabled,this._configuration.intersectsLineEnabled=this.intersectsLineEnabled,this._configuration.contrastControlEnabled=this.contrastControlEnabled,this._configuration.spherical=this.view.state.viewingMode===W.Global,this._techniques.acquire(at,this._configuration)}_renderUnified(){if(!this._updatePassParameters())return;const t=this._acquireTechnique();if(t.compiled){const e=this.renderingContext;e.bindTechnique(t,this.bindParameters,this._passParameters),e.screen.draw()}else this.requestRender(o.UPDATE);t.release()}_renderPath(){if(this._pathVerticalPlaneData==null)return;const t=this._techniques.acquire(j,this._pathTechniqueConfiguration);if(t.compiled){const e=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin,e.bindTechnique(t,this.bindParameters,this._passParameters),this._pathVerticalPlaneData.draw(e)}else this.requestRender(o.UPDATE);t.release()}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const t=this.bindParameters.camera,e=this._passParameters;if(this._intersectsLineInfinite){if(De(Ae(e.intersectsLineSegment.origin,e.intersectsLineSegment.vector),L),L.c0=-Number.MAX_VALUE,!Ve(t.frustum,L))return!1;xe(L,e.lineStartWorld),Le(L,e.lineEndWorld)}else E(e.lineStartWorld,e.intersectsLineSegment.origin),ne(e.lineEndWorld,e.intersectsLineSegment.origin,e.intersectsLineSegment.vector);return!0}get test(){}};m([T({constructOnly:!0})],D.prototype,"contrastControlEnabled",void 0),m([T({constructOnly:!0})],D.prototype,"isDecoration",void 0),m([T()],D.prototype,"produces",void 0),m([T()],D.prototype,"consumes",void 0),D=m([me("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],D);const L=we();class Qt extends be{constructor(e){super(e),this._angleCutoff=ue,this._style={},this._heightManifoldTarget=h(),this._heightManifoldEnabled=!1,this._intersectsLine=z(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){e!=null?(E(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(e==null)return void(this.intersectsLine=null);const n=this.view.renderCoordsHelper.worldUpAtPosition(e,gt);this.intersectsLine=ve(e,n),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){e!=null?(U(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=e!=null?U(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=e!=null?{origin:X(e.origin),target:e.target?X(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||this._pointDistanceLine!=null||this._pathVerticalPlaneBuffers!=null)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){this._renderer==null&&(this._renderer=new D({view:this.view,contrastControlEnabled:!0,isDecoration:this.isDecoration}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff())}_syncStyle(){this._renderer!=null&&(this._renderer.setParameters(this._style),this._style.intersectsLineRadius!=null&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){this._renderer!=null&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){this._renderer!=null&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){this._renderer!=null&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){this._renderer!=null&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){this._renderer!=null&&(this._renderer.pathVerticalPlaneEnabled=this._pathVerticalPlaneBuffers!=null&&this.visible,this._pathVerticalPlaneBuffers!=null&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){this._renderer!=null&&(this._renderer.lineVerticalPlaneEnabled=this._lineVerticalPlaneSegment!=null&&this.visible,this._lineVerticalPlaneSegment!=null&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(this._renderer==null)return;const e=this._pointDistanceLine,n=e!=null;this._renderer.pointDistanceEnabled=n&&e.target!=null&&this.visible,n&&(this._renderer.pointDistanceOrigin=e.origin,e.target!=null&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){this._renderer!=null&&this.view._stage&&(this._renderer.destroy(),this._renderer=null)}}const gt=h();export{ue as A,Qt as c,Je as j,lt as m};
