import{m,g as x,N as s,F as l}from"./mathUtils-Cfq9PL9W.js";import{u as T}from"./opacityUtils-Dim20wpZ.js";function E(r,n){return{...n,filterMode:r.mode}}function M(r,n){return I(r,n).next().value??null}function g(r,n,e){const t=h(r);if(t&&(s(n,t[0])||l(e,t[1])))return"";const u=Array.from(I(r,n,e)),i=p(u,n,e)?"1=1":u.map(o=>o.where||"1=1").reduce((o,f)=>T(o,f),"");return i&&i!=="1=1"?i:""}function h(r){if(d(r)==="manual")return null;const n=[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY];for(const{minScale:e,maxScale:t}of r.filters)n[0]=Math.max(n[0],c(e)),n[1]=Math.min(n[1],a(t));return n}function*I(r,n,e){if(d(r)==="manual"){const t=r.filters.find(u=>u.id===r.activeFilterId);t&&(yield t)}else{typeof n=="object"&&(n=n.scale);for(const t of r.filters)F(t.minScale,t.maxScale,n,e)&&(yield t)}}function p(r,n,e){var i,o;if(r.length===0)return!0;const t=c((i=r.at(0))==null?void 0:i.minScale),u=a((o=r.at(-1))==null?void 0:o.maxScale);if(l(t,n)||s(u,e))return!0;for(let f=0;f<r.length-1;f++){const N=r[f],S=r[f+1];if(l(c(S.minScale),a(N.maxScale)))return!0}return!1}function F(r,n,e,t){return r=c(r),e=c(e),n=a(n),!(!m(e,r)&&(t??e)>r)&&!x(n,e)&&(t===void 0||!m(t,r))}function d(r){return"mode"in r?r.mode:r.filterMode}function c(r){return r||Number.POSITIVE_INFINITY}function a(r){return r||0}export{g as c,E as i,M as u};
