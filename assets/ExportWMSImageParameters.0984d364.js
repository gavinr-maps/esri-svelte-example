import{a8 as e,a9 as s,ab as r,ac as a,ad as t}from"./vendor.5b1a85aa.js";const l={visible:"visibleSublayers"};let i=class extends(e(s)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(l[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:s}=this,r=null==e?void 0:e.sublayers,a=[],t=e=>{const{minScale:r,maxScale:l,sublayers:i,visible:n}=e;n&&(0===s||(0===r||s<=r)&&(0===l||s>=l))&&(i?i.forEach(t):a.unshift(e))};return null==r||r.forEach(t),a}toJSON(){const{layer:e,layers:s}=this,{imageFormat:r,imageTransparency:a,version:t}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:a,version:t,layers:s}}};r([a()],i.prototype,"layer",null),r([a({readOnly:!0})],i.prototype,"layers",null),r([a({type:Number})],i.prototype,"scale",void 0),r([a({readOnly:!0})],i.prototype,"version",null),r([a({readOnly:!0})],i.prototype,"visibleSublayers",null),i=r([t("esri.layers.support.ExportWMSImageParameters")],i);export{i as l};
