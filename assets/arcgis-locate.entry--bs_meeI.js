import{r as u,c as s,h as n,g as p}from"./index-Bh2oEzTI.js";import{g as l}from"./globalCss-0ea08e9e-ByuaaWTq.js";import{u as m,m as f}from"./useViewModel-5eedd1c7-Chco_mlm.js";import{h as w,X as k}from"./index-5cc0d3e9-BXwdUzLn.js";import{u as b}from"./index-ee4c09de-CPW6V7nq.js";import{u as v}from"./index-69f02a9e-wRYZXCy2.js";import"./component-utils-42b12dba-BfugynV_.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.31/esri/copyright.txt for details.
 * v4.31.2
 */const y={arrowDown:"esri-icon-arrow-down",arrowUp:"esri-icon-arrow-up",basemap:"esri-icon-basemap",bookmark:"esri-icon-bookmark",calendar:"esri-icon-calendar",checkMark:"esri-icon-check-mark",checkboxUnchecked:"esri-icon-checkbox-unchecked",close:"esri-icon-close",collapse:"esri-icon-collapse",defaultAction:"esri-icon-default-action",description:"esri-icon-description",directions:"esri-icon-directions",dockBottom:"esri-icon-dock-bottom",dockLeft:"esri-icon-dock-left",dockRight:"esri-icon-dock-right",down:"esri-icon-down",downArrow:"esri-icon-down-arrow",download:"esri-icon-download",dragHorizontal:"esri-icon-drag-horizontal",dragVertical:"esri-icon-drag-vertical",duplicate:"esri-icon-duplicate",edit:"esri-icon-edit",elevationProfile:"esri-icon-elevation-profile",environmentSettings:"esri-icon-environment-settings",erase:"esri-icon-erase",error:"esri-icon-error",expand:"esri-icon-expand",fontFallbackText:"esri-icon-font-fallback-text",forward:"esri-icon-forward",gear:"esri-icon-gear",handleHorizontal:"esri-icon-handle-horizontal",handleVertical:"esri-icon-handle-vertical",home:"esri-icon-home",icon:"esri-icon",launchLinkExternal:"esri-icon-launch-link-external",layerList:"esri-icon-layer-list",layers:"esri-icon-layers",left:"esri-icon-left",leftArrows:"esri-icon-left-arrow",leftTriangleArrow:"esri-icon-left-triangle-arrow",lineOfSight:"esri-icon-line-of-sight",link:"esri-icon-link",linkExternal:"esri-icon-link-external",linkHorizontal:"esri-icon-link-horizontal",loadingIndicator:"esri-icon-loading-indicator",locate:"esri-icon-locate",locateCircled:"esri-icon-locate-circled",locked:"esri-icon-locked",mapPin:"esri-icon-map-pin",maximize:"esri-icon-maximize",measure:"esri-icon-measure",measureArea:"esri-icon-measure-area",measureBuildingHeightShadow:"esri-icon-measure-building-height-shadow",measureLine:"esri-icon-measure-line",menu:"esri-icon-menu",minimize:"esri-icon-minimize",minus:"esri-icon-minus",nonVisible:"esri-icon-non-visible",northNavigation:"esri-icon-north-navigation",noticeTriangle:"esri-icon-notice-triangle",organization:"esri-icon-organization",pan:"esri-icon-pan",pan2:"esri-icon-pan2",partlyCloudy:"esri-icon-partly-cloudy",pause:"esri-icon-pause",play:"esri-icon-play",playCircled:"esri-icon-play-circled",plus:"esri-icon-plus",polyline:"esri-icon-polyline",printer:"esri-icon-printer",radioChecked:"esri-icon-radio-checked",radioUnchecked:"esri-icon-radio-unchecked",refresh:"esri-icon-refresh",reverse:"esri-icon-reverse",right:"esri-icon-right",rightArrow:"esri-icon-right-arrow",rightTriangleArrow:"esri-icon-right-triangle-arrow",rotate:"esri-icon-rotate",save:"esri-icon-save",search:"esri-icon-search",settings2:"esri-icon-settings2",slice:"esri-icon-slice",swap:"esri-icon-swap",table:"esri-icon-table",timeClock:"esri-icon-time-clock",tracking:"esri-icon-tracking",trash:"esri-icon-trash",unlockedLinkHorizontal:"esri-icon-unlocked-link-horizontal",up:"esri-icon-up",upArrow:"esri-icon-up-arrow",upDownArrows:"esri-icon-up-down-arrows",urbanModel:"esri-icon-urban-model",vertexGps:"esri-icon-vertex-gps",visible:"esri-icon-visible",zoomInFixed:"esri-icon-zoom-in-fixed",zoomInMagnifyingGlass:"esri-icon-zoom-in-magnifying-glass",zoomOutFixed:"esri-icon-zoom-out-fixed",zoomToObject:"esri-icon-zoom-to-object"},z={base:"esri-locate"},d="gps-off",M=f(k),P=class{constructor(e){u(this,e),this.arcgisPropertyChange=s(this,"arcgisPropertyChange",7),this.arcgisReady=s(this,"arcgisReady",7),this.viewModelLocate=s(this,"arcgisSuccess",7),this.viewModelLocateError=s(this,"arcgisError",7),this.manager=v(this),this.messages=m(),this.viewModel=M(this),this.arcgisPropertyChange=b()("state"),this._locate=()=>{const{viewModel:i}=this;i.state==="locating"?i.cancelLocate():i.locate().catch(()=>{})},this.autoDestroyDisabled=!1,this.geolocationOptions=this.viewModel.geolocationOptions,this.goToLocationDisabled=this.viewModel.goToLocationEnabled,this.graphic=this.viewModel.graphic,this.goToOverride=this.viewModel.goToOverride,this.icon=d,this.label=void 0,this.popupDisabled=this.viewModel.popupEnabled,this.position="top-left",this.referenceElement=void 0,this.scale=this.viewModel.scale,this.state=this.viewModel.state}async cancelLocate(){this.viewModel.cancelLocate()}async destroy(){await this.manager.destroy()}async locate(){return await this.viewModel.locate()}render(){var c;const{viewModel:e,icon:i}=this,{state:o}=e,r=o==="locating",t=r?this.messages.cancel:this.messages.title,h=o==="feature-unsupported",g=y===void 0?d:void 0,a=this._localizeError((c=this.viewModel)==null?void 0:c.error);return n("div",{key:"b58afeca0487355a1203087b3ac9650c1ac7ae72",class:w(z.base,l.widget)},!h&&n("calcite-button",{key:"e04ea8350cab4f6b1e727fc0a16092f8a8b83090",class:l.widgetButton,disabled:o==="disabled","icon-start":r?void 0:i??g,kind:"neutral",label:t,onClick:this._locate,title:t},r?n("calcite-loader",{inline:!0,label:""}):null),a?n("calcite-tooltip",{open:!0,"overlay-positioning":"fixed","reference-element":this.el},a):null)}_localizeError(e){var i,o,r;if(e instanceof GeolocationPositionError)return e.code===GeolocationPositionError.PERMISSION_DENIED?(i=this.messages)==null?void 0:i.permissionError:e.code===GeolocationPositionError.TIMEOUT?(o=this.messages)==null?void 0:o.timeoutError:(r=this.messages)==null?void 0:r.positionUnavailable;if(e instanceof Error)return e.message}static get assetsDirs(){return["assets"]}get el(){return p(this)}};export{P as arcgis_locate};