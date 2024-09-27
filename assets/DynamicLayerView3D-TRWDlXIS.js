import{e as f}from"./Evented-CXIxDjmW.js";import{e as j,_ as q,w as F}from"./reactiveUtils-BFQ0BtrB.js";import{n as x,k as W,y as _,b as k}from"./subclass-BR3PhgZG.js";import{x as B,b as M,q as N,m as Y,y as Z,g as J,s as b}from"./Accessor-D6mNnsWy.js";import{w as H}from"./Extent-DHjqVB-p.js";import{r as E,s as R,E as K,I as Q,a as P,e as $,U as X}from"./Polyline-D97hl-6E.js";import{j as ee,e as te,C as ie,E as D,k as v,m as re}from"./RenderGeometry-CXcYvifi.js";import{l as ae}from"./LayerView3D-DMyi427V.js";import{t as se}from"./DoubleArray-CF_CpVBS.js";import{t as ne,I as oe,N as le}from"./Texture-CcsX4Ue_.js";import{t as C}from"./orientedBoundingBox-COq6pSqo.js";import{e as O}from"./VertexAttribute-BnAa5VW0.js";import{l as he}from"./projectExtentUtils-C8xmByoE.js";import{t as de}from"./Material-BN_i9QRJ.js";import{g as me}from"./ImageMaterial.glsl-RtQG_3xX.js";import{y as ce}from"./LayerView-CbIY_4n2.js";import{i as ue}from"./RefreshableLayerView-BClKL0FL.js";import{c as ge}from"./layerViewUtils-D2JqIDZ8.js";import{D as z}from"./enums-BlUEVwJR.js";function pe(t,e,i){const a=E(t)/R(t),r={width:i,height:i};return a>1.0001?r.height=i/a:a<.9999&&(r.width=i*a),r.width=Math.round(r.width/(E(t)/E(e))),r.height=Math.round(r.height/(R(t)/R(e))),r}function V(t,e){return ee(t,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function fe(t,e,i){if(!K(e,i))return V(t,i);const a=[e[1]-i[1],Math.min(e[3],i[3])-Math.max(e[1],i[1]),i[3]-e[3],123456],r=[e[0]-i[0],Math.min(e[2],i[2])-Math.max(e[0],i[0]),i[2]-e[2],123456],l=i[2]-i[0],n=i[3]-i[1],s=r[0]>0&&r[2]>0?3:2,h=a[0]>0&&a[2]>0?3:2,o=(h+1)*(s+1),m=se(3*o),c=ne(2*o),d=new Array(6*(h*s-1));let S=0,I=0,G=0,g=0,p=0;for(let w=0;w<4;w++){const T=a[w];if(T<=0)continue;let A=0;for(let y=0;y<4;y++){const L=r[y];L<=0||(m[I++]=i[0]+A,m[I++]=i[1]+S,m[I++]=-1,c[G++]=A/l,c[G++]=S/n,y<3&&w<3&&(y!==1||w!==1)&&(d[p++]=g,d[p++]=g+1,d[p++]=g+s+1,d[p++]=g+1,d[p++]=g+s+2,d[p++]=g+s+1),g++,A+=L)}S+=T}const U=new Array(d.length);return new oe(t,[[O.POSITION,new C(m,d,3,!0)],[O.NORMAL,new C(we,U,3,!0)],[O.UV0,new C(c,d,2,!0)]])}const we=[0,0,1];let u=class extends ue(ae(ce)){constructor(){super(...arguments),this.drapeSourceType=te.RasterImage,this.updatePolicy=ie.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=B(async t=>{this.destroyed||await this._doRefresh(t).catch(e=>{M(e)||x.getLogger(this).error(e)})},2e3)}get visibleAtCurrentScale(){const t=this.layer,e="effectiveScaleRange"in t?t.effectiveScaleRange:null;return ge(e,this.view.terrainScale)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(W(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(he(this).then(t=>this._set("fullExtentInLocalViewSpatialReference",t))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler())}destroy(){this.clear()}setDrapingExtent(t,e){this._spatialReference=e,t.forEach((i,a)=>{this._overlays[a]=i,this._updateImageExtent(i,a)})}_updateImageExtent(t,e){const i=this._clippedExtent(t.extent,ye);if(i==null)return;const a=pe(t.extent,i,t.resolution);let r=t.pixelRatio*this.view.state.pixelRatio;const{layer:l}=this;if("imageMaxWidth"in l&&l.imageMaxWidth!=null||"imageMaxHeight"in l&&l.imageMaxHeight!=null){const s=l.imageMaxWidth,h=l.imageMaxHeight;if(a.width>s){const o=s/a.width;a.height=Math.floor(a.height*o),a.width=s,r*=o}if(a.height>h){const o=h/a.height;a.width=Math.floor(a.width*o),a.height=h,r*=o}}const n=this._extents[e];n&&Q(n.extent,i)&&this._imageSizeEquals(i,n.imageSize,a)||(this._extents[e]={extent:P(i),imageSize:a,pixelRatio:r},this.suspended||this._fetch(e).catch(s=>{M(s)||x.getLogger(this).error(s)}))}clear(){for(let t=0;t<this._images.length;t++)this._clearImage(t)}async doRefresh(){return this._doRefresh()}async _doRefresh(t){if(this.suspended)return;const e=[];for(let i=0;i<this._extents.length;i++)this._extents[i]&&e.push(this._fetch(i,t));await Promise.allSettled(e)}async processResult(t,e,i){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(t.image=e)}findExtentInfoAt(t){for(const e of this._extents){const i=e.extent;if(new H(i[0],i[1],i[2],i[3],this._spatialReference).contains(t))return e}return null}getFetchOptions(){}async redraw(t,e){await j(this._images,async(i,a)=>{i&&(await t(i,e),await this._createStageObjects(a,i.image,e))})}_imageSizeEquals(t,e,i){if(!this.maximumDataResolution)return!1;const a=E(t)/this.maximumDataResolution.x,r=R(t)/this.maximumDataResolution.y,l=a/e.width,n=r/e.height,s=a/i.width,h=r/i.height,o=Math.abs(l-s),m=Math.abs(n-h),c=de.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return o<=c&&m<=c}async _fetch(t,e){if(this.suspended)return;const i=this._extents[t],a=i.extent;this._images[t]||(this._images[t]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:P(a)});const r=this._images[t];r.loadingAbortController=N(r.loadingAbortController);const l=new H(a[0],a[1],a[2],a[3],this._spatialReference);if(l.width===0||l.height===0)return void this._clearImage(t);const n=new AbortController;r.loadingAbortController=n,Y(e,()=>n.abort());const s=n.signal,h=this._waitFetchReady(s).then(async()=>{const o={requestAsImageElement:!0,pixelRatio:this._overlays[t].pixelRatio,...this.getFetchOptions(),signal:s},{height:m,width:c}=i.imageSize;return this.layer.fetchImage(l,c,m,o)}).then(o=>{if(Z(s))throw x.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),J();return this.processResult(r,o)}).then(()=>{$(r.renderExtent,a)});r.loadingPromise=h,await this._updatingHandles.addPromise(h.then(async()=>{b(s),await this._createStageObjects(t,r.image,s)}).catch(o=>{throw o&&!M(o)&&x.getLogger(this).error(o),o}).finally(()=>{h===r.loadingPromise&&(r.loadingPromise=null,r.loadingAbortController=null)}))}_clearImage(t){const e=this._images[t];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],D.UPDATE),e.renderGeometry=null);const i=this.view._stage,a=e.texture;a==null||a.unload(),i.remove(a),e.texture=null,i.remove(e.material),e.material=null,e.loadingAbortController=N(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(t,e,i){const a=this.view._stage,r=this._images[t],l=()=>{var n;(n=r.texture)==null||n.unload(),a.remove(r.texture),r.texture=null,r.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([r.renderGeometry],D.UPDATE),r.renderGeometry=null)};if(e){const n=new le(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:z.CLAMP_TO_EDGE,t:z.CLAMP_TO_EDGE}});let s;if(await q(this._images[t===v.INNER?v.OUTER:v.INNER].loadingPromise),b(i),l(),await a.schedule(()=>n.load(a.renderView.renderingContext),i),a.add(n),r.texture=n,r.material==null?(r.material=new me({transparent:!0,textureId:n.id}),a.add(r.material)):r.material.setParameters({textureId:n.id}),t===v.INNER)s=V(r.material,r.renderExtent);else{const h=this._images[0].renderExtent;if(!h)return void l();s=fe(r.material,h,r.renderExtent)}r.renderGeometry=new re(s),r.renderGeometry.localOrigin=this._overlays[t].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([r.renderGeometry],D.UPDATE)}else l(),a.remove(r.material),r.material=null}_clippedExtent(t,e){if(this.view.viewingMode!=="local")return $(e,t);const i=this.view.basemapTerrain;return i.ready?X(t,i.extent,e):$(e,t)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(t){await F(()=>this.view.stationary,t),b(t)}};f([_()],u.prototype,"layer",void 0),f([_()],u.prototype,"suspended",void 0),f([_({readOnly:!0})],u.prototype,"fullExtentInLocalViewSpatialReference",void 0),f([_({readOnly:!0})],u.prototype,"visibleAtCurrentScale",null),f([_()],u.prototype,"updating",void 0),u=f([k("esri.views.3d.layers.DynamicLayerView3D")],u);const He=u,ye=P();export{He as N};
