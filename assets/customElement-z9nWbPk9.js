import{L as e,u as s,c as a,n as o,i as r,a as n}from"./index-4eY77cms.js";import{g as h}from"./Histogram-D-YmhBZ0.js";import{P as d}from"./useWidget-BajufX8l.js";import"./Accessor-BmwT4B0c.js";import"./intl-Duiy0OzY.js";import"./Promise-DfET-uns.js";import"./cast-CsZslgGN.js";import"./JSONSupport-DcrLLGjL.js";import"./jsxFactory-Cnml7uXM.js";import"./Evented-Dw4_VOGn.js";import"./reactiveUtils-XM7cS2OP.js";import"./SimpleObservable-CvOkykwM.js";import"./uuid-Cl5lrJ4c.js";import"./globalCss-vQlnDsEX.js";import"./substitute-CvdjmBYq.js";import"./index-C5b9dHRB.js";import"./component-utils-D0ciaaZ_.js";/*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.32/esri/copyright.txt for details.
v4.32.12 */const m=r`@layer{arcgis-histogram{display:block}}`,g=d(h),t=class t extends e{constructor(){super(...arguments),this.widget=g(this),this.viewModel=this.widget.viewModel,this.autoDestroyDisabled=!1,this.average=this.widget.average,this.barCreatedFunction=this.widget.barCreatedFunction,this.bins=this.widget.bins,this.dataLineCreatedFunction=this.widget.dataLineCreatedFunction,this.dataLines=this.widget.dataLines,this.icon=this.widget.icon,this.label=this.widget.label,this.labelFormatFunction=this.widget.labelFormatFunction,this.layout=this.widget.layout,this.max=this.widget.max,this.min=this.widget.min,this.position="bottom-left",this.state=this.widget.state,this.arcgisPropertyChange=s()("state"),this.arcgisReady=a()}async destroy(){await this.manager.destroy()}};t.properties={autoDestroyDisabled:5,average:9,barCreatedFunction:0,bins:0,dataLineCreatedFunction:0,dataLines:0,icon:1,label:1,labelFormatFunction:0,layout:1,max:9,min:9,position:1,referenceElement:1,state:3},t.shadowRootOptions=o,t.styles=m;let i=t;n("arcgis-histogram",i);export{i as ArcgisHistogram};
