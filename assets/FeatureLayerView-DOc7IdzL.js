import{r as u}from"./tslib.es6-B3Jf3DVX.js";import{m as d,a as A,n as y,b as g}from"./subclass-BZA_h8Db.js";import{s as F}from"./Accessor-BLX9ikPh.js";import{watch as $,syncAndInitial as S,on as x}from"./reactiveUtils-C5zUhJQJ.js";import{w as N}from"./FeatureEffect-BEzQmzeC.js";import{d as j}from"./FeatureFilter-BMHRQSxq.js";import{I as E,t as v,i as L,J as R,v as G,M as _,L as M,O as Q,u as h,z as w,j as T}from"./fieldUtils-tmQlKvWo.js";import{o as q}from"./floorFilterUtils-DZ5C6FQv.js";import{b as P}from"./Query-5Xpquc1r.js";import{p as I,n as B}from"./popupUtils-BaLxn3kI.js";const W=O=>{let a=class extends O{constructor(...t){super(...t),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([$(()=>{var e;const t=this.layer;return[t&&"elevationInfo"in t?(e=t.elevationInfo)==null?void 0:e.featureExpressionInfo:null,t&&"displayField"in t?t.displayField:null,t&&"timeInfo"in t&&t.timeInfo,t&&"renderer"in t&&t.renderer,t&&"labelingInfo"in t&&t.labelingInfo,t&&"floorInfo"in t&&t.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),S),x(()=>{var t;return(t=this.view)==null?void 0:t.floors},"change",()=>this._handleRequiredFieldsChange()),x(()=>{const t=this.layer;return t&&"sublayers"in t?t.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){if(!this.layer)return[];const{layer:t,layer:{fieldsIndex:e},requiredFields:i}=this;return"outFields"in t&&t.outFields?E(e,[...v(e,t.outFields),...i]):E(e,i)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(t){this._override("featureEffect",t)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(t){y.getLogger(this).error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(t){throw new Error("missing implementation")}createQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},e=this.filter!=null?this.filter.createQuery(t):new P(t);if("floorInfo"in this.layer&&this.layer.floorInfo){const i=q(this);i!=null&&(e.where=e.where?`(${e.where}) AND (${i})`:i)}return this.timeExtent!=null&&(e.timeExtent=e.timeExtent!=null?e.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),e}createAggregateQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new P(t)}queryFeatures(t,e){throw new Error("missing implementation")}queryObjectIds(t,e){throw new Error("missing implementation")}queryFeatureCount(t,e){throw new Error("missing implementation")}queryExtent(t,e){throw new Error("missing implementation")}async fetchPopupFeaturesFromGraphics(t,e){return this._validateFetchPopupFeatures(t,e),this._fetchPopupFeatures(t,e)}_loadArcadeModules(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(i=>i.type==="expression")?L():Promise.resolve()}_handleRequiredFieldsChange(){const t=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",t),t.then(()=>{this._updatingRequiredFieldsPromise===t&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const t=this.view.type==="3d",{layer:e,layer:{fieldsIndex:i,objectIdField:o}}=this,l="renderer"in e&&e.renderer,f="orderBy"in e&&e.orderBy,n="featureReduction"in e?e.featureReduction:null,r=new Set,p=await Promise.allSettled([l?l.collectRequiredFields(r,i):null,R(r,e),t&&"elevationInfo"in e?G(r,e):null,this.filter!=null?_(r,e,this.filter):null,t||this.featureEffect==null?null:_(r,e,this.featureEffect.filter),!t&&n?M(r,e,n):null,!t&&f?Q(r,e,f):null]);if("timeInfo"in e&&e.timeInfo&&this.timeExtent&&h(r,e.fieldsIndex,[e.timeInfo.startField,e.timeInfo.endField]),"floorInfo"in e&&e.floorInfo&&h(r,e.fieldsIndex,[e.floorInfo.floorField]),e.type==="feature"&&t&&e.infoFor3D!=null&&(e.globalIdField==null&&y.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"),h(r,e.fieldsIndex,[e.globalIdField])),e.type==="subtype-group"){w(r,i,e.subtypeField);const s=e.sublayers.map(c=>{var b;return Promise.all([(b=c.renderer)==null?void 0:b.collectRequiredFields(r,i),R(r,c)])});await Promise.allSettled(s)}if(e.type==="catalog-footprint"&&e.parent){const s=e.parent;h(r,i,[s.itemNameField,s.itemSourceField,s.itemTypeField,s.maxScaleField,s.minScaleField])}for(const s of p)s.status==="rejected"&&y.getLogger(this).error(s.reason);w(r,i,o),t&&"displayField"in e&&e.displayField&&w(r,i,e.displayField);const m=Array.from(r).sort();this._set("requiredFields",m)}_validateFetchPopupFeatures(t,e){if(e!=null)for(const i of t){const o=i.origin&&"layer"in i.origin?i.origin.layer:i.layer;if("popupEnabled"in o&&!o.popupEnabled)throw new g("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:o});if(i.isAggregate){const l="featureReduction"in o?o.featureReduction:null;if(!(l&&"popupTemplate"in l&&l.popupEnabled&&l.popupTemplate))throw new g("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:o})}else if("popupTemplate"in o&&!I(o,e))throw new g("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:o})}}_popupFeatureHasRequiredFields(t,e){return T(e,t)}async _fetchPopupFeatures(t,e){var f;const i=new Array(t.length),o=new Map,l=await this._createPopupQuery(t.map(n=>{var r;return((r=n.origin)==null?void 0:r.layer)??n.layer}),e);for(let n=0;n<t.length;n++){const r=t[n];if(r.isAggregate){i[n]=r;continue}const p=((f=r.origin)==null?void 0:f.layer)??r.layer;if(!p||!("popupEnabled"in p))continue;const m=v(this.layer.fieldsIndex,l.outFields),s=I(p,e);if(s==null)continue;const c=await this._loadArcadeModules(s);F(e),c&&c.arcadeUtils.hasGeometryOperations(s)||!this._popupFeatureHasRequiredFields(r,m)?o.set(r.getObjectId(),{graphic:r,index:n}):i[n]=r}if(this.layer.type==="stream"||this.layer.type==="parquet"||o.size===0)return i.filter(Boolean);l.objectIds=Array.from(o.keys());try{const n=await this.layer.queryFeatures(l,e);for(const r of n.features){const{graphic:{geometry:p,origin:m},index:s}=o.get(r.getObjectId());r.geometry||(r.geometry=p),r.origin=m,i[s]=r}}catch{}return i.filter(Boolean)}async _createPopupQuery(t,e){const i=this.layer.createQuery(),o=new Set;let l=!1;const f=t??[this.layer];for(const n of f){if(!("popupEnabled"in n))continue;const r=I(n,e);if(r==null)continue;const p=await this._loadArcadeModules(r);F(e);const m=p&&p.arcadeUtils.hasGeometryOperations(r);l=!(this.layer.geometryType!=="point"&&!m);const s=await B(this.layer,r);F(e);for(const c of s)o.add(c)}if(i.returnGeometry=l,i.returnZ=l,i.returnM=l,i.outFields=Array.from(o),i.outSpatialReference=this.view.spatialReference,"floorInfo"in this.layer&&this.layer.floorInfo){const n=q(this);n!=null&&(i.where=i.where?`(${i.where}) AND (${n})`:n)}return i}canResume(){return!!super.canResume()&&(this.timeExtent==null||!this.timeExtent.isEmpty)}getTest(){}get test(){}};return u([d()],a.prototype,"_updatingRequiredFieldsPromise",void 0),u([d({readOnly:!0})],a.prototype,"availableFields",null),u([d({readOnly:!0})],a.prototype,"dataUpdating",void 0),u([d({type:N})],a.prototype,"featureEffect",null),u([d({type:j})],a.prototype,"filter",void 0),u([d()],a.prototype,"layer",void 0),u([d({type:Number})],a.prototype,"maximumNumberOfFeatures",null),u([d({readOnly:!0,type:Boolean})],a.prototype,"maximumNumberOfFeaturesExceeded",null),u([d({readOnly:!0})],a.prototype,"requiredFields",void 0),u([d()],a.prototype,"suspended",void 0),u([d()],a.prototype,"view",void 0),a=u([A("esri.views.layers.FeatureLayerView")],a),a};export{W as _};