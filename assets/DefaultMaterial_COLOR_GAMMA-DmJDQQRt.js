import{E as y,ah as m,ai as B,aj as b,F as S}from"./subclass-BZA_h8Db.js";import{l as _,i as g}from"./Indices-DflDlU4Z.js";import{E as a}from"./enums-D9v74xTE.js";function I(t,o){d(t.typedBuffer,o.typedBuffer,t.typedBufferStride,o.typedBufferStride)}function d(t,o,l=2,r=l){const f=o.length/2;let e=0,n=0;if(y(o)||m(o)){for(let i=0;i<f;++i)t[e]=o[n],t[e+1]=o[n+1],e+=l,n+=r;return}const u=B(o);if(b(o))for(let i=0;i<f;++i)t[e]=Math.max(o[n]/u,-1),t[e+1]=Math.max(o[n+1]/u,-1),e+=l,n+=r;else for(let i=0;i<f;++i)t[e]=o[n]/u,t[e+1]=o[n+1]/u,e+=l,n+=r}function A(t,o,l,r){const f=t.typedBuffer,e=t.typedBufferStride,n=(r==null?void 0:r.count)??t.count;let u=((r==null?void 0:r.dstIndex)??0)*e;for(let i=0;i<n;++i)f[u]=o,f[u+1]=l,u+=e}Object.freeze(Object.defineProperty({__proto__:null,fill:A,normalizeIntegerBuffer:d,normalizeIntegerBufferView:I},Symbol.toStringTag,{value:"Module"}));function $(t,o){p(t.typedBuffer,o,t.typedBufferStride)}function p(t,o,l=4){const r=o.typedBuffer,f=o.typedBufferStride,e=o.count;let n=0,u=0;for(let i=0;i<e;++i)t[n]=r[u],t[n+1]=r[u+1],t[n+2]=r[u+2],t[n+3]=r[u+3],n+=l,u+=f}function h(t,o,l,r,f,e){const n=t.typedBuffer,u=t.typedBufferStride,i=(e==null?void 0:e.count)??t.count;let c=((e==null?void 0:e.dstIndex)??0)*u;for(let s=0;s<i;++s)n[c]=o,n[c+1]=l,n[c+2]=r,n[c+3]=f,c+=u}Object.freeze(Object.defineProperty({__proto__:null,copy:p,copyView:$,fill:h},Symbol.toStringTag,{value:"Module"}));function M(t,o){switch(o){case a.TRIANGLES:return w(t);case a.TRIANGLE_STRIP:return E(t);case a.TRIANGLE_FAN:return T(t)}}function w(t){return typeof t=="number"?_(t):S(t)?new Uint16Array(t):t}function E(t){const o=typeof t=="number"?t:t.length;if(o<3)return[];const l=o-2,r=g(3*l);if(typeof t=="number"){let f=0;for(let e=0;e<l;e+=1)e%2==0?(r[f++]=e,r[f++]=e+1,r[f++]=e+2):(r[f++]=e+1,r[f++]=e,r[f++]=e+2)}else{let f=0;for(let e=0;e<l;e+=1)e%2==0?(r[f++]=t[e],r[f++]=t[e+1],r[f++]=t[e+2]):(r[f++]=t[e+1],r[f++]=t[e],r[f++]=t[e+2])}return r}function T(t){const o=typeof t=="number"?t:t.length;if(o<3)return new Uint16Array(0);const l=o-2,r=l<=65536?new Uint16Array(3*l):new Uint32Array(3*l);if(typeof t=="number"){let u=0;for(let i=0;i<l;++i)r[u++]=0,r[u++]=i+1,r[u++]=i+2;return r}const f=t[0];let e=t[1],n=0;for(let u=0;u<l;++u){const i=t[u+2];r[n++]=f,r[n++]=e,r[n++]=i,e=i}return r}const N=2.1;export{M as a,I as b,$ as e,h as f,A as l,d as n,N as o,p as t};