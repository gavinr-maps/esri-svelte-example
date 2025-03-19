import{i as x,L as I,c as u,n as C,x as o,a as k}from"./index-tefRSezt.js";import{e as b,n as _}from"./ref-Ccn4I0kT.js";import"./directive-helpers-C0aXnQdc.js";/*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.32/esri/copyright.txt for details.
v4.32.12 */const N=x`@layer{:host{display:none;background:#bdf2c4}:host([selected]){display:flex}.properties-buttons{display:flex}}`,d=class d extends I{constructor(){super(...arguments),this._flowItemElement=b(),this._switchToVersion=!0,this._switchToVersionCheckboxElement=b(),this._versionNameInputElement=b(),this.selected=!1,this.showBackButton=!1,this.arcgisAlterVersion=u(),this.arcgisCreateVersion=u(),this.arcgisFlowItemBack=u(),this.arcgisFlowItemClose=u()}load(){const{versionPropertiesElementProps:{versionInfo:e}}=this;e?(this._mode="edit",this._fullVersionName=e.versionIdentifier.name,this._ownerName=this._fullVersionName.substring(0,this._fullVersionName.lastIndexOf(".")),this._versionName=this._fullVersionName.substring(this._fullVersionName.lastIndexOf(".")+1)):this._mode="create"}updated(){var e;this._mode==="create"&&((e=this._versionNameInputElement.value)==null||e.setFocus())}async setFocus(){var e;(e=this._flowItemElement.value)==null||e.setFocus()}goBack(){}_handleCancel(){this.arcgisFlowItemBack.emit()}_handleChange(e){var m;const{_mode:s,_ownerName:l,_versionName:h,versionPropertiesElementProps:{currentUser:p,isVersionAdministrator:v,serviceUrl:i,versionInfo:c}}=this;let{_alterVersionParameters:t,_createVersionParameters:a}=this;switch(s==="create"&&(a||(a={access:"public",description:"",featureServerUrl:i,ownerName:p,versionName:""})),s==="edit"&&(t||(t={featureServerUrl:i,versionIdentifier:c.versionIdentifier,ownerName:l,versionName:h,access:c.access,description:c.description})),e.type){case"calciteChipGroupSelect":{const r=e.target.label,n=e.target.selectedItems[0].value;s==="create"&&(a={...a,[r]:n}),s==="edit"&&(t={...t,[r]:n});break}case"calciteInputTextInput":{const r=e.target.name,n=e.target.value;s==="create"&&(a={...a,[r]:n}),s==="edit"&&(t={...t,[r]:n});break}case"calciteTextAreaInput":{const r=e.target.name,n=e.target.value;s==="create"&&(a={...a,[r]:n}),s==="edit"&&(t={...t,[r]:n});break}}s==="create"&&(a.access!=="public"&&p.toUpperCase()!==((m=a.ownerName)==null?void 0:m.toUpperCase())&&!v?(this._switchToVersionCheckboxElement.value.checked=!1,this._switchToVersionCheckboxElement.value.disabled=!0,this._switchToVersion=!1):this._switchToVersionCheckboxElement.value.disabled=!1,this._createVersionParameters=a),s==="edit"&&(this._alterVersionParameters=t)}_handleClose(){this.arcgisFlowItemClose.emit()}_handleSave(){const{_alterVersionParameters:e,_createVersionParameters:s,_mode:l,_switchToVersion:h}=this;l==="create"&&this.arcgisCreateVersion.emit({createVersionParameters:s,switchToVersion:h}),l==="edit"&&this.arcgisAlterVersion.emit({alterVersionParameters:e})}_handleSwitchToVersionChange(e){this._switchToVersion=e.target.checked}render(){const{selected:e,showBackButton:s,versionPropertiesElementProps:{closable:l,currentUser:h,hasAdvEditingUte:p,state:v,strings:i,versionInfo:c},_mode:t,_ownerName:a,_versionName:m}=this,r=o`<div class="properties-buttons"><calcite-button appearance=outline width=half @click=${this._handleCancel}>${i.actions.cancelSave}</calcite-button><calcite-button width=half @click=${this._handleSave}>${i.actions.saveVersion}</calcite-button></div>`,n=o`<calcite-label>${i.input.versionAccess}<calcite-chip-group label=access @calciteChipGroupSelect=${this._handleChange} selection-mode=single-persist><calcite-chip .selected=${t==="edit"&&c.access==="public"||t==="create"} label=public>${i.accessLevels.public}</calcite-chip><calcite-chip .selected=${t==="edit"&&c.access==="protected"} label=protected>${i.accessLevels.protected}</calcite-chip><calcite-chip .selected=${t==="edit"&&c.access==="private"} label=private>${i.accessLevels.private}</calcite-chip></calcite-chip-group></calcite-label>`,g=o`<calcite-label>${i.input.versionDescription}<calcite-text-area name=description @calciteTextAreaInput=${this._handleChange} resize=vertical .value=${t==="edit"?c.description:""}></calcite-text-area></calcite-label>`,$=o`<calcite-label>${i.input.versionName}<calcite-input-text name=versionName @calciteInputTextInput=${this._handleChange} max-length=62 .value=${t==="edit"?m:""} ${_(this._versionNameInputElement)}></calcite-input-text></calcite-label>`,V=o`<calcite-label>${i.input.versionOwner}<calcite-input-text name=ownerName @calciteInputTextInput=${this._handleChange} .disabled=${!p} .value=${t==="edit"?a:h}></calcite-input-text></calcite-label>`,f=t==="create"?o`<calcite-label layout=inline><calcite-checkbox checked name=switchToVersion @calciteCheckboxChange=${this._handleSwitchToVersionChange} ${_(this._switchToVersionCheckboxElement)}></calcite-checkbox>${i.actions.switchToVersion}</calcite-label>`:void 0;return o`<calcite-flow-item .closable=${l} .description=${c?c.versionIdentifier.name:""} .heading=${c?i.actions.editVersion:i.actions.newVersion} .selected=${e} .showBackButton=${s} @calciteFlowItemClose=${this._handleClose} ${_(this._flowItemElement)}><calcite-panel .loading=${v==="executing"}><calcite-block .label=${i.headers.versionProperties} open>${$}${g}${n}${V}${f}${r}</calcite-block></calcite-panel></calcite-flow-item>`}};d.properties={selected:7,showBackButton:7,versionPropertiesElementProps:0},d.shadowRootOptions=C,d.styles=N;let w=d;k("arcgis-version-management-version-properties",w);export{w as ArcgisVersionManagementVersionProperties};
