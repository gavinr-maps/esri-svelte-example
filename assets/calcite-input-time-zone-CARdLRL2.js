const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./time-zones-D0E35ZOg.js","./index-p4VH55K1-DFe7Bl0A.js","./index2-CQc7FceA.js","./index3-BMYMzQEu.js","./region-CmSYMm4q.js","./index4-loN2pzCW.js"])))=>i.map(i=>d[i]);
import{_ as g}from"./index-Bh2oEzTI.js";import{p as z,H as R,c as T,h,a as V}from"./jsxFactory-CJa39Fro.js";import{c as $,d as U}from"./label-DEe8AW1C.js";import{u as A,I as H}from"./interactive-y84HQRWL.js";import{c as W,d as G,b as q}from"./locale-A4FuYD8q.js";import{u as j,c as K,d as N,s as J}from"./t9n-D0ry3MEw.js";import{c as Q,s as X,a as Y}from"./loadable-DM18hPdE.js";import{c as ee,d as te,a as oe,H as ie}from"./form-BZPQ5PUM.js";import{d as se}from"./chip-ZieJjxzJ.js";import{d as ne}from"./combobox-CAZmwDcP.js";import{d as ae}from"./combobox-item-DwxSVkl7.js";import{d as re}from"./combobox-item-group-NnuN8bnA.js";import{d as le}from"./icon-BQO9J86c.js";import{d as ce}from"./input-message-CWvsvdFk.js";import"./tslib.es6-B3Jf3DVX.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./subclass-BZA_h8Db.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./Accessor-BLX9ikPh.js";import"./assets-C43MgM-v.js";import"./Evented-BHRw9x22.js";import"./Promise-B2Hu02L7.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./uuid-fwrPAdZb.js";import"./cast-Bjksrh93.js";import"./dom-D_AJDzAj.js";import"./component-6CIDVndn.js";import"./key-D63ExP77.js";import"./observers-D2xgmA06.js";import"./core-Cpfj44ZG.js";import"./filter-yN6-jZOU.js";import"./debounce-BOqmhDXu.js";import"./floating-ui-Bma_zPVt.js";import"./openCloseComponent-CmOrfBN-.js";import"./Validation-Bz9yoU6e.js";import"./utils2-COUKy2o1.js";import"./conditionalSlot-R5D9krYS.js";const me={offset:"offset"},de=60;function L(o){return o.replace(":15",".25").replace(":30",".5").replace(":45",".75").replace("−","-")}function fe(o,e){const t=O(o,"en-US",e).replace("GMT","");return t===""?0:Number(L(t))*de}function ue(){return new Date().getTimezoneOffset()*-1}function he(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}async function pe(o){if(o==="offset")return t=>t;const{normalize:e}=await g(async()=>{const{normalize:t}=await import("./time-zones-D0E35ZOg.js");return{normalize:t}},__vite__mapDeps([0,1]),import.meta.url);return e}async function be(o,e,t,i,l){if(t==="name"){const{groupByName:n}=await g(async()=>{const{groupByName:s}=await import("./index2-CQc7FceA.js");return{groupByName:s}},__vite__mapDeps([2,0,1]),import.meta.url);return(await n()).map(({label:s})=>({label:x(s),value:s,metadata:{filterValue:s}})).filter(s=>!!s).sort()}const a=l==="user"?o:l==="utc"?"fr":"en-GB",u=i.getTime();if(t==="region"){const[{groupByRegion:n},{getCountry:c,global:s}]=await Promise.all([g(()=>import("./index3-BMYMzQEu.js"),__vite__mapDeps([3,0,1,4]),import.meta.url),g(()=>import("./region-CmSYMm4q.js"),__vite__mapDeps([4,1]),import.meta.url)]);return(await n()).map(({label:m,tzs:p})=>(p.sort((d,f)=>{const v=C(d,e),y=C(f,e),b="Etc/GMT";if(d.startsWith(b)&&f.startsWith(b)){const I=d.substring(b.length),w=f.substring(b.length),B=I===""?0:parseInt(I);return(w===""?0:parseInt(w))-B}return v.localeCompare(y)}),{label:E(e,m),items:p.map(d=>{const f=L(O(d,a,u)),v=C(d,e),y=m===s?`${C(s,e)} Etc`:x(d),b=c(d),I=E(e,b);return{label:v,value:d,metadata:{country:I===v?void 0:I,filterValue:y,offset:f}}})})).sort((m,p)=>m.label===s?-1:p.label===s?1:m.label.localeCompare(p.label))}const[{groupByOffset:Z},{DateEngine:M}]=await Promise.all([g(()=>import("./index4-loN2pzCW.js"),__vite__mapDeps([5,0,1,4]),import.meta.url),g(()=>import("./index5-C0Fc86X9.js"),[],import.meta.url)]),_=await Z({dateEngine:new M,groupDateRange:1,startDate:new Date(u).toISOString()}),k=new Intl.ListFormat(o,{style:"long",type:"conjunction"}),D=["Factory","Etc/UTC"];return _.forEach(n=>{const c=[];let s=0;n.tzs.forEach((r,m)=>{D.includes(r)&&s++,c[m]=s}),n.tzs=n.tzs.filter(r=>!D.includes(r)),n.labelTzIdx=n.labelTzIdx.map(r=>r-c[r]).filter(r=>r>=0&&r<n.tzs.length)}),_.map(({labelTzIdx:n,tzs:c})=>{const s=c[0],r=L(O(s,a,u)),m=fe(s,u),p=n.map(f=>C(c[f],e));return{label:Te(e,r,k.format(p)),value:m,metadata:{filterValue:c.map(f=>x(f))}}}).filter(n=>!!n).sort((n,c)=>n.value-c.value)}function C(o,e){return e[o]||Ie(o)}function ge(o,e,t){return t.timeZoneRegionLabel.replace("{city}",o).replace("{country}",E(t,e))}function E(o,e){return o[e]||e}function Ie(o){return o.split("/").pop()}function x(o){return o.replace(/_/g," ")}function Te(o,e,t){return o.timeZoneLabel.replace("{offset}",e).replace("{cities}",t)}function O(o,e,t=Date.now()){return q(e,{timeZone:o,timeZoneName:"shortOffset"}).formatToParts(t).find(({type:a})=>a==="timeZoneName").value}function Ce(o){return o.items!==void 0}function ve(o){return Ce(o[0])?o.flatMap(e=>e.items):o}function P(o,e,t){return t==null?null:ve(o).find(i=>i[e]==t)}const Ze=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}.offset{white-space:nowrap}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}",ye=Ze,S=z(class extends R{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInputTimeZoneBeforeClose=T(this,"calciteInputTimeZoneBeforeClose",6),this.calciteInputTimeZoneBeforeOpen=T(this,"calciteInputTimeZoneBeforeOpen",6),this.calciteInputTimeZoneChange=T(this,"calciteInputTimeZoneChange",6),this.calciteInputTimeZoneClose=T(this,"calciteInputTimeZoneClose",6),this.calciteInputTimeZoneOpen=T(this,"calciteInputTimeZoneOpen",6),this.setComboboxRef=e=>{this.comboboxEl=e},this.onComboboxBeforeClose=e=>{e.stopPropagation(),this.overrideSelectedLabelForRegion(!1),this.calciteInputTimeZoneBeforeClose.emit()},this.onComboboxBeforeOpen=e=>{e.stopPropagation(),this.overrideSelectedLabelForRegion(!0),this.calciteInputTimeZoneBeforeOpen.emit()},this.onComboboxChange=e=>{e.stopPropagation();const i=e.target.selectedItems[0];if(!i){this.value=null,this.selectedTimeZoneItem=null,this.calciteInputTimeZoneChange.emit();return}const l=this.findTimeZoneItemByLabel(i.getAttribute("data-label")),a=`${l.value}`;this.value===a&&l.label===this.selectedTimeZoneItem.label||(this.value=a,this.selectedTimeZoneItem=l,this.calciteInputTimeZoneChange.emit())},this.onComboboxClose=e=>{e.stopPropagation(),this.open=!1,this.calciteInputTimeZoneClose.emit()},this.onComboboxOpen=e=>{this.open=!0,e.stopPropagation(),this.calciteInputTimeZoneOpen.emit()},this.clearable=!1,this.disabled=!1,this.form=void 0,this.maxItems=0,this.messages=void 0,this.messageOverrides=void 0,this.mode="offset",this.offsetStyle="user",this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.open=!1,this.overlayPositioning="absolute",this.referenceDate=void 0,this.required=!1,this.scale="m",this.status="idle",this.value=void 0,this.readOnly=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}handleTimeZoneItemPropsChange(){this.timeZoneItems&&(this.updateTimeZoneItems(),this.updateTimeZoneSelection())}openChanged(){this.comboboxEl.open=this.open}handleValueChange(e,t){if(e=this.normalizeValue(e),!e){if(this.clearable){this.value=e,this.selectedTimeZoneItem=null;return}this.value=t,this.selectedTimeZoneItem=this.findTimeZoneItem(t);return}const i=this.findTimeZoneItem(e);if(!i){this.value=t;return}this.selectedTimeZoneItem=i}async setFocus(){await Q(this),await this.comboboxEl.setFocus()}effectiveLocaleWatcher(){j(this,this.effectiveLocale)}onLabelClick(){this.setFocus()}overrideSelectedLabelForRegion(e){if(this.mode!=="region"||!this.selectedTimeZoneItem)return;const{label:t,metadata:i}=this.selectedTimeZoneItem;this.comboboxEl.selectedItems[0].textLabel=!i.country||e?t:ge(t,i.country,this.messages)}findTimeZoneItem(e){return P(this.timeZoneItems,"value",e)}findTimeZoneItemByLabel(e){return P(this.timeZoneItems,"label",e)}async updateTimeZoneItems(){this.timeZoneItems=await this.createTimeZoneItems()}async updateTimeZoneSelection(){if(this.value===""&&this.clearable){this.selectedTimeZoneItem=null;return}const e=this.mode==="offset"?ue():he(),t=this.value??e;this.selectedTimeZoneItem=this.findTimeZoneItem(t)||this.findTimeZoneItem(e)}async createTimeZoneItems(){return!this.effectiveLocale||!this.messages?[]:be(this.effectiveLocale,this.messages,this.mode,this.referenceDate instanceof Date?this.referenceDate:new Date(this.referenceDate??Date.now()),this.offsetStyle)}connectedCallback(){ee(this),$(this),W(this),K(this)}disconnectedCallback(){te(this),U(this),G(this),N(this)}normalizeValue(e){return e=e===null?"":e,e&&this.normalizer(e)}async componentWillLoad(){X(this);const[,e]=await Promise.all([J(this),pe(this.mode)]);this.normalizer=e,await this.updateTimeZoneItems(),this.value=this.normalizeValue(this.value),await this.updateTimeZoneSelection();const t=this.selectedTimeZoneItem?`${this.selectedTimeZoneItem.value}`:null;oe(this,t),this.value=t}componentDidLoad(){Y(this),this.openChanged()}componentDidRender(){A(this),this.overrideSelectedLabelForRegion(this.open)}render(){return h(V,{key:"b94fb2d93cdcaf0c44bbd2a0c7deaf59701078bf"},h(H,{key:"45246bbab441e9daf0e372832e74d7660039c770",disabled:this.disabled},h("calcite-combobox",{key:"294e44d8ab01079651c417f7808348e584f135b7",clearDisabled:!this.clearable,disabled:this.disabled,label:this.messages.chooseTimeZone,lang:this.effectiveLocale,maxItems:this.maxItems,onCalciteComboboxBeforeClose:this.onComboboxBeforeClose,onCalciteComboboxBeforeOpen:this.onComboboxBeforeOpen,onCalciteComboboxChange:this.onComboboxChange,onCalciteComboboxClose:this.onComboboxClose,onCalciteComboboxOpen:this.onComboboxOpen,overlayPositioning:this.overlayPositioning,placeholder:this.mode==="name"?this.messages.namePlaceholder:this.mode==="offset"?this.messages.offsetPlaceholder:this.messages.regionPlaceholder,placeholderIcon:"search",readOnly:this.readOnly,ref:this.setComboboxRef,scale:this.scale,selectionMode:this.clearable?"single":"single-persist",status:this.status,"validation-icon":this.validationIcon,"validation-message":this.validationMessage},this.renderItems()),h(ie,{key:"0b7a0694166f1d5b36b780d3436dad15d466bc3c",component:this})))}renderItems(){return this.mode==="region"?this.renderRegionItems():this.timeZoneItems.map(e=>{const t=this.selectedTimeZoneItem===e,{label:i,metadata:l,value:a}=e;return h("calcite-combobox-item",{"data-label":i,key:i,metadata:l,selected:t,textLabel:i,value:a})})}renderRegionItems(){return this.timeZoneItems.flatMap(({label:e,items:t})=>h("calcite-combobox-item-group",{key:e,label:e},t.map(i=>{const l=this.selectedTimeZoneItem===i,{label:a,metadata:u,value:Z}=i;return h("calcite-combobox-item",{"data-label":a,description:u.country,key:a,metadata:u,selected:l,textLabel:a,value:Z},h("span",{class:me.offset,slot:"content-end"},u.offset))})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],messages:["handleTimeZoneItemPropsChange"],mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],open:["openChanged"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return ye}},[17,"calcite-input-time-zone",{clearable:[516],disabled:[516],form:[513],maxItems:[514,"max-items"],messages:[1040],messageOverrides:[1040],mode:[513],offsetStyle:[513,"offset-style"],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],open:[1540],overlayPositioning:[513,"overlay-positioning"],referenceDate:[1,"reference-date"],required:[516],scale:[513],status:[513],value:[1025],readOnly:[516,"read-only"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],messages:["handleTimeZoneItemPropsChange"],mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],open:["openChanged"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleWatcher"]}]);function F(){if(typeof customElements>"u")return;["calcite-input-time-zone","calcite-chip","calcite-combobox","calcite-combobox-item","calcite-combobox-item-group","calcite-icon","calcite-input-message"].forEach(e=>{switch(e){case"calcite-input-time-zone":customElements.get(e)||customElements.define(e,S);break;case"calcite-chip":customElements.get(e)||se();break;case"calcite-combobox":customElements.get(e)||ne();break;case"calcite-combobox-item":customElements.get(e)||ae();break;case"calcite-combobox-item-group":customElements.get(e)||re();break;case"calcite-icon":customElements.get(e)||le();break;case"calcite-input-message":customElements.get(e)||ce();break}})}F();const bt=S,gt=F;export{bt as CalciteInputTimeZone,gt as defineCustomElement};