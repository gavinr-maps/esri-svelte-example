import{h,j as m}from"./Point-DB4Hp4hH.js";import{r as p}from"./unitConversionUtils-Dl04YuQU.js";function f(e){return e?$:w}function x(e,n){return n!=null&&n.mode?n.mode:f(e).mode}function E(e,n){return n??f(e)}function c(e,n){return x(e!=null&&e.hasZ,n)}function z(e,n){return E(e!=null&&!!e.hasZ,n)}function k(e){const n=v(e);return c(e.geometry,n)}function b(e){const n=v(e),o=c(e.geometry,n),t=n!=null&&o!=="on-the-ground"?P(n):0,r=n==null?void 0:n.featureExpressionInfo;return{mode:o,offset:t,featureExpressionInfo:r}}function q(e){return d(b(e))}function A(e){return d(e)||I(e)}function I(e){var n;return((n=e==null?void 0:e.featureExpressionInfo)==null?void 0:n.expression)==="0"}function d(e){if(!e||e.mode==="on-the-ground")return!1;const n=e!=null&&e.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!n||n==="0")}function v(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function a(e,n){if(!(e!=null&&e.offset))return 0;const{offset:o,unit:t}=e;if(t==="decimal-degrees")return 0;const r=t!=="unknown"&&t?t:"meters",i=h(n);return i?m(o,r,i):0}function B(e,n,o){if(!(o!=null&&o.mode))return;const t=e.hasZ?e.z:0,r=a(o,e.spatialReference);switch(o.mode){case"absolute-height":return t-r;case"on-the-ground":return 0;case"relative-to-ground":return t-((n.elevationProvider.getElevation(e.x,e.y,t,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return t-((n.elevationProvider.getElevation(e.x,e.y,t,e.spatialReference,"scene")??0)+r)}}function C(e,n,o,t=null){return g(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,o,t)}function D(e,n,o,t,r=null){return g(e,n[0],n[1],n.length>2?n[2]:0,o,t,r)}function g(e,n,o,t,r,i,s=null){if(i==null)return;const u=s!=null?s.mode:"absolute-height";if(u==="on-the-ground")return 0;const{absoluteZ:l}=y(n,o,t,r,e,i);return Z(l,n,o,t,r,e,s,u)}function y(e,n,o,t,r,i){const s=a(i,t);switch(i.mode){case"absolute-height":return{absoluteZ:o+s,elevation:0};case"on-the-ground":{const u=r.elevationProvider.getElevation(e,n,0,t,"ground")??0;return{absoluteZ:u,elevation:u}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,o,t,"ground")??0;return{absoluteZ:o+u+s,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,o,t,"scene")??0;return{absoluteZ:o+u+s,elevation:u}}}}function Z(e,n,o,t,r,i,s,u){const l=a(s,r);switch(u){case"absolute-height":return e-l;case"relative-to-ground":return e-((i.elevationProvider.getElevation(n,o,t,r,"ground")??0)+l);case"relative-to-scene":return e-((i.elevationProvider.getElevation(n,o,t,r,"scene")??0)+l)}}function F(e,n){if(n==null)return!1;const{mode:o}=n;return o!=null&&(e==="scene"&&o==="relative-to-scene"||e==="ground"&&o!=="absolute-height")}function G(e,n,o){return o&&o.mode!==n?`${e} only support ${n} elevation mode`:null}function H(e,n,o){return(o==null?void 0:o.mode)===n?`${e} do not support ${n} elevation mode`:null}function J(e,n){return(n==null?void 0:n.featureExpressionInfo)!=null&&n.featureExpressionInfo.expression!=="0"?`${e} do not support featureExpressionInfo`:null}function K(e,n){n&&e.warn(".elevationInfo=",n)}function P(e){return((e==null?void 0:e.offset)??0)*p(e==null?void 0:e.unit)}const $={mode:"absolute-height",offset:0},w={mode:"on-the-ground",offset:null};export{K as $,g as E,H as P,P as R,G as Z,b as a,y as b,A as c,I as d,q as f,a as h,c as i,$ as j,k as l,C as m,B as p,x as r,z as s,E as u,d as v,J as w,D as x,F as y,w as z};
