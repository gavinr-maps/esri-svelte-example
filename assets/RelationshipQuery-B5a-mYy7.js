import{c as p,r as e,m as o,a as u,L as a}from"./Accessor-BmwT4B0c.js";import{S as d}from"./JSONSupport-DcrLLGjL.js";import{r as s}from"./writer-DKgfqj4X.js";import{g as l}from"./Point-Cz2JYYmX.js";import{R as m}from"./Query-B_2mhyL4.js";import"./cast-CsZslgGN.js";import"./index-4eY77cms.js";import"./enumeration-DpvDkLNI.js";import"./jsonUtils-CwFG8yN4.js";import"./Extent-g5W9hy0j.js";import"./Polyline-s-JzsQqo.js";import"./mathUtils-Cfq9PL9W.js";import"./typeUtils-B6WBEKDM.js";import"./Field-BDG0QV_T.js";import"./fieldType-CBeoJWlv.js";import"./FullTextSearch-CBnxSwz4.js";import"./Clonable-Z-AWS-16.js";import"./TimeExtent-BO6BsF_x.js";import"./timeUtils-C1c_L2Fd.js";import"./Promise-DfET-uns.js";var n;let t=n=class extends d{constructor(r){super(r),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(r,i){i.historicMoment=r&&r.getTime()}writeStart(r,i){i.resultOffset=this.start,i.resultRecordCount=this.num||10,this.start>0&&this.where==null&&(i.definitionExpression="1=1")}clone(){return new n(p({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};e([o({type:Boolean,json:{write:!0}})],t.prototype,"cacheHint",void 0),e([o({type:m,json:{write:!0}})],t.prototype,"dynamicDataSource",void 0),e([o({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),e([o({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),e([o({type:Date})],t.prototype,"historicMoment",void 0),e([s("historicMoment")],t.prototype,"_writeHistoricMoment",null),e([o({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),e([o({json:{write:!0}})],t.prototype,"objectIds",void 0),e([o({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),e([o({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),e([o({type:l,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),e([o({json:{write:!0}})],t.prototype,"relationshipId",void 0),e([o({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),e([s("start"),s("num")],t.prototype,"writeStart",null),e([o({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),e([o({json:{write:!0}})],t.prototype,"returnGeometry",void 0),e([o({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],t.prototype,"returnM",void 0),e([o({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],t.prototype,"returnZ",void 0),e([o({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],t.prototype,"where",void 0),t=n=e([u("esri.rest.support.RelationshipQuery")],t),t.from=a(t);const A=t;export{A as default};
