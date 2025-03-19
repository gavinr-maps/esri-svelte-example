import{r as e,m as t,$ as A,a as y,L as U,bb as E,W as G,c as b,h as z}from"./Accessor-BHnuXKD2.js";import{i as H,a as F,o as R}from"./cast-BA_-jlhc.js";import{S as m}from"./JSONSupport-CGdeqxpk.js";import{r as p}from"./enumeration-Cr5WIZs4.js";import{o as L,r as S}from"./writer-B2bQV2uU.js";import{g as C,j as K}from"./Point-XGrwlf63.js";import{f as Q}from"./jsonUtils-Cu7OBRmN.js";import{y as X,l as W}from"./typeUtils-BSg8Y507.js";import{y as Z}from"./Field-Cyk7Ur5d.js";import{p as J}from"./FullTextSearch-BWm_kPUE.js";import{w as Y}from"./Extent-CBBGeHb-.js";import{p as ee}from"./TimeExtent-J5qnUFx_.js";var P;let g=P=class extends m{constructor(r){super(r),this.type="map-layer"}clone(){const{mapLayerId:r,gdbVersion:i}=this;return new P({mapLayerId:r,gdbVersion:i})}};e([p({mapLayer:"map-layer"}),t({json:{write:{isRequired:!0}}})],g.prototype,"type",void 0),e([t({type:A,json:{write:{isRequired:!0}}})],g.prototype,"mapLayerId",void 0),e([t({type:String,json:{write:!0}})],g.prototype,"gdbVersion",void 0),g=P=e([y("esri.layers.support.source.MapLayerSource")],g);var $;let c=$=class extends m{constructor(r){super(r),this.type="query-table"}clone(){const{workspaceId:r,query:i,oidFields:s,spatialReference:n,geometryType:u}=this,h={workspaceId:r,query:i,oidFields:s,spatialReference:(n==null?void 0:n.clone())??void 0,geometryType:u};return new $(h)}};e([p({queryTable:"query-table"}),t({json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],c.prototype,"workspaceId",void 0),e([t({type:String,json:{write:!0}})],c.prototype,"query",void 0),e([t({type:String,json:{write:!0}})],c.prototype,"oidFields",void 0),e([t({type:C,json:{write:!0}})],c.prototype,"spatialReference",void 0),e([p(X)],c.prototype,"geometryType",void 0),c=$=e([y("esri.layers.support.source.QueryTableDataSource")],c);var O;let f=O=class extends m{constructor(r){super(r),this.type="raster"}clone(){const{workspaceId:r,dataSourceName:i}=this;return new O({workspaceId:r,dataSourceName:i})}};e([p({raster:"raster"}),t({json:{write:{isRequired:!0}}})],f.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],f.prototype,"dataSourceName",void 0),e([t({type:String,json:{write:!0}})],f.prototype,"workspaceId",void 0),f=O=e([y("esri.layers.support.source.RasterDataSource")],f);var V;let v=V=class extends m{constructor(r){super(r),this.type="table"}clone(){const{workspaceId:r,gdbVersion:i,dataSourceName:s}=this;return new V({workspaceId:r,gdbVersion:i,dataSourceName:s})}};e([p({table:"table"}),t({json:{write:{isRequired:!0}}})],v.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"workspaceId",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"gdbVersion",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"dataSourceName",void 0),v=V=e([y("esri.layers.support.source.TableDataSource")],v);var D,M;const te=H()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let a=D=class extends m{constructor(r){super(r),this.type="join-table"}readLeftTableSource(r,i,s){return B()(r,i,s)}castLeftTableSource(r){return E(N(),r)}readRightTableSource(r,i,s){return B()(r,i,s)}castRightTableSource(r){return E(N(),r)}clone(){const{leftTableKey:r,rightTableKey:i,leftTableSource:s,rightTableSource:n,joinType:u}=this,h={leftTableKey:r,rightTableKey:i,leftTableSource:(s==null?void 0:s.clone())??void 0,rightTableSource:(n==null?void 0:n.clone())??void 0,joinType:u};return new D(h)}};e([p({joinTable:"join-table"}),t({json:{write:{isRequired:!0}}})],a.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"leftTableKey",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"rightTableKey",void 0),e([t({json:{write:!0}})],a.prototype,"leftTableSource",void 0),e([L("leftTableSource")],a.prototype,"readLeftTableSource",null),e([F("leftTableSource")],a.prototype,"castLeftTableSource",null),e([t({json:{write:!0}})],a.prototype,"rightTableSource",void 0),e([L("rightTableSource")],a.prototype,"readRightTableSource",null),e([F("rightTableSource")],a.prototype,"castRightTableSource",null),e([p(te)],a.prototype,"joinType",void 0),a=D=e([y("esri.layers.support.source.JoinTableDataSource")],a);let T=null;function B(){return T||(T=G({types:N()})),T}let x=null;function N(){return x||(x={key:"type",base:null,typeMap:{"data-layer":d,"map-layer":g}}),x}const re={key:"type",base:null,typeMap:{"join-table":a,"query-table":c,raster:f,table:v}};let d=M=class extends m{constructor(r){super(r),this.type="data-layer"}clone(){const{fields:r,dataSource:i}=this;return new M({fields:r,dataSource:i})}};e([p({dataLayer:"data-layer"}),t({json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),e([t({type:[Z],json:{write:!0}})],d.prototype,"fields",void 0),e([t({types:re,json:{write:!0}})],d.prototype,"dataSource",void 0),d=M=e([y("esri.layers.support.source.DataLayerSource")],d),d.from=U(d);var I;const _=new R({upperLeft:"upper-left",lowerLeft:"lower-left"});let w=I=class extends m{constructor(r){super(r),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new I(b({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};e([t({type:Y,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],w.prototype,"extent",void 0),e([t({type:["view","edit"],json:{write:!0}})],w.prototype,"mode",void 0),e([t({type:String,json:{read:_.read,write:_.write}})],w.prototype,"originPosition",void 0),e([t({type:Number,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],w.prototype,"tolerance",void 0),w=I=e([y("esri.rest.support.QuantizationParameters")],w);const oe=w,ie=new R({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});var q;const k=new R({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let l=q=class extends m{constructor(r){super(r),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(r,i){this.statisticType!=="percentile-continuous"&&this.statisticType!=="percentile-discrete"||(i.statisticParameters=b(r))}clone(){return new q({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:b(this.statisticParameters)})}};e([t({type:Number,json:{write:!0}})],l.prototype,"maxPointCount",void 0),e([t({type:Number,json:{write:!0}})],l.prototype,"maxRecordCount",void 0),e([t({type:Number,json:{write:!0}})],l.prototype,"maxVertexCount",void 0),e([t({type:String,json:{write:!0}})],l.prototype,"onStatisticField",void 0),e([t({type:String,json:{write:!0}})],l.prototype,"outStatisticFieldName",void 0),e([t({type:String,json:{read:{source:"statisticType",reader:k.read},write:{target:"statisticType",writer:k.write}}})],l.prototype,"statisticType",void 0),e([t({type:Object})],l.prototype,"statisticParameters",void 0),e([S("statisticParameters")],l.prototype,"writeStatisticParameters",null),l=q=e([y("esri.rest.support.StatisticDefinition")],l);const se=l;var j;const ae=new R({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let o=j=class extends m{static from(r){return z(j,r)}constructor(r){super(r),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.returnTrueCurves=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(r){return typeof r=="number"||typeof r=="object"?r:null}writeHistoricMoment(r,i){i.historicMoment=r&&r.getTime()}writeParameterValues(r,i){if(r){const s={};for(const n in r){const u=r[n];Array.isArray(u)?s[n]=u.map(h=>h instanceof Date?h.getTime():h):u instanceof Date?s[n]=u.getTime():s[n]=u}i.parameterValues=s}}writeStart(r,i){i.resultOffset=this.start,i.resultRecordCount=this.num||10,i.where="1=1"}writeWhere(r,i){i.where=r||"1=1"}clone(){return new j(b({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment!=null?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,returnTrueCurves:this.returnTrueCurves,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};o.MAX_MAX_RECORD_COUNT_FACTOR=5,e([t({json:{write:!0}})],o.prototype,"aggregateIds",void 0),e([t({type:Boolean,json:{write:!0}})],o.prototype,"cacheHint",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"compactGeometryEnabled",void 0),e([t({json:{write:!0}})],o.prototype,"datumTransformation",void 0),e([F("datumTransformation")],o.prototype,"castDatumTransformation",null),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"defaultSpatialReferenceEnabled",void 0),e([t({type:Number,json:{write:!0}})],o.prototype,"distance",void 0),e([t({type:d,json:{write:!0}})],o.prototype,"dynamicDataSource",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"formatOf3DObjects",void 0),e([t({type:[J],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.fullText!=null&&this.fullText.length>0}}}}})],o.prototype,"fullText",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"gdbVersion",void 0),e([t({types:W,json:{read:Q,write:!0}})],o.prototype,"geometry",void 0),e([t({type:Number,json:{write:!0}})],o.prototype,"geometryPrecision",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"groupByFieldsForStatistics",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"having",void 0),e([t({type:Date})],o.prototype,"historicMoment",void 0),e([S("historicMoment")],o.prototype,"writeHistoricMoment",null),e([t({type:Number,json:{write:!0}})],o.prototype,"maxAllowableOffset",void 0),e([t({type:Number,cast:r=>r<1?1:r>o.MAX_MAX_RECORD_COUNT_FACTOR?o.MAX_MAX_RECORD_COUNT_FACTOR:r,json:{write:{overridePolicy:r=>({enabled:r>1})}}})],o.prototype,"maxRecordCountFactor",void 0),e([t({type:["xyFootprint"],json:{write:!0}})],o.prototype,"multipatchOption",void 0),e([t({type:Number,json:{read:{source:"resultRecordCount"}}})],o.prototype,"num",void 0),e([t({json:{write:!0}})],o.prototype,"objectIds",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"outFields",void 0),e([t({type:C,json:{name:"outSR",write:!0}})],o.prototype,"outSpatialReference",void 0),e([t({type:[se],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.outStatistics!=null&&this.outStatistics.length>0}}}}})],o.prototype,"outStatistics",void 0),e([t({json:{write:!0}})],o.prototype,"parameterValues",void 0),e([S("parameterValues")],o.prototype,"writeParameterValues",null),e([t({type:K,json:{write:!0}})],o.prototype,"pixelSize",void 0),e([t({type:oe,json:{write:!0}})],o.prototype,"quantizationParameters",void 0),e([t({type:[Object],json:{write:!0}})],o.prototype,"rangeValues",void 0),e([t({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:this.spatialRelationship==="relation"}}}}})],o.prototype,"relationParameter",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"resultType",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnCentroid",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnDistinctValues",void 0),e([t({type:Boolean,json:{default:!0,write:!0}})],o.prototype,"returnExceededLimitFeatures",void 0),e([t({type:Boolean,json:{write:!0}})],o.prototype,"returnGeometry",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnQueryGeometry",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnM",void 0),e([t({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],o.prototype,"returnZ",void 0),e([t({type:Boolean,json:{write:!0}})],o.prototype,"returnTrueCurves",void 0),e([t({type:C,json:{write:!0}})],o.prototype,"sourceSpatialReference",void 0),e([p(ie,{ignoreUnknown:!1,name:"spatialRel"})],o.prototype,"spatialRelationship",void 0),e([t({type:Number,json:{read:{source:"resultOffset"}}})],o.prototype,"start",void 0),e([S("start"),S("num")],o.prototype,"writeStart",null),e([t({type:String,json:{write:!0}})],o.prototype,"sqlFormat",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"text",void 0),e([t({type:ee,json:{write:!0}})],o.prototype,"timeExtent",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"timeReferenceUnknownClient",void 0),e([p(ae,{ignoreUnknown:!1}),t({json:{write:{overridePolicy(r){return{enabled:!!r&&this.distance!=null}}}}})],o.prototype,"units",void 0),e([t({type:String,json:{write:{overridePolicy(r){return{enabled:r!=null||this.start!=null&&this.start>0}}}}})],o.prototype,"where",void 0),e([S("where")],o.prototype,"writeWhere",null),o=j=e([y("esri.rest.support.Query")],o);const ge=o;export{d as R,oe as a,ge as b,g as c,se as m,ie as s};
