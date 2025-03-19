const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HUDMaterial.glsl-Vt6rKj_O.js","./glsl-BH37Aalp.js","./VertexAttribute-Cq4MnHjR.js","./vec2-maR1OrZI.js","./common-DQOJ18NT.js","./vec2f64-Dy6m9Nrb.js","./BindType-BBwFZqyN.js","./Accessor-BHnuXKD2.js","./Blit-D5AxBSxC.js","./BooleanBindUniform-xvVHJCDz.js","./reactiveUtils-BR0C1Kq4.js","./Evented-DCWccWGU.js","./SimpleObservable-7oieNGD8.js","./mat4f64-Dk4dwAN8.js","./mathUtils-DV9iOXpW.js","./mat4-Fi6iAz29.js","./vec3f64-BLpZdpfb.js","./projectBuffer-DOU0xvVi.js","./Point-XGrwlf63.js","./cast-BA_-jlhc.js","./index-tefRSezt.js","./index-Cx51aysm.css","./JSONSupport-CGdeqxpk.js","./writer-B2bQV2uU.js","./geodesicConstants-yASAK_zX.js","./basicInterfaces-CZwQPxTp.js","./Matrix3PassUniform-Bhi2fM3C.js","./FloatArray-BCfeX8wo.js","./Material-Ba8x5bbY.js","./boundedPlane-Dyz2ub5d.js","./sphere-DQxj5tsv.js","./vec32-Dvg_eL9J.js","./vec42-YcqnINSP.js","./vec4f64-o2zAXfmz.js","./Polyline-BmuD2-ZN.js","./Extent-CBBGeHb-.js","./mat3-CR8GKnhD.js","./mat3f64-BBpwCtoL.js","./plane-4dpuo6-e.js","./quatf64-CCm9z-pX.js","./mathUtils-B9R7G-2c.js","./lineSegment-C-CDF7QX.js","./ViewingMode-Dodu7ZZk.js","./NoParameters-t-PuNrgq.js","./Texture-D-SqNa4i.js","./signal-DSa0yokC.js","./enums-D9v74xTE.js","./getDataTypeBytes-BTGR5GyG.js","./renderState-e7QeQoUO.js","./Indices-Db9lERgy.js","./InterleavedLayout-Dvj-Snan.js","./BufferView-_QDXRCew.js","./types-D0PSWh4d.js","./triangle-D_E6eTS3.js","./ShaderTechniqueConfiguration-YrUOztAU.js","./lengthUtils-DjJgJFRg.js","./opacityUtils-CSd4XoR2.js","./Promise-CmQqe-ke.js","./requestImageUtils-Brn0e8z8.js","./TextureFormat-1mYWTFa-.js","./RgbaFloatEncoding.glsl-_io2eW3M.js","./ShaderBuilder-DV1s2efh.js","./HUDRenderStyle-BhGvVxgm.js"])))=>i.map(i=>d[i]);
import{r as Ie,s as Re}from"./mathUtils-DV9iOXpW.js";import{n as Te}from"./mat3-CR8GKnhD.js";import{e as Ee}from"./mat3f64-BBpwCtoL.js";import{h as Le}from"./mat4-Fi6iAz29.js";import{e as je}from"./mat4f64-Dk4dwAN8.js";import{o as re,r as Be,I as Ne}from"./vec2-maR1OrZI.js";import{n as se,t as Me}from"./vec2f64-Dy6m9Nrb.js";import{o as J,E as W,A as pe,c as Ue,g as j,s as B,r as G,p as Ve,u as K,N as He,P as qe}from"./vec32-Dvg_eL9J.js";import{n as R,r as Ge}from"./vec3f64-BLpZdpfb.js";import{s as We,r as Xe,u as ke,n as ne,e as ue}from"./vec4f64-o2zAXfmz.js";import{a as Ye}from"./Polyline-BmuD2-ZN.js";import{x as Ze}from"./BufferView-_QDXRCew.js";import{u as Je,v as Ke,x as Qe,y as et,z as tt,o as ot,c as Q,s as fe,w as it,r as w,k as at,i as rt,h as st,B as nt,C as H,m as lt,t as ct,T as dt,D as pt,E as ut,q as ft,F as ht,A as N,W as mt}from"./FloatArray-BCfeX8wo.js";import{n as gt,t as vt,m as St,a as bt,d as he,i as Ct,p as Ot}from"./Material-Ba8x5bbY.js";import{H as At,s as Pt}from"./InterleavedLayout-Dvj-Snan.js";import{n as D,u as ze,f as ee,c as xt}from"./Matrix3PassUniform-Bhi2fM3C.js";import{l as ye,u as Tt,n as Et,d as zt}from"./HUDVisibility.glsl-DSeZY4v-.js";import{r as yt,n as $t}from"./GLTextureMaterial-BXvkeRxQ.js";import{e as d}from"./VertexAttribute-Cq4MnHjR.js";import{b as _t,O as Dt,S as Ft,d as wt,a as me,B as ge,R as It}from"./DefaultBufferWriter-D4XUxbP-.js";import{t as Rt}from"./Point-XGrwlf63.js";import{n as c,t as O}from"./glsl-BH37Aalp.js";import{t as Lt}from"./RgbaFloatEncoding.glsl-_io2eW3M.js";import{s as jt,t as Bt,o as Nt}from"./VerticalOffset.glsl-0YVQE7vQ.js";import{e as ve}from"./Float2PassUniform-Blij1ug3.js";import{o as Mt}from"./Float4DrawUniform-C_Hqa-pI.js";import{i as Ut}from"./ShaderBuilder-DV1s2efh.js";import{_ as Vt}from"./index-tefRSezt.js";import{E as Se,O as Ht}from"./enums-D9v74xTE.js";import{B as qt,o as Gt,p as Wt,g as Xt}from"./renderState-e7QeQoUO.js";import{r as b}from"./Accessor-BHnuXKD2.js";import{i as C}from"./ShaderTechniqueConfiguration-YrUOztAU.js";function kt(o){return o instanceof Float32Array&&o.length>=16}function Yt(o){return Array.isArray(o)&&o.length>=16}function Zt(o){return kt(o)||Yt(o)}class Jt{constructor(){this.factor=new be,this.factorAlignment=new be}}class be{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function Kt(o,e){const{vertex:i,fragment:t}=o;o.include(Je,e),i.include(ye),i.main.add(c`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),t.main.add(c`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Qt(o){const e=new Ut,i=o.signedDistanceFieldEnabled;e.include(Tt,o),e.vertex.include(Ke,o);const{occlusionPass:t,output:a,oitPass:r}=o;if(t)return e.include(Kt,o),e;const{vertex:n,fragment:s}=e;e.include(jt),e.include(Qe,o),e.include(et,o),e.include(Et),s.include(Lt),s.include(tt),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const p=a===D.Highlight,m=p&&o.occlusionTestEnabled;m&&e.varyings.add("voccluded","float"),n.uniforms.add(new ot("viewport",l=>l.camera.fullViewport),new ve("screenOffset",(l,S)=>re(X,2*l.screenOffset[0]*S.camera.pixelRatio,2*l.screenOffset[1]*S.camera.pixelRatio)),new ve("anchorPosition",l=>k(l)),new Q("materialColor",l=>l.color),new fe("materialRotation",l=>l.rotation)),it(n),i&&(n.uniforms.add(new Q("outlineColor",l=>l.outlineColor)),s.uniforms.add(new Q("outlineColor",l=>Ce(l)?l.outlineColor:We),new fe("outlineSize",l=>Ce(l)?l.outlineSize:0))),o.horizonCullingEnabled&&n.uniforms.add(new Mt("pointDistanceSphere",(l,S)=>{const T=S.camera.eye,z=l.origin;return Xe(z[0]-T[0],z[1]-T[1],z[2]-T[2],Rt.radius)})),o.pixelSnappingEnabled&&n.include(ye),o.hasScreenSizePerspective&&(Bt(n),Nt(n)),o.debugDrawLabelBorder&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(d.UV0,"vec2"),e.attributes.add(d.COLOR,"vec4"),e.attributes.add(d.SIZE,"vec2"),e.attributes.add(d.ROTATION,"float"),e.attributes.add(d.FEATUREATTRIBUTE,"vec4"),n.code.add(o.horizonCullingEnabled?c`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return  b > 0.0 && b < a && b * b  > a * c;
}`:c`bool behindHorizon(vec3 posModel) { return false; }`),n.main.add(c`
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      if (behindHorizon(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      vec2 inputSize;
      ${O(o.hasScreenSizePerspective,c`
          inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
          vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,c`
          inputSize = size;
          vec2 screenOffsetScaled = screenOffset;`)}
      ${O(o.vvSize,c`inputSize *= vvScale(featureAttribute).xx;`)}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${O(o.occlusionTestEnabled,c`
      bool visible = testHUDVisibility(posProj);
      if (!visible) {
        vtc = vec2(0.0);
        ${O(o.debugDrawLabelBorder,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
        return;
      }`)}
      ${O(m,c`voccluded = visible ? 0.0 : 1.0;`)}
    `);const h=c`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = (uv01 - anchorPosition) * 2.0 * combinedSize;

      ${O(o.hasRotation,c`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,u=o.pixelSnappingEnabled?i?c`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:c`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:c`posProj += quadOffset;`;n.main.add(c`
    ${h}
    ${o.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${O(a===D.ObjectAndLayerIdColor,c`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${c.float(w)};
    ${O(i,`alphaDiscard = alphaDiscard && outlineColor.a < ${c.float(w)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${u}
      gl_Position = posProj;
    }

    vtc = uv;

    ${O(o.debugDrawLabelBorder,c`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),s.uniforms.add(new at("tex",l=>l.texture)),o.occludedFragmentFade&&(s.uniforms.add(new rt("depthMap",l=>l.mainDepth)),s.uniforms.add(new st("occludedOpacity",l=>l.hudOccludedFragmentOpacity)));const g=o.debugDrawLabelBorder?c`(isBorder > 0.0 ? 0.0 : ${c.float(w)})`:c.float(w),f=c`
    ${O(o.debugDrawLabelBorder,c`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    ${O(o.sampleSignedDistanceFieldTexelCenter,c`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;`,c`vec2 samplePos = vtc;`)}

    ${i?c`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

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
          outlineAlphaFactor + fillAlphaFactor < ${g} ||
          fillPixelColor.a + outlinePixelColor.a < ${c.float(w)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${O(!p,c`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${g}) {
          discard;
        }

        ${O(!p,c`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:c`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${g}) {
            discard;
          }
          ${O(!p,c`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${O(o.occludedFragmentFade&&!p,c`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${O(!p&&o.debugDrawLabelBorder,c`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(a){case D.Color:case D.ColorEmission:e.outputs.add("fragColor","vec4",0),a===D.ColorEmission&&e.outputs.add("fragEmission","vec4",1),r===H.ColorAlpha&&e.outputs.add("fragAlpha","float",a===D.ColorEmission?2:1),s.main.add(c`
        ${f}
        ${O(r===H.FrontFace,c`fragColor.rgb /= fragColor.a;`)}
        ${O(a===D.ColorEmission,c`fragEmission = vec4(0.0);`)}
        ${O(r===H.ColorAlpha,c`fragAlpha = fragColor.a;`)}`);break;case D.ObjectAndLayerIdColor:s.main.add(c`
        ${f}
        outputObjectAndLayerIdColor();`);break;case D.Highlight:e.include(nt,o),s.main.add(c`
        ${f}
        outputHighlight(${O(m,c`voccluded == 1.0`,c`false`)});`)}return e}function Ce(o){return o.outlineColor[3]>0&&o.outlineSize>0}function k(o){return o.textureIsSignedDistanceField?eo(o.anchorPosition,o.distanceFieldBoundingBox,X):Be(X,o.anchorPosition),X}function eo(o,e,i){re(i,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const X=se(),to=Object.freeze(Object.defineProperty({__proto__:null,build:Qt,calculateAnchorPosition:k},Symbol.toStringTag,{value:"Module"}));class oo extends lt{constructor(e,i){super(e,i,new ct(to,()=>Vt(()=>import("./HUDMaterial.glsl-Vt6rKj_O.js").then(t=>t.H),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62]),import.meta.url))),this.primitiveType=i.occlusionPass?Se.POINTS:Se.TRIANGLES}initializePipeline(e){const{oitPass:i,hasPolygonOffset:t,draped:a,output:r,depthTestEnabled:n,occlusionPass:s}=e,p=i===H.NONE,m=i===H.ColorAlpha,h=r===D.Highlight,u=n&&!a&&!m&&!s&&!h;return qt({blending:ze(r)?p?Gt:dt(i):null,depthTest:n&&!a?{func:Ht.LEQUAL}:null,depthWrite:u?Wt:null,drawBuffers:pt(i,r),colorWrite:Xt,polygonOffset:t?io:null})}}const io={factor:0,units:-4};class v extends ut{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=ft.None,this.emissionSource=ht.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1}}b([C()],v.prototype,"screenCenterOffsetUnitsEnabled",void 0),b([C()],v.prototype,"occlusionTestEnabled",void 0),b([C()],v.prototype,"signedDistanceFieldEnabled",void 0),b([C()],v.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),b([C()],v.prototype,"vvSize",void 0),b([C()],v.prototype,"vvColor",void 0),b([C()],v.prototype,"hasVerticalOffset",void 0),b([C()],v.prototype,"hasScreenSizePerspective",void 0),b([C()],v.prototype,"hasRotation",void 0),b([C()],v.prototype,"debugDrawLabelBorder",void 0),b([C()],v.prototype,"hasPolygonOffset",void 0),b([C()],v.prototype,"depthTestEnabled",void 0),b([C()],v.prototype,"pixelSnappingEnabled",void 0),b([C()],v.prototype,"draped",void 0),b([C()],v.prototype,"terrainDepthTest",void 0),b([C()],v.prototype,"cullAboveTerrain",void 0),b([C()],v.prototype,"occlusionPass",void 0),b([C()],v.prototype,"occludedFragmentFade",void 0),b([C()],v.prototype,"objectAndLayerIdColorInstanced",void 0),b([C()],v.prototype,"horizonCullingEnabled",void 0),b([C()],v.prototype,"isFocused",void 0);class Yo extends gt{constructor(e,i){super(e,ho),this.produces=new Map([[N.HUD_MATERIAL,t=>ee(t)&&!this.parameters.drawAsLabel],[N.LABEL_MATERIAL,t=>ee(t)&&this.parameters.drawAsLabel],[N.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[N.DRAPED_MATERIAL,t=>this.parameters.draped&&ee(t)]]),this._visible=!0,this._configuration=new v(i)}getConfiguration(e,i){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=i.slot===N.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||i.slot===N.OCCLUSION_PIXELS,ze(e)&&(this._configuration.debugDrawLabelBorder=!!vt.LABELS_SHOW_BORDER),this._configuration.oitPass=i.oitPass,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration}intersect(e,i,t,a,r,n){const{options:{selectionMode:s,hud:p,excludeLabels:m},point:h,camera:u}=t,{parameters:g}=this;if(!s||!p||m&&g.isLabel||!e.visible||!h)return;const{scaleX:f,scaleY:l}=this._getScreenScale(e,u.pixelRatio);Te(oe,i),e.attributes.has(d.FEATUREATTRIBUTE)&&so(oe);const S=e.attributes.get(d.POSITION),T=e.attributes.get(d.SIZE),z=e.attributes.get(d.NORMAL),I=e.attributes.get(d.ROTATION),_=e.attributes.get(d.CENTEROFFSETANDDISTANCE);Pt(S.size>=3);const x=k(g),F=this.parameters.centerOffsetUnits==="screen";for(let y=0;y<S.data.length/S.size;y++){const L=y*S.size;J(A,S.data[L],S.data[L+1],S.data[L+2]),W(A,A,i),W(A,A,u.viewMatrix);const Y=y*_.size;if(J($,_.data[Y],_.data[Y+1],_.data[Y+2]),!F&&(A[0]+=$[0],A[1]+=$[1],$[2]!==0)){const q=$[2];pe($,A),Ue(A,A,j($,$,q))}const Z=y*z.size;if(J(U,z.data[Z],z.data[Z+1],z.data[Z+2]),Oe(U,oe,u,ae),this._applyVerticalOffsetTransformationView(A,ae,u,te),u.applyProjection(A,P),P[0]>-1){F&&($[0]||$[1])&&(P[0]+=$[0]*u.pixelRatio,$[1]!==0&&(P[1]+=St($[1],te.factorAlignment)*u.pixelRatio),u.unapplyProjection(P,A)),P[0]+=this.parameters.screenOffset[0]*u.pixelRatio,P[1]+=this.parameters.screenOffset[1]*u.pixelRatio,P[0]=Math.floor(P[0]),P[1]=Math.floor(P[1]);const q=y*T.size;E[0]=T.data[q],E[1]=T.data[q+1],bt(E,te.factor,E);const De=po*u.pixelRatio;let le=0;g.textureIsSignedDistanceField&&(le=Math.min(g.outlineSize,.5*E[0])*u.pixelRatio/2),E[0]*=f,E[1]*=l;const Fe=y*I.size,we=g.rotation+I.data[Fe];if(Ae(h,P[0],P[1],E,De,le,we,g,x)){const ce=t.ray;if(W(Pe,A,Le(lo,u.viewMatrix)),P[0]=h[0],P[1]=h[1],u.unprojectFromRenderScreen(P,A)){const M=R();B(M,ce.direction);const de=1/G(M);j(M,M,de),n(Ve(ce.origin,A)*de,M,-1,!0,1,Pe)}}}}}intersectDraped(e,i,t,a,r,n){const s=e.attributes.get(d.POSITION),p=e.attributes.get(d.SIZE),m=e.attributes.get(d.ROTATION),h=this.parameters,u=k(h),{scaleX:g,scaleY:f}=this._getScreenScale(e,e.screenToWorldRatio),l=uo*e.screenToWorldRatio;for(let S=0;S<s.data.length/s.size;S++){const T=S*s.size,z=s.data[T],I=s.data[T+1],_=S*p.size;E[0]=p.data[_],E[1]=p.data[_+1];let x=0;h.textureIsSignedDistanceField&&(x=Math.min(h.outlineSize,.5*E[0])*e.screenToWorldRatio/2),E[0]*=g,E[1]*=f;const F=S*m.size,y=h.rotation+m.data[F];Ae(a,z,I,E,l,x,y,h,u)&&r(n.dist,n.normal,-1,!1)}}createBufferWriter(){return new go}_updateScaleInfo(e,i,t){const a=this.parameters;a.screenSizePerspective!=null?he(t,i,a.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),a.screenSizePerspectiveAlignment!=null?he(t,i,a.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,i,t,a,r,n,s){const p=Oe(i,t,r,ae);return this._applyVerticalGroundOffsetView(e,p,r,s),this._applyVerticalOffsetTransformationView(s,p,r,n),this._applyPolygonOffsetView(s,p,a[3],r,s),this._applyCenterOffsetView(s,a,s),s}applyShaderOffsetsNDC(e,i,t,a,r){return this._applyCenterOffsetNDC(e,i,t,a),r!=null&&B(r,a),this._applyPolygonOffsetNDC(a,i,t,a),a}_applyPolygonOffsetView(e,i,t,a,r){const n=a.aboveGround?1:-1;let s=Math.sign(t);s===0&&(s=n);const p=n*s;if(this.parameters.shaderPolygonOffset<=0)return B(r,e);const m=Ie(Math.abs(i.cosAngle),.01,1),h=1-Math.sqrt(1-m*m)/m/a.viewport[2];return j(r,e,p>0?h:1/h),r}_applyVerticalGroundOffsetView(e,i,t,a){const r=G(e),n=t.aboveGround?1:-1,s=t.computeRenderPixelSizeAtDist(r)*zt,p=j(A,i.normal,n*s);return K(a,e,p),a}_applyVerticalOffsetTransformationView(e,i,t,a){var m;const r=this.parameters;if(!((m=r.verticalOffset)!=null&&m.screenLength)){if(r.screenSizePerspective||r.screenSizePerspectiveAlignment){const h=G(e);this._updateScaleInfo(a,h,i.cosAngle)}else a.factor.scale=1,a.factorAlignment.scale=1;return e}const n=G(e),s=r.screenSizePerspectiveAlignment??r.screenSizePerspective,p=Ct(t,n,r.verticalOffset,i.cosAngle,s);return this._updateScaleInfo(a,n,i.cosAngle),j(i.normal,i.normal,p),K(e,e,i.normal)}_applyCenterOffsetView(e,i,t){const a=this.parameters.centerOffsetUnits!=="screen";return t!==e&&B(t,e),a&&(t[0]+=i[0],t[1]+=i[1],i[2]&&(pe(U,t),K(t,t,j(U,U,i[2])))),t}_applyCenterOffsetNDC(e,i,t,a){const r=this.parameters.centerOffsetUnits!=="screen";return a!==e&&B(a,e),r||(a[0]+=i[0]/t.fullWidth*2,a[1]+=i[1]/t.fullHeight*2),a}_applyPolygonOffsetNDC(e,i,t,a){const r=this.parameters.shaderPolygonOffset;if(e!==a&&B(a,e),r){const n=t.aboveGround?1:-1,s=n*Math.sign(i[3]);a[2]-=(s||n)*r}return a}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:i,outlineColor:t}=this.parameters,a=e[3]>=w||i>=w&&t[3]>=w;return this._visible&&a}createGLMaterial(e){return new ao(e)}calculateRelativeScreenBounds(e,i,t=Ye()){return ro(this.parameters,e,i,t),t[2]=t[0]+e[0],t[3]=t[1]+e[1],t}_getScreenScale(e,i){const t=e.attributes.get(d.FEATUREATTRIBUTE);if(t==null)return{scaleX:i,scaleY:i};const a=ke(t.data,co);return mt(ie,this.parameters,a),{scaleX:ie[0]*i,scaleY:ie[1]*i}}}class ao extends yt{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(oo,e)}}function ro(o,e,i,t){t[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*i,t[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*i}function Oe(o,e,i,t){return Zt(e)&&(e=Te(no,e)),He(t.normal,o,e),W(t.normal,t.normal,i.viewInverseTransposeMatrix),t.cosAngle=qe($e,fo),t}function so(o){const e=o[0],i=o[1],t=o[2],a=o[3],r=o[4],n=o[5],s=o[6],p=o[7],m=o[8],h=1/Math.sqrt(e*e+i*i+t*t),u=1/Math.sqrt(a*a+r*r+n*n),g=1/Math.sqrt(s*s+p*p+m*m);return o[0]=e*h,o[1]=i*h,o[2]=t*h,o[3]=a*u,o[4]=r*u,o[5]=n*u,o[6]=s*g,o[7]=p*g,o[8]=m*g,o}function Ae(o,e,i,t,a,r,n,s,p){let m=e-a-t[0]*p[0],h=m+t[0]+2*a,u=i-a-t[1]*p[1],g=u+t[1]+2*a;const f=s.distanceFieldBoundingBox;return s.textureIsSignedDistanceField&&f!=null&&(m+=t[0]*f[0],u+=t[1]*f[1],h-=t[0]*(1-f[2]),g-=t[1]*(1-f[3]),m-=r,h+=r,u-=r,g+=r),re(xe,e,i),Ne(V,o,xe,Re(n)),V[0]>m&&V[0]<h&&V[1]>u&&V[1]<g}const te=new Jt,A=R(),U=R(),P=ne(),$e=R(),Pe=R(),V=se(),xe=se(),oe=Ee(),no=Ee(),lo=je(),$=R(),ie=R(),co=ne(),ae={normal:$e,cosAngle:0},po=1,uo=2,E=[0,0],fo=Ge(0,0,1);class ho extends $t{constructor(){super(...arguments),this.renderOccluded=Ot.Occlude,this.isDecoration=!1,this.color=ue(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=Me(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ue(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=ne(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusEffect="none",this.draped=!1,this.isLabel=!1}}const _e=At().vec3f(d.POSITION).vec3f(d.NORMAL).vec2f(d.UV0).vec4u8(d.COLOR).vec2f(d.SIZE).f32(d.ROTATION).vec4f(d.CENTEROFFSETANDDISTANCE).vec4f(d.FEATUREATTRIBUTE),mo=_e.clone().vec4u8(d.OBJECTANDLAYERIDCOLOR);class go{constructor(){this.vertexBufferLayout=xt()?mo:_e}elementCount(e){return 6*e.get(d.POSITION).indices.length}write(e,i,t,a,r,n){var I,_;_t(t.get(d.POSITION),e,r.position,n,6),Dt(t.get(d.NORMAL),i,r.normal,n,6);const s=(I=t.get(d.UV0))==null?void 0:I.data;let p=0,m=0,h=1,u=1;s&&s.length>=4&&(p=s[0],m=s[1],h=s[2],u=s[3]),h=Math.min(1.99999,h+1),u=Math.min(1.99999,u+1);let g=t.get(d.POSITION).indices.length,f=n;const l=r.uv0;for(let x=0;x<g;++x)l.set(f,0,p),l.set(f,1,m),f++,l.set(f,0,h),l.set(f,1,m),f++,l.set(f,0,h),l.set(f,1,u),f++,l.set(f,0,h),l.set(f,1,u),f++,l.set(f,0,p),l.set(f,1,u),f++,l.set(f,0,p),l.set(f,1,m),f++;Ft(t.get(d.COLOR),4,r.color,n,6);const{data:S,indices:T}=t.get(d.SIZE);g=T.length;const z=r.size;f=n;for(let x=0;x<g;++x){const F=S[2*T[x]],y=S[2*T[x]+1];for(let L=0;L<6;++L)z.set(f,0,F),z.set(f,1,y),f++}if(wt(t.get(d.ROTATION),r.rotation,n,6),t.get(d.CENTEROFFSETANDDISTANCE)?me(t.get(d.CENTEROFFSETANDDISTANCE),r.centerOffsetAndDistance,n,6):ge(r.centerOffsetAndDistance,n,6*g),t.get(d.FEATUREATTRIBUTE)?me(t.get(d.FEATUREATTRIBUTE),r.featureAttribute,n,6):ge(r.featureAttribute,n,6*g),a!=null){const x=(_=t.get(d.POSITION))==null?void 0:_.indices;if(x){const F=x.length,y=r.getField(d.OBJECTANDLAYERIDCOLOR,Ze);It(a,y,F,n,6)}}}}export{Qt as E,k as U,Yo as a,Jt as t};
