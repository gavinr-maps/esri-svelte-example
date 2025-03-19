import{i as e,L as s,u as o,c as r,n as a,a as l}from"./index-tefRSezt.js";import{r as h}from"./index-BkKcLxWB.js";import d from"./CatalogLayerList-rY07IY3Q.js";import{P as n}from"./useWidget-Dlf3SkC7.js";import"./Accessor-BHnuXKD2.js";import"./reactiveUtils-BR0C1Kq4.js";import"./Evented-DCWccWGU.js";import"./SimpleObservable-7oieNGD8.js";import"./Identifiable-BrT7zvUW.js";import"./ReactiveMap-Dwhwbx9R.js";import"./jsxFactory-CLjKarlq.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./uuid-Cl5lrJ4c.js";import"./ListItem-CRqB-Xtr.js";import"./ActionToggle-__-l4AdQ.js";import"./layerListUtils-BIu86t6C.js";import"./widget-AxfSz_k8.js";import"./LayerListItem-BYbqB_Dn.js";import"./catalogUtils-CK4eMvD1.js";import"./actionUtils-DSzWsgMf.js";import"./substitute-D1XJWgT5.js";import"./globalCss-CZa70j6i.js";import"./listUtils-vswmtyNy.js";import"./vmEvent-D4Ubqkbq.js";import"./component-utils-DWY0IMHC.js";/*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.32/esri/copyright.txt for details.
v4.32.12 */const m=e`@layer{arcgis-catalog-layer-list{display:block}}`,c=n(d),t=class t extends s{constructor(){super(...arguments),this.widget=c(this),this.viewModel=this.widget.viewModel,this.autoDestroyDisabled=!1,this.catalogLayer=this.widget.catalogLayer,this.collapsed=this.widget.collapsed,this.filterPlaceholder=this.widget.filterPlaceholder,this.filterPredicate=this.widget.filterPredicate,this.filterText=this.widget.filterText,this.headingLevel=this.widget.headingLevel,this.hideFlow=this.widget.visibleElements.flow,this.hideStatusIndicators=this.widget.visibleElements.statusIndicators,this.icon=this.widget.icon,this.label=this.widget.label,this.listItemCreatedFunction=this.widget.listItemCreatedFunction,this.minFilterItems=this.widget.minFilterItems,this.position="bottom-left",this.selectedItems=this.widget.selectedItems,this.selectionMode=this.widget.selectionMode,this.showCloseButton=this.widget.visibleElements.closeButton,this.showCollapseButton=this.widget.visibleElements.collapseButton,this.showErrors=this.widget.visibleElements.errors,this.showFilter=this.widget.visibleElements.filter,this.showHeading=this.widget.visibleElements.heading,this.showTemporaryLayerIndicators=this.widget.visibleElements.temporaryLayerIndicators,this.state=this.viewModel.state,this.visibilityAppearance=this.widget.visibilityAppearance,this.arcgisPropertyChange=o()("state"),this.arcgisReady=r(),this.arcgisTriggerAction=h(()=>this.widget,"trigger-action")}get catalogItems(){return this.widget.catalogItems}async destroy(){await this.manager.destroy()}};t.properties={autoDestroyDisabled:5,catalogItems:32,catalogLayer:0,collapsed:7,filterPlaceholder:1,filterPredicate:0,filterText:1,headingLevel:9,hideFlow:5,hideStatusIndicators:5,icon:1,label:1,listItemCreatedFunction:0,minFilterItems:9,position:1,referenceElement:1,selectedItems:0,selectionMode:1,showCloseButton:5,showCollapseButton:5,showErrors:5,showFilter:5,showHeading:5,showTemporaryLayerIndicators:5,state:3,visibilityAppearance:1},t.shadowRootOptions=a,t.styles=m;let i=t;l("arcgis-catalog-layer-list",i);export{i as ArcgisCatalogLayerList};
