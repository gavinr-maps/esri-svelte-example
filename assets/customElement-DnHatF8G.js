import{L as E,u as $,c as M,n as _,s as u,d as L,b as C,x as n,i as O,a as T}from"./index-4eY77cms.js";import{r as g}from"./index-C5b9dHRB.js";import{s as f,E as S,r,m as l,a as D}from"./Accessor-BmwT4B0c.js";import{f as N}from"./intl-Duiy0OzY.js";import{q as P}from"./Graphic-Dt0LgVGU.js";import{r as x}from"./actions-fElEWZWj.js";import{b as G}from"./GeolocationPositioning-CECWv2rf.js";import{p as A}from"./geolocationUtils-BUZ2_doz.js";import{h as R}from"./Promise-DfET-uns.js";import{s as k}from"./useT9n-Dwv-EXPO.js";import{u as z}from"./useViewModel-x7-oy52B.js";import{e as b}from"./globalCss-B9-jl_gY.js";import{i as U}from"./legacyIcon-By-14gBu.js";import"./cast-CsZslgGN.js";import"./JSONSupport-DcrLLGjL.js";import"./Clonable-Z-AWS-16.js";import"./reactiveUtils-XM7cS2OP.js";import"./Evented-Dw4_VOGn.js";import"./SimpleObservable-CvOkykwM.js";import"./writer-DKgfqj4X.js";import"./opacityUtils-Dim20wpZ.js";import"./Point-Cz2JYYmX.js";import"./enumeration-DpvDkLNI.js";import"./Color-VJEMvW-n.js";import"./colorUtils-Rxh2V3ai.js";import"./mathUtils-Cfq9PL9W.js";import"./ActionToggle-D7439N1A.js";import"./Identifiable-BHVfzH03.js";import"./jsonUtils-CwFG8yN4.js";import"./Extent-g5W9hy0j.js";import"./Polyline-s-JzsQqo.js";import"./typeUtils-B6WBEKDM.js";import"./TextSymbol-BLIQ6RKX.js";import"./screenUtils-_ZIvrt5o.js";import"./collectionUtils-CTT-51g7.js";import"./Portal-CmmHxpLg.js";import"./vec3f64-BLpZdpfb.js";import"./aaBoundingBox-Dw3yBk2f.js";import"./legacyIcon-Wt_jLiuK.js";import"./GoTo-zPv0y7kC.js";import"./project-CvBujuEW.js";import"./utils-YowqfOgk.js";import"./utils-B-dlKIhi.js";import"./component-utils-D0ciaaZ_.js";async function q(){const t=await N("esri/widgets/Locate/t9n/Locate");return new P({title:t.currentLocation,fieldInfos:[{fieldName:"timestamp",label:t.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:t.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:t.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:t.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:t.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:t.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:t.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:t.speed,format:{places:0,digitSeparator:!0}}],actions:[x.clone()],content:[{type:"fields"}]})}let a=class extends G{constructor(t){super(t),this._locateController=null,this.error=void 0,this.popupEnabled=!0,this.locate=this.locate.bind(this)}initialize(){this.addHandles([R(()=>{var i;const{graphic:t,view:e}=this;if(!t)return;((i=e==null?void 0:e.graphics)==null?void 0:i.includes(t))&&this._updatePopupTemplate(t)})])}destroy(){this.cancelLocate()}get state(){var t;return this._geolocationUsable?(t=this.view)!=null&&t.ready?this._locateController?"locating":this.error!=null?"error":"ready":"disabled":"feature-unsupported"}async locate(){if(this.cancelLocate(),this.state==="disabled")throw new f("locate:disabled-state","Cannot locate when disabled.");if(this.state==="feature-unsupported")throw new f("locate:feature-unsupported-state","Cannot locate in unsecure domain.");const t=new AbortController;this._locateController=t,this.error=void 0;try{const e=await A(this.geolocationOptions);if(await this.updatePosition(e,t),this._locateController!==t)return null;const{graphic:o}=this;return o&&await this._updatePopupTemplate(o),this._addGraphic(),this.emit("locate",{position:e}),this._locateController=null,e}catch(e){if(S(e))return null;throw t===this._locateController&&(this._locateController=null),this.error=e,this.emit("locate-error",{error:e}),e}}cancelLocate(){this._clearGraphic(),this._locateController&&this._locateController.abort(),this._locateController=null}async _updatePopupTemplate(t){if(!this.popupEnabled)return;const e=await q(),o=t!==this.graphic;this.destroyed||o||(t.popupTemplate=e)}};r([l()],a.prototype,"_locateController",void 0),r([l()],a.prototype,"error",void 0),r([l()],a.prototype,"popupEnabled",void 0),r([l({readOnly:!0})],a.prototype,"state",null),r([l()],a.prototype,"locate",null),r([l()],a.prototype,"cancelLocate",null),a=r([D("esri.widgets.Locate.LocateViewModel")],a);const B=a;/*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.32/esri/copyright.txt for details.
v4.32.12 */const F=O`@layer{arcgis-locate{display:block}}`,H={base:"esri-locate"},w="gps-off",I=z(B),c=class c extends E{constructor(){super(...arguments),this.messages=k(),this.viewModel=I(this),this.autoDestroyDisabled=!1,this.geolocationOptions=this.viewModel.geolocationOptions,this.goToLocationDisabled=this.viewModel.goToLocationEnabled,this.goToOverride=this.viewModel.goToOverride,this.graphic=this.viewModel.graphic,this.icon=w,this.popupDisabled=this.viewModel.popupEnabled,this.position="top-left",this.scale=this.viewModel.scale,this.state=this.viewModel.state,this.arcgisError=g(()=>this.viewModel,"locate-error"),this.arcgisPropertyChange=$()("state"),this.arcgisReady=M(),this.arcgisSuccess=g(()=>this.viewModel,"locate")}async cancelLocate(){this.viewModel.cancelLocate()}async destroy(){await this.manager.destroy()}async locate(){return await this.viewModel.locate()}_localizeError(e){var o,i,s;if(e instanceof GeolocationPositionError)return e.code===GeolocationPositionError.PERMISSION_DENIED?(o=this.messages)==null?void 0:o.permissionError:e.code===GeolocationPositionError.TIMEOUT?(i=this.messages)==null?void 0:i.timeoutError:(s=this.messages)==null?void 0:s.positionUnavailable;if(e instanceof Error)return e.message}_locate(){const{viewModel:e}=this;e.state==="locating"?e.cancelLocate():e.locate().catch(()=>{})}render(){var m;const{viewModel:e,icon:o}=this,{state:i}=e,s=i==="locating",d=s?this.messages.cancel:this.messages.title,v=i==="feature-unsupported",y=U===void 0?w:void 0,h=this._localizeError((m=this.viewModel)==null?void 0:m.error);return n`<div class=${u(L(H.base,b.widget))}>${!v&&n`<calcite-button class=${u(b.widgetButton)} .disabled=${i==="disabled"} .iconStart=${s?void 0:o??y} kind=neutral .label=${d} @click=${this._locate} title=${d??C}>${s?n`<calcite-loader inline label></calcite-loader>`:null}</calcite-button>`||""}${h?n`<calcite-tooltip open overlay-positioning=fixed .referenceElement=${this.el}>${h}</calcite-tooltip>`:null}</div>`}};c.properties={autoDestroyDisabled:5,geolocationOptions:1,goToLocationDisabled:7,goToOverride:0,graphic:0,icon:3,label:1,messageOverrides:0,popupDisabled:5,position:3,referenceElement:1,scale:9,state:3},c.shadowRootOptions=_,c.styles=F;let p=c;T("arcgis-locate",p);export{p as ArcgisLocate};
