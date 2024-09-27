import{r as e,c as s,g as i}from"./index-CeCSsEgo.js";import{_ as a}from"./index-d2df902e-k_MvfteY.js";import{u as r}from"./index-c99fc80c-B8Hva1Pq.js";import{m as o}from"./useWidget-9b153437-CkH1Tfo6.js";import"./component-utils-de9339fe-Dlc67iIs.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */const l="arcgis-scale-bar{}",c=l,n=o(a),g=class{constructor(t){e(this,t),this.arcgisReady=s(this,"arcgisReady",7),this.manager=r(this),this.widget=n(this),this.viewModel=this.widget.viewModel,this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.barStyle=this.widget.style,this.unit=this.widget.unit,this.icon=this.widget.icon,this.label=this.widget.label,this.position="bottom-left"}async destroy(){await this.manager.destroy()}get el(){return i(this)}};g.style=c;export{g as arcgis_scale_bar};
