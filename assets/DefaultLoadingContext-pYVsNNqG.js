import{u as s,A as o,P as n}from"./cast-CsZslgGN.js";import{_ as i}from"./reactiveUtils-XM7cS2OP.js";import{D as u,s as m,V as l}from"./Accessor-BmwT4B0c.js";class h{constructor(a){this._streamDataRequester=a}async loadJSON(a,r){return this._load("json",a,r)}async loadBinary(a,r){return o(a)?(u(r),s(a)):this._load("binary",a,r)}async loadImage(a,r){return this._load("image",a,r)}async _load(a,r,t){if(this._streamDataRequester==null)return(await n(r,{responseType:d[a]})).data;const e=await i(this._streamDataRequester.request(r,a,t));if(e.ok===!0)return e.value;throw l(e.error),new m("glt-loader-request-error",`Request for resource failed: ${e.error}`)}}const d={image:"image",binary:"array-buffer",json:"json","image+type":void 0};export{h as n};
