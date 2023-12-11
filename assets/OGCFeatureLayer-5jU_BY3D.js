import{c as r,f as i,g as T,fb as B,aI as b,fn as L,D as R,fd as I,fe as N,aO as k,cY as F,k as z,bO as H}from"./index-XUlETPJZ.js";import"./UniqueValueRenderer-rNHfFDwn.js";import{m as J,u as Z}from"./jsonUtils-RoKG_qA6.js";import{m as U}from"./MultiOriginJSONSupport-7Qbe2KAC.js";import{S as V,h as O,x as $,T as W,I as K,F as Y,k as X,j as ee,b as te}from"./ogcFeatureUtils-1Is9sG83.js";import{d as re}from"./FeatureSet-41fq-equ.js";import{i as oe}from"./APIKeyMixin-yDqtxogw.js";import{a as ie}from"./BlendLayer-zma1Sosw.js";import{o as se}from"./CustomParametersMixin-IV-ZCkcb.js";import{p as pe}from"./FeatureEffectLayer-McOb82vy.js";import{c as ne}from"./FeatureReductionLayer-Vf7Hw8YX.js";import{u as ae}from"./OperationalLayer-JqRxI3_b.js";import{c as le}from"./OrderedLayer-xcmt9F3A.js";import{j as ue}from"./PortalLayer-TJUoDBMJ.js";import{f as de}from"./RefreshableLayer-jUlr6EOh.js";import{t as ce}from"./ScaleRangeLayer-yPctuALK.js";import{a as me}from"./TemporalLayer-8uI_9CjI.js";import{f as ye,m as fe,c as he,y as ge,p as ve,d as Se}from"./commonProperties-vCf9FiI6.js";import{n as be}from"./FeatureType-7uQm1xKd.js";import{y as xe}from"./Field-BZWZB6E0.js";import{s as we}from"./fieldProperties-I7fcXUlE.js";import{C as Ce}from"./LabelClass-lFhwM9-Q.js";import{i as Re}from"./labelingInfo-yCRiW8FB.js";import{b as D}from"./Query-XYhmJAcm.js";import{p as Ie}from"./popupUtils-jwtllF6O.js";import"./LegendOptions-KuTIRvg3.js";import"./diffUtils-FaRWg0DV.js";import"./SizeVariable-eDAmtsU9.js";import"./colorRamps-ucREs6wJ.js";import"./lengthUtils-uQbLh4h5.js";import"./ColorStop-FEjpkiot.js";import"./jsonUtils-FMkyl16O.js";import"./styleUtils-dULYu5Y-.js";import"./DictionaryLoader-uS0Mi-We.js";import"./LRUCache-P08N0BvZ.js";import"./Version-Wg9g_vDJ.js";import"./FieldsIndex-zLaqSf7A.js";import"./UnknownTimeZone-6z8cnIoM.js";import"./heatmapUtils-mFECwRl0.js";import"./vec4f64-_4WP0ZGf.js";import"./featureConversionUtils-AHVFLuq1.js";import"./OptimizedGeometry-1RFAES06.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./geojson-Ignznfto.js";import"./date-be_IQzZd.js";import"./clientSideDefaults-baqFUeSD.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./defaultsJSON-HVtDPFXZ.js";import"./fieldType-h3FAXGdT.js";import"./jsonUtils-SBL1xwKC.js";import"./parser-5WRmuohq.js";import"./FeatureEffect-reT_3K_v.js";import"./clusterUtils-oFjX4ysJ.js";import"./MD5-uECS9GB-.js";import"./FeatureReductionSelection-Ku16GTtG.js";import"./featureLayerUtils-RgaKrux8.js";import"./AttachmentQuery-5LMwiYDr.js";import"./RelationshipQuery-EoJCKai_.js";import"./portalItemUtils-iR0JCk79.js";import"./ElevationInfo-W4L0wkkh.js";import"./FeatureTemplate-KrlpBNrV.js";import"./labelUtils-bgvBkKE5.js";let d=class extends B{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:s,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(s=>re.fromJSON(s))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then(()=>V(s,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${t}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var s,p,n,l,a;const t=(s=e==null?void 0:e.components)==null?void 0:s.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??O,s=$(t);return s==null?b.WGS84:new b({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",p=e.crs??[O],n=p.includes(s)?p.filter(a=>a!==s).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const s=t!=null?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:y,hasZ:f,objectIdField:j,timeInfo:h,url:E}=e,P={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:L.toJSON(y),hasZ:f??!1,objectIdField:j,timeInfo:h==null?void 0:h.toJSON()},c={apiKey:p,customParameters:l,signal:s},g=await W(E,c),[x,w]=await Promise.all([K(g,c),Y(g,c)]);if(!this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new R("ogc-feature-layer:no-geojson-support","Server does not support geojson");const m=w.collections.find(u=>u.id===n);if(!m)throw new R("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const _=this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await X(g,c):null,C=await ee(m,P,c),q=this._getMaxRecordCount(_),A=this._getCapabilities(C.hasZ,q),M=this._getStorageSpatialReference(m).toJSON(),G=this._getSupportedSpatialReferences(m,w),Q=new RegExp(`^${te}`,"i"),v={};for(const u of G){const S=$(u);S!=null&&(v[S]||(v[S]=u.replace(Q,"")))}this.featureDefinition={capabilities:A,collection:m,layerDefinition:C,spatialReference:M,supportedCrs:v}}};r([i()],d.prototype,"featureDefinition",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"type",void 0),d=r([T("esri.layers.graphics.sources.OGCFeatureSource")],d);const Fe=we();let o=class extends oe(se(ne(pe(ie(le(me(ce(ae(ue(de(U(H)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Ie(this,e)}createQuery(){return new D}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let s,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(y=>{var f;return y.id==l&&(s=(f=y.domains)==null?void 0:f[e],(s==null?void 0:s.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(D.from(e)||this.createQuery(),t)).then(s=>{var p;return(p=s==null?void 0:s.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),s})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),I(this.renderer,this.fieldsIndex),N(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String})],o.prototype,"definitionExpression",void 0),r([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([i(ye)],o.prototype,"elevationInfo",void 0),r([i({type:[xe],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([i(Fe.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({readOnly:!0,type:k,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([i({type:F.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:F.read}}}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i({type:[Ce],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Re},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([i(fe)],o.prototype,"labelsVisible",void 0),r([i(he)],o.prototype,"legendEnabled",void 0),r([i({type:Number})],o.prototype,"maxRecordCount",void 0),r([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(ge)],o.prototype,"popupEnabled",void 0),r([i({type:z,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:J,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:Z,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([i(ve)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({readOnly:!0,type:b,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[be]})],o.prototype,"types",void 0),r([i(Se)],o.prototype,"url",void 0),o=r([T("esri.layers.OGCFeatureLayer")],o);const qt=o;export{qt as default};