import{r as e}from"./tslib.es6-B3Jf3DVX.js";import{n as h}from"./geometry-D964gYQX.js";import{n as u}from"./jsonMap-0cxwUWs2.js";import{f as y}from"./assets-C43MgM-v.js";import{m as i,a as m,w as c,g as v}from"./subclass-BZA_h8Db.js";import{r as l}from"./writer-DNAwXnhG.js";import{f as w}from"./jsonUtils-CEfjT-BK.js";import{p as S}from"./TimeExtent-DocT5yPf.js";import{g as f}from"./Point-Cg0-ChZE.js";import"./Extent-Bf3YTe7m.js";import"./Polyline-D9YkgmM_.js";import"./mathUtils-C4_ghTv4.js";import"./index-Bh2oEzTI.js";import"./Accessor-BLX9ikPh.js";import"./timeUtils-8fb_2oAt.js";import"./date-DlqISzcw.js";import"./locale-C9TlLpzi.js";import"./cast-Bjksrh93.js";var s;let o=s=class extends y{constructor(r){super(r),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new s({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};e([i({type:[String],json:{write:!0}})],o.prototype,"groupByFields",void 0),e([i({type:Number,json:{write:!0}})],o.prototype,"topCount",void 0),e([i({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),o=s=e([m("esri.rest.support.TopFilter")],o);const R=o;var n;const a=new u({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),d=new u({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let t=n=class extends y{constructor(r){super(r),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(r,p){p.resultOffset=this.start,p.resultRecordCount=this.num||10}clone(){return new n(v({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};e([i({type:Boolean,json:{write:!0}})],t.prototype,"cacheHint",void 0),e([i({type:Number,json:{write:{overridePolicy:r=>({enabled:r>0})}}})],t.prototype,"distance",void 0),e([i({types:h,json:{read:w,write:!0}})],t.prototype,"geometry",void 0),e([i({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),e([i({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),e([i({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),e([i({json:{write:!0}})],t.prototype,"objectIds",void 0),e([i({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),e([i({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),e([i({type:f,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),e([i({type:String,json:{write:!0}})],t.prototype,"resultType",void 0),e([i({json:{write:!0}})],t.prototype,"returnGeometry",void 0),e([i({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],t.prototype,"returnM",void 0),e([i({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],t.prototype,"returnZ",void 0),e([i({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),e([l("start"),l("num")],t.prototype,"writeStart",null),e([i({type:String,json:{read:{source:"spatialRel",reader:a.read},write:{target:"spatialRel",writer:a.write}}})],t.prototype,"spatialRelationship",void 0),e([i({type:S,json:{write:!0}})],t.prototype,"timeExtent",void 0),e([i({type:R,json:{write:!0}})],t.prototype,"topFilter",void 0),e([i({type:String,json:{read:d.read,write:{writer:d.write,overridePolicy(r){return{enabled:r!=null&&this.distance!=null&&this.distance>0}}}}})],t.prototype,"units",void 0),e([i({type:String,json:{write:!0}})],t.prototype,"where",void 0),t=n=e([m("esri.rest.support.TopFeaturesQuery")],t),t.from=c(t);const G=t;export{G as default};