var e,t=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(e,i,r)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,o=(e,t)=>{for(var i in t||(t={}))a.call(t,i)&&l(e,i,t[i]);if(s)for(var i of s(t))n.call(t,i)&&l(e,i,t[i]);return e},u=(e,t)=>i(e,r(t));import{ab as d,ac as h,ad as c,cN as p,a9 as y,_ as f,fZ as g,bo as m,bb as _,fB as v,cY as b,B as w,bE as R,f_ as x,r as F,c0 as S,bY as I,f$ as E,cs as O,fr as q,cu as T,e$ as P,bf as U,m as C,g0 as j,X as k,fY as N,g1 as V,g2 as L,dy as A,cw as J,g3 as M,g4 as z,g5 as H,g6 as G,g7 as $,g8 as B,g9 as Q,q as D,w as K,ga as W,gb as Y,bF as Z,bN as X,cy as ee,cO as te,cU as ie,fu as re,gc as se,v as ae,G as ne,b5 as le,fC as oe,fv as ue}from"./vendor.d0a39f0f.js";import{u as de}from"./Container.90659a9c.js";import{s as he}from"./clickToleranceUtils.85f9bed9.js";import{N as ce}from"./definitions.e5e12ce7.js";import{l as pe,u as ye}from"./LayerView.556d10e0.js";import{e as fe,u as ge,f as me,g as _e,m as ve,h as be,M as we}from"./schemaUtils.c72e3829.js";import{d as Re,t as xe}from"./popupUtils.2333904f.js";import{o as Fe}from"./floorFilterUtils.798a8eb5.js";import{a as Se}from"./RefreshableLayerView.6e21e268.js";import{a as Ie}from"./drapedUtils.9a5fbe8c.js";let Ee=e=class extends p{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const t=this.sourceLayer&&this.sourceLayer.featureReduction;return t&&"popupTemplate"in t&&t.popupEnabled?t.popupTemplate:null}getObjectId(){return this.objectId}clone(){return new e(o({objectId:this.objectId},this.cloneProperties()))}};d([h({type:Boolean})],Ee.prototype,"isAggregate",void 0),d([h({type:Number,json:{read:!0}})],Ee.prototype,"objectId",void 0),Ee=e=d([c("esri.AggregateGraphic")],Ee);var Oe=Ee;function qe(e){return e.some((e=>e.globalId))}function Te(e){return e.filter((e=>!e.error)).map((e=>{var t;return null!=(t=e.objectId)?t:e.globalId}))}function Pe(e,t){const i=new Set(e);for(const r of t.values())i.add(r);return i}function Ue(e,t){const i=new Set(e);for(const r of t.values())i.delete(r);return i}let Ce=class extends y{constructor(e){super(),this._hasGlobalIds=!1,this._queueProcessor=new f({concurrency:1,process:e.process})}destroy(){this._queueProcessor.clear()}get updating(){return this._queueProcessor.length>0}push(e){const t=this._queueProcessor,i=t.last();switch(e.type){case"update":case"refresh":if((null==i?void 0:i.type)===e.type)return;t.push(e).finally((()=>this.notifyChange("updating")));break;case"edit":{const r="processed-edit"===(null==i?void 0:i.type)?i:null;r&&t.popLast();const s=this._mergeEdits(r,e);for(const e of s)t.push(e).finally((()=>this.notifyChange("updating")));break}}this.notifyChange("updating")}_mergeEdits(e,t){var i,r;const{addedFeatures:s,deletedFeatures:a,updatedFeatures:n}=t.edits;if(this._hasGlobalIds=this._hasGlobalIds||qe(s)||qe(n)||qe(a),this._hasGlobalIds)return[e,{type:"processed-edit",edits:{addOrModified:[...s,...n],removed:a}}];const l=new Set(Te(null!=(i=null==e?void 0:e.edits.addOrModified)?i:[])),o=new Set(Te(null!=(r=null==e?void 0:e.edits.removed)?r:[])),u=new Set([...Te(s),...Te(n)]),d=new Set(Te(a));return[{type:"processed-edit",edits:{addOrModified:Array.from(Pe(Ue(l,d),u)).map((e=>({objectId:e}))),removed:Array.from(Pe(Ue(o,u),d)).map((e=>({objectId:e})))}}]}};d([h({readOnly:!0})],Ce.prototype,"updating",null),Ce=d([c("esri.views.2d.layers.support.FeatureCommandQueue")],Ce);var je=Ce;let ke=class extends g{constructor(e){super(e),this._startupResolver=m(),this.isReady=!1}initialize(){this._controller=_(),this.addResolvingPromise(this._startWorker(this._controller.signal))}destroy(){this._controller.abort(),this._connection&&this._connection.close()}set tileRenderer(e){this.client.tileRenderer=e}get closed(){return this._connection.closed}async startup(e,t,i,r){await this.when();const s=this._controller.signal,a=function(e){return Array.isArray(e)}(i.source)?{transferList:i.source,signal:s}:void 0,n={service:i,config:t,tileInfo:e.tileInfo.toJSON(),tiles:r};await this._connection.invoke("startup",n,a),this._startupResolver.resolve(),this._set("isReady",!0)}async updateTiles(e){return await this._startupResolver.promise,v(this._connection.invoke("updateTiles",e))}async update(e){const t={config:e};return await this._startupResolver.promise,this._connection.invoke("update",t)}async applyUpdate(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)}async setHighlight(e){return await this._startupResolver.promise,v(this._connection.invoke("controller.setHighlight",e))}async refresh(){return await this._startupResolver.promise,v(this._connection.invoke("controller.refresh"))}async querySummaryStatistics(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:e.toJSON(),params:t},i)}async queryFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",e.toJSON(),t)}async queryObjectIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",e.toJSON(),t)}async queryFeatureCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",e.toJSON(),t)}async queryExtent(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)}async queryLatestObservations(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)}async queryStatistics(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)}async getObjectId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)}async getDisplayId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)}async getFeature(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeature",e)}async getAggregate(e){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregate",e)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)}async onEdits(e){return await this._startupResolver.promise,v(this._connection.invoke("controller.onEdits",e))}async enableEvent(e,t){return await this._startupResolver.promise,v(this._connection.invoke("controller.enableEvent",{name:e,value:t}))}async _startWorker(e){try{this._connection=await b("Pipeline",{client:this.client,strategy:"dedicated",signal:e})}catch(t){w(t)}}};d([h()],ke.prototype,"isReady",void 0),d([h()],ke.prototype,"client",void 0),d([h()],ke.prototype,"tileRenderer",null),ke=d([c("esri.views.2d.layers.support.FeatureLayerProxy")],ke);var Ne=ke;class Ve{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer}destroy(){}clear(){this._tiles.forEach((e=>this._releaseTile(e)))}tileKeys(){const e=[];return this._tiles.forEach(((t,i)=>e.push(i))),e}update(e){const t=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:i,lodInfo:r}=t,{level:s}=r,a=[],n=[],l=new Set,o=new Set;for(const{row:u,colFrom:d,colTo:h}of i)for(let e=d;e<=h;e++){const t=R.getId(s,u,r.normalizeCol(e),r.getWorldForColumn(e)),i=this._getOrAcquireTile(a,t);l.add(t),i.isReady?i.visible=!0:o.add(i.key)}return o.forEach((e=>this._addPlaceholders(l,e))),this._tiles.forEach((e=>{l.has(e.key.id)||(n.push(e.key.id),this._releaseTile(e))})),x.pool.release(t),{hasMissingTiles:o.size>0,added:a,removed:n}}_getOrAcquireTile(e,t){if(!this._tiles.has(t)){const i=this.acquireTile(new R(t));e.push(t),this._tiles.set(t,i),i.visible=!1}return this._tiles.get(t)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e)}_addPlaceholders(e,t){const i=this._addPlaceholderChildren(e,t);Math.abs(1-i)<1e-6||this._addPlaceholderParent(e,t)||(this._getTile(t.id).visible=!0)}_addPlaceholderChildren(e,t){let i=0;return this._tiles.forEach((r=>{i+=this._addPlaceholderChild(e,r,t)})),i}_addPlaceholderChild(e,t,i){return t.key.level<=i.level||!t.hasData||!i.contains(t.key)?0:(t.visible=!0,e.add(t.key.id),1/(1<<2*(t.key.level-i.level)))}_addPlaceholderParent(e,t){let i=t.getParentKey(),r=0,s=null;for(;F(i);){if(e.has(i.id))return!0;const t=this._getTile(i.id);if(null!=t&&t.isReady)return t.visible=!0,e.add(t.key.id),!0;null!=t&&t.hasData&&t.patchCount>r&&(r=t.patchCount,s=t),i=i.getParentKey()}return!!s&&(s.visible=!0,e.add(s.key.id),!0)}}var Le;const Ae=new S({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),Je=new S({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let Me=Le=class extends T{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.hiddenIds=new Set,this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null,this.enabled=!1}writeWhere(e,t){t.where=e||"1=1"}enable(){this._set("enabled",!0)}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:s,objectIds:a,units:n,distance:l}=this;return new P(o({geometry:U(i),objectIds:U(a),spatialRelationship:r,timeExtent:U(s),where:t,units:n,distance:l},e))}clone(){const{where:e,geometry:t,spatialRelationship:i,hiddenIds:r,timeExtent:s,objectIds:a,units:n,distance:l}=this,o=new Set;return r.forEach((e=>o.add(e))),new Le({geometry:U(t),hiddenIds:o,objectIds:U(a),spatialRelationship:i,timeExtent:U(s),where:e,units:n,distance:l})}};d([h({type:String})],Me.prototype,"where",void 0),d([I("where")],Me.prototype,"writeWhere",null),d([h({types:E,json:{read:O,write:!0}})],Me.prototype,"geometry",void 0),d([h({type:String,json:{read:{source:"spatialRel",reader:Ae.read},write:{target:"spatialRel",writer:Ae.write}}})],Me.prototype,"spatialRelationship",void 0),d([h({json:{write:(e,t,i)=>t[i]=Array.from(e),read:e=>new Set(e)}})],Me.prototype,"hiddenIds",void 0),d([h({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],Me.prototype,"distance",void 0),d([h({type:[Number],json:{write:!0}})],Me.prototype,"objectIds",void 0),d([h({type:String,json:{read:Je.read,write:{writer:Je.write,overridePolicy(e){return{enabled:e&&this.distance>0}}}}})],Me.prototype,"units",void 0),d([h({type:q,json:{write:!0}})],Me.prototype,"timeExtent",void 0),d([h({readOnly:!0})],Me.prototype,"enabled",void 0),Me=Le=d([c("esri.views.layers.support.FeatureFilter")],Me);var ze,He=Me;let Ge=ze=class extends T{constructor(){super(...arguments),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}clone(){return new ze({filter:this.filter&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};d([h({type:He,json:{write:!0}})],Ge.prototype,"filter",void 0),d([h({json:{write:!0}})],Ge.prototype,"includedEffect",void 0),d([h({json:{write:!0}})],Ge.prototype,"excludedEffect",void 0),d([h({type:Boolean,json:{write:!0}})],Ge.prototype,"excludedLabelsVisible",void 0),Ge=ze=d([c("esri.views.layers.support.FeatureEffect")],Ge);var $e=Ge;const Be=C.getLogger("esri.views.layers.FeatureLayerView"),Qe=e=>{let t=class extends e{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.effect=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){k(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","effect","layer.timeInfo","layer.floorInfo","timeExtent"],(()=>this._handleRequiredFieldsChange()),!0),N(this,"view.floors","change",(()=>this._handleRequiredFieldsChange())),N(this,"layer.sublayer","change",(()=>this._handleRequiredFieldsChange()))}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:i}=this;return"outFields"in e&&e.outFields?V(t,[...L(t,e.outFields),...i]):V(t,i)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){Be.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=F(this.filter)?this.filter.createQuery(e):new P(e);if("feature"===this.layer.type){const e=Fe(this);F(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return F(this.timeExtent)&&(t.timeExtent=F(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return A()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:i,objectIdField:r}}=this,s="renderer"in t&&t.renderer,a="orderBy"in t&&t.orderBy,n=t.featureReduction,l=new Set,o=await J([s?s.collectRequiredFields(l,i):null,M(l,t),e?z(l,t):null,F(this.filter)?H(l,t,this.filter):null,this.effect?H(l,t,this.effect.filter):null,n?G(l,t,n):null,a?$(l,t,a):null]);if(t.timeInfo&&this.timeExtent&&B(l,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&t.floorInfo&&B(l,t.fieldsIndex,[t.floorInfo.floorField]),"subtype-group"===t.type){Q(l,i,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null==(t=e.renderer)?void 0:t.collectRequiredFields(l,i),M(l,e)])}));await J(e)}for(const d of o)d.error&&Be.error(d.error);Q(l,i,r),e&&"displayField"in t&&t.displayField&&Q(l,i,t.displayField);const u=Array.from(l).sort();this._set("requiredFields",u)}validateFetchPopupFeatures(e){if(D(e))return null;for(const t of e.clientGraphics){const i=t.layer;if("popupEnabled"in i&&!i.popupEnabled)return new K("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if("popupTemplate"in i&&!Re(i,e))return new K("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})}}async fetchClientPopupFeatures(e){const t=F(e)?e.clientGraphics:null;if(!t||0===t.length)return Promise.resolve([]);const i=[],r=[],s=await this.createPopupQuery(e);for(const a of t){const{layer:t}=a;if(!("popupEnabled"in t))continue;const n=L(this.layer.fieldsIndex,s.outFields),l=Re(t,e);if(!F(l))continue;const o=await this._loadArcadeModules(l);o&&o.arcadeUtils.hasGeometryOperations(l)||!W(n,a)?r.push(a):i.push(a)}return"stream"===this.layer.type||0===r.length?Promise.resolve(i):(s.objectIds=r.map((e=>e.attributes[this.layer.objectIdField])),this.layer.queryFeatures(s).then((e=>i.concat(e.features))).catch((()=>r)))}async createPopupQuery(e){const t=this.layer.createQuery(),i=new Set;let r=!1;const s=F(e)&&e.clientGraphics?e.clientGraphics.map((e=>e.layer)):[this.layer];for(const a of s){if(!("popupEnabled"in a))continue;const t=Re(a,e);if(!F(t))continue;const s=await this._loadArcadeModules(t),n=s&&s.arcadeUtils.hasGeometryOperations(t);r=!("point"!==this.layer.geometryType&&!n);const l=await xe(this.layer,t);for(const e of l)i.add(e)}if(t.returnGeometry=r,t.returnZ=r,t.returnM=r,t.outFields=Array.from(i),t.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=Fe(this);F(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return t}canResume(){return!(!super.canResume()||F(this.timeExtent)&&this.timeExtent.isEmpty)}};return d([h()],t.prototype,"_updatingRequiredFieldsPromise",void 0),d([h({readOnly:!0})],t.prototype,"availableFields",null),d([h({type:$e})],t.prototype,"effect",void 0),d([h({type:He})],t.prototype,"filter",void 0),d([h(j)],t.prototype,"timeExtent",void 0),d([h()],t.prototype,"layer",void 0),d([h({type:Number})],t.prototype,"maximumNumberOfFeatures",null),d([h({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),d([h({readOnly:!0})],t.prototype,"requiredFields",void 0),d([h()],t.prototype,"suspended",void 0),d([h()],t.prototype,"view",void 0),t=d([c("esri.views.layers.FeatureLayerView")],t),t};function De(e){return e&&"openPorts"in e}const Ke=C.getLogger("esri.views.2d.layers.FeatureLayerView2D");let We=class extends(Qe(Se(pe(ye)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new je({process:e=>{switch(e.type){case"processed-edit":return this._doEdit(e);case"refresh":return this._doRefresh();case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._effect=null,this._highlightIds=new Map,this._lastPixelBuffer=0,this._updateHighlight=Y((async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys())))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.filter=null,this.effectLists={included:new de,excluded:new de}}destroy(){var e,t;Z(this._updateClusterSizeTask,(e=>e.remove())),null==(e=this._proxy)||e.destroy(),null==(t=this.tileRenderer)||t.destroy(),this._commandsQueue.destroy()}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(e=>{this._set("_aggregateValueRanges",e.valueRanges)})),k(this,"effect",(e=>{this.effectLists.included.effect=null==e?void 0:e.includedEffect})),k(this,"effect",(e=>{this.effectLists.excluded.effect=null==e?void 0:e.excludedEffect}))])}async _initProxy(){if("isTable"in this.layer&&this.layer.isTable)throw new K("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});this._proxy&&this._proxy.destroy();const e=this._createClientOptions();return this._set("_proxy",new Ne({client:e})),this._proxy.when()}async _initServiceOptions(){this._set("_serviceOptions",await this._createServiceOptions())}get orderByFields(){return"stream"!==this._serviceOptions.type&&this._serviceOptions.orderByFields}get labelsVisible(){const e="subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer];return!this.suspended&&e.some((e=>e.labelingInfo&&e.labelsVisible))}get effect(){return X(this._effect,null)}set effect(e){const t=this._effect;F(t)&&F(t.filter)&&t.filter.enabled&&F(e)&&F(e.filter)&&e.filter.enable(),this._effect=e,this.notifyChange("effect")}get effects(){return this.effect&&[this.effect]||[]}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r}=t,s="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,a="renderer"in t&&t.renderer,n="feature"===t.type?t.gdbVersion:void 0,l="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:o}=this,u="customParameters"in t?JSON.stringify(t.customParameters):void 0,d="apiKey"in t?t.apiKey:void 0,h="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,c=JSON.stringify(this.clips),p=t.featureReduction&&t.featureReduction.toJSON(),y="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),f="sublayers"in this.layer&&this.layer.sublayers.items.reduce(((e,t)=>e+`${t.visible?1:0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`),"");return JSON.stringify({orderBy:y,sublayerHash:f,filterHash:F(this.filter)&&this.filter.toJSON(),effectHash:F(this.effect)&&this.effect.toJSON(),streamFilter:h,gdbVersion:n,definitionExpression:r,historicMoment:l,availableFields:e,renderer:a,labelingInfo:s,timeExtent:o,floors:i,clipsHash:c,featureReduction:p,customParameters:u,apiKey:d})}get hasEffects(){return this.effectLists.included.hasEffects||this.effectLists.excluded.hasEffects}highlight(e){let t;return e instanceof p?t=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?t=[e]:ee.isCollection(e)?t=e.map((e=>e&&e.getAttribute(this.layer.objectIdField))).toArray():Array.isArray(e)&&e.length>0&&(t="number"==typeof e[0]||"string"==typeof e[0]?e:e.map((e=>e&&e.getAttribute(this.layer.objectIdField)))),t&&t.length?(t=t.filter((e=>null!=e)),this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):{remove:()=>{}}}hasHighlight(){return!!this._highlightIds.size}hitTest(e,t){return this._hitTest(e,t)}async queryAggregates(){return(await this._proxy.getAggregates()).map((e=>Oe.fromJSON(e)))}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(e,t,i){const r=o({},t);var s;return t.valueExpression&&(r.viewInfoParams={viewingMode:"map",scale:this.view.scale,spatialReference:null==(s=this.view.spatialReference)?void 0:s.toJSON()}),this._proxy.querySummaryStatistics(this._cleanUpQuery(e),r,i)}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then((e=>{const t=te.fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then((e=>({count:e.count,extent:ie.fromJSON(e.extent)})))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update()}update(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating")}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new Ve({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(k(this,"renderingConfigHash",(()=>this._update())),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(e=>this._edit(e))),"attach")}detach(){this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}async fetchPopupFeatures(e,t){if(F(t)&&t.clientGraphics.length){const e=t.clientGraphics[0];if(e instanceof Oe)return[e];t.clientGraphics=t.clientGraphics.filter((e=>{const{layer:t}=e,i="popupEnabled"in t&&t.popupEnabled,r="popupTemplate"in t&&t.popupTemplate,s=this.view.popup.defaultPopupTemplateEnabled;return i&&(r||s)}))}const i=this.validateFetchPopupFeatures(t);if(i)throw i;if(F(t)&&0===t.clientGraphics.length)return[];const r=this.fetchClientPopupFeatures(t);if(!e)return r;const s=this._fetchServicePopupFeatures(e,t);return re([r,s]).then(se)}async _fetchServicePopupFeatures(e,t){if("stream"===this.layer.type||"ogc-feature"===this.layer.type)return[];const i=await this.createPopupQuery(t),{layer:r}=this,s="renderer"in r&&r.renderer,a=F(t)?t.event:null,n=he({renderer:s,event:a});i.geometry=this.createFetchPopupFeaturesQueryGeometry(e,n);const l=new Set,{objectIdField:o}=r,u=F(t)?t.clientGraphics:null;if(u)for(const d of u)l.add(d.attributes[o]);return r.queryFeatures(i).then((e=>e.features.filter((e=>!l.has(e.attributes[o])))))}createFetchPopupFeaturesQueryGeometry(e,t){return Ie(e,t,this.view)}isUpdating(){var e;const t="renderer"in this.layer&&null!=this.layer.renderer,i=this._commandsQueue.updating,r=null!=this._updatingRequiredFieldsPromise,s=!this._proxy||!this._proxy.isReady,a=this._pipelineIsUpdating,n=null===this.tileRenderer||(null==(e=this.tileRenderer)?void 0:e.updating),l=t&&(i||r||s||a||n);return ae("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${l}\n  -> hasRenderer ${t}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${r}\n  -> updatingProxy ${s}\n  -> updatingPipeline ${a}\n  -> updatingTileRenderer ${n}\n`),l}_createClientOptions(){return{setUpdating:e=>{this._set("_pipelineIsUpdating",e)},emitEvent:e=>{this.emit(e.name,e.event)}}}async _detectQueryMode(e){if("path"in e&&("feature"===this.layer.type||"subtype-group"===this.layer.type)&&"point"===this.layer.geometryType&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&ae("featurelayer-snapshot-enabled"))try{const e=await this.layer.queryFeatureCount();if(e<=ae("featurelayer-snapshot-point-min-threshold"))return{mode:"snapshot",featureCount:e};const t=ae("featurelayer-snapshot-point-max-threshold"),i=ae("featurelayer-snapshot-point-coverage"),r=this.view.extent,s=this.layer.fullExtent,a=null==s?void 0:s.clone().intersection(r),n=F(a)?a.width*a.height:0,l=(null==s?void 0:s.width)*(null==s?void 0:s.height),o=0===l?0:n/l;if(e<=t&&o>=i)return{mode:"snapshot",featureCount:e}}catch(t){Ke.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:t})}return{mode:"on-demand"}}async _createServiceOptions(){var e;const t=this.layer;if("stream"===t.type)return null;const{capabilities:i,objectIdField:r}=t,s=t.fields.map((e=>e.toJSON())),a=t.fullExtent&&t.fullExtent.toJSON(),n=fe(t.geometryType),l=t.timeInfo&&t.timeInfo.toJSON()||null,o=t.spatialReference?t.spatialReference.toJSON():null,u="feature"===t.type?t.globalIdField:null;let d;"ogc-feature"===t.type?d=t.source.getFeatureDefinition():De(t.source)?d=await t.source.openPorts():t.parsedUrl&&(d=U(t.parsedUrl),"dynamicDataSource"in t&&t.dynamicDataSource&&(d.query={layer:JSON.stringify({source:t.dynamicDataSource})}));const h="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,c=null!=(e="subtypeField"in this.layer&&this.layer.subtypeField)?e:null,{mode:p,featureCount:y}=await this._detectQueryMode(d);let f=this.layer.objectIdField;if("feature"===this.layer.type&&F(this.layer.orderBy)&&this.layer.orderBy.length){const e=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;e&&(f=e)}return{type:p,timeReferenceUnknownClient:h,subtypeField:c,featureCount:y,globalIdField:u,maxRecordCount:i.query.maxRecordCount,tileMaxRecordCount:i.query.tileMaxRecordCount,capabilities:i,fields:s,fullExtent:a,geometryType:n,objectIdField:r,source:d,timeInfo:l,spatialReference:o,orderByFields:f}}async _createMemoryServiceOptions(e){const t=await e.openPorts();return u(o({},this._createServiceOptions()),{type:"memory",source:t})}_cleanUpQuery(e){const t=P.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(e){if(this._validateEdit(e))return this._commandsQueue.push({type:"edit",edits:e})}async doRefresh(){return this._commandsQueue.push({type:"refresh"})}_validateEdit(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some((e=>-1===e.objectId||!e.objectId)),r=t&&this.availableFields.includes(t);return i&&!r?(Ke.error(new K("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{effect:t,filter:i}=this;await this._updateRequiredFields();const{renderer:r}=this._getEffectiveRenderer();this._set("_effectiveRenderer",r);const s=this._createSchemaConfig(),a=fe(this.layer.geometryType),n=await ge(r,a,this.layer.featureReduction),l=this._createConfiguration(s,i,t);this._lastPixelBuffer=0===n?0:Math.max(n,this._lastPixelBuffer),l.schema.source.pixelBuffer=this._lastPixelBuffer;const o=this._createTileRendererHash(r);if(o!==this._tileRendererHash){await this._initTileRenderer(r);const e=this._serviceOptions;this.effects.forEach((e=>F(e)&&F(e.filter)&&e.filter.enable())),this.tileRenderer.onConfigUpdate(r);const t={added:this._tileStrategy.tileKeys(),removed:[]},i=this.layer;"stream"!==i.type&&De(i.source)&&(e.source=await i.source.openPorts()),"stream"===i.type&&await this._initServiceOptions(),await this._proxy.startup(this.view.featuresTilingScheme,l,e,t),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(r)}else{const t=await this._proxy.update(l);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(t)}catch(e){ne(e)||Ke.error(e)}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.effects.forEach((e=>F(e)&&F(e.filter)&&e.filter.enable())),this.tileRenderer.onConfigUpdate(r),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload()}this._tileRendererHash=o,this.tileRenderer.invalidateLabels(),this.requestUpdate()}catch(e){}}async _doEdit(e){try{await this._proxy.onEdits(e)}catch(t){ne(t)}}async _doRefresh(){this._lockGPUUploads();try{await this._proxy.refresh()}catch(e){ne(e)}this._unlockGPUUploads()}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1)}_createUpdateClusterSizeTask(e,t){return this.watch("_aggregateValueRanges",(async i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable()}))}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r=me(e.visualVariables);if(F(r)&&"cluster_count"===r.field){const s=e.visualVariables.indexOf(r);e.visualVariables[s]=_e(t,i);const a=e.clone();a.dynamicClusterSize=!0,this._set("_effectiveRenderer",a)}}}_getEffectiveRenderer(){const e="renderer"in this.layer&&this.layer.renderer,t=this.layer.featureReduction;if(F(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"cluster"===t.type&&ve(e)){const i=t,r=[],s=be(r,e,i,this._aggregateValueRanges);return Z(this._updateClusterSizeTask,(e=>e.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,i),{renderer:s,aggregateFields:r,featureReduction:t}}return{renderer:e,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",(()=>{this.requestUpdate()})),t}_releaseTile(e){this.tileRenderer.releaseTile(e)}async _initTileRenderer(e){const t=await async function(e,t){if(!e)return null;switch(e.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new((await import("./SymbolTileRenderer.d1c94c99.js")).default)(t);case"heatmap":return new((await import("./HeatmapTileRenderer.167fe2c5.js")).default)(t)}}(e,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=t,this._set("tileRenderer",t),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(e),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return`${"heatmap"===e.type?"heatmap":"symbol"}.${"dot-density"===e.type}`}_createFeatureDataHash(e,t,i){const r=e.getAttributeHash(),s=JSON.stringify(t),a=F(i)&&JSON.stringify(i.filter),n=JSON.stringify(this.timeExtent);let l="";return this._visibilityOverrides.forEach((e=>l+=e)),`${r}.${s}.${a}.${n}.${l}`}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return!!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=F(e)?e.timeExtent:null,i=F(this.timeExtent)&&F(t)?this.timeExtent.intersection(t):this.timeExtent||t;let r=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const t=F(e)&&e.where;r=this._addFloorFilterClause(t)}if(!this._visibilityOverrides.size&&!i&&!s)return e;const a=F(e)&&e.clone()||new He;return a.hiddenIds=this._visibilityOverrides,a.timeExtent=i,r&&(a.where=r),a}_addFloorFilterClause(e){const t=this.layer;let i=e||"";if("floorInfo"in t&&t.floorInfo){var r;let e=this.view.floors;if(!e||!e.length)return i;null!=(r=t.floorInfo.viewAllLevelIds)&&r.length&&(e=t.floorInfo.viewAllLevelIds);const s=e.filter((e=>""!==e)).map((e=>"'"+e+"'"));s.push("''");const a=t.floorInfo.floorField;let n="("+a+" IN ({ids}) OR "+a+" IS NULL)";if(n=n.replace("{ids}",s.join(", ")),F(i)&&i.includes(a)){let e=new RegExp("AND \\("+a+".*NULL\\)","g");i=i.replace(e,""),e=new RegExp("\\("+a+".*NULL\\)","g"),i=i.replace(e,""),i=i.replace(/\s+/g," ").trim()}i=""!==i?"("+i+") AND "+n:n}return""!==i?i:null}_createConfiguration(e,t,i){const r="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,a=new Array(ce),n=this._injectOverrides(t);a[0]=F(n)?n.toJSON():null,a[1]=F(i)&&i.filter?i.filter.toJSON():null;const l=we(e);if(D(l))return null;const o=le();return{definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:s,historicMoment:r,devicePixelRatio:window.devicePixelRatio||1,filters:a,schema:l,supportsTextureFloat:o.supportsTextureFloat,maxTextureSize:o.maxTextureSize}}_hasRequiredSupport(e){var t;return!("renderer"in e&&"dot-density"===(null==(t=e.renderer)?void 0:t.type)&&!le().supportsTextureFloat&&(Ke.error(new K("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),1))}_onceTilesUpdated(){return this.requestUpdate(),oe(this,"_pipelineIsUpdating",!1)}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads())}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads())}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()}_createSchemaConfig(){const e="feature"===this.layer.type?this.layer.historicMoment:null,t="feature"===this.layer.type?this.layer.gdbVersion:null;return{renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:e,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,effect:this.effect,filter:this.filter,gdbVersion:t,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null,customParameters:u(o({},"customParameters"in this.layer?this.layer.customParameters:void 0),{token:"apiKey"in this.layer?this.layer.apiKey:void 0})}}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight().catch((e=>{ne(e)||Ke.error(e)}))}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight().catch((e=>{ne(e)||Ke.error(e)}))}_setLayersForFeature(e){const t=this.layer;e.layer=t,e.sourceLayer=t}_createHittestResult(e){return this._setLayersForFeature(e),F(e.geometry)&&(e.geometry.spatialReference=this.view.spatialReference),e}async _hitTest(e,t){if(this.suspended||!this.tileRenderer)return null;const i=await this.tileRenderer.hitTest(e,t);if(0===i.length)return await ue(1),null;const r=i[0];if(!(e=>(2147483648&e)>>>31==1)(r)){const e=await this._proxy.getFeature(r);return Z(e,(e=>this._createHittestResult(p.fromJSON(e))))}const s=await this._proxy.getAggregate(r);if(D(s))return null;if(F(s.referenceId)){const e=await this._proxy.getFeature(s.referenceId);return Z(e,(e=>this._createHittestResult(p.fromJSON(e))))}return this._createHittestResult(Oe.fromJSON(s))}};d([h()],We.prototype,"_serviceOptions",void 0),d([h()],We.prototype,"_proxy",void 0),d([h()],We.prototype,"_pipelineIsUpdating",void 0),d([h()],We.prototype,"_effectiveRenderer",void 0),d([h()],We.prototype,"_aggregateValueRanges",void 0),d([h()],We.prototype,"_commandsQueue",void 0),d([h()],We.prototype,"labelsVisible",null),d([h({type:He})],We.prototype,"filter",void 0),d([h({type:$e})],We.prototype,"effect",null),d([h({readOnly:!0})],We.prototype,"effects",null),d([h({readOnly:!0})],We.prototype,"queryMode",null),d([h()],We.prototype,"renderingConfigHash",null),d([h()],We.prototype,"tileRenderer",void 0),d([h()],We.prototype,"updating",void 0),We=d([c("esri.views.2d.layers.FeatureLayerView2D")],We);var Ye=We,Ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ye});export{Ze as F,Ye as Y,He as y};
