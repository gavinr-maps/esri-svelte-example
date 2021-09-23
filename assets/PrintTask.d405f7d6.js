var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,o=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))n.call(t,r)&&s(e,r,t[r]);return e},l=(e,a)=>t(e,r(a));import{ab as u,ac as c,b8 as y,cU as p,ad as d,dd as f,a9 as m,cu as h,c0 as g,de as b,df as v,cO as S,cQ as w,cP as P,L as x,E as D,F as I,dg as L,dh as O,di as G,dj as M,dk as V,r as T,dl as j,b9 as J,dm as N,af as F,dn as R,dp as k,J as E,dq as A,M as C,w as U,cR as _}from"./vendor.d0a39f0f.js";import{a as $}from"./GPMessage.f41196e5.js";import{o as q}from"./floorFilterUtils.798a8eb5.js";let z=class extends m{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};u([c({type:y})],z.prototype,"outSpatialReference",void 0),u([c({type:p})],z.prototype,"processExtent",void 0),u([c({type:y})],z.prototype,"processSpatialReference",void 0),u([c({nonNullable:!0})],z.prototype,"returnFeatureCollection",void 0),u([c({nonNullable:!0})],z.prototype,"returnM",void 0),u([c({nonNullable:!0})],z.prototype,"returnZ",void 0),z=u([d("esri/rest/geoprocessor/GPOptions")],z),z.from=f(z);var B=z;let K=class extends h{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};u([c({type:p})],K.prototype,"extent",void 0),u([c()],K.prototype,"height",void 0),u([c()],K.prototype,"href",void 0),u([c()],K.prototype,"opacity",void 0),u([c()],K.prototype,"rotation",void 0),u([c()],K.prototype,"scale",void 0),u([c()],K.prototype,"visible",void 0),u([c()],K.prototype,"width",void 0),K=u([d("esri.layer.support.MapImage")],K);var W=K;let Z=class extends h{constructor(e){super(e),this.itemId=null,this.url=null}};u([c({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],Z.prototype,"itemId",void 0),u([c({type:String,json:{write:!0}})],Z.prototype,"url",void 0),Z=u([d("esri.rest.support.DataFile")],Z);var Q=Z;const Y=new g({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let H=class extends h{constructor(e){super(e),this.distance=0,this.units=null}};u([c({json:{write:!0}})],H.prototype,"distance",void 0),u([c({json:{read:Y.read,write:Y.write}})],H.prototype,"units",void 0),H=u([d("esri/rest/support/LinearUnit")],H);var X=H;const ee=new g({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let te=class extends h{constructor(e){super(e),this.dataType=null,this.value=null}};u([c({json:{read:ee.read,write:ee.write}})],te.prototype,"dataType",void 0),u([c()],te.prototype,"value",void 0),te=u([d("esri.rest.support.ParameterValue")],te);var re=te;let ae=class extends h{constructor(e){super(e),this.format=null,this.itemId=null,this.url=null}};u([c()],ae.prototype,"format",void 0),u([c({json:{read:{source:"itemID"},write:{target:"itemID"}}})],ae.prototype,"itemId",void 0),u([c()],ae.prototype,"url",void 0),ae=u([d("esri/rest/support/RasterData")],ae);var ie,ne=ae;async function se(e,t,r,a,i){const n={},s={},u=[];return function(e,t,r){for(const a in e){const i=e[a];if(i&&"object"==typeof i&&i instanceof S){const{features:e}=i;r[a]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}}}(a,u,n),w(u).then((u=>{const{outSpatialReference:c,processExtent:y,processSpatialReference:p,returnFeatureCollection:d,returnM:f,returnZ:m}=r,{path:h}=P(e);for(const e in n){const t=n[e];s[e]=u.slice(t[0],t[1])}const g=c?c.wkid||c:null,b=p?p.wkid||p:null,v="execute"===t?{returnFeatureCollection:d||void 0,returnM:f||void 0,returnZ:m||void 0}:null,S=le(l(o(o(o({},y?{context:{extent:y,outSR:g,processSR:b}}:{"env:outSR":g,"env:processSR":b}),a),v),{f:"json"}),null,s),w=l(o({},i),{query:S});return x(`${h}/${t}`,w)}))}function oe(e){const t=e.dataType,r=re.fromJSON(e);switch(t){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return r;case"GPDate":r.value=new Date(r.value);break;case"GPDataFile":r.value=Q.fromJSON(r.value);break;case"GPLinearUnit":r.value=X.fromJSON(r.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const t=e.value.url;r.value=t?Q.fromJSON(r.value):S.fromJSON(r.value);break}case"GPRasterData":case"GPRasterDataLayer":{const t=e.value.mapImage;r.value=t?W.fromJSON(t):ne.fromJSON(r.value);break}case"GPField":r.value=v.fromJSON(r.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return r;case"GPMultiValue:GPDate":{const e=r.value;r.value=e.map((e=>new Date(e)));break}case"GPMultiValue:GPDataFile":r.value=r.value.map((e=>Q.fromJSON(e)));break;case"GPMultiValue:GPLinearUnit":r.value=r.value.map((e=>X.fromJSON(e)));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":r.value=r.value.map((e=>S.fromJSON(e)));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":r.value=r.value.map((e=>e?W.fromJSON(e):ne.fromJSON(r.value)));break;case"GPMultiValue:GPField":r.value=r.value.map((e=>v.fromJSON(e)))}return r}function le(e,t,r){for(const a in e){const t=e[a];Array.isArray(t)?e[a]=JSON.stringify(t.map((e=>le({item:e},!0).item))):t instanceof Date&&(e[a]=t.getTime())}return b(e,t,r)}const ue=new g({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let ce=ie=class extends h{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:t,sourceUrl:r}=this,{path:a}=P(r),i=l(o(o({},this.requestOptions),e),{query:{f:"json"}});return this._clearTimer(),x(`${a}/jobs/${t}/cancel`,i).then((e=>{const t=ie.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:t}=P(this.sourceUrl),r=l(o(o({},this.requestOptions),e),{query:{f:"json"}}),a=`${t}/jobs/${this.jobId}`;return x(a,r).then((({data:e})=>{const t=ie.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}fetchResultData(e,t,r){t=B.from(t||{});const{returnFeatureCollection:a,returnM:i,returnZ:n,outSpatialReference:s}=t,{path:u}=P(this.sourceUrl),c=le({returnFeatureCollection:a,returnM:i,returnZ:n,outSR:s,returnType:"data",f:"json"},null),y=l(o(o({},this.requestOptions),r),{query:c}),p=`${u}/jobs/${this.jobId}/results/${e}`;return x(p,y).then((e=>oe(e.data)))}fetchResultImage(e,t,r){const{path:a}=P(this.sourceUrl),i=le(l(o({},t.toJSON()),{f:"json"})),n=l(o(o({},this.requestOptions),r),{query:i}),s=`${a}/jobs/${this.jobId}/results/${e}`;return x(s,n).then((e=>oe(e.data)))}async fetchResultMapImageLayer(){const{path:e}=P(this.sourceUrl),t=e.indexOf("/GPServer/"),r=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new((await import("./MapImageLayer.fe10efb8.js")).default)({url:r})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:r,statusCallback:a}=e;return new Promise(((e,i)=>{D(r,(()=>{this._clearTimer(),i(I())})),this._clearTimer();const n=setInterval((()=>{this._timer||i(I()),this.checkJobStatus(this.requestOptions).then((t=>{const{jobStatus:r}=t;switch(this.jobStatus=r,r){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":a&&a(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),i(this)}}))}),t);this._timer=n}))}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};u([c()],ce.prototype,"jobId",void 0),u([c({json:{read:ue.read}})],ce.prototype,"jobStatus",void 0),u([c({type:[$]})],ce.prototype,"messages",void 0),u([c()],ce.prototype,"requestOptions",void 0),u([c({json:{write:!0}})],ce.prototype,"sourceUrl",void 0),ce=ie=u([d("esri.rest.support.JobInfo")],ce);var ye=ce;const pe=new g({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"});pe.fromJSON.bind(pe);const de=pe.toJSON.bind(pe),fe=new g({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"});fe.fromJSON.bind(fe);const me=fe.toJSON.bind(fe),he="simple-marker",ge="simple-line";function be(e,t){const{graphic:r,renderer:a,symbol:i}=t,n=i.type;if("text"===n||"shield-label-symbol"===n||!("visualVariables"in a)||!a.visualVariables)return;const s=a.getVisualVariablesForType("size"),o=a.getVisualVariablesForType("color"),l=a.getVisualVariablesForType("opacity"),u=a.getVisualVariablesForType("rotation"),c=s[0],y=o[0],p=l[0],d=u[0];if(c){const t=n===he?i.style:null,a=L(c,r,{shape:t});null!=a&&(n===he?e.size=O(a):"picture-marker"===n?(e.width=O(a),e.height=O(a)):n===ge?e.width=O(a):e.outline&&(e.outline.width=O(a)))}if(y){const t=G(y,r);(t&&n===he||n===ge||"simple-fill"===n)&&(e.color=t?t.toJSON():void 0)}if(p){const t=M(p,r);null!=t&&e.color&&(e.color[3]=Math.round(255*t))}d&&(e.angle=-V(a,r))}function ve(e){return e&&"bing-maps"===e.type}function Se(e){return e&&"csv"===e.type}function we(e){return e&&"feature"===e.type}function Pe(e){return e&&"geojson"===e.type}function xe(e){return e&&"graphics"===e.type}function De(e){return e&&"group"===e.type}function Ie(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function Le(e){return e&&"imagery"===e.type}function Oe(e){return e&&"kml"===e.type}function Ge(e){return e&&"map-image"===e.type}function Me(e){return e&&"map-notes"===e.type}function Ve(e){return e&&"open-street-map"===e.type}function Te(e){return e&&"stream"===e.type}function je(e){return e&&"tile"===e.type}function Je(e){return e&&"vector-tile"===e.type}function Ne(e){return e&&"web-tile"===e.type}function Fe(e){return e&&"wms"===e.type}function Re(e){return e&&"wmts"===e.type}let ke=class extends m{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};u([c()],ke.prototype,"attributionVisible",void 0),u([c()],ke.prototype,"exportOptions",void 0),u([c()],ke.prototype,"forceFeatureAttributes",void 0),u([c()],ke.prototype,"format",void 0),u([c()],ke.prototype,"label",void 0),u([c()],ke.prototype,"layout",void 0),u([c()],ke.prototype,"layoutOptions",void 0),u([c()],ke.prototype,"outScale",void 0),u([c()],ke.prototype,"scalePreserved",void 0),u([c()],ke.prototype,"showLabels",void 0),ke=u([d("esri.rest.support.PrintTemplate")],ke);var Ee=ke;const Ae={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},Ce=new g({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),Ue=new g({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),_e=new Map;async function $e(e,t,r){const a=ze(e);let i=_e.get(a);return Promise.resolve().then((()=>i?{data:i.gpMetadata}:(i={gpServerUrl:a,is11xService:!1,legendLayerNameMap:[],legendLayers:[]},x(a,{query:{f:"json"}})))).then((e=>(i.gpMetadata=e.data,i.cimVersion=i.gpMetadata.cimVersion,i.is11xService=!!i.cimVersion,_e.set(a,i),qe(t,i)))).then((a=>{const n=function(e){return e.gpMetadata&&e.gpMetadata.executionType?Ue.fromJSON(e.gpMetadata.executionType):"sync"}(i);let s;const o=e=>"sync"===n?e.results&&e.results[0]&&e.results[0].value:s.fetchResultData("Output_File",null,r).then((e=>e.value));return"async"===n?async function(e,t,r,a){return r=B.from(r||{}),se(e,"submitJob",r,t,a).then((t=>{const r=ye.fromJSON(t.data);return r.sourceUrl=e,r}))}(e,a,null,r).then((e=>(s=e,e.waitForJobCompletion({interval:t.updateDelay}).then(o)))):async function(e,t,r,a){return se(e,"execute",r=B.from(r||{}),t,a).then((e=>{const t=e.data.results||[],r=e.data.messages||[];return{results:t.map(oe),messages:r.map((e=>$.fromJSON(e)))}}))}(e,a,null,r).then(o)}))}async function qe(e,t){t=t||{is11xService:!1,legendLayerNameMap:[],legendLayers:[]};const r=e.template||new Ee;null==r.showLabels&&(r.showLabels=!0);const a=r.exportOptions;let i;const n=me(r.layout);if(a&&(i={dpi:a.dpi},"map_only"===n.toLowerCase()||""===n)){const e=a.width,t=a.height;i.outputSize=[e,t]}const s=r.layoutOptions;let o;if(s){let e,t;"Miles"===s.scalebarUnit||"Kilometers"===s.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==s.scalebarUnit&&"Feet"!==s.scalebarUnit||(e="Meters",t="Feet"),o={titleText:s.titleText,authorText:s.authorText,copyrightText:s.copyrightText,customTextElements:s.customTextElements,scaleBarOptions:{metricUnit:Ce.toJSON(e),metricLabel:Ae[e],nonMetricUnit:Ce.toJSON(t),nonMetricLabel:Ae[t]}}}let l=null;s&&s.legendLayers&&(l=s.legendLayers.map((e=>{t.legendLayerNameMap[e.layerId]=e.title;const r={id:e.layerId};return e.subLayerIds&&(r.subLayerIds=e.subLayerIds),r})));const u=await async function(e,t,r){const a=e.view;let i=a.spatialReference;const n={operationalLayers:await Be(a,t,r)};let s=r.ssExtent||e.extent||a.extent;if(i&&i.isWrappable&&(s=s.clone()._normalize(!0),i=s.spatialReference),n.mapOptions={extent:s&&s.toJSON(),spatialReference:i&&i.toJSON(),showAttribution:t.attributionVisible},r.ssExtent=null,a.background&&(n.background=a.background.toJSON()),a.rotation&&(n.mapOptions.rotation=-a.rotation),t.scalePreserved&&(n.mapOptions.scale=t.outScale||a.scale),a.timeExtent){const e=T(a.timeExtent.start)?a.timeExtent.start.getTime():null,t=T(a.timeExtent.end)?a.timeExtent.end.getTime():null;n.mapOptions.time=[e,t]}return n}(e,r,t);if(u.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),r=/[\u0600-\u06FF]/,a=t=>{const a=t.text,i=t.font,n=i&&i.family&&i.family.toLowerCase();a&&i&&("arial"===n||"arial unicode ms"===n)&&(i.family=e.test(a)?"Arial Unicode MS":"Arial","normal"!==i.style&&r.test(a)&&(i.family="Arial Unicode MS"))},i=()=>{throw new U("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};u.operationalLayers.forEach((e=>{var r,n,s;null!=(r=e.featureCollection)&&r.layers?e.featureCollection.layers.forEach((e=>{var r,n,s,o;if(null!=(r=e.layerDefinition)&&null!=(n=r.drawingInfo)&&null!=(s=n.renderer)&&s.symbol){const r=e.layerDefinition.drawingInfo.renderer;"esriTS"===r.symbol.type?a(r.symbol):"CIMSymbolReference"!==r.symbol.type||t.is11xService||i()}null!=(o=e.featureSet)&&o.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?a(e.symbol):"CIMSymbolReference"!==e.symbol.type||t.is11xService||i())}))})):!t.is11xService&&null!=(n=e.layerDefinition)&&null!=(s=n.drawingInfo)&&s.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&i()}))}e.outSpatialReference&&(u.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(u,{exportOptions:i,layoutOptions:o||{}}),Object.assign(u.layoutOptions,{legendOptions:{operationalLayers:null!=l?l:t.legendLayers.slice()}}),t.legendLayers.length=0,_e.set(t.gpServerUrl,t);const c={Web_Map_as_JSON:JSON.stringify(u),Format:de(r.format),Layout_Template:n};return e.extraParameters&&Object.assign(c,e.extraParameters),c}function ze(e){let t=e;const r=t.lastIndexOf("/GPServer/");return r>0&&(t=t.slice(0,r+9)),t}async function Be(e,t,r){const a=[],i={layerView:null,printTemplate:t,view:e};let n=0;t.scalePreserved&&(n=t.outScale||e.scale);const s=function(e,t){const r=e.allLayerViews.items;if(t===e.scale)return r.filter((e=>!e.suspended));const a=new Array;for(const i of r)Ie(i.parent)&&!a.includes(i.parent)||!i.visible||t&&"isVisibleAtScale"in i&&!i.isVisibleAtScale(t)||a.push(i);return a}(e,n);for(const o of s){const e=o.layer;if(!e.loaded||De(e))continue;let t;i.layerView=o,t=ve(e)?Ke(e):Se(e)?await We(e,i,r):we(e)?await Qe(e,i,r):Pe(e)?await Ye(e,i,r):xe(e)?await He(e,i,r):Le(e)?Xe(e,r):Oe(e)?await et(e,i,r):Ge(e)?tt(e,i,r):Me(e)?await rt(i,r):Ve(e)?{type:"OpenStreetMap"}:Te(e)?await it(e,i,r):je(e)?nt(e):Je(e)?await st(e,i,r):Ne(e)?ot(e):Fe(e)?lt(e):Re(e)?ut(e):await at(e,i,r),t&&(Array.isArray(t)?a.push(...t):(t.id=e.id,t.title=r.legendLayerNameMap[e.id]||e.title,t.opacity=e.opacity,t.minScale=e.minScale||0,t.maxScale=e.maxScale||0,a.push(t)))}if(n&&a.forEach((e=>{e.minScale=0,e.maxScale=0})),e.graphics&&e.graphics.length){const i=await Ze(null,e.graphics,t,r);i&&a.push(i)}return a}function Ke(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async function We(e,t,r){r.legendLayers&&r.legendLayers.push({id:e.id});const a=t.layerView,i=t.printTemplate;let n;return!r.is11xService||a.filter?Ze(e,await dt(a),i,r):(n={type:"CSV"},e.write(n,{origin:"web-map"}),delete n.popupInfo,delete n.layerType,n.showLabels=i.showLabels&&e.labelsVisible,n)}async function Ze(e,t,r,a){let i;const n={layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}},s={layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}},o={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}},l={layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}},u={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}};if(u.layerDefinition.name="textLayer",delete u.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?n.layerDefinition.name=s.layerDefinition.name=o.layerDefinition.name=l.layerDefinition.name=a.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();n.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t,l.layerDefinition.drawingInfo.renderer=t}if(r.showLabels&&e.labelsVisible&&"function"==typeof e.write){var c,y;const t=null==(c=e.write({},{origin:"web-map"}).layerDefinition)||null==(y=c.drawingInfo)?void 0:y.labelingInfo;t&&(i=!0,n.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t,l.layerDefinition.drawingInfo.labelingInfo=t)}}let p;null!=e&&e.renderer||i||(delete n.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo);const d=null==e?void 0:e.fieldsIndex,f=null==e?void 0:e.renderer;if(d){if(f&&"function"==typeof f.collectRequiredFields){const e=new Set;await f.collectRequiredFields(e,d),p=Array.from(e)}const e=d.fields.map((e=>e.toJSON()));n.layerDefinition.fields=e,s.layerDefinition.fields=e,o.layerDefinition.fields=e,l.layerDefinition.fields=e}const m=t&&t.length;let h;for(let b=0;b<m;b++){const i=t[b]||t.getItemAt(b);if(!1===i.visible||!i.geometry)continue;if(h=i.toJSON(),h.hasOwnProperty("popupTemplate")&&delete h.popupTemplate,h.geometry&&h.geometry.z&&delete h.geometry.z,h.symbol&&h.symbol.outline&&"esriCLS"===h.symbol.outline.type&&!a.is11xService)continue;!a.is11xService&&h.symbol&&h.symbol.outline&&h.symbol.outline.color&&h.symbol.outline.color[3]&&(h.symbol.outline.color[3]=255);const c=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!h.symbol&&e&&e.renderer&&c&&!a.is11xService){const t=e.renderer,r=await t.getSymbolAsync(i);if(!r)continue;h.symbol=r.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&be(h.symbol,{renderer:t,graphic:i,symbol:r})}if(h.symbol&&(h.symbol.angle||delete h.symbol.angle,ft(h.symbol)?h.symbol=await yt(h.symbol,a):h.symbol.text&&delete h.attributes),(!r||!r.forceFeatureAttributes)&&p&&p.length){const e={};p.forEach((t=>{h.attributes&&h.attributes.hasOwnProperty(t)&&(e[t]=h.attributes[t])})),h.attributes=e}"polygon"===i.geometry.type?n.featureSet.features.push(h):"polyline"===i.geometry.type?s.featureSet.features.push(h):"point"===i.geometry.type?h.symbol&&h.symbol.text?u.featureSet.features.push(h):o.featureSet.features.push(h):"multipoint"===i.geometry.type?l.featureSet.features.push(h):"extent"===i.geometry.type&&(h.geometry=J.fromExtent(i.geometry).toJSON(),n.featureSet.features.push(h))}const g=[n,s,l,o,u].filter((e=>e.featureSet.features.length>0));for(const b of g){const e=b.featureSet.features.every((e=>e.symbol));!e||r&&r.forceFeatureAttributes||b.featureSet.features.forEach((e=>{delete e.attributes})),e&&delete b.layerDefinition.drawingInfo,b.layerDefinition.drawingInfo&&b.layerDefinition.drawingInfo.renderer&&await pt(b.layerDefinition.drawingInfo.renderer,a)}return g.length?{featureCollection:{layers:g},showLabels:i}:null}async function Qe(e,t,r){var a,i;let n;r.legendLayers&&r.legendLayers.push({id:e.id});const s=e.renderer;if(e.featureReduction||s&&"dot-density"===s.type&&(!r.is11xService||parseFloat(r.cimVersion)<2.6))return at(e,t,r);const o=t.layerView,{printTemplate:l,view:u}=t,c=s&&("valueExpression"in s&&s.valueExpression||"hasVisualVariables"in s&&s.hasVisualVariables()),y="feature-layer"!==(null==(a=e.source)?void 0:a.type)&&"ogc-feature"!==(null==(i=e.source)?void 0:i.type);if(!r.is11xService&&c||e.featureReduction||o.filter||y||!s||"field"in s&&null!=s.field&&("string"!=typeof s.field||!e.getField(s.field))){const t=await dt(o);n=await Ze(e,t,l,r)}else{var p,d;if(n={id:(f=e.write()).id,title:f.title,opacity:f.opacity,minScale:f.minScale,maxScale:f.maxScale,url:f.url,layerType:f.layerType,customParameters:f.customParameters,layerDefinition:f.layerDefinition},n.showLabels=l.showLabels&&e.labelsVisible,ct(n,e),null!=(p=n.layerDefinition)&&null!=(d=p.drawingInfo)&&d.renderer&&(delete n.layerDefinition.minScale,delete n.layerDefinition.maxScale,await pt(n.layerDefinition.drawingInfo.renderer,r),"visualVariables"in s&&s.visualVariables&&s.visualVariables[0])){const e=s.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=N(e,u.scale);n.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,n.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}const t=q(o);t&&(n.layerDefinition||(n.layerDefinition={}),n.layerDefinition.definitionExpression=n.layerDefinition.definitionExpression?`(${n.layerDefinition.definitionExpression}) AND (${t})`:t)}var f;return n}async function Ye(e,{layerView:t,printTemplate:r},a){return a.legendLayers&&a.legendLayers.push({id:e.id}),Ze(e,await dt(t),r,a)}async function He(e,{printTemplate:t},r){return Ze(e,null,t,r)}function Xe(e,t){t.legendLayers&&t.legendLayers.push({id:e.id});const r={layerType:(a=e.write()).layerType,customParameters:a.customParameters};var a;if(r.bandIds=e.bandIds,r.compressionQuality=e.compressionQuality,r.format=e.format,r.interpolation=e.interpolation,(e.mosaicRule||e.definitionExpression)&&(r.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(t.is11xService)e.renderingRule&&(r.renderingRule=e.renderingRule.toJSON()),e.renderer&&(r.layerDefinition=r.layerDefinition||{},r.layerDefinition.drawingInfo=r.layerDefinition.drawingInfo||{},r.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const t=e.exportImageServiceParameters.combineRendererWithRenderingRule();t&&(r.renderingRule=t.toJSON())}return ct(r,e),r}async function et(e,t,r){const a=t.printTemplate;if(r.is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=j(e.url),t}{const i=[],n=t.layerView;n.allVisibleMapImages.forEach(((t,r)=>{const a={id:`${e.id}_image${r}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?a.imageData=t.href.substr(22):a.url=t.href,i.push(a)}));const s=[...n.allVisiblePoints.items,...n.allVisiblePolylines.items,...n.allVisiblePolygons.items],l=o({id:e.id},await Ze(null,s,a,r));return i.push(l),i}}function tt(e,{view:t},r){let a;const i={id:e.id,subLayerIds:[]};let n=[];const s=t.scale,o=e=>{const t=0===s,r=0===e.minScale||s<=e.minScale,a=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||r&&a))if(e.sublayers)e.sublayers.forEach(o);else{const t=e.toExportImageJSON(),r={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};n.unshift(r),i.subLayerIds.push(e.id)}};var l;return e.sublayers&&e.sublayers.forEach(o),n.length&&(n=n.map((({id:e,name:t,layerDefinition:r})=>({id:e,name:t,layerDefinition:r}))),a={layerType:(l=e.write()).layerType,customParameters:l.customParameters},a.layers=n,a.visibleLayers=e.capabilities.exportMap.supportsDynamicLayers?void 0:i.subLayerIds,ct(a,e),r.legendLayers.push(i)),a}async function rt({layerView:e,printTemplate:t},r){const a=[],i=e.layer;if(T(i.featureCollections))for(const n of i.featureCollections){const e=await Ze(n,n.source,t,r);e&&a.push(...e.featureCollection.layers)}else if(T(i.sublayers))for(const n of i.sublayers){const e=await Ze(null,n.graphics,t,r);e&&a.push(...e.featureCollection.layers)}return{featureCollection:{layers:a}}}async function at(e,{printTemplate:t,view:r},a){const i={type:"image"},n={format:"png",ignoreBackground:!0,layers:[e],rotation:0},s=a.ssExtent||r.extent.clone();let o=96,l=!0,u=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(o=e.dpi),e.width>0&&(l=e.width%2==r.width%2),e.height>0&&(u=e.height%2==r.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===r.scale)&&96===o&&(!l||!u)&&(n.area={x:0,y:0,width:r.width,height:r.height},l||(n.area.width-=1),u||(n.area.height-=1),!a.ssExtent)){const e=r.toMap(F(n.area.width,n.area.height));s.ymin=e.y,s.xmax=e.x,a.ssExtent=s}i.extent=s.clone()._normalize(!0).toJSON();const c=await r.takeScreenshot(n),{data:y}=R(c.dataUrl);return i.imageData=y,i}async function it(e,{layerView:t,printTemplate:r},a){return a.legendLayers&&a.legendLayers.push({id:e.id}),Ze(e,await dt(t),r,a)}function nt(e){const t={layerType:(r=e.write()).layerType,customParameters:r.customParameters};var r;return ct(t,e),t}async function st(e,t,r){if(r.is11xService&&e.serviceUrl&&e.styleUrl){const t=k&&k.findCredential(e.styleUrl),a=k&&k.findCredential(e.serviceUrl);if(!t&&!a||"2.1.0"!==r.cimVersion){const r={type:"VectorTileLayer"};return r.styleUrl=j(e.styleUrl),t&&(r.token=t.token),a&&a.token!==r.token&&(r.additionalTokens=[{url:e.serviceUrl,token:a.token}]),r}}return at(e,t,r)}function ot(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}function lt(e){let t;const r=[],a=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(a):e.name&&r.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(a),r.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:r,url:j(e.url),version:e.version}),t}function ut(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:j(e.url)}}function ct(e,t){if(t.url)if(e.url=j(e.url||t.url),"apiKey"in t&&t.apiKey)e.token=t.apiKey;else if(E.apiKey&&A(t.url))e.token=E.apiKey;else{var r,a;e.token=null==(r=k)||null==(a=r.findCredential(t.url))?void 0:a.token}}async function yt(e,t){t.canvas||(t.canvas=document.createElement("canvas"));const r=1024;t.canvas.width=r,t.canvas.height=r;const a=t.canvas.getContext("2d");let i,n;if(e.path){var s;const t=new Path2D(e.path);t.closePath(),a.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",a.fill(t);const o=function(e,t=15){const r=e.canvas.width,a=e.canvas.height,i=e.getImageData(0,0,r,a).data;let n,s,o,l,u,c;e:for(s=a;s--;)for(n=r;n--;)if(i[4*(r*s+n)+3]>t){c=s;break e}if(!c)return null;e:for(n=r;n--;)for(s=c+1;s--;)if(i[4*(r*s+n)+3]>t){u=n;break e}e:for(n=0;n<=u;++n)for(s=c+1;s--;)if(i[4*(r*s+n)+3]>t){o=n;break e}e:for(s=0;s<=c;++s)for(n=o;n<=u;++n)if(i[4*(r*s+n)+3]>t){l=s;break e}return{x:o,y:l,width:u-o,height:c-l}}(a);if(!o)return null;a.clearRect(0,0,r,r);const l=C(e.size)/Math.max(o.width,o.height);a.scale(l,l);const u=r/l,c=u/2-o.width/2-o.x,y=u/2-o.height/2-o.y;if(a.translate(c,y),Array.isArray(e.color)&&a.fill(t),null!=(s=e.outline)&&s.width&&Array.isArray(e.outline.color)){const r=e.outline;a.lineWidth=C(r.width)/l,a.lineJoin="round",a.strokeStyle=`rgba(${r.color[0]},${r.color[1]},${r.color[2]},${r.color[3]/255})`,a.stroke(t),o.width+=a.lineWidth,o.height+=a.lineWidth}o.width*=l,o.height*=l;const p=a.getImageData(512-o.width/2,512-o.height/2,Math.ceil(o.width),Math.ceil(o.height));i=p.width,n=p.height,a.canvas.width=i,a.canvas.height=n,a.putImageData(p,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,r=(await x(t,{responseType:"image"})).data;i=C(e.width),n=C(e.height),a.canvas.width=i,a.canvas.height=n,a.drawImage(r,0,0,a.canvas.width,a.canvas.height)}return{type:"esriPMS",imageData:a.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:O(n),width:O(i),xoffset:e.xoffset,yoffset:e.yoffset}}async function pt(e,t){const r=e.type;if("simple"===r&&ft(e.symbol))e.symbol=await yt(e.symbol,t);else if("uniqueValue"===r||"classBreaks"===r){ft(e.defaultSymbol)&&(e.defaultSymbol=await yt(e.defaultSymbol,t));const a=e["uniqueValue"===r?"uniqueValueInfos":"classBreakInfos"];if(a)for(const e of a)ft(e.symbol)&&(e.symbol=await yt(e.symbol,t))}}async function dt(e){return e.queryFeatures(e.createQuery()).then((e=>e.features))}function ft(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}const mt=new g({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let ht=class extends _{constructor(...e){super(...e),this._gpMetadata=null,this.updateDelay=1e3}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?mt.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,t){return e&&(e.updateDelay=this.updateDelay),$e(this.url,e,o(o({},this.requestOptions),t))}async _getGpPrintParams(e){const t=ze(this.url);return qe(e,_e.get(t))}};u([c()],ht.prototype,"_gpMetadata",void 0),u([c({readOnly:!0})],ht.prototype,"mode",null),u([c()],ht.prototype,"updateDelay",void 0),ht=u([d("esri.tasks.PrintTask")],ht);var gt=ht;export{gt as default};
