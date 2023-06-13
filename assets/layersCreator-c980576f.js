import{dc as G,ap as M,V as A}from"./index-e8c6bcc0.js";import{a as L}from"./lazyLayerLoader-5e476f9d.js";import{selectLayerClassPath as v}from"./portalLayers-9b42dec6.js";import{t as b}from"./styleUtils-1146cb85.js";import"./layersLoader-44144c50.js";import"./fetchService-c852bf28.js";import"./jsonContext-cb79343f.js";import"./portalItemUtils-9c4b4c29.js";function w(e){return S(e,"notes")}function h(e){return S(e,"markup")}function W(e){return S(e,"route")}function S(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function C(e,r,y){if(!r)return;const t=[];for(const a of r){const i=U(a,y);a.layerType==="GroupLayer"?t.push(N(i,a,y)):t.push(i)}const n=await G(t);for(const a of n)a.value&&e.add(a.value)}const F={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},O={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},V={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},I={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},T={ArcGISFeatureLayer:"FeatureLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},k={...I,LinkChartLayer:"LinkChartLayer"},B={...T},D={...m};async function U(e,r){return x(await R(e,r),e,r)}async function x(e,r,y){const t=new e;return t.read(r,y.context),t.type==="group"&&f(r)&&await J(t,r,y.context),await b(t,y.context),t}async function R(e,r){var o;const y=r.context,t=E(y);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const a=t[n];let i=a?L[a]:L.UnknownLayer;if(g(e)){const c=y==null?void 0:y.portal;if(e.itemId){const l=new M({id:e.itemId,portal:c});await l.load();const s=(await v(l)).className||"UnknownLayer";i=L[s]}}else n==="ArcGISFeatureLayer"?w(e)||h(e)?i=L.MapNotesLayer:W(e)?i=L.RouteLayer:f(e)&&(i=L.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?i=L.WMTSLayer:n==="WFS"&&((o=e.wfsInfo)==null?void 0:o.version)!=="2.0.0"&&(i=L.UnsupportedLayer);return i()}function f(e){var r,y;return e.layerType!=="ArcGISFeatureLayer"||g(e)?!1:(((y=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:y.length)??0)>1}function g(e){return e.type==="Feature Collection"}function E(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=V;break;case"ground":r=O;break;default:r=F}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=D;break;case"tables":r=B;break;default:r=k}break;default:switch(e.layerContainerType){case"basemap":r=m;break;case"tables":r=T;break;default:r=I}}return r}async function N(e,r,y){const t=new A,n=C(t,Array.isArray(r.layers)?r.layers:[],y);try{const a=await e;try{if(await n,a.type==="group")return a.layers.addMany(t),a}catch(i){a.destroy();for(const o of t)o.destroy();throw i}}catch(a){throw a}}async function J(e,r,y){var c;const t=L.FeatureLayer,n=await t(),a=r.featureCollection,i=a==null?void 0:a.showLegend,o=(c=a==null?void 0:a.layers)==null?void 0:c.map((l,s)=>{var d;const p=new n;p.read(l,y);const u={...y,ignoreDefaults:!0};return p.read({id:`${e.id}-sublayer-${s}`,visibility:((d=r.visibleLayers)==null?void 0:d.includes(s))??!0},u),i!=null&&p.read({showLegend:i},u),p});e.layers.addMany(o??[])}export{C as populateOperationalLayers};
