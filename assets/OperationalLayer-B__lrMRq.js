import{r as i,m as u,s as o,$ as v,aI as G,a as w}from"./Accessor-BmwT4B0c.js";import{Z as A}from"./cast-CsZslgGN.js";import{o as d,r as l}from"./writer-DKgfqj4X.js";import{a as c}from"./layerContainerType-C5CzMsLd.js";import{g as h,d as M}from"./JSONSupport-DcrLLGjL.js";import{T as f,f as C}from"./commonProperties-B0GHoNP5.js";import{p as m}from"./TimeExtent-BO6BsF_x.js";const g={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WCS:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},b={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WCS:!0,WMS:!0,WebTiledLayer:!0},I={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},O={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,Object3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,ViewshedLayer:!0,Voxel:!0,WCS:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WCS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":g,"web-map/basemap":b,"web-map/tables":I,"link-chart/operational-layers":{...g,LinkChartLayer:!0},"link-chart/basemap":b,"link-chart/tables":I,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0,WCS:!0},"portal-item/tables":{ArcGISFeatureLayer:!0,SubtypeGroupTable:!0}},R=T=>{let t=class extends T{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(r,e,a){var n;return((n=a==null?void 0:a.portalItem)==null?void 0:n.type)==="Group Layer"?void 0:r}writeListMode(r,e,a,n){(n&&n.layerContainerType==="ground"||r&&h(this,a,{},n))&&(e[a]=r)}writeOperationalLayerType(r,e,a){r&&(e[a]=r)}writeTitle(r,e){e.title=r??"Layer"}readVisibilityTimeExtent(r){return r?m.fromArray(r):null}writeVisibilityTimeExtent(r,e,a,n){r&&n.layerContainerType!=="tables"&&(r.isEmpty?n!=null&&n.messages&&n.messages.push(new o("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):e[a]=r.toArray())}read(r,e){e&&(e.layer=this),M(this,r,a=>super.read(r,a),e)}write(r,e){var S,L;if(!this.persistenceEnabled&&!(e!=null&&e.ignorePersistenceEnabled))return null;if(e!=null&&e.origin){const y=`${e.origin}/${e.layerContainerType||"operational-layers"}`,s=O[y];let p=!!(s!=null&&s[this.operationalLayerType]);if(this.operationalLayerType==="ArcGISTiledElevationServiceLayer"&&y==="web-scene/operational-layers"&&(p=!1),this.operationalLayerType==="ArcGISDimensionLayer"&&y==="web-map/operational-layers"&&(p=!1),!p)return(S=e.messages)==null||S.push(new o("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${y}'`,{layer:this})),null}const a=super.write(r,{...e,layer:this}),n=!!e&&!!e.messages&&!!e.messages.filter(y=>y instanceof o&&y.name==="web-document-write:property-required").length;return A(a==null?void 0:a.url)?((L=e==null?void 0:e.messages)==null||L.push(new o("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&n?null:a}beforeSave(){}};return i([u({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),i([d("id",["id"])],t.prototype,"readId",null),i([u(f)],t.prototype,"listMode",void 0),i([l("listMode")],t.prototype,"writeListMode",null),i([u({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:c,isRequired:!0}}}}})],t.prototype,"operationalLayerType",void 0),i([l("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),i([u(C)],t.prototype,"opacity",void 0),i([u({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),i([u({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),i([l("title"),l(["web-scene"],"title")],t.prototype,"writeTitle",null),i([u({type:m,json:{origins:{"web-scene":{write:{layerContainerTypes:c}}}}})],t.prototype,"visibilityTimeExtent",void 0),i([d("visibilityTimeExtent")],t.prototype,"readVisibilityTimeExtent",null),i([l(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[v,G]]}})],t.prototype,"writeVisibilityTimeExtent",null),i([u({type:Boolean,json:{name:"visibility",write:{layerContainerTypes:c}}})],t.prototype,"visible",void 0),t=i([w("esri.layers.mixins.OperationalLayer")],t),t};export{R as b};
