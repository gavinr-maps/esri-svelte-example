import{b0 as y,aP as T,f as a,g as c,j as A,a5 as w,bW as Q,x as P,fn as p,_ as n,dU as f,dV as h,E as j}from"./index-27db053b.js";import{b as _,K as D}from"./Query-4d8a66d0.js";import{n as q,s as L}from"./executeForIds-d3076dfe.js";import{x as J}from"./query-633304fb.js";import{a as N}from"./executeQueryJSON-2230884c.js";import{n as $}from"./executeQueryPBF-9b058192.js";import{d as z}from"./FeatureSet-b143a95b.js";async function U(r,t,e){const o=y(r);return J(o,_.from(t),{...e}).then(s=>({count:s.data.count,extent:T.fromJSON(s.data.extent)}))}let i=class extends w{constructor(r){super(r),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(r,t){const e=await this.executeJSON(r,t);return this.featureSetFromJSON(r,e,t)}async executeJSON(r,t){var u;const e=this._normalizeQuery(r),o=((u=r.outStatistics)==null?void 0:u[0])!=null,s=P("featurelayer-pbf-statistics"),l=!o||s;let m;if(this.pbfSupported&&l)try{m=await $(this.url,e,t)}catch(d){if(d.name!=="query:parsing-pbf")throw d;this.pbfSupported=!1}return this.pbfSupported&&l||(m=await N(this.url,e,t)),this._normalizeFields(m.fields),m}async featureSetFromJSON(r,t,e){if(!this._queryIs3DObjectFormat(r)||this.infoFor3D==null||!t.features)return z.fromJSON(t);const{meshFeatureSetFromJSON:o}=await p(n(()=>import("./meshFeatureSet-91ef433d.js").then(s=>s.b),["./meshFeatureSet-91ef433d.js","./index-27db053b.js","./index-5ad293c9.css","./georeference-513f068c.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./spatialReferenceEllipsoidUtils-a3756875.js","./MeshLocalVertexSpace-6a98ede1.js","./MeshGeoreferencedRelativeVertexSpace-2aebf195.js","./quat-1c54f1d6.js","./quatf64-3363c48e.js","./vec32-c805d126.js","./BufferView-3e8730e9.js","./imageUtils-4ded4979.js","./earcut-a2bcd635.js","./Indices-28981df2.js","./vec4f64-3c9d0901.js","./deduplicate-ea9b0dd1.js","./plane-953798ba.js","./sphere-ea5142e2.js","./ByteSizeUnit-d4757d40.js","./triangle-e4da7c55.js","./lineSegment-7bd41e99.js","./basicInterfaces-11f56cb3.js","./VertexAttribute-0e674613.js","./External-0c77b5a6.js","./FeatureSet-b143a95b.js","./Field-a20a79af.js","./fieldType-c94915e3.js"],import.meta.url),e);return o(r,this.infoFor3D,t)}executeForCount(r,t){return q(this.url,this._normalizeQuery(r),t)}executeForExtent(r,t){return U(this.url,this._normalizeQuery(r),t)}executeForIds(r,t){return L(this.url,this._normalizeQuery(r),t)}async executeRelationshipQuery(r,t){const[{default:e},{executeRelationshipQuery:o}]=await p(Promise.all([n(()=>import("./RelationshipQuery-c3b68820.js"),["./RelationshipQuery-c3b68820.js","./index-27db053b.js","./index-5ad293c9.css","./Query-4d8a66d0.js","./Field-a20a79af.js","./fieldType-c94915e3.js"],import.meta.url),n(()=>import("./executeRelationshipQuery-eef8a589.js"),["./executeRelationshipQuery-eef8a589.js","./index-27db053b.js","./index-5ad293c9.css","./query-633304fb.js","./pbfQueryUtils-1b37294c.js","./pbf-4aa35e16.js","./OptimizedGeometry-d94e541f.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-54772c3a.js","./FeatureSet-b143a95b.js","./Field-a20a79af.js","./fieldType-c94915e3.js","./RelationshipQuery-c3b68820.js","./Query-4d8a66d0.js"],import.meta.url)]),t);return r=e.from(r),(this.gdbVersion||this.dynamicDataSource)&&((r=r.clone()).gdbVersion=r.gdbVersion||this.gdbVersion,r.dynamicDataSource=r.dynamicDataSource||this.dynamicDataSource),o(this.url,r,t)}async executeRelationshipQueryForCount(r,t){const[{default:e},{executeRelationshipQueryForCount:o}]=await p(Promise.all([n(()=>import("./RelationshipQuery-c3b68820.js"),["./RelationshipQuery-c3b68820.js","./index-27db053b.js","./index-5ad293c9.css","./Query-4d8a66d0.js","./Field-a20a79af.js","./fieldType-c94915e3.js"],import.meta.url),n(()=>import("./executeRelationshipQuery-eef8a589.js"),["./executeRelationshipQuery-eef8a589.js","./index-27db053b.js","./index-5ad293c9.css","./query-633304fb.js","./pbfQueryUtils-1b37294c.js","./pbf-4aa35e16.js","./OptimizedGeometry-d94e541f.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-54772c3a.js","./FeatureSet-b143a95b.js","./Field-a20a79af.js","./fieldType-c94915e3.js","./RelationshipQuery-c3b68820.js","./Query-4d8a66d0.js"],import.meta.url)]),t);return r=e.from(r),(this.gdbVersion||this.dynamicDataSource)&&((r=r.clone()).gdbVersion=r.gdbVersion||this.gdbVersion,r.dynamicDataSource=r.dynamicDataSource||this.dynamicDataSource),o(this.url,r,t)}async executeAttachmentQuery(r,t){const{executeAttachmentQuery:e,fetchAttachments:o,processAttachmentQueryResult:s}=await p(n(()=>import("./queryAttachments-3ee2198a.js"),["./queryAttachments-3ee2198a.js","./index-27db053b.js","./index-5ad293c9.css","./query-633304fb.js","./pbfQueryUtils-1b37294c.js","./pbf-4aa35e16.js","./OptimizedGeometry-d94e541f.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-54772c3a.js","./AttachmentInfo-e7c7e5ab.js"],import.meta.url),t),l=y(this.url);return s(l,await(this.queryAttachmentsSupported?e(l,r,t):o(l,r,t)))}async executeTopFeaturesQuery(r,t){const{executeTopFeaturesQuery:e}=await p(n(()=>import("./executeTopFeaturesQuery-8ee81065.js"),["./executeTopFeaturesQuery-8ee81065.js","./index-27db053b.js","./index-5ad293c9.css","./queryTopFeatures-aba62324.js","./query-633304fb.js","./pbfQueryUtils-1b37294c.js","./pbf-4aa35e16.js","./OptimizedGeometry-d94e541f.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-54772c3a.js","./FeatureSet-b143a95b.js","./Field-a20a79af.js","./fieldType-c94915e3.js","./TopFeaturesQuery-c5d00ba7.js"],import.meta.url),t);return e(this.parsedUrl,r,this.sourceSpatialReference,t)}async executeForTopIds(r,t){const{executeForTopIds:e}=await p(n(()=>import("./executeForTopIds-734fd632.js"),["./executeForTopIds-734fd632.js","./index-27db053b.js","./index-5ad293c9.css","./queryTopFeatures-aba62324.js","./query-633304fb.js","./pbfQueryUtils-1b37294c.js","./pbf-4aa35e16.js","./OptimizedGeometry-d94e541f.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-54772c3a.js","./TopFeaturesQuery-c5d00ba7.js"],import.meta.url),t);return e(this.parsedUrl,r,t)}async executeForTopExtents(r,t){const{executeForTopExtents:e}=await p(n(()=>import("./executeForTopExtents-8f54a682.js"),["./executeForTopExtents-8f54a682.js","./index-27db053b.js","./index-5ad293c9.css","./queryTopFeatures-aba62324.js","./query-633304fb.js","./pbfQueryUtils-1b37294c.js","./pbf-4aa35e16.js","./OptimizedGeometry-d94e541f.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-54772c3a.js","./TopFeaturesQuery-c5d00ba7.js"],import.meta.url),t);return e(this.parsedUrl,r,t)}async executeForTopCount(r,t){const{executeForTopCount:e}=await p(n(()=>import("./executeForTopCount-1ce2998b.js"),["./executeForTopCount-1ce2998b.js","./index-27db053b.js","./index-5ad293c9.css","./queryTopFeatures-aba62324.js","./query-633304fb.js","./pbfQueryUtils-1b37294c.js","./pbf-4aa35e16.js","./OptimizedGeometry-d94e541f.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-54772c3a.js","./TopFeaturesQuery-c5d00ba7.js"],import.meta.url),t);return e(this.parsedUrl,r,t)}_normalizeQuery(r){let t=_.from(r);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===r?t.clone():t,t.gdbVersion=r.gdbVersion||this.gdbVersion,t.dynamicDataSource=r.dynamicDataSource?D.from(r.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:e}=this;if(e!=null&&this._queryIs3DObjectFormat(r)){t=t===r?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=e,l=f("model/gltf-binary",o)??h("glb",o),m=f("model/gltf+json",o)??h("gtlf",o);for(const u of s){if(u===l){t.formatOf3DObjects=u;break}u!==m||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new j("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===r?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:d,originZ:S,translationX:b,translationY:F,translationZ:x,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:I,rotationDeg:v}=e.transformFieldRoles;t.outFields.push(u,d,S,b,F,x,O,g,V,E,R,I,v)}}return t}_normalizeFields(r){if(this.fieldsIndex!=null&&r!=null)for(const t of r){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(r){return this.infoFor3D!=null&&r.returnGeometry===!0&&r.multipatchOption!=="xyFootprint"&&!r.outStatistics}};a([c({type:D})],i.prototype,"dynamicDataSource",void 0),a([c()],i.prototype,"fieldsIndex",void 0),a([c()],i.prototype,"gdbVersion",void 0),a([c()],i.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],i.prototype,"parsedUrl",null),a([c()],i.prototype,"pbfSupported",void 0),a([c()],i.prototype,"queryAttachmentsSupported",void 0),a([c()],i.prototype,"sourceSpatialReference",void 0),a([c({type:String})],i.prototype,"url",void 0),i=a([A("esri.tasks.QueryTask")],i);const M=i;export{M as x};
