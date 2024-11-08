import{r}from"./tslib.es6-B3Jf3DVX.js";import{m as n,a as u,b as o}from"./subclass-BZA_h8Db.js";import{whenOnce as g}from"./reactiveUtils-C5zUhJQJ.js";import{t as d}from"./LineCallout.glsl-C1R4fy2f.js";import{t as f,e as v}from"./ShadowCastAccumulate.glsl-BNKV7IEU.js";import{M as y}from"./terrainUtils-CPZNZdjg.js";import{c as w,a as S}from"./layerViewUtils-DhFEu8Rd.js";const C=m=>{let a=class extends m{constructor(){super(...arguments),this.hasMixedImageFormats=!0}get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get visibleAtCurrentScale(){if(!w(this.layer.minScale,this.layer.maxScale)||!this.view.scale)return!0;const e=Math.round(this.view.basemapTerrain.tilingScheme.levelAtScale(this.view.scale));return e>=this.displayLevelRange.minLevel&&e<=this.displayLevelRange.maxLevel}get dataScaleRange(){const e=this.tileInfo.lods;let i=e[0].scale,t=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:l,effectiveMaxLOD:s}=this.layer.tilemapCache;i=this.tileInfo.lodAt(l).scale,t=this.tileInfo.lodAt(s).scale}return{minScale:i,maxScale:t}}canResume(){var i,t,l;const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&((i=this.layer)==null?void 0:i.loaded)&&!((t=this.parent)!=null&&t.suspended)&&((l=this.view)==null?void 0:l.ready)&&S(e)&&this.visibleAtCurrentTimeExtent||!1}get dataLevelRange(){const{minScale:e,maxScale:i}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,i)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,i=this.layer.maxScale||this.dataScaleRange.maxScale,t=this.levelRangeFromScaleRange(e,i);return this.layer.maxScale&&t.maxLevel++,t}get performanceInfo(){return new d(this.view.basemapTerrain.getUsedMemoryForLayerView(this))}getTileUrl(e){return this.layer.getTileUrl(e[0],e[1],e[2])}_addTilingSchemeMatchPromise(){if(this.fullExtent==null)return this.addResolvingPromise(Promise.reject(new o("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(e)return this.addResolvingPromise(Promise.reject(e));this.addResolvingPromise(g(()=>{var i,t;return(t=(i=this.view)==null?void 0:i.basemapTerrain)==null?void 0:t.tilingSchemeLocked}).then(()=>{var s;const i=this.view.basemapTerrain.tilingScheme,t="tilemapCache"in this.layer?(s=this.layer.tilemapCache)==null?void 0:s.effectiveMaxLOD:void 0,l=this._getTileInfoCompatibilityError(this.tileInfo,i,t);if(l)throw l}))}_getTileInfoSupportError(e,i){var s;const t=y(e,i,this.view.spatialReference,this.view.state.viewingMode,"tilemapCache"in this.layer?(s=this.layer.tilemapCache)==null?void 0:s.effectiveMaxLOD:void 0);if(!t)return;const l={layer:this.layer,error:t};switch(t.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":return new o("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",l);default:return new o("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",l)}}_getTileInfoCompatibilityError(e,i,t){return e!=null&&i.compatibleWith(e,t)?null:new o("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,i){const t={minLevel:0,maxLevel:1/0},l=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!l)return t;const s=l.levels[0],c=p=>{const h=Math.log(s.scale/p)/Math.LN2;return .5-Math.abs(.5-h%1)<1e-9?Math.round(h):Math.ceil(h)};return e!=null&&e>0&&(t.minLevel=Math.max(0,c(e))),i!=null&&i>0&&(t.maxLevel=Math.max(0,c(i))),t}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return r([n({readOnly:!0})],a.prototype,"imageFormatIsOpaque",null),r([n({readOnly:!0})],a.prototype,"updating",void 0),r([n(f)],a.prototype,"updatingProgress",void 0),r([n(v)],a.prototype,"updatingProgressValue",void 0),r([n()],a.prototype,"hasMixedImageFormats",void 0),r([n()],a.prototype,"fullExtent",null),r([n({readOnly:!0})],a.prototype,"isOpaque",null),r([n({readOnly:!0})],a.prototype,"visibleAtCurrentScale",null),r([n()],a.prototype,"dataScaleRange",null),r([n({readOnly:!0})],a.prototype,"dataLevelRange",null),r([n({readOnly:!0})],a.prototype,"displayLevelRange",null),r([n()],a.prototype,"layer",void 0),a=r([u("esri.views.3d.layers.TiledLayerView3D")],a),a};export{C as p};
