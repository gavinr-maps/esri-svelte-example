import{r as C,c as h,h as e,g as I}from"./index-Bh2oEzTI.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.31/esri/copyright.txt for details.
 * v4.31.2
 */const P=class{constructor(t){C(this,t),this.arcgisFlowItemBack=h(this,"arcgisFlowItemBack",7),this.arcgisFlowItemClose=h(this,"arcgisFlowItemClose",7),this.arcgisGetVersions=h(this,"arcgisGetVersions",7),this.arcgisManageVersion=h(this,"arcgisManageVersion",7),this.arcgisNewVersion=h(this,"arcgisNewVersion",7),this._versionListEventListeners=new Map,this._arcgisGetVersions=i=>{this.arcgisGetVersions.emit(i.detail)},this._arcgisManageVersion=i=>{this.arcgisManageVersion.emit(i.detail)},this._arcgisNewVersion=i=>{this.arcgisNewVersion.emit(i.detail)},this.serviceItemElementProps=void 0}disconnectedCallback(){this._versionList&&this._removeVersionListEventListeners(this._versionList)}render(){const{serviceItemElementProps:{allowEditing:t,closable:i,currentUser:a,executionError:m,currentVersionIdentifier:s,flowElement:l,hasAdvEditingUte:d,heading:b,isVersionAdministrator:g,isVersioningApiAvailable:c,mode:r,pageSize:v,serviceName:n,serviceUrl:o,state:_,strings:p,versionInfos:V}}=this;let{_versionList:u}=this;const E=e("calcite-combobox",{key:"50fa51468e10039693438024795a150b5417b918",clearDisabled:!0,label:n,maxItems:5,overlayPositioning:"fixed",selectionMode:"single-persist",onCalciteComboboxChange:f=>{const L=f.target,N=V.find(x=>x.versionIdentifier.guid===L.value);this.arcgisManageVersion.emit({actionType:"changeVersion",serviceUrl:o,versionInfo:N})}},V?V.map(f=>e("calcite-combobox-item",{class:r==="dialog"?"":"calcite-combobox-item",selected:s.guid===f.versionIdentifier.guid&&s.name===f.versionIdentifier.name,textLabel:f.versionIdentifier.name,value:f.versionIdentifier.guid})):void 0);let w,k;return t&&(w=e("calcite-action",{key:"7cb234cf1340018c6fc8b4290094f0de08071a69",id:`actionManageVersions_${n}`,icon:"list",scale:"s",slot:"control",text:"",onClick:async()=>{u=document.createElement("arcgis-version-management-version-list"),u.versionListElementProps={closable:i,currentUser:a,currentVersionIdentifier:s,executionError:m,hasAdvEditingUte:d,heading:b,isVersionAdministrator:g,isVersioningApiAvailable:c,pageSize:v,serviceName:n,serviceUrl:o,state:_,strings:p,versionInfos:V},u.addEventListener("calciteFlowItemBack",f=>{f.preventDefault(),this.arcgisFlowItemBack.emit()}),u.addEventListener("calciteFlowItemClose",()=>{this.arcgisFlowItemClose.emit()}),this._addVersionListEventListeners(u),l.append(u)}}),k=e("calcite-tooltip",{key:"7ff6c308de3022a0f5e55e78f62dd098b259cb4d",overlayPositioning:"fixed",referenceElement:`actionManageVersions_${n}`},e("span",{key:"c7f08a7ccd04af05d408b3c6c4aa90f17b85b8c2"},p.headers.manageVersions))),e("calcite-block",{key:"66789d7258187bae5516aa1df18668c458fca7b0",open:!0,heading:n},E,w,k)}_addVersionListEventListeners(t){t.addEventListener("arcgisGetVersions",this._arcgisGetVersions),this._versionListEventListeners.set("arcgisGetVersions",this._arcgisGetVersions),t.addEventListener("arcgisManageVersion",this._arcgisManageVersion),this._versionListEventListeners.set("arcgisManageVersion",this._arcgisManageVersion),t.addEventListener("arcgisNewVersion",this._arcgisNewVersion),this._versionListEventListeners.set("arcgisNewVersion",this._arcgisNewVersion)}_removeVersionListEventListeners(t){for(const[i,a]of this._versionListEventListeners)t.removeEventListener(i,a)}get el(){return I(this)}},T=class{constructor(t){C(this,t),this.arcgisAlterVersion=h(this,"arcgisAlterVersion",7),this.arcgisCreateVersion=h(this,"arcgisCreateVersion",7),this.arcgisFlowItemBack=h(this,"arcgisFlowItemBack",7),this.arcgisFlowItemClose=h(this,"arcgisFlowItemClose",7),this._switchToVersion=!0,this._handleCancel=()=>{this.arcgisFlowItemBack.emit()},this._handleChange=i=>{var v;const{_mode:a,_ownerName:m,_versionName:s,versionPropertiesElementProps:{currentUser:l,isVersionAdministrator:d,serviceUrl:b,versionInfo:g}}=this;let{_alterVersionParameters:c,_createVersionParameters:r}=this;switch(a==="create"&&(r||(r={access:"public",description:"",featureServerUrl:b,ownerName:l,versionName:""})),a==="edit"&&(c||(c={featureServerUrl:b,versionIdentifier:g.versionIdentifier,ownerName:m,versionName:s,access:g.access,description:g.description})),i.type){case"calciteChipGroupSelect":{const n=i.target.label,o=i.target.selectedItems[0].value;a==="create"&&(r={...r,[n]:o}),a==="edit"&&(c={...c,[n]:o});break}case"calciteInputTextInput":{const n=i.target.name,o=i.target.value;a==="create"&&(r={...r,[n]:o}),a==="edit"&&(c={...c,[n]:o});break}case"calciteTextAreaInput":{const n=i.target.name,o=i.target.value;a==="create"&&(r={...r,[n]:o}),a==="edit"&&(c={...c,[n]:o});break}}a==="create"&&(r.access!=="public"&&l.toUpperCase()!==((v=r.ownerName)==null?void 0:v.toUpperCase())&&!d?(this.switchToVersionCheckboxElement.checked=!1,this.switchToVersionCheckboxElement.disabled=!0,this._switchToVersion=!1):this.switchToVersionCheckboxElement.disabled=!1,this._createVersionParameters=r),a==="edit"&&(this._alterVersionParameters=c)},this._handleClose=()=>{this.arcgisFlowItemClose.emit()},this._handleSave=()=>{const{_alterVersionParameters:i,_createVersionParameters:a,_mode:m,_switchToVersion:s}=this;m==="create"&&this.arcgisCreateVersion.emit({createVersionParameters:a,switchToVersion:s}),m==="edit"&&this.arcgisAlterVersion.emit({alterVersionParameters:i})},this._handleSwitchToVersionChange=i=>{this._switchToVersion=i.target.checked},this.versionPropertiesElementProps=void 0}async componentWillLoad(){const{versionPropertiesElementProps:{versionInfo:t}}=this;t?(this._mode="edit",this._fullVersionName=t.versionIdentifier.name,this._ownerName=this._fullVersionName.substring(0,this._fullVersionName.lastIndexOf(".")),this._versionName=this._fullVersionName.substring(this._fullVersionName.lastIndexOf(".")+1)):this._mode="create"}componentDidRender(){var t;this._mode==="create"&&((t=this.versionNameInputElement)==null||t.setFocus())}render(){const{versionPropertiesElementProps:{closable:t,currentUser:i,hasAdvEditingUte:a,state:m,strings:s,versionInfo:l},_mode:d,_ownerName:b,_versionName:g}=this,c=e("div",{key:"4a5ed7a0f6814895500189b645f9e5d3f7a9fbb5"},e("calcite-button",{key:"54ab974a2bf7be9360b48dfd9f0d8a5032fe1ff7",appearance:"outline",slot:"footer",width:"half",onClick:this._handleCancel},s.actions.cancelSave),e("calcite-button",{key:"609eda7c7b1d751f21f09bf98aacb312bee87a36",slot:"footer",width:"half",onClick:this._handleSave},s.actions.saveVersion)),r=e("calcite-label",{key:"f4bd072664d6f7054fa78ac4f5f5223eeea205e8"},s.input.versionAccess,e("calcite-chip-group",{key:"78f9efb602fff0ca15127da9b224e999799cb079",label:"access",onCalciteChipGroupSelect:this._handleChange,selectionMode:"single-persist"},e("calcite-chip",{key:"c8106baf12a236640d93920562d8a87d26cc3f81",selected:d==="edit"&&l.access==="public"||d==="create",value:"public"},s.accessLevels.public),e("calcite-chip",{key:"3806c1b9ec6c5ce7bf170a5f3091d4dbceeeb198",selected:d==="edit"&&l.access==="protected",value:"protected"},s.accessLevels.protected),e("calcite-chip",{key:"5333ff937c91ae845da5d5df63b82da277766d2a",selected:d==="edit"&&l.access==="private",value:"private"},s.accessLevels.private))),v=e("calcite-label",{key:"541d4ef40c6f00c834825d6dc167d291bacd1720"},s.input.versionDescription,e("calcite-text-area",{key:"56f9df5f6b4c7e8d4b96a246cc44a1f560b92787",name:"description",onCalciteTextAreaInput:this._handleChange,resize:"vertical",value:d==="edit"?l.description:""})),n=e("calcite-label",{key:"4a96f29e7de41ab3aada75347c492ee75875a75b"},s.input.versionName,e("calcite-input-text",{key:"b6e13fb362c9e7173f122e4ec30ae63f0ef22563",ref:p=>{this.versionNameInputElement=p},name:"versionName",onCalciteInputTextInput:this._handleChange,maxLength:62,value:d==="edit"?g:""})),o=e("calcite-label",{key:"b40998587ea68b0895e2c1111e3ff012adef4865"},s.input.versionOwner,e("calcite-input-text",{key:"4bc775b26f384eff73e7e03d5af9a2665a50eebc",name:"ownerName",onCalciteInputTextInput:this._handleChange,disabled:!a,value:d==="edit"?b:i})),_=d==="create"?e("calcite-label",{layout:"inline"},e("calcite-checkbox",{ref:p=>{this.switchToVersionCheckboxElement=p},checked:!0,name:"switchToVersion",onCalciteCheckboxChange:this._handleSwitchToVersionChange}),s.actions.switchToVersion):void 0;return e("calcite-flow-item",{key:"405059a80ad768940085fc18b1fdf499af6d926c",closable:t,description:l?l.versionIdentifier.name:"",heading:l?s.actions.editVersion:s.actions.newVersion,onCalciteFlowItemClose:this._handleClose},e("calcite-panel",{key:"7b2c15adc638fbd27da93f0cdedb1cd4f7759fa9",loading:m==="executing"},e("calcite-block",{key:"6a0a68fcde667eda85ce5785f0902c5c6b94c8b0",heading:"",open:!0},n,v,r,o,_,c)))}get el(){return I(this)}};export{P as arcgis_version_management_service_item,T as arcgis_version_management_version_properties};