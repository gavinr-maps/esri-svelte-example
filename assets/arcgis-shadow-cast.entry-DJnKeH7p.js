import{r as s,c as e,g as a}from"./index-Bh2oEzTI.js";import{a8 as o}from"./index-5cc0d3e9-BXwdUzLn.js";import{u as h}from"./index-ee4c09de-CPW6V7nq.js";import{m as r}from"./useWidget-4dc2787d-C-ZlEsbo.js";import{u as d}from"./index-69f02a9e-wRYZXCy2.js";import"./component-utils-42b12dba-BfugynV_.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.31/esri/copyright.txt for details.
 * v4.31.2
 */const n="arcgis-shadow-cast{}",l=n,g=r(o),c=class{constructor(t){s(this,t),this.arcgisReady=e(this,"arcgisReady",7),this.arcgisPropertyChange=e(this,"arcgisPropertyChange",7),this.manager=d(this),this.widget=g(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=h()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.discreteOptions=this.viewModel.discreteOptions,this.durationOptions=this.viewModel.durationOptions,this.endTimeOfDay=this.viewModel.endTimeOfDay,this.startTimeOfDay=this.viewModel.startTimeOfDay,this.thresholdOptions=this.viewModel.thresholdOptions,this.utcOffset=this.viewModel.utcOffset,this.visualizationType=this.viewModel.visualizationType,this.icon=this.widget.icon,this.label=this.widget.label,this.headingLevel=this.widget.headingLevel,this.hideTimeRangeSlider=this.widget.visibleElements.timeRangeSlider,this.hideTimezone=this.widget.visibleElements.timezone,this.hideDatePicker=this.widget.visibleElements.datePicker,this.hideVisualizationOptions=this.widget.visibleElements.visualizationOptions,this.hideColorPicker=this.widget.visibleElements.colorPicker,this.hideTooltip=this.widget.visibleElements.tooltip,this.position="bottom-left",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}async getDuration(t){var i;return(i=this.widget)==null?void 0:i.viewModel.getDuration(t)}async start(){var t;(t=this.widget)==null||t.viewModel.start()}async stop(){var t;(t=this.widget)==null||t.viewModel.stop()}get el(){return a(this)}};c.style=l;export{c as arcgis_shadow_cast};
