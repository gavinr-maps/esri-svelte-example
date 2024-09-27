import{e as a}from"./Evented-CXIxDjmW.js";import"./geometry-DpwwkAX1.js";import{O as c,y as h,b as S}from"./subclass-BR3PhgZG.js";import{_ as d}from"./mat4-ybYUU6jq.js";import{e as b}from"./mat4f64-Dk4dwAN8.js";import{r as l,O as n,n as g}from"./mathUtils-ClvKsMak.js";import{n as s}from"./projectBuffer-vsa0P_cF.js";import{d as j}from"./TileTreeDebugger-Dqg5BVrn.js";import{j as v}from"./Polyline-D97hl-6E.js";import"./Accessor-D6mNnsWy.js";import"./Extent-DHjqVB-p.js";import"./Point-DB4Hp4hH.js";import"./jsonMap-DCC6W5ex.js";import"./writer-3zufXUNV.js";import"./assets-C2mb-ea2.js";import"./index-CeCSsEgo.js";import"./geodesicConstants-XRAvAZCD.js";import"./Color-DDUWtbqR.js";import"./colorUtils-CS9vdHXB.js";import"./Graphic-Dc7F67nR.js";import"./PopupTemplate-ByHks6sq.js";import"./Clonable-cKbRam6-.js";import"./reactiveUtils-BFQ0BtrB.js";import"./shared-B3wH2qpO.js";import"./fieldUtils-CNduWQU9.js";import"./intl-Dpfm8vPB.js";import"./Promise-CZrWwByK.js";import"./enumeration--HlxOQ_N.js";import"./ActionToggle-C0Z1k2jc.js";import"./Identifiable-BLvpQbOc.js";import"./symbols-CsUQ5BxR.js";import"./TextSymbol-gKE-H_J6.js";import"./screenUtils-PfxkaaMN.js";import"./materialUtils-CQ3JLQ1x.js";import"./opacityUtils-BT7mQkwC.js";import"./aaBoundingBox-rJEWaOSN.js";import"./persistableUrlUtils-BcifXQ1Z.js";import"./collectionUtils-Dm1icNvk.js";import"./Portal-liet8xHC.js";import"./jsonUtils-Cma_7A64.js";let u=class extends j{constructor(m){super(m)}getTiles(){const m=this.lv.getVisibleNodes(),o=this.view.renderSpatialReference,p=this.nodeSR;return m.map(r=>y(r,o,p)).filter(c).sort((r,i)=>r.lij[0]===i.lij[0]?r.label>i.label?-1:1:r.lij[0]-i.lij[0])}};function y(m,o,p){const r=m.serviceObbInIndexSR;if(r==null||o==null)return null;d(e,r.quaternion),l(t,r.center),s(t,p,0,t,o,0,1),e[12]=t[0],e[13]=t[1],e[14]=t[2];const i=[[],[],[]];n(t,r.halfSize,e),s(t,o,0,t,p,0,1),i[0].push([t[0],t[1]]),l(t,r.halfSize),t[0]=-t[0],n(t,t,e),s(t,o,0,t,p,0,1),i[0].push([t[0],t[1]]),l(t,r.halfSize),t[0]=-t[0],t[1]=-t[1],n(t,t,e),s(t,o,0,t,p,0,1),i[0].push([t[0],t[1]]),l(t,r.halfSize),t[1]=-t[1],n(t,t,e),s(t,o,0,t,p,0,1),i[0].push([t[0],t[1]]),i[1].push(i[0][0]),i[1].push(i[0][1]),l(t,r.halfSize),t[0]=-t[0],t[2]=-t[2],n(t,t,e),s(t,o,0,t,p,0,1),i[1].push([t[0],t[1]]),l(t,r.halfSize),t[2]=-t[2],n(t,t,e),s(t,o,0,t,p,0,1),i[1].push([t[0],t[1]]),i[2].push(i[0][0]),i[2].push(i[0][3]),l(t,r.halfSize),t[1]=-t[1],t[2]=-t[2],n(t,t,e),s(t,o,0,t,p,0,1),i[2].push([t[0],t[1]]),i[2].push(i[1][3]);const f=new v({rings:i,spatialReference:p});return{lij:[m.level,m.childCount,0],label:m.id,geometry:f}}a([h({constructOnly:!0})],u.prototype,"lv",void 0),a([h({constructOnly:!0})],u.prototype,"nodeSR",void 0),u=a([S("esri.views.3d.layers.support.I3STreeDebugger")],u);const e=b(),t=g();export{u as I3STreeDebugger};
