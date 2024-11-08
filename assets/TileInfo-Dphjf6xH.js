import{r as l}from"./tslib.es6-B3Jf3DVX.js";import{n as P}from"./jsonMap-0cxwUWs2.js";import{f as L}from"./assets-C43MgM-v.js";import{j as m,g as T,c as S,d as b,z as W,P as F,s as G,a2 as A}from"./Point-Cg0-ChZE.js";import{m as a,x as O,a as _}from"./subclass-BZA_h8Db.js";import{o as j,r as D}from"./writer-DNAwXnhG.js";import{b as E}from"./Polyline-D9YkgmM_.js";import{t as I}from"./TileKey-DZd6gJy7.js";var R;let f=R=class extends L{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new R({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};l([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"cols",void 0),l([a({type:O,json:{write:!0}})],f.prototype,"level",void 0),l([a({type:String,json:{write:!0}})],f.prototype,"levelValue",void 0),l([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"origin",void 0),l([a({type:Number,json:{write:!0}})],f.prototype,"resolution",void 0),l([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"rows",void 0),l([a({type:Number,json:{write:!0}})],f.prototype,"scale",void 0),f=R=l([_("esri.layers.support.LOD")],f);const g=f;var d;const N=new P({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let n=d=class extends L{static create(e={}){const{resolutionFactor:t=1,scales:o,size:i=256,spatialReference:s=T.WebMercator,numLODs:r=24}=e;if(!S(s)){const c=[];if(o)for(let u=0;u<o.length;u++){const h=o[u];c.push(new g({level:u,scale:h,resolution:h}))}else{let u=5e-4;for(let h=r-1;h>=0;h--)c.unshift(new g({level:h,scale:u,resolution:u})),u*=2}return new d({dpi:96,lods:c,origin:new m(0,0,s),size:[i,i],spatialReference:s})}const p=b(s),v=e.origin?new m({x:e.origin.x,y:e.origin.y,spatialReference:s}):new m(p?{x:p.origin[0],y:p.origin[1],spatialReference:s}:{x:0,y:0,spatialReference:s}),y=96,w=1/(W(s)*39.37*y),x=[];if(o)for(let c=0;c<o.length;c++){const u=o[c],h=u*w;x.push(new g({level:c,scale:u,resolution:h}))}else{let c=F(s)?512/i*5916575275917094e-7:256/i*591657527591555e-6;const u=Math.ceil(r/t);x.push(new g({level:0,scale:c,resolution:c*w}));for(let h=1;h<u;h++){const z=c/2**t,M=z*w;x.push(new g({level:h,scale:z,resolution:M})),c=z}}return new d({dpi:y,lods:x,origin:v,size:[i,i],spatialReference:s})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const o=b(e);return e.isWrappable&&!!o&&Math.abs(o.origin[0]-t.x)<=o.dx}return!1}readOrigin(e,t){return m.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,o=0;const i=[],s=this._levelToLOD={};e&&(t=-1/0,o=1/0,e.forEach(r=>{i.push(r.scale),t=r.scale>t?r.scale:t,o=r.scale<o?r.scale:o,s[r.level]=r})),this._set("scales",i),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const o=Math.floor(e),i=o+1;return t[o]/(t[o]/t[i])**(e-o)}scaleToZoom(e){const t=this.scales,o=t.length-1;let i=0;for(;i<o;i++){const s=t[i],r=t[i+1];if(s<=e)return i;if(r===e)return i+1;if(s>e&&r<e)return i+Math.log(s/e)/Math.log(s/r)}return i}tileAt(e,t,o,i){const s=this.lodAt(e);if(!s)return null;let r,p;if(typeof t=="number")r=t,p=o;else if(G(t.spatialReference,this.spatialReference))r=t.x,p=t.y,i=o;else{const w=A(t,this.spatialReference);if(w==null)return null;r=w.x,p=w.y,i=o}const v=s.resolution*this.size[0],y=s.resolution*this.size[1];return i||(i=new I(null,0,0,0,E())),i.level=e,i.row=Math.floor((this.origin.y-p)/y+.001),i.col=Math.floor((r-this.origin.x)/v+.001),this.updateTileInfo(i),i}updateTileInfo(e,t=d.ExtrapolateOptions.NONE){let o=this.lodAt(e.level);if(!o&&t===d.ExtrapolateOptions.POWER_OF_TWO){const p=this.lods[this.lods.length-1];p.level<e.level&&(o=p)}if(!o)return;const i=e.level-o.level,s=o.resolution*this.size[0]/2**i,r=o.resolution*this.size[1]/2**i;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=E()),e.extent[0]=this.origin.x+e.col*s,e.extent[1]=this.origin.y-(e.row+1)*r,e.extent[2]=e.extent[0]+s,e.extent[3]=e.extent[1]+r}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||t.parentLevel===-1)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const o=this.lodAt(t.level);if(o==null)return null;const{resolution:i}=o,s=i*this.size[0],r=i*this.size[1];return e[0]=this.origin.x+t.col*s,e[1]=this.origin.y-(t.row+1)*r,e[2]=e[0]+s,e[3]=e[1]+r,e}lodAt(e){var t;return((t=this._levelToLOD)==null?void 0:t[e])??null}clone(){return d.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||this.size[0]===256&&e===512)return null;const t=(this.size[0]===512&&e===256?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&t===0)return this;const o=[],i=this.lods.length-t;for(let s=0;s<i;s++){const r=s+t,{scale:p,resolution:v}=r>=0?this.lods[r]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};o.push(new g({level:s,scale:p,resolution:v}))}return new d({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:o})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let o=0;o<e.length;o++){const i=e[o];this._upsampleLevels[i.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/i.resolution:0},t=i}}};l([a({type:Number,json:{write:!0}})],n.prototype,"compressionQuality",void 0),l([a({type:Number,json:{write:!0}})],n.prototype,"dpi",void 0),l([a({type:String,json:{read:N.read,write:N.write,origins:{"web-scene":{read:!1,write:!1}}}})],n.prototype,"format",void 0),l([a({readOnly:!0})],n.prototype,"isWrappable",null),l([a({type:m,json:{write:!0}})],n.prototype,"origin",void 0),l([j("origin")],n.prototype,"readOrigin",null),l([a({type:[g],value:null,json:{write:!0}})],n.prototype,"lods",null),l([a({readOnly:!0})],n.prototype,"scales",void 0),l([a({cast:e=>Array.isArray(e)?e:typeof e=="number"?[e,e]:[256,256]})],n.prototype,"size",void 0),l([j("size",["rows","cols"])],n.prototype,"readSize",null),l([D("size",{cols:{type:O},rows:{type:O}})],n.prototype,"writeSize",null),l([a({type:T,json:{write:!0}})],n.prototype,"spatialReference",void 0),n=d=l([_("esri.layers.support.TileInfo")],n),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(n||(n={}));const k=n;export{g as p,k as z};
