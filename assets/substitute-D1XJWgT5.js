import{d as l,R as d,B as p}from"./Accessor-BHnuXKD2.js";import{E as o}from"./Promise-CmQqe-ke.js";import{l as u}from"./intl-Do3GEEJ7.js";const m=()=>p.getLogger("esri.intl.substitute");function k(t,e,r={}){const{format:n={}}=r;return l(t,i=>b(i,e,n))}function b(t,e,r){let n,i;const a=t.indexOf(":");if(a===-1?n=t.trim():(n=t.slice(0,a).trim(),i=t.slice(a+1).trim()),!n)return"";const s=d(n,e);if(s==null)return"";const f=(i?r==null?void 0:r[i]:null)??(r==null?void 0:r[n]);return f?g(s,f):i?w(s,i):c(s)}function g(t,e){switch(e.type){case"date":return o(t,e.intlOptions);case"number":return u(t,e.intlOptions);default:return m().warn("missing format descriptor for key {key}"),c(t)}}function w(t,e){switch(e.toLowerCase()){case"dateformat":return o(t);case"numberformat":return u(t);default:return m().warn(`inline format is unsupported since 4.12: ${e}`),/^(dateformat|datestring)/i.test(e)?o(t):/^numberformat/i.test(e)?u(t):c(t)}}function c(t){switch(typeof t){case"string":return t;case"number":return u(t);case"boolean":return""+t;default:return t instanceof Date?o(t):""}}export{k as s};
