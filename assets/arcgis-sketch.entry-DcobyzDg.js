import{r as l,c as t,g as o}from"./index-Bh2oEzTI.js";import{u as a}from"./index-ee4c09de-CPW6V7nq.js";import{a9 as n,aa as h}from"./index-5cc0d3e9-BXwdUzLn.js";import{m as d}from"./useWidget-4dc2787d-C-ZlEsbo.js";import{u as r}from"./index-69f02a9e-wRYZXCy2.js";import"./component-utils-42b12dba-BfugynV_.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.31/esri/copyright.txt for details.
 * v4.31.2
 */const g="arcgis-sketch{}",c=g,p=d(h),w=class{constructor(e){l(this,e),this.arcgisReady=t(this,"arcgisReady",7),this.arcgisPropertyChange=t(this,"arcgisPropertyChange",7),this.widgetCreate=t(this,"arcgisCreate",7),this.widgetDelete=t(this,"arcgisDelete",7),this.widgetRedo=t(this,"arcgisRedo",7),this.widgetUndo=t(this,"arcgisUndo",7),this.widgetUpdate=t(this,"arcgisUpdate",7),this.manager=r(this),this.widget=p(this,{editConstructorProperties:this._editConstructorProperties}),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=a()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.activeTool=this.widget.activeTool,this.availableCreateTools=this.widget.availableCreateTools,this.createGraphic=this.widget.createGraphic,this.creationMode=this.widget.creationMode,this.defaultCreateOptions=this.widget.defaultCreateOptions,this.defaultUpdateOptions=this.widget.defaultUpdateOptions,this.defaultGraphicsLayerDisabled=!1,this.icon=this.widget.icon,this.label=this.widget.label,this.labelOptions=this.widget.labelOptions,this.layer=this.widget.layer,this.layout=this.widget.layout,this.pointSymbol=this.viewModel.pointSymbol,this.polylineSymbol=this.viewModel.polylineSymbol,this.polygonSymbol=this.viewModel.polygonSymbol,this.snappingOptions=this.widget.snappingOptions,this.tooltipOptions=this.widget.tooltipOptions,this.updateGraphics=this.widget.updateGraphics,this.hideCreateToolsPoint=this.widget.visibleElements.createTools.point,this.hideCreateToolsPolyline=this.widget.visibleElements.createTools.polyline,this.hideCreateToolsPolygon=this.widget.visibleElements.createTools.polygon,this.hideCreateToolsRectangle=this.widget.visibleElements.createTools.rectangle,this.hideCreateToolsCircle=this.widget.visibleElements.createTools.circle,this.hideDuplicateButton=this.widget.visibleElements.duplicateButton,this.hideSelectionToolsRectangleSelection=this.widget.visibleElements.selectionTools["rectangle-selection"],this.hideSelectionToolsLassoSelection=this.widget.visibleElements.selectionTools["lasso-selection"],this.hideSettingsMenu=this.widget.visibleElements.settingsMenu,this.hideLabelsToggle=this.widget.visibleElements.labelsToggle,this.hideTooltipsToggle=this.widget.visibleElements.tooltipsToggle,this.hideSnappingControls=this.widget.visibleElements.snappingControls,this.showSnappingControlsElementsHeader=this.widget.visibleElements.snappingControlsElements.header,this.hideSnappingControlsElementsEnabledToggle=this.widget.visibleElements.snappingControlsElements.enabledToggle,this.hideSnappingControlsElementsSelfEnabledToggle=this.widget.visibleElements.snappingControlsElements.selfEnabledToggle,this.hideSnappingControlsElementsFeatureEnabledToggle=this.widget.visibleElements.snappingControlsElements.featureEnabledToggle,this.hideSnappingControlsElementsLayerList=this.widget.visibleElements.snappingControlsElements.layerList,this.hideUndoRedoMenu=this.widget.visibleElements.undoRedoMenu,this.position="bottom-left",this.state=this.widget.state}async _editConstructorProperties(e){return this.defaultGraphicsLayerDisabled||(e.layer??(e.layer=await n({title:"Sketch Layer"}))),e}arcgisReadyHandler(){var e,i;!this.defaultGraphicsLayerDisabled&&!((e=this.el.view)!=null&&e.map.layers.includes(this.widget.layer))&&((i=this.el.view)==null||i.map.add(this.widget.layer))}async cancel(){var e;(e=this.widget)==null||e.cancel()}async complete(){var e;(e=this.widget)==null||e.complete()}async create(e,i){var s;await((s=this.widget)==null?void 0:s.create(e,i))}async delete(){var e;(e=this.widget)==null||e.delete()}async destroy(){await this.manager.destroy()}async duplicate(){var e;(e=this.widget)==null||e.duplicate()}async redo(){var e;(e=this.widget)==null||e.redo()}async undo(){var e;(e=this.widget)==null||e.undo()}async update(e,i){var s;return void((s=this.widget)==null?void 0:s.update(e,i))}get el(){return o(this)}};w.style=c;export{w as arcgis_sketch};
