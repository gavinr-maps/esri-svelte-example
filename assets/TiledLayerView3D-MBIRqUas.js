import{r as l,m as s,a as u,s as o}from"./Accessor-BmwT4B0c.js";import{w as g}from"./reactiveUtils-XM7cS2OP.js";import{t as d}from"./LineCallout.glsl-BQyjm-mE.js";import{t as f,e as v}from"./ShadowCastAccumulate.glsl-DMni1gLj.js";import{M as y}from"./terrainUtils-CgFk6NLH.js";import{c as w,u as S}from"./layerViewUtils-Bevty3Jm.js";const I=m=>{let a=class extends m{constructor(){super(...arguments),this.hasMixedImageFormats=!0}get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get visibleAtCurrentScale(){if(!w(this.layer.minScale,this.layer.maxScale)||!this.view.scale)return!0;const e=Math.round(this.view.basemapTerrain.tilingScheme.levelAtScale(this.view.scale));return e>=this.displayLevelRange.minLevel&&e<=this.displayLevelRange.maxLevel}get dataScaleRange(){const e=this.tileInfo.lods;let i=e[0].scale,t=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:r,effectiveMaxLOD:n}=this.layer.tilemapCache;i=this.tileInfo.lodAt(r).scale,t=this.tileInfo.lodAt(n).scale}return{minScale:i,maxScale:t}}canResume(){var i,t,r;const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&((i=this.layer)==null?void 0:i.loaded)&&!((t=this.parent)!=null&&t.suspended)&&((r=this.view)==null?void 0:r.ready)&&S(e)&&this.visibleAtCurrentTimeExtent||!1}get dataLevelRange(){const{minScale:e,maxScale:i}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,i)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,i=this.layer.maxScale||this.dataScaleRange.maxScale,t=this.levelRangeFromScaleRange(e,i);return this.layer.maxScale&&t.maxLevel++,t}get performanceInfo(){return new d(this.view.basemapTerrain.getUsedMemoryForLayerView(this))}getTileUrl(e){return this.layer.getTileUrl(e[0],e[1],e[2])}_addTilingSchemeMatchPromise(){if(this.fullExtent==null)return this.addResolvingPromise(Promise.reject(new o("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(e)return this.addResolvingPromise(Promise.reject(e));this.addResolvingPromise(g(()=>{var i,t;return(t=(i=this.view)==null?void 0:i.basemapTerrain)==null?void 0:t.tilingSchemeLocked}).then(()=>{var n;const i=this.view.basemapTerrain.tilingScheme,t="tilemapCache"in this.layer?(n=this.layer.tilemapCache)==null?void 0:n.effectiveMaxLOD:void 0,r=this._getTileInfoCompatibilityError(this.tileInfo,i,t);if(r)throw r}))}_getTileInfoSupportError(e,i){var n;const t=y(e,i,this.view.spatialReference,this.view.state.viewingMode,"tilemapCache"in this.layer?(n=this.layer.tilemapCache)==null?void 0:n.effectiveMaxLOD:void 0);if(!t)return;const r={layer:this.layer,error:t};switch(t.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":return new o("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",r);default:return new o("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",r)}}_getTileInfoCompatibilityError(e,i,t){return e!=null&&i.compatibleWith(e,t)?null:new o("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,i){const t={minLevel:0,maxLevel:1/0},r=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!r)return t;const n=r.levels[0],c=p=>{const h=Math.log(n.scale/p)/Math.LN2;return .5-Math.abs(.5-h%1)<1e-9?Math.round(h):Math.ceil(h)};return e!=null&&e>0&&(t.minLevel=Math.max(0,c(e))),i!=null&&i>0&&(t.maxLevel=Math.max(0,c(i))),t}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return l([s({readOnly:!0})],a.prototype,"imageFormatIsOpaque",null),l([s({readOnly:!0})],a.prototype,"updating",void 0),l([s(f)],a.prototype,"updatingProgress",void 0),l([s(v)],a.prototype,"updatingProgressValue",void 0),l([s()],a.prototype,"hasMixedImageFormats",void 0),l([s()],a.prototype,"fullExtent",null),l([s({readOnly:!0})],a.prototype,"isOpaque",null),l([s({readOnly:!0})],a.prototype,"visibleAtCurrentScale",null),l([s()],a.prototype,"dataScaleRange",null),l([s({readOnly:!0})],a.prototype,"dataLevelRange",null),l([s({readOnly:!0})],a.prototype,"displayLevelRange",null),l([s()],a.prototype,"layer",void 0),a=l([u("esri.views.3d.layers.TiledLayerView3D")],a),a};export{I as p};
