import{s as v}from"./Accessor-BHnuXKD2.js";import{s as M}from"./associatedFeatureServiceUtils-Bfw5GA1N.js";import{i as T}from"./fetchService-zLGBmq3X.js";import{l as f,u as d,a as C,s as G,i as P,o as $,e as b}from"./loadUtils-BiECFALG.js";import{g as l}from"./layerUtils-dJgsXxkC.js";import{a as F}from"./lazyLayerLoader-cbt8Aa3v.js";import h from"./PortalItem-CXk7DqVv.js";import{s as y}from"./portalItemUtils-rm7sAgcm.js";import"./cast-BA_-jlhc.js";import"./index-tefRSezt.js";import"./JSONSupport-CGdeqxpk.js";import"./Portal-CTRRujjZ.js";import"./Promise-CmQqe-ke.js";import"./writer-B2bQV2uU.js";import"./Extent-CBBGeHb-.js";import"./Point-XGrwlf63.js";import"./requestPresets-v9_cUP4i.js";import"./projection-B2I9Bzj_.js";import"./SimpleObservable-7oieNGD8.js";import"./vec3f64-BLpZdpfb.js";import"./Polyline-BmuD2-ZN.js";import"./mathUtils-DV9iOXpW.js";import"./projectBuffer-DOU0xvVi.js";import"./geodesicConstants-yASAK_zX.js";async function Ce(e){let{portalItem:r}=e;!r||r instanceof h||(r=new h(r));const a=await K(r);return new a.constructor({portalItem:r,...a.properties})}async function K(e){await e.load();const r=new b;return j(await W(e,r))}async function W(e,r){switch(e.type){case"3DTiles Service":return e.typeKeywords.includes("3DObject")?E():R();case"CSV":return q();case"Feature Collection":return J(e);case"Feature Service":return O(e,r);case"Feed":return Z();case"GeoJson":return A();case"Group Layer":return _();case"Image Service":return k(e,r);case"KML":return z();case"Knowledge Graph Layer":return B();case"Map Service":return D(e,r);case"Media Layer":return ee();case"Scene Service":return V(e,r);case"Stream Service":return x();case"Vector Tile Service":return U();case"WCS":return H();case"WFS":return Q();case"WMS":return X();case"WMTS":return Y();default:throw new v("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function j(e){const r=e.className,a=F[r];return{constructor:await a(),properties:e.properties}}async function D(e,r){return await re(e,r)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function O(e,r){const a=await g(e,r);if(typeof a=="object"){const{sourceJSON:s,className:n}=a,t={sourceJSON:s};return a.id!=null&&(t.layerId=a.id),{className:n||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}async function V(e,r){var s;const a=await g(e,r,async()=>{try{if(!e.url)return[];const{serverUrl:n}=await M(e.url,{sceneLayerItem:e}),t=await r.fetchServiceMetadata(n);return(t==null?void 0:t.tables)??[]}catch{return[]}});if(typeof a=="object"){const n={};let t;if(a.id!=null?(n.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,(s=e.typeKeywords)==null?void 0:s.length){for(const o of Object.keys(l))if(e.typeKeywords.includes(o))return{className:l[o]}}const c=await r.fetchServiceMetadata(t,{customParameters:await r.fetchCustomParameters(e,o=>{var i;return(i=f(o))==null?void 0:i.customParameters})});return{className:l[c==null?void 0:c.layerType]||"SceneLayer",properties:n}}if(a===!1){const n=await r.fetchServiceMetadata(e.url);if((n==null?void 0:n.layerType)==="Voxel")return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function J(e){await e.load();const r=y(e,"Map Notes"),a=y(e,"Markup");if(r||a)return{className:"MapNotesLayer"};if(y(e,"Route Layer"))return{className:"RouteLayer"};const s=await e.fetchData();return d(s)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function k(e,r){var u,w,L,N,S;await e.load();const a=((u=e.typeKeywords)==null?void 0:u.map(I=>I.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const s=await r.fetchItemData(e),n=s==null?void 0:s.layerType;if(n==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(n==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const t=await r.fetchServiceMetadata(e.url,{customParameters:await r.fetchCustomParameters(e)}),c=(w=t.cacheType)==null?void 0:w.toLowerCase(),o=(L=t.capabilities)==null?void 0:L.toLowerCase().includes("tilesonly"),i=((S=(N=t.tileInfo)==null?void 0:N.format)==null?void 0:S.toLowerCase())??"",m=c==null&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(i);return c==="map"||m||o?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function x(){return{className:"StreamLayer"}}function U(){return{className:"VectorTileLayer"}}function A(){return{className:"GeoJSONLayer"}}function R(){return{className:"IntegratedMesh3DTilesLayer"}}function E(){return{className:"UnsupportedLayer"}}function q(){return{className:"CSVLayer"}}function z(){return{className:"KMLLayer"}}function B(){return{className:"KnowledgeGraphLayer"}}function H(){return{className:"WCSLayer"}}function Q(){return{className:"WFSLayer"}}function X(){return{className:"WMSLayer"}}function Y(){return{className:"WMTSLayer"}}function Z(){return{className:"StreamLayer"}}function _(){return{className:"GroupLayer"}}function ee(){return{className:"MediaLayer"}}async function re(e,r){const{tileInfo:a}=await r.fetchServiceMetadata(e.url,{customParameters:await r.fetchCustomParameters(e)});return a}async function g(e,r,a){const{url:s,type:n}=e,t=n==="Feature Service";if(!s)return{};if(/\/\d+$/.test(s)){if(t){const i=await r.fetchServiceMetadata(s,{customParameters:await r.fetchCustomParameters(e,m=>{var u;return(u=f(m))==null?void 0:u.customParameters})});return{id:i.id,className:T(i.type),sourceJSON:i}}return{}}await e.load();let c=await r.fetchItemData(e);if(t){const i=await C(c,s,r),m=p(i);if(typeof m=="object"){const u=G(i,m.id);m.className=P(u==null?void 0:u.layerType)}return m}if(n==="Scene Service"&&(c=await $(e,c,r)),d(c)>0)return p(c);const o=await r.fetchServiceMetadata(s);return a&&(o.tables=await a()),p(o)}function p(e){var r;return d(e)===1&&{id:(r=f(e))==null?void 0:r.id}}export{Ce as fromItem,W as selectLayerClassPath};
