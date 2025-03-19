import{n as i}from"./glsl-BH37Aalp.js";import{a as d}from"./BindType-BBwFZqyN.js";import{i as a}from"./Matrix3PassUniform-uCCQMnlP.js";function h({code:c},e){e.doublePrecisionRequiresObfuscation?c.add(i`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):c.add(i`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}class l extends a{constructor(e,t){super(e,"mat3",d.Draw,(r,v,o)=>r.setUniformMatrix3fv(e,t(v,o)))}}export{h as c,l as t};
