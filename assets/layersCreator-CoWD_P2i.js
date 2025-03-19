import{V as M}from"./reactiveUtils-BR0C1Kq4.js";import"./Accessor-BHnuXKD2.js";import{e as A}from"./loadUtils-BiECFALG.js";import{a as o}from"./lazyLayerLoader-cbt8Aa3v.js";import m from"./PortalItem-CXk7DqVv.js";import{selectLayerClassPath as b}from"./portalLayers-B1IFhyYP.js";import{t as w}from"./styleUtils-BQ_uVsZf.js";import"./Evented-DCWccWGU.js";import"./SimpleObservable-7oieNGD8.js";import"./requestPresets-v9_cUP4i.js";import"./cast-BA_-jlhc.js";import"./index-tefRSezt.js";import"./JSONSupport-CGdeqxpk.js";import"./associatedFeatureServiceUtils-Bfw5GA1N.js";import"./Portal-CTRRujjZ.js";import"./Promise-CmQqe-ke.js";import"./writer-B2bQV2uU.js";import"./Extent-CBBGeHb-.js";import"./Point-XGrwlf63.js";import"./fetchService-zLGBmq3X.js";import"./layerUtils-dJgsXxkC.js";import"./portalItemUtils-rm7sAgcm.js";import"./projection-B2I9Bzj_.js";import"./vec3f64-BLpZdpfb.js";import"./Polyline-BmuD2-ZN.js";import"./mathUtils-DV9iOXpW.js";import"./projectBuffer-DOU0xvVi.js";import"./geodesicConstants-yASAK_zX.js";function v(e){return S(e,"notes")}function C(e){return S(e,"markup")}function h(e){return S(e,"route")}function S(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function W(e,r,a){if(!r)return;const y=r.map(t=>x(t,a)),i=await Promise.allSettled(y);for(const t of i)t.status==="rejected"||t.value&&e.add(t.value)}const F={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",Object3DTilesLayer:"UnsupportedLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},O={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},V={ArcGISFeatureLayer:"FeatureLayer"},k={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"UnsupportedLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},I={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},g={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"SubtypeGroupLayer"},T={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},B={...I,LinkChartLayer:"LinkChartLayer"},D={...g},U={...T};async function x(e,r){return E(await R(e,r),e,r)}async function E(e,r,a){const y=new e;return y.read(r,a.context),y.type==="group"&&(r.layerType==="GroupLayer"?await N(y,r,a):u(r)?J(y,r,a.context):G(r)&&await P(y,r,a.context)),await w(y,a.context),y}async function R(e,r){var c,n;const a=r.context,y=K(a);let i=e.layerType||e.type;!i&&(r!=null&&r.defaultLayerType)&&(i=r.defaultLayerType);const t=y[i];let L=t?o[t]:o.UnknownLayer;if(u(e)){const p=a==null?void 0:a.portal;if(e.itemId){const l=new m({id:e.itemId,portal:p});await l.load();const s=(await b(l,new A)).className||"UnknownLayer";L=o[s]}}else i==="ArcGISFeatureLayer"?v(e)||C(e)?L=o.MapNotesLayer:h(e)?L=o.RouteLayer:G(e)&&(L=o.GroupLayer):(c=e.wmtsInfo)!=null&&c.url&&e.wmtsInfo.layerIdentifier?L=o.WMTSLayer:i==="WFS"&&((n=e.wfsInfo)==null?void 0:n.version)!=="2.0.0"&&(L=o.UnsupportedLayer);return L()}function G(e){var r,a;return e.layerType!=="ArcGISFeatureLayer"||u(e)?!1:(((a=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:a.length)??0)>1}function u(e){return e.type==="Feature Collection"}function K(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=k;break;case"ground":r=O;break;case"tables":r=V;break;default:r=F}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=U;break;case"tables":r=D;break;default:r=B}break;default:switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=g;break;default:r=I}}return r}async function N(e,r,a){const y=new M,i=W(y,Array.isArray(r.layers)?r.layers:[],a);try{try{if(await i,e.type==="group")return e.layers.addMany(y),e}catch(t){e.destroy();for(const L of y)L.destroy();throw t}}catch(t){throw t}}function J(e,r,a){r.itemId&&(e.portalItem=new m({id:r.itemId,portal:a==null?void 0:a.portal}),e.when(()=>{var i,t;const y=L=>{var p,l;const c=L.layerId;f(L,e,r,c,a);const n=(l=(p=r.featureCollection)==null?void 0:p.layers)==null?void 0:l[c];n&&L.read(n,a)};(i=e.layers)==null||i.forEach(y),(t=e.tables)==null||t.forEach(y)}))}async function P(e,r,a){var n;const y=o.FeatureLayer,i=await y(),t=r.featureCollection,L=t==null?void 0:t.showLegend,c=(n=t==null?void 0:t.layers)==null?void 0:n.map((p,l)=>{const s=new i;s.read(p,a);const d={...a,ignoreDefaults:!0};return f(s,e,r,l,d),L!=null&&s.read({showLegend:L},d),s});e.layers.addMany(c??[])}function f(e,r,a,y,i){var t;e.read({id:`${r.id}-sublayer-${y}`,visibility:((t=a.visibleLayers)==null?void 0:t.includes(y))??!0},i)}export{N as populateGroupLayer,W as populateOperationalLayers};
