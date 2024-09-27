import{e as r}from"./Evented-CXIxDjmW.js";import{f as y}from"./assets-C2mb-ea2.js";import{y as s,b as f,R as x,n as R,a as T}from"./subclass-BR3PhgZG.js";import{s as C}from"./jsonMap-DCC6W5ex.js";import{u as H}from"./Color-DDUWtbqR.js";import{c as S}from"./imageUtils-9KeT6Jbh.js";import{r as E,o as I}from"./writer-3zufXUNV.js";import{h as O,m as W}from"./persistableUrlUtils-BcifXQ1Z.js";import{i as _}from"./Clonable-cKbRam6-.js";import{c as P}from"./MeshVertexAttributes-DVEL_Tlm.js";var h;const v=new WeakMap;let A=0,u=h=class extends y{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,o,i){if(e instanceof HTMLImageElement){const n={type:"image-element",src:W(e.src,i),crossOrigin:e.crossOrigin};t[o]=n}else if(e instanceof HTMLCanvasElement){const n={type:"canvas-element",imageData:N(e.getContext("2d").getImageData(0,0,e.width,e.height))};t[o]=n}else if(e instanceof HTMLVideoElement){const n={type:"video-element",src:W(e.src,i),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[o]=n}else if(e instanceof ImageData){const n={type:"image-data",imageData:N(e)};t[o]=n}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=L(e.imageData),o=document.createElement("canvas");return o.width=t.width,o.height=t.height,o.getContext("2d").putImageData(t,0,0),o}case"image-data":return L(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const e=this.data,t=this.url;if(e instanceof HTMLCanvasElement)return U(e.getContext("2d").getImageData(0,0,e.width,e.height));if(e instanceof ImageData)return U(e);if(t){const o=t.substr(t.length-4,4).toLowerCase(),i=t.substr(0,15).toLocaleLowerCase();if(o===".png"||i==="data:image/png;")return!0}return!1}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(o="")=>`d:${o},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(v.has(this.data)||v.set(this.data,++A),t(v.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=this.url!=null?this.url.length:0,this.data!=null){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new h(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const o=this.clone();return e.set(this,o),o}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(e){return typeof e=="string"?new h({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new h({data:e}):x(h,e)}};function N(e){let t="";for(let o=0;o<e.data.length;o++)t+=String.fromCharCode(e.data[o]);return{data:btoa(t),width:e.width,height:e.height}}function L(e){const t=atob(e.data),o=new Uint8ClampedArray(t.length);for(let i=0;i<t.length;i++)o[i]=t.charCodeAt(i);return S(o,e.width,e.height)}function U(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}r([s({type:String,json:{write:O}})],u.prototype,"url",null),r([s({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),s()],u.prototype,"data",null),r([E("data")],u.prototype,"writeData",null),r([I("data")],u.prototype,"readData",null),r([s({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],u.prototype,"transparent",null),r([s({json:{write:!0}})],u.prototype,"wrap",void 0),r([s({readOnly:!0})],u.prototype,"contentHash",null),u=h=r([f("esri.geometry.support.MeshTexture")],u);const d=u;let m=class extends _(y){constructor(t){super(t),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};r([s({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"offset",void 0),r([s({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"rotation",void 0),r([s({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"scale",void 0),m=r([f("esri.geometry.support.MeshTextureTransform")],m);const g=m;var w;let l=w=class extends y{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const o=e!=null?e.get(this):null;if(o)return o;const i=new w(this.clonePropertiesWithDeduplication(t));return e!=null&&e.set(this,i),i}clonePropertiesWithDeduplication(e){var t,o,i,n;return{color:this.color!=null?this.color.clone():null,colorTexture:(t=this.colorTexture)==null?void 0:t.cloneWithDeduplication(e),normalTexture:(o=this.normalTexture)==null?void 0:o.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:(i=this.colorTextureTransform)==null?void 0:i.clone(),normalTextureTransform:(n=this.normalTextureTransform)==null?void 0:n.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=this.color!=null?16:0,this.colorTexture!=null&&(e+=this.colorTexture.memoryUsage),e+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(e+=this.normalTexture.memoryUsage),e+=this.normalTextureTransform!=null?20:0,e}};r([s({type:H,json:{write:!0}})],l.prototype,"color",void 0),r([s({type:d,json:{write:!0}})],l.prototype,"colorTexture",void 0),r([s({type:g,json:{write:!0}})],l.prototype,"colorTextureTransform",void 0),r([s({type:d,json:{write:!0}})],l.prototype,"normalTexture",void 0),r([s({type:g,json:{write:!0}})],l.prototype,"normalTextureTransform",void 0),r([s({nonNullable:!0,json:{write:!0}})],l.prototype,"alphaMode",void 0),r([s({nonNullable:!0,json:{write:!0}})],l.prototype,"alphaCutoff",void 0),r([s({nonNullable:!0,json:{write:!0}})],l.prototype,"doubleSided",void 0),l=w=r([f("esri.geometry.support.MeshMaterial")],l);const D=l;var M;let a=M=class extends D{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const o=e!=null?e.get(this):null;if(o)return o;const i=new M(this.clonePropertiesWithDeduplication(t));return e!=null&&e.set(this,i),i}getMemoryUsage(){let e=super.getMemoryUsage();return e+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(e+=this.emissiveTexture.memoryUsage),e+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(e+=this.occlusionTexture.memoryUsage),e+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=this.metallicRoughnessTextureTransform!=null?20:0,e}clonePropertiesWithDeduplication(e){var t,o,i,n,j,b,$;return{...super.clonePropertiesWithDeduplication(e),emissiveColor:(t=this.emissiveColor)==null?void 0:t.clone(),emissiveTexture:(o=this.emissiveTexture)==null?void 0:o.cloneWithDeduplication(e),emissiveTextureTransform:(i=this.emissiveTextureTransform)==null?void 0:i.clone(),occlusionTexture:(n=this.occlusionTexture)==null?void 0:n.cloneWithDeduplication(e),occlusionTextureTransform:(j=this.occlusionTextureTransform)==null?void 0:j.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:(b=this.metallicRoughnessTexture)==null?void 0:b.cloneWithDeduplication(e),metallicRoughnessTextureTransform:($=this.metallicRoughnessTextureTransform)==null?void 0:$.clone()}}};r([s({type:H,json:{write:!0}})],a.prototype,"emissiveColor",void 0),r([s({type:d,json:{write:!0}})],a.prototype,"emissiveTexture",void 0),r([s({type:g,json:{write:!0}})],a.prototype,"emissiveTextureTransform",void 0),r([s({type:d,json:{write:!0}})],a.prototype,"occlusionTexture",void 0),r([s({type:g,json:{write:!0}})],a.prototype,"occlusionTextureTransform",void 0),r([s({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],a.prototype,"metallic",void 0),r([s({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],a.prototype,"roughness",void 0),r([s({type:d,json:{write:!0}})],a.prototype,"metallicRoughnessTexture",void 0),r([s({type:g,json:{write:!0}})],a.prototype,"metallicRoughnessTextureTransform",void 0),a=M=r([f("esri.geometry.support.MeshMaterialMetallicRoughness")],a);const z=a;var p;let c=p=class extends y{static from(e){return x(p,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return P(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},R.getLogger(this))}castMaterial(e){return x(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?z:D,e)}clone(){return new p({faces:T(this.faces),shading:this.shading,material:T(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const o={faces:T(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new p(o)}get memoryUsage(){let e=0;return this.faces!=null&&(e+=this.faces.byteLength),this.material!=null&&(e+=this.material.memoryUsage),e}};r([s({json:{write:!0}})],c.prototype,"faces",void 0),r([C("faces")],c.prototype,"castFaces",null),r([s({type:D,json:{write:!0}})],c.prototype,"material",void 0),r([C("material")],c.prototype,"castMaterial",null),r([s()],c.prototype,"name",void 0),r([s({type:String,json:{write:!0}})],c.prototype,"shading",void 0),r([s({type:Boolean})],c.prototype,"trustSourceNormals",void 0),c=p=r([f("esri.geometry.support.MeshComponent")],c);const Z=c;export{D as a,g as c,Z as h,z as m,d as w};
