import{r as e,c as i,g as s}from"./index-CeCSsEgo.js";import{a8 as r}from"./index-d2df902e-k_MvfteY.js";import{u as a}from"./chunk-PVEVZB4O-2c3b8893-zEP54EYc.js";import{u as o}from"./index-c99fc80c-B8Hva1Pq.js";import{m as g}from"./useWidget-9b153437-CkH1Tfo6.js";import"./component-utils-de9339fe-Dlc67iIs.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */const h="arcgis-swipe{}",n=h,d=g(r),l=class{constructor(t){e(this,t),this.arcgisReady=i(this,"arcgisReady",7),this.arcgisPropertyChange=i(this,"arcgisPropertyChange",7),this.manager=o(this),this.widget=d(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=a()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.icon=this.widget.icon,this.label=this.widget.label,this.direction=this.widget.direction,this.dragLabel=this.widget.dragLabel,this.leadingLayers=this.widget.leadingLayers,this.swipePosition=this.widget.position,this.trailingLayers=this.widget.trailingLayers,this.position="manual",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}get el(){return s(this)}};l.style=n;export{l as arcgis_swipe};
