import{r as l,m as i,a as x}from"./Accessor-BmwT4B0c.js";import{o as m}from"./writer-DKgfqj4X.js";import{g as S}from"./Point-Cz2JYYmX.js";import{z as f}from"./TileInfo-DxwC9WcY.js";import{e as I}from"./TileInfoTilemapCache-Bwgork4j.js";import{T as O}from"./TilemapCache-DhTdJKX8.js";const w=h=>{let t=class extends h{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var r,e;(e=(r=this.tilemapCache)==null?void 0:r.destroy)==null||e.call(r)}readMinScale(r,e){return e.minLOD!=null&&e.maxLOD!=null?r:0}readMaxScale(r,e){return e.minLOD!=null&&e.maxLOD!=null?r:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(r,e,y){var u;const v=(u=e.capabilities)==null?void 0:u.includes("Tilemap");let{minLOD:n,maxLOD:a,minScale:s,maxScale:c}=e;if(n==null&&a==null&&(s!==0||c!==0)){const o=p=>Math.round(1e4*p)/1e4;s=o(s||e.tileInfo.lods[0].scale),c=o(c||e.tileInfo.lods[e.tileInfo.lods.length-1].scale);for(const p of e.tileInfo.lods){const d=o(p.scale);n=d>=s?p.level:n,a=d>=c?p.level:a}}if(v)return new O({layer:this,minLOD:n,maxLOD:a});if(e.tileInfo){const o=new f;return o.read(e.tileInfo,y),new I(o,n,a)}return null}};return l([i({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),l([i()],t.prototype,"minScale",void 0),l([m("service","minScale")],t.prototype,"readMinScale",null),l([i()],t.prototype,"maxScale",void 0),l([m("service","maxScale")],t.prototype,"readMaxScale",null),l([i({type:S})],t.prototype,"spatialReference",void 0),l([i({readOnly:!0})],t.prototype,"supportsBlankTile",null),l([i({type:f})],t.prototype,"tileInfo",void 0),l([i()],t.prototype,"tilemapCache",void 0),l([m("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),l([i()],t.prototype,"version",void 0),t=l([x("esri.layers.mixins.ArcGISCachedService")],t),t};export{w as p};
