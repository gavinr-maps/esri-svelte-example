import{h as Te}from"./subclass-BR3PhgZG.js";import{d as Z,O as W,z as de,f as ut,g as N,r as L,s as G,x as ft,e as ht,c as Q,S as vt,P as gt,n as I,b as mt,E as Ot,U as bt}from"./mathUtils-ClvKsMak.js";import{n as $e}from"./mat3-DRqs2t5W.js";import{e as _e}from"./mat3f64-BBpwCtoL.js";import{h as yt,x as St,l as xt,m as Pt}from"./mat4-ybYUU6jq.js";import{e as Ee}from"./mat4f64-Dk4dwAN8.js";import{n as Ct,r as At}from"./vec2f64-Diu2Kaa8.js";import{_ as ze,e as wt,n as De,r as ue,t as Tt,s as $t}from"./vec4f64-CBQL1T0x.js";import{a as Re,a5 as _t,X as Et,G as zt}from"./Polyline-BQFeqYXi.js";import{x as Dt}from"./BufferView-B7Z-dzh4.js";import{a as Ie,f as Rt,b as R,p as It,ah as je,Z as jt,c as Fe,u as Ve,o as Ne,P as Le,e as Ue,F as Me,H as Be,q as fe,h as q,x as he,g as A,r as He,j as Ge,k as We,s as qe,m as ke,i as Ye,E as $,aw as Ft,A as Vt,a3 as Nt,a4 as Lt,a5 as Ut,a6 as Mt,a7 as Bt,a8 as Ht,n as Gt,an as Wt}from"./Texture-DjTh7HwY.js";import{O as Xe,c as Ze,t as qt,s as kt,f as Yt,b as ve,o as Xt,h as Zt}from"./Material-BN_i9QRJ.js";import{H as Qe}from"./InterleavedLayout-UIhsB8jd.js";import{c as B,b as Qt,o as b,w as J,j as K,m as ee,q as Jt}from"./NormalAttribute.glsl-Dqf1UPF9.js";import{s as Je,f as Kt,g as Ke,t as eo,h as to,j as oo,u as io,l as ao,b as ro,O as so,S as no,k as ge,y as me,R as lo,p as co,o as po,e as uo,a as fo,r as ho}from"./VertexColor.glsl-BROYASAm.js";import{s as vo}from"./Util-BMqL_pkg.js";import{e as h}from"./VertexAttribute-BnAa5VW0.js";import{_ as et}from"./index-BVncS3aY.js";import{l as go}from"./ViewingMode-Dodu7ZZk.js";import{R as Oe,O as mo,E as be,f as Oo}from"./enums-BlUEVwJR.js";import{s as bo,o as tt,S as ot,_ as it,h as yo}from"./renderState-PYzNpa1K.js";import{e as u}from"./Evented-CXIxDjmW.js";import{r as f}from"./ShaderTechniqueConfiguration-D3UbJ2mX.js";import{W as So}from"./Point-TlcsOcXV.js";import{s as xo}from"./vec42-B1mBkh1w.js";import{$ as Po}from"./projection-tSh-0UvX.js";import{s as Co,I as Ao,N as wo}from"./aaBoundingBox-BGxkJAW0.js";import{e as re}from"./projectVectorToVector-BLdiwuTJ.js";import{o as To,x as $o}from"./hydratedFeatures-DHwl8sGq.js";import{e as se}from"./basicInterfaces-wONHx_SN.js";import{o as ae,r as _o}from"./vec2-B_ymkwGp.js";import"./BindType-BmZEZMMh.js";import{o as c}from"./interfaces-B8ge7Jg9.js";import{N as ye,P as Eo,Q as zo,S as Do,T as Ro,U as Io,V as jo}from"./RenderGeometry-C4TY81Cr.js";import"./floatRGBA-C8rGFKJ0.js";import"./Texture-BbJIOVx_.js";function Fo(t){return t instanceof Float32Array&&t.length>=16}function Vo(t){return Array.isArray(t)&&t.length>=16}function No(t){return Fo(t)||Vo(t)}const at=.5;function Lo(t,e){t.include(Je),t.attributes.add(h.POSITION,"vec3"),t.attributes.add(h.NORMAL,"vec3"),t.attributes.add(h.CENTEROFFSETANDDISTANCE,"vec4");const o=t.vertex;Ie(o,e),Rt(o,e),o.uniforms.add(new R("viewport",(i,a)=>a.camera.fullViewport),new B("polygonOffset",i=>i.shaderPolygonOffset),new B("cameraGroundRelative",(i,a)=>a.camera.aboveGround?1:-1)),e.hasVerticalOffset&&Kt(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(c`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(c`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.multipassEnabled?c.float(0):c`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||It(o),e.draped||(o.uniforms.add(new B("perDistancePixelRatio",(i,a)=>Math.tan(a.camera.fovY/2)/(a.camera.fullViewport[2]/2))),o.code.add(c`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${c.float(at)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&je(o),e.hasScreenSizePerspective&&Ke(o),o.code.add(c`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?c`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":c`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}let Uo=class{constructor(){this.factor=new Se,this.factorAlignment=new Se}};class Se{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function ne(t){t.uniforms.add(new jt("alignPixelEnabled",(e,o)=>o.alignPixelEnabled)),t.code.add(c`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(c`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Mo(t,e){const{vertex:o,fragment:i}=t;o.include(ne),e.multipassEnabled&&t.varyings.add("depth","float"),o.code.add(c`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.multipassEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.include(Fe,e),i.code.add(c`
  void main() {
    fragColor = vec4(1);
    ${e.multipassEnabled?c`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }`:""}
  }
  `)}function Bo(t){t.vertex.uniforms.add(new B("renderTransparentlyOccludedHUD",(e,o)=>o.hudRenderStyle===ye.Occluded?1:o.hudRenderStyle===ye.NotOccluded?0:.75),new R("viewport",(e,o)=>o.camera.fullViewport),new Ve("hudVisibilityTexture",(e,o)=>{var i;return(i=o.hudVisibility)==null?void 0:i.getTexture()})),t.vertex.include(ne),t.vertex.code.add(c`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function rt(t){const e=new Ne,o=t.signedDistanceFieldEnabled;if(e.include(Lo,t),e.include(Le,t),t.occlusionPass)return e.include(Mo,t),e;const{vertex:i,fragment:a}=e;e.include(Je),a.include(Qt),a.include(Ue),e.include(Me,t),e.include(Be,t),e.include(Bo),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),e.varyings.add("voccluded","float"),i.uniforms.add(new R("viewport",(s,v)=>v.camera.fullViewport),new fe("screenOffset",(s,v)=>ae(st,2*s.screenOffset[0]*v.camera.pixelRatio,2*s.screenOffset[1]*v.camera.pixelRatio)),new fe("anchorPosition",s=>H(s)),new R("materialColor",s=>s.color)),je(i),o&&(i.uniforms.add(new R("outlineColor",s=>s.outlineColor)),a.uniforms.add(new R("outlineColor",s=>xe(s)?s.outlineColor:ze),new B("outlineSize",s=>xe(s)?s.outlineSize:0))),t.pixelSnappingEnabled&&i.include(ne),t.hasScreenSizePerspective&&(eo(i),Ke(i)),t.debugDrawLabelBorder&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(h.UV0,"vec2"),e.attributes.add(h.COLOR,"vec4"),e.attributes.add(h.SIZE,"vec2"),e.attributes.add(h.FEATUREATTRIBUTE,"vec4"),i.code.add(c`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${t.hasScreenSizePerspective?c`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:c`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${t.vvSize?"inputSize *= vvScale(featureAttribute).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const r=c`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,l=t.pixelSnappingEnabled?o?c`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:c`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:c`posProj += quadOffset;`;i.code.add(c`
    ${t.occlusionTestEnabled?"if (visible) {":""}
    ${r}
    ${t.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${t.output===b.ObjectAndLayerIdColor?c`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${c.float(q)};
    ${o?`alphaDiscard = alphaDiscard && outlineColor.a < ${c.float(q)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${l}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${t.occlusionTestEnabled?c`} else { vtc = vec2(0.0);
      ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),a.uniforms.add(new Ve("tex",s=>s.texture));const n=t.debugDrawLabelBorder?c`(isBorder > 0.0 ? 0.0 : ${c.float(he)})`:c.float(he),d=c`
    ${t.debugDrawLabelBorder?c`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${t.sampleSignedDistanceFieldTexelCenter?c`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      `:c`
      vec2 samplePos = vtc;
      `}

    ${o?c`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${n} ||
          fillPixelColor.a + outlinePixelColor.a < ${c.float(q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:c`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${t.debugDrawLabelBorder?c`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;switch(t.output){case b.Color:t.transparencyPassType===A.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),a.code.add(c`
        void main() {
          ${d}
          ${t.transparencyPassType===A.FrontFace?"fragColor.rgb /= fragColor.a;":""}
          ${t.transparencyPassType===A.ColorAlpha?"fragAlpha = fragColor.a;":""}
        }`);break;case b.ObjectAndLayerIdColor:a.code.add(c`
        void main() {
          ${d}
          outputObjectAndLayerIdColor();
        }`);break;case b.Highlight:a.constants.add("occludedHighlightFlag","vec4",to),a.constants.add("unoccludedHighlightFlag","vec4",oo),a.code.add(c`
        void main() {
          ${d}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`)}return e}function xe(t){return t.outlineColor[3]>0&&t.outlineSize>0}function H(t,e=st){return t.textureIsSignedDistanceField?Ho(t.anchorPosition,t.distanceFieldBoundingBox,e):_o(e,t.anchorPosition),e}function Ho(t,e,o){e!=null?ae(o,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]):ae(o,0,0)}const st=Ct(),Go=Object.freeze(Object.defineProperty({__proto__:null,build:rt,calculateAnchorPosForRendering:H},Symbol.toStringTag,{value:"Module"}));let nt=class lt extends He{initializeConfiguration(e,o){o.spherical=e.viewingMode===go.Global}initializeProgram(e){return new Ge(e.rctx,lt.shader.get().build(this.configuration),Xe)}initializePipeline(){const e=this.configuration.transparencyPassType,o=this.configuration,i=e===A.NONE,a=e===A.FrontFace,r=this.configuration.hasPolygonOffset?Wo:null,l=o.draped?null:(i||a)&&o.output!==b.Highlight&&(o.depthEnabled||o.occlusionPass)?tt:null;return ot({blending:o.output===b.Color||o.output===b.Highlight?i?qo:We(e):null,depthTest:o.draped?null:{func:mo.LEQUAL},depthWrite:l,drawBuffers:qe(e),colorWrite:it,polygonOffset:r})}get primitiveType(){return this.configuration.occlusionPass?be.POINTS:be.TRIANGLES}};nt.shader=new ke(Go,()=>et(()=>Promise.resolve().then(()=>vi),void 0,import.meta.url));const Wo={factor:0,units:-4},qo=bo(Oe.ONE,Oe.ONE_MINUS_SRC_ALPHA);class g extends Ye{constructor(){super(...arguments),this.output=b.Color,this.transparencyPassType=A.NONE,this.screenCenterOffsetUnitsEnabled=!1,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}u([f({count:b.COUNT})],g.prototype,"output",void 0),u([f({count:A.COUNT})],g.prototype,"transparencyPassType",void 0),u([f()],g.prototype,"screenCenterOffsetUnitsEnabled",void 0),u([f()],g.prototype,"spherical",void 0),u([f()],g.prototype,"occlusionTestEnabled",void 0),u([f()],g.prototype,"signedDistanceFieldEnabled",void 0),u([f()],g.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),u([f()],g.prototype,"vvSize",void 0),u([f()],g.prototype,"vvColor",void 0),u([f()],g.prototype,"hasVerticalOffset",void 0),u([f()],g.prototype,"hasScreenSizePerspective",void 0),u([f()],g.prototype,"debugDrawLabelBorder",void 0),u([f()],g.prototype,"hasSlicePlane",void 0),u([f()],g.prototype,"hasPolygonOffset",void 0),u([f()],g.prototype,"depthEnabled",void 0),u([f()],g.prototype,"pixelSnappingEnabled",void 0),u([f()],g.prototype,"draped",void 0),u([f()],g.prototype,"multipassEnabled",void 0),u([f()],g.prototype,"cullAboveGround",void 0),u([f()],g.prototype,"occlusionPass",void 0),u([f()],g.prototype,"objectAndLayerIdColorInstanced",void 0),u([f({constValue:!0})],g.prototype,"hasSliceInVertexProgram",void 0),u([f({constValue:!1})],g.prototype,"hasVvInstancing",void 0);class ea extends Ze{constructor(e){super(e,new ii),this._configuration=new g,this.produces=new Map([[$.HUD_MATERIAL,o=>J(o)&&!this.parameters.drawInSecondSlot],[$.LABEL_MATERIAL,o=>J(o)&&this.parameters.drawInSecondSlot],[$.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[$.DRAPED_MATERIAL,o=>J(o)]])}getConfiguration(e,o){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=o.slot===$.OCCLUSION_PIXELS&&this.parameters.occlusionTest,e===b.Color&&(this._configuration.debugDrawLabelBorder=!!qt.LABELS_SHOW_BORDER),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration}intersect(e,o,i,a,r,l){if(!(i.options.selectionMode&&i.options.hud&&e.visible&&i.point))return;const n=this.parameters,d=i.point,s=i.camera;let{scaleX:v,scaleY:O}=this._getScreenScale(e);v*=s.pixelRatio,O*=s.pixelRatio,$e(oe,o),e.attributes.has(h.FEATUREATTRIBUTE)&&Xo(oe);const p=e.attributes.get(h.POSITION),S=e.attributes.get(h.SIZE),w=e.attributes.get(h.NORMAL),T=e.attributes.get(h.CENTEROFFSETANDDISTANCE);vo(p.size>=3);const j=H(n),D=this.parameters.centerOffsetUnits==="screen";for(let m=0;m<p.data.length/p.size;m++){const _=m*p.size;Z(x,p.data[_],p.data[_+1],p.data[_+2]),W(x,x,o);const F=m*S.size;E[0]=S.data[F]*v,E[1]=S.data[F+1]*O,W(x,x,s.viewMatrix);const V=m*T.size;if(Z(C,T.data[V],T.data[V+1],T.data[V+2]),!D&&(x[0]+=C[0],x[1]+=C[1],C[2]!==0)){const X=C[2];de(C,x),ut(x,x,N(C,C,X))}const Y=m*w.size;if(Z(M,w.data[Y],w.data[Y+1],w.data[Y+2]),Pe(M,oe,s,ie),this._applyVerticalOffsetTransformationView(x,ie,s,te),s.applyProjection(x,P),P[0]>-1){D&&(C[0]||C[1])&&(P[0]+=C[0]*s.pixelRatio,C[1]!==0&&(P[1]+=kt(C[1],te.factorAlignment)*s.pixelRatio),s.unapplyProjection(P,x)),P[0]+=this.parameters.screenOffset[0]*s.pixelRatio,P[1]+=this.parameters.screenOffset[1]*s.pixelRatio,P[0]=Math.floor(P[0]),P[1]=Math.floor(P[1]),Yt(E,te.factor,E);const X=ei*s.pixelRatio;let le=0;if(n.textureIsSignedDistanceField&&(le=n.outlineSize*s.pixelRatio/2),Ce(d,P[0],P[1],E,X,le,n,j)){const ce=i.ray;if(W(Ae,x,yt(Qo,s.viewMatrix)),P[0]=d[0],P[1]=d[1],s.unprojectFromRenderScreen(P,x)){const U=I();L(U,ce.direction);const pe=1/G(U);N(U,U,pe),l(ft(ce.origin,x)*pe,U,-1,!0,1,Ae)}}}}}intersectDraped(e,o,i,a,r,l){const n=e.attributes.get(h.POSITION),d=e.attributes.get(h.SIZE),s=this.parameters,v=H(s);let{scaleX:O,scaleY:p}=this._getScreenScale(e);O*=e.screenToWorldRatio,p*=e.screenToWorldRatio;const S=ti*e.screenToWorldRatio;for(let w=0;w<n.data.length/n.size;w++){const T=w*n.size,j=n.data[T],D=n.data[T+1],m=w*d.size;E[0]=d.data[m]*O,E[1]=d.data[m+1]*p;let _=0;s.textureIsSignedDistanceField&&(_=s.outlineSize*e.screenToWorldRatio/2),Ce(a,j,D,E,S,_,s,v)&&r(l.dist,l.normal,-1,!1)}}createBufferWriter(){return new ri(this)}_updateScaleInfo(e,o,i){const a=this.parameters;a.screenSizePerspective!=null?ve(i,o,a.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),a.screenSizePerspectiveAlignment!=null?ve(i,o,a.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,o,i,a,r,l,n){const d=Pe(o,i,r,ie);return this._applyVerticalGroundOffsetView(e,d,r,n),this._applyVerticalOffsetTransformationView(n,d,r,l),this._applyPolygonOffsetView(n,d,a[3],r,n),this._applyCenterOffsetView(n,a,n),n}applyShaderOffsetsNDC(e,o,i,a,r){return this._applyCenterOffsetNDC(e,o,i,a),r!=null&&L(r,a),this._applyPolygonOffsetNDC(a,o,i,a),a}_applyPolygonOffsetView(e,o,i,a,r){const l=a.aboveGround?1:-1;let n=Math.sign(i);n===0&&(n=l);const d=l*n;if(this.parameters.shaderPolygonOffset<=0)return L(r,e);const s=ht(Math.abs(o.cosAngle),.01,1),v=1-Math.sqrt(1-s*s)/s/a.viewport[2];return N(r,e,d>0?v:1/v),r}_applyVerticalGroundOffsetView(e,o,i,a){const r=G(e),l=i.aboveGround?1:-1,n=i.computeRenderPixelSizeAtDist(r)*at,d=N(x,o.normal,l*n);return Q(a,e,d),a}_applyVerticalOffsetTransformationView(e,o,i,a){var s;const r=this.parameters;if(!((s=r.verticalOffset)!=null&&s.screenLength)){if(r.screenSizePerspective||r.screenSizePerspectiveAlignment){const v=G(e);this._updateScaleInfo(a,v,o.cosAngle)}else a.factor.scale=1,a.factorAlignment.scale=1;return e}const l=G(e),n=r.screenSizePerspectiveAlignment??r.screenSizePerspective,d=Xt(i,l,r.verticalOffset,o.cosAngle,n);return this._updateScaleInfo(a,l,o.cosAngle),N(o.normal,o.normal,d),Q(e,e,o.normal)}_applyCenterOffsetView(e,o,i){const a=this.parameters.centerOffsetUnits!=="screen";return i!==e&&L(i,e),a&&(i[0]+=o[0],i[1]+=o[1],o[2]&&(de(M,i),Q(i,i,N(M,M,o[2])))),i}_applyCenterOffsetNDC(e,o,i,a){const r=this.parameters.centerOffsetUnits!=="screen";return a!==e&&L(a,e),r||(a[0]+=o[0]/i.fullWidth*2,a[1]+=o[1]/i.fullHeight*2),a}_applyPolygonOffsetNDC(e,o,i,a){const r=this.parameters.shaderPolygonOffset;if(e!==a&&L(a,e),r){const l=i.aboveGround?1:-1,n=l*Math.sign(o[3]);a[2]-=(n||l)*r}return a}createGLMaterial(e){return new ko(e)}calculateRelativeScreenBounds(e,o,i=Re()){return Yo(this.parameters,e,o,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}_getScreenScale(e){const o=e.attributes.get(h.FEATUREATTRIBUTE);if(o==null)return{scaleX:1,scaleY:1};const i=wt(o.data,Ko),[a,r]=Ft(Jo,this.parameters,i);return{scaleX:a,scaleY:r}}}class ko extends io{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(nt,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function Yo(t,e,o,i){i[0]=t.anchorPosition[0]*-e[0]+t.screenOffset[0]*o,i[1]=t.anchorPosition[1]*-e[1]+t.screenOffset[1]*o}function Pe(t,e,o,i){return No(e)&&(e=$e(Zo,e)),vt(i.normal,t,e),W(i.normal,i.normal,o.viewInverseTransposeMatrix),i.cosAngle=gt(ct,oi),i}function Xo(t){const e=t[0],o=t[1],i=t[2],a=t[3],r=t[4],l=t[5],n=t[6],d=t[7],s=t[8],v=1/Math.sqrt(e*e+o*o+i*i),O=1/Math.sqrt(a*a+r*r+l*l),p=1/Math.sqrt(n*n+d*d+s*s);return t[0]=e*v,t[1]=o*v,t[2]=i*v,t[3]=a*O,t[4]=r*O,t[5]=l*O,t[6]=n*p,t[7]=d*p,t[8]=s*p,t}function Ce(t,e,o,i,a,r,l,n){let d=e-a-(n[0]>0?i[0]*n[0]:0),s=d+i[0]+2*a,v=o-a-(n[1]>0?i[1]*n[1]:0),O=v+i[1]+2*a;const p=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&p!=null&&(d+=i[0]*p[0],v+=i[1]*p[1],s-=i[0]*(1-p[2]),O-=i[1]*(1-p[3]),d-=r,s+=r,v-=r,O+=r),t[0]>d&&t[0]<s&&t[1]>v&&t[1]<O}const te=new Uo,x=I(),M=I(),P=De(),ct=I(),Ae=I(),oe=_e(),Zo=_e(),Qo=Ee(),C=I(),Jo=I(),Ko=De(),ie={normal:ct,cosAngle:0},ei=1,ti=2,E=[0,0],oi=mt(0,0,1);class ii extends ao{constructor(){super(...arguments),this.renderOccluded=Zt.Occlude,this.isDecoration=!1,this.color=ue(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=At(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ue(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.draped=!1}}const pt=Qe().vec3f(h.POSITION).vec3f(h.NORMAL).vec2f(h.UV0).vec4u8(h.COLOR).vec2f(h.SIZE).vec4f(h.CENTEROFFSETANDDISTANCE).vec4f(h.FEATUREATTRIBUTE),ai=pt.clone().vec4u8(h.OBJECTANDLAYERIDCOLOR);class ri{constructor(e){this._material=e,this.vertexBufferLayout=Te("enable-feature:objectAndLayerId-rendering")?ai:pt}elementCount(e){return 6*e.attributes.get(h.POSITION).indices.length}write(e,o,i,a,r){var D;ro(i.attributes.get(h.POSITION),e,a.position,r,6),so(i.attributes.get(h.NORMAL),o,a.normal,r,6);const l=i.attributes.get(h.UV0).data;let n,d,s,v;if(l==null||l.length<4){const m=this._material.parameters;n=0,d=0,s=m.texCoordScale[0],v=m.texCoordScale[1]}else n=l[0],d=l[1],s=l[2],v=l[3];s=Math.min(1.99999,s+1),v=Math.min(1.99999,v+1);let O=i.attributes.get(h.POSITION).indices.length,p=r;const S=a.uv0;for(let m=0;m<O;++m)S.set(p,0,n),S.set(p,1,d),p++,S.set(p,0,s),S.set(p,1,d),p++,S.set(p,0,s),S.set(p,1,v),p++,S.set(p,0,s),S.set(p,1,v),p++,S.set(p,0,n),S.set(p,1,v),p++,S.set(p,0,n),S.set(p,1,d),p++;no(i.attributes.get(h.COLOR),4,a.color,r,6);const{data:w,indices:T}=i.attributes.get(h.SIZE);O=T.length;const j=a.size;p=r;for(let m=0;m<O;++m){const _=w[2*T[m]],F=w[2*T[m]+1];for(let V=0;V<6;++V)j.set(p,0,_),j.set(p,1,F),p++}if(i.attributes.get(h.CENTEROFFSETANDDISTANCE)?ge(i.attributes.get(h.CENTEROFFSETANDDISTANCE),a.centerOffsetAndDistance,r,6):me(a.centerOffsetAndDistance,r,6*O),i.attributes.get(h.FEATUREATTRIBUTE)?ge(i.attributes.get(h.FEATUREATTRIBUTE),a.featureAttribute,r,6):me(a.featureAttribute,r,6*O),i.objectAndLayerIdColor!=null){const m=(D=i.attributes.get(h.POSITION))==null?void 0:D.indices;if(m){const _=m.length,F=a.getField(h.OBJECTANDLAYERIDCOLOR,Dt);lo(i.objectAndLayerIdColor,F,_,r,6)}}}}function ta(t,e){if(t.type==="point")return z(t,e,!1);if(To(t))switch(t.type){case"extent":return z(t.center,e,!1);case"polygon":return z(t.centroid,e,!1);case"polyline":return z(we(t),e,!0);case"mesh":return z(t.origin,e,!1)}else switch(t.type){case"extent":return z(si(t),e,!0);case"polygon":return z(ni(t),e,!0);case"polyline":return z(we(t),e,!0)}}function we(t){const e=t.paths[0];if(!e||e.length===0)return null;const o=_t(e,Et(e)/2);return re(o[0],o[1],o[2],t.spatialReference)}function si(t){return re(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function ni(t){const e=t.rings[0];if(!e||e.length===0)return null;const o=zt(t.rings,!!t.hasZ);return re(o[0],o[1],o[2],t.spatialReference)}function z(t,e,o){const i=o?t:$o(t);return e&&t?Po(t,i,e)?i:null:i}function oa(t,e,o,i=0){if(t){e||(e=Re());const a=t;let r=.5*a.width*(o-1),l=.5*a.height*(o-1);return a.width<1e-7*a.height?r+=l/20:a.height<1e-7*a.width&&(l+=r/20),xo(e,a.xmin-r-i,a.ymin-l-i,a.xmax+r+i,a.ymax+l+i),e}return null}function ia(t,e,o=null){const i=Tt($t);return t!=null&&(i[0]=t[0],i[1]=t[1],i[2]=t[2]),e!=null?i[3]=e:t!=null&&t.length>3&&(i[3]=t[3]),o&&(i[0]*=o,i[1]*=o,i[2]*=o,i[3]*=o),i}function aa(t,e,o,i,a,r=[0,0,0,0]){for(let l=0;l<3;++l)r[l]=(t==null?void 0:t[l])!=null?t[l]:(o==null?void 0:o[l])!=null?o[l]:a[l];return r[3]=e??i??a[3],r}function ra(t=bt,e,o,i=1){const a=new Array(3);if(e==null||o==null)a[0]=1,a[1]=1,a[2]=1;else{let r,l=0;for(let n=2;n>=0;n--){const d=t[n];let s;const v=d!=null,O=n===0&&!r&&!v,p=o[n];d==="symbol-value"||O?s=p!==0?e[n]/p:1:v&&d!=="proportional"&&isFinite(d)&&(s=p!==0?d/p:1),s!=null&&(a[n]=s,r=s,l=Math.max(l,Math.abs(s)))}for(let n=2;n>=0;n--)a[n]==null?a[n]=r:a[n]===0&&(a[n]=.001*l)}for(let r=2;r>=0;r--)a[r]/=i;return Ot(a)}function li(t){return t.isPrimitive!=null}function sa(t){return ci(li(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function ci(t){const e=o=>o==null||o>=0;return Array.isArray(t)?t.every(e):e(t)}function na(t,e,o,i=Ee()){return t&&St(i,i,-t/180*Math.PI),e&&xt(i,i,e/180*Math.PI),o&&Pt(i,i,o/180*Math.PI),i}function la(t,e,o){if(o.minDemResolution!=null)return o.minDemResolution;const i=So(e),a=Co(t)*i,r=Ao(t)*i,l=wo(t)*(e.isGeographic?1:i);return a===0&&r===0&&l===0?o.minDemResolutionForPoints:.01*Math.max(a,r,l)}class pi extends Ze{intersect(e,o,i,a,r,l){return co(e,i,a,r,void 0,l)}}function dt(t){const e=new Ne,{vertex:o,fragment:i,attributes:a,varyings:r}=e;Ie(o,t),e.include(po,t),e.include(uo,t),e.include(Me,t),e.include(Be,t),a.add(h.POSITION,"vec3"),t.vvColor&&a.add(h.COLORFEATUREATTRIBUTE,"float"),r.add("vColor","vec4"),r.add("vpos","vec3");const l=t.multipassEnabled&&t.output===b.Color;l&&r.add("depth","float"),o.uniforms.add(new R("eColor",d=>d.color)),o.code.add(c`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${t.hasVertexColors?"vColor *= eColor;":t.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${l?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(Le,t),l&&e.include(Fe,t),i.include(Ue);const n=t.output===b.Highlight;return n&&e.include(fo,t),t.transparencyPassType===A.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),i.code.add(c`
  void main() {
    discardBySlice(vpos);
    ${l?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;

    ${t.output===b.ObjectAndLayerIdColor?c`fColor.a = 1.0;`:""}

    if (fColor.a < ${c.float(q)}) {
      discard;
    }

    ${t.output===b.Color?c`fragColor = highlightSlice(fColor, vpos); ${t.transparencyPassType===A.ColorAlpha?c`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}`:""}
    ${n?c`outputHighlight();`:""};
    ${t.output===b.ObjectAndLayerIdColor?c`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const di=Object.freeze(Object.defineProperty({__proto__:null,build:dt},Symbol.toStringTag,{value:"Module"}));class k extends He{initializeProgram(e){return new Ge(e.rctx,k.shader.get().build(this.configuration),Xe)}_createPipeline(e,o){const i=this.configuration,a=e===A.NONE,r=e===A.FrontFace;return ot({blending:i.output===b.Color&&i.transparent?a?Vt:We(e):null,culling:yo(i.cullFace),depthTest:i.draped?null:{func:Nt(e)},depthWrite:i.draped?null:(a||r)&&i.writeDepth?tt:null,drawBuffers:i.output===b.Depth?{buffers:[Oo.NONE]}:qe(e),colorWrite:it,stencilWrite:i.hasOccludees?Lt:null,stencilTest:i.hasOccludees?o?Ut:Mt:null,polygonOffset:a||r?i.polygonOffset?ui:null:Bt(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}k.shader=new ke(di,()=>et(()=>Promise.resolve().then(()=>gi),void 0,import.meta.url));const ui={factor:1,units:1};class y extends Ye{constructor(){super(...arguments),this.output=b.Color,this.cullFace=se.None,this.transparencyPassType=A.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1}}u([f({count:b.COUNT})],y.prototype,"output",void 0),u([f({count:se.COUNT})],y.prototype,"cullFace",void 0),u([f({count:A.COUNT})],y.prototype,"transparencyPassType",void 0),u([f()],y.prototype,"hasSlicePlane",void 0),u([f()],y.prototype,"hasVertexColors",void 0),u([f()],y.prototype,"transparent",void 0),u([f()],y.prototype,"polygonOffset",void 0),u([f()],y.prototype,"enableOffset",void 0),u([f()],y.prototype,"writeDepth",void 0),u([f()],y.prototype,"hasOccludees",void 0),u([f()],y.prototype,"multipassEnabled",void 0),u([f()],y.prototype,"cullAboveGround",void 0),u([f()],y.prototype,"objectAndLayerIdColorInstanced",void 0),u([f()],y.prototype,"vvColor",void 0),u([f()],y.prototype,"draped",void 0),u([f({constValue:!1})],y.prototype,"occlusionPass",void 0),u([f({constValue:!0})],y.prototype,"hasVvInstancing",void 0),u([f({constValue:!1})],y.prototype,"vvSize",void 0),u([f({constValue:!1})],y.prototype,"vvOpacity",void 0);class ca extends pi{constructor(e){super(e,new hi),this.supportsEdges=!0,this.produces=new Map([[$.OPAQUE_MATERIAL,o=>o===b.Highlight||K(o)&&!this._isTransparent],[$.OPAQUE_NO_SSAO_DEPTH,o=>ee(o)&&this.parameters.writeLinearDepth&&!this._isTransparent],[$.TRANSPARENT_MATERIAL,o=>K(o)&&this._isTransparent&&this.parameters.writeDepth],[$.TRANSPARENT_NO_SSAO_DEPTH,o=>ee(o)&&this.parameters.writeLinearDepth&&this._isTransparent&&this.parameters.writeDepth],[$.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,o=>(K(o)||ee(o)&&this.parameters.writeLinearDepth)&&this._isTransparent&&!this.parameters.writeDepth],[$.DRAPED_MATERIAL,o=>Jt(o)]]),this._configuration=new y}getConfiguration(e,o){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<Ht,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}createGLMaterial(e){return new fi(e)}createBufferWriter(){const e=Qe().vec3f(h.POSITION);return Te("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4u8(h.COLOR),new ho(e)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}}class fi extends Gt{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output===b.Color&&this._updateOccludeeState(e),this.ensureTechnique(k,e)}}class hi extends Wt{constructor(){super(...arguments),this.color=ze,this.forceTransparentMode=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=se.None,this.hasOccludees=!1,this.draped=!1}}const vi=Object.freeze(Object.defineProperty({__proto__:null,build:rt,calculateAnchorPosForRendering:H},Symbol.toStringTag,{value:"Module"})),pa=Object.freeze(Object.defineProperty({__proto__:null,build:Eo,ribbonlineNumRoundJoinSubdivisions:zo},Symbol.toStringTag,{value:"Module"})),da=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Do,build:Ro},Symbol.toStringTag,{value:"Module"})),ua=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:Io,build:jo},Symbol.toStringTag,{value:"Module"})),gi=Object.freeze(Object.defineProperty({__proto__:null,build:dt},Symbol.toStringTag,{value:"Module"}));export{aa as A,ra as B,ia as F,sa as I,ua as O,oa as P,ea as Q,pa as R,ci as S,da as T,na as U,Lo as a,ta as b,Uo as c,ca as d,pi as e,la as k,ne as o,Bo as t};
