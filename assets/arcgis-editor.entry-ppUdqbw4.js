import{r as s,c as i,g as o}from"./index-CeCSsEgo.js";import{u as a}from"./index-d2df902e-k_MvfteY.js";import{u as r}from"./chunk-PVEVZB4O-2c3b8893-zEP54EYc.js";import{u as l}from"./index-c99fc80c-B8Hva1Pq.js";import{m as n}from"./useWidget-9b153437-CkH1Tfo6.js";import"./component-utils-de9339fe-Dlc67iIs.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */const g="",d=g,h=n(a),w=class{constructor(t){s(this,t),this.arcgisReady=i(this,"arcgisReady",7),this.arcgisPropertyChange=i(this,"arcgisPropertyChange",7),this.manager=l(this),this.widget=h(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=r()("activeWorkflow","state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.activeWorkflow=this.widget.activeWorkflow,this.allowedWorkflows=this.widget.allowedWorkflows,this.icon=this.widget.icon,this.label=this.widget.label,this.labelOptions=this.widget.labelOptions,this.layerInfos=this.widget.layerInfos,this.snappingOptions=this.widget.snappingOptions,this.supportingWidgetDefaults=this.widget.supportingWidgetDefaults,this.tooltipOptions=this.widget.tooltipOptions,this.headingLevel=this.widget.headingLevel,this.hideCreateFeaturesSection=this.widget.visibleElements.createFeaturesSection,this.hideEditFeaturesSection=this.widget.visibleElements.editFeaturesSection,this.hideLabelsToggle=this.widget.visibleElements.labelsToggle,this.hideTooltipsToggle=this.widget.visibleElements.tooltipsToggle,this.showSnappingControlsElementsHeader=this.widget.visibleElements.snappingControlsElements.header,this.hideSnappingControlsElementsEnabledToggle=this.widget.visibleElements.snappingControlsElements.enabledToggle,this.hideSnappingControlsElementsSelfEnabledToggle=this.widget.visibleElements.snappingControlsElements.selfEnabledToggle,this.hideSnappingControlsElementsFeatureEnabledToggle=this.widget.visibleElements.snappingControlsElements.featureEnabledToggle,this.hideSnappingControlsElementsLayerList=this.widget.visibleElements.snappingControlsElements.layerList,this.position="bottom-left",this.state=this.viewModel.state}async cancelWorkflow(){var t;await((t=this.widget)==null?void 0:t.cancelWorkflow())}async destroy(){await this.manager.destroy()}async deleteFeatureFromWorkflow(){var t;await((t=this.widget)==null?void 0:t.deleteFeatureFromWorkflow())}async startCreateFeaturesWorkflowAtFeatureCreation(t){var e;await((e=this.widget)==null?void 0:e.startCreateFeaturesWorkflowAtFeatureCreation(t))}async startCreateFeaturesWorkflowAtFeatureTypeSelection(){var t;await((t=this.widget)==null?void 0:t.startCreateFeaturesWorkflowAtFeatureTypeSelection())}async startUpdateWorkflowAtFeatureEdit(t){var e;await((e=this.widget)==null?void 0:e.startUpdateWorkflowAtFeatureEdit(t))}async startUpdateWorkflowAtFeatureSelection(){var t;await((t=this.widget)==null?void 0:t.startUpdateWorkflowAtFeatureSelection())}async startUpdateWorkflowAtMultipleFeatureSelection(t){var e;await((e=this.widget)==null?void 0:e.startUpdateWorkflowAtMultipleFeatureSelection(t))}get el(){return o(this)}};w.style=d;export{w as arcgis_editor};
