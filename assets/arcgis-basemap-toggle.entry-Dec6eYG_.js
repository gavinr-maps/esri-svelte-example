import{r as _,c as b,h as e,g as w}from"./index-Bh2oEzTI.js";import{g as p}from"./globalCss-0ea08e9e-ByuaaWTq.js";import{u as B,m as k}from"./useViewModel-5eedd1c7-Chco_mlm.js";import{h as r,j as T,k as S}from"./index-5cc0d3e9-BXwdUzLn.js";import{l as $,u as M}from"./index-ee4c09de-CPW6V7nq.js";import{u as x}from"./index-69f02a9e-wRYZXCy2.js";import"./component-utils-42b12dba-BfugynV_.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.31/esri/copyright.txt for details.
 * v4.31.2
 */const i="esri-basemap-toggle",l="esri-basemap-thumbnail",t={base:i,secondaryBasemapImage:`${i}__image--secondary`,container:`${l} ${i}__container`,image:`${l}__image ${i}__image`,imageLoading:`${i}__image--loading`,overlay:`${l}__overlay ${i}__image-overlay`,title:`${l}__title ${i}__title`,overlayScrim:`${l}__overlay-scrim`},C=k(T),R=class{constructor(a){_(this,a),this.arcgisPropertyChange=b(this,"arcgisPropertyChange",7),this.arcgisReady=b(this,"arcgisReady",7),this.manager=x(this),this.messages=B(),this.basemapUtils=$(S),this.viewModel=C(this),this.arcgisPropertyChange=M()("nextBasemap","state"),this.activeBasemap=this.viewModel.activeBasemap,this.autoDestroyDisabled=!1,this.icon="layer-basemap",this.label=void 0,this.messageOverrides=void 0,this.nextBasemap=this.viewModel.nextBasemap,this.position="top-left",this.referenceElement=void 0,this.showTitle=!1,this.state=this.viewModel.state}async toggle(){return await this.viewModel.toggle()}async destroy(){await this.manager.destroy()}render(){const a=this.viewModel,n=a.state==="disabled"?null:a.activeBasemap,s=a.state==="disabled"?null:a.nextBasemap,u=a.state==="loading",c=a.state==="incompatible-next-basemap",o=(s==null?void 0:s.title)??"",m=s&&s.loadStatus!=="loaded";let d;const g=this.showTitle&&o,h=c,y=g||h,f=this._getThumbnailStyles(n),v=this._getThumbnailStyles(s);return y&&(d=e("div",{key:"c903fa639a199788fd04f15ea538503d6286adec",class:t.overlay},g?e("span",{class:t.title,title:o},o):null,h?e("calcite-scrim",{class:t.overlayScrim,title:this.messages.incompatibleSpatialReference},e("calcite-icon",{icon:"exclamation-mark-triangle"})):null)),e("div",{key:"df0a0c1d497fa78918932a139e7b73738170cd4e",class:r(t.base,p.widget)},e("calcite-button",{key:"0887bb1b38eb38dfe7ca19b09a89b6835b019e17",appearance:"transparent","data-basemap-id":s?s.id:"",disabled:c,kind:"neutral",label:this.label??void 0,onClick:()=>void this.toggle(),title:this.label??void 0},e("div",{key:"f9ff391ee36ec3b1faca881b7c8e0c96b8a390bb",class:r(t.container,t.secondaryBasemapImage)},e("div",{key:"eb56cc5b9af3d5d4280f6d4cd30da02adab5826d",class:t.image,style:f})),e("div",{key:"9b7498279464653e17b78d0c32782bb44c259607",class:t.container},e("div",{key:"67f74ad9762d3a88c01b323657d083502e54f681",class:r(t.image,m?t.imageLoading:null),style:v},m||u?e("calcite-scrim",null,e("span",{"aria-hidden":"true",class:p.loaderAnimation,role:"presentation"})):null),d)))}_getThumbnailStyles(a){const n=this.basemapUtils.getBasemapThumbnailUrl(a);return n?{backgroundImage:`url(${n})`}:{backgroundImage:""}}static get assetsDirs(){return["assets"]}get el(){return w(this)}};export{R as arcgis_basemap_toggle};