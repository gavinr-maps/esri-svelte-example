import{r as l,c as o,h as a,g as c}from"./index-Bh2oEzTI.js";import{g as n}from"./globalCss-0ea08e9e-ByuaaWTq.js";import{h as d,J as h}from"./index-5cc0d3e9-BXwdUzLn.js";import{u as g}from"./index-ee4c09de-CPW6V7nq.js";import{u as m,m as f}from"./useViewModel-5eedd1c7-Chco_mlm.js";import{u}from"./index-69f02a9e-wRYZXCy2.js";import"./component-utils-42b12dba-BfugynV_.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.31/esri/copyright.txt for details.
 * v4.31.2
 */const b={base:"esri-home"},w=f(h),H=class{constructor(e){l(this,e),this.arcgisReady=o(this,"arcgisReady",7),this.viewModelGo=o(this,"arcgisGo",7),this.arcgisPropertyChange=o(this,"arcgisPropertyChange",7),this.manager=u(this),this.messages=m(),this.viewModel=w(this),this.arcgisPropertyChange=g()("state"),this._go=()=>{const{viewModel:s}=this;s.state==="going-home"?s.cancelGo():s.go()},this.goToOverride=this.viewModel.goToOverride,this.icon="home",this.label=void 0,this.messageOverrides=void 0,this.position="top-left",this.referenceElement=void 0,this.viewpoint=this.viewModel.viewpoint,this.state=this.viewModel.state,this.autoDestroyDisabled=!1}async cancelGo(){this.viewModel.cancelGo()}async destroy(){await this.manager.destroy()}async go(){return this.viewModel.go()}render(){var r;const{messages:e,icon:s}=this,t=(r=this.viewModel)==null?void 0:r.state,i=t==="going-home";return a("div",{key:"5bb5c8c7b40d7050309ceb9d0752245e848f776f",class:d(b.base,n.widget)},a("calcite-button",{key:"f2981ffb74046f1857cb9ffe8e8e8240ded6dba7",class:n.widgetButton,disabled:t==="disabled",iconStart:i?void 0:s??void 0,kind:"neutral",label:e.componentLabel,onClick:this._go,scale:i?"s":"m",title:t==="going-home"?e.cancel:e.title},i?a("calcite-loader",{inline:!0,label:""}):null))}static get assetsDirs(){return["assets"]}get el(){return c(this)}};export{H as arcgis_home};
