const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LaserlinePath.glsl-DNndnwiF.js","./mathUtils-Cfq9PL9W.js","./vec32-Dvg_eL9J.js","./vec3f64-BLpZdpfb.js","./common-DQOJ18NT.js","./vec42-YcqnINSP.js","./vec4f64-o2zAXfmz.js","./projectVectorToVector-CCOy_B5J.js","./Accessor-BmwT4B0c.js","./Point-Cz2JYYmX.js","./cast-CsZslgGN.js","./index-4eY77cms.js","./index-Cx51aysm.css","./JSONSupport-DcrLLGjL.js","./writer-DKgfqj4X.js","./Extent-g5W9hy0j.js","./Polyline-s-JzsQqo.js","./projectBuffer-CQnuEMuP.js","./geodesicConstants-RQL9oKdk.js","./projectPointToVector-BoxjK-qy.js","./projection-CyCZAIaD.js","./SimpleObservable-CvOkykwM.js","./aaBoundingBox-Dw3yBk2f.js","./plane-CpXmOyqq.js","./mat3f64-BBpwCtoL.js","./mat4f64-Dk4dwAN8.js","./quatf64-CCm9z-pX.js","./vec2f64-Dy6m9Nrb.js","./mathUtils-BgCEaV43.js","./ViewingMode-Dodu7ZZk.js","./Object3DVisualElement-D0-_EXFp.js","./mat4-Fi6iAz29.js","./VisualElement-CaupdJPJ.js","./reactiveUtils-XM7cS2OP.js","./Evented-Dw4_VOGn.js","./RibbonLine.glsl-DwJpAQ1c.js","./sphere-Cin5efBj.js","./mat3-CR8GKnhD.js","./basicInterfaces-CZwQPxTp.js","./Material-C_-mgXN8.js","./VertexAttribute-Cq4MnHjR.js","./boundedPlane-DuGhiiFM.js","./lineSegment-v806maA5.js","./NoParameters-t-PuNrgq.js","./FloatArray-BQXWSSJh.js","./BindType-BBwFZqyN.js","./Matrix3PassUniform-uCCQMnlP.js","./Texture-BVJ22uHh.js","./signal-CySMLEX9.js","./enums-D9v74xTE.js","./getDataTypeBytes-BTGR5GyG.js","./renderState-Ci93M1-P.js","./Indices-D8XWalpO.js","./InterleavedLayout-_dYEAUNK.js","./BufferView-0osDbyWD.js","./vec2-ChnYg_BJ.js","./types-D0PSWh4d.js","./triangle-B1tKFm7z.js","./ShaderTechniqueConfiguration-D4dZMCXS.js","./glsl-BH37Aalp.js","./lengthUtils-_77UiyVF.js","./opacityUtils-Dim20wpZ.js","./Promise-DfET-uns.js","./requestImageUtils-DWgRKL5q.js","./TextureFormat-1mYWTFa-.js","./sdfPrimitives-DBgFWIDT.js","./doublePrecisionUtils-B0owpBza.js","./floatRGBA-Cb__GiDF.js","./Octree-CmoRJhci.js","./screenUtils-_ZIvrt5o.js","./ShaderBuilder-BKul5qh8.js","./RgbaFloatEncoding.glsl-_io2eW3M.js","./ElevationContext-BJejROd5.js","./computeTranslationToOriginAndRotation-DYUrDrjE.js","./dehydratedFeatureUtils-1rrRm6hF.js","./ElevationProvider-aS5xrHHy.js","./unitConversionUtils-rg07EgOm.js","./hydratedFeatures-CNHxsqRS.js","./Graphic-Dt0LgVGU.js","./Clonable-Z-AWS-16.js","./enumeration-DpvDkLNI.js","./Color-VJEMvW-n.js","./colorUtils-Rxh2V3ai.js","./ActionToggle-D7439N1A.js","./Identifiable-BHVfzH03.js","./jsonUtils-CwFG8yN4.js","./typeUtils-B6WBEKDM.js","./TextSymbol-BLIQ6RKX.js","./collectionUtils-CTT-51g7.js","./Portal-CmmHxpLg.js","./GeometryUtil-D-PMXorz.js","./vec3f32-nZdmKIgz.js","./Attribute-DGhdp5lO.js","./HUDMaterial-DDt4C7E7.js","./HUDVisibility.glsl-DuFScu5i.js","./VerticalOffset.glsl-CsMbbWIx.js","./BooleanBindUniform-BgD_OP8i.js","./HUDRenderStyle-BhGvVxgm.js","./GLTextureMaterial-96UpbkjC.js","./DefaultBufferWriter-CqCDaNCZ.js","./Float2PassUniform-x4sHx2JD.js","./Float4DrawUniform-Db0CLl_z.js"])))=>i.map(i=>d[i]);
import{r as g,aD as me,m as A,a as _e}from"./Accessor-BmwT4B0c.js";import{E as v,c as ee,A as R,r as H,p as te,s as b,_ as Pe,u as ie,o as O}from"./vec32-Dvg_eL9J.js";import{n as h,r as B,t as F}from"./vec3f64-BLpZdpfb.js";import{l as ve,v as N,p as U,h as be}from"./lineSegment-v806maA5.js";import{t as we}from"./VisualElement-CaupdJPJ.js";import{y as Ee,a as De,m as Ve,p as xe,g as Se}from"./Octree-CmoRJhci.js";import{E as ye,U as Le,k as Ce}from"./sphere-Cin5efBj.js";import{l as z}from"./ViewingMode-Dodu7ZZk.js";import{a as Ae,h as Te,t as G}from"./BooleanBindUniform-BgD_OP8i.js";import{o as Me,i as $e}from"./Blit-_zFq7-RL.js";import{t as Re}from"./aaBoundingBox-Dw3yBk2f.js";import{t as Ue}from"./glUtil-CAJRmga-.js";import{H as ne}from"./InterleavedLayout-_dYEAUNK.js";import{_ as se}from"./index-4eY77cms.js";import{l as Oe,s as m,i as Ie,k as X,c as T,L as qe,h as re,m as ae,t as le,a as Ne}from"./FloatArray-BQXWSSJh.js";import{s as j}from"./mathUtils-Cfq9PL9W.js";import{o as oe}from"./vec2-ChnYg_BJ.js";import{n as ce}from"./vec2f64-Dy6m9Nrb.js";import{z as he}from"./vec42-YcqnINSP.js";import{n as ze}from"./vec4f64-o2zAXfmz.js";import{l as je,M as We}from"./plane-CpXmOyqq.js";import{f as He}from"./CameraSpace.glsl-g9iLbhnR.js";import{e as D,t as Be}from"./Matrix3PassUniform-uCCQMnlP.js";import{n as a,t as k}from"./glsl-BH37Aalp.js";import{e as M}from"./Float2PassUniform-x4sHx2JD.js";import{i as de}from"./ShaderBuilder-BKul5qh8.js";import{c as Fe}from"./NoParameters-t-PuNrgq.js";import{e as o}from"./VertexAttribute-Cq4MnHjR.js";import{i as Ge}from"./mat4-Fi6iAz29.js";import{e as Xe}from"./mat4f64-Dk4dwAN8.js";import{o as ke}from"./Matrix4PassUniform-COGIPIq4.js";import{r as Ze}from"./VertexArrayObject-vYejmVPr.js";import{E as Je}from"./BufferObject-BJilD_hc.js";import{E as Ke,F as Qe,_ as Z}from"./enums-D9v74xTE.js";import{a as Ye,i as x}from"./ShaderTechniqueConfiguration-D4dZMCXS.js";import{a as c}from"./basicInterfaces-CZwQPxTp.js";import{c as et}from"./Material-C_-mgXN8.js";function pe(t,e){const n=t.fragment;n.include(Oe),t.include(He),n.uniforms.add(new m("globalAlpha",i=>i.globalAlpha),new D("glowColor",i=>i.glowColor),new m("glowWidth",(i,s)=>i.glowWidth*s.camera.pixelRatio),new m("glowFalloff",i=>i.glowFalloff),new D("innerColor",i=>i.innerColor),new m("innerWidth",(i,s)=>i.innerWidth*s.camera.pixelRatio),new Ie("depthMap",i=>{var s;return(s=i.depth)==null?void 0:s.attachment}),new X("normalMap",i=>i.normals)),n.code.add(a`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),n.code.add(a`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),n.code.add(a`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),n.code.add(a`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
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
}`),e.contrastControlEnabled?n.uniforms.add(new X("frameColor",(i,s)=>i.colors),new m("globalAlphaContrastBoost",i=>i.globalAlphaContrastBoost)).code.add(a`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`):n.code.add(a`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}const fe=j(6);function tt(t){const e=new de;e.include(Ae),e.include(pe,t);const n=e.fragment;if(t.lineVerticalPlaneEnabled||t.heightManifoldEnabled)if(n.uniforms.add(new m("maxPixelDistance",(i,s)=>t.heightManifoldEnabled?2*s.camera.computeScreenPixelSizeAt(i.heightManifoldTarget):2*s.camera.computeScreenPixelSizeAt(i.lineVerticalPlaneSegment.origin))),n.code.add(a`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),t.spherical){const i=(r,l,d)=>v(r,l.heightManifoldTarget,d.camera.viewMatrix),s=(r,l)=>v(r,[0,0,0],l.camera.viewMatrix);n.uniforms.add(new T("heightManifoldOrigin",(r,l)=>(i(u,r,l),s(V,l),ee(V,V,u),R(f,V),f[3]=H(V),f)),new qe("globalOrigin",r=>s(u,r)),new m("cosSphericalAngleThreshold",(r,l)=>1-Math.max(2,te(l.camera.eye,r.heightManifoldTarget)*l.camera.perRenderPixelRatio)/H(r.heightManifoldTarget))),n.code.add(a`float globeDistancePixels(float posInGlobalOriginLength) {
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
}`)}else n.code.add(a`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(t.pointDistanceEnabled&&(n.uniforms.add(new m("maxPixelDistance",(i,s)=>2*s.camera.computeScreenPixelSizeAt(i.pointDistanceTarget))),n.code.add(a`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),t.intersectsLineEnabled&&n.uniforms.add(new re("perScreenPixelRatio",i=>i.camera.perScreenPixelRatio)).code.add(a`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(t.lineVerticalPlaneEnabled||t.intersectsLineEnabled)&&n.code.add(a`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.main.add(a`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),t.heightManifoldEnabled){n.uniforms.add(new M("angleCutoff",s=>$(s)),new T("heightPlane",(s,r)=>ue(s.heightManifoldTarget,s.renderCoordsHelper.worldUpAtPosition(s.heightManifoldTarget,u),r.camera.viewMatrix)));const i=t.spherical?a`normalize(globalOrigin - pos)`:a`heightPlane.xyz`;n.main.add(a`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${i})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return t.pointDistanceEnabled&&(n.uniforms.add(new M("angleCutoff",i=>$(i)),new T("pointDistanceSphere",(i,s)=>it(i,s))),n.main.add(a`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),t.lineVerticalPlaneEnabled&&(n.uniforms.add(new M("angleCutoff",i=>$(i)),new T("lineVerticalPlane",(i,s)=>nt(i,s)),new D("lineVerticalStart",(i,s)=>st(i,s)),new D("lineVerticalEnd",(i,s)=>rt(i,s))),n.main.add(a`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),t.intersectsLineEnabled&&(n.uniforms.add(new M("angleCutoff",i=>$(i)),new D("intersectsLineStart",(i,s)=>v(u,i.lineStartWorld,s.camera.viewMatrix)),new D("intersectsLineEnd",(i,s)=>v(u,i.lineEndWorld,s.camera.viewMatrix)),new D("intersectsLineDirection",(i,s)=>(b(f,i.intersectsLineSegment.vector),f[3]=0,R(u,he(f,f,s.camera.viewMatrix)))),new m("intersectsLineRadius",i=>i.intersectsLineRadius)),n.main.add(a`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),n.main.add(a`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),e}function $(t){return oe(at,Math.cos(t.angleCutoff),Math.cos(Math.max(0,t.angleCutoff-j(2))))}function it(t,e){return v(Le(I),t.pointDistanceOrigin,e.camera.viewMatrix),I[3]=te(t.pointDistanceOrigin,t.pointDistanceTarget),I}function nt(t,e){const n=ve(t.lineVerticalPlaneSegment,.5,u),i=t.renderCoordsHelper.worldUpAtPosition(n,lt),s=R(V,t.lineVerticalPlaneSegment.vector),r=Pe(u,i,s);return R(r,r),ue(t.lineVerticalPlaneSegment.origin,r,e.camera.viewMatrix)}function st(t,e){const n=b(u,t.lineVerticalPlaneSegment.origin);return t.renderCoordsHelper.setAltitude(n,0),v(n,n,e.camera.viewMatrix)}function rt(t,e){const n=ie(u,t.lineVerticalPlaneSegment.origin,t.lineVerticalPlaneSegment.vector);return t.renderCoordsHelper.setAltitude(n,0),v(n,n,e.camera.viewMatrix)}function ue(t,e,n){return v(J,t,n),b(f,e),f[3]=0,he(f,f,n),je(J,f,ot)}const at=ce(),u=h(),f=ze(),lt=h(),V=h(),J=h(),ot=We(),I=ye(),ct=Object.freeze(Object.defineProperty({__proto__:null,build:tt,defaultAngleCutoff:fe},Symbol.toStringTag,{value:"Module"}));let ht=class extends Fe{constructor(){super(...arguments),this.innerColor=B(1,1,1),this.innerWidth=1,this.glowColor=B(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=j(6),this.pointDistanceOrigin=h(),this.pointDistanceTarget=h(),this.lineVerticalPlaneSegment=N(),this.intersectsLineSegment=N(),this.intersectsLineRadius=3,this.heightManifoldTarget=h(),this.lineStartWorld=h(),this.lineEndWorld=h()}};class dt extends ae{constructor(e,n){super(e,n,new le(ct,()=>se(()=>import("./LaserlinePath.glsl-DNndnwiF.js").then(i=>i.L),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]),import.meta.url)))}}function pt(t){const e=new de;e.include(pe,t);const{vertex:n,fragment:i}=e;n.uniforms.add(new ke("modelView",(r,{camera:l})=>Ge(ut,l.viewMatrix,r.origin)),new Be("proj",({camera:r})=>r.projectionMatrix),new m("glowWidth",(r,{camera:l})=>r.glowWidth*l.pixelRatio),new Ne("pixelToNDC",({camera:r})=>oe(ft,2/r.fullViewport[2],2/r.fullViewport[3]))),e.attributes.add(o.START,"vec3"),e.attributes.add(o.END,"vec3"),t.spherical&&(e.attributes.add(o.START_UP,"vec3"),e.attributes.add(o.END_UP,"vec3")),e.attributes.add(o.EXTRUDE,"vec2"),e.varyings.add("uv","vec2"),e.varyings.add("vViewStart","vec3"),e.varyings.add("vViewEnd","vec3"),e.varyings.add("vViewSegmentNormal","vec3"),e.varyings.add("vViewStartNormal","vec3"),e.varyings.add("vViewEndNormal","vec3");const s=!t.spherical;return n.main.add(a`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${k(s,a`vec3 startUp = vec3(0, 0, 1);`)}
    ${k(s,a`vec3 endUp = vec3(0, 0, 1);`)}

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
  `),i.uniforms.add(new re("perScreenPixelRatio",r=>r.camera.perScreenPixelRatio)),i.code.add(a`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
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
}`),i.main.add(a`fragColor = vec4(0.0);
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
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),e}const ft=ce(),ut=Xe(),gt=Object.freeze(Object.defineProperty({__proto__:null,build:pt},Symbol.toStringTag,{value:"Module"}));class mt extends ht{constructor(){super(...arguments),this.origin=h()}}let q=class extends ae{constructor(e,n){super(e,n,new le(gt,()=>se(()=>import("./LaserlinePath.glsl-DNndnwiF.js").then(i=>i.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]),import.meta.url)),ge)}};const ge=new Map([[o.START,0],[o.END,1],[o.EXTRUDE,2],[o.START_UP,3],[o.END_UP,4]]);let K=class{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=h(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const n=Re(3*e.length);let i=0;for(const s of e)n[i++]=s[0],n[i++]=s[1],n[i++]=s[2];this.buffers=[n]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const n=this._buffers[0],i=3*Math.floor(n.length/3/2);O(this._origin,n[i],n[i+1],n[i+2])}else O(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const n=this._ensureVAO(e);n!=null&&(e.bindVAO(n),e.drawArrays(Ke.TRIANGLES,0,this._count))}dispose(){this._vao!=null&&this._vao.dispose()}get _layout(){return this._renderCoordsHelper.viewingMode===z.Global?Pt:vt}_ensureVAO(e){return this._buffers==null?null:(this._vao??(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,n){const i=this._createDataBuffer(n);return this._dirty=!1,new Ze(e,ge,new Map([["data",Ue(this._layout)]]),new Map([["data",Je.createVertex(e,Qe.STATIC_DRAW,i)]]))}_ensureVertexData(e,n){var s;if(!this._dirty)return;const i=this._createDataBuffer(n);(s=e.vertexBuffers.get("data"))==null||s.setData(i),this._dirty=!1}_createDataBuffer(e){const n=e.reduce((_,p)=>_+Q(p),0);this._count=n;const i=this._layout.createBuffer(n),s=this._origin;let r=0,l=0;const d="startUp"in i?this._setUpVectors.bind(this,i):void 0;for(const _ of e){for(let p=0;p<_.length;p+=3){const C=O(Y,_[p],_[p+1],_[p+2]);p===0?l=this._renderCoordsHelper.getAltitude(C):this._renderCoordsHelper.setAltitude(C,l);const P=r+2*p;d==null||d(p,P,_,C);const W=ee(Y,C,s);if(p<_.length-3){for(let w=0;w<6;w++)i.start.setVec(P+w,W);i.extrude.setValues(P,0,-1),i.extrude.setValues(P+1,1,-1),i.extrude.setValues(P+2,1,1),i.extrude.setValues(P+3,0,-1),i.extrude.setValues(P+4,1,1),i.extrude.setValues(P+5,0,1)}if(p>0)for(let w=-6;w<0;w++)i.end.setVec(P+w,W)}r+=Q(_)}return i.buffer}_setUpVectors(e,n,i,s,r){const l=this._renderCoordsHelper.worldUpAtPosition(r,_t);if(n<s.length-3)for(let d=0;d<6;d++)e.startUp.setVec(i+d,l);if(n>0)for(let d=-6;d<0;d++)e.endUp.setVec(i+d,l)}};function Q(t){return 3*(2*(t.length/3-1))}const _t=h(),Y=h(),Pt=ne().vec3f(o.START).vec3f(o.END).vec2f(o.EXTRUDE).vec3f(o.START_UP).vec3f(o.END_UP),vt=ne().vec3f(o.START).vec3f(o.END).vec2f(o.EXTRUDE);class L extends Ye{constructor(){super(...arguments),this.contrastControlEnabled=!1,this.spherical=!1}}g([x()],L.prototype,"contrastControlEnabled",void 0),g([x()],L.prototype,"spherical",void 0);class y extends L{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}g([x()],y.prototype,"heightManifoldEnabled",void 0),g([x()],y.prototype,"pointDistanceEnabled",void 0),g([x()],y.prototype,"lineVerticalPlaneEnabled",void 0),g([x()],y.prototype,"intersectsLineEnabled",void 0);let E=class extends Te{constructor(t){super(t),this.produces=G.LASERLINES,this.consumes={required:[G.LASERLINES,"normals"]},this.requireGeometryDepth=!0,this._configuration=new y,this._pathTechniqueConfiguration=new L,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._passParameters=new mt;const e=t.view._stage.renderView.techniques,n=new L;n.contrastControlEnabled=t.contrastControlEnabled,e.precompile(q,n)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper,this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===z.Global,this._pathTechniqueConfiguration.contrastControlEnabled=this.contrastControlEnabled,this._techniques.precompile(q,this._pathTechniqueConfiguration),this._blit=new Me(this._techniques,$e.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=me(this._pathVerticalPlaneData),this._blit=null}get _techniques(){return this.view._stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(t){this._heightManifoldEnabled!==t&&(this._heightManifoldEnabled=t,this.requestRender(c.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(t){b(this._passParameters.heightManifoldTarget,t),this.requestRender(c.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(t){t!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=t,this.requestRender(c.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(t){b(this._passParameters.pointDistanceTarget,t),this.requestRender(c.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(t){b(this._passParameters.pointDistanceOrigin,t),this.requestRender(c.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(t){t!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=t,this.requestRender(c.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){U(t,this._passParameters.lineVerticalPlaneSegment),this.requestRender(c.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(t){t!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=t,this.requestRender(c.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(t){U(t,this._passParameters.intersectsLineSegment),this.requestRender(c.UPDATE)}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){t!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=t,this.requestRender(c.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,this._pathVerticalPlaneData!=null&&this.requestRender(c.UPDATE))}set pathVerticalPlaneVertices(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new K(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=t,this.pathVerticalPlaneEnabled&&this.requestRender(c.UPDATE)}set pathVerticalPlaneBuffers(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new K(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=t,this.pathVerticalPlaneEnabled&&this.requestRender(c.UPDATE)}setParameters(t){et(this._passParameters,t)&&this.requestRender(c.UPDATE)}precompile(){this._acquireTechnique()}render(t){const e=t.find(({name:l})=>l===this.produces);if(!this.bindParameters.decorations||this._blit==null)return e;const n=this.renderingContext,i=t.find(({name:l})=>l==="normals");this._passParameters.normals=i==null?void 0:i.getTexture();const s=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(),this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return n.bindFramebuffer(e.fbo),s(),e;this._passParameters.colors=e.getTexture();const r=this.fboCache.acquire(e.fbo.width,e.fbo.height,"laser lines");return n.bindFramebuffer(r.fbo),n.setClearColor(0,0,0,0),n.clear(Z.COLOR|Z.DEPTH),s(),n.unbindTexture(e.getTexture()),this._blit.blend(n,r,e,this.bindParameters)||this.requestRender(c.UPDATE),r.release(),e}_acquireTechnique(){return this._configuration.heightManifoldEnabled=this.heightManifoldEnabled,this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._configuration.pointDistanceEnabled=this.pointDistanceEnabled,this._configuration.intersectsLineEnabled=this.intersectsLineEnabled,this._configuration.contrastControlEnabled=this.contrastControlEnabled,this._configuration.spherical=this.view.state.viewingMode===z.Global,this._techniques.get(dt,this._configuration)}_renderUnified(){if(!this._updatePassParameters())return;const t=this._acquireTechnique();if(t.compiled){const e=this.renderingContext;e.bindTechnique(t,this.bindParameters,this._passParameters),e.screen.draw()}else this.requestRender(c.UPDATE)}_renderPath(){if(this._pathVerticalPlaneData==null)return;const t=this._techniques.get(q,this._pathTechniqueConfiguration);if(t.compiled){const e=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin,e.bindTechnique(t,this.bindParameters,this._passParameters),this._pathVerticalPlaneData.draw(e)}else this.requestRender(c.UPDATE)}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const t=this.bindParameters.camera,e=this._passParameters;if(this._intersectsLineInfinite){if(Ee(Ce(e.intersectsLineSegment.origin,e.intersectsLineSegment.vector),S),S.c0=-Number.MAX_VALUE,!Ve(t.frustum,S))return!1;xe(S,e.lineStartWorld),Se(S,e.lineEndWorld)}else b(e.lineStartWorld,e.intersectsLineSegment.origin),ie(e.lineEndWorld,e.intersectsLineSegment.origin,e.intersectsLineSegment.vector);return!0}get test(){}};g([A({constructOnly:!0})],E.prototype,"contrastControlEnabled",void 0),g([A({constructOnly:!0})],E.prototype,"isDecoration",void 0),g([A()],E.prototype,"produces",void 0),g([A()],E.prototype,"consumes",void 0),E=g([_e("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],E);const S=De();class li extends we{constructor(e){super(e),this._angleCutoff=fe,this._style={},this._heightManifoldTarget=h(),this._heightManifoldEnabled=!1,this._intersectsLine=N(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){e!=null?(b(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(e==null)return void(this.intersectsLine=null);const n=this.view.renderCoordsHelper.worldUpAtPosition(e,bt);this.intersectsLine=be(e,n),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){e!=null?(U(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=e!=null?U(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=e!=null?{origin:F(e.origin),target:e.target?F(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||this._pointDistanceLine!=null||this._pathVerticalPlaneBuffers!=null)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){this._renderer==null&&(this._renderer=new E({view:this.view,contrastControlEnabled:!0,isDecoration:this.isDecoration}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff())}_syncStyle(){this._renderer!=null&&this._renderer.setParameters(this._style)}_syncAngleCutoff(){var e;(e=this._renderer)==null||e.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){this._renderer!=null&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){this._renderer!=null&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){this._renderer!=null&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){this._renderer!=null&&(this._renderer.pathVerticalPlaneEnabled=this._pathVerticalPlaneBuffers!=null&&this.visible,this._pathVerticalPlaneBuffers!=null&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){this._renderer!=null&&(this._renderer.lineVerticalPlaneEnabled=this._lineVerticalPlaneSegment!=null&&this.visible,this._lineVerticalPlaneSegment!=null&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(this._renderer==null)return;const e=this._pointDistanceLine,n=e!=null;this._renderer.pointDistanceEnabled=n&&e.target!=null&&this.visible,n&&(this._renderer.pointDistanceOrigin=e.origin,e.target!=null&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){this._renderer!=null&&this.view._stage&&(this._renderer.destroy(),this._renderer=null)}}const bt=h();export{fe as V,li as c,pt as w,tt as y};
