import{e as t}from"./Evented-CXIxDjmW.js";import{y as i,b as h,n as u,Y as R,c as T}from"./subclass-BR3PhgZG.js";import{n as b,s as w}from"./jsonMap-DCC6W5ex.js";import{o as m,r as F}from"./writer-3zufXUNV.js";import{f as $}from"./assets-C2mb-ea2.js";import{p as N}from"./ColorStop-CXfPDZon.js";import{o as M}from"./screenUtils-PfxkaaMN.js";import{e as p,t as _,a as U,i as j}from"./sizeVariableUtils-Cmcuvw-4.js";import{viewScaleRE as q}from"./visualVariableUtils-DzaXbn8H.js";var S;let y=S=class extends N{constructor(){super(...arguments),this.showLegend=null}clone(){return new S({title:this.title,showLegend:this.showLegend})}};t([i({type:Boolean,json:{write:!0}})],y.prototype,"showLegend",void 0),y=S=t([h("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],y);const L=y,x=new b({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});let l=class extends ${constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return e==null?e:typeof e=="function"?(u.getLogger(this).error(".field: field must be a string value"),null):R(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};t([i()],l.prototype,"index",void 0),t([i({type:x.apiValues,readOnly:!0,json:{read:x.read,write:x.write}})],l.prototype,"type",void 0),t([i({type:String,json:{write:!0}})],l.prototype,"field",void 0),t([w("field")],l.prototype,"castField",null),t([i({type:String,json:{write:!0}})],l.prototype,"valueExpression",void 0),t([i({type:String,json:{write:!0}})],l.prototype,"valueExpressionTitle",void 0),t([i({readOnly:!0})],l.prototype,"arcadeRequired",null),t([i({type:L,json:{write:!0}})],l.prototype,"legendOptions",void 0),l=t([h("esri.renderers.visualVariables.VisualVariable")],l);const A=l;function B(e){return M(e)}var g;let o=g=class extends ${constructor(e){super(e),this.label=null,this.size=null,this.value=null,this.useMinValue=null,this.useMaxValue=null}clone(){return new g({label:this.label,size:this.size,value:this.value,useMaxValue:this.useMaxValue,useMinValue:this.useMinValue})}};t([i({type:String,json:{write:!0}})],o.prototype,"label",void 0),t([i({type:Number,cast:M,json:{write:!0}})],o.prototype,"size",void 0),t([i({type:Number,json:{write:!0}})],o.prototype,"value",void 0),t([i({type:Boolean,json:{write:!1}})],o.prototype,"useMinValue",void 0),t([i({type:Boolean,json:{write:!1}})],o.prototype,"useMaxValue",void 0),o=g=t([h("esri.renderers.visualVariables.support.SizeStop")],o);const I=o;var z;let c=z=class extends L{constructor(){super(...arguments),this.customValues=null}clone(){var e;return new z({title:this.title,showLegend:this.showLegend,customValues:(e=this.customValues)==null?void 0:e.slice(0)})}};t([i({type:[Number],json:{write:!0}})],c.prototype,"customValues",void 0),c=z=t([h("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],c);const k=c;var V;const d=new b({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),f=new b({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"});function E(e){if(e!=null)return typeof e=="string"||typeof e=="number"?B(e):e.type==="size"?p(e)?e:(delete(e={...e}).type,new s(e)):void 0}function D(e,n,r){if(typeof e!="object")return e;const a=new s;return a.read(e,r),a}let s=V=class extends A{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:this.valueExpression!=null&&q.test(this.valueExpression)}}set index(e){p(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),p(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return _(this)}set maxDataValue(e){e&&this.stops&&(u.getLogger(this).warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(u.getLogger(this).warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return E(e)}readMaxSize(e,n,r){return D(e,n,r)}set minDataValue(e){e&&this.stops&&(u.getLogger(this).warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(u.getLogger(this).warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return E(e)}readMinSize(e,n,r){return D(e,n,r)}get arcadeRequired(){return!!this.valueExpression||this.minSize!=null&&typeof this.minSize=="object"&&this.minSize.arcadeRequired||this.maxSize!=null&&typeof this.maxSize=="object"&&this.maxSize.arcadeRequired}set stops(e){this.minDataValue==null&&this.maxDataValue==null&&this.minSize==null&&this.maxSize==null?e&&Array.isArray(e)&&(e=e.filter(n=>!!n)).sort((n,r)=>n.value-r.value):e&&(u.getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return U(this,this.inputValueType)}readValueExpression(e,n){return e||n.expression&&"$view.scale"}writeValueExpressionWebScene(e,n,r,a){if(e==="$view.scale"){if(a!=null&&a.messages){const v=this.index,O=typeof v=="string"?v:`visualVariables[${v}]`;a.messages.push(new T("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:O+".valueExpression",context:a}))}}else n[r]=e}readValueUnit(e){return e?f.read(e):null}clone(){var e,n;return new V({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:p(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:p(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:(e=this.stops)==null?void 0:e.map(r=>r.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:(n=this.legendOptions)==null?void 0:n.clone()})}flipSizes(){if(this.transformationType===j.ClampedLinear){const{minSize:e,maxSize:n}=this;return this.minSize=n,this.maxSize=e,this}if(this.transformationType===j.Stops){const e=this.stops;if(!e)return this;const n=e.map(a=>a.size).reverse(),r=e.length;for(let a=0;a<r;a++)e[a].size=n[a];return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){var e;return(e=this.stops)==null?void 0:e.map(n=>n.value||0)}};t([i({readOnly:!0})],s.prototype,"cache",null),t([i({type:d.apiValues,json:{type:d.jsonValues,origins:{"web-map":{read:!1}},read:d.read,write:d.write}})],s.prototype,"axis",void 0),t([i()],s.prototype,"index",null),t([i({type:String,readOnly:!0})],s.prototype,"inputValueType",null),t([i({type:k,json:{write:!0}})],s.prototype,"legendOptions",void 0),t([i({type:Number,value:null,json:{write:!0}})],s.prototype,"maxDataValue",null),t([i({type:Number,value:null,json:{write:!0}})],s.prototype,"maxSize",null),t([w("maxSize")],s.prototype,"castMaxSize",null),t([m("maxSize")],s.prototype,"readMaxSize",null),t([i({type:Number,value:null,json:{write:!0}})],s.prototype,"minDataValue",null),t([i({type:Number,value:null,json:{write:!0}})],s.prototype,"minSize",null),t([w("minSize")],s.prototype,"castMinSize",null),t([m("minSize")],s.prototype,"readMinSize",null),t([i({type:String,json:{write:!0}})],s.prototype,"normalizationField",void 0),t([i({readOnly:!0})],s.prototype,"arcadeRequired",null),t([i({type:String})],s.prototype,"scaleBy",void 0),t([i({type:[I],value:null,json:{write:!0}})],s.prototype,"stops",null),t([i({type:["outline"],json:{write:!0}})],s.prototype,"target",void 0),t([i({type:String,readOnly:!0})],s.prototype,"transformationType",null),t([i({type:["size"],json:{type:["sizeInfo"]}})],s.prototype,"type",void 0),t([i({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],s.prototype,"useSymbolValue",void 0),t([i({type:String,json:{write:!0}})],s.prototype,"valueExpression",void 0),t([m("valueExpression",["valueExpression","expression"])],s.prototype,"readValueExpression",null),t([F("web-scene","valueExpression")],s.prototype,"writeValueExpressionWebScene",null),t([i({type:["radius","diameter","area","width","distance"],json:{write:!0}})],s.prototype,"valueRepresentation",void 0),t([i({type:f.apiValues,json:{write:f.write,origins:{"web-map":{read:!1},"web-scene":{write:!0},"portal-item":{write:!0}}}})],s.prototype,"valueUnit",void 0),t([m("valueUnit")],s.prototype,"readValueUnit",null),s=V=t([h("esri.renderers.visualVariables.SizeVariable")],s);const X=s;export{I as a,X as b,k as c,A as d};
