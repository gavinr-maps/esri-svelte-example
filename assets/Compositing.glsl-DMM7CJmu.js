import{g as p,p as c}from"./screenUtils-_ZIvrt5o.js";import{r as s}from"./vec2-maR1OrZI.js";import{A as g,c as u,s as l,o as f}from"./vec32-Dvg_eL9J.js";import{b as a}from"./sphere-C77djCO6.js";import{c as t}from"./plane-IENfwZlB.js";import"./interfaces-DDtDqZYj.js";import"./VertexAttribute-Cq4MnHjR.js";import"./vec2f64-miziP1SN.js";import"./BindType-BmZEZMMh.js";import"./Texture-Fac_8AOC.js";import{m as d,g as $}from"./Blit-B-VutIER.js";function z(e,o,r=a()){return b(e,p(o),r),g(r.direction,r.direction),r}function b(e,o,r){return j(e,e.screenToRender(o,c(t.get())),r)}function j(e,o,r){const i=c(s(t.get(),o));if(i[2]=0,!e.unprojectFromRenderScreen(i,r.origin))return null;const n=c(s(t.get(),o));n[2]=1;const m=e.unprojectFromRenderScreen(n,t.get());return m==null?null:(u(r.direction,m,r.origin),r)}function M(e,o,r){return R(e,e.screenToRender(o,c(t.get())),r)}function R(e,o,r){l(r.origin,e.eye);const i=f(t.get(),o[0],o[1],1),n=e.unprojectFromRenderScreen(i,t.get());return n==null?null:(u(r.direction,n,r.origin),r)}const h=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:d,build:$},Symbol.toStringTag,{value:"Module"}));export{h as C,R as f,b as g,j as l,z as m,M as p};