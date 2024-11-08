import{r as f}from"./tslib.es6-B3Jf3DVX.js";import{a as q,_ as j}from"./asyncUtils-CWX51uTe.js";import{n as x,e as F,m as y,a as W}from"./subclass-BZA_h8Db.js";import{C as k,c as M,e as N,m as B,i as Y,u as Z,s as b}from"./Accessor-BLX9ikPh.js";import{whenOnce as J}from"./reactiveUtils-C5zUhJQJ.js";import{w as H}from"./Extent-Bf3YTe7m.js";import{q as E,s as R,E as K,I as Q,b as P,r as $,U as X}from"./Polyline-D9YkgmM_.js";import{e as ee,C as te}from"./RibbonLine.glsl-BZu1FDpE.js";import{l as ie}from"./LayerView3D-Dkb0AiwM.js";import{t as re}from"./aaBoundingBox-BE7cC1jD.js";import{t as ae,p as se,C as ne}from"./Texture-Fac_8AOC.js";import{t as C}from"./orientedBoundingBox-DOAJUK5g.js";import{u as oe}from"./sdfPrimitives-CUWZbMRe.js";import{e as D}from"./VertexAttribute-Cq4MnHjR.js";import{r as le}from"./projectExtentUtils-BJX_ptLZ.js";import{t as he}from"./Material-_xx7OZxD.js";import{E as v,g as me}from"./OverlayCompositing.glsl-CiE3Tt8y.js";import{E as O}from"./MergedRenderer-Dli9s1X5.js";import{I as de}from"./ImageMaterial.glsl-toQN6zid.js";import{y as ue}from"./LayerView-CGYm21KA.js";import{i as ce}from"./RefreshableLayerView-BVliPdnr.js";import{r as ge}from"./layerViewUtils-DhFEu8Rd.js";import{D as z}from"./enums-D9v74xTE.js";function pe(t,e,i){const a=E(t)/R(t),r={width:i,height:i};return a>1.0001?r.height=i/a:a<.9999&&(r.width=i*a),r.width=Math.round(r.width/(E(t)/E(e))),r.height=Math.round(r.height/(R(t)/R(e))),r}function V(t,e){return oe(t,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function fe(t,e,i){if(!K(e,i))return V(t,i);const a=[e[1]-i[1],Math.min(e[3],i[3])-Math.max(e[1],i[1]),i[3]-e[3],123456],r=[e[0]-i[0],Math.min(e[2],i[2])-Math.max(e[0],i[0]),i[2]-e[2],123456],l=i[2]-i[0],n=i[3]-i[1],s=r[0]>0&&r[2]>0?3:2,h=a[0]>0&&a[2]>0?3:2,o=(h+1)*(s+1),d=re(3*o),u=ae(2*o),m=new Array(6*(h*s-1));let S=0,I=0,G=0,g=0,p=0;for(let w=0;w<4;w++){const T=a[w];if(T<=0)continue;let A=0;for(let _=0;_<4;_++){const L=r[_];L<=0||(d[I++]=i[0]+A,d[I++]=i[1]+S,d[I++]=-1,u[G++]=A/l,u[G++]=S/n,_<3&&w<3&&(_!==1||w!==1)&&(m[p++]=g,m[p++]=g+1,m[p++]=g+s+1,m[p++]=g+1,m[p++]=g+s+2,m[p++]=g+s+1),g++,A+=L)}S+=T}const U=new Array(m.length);return new se(t,[[D.POSITION,new C(d,m,3,!0)],[D.NORMAL,new C(we,U,3,!0)],[D.UV0,new C(u,m,2,!0)]])}const we=[0,0,1];let c=class extends ce(ie(ue)){constructor(){super(...arguments),this.drapeSourceType=ee.RasterImage,this.updatePolicy=te.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=k(async t=>{this.destroyed||await this._doRefresh(t).catch(e=>{M(e)||x.getLogger(this).error(e)})},2e3)}get visibleAtCurrentScale(){const t=this.layer,e="effectiveScaleRange"in t?t.effectiveScaleRange:null;return ge(e,this.view.scale)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(F(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(le(this).then(t=>this._set("fullExtentInLocalViewSpatialReference",t))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler())}destroy(){this.clear()}setDrapingExtent(t,e){this._spatialReference=e,t.forEach((i,a)=>{this._overlays[a]=i,this._updateImageExtent(i,a)})}_updateImageExtent(t,e){const i=this._clippedExtent(t.extent,_e);if(i==null)return;const a=pe(t.extent,i,t.resolution);let r=t.pixelRatio*this.view.state.pixelRatio;const{layer:l}=this;if("imageMaxWidth"in l&&l.imageMaxWidth!=null||"imageMaxHeight"in l&&l.imageMaxHeight!=null){const s=l.imageMaxWidth,h=l.imageMaxHeight;if(a.width>s){const o=s/a.width;a.height=Math.floor(a.height*o),a.width=s,r*=o}if(a.height>h){const o=h/a.height;a.width=Math.floor(a.width*o),a.height=h,r*=o}}const n=this._extents[e];n&&Q(n.extent,i)&&this._imageSizeEquals(i,n.imageSize,a)||(this._extents[e]={extent:P(i),imageSize:a,pixelRatio:r},this.suspended||this._fetch(e).catch(s=>{M(s)||x.getLogger(this).error(s)}))}clear(){for(let t=0;t<this._images.length;t++)this._clearImage(t)}async doRefresh(){return this._doRefresh()}async _doRefresh(t){if(this.suspended)return;const e=[];for(let i=0;i<this._extents.length;i++)this._extents[i]&&e.push(this._fetch(i,t));await Promise.allSettled(e)}async processResult(t,e,i){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(t.image=e)}findExtentInfoAt(t){for(const e of this._extents){const i=e.extent;if(new H(i[0],i[1],i[2],i[3],this._spatialReference).contains(t))return e}return null}getFetchOptions(){}async redraw(t,e){await q(this._images,async(i,a)=>{i&&(await t(i,e),await this._createStageObjects(a,i.image,e))})}_imageSizeEquals(t,e,i){if(!this.maximumDataResolution)return!1;const a=E(t)/this.maximumDataResolution.x,r=R(t)/this.maximumDataResolution.y,l=a/e.width,n=r/e.height,s=a/i.width,h=r/i.height,o=Math.abs(l-s),d=Math.abs(n-h),u=he.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return o<=u&&d<=u}async _fetch(t,e){if(this.suspended)return;const i=this._extents[t],a=i.extent;this._images[t]||(this._images[t]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:P(a)});const r=this._images[t];r.loadingAbortController=N(r.loadingAbortController);const l=new H(a[0],a[1],a[2],a[3],this._spatialReference);if(l.width===0||l.height===0)return void this._clearImage(t);const n=new AbortController;r.loadingAbortController=n,B(e,()=>n.abort());const s=n.signal,h=this._waitFetchReady(s).then(async()=>{const o={requestAsImageElement:!0,pixelRatio:this._overlays[t].pixelRatio,...this.getFetchOptions(),signal:s},{height:d,width:u}=i.imageSize;return this.layer.fetchImage(l,u,d,o)}).then(o=>{if(Y(s))throw x.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),Z();return this.processResult(r,o)}).then(()=>{$(r.renderExtent,a)});r.loadingPromise=h,await this._updatingHandles.addPromise(h.then(async()=>{b(s),await this._createStageObjects(t,r.image,s)}).catch(o=>{throw o&&!M(o)&&x.getLogger(this).error(o),o}).finally(()=>{h===r.loadingPromise&&(r.loadingPromise=null,r.loadingAbortController=null)}))}_clearImage(t){const e=this._images[t];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],O.UPDATE),e.renderGeometry=null);const i=this.view._stage,a=e.texture;a==null||a.unload(),i.remove(a),e.texture=null,i.remove(e.material),e.material=null,e.loadingAbortController=N(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(t,e,i){const a=this.view._stage,r=this._images[t],l=()=>{var n;(n=r.texture)==null||n.unload(),a.remove(r.texture),r.texture=null,r.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([r.renderGeometry],O.UPDATE),r.renderGeometry=null)};if(e){const n=new ne(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:z.CLAMP_TO_EDGE,t:z.CLAMP_TO_EDGE}});let s;if(await j(this._images[t===v.INNER?v.OUTER:v.INNER].loadingPromise),b(i),l(),await a.schedule(()=>n.load(a.renderView.renderingContext),i),a.add(n),r.texture=n,r.material==null?(r.material=new de({textureId:n.id}),a.add(r.material)):r.material.setParameters({textureId:n.id}),t===v.INNER)s=V(r.material,r.renderExtent);else{const h=this._images[0].renderExtent;if(!h)return void l();s=fe(r.material,h,r.renderExtent)}r.renderGeometry=new me(s),r.renderGeometry.localOrigin=this._overlays[t].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([r.renderGeometry],O.UPDATE)}else l(),a.remove(r.material),r.material=null}_clippedExtent(t,e){if(this.view.viewingMode!=="local")return $(e,t);const i=this.view.basemapTerrain;return i.ready?X(t,i.extent,e):$(e,t)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(t){await J(()=>this.view.stationary,t),b(t)}};f([y()],c.prototype,"layer",void 0),f([y()],c.prototype,"suspended",void 0),f([y({readOnly:!0})],c.prototype,"fullExtentInLocalViewSpatialReference",void 0),f([y({readOnly:!0})],c.prototype,"visibleAtCurrentScale",null),f([y()],c.prototype,"updating",void 0),c=f([W("esri.views.3d.layers.DynamicLayerView3D")],c);const qe=c,_e=P();export{qe as N};
