import{$ as r,a0 as o,a1 as P,ij as M,c_ as N,r as b,aN as g,t as z,dA as J,f as O,iG as Z,j1 as k,j2 as H,is as U,j0 as V,j3 as W,it as K,dU as X,dV as Y,iu as ee,dW as te,j4 as R,ix as se,cP as $,j5 as re,iJ as ie,j6 as oe,f_ as ne,cv as ae,gG as D,j8 as pe,j9 as le,j7 as ue,iX as de,iA as ce,d2 as ye,jb as he,iz as fe,jc as me,je as ge,dZ as ve,iB as Se,d_ as xe}from"./index.ebaf2ed0.js";import{q as je,F as T,N as C,S as we,k as be,T as Fe,x as Ie,I as Oe,j as Re}from"./ogcFeatureUtils.faff40e2.js";import"./geojson.369bc237.js";import"./clientSideDefaults.12155ca1.js";import"./QueryEngineCapabilities.c2e9875c.js";let h=class extends M{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:s,spatialReference:t,supportedCrs:n},layer:{apiKey:a,capabilities:u,customParameters:p}}=this;return{capabilities:u,collection:e,layerDefinition:s,queryParameters:{apiKey:a,customParameters:p},spatialReference:t,supportedCrs:n}}queryExtent(e,s={}){return null}queryFeatureCount(e,s={}){return null}queryFeatures(e,s={}){return this.queryFeaturesJSON(e,s).then(t=>N.fromJSON(t))}queryFeaturesJSON(e,s={}){const t=this.getFeatureDefinition();return this.load(s).then(()=>je(t,e,s))}queryObjectIds(e,s={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,s){var n;const t=new RegExp(`^${s}$`,"i");return(n=e.conformsTo.some(a=>t.test(a)))!=null?n:!1}_getCapabilities(e,s){var n,a,u,p,l,d,m;const t=b(s)?(n=s.components)==null?void 0:n.parameters:null;return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:(m=(d=(u=(a=t==null?void 0:t.limit)==null?void 0:a.schema)==null?void 0:u.maximum)!=null?d:(l=(p=t==null?void 0:t.limitFeatures)==null?void 0:p.schema)==null?void 0:l.maximum)!=null?m:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var l;const s=(l=e.extent)==null?void 0:l.spatial;if(!s)return null;const t=s.bbox[0],n=t.length===4,a=t[0],u=t[1],p=n?void 0:t[2];return{xmin:a,ymin:u,xmax:n?t[2]:t[3],ymax:n?t[3]:t[4],zmin:p,zmax:n?void 0:t[5],spatialReference:g.WGS84.toJSON()}}_getStorageSpatialReference(e){var n;const s=(n=e.storageCrs)!=null?n:T,t=C(s);return z(t)?g.WGS84:new g({wkid:t})}_getSupportedSpatialReferences(e,s){var p;const t="#/crs",n=(p=e.crs)!=null?p:[T],a=n.includes(t)?n.filter(l=>l!==t).concat(s.crs):n,u=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return a.filter(l=>!u.test(l))}async _loadOGCServices(e,s){const t=b(s)?s.signal:null,{apiKey:n,collectionId:a,customParameters:u,fields:p,geometryType:l,hasZ:d,objectIdField:m,timeInfo:v,url:E}=e,_={fields:p==null?void 0:p.map(y=>y.toJSON()),geometryType:J.toJSON(l),hasZ:d,objectIdField:m,timeInfo:v==null?void 0:v.toJSON()},f={apiKey:n,customParameters:u,signal:t},S=await we(E,f),[F,I]=await Promise.all([be(S,f),Fe(S,f)]);if(!this._conformsToType(F,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new O("ogc-feature-layer:no-geojson-support","Server does not support geojson");const c=I.collections.find(y=>y.id===a);if(!c)throw new O("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(F,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Ie(S,f):null,x=await Oe(c,_,f),G=this._getCapabilities(x.hasZ,q),A=this._getExtent(c),B=this._getStorageSpatialReference(c).toJSON(),Q=this._getSupportedSpatialReferences(c,I),L=new RegExp(`^${Re}`,"i"),j={};for(const y of Q){const w=C(y);b(w)&&(j[w]||(j[w]=y.replace(L,"")))}x.extent=A,this.featureDefinition={capabilities:G,collection:c,layerDefinition:x,queryParameters:{},spatialReference:B,supportedCrs:j}}};r([o()],h.prototype,"featureDefinition",void 0),r([o({constructOnly:!0})],h.prototype,"layer",void 0),r([o()],h.prototype,"type",void 0),h=r([P("esri.layers.graphics.sources.OGCFeatureSource")],h);const $e=Se();let i=class extends Z(k(H(U(V(W(K(X(Y(ee(te(xe))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new h({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){R(e,this.fieldsIndex),this._set("renderer",e)}on(e,s){return super.on(e,s)}createPopupTemplate(e){return se(this,e)}createQuery(){return new $}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){var p;let t,n=!1;const a=(p=s==null?void 0:s.feature)==null?void 0:p.attributes,u=this.typeIdField&&(a==null?void 0:a[this.typeIdField]);return u!=null&&this.types&&(n=this.types.some(l=>{var d;return l.id==u&&(t=(d=l.domains)==null?void 0:d[e],(t==null?void 0:t.type)==="inherited"&&(t=this._getLayerDomain(e)),!0)})),n||t||(t=this._getLayerDomain(e)),t}queryFeatures(e,s){return this.load().then(()=>this.source.queryFeatures($.from(e)||this.createQuery(),s)).then(t=>{var n;return(n=t==null?void 0:t.features)==null||n.forEach(a=>{a.layer=a.sourceLayer=this}),t})}serviceSupportsSpatialReference(e){var s,t;return(t=(s=this.source)==null?void 0:s.serviceSupportsSpatialReference(e))!=null?t:!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),R(this.renderer,this.fieldsIndex),re(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const s of this.fields)if(s.name===e&&s.domain)return s.domain;return null}};r([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"capabilities",void 0),r([o({type:String,json:{write:!0}})],i.prototype,"collectionId",void 0),r([o({type:String})],i.prototype,"copyright",void 0),r([o({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),r([o({type:String})],i.prototype,"definitionExpression",void 0),r([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],i.prototype,"description",void 0),r([o({type:String})],i.prototype,"displayField",void 0),r([o(ie)],i.prototype,"elevationInfo",void 0),r([o(oe)],i.prototype,"featureReduction",void 0),r([o({type:[ne],json:{origins:{service:{name:"layerDefinition.fields"}}}})],i.prototype,"fields",void 0),r([o($e.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([o({readOnly:!0,type:ae,json:{origins:{service:{name:"layerDefinition.extent"}}}})],i.prototype,"fullExtent",void 0),r([o({type:D.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:D.read}}}}})],i.prototype,"geometryType",void 0),r([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],i.prototype,"hasZ",void 0),r([o({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),r([o({type:[pe],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:le},write:!0}}}})],i.prototype,"labelingInfo",void 0),r([o(ue)],i.prototype,"labelsVisible",void 0),r([o(de)],i.prototype,"legendEnabled",void 0),r([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],i.prototype,"objectIdField",void 0),r([o({type:["OGCFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(ce)],i.prototype,"popupEnabled",void 0),r([o({type:ye,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({types:he,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:fe,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],i.prototype,"renderer",null),r([o(me)],i.prototype,"screenSizePerspectiveEnabled",void 0),r([o({readOnly:!0})],i.prototype,"source",void 0),r([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],i.prototype,"spatialReference",void 0),r([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],i.prototype,"title",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),r([o({type:String,readOnly:!0})],i.prototype,"typeIdField",void 0),r([o({type:[ge]})],i.prototype,"types",void 0),r([o(ve)],i.prototype,"url",void 0),i=r([P("esri.layers.OGCFeatureLayer")],i);const _e=i;export{_e as default};
