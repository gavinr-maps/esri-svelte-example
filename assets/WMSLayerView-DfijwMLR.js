import{e as r}from"./Evented-CXIxDjmW.js";import{y as o,b as f,c as n}from"./subclass-BR3PhgZG.js";import{u as x,s as g}from"./Accessor-D6mNnsWy.js";import{a as d}from"./ExportWMSImageParameters-BI_JqfG1.js";import{i as P}from"./timeSupport-BapPa47N.js";const V=u=>{let t=class extends u{initialize(){this.exportImageParameters=new d({layer:this.layer})}destroy(){this.exportImageParameters=x(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return P(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,y){const{layer:a}=this;if(!e)throw new n("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:m}=a;if(!m)throw new n("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:m});const h=this.createFetchPopupFeaturesQuery(e);if(!h)return[];const{extent:i,width:s,height:p,x:l,y:c}=h;if(!(i&&s&&p))throw new n("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:s,height:p});const w=await a.fetchFeatureInfo(i,s,p,l,c);return g(y),w}};return r([o()],t.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],t.prototype,"exportImageVersion",null),r([o()],t.prototype,"layer",void 0),r([o({readOnly:!0})],t.prototype,"timeExtent",null),t=r([f("esri.views.layers.WMSLayerView")],t),t};export{V as m};
