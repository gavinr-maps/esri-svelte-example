import{r as a,c as i,g as r}from"./index-Bh2oEzTI.js";import{u as h}from"./index-ee4c09de-CPW6V7nq.js";import{E as o}from"./index-5cc0d3e9-BXwdUzLn.js";import{m as n}from"./useWidget-4dc2787d-C-ZlEsbo.js";import{u as d}from"./index-69f02a9e-wRYZXCy2.js";import"./component-utils-42b12dba-BfugynV_.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.31/esri/copyright.txt for details.
 * v4.31.2
 */const l="arcgis-features{}",g=l,c=n(o),w=class{constructor(e){a(this,e),this.arcgisReady=i(this,"arcgisReady",7),this.arcgisPropertyChange=i(this,"arcgisPropertyChange",7),this.widgetTriggerAction=i(this,"arcgisTriggerAction",7),this.manager=d(this),this.widget=c(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=h()("selectedFeature","selectedFeatureIndex","state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.collapsed=this.widget.collapsed,this.actions=this.viewModel.actions,this.active=this.widget.active,this.content=this.widget.content,this.features=this.widget.features,this.featuresPerPage=this.viewModel.featuresPerPage,this.featureViewModelAbilities=this.viewModel.featureViewModelAbilities,this.goToOverride=this.viewModel.goToOverride,this.headingLevel=this.widget.headingLevel,this.includeDefaultActions=this.viewModel.includeDefaultActions,this.icon=this.widget.icon,this.label=this.widget.label,this.map=this.widget.map,this.promises=this.widget.promises,this.selectedFeature=this.widget.selectedFeature,this.selectedFeatureIndex=this.widget.selectedFeatureIndex,this.spatialReference=this.widget.spatialReference,this.featuresTitle=this.widget.title,this.timeZone=this.widget.timeZone,this.hideActionBar=this.widget.visibleElements.actionBar,this.hideCloseButton=this.widget.visibleElements.closeButton,this.showCollapseButton=this.widget.visibleElements.collapseButton,this.hideFeatureNavigation=this.widget.visibleElements.featureNavigation,this.hideFlow=this.widget.visibleElements.flow,this.hideHeading=this.widget.visibleElements.heading,this.hideSpinner=this.widget.visibleElements.spinner,this.position="bottom-left",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}async fetchFeatures(e,t){var s;return await((s=this.widget)==null?void 0:s.fetchFeatures(e,t))}async clear(){var e;(e=this.widget)==null||e.clear()}async close(){var e;(e=this.widget)==null||e.close()}async next(){var e;return(e=this.widget)==null?void 0:e.next()}async open(e){var t;(t=this.widget)==null||t.open(e)}async previous(){var e;return(e=this.widget)==null?void 0:e.previous()}async triggerAction(e){var t;(t=this.widget)==null||t.triggerAction(e)}get el(){return r(this)}};w.style=g;export{w as arcgis_features};