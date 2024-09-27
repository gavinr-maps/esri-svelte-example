import{o as d}from"./interfaces-B8ge7Jg9.js";import{a as c}from"./BindType-BmZEZMMh.js";import{n as p}from"./compilerUtils-BA04t1lN.js";import{e as h}from"./VertexAttribute-BnAa5VW0.js";function F(e){e.code.add(d`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}let l=class{constructor(r,o,s,a,n=null){if(this.name=r,this.type=o,this.arraySize=n,this.bind={[c.Pass]:null,[c.Draw]:null},a)switch(s){case c.Pass:this.bind[c.Pass]=a;break;case c.Draw:this.bind[c.Draw]=a}}equals(r){return this.type===r.type&&this.name===r.name&&this.arraySize===r.arraySize}},T=class extends l{constructor(r,o){super(r,"vec3",c.Pass,(s,a,n)=>s.setUniform3fv(r,o(a,n)))}},$=class extends l{constructor(r,o){super(r,"float",c.Pass,(s,a,n)=>s.setUniform1f(r,o(a,n)))}},M=class extends l{constructor(r,o){super(r,"mat4",c.Pass,(s,a,n)=>s.setUniformMatrix4fv(r,o(a,n)))}},U=class extends l{constructor(r,o){super(r,"vec3",c.Draw,(s,a,n,f)=>s.setUniform3fv(r,o(a,n,f)))}};class _ extends l{constructor(r,o){super(r,"sampler2D",c.Draw,(s,a,n)=>s.bindTexture(r,o(a,n)))}}let R=class extends l{constructor(r,o){super(r,"mat3",c.Pass,(s,a,n)=>s.setUniformMatrix3fv(r,o(a,n)))}};var t;function L(e){return A(e)||e===t.Depth||e===t.Normal||e===t.ObjectAndLayerIdColor}function A(e){return e===t.Shadow||e===t.ShadowHighlight||e===t.ShadowExcludeHighlight||e===t.ViewshedShadow}function H(e){return w(e)||e===t.Normal}function v(e){return e===t.Highlight||e===t.ObjectAndLayerIdColor}function E(e){return e===t.Color||v(e)}function u(e){return e===t.Color}function V(e){return u(e)||e===t.ObjectAndLayerIdColor}function b(e){return u(e)||e===t.Highlight}function z(e){return b(e)||m(e)}function g(e){return u(e)||v(e)}function w(e){return g(e)||m(e)}function m(e){return e===t.Depth}(function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.ViewshedShadow=6]="ViewshedShadow",e[e.Highlight=7]="Highlight",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"})(t||(t={}));function G({code:e},r){r.doublePrecisionRequiresObfuscation?e.add(d`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(d`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}class j extends l{constructor(r,o){super(r,"mat3",c.Draw,(s,a,n)=>s.setUniformMatrix3fv(r,o(a,n)))}}function k(e,r){switch(r.normalType){case i.Compressed:e.attributes.add(h.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(d`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case i.Attribute:e.attributes.add(h.NORMAL,"vec3"),e.vertex.code.add(d`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(d`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:p(r.normalType);case i.COUNT:case i.Ground:}}var i;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"})(i||(i={}));export{l as a,F as b,$ as c,j as d,G as e,R as f,U as g,T as h,M as i,V as j,i as k,L as l,m,H as n,t as o,w as p,E as q,A as r,_ as s,k as t,v as u,u as v,g as w,z as x};
