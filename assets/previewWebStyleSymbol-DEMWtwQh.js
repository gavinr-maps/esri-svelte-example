import{U as a}from"./assets-C43MgM-v.js";import{u as s}from"./screenUtils-_ZIvrt5o.js";import{t as l}from"./symbolUtils-_AKSLEsP.js";import{N as u}from"./utils-Ce7L3imC.js";import"./subclass-BZA_h8Db.js";import"./index-Bh2oEzTI.js";import"./tslib.es6-B3Jf3DVX.js";import"./Accessor-BLX9ikPh.js";import"./fieldUtils-tmQlKvWo.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./mathUtils-C4_ghTv4.js";import"./geometry-D964gYQX.js";import"./Extent-Bf3YTe7m.js";import"./Point-Cg0-ChZE.js";import"./cast-Bjksrh93.js";import"./writer-DNAwXnhG.js";import"./Polyline-D9YkgmM_.js";import"./Color-BCS62Hs5.js";import"./colorUtils-0bJDPow9.js";import"./colorUtils-aL8wj-8G.js";import"./vec42-YcqnINSP.js";import"./common-DQOJ18NT.js";import"./vec4f64-o2zAXfmz.js";import"./jsxFactory-CJa39Fro.js";import"./Evented-BHRw9x22.js";import"./Promise-B2Hu02L7.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./uuid-fwrPAdZb.js";import"./mat2df32-orApM5a3.js";import"./mat2d-D9DBP-jx.js";import"./symbols-CNimns--.js";import"./enumeration-Ba5njXdz.js";import"./TextSymbol-D8QO_KUV.js";import"./materialUtils-DarhapKC.js";import"./opacityUtils-C68Tlu6_.js";import"./vec3f64-BLpZdpfb.js";import"./aaBoundingBox-BE7cC1jD.js";import"./persistableUrlUtils-fa1mAujs.js";import"./collectionUtils-D_lHIu88.js";import"./Portal-C10FKnaA.js";import"./Loadable-BabW5Xcc.js";import"./Clonable-D3rtuBWg.js";import"./webStyleSymbolUtils-CwdsUGtV.js";import"./devEnvironmentUtils-CnNDiFMM.js";import"./jsonUtils-Ds2Sqto-.js";import"./layerUtils-BrNoooE9.js";import"./defaults-DZ1kfMRx.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-BYTm14n3.js";import"./jsonUtils-CSnQD004.js";import"./parser-CTsgEym6.js";import"./utils-93yNk4Xc.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-GpOFENPA.js";import"./cimSymbolUtils-DXvZxabN.js";import"./utils-D2PLyMFF.js";import"./enums-CmIX1y88.js";import"./LRUCache-B_PHMSGm.js";import"./MemCache-Dx1v3xLC.js";function Ci(i,t,o){var e;const p=(e=i.thumbnail)==null?void 0:e.url;return p?a(p,{responseType:"image"}).then(r=>{const m=d(r.data,o);return o!=null&&o.node?(o.node.appendChild(m),o.node):m}):u(i).then(r=>r?t(r,o):null)}function d(i,t){const o=!/\\.svg$/i.test(i.src)&&(t==null?void 0:t.disableUpsampling),p=Math.max(i.width,i.height);let e=(t==null?void 0:t.maxSize)!=null?s(t.maxSize):l.maxSize;o&&(e=Math.min(p,e));const r=typeof(t==null?void 0:t.size)=="number"?t==null?void 0:t.size:null,m=Math.min(e,r!=null?s(r):p);if(m!==p){const h=i.width!==0&&i.height!==0?i.width/i.height:1;h>=1?(i.width=m,i.height=m/h):(i.width=m*h,i.height=m)}return i}export{Ci as previewWebStyleSymbol};