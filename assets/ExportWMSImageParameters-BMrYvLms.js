import{r as t}from"./tslib.es6-B3Jf3DVX.js";import{b as c}from"./Accessor-BLX9ikPh.js";import{m as l,a as b}from"./subclass-BZA_h8Db.js";const h={visible:"visibleSublayers"};let s=class extends c{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",r=>this.notifyChange(h[r.propertyName]))],"layer"))}get layers(){return this.visibleSublayers.filter(({name:e})=>e).map(({name:e})=>e).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,a=e==null?void 0:e.sublayers,o=[],i=n=>{const{minScale:y,maxScale:p,sublayers:m,visible:u}=n;u&&(r===0||(y===0||r<=y)&&(p===0||r>=p))&&(m?m.forEach(i):o.push(n))};return a==null||a.forEach(i),o}toJSON(){const{layer:e,layers:r}=this,{imageFormat:a,imageTransparency:o,version:i}=e;return{format:a,request:"GetMap",service:"WMS",styles:"",transparent:o?"TRUE":"FALSE",version:i,layers:r}}};t([l()],s.prototype,"layer",null),t([l({readOnly:!0})],s.prototype,"layers",null),t([l({type:Number})],s.prototype,"scale",void 0),t([l({readOnly:!0})],s.prototype,"version",null),t([l({readOnly:!0})],s.prototype,"visibleSublayers",null),s=t([b("esri.layers.support.ExportWMSImageParameters")],s);export{s as a};
