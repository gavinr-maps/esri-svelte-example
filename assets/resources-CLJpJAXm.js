import{_ as e}from"./index-Bh2oEzTI.js";import{s as _}from"./Accessor-BLX9ikPh.js";import{t as r}from"./requestImageUtils-DgMiQwsm.js";let u=class{constructor(){this._candidateTiles=[]}schedule(t){this._candidateTiles.includes(t)||this._candidateTiles.push(t)}reshuffle(t){const a=[];for(const s of this._candidateTiles)t>0?(s.reshuffle(),t--):a.push(s);this._candidateTiles=a}};async function f(i){const t=e(()=>import("./mask-svg-cNit2NTT.js"),[],import.meta.url),a=e(()=>import("./overlay-svg-DioSRl-7.js"),[],import.meta.url),s=r((await t).default,{signal:i}),o=r((await a).default,{signal:i}),l={mask:await s,overlay:await o};return _(i),l}export{f as a,u as s};
