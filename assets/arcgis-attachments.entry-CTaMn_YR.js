import{r as i,c as t,g as s}from"./index-Bh2oEzTI.js";import{e as a}from"./index-5cc0d3e9-BXwdUzLn.js";import{m as h}from"./useWidget-4dc2787d-C-ZlEsbo.js";import{u as r}from"./index-ee4c09de-CPW6V7nq.js";import{u as n}from"./index-69f02a9e-wRYZXCy2.js";import"./component-utils-42b12dba-BfugynV_.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.31/esri/copyright.txt for details.
 * v4.31.2
 */const d="",o=d,g=h(a),l=class{constructor(e){i(this,e),this.arcgisReady=t(this,"arcgisReady",7),this.arcgisPropertyChange=t(this,"arcgisPropertyChange",7),this.manager=n(this),this.widget=g(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=r()("submitting","state"),this.referenceElement=void 0,this.autoDestroyDisabled=!1,this.icon=this.widget.icon,this.label=this.widget.label,this.position="bottom-left",this.capabilities=this.widget.capabilities,this.displayType=this.widget.displayType,this.graphic=this.widget.graphic,this.submitting=this.widget.submitting,this.hideAddButton=this.widget.visibleElements.addButton,this.hideAddSubmitButton=this.widget.visibleElements.addSubmitButton,this.hideCancelAddButton=this.widget.visibleElements.cancelAddButton,this.hideCancelUpdateButton=this.widget.visibleElements.cancelUpdateButton,this.hideDeleteButton=this.widget.visibleElements.deleteButton,this.hideErrorMessage=this.widget.visibleElements.errorMessage,this.hideProgressBar=this.widget.visibleElements.progressBar,this.hideUpdateButton=this.widget.visibleElements.updateButton,this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}get el(){return s(this)}};l.style=o;export{l as arcgis_attachments};