import{r as s}from"./tslib.es6-B3Jf3DVX.js";import{h as Re,G as we,j as Q,g as Ae,B as He,r as Be}from"./symbols-CNimns--.js";import{m as r,a as d,g as f,x as Fe,n as Oe,s as Pe,u as Le,aC as Ue,O as Je,w as Qe,a2 as Ze,b as Ke}from"./subclass-BZA_h8Db.js";import{watch as le}from"./reactiveUtils-C5zUhJQJ.js";import{s as ee}from"./cast-Bjksrh93.js";import{r as We}from"./enumeration-Ba5njXdz.js";import{o as L,r as te}from"./writer-DNAwXnhG.js";import{d as Xe}from"./diffUtils-BP7jmOAy.js";import{z as G,C as Ee,i as Ve}from"./fieldUtils-tmQlKvWo.js";import{b as oe}from"./Portal-C10FKnaA.js";import{n as U}from"./jsonMap-0cxwUWs2.js";import{f as b}from"./assets-C43MgM-v.js";import{m as Ye,p as et}from"./colorRamps-pKd7I5WZ.js";import{c as se,b as Te}from"./SizeVariable-936USOrb.js";import{a as tt}from"./ColorStop-Dk3U5tCk.js";import{r as it,n as st}from"./opacityUtils-C68Tlu6_.js";import{b as lt}from"./Accessor-BLX9ikPh.js";import{l as ie}from"./jsonUtils-Ds2Sqto-.js";import{n as rt}from"./TextSymbol-D8QO_KUV.js";import{a as ot}from"./RendererLegendOptions-B-4se3aU.js";import{i as be}from"./Clonable-D3rtuBWg.js";import{p as at,m as nt}from"./persistableUrlUtils-fa1mAujs.js";import{i as ut}from"./styleUtils-BYTm14n3.js";var ae;let R=ae=class extends b{constructor(e){super(e),this.minValue=0,this.maxValue=0}clone(){return new ae({minValue:this.minValue,maxValue:this.maxValue})}};s([r({type:Number,json:{write:!0}})],R.prototype,"minValue",void 0),s([r({type:Number,json:{write:!0}})],R.prototype,"maxValue",void 0),R=ae=s([d("esri.renderers.support.AuthoringInfoClassBreakInfo")],R);var ne;let q=ne=class extends b{constructor(e){super(e),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=new Array}clone(){return new ne({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:f(this.classBreakInfos)})}};s([r({type:String,json:{write:!0}})],q.prototype,"field",void 0),s([r({type:String,json:{write:!0}})],q.prototype,"normalizationField",void 0),s([r({type:String,json:{write:!0}})],q.prototype,"label",void 0),s([r({type:[R],json:{write:!0}})],q.prototype,"classBreakInfos",void 0),q=ne=s([d("esri.renderers.support.AuthoringInfoFieldInfo")],q);var ue;let T=ue=class extends b{constructor(e){super(e),this.label=null,this.size=null,this.value=null}clone(){return new ue({label:this.label,value:this.value,size:this.size})}};s([r({type:String,json:{write:!0}})],T.prototype,"label",void 0),s([r({type:Number,json:{write:!0}})],T.prototype,"size",void 0),s([r({type:Number,json:{write:!0}})],T.prototype,"value",void 0),T=ue=s([d("esri.renderers.support.AuthoringInfoSizeStop")],T);const pt=T;var pe;const Z=new U({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),K=new U({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),Se={key:e=>typeof e=="number"?"number":"string",typeMap:{number:Number,string:String},base:null},_e=["high-to-low","above-and-below","centered-on","extremes"],Ie=[...new Set(["high-to-low","above-and-below","centered-on","extremes","above","below","high-to-low","above-and-below","above","below","reference-size"])],qe=["seconds","minutes","hours","days","months","years"],ht=["circle","diamond","hexagon-flat","hexagon-pointy","square"];let h=pe=class extends b{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return typeof e=="string"||typeof e=="number"?e:null}get normalizationField(){return this.theme==="reference-size"?this._get("normalizationField"):null}set normalizationField(e){this._set("normalizationField",e)}get referenceSizeScale(){return this.theme==="reference-size"?this._get("referenceSizeScale"):null}set referenceSizeScale(e){this._set("referenceSizeScale",e)}get referenceSizeSymbolStyle(){return this.theme==="reference-size"?this._get("referenceSizeSymbolStyle"):null}set referenceSizeSymbolStyle(e){this._set("referenceSizeSymbolStyle",e)}castStartTime(e){return typeof e=="string"||typeof e=="number"?e:null}get sizeStops(){return this.theme==="reference-size"?this._get("sizeStops"):null}set sizeStops(e){this._set("sizeStops",e)}get style(){return this.type==="color"?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return this.type==="color"||this.type==="size"?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new pe({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,normalizationField:this.normalizationField,referenceSizeScale:this.referenceSizeScale,referenceSizeSymbolStyle:this.referenceSizeSymbolStyle,sizeStops:f(this.sizeStops),startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};s([r({types:Se,json:{write:!0}})],h.prototype,"endTime",void 0),s([ee("endTime")],h.prototype,"castEndTime",null),s([r({type:String,json:{write:!0}})],h.prototype,"field",void 0),s([r({type:Number,json:{write:!0}})],h.prototype,"maxSliderValue",void 0),s([r({type:Number,json:{write:!0}})],h.prototype,"minSliderValue",void 0),s([r({type:String,json:{origins:{"web-scene":{write:!1}},write:!0}})],h.prototype,"normalizationField",null),s([r({type:Number,value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],h.prototype,"referenceSizeScale",null),s([r({type:ht,value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],h.prototype,"referenceSizeSymbolStyle",null),s([r({types:Se,json:{write:!0}})],h.prototype,"startTime",void 0),s([ee("startTime")],h.prototype,"castStartTime",null),s([r({type:[pt],json:{origins:{"web-scene":{write:!1}},write:!0}})],h.prototype,"sizeStops",null),s([r({type:Z.apiValues,value:null,json:{type:Z.jsonValues,read:Z.read,write:Z.write}})],h.prototype,"style",null),s([r({type:Ie,value:null,json:{type:Ie,origins:{"web-scene":{type:_e,write:{writer:(e,t)=>{_e.includes(e)&&(t.theme=e)}}}},write:!0}})],h.prototype,"theme",null),s([r({type:K.apiValues,json:{type:K.jsonValues,read:K.read,write:K.write}})],h.prototype,"type",void 0),s([r({type:qe,json:{type:qe,write:!0}})],h.prototype,"units",void 0),h=pe=s([d("esri.renderers.support.AuthoringInfoVisualVariable")],h);const dt=h;var he;const j=new U({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),W=new U({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),$e=new U({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),je=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers"],ct=["high-to-low","above-and-below","above","below"],yt=["flow-line","wave-front"],ft=["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"];let p=he=class extends b{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),t=this.type;return t&&t!=="relationship"?t==="class-breaks-size"||t==="class-breaks-color"?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?et(e):void 0}get fields(){return this.type&&this.type!=="predominance"?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&this.type!=="relationship"?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&this.type!=="relationship"?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return this.type==="flow"?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&this.type!=="relationship"?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&this.type!=="relationship"?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return this.type==="univariate-color-size"&&this.univariateTheme==="above-and-below"?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type;return e&&e!=="relationship"&&e!=="class-breaks-size"&&e!=="class-breaks-color"||this.classificationMethod&&this.classificationMethod!=="standard-deviation"?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let t=e;e==="classed-size"?t="class-breaks-size":e==="classed-color"&&(t="class-breaks-color"),this._set("type",t)}get univariateSymbolStyle(){return this.type==="univariate-color-size"&&this.univariateTheme==="above-and-below"?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return this.type==="univariate-color-size"?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){var e;return new he({classificationMethod:this.classificationMethod,colorRamp:f(this.colorRamp),fadeRatio:f(this.fadeRatio),fields:(e=this.fields)==null?void 0:e.slice(),field1:f(this.field1),field2:f(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(t=>t.clone()),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}};s([r({type:j.apiValues,value:null,json:{type:j.jsonValues,read:j.read,write:j.write,origins:{"web-document":{default:"manual",type:j.jsonValues,read:j.read,write:j.write}}}})],p.prototype,"classificationMethod",null),s([r({types:Ye,json:{write:!0}})],p.prototype,"colorRamp",void 0),s([L("colorRamp")],p.prototype,"readColorRamp",null),s([r({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"fadeRatio",void 0),s([r({type:[String],value:null,json:{write:!0}})],p.prototype,"fields",null),s([r({type:q,value:null,json:{write:!0}})],p.prototype,"field1",null),s([r({type:q,value:null,json:{write:!0}})],p.prototype,"field2",null),s([r({type:yt,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"flowTheme",null),s([r({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],p.prototype,"focus",null),s([r({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],p.prototype,"isAutoGenerated",void 0),s([r({type:Number,value:null,json:{type:Fe,write:!0}})],p.prototype,"numClasses",null),s([r({type:je,json:{type:je,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],p.prototype,"lengthUnit",void 0),s([r({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"maxSliderValue",void 0),s([r({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"minSliderValue",void 0),s([r({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"statistics",null),s([r({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],p.prototype,"standardDeviationInterval",null),s([r({type:W.apiValues,value:null,json:{type:W.jsonValues,read:W.read,write:W.write,origins:{"web-scene":{type:$e.jsonValues,write:{writer:$e.write,overridePolicy:e=>({enabled:e!=="flow"})}}}}})],p.prototype,"type",null),s([r({type:[dt],json:{write:!0}})],p.prototype,"visualVariables",void 0),s([r({type:ft,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"univariateSymbolStyle",null),s([r({type:ct,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"univariateTheme",null),p=he=s([d("esri.renderers.support.AuthoringInfo")],p);const mt=p,re=new U({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0});let A=class extends b{constructor(t){super(t),this.authoringInfo=null,this.type=null}async getRequiredFields(t){if(!this.collectRequiredFields)return[];const i=new Set;return await this.collectRequiredFields(i,t),Array.from(i).sort()}getSymbol(t,i){}async getSymbolAsync(t,i){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}};s([r({type:mt,json:{write:!0}})],A.prototype,"authoringInfo",void 0),s([r({type:re.apiValues,readOnly:!0,json:{type:re.jsonValues,read:!1,write:{writer:re.write,ignoreOrigin:!0}}})],A.prototype,"type",void 0),A=s([d("esri.renderers.Renderer")],A);const vt=A;function bt(e){var t,i;return((i=(t=e.match(gt))==null?void 0:t[1])==null?void 0:i.replace(/\\'/g,"'"))??null}const gt=/^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/;var de;let x=de=class extends se{constructor(e){super(e),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(t=>!!t)).sort((t,i)=>t.value-i.value),this._set("stops",e)}clone(){var e;return new de({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(t=>t.clone()),legendOptions:(e=this.legendOptions)==null?void 0:e.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}};s([r({readOnly:!0})],x.prototype,"cache",null),s([r({type:["color"],json:{type:["colorInfo"]}})],x.prototype,"type",void 0),s([r({type:String,json:{write:!0}})],x.prototype,"normalizationField",void 0),s([r({type:[tt],json:{write:!0}})],x.prototype,"stops",null),x=de=s([d("esri.renderers.visualVariables.ColorVariable")],x);const De=x;var ce;let _=ce=class extends b{constructor(e){super(e),this.label=null,this.opacity=null,this.value=null}readOpacity(e,t){return it(t.transparency)}writeOpacity(e,t,i){t[i]=st(e)}clone(){return new ce({label:this.label,opacity:this.opacity,value:this.value})}};s([r({type:String,json:{write:!0}})],_.prototype,"label",void 0),s([r({type:Number,json:{type:Fe,write:{target:"transparency"}}})],_.prototype,"opacity",void 0),s([L("opacity",["transparency"])],_.prototype,"readOpacity",null),s([te("opacity")],_.prototype,"writeOpacity",null),s([r({type:Number,json:{write:!0}})],_.prototype,"value",void 0),_=ce=s([d("esri.renderers.visualVariables.support.OpacityStop")],_);const wt=_;var ye;let z=ye=class extends se{constructor(e){super(e),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(t=>!!t)).sort((t,i)=>t.value-i.value),this._set("stops",e)}clone(){var e;return new ye({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(t=>t.clone()),legendOptions:(e=this.legendOptions)==null?void 0:e.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}};s([r({readOnly:!0})],z.prototype,"cache",null),s([r({type:["opacity"],json:{type:["transparencyInfo"]}})],z.prototype,"type",void 0),s([r({type:String,json:{write:!0}})],z.prototype,"normalizationField",void 0),s([r({type:[wt],json:{write:!0}})],z.prototype,"stops",null),z=ye=s([d("esri.renderers.visualVariables.OpacityVariable")],z);const Ge=z;var fe;let F=fe=class extends se{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic"}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}clone(){var e;return new fe({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:(e=this.legendOptions)==null?void 0:e.clone()})}};s([r({readOnly:!0})],F.prototype,"cache",null),s([r({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],F.prototype,"axis",void 0),s([r({type:["rotation"],json:{type:["rotationInfo"]}})],F.prototype,"type",void 0),s([r({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],F.prototype,"rotationType",void 0),F=fe=s([d("esri.renderers.visualVariables.RotationVariable")],F);const Me=F,Vt={color:De,size:Te,opacity:Ge,rotation:Me},St=new U({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),_t=/^\[([^\]]+)\]$/i;let X=class extends lt{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(t){if(this._resetVariables(),t=t==null?void 0:t.filter(i=>!!i),t==null?void 0:t.length){for(const i of t)switch(i.type){case"color":this.colorVariables.push(i);break;case"opacity":this.opacityVariables.push(i);break;case"rotation":this.rotationVariables.push(i);break;case"size":this.sizeVariables.push(i)}this.sizeVariables.length&&this.sizeVariables.some(i=>!!i.target)&&t.sort((i,l)=>{let o=null;return o=i.target===l.target?0:i.target?1:-1,o});for(let i=0;i<t.length;i++)t[i].index=i;this._set("visualVariables",t)}else this._set("visualVariables",t)}readVariables(t,i,l){const{rotationExpression:o,rotationType:a}=i,u=o==null?void 0:o.match(_t),y=u==null?void 0:u[1];if(y&&(t||(t=[]),t.push({type:"rotationInfo",rotationType:a,field:y})),t)return t.map(c=>{const m=St.read(c.type),g=Vt[m];g||(Oe.getLogger(this).warn(`Unknown variable type: ${m}`),l!=null&&l.messages&&l.messages.push(new Pe("visual-variable:unsupported",`visualVariable of type '${m}' is not supported`,{definition:c,context:l})));const v=new g;return v.read(c,l),v})}writeVariables(t,i){const l=[];for(const o of t){const a=o.toJSON(i);a&&l.push(a)}return l}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}};s([r()],X.prototype,"visualVariables",null),X=s([d("esri.renderers.visualVariables.VisualVariableFactory")],X);const It=X,qt={base:se,key:"type",typeMap:{opacity:Ge,color:De,rotation:Me,size:Te}},$t=e=>{let t=class extends e{constructor(){super(...arguments),this._vvFactory=new It}set visualVariables(i){this._vvFactory.visualVariables=i,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(i,l,o){return this._vvFactory.readVariables(i,l,o)}writeVisualVariables(i,l,o,a){l[o]=this._vvFactory.writeVariables(i,a)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1;for(const i of this.visualVariables)if(i.arcadeRequired)return!0;return!1}hasVisualVariables(i,l){return i?this.getVisualVariablesForType(i,l).length>0:this.getVisualVariablesForType("size",l).length>0||this.getVisualVariablesForType("color",l).length>0||this.getVisualVariablesForType("opacity",l).length>0||this.getVisualVariablesForType("rotation",l).length>0}getVisualVariablesForType(i,l){const o=this.visualVariables;return o?o.filter(a=>a.type===i&&(typeof l=="string"?a.target===l:l!==!1||!a.target)):[]}async collectVVRequiredFields(i,l){let o=[];this.visualVariables&&(o=o.concat(this.visualVariables));for(const a of o)a&&(a.field&&G(i,l,a.field),a.normalizationField&&G(i,l,a.normalizationField),a.valueExpression&&(jt(a.valueExpression,i,l)||await Ee(i,l,a.valueExpression)))}};return s([r({types:[qt],value:null,json:{write:!0}})],t.prototype,"visualVariables",null),s([L("visualVariables",["visualVariables","rotationType","rotationExpression"])],t.prototype,"readVisualVariables",null),s([te("visualVariables")],t.prototype,"writeVisualVariables",null),t=s([d("esri.renderers.mixins.VisualVariablesMixin")],t),t};function jt(e,t,i){const l=bt(e);return l!=null&&(G(t,i,l),!0)}const ge={types:Re,json:{write:{writer:ie},origins:{"web-scene":{types:we,write:{writer:ie},read:{reader:Le({types:we})}}}}},xt=Ue({json:{origins:{"web-scene":{write:{isRequired:!0}}}}},ge),zt={types:{base:rt,key:"type",typeMap:{"simple-fill":Q.typeMap["simple-fill"],"picture-fill":Q.typeMap["picture-fill"],"polygon-3d":Q.typeMap["polygon-3d"],cim:Q.typeMap.cim}},json:{write:{writer:ie},origins:{"web-scene":{type:Ae,write:{writer:ie}}}}},Y={cast:e=>e==null||typeof e=="string"||typeof e=="number"?e:`${e}`,json:{type:String,write:{writer:(e,t)=>{t.value=e==null?void 0:e.toString()}}}};let D=class extends be(b){constructor(t){super(t),this.value=null,this.value2=null,this.value3=null}};s([r(Y)],D.prototype,"value",void 0),s([r(Y)],D.prototype,"value2",void 0),s([r(Y)],D.prototype,"value3",void 0),D=s([d("esri.renderers.support.UniqueValue")],D);const M=D;let I=class extends be(b){constructor(t){super(t),this.description=null,this.label=null,this.symbol=null,this.values=null}castValues(t){if(t==null)return null;const i=typeof(t=Array.isArray(t)?t:[t])[0];return i==="string"||i==="number"?t.map(l=>new M({value:l})):i==="object"?t[0]instanceof M?t:t.map(l=>new M(l)):null}};s([r({type:String,json:{write:!0}})],I.prototype,"description",void 0),s([r({type:String,json:{write:!0}})],I.prototype,"label",void 0),s([r(ge)],I.prototype,"symbol",void 0),s([r({type:[M],json:{type:[[String]],read:{reader:e=>e?e.map(t=>new M({value:t[0],value2:t[1],value3:t[2]})):null},write:{writer:(e,t)=>{const i=[];for(const l of e){const o=[l.value,l.value2,l.value3].filter(Je).map(a=>a.toString());i.push(o)}t.values=i}}}})],I.prototype,"values",void 0),s([ee("values")],I.prototype,"castValues",null),I=s([d("esri.renderers.support.UniqueValueClass")],I);const Ce=I;let H=class extends be(b){constructor(e){super(e),this.heading=null,this.classes=null}};s([r({type:String,json:{write:!0}})],H.prototype,"heading",void 0),s([r({type:[Ce],json:{write:!0}})],H.prototype,"classes",void 0),H=s([d("esri.renderers.support.UniqueValueGroup")],H);const me=H;var ve;let O=ve=class extends b{constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.value=null}clone(){return new ve({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){var t;const e=JSON.stringify((t=this.symbol)==null?void 0:t.toJSON());return`${this.value}.${e}`}};s([r({type:String,json:{write:!0}})],O.prototype,"description",void 0),s([r({type:String,json:{write:!0}})],O.prototype,"label",void 0),s([r(xt)],O.prototype,"symbol",void 0),s([r(Y)],O.prototype,"value",void 0),O=ve=s([d("esri.renderers.support.UniqueValueInfo")],O);const P=O;var B;const Ne="esri.renderers.UniqueValueRenderer",S=()=>Oe.getLogger(Ne),xe="uvInfos-watcher",ze="uvGroups-watcher",Ft=",",Ot=Qe(P);function Ut(e){const{field1:t,field2:i,field3:l,fieldDelimiter:o,uniqueValueInfos:a,valueExpression:u}=e,y=!(!t||!i);return[{classes:(a??[]).map(c=>{var $;const{symbol:m,label:g,value:v,description:w}=c,[C,N,k]=y?(($=v==null?void 0:v.toString())==null?void 0:$.split(o||""))||[]:[v],V=[];return(t||u)&&V.push(C),i&&V.push(N),l&&V.push(k),{symbol:m,label:g,values:[V],description:w}})}]}function E(e){return e!=null&&e!==""&&(typeof e!="string"||e.trim()!==""&&e.toLowerCase()!=="<null>")||(e=null),e+""}let n=B=class extends $t(vt){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this._isInfosSource=null,this.type="unique-value",this.backgroundFillSymbol=null,this.orderByClassesEnabled=!1,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(t,i){if(!t&&!i)return;if(!t||!i)return{type:"complete",oldValue:t,newValue:i};let l=!1;const o={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let a=0;a<i.length;a++){const u=t.find(y=>y.value===i[a].value);u?Xe(u,i[a])?(o.changed.push({type:"complete",oldValue:u,newValue:i[a]}),l=!0):o.unchanged.push({oldValue:u,newValue:i[a]}):(o.added.push(i[a]),l=!0)}for(let a=0;a<t.length;a++)i.find(u=>u.value===t[a].value)||(o.removed.push(t[a]),l=!0);return l?o:void 0}},this._set("uniqueValueInfos",[]),this._set("uniqueValueGroups",[])}get _cache(){return{compiledFunc:null}}set field(e){this._set("field",e),this._updateFieldDelimiter(),this._updateUniqueValues()}castField(e){return e==null||typeof e=="function"?e:Ze(e)}writeField(e,t,i,l){typeof e=="string"?t[i]=e:l!=null&&l.messages?l.messages.push(new Ke("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):S().error(".field: cannot write field to JSON since it's not a string value")}set field2(e){this._set("field2",e),this._updateFieldDelimiter(),this._updateUniqueValues()}set field3(e){this._set("field3",e),this._updateUniqueValues()}set valueExpression(e){this._set("valueExpression",e),this._updateUniqueValues()}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}set fieldDelimiter(e){this._set("fieldDelimiter",e),this._updateUniqueValues()}readPortal(e,t,i){return i.portal||oe.getDefault()}readStyleOrigin(e,t,i){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){const l=at(t.styleUrl,i);return Object.freeze({styleUrl:l})}}writeStyleOrigin(e,t,i,l){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=nt(e.styleUrl,l))}set uniqueValueGroups(e){this.styleOrigin?S().error("#uniqueValueGroups=","Cannot modify unique value groups of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueGroups",e),this._updateInfosFromGroups(),this._isInfosSource=!1,this._watchUniqueValueGroups())}set uniqueValueInfos(e){this.styleOrigin?S().error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos())}addUniqueValueInfo(e,t){var l;if(this.styleOrigin)return void S().error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");let i;i=typeof e=="object"?Ot(e):new P({value:e,symbol:He(t)}),(l=this.uniqueValueInfos)==null||l.push(i),this._valueInfoMap[E(i.value)]=i,this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}removeUniqueValueInfo(e){if(this.styleOrigin)return void S().error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");const t=this.uniqueValueInfos;if(t)for(let i=0;i<t.length;i++){const l=t[i];if(String(l.value)===String(e)){delete this._valueInfoMap[E(e)],t.splice(i,1);break}}this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}async getUniqueValueInfo(e,t){let i=t;return this.valueExpression&&(t==null?void 0:t.arcade)==null&&(i={...i,arcade:await Ve()}),this._getUniqueValueInfo(e,i)}getSymbol(e,t){if(this.valueExpression&&(t==null?void 0:t.arcade)==null)return void S().error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const i=this._getUniqueValueInfo(e,t);return(i==null?void 0:i.symbol)||this.defaultSymbol}async getSymbolAsync(e,t){let i=t;if(this.valueExpression&&(i==null?void 0:i.arcade)==null){const o=await Ve(),{arcadeUtils:a}=o;a.hasGeometryOperations(this.valueExpression)&&await a.enableGeometryOperations(),i={...i,arcade:o}}const l=this._getUniqueValueInfo(e,i);return(l==null?void 0:l.symbol)||this.defaultSymbol}getSymbols(){const e=[];for(const t of this.uniqueValueInfos??[])t.symbol&&e.push(t.symbol);return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,i)=>t+i.getAttributeHash(),""))??""}getMeshHash(){var l;const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),i=(l=this.uniqueValueInfos)==null?void 0:l.reduce((o,a)=>o+a.getMeshHash(),"");return`${e}.${t}.${i}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`}clone(){const e=new B({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:f(this.defaultSymbol),orderByClassesEnabled:this.orderByClassesEnabled,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:f(this.visualVariables),legendOptions:f(this.legendOptions),authoringInfo:f(this.authoringInfo),backgroundFillSymbol:f(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);const t=f(this.uniqueValueInfos),i=f(this.uniqueValueGroups);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze(f(this.styleOrigin))),Object.freeze(t),Object.freeze(i)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e._set("uniqueValueGroups",i),e._isInfosSource=this._isInfosSource,e._watchUniqueValueInfosAndGroups(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const i=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Promise.all(i)}async collectSymbolFields(e,t){const i=[...this.getSymbols().map(l=>l.collectRequiredFields(e,t)),Ee(e,t,this.valueExpression)];G(e,t,this.field),G(e,t,this.field2),G(e,t,this.field3),await Promise.all(i)}populateFromStyle(){return ut(this.styleOrigin,{portal:this.portal}).then(e=>{var i;const t=[];return this._valueInfoMap={},e!=null&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach(l=>{const o=new Be({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:l.name});this.defaultSymbol||l.name!==e.data.defaultItem||(this.defaultSymbol=o,this._isDefaultSymbolDerived=!0);const a=new P({value:l.name,symbol:o});t.push(a),this._valueInfoMap[E(l.name)]=a}),this._set("uniqueValueInfos",Object.freeze(t)),this._updateGroupsFromInfos(!0),this._isInfosSource=null,this._watchUniqueValueInfos(),!this.defaultSymbol&&((i=this.uniqueValueInfos)!=null&&i.length)&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this})}_updateFieldDelimiter(){this.field&&this.field2&&!this.fieldDelimiter&&this._set("fieldDelimiter",Ft)}_updateUniqueValues(){this._isInfosSource!=null&&(this._isInfosSource?this._updateGroupsFromInfos():this._updateInfosFromGroups())}_updateValueInfoMap(){this._valueInfoMap={};const{uniqueValueInfos:e}=this;if(e)for(const t of e)this._valueInfoMap[E(t.value)]=t}_watchUniqueValueInfosAndGroups(){this._watchUniqueValueInfos(),this._watchUniqueValueGroups()}_watchUniqueValueInfos(){this.removeHandles(xe);const{uniqueValueInfos:e}=this;if(e){const t=[];for(const i of e)t.push(le(()=>({symbol:i.symbol,value:i.value,label:i.label,description:i.description}),(l,o)=>{l!==o&&(this._updateGroupsFromInfos(),this._isInfosSource=!0)},{sync:!0}));this.addHandles(t,xe)}}_watchUniqueValueGroups(){this.removeHandles(ze);const{uniqueValueGroups:e}=this;if(e){const t=[];for(const i of e){t.push(le(()=>({classes:i.classes}),(l,o)=>{l!==o&&(this._updateInfosFromGroups(),this._isInfosSource=!1)},{sync:!0}));for(const l of i.classes??[])t.push(le(()=>({symbol:l.symbol,values:l.values,label:l.label,description:l.description}),(o,a)=>{o!==a&&(this._updateInfosFromGroups(),this._isInfosSource=!1)},{sync:!0}))}this.addHandles(t,ze)}}_updateInfosFromGroups(){if(!this.uniqueValueGroups)return this._set("uniqueValueInfos",null),this._updateValueInfoMap(),void this._watchUniqueValueInfos();const e=[],{field:t,field2:i,field3:l,fieldDelimiter:o,uniqueValueGroups:a,valueExpression:u}=this;if(!t&&!u)return this._set("uniqueValueInfos",e),this._updateValueInfoMap(),void this._watchUniqueValueInfos();const y=!(!t||!i);for(const c of a)for(const m of c.classes??[]){const{symbol:g,label:v,values:w,description:C}=m;for(const N of w??[]){const{value:k,value2:V,value3:$}=N,J=[k];i&&J.push(V),l&&J.push($);const ke=y?J.join(o||""):J[0]??void 0;e.push(new P({symbol:g,label:v,value:ke,description:C}))}}this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._watchUniqueValueInfos()}_updateGroupsFromInfos(e=!1){if(!this.uniqueValueInfos)return this._set("uniqueValueGroups",null),void this._watchUniqueValueGroups();const{field:t,field2:i,valueExpression:l,fieldDelimiter:o,uniqueValueInfos:a}=this;if(!t&&!l||!a.length)return this._set("uniqueValueGroups",[]),void this._watchUniqueValueGroups();const u=!(!t||!i),y=a.map(m=>{var $;const{symbol:g,label:v,value:w,description:C}=m,[N,k,V]=u?(($=w==null?void 0:w.toString())==null?void 0:$.split(o||""))||[]:[w];return new Ce({symbol:g,label:v,description:C,values:[new M({value:N,value2:k,value3:V})]})}),c=[new me({classes:y})];e&&Object.freeze(c),this._set("uniqueValueGroups",c),this._watchUniqueValueGroups()}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:i,scale:l,spatialReference:o,arcade:a,timeZone:u}=t??{};let y=this._cache.compiledFunc;const c=a.arcadeUtils;if(!y){const g=c.createSyntaxTree(this.valueExpression);y=c.createFunction(g),this._cache.compiledFunc=y}const m=c.executeFunction(y,c.createExecContext(e,c.getViewInfo({viewingMode:i,scale:l,spatialReference:o}),u));return this._valueInfoMap[E(m)]}_getUnqiueValueInfoForFields(e){const t=this.field,i=e.attributes;let l;if(this.field2){const o=this.field2,a=this.field3,u=[];t&&u.push(i[t]),o&&u.push(i[o]),a&&u.push(i[a]),l=u.join(this.fieldDelimiter||"")}else t&&(l=i[t]);return this._valueInfoMap[E(l)]}static fromPortalStyle(e,t){const i=new B(t==null?void 0:t.properties);i._set("styleOrigin",Object.freeze({styleName:e})),i._set("portal",(t==null?void 0:t.portal)||oe.getDefault());const l=i.populateFromStyle();return l.catch(o=>{S().error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",o)}),l}static fromStyleUrl(e,t){const i=new B(t==null?void 0:t.properties);i._set("styleOrigin",Object.freeze({styleUrl:e}));const l=i.populateFromStyle();return l.catch(o=>{S().error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",o)}),l}};s([r({readOnly:!0})],n.prototype,"_cache",null),s([We({uniqueValue:"unique-value"})],n.prototype,"type",void 0),s([r(zt)],n.prototype,"backgroundFillSymbol",void 0),s([r({value:null,json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],n.prototype,"field",null),s([ee("field")],n.prototype,"castField",null),s([te("field")],n.prototype,"writeField",null),s([r({type:String,value:null,json:{write:!0}})],n.prototype,"field2",null),s([r({type:String,value:null,json:{write:!0}})],n.prototype,"field3",null),s([r({type:Boolean,json:{name:"drawInClassOrder",default:!1,write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"orderByClassesEnabled",void 0),s([r({type:String,value:null,json:{write:!0}})],n.prototype,"valueExpression",null),s([r({type:String,json:{write:!0}})],n.prototype,"valueExpressionTitle",void 0),s([r({type:ot,json:{write:!0}})],n.prototype,"legendOptions",void 0),s([r({type:String,json:{write:!0}})],n.prototype,"defaultLabel",void 0),s([r(Ue({...ge},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],n.prototype,"defaultSymbol",null),s([r({type:String,value:null,json:{write:!0}})],n.prototype,"fieldDelimiter",null),s([r({type:oe,readOnly:!0})],n.prototype,"portal",void 0),s([L("portal",["styleName"])],n.prototype,"readPortal",null),s([r({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],n.prototype,"styleOrigin",void 0),s([L("styleOrigin",["styleName","styleUrl"])],n.prototype,"readStyleOrigin",null),s([te("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],n.prototype,"writeStyleOrigin",null),s([r({type:[me],json:{read:{source:["uniqueValueGroups","uniqueValueInfos"],reader:(e,t,i)=>(t.uniqueValueGroups||Ut(t)).map(l=>me.fromJSON(l,i))},write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],n.prototype,"uniqueValueGroups",null),s([r({type:[P],json:{read:!1,write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],n.prototype,"uniqueValueInfos",null),n=B=s([d(Ne)],n);const oi=n;export{oi as A,Ge as a,Me as b,P as c,bt as e,mt as j,xt as m,zt as n,vt as p,$t as v,ge as y};
