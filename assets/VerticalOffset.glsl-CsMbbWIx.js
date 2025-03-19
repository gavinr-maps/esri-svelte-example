import{s as v}from"./vec42-YcqnINSP.js";import{n as d}from"./vec4f64-o2zAXfmz.js";import{o as m}from"./vec32-Dvg_eL9J.js";import{n as p}from"./vec3f64-BLpZdpfb.js";import{e as t}from"./Matrix3PassUniform-uCCQMnlP.js";import{n as r}from"./glsl-BH37Aalp.js";import{c as S,d as z}from"./FloatArray-BQXWSSJh.js";function P(e){e.vertex.code.add(r`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(r`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(r`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(r`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(r`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(r`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function y(e){e.uniforms.add(new t("screenSizePerspective",a=>o(a.screenSizePerspective)))}function g(e){e.uniforms.add(new t("screenSizePerspectiveAlignment",a=>o(a.screenSizePerspectiveAlignment||a.screenSizePerspective)))}function o(e){return m(w,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const w=p();function $(e,a){const c=e.vertex;a.hasVerticalOffset?(O(c),a.hasScreenSizePerspective&&(e.include(P),g(c),z(e.vertex,a)),c.code.add(r`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${a.spherical?r`vec3 worldNormal = normalize(worldPos + localOrigin);`:r`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${a.hasScreenSizePerspective?r`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:r`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add(r`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const u=d();function O(e){e.uniforms.add(new S("verticalOffset",(a,c)=>{const{minWorldLength:s,maxWorldLength:i,screenLength:l}=a.verticalOffset,n=Math.tan(.5*c.camera.fovY)/(.5*c.camera.fullViewport[3]),f=c.camera.pixelRatio||1;return v(u,l*f,n,s,i)}))}export{$ as a,O as f,g as o,P as s,y as t};
