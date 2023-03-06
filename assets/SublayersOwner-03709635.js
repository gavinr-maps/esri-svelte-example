import{af as a,ag as n,aX as S,as as W,iF as H,iw as z,aI as Y,ah as R,U as G,dA as Z,f as ee,bp as te,cN as re,bU as ie,s as m,e7 as p,jS as se,dQ as ae,jT as le,w as oe,hP as ne,Q as E,jU as N,hU as ye,P as q,aM as pe,jg as _,iu as ue,aw as de,_ as ce,cl as D,jV as he,aR as fe,r as k,cu as be,hb as $,gs as ge,jW as me,gP as j,i$ as Se,aY as w,aj as Ie,j3 as ve,iv as we,i7 as B,aW as J,e8 as Ee,j6 as Le,jG as F,i4 as xe,bF as Oe,G as Te,ao as De,jX as Pe}from"./index-3399a756.js";import{r as _e}from"./Version-cef08c18.js";import{x as Ae}from"./QueryTask-91edad28.js";import{t as Fe}from"./sublayerUtils-81a7cb6a.js";const qe=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesPromise=null,this._allLayersAndTablesMap=null}readCapabilities(t,i){const s=i.capabilities&&i.capabilities.split(",").map(X=>X.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const l=this.type,y=l!=="tile"&&!!i.supportsDynamicLayers,u=s.includes("query"),c=s.includes("map"),g=!!i.exportTilesAllowed,f=s.includes("tilemap"),I=s.includes("data"),L=l!=="tile"&&(!i.tileInfo||y),x=l!=="tile"&&(!i.tileInfo||y),d=l!=="tile",h=i.cimVersion&&_e.parse(i.cimVersion),O=(h==null?void 0:h.since(1,4))??!1,T=(h==null?void 0:h.since(2,0))??!1;return{operations:{supportsExportMap:c,supportsExportTiles:g,supportsIdentify:u,supportsQuery:I,supportsTileMap:f},exportMap:c?{supportsArcadeExpressionForLabeling:O,supportsSublayersChanges:d,supportsDynamicLayers:y,supportsSublayerVisibility:L,supportsSublayerDefinitionExpression:x,supportsCIMSymbols:T}:null,exportTiles:g?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(t,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchSublayerInfo(t,i){var s;try{return await this.fetchAllLayersAndTables(i),(s=this._allLayersAndTablesMap)==null?void 0:s.get(t)}catch{return}}async fetchAllLayersAndTables(t){await this.load(t),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=G(Z(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(s=>{this._allLayersAndTablesMap=new Map;for(const l of s.data.layers)this._allLayersAndTablesMap.set(l.id,l);return{result:s.data}},s=>({error:s})));const i=await this._allLayersAndTablesPromise;if(ee(t),"result"in i)return i.result;throw i.error}};return a([n({readOnly:!0})],r.prototype,"capabilities",void 0),a([S("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),a([n({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),a([n({type:W})],r.prototype,"fullExtent",void 0),a([n(H)],r.prototype,"id",void 0),a([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),a([n(z)],r.prototype,"popupEnabled",void 0),a([n({type:Y})],r.prototype,"spatialReference",void 0),a([n({readOnly:!0})],r.prototype,"version",void 0),a([S("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=a([R("esri.layers.mixins.ArcGISMapService")],r),r};var A;function M(e){return e!=null&&e.type==="esriSMS"}function V(e,r,t){var s;const i=this.originIdOf(r)>=F(t.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&((s=t.layer)==null?void 0:s.type)==="map-image"&&(t.writeSublayerStructure||i)}}function Q(e,r,t){var i;return{enabled:!!t&&((i=t.layer)==null?void 0:i.type)==="tile"&&this._isOverridden(r)}}function b(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function P(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=F(t.origin))}}let je=0;const v=new Set;v.add("layer"),v.add("parent"),v.add("loaded"),v.add("loadStatus"),v.add("loadError"),v.add("loadWarnings");let o=A=class extends te(re(ie(xe))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:r,source:t,url:i}=this;if(!r&&!i)throw new m("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let s=null;if(!r||this.originIdOf("url")>p.SERVICE||(t==null?void 0:t.type)==="data-layer")s=(await G(i,{responseType:"json",query:{f:"json"},...e})).data;else{let l=this.id;(t==null?void 0:t.type)==="map-layer"&&(l=t.mapLayerId),s=await r.fetchSublayerInfo(l,e)}s&&(this.sourceJSON=s,this.read({layerDefinition:s},{origin:"service"}))})()),this}readCapabilities(e,r){r=r.layerDefinition||r;const{operations:{supportsQuery:t,supportsQueryAttachments:i},query:{supportsFormatPBF:s},data:{supportsAttachment:l}}=se(r,this.url);return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:t,supportsQueryAttachments:i},data:{supportsAttachment:l},query:{supportsFormatPBF:s}}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new ae(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields){for(const t of r.fields)if(t.type==="esriFieldTypeGlobalID")return t.name}}get id(){return this._get("id")??je++}set id(e){var r,t,i;this._get("id")!==e&&(((i=(t=(r=this.layer)==null?void 0:r.capabilities)==null?void 0:t.exportMap)==null?void 0:i.supportsDynamicLayers)!==!1?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map(s=>s.write({},i))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(r=>r.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields){for(const t of r.fields)if(t.type==="esriFieldTypeOID")return t.name}}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){var i;const t=r.layerDefinition;return 1-.01*(((t==null?void 0:t.transparency)!=null?t.transparency:(i=t==null?void 0:t.drawingInfo)==null?void 0:i.transparency)??0)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=le(this.parent.id):r.parentLayerId=-1}get queryTask(){var y;if(!this.layer)return null;const{spatialReference:e}=this.layer,r="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:t,fieldsIndex:i}=this,s=oe("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF),l=((y=t==null?void 0:t.operations)==null?void 0:y.supportsQueryAttachments)??!1;return new Ae({url:this.url,pbfSupported:s,fieldsIndex:i,gdbVersion:r,sourceSpatialReference:e,queryAttachmentsSupported:l})}set renderer(e){if(e){for(const r of e.getSymbols())if(ne(r)){E.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new N({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return ye(q.ofType(A),e)}writeSublayers(e,r,t){var i;(i=this.sublayers)!=null&&i.length&&(r[t]=this.sublayers.map(s=>s.id).toArray().reverse())}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const i=r.fields.find(s=>s.name.toLowerCase()===t);i&&(t=i.name)}return t}get url(){var i;const e=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,r=this.source;if(!e)return null;if(this._lastParsedUrl=e,(r==null?void 0:r.type)==="map-layer")return`${e.path}/${r.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${pe(t)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=_(this),r=new A;return _(r).store=e.clone(v),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return ue(this,e)}createQuery(){return new de({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var i;if(this.hasOwnProperty("sublayers"))return null;const{layer:e}=this,r=e==null?void 0:e.parsedUrl,t=new(await ce(()=>import("./index-3399a756.js").then(s=>s.lH),["./index-3399a756.js","./index-0aecdba2.css"],import.meta.url)).default({url:r==null?void 0:r.path});return r&&this.source&&(this.source.type==="map-layer"?t.layerId=this.source.mapLayerId:t.dynamicDataSource=this.source),(e==null?void 0:e.refreshInterval)!=null&&(t.refreshInterval=e.refreshInterval),this.definitionExpression&&(t.definitionExpression=this.definitionExpression),this.floorInfo&&(t.floorInfo=D(this.floorInfo)),this.originIdOf("labelingInfo")>p.SERVICE&&(t.labelingInfo=D(this.labelingInfo)),this.originIdOf("labelsVisible")>p.DEFAULTS&&(t.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>p.DEFAULTS&&(t.legendEnabled=this.legendEnabled),this.originIdOf("visible")>p.DEFAULTS&&(t.visible=this.visible),this.originIdOf("minScale")>p.DEFAULTS&&(t.minScale=this.minScale),this.originIdOf("maxScale")>p.DEFAULTS&&(t.maxScale=this.maxScale),this.originIdOf("opacity")>p.DEFAULTS&&(t.opacity=this.opacity),this.originIdOf("popupTemplate")>p.DEFAULTS&&(t.popupTemplate=D(this.popupTemplate)),this.originIdOf("renderer")>p.SERVICE&&(t.renderer=D(this.renderer)),((i=this.source)==null?void 0:i.type)==="data-layer"&&(t.dynamicDataSource=this.source.clone()),this.originIdOf("title")>p.DEFAULTS&&(t.title=this.title),(e==null?void 0:e.type)==="map-image"&&e.originIdOf("customParameters")>p.DEFAULTS&&(t.customParameters=e.customParameters),(e==null?void 0:e.type)==="tile"&&e.originIdOf("customParameters")>p.DEFAULTS&&(t.customParameters=e.customParameters),t}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const i=e.attributes?e.attributes[r]:void 0;if(i==null)return null;let s=null;return t==null||t.some(l=>{const{id:y}=l;return y!=null&&(y.toString()===i.toString()&&(s=l),!!s)}),s}getFieldDomain(e,r){const t=r&&r.feature,i=this.getFeatureType(t);if(i){const s=i.domains&&i.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}async queryAttachments(e,r){var f,I;await this.load(),e=he.from(e);const t=this.capabilities;if(!((f=t==null?void 0:t.data)!=null&&f.supportsAttachment))throw new m("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:l,num:y,size:u,start:c,where:g}=e;if(!((I=t==null?void 0:t.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(l==null?void 0:l.length)>0||(u==null?void 0:u.length)>0||y||c||g))throw new m("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(s!=null&&s.length||l!=null&&l.length||g))throw new m("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e=this.createQuery(),r){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new m("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new m("queryFeatures:not-supported","this layer has no url.");const t=await this.queryTask.execute(e,{...r,query:{...(i=this.layer)==null?void 0:i.customParameters,token:(s=this.layer)==null?void 0:s.apiKey}});if(t!=null&&t.features)for(const l of t.features)l.sourceLayer=this;return t}toExportImageJSON(e){var l;const r={id:this.id,source:((l=this.source)==null?void 0:l.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},t=fe(e,this.definitionExpression);k(t)&&(r.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((y,u)=>(y[u]=this.originIdOf(u),y),{});if(Object.keys(i).some(y=>i[y]>p.SERVICE)){const y=r.drawingInfo={};if(i.renderer>p.SERVICE&&(y.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>p.SERVICE&&(y.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>p.SERVICE){!this.loaded&&this.labelingInfo.some(c=>!c.labelPlacement)&&E.getLogger(this.declaredClass).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let u=this.labelingInfo;k(this.geometryType)&&(u=be(this.labelingInfo,$.toJSON(this.geometryType))),y.labelingInfo=u.filter(c=>c.labelPlacement).map(c=>c.toJSON({origin:"service",layer:this.layer})),y.showLabels=!0}i.opacity>p.SERVICE&&(y.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(y.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,r=>{r.color||r.style!=="esriSMSX"&&r.style!=="esriSMSCross"||(r.outline&&r.outline.color?r.color=r.outline.color:r.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,r){if(e){const t=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(const i of t)M(i.symbol)&&r(i.symbol);"symbol"in e&&M(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&M(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){var u,c,g,f;const t=this.layer,i=this._get(e);let s,l;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",l="supportsModification"}const y=_(this).getDefaultOrigin();if(y!=="service"){if(s&&((g=(c=(u=this.layer)==null?void 0:u.capabilities)==null?void 0:c.exportMap)==null?void 0:g[s])===!1)return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(l&&((f=this.capabilities)==null?void 0:f.exportMap[l])===!1)return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${l}'`)}e!=="source"||this.loadStatus==="not-loaded"?(this._set(e,r),y!=="service"&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach(t=>{t.parent=null,t.layer=null}),this.handles.removeAll()),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this.handles.add([e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),e.on("before-changes",t=>{var s,l,y;const i=(y=(l=(s=this.layer)==null?void 0:s.capabilities)==null?void 0:l.exportMap)==null?void 0:y.supportsSublayersChanges;i==null||i||(E.getLogger(this.declaredClass).error(new m("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(e,r){const{layer:t,declaredClass:i}=this;E.getLogger(i).error(new m("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${t==null?void 0:t.id}'`,{reason:r,sublayer:this,layer:t}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};o.test={isMapImageLayerOverridePolicy:e=>e===b||e===V,isTileImageLayerOverridePolicy:e=>e===Q},a([n({readOnly:!0})],o.prototype,"capabilities",void 0),a([S("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),a([n()],o.prototype,"defaultPopupTemplate",null),a([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:V}}})],o.prototype,"definitionExpression",null),a([n({type:[ge],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),a([n({readOnly:!0})],o.prototype,"fieldsIndex",null),a([n({type:me,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:V},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),a([n({type:W,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([n({type:$.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:$.read}}}}})],o.prototype,"geometryType",void 0),a([n({type:String})],o.prototype,"globalIdField",void 0),a([S("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),a([n({type:j,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),a([n({value:null,type:[Se],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:b}}})],o.prototype,"labelingInfo",null),a([w("labelingInfo")],o.prototype,"writeLabelingInfo",null),a([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:b}}})],o.prototype,"labelsVisible",null),a([n({value:null})],o.prototype,"layer",null),a([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:P}}})],o.prototype,"legendEnabled",void 0),a([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),a([n({type:Number,value:0,json:{write:{overridePolicy:b}}})],o.prototype,"minScale",null),a([S("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),a([n({type:Number,value:0,json:{write:{overridePolicy:b}}})],o.prototype,"maxScale",null),a([S("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),a([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),a([n({type:String})],o.prototype,"objectIdField",void 0),a([S("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),a([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:b}}})],o.prototype,"opacity",null),a([S("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),a([w("opacity")],o.prototype,"writeOpacity",null),a([n({json:{type:j,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:b}}})],o.prototype,"parent",void 0),a([w("parent")],o.prototype,"writeParent",null),a([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:P,writer(e,r,t){r[t]=!e}}}})],o.prototype,"popupEnabled",void 0),a([n({type:Ie,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:P}}})],o.prototype,"popupTemplate",void 0),a([n({readOnly:!0})],o.prototype,"queryTask",null),a([n({types:ve,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:b},origins:{"web-scene":{types:we,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:b}}}}})],o.prototype,"renderer",null),a([n({types:{key:"type",base:null,typeMap:{"data-layer":B,"map-layer":N}},cast(e){if(e){if("mapLayerId"in e)return J(N,e);if("dataSource"in e)return J(B,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:b}}})],o.prototype,"source",null),a([n()],o.prototype,"sourceJSON",void 0),a([n({value:null,json:{type:[j],write:{target:"subLayerIds",allowNull:!0,overridePolicy:b}}})],o.prototype,"sublayers",null),a([Ee("sublayers")],o.prototype,"castSublayers",null),a([w("sublayers")],o.prototype,"writeSublayers",null),a([n({type:String,json:{name:"name",write:{overridePolicy:P}}})],o.prototype,"title",void 0),a([n({type:String})],o.prototype,"typeIdField",void 0),a([S("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([n({type:[Le],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),a([n({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:Q}}})],o.prototype,"url",null),a([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:b}}})],o.prototype,"visible",null),a([w("visible")],o.prototype,"writeVisible",null),o=A=a([R("esri.layers.support.Sublayer")],o);const U=o,Me=E.getLogger("esri.layers.TileLayer");function Ve(e,r){const t=[],i={};return e&&e.forEach(s=>{const l=new U;if(l.read(s,r),i[l.id]=l,s.parentLayerId!=null&&s.parentLayerId!==-1){const y=i[s.parentLayerId];y.sublayers||(y.sublayers=[]),y.sublayers.unshift(l)}else t.unshift(l)}),t}const C=q.ofType(U);function K(e,r){e&&e.forEach(t=>{r(t),t.sublayers&&t.sublayers.length&&K(t.sublayers,r)})}const Ue=e=>{let r=class extends e{constructor(...t){super(...t),this.allSublayers=new Oe({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[p.SERVICE]:{},[p.PORTAL_ITEM]:{},[p.WEB_SCENE]:{},[p.WEB_MAP]:{}},this.addHandles(Te(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),De))}readSublayers(t,i){if(!i||!t)return;const{sublayersSourceJSON:s}=this,l=F(i.origin);if(l<p.SERVICE||(s[l]={context:i,visibleLayers:t.visibleLayers||s[l].visibleLayers,layers:t.layers||s[l].layers},l>p.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:y,origin:u}=this.createSublayersForOrigin("web-document"),c=_(this);c.setDefaultOrigin(u),this._set("sublayers",new C(y)),c.setDefaultOrigin("user")}findSublayerById(t){return this.allSublayers.find(i=>i.id===t)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(t){const i=F(t==="web-document"?"web-map":t);let s=p.SERVICE,l=this.sublayersSourceJSON[p.SERVICE].layers,y=this.sublayersSourceJSON[p.SERVICE].context,u=null;const c=[p.PORTAL_ITEM,p.WEB_SCENE,p.WEB_MAP].filter(d=>d<=i);for(const d of c){const h=this.sublayersSourceJSON[d];Fe(h.layers)&&(s=d,l=h.layers,y=h.context,h.visibleLayers&&(u={visibleLayers:h.visibleLayers,context:h.context}))}const g=[p.PORTAL_ITEM,p.WEB_SCENE,p.WEB_MAP].filter(d=>d>s&&d<=i);let f=null;for(const d of g){const{layers:h,visibleLayers:O,context:T}=this.sublayersSourceJSON[d];h&&(f={layers:h,context:T}),O&&(u={visibleLayers:O,context:T})}const I=Ve(l,y),L=new Map,x=new Set;if(f)for(const d of f.layers)L.set(d.id,d);if(u!=null&&u.visibleLayers)for(const d of u.visibleLayers)x.add(d);return K(I,d=>{f&&d.read(L.get(d.id),f.context),u&&d.read({defaultVisibility:x.has(d.id)},u.context)}),{origin:Pe(s),sublayers:new C({items:I})}}read(t,i){super.read(t,i),this.readSublayers(t,i)}_handleSublayersChange(t,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.handles.remove("sublayers-owner")),t&&(t.forEach(s=>{s.parent=this,s.layer=this}),this.handles.add([t.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),t.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.handles.add(t.on("before-changes",s=>{Me.error(new m("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([n({readOnly:!0})],r.prototype,"allSublayers",void 0),a([n({readOnly:!0,type:q.ofType(U)})],r.prototype,"serviceSublayers",void 0),a([n({value:null,type:C,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),a([n({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=a([R("esri.layers.mixins.SublayersOwner")],r),r};export{Ue as E,U as Z,qe as y};
