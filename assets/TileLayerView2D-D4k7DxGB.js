import{c as w,h as y,m as I,r as V,e as v,G as H,b as o,a as u,s as T,d as n,y as g,f as q}from"./index-B1qcMJFy.js";import"./colorUtils-46-ov8wK.js";import"./GeometryUtils-ByasXqdY.js";import"./UpdateTracking2D-DqQVxF7b.js";import"./enums-BRqP_wXA.js";import"./definitions-C14Q9bsB.js";import"./labelUtils-BAW6mwzs.js";import"./OverrideHelper-DlLhMkRM.js";import"./floatRGBA-CKX-bz9l.js";import"./Container-Cu2mymaD.js";import"./WGLContainer-CbQ7-c9v.js";import"./Texture-geJFW1sL.js";import"./enums-CYMvjYBC.js";import"./Program-D73aiqol.js";import"./LabelMetric-C-5nd1ih.js";import"./StyleDefinition-pu9RBNlY.js";import"./enums-BRzLM11V.js";import"./MagnifierPrograms-oJHatDbB.js";import"./pbf-DdHtTFeL.js";import"./FeatureCommandQueue-Bd0gKLXd.js";import"./OrderIndependentTransparency-D0wfjx-a.js";import"./testSVGPremultipliedAlpha-Dn9prXDJ.js";import{$ as U}from"./GraphicsView2D-BcUC8m-F.js";import"./earcut-CT2IwvBr.js";import"./vec3f32-nZdmKIgz.js";import{r as b,o as f,n as d}from"./imageUtils-QjcTB4np.js";import{m as S,u as C}from"./LayerView-CiN9pM-X.js";import{h as Q}from"./HighlightGraphicContainer-CbTRnmyN.js";import{i as $}from"./RefreshableLayerView-B1ND2_Zv.js";import{S as L,U as P,r as k}from"./drapedUtils-BpWT7gIL.js";import"./vec42-B-sS29RP.js";import"./vec4f64-CCf6w8sj.js";import"./TurboLine-ZijYh2Mq.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./utils-y0bK7WMB.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-B3rjJlnv.js";import"./highlightReasons-D5NOFQWa.js";import"./constants-D5zmR9t2.js";import"./defaultsJSON-CHAaurhX.js";import"./quantizationUtils-D0A0ACzz.js";import"./parser-BMJzm2a2.js";import"./ProgramTemplate-PPTPfqvG.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-D_5zMG16.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./CircularArray-DfLrgW_-.js";import"./AttributeStore-CkE9hdz3.js";import"./FieldsIndex-DA0UbGLz.js";import"./UnknownTimeZone-B5Qf1DoL.js";import"./TimeOnly-CBRxWEF1.js";import"./diffUtils-ArzxlFJn.js";import"./timeSupport-Bruw3RGT.js";import"./json-Wa8cmqdu.js";import"./lengthUtils-DbqEO4K7.js";import"./basicInterfaces-GbxEOYtk.js";import"./normalizeUtilsSync-DXpr1r8A.js";import"./Bitmap-CH_AkvRh.js";import"./TileContainer-BDAVfzMi.js";import"./scaleUtils-BiZ14rCn.js";import"./AGraphicContainer-C0PMCmvC.js";import"./TechniqueInstance-BmqchXXM.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-BcOnZfp1.js";import"./popupUtils-B07msJVZ.js";const F=[0,0];let a=class extends $(b(S(C))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),L(this,this.layer)){const i=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Q(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(r,h)=>k(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,e;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(e=this._highlightView)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):v()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return H((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(F,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(s){if(!o(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const c=new u(m),_=await this.fetchTile(c,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,c,t)}}throw s}const l=new u(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,l,{signal:r}),l.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r)}catch(s){if(o(s))throw s;p=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,p,l,t):p}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){o(e)||T.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};n([g()],a.prototype,"resampling",null),n([g()],a.prototype,"tilemapCache",null),a=n([q("esri.views.2d.layers.TileLayerView2D")],a);const Nt=a;export{Nt as default};
