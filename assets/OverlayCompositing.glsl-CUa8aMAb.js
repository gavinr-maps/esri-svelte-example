import{K as Te,aO as Wr,aD as Ge,r as O,m as $,a as vt,B as Ur,aw as Gr,M as kr,a0 as qr,b5 as xe,bz as rt,aR as Br}from"./Accessor-BmwT4B0c.js";import{i as Zr}from"./Evented-Dw4_VOGn.js";import{d as le,P as gt,v as Qr,A as It}from"./reactiveUtils-XM7cS2OP.js";import{b as Mt,i as $t,c as pt,h as Xr,X as Yr,Q as Kr,q as Jr,n as ei}from"./mat4-Fi6iAz29.js";import{j as ti,r as ri,A as ii,g as oi,s as j,c as ai,H as si,y as ni,E as _r,o as xr}from"./vec32-Dvg_eL9J.js";import{n as Ie,r as _t,i as li}from"./vec3f64-BLpZdpfb.js";import{b as ci,_ as hi,t as di,e as Ee,a as Ft}from"./GridLocalOriginFactory-CngFIYNp.js";import{O as ui,p as je,t as it}from"./Material-C_-mgXN8.js";import{a as Ne,a6 as At,f as gi,a7 as ke,y as de,A as ue}from"./Polyline-s-JzsQqo.js";import{R as H,t as yr,d as Cr,r as pi,e as fi,b as mi,n as ot,o as Xe,a as wr,_ as at,E as vi,i as _i}from"./SceneLighting-BuSMIzqo.js";import{n as R,c as xi,t as Oe,i as xt,u as yi,e as Ci,b as br}from"./Matrix3PassUniform-uCCQMnlP.js";import{i as Ye}from"./RenderCamera-CDB-KFBK.js";import{n as Ke,s as wi}from"./vec4f64-o2zAXfmz.js";import{n as d}from"./glsl-BH37Aalp.js";import{t as Et}from"./colorUtils-Rxh2V3ai.js";import{l as bi,a as Si,i as Sr,h as U,L as Lt,s as Pe,k as F,Z as Ti,ag as yt,m as K,t as J,A as N,C as Tr,Q as Oi,ad as Pi}from"./FloatArray-BQXWSSJh.js";import{t as We}from"./Point-Cz2JYYmX.js";import{r as Or,o as Ri,b as Di}from"./mathUtils-Cfq9PL9W.js";import{r as st}from"./signal-CySMLEX9.js";import{o as Z,e as A}from"./mat4f64-Dk4dwAN8.js";import{v as Ht,w as Vt,j as Ii}from"./axisAngleDegrees-DdLZENJj.js";import{e as nt,f as Mi}from"./weather-zOic7P_q.js";import{e as zt,a as Ct,h as $i,t as lt}from"./BooleanBindUniform-BgD_OP8i.js";import{a as Pr}from"./BindType-BBwFZqyN.js";import{o as jt}from"./Float4DrawUniform-Db0CLl_z.js";import{u as Fi}from"./RenderPlugin-CTXypYLE.js";import{o as k,u as q,l as ce,_ as ye,b as Nt,e as he,j as w,x as Ai,v as Wt,r as Ei}from"./vec2-ChnYg_BJ.js";import{_ as ee}from"./index-4eY77cms.js";import{B as Q,g as X,c as wt}from"./renderState-Ci93M1-P.js";import{w as Li}from"./HighlightDefaults-CumzVg9-.js";import{c as Me}from"./NoParameters-t-PuNrgq.js";import{a as we}from"./basicInterfaces-CZwQPxTp.js";import{e as qe}from"./VertexAttribute-Cq4MnHjR.js";import{C as Re,G as Hi,L as Rr,_ as Y,F as Ut,M as Dr,E as Vi}from"./enums-D9v74xTE.js";import{t as Be}from"./VertexElementDescriptor-BLyltQyJ.js";import{r as zi}from"./VertexArrayObject-vYejmVPr.js";import{E as Gt}from"./BufferObject-BJilD_hc.js";import{p as Ir,w as fe}from"./Texture-BVJ22uHh.js";import{t as ji}from"./NestedMap-GuqgquCN.js";import{s as ge,u as Ni,c as re,f as Le}from"./InterleavedLayout-_dYEAUNK.js";import{n as x}from"./vec2f64-Dy6m9Nrb.js";import{c as Wi}from"./HUDRenderStyle-BhGvVxgm.js";import{e as Ui}from"./mat3f64-BBpwCtoL.js";import{s as kt,z as Gi}from"./vec42-YcqnINSP.js";import{l as ki}from"./ViewingMode-Dodu7ZZk.js";import{a as qi,i as Bi}from"./ShaderTechniqueConfiguration-D4dZMCXS.js";import{C as Zi}from"./RibbonLine.glsl-DwJpAQ1c.js";import{g as Qi,C as Xi}from"./Scheduler-i_u8qdlN.js";import{C as Yi,E as Ki,U as Ji}from"./sphere-Cin5efBj.js";import{m as eo}from"./mathUtils-BgCEaV43.js";import{i as te}from"./ShaderBuilder-BKul5qh8.js";var qt,Bt;(function(e){e[e.ADD=0]="ADD",e[e.UPDATE=1]="UPDATE",e[e.REMOVE=2]="REMOVE"})(qt||(qt={})),function(e){e[e.NONE=0]="NONE",e[e.VISIBILITY=1]="VISIBILITY",e[e.GEOMETRY=2]="GEOMETRY",e[e.TRANSFORMATION=4]="TRANSFORMATION",e[e.HIGHLIGHT=8]="HIGHLIGHT",e[e.OCCLUDEE=16]="OCCLUDEE"}(Bt||(Bt={}));var M,Zt,Qt;(function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"})(M||(M={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(Zt||(Zt={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(Qt||(Qt={}));let Xt=class{constructor(){this._extent=Ne(),this.resolution=0,this.renderLocalOrigin=ci(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new to}get extent(){return this._extent}setupGeometryViewsCyclical(t){this.setupGeometryView();const r=.001*t.range;if(this._extent[0]-r<=t.min){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];At(this._extent,t.range,0,i)}if(this._extent[2]+r>=t.max){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];At(this._extent,-t.range,0,i)}}setupGeometryView(){this.canvasGeometries.numViews=1,gi(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let t=0;t<this.canvasGeometries.numViews;t++){const r=this.canvasGeometries.extents[t];if(r[0]!==r[2]&&r[1]!==r[3])return!0}return!1}},to=class{constructor(){this.extents=[Ne(),Ne(),Ne()],this.numViews=0}};var _;(function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.WaterNormal=3]="WaterNormal",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"})(_||(_={}));let ro=class{constructor(t,r,i){this._fbos=t,this._format=r,this._name=i}get valid(){var t;return((t=this._handle)==null?void 0:t.getTexture())!=null}dispose(){this._handle=Te(this._handle)}get texture(){var t;return(t=this._handle)==null?void 0:t.getTexture()}bind(t,r,i){var o,a,s,n;this._handle&&((o=this._handle.fbo)==null?void 0:o.width)===r&&((a=this._handle.fbo)==null?void 0:a.height)===i||((s=this._handle)==null||s.release(),this._handle=this._fbos.acquire(r,i,this._name,this._format)),t.bindFramebuffer((n=this._handle)==null?void 0:n.fbo)}generateMipMap(){var t,r,i,o,a;(i=(r=(t=this._handle)==null?void 0:t.getTexture())==null?void 0:r.descriptor)!=null&&i.hasMipmap&&((a=(o=this._handle)==null?void 0:o.getTexture())==null||a.generateMipmap())}},ie=class{constructor(t,r,i,o,a=H.RGBA_MIPMAP){this.output=i,this.content=o,this.fbo=new ro(t,a,r)}get valid(){return this.fbo.valid}},io=class{constructor(t){this.targets=[new ie(t,"overlay color",R.Color,_.Color),new ie(t,"overlay IM color",R.Color,_.ColorNoRasterImage),new ie(t,"overlay highlight",R.Highlight,_.Highlight,H.RG),new ie(t,"overlay water",R.Normal,_.WaterNormal),new ie(t,"overlay occluded",R.Color,_.Occluded)],xi()&&this.targets.push(new ie(t,"overlay olid",R.ObjectAndLayerIdColor,_.ObjectAndLayerIdColor,H.RGBA))}getTexture(t){var r;return(r=this.targets[t])==null?void 0:r.fbo.texture}dispose(){for(const t of this.targets)t.fbo.dispose()}computeValidity(){return this.targets.reduce((t,r,i)=>r.valid?t|=1<<i:t,0)}};var Se;(function(e){e[e.Material=0]="Material",e[e.ShadowMap=1]="ShadowMap",e[e.Highlight=2]="Highlight",e[e.ViewshedShadowMap=3]="ViewshedShadowMap"})(Se||(Se={}));function as(e){e.fragment.code.add(d`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function oo(e){e.fragment.code.add(d`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function ao(e){e.fragment.code.add(d`
    const float GAMMA = ${d.float(Et)};
    const float INV_GAMMA = ${d.float(1/Et)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}function so(e,t){if(!t.screenSpaceReflections)return;const r=e.fragment;r.include(bi),r.uniforms.add(new Si("nearFar",i=>i.camera.nearFar),new Sr("depthMap",i=>{var o;return(o=i.depth)==null?void 0:o.attachment}),new Oe("proj",i=>i.camera.projectionMatrix),new U("invResolutionHeight",i=>1/i.camera.height),new Oe("reprojectionMatrix",i=>i.ssr.reprojectionMatrix)).code.add(d`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `)}var W,Ze;function no(e){return e!=null&&!e.running}(function(e){e[e.Idle=0]="Idle",e[e.Rendering=1]="Rendering",e[e.Ready=2]="Ready",e[e.Fading=3]="Fading"})(W||(W={})),function(e){e[e.RG=0]="RG",e[e.BA=1]="BA",e[e.COUNT=2]="COUNT"}(Ze||(Ze={}));class lo{constructor(){this.startTime=0,this._data=st(null),this._readChannels=Ze.RG,this.parallax=new Yt,this.parallaxNew=new Yt,this._anchorPoint=Ie(),this._fadeState=st(p.HIDE),this._fadeFactor=st(1)}get data(){return this._data.value}set data(t){this._data.value=t}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case p.HIDE:return 0;case p.FADE_OUT:return 1-this.fadeFactor;case p.FADE_IN:return this.fadeFactor;case p.SHOW:case p.CROSS_FADE:return 1}}fade(t,r,i){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=i?Or((r-this.startTime)/(ho*i),0,1):1,this.fadeFactor===1&&this._endFade()),this._evaluateState(t,r),this._updateParallax(t)}_evaluateState(t,r){const i=t.relativeElevation,o=this._updateAnchorPoint(t);(i>1.7*nt||i<-1e4||o>Jt)&&this.opacity>0?this._startFade(p.HIDE,r):this.isFading||(i>nt||i<-.35*nt||o>uo*Jt?this.opacity>0&&this._startFade(p.FADE_OUT,r):no(this.data)&&(this.opacity===0?this._startFade(p.FADE_IN,r):this.data.state===W.Ready&&(this.fadeState===p.SHOW?this._startFade(p.CROSS_FADE,r):this._startFade(p.SHOW,r))))}_updateParallax(t){const r=ti(t.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(r-We.radius*We.radius,0))/Math.sqrt(r),Ht(Kt,this.parallax.anchorPoint,oe),Mt(this.parallax.transform,Z,oe[3],Vt(oe)),Ht(Kt,this.parallaxNew.anchorPoint,oe),Mt(this.parallaxNew.transform,Z,oe[3],Vt(oe))}_updateAnchorPoint(t){var r;return ii(this._anchorPoint,t.eye),oi(this._anchorPoint,this._anchorPoint,We.radius),this.fadeState===p.HIDE&&((r=this.data)==null?void 0:r.state)===W.Ready?(j(this.parallax.anchorPoint,this._anchorPoint),0):ri(ai(co,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(t,r){switch(this._fadeState.value=t,this.startTime=r,t){case p.CROSS_FADE:this.requestFade(),this._switchReadChannels(),j(this.parallaxNew.anchorPoint,this._anchorPoint);break;case p.FADE_IN:this.requestFade(),this._switchReadChannels(),j(this.parallax.anchorPoint,this._anchorPoint),j(this.parallaxNew.anchorPoint,this._anchorPoint);break;case p.FADE_OUT:this.requestFade();break;case p.SHOW:this._switchReadChannels(),j(this.parallax.anchorPoint,this._anchorPoint),j(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case p.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==W.Ready&&(this.data.state=W.Idle),this.fadeState){case p.CROSS_FADE:j(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=p.SHOW;break;case p.FADE_IN:this._fadeState.value=p.SHOW;break;case p.FADE_OUT:this._fadeState.value=p.HIDE;break;case p.SHOW:case p.HIDE:break;default:Wr(this.fadeState)}}_switchReadChannels(){var t;((t=this.data)==null?void 0:t.state)===W.Ready&&(this._readChannels=1-this._readChannels,this.data.state=W.Fading)}get isFading(){return this.fadeState===p.FADE_OUT||this.fadeState===p.FADE_IN||this.fadeState===p.CROSS_FADE}}var p;(function(e){e[e.HIDE=0]="HIDE",e[e.FADE_IN=1]="FADE_IN",e[e.SHOW=2]="SHOW",e[e.CROSS_FADE=3]="CROSS_FADE",e[e.FADE_OUT=4]="FADE_OUT"})(p||(p={}));let Yt=class{constructor(){this.anchorPoint=Ie(),this.radiusCurvatureCorrection=0,this.transform=A()}};const Kt=_t(0,0,1),oe=Ii(),co=Ie(),ho=1.25,uo=.5,Jt=2e5;let go=class extends xt{constructor(t,r){super(t,"samplerCube",Pr.Bind,(i,o)=>i.bindTexture(t,r(o)))}};function po(e){const t=e.fragment;t.constants.add("radiusCloudsSquared","float",fo).code.add(d`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),t.uniforms.add(new U("radiusCurvatureCorrection",({clouds:l})=>l.parallax.radiusCurvatureCorrection)).code.add(d`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),t.code.add(d`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),yr(t),Cr(t);const r=_t(.28,.175,.035);t.constants.add("RIM_COLOR","vec3",r),t.code.add(d`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${d.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${d.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${d.float(.2)} * pow(dirDotLight, ${d.float(10)}) * (1. - pow(sunsetTransition, ${d.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),t.uniforms.add(new zt("readChannelsRG",l=>l.clouds.readChannels===Ze.RG),new go("cubeMap",l=>{var u,f;return((f=(u=l.clouds.data)==null?void 0:u.cubeMap)==null?void 0:f.colorTexture)??null})).code.add(d`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),t.uniforms.add(new Lt("anchorPoint",l=>l.clouds.parallax.anchorPoint),new Lt("anchorPointNew",l=>l.clouds.parallaxNew.anchorPoint),new Oe("rotationClouds",l=>l.clouds.parallax.transform),new Oe("rotationCloudsNew",l=>l.clouds.parallaxNew.transform),new U("cloudsOpacity",l=>l.clouds.opacity),new U("fadeFactor",l=>l.clouds.fadeFactor),new zt("crossFade",l=>l.clouds.fadeState===p.CROSS_FADE)).code.add(d`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const fo=(We.radius+Mi)**2;function mo(e){e.code.add(d`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function vo(e,t){e.include(pi,t),e.include(ao),e.include(oo),t.cloudReflections&&e.include(po),e.include(so,t);const r=e.fragment;r.include(mo),r.constants.add("fresnelSky","vec3",[.02,1,15]),r.constants.add("fresnelMaterial","vec2",[.02,.1]),r.constants.add("roughness","float",.015),r.constants.add("foamIntensityExternal","float",1.7),r.constants.add("ssrIntensity","float",.65),r.constants.add("ssrHeightFadeStart","float",fi),r.constants.add("ssrHeightFadeEnd","float",mi),r.constants.add("waterDiffusion","float",.92),r.constants.add("waterSeaColorMod","float",.8),r.constants.add("correctionViewingPowerFactor","float",.4),r.constants.add("skyZenitColor","vec3",[.52,.68,.9]),r.constants.add("skyColor","vec3",[.67,.79,.9]),r.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(d`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add(new U("lightingSpecularStrength",i=>i.lighting.mainLight.specularStrength),new U("lightingEnvironmentStrength",i=>i.lighting.mainLight.environmentStrength)),r.code.add(d`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.cloudReflections&&r.uniforms.add(new U("cloudsOpacity",i=>i.clouds.opacity)).code.add(d`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),t.screenSpaceReflections?r.uniforms.add(new Oe("view",i=>i.camera.viewMatrix),new Sr("lastFrameColorTexture",i=>{var o;return(o=i.ssr.lastFrameColor)==null?void 0:o.getTexture()}),new U("fadeFactorSSR",i=>i.ssr.fadeFactor)).code.add(d`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):r.code.add(d`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.cloudReflections?t.screenSpaceReflections?r.code.add(d`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(d`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(d`return waterRenderedColor;
}`)}var pe;function ls(e,t){const{vertex:r,fragment:i}=e;r.uniforms.add(new jt("overlayTexOffset",(o,a)=>xo(o,a)),new jt("overlayTexScale",(o,a)=>yo(o,a))),i.constants.add("overlayOpacity","float",1),i.uniforms.add(new F("ovColorTex",(o,a)=>_o(o,a))),Mr(e,t)}function cs(e,t){const{vertex:r,fragment:i}=e;r.uniforms.add(new er("overlayTexOffset"),new er("overlayTexScale")),i.uniforms.add(new Pe("overlayOpacity",o=>o.overlayOpacity),new F("ovColorTex",(o,a)=>{var s;return(s=a.overlay)==null?void 0:s.getTexture(o.overlayContent)})),Mr(e,t)}function Mr(e,t){const r=t.pbrMode===ot.Water||t.pbrMode===ot.WaterOnIntegratedMesh||t.pbrMode===ot.TerrainWithWater;r&&e.include(vo,t);const{vertex:i,fragment:o}=e;e.varyings.add("vtcOverlay","vec4"),i.code.add(d`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),o.code.add(d`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),o.code.add(d`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),o.code.add(d`vec4 getOverlayColorTexel() {
vec4 texCoords = vtcOverlay;
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),o.code.add(d`vec2 getAllOverlayHighlightValuesEncoded() {
vec4 texCoords = vtcOverlay;
vec2 uvInner = texCoords.xy;
vec2 uvOuter = texCoords.zw;
bool isValidInner = isValid(uvInner, fwidth(uvInner));
bool isValidOuter = isValid(uvOuter, vec2(0.0, 0.0));
vec2 texelCoordInner = uvInner * vec2(0.5, 1.0);
vec2 texelCoordOuter = uvOuter * vec2(0.5, 1.0) + vec2(0.5,0.0);
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec2 texelValueInner = texelFetch(ovColorTex, ivec2(texelCoordInner * texDim), 0).rg;
vec2 texelValueOuter = texelFetch(ovColorTex, ivec2(texelCoordOuter * texDim), 0).rg;
return
isValidInner ? texelValueInner :
isValidOuter ? texelValueOuter :
vec2(0.0);
}`),r&&(yr(o),Cr(o),o.code.add(d`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function _o(e,t){var r,i,o;return e.identifier===Se.Material&&yi(e.output)?(r=t.overlay)==null?void 0:r.getTexture(_.ColorNoRasterImage):e.identifier===Se.Material&&e.output===R.ObjectAndLayerIdColor?(i=t.overlay)==null?void 0:i.getTexture(_.ObjectAndLayerIdColor):e.identifier===Se.Highlight?(o=t.overlay)==null?void 0:o.getTexture(_.Highlight):null}function xo(e,t){var o,a,s,n;const r=(a=(o=t.overlay)==null?void 0:o.overlays[M.INNER])==null?void 0:a.extent;ke(r)&&(E[0]=e.toMapSpace[0]/de(r)-r[0]/de(r),E[1]=e.toMapSpace[1]/ue(r)-r[1]/ue(r));const i=(n=(s=t.overlay)==null?void 0:s.overlays[M.OUTER])==null?void 0:n.extent;return ke(i)&&(E[2]=e.toMapSpace[0]/de(i)-i[0]/de(i),E[3]=e.toMapSpace[1]/ue(i)-i[1]/ue(i)),E}function yo(e,t){var o,a,s,n;const r=(a=(o=t.overlay)==null?void 0:o.overlays[M.INNER])==null?void 0:a.extent;ke(r)&&(E[0]=e.toMapSpace[2]/de(r),E[1]=e.toMapSpace[3]/ue(r));const i=(n=(s=t.overlay)==null?void 0:s.overlays[M.OUTER])==null?void 0:n.extent;return ke(i)&&(E[2]=e.toMapSpace[2]/de(i),E[3]=e.toMapSpace[3]/ue(i)),E}(function(e){e[e.Disabled=0]="Disabled",e[e.Enabled=1]="Enabled",e[e.EnabledWithWater=2]="EnabledWithWater",e[e.COUNT=3]="COUNT"})(pe||(pe={}));const E=Ke();class er extends xt{constructor(t){super(t,"vec4")}}let bt=class extends Me{constructor(){super(...arguments),this.color=_t(1,1,1)}};function $r(){const e=new te;return e.include(Ct),e.fragment.uniforms.add(new F("tex",t=>t.texture),new Ci("uColor",t=>t.color)),e.fragment.main.add(d`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`),e}const Co=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:bt,build:$r},Symbol.toStringTag,{value:"Module"}));let tr=class extends xt{constructor(t,r){super(t,"ivec2",Pr.Pass,(i,o,a)=>i.setUniform2iv(t,r(o,a)))}};class St extends Me{}function Fr(){const e=new te,{outputs:t,fragment:r}=e;return e.include(Ct),r.uniforms.add(new br("textureInput",i=>i.input)),r.constants.add("outlineWidth","int",Math.ceil(De)),r.constants.add("cellSize","int",G),t.add("fragGrid","vec2"),r.main.add(d`ivec2 inputTextureSize = textureSize(textureInput, 0);
ivec2 cellBottomLeftCornerInput = ivec2(floor(gl_FragCoord.xy) * vec2(cellSize));
ivec2 coordMid =  cellBottomLeftCornerInput + ivec2(cellSize >> 1);
uvec2 centreTexel = uvec2( texelFetch(textureInput, coordMid, 0).rg * 255.0) & uvec2(0x55u);
float marginSquare = float(outlineWidth*outlineWidth);
uvec2 outputValue = centreTexel & uvec2(0x55u);
for(int y = -outlineWidth; y <= cellSize + outlineWidth; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : outlineWidth;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
ivec2 coord = cellBottomLeftCornerInput + ivec2(x, y);
uvec2[4] texels = uvec2[4] (
uvec2(texelFetch(textureInput,coord+ivec2(0,0),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(1,0),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(0,1),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(1,1),0).rg * 255.0) & uvec2(0x55u)
);
if (texels[0] == texels[1] && texels[1] == texels[2] && texels[2] == texels[3] && texels[3] ==  centreTexel) {
continue;
}
for (int i=0; i<4; ++i){
outputValue |= ((texels[i] ^ centreTexel) << 1);
outputValue |= texels[i];
}
}
}
fragGrid = vec2(outputValue) / 255.0;`),e}const G=32,De=9,Tt=.4,wo=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:St,blurSize:Tt,build:Fr,gridCellPixelSize:G,outlineSize:De},Symbol.toStringTag,{value:"Module"}));function Je(e){const{vertex:t}=e;t.uniforms.add(new F("coverageTexture",r=>r.coverageTexture),new tr("highlightRenderCellCount",r=>k(rr,r.horizontalCellCount,r.verticalCellCount)),new tr("highlightTextureResolution",({highlightTexture:r})=>k(rr,r.descriptor.width,r.descriptor.height)),new Xe("highlightLevel",r=>r.highlightLevel)).constants.add("cellSize","int",G),e.varyings.add("sUV","vec2"),e.varyings.add("vOutlinePossible","float"),t.code.add(d`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`).main.add(d`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
uvec2 covTexel = uvec2(texelFetch(coverageTexture, cellPos, 0).rg * 255.0);
int channelIndex = (highlightLevel >> 2) & 3;
uint channelValue = covTexel[channelIndex];
int highlightIndex = (highlightLevel & 3) << 1;
bool covered = ((channelValue >> highlightIndex) & 1u) == 1u;
if (!covered) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = (((channelValue >> highlightIndex) & 2u) == 2u) ? 1.0 : 0.0;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}const rr=x();function Ar(){const e=new te;e.include(Je);const{fragment:t}=e;return t.uniforms.add(new F("highlightTexture",r=>r.highlightTexture),new F("highlightOptionsTexture",r=>r.highlightOptionsTexture),new Pe("pixelRatio",r=>r.pixelRatio),new Pe("occludedIntensityFactor",r=>r.occludedFactor),new Ti("maxHighlightLevel",r=>r.highlights.length-1)),t.constants.add("pixelSampleScale","float",1),e.include(yt),t.code.add(d`const float pascal17[9] = float[9](12870.0, 11440.0, 8008.0, 4368.0, 1820.0, 560.0, 120.0, 16.0, 1.0);
const float denom17 =  65536.0;
float colorWeight[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float colorOcclusion[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float weights[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
void applyTexel(vec2 texel, float weight) {
if (texel != vec2(0.0)){
int maxChannel = (maxHighlightLevel >> 2) & 1;
for (int channelIndex = 0; channelIndex <= maxChannel; ++channelIndex){
uint channel = readChannel(texel, channelIndex << 2);
int firstIndex = channelIndex << 2;
int maxIndex  = min(firstIndex + 3, maxHighlightLevel);
for (int highlightIndex = firstIndex; highlightIndex <= maxIndex; ++highlightIndex ) {
uint v = readChannelBits(channel, highlightIndex);
if ((v & 1u) == 1u){
colorWeight[highlightIndex] += weight;
if ((v & 2u) == 2u){
colorOcclusion[highlightIndex] += weight;
}
}
}
}
}
}
vec2 readTexel(ivec2 iuv, int du, int dv) {
return texelFetch(highlightTexture, iuv + ivec2(du, dv), 0).rg;
}
void readAndApplyTexel(ivec2 iuv, int du, int dv, float weight) {
vec2 texel = readTexel(iuv, du, dv);
applyTexel(texel, weight);
}
void readAndApply2TexelsU(ivec2 iuv, int du, int dv, float weight) {
readAndApplyTexel(iuv, -du, dv, weight);
readAndApplyTexel(iuv, +du, dv, weight);
}
float getWeight(int pixelDistance) {
float scaledDistance = float(pixelDistance) * pixelSampleScale / pixelRatio;
float d0f = floor(scaledDistance);
int d0 = int(d0f);
if (d0 >= 8){
return 0.0;
}
float w0 = pascal17[d0];
float w1 = pascal17[d0+1];
float f =  scaledDistance - d0f;
return mix(w0, w1, f);
}`),t.main.add(d`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
ivec2 iuv = ivec2(sUV * highlightTextureSize);
vec2 centerTexel = texelFetch(highlightTexture, iuv, 0).rg;
bool outlinePossible = false;
if (vOutlinePossible > 0.0){
for (int highlightLevel=0; highlightLevel<= maxHighlightLevel; ++highlightLevel) {
if ((readLevelBits(centerTexel,highlightLevel) & 1u) == 0u) {
outlinePossible = true;
break;
}
}
}
if (outlinePossible) {
int maxPixelDistance = clamp(int(8.0 * pixelRatio / pixelSampleScale), 2, 16);
float weightSum = 0.0;
for(int y = 0; y <= maxPixelDistance; ++y) {
float w = getWeight(y);
weights[y] = w;
weightSum += w * (y == 0 ? 1.0 : 2.0);
}
for(int y = 0; y <= maxPixelDistance; ++y) {
weights[y] = weights[y] / weightSum;
}
float weight0 = weights[0];
applyTexel(centerTexel, weight0 * weight0);
for(int y = 0; y <= maxPixelDistance; y += 1) {
float yFactor = weights[y];
if (y != 0) {
float xFactor = weight0;
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApplyTexel(iuv, 0, +y, weight);
readAndApplyTexel(iuv, 0, -y, weight);
}
}
for(int x = 1; x <= maxPixelDistance; x += 1) {
float xFactor = weights[x];
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApply2TexelsU(iuv, x, +y, weight);
if (y != 0){
readAndApply2TexelsU(iuv, x, -y, weight);
}
}
}
}
} else {
applyTexel(centerTexel, 1.0);
}
int frontColorIndex = 999;
int maxColorIndex = 0;
for (int i = 0; i <= maxHighlightLevel; ++i) {
if (colorWeight[i] > 0.0){
frontColorIndex = min(frontColorIndex, i);
maxColorIndex = max(maxColorIndex, i);
}
}
if (frontColorIndex == 999){
fragColor = vec4(0.0);
return;
}
vec4 accumulatedColor = vec4(0.0);
for (int curColorIndex = frontColorIndex; curColorIndex <= maxColorIndex; ++curColorIndex) {
float curColorWeight = colorWeight[curColorIndex];
if (curColorWeight <= 0.01){
continue;
}
uint vc = readLevelBits(centerTexel, curColorIndex);
bool centerFilled = (vc & 1u) == 1u;
bool centerOccluded = (vc & 3u) == 3u;
float curColorOcclusion = colorOcclusion[curColorIndex];
bool occluded = centerFilled ? centerOccluded : curColorOcclusion > 0.5 * curColorWeight;
int colorChannel = centerFilled ? 0 : 1;
vec4 colorBase = texelFetch(highlightOptionsTexture, ivec2(curColorIndex, colorChannel), 0);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, 0.03, curColorWeight);
float intensity = colorBase.a * occlusionFactor * outlineFactor;
vec3 currentColor = colorBase.rgb;
float a0 = accumulatedColor.a;
float a1 = intensity;
float alpha = clamp(a0 + a1 - a0 * a1, 0.0, 1.0);
if (alpha > 0.001){
vec3 blendedColor = ((1.0 - a1) * a0 * accumulatedColor.rgb + a1 * currentColor) / alpha;
accumulatedColor = vec4(blendedColor, alpha);
}
}
fragColor = accumulatedColor;`),e}const bo=Object.freeze(Object.defineProperty({__proto__:null,build:Ar},Symbol.toStringTag,{value:"Module"}));let ir=class extends K{constructor(t,r){super(t,r,new J(bo,()=>ee(()=>Promise.resolve().then(()=>Xo),void 0,import.meta.url)))}initializePipeline(){return Q({blending:wt,colorWrite:X})}},or=class extends K{constructor(t,r){super(t,r,new J(wo,()=>ee(()=>Promise.resolve().then(()=>Yo),void 0,import.meta.url)))}initializePipeline(){return Q({colorWrite:X})}},So=class extends Me{constructor(){super(...arguments),this.occludedFactor=Li,this.verticalCellCount=0,this.horizontalCellCount=0,this.highlightLevel=0,this.pixelRatio=1}};function Er(){const e=new te;e.include(Je),e.include(yt);const{fragment:t}=e;return e.outputs.add("fragSingleHighlight","vec2",0),t.uniforms.add(new F("highlightTexture",r=>r.highlightTexture),new Xe("highlightLevel",r=>r.highlightLevel)),t.main.add(d`ivec2 iuv = ivec2(gl_FragCoord.xy);
vec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),e}const To=Object.freeze(Object.defineProperty({__proto__:null,build:Er},Symbol.toStringTag,{value:"Module"}));let ar=class extends K{constructor(t,r){super(t,r,new J(To,()=>ee(()=>Promise.resolve().then(()=>Ko),void 0,import.meta.url)))}initializePipeline(){return Q({colorWrite:X})}};function Lr(){const e=new te;e.include(Je);const{fragment:t}=e;return t.uniforms.add(new F("blurInput",r=>r.singleHighlightBlurTexture),new wr("blurSize",r=>r.blurSize),new F("highlightTexture",r=>r.highlightTexture),new F("highlightOptionsTexture",r=>r.highlightOptionsTexture),new Xe("highlightLevel",r=>r.highlightLevel),new Pe("occludedIntensityFactor",r=>r.occludedFactor)),t.constants.add("inner","float",1-(De-Tt)/De),e.include(yt),t.main.add(d`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
vec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),e}const Oo=Object.freeze(Object.defineProperty({__proto__:null,build:Lr},Symbol.toStringTag,{value:"Module"}));let sr=class extends K{constructor(t,r){super(t,r,new J(Oo,()=>ee(()=>Promise.resolve().then(()=>Jo),void 0,import.meta.url)))}initializePipeline(){return Q({blending:wt,colorWrite:X})}},Ot=class extends Me{constructor(){super(...arguments),this.blurSize=x()}};function Hr(){const e=new te;return e.include(Je),e.outputs.add("fragSingleHighlight","vec2",0),e.fragment.uniforms.add(new wr("blurSize",t=>t.blurSize),new br("blurInput",t=>t.blurInput)).main.add(d`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragSingleHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragSingleHighlight = sum;
}`),e}const Po=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:Ot,build:Hr},Symbol.toStringTag,{value:"Module"}));let nr=class extends K{constructor(t,r){super(t,r,new J(Po,()=>ee(()=>Promise.resolve().then(()=>ea),void 0,import.meta.url)))}initializePipeline(){return Q({colorWrite:X})}};const Ro=[],xs=[new Be(qe.POSITION,3,Re.FLOAT,0,12)],ys=[new Be(qe.POSITION,2,Re.FLOAT,0,8)],Cs=[new Be(qe.POSITION,2,Re.FLOAT,0,16),new Be(qe.UV0,2,Re.FLOAT,8,16)];let He=class extends $i{constructor(){super(...arguments),this.produces=lt.HIGHLIGHTS,this.consumes={required:[lt.HIGHLIGHTS,"highlights"]},this._useMultipleHighlights=!1,this._downsampleDrawParameters=new St,this._passParameters=new So,this._singleHighlightBlurDrawParameters=new Ot,this._grid=new Do}initialize(){this.addHandles([le(()=>this._updateOptionsTexture(),()=>{},gt)])}destroy(){this._grid.coverage=Te(this._grid.coverage),this._grid.vao=Ge(this._grid.vao),this._passParameters.highlightOptionsTexture=Te(this._passParameters.highlightOptionsTexture)}_updateOptionsTexture(){if(this._passParameters.highlightOptionsTexture==null){const e=new Ir(16,2);e.internalFormat=Hi.RGBA,e.samplingMode=Rr.NEAREST,this._passParameters.highlightOptionsTexture=new fe(this.renderingContext,e,null)}this._passParameters.highlightOptionsTexture.setData(Io(this.view.state.highlights)),this.requestRender(we.UPDATE)}precompile(){this.techniques.precompile(or),this._useMultipleHighlights?this.techniques.precompile(ir):(this.techniques.precompile(ar),this.techniques.precompile(nr),this.techniques.precompile(sr))}render(e){const t=e.find(({name:m})=>m===lt.HIGHLIGHTS),{techniques:r,bindParameters:i,_passParameters:o,renderingContext:a}=this;if(!i.decorations)return t;const s=r.get(or);if(!s.compiled)return this.requestRender(we.UPDATE),t;const n=e.find(({name:m})=>m==="highlights").getTexture(),l=()=>{var V;this._gridUpdateResources(n);const m=this._gridComputeCoverage(s,n,i),{horizontalCellCount:g,verticalCellCount:b}=m;return o.horizontalCellCount=g,o.verticalCellCount=b,o.coverageTexture=(V=m.coverage)==null?void 0:V.getTexture(),m},u=m=>{const g=m.verticalCellCount*m.horizontalCellCount;a.bindVAO(m.vao),a.drawElementsInstanced(Vi.TRIANGLES,6,Re.UNSIGNED_BYTE,0,g)},{camera:f}=i,y=()=>{a.bindFramebuffer(t.fbo),a.setViewport4fv(f.fullViewport)};return this._useMultipleHighlights?this._renderMultiple(n,l,u,y):this._renderSingle(n,l,u,y),o.highlightTexture=null,o.coverageTexture=null,t}_renderMultiple(e,t,r,i){const{techniques:o,bindParameters:a,_passParameters:s,renderingContext:n}=this,l=o.get(ir);if(!l.compiled)return void this.requestRender(we.UPDATE);const u=t();s.highlightTexture=e,s.pixelRatio=a.camera.pixelRatio,n.bindTechnique(l,a,s),i(),r(u)}_renderSingle(e,t,r,i){var Dt;const{fboCache:o,techniques:a,bindParameters:s,_passParameters:n,renderingContext:l}=this,u=a.get(ar),f=a.get(nr),y=a.get(sr);if(!y.compiled||!f.compiled||!u.compiled)return void this.requestRender(we.UPDATE);const m=t(),{width:g,height:b}=e.descriptor;n.highlightTexture=e;const{camera:V}=s,{fullWidth:me,fullHeight:et,pixelRatio:$e}=V,ve=Math.ceil(me/$e),_e=Math.ceil(et/$e),{_singleHighlightBlurDrawParameters:v}=this,S=this.view._stage.renderView.renderer,{highlights:Rt}=s;for(let Fe=0;Fe<Rt.length;++Fe){const{name:Nr}=Rt[Fe];if(!S.hasHighlightOptions(Nr))continue;n.highlightLevel=Fe,l.setClearColor(0,0,0,0);const tt=o.acquire(g,b,"single highlight",H.RG);l.bindFramebuffer(tt.fbo),l.setViewport(0,0,g,b),l.clear(Y.COLOR),l.bindTechnique(u,s,n),r(m),v.blurInput=tt.getTexture(),k(v.blurSize,1/ve,0);const Ae=o.acquire(ve,_e,"single highlight blur h",H.RG);l.unbindTexture((Dt=Ae.fbo)==null?void 0:Dt.colorTexture),l.bindFramebuffer(Ae.fbo),l.setViewport(0,0,ve,_e),l.clear(Y.COLOR),l.bindTechnique(f,s,n,v),r(m),tt.release(),k(v.blurSize,0,1/_e),n.singleHighlightBlurTexture=Ae.getTexture(),i(),l.bindTechnique(y,s,n,v),r(m),Ae.release()}}_gridUpdateResources(e){const t=this._grid,{width:r,height:i}=e.descriptor;if(t.horizontalCellCount=Math.ceil(r/G),t.verticalCellCount=Math.ceil(i/G),t.vao)return;const o=this.renderingContext,a=Gt.createIndex(o,Ut.STATIC_DRAW,Fo);t.vao=new zi(o,ui,new Map([["geometry",Ro]]),new Map([["geometry",Gt.createVertex(o,Ut.STATIC_DRAW)]]),a)}_gridComputeCoverage(e,t,r){var u;const i=this.renderingContext,o=this._grid,a=t.descriptor,s=Math.ceil(a.width/G),n=Math.ceil(a.height/G);this._downsampleDrawParameters.input=t,(u=o.coverage)==null||u.release();const l=this.fboCache.acquire(s,n,"highlight coverage",H.RG);return o.coverage=l,i.bindFramebuffer(l.fbo),i.bindTechnique(e,r,this._passParameters,this._downsampleDrawParameters),i.setViewport(0,0,s,n),i.screen.draw(),o}get test(){}};O([$()],He.prototype,"produces",void 0),O([$()],He.prototype,"consumes",void 0),He=O([vt("esri.views.3d.webgl-engine.effects.highlight.Highlight")],He);class Do{constructor(){this.coverage=null,this.vao=null,this.verticalCellCount=0,this.horizontalCellCount=0,this.viewportWidth=0,this.viewportHeight=0}}function Io(e){const t=new Uint8Array(128);let r=0;for(const i of e){const o=4*r,a=4*r+64;++r;const{color:s}=i,n=i.haloColor??s;t[o+0]=s.r,t[o+1]=s.g,t[o+2]=s.b,t[o+3]=i.fillOpacity*s.a*255,t[a+0]=n.r,t[a+1]=n.g,t[a+2]=n.b,t[a+3]=i.haloOpacity*n.a*255}return t}let Mo=0;function $o(e){let t=0;for(const i of e){const{name:o}=i;t+=o.length;const{color:a,fillOpacity:s,haloColor:n,haloOpacity:l}=i;t+=a.r+a.g+a.b+a.a+s,t+=n?n.r+n.g+n.b+n.a+l:0}const r=e.at(0);if(r){const{shadowOpacity:i,shadowDifference:o,shadowColor:a}=r;t+=i+o+a.r+a.g+a.b+a.a}return Mo+++(t>=0?0:1)}const Fo=new Uint8Array([0,1,2,2,1,3]);function Ao(e,t,r,i,o,a=0){const s=i.highlights,n=s.length>1?t.acquire(r.width,r.height,"highlight mix",H.RG):null;if(n){const u=e.getBoundFramebufferObject();e.bindFramebuffer(n.fbo),e.clearFramebuffer(wi),e.bindFramebuffer(u)}const l=n==null?void 0:n.getTexture();i.highlightMixTexture=l,k(i.highlightMixOrigin,a,0),s.forEach((u,f)=>{f>0&&(e.bindTexture(l,fe.TEXTURE_UNIT_FOR_UPDATES),e.gl.copyTexSubImage2D(Dr.TEXTURE_2D,0,0,0,a,0,r.width,r.height),e.bindTexture(null,fe.TEXTURE_UNIT_FOR_UPDATES)),e.clear(Y.DEPTH),i.highlightLevel=f,o()}),i.highlightLevel=null,i.highlightMixTexture=null,n==null||n.release()}let Eo=class{constructor(t,r,i,o){this._textures=t,this._techniques=r,this.materialChanged=i,this.requestRender=o,this._id2glMaterialRef=new ji}dispose(){this._textures.destroy()}acquire(t,r,i){this._ownMaterial(t);const o=t.produces.get(r);if(!(o!=null&&o(i)))return null;let a=this._id2glMaterialRef.get(i,t.id);if(a==null){const s=t.createGLMaterial({material:t,techniques:this._techniques,textures:this._textures,output:i});a=new Lo(s),this._id2glMaterialRef.set(i,t.id,a)}return a.ref(),a.glMaterial}release(t,r){const i=this._id2glMaterialRef.get(r,t.id);i!=null&&(i.unref(),i.referenced||(Ge(i.glMaterial),this._id2glMaterialRef.delete(r,t.id)))}_ownMaterial(t){t.repository&&t.repository!==this&&Ur.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),t.repository=this}},Lo=class{constructor(t){this.glMaterial=t,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,ge(this._refCnt>=0)}get referenced(){return this._refCnt>0}};var Qe;(function(e){e[e.Immediate=0]="Immediate",e[e.FadeWithWeather=1]="FadeWithWeather"})(Qe||(Qe={}));let Ss=class{constructor(t,r){this.width=t,this.height=r}},Ho=class{constructor(t){this.shadowMap=t,this.slot=N.OPAQUE_MATERIAL,this.slicePlane=null,this.hasOccludees=!1,this.enableFillLights=!0,this.oitPass=Tr.NONE,this.alignPixelEnabled=!1,this.decorations=!0,this.overlayStretch=1,this.viewshedEnabled=!1,this._camera=new Ye,this._inverseViewport=x(),this._oldLighting=new at,this._newLighting=new at,this._fadedLighting=new at,this._lighting=this._newLighting,this.ssr=new Vo,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.highlights=new Array,this.highlightOrderMap=new Map,this.highlightMixOrigin=x(),this.highlightMixTexture=null,this.hudRenderStyle=Wi.Occluded,this.hudOccludedFragmentOpacity=1,this.clouds=new lo,this.shadowHighlightsVisible=!1}get camera(){return this._camera}set camera(t){this._camera=t,this._inverseViewport[0]=1/t.fullViewport[2],this._inverseViewport[1]=1/t.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}fadeLighting(){switch(this.clouds.fadeFactor){case 0:this._lighting=this._oldLighting;break;default:this._fadedLighting.lerpLighting(this._oldLighting,this._newLighting,this.clouds.fadeFactor),this._lighting=this._fadedLighting;break;case 1:this._lighting=this._newLighting,this._oldLighting.copyFrom(this._newLighting)}}updateLighting(t,r,i,o){this._oldLighting.copyFrom(this.lighting),this._newLighting.noonFactor=r,this._newLighting.globalFactor=i,this._newLighting.set(t),o===Qe.FadeWithWeather&&this.clouds.requestFade(),this.fadeLighting()}get highlight(){return this.highlightLevel==null?null:this.highlights[this.highlightLevel]}};class Vo{constructor(){this.fadeFactor=1,this.reprojectionMatrix=A()}}class Vr{constructor(t,r){this.rctx=t,this.lastFrameCamera=new Ye,this.output=R.Color,this.renderOccludedMask=Ue,this.bind=new Ho(r),this.bind.alignPixelEnabled=!0}}class Ps extends Vr{constructor(t,r,i){super(t,r),this.techniques=i,this.time=Gr(0)}}const Ue=je.Occlude|je.OccludeAndTransparent|je.OccludeAndTransparentStencil;let be=class extends Ye{constructor(){super(...arguments),this._projectionMatrix=A()}get projectionMatrix(){return this._projectionMatrix}};O([$()],be.prototype,"_projectionMatrix",void 0),O([$({readOnly:!0})],be.prototype,"projectionMatrix",null),be=O([vt("esri.views.3d.webgl-engine.lib.CascadeCamera")],be);var ft;(function(e){e[e.Highlight=0]="Highlight",e[e.ExcludeHighlight=1]="ExcludeHighlight"})(ft||(ft={}));class Ve{constructor(){this.camera=new be,this.lightMat=A()}}class zo{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}}class jo{constructor(t,r){this._fbos=t,this._viewingMode=r,this._enabled=!1,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new zo,this._projectionView=A(),this._projectionViewInverse=A(),this._modelViewLight=A(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=Ke(),this._cascades=[new Ve,new Ve,new Ve,new Ve],this._lastOrigin=null,this._maxTextureWidth=Math.min(kr("esri-mobile")?4096:16384,t.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}get depthTexture(){var t;return(t=this._handle)==null?void 0:t.getTexture()}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return kt(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}disposeOffscreenBuffers(){this._handle=Te(this._handle),this._discardSnapshots()}set maxCascades(t){this.settings.maxNumCascadesHighQuality=Or(Math.floor(t),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(t){this._enabled=t,t||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&this.depthTexture!=null}get cascades(){for(let t=0;t<this._numCascades;++t)ht[t]=this._cascades[t];return ht.length=this._numCascades,ht}start(t,r,i,o,a){ge(this.enabled);const{near:s,far:n}=qo(i);this._computeCascadeDistances(s,n,o),this._textureHeight=this._computeTextureHeight(t,a,o),this._setupMatrices(t,r);const{viewMatrix:l,projectionMatrix:u}=t;for(let f=0;f<this._numCascades;++f)this._constructCascade(f,u,l,r);this._lastOrigin=null,this.clear()}finish(){var t;ge(this.enabled),(t=this._handle)==null||t.detachDepth()}getShadowMapMatrices(t){if(!this._lastOrigin||!si(t,this._lastOrigin)){this._lastOrigin=this._lastOrigin||Ie(),j(this._lastOrigin,t);for(let r=0;r<this._numCascades;++r){$t(gr,this._cascades[r].lightMat,t);for(let i=0;i<16;++i)pr[16*r+i]=gr[i]}}return pr}moveSnapshot(t){var r,i;ge(this.enabled),(r=this._handle)==null||r.detachDepth(),(i=this._snapshots[t])==null||i.release(),this._snapshots[t]=this._handle,this._handle=null,this.clear()}copySnapshot(t){var l,u,f,y;const r=(u=(l=this._handle)==null?void 0:l.getTexture())==null?void 0:u.descriptor;if(!this.enabled||!r)return;(f=this._snapshots[t])==null||f.release();const{width:i,height:o}=r,a=t===ft.Highlight?"shadow highlight snapshot":"shadow no highlight snapshot";this._snapshots[t]=this._fbos.acquire(i,o,a,H.RGBA4);const s=this._fbos.rctx;this._bindFbo();const n=s.bindTexture((y=this._snapshots[t])==null?void 0:y.getTexture(),fe.TEXTURE_UNIT_FOR_UPDATES);s.gl.copyTexSubImage2D(Dr.TEXTURE_2D,0,0,0,0,0,i,o),s.bindTexture(n,fe.TEXTURE_UNIT_FOR_UPDATES)}getSnapshot(t){var r;return this.enabled?(r=this._snapshots[t])==null?void 0:r.getTexture():null}clear(){const t=this._fbos.rctx;this._ensureFbo(),this._bindFbo(),t.setClearColor(1,1,1,1),t.clear(Y.COLOR|Y.DEPTH)}_computeTextureHeight(t,r,i){const o=Math.min(window.devicePixelRatio,r)/t.pixelRatio,a=i?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality,s=Oi(Math.floor(Math.max(t.fullWidth,t.fullHeight)*o*a)),n=Math.min(this._maxTextureWidth,this._numCascades*s);return Pi(n/this._numCascades)}_ensureFbo(){var t,r,i,o,a;((r=(t=this._handle)==null?void 0:t.fbo)==null?void 0:r.width)===this._textureWidth&&((i=this._handle)==null?void 0:i.fbo.height)===this._textureHeight||((o=this._handle)==null||o.release(),this._handle=this._fbos.acquire(this._textureWidth,this._textureHeight,"shadow map",H.RGBA4)),(a=this._handle)==null||a.acquireDepth(vi.DEPTH16_BUFFER)}_discardSnapshot(t){this._snapshots[t]=Te(this._snapshots[t])}_discardSnapshots(){for(let t=0;t<this._snapshots.length;++t)this._discardSnapshot(t);this._snapshots.length=0}_bindFbo(){var t;this._fbos.rctx.bindFramebuffer((t=this._handle)==null?void 0:t.fbo)}_constructCascade(t,r,i,o){const a=this._cascades[t],s=-this._cascadeDistances[t],n=-this._cascadeDistances[t+1],l=(r[10]*s+r[14])/Math.abs(r[11]*s+r[15]),u=(r[10]*n+r[14])/Math.abs(r[11]*n+r[15]);ge(l<u);for(let g=0;g<8;++g){kt(lr,g%4==0||g%4==3?-1:1,g%4==0||g%4==1?-1:1,g<4?l:u,1);const b=I[g];Gi(b,lr,this._projectionViewInverse),b[0]/=b[3],b[1]/=b[3],b[2]/=b[3]}ni(ct,I[0]),a.camera.viewMatrix=$t(No,this._modelViewLight,ct);for(let g=0;g<8;++g)_r(I[g],I[g],a.camera.viewMatrix);let f=I[0][2],y=I[0][2];for(let g=1;g<8;++g)f=Math.min(f,I[g][2]),y=Math.max(y,I[g][2]);f-=200,y+=200,a.camera.near=-y,a.camera.far=-f,ko(i,o,f,y,a.camera),pt(a.lightMat,a.camera.projectionMatrix,a.camera.viewMatrix);const m=this._textureHeight;a.camera.viewport=[t*m,0,m,m]}_setupMatrices(t,r){pt(this._projectionView,t.projectionMatrix,t.viewMatrix),Xr(this._projectionViewInverse,this._projectionView);const i=this._viewingMode===ki.Global?t.eye:xr(ct,0,0,1);Yr(this._modelViewLight,[0,0,0],[-r[0],-r[1],-r[2]],i)}_computeCascadeDistances(t,r,i){const o=i?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor(Ni(r/t,4)),o);const a=(r-t)/this._numCascades,s=(r/t)**(1/this._numCascades);let n=t,l=t;for(let u=0;u<this._numCascades+1;++u)this._cascadeDistances[u]=Ri(n,l,this.settings.splitSchemeLambda),n*=s,l+=a}get test(){}}const No=A(),lr=Ke(),I=[];for(let e=0;e<8;++e)I.push(Ke());const cr=x(),hr=x(),Wo=x(),dr=x(),ur=x(),ct=Ie(),ht=[],gr=A(),pr=Z.concat(Z,Z,Z,Z),D=x(),ae=x(),B=[x(),x(),x(),x()],C=x(),dt=x(),z=x(),Ce=x(),se=x(),ne=x(),ze=x();function Uo(e,t,r,i,o,a,s,n){k(D,0,0);for(let v=0;v<4;++v)q(D,D,e[v]);ce(D,D,.25),k(ae,0,0);for(let v=4;v<8;++v)q(ae,ae,e[v]);ce(ae,ae,.25),ye(B[0],e[4],e[5],.5),ye(B[1],e[5],e[6],.5),ye(B[2],e[6],e[7],.5),ye(B[3],e[7],e[4],.5);let l=0,u=Nt(B[0],D);for(let v=1;v<4;++v){const S=Nt(B[v],D);S<u&&(u=S,l=v)}he(C,B[l],e[l+4]);const f=C[0];let y,m;C[0]=-C[1],C[1]=f,he(dt,ae,D),w(dt,C)<0&&Ai(C,C),ye(C,C,dt,r),Wt(C,C),y=m=w(he(z,e[0],D),C);for(let v=1;v<8;++v){const S=w(he(z,e[v],D),C);S<y?y=S:S>m&&(m=S)}Ei(i,D),ce(z,C,y-t),q(i,i,z);let g=-1,b=1,V=0,me=0;for(let v=0;v<8;++v){he(Ce,e[v],i),Wt(Ce,Ce);const S=C[0]*Ce[1]-C[1]*Ce[0];S>0?S>g&&(g=S,V=v):S<b&&(b=S,me=v)}re(g>0,"leftArea"),re(b<0,"rightArea"),ce(se,C,y),q(se,se,D),ce(ne,C,m),q(ne,ne,D),ze[0]=-C[1],ze[1]=C[0];const et=Le(i,e[me],ne,q(z,ne,ze),1,o),$e=Le(i,e[V],ne,z,1,a),ve=Le(i,e[V],se,q(z,se,ze),1,s),_e=Le(i,e[me],se,z,1,n);re(et,"rayRay"),re($e,"rayRay"),re(ve,"rayRay"),re(_e,"rayRay")}function h(e,t){return 3*t+e}const fr=x();function P(e,t){return k(fr,e[t],e[t+3]),fr}const T=x(),c=Ui();function Go(e,t,r,i,o){he(T,r,i),ce(T,T,.5),c[0]=T[0],c[1]=T[1],c[2]=0,c[3]=T[1],c[4]=-T[0],c[5]=0,c[6]=T[0]*T[0]+T[1]*T[1],c[7]=T[0]*T[1]-T[1]*T[0],c[8]=1,c[h(0,2)]=-w(P(c,0),e),c[h(1,2)]=-w(P(c,1),e);let a=w(P(c,0),r)+c[h(0,2)],s=w(P(c,1),r)+c[h(1,2)],n=w(P(c,0),i)+c[h(0,2)],l=w(P(c,1),i)+c[h(1,2)];a=-(a+n)/(s+l),c[h(0,0)]+=c[h(1,0)]*a,c[h(0,1)]+=c[h(1,1)]*a,c[h(0,2)]+=c[h(1,2)]*a,a=1/(w(P(c,0),r)+c[h(0,2)]),s=1/(w(P(c,1),r)+c[h(1,2)]),c[h(0,0)]*=a,c[h(0,1)]*=a,c[h(0,2)]*=a,c[h(1,0)]*=s,c[h(1,1)]*=s,c[h(1,2)]*=s,c[h(2,0)]=c[h(1,0)],c[h(2,1)]=c[h(1,1)],c[h(2,2)]=c[h(1,2)],c[h(1,2)]+=1,a=w(P(c,1),t)+c[h(1,2)],s=w(P(c,2),t)+c[h(2,2)],n=w(P(c,1),r)+c[h(1,2)],l=w(P(c,2),r)+c[h(2,2)],a=-.5*(a/s+n/l),c[h(1,0)]+=c[h(2,0)]*a,c[h(1,1)]+=c[h(2,1)]*a,c[h(1,2)]+=c[h(2,2)]*a,a=w(P(c,1),t)+c[h(1,2)],s=w(P(c,2),t)+c[h(2,2)],n=-s/a,c[h(1,0)]*=n,c[h(1,1)]*=n,c[h(1,2)]*=n,o[0]=c[0],o[1]=c[1],o[2]=0,o[3]=c[2],o[4]=c[3],o[5]=c[4],o[6]=0,o[7]=c[5],o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=c[6],o[13]=c[7],o[14]=0,o[15]=c[8]}function ko(e,t,r,i,o){const a=1/I[0][3],s=1/I[4][3];ge(a<s);let n=a+Math.sqrt(a*s);const l=Math.sin(Di(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));n/=l,Uo(I,n,l,cr,hr,Wo,dr,ur),Go(cr,hr,dr,ur,o.projectionMatrix),o.projectionMatrix[10]=2/(r-i),o.projectionMatrix[14]=-(r+i)/(r-i)}function qo(e){let{near:t,far:r}=e;return t<2&&(t=2),r<2&&(r=2),t>=r&&(t=2,r=4),{near:t,far:r}}class mr extends K{constructor(t,r){super(t,r,new J(Co,()=>ee(()=>Promise.resolve().then(()=>ta),void 0,import.meta.url)))}initializePipeline(t){return t.hasAlpha?Q({blending:wt,colorWrite:X}):Q({colorWrite:X})}}class zr extends qi{constructor(){super(...arguments),this.hasAlpha=!1}}O([Bi()],zr.prototype,"hasAlpha",void 0);class Pt extends Me{constructor(){super(...arguments),this.overlayIndex=M.INNER,this.opacity=1}}function jr(){const e=new te;return e.include(Ct),e.fragment.uniforms.add(new F("tex",t=>t.texture)),e.fragment.uniforms.add(new Xe("overlayIdx",t=>t.overlayIndex)),e.fragment.uniforms.add(new Pe("opacity",t=>t.opacity)),e.fragment.main.add(d`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`),e}const Bo=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:Pt,build:jr},Symbol.toStringTag,{value:"Module"}));class vr extends K{constructor(t,r){super(t,r,new J(Bo,()=>ee(()=>Promise.resolve().then(()=>ra),void 0,import.meta.url)))}}let L=class extends Fi{constructor(e){super(e),this._overlays=null,this._renderTargets=null,this._overlayParameters=new Pt,this.hasHighlights=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new qr,this._passParameters=new bt,this._materials=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new Ye,this.events=new Zr,this.longitudeCyclical=null,this.produces=new Map([[N.DRAPED_MATERIAL,t=>t!==R.Highlight||this.hasHighlights],[N.DRAPED_WATER,()=>this._hasWater]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const e=this._view,t=e._stage,r=t.renderer.fboCache,{waterTextures:i,textures:o}=t.renderView;this._renderContext=new Vr(this._rctx,new jo(r,e.state.viewingMode)),this.addHandles([le(()=>i.updating,()=>this.events.emit("content-changed"),It),le(()=>this.spatialReference,n=>this._localOriginFactory=new hi(n),It),Qr(()=>e.allLayerViews,"after-changes",()=>this._sortedDrapeSourceRenderersDirty=!0),le(()=>$o(e.state.highlights),()=>this._sortedDrapeSourceRenderersDirty=!0,gt),le(()=>e.state.highlights,n=>{this._bindParameters.highlights=n,this._bindParameters.highlightOrderMap=e.state.highlightOrderMap,this._updateHighlights()},gt),e.resourceController.scheduler.registerTask(Qi.STAGE,this)]),this._materials=new Eo(o,this._techniques,()=>{this.notifyChange("rendersOccludedDraped"),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")},()=>this.events.emit("content-changed"));const{_bindParameters:a,_camera:s}=this;s.near=1,s.far=1e4,s.relativeElevation=null,a.slot=N.DRAPED_MATERIAL,a.mainDepth=null,a.camera=s,a.oitPass=Tr.NONE,a.updateLighting([new _i(li())],0,0,Qe.Immediate)}destroy(){this._renderers.forEach(e=>e.destroy()),this._renderers.clear(),this._passParameters.texture=Ge(this._passParameters.texture),this.disposeOverlays()}get _bindParameters(){return this._renderContext.bind}get _rctx(){return this._stage.renderView.renderingContext}get _view(){return this.parent.view}get _stage(){return this.parent.view._stage}get spatialReference(){return this.parent.spatialReference}get _techniques(){return this._stage.renderView.techniques}get rctx(){return this._rctx}get materials(){return this._materials}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}get pluginContext(){return this._pluginContext}initializeRenderContext(e){this._pluginContext=e,this._techniques.precompile(vr)}uninitializeRenderContext(){}acquireTechniques(){return[]}render(){}get updating(){return this._sortedDrapeSourceRenderersDirty||xe(this._renderers,e=>e.updating)}get hasOverlays(){return this._overlays!=null&&this._renderTargets!=null}getMaterialRenderer(e){for(const t of this._renderers.values()){const r=t.getMaterialRenderer(e);if(r)return r}return null}get layers(){return this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers(),this._sortedRenderers.map(e=>e.drapeSource.layer).filter(e=>!!e)}_updateHighlights(){const e=this._view.state;this._renderers.forEach(t=>t.updateHighlights(e.highlightOrderMap))}createDrapeSourceRenderer(e,t,r){const i=this._renderers.get(e);i!=null&&i.destroy();const o=new t({...r,rendererContext:this,drapeSource:e});return this._renderers.set(e,o),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this.addHandles(le(()=>e.fullOpacity,()=>this.events.emit("content-changed")),e),o}removeDrapeSourceRenderer(e){if(e==null)return;const t=this._renderers.get(e);t!=null&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this.removeHandles(e),t.destroy())}computeValidity(){var e;return((e=this._renderTargets)==null?void 0:e.computeValidity())??0}releaseRenderTargets(){var e;(e=this._renderTargets)==null||e.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(e){this._hasTargetWithoutRasterImage=!!this._overlays&&rt(e,t=>t.drapeTargetType===di.WithoutRasterImage)}ensureDrapeSources(e){this._overlays?(this._hasDrapedFeatureSource=rt(e,t=>t.drapeSourceType===Ee.Features),this._hasDrapedRasterSource=rt(e,t=>t.drapeSourceType===Ee.RasterImage)):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(e,t,r=this._bindParameters.overlayStretch){this._overlays==null&&(this._renderTargets=new io(this._stage.renderer.fboCache),this._overlays=[new Xt,new Xt]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t),this._bindParameters.overlayStretch=r}disposeOverlays(){this._overlays=null,this._renderTargets=Ge(this._renderTargets),this.events.emit("textures-disposed")}getTexture(e){var t,r;if(e!=null)return e===_.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?(t=this._renderTargets)==null?void 0:t.getTexture(_.Color):(r=this._renderTargets)==null?void 0:r.getTexture(e)}get running(){return this.updating}runTask(e){this._processDrapeSources(e,()=>!0)}_processDrapeSources(e,t){let r=!1;for(const[i,o]of this._renderers){if(e.done)break;(i.destroyed||t(i))&&o.commitChanges(this._view.state.highlightOrderMap)&&(r=!0,e.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,r=!0,this._updateSortedDrapeSourceRenderers()),r&&(this._overlays!=null&&this._renderers.size===0&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=xe(this._renderers,i=>i.hasHighlights),this.notifyChange("rendersOccludedDraped"))}hasHighlightOptions(e){return xe(this._renderers,t=>t.hasHighlightOptions(e))}processSyncDrapeSources(){this._processDrapeSources(Xi,e=>e.updatePolicy===Zi.SYNC)}get isEmpty(){return!it.OVERLAY_DRAW_DEBUG_TEXTURE&&!xe(this._renderers,e=>!e.isEmpty)}get hasWater(){const e=xe(this._renderers,t=>t.hasWater);return e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water")),this._hasWater}get rendersOccludedDraped(){const e=this._renderContext.renderOccludedMask;this._renderContext.renderOccludedMask=ut,++this._techniques.precompiling;const t=this._sortedRenderers.some(({renderer:r})=>r.precompile(this._renderContext));return--this._techniques.precompiling,this._renderContext.renderOccludedMask=e,t}renders(e){if(it.OVERLAY_DRAW_DEBUG_TEXTURE&&e!==_.Occluded&&e!==_.Highlight)return!0;++this._techniques.precompiling;const t=this._sortedRenderers.some(({renderer:r})=>r.precompile(this._renderContext));return--this._techniques.precompiling,t}get mode(){var e;return this.isEmpty?pe.Disabled:this.hasWater&&this.renders(_.WaterNormal)?pe.EnabledWithWater:(e=this._renderTargets)!=null&&e.getTexture(_.Color)?pe.Enabled:pe.Disabled}updateAnimation(e){let t=!1;return this._renderers.forEach(r=>t=r.updateAnimation(e)||t),t&&this.parent.requestRender(we.BACKGROUND),t}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}precompileShaders(e){if(this._renderTargets){this._bindParameters.alignPixelEnabled=e.alignPixelEnabled,++this._techniques.precompiling;for(const t of this._renderTargets.targets){if(t.content===_.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const r=t.output;this._renderContext.output=r,this._bindParameters.slot=r===R.Normal?N.DRAPED_WATER:N.DRAPED_MATERIAL,t.content===_.Occluded&&(this._renderContext.renderOccludedMask=ut),this._sortedRenderers.forAll(({drapeSource:i,renderer:o})=>{t.content===_.ColorNoRasterImage&&i.drapeSourceType===Ee.RasterImage||o.precompile(this._renderContext)}),this._renderContext.renderOccludedMask=Ue}--this._techniques.precompiling}}drawOverlays(e){if(this._overlays&&this._renderTargets){for(const t of this._overlays)this.longitudeCyclical?t.setupGeometryViewsCyclical(this.longitudeCyclical):t.setupGeometryView();this._bindParameters.alignPixelEnabled=e.alignPixelEnabled;for(const t of this._renderTargets.targets){if(t.content===_.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const r=this._drawTarget(M.INNER,t),i=this._drawTarget(M.OUTER,t);(r||i)&&t.fbo.generateMipMap()}}}_drawTarget(e,t){const r=this._overlays[e],i=r.canvasGeometries;if(i.numViews===0)return!1;const o=this._view.state.contentPixelRatio;this._screenToWorldRatio=o*r.mapUnitsPerPixel/this._bindParameters.overlayStretch;const a=t.output;if(this.isEmpty||a===R.Normal&&!this.hasWater||!r.hasSomeSizedView())return!1;const{_rctx:s,_camera:n,_renderContext:l,_bindParameters:u}=this;if(n.pixelRatio=r.pixelRatio*o,l.output=a,u.screenToWorldRatio=this._screenToWorldRatio,u.screenToPCSRatio=this._screenToWorldRatio*this.parent.worldToPCSRatio,u.slot=a===R.Normal?N.DRAPED_WATER:N.DRAPED_MATERIAL,t.content===_.Occluded&&(l.renderOccludedMask=ut),!this.renders(t.content))return l.renderOccludedMask=Ue,!1;const{resolution:f}=r,y=e===M.INNER?0:f;if(s.setViewport(y,0,f,f),this._bindTargetFBO(t),e===M.INNER&&(s.setClearColor(0,0,0,0),s.clear(Y.COLOR)),it.OVERLAY_DRAW_DEBUG_TEXTURE&&t.content!==_.Occluded&&t.content!==_.Highlight){this._techniques.precompile(mr,mt);const m=this._techniques.get(mr,mt);for(let g=0;g<i.numViews;g++)this._setViewParameters(i.extents[g],r),this._ensureDebugPatternResources(r.resolution,Qo[e]),s.bindTechnique(m,u,this._passParameters),s.screen.draw()}if(t.output===R.Highlight){const{fboCache:m}=this._stage.renderer,g=this._resolution;this._bindTargetFBO(t),Ao(s,m,{width:g,height:g},u,()=>this._renderAllGeometry(e,t),y)}else this._renderAllGeometry(e,t);return s.bindFramebuffer(null),l.renderOccludedMask=Ue,!0}_renderAllGeometry(e,t){const r=this._overlays[e],i=r.canvasGeometries;this._sortedRenderers.forAll(({drapeSource:o,renderer:a})=>{if(t.content===_.ColorNoRasterImage&&o.drapeSourceType===Ee.RasterImage)return;const{fullOpacity:s}=o,n=s!=null&&s<1&&t.output===R.Color&&this._bindTemporaryFBO();for(let l=0;l<i.numViews;l++)this._setViewParameters(i.extents[l],r),a.render(this._renderContext);if(n){this._bindTargetFBO(t),this._overlayParameters.texture=n.getTexture(),this._overlayParameters.opacity=s,this._overlayParameters.overlayIndex=e;const l=this._techniques.get(vr);this._rctx.bindTechnique(l,this._bindParameters,this._overlayParameters),this._rctx.screen.draw(),n.release()}})}_bindTargetFBO(e){const t=this._resolution,r=2*t;e.fbo.bind(this._rctx,r,t)}_bindTemporaryFBO(){const e=this._resolution,t=2*e,r=this._stage.renderer.fboCache,i=r.acquire(t,e,"overlay tmp");return r.rctx.bindFramebuffer(i.fbo),r.rctx.clear(Y.COLOR),i}get _resolution(){var e;return((e=this._overlays)==null?void 0:e[M.INNER].resolution)??0}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,t,r,i){var a;this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers();let o=0;for(const{renderer:s}of this._sortedRenderers)o=((a=s.intersect)==null?void 0:a.call(s,e,t,r,i,o))??o}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),this._renderers.size===0)return;const e=this._view.map.allLayers,t=e.length;this._renderers.forEach((r,i)=>{const o=e.indexOf(i.layer),a=o>=0,s=i.renderGroup??(a?Ft.MapLayer:Ft.ViewLayer),n=t*s+(a?o:0);this._sortedRenderers.push(new Zo(i,r,n))}),this._sortedRenderers.sort((r,i)=>r.index-i.index)}_setViewParameters(e,t){const r=this._camera;r.viewport=[0,0,t.resolution,t.resolution],Kr(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),Jr(r.viewMatrix,[-e[0],-e[1],0])}_ensureDebugPatternResources(e,t){if(xr(this._passParameters.color,t[0],t[1],t[2]),this._passParameters.texture)return;const r=new Uint8Array(e*e*4);let i=0;for(let a=0;a<e;a++)for(let s=0;s<e;s++){const n=Math.floor(s/10),l=Math.floor(a/10);n<2||l<2||10*n>e-20||10*l>e-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&n&&1&l?1&s^1&a?0:255:1&n^1&l?0:128)}const o=new Ir(e);o.samplingMode=Rr.NEAREST,this._passParameters.texture=new fe(this._rctx,o,r)}get test(){}};O([$()],L.prototype,"hasHighlights",void 0),O([$()],L.prototype,"_sortedDrapeSourceRenderersDirty",void 0),O([$({constructOnly:!0})],L.prototype,"parent",void 0),O([$({readOnly:!0})],L.prototype,"_techniques",null),O([$({type:Boolean,readOnly:!0})],L.prototype,"updating",null),O([$()],L.prototype,"isEmpty",null),O([$({readOnly:!0})],L.prototype,"rendersOccludedDraped",null),L=O([vt("esri.views.3d.terrain.OverlayRenderer")],L);class Zo{constructor(t,r,i){this.drapeSource=t,this.renderer=r,this.index=i}}const Qo=[[1,.5,.5],[.5,.5,1]],Rs=-2,ut=je.OccludeAndTransparent,mt=new zr;mt.hasAlpha=!0;class Ds{constructor(t,r={}){this.geometry=t,this.screenToWorldRatio=1,this._transformation=A(),this._shaderTransformation=null,this._boundingSphere=null,this.id=Br(),this.layerUid=r.layerUid,this.graphicUid=r.graphicUid,this.castShadow=r.castShadow??!1,r.objectShaderTransformation&&this.objectShaderTransformationChanged(r.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(t){ei(this._transformation,t),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(t){t==null?this._shaderTransformation=null:(this._shaderTransformation??(this._shaderTransformation=A()),pt(this._shaderTransformation,t,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(this._boundingSphere==null&&(this._boundingSphere??(this._boundingSphere=Ki()),_r(Ji(this._boundingSphere),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*eo(this.shaderTransformation)),this._boundingSphere):Yi}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation??this.transformation}get attributes(){return this.geometry.attributes}get highlight(){return this.geometry.highlights}foreachHighlightOptions(t){this.geometry.foreachHighlightOptions(t)}get hasHighlights(){return this.geometry.hasHighlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(t){this.geometry.visible=t}}const Xo=Object.freeze(Object.defineProperty({__proto__:null,build:Ar},Symbol.toStringTag,{value:"Module"})),Yo=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:St,blurSize:Tt,build:Fr,gridCellPixelSize:G,outlineSize:De},Symbol.toStringTag,{value:"Module"})),Ko=Object.freeze(Object.defineProperty({__proto__:null,build:Er},Symbol.toStringTag,{value:"Module"})),Jo=Object.freeze(Object.defineProperty({__proto__:null,build:Lr},Symbol.toStringTag,{value:"Module"})),ea=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:Ot,build:Hr},Symbol.toStringTag,{value:"Module"})),ta=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:bt,build:$r},Symbol.toStringTag,{value:"Module"})),ra=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:Pt,build:jr},Symbol.toStringTag,{value:"Module"}));export{L as $,Zt as A,pe as C,qt as E,Bt as I,Qt as O,ft as P,_o as T,Ao as V,jo as X,M as a,as as b,Qe as c,cs as d,Ze as e,_ as f,Ds as g,ys as h,Cs as i,Ho as j,ao as k,mo as l,vo as m,W as n,xs as o,po as p,ls as q,Se as r,ut as s,Rs as t,Ss as u,Ps as v,Ue as w,Eo as x,He as y};
