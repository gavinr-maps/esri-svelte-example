import{L as i,u as s,c as o,n as r,i as l,a}from"./index-4eY77cms.js";import{r as h}from"./index-C5b9dHRB.js";import d from"./TableList-EPNRr6_L.js";import{P as n}from"./useWidget-BajufX8l.js";import"./Accessor-BmwT4B0c.js";import"./reactiveUtils-XM7cS2OP.js";import"./Evented-Dw4_VOGn.js";import"./SimpleObservable-CvOkykwM.js";import"./Identifiable-BHVfzH03.js";import"./jsxFactory-Cnml7uXM.js";import"./intl-Duiy0OzY.js";import"./Promise-DfET-uns.js";import"./cast-CsZslgGN.js";import"./JSONSupport-DcrLLGjL.js";import"./uuid-Cl5lrJ4c.js";import"./LayerListItem-F6gOcfEF.js";import"./catalogUtils-CGCu8hgu.js";import"./actionUtils-CtQI3q6p.js";import"./substitute-CvdjmBYq.js";import"./layerListUtils-BIu86t6C.js";import"./globalCss-vQlnDsEX.js";import"./listUtils-vswmtyNy.js";import"./vmEvent-D4Ubqkbq.js";import"./ActionToggle-D7439N1A.js";import"./widget-GKEQ1p1m.js";import"./component-utils-D0ciaaZ_.js";/*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.32/esri/copyright.txt for details.
v4.32.12 */const m=l`@layer{arcgis-table-list{display:block}}`,c=n(d),t=class t extends i{constructor(){super(...arguments),this.widget=c(this),this.viewModel=this.widget.viewModel,this.autoDestroyDisabled=!1,this.collapsed=this.widget.collapsed,this.dragEnabled=this.widget.dragEnabled,this.filterPlaceholder=this.widget.filterPlaceholder,this.filterPredicate=this.widget.filterPredicate,this.filterText=this.widget.filterText,this.icon=this.widget.icon,this.label=this.widget.label,this.listItemCreatedFunction=this.widget.listItemCreatedFunction,this.minDragEnabledItems=this.widget.minDragEnabledItems,this.minFilterItems=this.widget.minFilterItems,this.position="bottom-left",this.selectedItems=this.widget.selectedItems,this.selectionMode=this.widget.selectionMode,this.state=this.viewModel.state,this.showCloseButton=this.widget.visibleElements.closeButton,this.showCollapseButton=this.widget.visibleElements.collapseButton,this.showErrors=this.widget.visibleElements.errors,this.showFilter=this.widget.visibleElements.filter,this.hideFlow=this.widget.visibleElements.flow,this.showHeading=this.widget.visibleElements.heading,this.hideStatusIndicators=this.widget.visibleElements.statusIndicators,this.showTemporaryTableIndicators=this.widget.visibleElements.temporaryTableIndicators,this.arcgisPropertyChange=s()("state"),this.arcgisReady=o(),this.arcgisTriggerAction=h(()=>this.widget,"trigger-action")}get tableItems(){return this.widget.tableItems}async destroy(){await this.manager.destroy()}};t.properties={autoDestroyDisabled:5,collapsed:7,dragEnabled:5,filterPlaceholder:1,filterPredicate:0,filterText:1,icon:1,label:1,listItemCreatedFunction:0,minDragEnabledItems:9,minFilterItems:9,position:1,referenceElement:1,selectedItems:0,selectionMode:1,state:3,tableItems:32,showCloseButton:5,showCollapseButton:5,showErrors:5,showFilter:5,hideFlow:5,showHeading:5,hideStatusIndicators:5,showTemporaryTableIndicators:5},t.shadowRootOptions=r,t.styles=m;let e=t;a("arcgis-table-list",e);export{e as ArcgisTableList};
