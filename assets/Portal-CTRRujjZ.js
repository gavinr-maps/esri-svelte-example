const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PortalItem-CXk7DqVv.js","./index-tefRSezt.js","./index-Cx51aysm.css","./Accessor-BHnuXKD2.js","./cast-BA_-jlhc.js","./JSONSupport-CGdeqxpk.js","./writer-B2bQV2uU.js","./Extent-CBBGeHb-.js","./Point-XGrwlf63.js","./Promise-CmQqe-ke.js","./Basemap-BHdJ6wQH.js","./reactiveUtils-BR0C1Kq4.js","./Evented-DCWccWGU.js","./SimpleObservable-7oieNGD8.js","./collectionUtils-CbaToa73.js","./loadAll-Do8S8AWH.js","./basemapDefinitions-BmB40s1J.js","./intl-Do3GEEJ7.js","./writeUtils-C3ZSK02Z.js","./layerUtils-dJgsXxkC.js","./ElevationLayer-Bi0g_XAJ.js","./MultiOriginJSONSupport-nGLpCFeg.js","./HeightModelInfo-B3GZyQFz.js","./Layer-C9uQlTBT.js","./Identifiable-BrT7zvUW.js","./TimeExtent-J5qnUFx_.js","./timeUtils-D2X862bk.js","./ArcGISCachedService-Ba-PnMQ3.js","./TileInfo-CRfZy5zq.js","./Polyline-BmuD2-ZN.js","./mathUtils-DV9iOXpW.js","./TileKey-DZd6gJy7.js","./TileInfoTilemapCache-ChbmPWxO.js","./TilemapCache-DSmTO5V1.js","./ByteSizeUnit-BsxeN7wM.js","./LRUCache-DS2O1kTf.js","./MemCache-CDoaVBHf.js","./memoryEstimations-5gFNwkKK.js","./ArcGISService-BHkTabnw.js","./OperationalLayer-Bts9W3HA.js","./layerContainerType-C5CzMsLd.js","./commonProperties-C0eC30J9.js","./ElevationInfo-Di4W6v5U.js","./opacityUtils-CSd4XoR2.js","./unitConversionUtils-C4AR5obr.js","./lengthUtils-DjJgJFRg.js","./AttributeTableTemplate-B7rH2qLr.js","./PortalLayer-jhi5QQgB.js","./portalItemUtils-rm7sAgcm.js","./projection-B2I9Bzj_.js","./vec3f64-BLpZdpfb.js","./projectBuffer-DOU0xvVi.js","./geodesicConstants-yASAK_zX.js","./LercDecoder-BneQW32N.js","./WorkerHandle-B2QLNs3X.js","./workers-D8Q3pEzK.js","./Queue-BOnccek2.js"])))=>i.map(i=>d[i]);
import{_ as G}from"./index-tefRSezt.js";import{r,m as o,U as W,a as O,a5 as k,s as m,i as Y,g as H,c as X,L as R,O as U,N as Q,l as Z,D as E,H as A,a6 as T,V as tt}from"./Accessor-BHnuXKD2.js";import{o as et,b as rt,s as w,P as ot}from"./cast-BA_-jlhc.js";import{S as I}from"./JSONSupport-CGdeqxpk.js";import{p as st,r as $}from"./Promise-CmQqe-ke.js";import{o as _}from"./writer-B2bQV2uU.js";import{w as j}from"./Extent-CBBGeHb-.js";import{a3 as it,g as lt}from"./Point-XGrwlf63.js";const at="not-loaded",nt="loading",ut="failed",J="loaded",V=t=>{let e=class extends t{constructor(...s){super(...s),this._loadController=null,this.loadError=null,this.loadStatus="not-loaded",this._set("loadWarnings",[]),this.addResolvingPromise(new Promise(l=>{const a=this.load.bind(this);this.load=n=>{const u=new Promise((p,y)=>{const S=k(n,y);this.destroyed&&y(new m("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this})),this.when(p,y).finally(()=>{S&&S.remove()})});if(this.loadStatus===at){this._set("loadStatus",nt);const p=this._loadController=new AbortController;a({signal:p.signal})}return l(),u}})),this.when(()=>{this._set("loadStatus",J),this._loadController=null},l=>{this._set("loadStatus",ut),this._set("loadError",l),this._loadController=null})}destroy(){this._loadController&&(this._loadController=Y(this._loadController),this._promiseProps.abort()),this._set("loadError",null),this._set("loadWarnings",[])}get loaded(){return this.loadStatus===J}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){var s;return this.isFulfilled()||(this._set("loadError",new m("load:cancelled","Cancelled")),(s=this._loadController)==null||s.abort(),this._promiseProps.abort()),this}};return r([o({readOnly:!0})],e.prototype,"loaded",null),r([o({readOnly:!0})],e.prototype,"loadError",void 0),r([o({clonable:!1})],e.prototype,"loadStatus",void 0),r([o({type:[W],readOnly:!0})],e.prototype,"loadWarnings",null),e=r([O("esri.core.Loadable")],e),e};let b=class extends V(st){};b=r([O("esri.core.Loadable")],b),function(t){function e(s){return!(!s||!s.load)}t.LoadableMixin=V,t.isLoadable=e}(b||(b={}));const pt=b;let D;function dt(t){return D&&!D.destroyed||(D=t()),D}var B;const ht=new et({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});let f=B=class extends H{constructor(t){super(t),this.categories=null,this.disableExtraQuery=!1,this.extent=null,this.filter=null,this.num=10,this.query=null,this.sortField=null,this.start=1}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(t){t!=="asc"&&t!=="desc"||this._set("sortOrder",t)}clone(){return new B({categories:this.categories?X(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,filter:this.filter,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(t,e){let s=[];this.categories&&(s=this.categories.map(u=>Array.isArray(u)?JSON.stringify(u):u));let l="";if(this.extent){const u=it(this.extent,lt.WGS84);u!=null&&(l=`${u.xmin},${u.ymin},${u.xmax},${u.ymax}`)}let a=this.query;!this.disableExtraQuery&&t.extraQuery&&(a="("+a+")"+t.extraQuery);const n={categories:s,bbox:l,q:a,filter:this.filter,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(n.sortField=this.sortField.split(",").map(u=>ht.toJSON(u.trim())).join(","),n.sortOrder=this.sortOrder),{query:{...e,...n}}}};r([o()],f.prototype,"categories",void 0),r([o()],f.prototype,"disableExtraQuery",void 0),r([o({type:j})],f.prototype,"extent",void 0),r([o()],f.prototype,"filter",void 0),r([o()],f.prototype,"num",void 0),r([o()],f.prototype,"query",void 0),r([o()],f.prototype,"sortField",void 0),r([o()],f.prototype,"sortOrder",null),r([o()],f.prototype,"start",void 0),f=B=r([O("esri.portal.PortalQueryParams")],f);const v=f;var M;let h=M=class extends I{constructor(t){super(t),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.sourceJSON=null,this.tags=null,this.title=null}get thumbnailUrl(){var s;const t=this.url,e=this.thumbnail;return t&&e&&this.portal?(s=this.portal)==null?void 0:s.normalizeUrl(`${t}/info/${e}?f=json`):null}get url(){var e;const t=(e=this.portal)==null?void 0:e.restUrl;return t?t+"/community/groups/"+this.id:null}fetchCategorySchema(t){return this.portal.request(this.url+"/categorySchema",t).then(e=>{const s=e.categorySchema||[];return s.some(l=>l.source==="contentCategorySetsGroupQuery.LivingAtlas")?this._fetchCategorySchemaSet("LivingAtlas",t):s})}fetchMembers(t){return this.portal.request(this.url+"/users",t)}getThumbnailUrl(t){let e=this.thumbnailUrl;return e&&t&&(e+=`&w=${t}`),e}toJSON(){throw new m("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const e=new M({sourceJSON:t});return e.read(t),e}queryItems(t,e){let s=R(v,t);const l=this.portal;return parseFloat(l.currentVersion)>5?(s=s||new v,l.queryPortal(`/content/groups/${this.id}/search`,s,"PortalItem",e)):(s=s?s.clone():new v,s.query="group:"+this.id+(s.query?" "+s.query:""),l.queryItems(s,e))}_fetchCategorySchemaSet(t,e){const s=this.portal;return s.fetchSelf(s.authMode,!0,e).then(l=>{const a=l.contentCategorySetsGroupQuery;if(a){const n=new v({disableExtraQuery:!0,num:1,query:a});return s.queryGroups(n,e)}throw new m("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")}).then(l=>{if(l.total){const a=l.results[0],n=new v({num:1,query:`typekeywords:"${t}"`});return a.queryItems(n,e)}throw new m("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")}).then(l=>l.total?l.results[0].fetchData("json",e).then(a=>{const n=a==null?void 0:a.categorySchema;return n!=null&&n.length?n:[]}):[])}};r([o()],h.prototype,"access",void 0),r([o({type:Date})],h.prototype,"created",void 0),r([o()],h.prototype,"description",void 0),r([o()],h.prototype,"id",void 0),r([o()],h.prototype,"isInvitationOnly",void 0),r([o({type:Date})],h.prototype,"modified",void 0),r([o()],h.prototype,"owner",void 0),r([o()],h.prototype,"portal",void 0),r([o()],h.prototype,"snippet",void 0),r([o()],h.prototype,"sortField",void 0),r([o()],h.prototype,"sortOrder",void 0),r([o()],h.prototype,"sourceJSON",void 0),r([o()],h.prototype,"tags",void 0),r([o()],h.prototype,"thumbnail",void 0),r([o({readOnly:!0})],h.prototype,"thumbnailUrl",null),r([o()],h.prototype,"title",void 0),r([o({readOnly:!0})],h.prototype,"url",null),h=M=r([O("esri.portal.PortalGroup")],h);const N=h;let P=class extends H{constructor(t){super(t),this.nextQueryParams=null,this.queryParams=null,this.results=null,this.total=null}};r([o()],P.prototype,"nextQueryParams",void 0),r([o()],P.prototype,"queryParams",void 0),r([o()],P.prototype,"results",void 0),r([o()],P.prototype,"total",void 0),P=r([O("esri.portal.PortalQueryResult")],P);const yt=P;let g=class extends I{constructor(e){super(e),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null}get url(){var s;const e=(s=this.portal)==null?void 0:s.restUrl;return e?`${e}/content/users/${this.username}/${this.id}`:null}toJSON(){throw new m("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")}};r([o({type:Date})],g.prototype,"created",void 0),r([o()],g.prototype,"id",void 0),r([o()],g.prototype,"portal",void 0),r([o()],g.prototype,"title",void 0),r([o({readOnly:!0})],g.prototype,"url",null),r([o()],g.prototype,"username",void 0),g=r([O("esri.portal.PortalFolder")],g);const ct=g;var x;let d=x=class extends I{constructor(t){super(t),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userLicenseTypeId=null,this.userType=null}get thumbnailUrl(){const t=this.url,e=this.thumbnail;return t&&e?this.portal.normalizeUrl(`${t}/info/${e}?f=json`):null}get userContentUrl(){var e;const t=(e=this.portal)==null?void 0:e.restUrl;return t?`${t}/content/users/${this.username}`:null}get url(){var e;const t=(e=this.portal)==null?void 0:e.restUrl;return t?`${t}/community/users/${this.username}`:null}addItem(t){const e=t&&t.item,s=t==null?void 0:t.data,l=t==null?void 0:t.folder,a={method:"post"};e&&(a.query=e.createPostQuery(),s!=null&&(typeof s=="string"?a.query.text=s:typeof s=="object"&&(a.query.text=JSON.stringify(s))));let n=this.userContentUrl;return l&&(n+="/"+(typeof l=="string"?l:l.id)),this.portal.request(n+"/addItem",a).then(u=>(e.id=u.id,e.portal=this.portal,e.loaded?e.reload():e.load()))}async deleteItem(t,e=!1){let s=this.userContentUrl;t.ownerFolder&&(s+="/"+t.ownerFolder);const l=e?{permanentDelete:!0}:{};await this.portal.request(s+`/items/${t.id}/delete`,{method:"post",query:l}),t.id=null,t.portal=null}async deleteItems(t,e=!1){t=t.slice();const s=this.userContentUrl+"/deleteItems",l=[],a=t.map(n=>n.id);if(a.length){const n={method:"post",query:{items:a.join(","),permanentDelete:e}},u=await this.portal.request(s,n);for(const p of u.results){const y=t.find(K=>p.itemId===K.id),S=p.success;let q=null;S?(y.id=null,y.portal=null):p.error&&(q=new m("portal:delete-item-failed",p.error.message,p.error)),l.push({item:y,success:S,error:q})}}return l}fetchFolders(){const t={query:{num:1}};return this.portal.request(this.userContentUrl??"",t).then(e=>{let s;return s=e&&e.folders?e.folders.map(l=>{const a=ct.fromJSON(l);return a.portal=this.portal,a}):[],s})}fetchGroups(){return this.portal.request(this.url??"").then(t=>{let e;return e=t&&t.groups?t.groups.map(s=>{const l=N.fromJSON(s);return l.portal=this.portal,l}):[],e})}async fetchItems(t){t??(t={});let e=this.userContentUrl??"";t.folder&&(e+="/"+t.folder.id);const{default:s}=await G(()=>import("./PortalItem-CXk7DqVv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),l={folders:!1,inRecycleBin:!!t.inRecycleBin||null,foldersContent:!(t.folder||!t.includeSubfolderItems)||null,num:t.num||10,start:t.start||1,sortField:t.sortField||"created",sortOrder:t.sortOrder||"asc"},a=await this.portal.request(e,{query:l});let n;return a!=null&&a.items?(n=a.items.map(u=>{const p=s.fromJSON(u);return p.portal=this.portal,p}),await Promise.all(n.map(u=>u.load())),{items:n,nextStart:a.nextStart,total:a.total}):{items:[],nextStart:-1,total:0}}fetchTags(){return this.portal.request(this.url+"/tags").then(t=>t.tags)}getThumbnailUrl(t){let e=this.thumbnailUrl;return e&&t&&(e+=`&w=${t}`),e}queryFavorites(t){return this.favGroupId?(this._favGroup||(this._favGroup=new N({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(t)):Promise.reject(new m("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}async restoreItem(t,e){const s=this.userContentUrl,l=e?{folderID:typeof e=="string"?e:e.id}:null;await this.portal.request(s+`/items/${t.id}/restore`,{method:"post",query:l})}toJSON(){throw new m("internal:not-yet-implemented","PortalUser.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const e=new x({sourceJSON:t});return e.read(t),e}};r([o()],d.prototype,"access",void 0),r([o({type:Date})],d.prototype,"created",void 0),r([o()],d.prototype,"culture",void 0),r([o()],d.prototype,"description",void 0),r([o()],d.prototype,"email",void 0),r([o()],d.prototype,"favGroupId",void 0),r([o()],d.prototype,"fullName",void 0),r([o({type:Date})],d.prototype,"modified",void 0),r([o()],d.prototype,"orgId",void 0),r([o()],d.prototype,"portal",void 0),r([o()],d.prototype,"preferredView",void 0),r([o()],d.prototype,"privileges",void 0),r([o()],d.prototype,"region",void 0),r([o()],d.prototype,"role",void 0),r([o()],d.prototype,"roleId",void 0),r([o()],d.prototype,"sourceJSON",void 0),r([o()],d.prototype,"thumbnail",void 0),r([o({readOnly:!0})],d.prototype,"thumbnailUrl",null),r([o()],d.prototype,"units",void 0),r([o({readOnly:!0})],d.prototype,"userContentUrl",null),r([o({readOnly:!0})],d.prototype,"url",null),r([o()],d.prototype,"username",void 0),r([o()],d.prototype,"userLicenseTypeId",void 0),r([o()],d.prototype,"userType",void 0),d=x=r([O("esri.portal.PortalUser")],d);const z=d;var c;let C;const F={PortalGroup:()=>Promise.resolve({default:N}),PortalItem:()=>G(()=>import("./PortalItem-CXk7DqVv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),PortalUser:()=>Promise.resolve({default:z})};let i=c=class extends I.JSONSupportMixin(pt){constructor(t){super(t),this._esriIdCredentialCreateHandle=null,this.access=null,this.allSSL=!1,this.authMode="auto",this.authorizedCrossOriginDomains=null,this.basemapGalleryGroupQuery=null,this.basemapGalleryGroupQuery3D=null,this.bingKey=null,this.canListApps=!1,this.canListData=!1,this.canListPreProvisionedItems=!1,this.canProvisionDirectPurchase=!1,this.canSearchPublic=!0,this.canShareBingPublic=!1,this.canSharePublic=!1,this.canSignInArcGIS=!1,this.canSignInIDP=!1,this.colorSetsGroupQuery=null,this.commentsEnabled=!1,this.created=null,this.culture=null,this.customBaseUrl=null,this.default3DBasemapQuery=null,this.defaultBasemap=null,this.defaultDevBasemap=null,this.defaultExtent=null,this.defaultVectorBasemap=null,this.description=null,this.devBasemapGalleryGroupQuery=null,this.eueiEnabled=null,this.featuredGroups=null,this.featuredItemsGroupQuery=null,this.galleryTemplatesGroupQuery=null,this.layoutGroupQuery=null,this.livingAtlasGroupQuery=null,this.hasCategorySchema=!1,this.hasClassificationSchema=!1,this.helperServices=null,this.homePageFeaturedContent=null,this.homePageFeaturedContentCount=null,this.httpPort=null,this.httpsPort=null,this.id=null,this.ipCntryCode=null,this.isPortal=!1,this.isReadOnly=!1,this.layerTemplatesGroupQuery=null,this.maxTokenExpirationMinutes=null,this.modified=null,this.name=null,this.portalHostname=null,this.portalMode=null,this.portalProperties=null,this.region=null,this.recycleBinEnabled=!1,this.rotatorPanels=null,this.showHomePageDescription=!1,this.sourceJSON=null,this.supportsHostedServices=!1,this.symbolSetsGroupQuery=null,this.templatesGroupQuery=null,this.units=null,this.url=U.portalUrl,this.urlKey=null,this.user=null,this.use3dBasemaps=!0,this.useDefault3dBasemap=!1,this.useStandardizedQuery=!1,this.useVectorBasemaps=!1,this.vectorBasemapGalleryGroupQuery=null}normalizeCtorArgs(t){return typeof t=="string"?{url:t}:t}destroy(){L.unregister(this),this.defaultBasemap=Q(this.defaultBasemap),this.defaultDevBasemap=Q(this.defaultDevBasemap),this.defaultVectorBasemap=Q(this.defaultVectorBasemap),this._esriIdCredentialCreateHandle=Z(this._esriIdCredentialCreateHandle)}readAuthorizedCrossOriginDomains(t){if(t)for(const e of t)U.request.trustedServers.includes(e)||U.request.trustedServers.push(e);return t}readDefaultBasemap(t){return this._readBasemap(t)}readDefaultDevBasemap(t){return this._readBasemap(t)}readDefaultVectorBasemap(t){return this._readBasemap(t)}get extraQuery(){var s;const t=(s=this.user)==null?void 0:s.orgId,e=!t||this.canSearchPublic;return this.id&&!e?` AND orgid:${this.id}`:null}get hasAPIKey(){return rt(this.url)}get isOrganization(){return!!this.access}get itemPageUrl(){return this.url?`${this.url}/home/item.html`:null}get restUrl(){let t=this.url;if(t){const e=t.indexOf("/sharing");t=e>0?t.slice(0,e):this.url.replace(/\/+$/,""),t+="/sharing/rest"}return t}get thumbnailUrl(){const t=this.restUrl,e=this.thumbnail;return t&&e?this._normalizeSSL(t+"/portals/self/resources/"+e):null}readUrlKey(t){return t&&t.toLowerCase()}readUser(t){let e=null;return t&&(e=z.fromJSON(t),e.portal=this),e}load(t){const e=G(()=>import("./Basemap-BHdJ6wQH.js"),__vite__mapDeps([10,1,2,3,4,5,11,12,13,14,15,6,8,0,7,9,16,17,18,19]),import.meta.url).then(({default:s})=>{E(t),C=s}).then(()=>this.sourceJSON?this.sourceJSON:this.fetchSelf(this.authMode,!1,t)).then(s=>{var l;if(!this.hasAPIKey&&w){const a=w;this.credential=a.findCredential(this.restUrl),this.credential||this.authMode!==c.AUTH_MODE_AUTO&&this.authMode!==c.AUTH_MODE_NO_PROMPT||((l=this._esriIdCredentialCreateHandle)==null||l.remove(),this._esriIdCredentialCreateHandle=a.on("credential-create",mt(new WeakRef(this))),L.register(this,this._esriIdCredentialCreateHandle,this))}this.sourceJSON=s,this.read(s)});return this.addResolvingPromise(e),Promise.resolve(this)}async createElevationLayers(){await this.load();const t=this._getHelperService("defaultElevationLayers"),e=(await G(async()=>{const{default:s}=await import("./ElevationLayer-Bi0g_XAJ.js");return{default:s}},__vite__mapDeps([20,1,2,3,4,5,21,6,22,8,23,12,24,7,25,26,9,27,28,29,30,31,32,33,34,35,36,11,13,37,38,39,40,41,42,43,44,45,46,47,19,0,48,49,50,51,52,53,54,55,56,17]),import.meta.url)).default;return t?t.map(s=>new e({id:s.id,url:s.url})):[]}async fetchBasemaps(t,e){const s=await this._fetchBasemaps(t,e);if((e==null?void 0:e.include3d)===!0&&this.use3dBasemaps!==!1){const l=await this._fetchBasemaps3D(t,e);s.unshift(...l)}return s}async fetchDefault3DBasemap(t){if(!this.useDefault3dBasemap||!this.default3DBasemapQuery||this.default3DBasemapQuery==="none")return null;const e=new v;e.query=this.default3DBasemapQuery,e.disableExtraQuery=!0;const s=(await this.queryItems(e,t)).results.find(l=>l.type==="Web Scene");return s?new C({portalItem:s}):null}fetchCategorySchema(t){return this.hasCategorySchema?this.request(this.restUrl+"/portals/self/categorySchema",t).then(e=>e.categorySchema):A(t)?Promise.reject(T()):Promise.resolve([])}async fetchClassificationSchema(t){return this.hasClassificationSchema?this.request(this.restUrl+"/portals/self/classification/classificationSchema",t).then(e=>e.classificationSchema):null}fetchFeaturedGroups(t){const e=this.featuredGroups,s=new v({num:100,sortField:"title"});if(e!=null&&e.length){const l=[];for(const a of e)l.push(`(title:"${a.title}" AND owner:${a.owner})`);return s.query=l.join(" OR "),this.queryGroups(s,t).then(a=>a.results)}return A(t)?Promise.reject(T()):Promise.resolve([])}fetchRegions(t){var s;const e=((s=this.user)==null?void 0:s.culture)||this.culture||$();return this.request(this.restUrl+"/portals/regions",{...t,query:{culture:e}})}fetchSettings(t){var s;const e=((s=this.user)==null?void 0:s.culture)||this.culture||$();return this.request(this.restUrl+"/portals/self/settings",{...t,query:{culture:e}})}static getDefault(){return dt(()=>new c)}queryGroups(t,e){return this.queryPortal("/community/groups",t,"PortalGroup",e)}queryItems(t,e){return this.queryPortal("/search",t,"PortalItem",e)}queryUsers(t,e){return t.sortField||(t.sortField="username"),this.queryPortal("/community/users",t,"PortalUser",e)}fetchSelf(t=this.authMode,e=!1,s){const l=this.restUrl+"/portals/self",a={authMode:t,query:{culture:$().toLowerCase()},withCredentials:!0,...s};return a.authMode==="auto"&&(a.authMode="no-prompt"),e&&(a.query.default=!0),this.request(l,a)}queryPortal(t,e,s,l){const a=R(v,e),n=u=>this.request(this.restUrl+t,{...a.toRequestOptions(this),...l}).then(p=>{const y=a.clone();return y.start=p.nextStart,new yt({nextQueryParams:y,queryParams:a,total:p.total,results:c._resultsToTypedArray(u,{portal:this},p,l)})}).then(p=>Promise.all(p.results.map(y=>typeof y.when=="function"?y.when():p)).then(()=>p,y=>(tt(y),p)));return s&&F[s]?F[s]().then(({default:u})=>(E(l),n(u))):n()}signIn(){if(this.hasAPIKey)return this.load().then(()=>{if(!this.user)throw new m("portal:not-authenticated","Unable to authenticate user. Portal.user is missing")});if(this.authMode===c.AUTH_MODE_ANONYMOUS||this.authMode===c.AUTH_MODE_NO_PROMPT&&!w)return Promise.reject(new m("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`));if(this.loadStatus==="failed")return Promise.reject(this.loadError);const t=e=>Promise.resolve().then(()=>this.loadStatus==="not-loaded"?(e||(this.authMode="immediate"),this.load().then(()=>null)):this.loadStatus==="loading"?this.load().then(()=>this.credential?null:(this.credential=e,this.fetchSelf("immediate"))):this.user&&this.credential===e?null:(this.credential=e,this.fetchSelf("immediate"))).then(s=>{s&&(this.sourceJSON=s,this.read(s))});return w?w.getCredential(this.restUrl,{prompt:this.authMode!==c.AUTH_MODE_NO_PROMPT}).then(e=>t(e)):t(this.credential)}normalizeUrl(t){var s;const e=(s=this.credential)==null?void 0:s.token;return this._normalizeSSL(e?t+(t.includes("?")?"&":"?")+"token="+e:t)}requestToTypedArray(t,e,s){return this.request(t,e).then(l=>{const a=c._resultsToTypedArray(s,{portal:this},l);return Promise.all(a.map(n=>typeof n.when=="function"?n.when():l)).then(()=>a,()=>a)})}request(t,e={}){const s={f:"json",...e.query},{authMode:l=this.authMode===c.AUTH_MODE_ANONYMOUS||this.authMode===c.AUTH_MODE_NO_PROMPT?this.authMode:"auto",body:a=null,cacheBust:n=!1,method:u="auto",responseType:p="json",signal:y}=e,S={authMode:l,body:a,cacheBust:n,method:u,query:s,responseType:p,timeout:0,signal:y};return e.withCredentials&&(S.withCredentials=!0),ot(this._normalizeSSL(t),S).then(q=>q.data)}toJSON(){throw new m("internal:not-yet-implemented","Portal.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");return new c({sourceJSON:t})}_getHelperService(t){const e=this.helperServices&&this.helperServices[t];if(!e)throw new m("portal:service-not-found",`The \`helperServices\` do not include an entry named "${t}"`);return e}async _fetchBasemaps(t,e){const s=new v;s.query=t||(this.hasAPIKey?this.devBasemapGalleryGroupQuery:this.useVectorBasemaps?this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery),s.disableExtraQuery=!0;const l=await this.queryGroups(s,e);if(!l.total)return[];const a=l.results[0];s.num=100,s.query='type:"Web Map" -type:"Web Application"',s.sortField=a.sortField||"name",s.sortOrder=a.sortOrder||"desc";const n=await a.queryItems(s,e);return n.total?n.results.filter(u=>u.type==="Web Map").map(u=>new C({portalItem:u})):[]}async _fetchBasemaps3D(t,e){const s=t||this.basemapGalleryGroupQuery3D;if(!s)return[];if(this.hasAPIKey)return[];const l=new v({query:s,disableExtraQuery:!0}),a=await this.queryGroups(l,e);if(!a.total)return[];const n=a.results[0];l.num=100,l.query='type:"Web Scene"',l.sortField=n.sortField||"name",l.sortOrder=n.sortOrder||"desc";const u=await n.queryItems(l,e);return u.total?u.results.filter(p=>p.type==="Web Scene").map(p=>new C({portalItem:p})):[]}_normalizeSSL(t){return t.replace(/^http:/i,"https:").replace(":7080",":7443")}_readBasemap(t){if(t){const e=C.fromJSON(t);return e.portalItem={portal:this},e}return null}static _resultsToTypedArray(t,e,s,l){let a;if(s){const n=l!=null?l.signal:null;a=s.listings||s.notifications||s.userInvitations||s.tags||s.items||s.groups||s.comments||s.provisions||s.results||s.relatedItems||s,(t||e)&&(a=a.map(u=>{const p=Object.assign(t?t.fromJSON(u):u,e);return typeof p.load=="function"&&p.load(n),p}))}else a=[];return a}};i.AUTH_MODE_ANONYMOUS="anonymous",i.AUTH_MODE_AUTO="auto",i.AUTH_MODE_IMMEDIATE="immediate",i.AUTH_MODE_NO_PROMPT="no-prompt",r([o()],i.prototype,"access",void 0),r([o()],i.prototype,"allSSL",void 0),r([o()],i.prototype,"authMode",void 0),r([o()],i.prototype,"authorizedCrossOriginDomains",void 0),r([_("authorizedCrossOriginDomains")],i.prototype,"readAuthorizedCrossOriginDomains",null),r([o()],i.prototype,"basemapGalleryGroupQuery",void 0),r([o({json:{name:"3DBasemapGalleryGroupQuery"}})],i.prototype,"basemapGalleryGroupQuery3D",void 0),r([o()],i.prototype,"bingKey",void 0),r([o()],i.prototype,"canListApps",void 0),r([o()],i.prototype,"canListData",void 0),r([o()],i.prototype,"canListPreProvisionedItems",void 0),r([o()],i.prototype,"canProvisionDirectPurchase",void 0),r([o()],i.prototype,"canSearchPublic",void 0),r([o()],i.prototype,"canShareBingPublic",void 0),r([o()],i.prototype,"canSharePublic",void 0),r([o()],i.prototype,"canSignInArcGIS",void 0),r([o()],i.prototype,"canSignInIDP",void 0),r([o()],i.prototype,"colorSetsGroupQuery",void 0),r([o()],i.prototype,"commentsEnabled",void 0),r([o({type:Date})],i.prototype,"created",void 0),r([o()],i.prototype,"credential",void 0),r([o()],i.prototype,"culture",void 0),r([o()],i.prototype,"currentVersion",void 0),r([o()],i.prototype,"customBaseUrl",void 0),r([o()],i.prototype,"default3DBasemapQuery",void 0),r([o()],i.prototype,"defaultBasemap",void 0),r([_("defaultBasemap")],i.prototype,"readDefaultBasemap",null),r([o()],i.prototype,"defaultDevBasemap",void 0),r([_("defaultDevBasemap")],i.prototype,"readDefaultDevBasemap",null),r([o({type:j})],i.prototype,"defaultExtent",void 0),r([o()],i.prototype,"defaultVectorBasemap",void 0),r([_("defaultVectorBasemap")],i.prototype,"readDefaultVectorBasemap",null),r([o()],i.prototype,"description",void 0),r([o()],i.prototype,"devBasemapGalleryGroupQuery",void 0),r([o()],i.prototype,"eueiEnabled",void 0),r([o({readOnly:!0})],i.prototype,"extraQuery",null),r([o()],i.prototype,"featuredGroups",void 0),r([o()],i.prototype,"featuredItemsGroupQuery",void 0),r([o()],i.prototype,"galleryTemplatesGroupQuery",void 0),r([o()],i.prototype,"layoutGroupQuery",void 0),r([o()],i.prototype,"livingAtlasGroupQuery",void 0),r([o({readOnly:!0})],i.prototype,"hasAPIKey",null),r([o()],i.prototype,"hasCategorySchema",void 0),r([o()],i.prototype,"hasClassificationSchema",void 0),r([o()],i.prototype,"helpBase",void 0),r([o()],i.prototype,"helperServices",void 0),r([o()],i.prototype,"helpMap",void 0),r([o()],i.prototype,"homePageFeaturedContent",void 0),r([o()],i.prototype,"homePageFeaturedContentCount",void 0),r([o()],i.prototype,"httpPort",void 0),r([o()],i.prototype,"httpsPort",void 0),r([o()],i.prototype,"id",void 0),r([o()],i.prototype,"ipCntryCode",void 0),r([o({readOnly:!0})],i.prototype,"isOrganization",null),r([o()],i.prototype,"isPortal",void 0),r([o()],i.prototype,"isReadOnly",void 0),r([o({readOnly:!0})],i.prototype,"itemPageUrl",null),r([o()],i.prototype,"layerTemplatesGroupQuery",void 0),r([o()],i.prototype,"maxTokenExpirationMinutes",void 0),r([o({type:Date})],i.prototype,"modified",void 0),r([o()],i.prototype,"name",void 0),r([o()],i.prototype,"portalHostname",void 0),r([o()],i.prototype,"portalMode",void 0),r([o()],i.prototype,"portalProperties",void 0),r([o()],i.prototype,"region",void 0),r([o()],i.prototype,"recycleBinEnabled",void 0),r([o({readOnly:!0})],i.prototype,"restUrl",null),r([o()],i.prototype,"rotatorPanels",void 0),r([o()],i.prototype,"showHomePageDescription",void 0),r([o()],i.prototype,"sourceJSON",void 0),r([o()],i.prototype,"staticImagesUrl",void 0),r([o({json:{name:"2DStylesGroupQuery"}})],i.prototype,"stylesGroupQuery2d",void 0),r([o({json:{name:"stylesGroupQuery"}})],i.prototype,"stylesGroupQuery3d",void 0),r([o()],i.prototype,"supportsHostedServices",void 0),r([o()],i.prototype,"symbolSetsGroupQuery",void 0),r([o()],i.prototype,"templatesGroupQuery",void 0),r([o()],i.prototype,"thumbnail",void 0),r([o({readOnly:!0})],i.prototype,"thumbnailUrl",null),r([o()],i.prototype,"units",void 0),r([o()],i.prototype,"url",void 0),r([o()],i.prototype,"urlKey",void 0),r([_("urlKey")],i.prototype,"readUrlKey",null),r([o()],i.prototype,"user",void 0),r([_("user")],i.prototype,"readUser",null),r([o()],i.prototype,"use3dBasemaps",void 0),r([o()],i.prototype,"useDefault3dBasemap",void 0),r([o()],i.prototype,"useStandardizedQuery",void 0),r([o()],i.prototype,"useVectorBasemaps",void 0),r([o()],i.prototype,"vectorBasemapGalleryGroupQuery",void 0),i=c=r([O("esri.portal.Portal")],i);const qt=i,L=new FinalizationRegistry(t=>{t.remove()});function mt(t){const e=w;return()=>{const s=t.deref();s&&e.findCredential(s.restUrl)&&s.signIn().catch(()=>{})}}export{qt as C,v as c,pt as m,z as p};
