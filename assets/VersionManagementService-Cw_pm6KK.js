const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./createVersion-D38_H0th.js","./cast-BA_-jlhc.js","./Accessor-BHnuXKD2.js","./index-tefRSezt.js","./index-Cx51aysm.css","./JSONSupport-CGdeqxpk.js","./utils-Cy8wFNQo.js","./CreateVersionParameters--fFEkraT.js","./deleteVersion-BlEUDBAg.js","./serverVersionUtils-CT0ARoHu.js","./DeleteVersionParameters-D7S25e-O.js","./getVersion-Dn__eG5D.js","./getVersionInfos-Bsta8Cua.js","./GetVersionInfosParameters-B8v3Ho4I.js","./reconcile-DULlTvyp.js","./ReconcileParameters-BwY2p2fS.js","./post-B3cOWUub.js","./PostParameters-CKdC36uj.js","./alterVersion-06InhrBi.js","./AlterVersionParameters-j-ogSY9h.js","./startReading-BcM7m9FS.js","./stopReading-K3dLeYGH.js","./startEditing-Cua0v8mJ.js","./deleteForwardEdits-DgZWo5fT.js","./DeleteForwardEditsParameters-DjwxI12L.js","./stopEditing-1MySszMs.js"])))=>i.map(i=>d[i]);
import{r as o,m as l,a as L,s as $,c as Q,D as ne,O as oe,V as D,G as H}from"./Accessor-BHnuXKD2.js";import{o as le,V as ue,P as E,a7 as de,s as ce,a4 as pe,x as me}from"./cast-BA_-jlhc.js";import{n as he}from"./Identifiable-BrT7zvUW.js";import{S as F}from"./JSONSupport-CGdeqxpk.js";import{m as te}from"./Portal-CTRRujjZ.js";import{o as I,r as fe}from"./writer-B2bQV2uU.js";import{g as re}from"./Point-XGrwlf63.js";import{m as z,b as ye,f as ge,j as ve,y as be,I as _e}from"./applyEditsUtils-B-dfj_XI.js";import{checkEditingCapabilities as Ie,normalizeEdits as Ve,normalizeGeometries as we}from"./editingSupport-Dr0ErgB3.js";import{c as Ee,i as Se,a as Te,t as b,s as h,b as O,l as Re,n as B,u as w}from"./EditBusLayer-Cx9SJosU.js";import{Z as De}from"./featureLayerUtils-BzWCGee1.js";import{x as Oe}from"./layerUtils-dJgsXxkC.js";import{c as Z,n as y,r as K}from"./serviceCapabilitiesUtils-BuKg0yWx.js";import Me from"./PortalItem-CXk7DqVv.js";import{f as Ue}from"./portalItemUtils-rm7sAgcm.js";import{f as U,i as $e,s as ke}from"./utils-Cy8wFNQo.js";import{i as Pe}from"./editsZScale-BKYnJc2O.js";import{_ as m}from"./index-tefRSezt.js";import{a as X}from"./catalogUtils-CK4eMvD1.js";const Ae=new le({"{acd53634-cbc7-44d5-bde9-692fa8d45850}":"autocomplete-freehand-polygons","{6f5fc612-d1ef-4d32-a2e1-18a1cb22331c}":"autocomplete-polygons","{09c6f589-a3ce-48ab-81bc-46965c58f264}":"circle","{bccf295a-9c64-4adc-903e-62d827c10ef7}":"create-points-along-line","{756cadf6-91e6-04b1-2938-e172a97af51c}":"create-structures","{ddbe4c0c-063f-8b60-b2da-b349a1e42e84}":"difference-polygon","{a5f4db5f-4a6b-29bd-1f32-9d81bf262c76}":"elevation-point-from-contour","{285ec4bb-60a8-7184-2088-5bee2149f2a4}":"elevation-point-from-dem","{28c04532-3daf-4d3d-b7be-a589c9c9a03e}":"ellipse","{0a7c16b9-1cfd-467f-8ece-6ba376192431}":"freehand","{af2dbf8f-280e-44db-8860-e399d0b30cf1}":"line","{bc485127-2ea2-4c8b-85ef-e8237959eb64}":"multipoint","{d304243a-5c3a-4ccc-b98b-93684b15fd83}":"parcel-seed","{2a8b3331-5238-4025-972e-452a69535b06}":"point","{d376f8e5-69e0-4273-9478-724e9e0d81ac}":"point-and-rotation","{93ce7077-f09e-455e-ade7-b7413cddc393}":"point-at-end-of-line","{8f79967b-66a0-4a1c-b884-f44bc7e26921}":"polygon","{a947ba80-1c29-4bcd-8672-1963b7b9dde0}":"radial-line","{6f0ed2cc-c099-4895-bd7e-beec2f78adbf}":"rectangle","{a281e635-0f22-47d4-a438-e4d29b920e22}":"regular-polygon","{5664cae4-c7de-432a-9933-9586bc15ed39}":"regular-polyline","{c5c42e29-44da-4a1c-8688-e02c07535bc3}":"right-angle-line","{ee16991b-6303-4a8a-9143-1914b2010c1a}":"right-angle-polygon","{7d3e17cf-30dd-4593-9bd8-0b2b8770f52a}":"split","{e00209dd-05c5-4424-be62-51581f9f811d}":"stream-line","{6c6970a7-5ca9-448c-9c7d-0d716cd2ac64}":"stream-polygon","{e22f7d98-007d-427c-8282-13704f7c84c3}":"trace","{6cf59352-8e14-402c-8f4c-ed72647f5e42}":"two-point-line"});let c=class extends F{constructor(t){super(t),this.type="feature",this.templateId=null,this.defaultTool=null,this.description=null,this.globalId="",this.hash="",this.layerIds=[],this.name="",this.subtypeCode=null,this.status=null,this.userIdentity=null,this.tags=[],this.visible=!0}readThumbnail(t){return t==null||t===""?null:{contentType:"png",imageData:t,height:64,width:64}}readDefaultTool(t){return t==null?null:Ae.fromJSON(t.toLowerCase())}readLayerIds(t,r){return r.layerIds!=null?r.layerIds.split(",").map(s=>parseInt(s.trim(),10)):r.layerId!=null?[r.layerId]:[]}readTags(t,r){const s=r.tag;return s==null?[]:s.split(";").map(i=>i.trim())}};o([l()],c.prototype,"type",void 0),o([l({json:{read:!1,write:!1}})],c.prototype,"featureService",void 0),o([l()],c.prototype,"thumbnail",void 0),o([I("thumbnail")],c.prototype,"readThumbnail",null),o([l()],c.prototype,"templateId",void 0),o([l()],c.prototype,"defaultTool",void 0),o([I("defaultTool")],c.prototype,"readDefaultTool",null),o([l()],c.prototype,"description",void 0),o([l()],c.prototype,"globalId",void 0),o([l()],c.prototype,"hash",void 0),o([l()],c.prototype,"layerIds",void 0),o([I("layerIds",["layerIds","layerId"])],c.prototype,"readLayerIds",null),o([l()],c.prototype,"name",void 0),o([l({json:{name:"subtype"}})],c.prototype,"subtypeCode",void 0),o([l()],c.prototype,"status",void 0),o([l()],c.prototype,"userIdentity",void 0),o([l()],c.prototype,"tags",void 0),o([I("tags",["tag"])],c.prototype,"readTags",null),o([l()],c.prototype,"visible",void 0),c=o([L("esri.editing.sharedTemplates.SharedTemplateMetadata")],c);const Le=c;async function Fe({serviceUrl:e,query:t,requestOptions:r={}}){if(t.layers==null&&t.templateIds==null)throw new $("query-shared-templates:invalid-parameters","Must supply a value for either the 'layers' or the 'templateIds' parameters");const s=ue(e,"sharedTemplates","query"),i={f:"json",...r.query,...t};i.layers&&(i.layers=A(i.layers)),i.templateIds&&(i.templateIds=A(i.templateIds)),i.tags&&(i.tags=A(i.tags));const n={...r,responseType:"json",query:i};return(await E(s,n)).data.templates}function A(e){return Array.isArray(e)?e.join(","):""}function M(e,t){const r=t.id;return{id:r,name:t.name,url:`${e}/${r}`,type:t.type||"Table"}}function Ce(e){return{data:Ne(e),sync:Je(e),operations:xe(e.capabilities,e),query:qe(e),editing:je(e)}}function Ne(e){return{isDataVersioned:y(e,"hasVersionedData",!1),isDataBranchVersioned:y(e,"hasBranchVersionedData",!1)}}function xe(e,t){const r=e?e.toLowerCase().split(",").map(d=>d.trim()):[],s=r.includes("query"),i=r.includes("editing")&&!t.datesInUnknownTimezone;let n=i&&r.includes("create"),a=i&&r.includes("delete"),u=i&&r.includes("update");return i&&!(n||a||u)&&(n=a=u=!0),{supportsAdd:n,supportsDelete:a,supportsEditing:i,supportsChangeTracking:r.includes("changetracking"),supportsQuery:s,supportsQueryDataElements:y(t,"supportsQueryDataElements",!1),supportsQueryDomains:y(t,"supportsQueryDomains",!1),supportsQueryContingentValues:y(t,"supportsQueryContingentValues",!1),supportsSync:r.includes("sync"),supportsUpdate:u}}function qe(e){return{maxRecordCountFactor:K(e,"maxRecordCountFactor",void 0),maxRecordCount:K(e,"maxRecordCount",void 0)}}function je(e){const t=e==null?void 0:e.advancedEditingCapabilities;return{supportsAsyncApplyEdits:y(t,"supportsAsyncApplyEdits",!1),supportsGlobalId:y(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:y(t,"supportsReturnServiceEditsInSourceSR",!1),supportsSharedTemplates:y(e,"hasSharedTemplates",!1),supportsSplit:y(t,"supportsSplit",!1)}}function Je(e){const t=e==null?void 0:e.syncCapabilities,r=t==null?void 0:t.supportedSyncDataOptions;return{supportsAsync:y(t,"supportsAsync",!1),supportedSyncDataOptions:{annotations:!(1&~r),dimensions:!(2&~r),contingentValues:!(4&~r),attributeRules:!(8&~r),utilityNetworkSystem:!(16&~r),annotationFullModel:!(32&~r),include3DObjects:!(64&~r),utilityNetworkMissingLayers:!(128&~r),preserveTrueCurves:!(256&~r)}}}let f=class extends F.JSONSupportMixin(he.IdentifiableMixin(te)){constructor(e){super(e),this.url=null,this.sourceJSON=null,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1,this.userTypeExtensions=[],this.layerInfos=null,this.tableInfos=null,this.capabilities=null}read(e,t){this.sourceJSON=e,super.read(e,t)}get utilityNetworkUrl(){if(this.sourceJSON){for(const e of this.sourceJSON.layers)if(e.type==="Utility Network Layer")return`${this.url}/${e.id}`}return null}get versionManagementServiceUrl(){var e;return(e=this.sourceJSON)!=null&&e.hasBranchVersionedData&&!de(this.url)?this.url.replace(/\/FeatureServer/i,"/VersionManagementServer"):null}readLayerInfos(e,t){return(t.layers||[]).map(r=>{const{type:s,geometryType:i}=r;return{...M(this.url,r),type:s||"Feature Layer",geometryType:i}})}readTableInfos(e,t){return(t.tables||[]).map(r=>M(this.url,r))}readCapabilities(e,t){return Ce(t)}get effectiveCapabilities(){const e=this.capabilities;if(!e)return null;const t=Q(e),{operations:r}=t;return this.userHasUpdateItemPrivileges?(r.supportsAdd=r.supportsDelete=r.supportsEditing=r.supportsQuery=r.supportsUpdate=!0,t):(this.userHasFullEditingPrivileges&&r.supportsEditing&&(r.supportsAdd=r.supportsDelete=r.supportsUpdate=!0),t)}load(e){return this.addResolvingPromise(this._fetchService(this.url,e).then(()=>this._setUserPrivileges(e))),Promise.resolve(this)}async fetchAllLayersAndTables(e){return await this.load(e),this._fetchLayersAndTablesPromise||(this._fetchLayersAndTablesPromise=this._fetchLayersAndTables(this.url)),ne(e),this._fetchLayersAndTablesPromise}async applyEdits(e,t){let r=null;try{const{results:s,edits:i,editedFeatures:n}=await this._internalApplyEdits(e,t),a=d=>d.filter(p=>!p.error).map(Q);let u=0;return s.map(d=>{r=Ee(this.url,d.id,t==null?void 0:t.gdbVersion,!0);const p={edits:i[u],addedFeatures:a(d.addFeatureResults),updatedFeatures:a(d.updateFeatureResults),deletedFeatures:a(d.deleteFeatureResults),addedAttachments:a(d.addAttachmentResults),updatedAttachments:a(d.updateAttachmentResults),deletedAttachments:a(d.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:d.editMoment?new Date(d.editMoment):null};u+=1,n.length>0&&(p.editedFeatures=n),r.resolve(p),r=null}),s}catch(s){throw r&&r.reject(s),s}}async querySharedTemplates(e){const t={...e==null?void 0:e.query};return t.layers==null&&t.templateIds==null&&(t.layers=this.layerInfos.map(r=>r.id)),(await Fe({serviceUrl:this.url,query:t,requestOptions:e==null?void 0:e.requestOptions})).map(r=>{const s=Le.fromJSON(r);return s.featureService=this,s})}async _setUserPrivileges(e){if(oe.userPrivilegesApplied)try{const{features:{fullEdit:t},content:{updateItem:r}}=await this._fetchUserPrivileges(this.sourceJSON.serviceItemId,e);this._set("userHasFullEditingPrivileges",t),this._set("userHasUpdateItemPrivileges",r)}catch(t){D(t)}}async _fetchUserPrivileges(e,t){var d;if(!e)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};let n,a,u;try{n=await Oe(this.url,t)}catch(p){D(p)}try{const p=t!=null?t.signal:null;a=await((d=ce)==null?void 0:d.getCredential(`${n}/sharing`,{prompt:!1,signal:p}))}catch(p){D(p)}if(!a)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(u=new Me({id:e,portal:{url:n}}),await u.load(t),u.portal.user)return Ue(u)}catch(p){D(p)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _internalApplyEdits(e,t){await De(this.url);const r=(t==null?void 0:t.globalIdUsed)??!1,s=re.fromJSON(this.sourceJSON.spatialReference),{edits:i,options:n}=await this._processApplyEditsParams(e,t),a=await Promise.all(i.map(async g=>{var W,G;const se=((W=g.addFeatures)==null?void 0:W.map(P=>z({spatialReference:s},P,null)))??[],C=(await Promise.all(se)).filter(H),N=C.length>0?C:null,ie=((G=g.updateFeatures)==null?void 0:G.map(P=>z({spatialReference:s},P,null)))??[],x=(await Promise.all(ie)).filter(H),q=x.length>0?x:null,j=ye(g.identifierFields,g.deleteFeatures,r),ae=j.length>0?j:null;Pe(N,q,s);const V=await ge(g.identifierFields,g);let J=null;return V&&(J={adds:V.adds.length>0?V.adds:void 0,updates:V.updates.length>0?V.updates:void 0,deletes:V.deletes.length>0?V.deletes:void 0}),{id:g.id,adds:N,updates:q,deletes:ae,attachments:J}})),u={gdbVersion:n==null?void 0:n.gdbVersion,rollbackOnFailure:!0,useGlobalIds:r,returnEditMoment:!0,honorSequenceOfEdits:n==null?void 0:n.honorSequenceOfEdits,usePreviousEditMoment:n==null?void 0:n.usePreviousEditMoment,returnServiceEditsInSourceSR:!1,returnServiceEditsOption:"originalAndCurrentFeatures",async:!1};await Se(this.url,t==null?void 0:t.gdbVersion,!0);const d=Te(this.url,(t==null?void 0:t.gdbVersion)||null);u.edits=JSON.stringify(a);const p=U(this.url),_=$e(p.query,{query:ke({...u,f:"json"}),method:"post"});let k;d&&(_.authMode="immediate",_.query.sessionId=b);try{k=await E(this.url+"/applyEdits",_)}catch(g){if(!ve(g))throw g;_.authMode="immediate",k=await E(this.url+"/applyEdits",_)}return{...We(k),edits:i}}async _processApplyEditsParams(e,t){const r={...t,usingFeatureServiceEndpoint:!0};return{edits:await Promise.all(e.map(async s=>{const i=this.effectiveCapabilities,n=s&&(s.addFeatures||s.updateFeatures||s.deleteFeatures),a=s&&(s.addAttachments||s.updateAttachments||s.deleteAttachments);if(Ie(s,i,r,!!n,!!a,"feature-service"),!i.data.isDataVersioned&&(r==null?void 0:r.gdbVersion))throw new $("feature-service:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isDataVersioned'");const u=Ve(s,i,"feature-service");return{...await we(u),id:s.id,identifierFields:s.identifierFields}})),options:r}}async _fetchService(e,t){if(this.sourceJSON)return void this.read(this.sourceJSON,{url:U(e)});const r=await E(e,{responseType:"json",query:{f:"json"},...t});this.read(r.data,{url:U(e)})}async _fetchLayersAndTables(e){const t=`${e}/layers`,r=await E(t,{responseType:"json",query:{f:"json"}});return{layers:r.data.layers.map(s=>{const{type:i,geometryType:n}=s,a=M(this.url,s),u=Z(s,a.url);return{...a,type:i||"Feature Layer",geometryType:n,capabilities:u}}),tables:r.data.tables.map(s=>{const i=M(this.url,s),n=Z(s,i.url);return{...i,capabilities:n}})}}};function We(e){const t=e.data,r=[];return{results:t.map(s=>{const i={addResults:s.addResults??[],updateResults:s.updateResults??[],deleteResults:s.deleteResults??[],attachments:s.attachments,editMoment:s.editMoment},n=be(i),a=s.editedFeatures,u=a!=null&&a.spatialReference?new re({wkid:a==null?void 0:a.spatialReference.wkid,wkt:a==null?void 0:a.spatialReference.wkt,latestWkid:a==null?void 0:a.spatialReference.latestWkid,latestVcsWkid:a==null?void 0:a.spatialReference.latestVcsWkid,vcsWkid:a==null?void 0:a.spatialReference.vcsWkid}):null,d=a?_e(a,u):null;return d&&r.push({layerId:s.id,editedFeatures:d}),{id:s.id,editedFeatures:d,...n}}),editedFeatures:r}}o([l()],f.prototype,"url",void 0),o([l()],f.prototype,"sourceJSON",void 0),o([l()],f.prototype,"userHasFullEditingPrivileges",void 0),o([l()],f.prototype,"userHasUpdateItemPrivileges",void 0),o([l({readOnly:!0})],f.prototype,"utilityNetworkUrl",null),o([l({readOnly:!0})],f.prototype,"versionManagementServiceUrl",null),o([l()],f.prototype,"userTypeExtensions",void 0),o([l({json:{read:{source:["layers"]}}})],f.prototype,"layerInfos",void 0),o([I("layerInfos",["layers"])],f.prototype,"readLayerInfos",null),o([l({json:{read:{source:["tables"]}}})],f.prototype,"tableInfos",void 0),o([I("tableInfos",["tables"])],f.prototype,"readTableInfos",null),o([l({readOnly:!0,json:{read:{source:["hasVersionedData","hasSharedTemplates","hasBranchVersionedData","capabilities","supportsQueryDataElements","supportsQueryDomains","supportsQueryContingentValues","maxRecordCountFactor","maxRecordCount","advancedEditingCapabilities","supportsApplyEditsWithGlobalIds","syncCapabilities","datesInUnknownTimezone"]}}})],f.prototype,"capabilities",void 0),o([I("capabilities",["hasVersionedData","hasSharedTemplates","hasBranchVersionedData","capabilities","supportsQueryDataElements","supportsQueryDomains","supportsQueryContingentValues","maxRecordCountFactor","maxRecordCount","advancedEditingCapabilities","supportsApplyEditsWithGlobalIds","syncCapabilities","datesInUnknownTimezone"])],f.prototype,"readCapabilities",null),o([l({readOnly:!0})],f.prototype,"effectiveCapabilities",null),f=o([L("esri.rest.featureService.FeatureService")],f);const mt=f;let Ge=class{constructor(t){this.moments=[],this.forwardMoments=[],this.moments.push(t)}push(t){return this.forwardMoments.length,this.moments.push(t)}pop(){if(!(this.forwardMoments.length>0))return this.moments.pop()}undo(){if(!this.canUndo())return;const t=this.moments.pop();return this.forwardMoments.push(t),t}peek(){return this.moments.at(-1)}canUndo(){return this.moments.length>1}canRedo(){return this.hasForwardEdits()}redo(){if(!this.canRedo())return;const t=this.forwardMoments.pop();return this.moments.push(t),t}size(){return this.moments.length+this.forwardMoments.length}hasForwardEdits(){return this.forwardMoments.length>0}clearForwardEdits(){this.forwardMoments=[]}},S=class{constructor(t){this.versionableItem=t,this.type="feature-layer"}get gdbVersion(){return this.versionableItem.gdbVersion}set gdbVersion(t){this.versionableItem.gdbVersion=t}get historicMoment(){return this.versionableItem.historicMoment}set historicMoment(t){this.versionableItem.historicMoment=t}get featureServiceUrl(){const t=/^(.*\/FeatureServer)\/\d+$/;return this.versionableItem.url.replace(t,"$1")}};o([l({readOnly:!0})],S.prototype,"type",void 0),o([l()],S.prototype,"gdbVersion",null),o([l({type:Date})],S.prototype,"historicMoment",null),o([l({readOnly:!0})],S.prototype,"featureServiceUrl",null);let T=class{constructor(t){this.versionableItem=t,this.type="network"}get gdbVersion(){return this.versionableItem.gdbVersion}set gdbVersion(t){this.versionableItem.gdbVersion=t}get historicMoment(){return this.versionableItem.historicMoment}set historicMoment(t){this.versionableItem.historicMoment=t}get featureServiceUrl(){return this.versionableItem.featureServiceUrl}};o([l({readOnly:!0})],T.prototype,"type",void 0),o([l()],T.prototype,"gdbVersion",null),o([l({type:Date})],T.prototype,"historicMoment",null),o([l({readOnly:!0})],T.prototype,"featureServiceUrl",null);class R{constructor(t){this.versionableItem=t,this.type="subtype-group-layer"}get gdbVersion(){return this.versionableItem.gdbVersion}set gdbVersion(t){this.versionableItem.gdbVersion=t}get historicMoment(){return this.versionableItem.historicMoment}set historicMoment(t){this.versionableItem.historicMoment=t}get featureServiceUrl(){const t=/^(.*\/FeatureServer)\/\d+$/;return this.versionableItem.url.replace(t,"$1")}}o([l({readOnly:!0})],R.prototype,"type",void 0),o([l()],R.prototype,"gdbVersion",null),o([l({type:Date})],R.prototype,"historicMoment",null),o([l({readOnly:!0})],R.prototype,"featureServiceUrl",null);function Y(e){return"networkServiceUrl"in e?new T(e):e.type!=="feature"||X(e)?e.type!=="subtype-group"||X(e)?null:new R(e):new S(e)}function ee(e){const t=[];for(const r of e)if(r.type==="group"){const s=r,i=s.allTables.concat(s.allLayers);for(const n of i)if(n.type==="feature"||n.type==="subtype-group"){const a=Y(n);a&&t.push(a)}}else{const s=Y(r);s&&t.push(s)}return t}let v=class extends F.JSONSupportMixin(te){constructor(e){super(e),this.url=null,this.sourceJSON=null,this.name=null,this.defaultVersionIdentifier=null,this.capabilities=null,this._isDefault=t=>!t||t===this.defaultVersionIdentifier.name,this._dateEquals=(t,r)=>!t&&!r||!(!t||!r)&&t.toISOString()===r.toISOString(),this._applyEditsHandler=t=>{const{serviceUrl:r,gdbVersion:s,result:i}=t;r===this._featureServiceUrl&&i.then(n=>{const a=n.historicMoment;a&&this._addMomentToVersionItem(s,a)})}}initialize(){this.url=pe(this.url),this._featureServiceUrl=this.url.replace(/\/VersionManagementServer/i,"/FeatureServer"),h.has(this.url)||h.set(this.url,new Map);const e=(O.get(this.url)??0)+1;O.set(this.url,e),this.when().then(()=>this.addHandles(Re(this._applyEditsHandler)),()=>{})}destroy(){const e=(O.get(this.url)??1)-1;O.set(this.url,e),e===0&&h.delete(this.url),B.delete(this._featureServiceUrl)}read(e,t){this.sourceJSON=e,super.read(e,t)}readDefaultVersionIdentifier(e,t){return{name:t.defaultVersionName,guid:t.defaultVersionGuid}}writeDefaultVersionIdentifier(e,t){t.defaultVersionName=e.name,t.defaultVersionGuid=e.guid}load(e){return this.addResolvingPromise(this._fetchService(this.url,e)),Promise.resolve(this)}async createVersion(e){const[{createVersion:t},{default:r}]=await Promise.all([m(()=>import("./createVersion-D38_H0th.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),m(()=>import("./CreateVersionParameters--fFEkraT.js"),__vite__mapDeps([7,2,5]),import.meta.url)]),s=r.from(e);return t(this.url,s)}async deleteVersion(e){var n;const[{deleteVersion:t},{default:r}]=await Promise.all([m(()=>import("./deleteVersion-BlEUDBAg.js"),__vite__mapDeps([8,1,2,3,4,5,6,9]),import.meta.url),m(()=>import("./DeleteVersionParameters-D7S25e-O.js"),__vite__mapDeps([10,2,5]),import.meta.url)]);let s;e.guid&&((n=h.get(this.url))!=null&&n.has(e.guid))&&(s=b??void 0);const i=new r({versionName:e.name,sessionId:s});return t(this.url,i)}async getVersionInfoExtended(e){const{getVersion:t}=await m(()=>import("./getVersion-Dn__eG5D.js"),__vite__mapDeps([11,1,2,3,4,5,6]),import.meta.url);return t(this.url,e.guid)}async getVersionInfos(e={}){const[{getVersionInfos:t},{default:r}]=await Promise.all([m(()=>import("./getVersionInfos-Bsta8Cua.js"),__vite__mapDeps([12,1,2,3,4,5,6]),import.meta.url),m(()=>import("./GetVersionInfosParameters-B8v3Ho4I.js"),__vite__mapDeps([13,2,5]),import.meta.url)]),s=r.from(e);return t(this.url,s)}async reconcile(e,t={}){const[{reconcile:r},{default:s}]=await Promise.all([m(()=>import("./reconcile-DULlTvyp.js"),__vite__mapDeps([14,1,2,3,4,5,6,9]),import.meta.url),m(()=>import("./ReconcileParameters-BwY2p2fS.js"),__vite__mapDeps([15,2,1,3,4,5]),import.meta.url)]),i=s.from(t);return i.sessionId=b,r(this.url,e.guid,i)}async post(e){const[{post:t},{default:r}]=await Promise.all([m(()=>import("./post-B3cOWUub.js"),__vite__mapDeps([16,1,2,3,4,5,6,9]),import.meta.url),m(()=>import("./PostParameters-CKdC36uj.js"),__vite__mapDeps([17,2,5]),import.meta.url)]),s=r.from({sessionId:b});return t(this.url,e.guid,s)}async alterVersion(e,t){const[{alterVersion:r},{default:s}]=await Promise.all([m(()=>import("./alterVersion-06InhrBi.js"),__vite__mapDeps([18,1,2,3,4,5,6,9]),import.meta.url),m(()=>import("./AlterVersionParameters-j-ogSY9h.js"),__vite__mapDeps([19,2,5]),import.meta.url)]),i=s.from(t);return r(this.url,e.guid,i)}async startReading(e){return(await this.startReadingWithResult(e)).success}async startReadingWithResult(e){const{startReading:t}=await m(()=>import("./startReading-BcM7m9FS.js"),__vite__mapDeps([20,1,2,3,4,5,6]),import.meta.url),r=await t(this.url,e.guid,b);if(r.success){const s=await this.getVersionInfoExtended(e),i=new Date(s.modifiedDate),n={name:s.versionIdentifier.name,moment:i,lockType:"read"};this._addOrUpdateItem(e.guid,n),w(this._featureServiceUrl,null,e.name,i)}return r}async stopReading(e){return(await this.stopReadingWithResult(e)).success}async stopReadingWithResult(e){var s;const{stopReading:t}=await m(()=>import("./stopReading-K3dLeYGH.js"),__vite__mapDeps([21,1,2,3,4,5,6]),import.meta.url),r=await t(this.url,e.guid,b);return r.success&&((s=h.get(this.url))==null||s.delete(e.guid),w(this._featureServiceUrl,null,e.name,null)),r}async startEditing(e){return(await this.startEditingWithResult(e)).success}async startEditingWithResult(e){const{startEditing:t}=await m(()=>import("./startEditing-Cua0v8mJ.js"),__vite__mapDeps([22,1,2,3,4,5,6]),import.meta.url),r=await t(this.url,e.guid,b);if(r.success){const s=await this.getVersionInfoExtended(e),i=new Date(s.modifiedDate),n=new Ge(i),a={name:e.name,moment:i,lockType:"edit",stack:n};this._addOrUpdateItem(e.guid,a),w(this._featureServiceUrl,null,e.name,i)}return r}async stopEditing(e,t){return(await this.stopEditingWithResult(e,t)).success}async stopEditingWithResult(e,t){var i,n;if(t){const a=(i=h.get(this.url))==null?void 0:i.get(e.guid);if((n=a==null?void 0:a.stack)!=null&&n.canRedo()){const[{deleteForwardEdits:u},{default:d}]=await Promise.all([m(()=>import("./deleteForwardEdits-DgZWo5fT.js"),__vite__mapDeps([23,1,2,3,4,5,6]),import.meta.url),m(()=>import("./DeleteForwardEditsParameters-DjwxI12L.js"),__vite__mapDeps([24,2,5]),import.meta.url)]),p=await u(this.url,e.guid,new d({sessionId:b,moment:a.moment}));if(!p.success)return p}}const{stopEditing:r}=await m(()=>import("./stopEditing-1MySszMs.js"),__vite__mapDeps([25,1,2,3,4,5,6]),import.meta.url),s=await r(this.url,e.guid,b,t);if(s.success){const a=await this.getVersionInfoExtended(e),u=new Date(a.modifiedDate);this._addOrUpdateItem(e.guid,{name:e.name,moment:u,lockType:"read",editMomentStack:void 0}),w(this._featureServiceUrl,null,e.name,u)}return s}getLockType(e){var r,s;return((s=(r=h.get(this.url))==null?void 0:r.get(e.guid))==null?void 0:s.lockType)??"none"}async changeVersion(e,t,r){if(r&&"name"in r&&!await this.getVersionInfoExtended(r))throw new $("version-management-service:invalid-version","version does not exist");if("networkServiceUrl"in e){if(this._featureServiceUrl.toLowerCase()===e.featureServiceUrl.toLowerCase())return this._changeVersionInternal(e,t,r)}else{let s;"layers"in e?(s=e.allTables.concat(e.allLayers),e.utilityNetworks&&e.utilityNetworks.forEach(i=>{this._featureServiceUrl.toLowerCase()===i.featureServiceUrl.toLowerCase()&&this._changeVersionInternal(i,t,r)})):s=e;for(const i of s)if(i.type==="feature"||i.type==="subtype-group"){const n=/^(.*\/FeatureServer)\/\d+$/,a=i.url.replace(n,"$1");if(this._featureServiceUrl.toLowerCase()===a.toLowerCase()&&!this._changeVersionInternal(i,t,r))return!1}else if(i.type==="group"){const n=i.allTables.concat(i.allLayers);for(const a of n)if(a.type==="feature"||a.type==="subtype-group"){const u=/^(.*\/FeatureServer)\/\d+$/,d=a.url.replace(u,"$1");if(this._featureServiceUrl.toLowerCase()===d.toLowerCase()&&!this._changeVersionInternal(a,t,r))return!1}}}return!0}async changeVersionWithResult(e,t,r){let s;if("layers"in e){const n=ee(e.allTables.concat(e.allLayers).filter(a=>a.type!=="group").toArray());e.utilityNetworks&&e.utilityNetworks.forEach(a=>{const u=ee([a]);n.push(...u)}),s=n}else s=e;if(r&&"name"in r&&!await this.getVersionInfoExtended(r)){const n=new Map;for(const a of s)n.set(a,{success:!1});return n}if(t&&"name"in t&&this.getLockType(t)!=="none"){const n=new Map;for(const a of s)n.set(a,{success:!1});return n}const i=new Map;for(const n of s)if(n)if(n.featureServiceUrl.toLowerCase()===this._featureServiceUrl.toLowerCase()){const a=this._changeVersionInternalWithResult(n,t,r);i.set(n,a)}else i.set(n,{success:!1});return i}async getVersionIdentifierFromName(e){var t;try{return((t=(await this.getVersionInfos({includeHidden:!0})).find(s=>s.versionIdentifier.name.toUpperCase()===e.toUpperCase()))==null?void 0:t.versionIdentifier)||null}catch{return null}}async getVersionIdentifierFromGuid(e){const{getVersion:t}=await m(()=>import("./getVersion-Dn__eG5D.js"),__vite__mapDeps([11,1,2,3,4,5,6]),import.meta.url);try{return(await t(this.url,e)).versionIdentifier}catch{return null}}canUndo(e){var r,s;const t=(r=h.get(this.url))==null?void 0:r.get(e.guid);return!!((s=t==null?void 0:t.stack)!=null&&s.canUndo())}canRedo(e){var r,s;const t=(r=h.get(this.url))==null?void 0:r.get(e.guid);return!!((s=t==null?void 0:t.stack)!=null&&s.canRedo())}undo(e){var s,i,n;const t=(s=h.get(this.url))==null?void 0:s.get(e.guid),r=((i=t==null?void 0:t.stack)==null?void 0:i.undo())||void 0;if(t&&r){const a=t.stack.peek();w(this._featureServiceUrl,null,e.name,a),(n=h.get(this.url))==null||n.set(e.guid,{...t,moment:a})}}redo(e){var s,i,n;const t=(s=h.get(this.url))==null?void 0:s.get(e.guid),r=((i=t==null?void 0:t.stack)==null?void 0:i.redo())||void 0;t&&r&&(w(this._featureServiceUrl,null,e.name,r),(n=h.get(this.url))==null||n.set(e.guid,{...t,moment:r}))}_setUpData(e,t){let r=null,s=null,i=null,n=null;const a=u=>{var p,_;const d=(_=(p=h)==null?void 0:p.get(this.url))==null?void 0:_.get(u.guid);i=u.name,n=(d==null?void 0:d.moment)??null};if(e&&"name"in e){if(this.getLockType(e)!=="none")throw new $("version-management-service:version-locked","version is locked");r=e.name,s=null,t&&"name"in t?a(t):(i=this.defaultVersionIdentifier.name,n=t)}else r=this.defaultVersionIdentifier.name,s=e,t&&"name"in t?a(t):(i=this.defaultVersionIdentifier.name,n=t);return{fromVersionName:r,fromMoment:s,toVersionName:i,toMoment:n}}_changeVersionInternal(e,t,r){try{const{fromVersionName:s,fromMoment:i,toVersionName:n,toMoment:a}=this._setUpData(t,r);(this._isDefault(s)&&this._isDefault(e.gdbVersion)&&this._dateEquals(e.historicMoment,i)||s===e.gdbVersion&&this._dateEquals(e.historicMoment,i))&&(e.gdbVersion=n,e.historicMoment=a)}catch{return!1}return!0}_changeVersionInternalWithResult(e,t,r){try{const{fromVersionName:s,fromMoment:i,toVersionName:n,toMoment:a}=this._setUpData(t,r);return this._isDefault(s)&&this._isDefault(e.gdbVersion)&&this._dateEquals(e.historicMoment,i)||s===e.gdbVersion&&this._dateEquals(e.historicMoment,i)?(e.gdbVersion=n,e.historicMoment=a,{success:!0}):{success:!1}}catch{return{success:!1}}}_addMomentToVersionItem(e,t){const r=h.get(this.url);if(r)for(const[s,i]of r)i.name===e&&this._addToStack(s,t)}_addToStack(e,t){const r=h.get(this.url),s=r==null?void 0:r.get(e);return!!(s!=null&&s.stack)&&(Qe(s.stack.peek(),t)&&s.stack.push(t),r.set(e,{...s,moment:t}),!0)}_addOrUpdateItem(e,t){const r=h.get(this.url),s=r==null?void 0:r.get(e);return s?(r.set(e,{...s,...t}),!0):!(!t.name||!t.lockType)&&(r==null||r.set(e,{...t,lockType:t.lockType}),!0)}async _fetchService(e,t){if(this.sourceJSON){this.read(this.sourceJSON,{origin:"service",url:U(e)});const s=new me(this.url).host;return void B.set(s,this.defaultVersionIdentifier.name)}const r=await E(e,{responseType:"json",query:{f:"json"},...t});this.read(r.data)}};function Qe(e,t){return e?e.getTime()<t.getTime():!0}o([l()],v.prototype,"url",void 0),o([l()],v.prototype,"sourceJSON",void 0),o([l({type:String,json:{write:!0}})],v.prototype,"name",void 0),o([l({json:{write:{target:{defaultVersionName:{type:String},defaultVersionGuid:{type:String}}},read:{source:["defaultVersionName","defaultVersionGuid"]}}})],v.prototype,"defaultVersionIdentifier",void 0),o([I("defaultVersionIdentifier",["defaultVersionName","defaultVersionGuid"])],v.prototype,"readDefaultVersionIdentifier",null),o([fe("defaultVersionIdentifier",{defaultVersionName:{type:String},defaultVersionGuid:{type:String}})],v.prototype,"writeDefaultVersionIdentifier",null),o([l({json:{write:!0}})],v.prototype,"capabilities",void 0),v=o([L("esri.versionManagement.VersionManagementService")],v);const gt=v;export{gt as I,mt as X,Ae as c,Le as l,ee as p};
