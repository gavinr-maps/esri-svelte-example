const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./gif-B7tDx926.js","./Accessor-BLX9ikPh.js","./subclass-BZA_h8Db.js","./apng-CI8qKuOp.js","./_commonjsHelpers-DCkdB7M8.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./index-Bh2oEzTI.js";import{o as d,b as p,U as m}from"./assets-C43MgM-v.js";import{b as w}from"./subclass-BZA_h8Db.js";import{c as y}from"./Accessor-BLX9ikPh.js";let i=null,c=!0;function v(r,a,t){if(!r||!a)throw new Error("Cannot construct image data without dimensions");if(c)try{return new ImageData(r,a)}catch{c=!1}return f(r,a,t)}function I(r,a,t,e){if(!a||!t)throw new Error("Cannot construct image data without dimensions");if(c)try{return new ImageData(r,a,t)}catch{c=!1}const n=f(a,t,e);return n.data.set(r,0),n}function g(){return i||(i=document.createElement("canvas"),i.width=1,i.height=1),i}function f(r,a,t){return t||(t=g()),t.getContext("2d").createImageData(r,a)}async function h(r,a){const t=window.URL.createObjectURL(r);try{const{data:e}=await m(t,{...a,responseType:"image"});return e}catch(e){throw y(e)?e:new w("invalid-image",`Could not fetch requested image at ${t}`)}finally{window.URL.revokeObjectURL(t)}}async function L(r,a){const{arrayBuffer:t,mediaType:e}=await _(r,a),n=e==="image/png";if(e==="image/gif"){const{isAnimatedGIF:o,parseGif:s}=await u(()=>import("./gif-B7tDx926.js"),__vite__mapDeps([0,1,2]),import.meta.url);if(o(t))return s(t,a)}if(n){const{isAnimatedPNG:o,parseApng:s}=await u(()=>import("./apng-CI8qKuOp.js"),__vite__mapDeps([3,4,1,2]),import.meta.url);if(o(t))return s(t,a)}return h(new Blob([t],{type:e}),a)}async function _(r,a){var n;const t=d(r);if(t!=null&&t.isBase64)return{arrayBuffer:p(t.data),mediaType:t.mediaType};const e=await m(r,{responseType:"array-buffer",...a});return{arrayBuffer:e.data,mediaType:((n=e.getHeader)==null?void 0:n.call(e,"Content-Type"))??""}}export{I as c,L as p,v as s};