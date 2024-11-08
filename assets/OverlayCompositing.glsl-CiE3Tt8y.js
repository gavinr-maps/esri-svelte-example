import{r as x}from"./tslib.es6-B3Jf3DVX.js";import{o as Br}from"./Evented-BHRw9x22.js";import{m as b,a as et,j as yr,n as Zr,af as fe}from"./subclass-BZA_h8Db.js";import{F as Pe,B as De,M as Qr,b as Xr,t as Cr,ad as nt,a as Yr}from"./Accessor-BLX9ikPh.js";import{watch as Te,initial as Jr,syncAndInitial as lt,on as Kr}from"./reactiveUtils-C5zUhJQJ.js";import{b as At,i as Ft,c as yt,h as ei,X as ti,Q as ri,q as ii,n as oi}from"./mat4-GpOFENPA.js";import{j as ai,A as si,g as ni,s as U,r as li,c as ci,H as hi,y as di,E as wr,o as br}from"./vec32-Dvg_eL9J.js";import{n as Ce,r as St,i as ui}from"./vec3f64-BLpZdpfb.js";import{G as gi,_ as pi,C as mi,e as ze,b as Et,t as fi}from"./RibbonLine.glsl-BZu1FDpE.js";import{O as vi,p as Oe,t as ct}from"./Material-_xx7OZxD.js";import{b as Ue,a6 as Lt,r as _i,a7 as Be,q as ve,s as _e}from"./Polyline-D9YkgmM_.js";import{Y as j,a8 as xi,g as yi,c as Ci,b as $,a3 as Sr,a4 as Tr,s as Ht,ay as wi,_ as bi,Z as Si,$ as ht,o as re,i as Tt,az as zt,Q as Ie,h as ie,j as oe,X as Rr,H as Ti,I as dt,A as V,x as Or,aA as ut,n as Ri,at as Oi,au as Pi,aB as Di}from"./Texture-Fac_8AOC.js";import{n as R,e as Ii,i as Me,o as M,a as Pr,h as Ct,s as Dr}from"./Matrix3DrawUniform-CiBFaSz6.js";import{r as Mi,a as tt,s as $i,n as Ai,x as Fi,E as Vt,I as gt,c as Ei,u as Li}from"./MergedRenderer-Dli9s1X5.js";import{n as rt,s as Hi}from"./vec4f64-o2zAXfmz.js";import{o as u,t as Fe}from"./interfaces-DDtDqZYj.js";import{t as qe}from"./Point-Cg0-ChZE.js";import{n as zi}from"./compilerUtils-Dw3R0f-Z.js";import{r as Ir,o as Vi,b as Gi}from"./mathUtils-C4_ghTv4.js";import{r as pt}from"./signal-D4lghLjV.js";import{o as Y,e as z}from"./mat4f64-Dk4dwAN8.js";import{j as ji,v as Gt,w as jt}from"./axisAngleDegrees-Ci2HA7Jo.js";import{p as Ve,i as Ni}from"./weather-eV4wTXCK.js";import{a as Wi}from"./BindType-BmZEZMMh.js";import{o as Nt}from"./Float4DrawUniform-N58YDhuZ.js";import{o as J,u as Q,l as pe,_ as we,b as Wt,e as me,j as O,x as Ui,v as Ut,r as qi}from"./vec2-maR1OrZI.js";import{_ as ae}from"./index-Bh2oEzTI.js";import{B as K,c as Rt,g as ee,a as Ge}from"./renderState-DQLu6AJX.js";import{w as ki,y as k}from"./HighlightDefaults-D4ckYWWJ.js";import{e as Ze}from"./VertexAttribute-Cq4MnHjR.js";import{C as $e,G as Bi,L as Mr,_ as te,F as qt,E as Zi,M as $r}from"./enums-D9v74xTE.js";import{t as Qe}from"./VertexElementDescriptor-BOD-G50G.js";import{E as kt}from"./BufferObject-BVi1lwBq.js";import{e as Ar,m as Xe}from"./Texture-Begq2x5n.js";import{t as Qi}from"./NestedMap-GuqgquCN.js";import{s as xe,u as Xi,c as le,f as je}from"./Util-BIfApRF5.js";import{n as w}from"./vec2f64-miziP1SN.js";import{d as Yi}from"./sdfPrimitives-CUWZbMRe.js";import{e as Ji}from"./mat3f64-BBpwCtoL.js";import{s as Bt,z as Ki}from"./vec42-YcqnINSP.js";import{l as eo}from"./ViewingMode-Dodu7ZZk.js";import{U as Fr,E as to,C as ro}from"./sphere-C77djCO6.js";import{i as io}from"./Intersector-wXoCuQ8W.js";import{G as oo}from"./dehydratedFeatureUtils-B--Sgpdi.js";import{e as Zt,i as ao}from"./intersectorUtils-BK9EUwUf.js";import{i as so,a as no}from"./ShaderTechniqueConfiguration-CBbn2DCi.js";import{g as lo,C as co}from"./Scheduler-CJu5awNf.js";import{m as ho}from"./mathUtils-BG-eq9fO.js";var q,Ye;function uo(t){return t!=null&&!t.running}(function(t){t[t.Idle=0]="Idle",t[t.Rendering=1]="Rendering",t[t.Ready=2]="Ready",t[t.Fading=3]="Fading"})(q||(q={})),function(t){t[t.RG=0]="RG",t[t.BA=1]="BA",t[t.COUNT=2]="COUNT"}(Ye||(Ye={}));var Je;(function(t){t[t.Immediate=0]="Immediate",t[t.FadeWithWeather=1]="FadeWithWeather"})(Je||(Je={}));var E,Qt,Xt;(function(t){t[t.INNER=0]="INNER",t[t.OUTER=1]="OUTER"})(E||(E={})),function(t){t[t.REGULAR=0]="REGULAR",t[t.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",t[t.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",t[t.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(Qt||(Qt={})),function(t){t[t.FADING=0]="FADING",t[t.IMMEDIATE=1]="IMMEDIATE",t[t.UNFADED=2]="UNFADED"}(Xt||(Xt={}));let Yt=class{constructor(){this._extent=Ue(),this.resolution=0,this.renderLocalOrigin=gi(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new go}get extent(){return this._extent}setupGeometryViewsCyclical(e){this.setupGeometryView();const r=.001*e.range;if(this._extent[0]-r<=e.min){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Lt(this._extent,e.range,0,i)}if(this._extent[2]+r>=e.max){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Lt(this._extent,-e.range,0,i)}}setupGeometryView(){this.canvasGeometries.numViews=1,_i(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const r=this.canvasGeometries.extents[e];if(r[0]!==r[2]&&r[1]!==r[3])return!0}return!1}},go=class{constructor(){this.extents=[Ue(),Ue(),Ue()],this.numViews=0}};var C;(function(t){t[t.Color=0]="Color",t[t.ColorNoRasterImage=1]="ColorNoRasterImage",t[t.Highlight=2]="Highlight",t[t.WaterNormal=3]="WaterNormal",t[t.Occluded=4]="Occluded",t[t.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"})(C||(C={}));let po=class{constructor(e,r,i){this._fbos=e,this._format=r,this._name=i}get valid(){var e;return((e=this._handle)==null?void 0:e.getTexture())!=null}dispose(){this._handle=Pe(this._handle)}get texture(){var e;return(e=this._handle)==null?void 0:e.getTexture()}bind(e,r,i){var o,a,s,n;this._handle&&((o=this._handle.fbo)==null?void 0:o.width)===r&&((a=this._handle.fbo)==null?void 0:a.height)===i||((s=this._handle)==null||s.release(),this._handle=this._fbos.acquire(r,i,this._name,this._format)),e.bindFramebuffer((n=this._handle)==null?void 0:n.fbo)}generateMipMap(){var e,r,i,o,a;(i=(r=(e=this._handle)==null?void 0:e.getTexture())==null?void 0:r.descriptor)!=null&&i.hasMipmap&&((a=(o=this._handle)==null?void 0:o.getTexture())==null||a.generateMipmap())}},ce=class{constructor(e,r,i,o,a=j.RGBA_MIPMAP){this.output=i,this.content=o,this.fbo=new po(e,a,r)}get valid(){return this.fbo.valid}},mo=class{constructor(e){this.targets=[new ce(e,"overlay color",R.Color,C.Color),new ce(e,"overlay IM color",R.Color,C.ColorNoRasterImage),new ce(e,"overlay highlight",R.Highlight,C.Highlight,j.RG),new ce(e,"overlay water",R.Normal,C.WaterNormal),new ce(e,"overlay occluded",R.Color,C.Occluded)],Ii()&&this.targets.push(new ce(e,"overlay olid",R.ObjectAndLayerIdColor,C.ObjectAndLayerIdColor,j.RGBA))}getTexture(e){var r;return(r=this.targets[e])==null?void 0:r.fbo.texture}dispose(){for(const e of this.targets)e.fbo.dispose()}computeValidity(){return this.targets.reduce((e,r,i)=>r.valid?e|=1<<i:e,0)}},it=class extends xi{constructor(){super(...arguments),this.slicePlaneLocalOrigin=Ce(),this.origin=this.slicePlaneLocalOrigin,this.modelTransformation=null}};var N;(function(t){t[t.Material=0]="Material",t[t.ShadowMap=1]="ShadowMap",t[t.Highlight=2]="Highlight",t[t.ViewshedShadowMap=3]="ViewshedShadowMap"})(N||(N={}));let ps=class extends it{constructor(){super(...arguments),this.identifier=N.Material,this.output=R.Color,this.transparent=!1}},fs=class extends it{constructor(){super(...arguments),this.identifier=N.ShadowMap}},_s=class extends it{constructor(){super(...arguments),this.identifier=N.Highlight}},ys=class extends it{constructor(){super(...arguments),this.identifier=N.ViewshedShadowMap}};function ws(t){t.fragment.code.add(u`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function fo(t){t.fragment.code.add(u`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function vo(t){t.fragment.code.add(u`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}function _o(t,e){if(!e.screenSpaceReflections)return;const r=t.fragment;r.include(yi),r.uniforms.add(new Ci("nearFar",(i,o)=>o.camera.nearFar),new $("depthMap",(i,o)=>{var a;return(a=o.depth)==null?void 0:a.attachment}),new Me("proj",(i,o)=>o.camera.projectionMatrix),new M("invResolutionHeight",(i,o)=>1/o.camera.height),new Me("reprojectionMatrix",(i,o)=>o.ssr.reprojectionMatrix)).code.add(u`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${e.highStepCount?"150":"75"};

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
        return vec3(P, depth);
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}class xo{constructor(){this.startTime=0,this._data=pt(null),this._readChannels=Ye.RG,this.parallax=new Jt,this.parallaxNew=new Jt,this._anchorPoint=Ce(),this._fadeState=pt(f.HIDE),this._fadeFactor=pt(1)}get data(){return this._data.value}set data(e){this._data.value=e}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case f.HIDE:return 0;case f.FADE_OUT:return 1-this.fadeFactor;case f.FADE_IN:return this.fadeFactor;case f.SHOW:case f.CROSS_FADE:return 1}}fade(e,r,i){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=i?Ir((r-this.startTime)/(Co*i),0,1):1,this.fadeFactor===1&&this._endFade()),this._evaluateState(e,r),this._updateParallax(e)}_evaluateState(e,r){const i=e.relativeElevation,o=this._updateAnchorPoint(e);(i>1.7*Ve||i<-Ve||o>er)&&this.opacity>0?this._startFade(f.HIDE,r):this.isFading||(i>Ve||i<-.35*Ve||o>wo*er?this.opacity>0&&this._startFade(f.FADE_OUT,r):uo(this.data)&&(this.opacity===0?this._startFade(f.FADE_IN,r):this.data.state===q.Ready&&(this.fadeState===f.SHOW?this._startFade(f.CROSS_FADE,r):this._startFade(f.SHOW,r))))}_updateParallax(e){const r=ai(e.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(r-qe.radius*qe.radius,0))/Math.sqrt(r),Gt(Kt,this.parallax.anchorPoint,he),At(this.parallax.transform,Y,he[3],jt(he)),Gt(Kt,this.parallaxNew.anchorPoint,he),At(this.parallaxNew.transform,Y,he[3],jt(he))}_updateAnchorPoint(e){var r;return si(this._anchorPoint,e.eye),ni(this._anchorPoint,this._anchorPoint,qe.radius),this.fadeState===f.HIDE&&((r=this.data)==null?void 0:r.state)===q.Ready?(U(this.parallax.anchorPoint,this._anchorPoint),0):li(ci(yo,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(e,r){switch(this._fadeState.value=e,this.startTime=r,e){case f.CROSS_FADE:this.requestFade(),this._switchReadChannels(),U(this.parallaxNew.anchorPoint,this._anchorPoint);break;case f.FADE_IN:this.requestFade(),this._switchReadChannels(),U(this.parallax.anchorPoint,this._anchorPoint),U(this.parallaxNew.anchorPoint,this._anchorPoint);break;case f.FADE_OUT:this.requestFade();break;case f.SHOW:this._switchReadChannels(),U(this.parallax.anchorPoint,this._anchorPoint),U(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case f.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==q.Ready&&(this.data.state=q.Idle),this.fadeState){case f.CROSS_FADE:U(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=f.SHOW;break;case f.FADE_IN:this._fadeState.value=f.SHOW;break;case f.FADE_OUT:this._fadeState.value=f.HIDE;break;case f.SHOW:case f.HIDE:break;default:zi(this.fadeState)}}_switchReadChannels(){var e;((e=this.data)==null?void 0:e.state)===q.Ready&&(this._readChannels=1-this._readChannels,this.data.state=q.Fading)}get isFading(){return this.fadeState===f.FADE_OUT||this.fadeState===f.FADE_IN||this.fadeState===f.CROSS_FADE}}var f;(function(t){t[t.HIDE=0]="HIDE",t[t.FADE_IN=1]="FADE_IN",t[t.SHOW=2]="SHOW",t[t.CROSS_FADE=3]="CROSS_FADE",t[t.FADE_OUT=4]="FADE_OUT"})(f||(f={}));let Jt=class{constructor(){this.anchorPoint=Ce(),this.radiusCurvatureCorrection=0,this.transform=z()}};const Kt=St(0,0,1),he=ji(),yo=Ce(),Co=1.25,wo=.5,er=2e5;let bo=class extends Pr{constructor(e,r){super(e,"samplerCube",Wi.Pass,(i,o,a)=>i.bindTexture(e,r(o,a)))}};function So(t){const e=t.fragment;e.constants.add("radiusCloudsSquared","float",To).code.add(u`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),e.uniforms.add(new M("radiusCurvatureCorrection",(l,c)=>c.clouds.parallax.radiusCurvatureCorrection)).code.add(u`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),e.code.add(u`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),Sr(e),Tr(e);const r=St(.28,.175,.035);e.constants.add("RIM_COLOR","vec3",r),e.code.add(u`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${u.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${u.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${u.float(.2)} * pow(dirDotLight, ${u.float(10)}) * (1. - pow(sunsetTransition, ${u.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),e.uniforms.add(new Ht("readChannelsRG",(l,c)=>c.clouds.readChannels===Ye.RG),new bo("cubeMap",(l,c)=>{var p,v;return((v=(p=c.clouds.data)==null?void 0:p.cubeMap)==null?void 0:v.colorTexture)??null})).code.add(u`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),e.uniforms.add(new Ct("anchorPoint",(l,c)=>c.clouds.parallax.anchorPoint),new Ct("anchorPointNew",(l,c)=>c.clouds.parallaxNew.anchorPoint),new Me("rotationClouds",(l,c)=>c.clouds.parallax.transform),new Me("rotationCloudsNew",(l,c)=>c.clouds.parallaxNew.transform),new M("cloudsOpacity",(l,c)=>c.clouds.opacity),new M("fadeFactor",(l,c)=>c.clouds.fadeFactor),new Ht("crossFade",(l,c)=>c.clouds.fadeState===f.CROSS_FADE)).code.add(u`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
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
}`)}const To=(qe.radius+Ni)**2;function Ro(t){t.code.add(u`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function Oo(t,e){t.include(wi,e),t.include(vo),t.include(fo),e.cloudReflections&&t.include(So),t.include(_o,e);const r=t.fragment;r.include(Ro),r.constants.add("fresnelSky","vec3",[.02,1,15]),r.constants.add("fresnelMaterial","vec2",[.02,.1]),r.constants.add("roughness","float",.015),r.constants.add("foamIntensityExternal","float",1.7),r.constants.add("ssrIntensity","float",.65),r.constants.add("ssrHeightFadeStart","float",bi),r.constants.add("ssrHeightFadeEnd","float",Si),r.constants.add("waterDiffusion","float",.92),r.constants.add("waterSeaColorMod","float",.8),r.constants.add("correctionViewingPowerFactor","float",.4),r.constants.add("skyZenitColor","vec3",[.52,.68,.9]),r.constants.add("skyColor","vec3",[.67,.79,.9]),r.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(u`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add(new M("lightingSpecularStrength",(i,o)=>o.lighting.mainLight.specularStrength),new M("lightingEnvironmentStrength",(i,o)=>o.lighting.mainLight.environmentStrength)),r.code.add(u`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
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
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),e.cloudReflections&&r.uniforms.add(new M("cloudsOpacity",(i,o)=>o.clouds.opacity)).code.add(u`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),e.screenSpaceReflections?r.uniforms.add(new Me("view",(i,o)=>o.camera.viewMatrix),new $("lastFrameColorTexture",(i,o)=>{var a;return(a=o.ssr.lastFrameColor)==null?void 0:a.getTexture()}),new M("fadeFactorSSR",(i,o)=>o.ssr.fadeFactor)).code.add(u`vec3 viewDir = normalize(viewPosition);
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
reflSea * seaColorMod + specular + foam);`):r.code.add(u`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),e.cloudReflections?e.screenSpaceReflections?r.code.add(u`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(u`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(u`return waterRenderedColor;
}`)}var ye;function Ts(t,e){const{vertex:r,fragment:i}=t;r.uniforms.add(new Nt("overlayTexOffset",(o,a)=>Do(o,a)),new Nt("overlayTexScale",(o,a)=>Io(o,a))),i.constants.add("overlayOpacity","float",1),i.uniforms.add(new $("ovColorTex",(o,a)=>Po(o,a))),Er(t,e)}function Rs(t,e){const{vertex:r,fragment:i}=t;r.uniforms.add(new tr("overlayTexOffset"),new tr("overlayTexScale")),i.uniforms.add(new M("overlayOpacity",o=>o.overlayOpacity),new $("ovColorTex",(o,a)=>{var s;return(s=a.overlay)==null?void 0:s.getTexture(o.overlayContent)})),Er(t,e)}function Er(t,e){const r=e.pbrMode===ht.Water||e.pbrMode===ht.WaterOnIntegratedMesh||e.pbrMode===ht.TerrainWithWater;r&&t.include(Oo,e);const{vertex:i,fragment:o}=t;t.varyings.add("vtcOverlay","vec4"),i.code.add(u`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),o.code.add(u`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),o.code.add(u`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),o.code.add(u`vec4 getOverlayColorTexel(vec4 texCoords) {
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),o.code.add(u`vec2 getAllOverlayHighlightValuesEncoded() {
vec4 texCoords = vtcOverlay;
vec2 uvInner = texCoords.xy;
vec2 uvOuter = texCoords.zw;
bool isValidInner = isValid(uvInner, fwidth(uvInner));
bool isValidOuter = isValid(uvOuter, vec2(0.0, 0.0));
vec2 texelCoordInner = vec2(uvInner.x * 0.5,       uvInner.y);
vec2 texelCoordOuter = vec2(uvOuter.x * 0.5 + 0.5, uvOuter.y);
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec2 texelValueInner = texelFetch(ovColorTex, ivec2(texelCoordInner * texDim), 0).rg;
vec2 texelValueOuter = texelFetch(ovColorTex, ivec2(texelCoordOuter * texDim), 0).rg;
return
isValidInner ? texelValueInner :
isValidOuter ? texelValueOuter :
vec2(0.0);
}`),r&&(Sr(o),Tr(o),o.code.add(u`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function Po(t,e){var r,i,o;return t.identifier===N.Material&&t.output===R.Color?(r=e.overlay)==null?void 0:r.getTexture(C.ColorNoRasterImage):t.identifier===N.Material&&t.output===R.ObjectAndLayerIdColor?(i=e.overlay)==null?void 0:i.getTexture(C.ObjectAndLayerIdColor):t.identifier===N.Highlight?(o=e.overlay)==null?void 0:o.getTexture(C.Highlight):null}function Do(t,e){var o,a,s,n;const r=(a=(o=e.overlay)==null?void 0:o.overlays[E.INNER])==null?void 0:a.extent;Be(r)&&(G[0]=t.toMapSpace[0]/ve(r)-r[0]/ve(r),G[1]=t.toMapSpace[1]/_e(r)-r[1]/_e(r));const i=(n=(s=e.overlay)==null?void 0:s.overlays[E.OUTER])==null?void 0:n.extent;return Be(i)&&(G[2]=t.toMapSpace[0]/ve(i)-i[0]/ve(i),G[3]=t.toMapSpace[1]/_e(i)-i[1]/_e(i)),G}function Io(t,e){var o,a,s,n;const r=(a=(o=e.overlay)==null?void 0:o.overlays[E.INNER])==null?void 0:a.extent;Be(r)&&(G[0]=t.toMapSpace[2]/ve(r),G[1]=t.toMapSpace[3]/_e(r));const i=(n=(s=e.overlay)==null?void 0:s.overlays[E.OUTER])==null?void 0:n.extent;return Be(i)&&(G[2]=t.toMapSpace[2]/ve(i),G[3]=t.toMapSpace[3]/_e(i)),G}(function(t){t[t.Disabled=0]="Disabled",t[t.Enabled=1]="Enabled",t[t.EnabledWithWater=2]="EnabledWithWater",t[t.COUNT=3]="COUNT"})(ye||(ye={}));const G=rt();class tr extends Pr{constructor(e){super(e,"vec4")}}let Ot=class extends Fe{constructor(){super(...arguments),this.color=St(1,1,1)}};function Lr(){const t=new re;return t.include(Tt),t.fragment.uniforms.add(new $("tex",e=>e.texture),new Ct("uColor",e=>e.color)),t.fragment.main.add(u`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`),t}const Mo=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Ot,build:Lr},Symbol.toStringTag,{value:"Module"}));let Pt=class extends Fe{};function Hr(){const t=new re,{outputs:e,fragment:r}=t;return t.include(Tt),r.uniforms.add(new Dr("textureInput",i=>i.input)),r.constants.add("outlineWidth","int",Math.ceil(Ae)),r.constants.add("cellSize","int",B),e.add("fragGrid","vec2"),r.main.add(u`vec2 inputTextureSize = vec2(textureSize(textureInput, 0));
vec2 cellBottomLeftCornerInput = floor(gl_FragCoord.xy) * vec2(cellSize);
vec2 coordMid =  (cellBottomLeftCornerInput + 0.5 * vec2(cellSize)) / inputTextureSize;
vec2 commonValue = texture(textureInput, coordMid).rg;
int margin = outlineWidth;
float marginSquare = float(margin*margin);
for(int y = -margin; y <= cellSize + margin; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : margin;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
vec2 coord = (cellBottomLeftCornerInput + vec2(x, y)) / inputTextureSize;
vec2 value = texture(textureInput, coord).rg;
if (value != commonValue){
fragGrid = vec2(1.0, 1.0);
return;
}
}
}
bool hasAny = commonValue != vec2(0.0);
fragGrid = vec2(hasAny ? 1.0 : 0.0, 0.0);`),t}const B=32,Ae=9,Dt=.4,$o=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:Pt,blurSize:Dt,build:Hr,gridCellPixelSize:B,outlineSize:Ae},Symbol.toStringTag,{value:"Module"}));function ot(t){const{vertex:e}=t;e.uniforms.add(new $("coverageTexture",r=>r.coverageTexture),new zt("highlightRenderCellCount",r=>[r.horizontalCellCount,r.verticalCellCount]),new zt("highlightTextureResolution",r=>[r.highlightTexture.descriptor.width,r.highlightTexture.descriptor.height])),e.constants.add("cellSize","int",B),t.varyings.add("sUV","vec2"),t.varyings.add("vOutlinePossible","float"),e.code.add(u`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`),e.main.add(u`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
vec4 cov = texelFetch(coverageTexture, cellPos, 0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = cov.g;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}function Ke(t){const{fragment:e}=t;e.code.add(u`uint readChannelBits(uint channel, int highlightLevel) {
int llc = (highlightLevel & 3) << 1;
return (channel >> llc) & 3u;
}
uint readChannel(vec2 texel, int highlightLevel) {
int lic = (highlightLevel >> 2) & 1;
return uint(texel[lic] * 255.0);
}
uint readLevelBits(vec2 texel, int highlightLevel) {
return readChannelBits(readChannel(texel, highlightLevel), highlightLevel);
}`)}function zr(){const t=new re;t.include(ot);const{fragment:e}=t;return e.uniforms.add(new $("highlightTexture",r=>r.highlightTexture),new $("highlightOptionsTexture",r=>r.highlightOptionsTexture),new M("pixelRatio",r=>r.pixelRatio),new M("occludedIntensityFactor",r=>r.occludedFactor),new Ie("maxHighlightLevel",r=>r.maxHighlightLevel)),e.constants.add("pixelSampleScale","float",1),t.include(Ke),e.code.add(u`const float pascal17[9] = float[9](12870.0, 11440.0, 8008.0, 4368.0, 1820.0, 560.0, 120.0, 16.0, 1.0);
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
}`),e.main.add(u`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
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
fragColor = accumulatedColor;`),t}const Ao=Object.freeze(Object.defineProperty({__proto__:null,build:zr},Symbol.toStringTag,{value:"Module"}));let rr=class extends ie{constructor(e,r,i){super(e,r,new oe(Ao,()=>ae(()=>Promise.resolve().then(()=>na),void 0,import.meta.url)),i)}initializePipeline(){return K({blending:Rt,colorWrite:ee})}},ir=class extends ie{constructor(e,r,i){super(e,r,new oe($o,()=>ae(()=>Promise.resolve().then(()=>la),void 0,import.meta.url)),i)}initializePipeline(){return K({colorWrite:ee})}},Fo=class extends Fe{constructor(){super(...arguments),this.occludedFactor=ki,this.maxHighlightLevel=1,this.verticalCellCount=0,this.horizontalCellCount=0,this.highlightLevel=0,this.pixelRatio=1}};function Vr(){const t=new re;t.include(ot),t.include(Ke);const{fragment:e}=t;return t.outputs.add("fragSingleHighlight","vec2",0),e.uniforms.add(new $("highlightTexture",r=>r.highlightTexture),new Ie("maxHighlightLevel",r=>r.maxHighlightLevel),new Ie("highlightLevel",r=>r.highlightLevel)),t.include(Ke),e.main.add(u`ivec2 iuv = ivec2(gl_FragCoord.xy);
vec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),t}const Eo=Object.freeze(Object.defineProperty({__proto__:null,build:Vr},Symbol.toStringTag,{value:"Module"}));let or=class extends ie{constructor(e,r,i){super(e,r,new oe(Eo,()=>ae(()=>Promise.resolve().then(()=>ca),void 0,import.meta.url)),i)}initializePipeline(){return K({colorWrite:ee})}};function Gr(){const t=new re;t.include(ot);const{fragment:e}=t;return e.uniforms.add(new $("blurInput",r=>r.singleHighlightBlurTexture),new Rr("blurSize",r=>r.blurSize),new $("highlightTexture",r=>r.highlightTexture),new $("highlightOptionsTexture",r=>r.highlightOptionsTexture),new Ie("highlightLevel",r=>r.highlightLevel),new M("occludedIntensityFactor",r=>r.occludedFactor)),e.constants.add("inner","float",1-(Ae-Dt)/Ae),t.include(Ke),e.main.add(u`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
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
fragColor = vec4(baseColor.rgb, intensity);`),t}const Lo=Object.freeze(Object.defineProperty({__proto__:null,build:Gr},Symbol.toStringTag,{value:"Module"}));let ar=class extends ie{constructor(e,r,i){super(e,r,new oe(Lo,()=>ae(()=>Promise.resolve().then(()=>ha),void 0,import.meta.url)),i)}initializePipeline(){return K({blending:Rt,colorWrite:ee})}},It=class extends Fe{constructor(){super(...arguments),this.blurSize=w()}};function jr(){const t=new re;return t.include(ot),t.fragment.uniforms.add(new Rr("blurSize",e=>e.blurSize),new Dr("blurInput",e=>e.blurInput)),t.outputs.add("fragSingleHighlight","vec2",0),t.fragment.main.add(u`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
if (vOutlinePossible == 0.0) {
fragSingleHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
fragSingleHighlight = sum;
}`),t}const Ho=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:It,build:jr},Symbol.toStringTag,{value:"Module"}));let sr=class extends ie{constructor(e,r,i){super(e,r,new oe(Ho,()=>ae(()=>Promise.resolve().then(()=>da),void 0,import.meta.url)),i)}initializePipeline(){return K({colorWrite:ee})}};const zo=[],Ls=[new Qe(Ze.POSITION,3,$e.FLOAT,0,12)],Hs=[new Qe(Ze.POSITION,2,$e.FLOAT,0,8)],zs=[new Qe(Ze.POSITION,2,$e.FLOAT,0,16),new Qe(Ze.UV0,2,$e.FLOAT,8,16)];let be=class extends Ti{constructor(e){super(e),this.produces=dt.HIGHLIGHTS,this.consumes={required:[dt.HIGHLIGHTS,"highlights"]},this.useMultipleHighlights=!!yr("enable-feature:multiple-highlights"),this._optionsTexture=null,this._downsampleDrawParameters=new Pt,this._passParameters=new Fo,this._singleHighlightBlurDrawParameters=new It,this._grid=new Vo,e.techniques.precompile(ir),this.useMultipleHighlights?e.techniques.precompile(rr):(e.techniques.precompile(or),e.techniques.precompile(sr),e.techniques.precompile(ar))}initialize(){this.addHandles([Te(()=>Wr(this.view.highlights),()=>{this._optionsTexture=De(this._optionsTexture),this.requestRender(Ge.UPDATE)},Jr)])}destroy(){this._passParameters&&(this._passParameters.highlightOptionsTexture=null),this._grid.coverage=Pe(this._grid.coverage),this._grid.vao=De(this._grid.vao),this._optionsTexture=Pe(this._optionsTexture)}_updateOptionsTexture(e){const r=this.renderingContext;let i=this._optionsTexture;if(i==null){const o=new Ar(16,2);o.internalFormat=Bi.RGBA,o.samplingMode=Mr.NEAREST,i=new Xe(r,o,null),this._optionsTexture=i}i.setData(e),this._passParameters.highlightOptionsTexture=i}render(e){const r=e.find(({name:g})=>g===dt.HIGHLIGHTS),{techniques:i,bindParameters:o,_passParameters:a,renderingContext:s}=this;if(!o.decorations)return r;const n=i.acquire(ir);if(!n.compiled)return n.release(),this.requestRender(Ge.UPDATE),r;const l=e.find(({name:g})=>g==="highlights").getTexture(),c=()=>{var se;const{highlights:g}=this.view;this._optionsTexture||this._updateOptionsTexture(Go(g)),a.highlightOptionsTexture=this._optionsTexture,this._gridUpdateResources(l);const _=this._gridComputeCoverage(n,l,o);n.release();const{horizontalCellCount:L,verticalCellCount:Z}=_;return a.horizontalCellCount=L,a.verticalCellCount=Z,a.coverageTexture=(se=_.coverage)==null?void 0:se.getTexture(),_},p=g=>{const _=g.verticalCellCount*g.horizontalCellCount;s.bindVAO(g.vao),s.drawElementsInstanced(Zi.TRIANGLES,6,$e.UNSIGNED_BYTE,0,_)},{camera:v}=o,m=()=>{s.bindFramebuffer(r.fbo),s.setViewport4fv(v.fullViewport)};return this.useMultipleHighlights?this._renderMultiple(l,c,p,m):this._renderSingle(l,c,p,m),a.highlightTexture=null,a.coverageTexture=null,r}_renderMultiple(e,r,i,o){const{techniques:a,bindParameters:s,_passParameters:n,renderingContext:l}=this,c=a.acquire(rr);if(!c.compiled)return c.release(),void this.requestRender(Ge.UPDATE);const p=r();n.highlightTexture=e,n.pixelRatio=s.camera.pixelRatio,n.maxHighlightLevel=cr(this.view.highlights)-1,l.bindTechnique(c,s,n),o(),i(p),c.release()}_renderSingle(e,r,i,o){var $t;const{fboCache:a,techniques:s,bindParameters:n,_passParameters:l,renderingContext:c}=this,p=s.acquire(or),v=s.acquire(sr),m=s.acquire(ar);if(!m.compiled||!v.compiled||!p.compiled)return m.release(),v.release(),p.release(),void this.requestRender(Ge.UPDATE);const g=r(),{width:_,height:L}=e.descriptor;l.maxHighlightLevel=cr(this.view.highlights)-1,l.highlightTexture=e;const{camera:Z}=n,{fullWidth:se,fullHeight:at,pixelRatio:Ee}=Z,ne=Math.ceil(se/Ee),y=Math.ceil(at/Ee),{_singleHighlightBlurDrawParameters:S}=this;for(let st=0;st<=l.maxHighlightLevel;++st){l.highlightLevel=st,c.setClearColor(0,0,0,0);const Le=a.acquire(_,L,"single highlight",j.RG);c.bindFramebuffer(Le.fbo),c.setViewport(0,0,_,L),c.clear(te.COLOR),c.bindTechnique(p,n,l),i(g),S.blurInput=Le.getTexture(),J(S.blurSize,1/ne,0);const He=a.acquire(ne,y,"single highlight blur h",j.RG);c.unbindTexture(($t=He.fbo)==null?void 0:$t.colorTexture),c.bindFramebuffer(He.fbo),c.setViewport(0,0,ne,y),c.clear(te.COLOR),S.blurInput=Le.getTexture(),J(S.blurSize,1/ne,0),c.bindTechnique(v,n,l,S),i(g),Le.release(),J(S.blurSize,0,1/y),l.singleHighlightBlurTexture=He.getTexture(),o(),c.bindTechnique(m,n,l,S),i(g),He.release()}p.release(),v.release(),m.release()}_gridUpdateResources(e){const r=this.renderingContext,i=this._grid,{width:o,height:a}=e.descriptor;if(i.horizontalCellCount=Math.ceil(o/B),i.verticalCellCount=Math.ceil(a/B),i.vao)return;const s=kt.createIndex(r,qt.STATIC_DRAW,No);i.vao=new Mi(r,vi,new Map([["geometry",zo]]),new Map([["geometry",kt.createVertex(r,qt.STATIC_DRAW)]]),s)}_gridComputeCoverage(e,r,i){var p;const o=this.renderingContext,a=this._grid,s=r.descriptor,n=Math.ceil(s.width/B),l=Math.ceil(s.height/B);this._downsampleDrawParameters.input=r,(p=a.coverage)==null||p.release();const c=this.fboCache.acquire(n,l,"highlight coverage",j.RG);return a.coverage=c,o.bindFramebuffer(c.fbo),o.bindTechnique(e,i,this._passParameters,this._downsampleDrawParameters),o.setViewport(0,0,n,l),o.screen.draw(),a}get test(){}};x([b()],be.prototype,"produces",void 0),x([b()],be.prototype,"consumes",void 0),x([b({constructOnly:!0})],be.prototype,"techniques",void 0),be=x([et("esri.views.3d.webgl-engine.effects.highlight.Highlight")],be);class Vo{constructor(){this.coverage=null,this.vao=null,this.verticalCellCount=0,this.horizontalCellCount=0,this.viewportWidth=0,this.viewportHeight=0}}function Go(t){const e=new Uint8Array(128),r=(o,a)=>{e[o]=a},i=(o,a)=>{const s=4*o,n=4*o+64,{color:l}=a,c=a.haloColor??l;r(s+0,l.r),r(s+1,l.g),r(s+2,l.b),r(s+3,a.fillOpacity*l.a*255),r(n+0,c.r),r(n+1,c.g),r(n+2,c.b),r(n+3,a.haloOpacity*c.a*255)};return Nr(t,(o,a)=>{i(a,o.options)}),e}const nr=new Array(k),lr=new Array(k);function Nr(t,e){const r=Math.min(t.length,k);let i=k;for(let a=r-1;a>=0;--a){const s=t.at(a);if(s){const n=s.name;nr.includes(n,i)||(--i,nr[i]=n,lr[i]=a)}}const o=k-i;for(let a=0;a<o;++a){const s=lr[k-o+a];e(t.at(s),a)}}let jo=0;function Wr(t){let e=0;const r=Math.min(k,t.length);for(let i=0;i<r;++i){const o=t.at(i);if(o){const{name:a,options:s}=o;e+=a.length;const{color:n,fillOpacity:l,haloColor:c,haloOpacity:p}=s;e+=n.r+((c==null?void 0:c.r)??1)+l+p}}{const i=t.at(0);if(i){const{shadowOpacity:o,shadowDifference:a,shadowColor:s}=i.options;e+=o+a+s.r}}return jo+++(e>=0?0:1)}const No=new Uint8Array([0,1,2,2,1,3]);function Wo(t,e,r,i,o,a,s=0,n){const{highlightGroupIndices:l}=o;l.clear();const c=[];Nr(i,_=>{const{name:L}=_;l.set(L,c.length),c.push(L)});const p=l.size,{gl:v}=t;J(o.highlightMixOrigin,s,0);let m=null;p>1&&(m=e.acquire(r.width,r.height,"highlight mix",j.RG),t.bindFramebuffer(m.fbo),t.clearFramebuffer(Hi));const g=(m==null?void 0:m.getTexture())??null;o.highlightMixTexture=g,n();for(let _=0;_<p;++_)_>0&&(t.bindTexture(g,0),v.copyTexSubImage2D($r.TEXTURE_2D,0,0,0,s,0,r.width,r.height),t.bindTexture(null,0)),t.clear(te.DEPTH),o.highlightLevel=_,o.highlightGroupName=c[_],a();m==null||m.release()}function cr(t){var r;const e=new Set;for(let i=0;i<k;++i){const o=(r=t.at(i))==null?void 0:r.name;o&&e.add(o)}return e.size}let Uo=class{constructor(e,r,i,o){this._textures=e,this._techniques=r,this.materialChanged=i,this.requestRender=o,this._id2glMaterialRef=new Qi}dispose(){this._textures.destroy()}acquire(e,r,i){this._ownMaterial(e);const o=e.produces.get(r);if(!(o!=null&&o(i)))return null;let a=this._id2glMaterialRef.get(i,e.id);if(a==null){const s=e.createGLMaterial({material:e,techniques:this._techniques,textures:this._textures,output:i});a=new qo(s),this._id2glMaterialRef.set(i,e.id,a)}return a.ref(),a.glMaterial}release(e,r){const i=this._id2glMaterialRef.get(r,e.id);i!=null&&(i.unref(),i.referenced||(De(i.glMaterial),this._id2glMaterialRef.delete(r,e.id)))}_ownMaterial(e){e.repository&&e.repository!==this&&Zr.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this}},qo=class{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,xe(this._refCnt>=0)}get referenced(){return this._refCnt>0}},Ns=class{constructor(e,r){this.width=e,this.height=r}},ko=class{constructor(e){this.shadowMap=e,this.slot=V.OPAQUE_MATERIAL,this.slicePlane=null,this.hasOccludees=!1,this.enableFillLights=!0,this.oitPass=Or.NONE,this.alignPixelEnabled=!1,this.decorations=!0,this.overlayStretch=1,this.viewshedEnabled=!1,this._camera=new tt,this._inverseViewport=w(),this._oldLighting=new ut,this._newLighting=new ut,this._fadedLighting=new ut,this._lighting=this._newLighting,this.ssr=new Bo,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.highlightMixTexture=null,this.highlightGroupName=null,this.highlightGroupIndices=new Map,this.highlightLevel=0,this.highlightMixOrigin=w(),this.hudRenderStyle=Yi.Occluded,this.clouds=new xo,this.shadowHighlightsVisible=!1}get camera(){return this._camera}set camera(e){this._camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}fadeLighting(){switch(this.clouds.fadeFactor){case 0:this._lighting=this._oldLighting;break;default:this._fadedLighting.lerpLighting(this._oldLighting,this._newLighting,this.clouds.fadeFactor),this._lighting=this._fadedLighting;break;case 1:this._lighting=this._newLighting,this._oldLighting.copyFrom(this._newLighting)}}updateLighting(e,r,i,o){this._oldLighting.copyFrom(this.lighting),this._newLighting.noonFactor=r,this._newLighting.globalFactor=i,this._newLighting.set(e),o===Je.FadeWithWeather&&this.clouds.requestFade(),this.fadeLighting()}};class Bo{constructor(){this.fadeFactor=1,this.reprojectionMatrix=z()}}class Ur{constructor(e,r){this.rctx=e,this.lastFrameCamera=new tt,this.output=R.Color,this.renderOccludedMask=ke,this.bind=new ko(r),this.bind.alignPixelEnabled=!0}}class qs extends Ur{constructor(e,r,i){super(e,r),this.techniques=i,this.time=Qr(0)}}const ke=Oe.Occlude|Oe.OccludeAndTransparent|Oe.OccludeAndTransparentStencil;let Re=class extends tt{constructor(){super(...arguments),this._projectionMatrix=z()}get projectionMatrix(){return this._projectionMatrix}};x([b()],Re.prototype,"_projectionMatrix",void 0),x([b({readOnly:!0})],Re.prototype,"projectionMatrix",null),Re=x([et("esri.views.3d.webgl-engine.lib.CascadeCamera")],Re);var wt;(function(t){t[t.Highlight=0]="Highlight",t[t.ExcludeHighlight=1]="ExcludeHighlight"})(wt||(wt={}));class Ne{constructor(){this.camera=new Re,this.lightMat=z()}}class Zo{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}}class Qo{constructor(e,r){this._fbos=e,this._viewingMode=r,this._enabled=!1,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new Zo,this._projectionView=z(),this._projectionViewInverse=z(),this._modelViewLight=z(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=rt(),this._cascades=[new Ne,new Ne,new Ne,new Ne],this._lastOrigin=null,this._maxTextureWidth=Math.min(yr("esri-mobile")?4096:16384,e.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}get depthTexture(){var e;return(e=this._handle)==null?void 0:e.getTexture()}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return Bt(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}disposeOffscreenBuffers(){this._handle=Pe(this._handle),this._discardSnapshots()}set maxCascades(e){this.settings.maxNumCascadesHighQuality=Ir(Math.floor(e),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(e){this._enabled=e,e||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&this.depthTexture!=null}get cascades(){for(let e=0;e<this._numCascades;++e)ft[e]=this._cascades[e];return ft.length=this._numCascades,ft}start(e,r,i,o,a){xe(this.enabled);const{near:s,far:n}=ta(i);this._computeCascadeDistances(s,n,o),this._textureHeight=this._computeTextureHeight(e,a,o),this._setupMatrices(e,r);const{viewMatrix:l,projectionMatrix:c}=e;for(let p=0;p<this._numCascades;++p)this._constructCascade(p,c,l,r);this._lastOrigin=null,this.clear()}finish(){var e;xe(this.enabled),(e=this._handle)==null||e.detachDepth()}getShadowMapMatrices(e){if(!this._lastOrigin||!hi(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||Ce(),U(this._lastOrigin,e);for(let r=0;r<this._numCascades;++r){Ft(mr,this._cascades[r].lightMat,e);for(let i=0;i<16;++i)fr[16*r+i]=mr[i]}}return fr}moveSnapshot(e){var r,i;xe(this.enabled),(r=this._handle)==null||r.detachDepth(),(i=this._snapshots[e])==null||i.release(),this._snapshots[e]=this._handle,this._handle=null,this.clear()}copySnapshot(e){var l,c,p,v;const r=(c=(l=this._handle)==null?void 0:l.getTexture())==null?void 0:c.descriptor;if(!this.enabled||!r)return;(p=this._snapshots[e])==null||p.release();const{width:i,height:o}=r,a=e===wt.Highlight?"shadow highlight snapshot":"shadow no highlight snapshot";this._snapshots[e]=this._fbos.acquire(i,o,a,j.RGBA4);const s=this._fbos.rctx;this._bindFbo();const n=s.bindTexture((v=this._snapshots[e])==null?void 0:v.getTexture(),Xe.TEXTURE_UNIT_FOR_UPDATES);s.gl.copyTexSubImage2D($r.TEXTURE_2D,0,0,0,0,0,i,o),s.bindTexture(n,Xe.TEXTURE_UNIT_FOR_UPDATES)}getSnapshot(e){var r;return this.enabled?(r=this._snapshots[e])==null?void 0:r.getTexture():null}clear(){const e=this._fbos.rctx;this._ensureFbo(),this._bindFbo(),e.setClearColor(1,1,1,1),e.clear(te.COLOR|te.DEPTH)}_computeTextureHeight(e,r,i){const o=Math.min(window.devicePixelRatio,r)/e.pixelRatio,a=i?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality,s=Ri(Math.floor(Math.max(e.fullWidth,e.fullHeight)*o*a)),n=Math.min(this._maxTextureWidth,this._numCascades*s);return Oi(n/this._numCascades)}_ensureFbo(){var e,r,i,o,a;((r=(e=this._handle)==null?void 0:e.fbo)==null?void 0:r.width)===this._textureWidth&&((i=this._handle)==null?void 0:i.fbo.height)===this._textureHeight||((o=this._handle)==null||o.release(),this._handle=this._fbos.acquire(this._textureWidth,this._textureHeight,"shadow map",j.RGBA4)),(a=this._handle)==null||a.acquireDepth(Pi.DEPTH16_BUFFER)}_discardSnapshot(e){this._snapshots[e]=Pe(this._snapshots[e])}_discardSnapshots(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0}_bindFbo(){var e;this._fbos.rctx.bindFramebuffer((e=this._handle)==null?void 0:e.fbo)}_constructCascade(e,r,i,o){const a=this._cascades[e],s=-this._cascadeDistances[e],n=-this._cascadeDistances[e+1],l=(r[10]*s+r[14])/Math.abs(r[11]*s+r[15]),c=(r[10]*n+r[14])/Math.abs(r[11]*n+r[15]);xe(l<c);for(let g=0;g<8;++g){Bt(hr,g%4==0||g%4==3?-1:1,g%4==0||g%4==1?-1:1,g<4?l:c,1);const _=F[g];Ki(_,hr,this._projectionViewInverse),_[0]/=_[3],_[1]/=_[3],_[2]/=_[3]}di(mt,F[0]),a.camera.viewMatrix=Ft(Xo,this._modelViewLight,mt);for(let g=0;g<8;++g)wr(F[g],F[g],a.camera.viewMatrix);let p=F[0][2],v=F[0][2];for(let g=1;g<8;++g)p=Math.min(p,F[g][2]),v=Math.max(v,F[g][2]);p-=200,v+=200,a.camera.near=-v,a.camera.far=-p,ea(i,o,p,v,a.camera),yt(a.lightMat,a.camera.projectionMatrix,a.camera.viewMatrix);const m=this._textureHeight;a.camera.viewport=[e*m,0,m,m]}_setupMatrices(e,r){yt(this._projectionView,e.projectionMatrix,e.viewMatrix),ei(this._projectionViewInverse,this._projectionView);const i=this._viewingMode===eo.Global?e.eye:br(mt,0,0,1);ti(this._modelViewLight,[0,0,0],[-r[0],-r[1],-r[2]],i)}_computeCascadeDistances(e,r,i){const o=i?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor(Xi(r/e,4)),o);const a=(r-e)/this._numCascades,s=(r/e)**(1/this._numCascades);let n=e,l=e;for(let c=0;c<this._numCascades+1;++c)this._cascadeDistances[c]=Vi(n,l,this.settings.splitSchemeLambda),n*=s,l+=a}get test(){}}const Xo=z(),hr=rt(),F=[];for(let t=0;t<8;++t)F.push(rt());const dr=w(),ur=w(),Yo=w(),gr=w(),pr=w(),mt=Ce(),ft=[],mr=z(),fr=Y.concat(Y,Y,Y,Y),I=w(),de=w(),X=[w(),w(),w(),w()],T=w(),vt=w(),W=w(),Se=w(),ue=w(),ge=w(),We=w();function Jo(t,e,r,i,o,a,s,n){J(I,0,0);for(let y=0;y<4;++y)Q(I,I,t[y]);pe(I,I,.25),J(de,0,0);for(let y=4;y<8;++y)Q(de,de,t[y]);pe(de,de,.25),we(X[0],t[4],t[5],.5),we(X[1],t[5],t[6],.5),we(X[2],t[6],t[7],.5),we(X[3],t[7],t[4],.5);let l=0,c=Wt(X[0],I);for(let y=1;y<4;++y){const S=Wt(X[y],I);S<c&&(c=S,l=y)}me(T,X[l],t[l+4]);const p=T[0];let v,m;T[0]=-T[1],T[1]=p,me(vt,de,I),O(vt,T)<0&&Ui(T,T),we(T,T,vt,r),Ut(T,T),v=m=O(me(W,t[0],I),T);for(let y=1;y<8;++y){const S=O(me(W,t[y],I),T);S<v?v=S:S>m&&(m=S)}qi(i,I),pe(W,T,v-e),Q(i,i,W);let g=-1,_=1,L=0,Z=0;for(let y=0;y<8;++y){me(Se,t[y],i),Ut(Se,Se);const S=T[0]*Se[1]-T[1]*Se[0];S>0?S>g&&(g=S,L=y):S<_&&(_=S,Z=y)}le(g>0,"leftArea"),le(_<0,"rightArea"),pe(ue,T,v),Q(ue,ue,I),pe(ge,T,m),Q(ge,ge,I),We[0]=-T[1],We[1]=T[0];const se=je(i,t[Z],ge,Q(W,ge,We),1,o),at=je(i,t[L],ge,W,1,a),Ee=je(i,t[L],ue,Q(W,ue,We),1,s),ne=je(i,t[Z],ue,W,1,n);le(se,"rayRay"),le(at,"rayRay"),le(Ee,"rayRay"),le(ne,"rayRay")}function d(t,e){return 3*e+t}const vr=w();function D(t,e){return J(vr,t[e],t[e+3]),vr}const P=w(),h=Ji();function Ko(t,e,r,i,o){me(P,r,i),pe(P,P,.5),h[0]=P[0],h[1]=P[1],h[2]=0,h[3]=P[1],h[4]=-P[0],h[5]=0,h[6]=P[0]*P[0]+P[1]*P[1],h[7]=P[0]*P[1]-P[1]*P[0],h[8]=1,h[d(0,2)]=-O(D(h,0),t),h[d(1,2)]=-O(D(h,1),t);let a=O(D(h,0),r)+h[d(0,2)],s=O(D(h,1),r)+h[d(1,2)],n=O(D(h,0),i)+h[d(0,2)],l=O(D(h,1),i)+h[d(1,2)];a=-(a+n)/(s+l),h[d(0,0)]+=h[d(1,0)]*a,h[d(0,1)]+=h[d(1,1)]*a,h[d(0,2)]+=h[d(1,2)]*a,a=1/(O(D(h,0),r)+h[d(0,2)]),s=1/(O(D(h,1),r)+h[d(1,2)]),h[d(0,0)]*=a,h[d(0,1)]*=a,h[d(0,2)]*=a,h[d(1,0)]*=s,h[d(1,1)]*=s,h[d(1,2)]*=s,h[d(2,0)]=h[d(1,0)],h[d(2,1)]=h[d(1,1)],h[d(2,2)]=h[d(1,2)],h[d(1,2)]+=1,a=O(D(h,1),e)+h[d(1,2)],s=O(D(h,2),e)+h[d(2,2)],n=O(D(h,1),r)+h[d(1,2)],l=O(D(h,2),r)+h[d(2,2)],a=-.5*(a/s+n/l),h[d(1,0)]+=h[d(2,0)]*a,h[d(1,1)]+=h[d(2,1)]*a,h[d(1,2)]+=h[d(2,2)]*a,a=O(D(h,1),e)+h[d(1,2)],s=O(D(h,2),e)+h[d(2,2)],n=-s/a,h[d(1,0)]*=n,h[d(1,1)]*=n,h[d(1,2)]*=n,o[0]=h[0],o[1]=h[1],o[2]=0,o[3]=h[2],o[4]=h[3],o[5]=h[4],o[6]=0,o[7]=h[5],o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=h[6],o[13]=h[7],o[14]=0,o[15]=h[8]}function ea(t,e,r,i,o){const a=1/F[0][3],s=1/F[4][3];xe(a<s);let n=a+Math.sqrt(a*s);const l=Math.sin(Gi(t[2]*e[0]+t[6]*e[1]+t[10]*e[2]));n/=l,Jo(F,n,l,dr,ur,Yo,gr,pr),Ko(dr,ur,gr,pr,o.projectionMatrix),o.projectionMatrix[10]=2/(r-i),o.projectionMatrix[14]=-(r+i)/(r-i)}function ta(t){let{near:e,far:r}=t;return e<2&&(e=2),r<2&&(r=2),e>=r&&(e=2,r=4),{near:e,far:r}}let A=class extends Xr{constructor(t){super(t),this._pending=new ra,this._changes=new $i,this._renderers=new Map,this._sortedRenderers=new Cr,this._geometries=new Map,this._hasHighlights=!1,this._hasWater=!1}destroy(){this._changes.prune(),this._renderers.forEach(t=>t.destroy()),this._renderers.clear(),this._sortedRenderers.clear(),this._geometries.clear(),this._pending.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get rctx(){return this.rendererContext.rctx}get _materials(){return this.rendererContext.materials}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccludedDraped(){for(const t of this._renderers.values())if(t.numGeometries!==0&&!t.queryRenderOccludedState(Oe.Occlude))return!0;return!1}get isEmpty(){return!this.updating&&this._renderers.size===0&&this._geometries.size===0}getMaterialRenderer(t){return this._renderers.get(t)}get sortedRenderers(){return this._sortedRenderers}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const t=Ai(this._changes);let e=!1;return t.forEach((r,i)=>{let o=this._renderers.get(i);!o&&r.adds.length>0&&(o=new Fi({material:i}),o.initializeRenderContext(this.rendererContext.pluginContext,this._materials),this._renderers.set(i,o),e=!0),o&&(o.modify(r),o.numGeometries===0&&(this._renderers.delete(i),o.destroy(),e=!0))}),this._changes.clear(),e&&this._updateSortedMaterialRenderers(),this._hasHighlights=fe(this._renderers,r=>{const i=r.produces.get(V.DRAPED_MATERIAL);return!!i&&i(R.Highlight)}),this._hasWater=fe(this._renderers,r=>{const i=r.produces.get(V.DRAPED_WATER);return!!i&&i(R.Normal)}),this.notifyChange("updating"),!0}addGeometries(t,e){if(t.length===0)return;const r=this._validateRenderGeometries(t);for(const o of r)this._geometries.set(o.id,o);const i=this._pending.empty;for(const o of r)this._pending.adds.add(o);i&&this.notifyChange("updating"),e===Vt.UPDATE&&this._notifyGraphicGeometryChanged(t)}removeGeometries(t,e){const r=this._pending.empty,i=this._pending.adds;for(const o of t)i.has(o)?(this._pending.removed.add(o),i.delete(o)):this._pending.removed.has(o)||this._pending.removes.add(o),this._geometries.delete(o.id);r&&!this._pending.empty&&this.notifyChange("updating"),e===Vt.UPDATE&&this._notifyGraphicGeometryChanged(t)}modifyGeometries(t,e){const r=this._changes.updates.length===0;for(const i of t){const o=this._changes.updates.pushNew();o.renderGeometry=this._validateRenderGeometry(i),o.updateType=e}switch(r&&this._changes.updates.length>0&&this.notifyChange("updating"),e){case gt.TRANSFORMATION:case gt.GEOMETRY:return this._notifyGraphicGeometryChanged(t);case gt.VISIBILITY:return this._notifyGraphicVisibilityChanged(t)}}updateAnimation(t){let e=!1;return this._sortedRenderers.forAll(r=>e=!!r.updateAnimation&&r.updateAnimation(t)||e),e}precompile(t){return this._sortedRenderers.reduce((e,r)=>r.precompile(t)||e,!1)}render(t){this._sortedRenderers.forAll(e=>{const r=e.acquireTechniques(t);r&&(e.render(t,r),Ei(r))})}intersect(t,e,r,i,o){for(const a of this._geometries.values()){if(!i(a))continue;this._intersectRenderGeometry(a,r,e,0,t,o);const s=this.rendererContext.longitudeCyclical;s&&(a.boundingSphere[0]-a.boundingSphere[3]<s.min&&this._intersectRenderGeometry(a,r,e,s.range,t,o),a.boundingSphere[0]+a.boundingSphere[3]>s.max&&this._intersectRenderGeometry(a,r,e,-s.range,t,o)),o++}return o}_updateSortedMaterialRenderers(){this._sortedRenderers.clear();let t=0;for(const e of this._renderers.values())e.drapedPriority=t++,this._sortedRenderers.push(e);this._sortedRenderers.sort((e,r)=>{var i,o,a,s;return((i=r.material)==null?void 0:i.renderPriority)===((o=e.material)==null?void 0:o.renderPriority)?e.drapedPriority-r.drapedPriority:(((a=r.material)==null?void 0:a.renderPriority)||0)-(((s=e.material)==null?void 0:s.renderPriority)||0)})}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes)),this._changes.updates.filterInPlace(({renderGeometry:t})=>!this._pending.has(t)),this._pending.clear()}_intersectRenderGeometry(t,e,r,i,o,a){if(!t.visible||!t.material.visible)return;let s=0;i+=t.transformation[12],s=t.transformation[13],_t[0]=r[0]-i,_t[1]=r[1]-s,t.screenToWorldRatio=this.rendererContext.screenToWorldRatio,t.material.intersectDraped(t,null,o,_t,(n,l,c)=>{ia(e,c,a,t.material.renderPriority,o,t.layerUid,t.graphicUid)},e)}_notifyGraphicGeometryChanged(t){if(this.drapeSource.notifyGraphicGeometryChanged==null)return;let e;for(const{graphicUid:r}of t)r!=null&&r!==e&&(this.drapeSource.notifyGraphicGeometryChanged(r),e=r)}_notifyGraphicVisibilityChanged(t){if(this.drapeSource.notifyGraphicVisibilityChanged==null)return;let e;for(const{graphicUid:r}of t)r!=null&&r!==e&&(this.drapeSource.notifyGraphicVisibilityChanged(r),e=r)}_validateRenderGeometries(t){for(const e of t)this._validateRenderGeometry(e);return t}_validateRenderGeometry(t){return t.localOrigin==null&&(t.localOrigin=this._localOriginFactory.getOrigin(Fr(t.boundingSphere))),t}get test(){}};x([b()],A.prototype,"drapeSource",void 0),x([b()],A.prototype,"updating",null),x([b()],A.prototype,"rctx",null),x([b({constructOnly:!0})],A.prototype,"rendererContext",void 0),x([b()],A.prototype,"_materials",null),x([b()],A.prototype,"_localOriginFactory",null),x([b({readOnly:!0})],A.prototype,"isEmpty",null),x([b()],A.prototype,"_renderers",void 0),x([b()],A.prototype,"_geometries",void 0),A=x([et("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],A);class ra{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return this.adds.size===0&&this.removes.size===0&&this.removed.size===0}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}}function ia(t,e,r,i,o,a,s){const n=new io(a,s,e),l=c=>{c.set(ao.OVERLAY,n,t.dist,t.normal,t.transformation,r,i)};if((o.results.min.drapedLayerOrder==null||r>=o.results.min.drapedLayerOrder)&&(o.results.min.dist==null||o.results.ground.dist<=o.results.min.dist)&&l(o.results.min),o.options.store!==Zt.MIN&&(o.results.max.drapedLayerOrder==null||r<o.results.max.drapedLayerOrder)&&(o.results.max.dist==null||o.results.ground.dist>o.results.max.dist)&&l(o.results.max),o.options.store===Zt.ALL){const c=oo(o.ray);l(c),o.results.all.push(c)}}const _t=w();class _r extends ie{constructor(e,r,i){super(e,r,new oe(Mo,()=>ae(()=>Promise.resolve().then(()=>ua),void 0,import.meta.url)),i)}initializePipeline(e){return e.hasAlpha?K({blending:Rt,colorWrite:ee}):K({colorWrite:ee})}}class qr extends no{constructor(){super(...arguments),this.hasAlpha=!1}}x([so()],qr.prototype,"hasAlpha",void 0);class Mt extends Fe{constructor(){super(...arguments),this.overlayIndex=E.INNER,this.opacity=1}}function kr(){const t=new re;return t.include(Tt),t.fragment.uniforms.add(new $("tex",e=>e.texture)),t.fragment.uniforms.add(new Ie("overlayIdx",e=>e.overlayIndex)),t.fragment.uniforms.add(new M("opacity",e=>e.opacity)),t.fragment.main.add(u`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`),t}const oa=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:Mt,build:kr},Symbol.toStringTag,{value:"Module"}));class xr extends ie{constructor(e,r,i){super(e,r,new oe(oa,()=>ae(()=>Promise.resolve().then(()=>ga),void 0,import.meta.url)),i)}}let H=class extends Li{constructor(t){super(t),this._overlays=null,this._renderTargets=null,this._overlayParameters=new Mt,this.hasHighlights=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new Cr,this._passParameters=new Ot,this._materials=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new tt,this.worldToPCSRatio=1,this.events=new Br,this.longitudeCyclical=null,this.produces=new Map([[V.DRAPED_MATERIAL,e=>e!==R.Highlight||this.hasHighlights],[V.DRAPED_WATER,()=>this._hasWater]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const{view:t}=this,{_stage:e}=t,r=e.renderer.fboCache,i=e.renderView,{waterTextures:o,textures:a}=i;this._renderContext=new Ur(this._rctx,new Qo(r,t.state.viewingMode)),this.addHandles([Te(()=>o.updating,()=>this.events.emit("content-changed"),lt),Te(()=>this.spatialReference,l=>this._localOriginFactory=new pi(l),lt),Kr(()=>this.view.allLayerViews,"after-changes",()=>this._sortedDrapeSourceRenderersDirty=!0),Te(()=>Wr(this.view.highlights),()=>this._sortedDrapeSourceRenderersDirty=!0,lt)]),this._materials=new Uo(a,this._techniques,()=>{this.notifyChange("rendersOccludedDraped"),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")},()=>this.events.emit("content-changed"));const{_bindParameters:s,_camera:n}=this;s.slot=V.DRAPED_MATERIAL,s.mainDepth=null,n.near=1,n.far=1e4,n.relativeElevation=null,s.camera=this._camera,s.oitPass=Or.NONE,s.updateLighting([new Di(ui())],0,0,Je.Immediate),this.addHandles(this.view.resourceController.scheduler.registerTask(lo.STAGE,this))}destroy(){this._renderers.forEach(t=>t.destroy()),this._renderers.clear(),this._passParameters.texture=De(this._passParameters.texture),this.disposeOverlays()}get _bindParameters(){return this._renderContext.bind}get _rctx(){return this.view._stage.renderView.renderingContext}get _techniques(){return this.view._stage.renderView.techniques}get rctx(){return this._rctx}get materials(){return this._materials}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}get pluginContext(){return this._pluginContext}initializeRenderContext(t){this._pluginContext=t,this._techniques.precompile(xr)}uninitializeRenderContext(){}acquireTechniques(){return[]}render(){}get updating(){return this._sortedDrapeSourceRenderersDirty||fe(this._renderers,t=>t.updating)}get hasOverlays(){return this._overlays!=null&&this._renderTargets!=null}getMaterialRenderer(t){for(const e of this._renderers.values()){const r=e.getMaterialRenderer(t);if(r)return r}return null}get layers(){return this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers(),this._sortedRenderers.map(t=>t.drapeSource.layer).filter(t=>!!t)}createGeometryDrapeSourceRenderer(t){return this.createDrapeSourceRenderer(t,A)}createDrapeSourceRenderer(t,e,r){const i=this._renderers.get(t);i!=null&&i.destroy();const o=new e({...r,rendererContext:this,drapeSource:t});return this._renderers.set(t,o),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in t&&this.addHandles(Te(()=>t.fullOpacity,()=>this.events.emit("content-changed")),t),o}removeDrapeSourceRenderer(t){if(t==null)return;const e=this._renderers.get(t);e!=null&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(t),this.removeHandles(t),e.destroy())}computeValidity(){var t;return((t=this._renderTargets)==null?void 0:t.computeValidity())??0}releaseRenderTargets(){var t;(t=this._renderTargets)==null||t.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(t){this._hasTargetWithoutRasterImage=!!this._overlays&&nt(t,e=>e.drapeTargetType===fi.WithoutRasterImage)}ensureDrapeSources(t){this._overlays?(this._hasDrapedFeatureSource=nt(t,e=>e.drapeSourceType===ze.Features),this._hasDrapedRasterSource=nt(t,e=>e.drapeSourceType===ze.RasterImage)):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(t,e,r=this._bindParameters.overlayStretch){this._overlays==null&&(this._renderTargets=new mo(this.view._stage.renderer.fboCache),this._overlays=[new Yt,new Yt]),this.ensureDrapeTargets(t),this.ensureDrapeSources(e),this._bindParameters.overlayStretch=r}disposeOverlays(){this._overlays=null,this._renderTargets=De(this._renderTargets),this.events.emit("textures-disposed")}getTexture(t){var e,r;if(t!=null)return t===C.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?(e=this._renderTargets)==null?void 0:e.getTexture(C.Color):(r=this._renderTargets)==null?void 0:r.getTexture(t)}get running(){return this.updating}runTask(t){this._processDrapeSources(t,()=>!0)}_processDrapeSources(t,e){let r=!1;for(const[i,o]of this._renderers){if(t.done)break;(i.destroyed||e(i))&&o.commitChanges()&&(r=!0,t.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,r=!0,this._updateSortedDrapeSourceRenderers()),r&&(this._overlays!=null&&this._renderers.size===0&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=fe(this._renderers,i=>i.hasHighlights),this.notifyChange("rendersOccludedDraped"),this._updateHasWater())}processSyncDrapeSources(){this._processDrapeSources(co,t=>t.updatePolicy===mi.SYNC)}get isEmpty(){return!ct.OVERLAY_DRAW_DEBUG_TEXTURE&&!fe(this._renderers,t=>!t.isEmpty)}get hasWater(){return this._hasWater}get rendersOccludedDraped(){const t=this._renderContext.renderOccludedMask;this._renderContext.renderOccludedMask=xt,++this._techniques.precompiling;const e=this._sortedRenderers.some(({renderer:r})=>r.precompile(this._renderContext));return--this._techniques.precompiling,this._renderContext.renderOccludedMask=t,e}renders(t){if(ct.OVERLAY_DRAW_DEBUG_TEXTURE&&t!==C.Occluded&&t!==C.Highlight)return!0;++this._techniques.precompiling;const e=this._sortedRenderers.some(({renderer:r})=>r.precompile(this._renderContext));return--this._techniques.precompiling,e}get mode(){var t,e;return this.isEmpty?ye.Disabled:(t=this._renderTargets)!=null&&t.getTexture(C.WaterNormal)?ye.EnabledWithWater:(e=this._renderTargets)!=null&&e.getTexture(C.Color)?ye.Enabled:ye.Disabled}updateAnimation(t){let e=!1;return this._renderers.forEach(r=>e=r.updateAnimation(t)||e),e}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}precompileShaders(t){if(this._renderTargets){this._bindParameters.alignPixelEnabled=t.alignPixelEnabled,this._bindParameters.highlightGroupName=null,++this._techniques.precompiling;for(const e of this._renderTargets.targets){if(e.content===C.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const r=e.output;this._renderContext.output=r,this._bindParameters.slot=r===R.Normal?V.DRAPED_WATER:V.DRAPED_MATERIAL,e.content===C.Occluded&&(this._renderContext.renderOccludedMask=xt),this._sortedRenderers.forAll(({drapeSource:i,renderer:o})=>{e.content===C.ColorNoRasterImage&&i.drapeSourceType===ze.RasterImage||o.precompile(this._renderContext)}),this._renderContext.renderOccludedMask=ke}--this._techniques.precompiling}}drawOverlays(t){if(this._overlays&&this._renderTargets){for(const e of this._overlays)this.longitudeCyclical?e.setupGeometryViewsCyclical(this.longitudeCyclical):e.setupGeometryView();this._bindParameters.alignPixelEnabled=t.alignPixelEnabled;for(const e of this._renderTargets.targets){if(e.content===C.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const r=this._drawTarget(E.INNER,e,t),i=this._drawTarget(E.OUTER,e,t);(r||i)&&e.fbo.generateMipMap()}}}_drawTarget(t,e,r){const i=this._overlays[t],o=i.canvasGeometries;if(o.numViews===0)return!1;const{contentPixelRatio:a}=r;this._screenToWorldRatio=a*i.mapUnitsPerPixel/this._bindParameters.overlayStretch;const s=e.output;if(this.isEmpty||s===R.Normal&&!this.hasWater||!i.hasSomeSizedView())return!1;const{_rctx:n,_bindParameters:l}=this;if(this._camera.pixelRatio=i.pixelRatio*a,this._renderContext.output=s,l.screenToWorldRatio=this._screenToWorldRatio,l.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,l.slot=s===R.Normal?V.DRAPED_WATER:V.DRAPED_MATERIAL,e.content===C.Occluded&&(this._renderContext.renderOccludedMask=xt),l.highlightGroupName=null,!this.renders(e.content))return this._renderContext.renderOccludedMask=ke,!1;const{resolution:c}=i,p=t===E.INNER?0:c;if(n.setViewport(p,0,c,c),this._bindTargetFBO(e),t===E.INNER&&(n.setClearColor(0,0,0,0),n.clear(te.COLOR)),ct.OVERLAY_DRAW_DEBUG_TEXTURE&&e.content!==C.Occluded&&e.content!==C.Highlight){this._techniques.precompile(_r,bt);const v=this._techniques.acquire(_r,bt);for(let m=0;m<o.numViews;m++)this._setViewParameters(o.extents[m],i),this._ensureDebugPatternResources(i.resolution,sa[t]),n.bindTechnique(v,l,this._passParameters),n.screen.draw();v.release()}if(e.output===R.Highlight){const{fboCache:v}=this.view._stage.renderer,m=this._resolution;Wo(n,v,{width:m,height:m},this.view.highlights,l,()=>this._renderAllGeometry(t,e),p,()=>this._bindTargetFBO(e))}else this._renderAllGeometry(t,e);return n.bindFramebuffer(null),this._renderContext.renderOccludedMask=ke,!0}_renderAllGeometry(t,e){const r=this._overlays[t],i=r.canvasGeometries;this._sortedRenderers.forAll(({drapeSource:o,renderer:a})=>{if(e.content===C.ColorNoRasterImage&&o.drapeSourceType===ze.RasterImage)return;const{fullOpacity:s}=o,n=s!=null&&s<1&&e.output===R.Color&&this._bindTemporaryFBO();for(let l=0;l<i.numViews;l++)this._setViewParameters(i.extents[l],r),a.render(this._renderContext);if(n){this._bindTargetFBO(e),this._overlayParameters.texture=n.getTexture(),this._overlayParameters.opacity=s,this._overlayParameters.overlayIndex=t;const l=this._techniques.acquire(xr);this._rctx.bindTechnique(l,this._bindParameters,this._overlayParameters),this._rctx.screen.draw(),l.release(),n.release()}})}_bindTargetFBO(t){const e=this._resolution,r=2*e;t.fbo.bind(this._rctx,r,e)}_bindTemporaryFBO(){const t=this._resolution,e=2*t,r=this.view._stage.renderer.fboCache,i=r.acquire(e,t,"overlay tmp");return r.rctx.bindFramebuffer(i.fbo),r.rctx.clear(te.COLOR),i}get _resolution(){var t;return((t=this._overlays)==null?void 0:t[E.INNER].resolution)??0}notifyContentChanged(){this.events.emit("content-changed")}intersect(t,e,r,i){var a;this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers();let o=0;for(const{renderer:s}of this._sortedRenderers)o=((a=s.intersect)==null?void 0:a.call(s,t,e,r,i,o))??o}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),this._renderers.size===0)return;const t=this.view.map.allLayers,e=t.length;this._renderers.forEach((r,i)=>{const o=t.indexOf(i.layer),a=o>=0,s=i.renderGroup??(a?Et.MapLayer:Et.ViewLayer),n=e*s+(a?o:0);this._sortedRenderers.push(new aa(i,r,n))}),this._sortedRenderers.sort((r,i)=>r.index-i.index)}_setViewParameters(t,e){const r=this._camera;r.viewport=[0,0,e.resolution,e.resolution],ri(r.projectionMatrix,0,t[2]-t[0],0,t[3]-t[1],r.near,r.far),ii(r.viewMatrix,[-t[0],-t[1],0])}_updateHasWater(){const t=fe(this._renderers,e=>e.hasWater);t!==this._hasWater&&(this._hasWater=t,this.events.emit("has-water"))}_ensureDebugPatternResources(t,e){if(br(this._passParameters.color,e[0],e[1],e[2]),this._passParameters.texture)return;const r=new Uint8Array(t*t*4);let i=0;for(let a=0;a<t;a++)for(let s=0;s<t;s++){const n=Math.floor(s/10),l=Math.floor(a/10);n<2||l<2||10*n>t-20||10*l>t-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&n&&1&l?1&s^1&a?0:255:1&n^1&l?0:128)}const o=new Ar(t);o.samplingMode=Mr.NEAREST,this._passParameters.texture=new Xe(this._rctx,o,r)}get test(){}};x([b()],H.prototype,"hasHighlights",void 0),x([b()],H.prototype,"_sortedDrapeSourceRenderersDirty",void 0),x([b({constructOnly:!0})],H.prototype,"view",void 0),x([b({readOnly:!0})],H.prototype,"_techniques",null),x([b()],H.prototype,"worldToPCSRatio",void 0),x([b()],H.prototype,"spatialReference",void 0),x([b({type:Boolean,readOnly:!0})],H.prototype,"updating",null),x([b()],H.prototype,"isEmpty",null),x([b({readOnly:!0})],H.prototype,"rendersOccludedDraped",null),H=x([et("esri.views.3d.terrain.OverlayRenderer")],H);class aa{constructor(e,r,i){this.drapeSource=e,this.renderer=r,this.index=i}}const sa=[[1,.5,.5],[.5,.5,1]],ks=-2,xt=Oe.OccludeAndTransparent,bt=new qr;bt.hasAlpha=!0;class Bs{constructor(e,r={}){this.geometry=e,this.screenToWorldRatio=1,this._transformation=z(),this._shaderTransformation=null,this._boundingSphere=null,this.id=Yr(),this.layerUid=r.layerUid,this.graphicUid=r.graphicUid,this.castShadow=r.castShadow??!1,r.objectShaderTransformation&&this.objectShaderTransformationChanged(r.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(e){oi(this._transformation,e),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(e){e==null?this._shaderTransformation=null:(this._shaderTransformation??(this._shaderTransformation=z()),yt(this._shaderTransformation,e,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(this._boundingSphere==null&&(this._boundingSphere??(this._boundingSphere=to()),wr(Fr(this._boundingSphere),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*ho(this.shaderTransformation)),this._boundingSphere):ro}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation??this.transformation}get attributes(){return this.geometry.attributes}get highlight(){return this.geometry.highlights}foreachHighlightGroup(e){this.geometry.foreachHighlightGroup(e)}get hasHighlights(){return this.geometry.hasHighlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(e){this.geometry.visible=e}}const na=Object.freeze(Object.defineProperty({__proto__:null,build:zr},Symbol.toStringTag,{value:"Module"})),la=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:Pt,blurSize:Dt,build:Hr,gridCellPixelSize:B,outlineSize:Ae},Symbol.toStringTag,{value:"Module"})),ca=Object.freeze(Object.defineProperty({__proto__:null,build:Vr},Symbol.toStringTag,{value:"Module"})),ha=Object.freeze(Object.defineProperty({__proto__:null,build:Gr},Symbol.toStringTag,{value:"Module"})),da=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:It,build:jr},Symbol.toStringTag,{value:"Module"})),ua=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Ot,build:Lr},Symbol.toStringTag,{value:"Module"})),ga=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:Mt,build:kr},Symbol.toStringTag,{value:"Module"}));export{Qt as A,qs as B,Ts as C,ke as D,E,_r as F,qr as G,Uo as H,be as I,Xt as O,wt as P,Wo as W,Qo as X,H as Z,ws as a,Je as b,Rs as c,C as d,Ye as e,ye as f,Bs as g,Hs as h,zs as i,vo as j,Ro as k,ko as l,Oo as m,q as n,Ls as o,So as p,Po as q,ks as r,N as s,xt as t,ps as u,A as v,fs as w,_s as x,ys as y,Ns as z};
