import{o as M,J as Q,E as U}from"./vec32-Dvg_eL9J.js";import{n as G}from"./vec3f64-BLpZdpfb.js";import{H as K}from"./InterleavedLayout-_dYEAUNK.js";import{t as X,n as z,u as I,m as $,S as ee,p as W}from"./Matrix3PassUniform-uCCQMnlP.js";import{r as te}from"./GLTextureMaterial-96UpbkjC.js";import{n as re,p as w}from"./Material-C_-mgXN8.js";import{u as ie,g as ae,a as se,o as ne,p as oe,h as ce,w as le,G as pe,H as de,c as he,k as ve,z as me,B as ue,m as fe,t as Se,$ as j,a0 as Te,a1 as B,D as ge,J as Pe,a2 as _e,K as Oe,a6 as Ae,a7 as F,a8 as Ee,a9 as ye,aa as we,A as S,r as Re,ab as $e}from"./FloatArray-BQXWSSJh.js";import{e as r}from"./VertexAttribute-Cq4MnHjR.js";import{_ as xe}from"./index-4eY77cms.js";import{s as P,c as ze,n as Ie,b as Z,m as V,d as Ce,w as De,e as be,f as q}from"./RibbonLine.glsl-DwJpAQ1c.js";import{f as Le}from"./enums-D9v74xTE.js";import{B as R,g as x,c as H}from"./renderState-Ci93M1-P.js";import"./Accessor-BmwT4B0c.js";import"./floatRGBA-Cb__GiDF.js";import"./vec4f64-o2zAXfmz.js";import"./Texture-BVJ22uHh.js";import"./BindType-BBwFZqyN.js";import{n as c,t as g}from"./glsl-BH37Aalp.js";import"./mat4-Fi6iAz29.js";import"./mat4f64-Dk4dwAN8.js";import"./vec2-ChnYg_BJ.js";import"./vec2f64-Dy6m9Nrb.js";import{i as Ne}from"./ShaderBuilder-BKul5qh8.js";import{t as ke}from"./RgbaFloatEncoding.glsl-_io2eW3M.js";function Y(l){const e=new Ne,{space:t,anchor:p,hasTip:T}=l,u=t===P.World;e.include(ze,l),e.include(Ie,l),e.include(ie,l);const{vertex:i,fragment:d}=e;d.include(ke),ae(i,l),e.attributes.add(r.POSITION,"vec3"),e.attributes.add(r.PREVPOSITION,"vec3"),e.attributes.add(r.UV0,"vec2"),e.varyings.add("vColor","vec4"),e.varyings.add("vpos","vec3"),e.varyings.add("vUV","vec2"),e.varyings.add("vSize","float"),T&&e.varyings.add("vLineWidth","float"),i.uniforms.add(new se("nearFar",({camera:o})=>o.nearFar),new ne("viewport",({camera:o})=>o.fullViewport)),i.code.add(c`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),i.code.add(c`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),u?(e.attributes.add(r.NORMAL,"vec3"),oe(i),i.constants.add("tiltThreshold","float",.7),i.code.add(c`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):i.code.add(c`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);const h=u?"vec3":"vec2";return i.code.add(c`
      ${h} normalizedSegment(${h} pos, ${h} prev) {
        ${h} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${u?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      ${h} displace(${h} pos, ${h} prev, float displacementLen) {
        ${h} segment = normalizedSegment(pos, prev);

        ${h} displacementDirU = perpendicular(segment);
        ${h} displacementDirV = segment;

        ${p===Z.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),t===P.Screen&&(i.uniforms.add(new X("inverseProjectionMatrix",({camera:o})=>o.inverseProjectionMatrix)),i.code.add(c`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),i.code.add(c`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),i.uniforms.add(new ce("perScreenPixelRatio",({camera:o})=>o.perScreenPixelRatio)),i.code.add(c`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${g(l.hasCap,`if(prev.z > posLeft.z) {
                vec2 diff = posLeft.xy - posRight.xy;
                planeOrigin.xy += perpendicular(diff) / 2.0;
             }`)};

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
  `)),le(i),i.main.add(c`
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

      ${u?c`${g(l.hideOnShortSegments,c`
                if (areWorldMarkersHidden(pos, prev)) {
                  // Project out of clip space
                  gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:c`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${g(t===P.Screen,c`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      forwardViewPosDepth(pos.xyz);
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${g(!u,"vUV *= displacedPosScreen.w;")}
      ${g(T,"vLineWidth = lineWidth;")}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),e.fragment.include(pe,l),e.include(de,l),d.uniforms.add(new he("intrinsicColor",o=>o.color),new ve("tex",o=>o.markerTexture)),d.include(me),d.constants.add("texelSize","float",1/V),d.code.add(c`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgbaTofloat(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),T&&d.constants.add("relativeMarkerSize","float",Ce/V).constants.add("relativeTipLineWidth","float",De).code.add(c`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${g(u,"halfTipLineWidth *= fwidth(samplePos.y);")}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),e.include(ue,l),d.main.add(c`
    discardBySlice(vpos);
    discardByTerrainDepth();

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = vUV ${g(!u,"* gl_FragCoord.w")};
    finalColor.a *= ${T?"max(markerAlpha(samplePos), tipAlpha(samplePos))":"markerAlpha(samplePos)"};
    outputColorHighlightOID(finalColor, vpos);`),e}const Me=Object.freeze(Object.defineProperty({__proto__:null,build:Y},Symbol.toStringTag,{value:"Module"}));class Ue extends fe{constructor(e,t){super(e,t,new Se(Me,()=>xe(()=>Promise.resolve().then(()=>He),void 0,import.meta.url)),J)}_makePipelineState(e,t){const{output:p,oitPass:T,space:u,hasOccludees:i}=e;return R({blending:I(p)?Oe(T):null,depthTest:u===P.Draped?null:{func:_e(T)},depthWrite:Pe(e),drawBuffers:p===z.Depth?{buffers:[Le.NONE]}:ge(T,p),colorWrite:x,stencilWrite:i?B:null,stencilTest:i?t?j:Te:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=R({blending:H,depthTest:F,depthWrite:null,colorWrite:x,stencilWrite:null,stencilTest:Ae}),this._occluderPipelineOpaque=R({blending:H,depthTest:F,depthWrite:null,colorWrite:x,stencilWrite:ye,stencilTest:Ee}),this._occluderPipelineMaskWrite=R({blending:null,depthTest:we,depthWrite:null,colorWrite:null,stencilWrite:B,stencilTest:j})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){return e?this._occludeePipelineState:t===S.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():t===S.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const J=new Map([[r.POSITION,0],[r.PREVPOSITION,1],[r.UV0,2],[r.NORMAL,3],[r.COLOR,4],[r.COLORFEATUREATTRIBUTE,4],[r.SIZE,5],[r.SIZEFEATUREATTRIBUTE,5],[r.OPACITYFEATUREATTRIBUTE,6]]);class ft extends re{constructor(e){super(e,je),this._configuration=new be,this.vertexAttributeLocations=J,this.produces=new Map([[S.OPAQUE_MATERIAL,t=>t===z.Highlight||$(t)&&this.parameters.renderOccluded===w.OccludeAndTransparentStencil],[S.OPAQUE_MATERIAL_WITHOUT_NORMALS,t=>ee(t)],[S.OCCLUDER_MATERIAL,t=>W(t)&&this.parameters.renderOccluded===w.OccludeAndTransparentStencil],[S.TRANSPARENT_OCCLUDER_MATERIAL,t=>W(t)&&this.parameters.renderOccluded===w.OccludeAndTransparentStencil],[S.TRANSPARENT_MATERIAL,t=>$(t)&&this.parameters.writeDepth],[S.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>$(t)&&!this.parameters.writeDepth],[S.DRAPED_MATERIAL,t=>I(t)||t===z.Highlight]]),this._layout=this.createLayout()}getConfiguration(e,t){return this._configuration.output=e,this._configuration.space=t.slot===S.DRAPED_MATERIAL?P.Draped:this.parameters.worldSpace?P.World:P.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==q.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===w.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest&&I(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=Re}intersect(){}createLayout(){const e=K().vec3f(r.POSITION).vec3f(r.PREVPOSITION).vec2f(r.UV0);return this.parameters.worldSpace&&e.vec3f(r.NORMAL),this.parameters.vvSize?e.f32(r.SIZEFEATUREATTRIBUTE):e.f32(r.SIZE),this.parameters.vvColor?e.f32(r.COLORFEATUREATTRIBUTE):e.vec4f(r.COLOR),this.parameters.vvOpacity&&e.f32(r.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new Be(this._layout,this.parameters)}createGLMaterial(e){return new We(e)}}class We extends te{constructor(){super(...arguments),this._markerPrimitive=null}dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this._material.setParameters(this.textureBindParameters),this.getTechnique(Ue,e)}}class je extends $e{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=q.BUTT,this.anchor=Z.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class Be{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return this._parameters.placement==="begin-end"?12:6}write(e,t,p,T,u,i){const d=p.get(r.POSITION).data,h=d.length/3;let o=[1,0,0];const C=p.get(r.NORMAL);this._parameters.worldSpace&&C!=null&&(o=C.data);let D=1,b=0;this._parameters.vvSize?b=p.get(r.SIZEFEATUREATTRIBUTE).data[0]:p.has(r.SIZE)&&(D=p.get(r.SIZE).data[0]);let _=[1,1,1,1],L=0;this._parameters.vvColor?L=p.get(r.COLORFEATUREATTRIBUTE).data[0]:p.has(r.COLOR)&&(_=p.get(r.COLOR).data);let N=0;this._parameters.vvOpacity&&(N=p.get(r.OPACITYFEATUREATTRIBUTE).data[0]);const a=new Float32Array(u.buffer);let s=i*(this.vertexBufferLayout.stride/4);const O=(n,A,v,m)=>{if(a[s++]=n[0],a[s++]=n[1],a[s++]=n[2],a[s++]=A[0],a[s++]=A[1],a[s++]=A[2],a[s++]=v[0],a[s++]=v[1],this._parameters.worldSpace&&(a[s++]=o[0],a[s++]=o[1],a[s++]=o[2]),this._parameters.vvSize?a[s++]=b:a[s++]=D,this._parameters.vvColor)a[s++]=L;else{const f=Math.min(4*m,_.length-4);a[s++]=_[f],a[s++]=_[f+1],a[s++]=_[f+2],a[s++]=_[f+3]}this._parameters.vvOpacity&&(a[s++]=N)};let E;(function(n){n[n.ASCENDING=1]="ASCENDING",n[n.DESCENDING=-1]="DESCENDING"})(E||(E={}));const k=(n,A)=>{const v=M(Fe,d[3*n],d[3*n+1],d[3*n+2]),m=Ve;let f=n+A;do M(m,d[3*f],d[3*f+1],d[3*f+2]),f+=A;while(Q(v,m)&&f>=0&&f<h);e&&(U(v,v,e),U(m,m,e)),O(v,m,[-1,-1],n),O(v,m,[1,-1],n),O(v,m,[1,1],n),O(v,m,[-1,-1],n),O(v,m,[1,1],n),O(v,m,[-1,1],n)},y=this._parameters.placement;y!=="begin"&&y!=="begin-end"||k(0,E.ASCENDING),y!=="end"&&y!=="begin-end"||k(h-1,E.DESCENDING)}}const Fe=G(),Ve=G(),He=Object.freeze(Object.defineProperty({__proto__:null,build:Y},Symbol.toStringTag,{value:"Module"}));export{ft as S};
