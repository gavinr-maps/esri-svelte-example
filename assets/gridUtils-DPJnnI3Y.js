import{N as G,Q as m,g as h,j as y,k as M}from"./Point-Cz2JYYmX.js";import{P as W}from"./Polyline-s-JzsQqo.js";import{y as b,R as w}from"./geodesicUtils-Cvz9v8ds.js";import{M as S}from"./normalizeUtils-BTGdXlpz.js";const j=50,U=5;function d(e,o){return Math.log(e)/Math.log(o)}function v(e,o,a){const t=e===1?10:e;return t**(a?Math.round(d(j/o,t)):0)}function k(e){const{isGeographic:o,isWebMercator:a}=e;return!o&&!a}function z(e,o,a){const t=typeof e=="number"?null:e,r=a??(t==null?void 0:t.spatialReference);if(r==null||!G(r)||k(r))return m(r);let s=(t==null?void 0:t.x)??e,i=(t==null?void 0:t.y)??o;const l=1/Math.sqrt(2);let c=s+l,f=i+l;const{isWebMercator:g,isGeographic:x}=r;let p=x&&!b(r)?h.WGS84:r;if(g){let n=new y({x:s,y:i,spatialReference:r});M(n,!0,n),s=n.x,i=n.y,n=new y({x:c,y:f,spatialReference:r}),M(n,!0,n),c=n.x,f=n.y,p=h.WGS84}const R=new W({paths:[[[s,i],[c,f]]],spatialReference:p}),$=S(R,10);let u;try{[u]=w([$],"meters")}catch{return m(r)}return u}export{k as f,v as l,U as t,z as u};
