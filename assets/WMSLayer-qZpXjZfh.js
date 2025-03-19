import{L as Me,r as a,m as l,a as xe,s as we,G as j,V as Ue,O as je,c as Te,$ as _e}from"./Accessor-BmwT4B0c.js";import{q as Ce,b as qe}from"./Graphic-Dt0LgVGU.js";import{a as Ve,I as ve,E as ie,P as D,a1 as Be,M as We,x as ke,o as De}from"./cast-CsZslgGN.js";import{v as B,d as Z,C as N,V as K}from"./reactiveUtils-XM7cS2OP.js";import{n as Ge}from"./CollectionFlattener-U8hHQmGf.js";import{m as Xe,S as He}from"./MultiOriginJSONSupport-DbmrbwMa.js";import{o as O,r as G}from"./writer-DKgfqj4X.js";import{g as Je}from"./JSONSupport-DcrLLGjL.js";import{w as U}from"./Extent-g5W9hy0j.js";import{g as R,c as Ze}from"./Point-Cz2JYYmX.js";import{i as se}from"./scaleUtils-DPfHG2g0.js";import{f as ze}from"./Layer-DH4_Pn8a.js";import{p as Qe,t as Ke}from"./ScaleRangeLayer-Cnzwr9PT.js";import{b as Ye}from"./OperationalLayer-B__lrMRq.js";import{j as et}from"./PortalLayer-Cqwv_mmr.js";import{f as tt}from"./RefreshableLayer-C90FXoHt.js";import{l as rt}from"./TemporalLayer-CMqBosxi.js";import{o as z}from"./crsUtils-DAndLU68.js";import{d as nt,y as it}from"./commonProperties-B0GHoNP5.js";import{a as ae}from"./ExportWMSImageParameters-Buw0se_f.js";import{t as st}from"./imageBitmapUtils-DPq40V9d.js";import{n as at}from"./Identifiable-BHVfzH03.js";import{D as ot,b as lt}from"./Promise-DfET-uns.js";import"./Clonable-Z-AWS-16.js";import"./opacityUtils-Dim20wpZ.js";import"./index-4eY77cms.js";import"./enumeration-DpvDkLNI.js";import"./Color-VJEMvW-n.js";import"./colorUtils-Rxh2V3ai.js";import"./mathUtils-Cfq9PL9W.js";import"./ActionToggle-D7439N1A.js";import"./jsonUtils-CwFG8yN4.js";import"./Polyline-s-JzsQqo.js";import"./typeUtils-B6WBEKDM.js";import"./TextSymbol-BLIQ6RKX.js";import"./screenUtils-_ZIvrt5o.js";import"./collectionUtils-CTT-51g7.js";import"./Portal-CmmHxpLg.js";import"./vec3f64-BLpZdpfb.js";import"./aaBoundingBox-Dw3yBk2f.js";import"./Evented-Dw4_VOGn.js";import"./SimpleObservable-CvOkykwM.js";import"./TimeExtent-BO6BsF_x.js";import"./timeUtils-C1c_L2Fd.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-DZz5FrgB.js";import"./utils-DYurMneM.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-Fi6iAz29.js";import"./common-DQOJ18NT.js";import"./layerUtils-B__v9OBu.js";import"./PortalItem-CTx1kJsR.js";import"./portalItemUtils-ByOtbGao.js";import"./projection-CyCZAIaD.js";import"./projectBuffer-CQnuEMuP.js";import"./geodesicConstants-RQL9oKdk.js";import"./TimeInfo-CctegBed.js";import"./TimeInterval-B7L-CEq7.js";import"./timeZoneUtils-DxzjpEBb.js";import"./ElevationInfo-BPOqhCue.js";import"./unitConversionUtils-rg07EgOm.js";import"./lengthUtils-_77UiyVF.js";import"./AttributeTableTemplate-cR37sM72.js";var C;let ut=0,g=C=class extends at.IdentifiableMixin(Xe){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([B(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},N),B(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),Z(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},N),Z(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},N)])}get id(){return this._get("id")??ut++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return Me(K.ofType(C),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var t,r,n;const e=new C;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=((t=this.fullExtents)==null?void 0:t.map(i=>i.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=(r=this.sublayers)==null?void 0:r.map(i=>i.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=(n=this.spatialReferences)==null?void 0:n.map(i=>i)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([l()],g.prototype,"description",void 0),a([l({readOnly:!0})],g.prototype,"dimensions",void 0),a([l({type:U,json:{name:"extent"}})],g.prototype,"fullExtent",void 0),a([l()],g.prototype,"fullExtents",void 0),a([l({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],g.prototype,"id",null),a([l({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],g.prototype,"legendUrl",void 0),a([O("legendUrl",["legendUrl","legendURL"])],g.prototype,"readLegendUrl",null),a([l({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],g.prototype,"legendEnabled",void 0),a([l()],g.prototype,"layer",void 0),a([l()],g.prototype,"maxScale",void 0),a([l()],g.prototype,"minScale",void 0),a([l({readOnly:!0})],g.prototype,"effectiveScaleRange",null),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],g.prototype,"name",void 0),a([l()],g.prototype,"parent",void 0),a([l({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],g.prototype,"popupEnabled",void 0),a([l({type:Boolean,json:{write:{ignoreOrigin:!0}}})],g.prototype,"queryable",void 0),a([l()],g.prototype,"sublayers",void 0),a([Ve("sublayers")],g.prototype,"castSublayers",null),a([l({type:[Number],json:{read:{source:"spatialReferences"}}})],g.prototype,"spatialReferences",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],g.prototype,"title",void 0),a([l({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],g.prototype,"visible",null),g=C=a([xe("esri.layers.support.WMSSublayer")],g);const Q=g,oe={84:4326,83:4269,27:4267};function pt(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const v=Array.prototype.slice.call(r.childNodes).map(L=>L.textContent).join(`\r
`);throw new we("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",v)}const n=x("Capability",r),i=x("Service",r),s=n&&x("Request",n);if(!n||!i||!s)return null;const u=x("Layer",n);if(!u)return null;const c=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",o=I("Title",i,"")||I("Name",i,""),y=I("AccessConstraints",i,""),w=/^none$/i.test(y)?"":y,p=I("Abstract",i,""),S=parseInt(I("MaxWidth",i,"5000"),10),d=parseInt(I("MaxHeight",i,"5000"),10),b=ue(s,"GetMap"),f=le(s,"GetMap"),h=M(u,c,t);if(!h)return null;let F,E=0;const W=Array.prototype.slice.call(n.childNodes),Fe=h.sublayers??[],k=v=>{v!=null&&Fe.push(v)};W.forEach(v=>{v.nodeName==="Layer"&&(E===0?F=v:(E===1&&h.name&&(h.name="",k(M(F,c,t))),k(M(v,c,t))),E++)});const T=h.sublayers??[],$e=h.fullExtents??[];T.length===0&&T.push(h),h.extent??(h.extent=T[0].extent);const Oe=h.spatialReferences.length>0?h.spatialReferences:Se(h),Y=le(s,"GetFeatureInfo"),Re=Y?ue(s,"GetFeatureInfo"):null,ee=Ie(T),Le=h.minScale||0,Pe=h.maxScale||0,te=h.dimensions??[],Ae=ee.reduce((v,L)=>v.concat(L.dimensions??[]),[]),re=te.concat(Ae).filter(Ne);let ne=null;if(re.length){const v=re.map(L=>{const{extent:P}=L;return dt(P)?P.map(_=>_.getTime()):P==null?void 0:P.map(_=>[_.min.getTime(),_.max.getTime()])}).flat(2).filter(j);ne={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...v),Math.max(...v)]}}return{copyright:w,description:p,dimensions:te,extent:h.extent,fullExtents:$e,featureInfoFormats:Re,featureInfoUrl:Y,mapUrl:f,maxWidth:S,maxHeight:d,maxScale:Pe,minScale:Le,layers:ee,spatialReferences:Oe,supportedImageFormatTypes:b,timeInfo:ne,title:o,version:c}}function mt(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function Se(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=Se(t);if(r.length>0)return r}return[]}function Ie(e){var r;let t=[];for(const n of e)t.push(n),(r=n.sublayers)!=null&&r.length&&(t=t.concat(Ie(n.sublayers)),delete n.sublayers);return t}function q(e,t,r){return t.getAttribute(e)??r}function ct(e,t,r,n){const i=x(e,r);return i?q(t,i,n):n}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(Ee(n)&&n.nodeName===e)return n}return null}function V(e,t){if(t==null)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];Ee(i)&&i.nodeName===e&&r.push(i)}return r}function I(e,t,r){var n;return((n=x(e,t))==null?void 0:n.textContent)??r}function A(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),s=parseFloat(e.getAttribute("maxx")),u=parseFloat(e.getAttribute("maxy"));let c,o,y,w;return r?(c=isNaN(i)?-Number.MAX_VALUE:i,o=isNaN(n)?-Number.MAX_VALUE:n,y=isNaN(u)?Number.MAX_VALUE:u,w=isNaN(s)?Number.MAX_VALUE:s):(c=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(i)?-Number.MAX_VALUE:i,y=isNaN(s)?Number.MAX_VALUE:s,w=isNaN(u)?Number.MAX_VALUE:u),{xmin:c,ymin:o,xmax:y,ymax:w,spatialReference:{wkid:t}}}function le(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const i=x("HTTP",n);if(i){const s=x("Get",i);if(s){let u=ct("OnlineResource","xlink:href",s,null);if(u){const c=u.indexOf("&");return c!==-1&&c===u.length-1&&(u=u.slice(0,-1)),yt(u,["service","request"])}}}}}return null}function ue(e,t){const r=V("Operation",e);if(!r.length)return V("Format",x(t,e)).map(({textContent:i})=>i).filter(j);const n=[];for(const i of r)if(i.getAttribute("name")===t){const s=V("Format",i);for(const{textContent:u}of s)u!=null&&n.push(u)}return n}function pe(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:i}=n;if(i==null||i==="")return r;const s=Number(i);return isNaN(s)?r:s}function M(e,t,r){var w;if(!e)return null;const n=(w=e.getAttribute("queryable"))==null?void 0:w.toLowerCase(),i=n==="1"||n==="true",s={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:i,spatialReferences:[],sublayers:null},u=x("LatLonBoundingBox",e),c=x("EX_GeographicBoundingBox",e);let o=null;u&&(o=A(u,4326)),c&&(o=new U(0,0,0,0,new R({wkid:4326})),o.xmin=parseFloat(I("westBoundLongitude",c,"0")),o.ymin=parseFloat(I("southBoundLatitude",c,"0")),o.xmax=parseFloat(I("eastBoundLongitude",c,"0")),o.ymax=parseFloat(I("northBoundLatitude",c,"0"))),u||c||(o=new U(-180,-90,180,90,new R({wkid:4326}))),s.minScale=pe(e,"MaxScaleDenominator",0),s.maxScale=pe(e,"MinScaleDenominator",0);const y=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(p=>{var S;if(p.nodeName==="Name")s.name=p.textContent||"";else if(p.nodeName==="Title")s.title=p.textContent||"";else if(p.nodeName==="Abstract")s.description=p.textContent||"";else if(p.nodeName==="BoundingBox"){const d=p.getAttribute(y);if(d&&d.indexOf("EPSG:")===0){const f=parseInt(d.slice(5),10);f===0||isNaN(f)||o||(o=t==="1.3.0"?A(p,f,z(f)):A(p,f))}const b=d==null?void 0:d.indexOf(":");if(b&&b>-1){let f=parseInt(d.slice(b+1),10);f===0||isNaN(f)||(f=oe[f]??f);const h=t==="1.3.0"?A(p,f,z(f)):A(p,f);h&&s.fullExtents&&s.fullExtents.push(h)}}else if(p.nodeName===y)(((S=p.textContent)==null?void 0:S.split(" "))??[]).forEach(d=>{let b=NaN;if(d.includes(":")){const[f,h]=d.toUpperCase().split(":");f!=="CRS"&&f!=="EPSG"||(b=parseInt(h,10))}else b=parseInt(d,10);if(b!==0&&!isNaN(b)){const f=oe[b]??b;s.spatialReferences.includes(f)||s.spatialReferences.push(f)}});else if(p.nodeName!=="Style"||s.legendUrl){if(p.nodeName==="Layer"){const d=M(p,t,r);d&&(d.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(d))}}else{const d=x("LegendURL",p);if(d){const b=x("OnlineResource",d);b&&(s.legendUrl=b.getAttribute("xlink:href"))}}}),s.extent=o,s.dimensions=V("Dimension",e).filter(p=>p.getAttribute("name")&&p.getAttribute("units")&&p.textContent).map(p=>{const S=p.getAttribute("name"),d=p.getAttribute("units"),b=p.textContent,f=p.getAttribute("unitSymbol")??void 0,h=p.getAttribute("default")??void 0,F=q("default",p,"0")!=="0",E=q("nearestValue",p,"0")!=="0",W=q("current",p,"0")!=="0";return Ne({name:S,units:d})?{name:"time",units:"ISO8601",extent:de(b),default:de(h),multipleValues:F,nearestValue:E,current:W}:ft({name:S,units:d})?{name:"elevation",units:d,extent:me(b),unitSymbol:f,default:me(h),multipleValues:F,nearestValue:E}:{name:S,units:d,extent:ce(b),unitSymbol:f,default:ce(h),multipleValues:F,nearestValue:E}}),s}function dt(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function Ee(e){return e.nodeType===Node.ELEMENT_NODE}function ft(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function Ne(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function yt(e,t){const r=[],n=ve(e);for(const i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}function me(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:parseFloat(i[0]),max:parseFloat(i[1]),resolution:i.length>=3&&i[2]!=="0"?parseFloat(i[2]):void 0}}).filter(j):r.map(n=>parseFloat(n))}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:i[0],max:i[1],resolution:i.length>=3&&i[2]!=="0"?i[2]:void 0}}).filter(j):r}function de(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:X(i[0]),max:X(i[1]),resolution:i.length>=3&&i[2]!=="0"?ht(i[2]):void 0}}).filter(j):r.map(n=>X(n))}function X(e){return ot.fromISO(e,{zone:lt.utcInstance}).toJSDate()}function ht(e){const t=/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i,r=e.match(t);return r?{years:$(r[1]),months:$(r[2]),days:$(r[3]),hours:$(r[4]),minutes:$(r[5]),seconds:$(r[6])}:null}function $(e){if(!e)return 0;const t=/(?:\d+(?:\.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function H(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const gt="0000-01-01T00:00:00Z",bt="9999-12-31T23:59:59Z";function fe(e){if(!e||e.isAllTime||e.isEmpty)return;const{start:t,end:r}=e;return t&&r&&t.getTime()===r.getTime()?`${H(t)}`:`${t?H(t):gt}/${r?H(r):bt}`}const ye=new Set([102100,3857,102113,900913]),xt=new Set([3395,54004]);function wt(e,t){let r=e.wkid;return t==null?r:(r!=null&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),r!=null&&ye.has(r)?t.find(n=>ye.has(n))||t.find(n=>xt.has(n))||102100:r)}const J=new De({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function he(e){return e==="text/html"}function ge(e){return e==="text/plain"}let m=class extends Qe(rt(tt(Ke(Ye(et(He(ze))))))){constructor(...e){super(...e),this.allSublayers=new Ge({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([B(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},N),B(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),Z(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},N)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Ue).then(()=>this._fetchService(t)).then(()=>this._checkLayerValidity())),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new U({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return this.featureInfoFormats==null?null:this.featureInfoFormats.find(he)??this.featureInfoFormats.find(ge)??null}set featureInfoFormat(e){e==null?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(he(e)||ge(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new R(t.spatialReferences[0])}writeSpatialReferences(e,t){var n;const r=(n=this.spatialReference)==null?void 0:n.wkid;e&&r?(t.spatialReferences=e.filter(i=>i!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return be(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return be(t.layers,r)}writeSublayers(e,t,r,n){var u,c;t.layers=[];const i=new Map,s=e.flatten(({sublayers:o})=>o??[]);for(const o of s)if(typeof((u=o.parent)==null?void 0:u.id)=="number"){const y=i.get(o.parent.id);y!=null?y.push(o.id):i.set(o.parent.id,[o.id])}for(const o of s){const y={sublayer:o,...n},w=o.write({parentLayerId:typeof((c=o.parent)==null?void 0:c.id)=="number"?o.parent.id:-1},y);if(i.has(o.id)&&(w.sublayerIds=i.get(o.id)),!o.sublayers&&o.name){const p=o.write({},y);delete p.id,t.layers.push(p)}}t.visibleLayers=s.filter(({visible:o,sublayers:y})=>o&&!y).map(({name:o})=>o).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=ve(e);for(const i in r)/^(request|service)$/i.test(i)&&delete r[i];const n=ie(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const i=(n==null?void 0:n.pixelRatio)??1,s=se({extent:e,width:t})*i,u=new ae({layer:this,scale:s}),{xmin:c,ymin:o,xmax:y,ymax:w,spatialReference:p}=e,S=wt(p,this.spatialReferences),d=this.version==="1.3.0"&&z(S)?`${o},${c},${w},${y}`:`${c},${o},${y},${w}`,b=u.toJSON(),f=this.version==="1.3.0"?"crs":"srs";return{bbox:d,[f]:S==null||isNaN(S)?void 0:"EPSG:"+S,...b}}async fetchImage(e,t,r,n){const i=this.mapUrl,s=this.createExportImageParameters(e,t,r,n);if(!s.layers){const o=document.createElement("canvas");return o.width=t,o.height=r,o}const u=fe(n==null?void 0:n.timeExtent),c={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...s,time:u,...this.refreshParameters}),signal:n==null?void 0:n.signal};return D(i??"",c).then(o=>o.data)}async fetchImageBitmap(e,t,r,n){const i=this.mapUrl??"",s=this.createExportImageParameters(e,t,r,n);if(!s.layers){const y=document.createElement("canvas");return y.width=t,y.height=r,y}const u=fe(n==null?void 0:n.timeExtent),c={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...s,time:u,...this.refreshParameters}),signal:n==null?void 0:n.signal},{data:o}=await D(i,c);return st(o,i,n==null?void 0:n.signal)}fetchFeatureInfo(e,t,r,n,i){const s=se({extent:e,width:t}),u=new ae({layer:this,scale:s}),c=mt(u.visibleSublayers);if(this.featureInfoUrl==null||c==null)return Promise.resolve([]);if(this.fetchFeatureInfoFunction==null&&this.featureInfoFormat==null)return Promise.resolve([]);const o=this.version==="1.3.0"?{I:n,J:i}:{x:n,y:i},y={query_layers:c,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...o},w={...this.createExportImageParameters(e,t,r),...y},p=this._mixCustomParameters(w);return this.fetchFeatureInfoFunction!=null?this.fetchFeatureInfoFunction(p):this._defaultFetchFeatureInfoFunction(ie(this.featureInfoUrl,p))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return Be(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?R.WebMercator:new R({wkid:t});return Ze(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=We(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new Ce({title:this.title,content:t}),n=new qe({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){var t;if(!this.resourceInfo&&((t=this.parsedUrl)!=null&&t.path)){const{path:r,query:n}=this.parsedUrl,{data:i}=await D(r,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...n,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=pt(i)}if(this.parsedUrl){const r=new ke(this.parsedUrl.path),{httpsDomains:n}=je.request;r.scheme!=="https"||r.port&&r.port!=="443"||!r.host||n.includes(r.host)||n.push(r.host)}this.read(this.resourceInfo,{origin:"service"})}_checkLayerValidity(){if(!this.allSublayers.length)throw new we("wmslayer:empty-layer","The layer doesn't have any sublayer")}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function vt(e,t){return e.some(r=>{for(const n in r)if(Je(r,n,null,t))return!0;return!1})}function be(e,t,r){e=e??[];const n=new Map;e.every(s=>s.id==null)&&(e=Te(e)).forEach((s,u)=>s.id=u);for(const s of e){const u=new Q;u.read(s,t),r&&!r.includes(u.name)&&(u.visible=!1),n.set(u.id,u)}const i=[];for(const s of e){const u=s.id!=null?n.get(s.id):null;if(u)if(s.parentLayerId!=null&&s.parentLayerId>=0){const c=n.get(s.parentLayerId);if(!c)continue;c.sublayers||(c.sublayers=new K),c.sublayers.push(u)}else i.push(u)}return i}a([l({readOnly:!0})],m.prototype,"allSublayers",void 0),a([l({json:{type:Object,write:!0}})],m.prototype,"customParameters",void 0),a([l({json:{type:Object,write:!0}})],m.prototype,"customLayerParameters",void 0),a([l({type:String,json:{write:!0}})],m.prototype,"copyright",void 0),a([l()],m.prototype,"description",void 0),a([l({readOnly:!0})],m.prototype,"dimensions",void 0),a([l({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],m.prototype,"fullExtent",void 0),a([O(["web-document","portal-item"],"fullExtent",["extent"])],m.prototype,"readFullExtentFromItemOrMap",null),a([G(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],m.prototype,"writeFullExtent",null),a([l({type:[U]})],m.prototype,"fullExtents",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoFormat",null),a([l({type:[String],readOnly:!0})],m.prototype,"featureInfoFormats",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoUrl",void 0),a([l()],m.prototype,"fetchFeatureInfoFunction",void 0),a([l({type:String,json:{origins:{"web-document":{default:"image/png",type:J.jsonValues,read:{reader:J.read,source:"format"},write:{writer:J.write,target:"format"}}}}})],m.prototype,"imageFormat",void 0),a([O("imageFormat",["supportedImageFormatTypes"])],m.prototype,"readImageFormat",null),a([l({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],m.prototype,"imageMaxHeight",void 0),a([l({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],m.prototype,"imageMaxWidth",void 0),a([l()],m.prototype,"imageTransparency",void 0),a([l(nt)],m.prototype,"legendEnabled",void 0),a([l({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"mapUrl",void 0),a([l({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],m.prototype,"isReference",void 0),a([l({type:["WMS"]})],m.prototype,"operationalLayerType",void 0),a([l()],m.prototype,"resourceInfo",void 0),a([l({type:R,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],m.prototype,"spatialReference",void 0),a([O(["web-document","portal-item"],"spatialReference",["spatialReferences"])],m.prototype,"readSpatialReferenceFromItemOrDocument",null),a([l({type:[_e],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],m.prototype,"spatialReferences",void 0),a([G(["web-document","portal-item"],"spatialReferences")],m.prototype,"writeSpatialReferences",null),a([l({type:K.ofType(Q),json:{write:{target:"layers",overridePolicy(e,t,r){if(vt(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],m.prototype,"sublayers",void 0),a([O(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],m.prototype,"readSublayersFromItemOrMap",null),a([O("service","sublayers",["layers"])],m.prototype,"readSublayers",null),a([G("sublayers",{layers:{type:[Q]},visibleLayers:{type:[String]}})],m.prototype,"writeSublayers",null),a([l({json:{read:!1},readOnly:!0,value:"wms"})],m.prototype,"type",void 0),a([l(it)],m.prototype,"url",null),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"version",void 0),m=a([xe("esri.layers.WMSLayer")],m);const Pr=m;export{Pr as default};
