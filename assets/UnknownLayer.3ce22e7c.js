import{cV as e,cW as r,c$ as o,im as s,q as n,ab as a,ac as t,ad as i}from"./vendor.5b1a85aa.js";let l=class extends(e(r(o))){constructor(e){super(e),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((e,r)=>{s((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let o="Unknown layer type";e&&(o+=" "+e),r(new n("layer:unknown-layer-type",o,{layerType:e}))}))})))}read(e,r){super.read({resourceInfo:e},r)}write(){return null}};a([t({readOnly:!0})],l.prototype,"resourceInfo",void 0),a([t({type:["show","hide"]})],l.prototype,"listMode",void 0),a([t({json:{read:!1},readOnly:!0,value:"unknown"})],l.prototype,"type",void 0),l=a([i("esri.layers.UnknownLayer")],l);var y=l;export{y as default};
