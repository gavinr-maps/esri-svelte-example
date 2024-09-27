const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcite-button-D_QRw8fR.js","./button-CT5wDIjk.js","./jsxFactory-CbAu6VfF.js","./Evented-CXIxDjmW.js","./Accessor-D6mNnsWy.js","./subclass-BR3PhgZG.js","./intl-Dpfm8vPB.js","./Promise-CZrWwByK.js","./jsonMap-DCC6W5ex.js","./assets-C2mb-ea2.js","./index-CeCSsEgo.js","./index-CjOb8WjV.css","./reactiveUtils-BFQ0BtrB.js","./shared-B3wH2qpO.js","./uuid-fwrPAdZb.js","./form-DcBTx4ZC.js","./dom-Cv0oa6So.js","./interactive-Dtpmn6Ls.js","./label-rdYpV4K5.js","./component-ByvC-PUv.js","./loadable-CTFTnu2T.js","./locale-BUTTOPma.js","./key-D5DPfjW0.js","./observers-EizV_Lvc.js","./t9n-DfK3dFGw.js","./icon-DIKjN-ev.js","./loader-wfvKSvDR.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./index-CeCSsEgo.js";import{e as t}from"./Evented-CXIxDjmW.js";import{y as r,b as c,n as a}from"./subclass-BR3PhgZG.js";import{e as v,B as _,r as f,n as u}from"./jsxFactory-CbAu6VfF.js";import{S as g}from"./Accessor-D6mNnsWy.js";import{e as d}from"./globalCss-CZa70j6i.js";import"./intl-Dpfm8vPB.js";import"./Promise-CZrWwByK.js";import"./jsonMap-DCC6W5ex.js";import"./assets-C2mb-ea2.js";import"./reactiveUtils-BFQ0BtrB.js";import"./shared-B3wH2qpO.js";import"./uuid-fwrPAdZb.js";let l=class extends g{constructor(e){super(e),this._vendorInfo=null,this._fullscreenStyle="width: 100%; height: 100%;",this.view=null,this._errorHandler=this._errorHandler.bind(this),this._stateHandler=this._stateHandler.bind(this)}destroy(){this._removeFullscreenListeners(),this.view=null}get element(){var e;return((e=this.view)==null?void 0:e.container)??null}set element(e){this._override("element",e)}get state(){return this.element?this._isSupported()?this._isActive()?"active":"ready":"feature-unsupported":"disabled"}enter(){this._enterFullscreen()}exit(){this._exitFullscreen()}toggle(){this._isActive()?this._exitFullscreen():this._enterFullscreen()}_isSupported(){this._removeFullscreenListeners();const e=this._getVendorInfo(this.element);return this._addFullscreenListeners(e),this._vendorInfo=e,!!e}_isActive(){return!!this._vendorInfo&&!!document[this._vendorInfo.propertyName]}_stateHandler(){this.notifyChange("state"),this.state==="active"?this._addStyle():this._removeStyle()}_errorHandler(e){a.getLogger(this).error("fullscreen request failed",e)}_getVendorInfo(e){if(e)return e.requestFullscreen?{enterName:"requestFullscreen",exitName:"exitFullscreen",errorEventName:"fullscreenerror",changeEventName:"fullscreenchange",propertyName:"fullscreen"}:e.webkitRequestFullScreen?{enterName:"webkitRequestFullscreen",exitName:"webkitCancelFullScreen",errorEventName:"webkitfullscreenerror",changeEventName:"webkitfullscreenchange",propertyName:"webkitIsFullScreen"}:e.mozRequestFullScreen?{enterName:"mozRequestFullScreen",exitName:"mozCancelFullScreen",errorEventName:"mozfullscreenerror",changeEventName:"mozfullscreenchange",propertyName:"mozFullScreen"}:void 0}_enterFullscreen(){if(this.state==="feature-unsupported")return void a.getLogger(this).warn("The fullscreen API is not supported in this browser.");const{element:e}=this;e&&(this._vendorInfo&&e[this._vendorInfo.enterName].call(e),this.notifyChange("state"))}_addStyle(){const{element:e}=this;e&&e.setAttribute("style",this._fullscreenStyle)}_removeStyle(){const{element:e}=this;e&&e.removeAttribute("style")}_exitFullscreen(){if(this.state==="feature-unsupported")return;const{element:e}=this;e&&(this._vendorInfo&&document[this._vendorInfo.exitName].call(document),this.notifyChange("state"))}_addFullscreenListeners(e){e&&(document.addEventListener(e.changeEventName,this._stateHandler),document.addEventListener(e.errorEventName,this._errorHandler))}_removeFullscreenListeners(){const{_vendorInfo:e}=this;e&&(document.removeEventListener(e.changeEventName,this._stateHandler),document.removeEventListener(e.errorEventName,this._errorHandler))}};t([r()],l.prototype,"element",null),t([r({readOnly:!0})],l.prototype,"state",null),t([r()],l.prototype,"view",void 0),t([r()],l.prototype,"enter",null),t([r()],l.prototype,"exit",null),t([r()],l.prototype,"toggle",null),l=t([c("esri.widgets.Fullscreen.FullscreenViewModel")],l);const m=l,w={base:"esri-fullscreen"};let s=class extends _{constructor(e,n){super(e,n),this.messages=null,this.viewModel=new m,this._toggle=()=>{this.viewModel.toggle()}}loadDependencies(){return f({button:()=>p(()=>import("./calcite-button-D_QRw8fR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)})}get element(){return this.viewModel.element}set element(e){this.viewModel.element=e}get fullscreenTitle(){var n;const e=(n=this.viewModel)==null?void 0:n.state;return e==="active"?this.messages.exit:e==="ready"?this.messages.enter:""}get icon(){var n;const e=(n=this.viewModel)==null?void 0:n.state;return e==="ready"||e==="disabled"||e==="feature-unsupported"?"zoom-out-fixed":"zoom-in-fixed"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}render(){var o;const{fullscreenTitle:e,icon:n}=this,i=(o=this.viewModel)==null?void 0:o.state,h=i==="feature-unsupported";return u("div",{class:this.classes(w.base,d.widget)},!h&&u("calcite-button",{class:d.widgetButton,disabled:i==="disabled",iconStart:n,kind:"neutral",label:e,onclick:this._toggle,title:e}))}};t([r()],s.prototype,"element",null),t([r({readOnly:!0})],s.prototype,"fullscreenTitle",null),t([r()],s.prototype,"icon",null),t([r()],s.prototype,"label",null),t([r(),v("esri/widgets/Fullscreen/t9n/Fullscreen")],s.prototype,"messages",void 0),t([r()],s.prototype,"view",null),t([r({type:m})],s.prototype,"viewModel",void 0),s=t([c("esri.widgets.Fullscreen")],s);const q=s;export{q as default};
