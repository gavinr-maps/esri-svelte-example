import{_ as s}from"./index-tefRSezt.js";import{D as _}from"./Accessor-BHnuXKD2.js";import{t as r}from"./requestImageUtils-Brn0e8z8.js";let u=class{constructor(){this._candidateTiles=[]}schedule(t){this._candidateTiles.includes(t)||this._candidateTiles.push(t)}reshuffle(t){const a=[];for(const e of this._candidateTiles)t>0?(e.reshuffle(),t--):a.push(e);this._candidateTiles=a}};async function f(i){const t=s(()=>import("./mask-svg-cNit2NTT.js"),[],import.meta.url),a=s(()=>import("./overlay-svg-DioSRl-7.js"),[],import.meta.url),e=r((await t).default,{signal:i}),o=r((await a).default,{signal:i}),l={mask:await e,overlay:await o};return _(i),l}export{f as a,u as s};
