import{e as n,o as w,a as s,n as i}from"./Matrix3PassUniform-uCCQMnlP.js";import{e as l}from"./mat3f64-BBpwCtoL.js";import{e as F}from"./mat4f64-Dk4dwAN8.js";import{n as d}from"./vec3f64-BLpZdpfb.js";import{n as r}from"./glsl-BH37Aalp.js";import{e as v}from"./VertexAttribute-Cq4MnHjR.js";import{c as p,t as u}from"./Matrix3DrawUniform-DD7AqlIc.js";import{o as W}from"./Matrix4PassUniform-COGIPIq4.js";import{c as f}from"./NoParameters-t-PuNrgq.js";import{a as h}from"./FloatArray-BQXWSSJh.js";function V(o){o.attributes.add(v.POSITION,"vec3"),o.vertex.code.add(r`vec3 positionModel() { return position; }`)}function C(o,a){o.include(V);const t=o.vertex;t.include(p,a),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),t.uniforms.add(new n("transformWorldFromViewTH",e=>e.transformWorldFromViewTH),new n("transformWorldFromViewTL",e=>e.transformWorldFromViewTL),new w("transformViewFromCameraRelativeRS",e=>e.transformViewFromCameraRelativeRS),new W("transformProjFromView",e=>e.transformProjFromView),new u("transformWorldFromModelRS",e=>e.transformWorldFromModelRS),new s("transformWorldFromModelTH",e=>e.transformWorldFromModelTH),new s("transformWorldFromModelTL",e=>e.transformWorldFromModelTL)),t.code.add(r`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),t.code.add(r`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${a.spherical?r`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:r`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),o.fragment.uniforms.add(new n("transformWorldFromViewTL",e=>e.transformWorldFromViewTL)),t.code.add(r`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),o.fragment.code.add(r`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class j extends f{constructor(){super(...arguments),this.transformWorldFromViewTH=d(),this.transformWorldFromViewTL=d(),this.transformViewFromCameraRelativeRS=l(),this.transformProjFromView=F()}}class _ extends f{constructor(){super(...arguments),this.transformWorldFromModelRS=l(),this.transformWorldFromModelTH=d(),this.transformWorldFromModelTL=d()}}function m(o){o.varyings.add("linearDepth","float")}function R(o){o.vertex.uniforms.add(new h("nearFar",a=>a.camera.nearFar))}function c(o){o.vertex.code.add(r`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function y(o,a){const{vertex:t}=o;switch(a.output){case i.Color:case i.ColorEmission:if(a.receiveShadows)return m(o),void t.code.add(r`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.Shadow:case i.ShadowHighlight:case i.ShadowExcludeHighlight:case i.ViewshedShadow:return o.include(C,a),m(o),R(o),c(o),void t.code.add(r`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}t.code.add(r`void forwardLinearDepth() {}`)}function z(o){c(o),o.vertex.code.add(r`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),o.vertex.code.add(r`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function O(o,a){a.hasVertexColors?(o.attributes.add(v.COLOR,"vec4"),o.varyings.add("vColor","vec4"),o.vertex.code.add(r`void forwardVertexColor() { vColor = color; }`),o.vertex.code.add(r`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):o.vertex.code.add(r`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}export{j as F,V as a,O as e,m as i,y as n,z as o,R as t,C as v,_ as w};
