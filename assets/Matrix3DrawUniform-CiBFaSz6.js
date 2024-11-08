import{a as c}from"./BindType-BmZEZMMh.js";import{j as p}from"./subclass-BZA_h8Db.js";import{n as b}from"./compilerUtils-Dw3R0f-Z.js";import{o as d}from"./interfaces-DDtDqZYj.js";import{e as v}from"./VertexAttribute-Cq4MnHjR.js";let n=class{constructor(r,a,o,t,s=null){if(this.name=r,this.type=a,this.arraySize=s,this.bind={[c.Pass]:null,[c.Draw]:null},t)switch(o){case c.Pass:this.bind[c.Pass]=t;break;case c.Draw:this.bind[c.Draw]=t}}equals(r){return this.type===r.type&&this.name===r.name&&this.arraySize===r.arraySize}},U=class extends n{constructor(r,a){super(r,"float",c.Pass,(o,t,s)=>o.setUniform1f(r,a(t,s)))}},E=class extends n{constructor(r,a){super(r,"mat3",c.Pass,(o,t,s)=>o.setUniformMatrix3fv(r,a(t,s)))}},F=class extends n{constructor(r,a){super(r,"vec3",c.Pass,(o,t,s)=>o.setUniform3fv(r,a(t,s)))}},j=class extends n{constructor(r,a){super(r,"mat4",c.Pass,(o,t,s)=>o.setUniformMatrix4fv(r,a(t,s)))}};var i;function L(e){return e===i.Shadow||e===i.ShadowHighlight||e===i.ShadowExcludeHighlight||e===i.ViewshedShadow}function V(e){return C(e)||e===i.Normal}function k(e){return S(e)||e===i.Normal}function h(e){return e===i.Highlight||e===i.ObjectAndLayerIdColor}function q(e){return l(e)||h(e)}function l(e){return e===i.Color}function w(e){return l(e)||y(e)}function I(e){return l(e)||e===i.ObjectAndLayerIdColor}function g(e){return l(e)||e===i.Highlight}function R(e){return g(e)||m(e)}function A(e){return l(e)||h(e)}function x(e){return w(e)||h(e)}function C(e){return A(e)||m(e)}function S(e){return x(e)||m(e)}function m(e){return e===i.Depth}function y(e){return e===i.ColorEmission}(function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"})(i||(i={}));let G=class extends n{constructor(r,a){super(r,"vec3",c.Draw,(o,t,s,f)=>o.setUniform3fv(r,a(t,s,f)))}};function K(){return!!p("enable-feature:objectAndLayerId-rendering")}class Q extends n{constructor(r,a){super(r,"sampler2D",c.Draw,(o,t,s)=>o.bindTexture(r,a(t,s)))}}function W(e,r){switch(r.normalType){case u.Compressed:e.attributes.add(v.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(d`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case u.Attribute:e.attributes.add(v.NORMAL,"vec3"),e.vertex.code.add(d`vec3 normalModel() {
return normal;
}`);break;case u.ScreenDerivative:e.fragment.code.add(d`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:b(r.normalType);case u.COUNT:}}var u;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"})(u||(u={}));function X({code:e},r){r.doublePrecisionRequiresObfuscation?e.add(d`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`)}class Y extends n{constructor(r,a){super(r,"mat3",c.Draw,(o,t,s)=>o.setUniformMatrix3fv(r,a(t,s)))}}export{m as C,y as S,n as a,u as b,Y as c,X as d,K as e,E as f,G as g,F as h,j as i,k as j,L as k,I as l,A as m,i as n,U as o,h as p,l as q,V as r,Q as s,W as t,w as u,C as v,q as w,R as x};
