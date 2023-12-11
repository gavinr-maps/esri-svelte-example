import{c as i,f as s,aX as d,aY as Y,g as y,ay as f,a5 as l,fU as I,aZ as H,dG as Z,s as v,iN as W,db as F,de as k,cj as D,ba as V,fF as L,a3 as ee,dH as te,iP as ie,dd as M,iQ as se,m as re,eK as oe,aB as ne}from"./index-XUlETPJZ.js";import{v as P,p as b,n as le,A as B,w as z}from"./UniqueValueRenderer-rNHfFDwn.js";import{DictionaryLoader as J}from"./DictionaryLoader-uS0Mi-We.js";import{j as ae}from"./SizeVariable-eDAmtsU9.js";import{c as ue,i as pe,a as de}from"./heatmapUtils-mFECwRl0.js";var R;let w=R=class extends f{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new R({color:this.color,ratio:this.ratio})}};i([s({type:d,json:{type:[Y],default:null,write:!0}})],w.prototype,"color",void 0),i([s({type:Number,json:{write:!0}})],w.prototype,"ratio",void 0),w=R=i([y("esri.renderers.support.HeatmapColorStop")],w);const $=w;var O;let p=O=class extends P(b){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new J(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,r,o){o!=null&&o.origin||super.writeVisualVariables(e,t,r,o)}clone(){return new O({config:l(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:l(this.fieldMap),url:l(this.url),visualVariables:l(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await I(e,t,this.scaleExpression);for(const r in this.fieldMap){const o=this.fieldMap[r];t.has(o)&&e.add(o)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};i([s({type:J})],p.prototype,"_loader",null),i([s({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],p.prototype,"config",void 0),i([s({type:Object,json:{write:!0}})],p.prototype,"fieldMap",void 0),i([s({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],p.prototype,"scaleExpression",void 0),i([H("scaleExpression")],p.prototype,"writeData",null),i([s({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],p.prototype,"scaleExpressionTitle",void 0),i([s({type:String,json:{write:!0}})],p.prototype,"url",void 0),i([H("visualVariables")],p.prototype,"writeVisualVariables",null),p=O=i([y("esri.renderers.DictionaryRenderer")],p);const ye=p;var N;let h=N=class extends f{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(v.getLogger(this).error(".field: field must be a string value"),null):W(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){var e;return new N({color:(e=this.color)==null?void 0:e.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([s({type:d,json:{type:[Number],write:!0}})],h.prototype,"color",void 0),i([s({type:String,json:{write:!0}})],h.prototype,"field",void 0),i([Z("field")],h.prototype,"castField",null),i([s({type:String,json:{write:!0}})],h.prototype,"label",void 0),i([s({type:String,json:{write:!0}})],h.prototype,"valueExpression",void 0),i([s({type:String,json:{write:!0}})],h.prototype,"valueExpressionTitle",void 0),h=N=i([y("esri.renderers.support.AttributeColorInfo")],h);const G=h;var _;let j=_=class extends f{constructor(){super(...arguments),this.unit=null}clone(){return new _({unit:this.unit})}};i([s({type:String,json:{write:!0}})],j.prototype,"unit",void 0),j=_=i([y("esri.renderers.support.DotDensityLegendOptions")],j);const he=j;var A;let a=A=class extends P(b){constructor(e){super(e),this.attributes=null,this.backgroundColor=new d([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new F,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new k({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){var e;return((e=this.attributes)==null?void 0:e.reduce((t,r)=>t+r.getAttributeHash(),""))??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new A({attributes:l(this.attributes),backgroundColor:l(this.backgroundColor),dotBlendingEnabled:l(this.dotBlendingEnabled),dotShape:l(this.dotShape),dotSize:l(this.dotSize),dotValue:l(this.dotValue),legendOptions:l(this.legendOptions),outline:l(this.outline),referenceScale:l(this.referenceScale),visualVariables:l(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){var t;return`${(t=this.attributes)==null?void 0:t.map(r=>r.field||r.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const r of this.attributes??[])r.valueExpression&&await I(e,t,r.valueExpression),r.field&&e.add(r.field)}};i([s({type:[G],json:{write:!0}})],a.prototype,"attributes",void 0),i([s({type:d,json:{write:!0}})],a.prototype,"backgroundColor",void 0),i([s({type:Boolean,json:{write:!0}})],a.prototype,"dotBlendingEnabled",void 0),i([s({type:String,json:{write:!1}})],a.prototype,"dotShape",void 0),i([s({type:Number,json:{write:!0}})],a.prototype,"dotSize",void 0),i([s({type:he,json:{write:!0}})],a.prototype,"legendOptions",void 0),i([s({type:F,json:{default:null,write:!0}})],a.prototype,"outline",void 0),i([s({type:Number,json:{write:!0}})],a.prototype,"dotValue",void 0),i([s({type:Number,json:{write:!0}})],a.prototype,"referenceScale",void 0),i([s({type:Number,json:{write:!0}})],a.prototype,"seed",void 0),i([D({dotDensity:"dot-density"})],a.prototype,"type",void 0),a=A=i([y("esri.renderers.DotDensityRenderer")],a);const ce=a;let m=class extends V(f){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};i([s({type:String,json:{write:!0}})],m.prototype,"minLabel",void 0),i([s({type:String,json:{write:!0}})],m.prototype,"maxLabel",void 0),i([s({type:String,json:{write:!0}})],m.prototype,"title",void 0),m=i([y("esri.renderers.support.HeatmapLegendOptions")],m);var q;const U="esri.renderers.HeatmapRenderer",ge=v.getLogger(U);function C(e){if(e!=null){const{maxDensity:t,minDensity:r,radius:o}=e;if(t!=null||r!=null||o!=null){const{blurRadius:x,maxPixelIntensity:S,minPixelIntensity:je,...X}=e;return X}}return e}let n=q=class extends b{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new $({ratio:0,color:new d("rgba(255, 140, 0, 0)")}),new $({ratio:.75,color:new d("rgba(255, 140, 0, 1)")}),new $({ratio:.9,color:new d("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return C(e)}get blurRadius(){return ue(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,r=this.minPixelIntensity;this._set("radius",pe(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",r*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(de**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){this._warnedProps[e]||ee(this).getDefaultOrigin()==="user"&&(this._warnedProps[e]=!0,te(()=>{ie(ge,e,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"})}))}read(e,t){e=C(e),super.read(e,t)}getSymbol(){return new M}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const r=this.field,o=this.valueExpression;r&&typeof r=="string"&&se(e,t,r),o&&typeof o=="string"&&await I(e,t,o)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new q({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:l(this.colorStops),field:this.field,legendOptions:l(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([s({type:ae,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],n.prototype,"authoringInfo",void 0),i([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],n.prototype,"blurRadius",null),i([s({type:[$],json:{write:!0}})],n.prototype,"colorStops",void 0),i([s({type:String,json:{write:!0}})],n.prototype,"field",void 0),i([s({type:Number,json:{write:{overridePolicy:(e,t,r)=>({enabled:r==null})},origins:{"web-scene":{write:!1}}}})],n.prototype,"fieldOffset",void 0),i([s({type:m,json:{write:!0}})],n.prototype,"legendOptions",void 0),i([s({type:Number,json:{write:!0}})],n.prototype,"maxDensity",void 0),i([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],n.prototype,"maxPixelIntensity",null),i([s({type:Number,json:{write:!0}})],n.prototype,"minDensity",void 0),i([s({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],n.prototype,"minPixelIntensity",null),i([s({type:Number,cast:L,json:{write:!0}})],n.prototype,"radius",void 0),i([s({type:Number,range:{min:0},json:{default:0,write:!0}})],n.prototype,"referenceScale",void 0),i([D({heatmap:"heatmap"})],n.prototype,"type",void 0),i([s({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],n.prototype,"valueExpression",void 0),i([s({type:String})],n.prototype,"valueExpressionTitle",void 0),i([s({readOnly:!0})],n.prototype,"_pixelIntensityToDensity",null),n=q=i([y(U)],n);const K=n;let g=class extends V(f){constructor(){super(...arguments),this.color=new d([0,0,0,0]),this.label=null,this.threshold=0}};i([s({type:d,json:{write:!0}})],g.prototype,"color",void 0),i([s({type:String,json:{write:!0}})],g.prototype,"label",void 0),i([s({type:Number,range:{min:0,max:1},json:{write:!0}})],g.prototype,"threshold",void 0),g=i([y("esri.renderers.support.OthersCategory")],g);let E=class extends V(f){constructor(){super(...arguments),this.title=null}};i([s({type:String,json:{write:!0}})],E.prototype,"title",void 0),E=i([y("esri.renderers.support.PieChartLegendOptions")],E);let u=class extends P(V(b)){constructor(t){super(t),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new d([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new g,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){var t;return new M({size:this.size?this.size/2+(((t=this.outline)==null?void 0:t.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(re)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((t,r)=>t+r.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((t,r)=>t+JSON.stringify(r),"")}async collectRequiredFields(t,r){await this.collectVVRequiredFields(t,r);for(const o of this.attributes)o.valueExpression&&await I(t,r,o.valueExpression),o.field&&t.add(o.field)}};i([s({type:[G],json:{write:!0}})],u.prototype,"attributes",void 0),i([s({type:k,json:{default:null,write:!0}})],u.prototype,"backgroundFillSymbol",void 0),i([s({type:d,json:{write:!0}})],u.prototype,"defaultColor",void 0),i([s({type:String,json:{write:!0}})],u.prototype,"defaultLabel",void 0),i([s({type:Number,range:{min:0,max:1},json:{write:!0}})],u.prototype,"holePercentage",void 0),i([s({type:g,json:{write:!0}})],u.prototype,"othersCategory",void 0),i([s({type:E,json:{write:!0}})],u.prototype,"legendOptions",void 0),i([s({type:F,json:{default:null,write:!0}})],u.prototype,"outline",void 0),i([s({type:Number,cast:L,json:{write:!0}})],u.prototype,"size",void 0),i([D({pieChart:"pie-chart"})],u.prototype,"type",void 0),u=i([y("esri.renderers.PieChartRenderer")],u);const be=u;var T;let c=T=class extends P(b){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(r=>r.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new T({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:l(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};i([s({type:String,json:{write:!0}})],c.prototype,"description",void 0),i([s({type:String,json:{write:!0}})],c.prototype,"label",void 0),i([s(le)],c.prototype,"symbol",void 0),i([D({simple:"simple"})],c.prototype,"type",void 0),c=T=i([y("esri.renderers.SimpleRenderer")],c);const Q=c,me={key:"type",base:b,typeMap:{heatmap:K,simple:Q,"unique-value":B,"class-breaks":z,"dot-density":ce,dictionary:ye,"pie-chart":be},errorContext:"renderer"},_e={key:"type",base:b,typeMap:{simple:Q,"unique-value":B,"class-breaks":z,heatmap:K},errorContext:"renderer",validate:fe};function fe(e){switch(e.type){case"simple":return we(e);case"unique-value":return ve(e);case"class-breaks":return xe(e);case"heatmap":return e}}function we(e){if(e.symbol)return e;v.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function ve(e){const t=e.uniqueValueInfos,r=t==null?void 0:t.filter(({symbol:o,label:x},S)=>(o||v.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${S}] ${x}) without a symbol from web scene.`),!!o));return(r==null?void 0:r.length)!==(t==null?void 0:t.length)&&(e.uniqueValueInfos=r),e}function xe(e){const t=e.classBreakInfos,r=t==null?void 0:t.filter(({symbol:o,label:x},S)=>(o||v.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${S}] ${x}) without a symbol from web scene.`),!!o));return(r==null?void 0:r.length)!==(t==null?void 0:t.length)&&(e.classBreakInfos=r),e}function Ae(e,t){return $e(e,null,t)}const Se=oe({types:me});function $e(e,t,r){return e?e&&(e.styleName||e.styleUrl)&&e.type!=="uniqueValue"?(r!=null&&r.messages&&r.messages.push(new ne("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null):Se(e,t,r):null}export{$ as a,me as m,$e as o,Q as p,Ae as t,_e as u};