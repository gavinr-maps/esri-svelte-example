const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./OverrideHelper-BItCoKFp.js","./Color-VJEMvW-n.js","./colorUtils-Rxh2V3ai.js","./mathUtils-Cfq9PL9W.js","./Accessor-BmwT4B0c.js","./colorUtils-DaPfwnk3.js","./vec42-YcqnINSP.js","./common-DQOJ18NT.js","./vec4f64-o2zAXfmz.js","./opacityUtils-Dim20wpZ.js","./index-4eY77cms.js","./index-Cx51aysm.css","./Promise-DfET-uns.js","./cast-CsZslgGN.js","./JSONSupport-DcrLLGjL.js","./Point-Cz2JYYmX.js","./writer-DKgfqj4X.js","./utils-UPZJIDfz.js","./defaultCIMValues-Bb-CUowV.js","./enums-BTM-fOHQ.js","./callExpressionWithFeature-Dty09cLj.js","./quantizationUtils-DgFbqZi7.js","./Extent-g5W9hy0j.js","./Polyline-s-JzsQqo.js"])))=>i.map(i=>d[i]);
import{E as oe,B as V,s as ne,c as p,r as i,m as r,a as E,aN as le,G as ae}from"./Accessor-BmwT4B0c.js";import{w as W}from"./ClassBreaksRenderer-C7fhua2J.js";import{r as Z}from"./writer-DKgfqj4X.js";import{o as ue,ak as pe,_ as N,Z as ye}from"./opacityUtils-Dim20wpZ.js";import{v as z,p as P,j as de,n as ce,b as he}from"./commonProperties-ZfGquLPI.js";import{_ as me}from"./index-4eY77cms.js";import{h as w}from"./Color-VJEMvW-n.js";import{P as G,a as fe}from"./cast-CsZslgGN.js";import{e as ge}from"./LRUCache-CXiGQWMN.js";import{r as be}from"./Version-Cd3TlGH0.js";import{y as ve,s as we}from"./jsonUtils-CwFG8yN4.js";import{Z as xe}from"./FieldsIndex-FW1AMU67.js";import{d as Se}from"./Graphic-Dt0LgVGU.js";import{J as _e,R as $e}from"./utils-UPZJIDfz.js";import{r as B}from"./enumeration-DpvDkLNI.js";import{S as L}from"./JSONSupport-DcrLLGjL.js";import{d as J,S as je,y as X}from"./TextSymbol-BLIQ6RKX.js";import{o as Y}from"./screenUtils-_ZIvrt5o.js";import{l as T}from"./HeatmapColorStop-CHbSyb1s.js";import{a as U}from"./Clonable-Z-AWS-16.js";import{a as Ie,e as Ee,c as De}from"./heatmapUtils-Cyq-bAyG.js";import{u as Re}from"./RendererLegendOptions-CYAPr8D6.js";import{b as Me,c as Ve}from"./SizeVariable-B-ghFm6e.js";import{p as ee}from"./SimpleRenderer-CEw_geZx.js";import{A as te}from"./UniqueValueRenderer-yoWHKJ_P.js";const K="esri.renderers.support.DictionaryLoader",Pe={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class ie{constructor(t,s,o){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new ge(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=t,this.config=s,this.fieldMap=o}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){var D;let o;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{o=await this._dictionaryPromise}catch(c){if(oe(c))return this._dictionaryPromise=null,null}const d=(D=this._dictionaryVersion)==null?void 0:D.greaterEqual(4,0),a={};if(this.fieldMap)for(const c of this._symbolFields){const n=_e(this.fieldMap[c],this._fieldIndex);if(n){const l=t.attributes[n];a[c]=d?l:l!=null?""+t.attributes[n]:""}else a[c]=""}let u=null;try{u=o==null?void 0:o(a,s)}catch{return null}if(!u||typeof u!="string"||u==="invalid")return null;const f=u.split(";"),x=[],g=[];for(let c=0;c<f.length;c++){const n=f[c];if(n){if(n.includes("po:")){const l=n.slice(3).split("|");if(l.length===3){const I=l[0],$=l[1];let S=l[2];const O="countrylabel";if(I===O&&$==="TextString"){if(this.fieldMap!=null){let b=this.fieldMap[O];b==null&&(b=O,this.fieldMap[b]=b),t.attributes[b]=S}continue}if($==="DashTemplate")S=S.split(" ").map(b=>Number(b));else if($==="Color"){const b=new w(S).toRgba();S=[b[0],b[1],b[2],255*b[3]]}else S=Number(S);g.push({primitiveName:I,propertyName:$,value:S,defaultValue:null})}}else if(n.includes("|")){for(const l of n.split("|"))if(this._itemNames.has(l)){x.push(l);break}}else if(this._itemNames.has(n))x.push(n);else if(c===0){x.length=0;let l="Invalid_P";t.geometry!=null&&(ve(t.geometry)?l="Invalid_A":we(t.geometry)&&(l="Invalid_L")),x.push(l);break}}}const _=t.geometry==null||!t.geometry.hasZ&&t.geometry.type==="point";return this._cimPartsToCIMSymbol(t,x,g,_,s)}async fetchResources(t){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void V.getLogger(K).error("no valid URL!");const s=G(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:t!=null?t.signal:null}),[{data:o}]=await Promise.all([s,ue()]);if(!o)throw this._dictionaryPromise=null,new ne("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:d,dictionary_version:a,expression:u,itemsNames:f}=o,x=u;let g=!1;a&&(this._dictionaryVersion=be.parse(a),g=this._dictionaryVersion.greaterEqual(4,0)),this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(f),this._symbolFields=d.symbol;const _={};if(this.config){const n=this.config;for(const l in n)_[l]=n[l]}if(d.configuration)for(const n of d.configuration)_.hasOwnProperty(n.name)||(_[n.name]=n.value);const D=[];if(t!=null&&t.fields&&this.fieldMap)for(const n in this.fieldMap){const l=this.fieldMap[n],I=t.fields.filter($=>$.name.toLowerCase()===(l==null?void 0:l.toLowerCase()));I.length>0&&D.push({...I[0],type:g?I[0].type:"esriFieldTypeString"})}D.length>0&&(this._fieldIndex=new xe(D));const c=pe(x,t!=null?t.spatialReference:null,D,_).then(n=>{const l={scale:0};return(I,$)=>{if(n==null)return null;const S=n.repurposeFeature({geometry:null,attributes:I});return l.scale=$!=null?$.scale??void 0:void 0,n.evaluate({$feature:S,$view:l},n.services)}}).catch(n=>(V.getLogger(K).error("Creating dictionary expression failed:",n),null));return this._dictionaryPromise=c,c}async _cimPartsToCIMSymbol(t,s,o,d,a){const u=new Array(s.length);for(let g=0;g<s.length;g++)u[g]=this._getSymbolPart(s[g],a);let f=await Promise.all(u);const x=this.fieldMap;if(x&&f.length>0){const{OverrideHelper:g}=await me(()=>import("./OverrideHelper-BItCoKFp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]),import.meta.url);f=p(f);for(const _ of f)g.applyDictionaryTextOverrides(_,t,x,this._fieldIndex,$e(_))}return new Se({data:Te(f,o,d)})}async _getSymbolPart(t,s){const o=this._symbolCache.get(t);if(o)return o;if(this._ongoingRequests.has(t))return this._ongoingRequests.get(t).then(u=>u.data);const d=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,t),a=G(d,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(t,a),a.finally(()=>this._ongoingRequests.delete(t));try{const u=await a;return this._symbolCache.put(t,u.data),u.data}catch(u){throw u}}}function Te(e,t,s){if(!e||e.length===0)return null;const o={...e[0]};if(e.length>1){o.effects=null,o.symbolLayers=[];for(const d of e){const a=d;if(a.effects!=null)for(const u of a.symbolLayers)u.effects==null?u.effects=a.effects:u.effects.unshift(...a.effects);o.symbolLayers.unshift(...a.symbolLayers)}}return s&&(o.callout=Pe),{type:"CIMSymbolReference",symbol:o,primitiveOverrides:t}}var q;let v=q=class extends z(P){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new ie(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,s,o){o!=null&&o.origin||super.writeVisualVariables(e,t,s,o)}clone(){return new q({config:p(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:p(this.fieldMap),url:p(this.url),visualVariables:p(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await N(e,t,this.scaleExpression);for(const s in this.fieldMap){const o=this.fieldMap[s];t.has(o)&&e.add(o)}}get arcadeRequired(){return!0}getSymbol(){return null}get symbols(){return[]}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};i([r({type:ie})],v.prototype,"_loader",null),i([r({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],v.prototype,"config",void 0),i([r({type:Object,json:{write:!0}})],v.prototype,"fieldMap",void 0),i([r({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],v.prototype,"scaleExpression",void 0),i([Z("scaleExpression")],v.prototype,"writeData",null),i([r({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],v.prototype,"scaleExpressionTitle",void 0),i([r({type:String,json:{write:!0}})],v.prototype,"url",void 0),i([Z("visualVariables")],v.prototype,"writeVisualVariables",null),v=q=i([E("esri.renderers.DictionaryRenderer")],v);const Ce=v;var A;let j=A=class extends L{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(V.getLogger(this).error(".field: field must be a string value"),null):le(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){var e;return new A({color:(e=this.color)==null?void 0:e.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:w,json:{type:[Number],write:!0}})],j.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],j.prototype,"field",void 0),i([fe("field")],j.prototype,"castField",null),i([r({type:String,json:{write:!0}})],j.prototype,"label",void 0),i([r({type:String,json:{write:!0}})],j.prototype,"valueExpression",void 0),i([r({type:String,json:{write:!0}})],j.prototype,"valueExpressionTitle",void 0),j=A=i([E("esri.renderers.support.AttributeColorInfo")],j);const se=j;var k;let C=k=class extends L{constructor(){super(...arguments),this.unit=null}clone(){return new k({unit:this.unit})}};i([r({type:String,json:{write:!0}})],C.prototype,"unit",void 0),C=k=i([E("esri.renderers.support.DotDensityLegendOptions")],C);const Ne=C;var F;let h=F=class extends z(P){constructor(e){super(e),this.attributes=null,this.backgroundColor=new w([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new J,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new je({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}get symbols(){return[this.getSymbol()]}getAttributeHash(){var e;return((e=this.attributes)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new F({attributes:p(this.attributes),backgroundColor:p(this.backgroundColor),dotBlendingEnabled:p(this.dotBlendingEnabled),dotShape:p(this.dotShape),dotSize:p(this.dotSize),dotValue:p(this.dotValue),legendOptions:p(this.legendOptions),outline:p(this.outline),referenceScale:p(this.referenceScale),seed:p(this.seed),visualVariables:p(this.visualVariables),authoringInfo:p(this.authoringInfo)})}getControllerHash(){var t;return`${(t=this.attributes)==null?void 0:t.map(s=>s.field||s.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes??[])s.valueExpression&&await N(e,t,s.valueExpression),s.field&&e.add(s.field)}};i([r({type:[se],json:{write:!0}})],h.prototype,"attributes",void 0),i([r({type:w,json:{write:!0}})],h.prototype,"backgroundColor",void 0),i([r({type:Boolean,json:{write:!0}})],h.prototype,"dotBlendingEnabled",void 0),i([r({type:String,json:{write:!1}})],h.prototype,"dotShape",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotSize",void 0),i([r({type:Ne,json:{write:!0}})],h.prototype,"legendOptions",void 0),i([r({type:J,json:{default:null,write:!0}})],h.prototype,"outline",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotValue",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"referenceScale",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"seed",void 0),i([B({dotDensity:"dot-density"})],h.prototype,"type",void 0),h=F=i([E("esri.renderers.DotDensityRenderer")],h);const Le=h;let M=class extends U.ClonableMixin(L){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};i([r({type:String,json:{write:!0}})],M.prototype,"minLabel",void 0),i([r({type:String,json:{write:!0}})],M.prototype,"maxLabel",void 0),i([r({type:String,json:{write:!0}})],M.prototype,"title",void 0),M=i([E("esri.renderers.support.HeatmapLegendOptions")],M);var H;function Q(e){if(e!=null){const{maxDensity:t,minDensity:s,radius:o}=e;if(t!=null||s!=null||o!=null){const{blurRadius:d,maxPixelIntensity:a,minPixelIntensity:u,...f}=e;return f}}return e}let y=H=class extends P{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new T({ratio:0,color:new w("rgba(255, 140, 0, 0)")}),new T({ratio:.75,color:new w("rgba(255, 140, 0, 1)")}),new T({ratio:.9,color:new w("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null}normalizeCtorArgs(e){return Q(e)}get blurRadius(){return Ie(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,s=this.minPixelIntensity;this._set("radius",Ee(e)),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",s*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity)}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity)}get _pixelIntensityToDensity(){return 24/(De**2*this.blurRadius**4)}read(e,t){e=Q(e),super.read(e,t)}getSymbol(){return new X}async getSymbolAsync(){return this.getSymbol()}get symbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const s=this.field,o=this.valueExpression;s&&typeof s=="string"&&ye(e,t,s),o&&typeof o=="string"&&await N(e,t,o)}getAttributeHash(){return""}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new H({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:p(this.colorStops),field:this.field,legendOptions:p(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:de,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],y.prototype,"authoringInfo",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"blurRadius",null),i([r({type:[T],json:{write:{isRequired:!0}}})],y.prototype,"colorStops",void 0),i([r({type:String,json:{write:!0}})],y.prototype,"field",void 0),i([r({type:M,json:{write:!0}})],y.prototype,"legendOptions",void 0),i([r({type:Number,json:{write:!0}})],y.prototype,"maxDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"maxPixelIntensity",null),i([r({type:Number,json:{write:!0}})],y.prototype,"minDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"minPixelIntensity",null),i([r({type:Number,cast:Y,json:{write:!0}})],y.prototype,"radius",void 0),i([r({type:Number,range:{min:0},json:{default:0,write:!0}})],y.prototype,"referenceScale",void 0),i([B({heatmap:"heatmap"})],y.prototype,"type",void 0),i([r({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],y.prototype,"valueExpression",void 0),i([r({type:String})],y.prototype,"valueExpressionTitle",void 0),i([r({readOnly:!0})],y.prototype,"_pixelIntensityToDensity",null),y=H=i([E("esri.renderers.HeatmapRenderer")],y);const re=y;let R=class extends U.ClonableMixin(L){constructor(){super(...arguments),this.color=new w([0,0,0,0]),this.label=null,this.threshold=0}};i([r({type:w,json:{write:!0}})],R.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],R.prototype,"label",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],R.prototype,"threshold",void 0),R=i([E("esri.renderers.support.OthersCategory")],R);const Oe={base:Ve,key:"type",typeMap:{size:Me,opacity:he}};let m=class extends z(U.ClonableMixin(P)){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new w([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new R,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart",this.visualVariables=null}getSymbol(){var e;return new X({size:this.size?this.size/2+(((e=this.outline)==null?void 0:e.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}get symbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(ae)}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return this.symbols.reduce((e,t)=>e+JSON.stringify(t),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes)s.valueExpression&&await N(e,t,s.valueExpression),s.field&&e.add(s.field)}};i([r({type:[se],json:{write:!0}})],m.prototype,"attributes",void 0),i([r(ce)],m.prototype,"backgroundFillSymbol",void 0),i([r({type:w,json:{write:!0}})],m.prototype,"defaultColor",void 0),i([r({type:String,json:{write:!0}})],m.prototype,"defaultLabel",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],m.prototype,"holePercentage",void 0),i([r({type:R,json:{write:!0}})],m.prototype,"othersCategory",void 0),i([r({type:Re,json:{write:!0}})],m.prototype,"legendOptions",void 0),i([r({type:J,json:{default:null,write:!0}})],m.prototype,"outline",void 0),i([r({type:Number,cast:Y,json:{write:!0}})],m.prototype,"size",void 0),i([B({pieChart:"pie-chart"})],m.prototype,"type",void 0),i([r({types:[Oe]})],m.prototype,"visualVariables",void 0),m=i([E("esri.renderers.PieChartRenderer")],m);const qe=m,ht={key:"type",base:P,typeMap:{heatmap:re,simple:ee,"unique-value":te,"class-breaks":W,"dot-density":Le,dictionary:Ce,"pie-chart":qe},errorContext:"renderer"},mt={key:"type",base:P,typeMap:{simple:ee,"unique-value":te,"class-breaks":W,heatmap:re},errorContext:"renderer",validate:Ae};function Ae(e){switch(e.type){case"simple":return ke(e);case"unique-value":return Fe(e);case"class-breaks":return He(e);case"heatmap":return e}}function ke(e){if(e.symbol)return e;V.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function Fe(e){const t=e.uniqueValueInfos,s=t==null?void 0:t.filter(({symbol:o,label:d},a)=>(o||V.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${a}] ${d}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.uniqueValueInfos=s),e}function He(e){const t=e.classBreakInfos,s=t==null?void 0:t.filter(({symbol:o,label:d},a)=>(o||V.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${a}] ${d}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.classBreakInfos=s),e}export{ht as m,mt as u};
