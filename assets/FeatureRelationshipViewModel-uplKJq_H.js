import{e as l}from"./Evented-CXIxDjmW.js";import{d as L}from"./Graphic-Dc7F67nR.js";import{S as $,t as _,x as b}from"./Accessor-D6mNnsWy.js";import{O as x,y as a,b as D}from"./subclass-BR3PhgZG.js";import{i as E}from"./Clonable-cKbRam6-.js";import{d as F,P as H,V as A}from"./reactiveUtils-BFQ0BtrB.js";import{s as G}from"./Identifiable-BLvpQbOc.js";import P from"./RelationshipQuery-kHvI2dm7.js";import{q as N,T as S}from"./featureUtils-2Q65ejfE.js";import{Y as T}from"./featureFormUtils-CZvTbSTn.js";const q=100;let o=class extends E(G($)){constructor(t){super(t),this._loaded=!1,this._queryAbortController=null,this._queryPageAbortController=null,this._queryFeatureCountAbortController=null,this.featuresPerPage=10,this.description=null,this.graphic=null,this.layer=null,this.map=null,this.orderByFields=null,this.featureCount=0,this.relationshipId=null,this.showAllEnabled=!1,this.title=null,this._cancelQuery=()=>{const{_queryAbortController:e}=this;e&&e.abort(),this._queryAbortController=null},this._cancelQueryFeatureCount=()=>{const{_queryFeatureCountAbortController:e}=this;e&&e.abort(),this._queryFeatureCountAbortController=null},this._cancelQueryPage=()=>{const{_queryPageAbortController:e}=this;e&&e.abort(),this._queryPageAbortController=null},this._queryController=async()=>{this._cancelQuery();const e=new AbortController;this._queryAbortController=e,await _(this._query()),this._queryAbortController===e&&(this._queryAbortController=null)},this._queryFeatureCountController=async()=>{this._loaded=!1,this._cancelQueryFeatureCount();const e=new AbortController;this._queryFeatureCountAbortController=e,await _(this._queryFeatureCount()),this._queryFeatureCountAbortController===e&&(this._queryFeatureCountAbortController=null),this._loaded=!0},this._queryPageController=async()=>{const e=new AbortController;this._queryPageAbortController=e,await _(this._queryPage()),this._queryPageAbortController===e&&(this._queryPageAbortController=null)},this._queryDebounced=b(this._queryController,q),this._queryFeatureCountDebounced=b(this._queryFeatureCountController,q),this._queryPageDebounced=b(this._queryPageController,q),this._query=async()=>{const{_queryAbortController:e,relatedFeatures:r}=this;this.featureCount&&(this._destroyRelatedFeatureViewModels(),this.featurePage=1,r.destroyAll(),this.destroyed||r.addMany(this._sliceFeatures(await this._queryRelatedFeatures({signal:e==null?void 0:e.signal}))))},this.addHandles([F(()=>{var e;return[this.displayCount,this.graphic,this.layer,(e=this.layer)==null?void 0:e.loaded,this.map,this.orderByFields,this.relationshipId,this.featuresPerPage,this.showAllEnabled,this.canQuery,this.featureCount]},()=>this._queryDebounced(),H),F(()=>[this.featurePage,this.showAllEnabled],()=>this._queryPageDebounced()),F(()=>[this.layer,this.relationshipId,this.objectId,this.canQuery],()=>this._queryFeatureCountDebounced())])}destroy(){this._destroyRelatedFeatureViewModels(),this.relatedFeatures.destroyAll(),this._cancelQuery(),this._cancelQueryFeatureCount(),this._cancelQueryPage()}set featurePage(t){const{featuresPerPage:e,featureCount:r}=this,i=1,s=Math.ceil(r/e)||1;this._set("featurePage",Math.min(Math.max(t,i),s))}get featurePage(){return this._get("featurePage")}get orderByFieldsFixedCasing(){const{orderByFields:t,relatedLayer:e}=this;return t&&(e!=null&&e.loaded)?t.map(r=>{const i=r.clone();return i.field=N(r.field,e),i}):t??[]}get supportsCacheHint(){var t,e,r;return!!((r=(e=(t=this.layer)==null?void 0:t.capabilities)==null?void 0:e.queryRelated)!=null&&r.supportsCacheHint)}get canLoad(){return!!this.map&&this.relationshipId!=null&&typeof this.objectId=="number"}get canQuery(){var e,r;const t=(r=(e=this.layer)==null?void 0:e.capabilities)==null?void 0:r.queryRelated;return!!(this.relatedLayer&&this.relationship&&this.relationshipId!=null&&this.objectId!=null&&(t!=null&&t.supportsCount)&&(t!=null&&t.supportsPagination))}get itemDescriptionFieldName(){var t;return((t=this.orderByFieldsFixedCasing[0])==null?void 0:t.field)||null}set displayCount(t){this._set("displayCount",Math.min(Math.max(t,0),10))}get displayCount(){return this._get("displayCount")}get objectId(){var t,e;return(this.objectIdField&&((e=(t=this.graphic)==null?void 0:t.attributes)==null?void 0:e[this.objectIdField]))??null}get objectIdField(){var t;return((t=this.layer)==null?void 0:t.objectIdField)||null}get relatedFeatures(){return this._get("relatedFeatures")||new A}get relatedLayer(){const{layer:t,map:e,relationship:r}=this;return t!=null&&t.loaded&&e&&r?S(e,t,r)??null:null}get relationship(){var r;const{relationshipId:t,layer:e}=this;return t!=null?((r=e==null?void 0:e.relationships)==null?void 0:r.find(({id:i})=>i===t))??null:null}get relatedFeatureViewModels(){return this._get("relatedFeatureViewModels")||new A}get state(){const{_queryAbortController:t,_queryFeatureCountAbortController:e,_queryPageAbortController:r,canQuery:i,_loaded:s,canLoad:u}=this;return e||u&&!s?"loading":t||r?"querying":i?"ready":"disabled"}getRelatedFeatureByObjectId(t){return this.relatedFeatures.find(e=>e.getObjectId()===t)}refresh(){this._queryFeatureCountDebounced()}_destroyRelatedFeatureViewModels(){var t;(t=this.relatedFeatureViewModels)==null||t.destroyAll()}async _queryFeatureCount(){const{layer:t,relatedLayer:e,relationshipId:r,objectId:i,_queryFeatureCountAbortController:s,canQuery:u,supportsCacheHint:h}=this;if(await(t==null?void 0:t.load()),await(e==null?void 0:e.load()),!u||!t||!e||i==null)return void this._set("featureCount",0);const p=e.createQuery(),{historicMoment:y,gdbVersion:n}=t,c=new P({cacheHint:h,gdbVersion:n,historicMoment:y,relationshipId:r,returnGeometry:!1,objectIds:[i],where:p.where??void 0}),C=await t.queryRelatedFeaturesCount(c,{signal:s==null?void 0:s.signal});this._set("featureCount",C[i]||0)}_sliceFeatures(t){const{showAllEnabled:e,displayCount:r}=this;return e?t:r?t.slice(0,r):[]}async _queryPage(){const{relatedFeatures:t,featurePage:e,showAllEnabled:r,_queryPageAbortController:i,featureCount:s}=this;!r||e<2||!s||t.addMany(await this._queryRelatedFeatures({signal:i==null?void 0:i.signal}))}async _queryRelatedFeatures(t){var m;const{orderByFieldsFixedCasing:e,showAllEnabled:r,featuresPerPage:i,displayCount:s,layer:u,relationshipId:h,featurePage:p,featureCount:y,relatedLayer:n,supportsCacheHint:c}=this,{canQuery:C,objectId:g}=this;if(!C||!u||!n||g==null)return[];const w=r?((p-1)*i+y)%y:0,I=r?i:s,v=n.objectIdField,M=[...e.map(d=>d.field),...T(n),v].filter(x),j=e.map(d=>`${d.field} ${d.order}`),Q=n.createQuery(),{historicMoment:O,gdbVersion:R}=u,V=new P({orderByFields:j,start:w,num:I,outFields:M,cacheHint:c,historicMoment:O,gdbVersion:R,relationshipId:h,returnGeometry:!1,objectIds:[g],where:Q.where??void 0}),B=await u.queryRelatedFeatures(V,{signal:t==null?void 0:t.signal}),f=((m=B[g])==null?void 0:m.features)||[];return f.forEach(d=>{d.sourceLayer=n,d.layer=n}),f}};l([a()],o.prototype,"_loaded",void 0),l([a()],o.prototype,"_queryAbortController",void 0),l([a()],o.prototype,"_queryPageAbortController",void 0),l([a()],o.prototype,"_queryFeatureCountAbortController",void 0),l([a({value:1})],o.prototype,"featurePage",null),l([a()],o.prototype,"featuresPerPage",void 0),l([a({readOnly:!0})],o.prototype,"orderByFieldsFixedCasing",null),l([a({readOnly:!0})],o.prototype,"supportsCacheHint",null),l([a({readOnly:!0})],o.prototype,"canLoad",null),l([a({readOnly:!0})],o.prototype,"canQuery",null),l([a()],o.prototype,"description",void 0),l([a({readOnly:!0})],o.prototype,"itemDescriptionFieldName",null),l([a({value:3})],o.prototype,"displayCount",null),l([a({type:L})],o.prototype,"graphic",void 0),l([a()],o.prototype,"layer",void 0),l([a()],o.prototype,"map",void 0),l([a({readOnly:!0})],o.prototype,"objectId",null),l([a({readOnly:!0})],o.prototype,"objectIdField",null),l([a()],o.prototype,"orderByFields",void 0),l([a({readOnly:!0})],o.prototype,"relatedFeatures",null),l([a({readOnly:!0})],o.prototype,"relatedLayer",null),l([a({readOnly:!0})],o.prototype,"relationship",null),l([a()],o.prototype,"featureCount",void 0),l([a({readOnly:!0})],o.prototype,"relatedFeatureViewModels",null),l([a()],o.prototype,"relationshipId",void 0),l([a()],o.prototype,"showAllEnabled",void 0),l([a()],o.prototype,"state",null),l([a()],o.prototype,"title",void 0),o=l([D("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")],o);const te=o;export{te as F};
