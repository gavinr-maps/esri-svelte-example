import{af as s,ag as o,ah as f,aq as D,j as P,Q as R,am as b,r as _,ar as z,as as k,t as V,at as A,q as C,G as x,au as E,U as M,av as O,s as $,aw as j,R as S,a9 as N,ao as q,P as T}from"./index-3399a756.js";import{m as J,y as G,h as L}from"./RasterVFDisplayObject-d487c1c0.js";import{f as H,u as W}from"./LayerView-7a9bc80f.js";import{a as Q}from"./GraphicsView2D-8d82edee.js";import{n as K}from"./HighlightGraphicContainer-2dbc32ec.js";import{T as X,x as Y,d as Z}from"./dataUtils-0aa42fa9.js";import{a as ee}from"./BitmapContainer-cc534289.js";import{h as te}from"./Container-1a5da220.js";import{l as ie}from"./Bitmap-23a3c332.js";import{v as re}from"./ExportStrategy-178a105f.js";import{J as ae}from"./rasterProjectionHelper-55113452.js";import{T as B}from"./color-199f3589.js";import{b as se}from"./WGLContainer-d8afca4f.js";import{s as oe}from"./popupUtils-a22c0a5e.js";import{i as ne}from"./RefreshableLayerView-f8269e55.js";import"./VertexArrayObject-98ddbe48.js";import"./Texture-cba35665.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./ExpandedCIM-c21ed6c9.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./MaterialKey-cce0ae8e.js";import"./definitions-3ddd14a8.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-8cf98e7a.js";import"./floatRGBA-72238bb3.js";import"./normalizeUtilsSync-0119d177.js";import"./projectionSupport-3c43db74.js";import"./json-48e3ea08.js";import"./AttributeStoreView-6133d335.js";import"./TiledDisplayObject-6fc1e3a1.js";import"./visualVariablesUtils-0b29afa3.js";import"./visualVariablesUtils-1b9fc8b0.js";import"./Matcher-c99a71cb.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c5d22745.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-18fcc6c1.js";import"./utils-126220d8.js";import"./util-8c53f1d8.js";import"./ComputedAttributeStorage-a877177c.js";import"./arcadeTimeUtils-90af5493.js";import"./executionError-fb3f283a.js";import"./centroid-3df0d3b7.js";import"./BaseGraphicContainer-143c5355.js";import"./FeatureContainer-fed03af3.js";import"./TileContainer-628b08e3.js";import"./vec3f32-ad1dc57f.js";import"./ProgramTemplate-e80c0ea0.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";let h=class extends D{constructor(){super(...arguments),this.attached=!1,this.container=new te,this.updateRequested=!1,this.type="imagery",this._bitmapView=new ee}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{P(t)||R.getLogger(this.declaredClass).error(t)})}hitTest(e){return new b({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new re({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:t.extent}}).catch(e=>{P(e)||R.getLogger(this.declaredClass).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(t)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),r=X(i,t);return _(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(e,t,i,r){var d;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const a=await this.layer.fetchImage(e,t,i,r);if(a.imageBitmap)return a.imageBitmap;const n=await this.layer.applyRenderer(a.pixelData,{signal:r.signal}),l=new ie(n.pixelBlock,(d=n.extent)==null?void 0:d.clone(),a.pixelData.pixelBlock);return l.filter=p=>this.layer.applyFilter(p),l}};s([o()],h.prototype,"attached",void 0),s([o()],h.prototype,"container",void 0),s([o()],h.prototype,"layer",void 0),s([o()],h.prototype,"strategy",void 0),s([o()],h.prototype,"timeExtent",void 0),s([o()],h.prototype,"view",void 0),s([o()],h.prototype,"updateRequested",void 0),s([o()],h.prototype,"updating",null),s([o()],h.prototype,"type",void 0),h=s([f("esri.views.2d.layers.imagery.ImageryView2D")],h);const le=h;class he extends se{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[J],target:()=>this.children,drawPhase:B.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===B.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends D{constructor(e){super(e),this._loading=null,this.update=z((t,i)=>this._update(t,i).catch(r=>{P(r)||R.getLogger(this.declaredClass).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:a}=e.state,n=new k({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,d]=e.state.size;this._loading=this.fetchPixels(n,l,d,i);const p=await this._loading;this._addToDisplay(p,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(V(e.pixelBlock))return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=e,n=new G(a);n.offset=[0,0],n.symbolizerParameters=t,n.rawPixelData=e,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=a.width*t.symbolTileSize,n.height=a.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};s([o()],y.prototype,"fetchPixels",void 0),s([o()],y.prototype,"container",void 0),s([o()],y.prototype,"_loading",void 0),s([o()],y.prototype,"updating",null),y=s([f("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pe=y;let c=class extends A{constructor(){super(...arguments),this.attached=!1,this.container=new he,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:d,height:p}=Y(e,t,i,n,a);if(_(a)&&!a.intersects(e))return{extent:l,pixelBlock:null};const m={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const u=this.getPixelData();if(_(u)&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===m.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,d,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=m;const w=g==null?void 0:g.pixelBlock;return V(w)?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?C(Z(w,"vector-uv")):w}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pe({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(x(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),E),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const e=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new b({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams)}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,a=this._dataParameters.bbox===e.bbox;return t&&i&&r&&a}async _getProjectedFullExtent(e){try{return await ae(this.layer.fullExtent,e)}catch{try{const i=(await M(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?k.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([o()],c.prototype,"attached",void 0),s([o()],c.prototype,"container",void 0),s([o()],c.prototype,"layer",void 0),s([o()],c.prototype,"timeExtent",void 0),s([o()],c.prototype,"type",void 0),s([o()],c.prototype,"view",void 0),s([o()],c.prototype,"updating",null),c=s([f("esri.views.2d.layers.imagery.VectorFieldView2D")],c);const ce=c,de=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:a}=this;if(!i)throw new $("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:n}=a,l=oe(a,r);if(!n||V(l))throw new $("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const d=await l.getRequiredFields(),p=new j;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=d,p.outSpatialReference=i.spatialReference;const{resolution:m,spatialReference:g}=this.view,w=this.view.type==="2d"?new S(m,m,g):new S(.5*m,.5*m,g),{returnTopmostRaster:u,showNoDataRecords:F}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},I={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:w,showNoDataRecords:F,signal:_(r)?r.signal:null};return a.queryVisibleRasters(p,I).then(U=>U)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return s([o()],t.prototype,"layer",void 0),s([o()],t.prototype,"suspended",void 0),s([o(O)],t.prototype,"timeExtent",void 0),s([o()],t.prototype,"view",void 0),t=s([f("esri.views.layers.ImageryLayerView")],t),t};let v=class extends de(ne(H(W))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new N,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new Q({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new K(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([x(()=>this.layer.blendMode??"normal",e=>this.subview&&(this.subview.container.blendMode=e),E),x(()=>this.layer.effect??null,e=>this.subview&&(this.subview.container.effect=e),E),x(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},q),x(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},q),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),x(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(e=this.subview)==null||e.destroy(),this.subview=null,(t=this._highlightView)==null||t.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:T.isCollection(e)?e.getItemAt(0):e)instanceof b))return{remove:()=>{}};let i=[];return Array.isArray(e)||T.isCollection(e)?i=e.map(r=>r.clone()):e instanceof b&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const e=(i=this.layer.renderer)==null?void 0:i.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:a}=this.subview;if(a===t)return this._attachSubview(this.subview),void(a==="flow"?this.subview.redrawOrRefetch():a==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=t==="imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new ce({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new L({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){e!=null&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};s([o()],v.prototype,"pixelData",null),s([o()],v.prototype,"subview",void 0),v=s([f("esri.views.2d.layers.ImageryLayerView2D")],v);const ut=v;export{ut as default};
