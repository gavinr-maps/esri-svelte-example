import{r as e,c as t,g as s}from"./index-Bh2oEzTI.js";import{l as o}from"./index-5cc0d3e9-BXwdUzLn.js";import{u as a}from"./index-ee4c09de-CPW6V7nq.js";import{m as h}from"./useWidget-4dc2787d-C-ZlEsbo.js";import{u as r}from"./index-69f02a9e-wRYZXCy2.js";import"./component-utils-42b12dba-BfugynV_.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.31/esri/copyright.txt for details.
 * v4.31.2
 */const l="",d=l,n=h(o),g=class{constructor(i){e(this,i),this.arcgisReady=t(this,"arcgisReady",7),this.widgetBookmarkEdit=t(this,"arcgisEdit",7),this.widgetBookmarkSelect=t(this,"arcgisSelect",7),this.arcgisPropertyChange=t(this,"arcgisPropertyChange",7),this.manager=r(this),this.widget=n(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=a()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.bookmarks=this.widget.bookmarks,this.defaultCreateOptions=this.widget.defaultCreateOptions,this.defaultEditOptions=this.widget.defaultEditOptions,this.disabled=this.widget.disabled,this.dragEnabled=this.widget.dragEnabled,this.filterPlaceholder=this.widget.filterPlaceholder,this.filterText=this.widget.filterText,this.icon=this.widget.icon,this.label=this.widget.label,this.showAddBookmarkButton=this.widget.visibleElements.addBookmarkButton,this.showCloseButton=this.widget.visibleElements.closeButton,this.showCollapseButton=this.widget.visibleElements.collapseButton,this.showEditBookmarkButton=this.widget.visibleElements.editBookmarkButton,this.showFilter=this.widget.visibleElements.filter,this.hideFlow=this.widget.visibleElements.flow,this.showHeading=this.widget.visibleElements.heading,this.hideThumbnail=this.widget.visibleElements.thumbnail,this.hideTime=this.widget.visibleElements.time,this.position="bottom-left",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}get el(){return s(this)}};g.style=d;export{g as arcgis_bookmarks};
