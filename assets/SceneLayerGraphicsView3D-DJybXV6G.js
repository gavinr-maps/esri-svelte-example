const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./I3STreeDebugger-R_LnlpmV.js","./Evented-CXIxDjmW.js","./Accessor-D6mNnsWy.js","./subclass-BR3PhgZG.js","./geometry-DpwwkAX1.js","./Extent-DHjqVB-p.js","./Point-DB4Hp4hH.js","./jsonMap-DCC6W5ex.js","./writer-3zufXUNV.js","./assets-C2mb-ea2.js","./index-CeCSsEgo.js","./index-CjOb8WjV.css","./Polyline-D97hl-6E.js","./mathUtils-ClvKsMak.js","./mat4-ybYUU6jq.js","./mat4f64-Dk4dwAN8.js","./projectBuffer-vsa0P_cF.js","./geodesicConstants-XRAvAZCD.js","./TileTreeDebugger-Dqg5BVrn.js","./Color-DDUWtbqR.js","./colorUtils-CS9vdHXB.js","./Graphic-Dc7F67nR.js","./PopupTemplate-ByHks6sq.js","./Clonable-cKbRam6-.js","./reactiveUtils-BFQ0BtrB.js","./shared-B3wH2qpO.js","./fieldUtils-CNduWQU9.js","./intl-Dpfm8vPB.js","./Promise-CZrWwByK.js","./enumeration--HlxOQ_N.js","./ActionToggle-C0Z1k2jc.js","./Identifiable-BLvpQbOc.js","./symbols-CsUQ5BxR.js","./TextSymbol-gKE-H_J6.js","./screenUtils-PfxkaaMN.js","./materialUtils-CQ3JLQ1x.js","./opacityUtils-BT7mQkwC.js","./aaBoundingBox-rJEWaOSN.js","./persistableUrlUtils-BcifXQ1Z.js","./collectionUtils-Dm1icNvk.js","./Portal-liet8xHC.js","./jsonUtils-Cma_7A64.js"])))=>i.map(i=>d[i]);
import{_ as V}from"./index-CeCSsEgo.js";import{o as j,e as u}from"./Evented-CXIxDjmW.js";import{d as F}from"./Graphic-Dc7F67nR.js";import{aa as H,n as w,D as Q,a3 as q,y as c,b as T}from"./subclass-BR3PhgZG.js";import{u as y}from"./Accessor-D6mNnsWy.js";import{P as N,d as U}from"./reactiveUtils-BFQ0BtrB.js";import{C as z,d as B,n as k}from"./mathUtils-ClvKsMak.js";import{n as S}from"./projectBuffer-vsa0P_cF.js";import{n as W,e as Z}from"./projectVectorToVector-Chzd0Pq0.js";import{o as K,i as Y}from"./Extent-DHjqVB-p.js";import{t as A,e as J}from"./DoubleArray-CF_CpVBS.js";import{o as X}from"./projection-A9yUaaTs.js";import{o as tt}from"./LayerConstants-B33OP6sh.js";import{Z as et}from"./dehydratedFeatures-fOLmpfQS.js";import{c as rt}from"./hydratedFeatures-Cy9DBeYQ.js";import{G,K as it}from"./I3SOverrides-B6kToAk9.js";import{d as ot}from"./FeatureFilter-BzdN7b7E.js";import{b as P}from"./Query-Cx4awVKu.js";import{S as st}from"./basemapUtils-CkCKogG3.js";import{h as at}from"./WorkerHandle-B37YGie-.js";import{l as nt}from"./LayerView3D-DMyi427V.js";import{P as pt,l as dt}from"./HeatmapDensity.glsl-CI8Udkac.js";import{w as lt,a as ht,i as mt,u as ut,f as ct,b as gt}from"./SceneLayerView-Bj0Gz1j-.js";import{Y as _t,t as ft,N as yt,A as bt,Q as M}from"./I3SUtil-vacVP6Bd.js";import{u as vt,t as It}from"./TemporalSceneLayerView-Dap9eja4.js";import{t as xt}from"./WaterSurface.glsl-BJUc652W.js";import{i as Et}from"./PopupSceneLayerView-BK2Ttnde.js";import{t as C}from"./Material-BN_i9QRJ.js";import{J as wt,s as Nt}from"./orientedBoundingBox-COq6pSqo.js";import{t as Ct}from"./Viewshed.glsl-DunS1wrb.js";import{C as Ot}from"./RenderGeometry-CXcYvifi.js";import{u as Dt}from"./popupUtils-sb3Ob2mW.js";import{I as Ft}from"./Scheduler-CDoWuxMK.js";import"./geometry-DpwwkAX1.js";import"./Point-DB4Hp4hH.js";import"./jsonMap-DCC6W5ex.js";import"./writer-3zufXUNV.js";import"./assets-C2mb-ea2.js";import"./Polyline-D97hl-6E.js";import"./PopupTemplate-ByHks6sq.js";import"./Clonable-cKbRam6-.js";import"./fieldUtils-CNduWQU9.js";import"./intl-Dpfm8vPB.js";import"./Promise-CZrWwByK.js";import"./enumeration--HlxOQ_N.js";import"./Color-DDUWtbqR.js";import"./colorUtils-CS9vdHXB.js";import"./ActionToggle-C0Z1k2jc.js";import"./Identifiable-BLvpQbOc.js";import"./symbols-CsUQ5BxR.js";import"./TextSymbol-gKE-H_J6.js";import"./screenUtils-PfxkaaMN.js";import"./materialUtils-CQ3JLQ1x.js";import"./opacityUtils-BT7mQkwC.js";import"./aaBoundingBox-rJEWaOSN.js";import"./persistableUrlUtils-BcifXQ1Z.js";import"./collectionUtils-Dm1icNvk.js";import"./Portal-liet8xHC.js";import"./jsonUtils-Cma_7A64.js";import"./shared-B3wH2qpO.js";import"./geodesicConstants-XRAvAZCD.js";import"./projectPointToVector-D3506wm2.js";import"./quantizationUtils-CIQDbQFJ.js";import"./Field-C8SaaeoI.js";import"./fieldType-CIG5ey7e.js";import"./ViewingMode-Dodu7ZZk.js";import"./MemCache-C6WUx-5V.js";import"./uuid-fwrPAdZb.js";import"./mat3-DRqs2t5W.js";import"./mat3f64-BBpwCtoL.js";import"./RenderTexture-BNgzgNs_.js";import"./meshVertexSpaceUtils-CtidK-ZY.js";import"./MeshLocalVertexSpace-Xt9zU6DE.js";import"./sphere-7666U3LO.js";import"./mat4-ybYUU6jq.js";import"./vec42-B1mBkh1w.js";import"./vec4f64-CBQL1T0x.js";import"./plane-Bz78OrLf.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-BrpT0VRp.js";import"./vec2f64-Diu2Kaa8.js";import"./mathUtils-kvswLROa.js";import"./objectResourceUtils-DwPhzmLp.js";import"./devEnvironmentUtils-D6qIi8Ky.js";import"./Texture-CcsX4Ue_.js";import"./NormalAttribute.glsl-Dqf1UPF9.js";import"./interfaces-B8ge7Jg9.js";import"./BindType-BmZEZMMh.js";import"./compilerUtils-BA04t1lN.js";import"./VertexAttribute-BnAa5VW0.js";import"./Util-BMqL_pkg.js";import"./enums-BlUEVwJR.js";import"./Texture-BbJIOVx_.js";import"./basicInterfaces-wONHx_SN.js";import"./vec2-B_ymkwGp.js";import"./ShaderTechniqueConfiguration-D3UbJ2mX.js";import"./doublePrecisionUtils-B0owpBza.js";import"./Indices-B6BGScAS.js";import"./triangle-B7rKLsGW.js";import"./lineSegment-BvgMMk26.js";import"./lengthUtils-D7_DvYH0.js";import"./renderState-PYzNpa1K.js";import"./requestImageUtils-DgB0_9qP.js";import"./BufferView-B7Z-dzh4.js";import"./vec3-C3Q-RF_i.js";import"./vec4-L9zJLV3y.js";import"./Version-_Vxue7Ui.js";import"./quat-ChS85qAG.js";import"./vec2f32-BbH2jxlN.js";import"./NestedMap-DgiGbX8E.js";import"./InterleavedLayout-UIhsB8jd.js";import"./VertexColor.glsl-lPkEAKYQ.js";import"./verticalOffsetUtils-DaB1QvwW.js";import"./DecodeSymbolColor.glsl-CeBC4xQe.js";import"./styleUtils-DQEZjdpw.js";import"./I3SNode--78Hay1Z.js";import"./ElevationRange-BrgM1moX.js";import"./I3SBinaryReader-CtwiVPE4.js";import"./spatialReferenceEllipsoidUtils-BL8s_3ls.js";import"./frustum-DqmLJYYu.js";import"./ReactiveSet-HYC-4KEs.js";import"./featureQueryAll-CRo1-WqJ.js";import"./meshFeatureSet-GfLj7Azz.js";import"./Mesh-DBjiOEHo.js";import"./axisAngleDegrees-CHCWDIqP.js";import"./MeshComponent-D1ps11B9.js";import"./imageUtils-9KeT6Jbh.js";import"./MeshVertexAttributes-DVEL_Tlm.js";import"./MeshTransform-DLV7aKpV.js";import"./triangulationUtils-D8OjVISe.js";import"./earcut-BqgeR2O3.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./deduplicate-DxTSMkFY.js";import"./projection-CJ-ESJIf.js";import"./computeTranslationToOriginAndRotation-CLzktXYu.js";import"./vertexSpaceConversion-DhlFeppE.js";import"./External-w9Liy2RE.js";import"./infoFor3D-CxOdoily.js";import"./FeatureSet-DyOnd9Rj.js";import"./FeatureLayerView3D-udqCM81c.js";import"./layerUtils-erzwAANv.js";import"./FeatureLayerViewBase3D-q_uZ9hlp.js";import"./query-DbJf0nTj.js";import"./normalizeUtils-Bi6Jza1f.js";import"./normalizeUtilsCommon-tgSpcwHH.js";import"./utils-D61i9O7E.js";import"./utils-Dx8bgRIB.js";import"./pbfQueryUtils-C7MaRxj2.js";import"./pbf-CmaozfCN.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-B_YkkRy9.js";import"./EventedSet-BlB7MiXE.js";import"./signal-DzOfzcfh.js";import"./FeatureLayerView-Bch8Tu3U.js";import"./FeatureEffect-BXMKpemG.js";import"./jsonUtils-C4Wp5KpV.js";import"./parser-BN6zmHl-.js";import"./utils-D20M4_S8.js";import"./mat4f32-DcsiF_Rp.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./LayerView-CbIY_4n2.js";import"./UpdatingHandles-CMtXpTiG.js";import"./layerViewUtils-D2JqIDZ8.js";import"./RefreshableLayerView-BClKL0FL.js";import"./timeSupport-BapPa47N.js";import"./timeUtils-4eYw5pLA.js";import"./TimeExtent-41gxTbrv.js";import"./timeUtils-DQR2jUPL.js";import"./utils-CXgSw6Sd.js";import"./tagSymbols-BPcGfZon.js";import"./DataLayerSource-6X35yXpo.js";import"./FullTextSearch-BNIhEccm.js";import"./projectExtentUtils-C8xmByoE.js";import"./geometryServiceUtils-K7u_-O-B.js";import"./project-C_6NxEch.js";import"./vec3f32-Cw9Q6TO_.js";import"./ElevationProvider-BHZsEIDd.js";import"./boundedPlane-CZE_hxQR.js";import"./unitConversionUtils-Dl04YuQU.js";import"./weather-TVtZwW4o.js";import"./debugFlags-B3L9P_UW.js";import"./Float4DrawUniform-CWdxHXQ-.js";import"./Octree-DQVAqpsn.js";import"./floatRGBA-C8rGFKJ0.js";import"./Intersector-CYIO18dt.js";import"./glUtil-C6KhMg1m.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./VertexArrayObject-Cwnso4un.js";import"./BufferObject-CjYoWxgZ.js";import"./arcgisLayerUrl-Cgl5IQFD.js";import"./ReactiveMap-Dl_3-Rm5.js";import"./dehydratedFeatureComparison-PUpfs3tZ.js";import"./Viewpoint-B260yGoV.js";import"./Cyclical-BY_I03kj.js";import"./jsxFactory-CbAu6VfF.js";import"./workers-8Q6jrI18.js";import"./Queue-DpHko4Yk.js";import"./GraphicsCollection-nEq2FD1R.js";import"./HeightModelInfo-CSXZysDz.js";import"./ColorMaterial.glsl-CJh1RTEZ.js";import"./featureConversionUtils-DdoZh_25.js";import"./edgeUtils-BIb6yRHm.js";import"./SnappingCandidate-O5eRSE6e.js";import"./visualVariableUtils-DzaXbn8H.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./Normals-D1LdtP06.js";import"./CIMSymbolHelper-C1Ghh-WW.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-CILP_6vp.js";import"./GeometryUtils-BSPpv37S.js";import"./enums-BRXbslMp.js";import"./utils-CO7DMJWl.js";import"./definitions-ByNBSgP9.js";import"./mat2d-DPkeMmgR.js";import"./mat2df32-orApM5a3.js";import"./Rect-CUzevAry.js";import"./BoundingBox-BhuXqU4L.js";import"./defaults-DCm7iNI6.js";import"./defaultsJSON-GKolV7NZ.js";import"./OverrideHelper-C4oumxVn.js";import"./colorUtils-D5nOabzP.js";import"./cimSymbolUtils-D00GIWna.js";import"./utils-C1cS-0Yj.js";import"./LRUCache-ju6LnIBZ.js";import"./lineStippleUtils-BcQwIcXj.js";import"./projectVectorToPoint-Cwe6B2HP.js";import"./DefaultLayouts-Bz7P2wdj.js";import"./webStyleSymbolUtils-BtUE3Q7L.js";import"./jsonUtils-C6dvhNjw.js";import"./Intersector-wnm5hmmT.js";import"./RenderCoordsHelper-DgY-kqpV.js";import"./scaleUtils-BciLowpa.js";import"./DefaultUI-DVON9ypr.js";import"./InputManager-C4xu1R9l.js";import"./Map-C4JPDBFj.js";import"./Basemap-DhGpUWGY.js";import"./loadAll-DDw-urzS.js";import"./PortalItem-BuTU9OuN.js";import"./writeUtils-3wz9AuW7.js";import"./Ground-BuxgFYJy.js";import"./CollectionFlattener-CkyePFnC.js";import"./editableLayers-BHlaPs85.js";import"./catalogUtils--o1nDhfl.js";import"./TablesMixin-BKe9x_jT.js";import"./Layer-C96_yo4i.js";import"./selectionUtils-DYi6daQO.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./screenUtils-BGG3AyYa.js";import"./a11yUtils-DwloBVAu.js";import"./heightModelInfoUtils-BSzg1Wnl.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-DFh8uIGE.js";import"./Compass-DD0Dkx4v.js";import"./utils-DsJqvptN.js";import"./GoTo-CyjNnle5.js";import"./NavigationToggle-C75z3F4y.js";import"./Zoom-DVO2GqC9.js";import"./viewpointUtils-NBu6CVKZ.js";import"./earthUtils-BoWm1Npn.js";import"./spatialReferenceSupport-C0HdvI6F.js";import"./ElevationSamplerData-IYvomv6Y.js";import"./terrainUtils-DI2O4VuO.js";import"./TileInfo-DkEc90N-.js";import"./TileKey-DZd6gJy7.js";import"./Environment-CIgtfJ1a.js";import"./quantityUtils-d_-fFwhF.js";import"./Program-BE7XUO18.js";import"./ShadowCastVisualizeTechniqueConfiguration-CoPYcmeP.js";import"./euclideanLengthMeasurementUtils-Cc80-VfJ.js";import"./ray-DM1mbnrb.js";import"./ZoomMomentumEstimator-BjFm7M7Z.js";import"./labelFormatUtils-jemMExFz.js";import"./labelUtils-Cczy0uDR.js";import"./FeatureTileDescriptor3D-eAC3sTRJ.js";import"./elevationInfoUtils-Bl7QRRwv.js";import"./ElevationQueryTileCache-Sgr0RZBH.js";import"./hitTestSelectUtils-UXJPjatw.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./RenderableTile-BEiJLF3C.js";import"./enums-BRzLM11V.js";import"./TileStrategy-_ezroEyM.js";import"./TileKey-CIqLSCov.js";import"./QueueProcessor-Bu6RBZRX.js";import"./config-MDUrh2eL.js";import"./DefaultVertexAttributeLayouts-BIPVF1RK.js";import"./DisplayObject-DFOkWAgp.js";import"./StyleDefinition-BK3ROBTO.js";import"./resources-BB7af0HE.js";import"./edgeProcessing-kh6EVSro.js";import"./testSVGPremultipliedAlpha-CKx7iZPZ.js";import"./RenderingContext-B0G6O7lI.js";import"./ProgramCache-DZJRjGv8.js";import"./queryForSymbologySnapping-C3o9B228.js";import"./hash-CcEbRgUF.js";import"./diffUtils--7ofoPN-.js";import"./UniqueValueRenderer-dci9bLM8.js";import"./colorRamps-CFlTi-ob.js";import"./SizeVariable-aYYWlweG.js";import"./ColorStop-CXfPDZon.js";import"./Graphics3DObjectStates-BWSTgD8k.js";import"./ClassBreaksRenderer-DMO3d0Rn.js";import"./jsonUtils-CuoSmH2q.js";import"./FieldsIndex-IOXc-mnc.js";import"./UnknownTimeZone-D0GlcniK.js";import"./HeatmapColorStop-CgvKf0-E.js";import"./heatmapUtils-C-uT6ZIV.js";import"./SimpleRenderer-DvJZ7cyq.js";import"./rendererConversion-Dp1igvNJ.js";import"./optimizedFeatureQueryEngineAdapter-Buta7wlw.js";import"./centroid-DdLmOD72.js";import"./PooledRBush-CGlhTzFe.js";import"./quickselect-D0_cvEX6.js";import"./QueryEngine-CDSTFuau.js";import"./WhereClause-B8B42Be_.js";import"./TimeOnly-cvONhzoK.js";import"./timeSupport-BvrtlmuZ.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-aRVn40Z7.js";import"./utils-BaQRRNPl.js";import"./utils-BTpbFBnk.js";import"./ClassBreaksDefinition-BbGMTL53.js";import"./FeatureStore-BudYmSEo.js";import"./BoundsStore-DmV4yive.js";import"./heatmapTextureUtils-DhR7tWLr.js";class R extends at{constructor(e){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:i=>[i.geometryBuffer]},e,{hasInitialize:!0})}}class St extends j{constructor(e,i){super(),this._updateAndCompare=e,this._notifyUpdated=i,this._nodes=new Map,this._graphics=new Map,this._duplicates=new Map}clear(){if(this._graphics.size>0){const e=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:e})}this._nodes.clear()}get length(){return this._graphics.size}get(e){return this._graphics.get(e)}getNode(e){return this._nodes.get(e)}hasNode(e){return this._nodes.has(e)}nodes(){return this._nodes.values()}addNode(e,i){this._nodes.set(e,i);const r=i.graphics;if(r.length===0)return;const o=new Set;for(let a=0;a<r.length;a++){const n=r[a],p=n.objectId,h=this._graphics.get(p);if(h){o.add(p),n!==h&&(r[a]=h);const l=this._duplicates.get(p);l?l.push(e):this._duplicates.set(p,[h.nodeIndex,e])}else n.nodeIndex=e,this._graphics.set(p,n)}o.size&&this._updateForeignGraphics(i);const s=o.size>0?r.filter(a=>!o.has(a.objectId)):r;s.length>0&&this.emit("change",{added:s,removed:[]})}removeNode(e){const i=this._nodes.get(e);if(!i)return;this._nodes.delete(e);const r=new Set,o=[];for(const s of i.graphics){const a=s.objectId,n=this._graphics.get(a);if(!n)continue;const p=this._duplicates.get(a);if(p){const h=p.indexOf(e);if(h===-1)continue;if(p.splice(h,1),n.nodeIndex===e){let l=this.getNode(p[0]);for(let d=1;d<p.length;d++){const g=this.getNode(p[d]);(l==null||g!=null&&g.node.level>l.node.level)&&(l=g)}l!=null&&r.add(l)}p.length===1&&this._duplicates.delete(a)}else this._graphics.delete(a),o.push(s)}o.length>0&&this.emit("change",{added:[],removed:o}),r.forEach(s=>this._updateForeignGraphics(s))}_updateForeignGraphics(e){const i=[],r=e.node.index,o=e.node.level;let s=0;for(;s<e.graphics.length;){const a=e.graphics[s].nodeIndex;if(a===r){s++;continue}let n=1;for(;s+n<e.graphics.length&&e.graphics[s+n].nodeIndex===a;)n++;const p=this.getNode(a);if(p!=null&&p.node.level>o)s+=n;else{for(let h=s;h<s+n;h++){const l=e.graphics[h];l.nodeIndex=r,this._updateAndCompare(l,e,h)&&i.push(l)}s+=n}}i.length>0&&this._notifyUpdated(i)}toArray(){return Array.from(this._graphics.values())}find(e){let i;return H(this._graphics,r=>!!e(r)&&(i=r,!0)),i}forEach(e){this._graphics.forEach(i=>e(i))}forEachNode(e){this._nodes.forEach((i,r)=>e(i,r))}get nodeCount(){return this._nodes.size}_checkInvariants(){const e=new Map;this._nodes.forEach((i,r)=>{i.graphics.forEach(o=>{e.set(o.objectId,1+(e.get(o.objectId)??0)),this._duplicates.get(o.objectId)})}),e.forEach((i,r)=>{const o=this._graphics.get(r);if(!o||!this._nodes.get(o.nodeIndex))return;const s=this._duplicates.get(r);s&&s.forEach(a=>{this._nodes.get(a)})})}}const $=gt();class At{constructor(e,i,r,o){this.graphics=e,this.featureIds=i,this.attributeInfo=r,this.node=o}}let m=class extends vt(It(Et(nt(lt)))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this._pendingEditsQueue=Promise.resolve(),this.loadedGraphics=new St((t,e,i)=>Pt(t,e,i),t=>this.processor.graphicsCore.recreateGraphics(t)),this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}tryRecycleWith(t,e){return t.url===this.layer.url&&this._i3sOverrides.isEmpty?t.load(e).then(()=>{var r;_t(this.layer,t,this._i3sOverrides),this.layer=t,this._i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this._i3sOverrides=new G({view:this.view,layer:t,memoryController:i}),y(this._queryEngine),this._setupQueryEngine(),this.processor.resetObjectStates()}):null}initialize(){var e,i;this.addResolvingPromise(this.layer.indexInfo);const t=(e=this.view.resourceController)==null?void 0:e.memoryController;this._i3sOverrides=new G({view:this.view,layer:this.layer,memoryController:t}),ft(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new ht({layerView:this}),this._updatingHandles.add(()=>this.layer.rangeInfos,r=>this._rangeInfosChanged(r),N),this._updatingHandles.add(()=>this.layer.renderer,(r,o)=>this._rendererChange(r,o)),this._updatingHandles.add(()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted],()=>this._filterChange()),this.addHandles(U(()=>C.I3S_TREE_SHOW_TILES,r=>{if(r&&!this._treeDebugger){const o=this._controller.crsIndex;V(()=>import("./I3STreeDebugger-R_LnlpmV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),import.meta.url).then(({I3STreeDebugger:s})=>{!this._treeDebugger&&C.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new s({lv:this,view:this.view,nodeSR:o}))})}else r||!this._treeDebugger||C.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},N)),this._set("processor",new pt({owner:this,preferredUpdatePolicy:Ot.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:r=>this._updateClippingExtent(r)})),(i=this.processor.elevationAlignment)==null||i.events.on("invalidate-elevation",({extent:r,spatialReference:o})=>this._controller.updateElevationChanged(r,o)),this.supportsHeightUnitConversion&&(this._verticalScale=X("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.initializePromise),this._memCache=this.view.resourceController.memoryController.newCache(`psl-${this.uid}`),this._controller=new it({layerView:this}),yt(this.layer.geometryDefinitions)&&(this._worker=new R(r=>this.view.resourceController.immediate.schedule(r))),this.addHandles(this.layer.on("apply-edits",r=>this._updatingHandles.addPromise(r.result))),this.addHandles(this.layer.on("edits",r=>{const o=this._pendingEditsQueue.then(()=>this._handleEdits(r)).then();this._pendingEditsQueue=o,this._updatingHandles.addPromise(o)})),this.when(()=>{this._setupQueryEngine(),this._updatingHandles.add(()=>this.maximumNumberOfFeatures,r=>this._controller.featureTarget=r,N),this._updatingHandles.add(()=>this.suspended,r=>{r&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=y(this._treeDebugger),this._i3sOverrides=y(this._i3sOverrides),this._set("processor",y(this.processor)),this._controller=y(this._controller),this._queryEngine=y(this._queryEngine),this._worker=y(this._worker),this._memCache=y(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=y(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??1}get requiredFields(){var t;return((t=this._fieldsHelper)==null?void 0:t.requiredFields)??[]}get maximumNumberOfFeatures(){var e,i;const t=(i=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:i.displayFeatureLimit;return(t==null?void 0:t.maximumNumberOfFeatures)??0}set maximumNumberOfFeatures(t){t!=null?(this._override("maximumNumberOfFeatures",t),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var t;return!this.suspended&&!!((t=this._controller)!=null&&t.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const t=this.layer.excludeObjectIds;return t.length?t.toArray().sort((e,i)=>e-i):null}get lodFactor(){return this.layer.semantic==="Labels"?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}get contentVisible(){var t;return!this.suspended&&!!((t=this._controller)!=null&&t.rootNodeVisible)}get legendEnabled(){var t;return this.contentVisible&&((t=this.i3slayer)==null?void 0:t.legendEnabled)===!0}async whenGraphicAttributes(t,e){return bt(this.layer,t,this._getObjectIdField(),e,()=>[...this.loadedGraphics.nodes()])}getHit(t){var r;if(!this.loadedGraphics)return null;const e=rt(this.loadedGraphics.find(o=>o.uid===t),this.layer),i=this._getObjectIdField();return(r=e==null?void 0:e.attributes)!=null&&r[i]?(e.layer=this.layer,e.sourceLayer=this.layer,{type:"graphic",graphic:e,layer:e.layer}):null}whenGraphicBounds(t,e){return this.processor.whenGraphicBounds(t,e)}computeAttachmentOrigin(t,e){return this.processor.computeAttachmentOrigin(t,e)}isUpdating(){var t,e,i;return!!((t=this._controller)!=null&&t.updating||(e=this.processor)!=null&&e.updating||(i=this._fieldsHelper)!=null&&i.updating||this.layerFilterUpdating)}highlight(t){return this.processor.highlight(t,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(t){return mt(this._attributeEditingContext,t)}async _decompressBinaryPointData(t,e){const i={geometryBuffer:t.geometryBuffer};this._worker==null&&(this._worker=new R(o=>this.view.resourceController.immediate.schedule(o)));const r=await this._worker.invoke(i,e);if(r==null)throw new Error("Failed to decompress Draco point data");return{positionData:r.positions,featureIds:r.featureIds}}async addNode(t,e,i){var f;if(!O(e)&&!Gt(e))throw new Error;if(this.loadedGraphics.hasNode(t.index))return void w.getLogger(this).error("I3S node "+t.id+" already added");const r=this.layer.fullExtent!=null?Rt(this.layer.fullExtent.clone(),.5):null,{featureIds:o,pointPositions:s}=O(e)?await this._extractBinaryPointPositions(t,e,i):this._extractLegacyPointPositions(e),a=new Array;this._validatePositions(t,o,s,r,a);const n=this._controller.crsVertex,p=this.view.spatialReference;S(s,n,0,s,p,0,o.length);const h=O(e)?t.level:0,l=this._createGraphics(o,s,t.index,h),d=new At(l,o,e.attributeDataInfo,t);if(await this._i3sOverrides.applyAttributeOverrides(d.featureIds,e.attributeDataInfo,i),t.numFeatures=d.graphics.length,this._updateNodeMemory(t),D(d),a.length>0&&(this._computeObb(t,a,n),this._controller.updateVisibility(t.index)),!this._controller.isGeometryVisible(t))return void this._cacheNodeData(d);if(this._verticalScale!=null)for(const b of d.graphics)this._verticalScale(b.geometry);const g=this.view._stage.renderView.objectAndLayerIdRenderHelper;if(g!=null){const b=st(this.view.map,this.layer.uid);for(let x=0;x<d.featureIds.length;x++){const E=d.featureIds[x];g.setUidToObjectAndLayerId(E,d.graphics[x].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled&&!b&&Dt(this.layer,(f=this.view.popup)==null?void 0:f.defaultPopupTemplateEnabled),d.node.resources.attributes,x)}}this.loadedGraphics.addNode(t.index,d),this._controller.updateLoadStatus(t.index,!0),this._filterNode(d),this._treeDebugger&&this._treeDebugger.update()}_computeObb(t,e,i){const r=this._controller.crsIndex,o=r.isGeographic?this.view.renderSpatialReference:r;S(e,i,0,e,o,0,e.length/3),t.serviceObbInIndexSR=wt(new Nt(e,3)),r.isGeographic&&(W(t.serviceObbInIndexSR.center,o,I,r),t.serviceObbInIndexSR.center=I)}isNodeLoaded(t){return this.loadedGraphics.hasNode(t)}isNodeReloading(){return!1}updateNodeState(){}async _extractBinaryPointPositions(t,e,i){const r=await this._decompressBinaryPointData(e,i),o=r.positionData,s=3,a=o.length/s,n=A(3*a),p=t.serviceObbInIndexSR!=null?t.serviceObbInIndexSR.center:z,h=Math.abs(p[2])*2**-20;for(let l=0;l<a;l++){const d=l*s;n[d]=o[d]+p[0],n[d+1]=o[d+1]+p[1],n[d+2]=o[d+2]+p[2],Math.abs(n[d+2])<h&&(n[d+2]=0)}return{featureIds:r.featureIds?J(r.featureIds):[],pointPositions:n}}_extractLegacyPointPositions(t){var o,s;const e=t.pointData.length,i=A(3*e),r=new Array;for(let a=0;a<e;a++){const n=t.pointData[a],p=n.featureDataPosition,h=p.length,l=((o=n.geometries)==null?void 0:o[0])??$t[h],d=n.featureIds[0];if(l.type!=="Embedded"||l.params.type!=="points"||h<2||h>3)continue;const g=((s=l.params.vertexAttributes)==null?void 0:s.position)??[0,0,0],f=3*r.length;i[f]=p[0]+g[0],i[f+1]=p[1]+g[1],i[f+2]=h===3?p[2]+g[2]:NaN,r.push(d)}return{featureIds:r,pointPositions:i}}_validatePositions(t,e,i,r,o){if(r==null&&t.serviceObbInIndexSR)return;const s=e.length,a=3;for(let n=0;n<s;n++){const p=n*a;B(I,i[p],i[p+1],i[p+2]);const h=!Number.isNaN(i[2]);r==null||(h?K(r,I):Y(r,I))||(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&w.getLogger(this).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&w.getLogger(this).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),t.serviceObbInIndexSR||o.push(I[0],I[1],I[2])}}_createGraphics(t,e,i,r){const o=t.length,s=3,a=this._getObjectIdField(),n=this.processor.graphicsCore,p=new Array,h=this.view.spatialReference;for(let l=0;l<o;l++){const d=t[l],g={};d!=null&&(g[a]=d);const f=d??F.generateUID(),b=l*s,x=isNaN(e[b+2])?void 0:e[b+2],E=Z(e[b],e[b+1],x,h),v=this.loadedGraphics.get(f);if(v!=null)(v.level==null||v.level<r)&&(_.property="geometry",_.graphic=v,_.oldValue=v.geometry,_.newValue=E,v.geometry=E,v.level=r,n.graphicUpdateHandler(_)),p.push(v);else{const L=F.generateUID();p.push({objectId:f,uid:L,geometry:E,attributes:g,visible:!0,nodeIndex:i,level:r})}}return p}_updateNodeMemory(t){t.memory=4096+(t.numFeatures!=null?t.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(t){const e=t.graphics.reduce((i,r)=>et(r)+i,Q(t.featureIds)+1024);this._memCache.put(this._getMemCacheKey(t.node),t,e)}_getMemCacheKey(t){return`${t.index}`}_removeAllNodeData(){this.loadedGraphics.forEachNode((t,e)=>{if(t){const i=t.node;this._updateNodeMemory(i),this._cacheNodeData(t)}this._controller.updateLoadStatus(e,!1)}),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(t){const e=this._removeNodeStageData(t);e&&(this._updateNodeMemory(e.node),this._cacheNodeData(e))}_removeNodeStageData(t){const e=this.loadedGraphics.getNode(t);return e==null?null:(this._controller.updateLoadStatus(t,!1),this.loadedGraphics.removeNode(t),this._treeDebugger&&this._treeDebugger.update(),e)}async loadCachedNodeData(t){var e;return(e=this._memCache)==null?void 0:e.pop(this._getMemCacheKey(t))}async addCachedNodeData(t,e,i,r){this.loadedGraphics.hasNode(t.index)?w.getLogger(this).error("I3S node "+t.id+" already added"):(await this._i3sOverrides.applyAttributeOverrides(e.featureIds,i,r),e.attributeInfo=i,this.loadedGraphics.addNode(t.index,e),this._controller.updateLoadStatus(t.index,!0),this._updateNodeMemory(t),D(e),this._filterNode(e),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const t=[];return this.loadedGraphics.forEachNode(e=>t.push(e.node.id)),t.sort()}getVisibleNodes(){const t=new Array;return this.loadedGraphics.forEachNode(e=>t.push(e.node)),t}getLoadedNodeIndices(t){this.loadedGraphics.forEachNode((e,i)=>t.push(i))}getLoadedAttributes(t){const e=this.loadedGraphics.getNode(t);if((e==null?void 0:e.attributeInfo)!=null)return e.attributeInfo.loadedAttributes}getAttributeData(t){const e=this.loadedGraphics.getNode(t);if((e==null?void 0:e.attributeInfo)!=null)return e.attributeInfo.attributeData}_setAttributeData(t,e){const i=this.loadedGraphics.getNode(t);(i==null?void 0:i.attributeInfo)!=null&&(i.attributeInfo.attributeData=e,this._attributeValuesChanged(i))}async updateAttributes(t,e,i){const r=this.loadedGraphics.getNode(t);r!=null&&(await this._i3sOverrides.applyAttributeOverrides(r.featureIds,e,i),r.attributeInfo=e,this._attributeValuesChanged(r))}_attributeValuesChanged(t){if(D(t),this._filterNode(t),this.processor.graphicsCore.labelsEnabled){const e=t.node.index,i=new Array;t.graphics.forEach(r=>r.nodeIndex===e&&i.push(r.uid)),this.processor.graphicsCore.updateLabelingInfo(i)}}_updateClippingExtent(t){return this._controller&&this._controller.updateClippingArea(t),!1}_getObjectIdField(){return this.layer.objectIdField||tt}_getGlobalIdField(){var t;return(t=this.layer.associatedLayer)==null?void 0:t.globalIdField}async _rendererChange(t,e){const{layer:{fieldsIndex:i}}=this,r=new Set;let o,s;t?(await t.collectRequiredFields(r,i),o=Array.from(r).sort()):o=[],r.clear(),e?(await e.collectRequiredFields(r,i),s=Array.from(r).sort()):s=[],o.length===s.length&&o.every((a,n)=>o[n]===s[n])||this._reloadAllNodes()}_rangeInfosChanged(t){t!=null&&t.length>0&&w.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this.loadedGraphics.forEachNode(t=>this._filterNode(t))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(t){const e=this.parsedDefinitionExpression,i=this._excludeObjectIdsSorted,r=this._getObjectIdField();for(const o of t.graphics){const s=o.visible,a=!e||this._evaluateClause(e,o),n=i==null||q(i,o.attributes[r])<0;o.visible=a&&n,s!==o.visible&&(_.graphic=o,_.property="visible",_.oldValue=s,_.newValue=o.visible,this.processor.graphicsCore.graphicUpdateHandler(_))}}createQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(t):new P(t)}queryFeatures(t,e){return this._queryEngine.executeQuery(this._ensureQuery(t),e==null?void 0:e.signal)}queryObjectIds(t,e){return this._queryEngine.executeQueryForIds(this._ensureQuery(t),e==null?void 0:e.signal)}queryFeatureCount(t,e){return this._queryEngine.executeQueryForCount(this._ensureQuery(t),e==null?void 0:e.signal)}queryExtent(t,e){return this._queryEngine.executeQueryForExtent(this._ensureQuery(t),e==null?void 0:e.signal)}_ensureQuery(t){return this._addDefinitionExpressionToQuery(t==null?this.createQuery():P.from(t))}_setupQueryEngine(){const t=()=>this.processor.featureStore;this._queryEngine=new dt({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return t()},hasZ:this.hasZ,hasM:this.hasM},priority:Ft.FEATURE_QUERY_ENGINE})}get usedMemory(){var t,e;return((e=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:e.usedMemory)??0}get unloadedMemory(){var t,e,i;return .8*((((t=this._controller)==null?void 0:t.unloadedMemoryEstimate)??0)+(((i=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:i.unprocessedMemoryEstimate)??0))}get ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}async _handleEdits(t){const e=this._attributeEditingContext,i=await ut(e,t);ct(e,i)}get _attributeEditingContext(){const t=this._getObjectIdField(),e=this._getGlobalIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:t,globalIdField:e,forEachNode:i=>this.loadedGraphics.forEachNode(r=>i(r.node,r.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this._i3sOverrides,getAttributeData:i=>this.getAttributeData(i),setAttributeData:(i,r,o)=>{this._setAttributeData(i,r);const s=this.loadedGraphics.getNode(i);if(o!=null){const a=this.loadedGraphics.get(o.attributes[t]);a!=null&&this.processor.graphicsCore.recreateGraphics([a])}else s!=null&&this.processor.graphicsCore.recreateGraphics(s.graphics)},clearMemCache:()=>{}}}get performanceInfo(){return new xt(this.usedMemory,this.loadedGraphics.length,-1,this.maximumNumberOfFeatures,this.loadedGraphics.nodeCount,this.processor.graphicsCore.performanceInfo)}get test(){}};u([c()],m.prototype,"processor",void 0),u([c({type:ot})],m.prototype,"filter",void 0),u([c()],m.prototype,"loadedGraphics",void 0),u([c()],m.prototype,"i3slayer",null),u([c()],m.prototype,"_controller",void 0),u([c()],m.prototype,"updating",void 0),u([c()],m.prototype,"suspended",void 0),u([c()],m.prototype,"holeFilling",void 0),u([c(Ct)],m.prototype,"updatingProgress",void 0),u([c()],m.prototype,"updatingProgressValue",null),u([c($.requiredFields)],m.prototype,"requiredFields",null),u([c($.availableFields)],m.prototype,"availableFields",void 0),u([c()],m.prototype,"_fieldsHelper",void 0),u([c({type:Number})],m.prototype,"maximumNumberOfFeatures",null),u([c({readOnly:!0})],m.prototype,"maximumNumberOfFeaturesExceeded",null),u([c()],m.prototype,"_excludeObjectIdsSorted",null),u([c({readOnly:!0})],m.prototype,"lodFactor",null),u([c({readOnly:!0})],m.prototype,"hasM",null),u([c({readOnly:!0})],m.prototype,"hasZ",null),u([c()],m.prototype,"contentVisible",null),u([c({readOnly:!0})],m.prototype,"legendEnabled",null),m=u([T("esri.views.3d.layers.SceneLayerGraphicsView3D")],m);const Ta=m;function Gt(t){return"pointData"in t}function O(t){return"geometryBuffer"in t&&t.geometryBuffer!==null}function Pt(t,e,i){const r=e.attributeInfo;if((r==null?void 0:r.loadedAttributes)==null||r.attributeData==null)return!1;let o=!1;for(const{name:s}of r.loadedAttributes)if(r.attributeData[s]){const a=M(r.attributeData[s],i);a!==t.attributes[s]&&(t.attributes[s]=a,o=!0)}return o}function D(t){const e=t.attributeInfo,i=t.node.index;if((e==null?void 0:e.loadedAttributes)!=null&&e.attributeData!=null)for(let r=0;r<t.graphics.length;r++){const o=t.graphics[r];if(o.nodeIndex===i){o.attributes||(o.attributes={});for(const{name:s}of e.loadedAttributes)e.attributeData[s]&&(o.attributes[s]=M(e.attributeData[s],r))}}}function Rt(t,e){return t.xmin-=e,t.ymin-=e,t.xmax+=e,t.ymax+=e,t.zmin!=null&&t.zmax!=null&&(t.zmin-=e,t.zmax+=e),t.mmin!=null&&t.mmax!=null&&(t.mmin-=e,t.mmax+=e),t}const $t={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},I=k(),_={graphic:null,property:null,oldValue:null,newValue:null};export{Ta as default};
