const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./resourceUtils-CLi0K8NA.js","./assets-C2mb-ea2.js","./subclass-BR3PhgZG.js","./index-CeCSsEgo.js","./index-CjOb8WjV.css","./Evented-CXIxDjmW.js","./Accessor-D6mNnsWy.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./index-CeCSsEgo.js";import{e as o}from"./Evented-CXIxDjmW.js";import{Y as U,G as j,u as L,n as q,a as _,_ as $}from"./assets-C2mb-ea2.js";import{y as a,b,n as C,c as g,R as D,a as l,a8 as F}from"./subclass-BR3PhgZG.js";import{C as O,m as N}from"./Portal-liet8xHC.js";import{o as E}from"./writer-3zufXUNV.js";import{w as P}from"./Extent-DHjqVB-p.js";import{S as T}from"./Accessor-D6mNnsWy.js";import{s as J}from"./jsonMap-DCC6W5ex.js";import{R as K}from"./persistableUrlUtils-BcifXQ1Z.js";import"./Promise-CZrWwByK.js";import"./Point-DB4Hp4hH.js";let p=class extends T{constructor(t){super(t),this.portalItem=null}normalizeCtorArgs(t){return t!=null&&t.portalItem&&t.path?{...t,path:R(t.path,t.portalItem)}:t}set path(t){t!=null&&U(t)?C.getLogger(this).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",t)}_castPath(t){return R(t,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get cdnUrl(){return this.portalItem&&this.path?`${this.portalItem.itemCdnUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(t="json",r){const n=this.cdnUrl;if(n==null)throw new g("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal.request(n,{responseType:t,query:{token:this.portalItem.apiKey},signal:r==null?void 0:r.signal})}async update(t,r){const{addOrUpdateResources:n}=await h(()=>import("./resourceUtils-CLi0K8NA.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return await n(this.portalItem,[{resource:this,content:t,compress:r==null?void 0:r.compress,access:r==null?void 0:r.access}],"update",r),this}hasPath(){return this.path!=null}};function R(e,t){return e==null?e:(e=e.replace(/^\/+/,""),t!=null&&U(e)&&(e=j(e,t.itemUrl)),e==null?void 0:e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}o([a()],p.prototype,"portalItem",void 0),o([a({type:String,value:null})],p.prototype,"path",null),o([J("path")],p.prototype,"_castPath",null),o([a({type:String,readOnly:!0})],p.prototype,"url",null),o([a({type:String,readOnly:!0})],p.prototype,"cdnUrl",null),o([a({type:String,readOnly:!0})],p.prototype,"itemRelativeUrl",null),p=o([b("esri.portal.PortalItemResource")],p);const M=p;let y=class extends T{constructor(e){super(e),this.created=null,this.rating=null}};o([a()],y.prototype,"created",void 0),o([a()],y.prototype,"rating",void 0),y=o([b("esri.portal.PortalRating")],y);const f=y;var u;const A=new Set(["3DTiles Service","CSV","Feature Collection","Feature Service","Feed","GeoJson","Group Layer","Image Service","KML","Map Service","Media Layer","Scene Service","Stream Service","Vector Tile Service","WFS","WMS","WMTS"]),V=new Set(["KML","GeoJson","CSV"]);let s=u=class extends L(N){static from(e){return D(u,e)}constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.isOrgItem=!1,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.sourceUrl=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let r=e;return e==="Feature Service"||e==="Feature Collection"?r=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":e==="Image Service"?r=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":e==="Scene Service"?r="Scene Layer":e==="Video Service"?r="Video Layer":e==="Scene Package"?r="Scene Layer Package":e==="Stream Service"?r="Feature Layer":e==="Geoprocessing Service"?r=t.includes("Web Tool")?"Tool":"Geoprocessing Service":e==="Geoenrichment Service"?r="GeoEnrichment Service":e==="Geocoding Service"?r="Locator":e==="Microsoft Powerpoint"?r="Microsoft PowerPoint":e==="GeoJson"?r="GeoJSON":e==="Globe Service"?r="Globe Layer":e==="Vector Tile Service"?r="Tile Layer":e==="netCDF"?r="NetCDF":e==="Map Service"?r=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e!=null&&e.toLowerCase().includes("add in")?r=e.replaceAll(/(add in)/gi,"Add-In"):e==="datastore catalog service"?r="Big Data File Share":e==="Compact Tile Package"?r="Tile Package (tpkx)":e==="Raster function template"?r="Raster Function Template":e==="OGCFeatureServer"?r="OGC Feature Layer":e==="web mapping application"&&t.includes("configurableApp")?r="Instant App":e==="Insights Page"?r="Insights Report":e==="Excalibur Imagery Project"?r="Excalibur Project":e==="3DTiles Service"?r="3D tiles layer":e==="3DTiles Package"&&(r="3D tiles package"),r}readExtent(e){return e&&e.length?new P(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){var x;const e=((x=this.type)==null?void 0:x.toLowerCase())||"",t=this.typeKeywords||[],r="esri/images/portal/",n="16";let i,c=!1,d=!1,v=!1,w=!1,m=!1,k=!1,S=!1,I=!1;return e.indexOf("service")>0||e==="feature collection"||e==="kml"||e==="wms"||e==="wmts"||e==="wfs"?(c=t.includes("Hosted Service"),e==="feature service"||e==="feature collection"||e==="kml"||e==="wfs"?(d=t.includes("Table"),v=t.includes("Route Layer"),w=t.includes("Markup"),m=t.includes("Spatiotemporal"),k=t.includes("UtilityNetwork"),i=m&&d?"spatiotemporaltable":d?"table":v?"routelayer":w?"markup":m?"spatiotemporal":k?"utilitynetwork":c?"featureshosted":"features"):e==="map service"||e==="wms"||e==="wmts"?(m=t.includes("Spatiotemporal"),S=t.includes("Relational"),i=m||S?"mapimages":c||t.includes("Tiled")||e==="wmts"?"maptiles":"mapimages"):i=e==="scene service"?t.includes("Line")?"sceneweblayerline":t.includes("3DObject")?"sceneweblayermultipatch":t.includes("Point")?"sceneweblayerpoint":t.includes("IntegratedMesh")?"sceneweblayermesh":t.includes("PointCloud")?"sceneweblayerpointcloud":t.includes("Polygon")?"sceneweblayerpolygon":t.includes("Building")?"sceneweblayerbuilding":t.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":e==="image service"?t.includes("Elevation 3D Layer")?"elevationlayer":t.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":e==="stream service"?"streamlayer":e==="vector tile service"?"vectortile":e==="datastore catalog service"?"datastorecollection":e==="geocoding service"?"geocodeservice":e==="video service"?t.includes("Live Stream")?"livestreamvideolayer":"videolayer":e==="geoprocessing service"?t.includes("Web Tool")?"tool":"layers":e==="geodata service"?"geodataservice":e==="3dtiles service"?t.includes("3DObject")?"3dobjecttileslayer":t.includes("IntegratedMesh")?"integratedmeshtileslayer":"3dtileslayer":"layers"):e==="web map"||e==="cityengine web scene"?i="maps":e==="web scene"?i=t.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":e==="web mapping application"&&t.includes("configurableApp")?i="instantapps":e==="web mapping application"||e==="mobile application"||e==="application"||e==="operation view"||e==="desktop application"?i="apps":e==="map document"||e==="map package"||e==="published map"||e==="scene document"||e==="globe document"||e==="basemap package"||e==="mobile basemap package"||e==="mobile map package"||e==="project package"||e==="project template"||e==="pro map"||e==="layout"||e==="layer"&&t.includes("ArcGIS Pro")||e==="explorer map"&&t.indexOf("Explorer Document")?i="mapsgray":e==="service definition"||e==="shapefile"||e==="cad drawing"||e==="geojson"||e==="netcdf"||e==="administrative report"?i="datafiles":e==="360 vr experience"?i="360vr":e==="explorer add in"||e==="desktop add in"||e==="windows viewer add in"||e==="windows viewer configuration"?i="appsgray":e==="arcgis pro add in"||e==="arcgis pro configuration"?i="addindesktop":e==="pdf"?i="pdf":e==="microsoft word"?i="word":e==="microsoft excel"?i="excel":e==="microsoft powerpoint"?i="ppt":e==="rule package"||e==="file geodatabase"||e==="sqlite geodatabase"||e==="csv collection"||e==="kml collection"||e==="windows mobile package"||e==="map template"||e==="desktop application template"||e==="gml"||e==="arcpad package"||e==="code sample"||e==="document link"||e==="earth configuration"||e==="operations dashboard add in"||e==="rules package"||e==="workflow manager package"||e==="explorer map"&&t.includes("Explorer Mapping Application")||t.includes("Document")?i="datafilesgray":e==="network analysis service"||e==="geoprocessing service"||e==="geodata service"||e==="geometry service"||e==="geoprocessing package"||e==="locator package"||e==="geoprocessing sample"||e==="workflow manager service"?i="toolsgray":e==="layer"||e==="layer package"||e==="explorer layer"?i="layersgray":e==="analysis model"?i="analysismodel":e==="scene package"?i="scenepackage":e==="3dtiles package"?i="3dtileslayerpackage":e==="3dtiles service"?i="3dtileslayer":e==="mobile scene package"?i="mobilescenepackage":e==="tile package"||e==="compact tile package"?i="tilepackage":e==="task file"?i="taskfile":e==="report template"?i="report-template":e==="statistical data collection"?i="statisticaldatacollection":e==="insights workbook"?i="workbook":e==="insights model"?i="insightsmodel":e==="insights page"?i="insightspage":e==="insights theme"?i="insightstheme":e==="hub initiative"?i="hubinitiative":e==="hub page"?i="hubpage":e==="hub site application"?i="hubsite":e==="hub event"?i="hubevent":e==="hub project"?i="hubproject":e==="relational database connection"?i="relationaldatabaseconnection":e==="big data file share"?i="datastorecollection":e==="image collection"?i="imagecollection":e==="desktop style"?i="desktopstyle":e==="style"?i=t.includes("Dictionary")?"dictionarystyle":"style":e==="dashboard"?i="dashboard":e==="raster function template"?i="rasterprocessingtemplate":e==="vector tile package"?i="vectortilepackage":e==="ortho mapping project"?i="orthomappingproject":e==="ortho mapping template"?i="orthomappingtemplate":e==="solution"?i="solutions":e==="geopackage"?i="geopackage":e==="deep learning package"?i="deeplearningpackage":e==="real time analytic"?i="realtimeanalytics":e==="big data analytic"?i="bigdataanalytics":e==="feed"?i="feed":e==="excalibur imagery project"?i="excaliburimageryproject":e==="notebook"?i="notebook":e==="storymap"?i="storymap":e==="survey123 add in"?i="survey123addin":e==="mission"?i="mission":e==="mission report"?i="missionreport":e==="mission template"?i="missiontemplate":e==="quickcapture project"?i="quickcaptureproject":e==="pro report"?i="proreport":e==="pro report template"?i="proreporttemplate":e==="urban model"?i="urbanmodel":e==="web experience"?i="experiencebuilder":e==="web experience template"?i="webexperiencetemplate":e==="experience builder widget"?i="experiencebuilderwidget":e==="experience builder widget package"?i="experiencebuilderwidgetpackage":e==="workflow"?i="workflow":e==="kernel gateway connection"?i="kernelgatewayconnection":e==="insights script"?i="insightsscript":e==="hub initiative template"?i="hubinitiativetemplate":e==="storymap theme"?i="storymaptheme":e==="knowledge graph"?i="knowledgegraph":e==="knowledge graph layer"?i="knowledgegraphlayer":e==="knowledge studio project"?i="knowledgestudio":e==="native application"?i="nativeapp":e==="native application installer"?i="nativeappinstaller":e==="web link chart"?i="linkchart":e==="knowledge graph web investigation"?i="investigation":e==="ogcfeatureserver"?i="features":e==="pro project"?i="proproject":e==="insights workbook package"?i="insightsworkbookpackage":e==="apache parquet"?i="apacheparquet":e==="notebook code snippet library"?i="notebookcodesnippets":e==="suitability model"?i="suitabilitymodel":e==="esri classifier definition"?i="classifierdefinition":e==="esri classification schema"?i="classificationschema":e==="insights data engineering workbook"?i="dataengineeringworkbook":e==="insights data engineering model"?i="dataengineeringmodel":e==="deep learning studio project"?i="deeplearningproject":e==="discussion"?i="discussion":e==="allsource project"?i="allsourceproject":e==="api key"?i="apikey":e==="data pipeline"?i="datapipelines":e==="group layer"?(I=t.includes("Map"),i=I?"layergroup2d":"layergroup"):i=e==="media layer"?"onlinemedialayer":e==="form"?t.includes("Survey123")?"survey":"datafilesgray":e==="csv"?"csv":e==="image"?"image":"maps",i?q(r+i+n+".png"):null}get isLayer(){return this.type!=null&&A.has(this.type)}get itemCdnUrl(){return K(this.itemUrl)}get itemPageUrl(){var t;const e=(t=this.portal)==null?void 0:t.itemPageUrl;return e&&this.id?`${e}?id=${this.id}`:null}get itemUrl(){var t;const e=(t=this.portal)==null?void 0:t.restUrl;return e&&this.id?`${e}/content/items/${this.id}`:null}get thumbnailUrl(){var r;const e=this.itemUrl,t=this.thumbnail;return e&&t?((r=this.portal)==null?void 0:r.normalizeUrl(`${e}/info/${t}?f=json`))??null:null}get userItemUrl(){var r,n,i;const e=(r=this.portal)==null?void 0:r.restUrl;if(!e)return null;const t=this.owner||((i=(n=this.portal)==null?void 0:n.user)==null?void 0:i.username);return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){const t=this.portal??(this.portal=O.getDefault()),r=t.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?t.request(this.itemUrl,{signal:e!=null?e.signal:null,query:{token:this.apiKey}}):{}).then(n=>{this.sourceJSON=n,this.read(n)});return this.addResolvingPromise(r),Promise.resolve(this)}async addRating(e){const t={method:"post",query:{}};return e instanceof f&&(e=e.rating),e==null||isNaN(e)||typeof e!="number"||(t.query.rating=e),this.portal?(await this.portal.request(this.itemUrl+"/addRating",t),new f({rating:e,created:new Date})):null}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:l(this.applicationProxies),avgRating:this.avgRating,categories:l(this.categories),created:l(this.created),culture:this.culture,description:this.description,extent:l(this.extent),groupCategories:l(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:l(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:l(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:l(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:l(this.typeKeywords),url:this.url};this.loaded&&(e.loadStatus="loaded");const t=new u({sourceJSON:this.sourceJSON}).set(e);return t._set("isOrgItem",this.isOrgItem),t}createPostQuery(){var r;const e=this.toJSON();for(const n of["tags","typeKeywords","categories"])e[n]=(r=e[n])==null?void 0:r.join(", ");const{extent:t}=e;return t&&(e.extent=JSON.stringify(t)),e}async deleteRating(){await this.portal.request(this.itemUrl+"/deleteRating",{method:"post"})}fetchData(e="json",t){return this.portal.request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}async fetchRating(e){const t=await this.portal.request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e});return t.rating!=null?(t.created=new Date(t.created),new f(t)):null}fetchRelatedItems(e,t){return this.portal.requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},u)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal.request(this.itemUrl??"",{cacheBust:!0,query:{token:this.apiKey}}).then(e=>(this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const t=e==null?void 0:e.data,r={method:"post"};r.query=this.createPostQuery();for(const n in r.query)r.query[n]===null&&(r.query[n]="");return r.query.clearEmptyFields=!0,t!=null&&(typeof t=="string"?r.query.text=t:typeof t=="object"&&(r.query.text=JSON.stringify(t))),this.portal.request(`${this.userItemUrl}/update`,r).then(()=>this.reload())}):Promise.reject(new g("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async copy(e){if(!this.id)throw new g("portal:item-does-not-exist","The item does not exist yet");await this.load();const{portal:t,itemUrl:r}=this;await t.signIn();const{copyResources:n,folder:i,tags:c,title:d}=e||{},v={method:"post",query:{copyPrivateResources:n==="all",folder:typeof i=="string"?i:i==null?void 0:i.id,includeResources:!!n,tags:c==null?void 0:c.join(","),title:d}},{itemId:w}=await t.request(`${r}/copy`,v);return new u({id:w,portal:t})}updateThumbnail(e){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const t=e.thumbnail,r=e.filename,n={method:"post"};if(typeof t=="string")_(t)?n.query={data:t}:n.query={url:$(t)},r!=null&&(n.query.filename=r);else{const i=new FormData;r!=null?i.append("file",t,r):i.append("file",t),n.body=i}return this.portal.request(`${this.userItemUrl}/updateThumbnail`,n).then(()=>this.reload())}):Promise.reject(new g("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){const{fetchResources:r}=await h(()=>import("./resourceUtils-CLi0K8NA.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return r(this,e,t)}async addResource(e,t,r){const{addOrUpdateResources:n}=await h(()=>import("./resourceUtils-CLi0K8NA.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return e.portalItem=this,await n(this,[{resource:e,content:t,compress:r==null?void 0:r.compress,access:r==null?void 0:r.access}],"add",r),e}async removeResource(e,t){const{removeResource:r}=await h(()=>import("./resourceUtils-CLi0K8NA.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new g("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return r(this,e,t)}async removeAllResources(e){const{removeAllResources:t}=await h(()=>import("./resourceUtils-CLi0K8NA.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return t(this,e)}resourceFromPath(e){return new M({portalItem:this,path:e})}toJSON(){var r,n;const e=this.extent,t={accessInformation:this.accessInformation,categories:l(this.categories),created:(r=this.created)==null?void 0:r.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:(n=this.modified)==null?void 0:n.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:l(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:l(this.typeKeywords),url:this.url};return F(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new u({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)t==="tags"&&e[t]!==null&&(e[t]=e[t].join(", ")),t==="typeKeywords"&&e[t]!==null&&(e[t]=e[t].join(", ")),t==="extent"&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};o([a({type:["private","shared","org","public"]})],s.prototype,"access",void 0),o([a()],s.prototype,"accessInformation",void 0),o([a({type:String})],s.prototype,"apiKey",void 0),o([a({json:{read:{source:"appProxies"}}})],s.prototype,"applicationProxies",void 0),o([a()],s.prototype,"avgRating",void 0),o([a()],s.prototype,"categories",void 0),o([a({type:Date})],s.prototype,"created",void 0),o([a()],s.prototype,"culture",void 0),o([a()],s.prototype,"description",void 0),o([a({readOnly:!0})],s.prototype,"displayName",null),o([a({type:P})],s.prototype,"extent",void 0),o([E("extent")],s.prototype,"readExtent",null),o([a()],s.prototype,"groupCategories",void 0),o([a({readOnly:!0})],s.prototype,"iconUrl",null),o([a()],s.prototype,"id",void 0),o([a({readOnly:!0})],s.prototype,"isLayer",null),o([a({type:Boolean,readOnly:!0})],s.prototype,"isOrgItem",void 0),o([a()],s.prototype,"itemControl",void 0),o([a({readOnly:!0})],s.prototype,"itemPageUrl",null),o([a({readOnly:!0})],s.prototype,"itemUrl",null),o([a()],s.prototype,"licenseInfo",void 0),o([a({type:Date})],s.prototype,"modified",void 0),o([a()],s.prototype,"name",void 0),o([a()],s.prototype,"numComments",void 0),o([a()],s.prototype,"numRatings",void 0),o([a()],s.prototype,"numViews",void 0),o([a()],s.prototype,"owner",void 0),o([a()],s.prototype,"ownerFolder",void 0),o([a({type:O})],s.prototype,"portal",void 0),o([a()],s.prototype,"screenshots",void 0),o([a()],s.prototype,"size",void 0),o([a()],s.prototype,"snippet",void 0),o([a()],s.prototype,"sourceJSON",void 0),o([a({type:String})],s.prototype,"sourceUrl",void 0),o([a({type:String})],s.prototype,"spatialReference",void 0),o([a()],s.prototype,"tags",void 0),o([a()],s.prototype,"thumbnail",void 0),o([a({readOnly:!0})],s.prototype,"thumbnailUrl",null),o([a()],s.prototype,"title",void 0),o([a()],s.prototype,"type",void 0),o([a()],s.prototype,"typeKeywords",void 0),o([a({type:String,json:{read(e,t){var r;if(V.has(t.type)){const n=(r=this.portal)==null?void 0:r.restUrl;e||(e=n&&this.id?`${n}/content/items/${this.id}/data`:null)}return e}}})],s.prototype,"url",void 0),o([a({readOnly:!0})],s.prototype,"userItemUrl",null),s=u=o([b("esri.portal.PortalItem")],s);const oe=s;export{oe as default};
