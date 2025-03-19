const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RealisticTree.glsl-PW_KtBDJ.js","./Accessor-BmwT4B0c.js","./memoryEstimations-Bcyf-mHz.js","./Intersector-tBiZcjSu.js","./mat4-Fi6iAz29.js","./vec3f64-BLpZdpfb.js","./common-DQOJ18NT.js","./mat4f64-Dk4dwAN8.js","./vec32-Dvg_eL9J.js","./vec42-YcqnINSP.js","./vec4f64-o2zAXfmz.js","./sphere-Cin5efBj.js","./mathUtils-Cfq9PL9W.js","./Polyline-s-JzsQqo.js","./writer-DKgfqj4X.js","./Extent-g5W9hy0j.js","./Point-Cz2JYYmX.js","./cast-CsZslgGN.js","./index-4eY77cms.js","./index-Cx51aysm.css","./JSONSupport-DcrLLGjL.js","./mat3-CR8GKnhD.js","./mat3f64-BBpwCtoL.js","./plane-CpXmOyqq.js","./quatf64-CCm9z-pX.js","./vec2f64-Dy6m9Nrb.js","./mathUtils-BgCEaV43.js","./ViewingMode-Dodu7ZZk.js","./intersectorUtils-BNnvTT1E.js","./boundedPlane-DuGhiiFM.js","./lineSegment-v806maA5.js","./verticalOffsetUtils-BFnFdbst.js","./orientedBoundingBox-B17G_yFO.js","./quat-CP7JhygC.js","./spatialReferenceEllipsoidUtils-DBqQpPRa.js","./computeTranslationToOriginAndRotation-DYUrDrjE.js","./projectBuffer-CQnuEMuP.js","./geodesicConstants-RQL9oKdk.js","./Attribute-DGhdp5lO.js","./VertexAttribute-Cq4MnHjR.js","./Intersector-zrebwyaY.js","./glsl-BH37Aalp.js","./vec2-ChnYg_BJ.js","./BindType-BBwFZqyN.js","./ShaderBuilder-BKul5qh8.js","./Matrix3PassUniform-uCCQMnlP.js","./FloatArray-BQXWSSJh.js","./Material-C_-mgXN8.js","./NoParameters-t-PuNrgq.js","./Texture-BVJ22uHh.js","./signal-CySMLEX9.js","./SimpleObservable-CvOkykwM.js","./enums-D9v74xTE.js","./getDataTypeBytes-BTGR5GyG.js","./renderState-Ci93M1-P.js","./basicInterfaces-CZwQPxTp.js","./Indices-D8XWalpO.js","./InterleavedLayout-_dYEAUNK.js","./BufferView-0osDbyWD.js","./types-D0PSWh4d.js","./triangle-B1tKFm7z.js","./ShaderTechniqueConfiguration-D4dZMCXS.js","./lengthUtils-_77UiyVF.js","./opacityUtils-Dim20wpZ.js","./Promise-DfET-uns.js","./Evented-Dw4_VOGn.js","./requestImageUtils-DWgRKL5q.js","./TextureFormat-1mYWTFa-.js","./NormalAttribute.glsl-0GHNIsQf.js","./SceneLighting-BuSMIzqo.js"])))=>i.map(i=>d[i]);
import{H as ze,o as W,s as Lt,A as It,c as be,r as Gt,g as Ve,P as At,N as Pt}from"./vec32-Dvg_eL9J.js";import{e as Q,_ as ue,n as E,r as Dt}from"./vec3f64-BLpZdpfb.js";import{l as He}from"./ViewingMode-Dodu7ZZk.js";import{H as Ft}from"./InterleavedLayout-_dYEAUNK.js";import{o as I,n as g,i as ot,b as rt,u as ee,e as ne,g as We,h as we,r as jt,c as Rt}from"./Matrix3PassUniform-uCCQMnlP.js";import{a as w,t as he,b as Bt,n as k}from"./NormalAttribute.glsl-0GHNIsQf.js";import{L as se,p as Vt,r as P,s as L,g as j,Y as R,x as K,k as $,G as B,B as Ht,y as Wt,q as D,M as Ut,l as it,m as Ne,t as pe,h as le,a as qt,i as nt,o as O,O as Yt,Z as Zt,z as kt,d as ce,c as st,u as lt,H as ct,C as Ue,_ as Xt,$ as Jt,a0 as Kt,a1 as Qt,D as ea,J as ta,a2 as aa,K as oa,E as ra,F as A,A as Te,a3 as ia}from"./FloatArray-BQXWSSJh.js";import{aO as _e,aw as oe,aD as na,r as s,m as Me,a as sa}from"./Accessor-BmwT4B0c.js";import{n as i,t as v}from"./glsl-BH37Aalp.js";import{o as la,a as ca,R as re,b as qe,e as da,n as f,c as Le,t as Ee,d as de,f as ma,l as ua,m as dt}from"./SceneLighting-BuSMIzqo.js";import{i as _,a as Ye,e as te,n as fe}from"./basicInterfaces-CZwQPxTp.js";import{r as ha}from"./GLTextureMaterial-96UpbkjC.js";import{o as pa,p as fa,n as va,i as ga}from"./Material-C_-mgXN8.js";import{p as xa,f as ba}from"./DefaultBufferWriter-CqCDaNCZ.js";import{e as b}from"./VertexAttribute-Cq4MnHjR.js";import{d as wa}from"./verticalOffsetUtils-BFnFdbst.js";import{_ as ve}from"./index-4eY77cms.js";import{n as mt,r as Ta}from"./vec4f64-o2zAXfmz.js";import{e as Ie,o as U}from"./mat3f64-BBpwCtoL.js";import{w as Ma,F as ya,o as V,t as Ca,a as ut,n as ht,e as pt}from"./VertexColor.glsl-D3WyDYIi.js";import{t as Sa,c as $a}from"./Matrix3DrawUniform-DD7AqlIc.js";import{j as Ea}from"./mat3-CR8GKnhD.js";import{o as Oe}from"./mat4f64-Dk4dwAN8.js";import{o as Oa}from"./Matrix4PassUniform-COGIPIq4.js";import{o as za,r as Na}from"./doublePrecisionUtils-B0owpBza.js";import{a as ft}from"./VerticalOffset.glsl-CsMbbWIx.js";import{a as vt,o as _a}from"./Matrix4sPassUniform-SKhQ1xSr.js";import{a as Ge}from"./BindType-BBwFZqyN.js";import{s as La,n as gt}from"./vec2f64-Dy6m9Nrb.js";import{e as xt}from"./Float2PassUniform-x4sHx2JD.js";import{r as Ia}from"./mathUtils-Cfq9PL9W.js";import{d as Ga}from"./reactiveUtils-XM7cS2OP.js";import{o as me}from"./vec2-ChnYg_BJ.js";import{a as bt,h as Aa,t as ye,e as Pa}from"./BooleanBindUniform-BgD_OP8i.js";import{i as ge}from"./ShaderBuilder-BKul5qh8.js";import{B as Ae,g as Pe,f as Da}from"./renderState-Ci93M1-P.js";import{c as De}from"./NoParameters-t-PuNrgq.js";import{f as Fa}from"./CameraSpace.glsl-g9iLbhnR.js";import{D as Ze,G as ja,t as Ra,_ as Ba,f as Va,O as ke}from"./enums-D9v74xTE.js";import{p as Ha,w as Wa}from"./Texture-BVJ22uHh.js";import{t as Ua}from"./colorUtils-Rxh2V3ai.js";import{s as z}from"./vec42-YcqnINSP.js";import{i as d}from"./ShaderTechniqueConfiguration-D4dZMCXS.js";function yr({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:a,roughnessFactor:o,emissiveTexture:r,emissiveFactor:n,occlusionTexture:c}){return t==null&&e==null&&r==null&&(n==null||ze(n,ue))&&c==null&&(o==null||o===1)&&(a==null||a===1)}function Cr({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:a,roughnessFactor:o,emissiveTexture:r,emissiveFactor:n,occlusionTexture:c}){return t==null&&e==null&&r==null&&(n==null||ze(n,ue))&&c==null&&(o==null||o===1)&&(a==null||a===1||a===0)}const qa=Q(1,1,.5),Sr=Q(0,.6,.2),$r=Q(0,1,.2);function Ya(t,e){const a=t.fragment;switch(a.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case S.None:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case S.View:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case S.WindingOrder:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:_e(e.doubleSidedMode);case S.COUNT:}}var S;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(S||(S={}));function wt(t,e){switch(e.normalType){case w.Attribute:case w.Compressed:t.include(he,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new Sa("transformNormalGlobalFromModel",a=>a.transformNormalGlobalFromModel),new I("transformNormalViewFromGlobal",a=>a.transformNormalViewFromGlobal)),t.vertex.code.add(i`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case w.ScreenDerivative:t.vertex.code.add(i`void forwardNormal() {}`);break;default:_e(e.normalType);case w.COUNT:}}let Za=class extends ya{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Ie()}},ka=class extends Ma{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Ie(),this.toMapSpace=mt()}};function Tt(t){t.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}const Xe=Ie();function Mt(t,e){const a=e.hasModelTransformation,o=e.instancedDoublePrecision;a&&(t.vertex.uniforms.add(new Oa("model",n=>n.modelTransformation??Oe)),t.vertex.uniforms.add(new I("normalLocalOriginFromModel",n=>(Ea(Xe,n.modelTransformation??Oe),Xe)))),e.instanced&&o&&(t.attributes.add(b.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(b.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(b.INSTANCEMODEL,"mat3"),t.attributes.add(b.INSTANCEMODELNORMAL,"mat3"));const r=t.vertex;o&&(r.include($a,e),r.uniforms.add(new se("viewOriginHi",n=>za(W(ie,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ie)),new se("viewOriginLo",n=>Na(W(ie,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ie)))),r.code.add(i`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?i`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(i`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===g.Normal&&(Vt(r),r.code.add(i`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&r.code.add(i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ie=E();function yt(t,e){e.hasSymbolColors?(t.include(Bt),t.attributes.add(b.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(i`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new la("colorMixMode",a=>pa[a.colorMixMode])),t.vertex.code.add(i`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Xa(t,e){switch(e.output){case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:t.fragment.include(vt),t.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}let Ja=class extends ot{constructor(e,a){super(e,"float",Ge.Draw,(o,r,n)=>o.setUniform1f(e,a(r,n)))}};function H(t,e){Ct(t,e,new L("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function Nr(t,e){Ct(t,e,new Ja("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function Ct(t,e,a){const o=t.fragment,r=e.alphaDiscardMode,n=r===_.Blend;r!==_.Mask&&r!==_.MaskBlend||o.uniforms.add(a),o.code.add(i`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${r===_.Opaque?"color.a = 1.0;":`if (color.a < ${n?i.float(P):"textureAlphaCutoff"}) {
              discard;
             } ${v(r===_.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}function St(t,e){const{vertex:a,fragment:o}=t,r=e.hasColorTexture&&e.alphaDiscardMode!==_.Opaque,{output:n,normalType:c,hasColorTextureTransform:u}=e;switch(n){case g.Depth:j(a,e),t.include(V,e),t.fragment.include(B,e),t.include(R,e),r&&o.uniforms.add(new $("tex",m=>m.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(H,e),o.main.add(i`
        discardBySlice(vpos);
        ${v(r,i`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:case g.ObjectAndLayerIdColor:j(a,e),t.include(V,e),t.include(R,e),t.include(K,e),t.include(Xa,e),t.fragment.include(B,e),t.include(Wt,e),Ca(t),t.varyings.add("depth","float"),r&&o.uniforms.add(new $("tex",m=>m.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),t.include(H,e),o.main.add(i`
        discardBySlice(vpos);
        ${v(r,i`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${n===g.ObjectAndLayerIdColor?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}`);break;case g.Normal:{j(a,e),t.include(V,e),t.include(he,e),t.include(wt,e),t.include(R,e),t.include(K,e),r&&o.uniforms.add(new $("tex",p=>p.texture)),c===w.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const m=c===w.Attribute||c===w.Compressed;a.main.add(i`
        vpos = getVertexInLocalOriginSpace();
        ${m?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),t.fragment.include(B,e),t.include(H,e),o.main.add(i`
        discardBySlice(vpos);
        ${v(r,i`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${c===w.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case g.Highlight:j(a,e),t.include(V,e),t.include(R,e),t.include(K,e),r&&o.uniforms.add(new $("tex",m=>m.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.fragment.include(B,e),t.include(H,e),t.include(Ht,e),o.main.add(i`
        discardBySlice(vpos);
        ${v(r,i`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function Ka(t,e){const a=t.fragment;e.hasVertexTangents?(t.attributes.add(b.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===S.WindingOrder?a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==D.None&&(t.include(Ut,e),a.uniforms.add(e.bindType===Ge.Pass?new $("normalTexture",o=>o.textureNormal):new rt("normalTexture",o=>o.textureNormal)),e.hasNormalTextureTransform&&(a.uniforms.add(new xt("scale",o=>o.scale??La)),a.uniforms.add(new I("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??U))),a.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&a.code.add(i`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(i`return tangentSpace * rawNormal;
}`))}const Ce=4;function Qa(){const t=new ge,e=t.fragment;t.include(bt);const a=(Ce+1)/2,o=1/(2*a*a);return e.include(it),e.uniforms.add(new $("depthMap",r=>r.depthTexture),new rt("tex",r=>r.colorTexture),new ca("blurSize",r=>r.blurSize),new L("projScale",(r,n)=>{const c=n.camera.distance;return c>5e4?Math.max(0,r.projScale-(c-5e4)):r.projScale})),e.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.main.add(i`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${i.int(Ce)}; r <= ${i.int(Ce)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),t}const eo=Object.freeze(Object.defineProperty({__proto__:null,build:Qa},Symbol.toStringTag,{value:"Module"}));let Je=class extends Ne{constructor(e,a){super(e,a,new pe(eo,()=>ve(()=>import("./RealisticTree.glsl-PW_KtBDJ.js").then(o=>o.S),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69]),import.meta.url)))}initializePipeline(){return Ae({colorWrite:Pe})}};const to="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";class ao extends De{constructor(){super(...arguments),this.projScale=1}}let oo=class extends ao{constructor(){super(...arguments),this.intensity=1}};class ro extends De{}class io extends ro{constructor(){super(...arguments),this.blurSize=gt()}}const Ke=16;function no(){const t=new ge,e=t.fragment;return t.include(bt),t.include(Fa),e.include(it),e.uniforms.add(new le("radius",a=>Fe(a.camera))).code.add(i`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new $("normalMap",a=>a.normalTexture),new $("depthMap",a=>a.depthTexture),new L("projScale",a=>a.projScale),new $("rnm",a=>a.noiseTexture),new xt("rnmScale",(a,o)=>me(Qe,o.camera.fullWidth/a.noiseTexture.descriptor.width,o.camera.fullHeight/a.noiseTexture.descriptor.height)),new L("intensity",a=>a.intensity),new qt("screenSize",a=>me(Qe,a.camera.fullWidth,a.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.main.add(i`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${i.int(Ke)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${i.int(Ke)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),t}function Fe(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const Qe=gt(),so=Object.freeze(Object.defineProperty({__proto__:null,build:no,getRadius:Fe},Symbol.toStringTag,{value:"Module"}));let et=class extends Ne{constructor(e,a){super(e,a,new pe(so,()=>ve(()=>import("./RealisticTree.glsl-PW_KtBDJ.js").then(o=>o.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69]),import.meta.url)))}initializePipeline(){return Ae({colorWrite:Pe})}};const J=2;let X=class extends Aa{constructor(t){super(t),this.consumes={required:["normals"]},this.produces=ye.SSAO,this.isEnabled=()=>!1,this._enableTime=oe(0),this._passParameters=new oo,this._drawParameters=new io}initialize(){const t=Uint8Array.from(atob(to),a=>a.charCodeAt(0)),e=new Ha;e.wrapMode=Ze.CLAMP_TO_EDGE,e.pixelFormat=ja.RGB,e.wrapMode=Ze.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new Wa(this.renderingContext,e,t),this.techniques.precompile(et),this.techniques.precompile(Je),this.addHandles(Ga(()=>this.isEnabled(),()=>this._enableTime=oe(0)))}destroy(){this._passParameters.noiseTexture=na(this._passParameters.noiseTexture)}render(t){const e=this.bindParameters,a=t.find(({name:C})=>C==="normals"),o=a==null?void 0:a.getTexture(),r=a==null?void 0:a.getTexture(Ra),n=this.fboCache,c=e.camera,u=c.fullViewport[2],m=c.fullViewport[3],p=Math.round(u/J),x=Math.round(m/J),T=this.techniques.get(et),M=this.techniques.get(Je);if(!T.compiled||!M.compiled)return this._enableTime=oe(performance.now()),this.requestRender(Ye.UPDATE),n.acquire(p,x,ye.SSAO,re.RED);this._enableTime===0&&(this._enableTime=oe(performance.now()));const h=this.renderingContext,G=this.view.qualitySettings.fadeDuration,y=c.relativeElevation,ae=Ia((qe-y)/(qe-da),0,1),q=G>0?Math.min(G,performance.now()-this._enableTime)/G:1,xe=q*ae;this._passParameters.normalTexture=o,this._passParameters.depthTexture=r,this._passParameters.projScale=1/c.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*lo/Fe(c)**6*xe;const Y=n.acquire(u,m,"ssao input",re.RG);h.bindFramebuffer(Y.fbo),h.setViewport(0,0,u,m),h.bindTechnique(T,e,this._passParameters,this._drawParameters),h.screen.draw();const Z=n.acquire(p,x,"ssao blur",re.RED);h.bindFramebuffer(Z.fbo),this._drawParameters.colorTexture=Y.getTexture(),me(this._drawParameters.blurSize,0,J/m),h.bindTechnique(M,e,this._passParameters,this._drawParameters),h.setViewport(0,0,p,x),h.screen.draw(),Y.release();const F=n.acquire(p,x,ye.SSAO,re.RED);return h.bindFramebuffer(F.fbo),h.setViewport(0,0,u,m),h.setClearColor(1,1,1,0),h.clear(Ba.COLOR),this._drawParameters.colorTexture=Z.getTexture(),me(this._drawParameters.blurSize,J/u,0),h.bindTechnique(M,e,this._passParameters,this._drawParameters),h.setViewport(0,0,p,x),h.screen.draw(),h.setViewport4fv(c.fullViewport),Z.release(),q<1&&this.requestRender(Ye.UPDATE),F}};s([Me()],X.prototype,"consumes",void 0),s([Me()],X.prototype,"produces",void 0),s([Me({constructOnly:!0})],X.prototype,"isEnabled",void 0),X=s([sa("esri.views.3d.webgl-engine.effects.ssao.SSAO")],X);const lo=.5;function je(t,e){const a=t.fragment;e.receiveAmbientOcclusion?(a.uniforms.add(new nt("ssaoTex",o=>{var r;return(r=o.ssao)==null?void 0:r.getTexture()})),a.constants.add("blurSizePixelsInverse","float",1/J),a.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function co(t,e){const a=t.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(a.uniforms.add(new se("lightingAmbientSH0",({lighting:r})=>W(tt,r.sh.r[0],r.sh.g[0],r.sh.b[0]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(a.uniforms.add(new O("lightingAmbientSH_R",({lighting:r})=>z(N,r.sh.r[0],r.sh.r[1],r.sh.r[2],r.sh.r[3])),new O("lightingAmbientSH_G",({lighting:r})=>z(N,r.sh.g[0],r.sh.g[1],r.sh.g[2],r.sh.g[3])),new O("lightingAmbientSH_B",({lighting:r})=>z(N,r.sh.b[0],r.sh.b[1],r.sh.b[2],r.sh.b[3]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===2&&(a.uniforms.add(new se("lightingAmbientSH0",({lighting:r})=>W(tt,r.sh.r[0],r.sh.g[0],r.sh.b[0])),new O("lightingAmbientSH_R1",({lighting:r})=>z(N,r.sh.r[1],r.sh.r[2],r.sh.r[3],r.sh.r[4])),new O("lightingAmbientSH_G1",({lighting:r})=>z(N,r.sh.g[1],r.sh.g[2],r.sh.g[3],r.sh.g[4])),new O("lightingAmbientSH_B1",({lighting:r})=>z(N,r.sh.b[1],r.sh.b[2],r.sh.b[3],r.sh.b[4])),new O("lightingAmbientSH_R2",({lighting:r})=>z(N,r.sh.r[5],r.sh.r[6],r.sh.r[7],r.sh.r[8])),new O("lightingAmbientSH_G2",({lighting:r})=>z(N,r.sh.g[5],r.sh.g[6],r.sh.g[7],r.sh.g[8])),new O("lightingAmbientSH_B2",({lighting:r})=>z(N,r.sh.b[5],r.sh.b[6],r.sh.b[7],r.sh.b[8]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==f.Normal&&e.pbrMode!==f.Schematic||a.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const tt=E(),N=mt();function Re(t){t.constants.add("ambientBoostFactor","float",ua)}function Be(t){t.uniforms.add(new le("lightingGlobalFactor",e=>e.lighting.globalFactor))}function $t(t,e){const a=t.fragment;switch(t.include(je,e),e.pbrMode!==f.Disabled&&t.include(Le,e),t.include(co,e),t.include(Yt),a.code.add(i`
    const float GAMMA_SRGB = ${i.float(Ua)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===f.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Re(a),Be(a),Ee(a),a.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),de(a),a.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case f.Disabled:case f.WaterOnIntegratedMesh:case f.Water:t.include(ma),a.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case f.Normal:case f.Schematic:a.code.add(i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),a.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?a.uniforms.add(new Pa("hasFillLights",o=>o.enableFillLights)):a.constants.add("hasFillLights","bool",!1),a.code.add(i`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),a.uniforms.add(new le("lightingSpecularStrength",o=>o.lighting.mainLight.specularStrength),new le("lightingEnvironmentStrength",o=>o.lighting.mainLight.environmentStrength)).code.add(i`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),a.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==f.Schematic||e.hasColorTexture?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case f.Simplified:case f.TerrainWithWater:Ee(a),de(a),a.code.add(i`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:_e(e.pbrMode);case f.COUNT:}}let mo=class extends ot{constructor(e,a,o){super(e,"mat4",Ge.Draw,(r,n,c,u)=>r.setUniformMatrix4fv(e,a(n,c,u)),o)}};class uo extends De{constructor(){super(...arguments),this.modelTransformation=Oe}}class Ar extends uo{constructor(){super(...arguments),this.origin=E()}}function Et(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new _a("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),zt(t))}function Ot(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new mo("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),zt(t))}function zt(t){const e=t.fragment;e.include(vt),e.uniforms.add(new nt("shadowMap",a=>a.shadowMap.depthTexture),new Zt("numCascades",a=>a.shadowMap.numCascades),new O("cascadeDistances",a=>a.shadowMap.cascadeDistances)).code.add(i`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function ho(t,e){e.hasColorTextureTransform?(t.varyings.add("colorUV","vec2"),t.vertex.uniforms.add(new I("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??U)).code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardColorUV(){}`)}function po(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==D.None?(t.varyings.add("normalUV","vec2"),t.vertex.uniforms.add(new I("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??U)).code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardNormalUV(){}`)}function fo(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==D.None?(t.varyings.add("emissiveUV","vec2"),t.vertex.uniforms.add(new I("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??U)).code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardEmissiveUV(){}`)}function vo(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==D.None?(t.varyings.add("occlusionUV","vec2"),t.vertex.uniforms.add(new I("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??U)).code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardOcclusionUV(){}`)}function go(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==D.None?(t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.uniforms.add(new I("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??U)).code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function Nt(t){t.include(kt),t.code.add(i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.int(k.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.int(k.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(k.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.int(k.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(k.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function xo(t){const e=new ge,{vertex:a,fragment:o,varyings:r}=e,{output:n,normalType:c,offsetBackfaces:u,instancedColor:m,spherical:p,receiveShadows:x,snowCover:T,pbrMode:M,textureAlphaPremultiplied:h,instancedDoublePrecision:G,hasVertexColors:y,hasVertexTangents:ae,hasColorTexture:q,hasNormalTexture:xe,hasNormalTextureTransform:Y,hasColorTextureTransform:Z}=t;if(j(a,t),e.include(ut),r.add("vpos","vec3"),e.include(K,t),e.include(Mt,t),e.include(ft,t),e.include(ho,t),!ee(n))return e.include(St,t),e;e.include(po,t),e.include(fo,t),e.include(vo,t),e.include(go,t),ce(a,t),e.include(he,t),e.include(V,t);const F=c===w.Attribute||c===w.Compressed;return F&&u&&e.include(Tt),e.include(Ka,t),e.include(wt,t),m&&e.attributes.add(b.INSTANCECOLOR,"vec4"),r.add("vPositionLocal","vec3"),e.include(R,t),e.include(ht,t),e.include(yt,t),e.include(pt,t),a.uniforms.add(new st("externalColor",C=>C.externalColor)),r.add("vcolorExt","vec4"),e.include(lt,t),a.main.add(i`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${v(m,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${v(F,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${v(ae,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${v(F&&u,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${i.float(P)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),e.include($t,t),e.include(je,t),e.include(H,t),e.include(G?Et:Ot,t),e.fragment.include(B,t),e.include(ct,t),ce(o,t),o.uniforms.add(a.uniforms.get("localOrigin"),new ne("ambient",C=>C.ambient),new ne("diffuse",C=>C.diffuse),new L("opacity",C=>C.opacity),new L("layerOpacity",C=>C.layerOpacity)),q&&o.uniforms.add(new $("tex",C=>C.texture)),e.include(dt,t),e.include(Le,t),o.include(Nt),e.include(Ya,t),Re(o),Be(o),de(o),o.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${q?i`
            vec4 texColor = texture(tex, ${Z?"colorUV":"vuv0"});
            ${v(h,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${c===w.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${x?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":v(p,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${v(y,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${v(y,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${xe?`mat3 tangentSpace = computeTangentSpace(${ae?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${Y?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${p?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${v(T,i`
          float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${M===f.Normal||M===f.Schematic?i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${v(T,i`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
            vec4 emission = ${T?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos);
  `),e}const bo=Object.freeze(Object.defineProperty({__proto__:null,build:xo},Symbol.toStringTag,{value:"Module"}));let wo=class extends Za{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=qa,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=te.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=ue,this.instancedDoublePrecision=!1,this.normalType=w.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=Q(.2,.2,.2),this.diffuse=Q(.8,.8,.8),this.externalColor=Ta(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=E(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=fe.Less,this.textureAlphaMode=_.Blend,this.textureAlphaCutoff=P,this.textureAlphaPremultiplied=!1,this.renderOccluded=fa.Occlude,this.isDecoration=!1}};class Dr extends ka{constructor(){super(...arguments),this.origin=E(),this.slicePlaneLocalOrigin=this.origin}}let _t=class extends Ne{constructor(e,a,o=new pe(bo,()=>ve(()=>import("./RealisticTree.glsl-PW_KtBDJ.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69]),import.meta.url))){super(e,a,o),this.type="DefaultMaterialTechnique"}_makePipeline(e,a){const{oitPass:o,output:r,transparent:n,cullFace:c,customDepthTest:u,hasOccludees:m,enableOffset:p}=e,x=o===Ue.NONE,T=o===Ue.FrontFace;return Ae({blending:ee(r)&&n?oa(o):null,culling:Mo(e)?Da(c):null,depthTest:{func:aa(o,To(u))},depthWrite:ta(e),drawBuffers:r===g.Depth?{buffers:[Va.NONE]}:ea(o,r),colorWrite:Pe,stencilWrite:m?Qt:null,stencilTest:m?a?Jt:Kt:null,polygonOffset:x||T?null:Xt(p)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function To(t){return t===fe.Lequal?ke.LEQUAL:ke.LESS}function Mo(t){return t.cullFace!==te.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}class l extends ra{constructor(e,a){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=a,this.alphaDiscardMode=_.Opaque,this.doubleSidedMode=S.None,this.pbrMode=f.Disabled,this.cullFace=te.None,this.normalType=w.Attribute,this.customDepthTest=fe.Less,this.emissionSource=A.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===A.Texture||this.hasOcclusionTexture||this.hasNormalTexture?D.Default:D.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}s([d({count:_.COUNT})],l.prototype,"alphaDiscardMode",void 0),s([d({count:S.COUNT})],l.prototype,"doubleSidedMode",void 0),s([d({count:f.COUNT})],l.prototype,"pbrMode",void 0),s([d({count:te.COUNT})],l.prototype,"cullFace",void 0),s([d({count:w.COUNT})],l.prototype,"normalType",void 0),s([d({count:fe.COUNT})],l.prototype,"customDepthTest",void 0),s([d({count:A.COUNT})],l.prototype,"emissionSource",void 0),s([d()],l.prototype,"hasVertexColors",void 0),s([d()],l.prototype,"hasSymbolColors",void 0),s([d()],l.prototype,"hasVerticalOffset",void 0),s([d()],l.prototype,"hasColorTexture",void 0),s([d()],l.prototype,"hasMetallicRoughnessTexture",void 0),s([d()],l.prototype,"hasOcclusionTexture",void 0),s([d()],l.prototype,"hasNormalTexture",void 0),s([d()],l.prototype,"hasScreenSizePerspective",void 0),s([d()],l.prototype,"hasVertexTangents",void 0),s([d()],l.prototype,"hasOccludees",void 0),s([d()],l.prototype,"hasModelTransformation",void 0),s([d()],l.prototype,"offsetBackfaces",void 0),s([d()],l.prototype,"vvSize",void 0),s([d()],l.prototype,"vvColor",void 0),s([d()],l.prototype,"receiveShadows",void 0),s([d()],l.prototype,"receiveAmbientOcclusion",void 0),s([d()],l.prototype,"textureAlphaPremultiplied",void 0),s([d()],l.prototype,"instanced",void 0),s([d()],l.prototype,"instancedColor",void 0),s([d()],l.prototype,"writeDepth",void 0),s([d()],l.prototype,"transparent",void 0),s([d()],l.prototype,"enableOffset",void 0),s([d()],l.prototype,"terrainDepthTest",void 0),s([d()],l.prototype,"cullAboveTerrain",void 0),s([d()],l.prototype,"snowCover",void 0),s([d()],l.prototype,"hasColorTextureTransform",void 0),s([d()],l.prototype,"hasEmissionTextureTransform",void 0),s([d()],l.prototype,"hasNormalTextureTransform",void 0),s([d()],l.prototype,"hasOcclusionTextureTransform",void 0),s([d()],l.prototype,"hasMetallicRoughnessTextureTransform",void 0);function yo(t){const e=new ge,{vertex:a,fragment:o,varyings:r}=e,{output:n,offsetBackfaces:c,instancedColor:u,pbrMode:m,snowCover:p,spherical:x}=t,T=m===f.Normal||m===f.Schematic;if(j(a,t),e.include(ut),r.add("vpos","vec3"),e.include(K,t),e.include(Mt,t),e.include(ft,t),e.include(lt,t),ee(n)&&(ce(e.vertex,t),e.include(he,t),e.include(V,t),c&&e.include(Tt),u&&e.attributes.add(b.INSTANCECOLOR,"vec4"),r.add("vNormalWorld","vec3"),r.add("localvpos","vec3"),e.include(R,t),e.include(ht,t),e.include(yt,t),e.include(pt,t),a.uniforms.add(new st("externalColor",M=>M.externalColor)),r.add("vcolorExt","vec4"),a.main.add(i`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${v(u,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${i.float(P)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${v(c,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),ee(n)){const{hasColorTexture:M,hasColorTextureTransform:h,receiveShadows:G}=t;e.include($t,t),e.include(je,t),e.include(H,t),e.include(t.instancedDoublePrecision?Et:Ot,t),e.fragment.include(B,t),e.include(ct,t),ce(e.fragment,t),Ee(o),Re(o),Be(o),o.uniforms.add(a.uniforms.get("localOrigin"),a.uniforms.get("view"),new ne("ambient",y=>y.ambient),new ne("diffuse",y=>y.diffuse),new L("opacity",y=>y.opacity),new L("layerOpacity",y=>y.layerOpacity)),M&&o.uniforms.add(new $("tex",y=>y.texture)),e.include(dt,t),e.include(Le,t),o.include(Nt),de(o),o.main.add(i`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${M?`texture(tex, ${h?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${v(M,`${v(t.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${G?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":x?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${t.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${v(p,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${i`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${v(T,`vec3 normalGround = ${x?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${T?i`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${v(p,i`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${p?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return e.include(St,t),e}const Co=Object.freeze(Object.defineProperty({__proto__:null,build:yo},Symbol.toStringTag,{value:"Module"}));class So extends _t{constructor(e,a){super(e,a,new pe(Co,()=>ve(()=>import("./RealisticTree.glsl-PW_KtBDJ.js").then(o=>o.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69]),import.meta.url))),this.type="RealisticTreeTechnique"}}class jr extends va{constructor(e,a){super(e,Eo),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[Te.OPAQUE_MATERIAL,o=>(We(o)||we(o))&&!this.parameters.transparent],[Te.TRANSPARENT_MATERIAL,o=>(We(o)||we(o))&&this.parameters.transparent&&this.parameters.writeDepth],[Te.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,o=>(jt(o)||we(o))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=zo(this.parameters),this._configuration=new l(a.spherical,a.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==g.Shadow&&e!==g.ShadowExcludeHighlight&&e!==g.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<P)return!1;const{hasInstancedColor:a,hasVertexColors:o,hasSymbolColors:r,vvColor:n}=e,c=a||n||r,u=e.colorMixMode==="replace",m=e.opacity>=P;if(o&&c)return u||m;const p=e.externalColor&&e.externalColor[3]>=P;return o?u?p:m:c?u||m:u?p:m}get hasEmissions(){return!!this.parameters.emissiveTextureId||!ze(this.parameters.emissiveFactor,ue)}getConfiguration(e,a){const o=this.parameters,{treeRendering:r,doubleSided:n,doubleSidedType:c}=o;return this._configuration.output=e,this._configuration.hasNormalTexture=!r&&!!o.normalTextureId,this._configuration.hasColorTexture=!!o.textureId,this._configuration.hasVertexTangents=!r&&o.hasVertexTangents,this._configuration.instanced=o.isInstanced,this._configuration.instancedDoublePrecision=o.instancedDoublePrecision,this._configuration.vvSize=!!o.vvSize,this._configuration.hasVerticalOffset=o.verticalOffset!=null,this._configuration.hasScreenSizePerspective=o.screenSizePerspective!=null,this._configuration.hasSlicePlane=o.hasSlicePlane,this._configuration.alphaDiscardMode=o.textureAlphaMode,this._configuration.normalType=r?w.Attribute:o.normalType,this._configuration.transparent=o.transparent,this._configuration.writeDepth=o.writeDepth,o.customDepthTest!=null&&(this._configuration.customDepthTest=o.customDepthTest),this._configuration.hasOccludees=a.hasOccludees,this._configuration.cullFace=o.hasSlicePlane?te.None:o.cullFace,this._configuration.cullAboveTerrain=a.cullAboveTerrain,this._configuration.hasModelTransformation=!r&&o.modelTransformation!=null,this._configuration.hasVertexColors=o.hasVertexColors,this._configuration.hasSymbolColors=o.hasSymbolColors,this._configuration.doubleSidedMode=r?S.WindingOrder:n&&c==="normal"?S.View:n&&c==="winding-order"?S.WindingOrder:S.None,this._configuration.instancedColor=o.hasInstancedColor,ee(e)?(this._configuration.terrainDepthTest=a.terrainDepthTest,this._configuration.receiveShadows=o.receiveShadows,this._configuration.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&a.ssao!=null):(this._configuration.terrainDepthTest=!1,this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1),this._configuration.vvColor=!!o.vvColor,this._configuration.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,this._configuration.pbrMode=o.usePBR?o.isSchematic?f.Schematic:f.Normal:f.Disabled,this._configuration.hasMetallicRoughnessTexture=!r&&!!o.metallicRoughnessTextureId,this._configuration.emissionSource=r?A.None:o.emissiveTextureId!=null?A.Texture:o.usePBR?A.Value:A.None,this._configuration.hasOcclusionTexture=!r&&!!o.occlusionTextureId,this._configuration.offsetBackfaces=!(!o.transparent||!o.offsetTransparentBackfaces),this._configuration.oitPass=a.oitPass,this._configuration.enableOffset=a.camera.relativeElevation<ia,this._configuration.snowCover=Oo(a),this._configuration.hasColorTextureTransform=!!o.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,a,o,r,n,c){if(this.parameters.verticalOffset!=null){const u=o.camera;W($e,a[12],a[13],a[14]);let m=null;switch(o.viewingMode){case He.Global:m=It(at,$e);break;case He.Local:m=Lt(at,Lo)}let p=0;const x=be(Io,$e,u.eye),T=Gt(x),M=Ve(x,x,1/T);let h=null;this.parameters.screenSizePerspective&&(h=At(m,M)),p+=ga(u,T,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),Ve(m,m,p),Pt(Se,m,o.transform.inverseRotation),r=be(No,r,Se),n=be(_o,n,Se)}xa(e,o,r,n,wa(o.verticalOffset),c)}createGLMaterial(e){return new $o(e)}createBufferWriter(){return new ba(this._vertexBufferLayout)}}class $o extends ha{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const a=this._material.parameters;this.updateTexture(a.textureId);const o=e.camera.viewInverseTransposeMatrix;return W(a.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(a.treeRendering?So:_t,e)}}class Eo extends wo{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function Oo(t){return t.weather!=null&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}function zo(t){const e=Ft().vec3f(b.POSITION);return t.normalType===w.Compressed?e.vec2i16(b.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(b.NORMAL),t.hasVertexTangents&&e.vec4f(b.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(b.UV0),t.hasVertexColors&&e.vec4u8(b.COLOR),t.hasSymbolColors&&e.vec4u8(b.SYMBOLCOLOR),Rt()&&e.vec4u8(b.OBJECTANDLAYERIDCOLOR),e}const No=E(),_o=E(),Lo=Dt(0,0,1),at=E(),Se=E(),$e=E(),Io=E();export{X as E,xo as J,Dr as N,Ka as T,yo as _,yr as a,Xa as b,$t as c,je as d,Ja as e,Ya as f,S as g,co as h,Qa as i,Ar as j,wt as k,Nt as l,no as m,ka as n,Sr as o,Be as p,Nr as q,Cr as r,$r as s,qa as t,Re as u,Fe as v,Et as w,Ot as x,Za as y,jr as z};
