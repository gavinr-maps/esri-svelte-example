import{s as O,f as P,o as b}from"./VertexColor.glsl-_ARMpsAT.js";import{d as z,f as S,e as g,a as C,w as V,s as D,b as A}from"./Texture-Fac_8AOC.js";import{o as d}from"./Matrix3DrawUniform-CiBFaSz6.js";import{o as l}from"./interfaces-DDtDqZYj.js";import{e as m}from"./VertexAttribute-Cq4MnHjR.js";import{d as h}from"./sdfPrimitives-CUWZbMRe.js";import{z as $}from"./Point-Cg0-ChZE.js";import{x as R,l as M,m as j}from"./mat4-GpOFENPA.js";import{e as H}from"./mat4f64-Dk4dwAN8.js";import{u as T,s as U}from"./vec3f64-BLpZdpfb.js";import{s as G}from"./vec42-YcqnINSP.js";import{t as E,N as F}from"./vec4f64-o2zAXfmz.js";import{$ as N}from"./projection-B971H0Re.js";import{g as I,y as k,E as Y}from"./aaBoundingBox-BE7cC1jD.js";import{A as Z,B,C as q,b as L}from"./Polyline-D9YkgmM_.js";import{u as J}from"./meshVertexSpaceUtils-CXzOFlTI.js";import{e as v}from"./projectVectorToVector-G2uWGoIb.js";import{o as K,x as Q}from"./hydratedFeatures-DBKLr8hT.js";const W=.5;function Oe(e,t){e.include(O),e.attributes.add(m.POSITION,"vec3"),e.attributes.add(m.NORMAL,"vec3"),e.attributes.add(m.CENTEROFFSETANDDISTANCE,"vec4");const o=e.vertex;z(o,t),S(o,t),o.uniforms.add(new g("viewport",(n,i)=>i.camera.fullViewport),new d("polygonOffset",n=>n.shaderPolygonOffset),new d("cameraGroundRelative",(n,i)=>i.camera.aboveGround?1:-1)),t.hasVerticalOffset&&P(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(l`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(l`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${t.terrainDepthTest?l.float(0):l`sign(pointGroundDistance)`};
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
  `),t.draped&&!t.hasVerticalOffset||C(o),t.draped||(o.uniforms.add(new d("perDistancePixelRatio",(n,i)=>Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2))),o.code.add(l`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${l.float(W)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),t.screenCenterOffsetUnitsEnabled&&V(o),t.hasScreenSizePerspective&&b(o),o.code.add(l`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?l`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?"":l`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function X(e){e.uniforms.add(new D("alignPixelEnabled",(t,o)=>o.alignPixelEnabled)),e.code.add(l`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(l`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Pe(e){e.vertex.uniforms.add(new d("renderTransparentlyOccludedHUD",(t,o)=>o.hudRenderStyle===h.Occluded?1:o.hudRenderStyle===h.NotOccluded?0:.75),new g("viewport",(t,o)=>o.camera.fullViewport),new A("hudVisibilityTexture",(t,o)=>{var n;return(n=o.hudVisibility)==null?void 0:n.getTexture()})),e.vertex.include(X),e.vertex.code.add(l`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function be(e,t){if(e.type==="point")return c(e,t,!1);if(K(e))switch(e.type){case"extent":return c(e.center,t,!1);case"polygon":return c(e.centroid,t,!1);case"polyline":return c(w(e),t,!0);case"mesh":return c(J(e.vertexSpace,e.spatialReference)??e.extent.center,t,!1);case"multipoint":return}else switch(e.type){case"extent":return c(_(e),t,!0);case"polygon":return c(ee(e),t,!0);case"polyline":return c(w(e),t,!0);case"multipoint":return}}function w(e){const t=e.paths[0];if(!t||t.length===0)return null;const o=Z(t,B(t)/2);return v(o[0],o[1],o[2],e.spatialReference)}function _(e){return v(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),e.zmin!=null&&e.zmax!=null&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}function ee(e){const t=e.rings[0];if(!t||t.length===0)return null;const o=q(e.rings,!!e.hasZ);return v(o[0],o[1],o[2],e.spatialReference)}function c(e,t,o){const n=o?e:Q(e);return t&&e?N(e,n,t)?n:null:n}function ze(e){if(!e)return 0;switch(e.type){case"point":return e.z;case"extent":return e.zmax;case"polygon":return e.hasZ?e.rings.reduce((t,o)=>o.reduce((n,i)=>Math.max(n,i[2]),t),-1/0):void 0;case"polyline":return e.hasZ?e.paths.reduce((t,o)=>o.reduce((n,i)=>Math.max(n,i[2]),t),-1/0):void 0;case"mesh":return e.extent.zmax;case"multipoint":return}}function Se(e,t,o,n=0){if(e){t||(t=L());const i=e;let r=.5*i.width*(o-1),a=.5*i.height*(o-1);return i.width<1e-7*i.height?r+=a/20:i.height<1e-7*i.width&&(a+=r/20),G(t,i.xmin-r-n,i.ymin-a-n,i.xmax+r+n,i.ymax+a+n),t}return null}function Ce(e,t,o=null){const n=E(F);return e!=null&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),t!=null?n[3]=t:e!=null&&e.length>3&&(n[3]=e[3]),o&&(n[0]*=o,n[1]*=o,n[2]*=o,n[3]*=o),n}function Ve(e,t,o,n,i,r=[0,0,0,0]){for(let a=0;a<3;++a)r[a]=(e==null?void 0:e[a])!=null?e[a]:(o==null?void 0:o[a])!=null?o[a]:i[a];return r[3]=t??n??i[3],r}function De(e=U,t,o,n=1){const i=new Array(3);if(t==null||o==null)i[0]=1,i[1]=1,i[2]=1;else{let r,a=0;for(let s=2;s>=0;s--){const p=e[s];let f;const x=p!=null,y=s===0&&!r&&!x,u=o[s];p==="symbol-value"||y?f=u!==0?t[s]/u:1:x&&p!=="proportional"&&isFinite(p)&&(f=u!==0?p/u:1),f!=null&&(i[s]=f,r=f,a=Math.max(a,Math.abs(f)))}for(let s=2;s>=0;s--)i[s]==null?i[s]=r:i[s]===0&&(i[s]=.001*a)}for(let r=2;r>=0;r--)i[r]/=n;return T(i)}function te(e){return e.isPrimitive!=null}function Ae(e){return oe(te(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function oe(e){const t=o=>o==null||o>=0;return Array.isArray(e)?e.every(t):t(e)}function $e(e,t,o,n=H()){return e&&R(n,n,-e/180*Math.PI),t&&M(n,n,t/180*Math.PI),o&&j(n,n,o/180*Math.PI),n}function Re(e,t,o){if(o.minDemResolution!=null)return o.minDemResolution;const n=$(t),i=I(e)*n,r=k(e)*n,a=Y(e)*(t.isGeographic?1:n);return i===0&&r===0&&a===0?o.minDemResolutionForPoints:.01*Math.max(i,r,a)}export{Ce as A,Ve as B,De as D,Re as E,ze as F,Se as S,Ae as U,oe as Z,be as b,Oe as d,$e as k,X as o,W as p,Pe as t};
