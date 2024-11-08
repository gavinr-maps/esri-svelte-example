import{r as e}from"./tslib.es6-B3Jf3DVX.js";import{n as q}from"./geometry-D964gYQX.js";import{i as B}from"./Clonable-D3rtuBWg.js";import{n as R,i as D}from"./jsonMap-0cxwUWs2.js";import{f as g}from"./assets-C43MgM-v.js";import{m as r,a as m,w as f,n as O,c as j}from"./subclass-BZA_h8Db.js";import{r as d}from"./enumeration-Ba5njXdz.js";import{f as M}from"./jsonUtils-CEfjT-BK.js";import{R as x}from"./queryUtils-O-WFKoZd.js";import{m as V,a as I,s as Z}from"./Query-5Xpquc1r.js";import{h as L}from"./date-DlqISzcw.js";import{g as S}from"./Point-Cg0-ChZE.js";import"./Extent-Bf3YTe7m.js";import"./Polyline-D9YkgmM_.js";import"./writer-DNAwXnhG.js";import"./mathUtils-C4_ghTv4.js";import"./Accessor-BLX9ikPh.js";import"./index-Bh2oEzTI.js";import"./projection-B971H0Re.js";import"./SimpleObservable-KocWTzVy.js";import"./vec3f64-BLpZdpfb.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./normalizeUtils-EVmAQ-ak.js";import"./normalizeUtilsCommon-dT81xWiM.js";import"./utils-6jMaHUrH.js";import"./utils-Bema0iXE.js";import"./json-Wa8cmqdu.js";import"./cast-Bjksrh93.js";import"./DataLayerSource-BKkswDvG.js";import"./Field-ybkHhtnK.js";import"./fieldType-BuzM0UHS.js";import"./FullTextSearch-Csd1Hktu.js";import"./TimeExtent-DocT5yPf.js";import"./timeUtils-8fb_2oAt.js";import"./locale-C9TlLpzi.js";let l=class extends B(g){constructor(i){super(i),this.alias=null,this.expression=null,this.field=null,this.responseType=null}};e([r({type:String,json:{write:!0}})],l.prototype,"alias",void 0),e([r({type:String,json:{write:!0}})],l.prototype,"expression",void 0),e([r({type:String,json:{write:!0}})],l.prototype,"field",void 0),e([r({type:String,json:{write:!0}})],l.prototype,"responseType",void 0),l=e([m("esri.rest.support.BinParametersAttributes")],l);const w=l;l.from=f(l);const _=new R({naturalLog:"natural-log",squareRoot:"square-root"});let s=class extends B(g){constructor(i){super(i),this.expression=null,this.field=null,this.firstDayOfWeek=null,this.hideUpperBound=null,this.splitByAttributes=null,this.stackByAttributes=null,this.transformation=null}};e([r({type:String,json:{write:!0}})],s.prototype,"expression",void 0),e([r({type:String,json:{name:"onField",write:!0}})],s.prototype,"field",void 0),e([r({type:String,json:{write:!0}})],s.prototype,"firstDayOfWeek",void 0),e([r({type:String,json:{write:!0}})],s.prototype,"hideUpperBound",void 0),e([r({type:w,json:{write:{target:{splitBy:{type:String},splitByField:{type:String},splitByAlias:{type:String}},writer:(t,i)=>{t.field!=null&&(i.splitByField=t.field),t.expression!=null&&(i.splitBy=t.expression),t.alias!=null&&(i.splitByAlias=t.alias)}},read:{source:["splitBy","splitByField","splitByAlias"],reader:(t,i)=>new w({field:i.splitByField,expression:i.splitBy,alias:i.splitByAlias})}}})],s.prototype,"splitByAttributes",void 0),e([r({type:w,json:{write:{target:{stackBy:{type:String},stackByField:{type:String},stackByAlias:{type:String},jsonStyle:{type:String}},writer:(t,i)=>{t.field!=null&&(i.stackByField=t.field),t.expression!=null&&(i.stackBy=t.expression),t.alias!=null&&(i.stackByAlias=t.alias),t.responseType!=null&&(i.jsonStyle=t.responseType)},overridePolicy(){var t,i;return{enabled:((t=this.stackByAttributes)==null?void 0:t.field)!=null||((i=this.stackByAttributes)==null?void 0:i.expression)!=null}}},read:{source:["stackBy","stackByField","stackByAlias","jsonStyle"],reader:(t,i)=>new w({field:i.stackByField,expression:i.stackBy,alias:i.stackByAlias,responseType:i.jsonStyle})}}})],s.prototype,"stackByAttributes",void 0),e([d(_)],s.prototype,"transformation",void 0),s=e([m("esri.rest.support.BinParametersBase")],s);const v=s,H=D()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),T="percent-of-total",z="field",N=t=>{let i=class extends t{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let o=this._get("normalizationType");const h=!!this.normalizationField,b=this.normalizationTotal!=null;return h||b?(o=h&&z||b&&T||null,h&&b&&O.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):o!==z&&o!==T||(o=null),o}set normalizationType(o){this._set("normalizationType",o)}};return e([r({type:String,json:{name:"parameters.normalizationField",write:!0}})],i.prototype,"normalizationField",void 0),e([r({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],i.prototype,"normalizationMaxValue",void 0),e([r({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],i.prototype,"normalizationMinValue",void 0),e([r({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],i.prototype,"normalizationTotal",void 0),e([d(H,{name:"parameters.normalizationType"})],i.prototype,"normalizationType",null),i=e([m("esri.rest.support.NormalizationBinParametersMixin")],i),i};function $(t,i,o){j(o,t instanceof Date?t.getTime():t,i)}let p=class extends N(v){constructor(i){super(i),this.bins=null,this.end=null,this.start=null,this.type="auto-interval"}};e([r({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],p.prototype,"bins",void 0),e([r({json:{name:"parameters.end",write:{writer:$}}})],p.prototype,"end",void 0),e([r({json:{name:"parameters.start",write:{writer:$}}})],p.prototype,"start",void 0),e([d({autoIntervalBin:"auto-interval"},{readOnly:!0})],p.prototype,"type",void 0),p=e([m("esri.rest.support.AutoIntervalBinParameters")],p);const U=p;p.from=f(p);const W=D()({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});let y=class extends B(g){constructor(i){super(i),this.value=null,this.units=null}};e([r({type:Number,json:{name:"number",write:!0}})],y.prototype,"value",void 0),e([d(W,{name:"unit"})],y.prototype,"units",void 0),y=e([m("esri.rest.support.DateBinTimeInterval")],y);const A=y;y.from=f(y);function k(t,i,o){j(o,typeof t=="string"?t:t==null?void 0:t.getTime(),i)}function F(t,i){const o=t.parameters[i];return o?typeof o=="string"?o:new Date(o):null}let a=class extends v{constructor(i){super(i),this.end=null,this.interval=null,this.offset=null,this.start=null,this.type="date"}};e([r({cast:t=>t?typeof t=="string"?t:new Date(t):null,json:{name:"parameters.end",read:{reader:(t,i)=>F(i,"end")},write:{writer:k}}})],a.prototype,"end",void 0),e([r({type:A,json:{name:"parameters",write:!0}})],a.prototype,"interval",void 0),e([r({type:A,json:{name:"parameters.offset",write:!0}})],a.prototype,"offset",void 0),e([r({cast:t=>t?typeof t=="string"?t:new Date(t):null,json:{name:"parameters.start",read:{reader:(t,i)=>F(i,"start")},write:{writer:k}}})],a.prototype,"start",void 0),e([d({dateBin:"date"},{readOnly:!0})],a.prototype,"type",void 0),a=e([m("esri.rest.support.DateBinParameters")],a);const Q=a;a.from=f(a);function C(t){return t[0]instanceof Date}function E(t,i,o){j(o,t&&C(t)?t.map(h=>h.getTime()):t,i)}let c=class extends v{constructor(i){super(i),this.boundaries=null,this.type="fixed-boundaries"}};e([r({json:{name:"parameters.boundaries",write:{writer:E}}})],c.prototype,"boundaries",void 0),e([d({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],c.prototype,"type",void 0),c=e([m("esri.rest.support.FixedBoundariesBinParameters")],c);const G=c;c.from=f(c);function P(t,i,o){j(o,t instanceof Date?t.getTime():t,i)}let u=class extends N(v){constructor(t){super(t),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};e([r({json:{name:"parameters.end",write:{writer:P}}})],u.prototype,"end",void 0),e([r({type:Number,json:{name:"parameters.interval",write:!0}})],u.prototype,"interval",void 0),e([r({json:{name:"parameters.start",write:{writer:P}}})],u.prototype,"start",void 0),e([d({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],u.prototype,"type",void 0),u=e([m("esri.rest.support.FixedIntervalBinParameters")],u);const J=u;u.from=f(u);const K=new R({asc:"ascending",desc:"descending"}),X={base:v,key:"type",typeMap:{"auto-interval":U,date:Q,"fixed-boundaries":G,"fixed-interval":J}};let n=class extends B(g){constructor(t){super(t),this.binParameters=null,this.binOrder="ascending",this.cacheHint=void 0,this.datumTransformation=null,this.defaultSpatialReference=null,this.distance=void 0,this.geometry=null,this.lowerBoundaryAlias=null,this.outSpatialReference=null,this.outStatistics=null,this.quantizationParameters=null,this.returnDistinctValues=null,this.spatialRelationship="intersects",this.upperBoundaryAlias=null,this.units=null,this.where="1=1"}set outTimeZone(t){this._set("outTimeZone",t),t&&!L(t)&&O.getLogger(this).warn("#outTimeZone",`the parsed value '${t}' may not be a valid IANA time zone`)}};e([r({types:X,json:{name:"bin",write:!0}})],n.prototype,"binParameters",void 0),e([d(K)],n.prototype,"binOrder",void 0),e([r({type:Boolean,json:{write:!0}})],n.prototype,"cacheHint",void 0),e([r({json:{write:!0}})],n.prototype,"datumTransformation",void 0),e([r({type:S,json:{name:"defaultSR",write:!0}})],n.prototype,"defaultSpatialReference",void 0),e([r({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],n.prototype,"distance",void 0),e([r({types:q,json:{read:M,write:!0}})],n.prototype,"geometry",void 0),e([r({type:String,json:{write:!0}})],n.prototype,"lowerBoundaryAlias",void 0),e([r({type:S,json:{name:"outSR",write:!0}})],n.prototype,"outSpatialReference",void 0),e([r({type:[V],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.outStatistics!=null&&this.outStatistics.length>0}}}}})],n.prototype,"outStatistics",void 0),e([r({value:null,json:{name:"outTimeReference",read:{reader:t=>t.ianaTimeZone},write:{writer:(t,i,o)=>{t&&(i[o]={ianaTimeZone:t})}}}})],n.prototype,"outTimeZone",null),e([r({type:I,json:{write:!0}})],n.prototype,"quantizationParameters",void 0),e([r({type:Boolean,json:{write:!0}})],n.prototype,"returnDistinctValues",void 0),e([d(Z,{name:"spatialRel"})],n.prototype,"spatialRelationship",void 0),e([r({type:String,json:{write:!0}})],n.prototype,"upperBoundaryAlias",void 0),e([r({type:String,json:{read:x.read,write:{writer:x.write,overridePolicy(t){return{enabled:t!=null&&this.distance!=null&&this.distance>0}}}}})],n.prototype,"units",void 0),e([r({type:String,json:{write:!0}})],n.prototype,"where",void 0),n=e([m("esri.rest.support.BinsQuery")],n);const Lt=n;n.from=f(n);export{Lt as default};