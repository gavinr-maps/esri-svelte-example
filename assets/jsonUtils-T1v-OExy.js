import{d as i,y as r,a1 as w,dt as ue,f as x,aU as q,b as pe,s as P,U as Y,c6 as ye,F as de,il as ce,aV as y,im as he,fw as O,aS as K,dC as me,io as ge,d9 as Z,dc as X,c7 as F,bb as A,eq as ee,Y as be,dJ as fe,ip as we,db as te,iq as ve,q as Se,em as xe,ar as $e}from"./index-B1qcMJFy.js";import{v as L,p as D,j as _e,n as je,A as ie,w as se}from"./UniqueValueRenderer-0DBTeu6a.js";import{e as Ie}from"./LRUCache-BtWa1HuP.js";import{r as Ve}from"./Version-D0C4RPiX.js";import{Z as Pe}from"./FieldsIndex-DA0UbGLz.js";import{f as De}from"./OverrideHelper-DlLhMkRM.js";import{v as Ee,q as Re}from"./utils-y0bK7WMB.js";import{a as qe,e as Ce,c as Ne}from"./heatmapUtils-BYQ7d-zD.js";var H;let C=H=class extends q{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new H({color:this.color&&this.color.clone(),ratio:this.ratio})}};i([r({type:w,json:{type:[ue],default:null,write:!0}})],C.prototype,"color",void 0),i([r({type:Number,json:{write:!0}})],C.prototype,"ratio",void 0),C=H=i([x("esri.renderers.support.HeatmapColorStop")],C);const N=C,Q="esri.renderers.support.DictionaryLoader",Te={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class re{constructor(t,s,o){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new Ie(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=t,this.config=s,this.fieldMap=o}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){let o;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{o=await this._dictionaryPromise}catch(p){if(pe(p))return this._dictionaryPromise=null,null}const a=this._dictionaryVersion&&this._dictionaryVersion.since(4,0),u={};if(this.fieldMap)for(const p of this._symbolFields){const c=Ee(this.fieldMap[p],this._fieldIndex);if(c){const l=t.attributes[c];u[p]=a?l:l!=null?""+t.attributes[c]:""}else u[p]=""}let n=null;try{n=o==null?void 0:o(u,s)}catch{return null}if(!n||typeof n!="string"||n==="invalid")return null;const $=n.split(";"),j=[],m=[];for(const p of $)if(p)if(p.includes("po:")){const c=p.substr(3).split("|");if(c.length===3){const l=c[0],g=c[1];let b=c[2];if(g==="DashTemplate")b=b.split(" ").map(v=>Number(v));else if(g==="Color"){const v=new w(b).toRgba();b=[v[0],v[1],v[2],255*v[3]]}else b=Number(b);m.push({primitiveName:l,propertyName:g,value:b,defaultValue:null})}}else if(p.includes("|")){for(const c of p.split("|"))if(this._itemNames.has(c)){j.push(c);break}}else this._itemNames.has(p)&&j.push(p);const E=t.geometry==null||!t.geometry.hasZ&&t.geometry.type==="point";return this._cimPartsToCIMSymbol(t,j,m,E,s)}async fetchResources(t){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void P.getLogger(Q).error("no valid URL!");const s=Y(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:t!=null?t.signal:null}),[{data:o}]=await Promise.all([s,ye()]);if(!o)throw this._dictionaryPromise=null,new de("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:a,dictionary_version:u,expression:n,itemsNames:$}=o,j=n;let m=!1;u&&(this._dictionaryVersion=Ve.parse(u),m=this._dictionaryVersion.since(4,0)),this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set($),this._symbolFields=a.symbol;const E={};if(this.config){const l=this.config;for(const g in l)E[g]=l[g]}if(a.configuration)for(const l of a.configuration)E.hasOwnProperty(l.name)||(E[l.name]=l.value);const p=[];if(t!=null&&t.fields&&this.fieldMap)for(const l in this.fieldMap){const g=this.fieldMap[l],b=t.fields.filter(v=>v.name.toLowerCase()===(g==null?void 0:g.toLowerCase()));b.length>0&&p.push({...b[0],type:m?b[0].type:"esriFieldTypeString"})}p.length>0&&(this._fieldIndex=new Pe(p));const c=ce(j,t!=null?t.spatialReference:null,p,E).then(l=>{const g={scale:0};return(b,v)=>{if(l==null)return null;const ae=l.repurposeFeature({geometry:null,attributes:b});return g.scale=v!=null?v.scale??void 0:void 0,l.evaluate({$feature:ae,$view:g},l.services)}}).catch(l=>(P.getLogger(Q).error("Creating dictinoary expression failed:",l),null));return this._dictionaryPromise=c,c}async _cimPartsToCIMSymbol(t,s,o,a,u){const n=new Array(s.length);for(let m=0;m<s.length;m++)n[m]=this._getSymbolPart(s[m],u);let $=await Promise.all(n);const j=this.fieldMap;if(j){$=y($);for(const m of $)De.applyDictionaryTextOverrides(m,t,j,this._fieldIndex,Re(m))}return new he({data:this._combineSymbolParts($,o,a)})}async _getSymbolPart(t,s){const o=this._symbolCache.get(t);if(o)return o;if(this._ongoingRequests.has(t))return this._ongoingRequests.get(t).then(n=>n.data);const a=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,t),u=Y(a,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(t,u),u.finally(()=>this._ongoingRequests.delete(t));try{const n=await u;return this._symbolCache.put(t,n.data),n.data}catch(n){throw n}}_combineSymbolParts(t,s,o){if(!t||t.length===0)return null;const a={...t[0]};if(t.length>1){a.symbolLayers=[];for(const u of t){const n=u;a.symbolLayers.unshift(...n.symbolLayers)}}return o&&(a.callout=Te),{type:"CIMSymbolReference",symbol:a,primitiveOverrides:s}}}var k;let S=k=class extends L(D){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new re(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,s,o){o!=null&&o.origin||super.writeVisualVariables(e,t,s,o)}clone(){return new k({config:y(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:y(this.fieldMap),url:y(this.url),visualVariables:y(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await O(e,t,this.scaleExpression);for(const s in this.fieldMap){const o=this.fieldMap[s];t.has(o)&&e.add(o)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};i([r({type:re})],S.prototype,"_loader",null),i([r({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],S.prototype,"config",void 0),i([r({type:Object,json:{write:!0}})],S.prototype,"fieldMap",void 0),i([r({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],S.prototype,"scaleExpression",void 0),i([K("scaleExpression")],S.prototype,"writeData",null),i([r({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],S.prototype,"scaleExpressionTitle",void 0),i([r({type:String,json:{write:!0}})],S.prototype,"url",void 0),i([K("visualVariables")],S.prototype,"writeVisualVariables",null),S=k=i([x("esri.renderers.DictionaryRenderer")],S);const Me=S;var B;let _=B=class extends q{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(P.getLogger(this).error(".field: field must be a string value"),null):ge(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){var e;return new B({color:(e=this.color)==null?void 0:e.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:w,json:{type:[Number],write:!0}})],_.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],_.prototype,"field",void 0),i([me("field")],_.prototype,"castField",null),i([r({type:String,json:{write:!0}})],_.prototype,"label",void 0),i([r({type:String,json:{write:!0}})],_.prototype,"valueExpression",void 0),i([r({type:String,json:{write:!0}})],_.prototype,"valueExpressionTitle",void 0),_=B=i([x("esri.renderers.support.AttributeColorInfo")],_);const oe=_;var z;let T=z=class extends q{constructor(){super(...arguments),this.unit=null}clone(){return new z({unit:this.unit})}};i([r({type:String,json:{write:!0}})],T.prototype,"unit",void 0),T=z=i([x("esri.renderers.support.DotDensityLegendOptions")],T);const Oe=T;var U;let h=U=class extends L(D){constructor(e){super(e),this.attributes=null,this.backgroundColor=new w([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new Z,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new X({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){var e;return((e=this.attributes)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new U({attributes:y(this.attributes),backgroundColor:y(this.backgroundColor),dotBlendingEnabled:y(this.dotBlendingEnabled),dotShape:y(this.dotShape),dotSize:y(this.dotSize),dotValue:y(this.dotValue),legendOptions:y(this.legendOptions),outline:y(this.outline),referenceScale:y(this.referenceScale),seed:y(this.seed),visualVariables:y(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){var t;return`${(t=this.attributes)==null?void 0:t.map(s=>s.field||s.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes??[])s.valueExpression&&await O(e,t,s.valueExpression),s.field&&e.add(s.field)}};i([r({type:[oe],json:{write:!0}})],h.prototype,"attributes",void 0),i([r({type:w,json:{write:!0}})],h.prototype,"backgroundColor",void 0),i([r({type:Boolean,json:{write:!0}})],h.prototype,"dotBlendingEnabled",void 0),i([r({type:String,json:{write:!1}})],h.prototype,"dotShape",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotSize",void 0),i([r({type:Oe,json:{write:!0}})],h.prototype,"legendOptions",void 0),i([r({type:Z,json:{default:null,write:!0}})],h.prototype,"outline",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotValue",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"referenceScale",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"seed",void 0),i([F({dotDensity:"dot-density"})],h.prototype,"type",void 0),h=U=i([x("esri.renderers.DotDensityRenderer")],h);const Fe=h;let R=class extends A(q){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};i([r({type:String,json:{write:!0}})],R.prototype,"minLabel",void 0),i([r({type:String,json:{write:!0}})],R.prototype,"maxLabel",void 0),i([r({type:String,json:{write:!0}})],R.prototype,"title",void 0),R=i([x("esri.renderers.support.HeatmapLegendOptions")],R);var J;function W(e){if(e!=null){const{maxDensity:t,minDensity:s,radius:o}=e;if(t!=null||s!=null||o!=null){const{blurRadius:a,maxPixelIntensity:u,minPixelIntensity:n,...$}=e;return $}}return e}let d=J=class extends D{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new N({ratio:0,color:new w("rgba(255, 140, 0, 0)")}),new N({ratio:.75,color:new w("rgba(255, 140, 0, 1)")}),new N({ratio:.9,color:new w("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null,this._warnedProps={blurRadius:!1,maxPixelIntensity:!1,minPixelIntensity:!1}}normalizeCtorArgs(e){return W(e)}get blurRadius(){return qe(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,s=this.minPixelIntensity;this._set("radius",Ce(e)),this._warnAboutDeprecatedGaussianBlurProp("blurRadius","radius"),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",s*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("maxPixelIntensity","maxDensity")}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity),this._warnAboutDeprecatedGaussianBlurProp("minPixelIntensity","minDensity")}get _pixelIntensityToDensity(){return 24/(Ne**2*this.blurRadius**4)}_warnAboutDeprecatedGaussianBlurProp(e,t){this._warnedProps[e]||be(this).getDefaultOrigin()==="user"&&(this._warnedProps[e]=!0,fe(()=>{we(P.getLogger(this),e,{replacement:`${String(t)} (suggested value: ${this._get(t)})`,version:"4.24"})}))}read(e,t){e=W(e),super.read(e,t)}getSymbol(){return new te}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const s=this.field,o=this.valueExpression;s&&typeof s=="string"&&ve(e,t,s),o&&typeof o=="string"&&await O(e,t,o)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new J({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:y(this.colorStops),field:this.field,legendOptions:y(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:_e,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],d.prototype,"authoringInfo",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],d.prototype,"blurRadius",null),i([r({type:[N],json:{write:!0}})],d.prototype,"colorStops",void 0),i([r({type:String,json:{write:!0}})],d.prototype,"field",void 0),i([r({type:R,json:{write:!0}})],d.prototype,"legendOptions",void 0),i([r({type:Number,json:{write:!0}})],d.prototype,"maxDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],d.prototype,"maxPixelIntensity",null),i([r({type:Number,json:{write:!0}})],d.prototype,"minDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],d.prototype,"minPixelIntensity",null),i([r({type:Number,cast:ee,json:{write:!0}})],d.prototype,"radius",void 0),i([r({type:Number,range:{min:0},json:{default:0,write:!0}})],d.prototype,"referenceScale",void 0),i([F({heatmap:"heatmap"})],d.prototype,"type",void 0),i([r({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],d.prototype,"valueExpression",void 0),i([r({type:String})],d.prototype,"valueExpressionTitle",void 0),i([r({readOnly:!0})],d.prototype,"_pixelIntensityToDensity",null),d=J=i([x("esri.renderers.HeatmapRenderer")],d);const ne=d;let V=class extends A(q){constructor(){super(...arguments),this.color=new w([0,0,0,0]),this.label=null,this.threshold=0}};i([r({type:w,json:{write:!0}})],V.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],V.prototype,"label",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],V.prototype,"threshold",void 0),V=i([x("esri.renderers.support.OthersCategory")],V);let M=class extends A(q){constructor(){super(...arguments),this.title=null}};i([r({type:String,json:{write:!0}})],M.prototype,"title",void 0),M=i([x("esri.renderers.support.PieChartLegendOptions")],M);let f=class extends L(A(D)){constructor(t){super(t),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new w([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new V,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart"}getSymbol(){var t;return new te({size:this.size?this.size/2+(((t=this.outline)==null?void 0:t.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(Se)}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((t,s)=>t+s.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((t,s)=>t+JSON.stringify(s),"")}async collectRequiredFields(t,s){await this.collectVVRequiredFields(t,s);for(const o of this.attributes)o.valueExpression&&await O(t,s,o.valueExpression),o.field&&t.add(o.field)}};i([r({type:[oe],json:{write:!0}})],f.prototype,"attributes",void 0),i([r({type:X,json:{default:null,write:!0}})],f.prototype,"backgroundFillSymbol",void 0),i([r({type:w,json:{write:!0}})],f.prototype,"defaultColor",void 0),i([r({type:String,json:{write:!0}})],f.prototype,"defaultLabel",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],f.prototype,"holePercentage",void 0),i([r({type:V,json:{write:!0}})],f.prototype,"othersCategory",void 0),i([r({type:M,json:{write:!0}})],f.prototype,"legendOptions",void 0),i([r({type:Z,json:{default:null,write:!0}})],f.prototype,"outline",void 0),i([r({type:Number,cast:ee,json:{write:!0}})],f.prototype,"size",void 0),i([F({pieChart:"pie-chart"})],f.prototype,"type",void 0),f=i([x("esri.renderers.PieChartRenderer")],f);const Ae=f;var G;let I=G=class extends L(D){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(s=>s.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new G({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:y(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};i([r({type:String,json:{write:!0}})],I.prototype,"description",void 0),i([r({type:String,json:{write:!0}})],I.prototype,"label",void 0),i([r(je)],I.prototype,"symbol",void 0),i([F({simple:"simple"})],I.prototype,"type",void 0),I=G=i([x("esri.renderers.SimpleRenderer")],I);const le=I,Le={key:"type",base:D,typeMap:{heatmap:ne,simple:le,"unique-value":ie,"class-breaks":se,"dot-density":Fe,dictionary:Me,"pie-chart":Ae},errorContext:"renderer"},rt={key:"type",base:D,typeMap:{simple:le,"unique-value":ie,"class-breaks":se,heatmap:ne},errorContext:"renderer",validate:He};function He(e){switch(e.type){case"simple":return ke(e);case"unique-value":return Be(e);case"class-breaks":return ze(e);case"heatmap":return e}}function ke(e){if(e.symbol)return e;P.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function Be(e){const t=e.uniqueValueInfos,s=t==null?void 0:t.filter(({symbol:o,label:a},u)=>(o||P.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${u}] ${a}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.uniqueValueInfos=s),e}function ze(e){const t=e.classBreakInfos,s=t==null?void 0:t.filter(({symbol:o,label:a},u)=>(o||P.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${u}] ${a}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.classBreakInfos=s),e}function ot(e,t){return Je(e,null,t)}const Ue=xe({types:Le});function Je(e,t,s){return e?e&&(e.styleName||e.styleUrl)&&e.type!=="uniqueValue"?(s!=null&&s.messages&&s.messages.push(new $e("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:s})),null):Ue(e,t,s):null}export{Le as a,N as l,le as m,Je as o,ot as t,rt as u};
