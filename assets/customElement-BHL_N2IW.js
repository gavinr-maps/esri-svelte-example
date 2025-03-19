import{L as A,c as t,n as G,x as n,s as U,a as F}from"./index-4eY77cms.js";/*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.32/esri/copyright.txt for details.
v4.32.12 */const c=class c extends A{constructor(){super(...arguments),this._arcgisGetVersions=e=>{this.arcgisGetVersions.emit(e.detail)},this._arcgisManageVersion=e=>{this.arcgisManageVersion.emit(e.detail)},this._arcgisNewVersion=e=>{this.arcgisNewVersion.emit(e.detail)},this._versionListEventListeners=new Map,this._showInvalidVersionNotice=!0,this.arcgisFlowItemBack=t(),this.arcgisFlowItemClose=t(),this.arcgisGetVersions=t(),this.arcgisManageVersion=t(),this.arcgisNewVersion=t(),this.arcgisCreateVersionList=t()}disconnectedCallback(){super.disconnectedCallback(),this._versionList&&this._removeVersionListEventListeners(this._versionList)}_addVersionListEventListeners(e){e.addEventListener("arcgisGetVersions",this._arcgisGetVersions),this._versionListEventListeners.set("arcgisGetVersions",this._arcgisGetVersions),e.addEventListener("arcgisManageVersion",this._arcgisManageVersion),this._versionListEventListeners.set("arcgisManageVersion",this._arcgisManageVersion),e.addEventListener("arcgisNewVersion",this._arcgisNewVersion),this._versionListEventListeners.set("arcgisNewVersion",this._arcgisNewVersion)}_removeVersionListEventListeners(e){for(const[l,d]of this._versionListEventListeners)e.removeEventListener(l,d)}render(){const{serviceItemElementProps:{allowEditing:e,closable:l,currentUser:d,executionError:p,currentVersionIdentifier:g,flowElement:v,hasAdvEditingUte:E,heading:I,isInitialVersionInvalid:b,isVersionAdministrator:w,isVersioningApiAvailable:_,mode:u,pageSize:f,serviceName:r,serviceUrl:m,state:$,strings:o,versionInfos:a}}=this;let{_versionList:i}=this;const x=b.get(m)&&this._showInvalidVersionNotice?n`<calcite-notice class="initial-version-invalid-block" closable kind=warning open scale=s width=full icon @calciteNoticeClose=${()=>this._showInvalidVersionNotice=!1}><div slot=title>${o.headers.invalidInitialVersion}</div><div slot=message>${o.loadErrors.invalidInitialVersion}</div></calcite-notice>`:void 0,M=n`<calcite-combobox clear-disabled .label=${r} max-items=5 overlay-positioning=fixed selection-mode=single-persist @calciteComboboxChange=${s=>{const N=s.target,k=a.find(C=>C.versionIdentifier.guid===N.value);this.arcgisManageVersion.emit({actionType:"changeVersion",serviceUrl:m,versionInfo:k})}}>${a?a.map(s=>n`<calcite-combobox-item class=${U(u==="dialog"?"":"calcite-combobox-item")} .selected=${g.guid===s.versionIdentifier.guid&&g.name===s.versionIdentifier.name} .textLabel=${s.versionIdentifier.name} .value=${s.versionIdentifier.guid}></calcite-combobox-item>`):void 0}</calcite-combobox>`;let V,L;return e&&(V=n`<calcite-action .id=${`actionManageVersions_${r}`} icon=list scale=s slot=control text @click=${async()=>{i=document.createElement("arcgis-version-management-version-list"),i.versionListElementProps={closable:l,currentUser:d,currentVersionIdentifier:g,executionError:p,hasAdvEditingUte:E,heading:I,isVersionAdministrator:w,isVersioningApiAvailable:_,pageSize:f,serviceName:r,serviceUrl:m,state:$,strings:o,versionInfos:a},i.selected=!0,i.showBackButton=!0,i.addEventListener("calciteFlowItemBack",s=>{s.preventDefault(),this.arcgisFlowItemBack.emit()}),i.addEventListener("calciteFlowItemClose",()=>{this.arcgisFlowItemClose.emit()}),this._addVersionListEventListeners(i),v==null||v.append(i),this.arcgisCreateVersionList.emit(i)}}></calcite-action>`,L=n`<calcite-tooltip overlay-positioning=fixed .referenceElement=${`actionManageVersions_${r}`}><span>${o.headers.manageVersions}</span></calcite-tooltip>`),n`<calcite-block open .heading=${r}>${x}${M}${V}${L}</calcite-block>`}};c.properties={_showInvalidVersionNotice:16,serviceItemElementProps:0},c.shadowRootOptions=G;let h=c;F("arcgis-version-management-service-item",h);export{h as ArcgisVersionManagementServiceItem};
