import{I as t,J as y}from"./Accessor-BHnuXKD2.js";function s(r){if(Array.isArray(r)){if(r.length<t)return r}else if(r.length<t)return Array.from(r);let n=!0,e=!0;return r.some((o,l)=>(n=n&&o===0,e=e&&o===l,!n&&!e)),n?c(r.length):e?U(r.length):y(r)&&r.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT?r:w(r)}function w(r){let n=!0;for(const e of r){if(e>=65536)return y(r)?r:new Uint32Array(r);e>=256&&(n=!1)}return n?new Uint8Array(r):new Uint16Array(r)}function g(r){return r<=t?new Array(r):r<=65536?new Uint16Array(r):new Uint32Array(r)}function E(r){return r<=t?new Array(r):new Uint32Array(r)}let i=u(131072);const A=[0],a=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function U(r){return r===1?A:r<t?Array.from(new Uint16Array(a.buffer,0,r)):r<a.length?new Uint16Array(a.buffer,0,r):(r>i.length&&(i=u(Math.max(2*i.length,r))),new Uint32Array(i.buffer,0,r))}function u(r){const n=new Uint32Array(r);for(let e=0;e<n.length;e++)n[e]=e;return n}let f=new Uint8Array(65536);function c(r){if(r===1)return A;if(r<t)return new Array(r).fill(0);if(r>f.length){const n=Math.max(2*f.length,r);f=new Uint8Array(n)}return new Uint8Array(f.buffer,0,r)}function m(){i=u(131072),f=new Uint8Array(65536)}export{m as U,E as f,g as i,U as o,s as t,c as w};
