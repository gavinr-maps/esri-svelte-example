var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,a=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))n.call(t,r)&&s(e,r,t[r]);return e},l=(e,o)=>t(e,r(o));import{ab as d,ac as p,ad as u,cu as y,fJ as c,cT as f,bf as h,m as v,c$ as m,d0 as g,d1 as b,ha as w,d2 as I,ho as x,d7 as P,df as S,g$ as C,r as j,cH as T,hf as F,iL as R,w as q,ds as O,L as B,hi as N,ge as E,cM as L,hs as V,hD as _,bY as D,hj as $}from"./vendor.d0a39f0f.js";import{N as A}from"./SceneService.adf6e30c.js";import{c as K,d as M,b as k,a as G}from"./PointCloudUniqueValueRenderer.9dd51f98.js";import"./resourceUtils.69294d69.js";let U=class extends y{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};d([p({type:String,json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"field",void 0),d([p({readOnly:!0,nonNullable:!0,json:{read:!1}})],U.prototype,"type",void 0),U=d([u("esri.layers.pointCloudFilters.PointCloudFilter")],U);var z,H=U;let J=z=class extends H{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new z({field:this.field,requiredClearBits:h(this.requiredClearBits),requiredSetBits:h(this.requiredSetBits)})}};d([p({type:[c],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],J.prototype,"requiredClearBits",void 0),d([p({type:[c],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],J.prototype,"requiredSetBits",void 0),d([f({pointCloudBitfieldFilter:"bitfield"})],J.prototype,"type",void 0),J=z=d([u("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],J);var Y,Q=J;let W=Y=class extends H{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new Y({field:this.field,includedReturns:h(this.includedReturns)})}};d([p({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"includedReturns",void 0),d([f({pointCloudReturnFilter:"return"})],W.prototype,"type",void 0),W=Y=d([u("esri.layers.pointCloudFilters.PointCloudReturnFilter")],W);var X,Z=W;let ee=X=class extends H{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new X({field:this.field,mode:this.mode,values:h(this.values)})}};d([p({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],ee.prototype,"mode",void 0),d([f({pointCloudValueFilter:"value"})],ee.prototype,"type",void 0),d([p({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],ee.prototype,"values",void 0),ee=X=d([u("esri.layers.pointCloudFilters.PointCloudValueFilter")],ee);const te={key:"type",base:H,typeMap:{value:ee,bitfield:Q,return:Z}};var re;let oe=re=class extends K{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new re(l(a({},this.cloneProperties()),{field:h(this.field)}))}};d([f({pointCloudRGBRenderer:"point-cloud-rgb"})],oe.prototype,"type",void 0),d([p({type:String,json:{write:!0}})],oe.prototype,"field",void 0),oe=re=d([u("esri.renderers.PointCloudRGBRenderer")],oe);const ie={key:"type",base:K,typeMap:{"point-cloud-class-breaks":M,"point-cloud-rgb":oe,"point-cloud-stretch":k,"point-cloud-unique-value":G},errorContext:"renderer"},ne=v.getLogger("esri.layers.PointCloudLayer"),se=$();let ae=class extends(A(m(g(b(w(I(x(P)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?a({url:e},t):e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,r){return Array.isArray(e)?e.map((e=>{const t=new S;return"FieldTypeInteger"===e.type&&((e=h(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new S({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,r,o){C("layerDefinition.drawingInfo.renderer",e.write(null,o),t)}load(e){const t=j(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(T).then((()=>this._fetchService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){const t=F(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t}formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const r=e.fieldInfos.find((e=>e.fieldName===t.name));if(!r)return;const o=new R({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const r=e.fieldInfos.find((e=>e.fieldName===t.name));if(!r)return;const o=new R({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new q("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new q("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===r.name){const e=O(this.parsedUrl.path,`./statistics/${o.key}`);return B(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new q("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,l(a({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new q("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new q("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new q("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&ne.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&ne.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};d([p({type:["PointCloudLayer"]})],ae.prototype,"operationalLayerType",void 0),d([p(N)],ae.prototype,"popupEnabled",void 0),d([p({type:E,json:{name:"popupInfo",write:!0}})],ae.prototype,"popupTemplate",void 0),d([p({readOnly:!0,json:{read:!1}})],ae.prototype,"defaultPopupTemplate",null),d([p({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ae.prototype,"opacity",void 0),d([p({type:["show","hide"]})],ae.prototype,"listMode",void 0),d([p({types:[te],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ae.prototype,"filters",void 0),d([p({type:[S]})],ae.prototype,"fields",void 0),d([p(se.fieldsIndex)],ae.prototype,"fieldsIndex",void 0),d([L("service","fields",["fields","attributeStorageInfo"])],ae.prototype,"readServiceFields",null),d([p(se.outFields)],ae.prototype,"outFields",void 0),d([p({readOnly:!0})],ae.prototype,"attributeStorageInfo",void 0),d([p(V)],ae.prototype,"elevationInfo",null),d([p({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ae.prototype,"path",void 0),d([p(_)],ae.prototype,"legendEnabled",void 0),d([p({types:ie,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:ie},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ae.prototype,"renderer",void 0),d([D("renderer")],ae.prototype,"writeRenderer",null),d([p({json:{read:!1},readOnly:!0})],ae.prototype,"type",void 0),ae=d([u("esri.layers.PointCloudLayer")],ae);var le=ae;export{le as default};
