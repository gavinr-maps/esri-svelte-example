import{g as l,P as h,V as g,i as f,d as w,f as d}from"./index-B1qcMJFy.js";import{t as u,m as n}from"./jsonUtils-T1v-OExy.js";import{d as V}from"./FeatureSet-B0ca9TdS.js";import{m as b,u as S}from"./LayerView-CiN9pM-X.js";import{t as _}from"./GraphicContainer-BN1nKzSQ.js";import{$ as T}from"./GraphicsView2D-BcUC8m-F.js";import"./UniqueValueRenderer-0DBTeu6a.js";import"./ColorStop-CWeLc-IV.js";import"./diffUtils-ArzxlFJn.js";import"./colorRamps-DdzVD7Op.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BGai42lJ.js";import"./lengthUtils-DbqEO4K7.js";import"./jsonUtils-D4lwJas0.js";import"./styleUtils-CCLgKLZt.js";import"./LRUCache-BtWa1HuP.js";import"./Version-D0C4RPiX.js";import"./FieldsIndex-DA0UbGLz.js";import"./UnknownTimeZone-B5Qf1DoL.js";import"./OverrideHelper-DlLhMkRM.js";import"./colorUtils-46-ov8wK.js";import"./vec42-B-sS29RP.js";import"./vec4f64-CCf6w8sj.js";import"./utils-y0bK7WMB.js";import"./quantizationUtils-D0A0ACzz.js";import"./heatmapUtils-BYQ7d-zD.js";import"./scaleUtils-BiZ14rCn.js";import"./Container-Cu2mymaD.js";import"./parser-BMJzm2a2.js";import"./highlightReasons-D5NOFQWa.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-geJFW1sL.js";import"./AGraphicContainer-C0PMCmvC.js";import"./TechniqueInstance-BmqchXXM.js";import"./UpdateTracking2D-DqQVxF7b.js";import"./TurboLine-ZijYh2Mq.js";import"./enums-BRqP_wXA.js";import"./earcut-CT2IwvBr.js";import"./GeometryUtils-ByasXqdY.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-C-5nd1ih.js";import"./Program-D73aiqol.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./labelUtils-BAW6mwzs.js";import"./defaultsJSON-CHAaurhX.js";import"./BindType-BmZEZMMh.js";import"./Util-B3rjJlnv.js";import"./constants-D5zmR9t2.js";import"./TileContainer-BDAVfzMi.js";import"./WGLContainer-CbQ7-c9v.js";import"./ProgramTemplate-PPTPfqvG.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-D_5zMG16.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-Bd0gKLXd.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-CkE9hdz3.js";import"./TimeOnly-CBRxWEF1.js";import"./timeSupport-Bruw3RGT.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-DXpr1r8A.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,e){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(r=>{const i=this._popupTemplates.get(r),s=r.hitTest(t);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).map(r=>({type:"graphic",graphic:r,layer:o,mapPoint:t}))}update(t){if(this.graphicsViews)for(const e of this.graphicsViews)e.processUpdate(t)}attach(){this.addAttachHandles([l(()=>{var t;return(t=this.layer)==null?void 0:t.featureCollections},t=>{this._clear();for(const{popupInfo:e,featureSet:o,layerDefinition:r}of t){const i=V.fromJSON(o),s=new g(i.features),p=r.drawingInfo,c=e?f.fromJSON(e):null,m=u(p.renderer),a=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:m,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=a,this._popupTemplates.set(a,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=m.symbol):this.layer.lineSymbol=m.symbol:this.layer.polygonSymbol=m.symbol,this.graphicsViews.push(a),this.container.addChild(a.container)}},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.polygonSymbol},t=>{this._graphicsViewMap.polygon.renderer=new n({symbol:t})},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.lineSymbol},t=>{this._graphicsViewMap.polyline.renderer=new n({symbol:t})},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.pointSymbol},t=>{this._graphicsViewMap.point.renderer=new n({symbol:t})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}_clear(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=w([d("esri.views.2d.layers.GeoRSSLayerView2D")],y);const It=y;export{It as default};
