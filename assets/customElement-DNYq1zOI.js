import{i as e,L as s,u as a,c as o,n as r,a as n}from"./index-tefRSezt.js";import{g as h}from"./Histogram-F42OxD1h.js";import{P as d}from"./useWidget-Dlf3SkC7.js";import"./Accessor-BHnuXKD2.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./jsxFactory-CLjKarlq.js";import"./Evented-DCWccWGU.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./uuid-Cl5lrJ4c.js";import"./globalCss-CZa70j6i.js";import"./substitute-D1XJWgT5.js";import"./index-BkKcLxWB.js";import"./component-utils-DWY0IMHC.js";/*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.32/esri/copyright.txt for details.
v4.32.12 */const m=e`@layer{arcgis-histogram{display:block}}`,g=d(h),t=class t extends s{constructor(){super(...arguments),this.widget=g(this),this.viewModel=this.widget.viewModel,this.autoDestroyDisabled=!1,this.average=this.widget.average,this.barCreatedFunction=this.widget.barCreatedFunction,this.bins=this.widget.bins,this.dataLineCreatedFunction=this.widget.dataLineCreatedFunction,this.dataLines=this.widget.dataLines,this.icon=this.widget.icon,this.label=this.widget.label,this.labelFormatFunction=this.widget.labelFormatFunction,this.layout=this.widget.layout,this.max=this.widget.max,this.min=this.widget.min,this.position="bottom-left",this.state=this.widget.state,this.arcgisPropertyChange=a()("state"),this.arcgisReady=o()}async destroy(){await this.manager.destroy()}};t.properties={autoDestroyDisabled:5,average:9,barCreatedFunction:0,bins:0,dataLineCreatedFunction:0,dataLines:0,icon:1,label:1,labelFormatFunction:0,layout:1,max:9,min:9,position:1,referenceElement:1,state:3},t.shadowRootOptions=r,t.styles=m;let i=t;n("arcgis-histogram",i);export{i as ArcgisHistogram};
