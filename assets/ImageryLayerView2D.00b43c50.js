import{m as e,ab as t,ac as i,cT as s,ad as a,a9 as r,gh as o,gb as n,cU as l,r as h,G as p,af as d,cN as c,L as u,g0 as m,w as y,e$ as g,al as w,X as v,gi as x}from"./vendor.d0a39f0f.js";import{l as f,u as b}from"./LayerView.556d10e0.js";import{b as j}from"./rasterProjectionHelper.05954be2.js";import{m as _}from"./vectorFieldUtils.cd4d450f.js";import{n as V}from"./Container.90659a9c.js";import{r as R}from"./GraphicContainer.aca38078.js";import{e as E}from"./BaseGraphicContainer.ce1e336b.js";import{d as q}from"./pixelUtils.df2312f8.js";import{t as P}from"./BitmapContainer.98f407c0.js";import{i as U}from"./Bitmap.97c680ca.js";import{S as D}from"./ExportStrategy.da9ec209.js";import{d as C}from"./popupUtils.2333904f.js";import{a as I}from"./RefreshableLayerView.6e21e268.js";import"./Utils.ea926aef.js";import"./Texture.6f578e52.js";import"./quantizationUtils.2d4b616a.js";import"./json.62026198.js";import"./Matcher.475ab8e3.js";import"./definitions.e5e12ce7.js";import"./ComputedAttributeStorage.61e51d59.js";import"./FeatureSetReader.3c31cb94.js";import"./centroid.1404a86d.js";import"./visualVariablesUtils.684ffd7c.js";import"./visualVariablesUtils.076fa3c6.js";import"./tileUtils.de6627be.js";import"./TileClipper.863da83f.js";import"./GeometryUtils.1bcb906c.js";import"./schemaUtils.c72e3829.js";import"./MaterialKey.376930c0.js";import"./CIMSymbolHelper.0ef4e080.js";import"./Rect.db562a93.js";import"./BidiEngine.af5bfcbd.js";import"./MD5.86afbcc5.js";import"./earcut.9760c2d2.js";import"./VertexArrayObject.3a9852d6.js";import"./FeatureContainer.da02904a.js";import"./TileContainer.850b0054.js";import"./WGLContainer.e726cb8a.js";import"./ShaderCompiler.f5adc423.js";import"./config.92a85a9b.js";const S=e.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let F=class extends r{constructor(){super(...arguments),this.attached=!1,this.container=new V,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:""},this.type="Graphics",this._graphics=new o,this._updateGraphics=n((async(e,t)=>{if(!e.stationary)return;const i=e.state,s=new l({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),[a,r]=e.state.size,o={};o.timeExtent=this.timeExtent,o.requestAsImageElement=!1,o.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(s.spatialReference));const n="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,p=await this._projectFullExtentPromise,{extent:d,resolution:c,width:u,height:m}=_(s,a,r,n,p),y=await this.layer.fetchImage(d,u,m,o),g=this.layer.renderer;if("vector-field"===g.type){const t=y.pixelData.pixelBlock,i=g.sizeVariables[0];!h(t)||i.minDataValue&&i.maxDataValue||(i.minDataValue=t.statistics[0].minValue,i.maxDataValue=t.statistics[0].maxValue),this._pixelData={extent:d,pixelBlock:t};const s=d.clone().normalize(),a={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:s,tileResolution:c,time:JSON.stringify(this.timeExtent||"")},r=this._canReuseVectorFieldData(a)?this._dataParameters.extents:[],o=await g.getGraphicsFromPixelData(y.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,r);if(r.length){const e=this._graphics.items.filter((e=>h(e.geometry)&&r.some((t=>t.intersects(e.geometry)))&&!s.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(o)}else this._graphics.set("items",o);this._graphicsView.update(e),this._dataParameters=a}}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{p(e)||S.error(e)}))}hitTest(e,t){const i=this.view.toMap(d(e,t));return Promise.resolve(new c({attributes:{},geometry:i,layer:this.layer}))}attach(){this._graphicsView=new E({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new R(this.view.featuresTilingScheme)}),this.attached=!0}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}async _getProjectedFullExtent(e){try{return await j(this.layer.fullExtent,e)}catch(t){try{const t=(await u(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?l.fromJSON(t):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,s=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,a=this._dataParameters.extents.some((t=>e.extents.some((e=>t.intersects(e)))));return t&&i&&s&&a}};t([i()],F.prototype,"attached",void 0),t([i()],F.prototype,"container",void 0),t([i()],F.prototype,"layer",void 0),t([i()],F.prototype,"timeExtent",void 0),t([i()],F.prototype,"view",void 0),t([i()],F.prototype,"updateRequested",void 0),t([i()],F.prototype,"updating",null),t([s({graphics:"Graphics"})],F.prototype,"type",void 0),F=t([a("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],F);var M=F;const B=e.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let T=class extends r{constructor(){super(...arguments),this.attached=!1,this.container=new V,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{p(e)||B.error(e)}))}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e,t){const i=this.view.toMap(d(e,t));return Promise.resolve(new c({attributes:{},geometry:i,layer:this.layer}))}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new P,this.strategy=new D({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),s=q(i,t);return h(s)?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}_fetchImage(e,t,i,s){return(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,s).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:s.signal}).then((t=>{const i=new U(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return i.filter=e=>this.layer.applyFilter(e),i}))))}};t([i()],T.prototype,"attached",void 0),t([i()],T.prototype,"container",void 0),t([i()],T.prototype,"layer",void 0),t([i()],T.prototype,"strategy",void 0),t([i()],T.prototype,"timeExtent",void 0),t([i()],T.prototype,"view",void 0),t([i()],T.prototype,"updateRequested",void 0),t([i()],T.prototype,"updating",null),t([s({imagery:"Imagery"})],T.prototype,"type",void 0),T=t([a("esri.views.2d.layers.imagery.ImageryView2D")],T);var k=T;const G=e=>{let s=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new y("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:s}=i,a=C(i,t);if(!s||!h(a))throw new y("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:s,popupTemplate:a});const r=await a.getRequiredFields(),o=new g;o.timeExtent=this.timeExtent,o.geometry=e,o.outFields=r,o.outSpatialReference=e.spatialReference;const n=this.view.resolution,l="2d"===this.view.type?new w(n,n,this.view.spatialReference):new w(.5*n,.5*n,this.view.spatialReference),{returnTopmostRaster:p,showNoDataRecords:d}=a.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},c={returnDomainValues:!0,returnTopmostRaster:p,pixelSize:l,showNoDataRecords:d,signal:h(t)?t.signal:null};return i.queryVisibleRasters(o,c).then((e=>e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}};return t([i()],s.prototype,"layer",void 0),t([i()],s.prototype,"suspended",void 0),t([i(m)],s.prototype,"timeExtent",void 0),t([i()],s.prototype,"view",void 0),s=t([a("esri.views.layers.ImageryLayerView")],s),s};let N=class extends(G(I(f(b)))){constructor(){super(...arguments),this._exportImageVersion=-1}initialize(){this.handles.add([v(this,["layer.blendMode","layer.effects"],(e=>{this.subview&&(this.subview.container.blendMode=e)}),!0),v(this,["layer.effect"],(e=>{this.subview&&(this.subview.container.effect=e)}),!0)])}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return!(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Promise.resolve(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([v(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate()})),this.layer.on("redraw",(()=>this.subview.redraw())),x(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||!this.suspended&&this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var i,s;"vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t||(null==(i=this.subview)||i.uninstall(this.container),null==(s=this.subview)||s.destroy(),this.subview="Imagery"===t?new k({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new M({layer:this.layer,view:this.view,timeExtent:this.timeExtent}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect),this.requestUpdate()}};t([i()],N.prototype,"pixelData",null),t([i({readOnly:!0})],N.prototype,"updating",null),t([i()],N.prototype,"subview",void 0),N=t([a("esri.views.2d.layers.ImageryLayerView2D")],N);var z=N;export{z as default};
