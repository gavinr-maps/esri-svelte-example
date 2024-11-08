import{o as b,J as Q,E as k}from"./vec32-Dvg_eL9J.js";import{n as q}from"./vec3f64-BLpZdpfb.js";import{H as J}from"./InterleavedLayout-e-di2fxs.js";import{n as _,i as K,o as X,q as R,C as ee,x as U}from"./Matrix3DrawUniform-CiBFaSz6.js";import{o as te}from"./AlphaCutoff-UcccL64p.js";import{u as re}from"./VertexColor.glsl-_ARMpsAT.js";import{n as ie,p as y}from"./Material-_xx7OZxD.js";import{o as ae,d as se,c as oe,e as M,a as ne,w as ce,u as le,P as pe,q as de,b as he,r as ve,T as me,h as ue,j as fe,y as Te,a9 as Se,z as ge,B as Pe,aa as W,ab as F,ac as _e,al as B,am as Oe,an as Ae,ao as Ee,ap as ye,A as f,aq as we}from"./Texture-Fac_8AOC.js";import{e as r}from"./VertexAttribute-Cq4MnHjR.js";import{_ as Re}from"./index-Bh2oEzTI.js";import{v as T,w as xe,x as ze,j as H,y as V,z as Le,B as Ne,D as Ie,F as G}from"./RibbonLine.glsl-BZu1FDpE.js";import{f as Ce}from"./enums-D9v74xTE.js";import{B as w,g as x,c as j}from"./renderState-DQLu6AJX.js";import"./subclass-BZA_h8Db.js";import"./floatRGBA-CfH_2xsy.js";import"./Texture-Begq2x5n.js";import"./mat4-GpOFENPA.js";import"./mat4f64-Dk4dwAN8.js";import"./BindType-BmZEZMMh.js";import{o as l}from"./interfaces-DDtDqZYj.js";import"./vec2-maR1OrZI.js";import"./vec2f64-miziP1SN.js";import{t as $e}from"./Float4DrawUniform-N58YDhuZ.js";function Z(i){const e=new ae,t=i.terrainDepthTest&&i.output===_.Color,a=i.space===T.World;e.include(xe,i),e.include(ze,i);const{vertex:s,fragment:m}=e;return m.include($e),se(s,i),e.attributes.add(r.POSITION,"vec3"),e.attributes.add(r.PREVPOSITION,"vec3"),e.attributes.add(r.UV0,"vec2"),e.varyings.add("vColor","vec4"),e.varyings.add("vpos","vec3"),e.varyings.add("vUV","vec2"),e.varyings.add("vSize","float"),t&&e.varyings.add("depth","float"),i.hasTip&&e.varyings.add("vLineWidth","float"),s.uniforms.add(new oe("nearFar",(d,p)=>p.camera.nearFar),new M("viewport",(d,p)=>p.camera.fullViewport)),s.code.add(l`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),s.code.add(l`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),a?(e.attributes.add(r.NORMAL,"vec3"),ne(s),s.constants.add("tiltThreshold","float",.7),s.code.add(l`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):s.code.add(l`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),s.code.add(l`
      #define vecN ${a?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${a?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${i.anchor===H.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),i.space===T.Screen&&(s.uniforms.add(new K("inverseProjectionMatrix",(d,p)=>p.camera.inverseProjectionMatrix)),s.code.add(l`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),s.code.add(l`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),s.uniforms.add(new X("perScreenPixelRatio",(d,p)=>p.camera.perScreenPixelRatio)),s.code.add(l`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${i.hasCap?`
                if(prev.z > posLeft.z) {
                  vec2 diff = posLeft.xy - posRight.xy;
                  planeOrigin.xy += perpendicular(diff) / 2.0;
                }
              `:""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),ce(s),s.main.add(l`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      clip(pos, prev);

      ${a?l`${i.hideOnShortSegments?l`
                  if (areWorldMarkersHidden(pos, prev)) {
                    // Project out of clip space
                    gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                    return;
                  }`:""}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:l`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${i.space===T.Screen?l`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`:""}`}

      ${t?"depth = pos.z;":""}

      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${a?"":"vUV *= displacedPosScreen.w;"}
      ${i.hasTip?"vLineWidth = lineWidth;":""}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),t&&e.include(le,i),e.include(pe,i),e.include(de,i),m.uniforms.add(new M("intrinsicColor",d=>d.color),new he("tex",d=>d.markerTexture)),m.include(ve),m.constants.add("texelSize","float",1/V),m.code.add(l`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),i.hasTip&&m.constants.add("relativeMarkerSize","float",Le/V).constants.add("relativeTipLineWidth","float",Ne).code.add(l`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${a?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),e.include(me,i),m.main.add(l`
    discardBySlice(vpos);
    ${t?"terrainDepthTest(depth);":""}

    vec4 finalColor = intrinsicColor * vColor;
    ${a?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}
    ${i.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}
    outputColorHighlightOID(finalColor, vpos);`),e}const De=Object.freeze(Object.defineProperty({__proto__:null,build:Z},Symbol.toStringTag,{value:"Module"}));class be extends ue{constructor(e,t,a){super(e,t,new fe(De,()=>Re(()=>Promise.resolve().then(()=>Be),void 0,import.meta.url)),a,Y)}_makePipelineState(e,t){const{output:a,oitPass:s,space:m,hasOccludees:d}=e;return w({blending:a===_.Color?Te(s):null,depthTest:m===T.Draped?null:{func:Se(s)},depthWrite:ge(e),drawBuffers:a===_.Depth?{buffers:[Ce.NONE]}:Pe(s,a),colorWrite:x,stencilWrite:d?W:null,stencilTest:d?t?F:_e:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=w({blending:j,depthTest:B,depthWrite:null,colorWrite:x,stencilWrite:null,stencilTest:Oe}),this._occluderPipelineOpaque=w({blending:j,depthTest:B,depthWrite:null,colorWrite:x,stencilWrite:Ae,stencilTest:Ee}),this._occluderPipelineMaskWrite=w({blending:null,depthTest:ye,depthWrite:null,colorWrite:null,stencilWrite:W,stencilTest:F})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){return e?this._occludeePipelineState:t===f.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():t===f.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const Y=new Map([[r.POSITION,0],[r.PREVPOSITION,1],[r.UV0,2],[r.NORMAL,3],[r.COLOR,4],[r.COLORFEATUREATTRIBUTE,4],[r.SIZE,5],[r.SIZEFEATUREATTRIBUTE,5],[r.OPACITYFEATUREATTRIBUTE,6]]);class ht extends ie{constructor(e){super(e,Ue),this._configuration=new Ie,this.vertexAttributeLocations=Y,this.produces=new Map([[f.OPAQUE_MATERIAL,t=>t===_.Highlight||R(t)&&this.parameters.renderOccluded===y.OccludeAndTransparentStencil],[f.OPAQUE_MATERIAL_WITHOUT_NORMALS,t=>ee(t)],[f.OCCLUDER_MATERIAL,t=>U(t)&&this.parameters.renderOccluded===y.OccludeAndTransparentStencil],[f.TRANSPARENT_OCCLUDER_MATERIAL,t=>U(t)&&this.parameters.renderOccluded===y.OccludeAndTransparentStencil],[f.TRANSPARENT_MATERIAL,t=>R(t)&&this.parameters.writeDepth],[f.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>R(t)&&!this.parameters.writeDepth],[f.DRAPED_MATERIAL,t=>t===_.Color||t===_.Highlight]]),this._layout=this.createLayout()}getConfiguration(e,t){return this._configuration.output=e,this._configuration.space=t.slot===f.DRAPED_MATERIAL?T.Draped:this.parameters.worldSpace?T.World:T.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==G.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===y.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=te}intersect(){}createLayout(){const e=J().vec3f(r.POSITION).vec3f(r.PREVPOSITION).vec2f(r.UV0);return this.parameters.worldSpace&&e.vec3f(r.NORMAL),this.parameters.vvSize?e.f32(r.SIZEFEATUREATTRIBUTE):e.f32(r.SIZE),this.parameters.vvColor?e.f32(r.COLORFEATUREATTRIBUTE):e.vec4f(r.COLOR),this.parameters.vvOpacity&&e.f32(r.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new Me(this._layout,this.parameters)}createGLMaterial(e){return new ke(e)}}class ke extends re{constructor(){super(...arguments),this._markerPrimitive=null}dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(be,e)}}class Ue extends we{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=G.BUTT,this.anchor=H.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class Me{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return this._parameters.placement==="begin-end"?12:6}write(e,t,a,s,m,d){const p=a.get(r.POSITION).data,z=p.length/3;let O=[1,0,0];const L=a.get(r.NORMAL);this._parameters.worldSpace&&L!=null&&(O=L.data);let N=1,I=0;this._parameters.vvSize?I=a.get(r.SIZEFEATUREATTRIBUTE).data[0]:a.has(r.SIZE)&&(N=a.get(r.SIZE).data[0]);let S=[1,1,1,1],C=0;this._parameters.vvColor?C=a.get(r.COLORFEATUREATTRIBUTE).data[0]:a.has(r.COLOR)&&(S=a.get(r.COLOR).data);let $=0;this._parameters.vvOpacity&&($=a.get(r.OPACITYFEATUREATTRIBUTE).data[0]);const o=new Float32Array(m.buffer);let n=d*(this.vertexBufferLayout.stride/4);const g=(c,P,h,v)=>{if(o[n++]=c[0],o[n++]=c[1],o[n++]=c[2],o[n++]=P[0],o[n++]=P[1],o[n++]=P[2],o[n++]=h[0],o[n++]=h[1],this._parameters.worldSpace&&(o[n++]=O[0],o[n++]=O[1],o[n++]=O[2]),this._parameters.vvSize?o[n++]=I:o[n++]=N,this._parameters.vvColor)o[n++]=C;else{const u=Math.min(4*v,S.length-4);o[n++]=S[u],o[n++]=S[u+1],o[n++]=S[u+2],o[n++]=S[u+3]}this._parameters.vvOpacity&&(o[n++]=$)};let A;(function(c){c[c.ASCENDING=1]="ASCENDING",c[c.DESCENDING=-1]="DESCENDING"})(A||(A={}));const D=(c,P)=>{const h=b(We,p[3*c],p[3*c+1],p[3*c+2]),v=Fe;let u=c+P;do b(v,p[3*u],p[3*u+1],p[3*u+2]),u+=P;while(Q(h,v)&&u>=0&&u<z);e&&(k(h,h,e),k(v,v,e)),g(h,v,[-1,-1],c),g(h,v,[1,-1],c),g(h,v,[1,1],c),g(h,v,[-1,-1],c),g(h,v,[1,1],c),g(h,v,[-1,1],c)},E=this._parameters.placement;E!=="begin"&&E!=="begin-end"||D(0,A.ASCENDING),E!=="end"&&E!=="begin-end"||D(z-1,A.DESCENDING)}}const We=q(),Fe=q(),Be=Object.freeze(Object.defineProperty({__proto__:null,build:Z},Symbol.toStringTag,{value:"Module"}));export{ht as g};
