import{k as l,P as h,V as g,l as f,f as w,j as d}from"./index-27db053b.js";import{t as u,p as n}from"./jsonUtils-f1e152aa.js";import{d as V}from"./FeatureSet-b143a95b.js";import{m as b,u as S}from"./LayerView-26563b2c.js";import{i as _}from"./GraphicContainer-7a77e408.js";import{r as T}from"./GraphicsView2D-e9121f8d.js";import"./UniqueValueRenderer-049bb9e4.js";import"./LegendOptions-28b8c5c0.js";import"./diffUtils-135dddd3.js";import"./SizeVariable-10764cb7.js";import"./colorRamps-9cc2c549.js";import"./lengthUtils-535759c3.js";import"./ColorStop-6362a997.js";import"./jsonUtils-29e80207.js";import"./styleUtils-5b1b6fcb.js";import"./DictionaryLoader-9d5448cd.js";import"./LRUCache-016147c2.js";import"./Version-3276c9a1.js";import"./FieldsIndex-f11b6b69.js";import"./UnknownTimeZone-08907062.js";import"./heatmapUtils-37a4ad14.js";import"./vec4f64-3c9d0901.js";import"./Field-a20a79af.js";import"./fieldType-c94915e3.js";import"./scaleUtils-0378b944.js";import"./Container-b45c6fd4.js";import"./parser-e532dcbf.js";import"./definitions-7eb3a064.js";import"./enums-bdecffa2.js";import"./Texture-4e3bcd4f.js";import"./color-dd843369.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-293f1231.js";import"./FeatureContainer-6ee5bc6f.js";import"./AttributeStoreView-6fd4e287.js";import"./TiledDisplayObject-b221b9eb.js";import"./labelingInfo-66b6228e.js";import"./LabelClass-276e6e2b.js";import"./labelUtils-eac3d6dc.js";import"./defaultsJSON-b087dd4d.js";import"./WGLContainer-9150b62a.js";import"./FramebufferObject-799c8348.js";import"./ProgramTemplate-8035f66f.js";import"./GeometryUtils-32fe8191.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-a2bcd635.js";import"./featureConversionUtils-94d8cb55.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-f125f99d.js";import"./ExpandedCIM-0634141b.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-f777a36d.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-afe461ea.js";import"./floatRGBA-cdb69619.js";import"./clusterUtils-639b3df8.js";import"./MD5-715f37cd.js";import"./util-824e9a11.js";import"./TileContainer-4cd0678f.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-5f3d850d.js";import"./projectionSupport-7748729a.js";import"./json-48e3ea08.js";import"./Matcher-edd43180.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c7e9dbdd.js";import"./ComputedAttributeStorage-e175ca03.js";import"./TimeOnly-b2446565.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,o){if(!this.graphicsViews.length)return null;const e=this.layer;return this.graphicsViews.reverse().flatMap(r=>{const t=this._popupTemplates.get(r),s=r.hitTest(i);for(const p of s)p.layer=e,p.sourceLayer=e,p.popupTemplate=t;return s}).map(r=>({type:"graphic",graphic:r,layer:e,mapPoint:i}))}update(i){if(this.graphicsViews)for(const o of this.graphicsViews)o.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:o,featureSet:e,layerDefinition:r}of i){const t=V.fromJSON(e),s=new g(t.features),p=r.drawingInfo,c=o?f.fromJSON(o):null,m=u(p.renderer),a=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:m,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=a,this._popupTemplates.set(a,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=m.symbol):this.layer.lineSymbol=m.symbol:this.layer.polygonSymbol=m.symbol,this.graphicsViews.push(a),this.container.addChild(a.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=w([d("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Gi=y;export{Gi as default};
