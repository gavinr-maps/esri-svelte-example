import{f as n,s as m,r as e,m as p,a}from"./Accessor-BmwT4B0c.js";import{S as l}from"./MultiOriginJSONSupport-DbmrbwMa.js";import{f as y}from"./Layer-DH4_Pn8a.js";import{j as u}from"./PortalLayer-Cqwv_mmr.js";import"./JSONSupport-DcrLLGjL.js";import"./index-4eY77cms.js";import"./cast-CsZslgGN.js";import"./Evented-Dw4_VOGn.js";import"./Identifiable-BHVfzH03.js";import"./Portal-CmmHxpLg.js";import"./Promise-DfET-uns.js";import"./writer-DKgfqj4X.js";import"./Extent-g5W9hy0j.js";import"./Point-Cz2JYYmX.js";import"./TimeExtent-BO6BsF_x.js";import"./timeUtils-C1c_L2Fd.js";import"./reactiveUtils-XM7cS2OP.js";import"./SimpleObservable-CvOkykwM.js";import"./layerUtils-B__v9OBu.js";import"./PortalItem-CTx1kJsR.js";import"./portalItemUtils-ByOtbGao.js";import"./projection-CyCZAIaD.js";import"./vec3f64-BLpZdpfb.js";import"./Polyline-s-JzsQqo.js";import"./mathUtils-Cfq9PL9W.js";import"./projectBuffer-CQnuEMuP.js";import"./geodesicConstants-RQL9oKdk.js";let r=class extends u(l(y)){constructor(o){super(o),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((o,t)=>{n(()=>{const i=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unknown layer type";i&&(s+=" "+i),t(new m("layer:unknown-layer-type",s,{layerType:i}))})}))}read(o,t){super.read({resourceInfo:o},t)}write(o,t){return null}};e([p({readOnly:!0})],r.prototype,"resourceInfo",void 0),e([p({type:["show","hide"]})],r.prototype,"listMode",void 0),e([p({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),r=e([a("esri.layers.UnknownLayer")],r);const E=r;export{E as default};
