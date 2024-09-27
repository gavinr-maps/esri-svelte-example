import{n as D}from"./subclass-BR3PhgZG.js";import{H,D as d,n as L,f as V,O as Y}from"./mathUtils-ClvKsMak.js";import{a2 as I,j as J}from"./Point-DB4Hp4hH.js";import{j as K}from"./mat3-DRqs2t5W.js";import{e as Q}from"./mat3f64-BBpwCtoL.js";import{B as W,c as y,f as B,h as T}from"./mat4-ybYUU6jq.js";import{o as X,e as h}from"./mat4f64-Dk4dwAN8.js";import{a as $}from"./spatialReferenceEllipsoidUtils-BL8s_3ls.js";import{u as x}from"./computeTranslationToOriginAndRotation-CLzktXYu.js";import{c as N}from"./projectPointToVector-D3506wm2.js";import{m as Z}from"./meshVertexSpaceUtils-CtidK-ZY.js";import{i as R,e as E,f as M}from"./vec3-C3Q-RF_i.js";import{logProjectionError as A,transformNormal as b,transformTangent as k,projectFromPCPF as _,projectNormalFromPCPF as nn,projectTangentFromPCPF as tn,projectToPCPF as rn,projectNormalToPCPF as on,projectTangentToPCPF as en}from"./projection-CJ-ESJIf.js";const m=()=>D.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function Nn(n,t,{vertexSpace:r,spatialReference:e}){if(r.type==="georeferenced"){const u=n;if(!N(t,u,e))return!1;const{origin:c}=r;return V(n,u,c),!0}const o=$(e),i=n;if(!N(t,i,o))return!1;const{origin:l}=r,s=G;if(!x(e,l,s,o))return!1;const a=T(G,s);return a!=null&&(Y(n,i,a),!0)}function Un(n,t,r){const{vertexSpace:e,transform:o,vertexAttributes:i}=n,l=w(n.spatialReference,r,p.SOURCE|p.TARGET);if(Z(e,t)&&(!o||W(o.localMatrix,X))&&H(l,1)){const{position:s,normal:a,tangent:u}=i,c=r==null?void 0:r.allowBufferReuse;return{position:c?s:s.slice(),normal:c?a:a==null?void 0:a.slice(),tangent:c?u:u==null?void 0:u.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?un(n,n.vertexSpace,t.origin,r):an(n,n.vertexSpace,t.origin,r);case"georeferenced":return t.type==="local"?sn(n,n.vertexSpace,t.origin,r):ln(n,n.vertexSpace,t.origin,r)}}function ln({vertexAttributes:n,transform:t,spatialReference:r},{origin:e},o,i){const{position:l,normal:s,tangent:a}=t?S(n,t.localMatrix):n,u=new Float64Array(l.length);let c=l;if(e&&(c=R(u,c,e)),o){const F=d(z,o);c=R(u,c,F)}w(r,i,p.NONE);const g=i==null?void 0:i.allowBufferReuse;return{position:c!==n.position||g?c:c.slice(),normal:s!==n.normal||g?s:s==null?void 0:s.slice(),tangent:a!==n.tangent||g?a:a==null?void 0:a.slice()}}function an({spatialReference:n,vertexAttributes:t,transform:r},{origin:e},o,i){const l=$(n);if(!x(n,e,f,l))return A(m(),n,l),null;r&&y(f,f,r.localMatrix),q(f,n,i,p.SOURCE);const s=new Float64Array(t.position.length),a=fn(t.position,f,n,s);if(!a)return null;const u=mn(a,s,t.normal,f,n);if(t.normal&&!u)return null;const c=pn(a,s,t.tangent,f,n);if(t.tangent&&!c)return null;if(o){const g=d(z,o);R(a,a,g)}return{position:a,normal:u,tangent:c}}function sn({vertexAttributes:n,spatialReference:t,transform:r},{origin:e},o,i){const l=$(t);if(!x(t,o,f,l))return A(m(),t,l),null;const s=1/w(t,i,p.TARGET);B(f,f,[s,s,s]);const a=T(v,f),{position:u,normal:c,tangent:g}=cn(n,e,r),F=new Float64Array(u.length),P=gn(u,t,a,F);if(!P)return null;const C=K(Fn,a),j=An(c,u,F,t,C,c!==n.normal?c:void 0);if(!j&&c)return null;const O=$n(g,u,F,t,C,g!==n.tangent?g:void 0);return!O&&g?null:{position:P,normal:j,tangent:O}}function cn(n,t,r){if(!t)return n;if(!r){const{position:o,normal:i,tangent:l}=n;return{position:R(new Float64Array(o.length),o,t),tangent:l,normal:i}}const e=S(n,r.localMatrix);return R(e.position,e.position,t),e}function un({vertexAttributes:n,spatialReference:t,transform:r},{origin:e},o,i){const l=$(t);if(!x(t,e,f,l))return A(m(),t,l),null;if(r&&y(f,f,r.localMatrix),!x(t,o,v,l))return A(m(),l,t),null;T(v,v);const s=y(f,v,f);return q(s,t,i,p.SOURCE|p.TARGET),S(n,s)}function S(n,t){const r=new Float64Array(n.position.length);E(r,n.position,t);const e=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&b(n.normal,e,t),o&&n.tangent&&k(n.tangent,o,t),{position:r,normal:e,tangent:o}}function fn(n,t,r,e){E(e,n,t);const o=new Float64Array(n.length);return _(e,o,r)?o:(A(m(),$(r),r),null)}function mn(n,t,r,e,o){if(r==null)return null;const i=new Float32Array(r.length);return b(r,i,e),nn(i,n,t,o,i)?i:(A(m(),$(o),o),null)}function pn(n,t,r,e,o){if(r==null)return null;const i=new Float32Array(r.length);return k(r,i,e),tn(i,n,t,o,i)?i:(A(m(),$(o),o),null)}function q(n,t,r,e){const o=w(t,r,e);o!==1&&B(n,n,[o,o,o])}function w(n,t,r){const e=!!(r&p.SOURCE),o=!!(r&p.TARGET),i=t==null?void 0:t.sourceUnit,l=t==null?void 0:t.targetUnit;if(!i&&!l)return 1;let s=U(i,n);!e&&i&&s!==1&&(m().warn("source unit conversion not supported"),s=1);let a=1/U(l,n);return!o&&l&&a!==1&&(m().warn("target unit conversion not supported"),a=1),s*a}function gn(n,t,r,e){const o=rn(n,t,e);if(!o)return A(m(),t,$(t)),null;const i=new Float64Array(o.length);return E(i,o,r),i}function An(n,t,r,e,o,i){if(n==null)return null;const l=i??new Float32Array(n.length);return on(n,t,r,e,l)?(M(l,l,o),l):(A(m(),e,$(e)),null)}function $n(n,t,r,e,o,i){if(n==null)return null;const l=i??new Float32Array(n.length);return en(n,t,r,e,l)?(M(l,l,o,4),l):(A(m(),e,$(e)),null)}function U(n,t){if(n==null)return 1;const r=I(t);return 1/J(r,"meters",n)}const f=h(),v=h(),Fn=Q(),z=L(),G=h();var p;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET"})(p||(p={}));export{Un as M,Nn as N,U as X};
