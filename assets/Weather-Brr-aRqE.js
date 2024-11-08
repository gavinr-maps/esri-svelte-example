const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcite-label-B1FxWqaL.js","./jsxFactory-CJa39Fro.js","./tslib.es6-B3Jf3DVX.js","./intl-CChhNOV8.js","./date-DlqISzcw.js","./jsonMap-0cxwUWs2.js","./subclass-BZA_h8Db.js","./locale-C9TlLpzi.js","./messages-OmQvZhAg.js","./Accessor-BLX9ikPh.js","./assets-C43MgM-v.js","./index-Bh2oEzTI.js","./index-2kwcjS9-.css","./Evented-BHRw9x22.js","./Promise-B2Hu02L7.js","./reactiveUtils-C5zUhJQJ.js","./asyncUtils-CWX51uTe.js","./Collection-CEdjem1-.js","./shared-B3wH2qpO.js","./SimpleObservable-KocWTzVy.js","./uuid-fwrPAdZb.js","./cast-Bjksrh93.js","./label-DEe8AW1C.js","./dom-D_AJDzAj.js","./component-6CIDVndn.js","./calcite-slider-GqQeL3Ah.js","./form-BZPQ5PUM.js","./interactive-y84HQRWL.js","./key-D63ExP77.js","./loadable-DM18hPdE.js","./locale-A4FuYD8q.js","./observers-D2xgmA06.js","./math-CPc4dlb6.js","./calcite-button-D_Agetwz.js","./button-9P4PM9SO.js","./t9n-D0ry3MEw.js","./icon-BQO9J86c.js","./loader-C-zIPscB.js","./calcite-checkbox-B8olv0Y9.js","./calcite-icon-Cu0W9dtm.js"])))=>i.map(i=>d[i]);
import{_ as g}from"./index-Bh2oEzTI.js";import{r as n}from"./tslib.es6-B3Jf3DVX.js";import{t as S}from"./memoize-DsJmrG76.js";import{m as i,a as w,n as B}from"./subclass-BZA_h8Db.js";import{n as L,u as V,c as W,a as D,b as A,s as x,d as I}from"./weather-eV4wTXCK.js";import{B as E,n as o,r as T,e as P,l as f,s as _}from"./jsxFactory-CJa39Fro.js";import{e as k}from"./globalCss-CZa70j6i.js";import{e as N}from"./Heading-C-odFCu-.js";import{b as M}from"./Accessor-BLX9ikPh.js";import{watch as O,syncAndInitial as R}from"./reactiveUtils-C5zUhJQJ.js";import"./assets-C43MgM-v.js";import"./enumeration-Ba5njXdz.js";import"./jsonMap-0cxwUWs2.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./Evented-BHRw9x22.js";import"./Promise-B2Hu02L7.js";import"./uuid-fwrPAdZb.js";import"./cast-Bjksrh93.js";import"./mathUtils-C4_ghTv4.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";const u="esri-weather",v={base:u,content:`${u}__content`,hasError:`${u}__content--has-error`,selector:`${u}__selector`,options:`${u}__options`,optionsHidden:`${u}__options--hidden`,error:`${u}__error`,warning:`${u}__warning`},z={base:`${`${u}__labeled-slider`}`};var h,c;(function(e){e.Disabled="disabled",e.Ready="ready",e.Error="error"})(h||(h={})),function(e){e.NotVisible="not-visible",e.LocalScene="local-scene",e.NoAtmosphere="no-atmosphere",e.UnsupportedView="unsupported-view"}(c||(c={}));let d=class extends E{constructor(t){super(t),this._onChange=r=>{this.onChange(r.target.value)}}render(){const{label:t}=this;return o("div",{class:z.base},o("calcite-label",{scale:"s"},t,o("calcite-slider",{"aria-label":t,disabled:this.disabled,max:1,min:0,step:.01,value:this.value,onCalciteSliderChange:this._onChange,onCalciteSliderInput:this._onChange})))}loadDependencies(){return T({label:()=>g(()=>import("./calcite-label-B1FxWqaL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),import.meta.url),slider:()=>g(()=>import("./calcite-slider-GqQeL3Ah.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,26,27,28,22,24,29,30,31,32]),import.meta.url)})}};n([i()],d.prototype,"value",void 0),n([i()],d.prototype,"onChange",void 0),n([i()],d.prototype,"disabled",void 0),d=n([w("esri.widgets.Weather.LabeledSlider")],d);let m=class extends M{constructor(e){super(e),this.header=!0}};n([i({type:Boolean,nonNullable:!0})],m.prototype,"header",void 0),m=n([w("esri.widgets.Weather.VisibleElements")],m);const $=m;let p=class extends M{constructor(e){super(e),this.view=null,this._weatherByType={sunny:new L,cloudy:new V,rainy:new W,snowy:new D,foggy:new A},this._settingWeather=!1}initialize(){this.addHandles([O(()=>this.current,e=>{this._settingWeather||e==null||(this._weatherByType={...this._weatherByType,[e.type]:e})},R)])}get state(){const e=this.view;return e!=null&&e.ready?this.error!=null?this.error===c.NotVisible?h.Ready:h.Error:h.Ready:h.Disabled}get weatherByType(){return this._weatherByType}get error(){const e=this.view;return e!=null&&e.ready?e.type!=="3d"?c.UnsupportedView:e.viewingMode==="local"?c.LocalScene:e.environment.atmosphereEnabled?e.environmentManager.weatherVisible?null:c.NotVisible:c.NoAtmosphere:null}get current(){var e;return((e=this._environment)==null?void 0:e.weather)??this._weatherByType.sunny}set current(e){const t=this._environment;t&&(t.weather=e)}get _environment(){const e=this.view;return e!=null&&e.type==="3d"?e.environment:null}setWeatherByType(e){if(!x(e,B.getLogger(this)))return;const t=this._environment;t!=null&&(this._settingWeather=!0,t.weather=this._weatherByType[e],this._settingWeather=!1)}setSnowCoverEnabled(e){const t=this.current;"snowCover"in t&&(t.snowCover=e?"enabled":"disabled")}};n([i()],p.prototype,"view",void 0),n([i()],p.prototype,"state",null),n([i()],p.prototype,"_weatherByType",void 0),n([i()],p.prototype,"weatherByType",null),n([i()],p.prototype,"error",null),n([i()],p.prototype,"current",null),n([i()],p.prototype,"_environment",null),p=n([w("esri.widgets.Weather.WeatherViewModel")],p);const H=p,U={sunny:"brightness",cloudy:"partly-cloudy",rainy:"rain",snowy:"snow",foggy:"fog"};let l=class extends E{constructor(e){super(e),this.viewModel=new H,this.headingLevel=4,this.visibleElements=new $,this._renderWeatherTypeButton=t=>{const r=this.viewModel,a=this.messages[t].label,s=r.state===h.Disabled,y=!s&&r.current.type===t;return o("calcite-button",{appearance:y?"solid":"outline","aria-checked":y?"true":"false",disabled:s,iconStart:U[t],key:`${t}-type-button`,kind:y?"brand":"neutral",label:a,onclick:()=>{y||r.setWeatherByType(t)},scale:"l",title:a})},this._memoizedCallbacks=S(t=>({onCloudCoverChange:r=>{"cloudCover"in t&&(t.cloudCover=r)},onPrecipitationChange:r=>{"precipitation"in t&&(t.precipitation=r)},onFogStrengthChange:r=>{"fogStrength"in t&&(t.fogStrength=r)},onSnowCoverChange:r=>{this.viewModel.setSnowCoverEnabled(r.target.checked)}}))}render(){const e=this.viewModel.state===h.Disabled;return o("div",{"aria-label":this.messages.widgetLabelAccessible,class:this.classes(v.base,k.widget,e&&k.widgetDisabled),role:"region"},this._renderContent())}loadDependencies(){return T({button:()=>g(()=>import("./calcite-button-D_Agetwz.js"),__vite__mapDeps([33,34,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,26,23,27,22,24,29,30,28,31,35,36,37]),import.meta.url),checkbox:()=>g(()=>import("./calcite-checkbox-B8olv0Y9.js"),__vite__mapDeps([38,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,26,27,28,22,24,29]),import.meta.url),icon:()=>g(()=>import("./calcite-icon-Cu0W9dtm.js"),__vite__mapDeps([39,36,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,31]),import.meta.url),label:()=>g(()=>import("./calcite-label-B1FxWqaL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),import.meta.url)})}get view(){var e;return(e=this.viewModel)==null?void 0:e.view}set view(e){this.viewModel&&(this.viewModel.view=e)}get icon(){return"partly-cloudy"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get _errorMessage(){const e=this.messages.error;switch(this.viewModel.error){case c.LocalScene:return e.localScene;case c.NoAtmosphere:return e.noAtmosphere;case c.UnsupportedView:return e.unsupported;default:return null}}get _warningMessage(){var e;return this.viewModel.error===c.NotVisible&&this.view!=null&&((e=this.view)==null?void 0:e.type)==="3d"&&this.view.environment.atmosphereEnabled?this.messages.error.notVisible:null}_renderContent(){const{headingLevel:e,messages:t,viewModel:r,visibleElements:a}=this,s=this._warningMessage,y=r.current,b=r.state===h.Error;return o(_,null,a.header?o(N,{level:e},t.widgetLabel):null,b?o("div",{class:v.error,key:"error"},this._errorMessage):null,o("div",{class:f({[v.content]:!0,[v.hasError]:b}),key:"content"},o("div",{"aria-label":t.weatherType,class:v.selector,key:"type-selector",role:"radiogroup"},I.map(this._renderWeatherTypeButton)),Object.values(r.weatherByType).map(C=>o("div",{class:f({[v.options]:!0,[v.optionsHidden]:C.type!==(y==null?void 0:y.type)}),key:"options-container"},this._renderOptions(C))),s!=null?this._renderWarning(s):null))}_renderOptions(e){const{viewModel:t,messages:r}=this,a=t.state===h.Disabled,s=this._memoizedCallbacks(e);switch(e.type){case"sunny":return o(d,{disabled:a,key:"sunny-cover",label:r.sunny.cloudCover,value:e.cloudCover,onChange:s.onCloudCoverChange});case"cloudy":return o(d,{disabled:a,key:"cloudy-cover",label:r.cloudy.cloudCover,value:e.cloudCover,onChange:s.onCloudCoverChange});case"rainy":return o(_,null,o(d,{disabled:a,key:"rainy-cover",label:r.rainy.cloudCover,value:e.cloudCover,onChange:s.onCloudCoverChange}),o(d,{disabled:a,key:"rainy-precipitation",label:r.rainy.precipitation,value:e.precipitation,onChange:s.onPrecipitationChange}));case"snowy":return o(_,null,o(d,{disabled:a,key:"snowy-cloud-cover",label:r.snowy.cloudCover,value:e.cloudCover,onChange:s.onCloudCoverChange}),o(d,{disabled:a,key:"snowy-precipitation",label:r.snowy.precipitation,value:e.precipitation,onChange:s.onPrecipitationChange}),o("calcite-label",{key:"snow-cover",layout:"inline",scale:"s",title:r.snowy.snowCoverTooltip},o("calcite-checkbox",{checked:e.snowCover==="enabled",disabled:a,onCalciteCheckboxChange:s.onSnowCoverChange}),r.snowy.snowCover));case"foggy":return o(d,{disabled:a,key:"foggy-cover",label:r.foggy.fogStrength,value:e.fogStrength,onChange:s.onFogStrengthChange})}}_renderWarning(e){return o("div",{class:v.warning,key:"warning"},o("calcite-icon",{icon:"exclamation-mark-triangle",scale:"s"}),e)}};n([i()],l.prototype,"viewModel",void 0),n([i()],l.prototype,"view",null),n([i()],l.prototype,"headingLevel",void 0),n([i({type:$,nonNullable:!0})],l.prototype,"visibleElements",void 0),n([i()],l.prototype,"icon",null),n([i()],l.prototype,"label",null),n([i(),P("esri/widgets/Weather/t9n/Weather")],l.prototype,"messages",void 0),n([i()],l.prototype,"_errorMessage",null),n([i()],l.prototype,"_warningMessage",null),l=n([w("esri.widgets.Weather")],l);const me=l;export{me as default};