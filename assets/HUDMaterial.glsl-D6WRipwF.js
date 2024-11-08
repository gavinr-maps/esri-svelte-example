import{r as je,s as Le}from"./mathUtils-C4_ghTv4.js";import{n as Te}from"./mat3-BRl2i9Bz.js";import{e as ze}from"./mat3f64-BBpwCtoL.js";import{h as Be}from"./mat4-GpOFENPA.js";import{e as Ne}from"./mat4f64-Dk4dwAN8.js";import{o as Y,r as Me,I as Ue}from"./vec2-maR1OrZI.js";import{n as se,r as Ve}from"./vec2f64-miziP1SN.js";import{o as Q,E as k,A as pe,c as He,g as L,s as B,r as G,p as qe,u as K,N as We,P as Ge}from"./vec32-Dvg_eL9J.js";import{n as w,r as Xe}from"./vec3f64-BLpZdpfb.js";import{s as ke,r as Ye,u as Ze,n as Ee,e as ue}from"./vec4f64-o2zAXfmz.js";import{b as Je}from"./Polyline-D9YkgmM_.js";import{x as Qe}from"./BufferView-_QDXRCew.js";import{u as Ke,o as et,P as tt,S as ot,V as it,r as at,e as X,c as fe,w as rt,b as he,T as st,x as H,h as nt,j as lt,af as ct,B as dt,E as pt,k as ut,F as ft,A as N,ag as ht}from"./Texture-Fac_8AOC.js";import{n as gt,t as mt,m as vt,b as St,c as ge,i as bt,p as Ct}from"./Material-_xx7OZxD.js";import{H as Ot}from"./InterleavedLayout-e-di2fxs.js";import{o as ee,n as F,m as te,e as Pt}from"./Matrix3DrawUniform-CiBFaSz6.js";import{o as ye,d as xt,t as At,p as Tt}from"./graphicUtils-CWEFaVJb.js";import{o as I}from"./AlphaCutoff-UcccL64p.js";import{s as zt,t as Et,o as yt,u as _t,h as $t,b as Dt,O as Ft,S as It,d as Rt,g as me,B as ve,R as wt}from"./VertexColor.glsl-_ARMpsAT.js";import{s as jt}from"./Util-BIfApRF5.js";import{e as p}from"./VertexAttribute-Cq4MnHjR.js";import{_ as Lt}from"./index-Bh2oEzTI.js";import{E as Se,O as Bt}from"./enums-D9v74xTE.js";import{p as Nt,B as Mt,o as Ut,g as Vt}from"./renderState-DQLu6AJX.js";import{r as v}from"./tslib.es6-B3Jf3DVX.js";import{i as S}from"./ShaderTechniqueConfiguration-CBbn2DCi.js";import{t as Ht}from"./Point-Cg0-ChZE.js";import"./BindType-BmZEZMMh.js";import{o as d,r as b}from"./interfaces-DDtDqZYj.js";import"./vec42-YcqnINSP.js";import"./sdfPrimitives-CUWZbMRe.js";import{t as qt,o as Wt}from"./Float4DrawUniform-N58YDhuZ.js";function Gt(o){return o instanceof Float32Array&&o.length>=16}function Xt(o){return Array.isArray(o)&&o.length>=16}function kt(o){return Gt(o)||Xt(o)}class Yt{constructor(){this.factor=new be,this.factorAlignment=new be}}let be=class{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}};function Zt(o,e){const{vertex:i,fragment:t}=o;o.include(Ke,e),i.include(ye),e.terrainDepthTest&&o.varyings.add("depth","float"),i.main.add(d`
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.terrainDepthTest?d`depth = projectAux.posView.z;`:""}
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
  `),t.main.add(d`fragColor = vec4(1);
if(terrainDepthTest(depth)) {
fragColor.g = 0.5;
}`)}const ne={occludedFadeFactor:.6};function _e(o){const e=new et,i=o.signedDistanceFieldEnabled;if(e.include(xt,o),e.include(tt,o),o.occlusionPass)return e.include(Zt,o),e;const{vertex:t,fragment:a}=e;e.include(zt),e.include(ot,o),e.include(it,o),e.include(At),a.include(qt),a.include(at),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),e.varyings.add("voccluded","float"),t.uniforms.add(new X("viewport",(s,l)=>l.camera.fullViewport),new fe("screenOffset",(s,l)=>Y($e,2*s.screenOffset[0]*l.camera.pixelRatio,2*s.screenOffset[1]*l.camera.pixelRatio)),new fe("anchorPosition",s=>q(s)),new X("materialColor",s=>s.color),new ee("materialRotation",s=>s.rotation)),rt(t),i&&(t.uniforms.add(new X("outlineColor",s=>s.outlineColor)),a.uniforms.add(new X("outlineColor",s=>Ce(s)?s.outlineColor:ke),new ee("outlineSize",s=>Ce(s)?s.outlineSize:0))),o.horizonCullingEnabled&&t.uniforms.add(new Wt("pointDistanceSphere",(s,l)=>{const g=l.camera.eye,u=s.origin;return Ye(u[0]-g[0],u[1]-g[1],u[2]-g[2],Ht.radius)})),o.pixelSnappingEnabled&&t.include(ye),o.hasScreenSizePerspective&&(Et(t),yt(t)),o.debugDrawLabelBorder&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(p.UV0,"vec2"),e.attributes.add(p.COLOR,"vec4"),e.attributes.add(p.SIZE,"vec2"),e.attributes.add(p.ROTATION,"float"),e.attributes.add(p.FEATUREATTRIBUTE,"vec4"),t.code.add(o.horizonCullingEnabled?d`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return  b > 0.0 && b < a && b * b  > a * c;
}`:d`bool behindHorizon(vec3 posModel) { return false; }`),t.main.add(d`
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
      ${b(o.hasScreenSizePerspective,d`
          inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
          vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,d`
          inputSize = size;
          vec2 screenOffsetScaled = screenOffset;`)}
      ${b(o.vvSize,d`inputSize *= vvScale(featureAttribute).xx;`)}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const r=d`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = (uv01 - anchorPosition) * 2.0 * combinedSize;

      ${b(o.hasRotation,d`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,c=o.pixelSnappingEnabled?i?d`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:d`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:d`posProj += quadOffset;`;t.main.add(d`
    ${b(o.occlusionTestEnabled,d`
      if (!visible) {
        vtc = vec2(0.0);
        ${b(o.debugDrawLabelBorder,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
        return;
      }`)}
    ${r}
    ${o.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${b(o.output===F.ObjectAndLayerIdColor,d`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${d.float(I)};
    ${b(i,`alphaDiscard = alphaDiscard && outlineColor.a < ${d.float(I)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${c}
      gl_Position = posProj;
    }

    vtc = uv;

    ${b(o.debugDrawLabelBorder,d`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),a.uniforms.add(new he("tex",s=>s.texture)),o.occludedFragmentFade&&(a.uniforms.add(new he("depthMap",(s,l)=>l.mainDepth)),a.uniforms.add(new ee("fadeFactor",()=>ne.occludedFadeFactor)));const n=o.debugDrawLabelBorder?d`(isBorder > 0.0 ? 0.0 : ${d.float(I)})`:d.float(I),f=o.output===F.Highlight,h=d`
    ${b(o.debugDrawLabelBorder,d`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    ${b(o.sampleSignedDistanceFieldTexelCenter,d`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;`,d`vec2 samplePos = vtc;`)}

    ${i?d`
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
          fillPixelColor.a + outlinePixelColor.a < ${d.float(I)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${b(!f,d`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        ${b(!f,d`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:d`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          ${b(!f,d`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${b(o.occludedFragmentFade&&!f,d`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= fadeFactor;
        }
        `)}

    ${b(!f&&o.debugDrawLabelBorder,d`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(o.output){case F.Color:o.oitPass===H.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),a.main.add(d`
        ${h}
        ${b(o.oitPass===H.FrontFace,d`fragColor.rgb /= fragColor.a;`)}
        ${b(o.oitPass===H.ColorAlpha,d`fragAlpha = fragColor.a;`)}`);break;case F.ObjectAndLayerIdColor:a.main.add(d`
        ${h}
        outputObjectAndLayerIdColor();`);break;case F.Highlight:e.include(st,o),a.main.add(d`
        ${h}
        outputHighlight(voccluded == 1.0);`)}return e}function Ce(o){return o.outlineColor[3]>0&&o.outlineSize>0}function q(o,e=$e){return o.textureIsSignedDistanceField?Jt(o.anchorPosition,o.distanceFieldBoundingBox,e):Me(e,o.anchorPosition),e}function Jt(o,e,i){e!=null?Y(i,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1]):Y(i,0,0)}const $e=se(),Qt=Object.freeze(Object.defineProperty({__proto__:null,build:_e,calculateAnchorPosForRendering:q,shaderSettings:ne},Symbol.toStringTag,{value:"Module"}));class Kt extends nt{constructor(e,i,t){super(e,i,new lt(Qt,()=>Lt(()=>Promise.resolve().then(()=>ho),void 0,import.meta.url)),t),this.primitiveType=i.occlusionPass?Se.POINTS:Se.TRIANGLES}initializePipeline(e){const{oitPass:i,hasPolygonOffset:t,draped:a,output:r,depthTestEnabled:c}=e,n=i===H.NONE,f=t?eo:null,h=i===H.ColorAlpha,s=a||!c||h||r===F.Highlight?null:Nt;return Mt({blending:r===F.Color?n?Ut:ct(i):null,depthTest:c&&!a?{func:Bt.LEQUAL}:null,depthWrite:s,drawBuffers:dt(i,r),colorWrite:Vt,polygonOffset:f})}}const eo={factor:0,units:-4};class m extends pt{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.textureCoordinateType=ut.None,this.emissionSource=ft.None,this.discardInvisibleFragments=!0,this.hasSliceInVertexProgram=!0,this.hasVvInstancing=!1}}v([S()],m.prototype,"screenCenterOffsetUnitsEnabled",void 0),v([S()],m.prototype,"occlusionTestEnabled",void 0),v([S()],m.prototype,"signedDistanceFieldEnabled",void 0),v([S()],m.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),v([S()],m.prototype,"vvSize",void 0),v([S()],m.prototype,"vvColor",void 0),v([S()],m.prototype,"hasVerticalOffset",void 0),v([S()],m.prototype,"hasScreenSizePerspective",void 0),v([S()],m.prototype,"hasRotation",void 0),v([S()],m.prototype,"debugDrawLabelBorder",void 0),v([S()],m.prototype,"hasSlicePlane",void 0),v([S()],m.prototype,"hasPolygonOffset",void 0),v([S()],m.prototype,"depthTestEnabled",void 0),v([S()],m.prototype,"pixelSnappingEnabled",void 0),v([S()],m.prototype,"draped",void 0),v([S()],m.prototype,"terrainDepthTest",void 0),v([S()],m.prototype,"cullAboveTerrain",void 0),v([S()],m.prototype,"occlusionPass",void 0),v([S()],m.prototype,"occludedFragmentFade",void 0),v([S()],m.prototype,"objectAndLayerIdColorInstanced",void 0),v([S()],m.prototype,"horizonCullingEnabled",void 0);class ko extends gt{constructor(e,i){super(e,po),this.produces=new Map([[N.HUD_MATERIAL,t=>te(t)&&!this.parameters.drawInSecondSlot],[N.LABEL_MATERIAL,t=>te(t)&&this.parameters.drawInSecondSlot],[N.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[N.DRAPED_MATERIAL,t=>this.parameters.draped&&te(t)]]),this._visible=!0,this._configuration=new m(i)}getConfiguration(e,i){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=i.slot===N.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.depthTestEnabled=this.parameters.depthEnabled||i.slot===N.OCCLUSION_PIXELS,e===F.Color&&(this._configuration.debugDrawLabelBorder=!!mt.LABELS_SHOW_BORDER),this._configuration.oitPass=i.oitPass,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration}intersect(e,i,t,a,r,c){const{options:{selectionMode:n,hud:f,excludeLabels:h},point:s,camera:l}=t,{parameters:g}=this;if(!n||!f||h&&g.isLabel||!e.visible||!s)return;const{scaleX:u,scaleY:O}=this._getScreenScale(e,l.pixelRatio);Te(ie,i),e.attributes.has(p.FEATUREATTRIBUTE)&&io(ie);const P=e.attributes.get(p.POSITION),y=e.attributes.get(p.SIZE),$=e.attributes.get(p.NORMAL),R=e.attributes.get(p.ROTATION),_=e.attributes.get(p.CENTEROFFSETANDDISTANCE);jt(P.size>=3);const A=q(g),D=this.parameters.centerOffsetUnits==="screen";for(let z=0;z<P.data.length/P.size;z++){const j=z*P.size;Q(C,P.data[j],P.data[j+1],P.data[j+2]),k(C,C,i),k(C,C,l.viewMatrix);const Z=z*_.size;if(Q(E,_.data[Z],_.data[Z+1],_.data[Z+2]),!D&&(C[0]+=E[0],C[1]+=E[1],E[2]!==0)){const W=E[2];pe(E,C),He(C,C,L(E,E,W))}const J=z*$.size;if(Q(U,$.data[J],$.data[J+1],$.data[J+2]),Oe(U,ie,l,re),this._applyVerticalOffsetTransformationView(C,re,l,oe),l.applyProjection(C,x),x[0]>-1){D&&(E[0]||E[1])&&(x[0]+=E[0]*l.pixelRatio,E[1]!==0&&(x[1]+=vt(E[1],oe.factorAlignment)*l.pixelRatio),l.unapplyProjection(x,C)),x[0]+=this.parameters.screenOffset[0]*l.pixelRatio,x[1]+=this.parameters.screenOffset[1]*l.pixelRatio,x[0]=Math.floor(x[0]),x[1]=Math.floor(x[1]);const W=z*y.size;T[0]=y.data[W],T[1]=y.data[W+1],St(T,oe.factor,T);const Ie=no*l.pixelRatio;let le=0;g.textureIsSignedDistanceField&&(le=Math.min(g.outlineSize,.5*T[0])*l.pixelRatio/2),T[0]*=u,T[1]*=O;const Re=z*R.size,we=g.rotation+R.data[Re];if(Pe(s,x[0],x[1],T,Ie,le,we,g,A)){const ce=t.ray;if(k(xe,C,Be(ro,l.viewMatrix)),x[0]=s[0],x[1]=s[1],l.unprojectFromRenderScreen(x,C)){const M=w();B(M,ce.direction);const de=1/G(M);L(M,M,de),c(qe(ce.origin,C)*de,M,-1,!0,1,xe)}}}}}intersectDraped(e,i,t,a,r,c){const n=e.attributes.get(p.POSITION),f=e.attributes.get(p.SIZE),h=e.attributes.get(p.ROTATION),s=this.parameters,l=q(s),{scaleX:g,scaleY:u}=this._getScreenScale(e,e.screenToWorldRatio),O=lo*e.screenToWorldRatio;for(let P=0;P<n.data.length/n.size;P++){const y=P*n.size,$=n.data[y],R=n.data[y+1],_=P*f.size;T[0]=f.data[_],T[1]=f.data[_+1];let A=0;s.textureIsSignedDistanceField&&(A=Math.min(s.outlineSize,.5*T[0])*e.screenToWorldRatio/2),T[0]*=g,T[1]*=u;const D=P*h.size,z=s.rotation+h.data[D];Pe(a,$,R,T,O,A,z,s,l)&&r(c.dist,c.normal,-1,!1)}}createBufferWriter(){return new fo}_updateScaleInfo(e,i,t){const a=this.parameters;a.screenSizePerspective!=null?ge(t,i,a.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),a.screenSizePerspectiveAlignment!=null?ge(t,i,a.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,i,t,a,r,c,n){const f=Oe(i,t,r,re);return this._applyVerticalGroundOffsetView(e,f,r,n),this._applyVerticalOffsetTransformationView(n,f,r,c),this._applyPolygonOffsetView(n,f,a[3],r,n),this._applyCenterOffsetView(n,a,n),n}applyShaderOffsetsNDC(e,i,t,a,r){return this._applyCenterOffsetNDC(e,i,t,a),r!=null&&B(r,a),this._applyPolygonOffsetNDC(a,i,t,a),a}_applyPolygonOffsetView(e,i,t,a,r){const c=a.aboveGround?1:-1;let n=Math.sign(t);n===0&&(n=c);const f=c*n;if(this.parameters.shaderPolygonOffset<=0)return B(r,e);const h=je(Math.abs(i.cosAngle),.01,1),s=1-Math.sqrt(1-h*h)/h/a.viewport[2];return L(r,e,f>0?s:1/s),r}_applyVerticalGroundOffsetView(e,i,t,a){const r=G(e),c=t.aboveGround?1:-1,n=t.computeRenderPixelSizeAtDist(r)*Tt,f=L(C,i.normal,c*n);return K(a,e,f),a}_applyVerticalOffsetTransformationView(e,i,t,a){var h;const r=this.parameters;if(!((h=r.verticalOffset)!=null&&h.screenLength)){if(r.screenSizePerspective||r.screenSizePerspectiveAlignment){const s=G(e);this._updateScaleInfo(a,s,i.cosAngle)}else a.factor.scale=1,a.factorAlignment.scale=1;return e}const c=G(e),n=r.screenSizePerspectiveAlignment??r.screenSizePerspective,f=bt(t,c,r.verticalOffset,i.cosAngle,n);return this._updateScaleInfo(a,c,i.cosAngle),L(i.normal,i.normal,f),K(e,e,i.normal)}_applyCenterOffsetView(e,i,t){const a=this.parameters.centerOffsetUnits!=="screen";return t!==e&&B(t,e),a&&(t[0]+=i[0],t[1]+=i[1],i[2]&&(pe(U,t),K(t,t,L(U,U,i[2])))),t}_applyCenterOffsetNDC(e,i,t,a){const r=this.parameters.centerOffsetUnits!=="screen";return a!==e&&B(a,e),r||(a[0]+=i[0]/t.fullWidth*2,a[1]+=i[1]/t.fullHeight*2),a}_applyPolygonOffsetNDC(e,i,t,a){const r=this.parameters.shaderPolygonOffset;if(e!==a&&B(a,e),r){const c=t.aboveGround?1:-1,n=c*Math.sign(i[3]);a[2]-=(n||c)*r}return a}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:i,outlineColor:t}=this.parameters,a=e[3]>=I||i>=I&&t[3]>=I;return this._visible&&a}createGLMaterial(e){return new to(e)}calculateRelativeScreenBounds(e,i,t=Je()){return oo(this.parameters,e,i,t),t[2]=t[0]+e[0],t[3]=t[1]+e[1],t}_getScreenScale(e,i){const t=e.attributes.get(p.FEATUREATTRIBUTE);if(t==null)return{scaleX:i,scaleY:i};const a=Ze(t.data,so);return ht(ae,this.parameters,a),{scaleX:ae[0]*i,scaleY:ae[1]*i}}}class to extends _t{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(Kt,e)}}function oo(o,e,i,t){t[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*i,t[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*i}function Oe(o,e,i,t){return kt(e)&&(e=Te(ao,e)),We(t.normal,o,e),k(t.normal,t.normal,i.viewInverseTransposeMatrix),t.cosAngle=Ge(De,co),t}function io(o){const e=o[0],i=o[1],t=o[2],a=o[3],r=o[4],c=o[5],n=o[6],f=o[7],h=o[8],s=1/Math.sqrt(e*e+i*i+t*t),l=1/Math.sqrt(a*a+r*r+c*c),g=1/Math.sqrt(n*n+f*f+h*h);return o[0]=e*s,o[1]=i*s,o[2]=t*s,o[3]=a*l,o[4]=r*l,o[5]=c*l,o[6]=n*g,o[7]=f*g,o[8]=h*g,o}function Pe(o,e,i,t,a,r,c,n,f){let h=e-a-t[0]*f[0],s=h+t[0]+2*a,l=i-a-t[1]*f[1],g=l+t[1]+2*a;const u=n.distanceFieldBoundingBox;return n.textureIsSignedDistanceField&&u!=null&&(h+=t[0]*u[0],l+=t[1]*u[1],s-=t[0]*(1-u[2]),g-=t[1]*(1-u[3]),h-=r,s+=r,l-=r,g+=r),Y(Ae,e,i),Ue(V,o,Ae,Le(c)),V[0]>h&&V[0]<s&&V[1]>l&&V[1]<g}const oe=new Yt,C=w(),U=w(),x=Ee(),De=w(),xe=w(),V=se(),Ae=se(),ie=ze(),ao=ze(),ro=Ne(),E=w(),ae=w(),so=Ee(),re={normal:De,cosAngle:0},no=1,lo=2,T=[0,0],co=Xe(0,0,1);class po extends $t{constructor(){super(...arguments),this.renderOccluded=Ct.Occlude,this.isDecoration=!1,this.color=ue(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=Ve(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ue(1,1,1,1),this.outlineSize=0,this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.draped=!1,this.isLabel=!1}}const Fe=Ot().vec3f(p.POSITION).vec3f(p.NORMAL).vec2f(p.UV0).vec4u8(p.COLOR).vec2f(p.SIZE).f32(p.ROTATION).vec4f(p.CENTEROFFSETANDDISTANCE).vec4f(p.FEATUREATTRIBUTE),uo=Fe.clone().vec4u8(p.OBJECTANDLAYERIDCOLOR);class fo{constructor(){this.vertexBufferLayout=Pt()?uo:Fe}elementCount(e){return 6*e.get(p.POSITION).indices.length}write(e,i,t,a,r,c){var R,_;Dt(t.get(p.POSITION),e,r.position,c,6),Ft(t.get(p.NORMAL),i,r.normal,c,6);const n=(R=t.get(p.UV0))==null?void 0:R.data;let f=0,h=0,s=1,l=1;n&&n.length>=4&&(f=n[0],h=n[1],s=n[2],l=n[3]),s=Math.min(1.99999,s+1),l=Math.min(1.99999,l+1);let g=t.get(p.POSITION).indices.length,u=c;const O=r.uv0;for(let A=0;A<g;++A)O.set(u,0,f),O.set(u,1,h),u++,O.set(u,0,s),O.set(u,1,h),u++,O.set(u,0,s),O.set(u,1,l),u++,O.set(u,0,s),O.set(u,1,l),u++,O.set(u,0,f),O.set(u,1,l),u++,O.set(u,0,f),O.set(u,1,h),u++;It(t.get(p.COLOR),4,r.color,c,6);const{data:P,indices:y}=t.get(p.SIZE);g=y.length;const $=r.size;u=c;for(let A=0;A<g;++A){const D=P[2*y[A]],z=P[2*y[A]+1];for(let j=0;j<6;++j)$.set(u,0,D),$.set(u,1,z),u++}if(Rt(t.get(p.ROTATION),r.rotation,c,6),t.get(p.CENTEROFFSETANDDISTANCE)?me(t.get(p.CENTEROFFSETANDDISTANCE),r.centerOffsetAndDistance,c,6):ve(r.centerOffsetAndDistance,c,6*g),t.get(p.FEATUREATTRIBUTE)?me(t.get(p.FEATUREATTRIBUTE),r.featureAttribute,c,6):ve(r.featureAttribute,c,6*g),a!=null){const A=(_=t.get(p.POSITION))==null?void 0:_.indices;if(A){const D=A.length,z=r.getField(p.OBJECTANDLAYERIDCOLOR,Qe);wt(a,z,D,c,6)}}}}const ho=Object.freeze(Object.defineProperty({__proto__:null,build:_e,calculateAnchorPosForRendering:q,shaderSettings:ne},Symbol.toStringTag,{value:"Module"}));export{ko as a,Yt as t};
