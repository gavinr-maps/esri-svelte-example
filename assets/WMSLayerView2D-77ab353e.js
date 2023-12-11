import{f as o,g as m,j as b,u as M,E as l,b as F,s as C,k as R,aP as $}from"./index-27db053b.js";import{a as I}from"./BitmapContainer-d092b73b.js";import{m as q,u as U}from"./LayerView-26563b2c.js";import{v as V}from"./ExportStrategy-0b8ae0e4.js";import{a as W}from"./RefreshableLayerView-ca32feb0.js";import{j}from"./commonProperties-665c2ea3.js";import{o as L}from"./ExportWMSImageParameters-2affa45b.js";import"./WGLContainer-9150b62a.js";import"./definitions-7eb3a064.js";import"./FramebufferObject-799c8348.js";import"./Texture-4e3bcd4f.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-8035f66f.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-dd843369.js";import"./enums-f1a6a48a.js";import"./GeometryUtils-32fe8191.js";import"./heatmapUtils-37a4ad14.js";import"./vec4f64-3c9d0901.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-b45c6fd4.js";import"./parser-e532dcbf.js";import"./earcut-a2bcd635.js";import"./featureConversionUtils-94d8cb55.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./scaleUtils-0378b944.js";import"./Bitmap-bcf6d7d4.js";import"./ElevationInfo-aaff1467.js";import"./lengthUtils-535759c3.js";const H=e=>{let t=class extends e{initialize(){this.exportImageParameters=new L({layer:this.layer})}destroy(){this.exportImageParameters=M(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:a}=this;if(!r)return Promise.reject(new l("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:p}=a;if(!p)return Promise.reject(new l("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:i,width:s,height:n,x:d,y:c}=u;if(!(i&&s&&n))throw new l("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:s,height:n});return a.fetchFeatureInfo(i,s,n,d,c)}};return o([m()],t.prototype,"exportImageParameters",void 0),o([m({readOnly:!0})],t.prototype,"exportImageVersion",null),o([m()],t.prototype,"layer",void 0),o([m(j)],t.prototype,"timeExtent",void 0),t=o([b("esri.layers.mixins.WMSLayerView")],t),t};let h=class extends H(W(q(U))){constructor(){super(...arguments),this.bitmapContainer=new I}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{F(t)||C.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new I,this.container.addChild(this.bitmapContainer),this.strategy=new V({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=M(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:a,y:p}=e,{spatialReference:u}=t;let i,s=0,n=0;if(r.children.some(E=>{const{width:x,height:f,resolution:w,x:y,y:g}=E,v=y+w*x,P=g-w*f;return a>=y&&a<=v&&p<=g&&p>=P&&(i=new $({xmin:y,ymin:P,xmax:v,ymax:g,spatialReference:u}),s=x,n=f,!0)}),!i)return null;const d=i.width/s,c=Math.round((a-i.xmin)/d),S=Math.round((i.ymax-p)/d);return{extent:i,width:s,height:n,x:c,y:S}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...a})}};o([m()],h.prototype,"strategy",void 0),o([m()],h.prototype,"updating",void 0),h=o([b("esri.views.2d.layers.WMSLayerView2D")],h);const gt=h;export{gt as default};
