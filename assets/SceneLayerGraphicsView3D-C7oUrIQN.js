const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./I3STreeDebugger-CvQj4dpf.js","./Accessor-BHnuXKD2.js","./mat4-Fi6iAz29.js","./vec3f64-BLpZdpfb.js","./common-DQOJ18NT.js","./mat4f64-Dk4dwAN8.js","./vec32-Dvg_eL9J.js","./Polyline-BmuD2-ZN.js","./writer-B2bQV2uU.js","./Extent-CBBGeHb-.js","./Point-XGrwlf63.js","./cast-BA_-jlhc.js","./index-tefRSezt.js","./index-Cx51aysm.css","./JSONSupport-CGdeqxpk.js","./mathUtils-DV9iOXpW.js","./projectBuffer-DOU0xvVi.js","./geodesicConstants-yASAK_zX.js","./TileTreeDebugger-BY09t_ML.js","./Color-gncXBiLc.js","./colorUtils-Rxh2V3ai.js","./Graphic-CFXUQZlS.js","./Clonable-DvJsj5LF.js","./reactiveUtils-BR0C1Kq4.js","./Evented-DCWccWGU.js","./SimpleObservable-7oieNGD8.js","./opacityUtils-CSd4XoR2.js","./Promise-CmQqe-ke.js","./enumeration-Cr5WIZs4.js","./ActionToggle-__-l4AdQ.js","./Identifiable-BrT7zvUW.js","./jsonUtils-Cu7OBRmN.js","./typeUtils-BSg8Y507.js","./TextSymbol-BQ_NW9Xo.js","./screenUtils-_ZIvrt5o.js","./collectionUtils-CbaToa73.js","./Portal-CTRRujjZ.js","./aaBoundingBox-CeBivBRq.js"])))=>i.map(i=>d[i]);
import{_ as V}from"./index-tefRSezt.js";import{b7 as H,b5 as j,N as y,B as w,aR as F,aL as Q,r as u,m as c,a as q}from"./Accessor-BHnuXKD2.js";import{i as T}from"./memoryEstimations-5gFNwkKK.js";import{P as N,d as U}from"./reactiveUtils-BR0C1Kq4.js";import{o as z}from"./vec32-Dvg_eL9J.js";import{_ as B,n as k}from"./vec3f64-BLpZdpfb.js";import{o as S}from"./projectBuffer-DOU0xvVi.js";import{n as W,e as K}from"./projectVectorToVector-dS8io47t.js";import{e as Z,i as Y}from"./Extent-CBBGeHb-.js";import{t as A,e as J}from"./aaBoundingBox-CeBivBRq.js";import{o as X}from"./projection-B2I9Bzj_.js";import{o as ee}from"./LayerConstants-B33OP6sh.js";import{I as te}from"./dehydratedFeatures-Nwhn-hep.js";import{c as re}from"./hydratedFeatures-BVVSs98j.js";import{A as G,K as ie}from"./I3SOverrides-CzBNyVO4.js";import{d as oe}from"./FeatureFilter-DEE1jTWq.js";import{b as $}from"./Query-DCBIeen2.js";import{c as se}from"./basemapUtils-DQr5T1wn.js";import{h as ae}from"./WorkerHandle-B2QLNs3X.js";import{l as ne}from"./LayerView3D-dAX18iJt.js";import{D as pe,p as de,e as le}from"./Graphics3DFeatureProcessor-DNb8x8ij.js";import{a as he,s as me,b as ue,c as ce,i as ge,w as _e}from"./SceneLayerViewRequiredFields-ByoQZgAi.js";import{i as fe}from"./Evented-DCWccWGU.js";import{X as ye,e as be,k as ve,A as Ie,Q as M}from"./I3SUtil-nzJI4wHN.js";import{u as xe,t as Ee}from"./TemporalSceneLayerView-B3wLL0v7.js";import{t as we}from"./LineCallout.glsl-BFpkOc4i.js";import{i as Ne}from"./PopupSceneLayerView-BHOZSW5P.js";import{t as C}from"./Material-Ba8x5bbY.js";import{J as Ce}from"./orientedBoundingBox-9z4w3ZAL.js";import{t as Oe}from"./ShadowCastAccumulate.glsl-7ziGQBCy.js";import{s as De}from"./Attribute-B-NAci_J.js";import{C as Fe}from"./RibbonLine.glsl-D3IEIaDR.js";import{u as Se}from"./popupUtils-Bp0XPfzq.js";import{c as Ae}from"./HighlightDefaults-ESbuT2uR.js";import{g as Ge}from"./Scheduler-B_GuBefw.js";import"./SimpleObservable-7oieNGD8.js";import"./common-DQOJ18NT.js";import"./mathUtils-DV9iOXpW.js";import"./Point-XGrwlf63.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./writer-B2bQV2uU.js";import"./geodesicConstants-yASAK_zX.js";import"./Polyline-BmuD2-ZN.js";import"./projectPointToVector-BS0u8fq6.js";import"./quantizationUtils-2Az-xHPA.js";import"./typeUtils-BSg8Y507.js";import"./Field-Cyk7Ur5d.js";import"./enumeration-Cr5WIZs4.js";import"./fieldType-L-VlbZqy.js";import"./Graphic-CFXUQZlS.js";import"./Clonable-DvJsj5LF.js";import"./opacityUtils-CSd4XoR2.js";import"./Promise-CmQqe-ke.js";import"./Color-gncXBiLc.js";import"./colorUtils-Rxh2V3ai.js";import"./ActionToggle-__-l4AdQ.js";import"./Identifiable-BrT7zvUW.js";import"./jsonUtils-Cu7OBRmN.js";import"./TextSymbol-BQ_NW9Xo.js";import"./screenUtils-_ZIvrt5o.js";import"./collectionUtils-CbaToa73.js";import"./Portal-CTRRujjZ.js";import"./projectBoundingRect-BA_jRNoI.js";import"./ViewingMode-Dodu7ZZk.js";import"./MemCache-CDoaVBHf.js";import"./uuid-Cl5lrJ4c.js";import"./mat3-CR8GKnhD.js";import"./mat3f64-BBpwCtoL.js";import"./RenderTexture-ubDviEW5.js";import"./meshVertexSpaceUtils-SW0WEjNN.js";import"./MeshLocalVertexSpace-C0YDTRex.js";import"./sphere-DQxj5tsv.js";import"./mat4-Fi6iAz29.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./plane-4dpuo6-e.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-CCm9z-pX.js";import"./vec2f64-Dy6m9Nrb.js";import"./mathUtils-B9R7G-2c.js";import"./resourceUtils-SMgkqOp7.js";import"./basicInterfaces-CZwQPxTp.js";import"./FloatArray-BCfeX8wo.js";import"./BindType-BBwFZqyN.js";import"./Matrix3PassUniform-Bhi2fM3C.js";import"./Texture-D-SqNa4i.js";import"./signal-DSa0yokC.js";import"./enums-D9v74xTE.js";import"./getDataTypeBytes-BTGR5GyG.js";import"./renderState-e7QeQoUO.js";import"./Indices-Db9lERgy.js";import"./InterleavedLayout-Dvj-Snan.js";import"./BufferView-_QDXRCew.js";import"./vec2-maR1OrZI.js";import"./types-D0PSWh4d.js";import"./triangle-D_E6eTS3.js";import"./lineSegment-C-CDF7QX.js";import"./VertexAttribute-Cq4MnHjR.js";import"./ShaderTechniqueConfiguration-YrUOztAU.js";import"./NoParameters-t-PuNrgq.js";import"./glsl-BH37Aalp.js";import"./lengthUtils-DjJgJFRg.js";import"./requestImageUtils-Brn0e8z8.js";import"./TextureFormat-1mYWTFa-.js";import"./DefaultMaterial-B5sYRDQR.js";import"./NormalAttribute.glsl-BPQl43kJ.js";import"./SceneLighting-fZH2UQ_L.js";import"./GLTextureMaterial-BXvkeRxQ.js";import"./DefaultBufferWriter-D4XUxbP-.js";import"./verticalOffsetUtils-CUH6QZ7-.js";import"./VertexColor.glsl-C67vI27I.js";import"./Matrix3DrawUniform-B_gSHO7v.js";import"./Matrix4PassUniform-LFIUaE9i.js";import"./doublePrecisionUtils-B0owpBza.js";import"./VerticalOffset.glsl-0YVQE7vQ.js";import"./Matrix4sPassUniform--uPzDbTP.js";import"./Float2PassUniform-Blij1ug3.js";import"./BooleanBindUniform-xvVHJCDz.js";import"./ShaderBuilder-DV1s2efh.js";import"./CameraSpace.glsl-BZ4Eapt3.js";import"./I3SNode-C58UWnty.js";import"./ElevationRange-BrgM1moX.js";import"./I3SBinaryReader-BTB-H69N.js";import"./colorUtils-BAowQmkN.js";import"./spatialReferenceEllipsoidUtils-DM073JUd.js";import"./Octree-B-jwmuW2.js";import"./ElevationContext-jcnAn7VT.js";import"./computeTranslationToOriginAndRotation-BT43Xu5d.js";import"./dehydratedFeatureUtils-1rrRm6hF.js";import"./ElevationProvider-aS5xrHHy.js";import"./unitConversionUtils-C4AR5obr.js";import"./ReactiveSet-CoXPgSt3.js";import"./intl-Do3GEEJ7.js";import"./featureQueryAll-xezK3WCp.js";import"./TimeExtent-J5qnUFx_.js";import"./timeUtils-D2X862bk.js";import"./FullTextSearch-BWm_kPUE.js";import"./utils-DYurMneM.js";import"./mat4f32-DcsiF_Rp.js";import"./basemapDefinitions-BmB40s1J.js";import"./workers-D8Q3pEzK.js";import"./Queue-BOnccek2.js";import"./heightModelInfoUtils-CMg1cdju.js";import"./HeightModelInfo-B3GZyQFz.js";import"./hash-CcEbRgUF.js";import"./diffUtils-CMkuJvD2.js";import"./UpdatingHandles-ptqz1ck8.js";import"./GridLocalOriginFactory-BvhZ_UoU.js";import"./Graphics3DScaleVisibility-CBgqCNfE.js";import"./Layer-C9uQlTBT.js";import"./UniqueValueRenderer-Cri3tgP5.js";import"./commonProperties-bGHL1a5M.js";import"./colorRamps-Dkx8zIVn.js";import"./SizeVariable-IzD1bP2e.js";import"./visualVariableUtils-Bp9QCb8E.js";import"./ColorStop-CDpeFWOz.js";import"./jsonUtils-Dzgxk9pw.js";import"./layerUtils-dJgsXxkC.js";import"./defaults-Dwxdhopq.js";import"./defaultsJSON-GKolV7NZ.js";import"./RendererLegendOptions-mgfHoilI.js";import"./styleUtils-BB-zx7mT.js";import"./rendererConversion-BVZEj5DN.js";import"./OptimizedFeature-DcMLlxvB.js";import"./OptimizedGeometry-7IxBWtHr.js";import"./optimizedFeatureQueryEngineAdapter-Dffp2J7r.js";import"./graphicUtils-Daa6cjYT.js";import"./PooledRBush-BHbZLwLz.js";import"./quickselect-QQC62dOK.js";import"./Intersector-DqUGp7Vs.js";import"./intersectorUtils-l6zkk4nF.js";import"./boundedPlane-Dyz2ub5d.js";import"./InputManager-Bs9UE-jw.js";import"./layerViewUtils-tkZ5z_iY.js";import"./Graphics3DObjectStates-BvuBUaFM.js";import"./attributeUtils-Dc8--CBJ.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./QueryEngine-BJMZSAnZ.js";import"./featureConversionUtils-DpmsPUmt.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./WhereClauseCache-CrfkeLux.js";import"./LRUCache-DS2O1kTf.js";import"./WhereClause-diW5rNp6.js";import"./TimeOnly-yGYcAQQJ.js";import"./timeSupport-Cvj97qZO.js";import"./queryUtils-DBeaQ3x_.js";import"./normalizeUtils-XRAPXbWa.js";import"./normalizeUtilsCommon-D0zPTJCj.js";import"./utils-Cy8wFNQo.js";import"./utils-CkSELPnj.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-DZTubngj.js";import"./utils-D8exU0T6.js";import"./heatmapUtils-DA7NmY3d.js";import"./utils-DLmnG8WZ.js";import"./timeZoneUtils-COos5xIr.js";import"./utils-B8VMZhYy.js";import"./ClassBreaksDefinition-DvZJqFCP.js";import"./SnappingCandidate-O5eRSE6e.js";import"./FixedIntervalBinParameters-uigAmvtd.js";import"./NormalizationBinParametersMixin-D6iHLB7I.js";import"./FieldsIndex-DFdVonga.js";import"./FeatureSet-DpCN730g.js";import"./highlightUtils-BEMEvC9z.js";import"./LayerView-DF8EqCYi.js";import"./edgeUtils-52Urp6s4.js";import"./floatRGBA-CR2j2c7-.js";import"./RgbaFloatEncoding.glsl-_io2eW3M.js";import"./Float4DrawUniform-C_Hqa-pI.js";import"./timeSupport-WJxqhq3S.js";import"./utils-D02V2_jH.js";import"./Version-9k2AOv05.js";import"./vec2f32-BbH2jxlN.js";import"./webStyleAcceptedFormats-CG7ZQ6BV.js";import"./GeometryUtil-vHI0hYMT.js";import"./vec3f32-nZdmKIgz.js";import"./RealisticTree.glsl-BIYA2y1x.js";import"./Intersector-DPK4WnQE.js";import"./HUDRenderStyle-BhGvVxgm.js";import"./HUDVisibility.glsl-DSeZY4v-.js";import"./quat-4pa1e6ds.js";import"./Camera-DJtV7zYb.js";import"./Cyclical-CPiNl4ru.js";import"./Viewpoint-Cv8Otrne.js";import"./jsxFactory-CLjKarlq.js";import"./GraphicsCollection-CkliHSk1.js";import"./RenderCoordsHelper-BbefYyBA.js";import"./projectVectorToPoint-d6Mr4zvQ.js";import"./scaleUtils-CfLu-sg1.js";import"./DefaultUI-DqLHkAzt.js";import"./Basemap-BHdJ6wQH.js";import"./loadAll-Do8S8AWH.js";import"./PortalItem-CXk7DqVv.js";import"./writeUtils-C3ZSK02Z.js";import"./groundInstanceUtils-Ben03ZCf.js";import"./CollectionFlattener-B9CFCLSp.js";import"./editableLayers-BZGjz8nI.js";import"./catalogUtils-CK4eMvD1.js";import"./basemapEnsureType-BVU7UGJp.js";import"./TablesMixin-BzMj7HDl.js";import"./ReactiveMap-Dwhwbx9R.js";import"./selectionUtils-DYi6daQO.js";import"./ViewEvents-Hl5AOQnu.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./screenUtils-DyhV4TAA.js";import"./a11yUtils-CSYUX1kC.js";import"./unitBezier-B1N-tmtC.js";import"./imageUtils-brik-GLm.js";import"./capabilities-DwlKKScG.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-rIBXQ52V.js";import"./CompassViewModel-BAJa4WdS.js";import"./GoTo-BsXOAO95.js";import"./ZoomViewModel-BZXEbLSs.js";import"./NormalUtils.glsl-CV524hT5.js";import"./earcut-Lltz9D9k.js";import"./vec3-Bn81gjoR.js";import"./triangulationUtils-ChyeOnqC.js";import"./deduplicate-8uOXlcvp.js";import"./OverlayCompositing.glsl-BbJKjUZQ.js";import"./RenderCamera-BovI3JTe.js";import"./axisAngleDegrees-8Sw4vC28.js";import"./weather-DtiKeY2t.js";import"./RenderPlugin-B2sz29jJ.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./VertexArrayObject-DcVjXzZo.js";import"./BufferObject-CIl3vJtA.js";import"./NestedMap-GuqgquCN.js";import"./Normals-OOhKYumi.js";import"./fontUtils-D0SfAiSy.js";import"./cameraUtils-D51h-KGF.js";import"./earthUtils-5Ip67eD0.js";import"./spatialReferenceSupport-CJqi4Nvp.js";import"./ElevationSamplerData-ejt2NMnl.js";import"./terrainUtils-NB9gChf5.js";import"./TileInfo-CRfZy5zq.js";import"./TileKey-DZd6gJy7.js";import"./FramebufferObject-DHwDHMWe.js";import"./glUtil-D0YUa0ow.js";import"./ShadowCastVisualizeTechniqueConfiguration-WdqoNZsk.js";import"./SunCalc-uwgdo0BB.js";import"./VirtualLighting-CTSkZQzH.js";import"./ray-D3Okb4cY.js";import"./RenderFeature-3I21ZjJq.js";import"./unitFormatUtils-Dbksq3U5.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./quantityUtils-1LswOhxZ.js";import"./ZoomMomentumEstimator-Igei2Npb.js";import"./HUDMaterial-DRUv4rua.js";import"./labelFormatUtils-B--9rEVY.js";import"./labelUtils-Dq8OkaT-.js";import"./DepthRange-C25RnOB3.js";import"./elevationInfoUtils-RSZ4Logn.js";import"./hitTest-CblPROa1.js";import"./intersectorUtilsConversions-CZnn6t-z.js";import"./hitTestSelectUtils-UXJPjatw.js";import"./DefaultLoadingContext-b8vwa5ZD.js";import"./wosrLoader-F8PxTYxV.js";import"./DrawParameters-C0gywgJQ.js";import"./TileStrategy-DlGVvP4C.js";import"./TileKey-BtGhNUzq.js";import"./ScheduledQueueProcessor-DfrR8pp0.js";import"./RenderableTile-Ewnw5ULl.js";import"./config-MDUrh2eL.js";import"./StyleDefinition-DxJzQnGW.js";import"./enums-BJSSbDkD.js";import"./enums-BRzLM11V.js";import"./GeometryUtils-B5FJlfZD.js";import"./DefaultVertexAttributeLayouts-DMsCtEEh.js";import"./DisplayObject-S19ALweP.js";import"./resources-CcZcI9oR.js";import"./vec33-KumQEj7U.js";import"./ShaderTechniqueRepository-CuJwDr2t.js";import"./Blit-D5AxBSxC.js";import"./testSVGPremultipliedAlpha-CpxLiQJP.js";import"./RenderingContext-BkhmhK8E.js";import"./ProgramCache-D9MJNX7j.js";import"./Program-DD6La1z3.js";import"./makeScheduleFunction-CggzEh3c.js";import"./sdfPrimitives-B8Jbwvqs.js";import"./debugFlags-ZrDyTcDc.js";class P extends ae{constructor(t){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:i=>[i.geometryBuffer]},t,{hasInitialize:!0})}}class $e extends fe{constructor(t,i){super(),this._updateAndCompare=t,this._notifyUpdated=i,this._nodes=new Map,this._graphics=new Map,this._duplicates=new Map}clear(){if(this._graphics.size>0){const t=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:t})}this._nodes.clear()}get length(){return this._graphics.size}get(t){return this._graphics.get(t)}getNode(t){return this._nodes.get(t)}hasNode(t){return this._nodes.has(t)}nodes(){return this._nodes.values()}addNode(t,i){this._nodes.set(t,i);const r=i.graphics;if(r.length===0)return;const o=new Set;for(let a=0;a<r.length;a++){const n=r[a],p=n.objectId,h=this._graphics.get(p);if(h){o.add(p),n!==h&&(r[a]=h);const l=this._duplicates.get(p);l?l.push(t):this._duplicates.set(p,[h.nodeIndex,t])}else n.nodeIndex=t,this._graphics.set(p,n)}o.size&&this._updateForeignGraphics(i);const s=o.size>0?r.filter(a=>!o.has(a.objectId)):r;s.length>0&&this.emit("change",{added:s,removed:[]})}removeNode(t){const i=this._nodes.get(t);if(!i)return;this._nodes.delete(t);const r=new Set,o=[];for(const s of i.graphics){const a=s.objectId,n=this._graphics.get(a);if(!n)continue;const p=this._duplicates.get(a);if(p){const h=p.indexOf(t);if(h===-1)continue;if(p.splice(h,1),n.nodeIndex===t){let l=this.getNode(p[0]);for(let d=1;d<p.length;d++){const g=this.getNode(p[d]);(l==null||g!=null&&g.node.level>l.node.level)&&(l=g)}l!=null&&r.add(l)}p.length===1&&this._duplicates.delete(a)}else this._graphics.delete(a),o.push(s)}o.length>0&&this.emit("change",{added:[],removed:o}),r.forEach(s=>this._updateForeignGraphics(s))}_updateForeignGraphics(t){const i=[],r=t.node.index,o=t.node.level;let s=0;for(;s<t.graphics.length;){const a=t.graphics[s].nodeIndex;if(a===r){s++;continue}let n=1;for(;s+n<t.graphics.length&&t.graphics[s+n].nodeIndex===a;)n++;const p=this.getNode(a);if(p!=null&&p.node.level>o)s+=n;else{for(let h=s;h<s+n;h++){const l=t.graphics[h];l.nodeIndex=r,this._updateAndCompare(l,t,h)&&i.push(l)}s+=n}}i.length>0&&this._notifyUpdated(i)}toArray(){return Array.from(this._graphics.values())}find(t){return H(this._graphics,t)}some(t){return j(this._graphics,t)}forEach(t){this._graphics.forEach(i=>t(i))}forEachNode(t){this._nodes.forEach((i,r)=>t(i,r))}get nodeCount(){return this._nodes.size}_checkInvariants(){const t=new Map;this._nodes.forEach((i,r)=>{i.graphics.forEach(o=>{t.set(o.objectId,1+(t.get(o.objectId)??0)),this._duplicates.get(o.objectId)})}),t.forEach((i,r)=>{const o=this._graphics.get(r);if(!o||!this._nodes.get(o.nodeIndex))return;const s=this._duplicates.get(r);s&&s.forEach(a=>{this._nodes.get(a)})})}}const R=ge();class Pe{constructor(t,i,r,o){this.graphics=t,this.featureIds=i,this.attributeInfo=r,this.node=o}get cachedMemory(){return this.graphics.reduce((t,i)=>te(i)+t,T(this.featureIds)+1024)}}let m=class extends xe(Ee(Ne(ne(_e)))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this._pendingEditsQueue=Promise.resolve(),this.loadedGraphics=new $e((e,t,i)=>Me(e,t,i),e=>this.processor.graphicsCore.recreateGraphics(e)),this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}tryRecycleWith(e,t){return e.url===this.layer.url&&this._i3sOverrides.isEmpty?e.load(t).then(()=>{var r;ye(this.layer,e,this._i3sOverrides),this.layer=e,this._i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this._i3sOverrides=new G({view:this.view,layer:e,memoryController:i}),y(this._queryEngine),this._setupQueryEngine(),this.processor.resetObjectStates()}):null}initialize(){var t,i;this.addResolvingPromise(this.layer.indexInfo);const e=(t=this.view.resourceController)==null?void 0:t.memoryController;this._i3sOverrides=new G({view:this.view,layer:this.layer,memoryController:e}),be(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new he({layerView:this}),this._updatingHandles.add(()=>this.layer.rangeInfos,r=>this._rangeInfosChanged(r),N),this._updatingHandles.add(()=>this.layer.renderer,(r,o)=>this._rendererChange(r,o)),this._updatingHandles.add(()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted],()=>this._filterChange()),this.addHandles(U(()=>C.I3S_TREE_SHOW_TILES,r=>{if(r&&!this._treeDebugger){const o=this._controller.crsIndex;V(()=>import("./I3STreeDebugger-CvQj4dpf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]),import.meta.url).then(({I3STreeDebugger:s})=>{!this._treeDebugger&&C.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new s({lv:this,view:this.view,nodeSR:o}))})}else r||!this._treeDebugger||C.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},N)),this._set("processor",new pe({owner:this,preferredUpdatePolicy:Fe.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:r=>this._updateClippingExtent(r)})),(i=this.processor.elevationAlignment)==null||i.events.on("invalidate-elevation",({extent:r,spatialReference:o})=>this._controller.updateElevationChanged(r,o)),this.supportsHeightUnitConversion&&(this._verticalScale=X("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.when()),this._memCache=this.view.resourceController.memoryController.newCache(`psl-${this.uid}`),this._controller=new ie({layerView:this}),ve(this.layer.geometryDefinitions)&&(this._worker=new P(r=>this.view.resourceController.immediate.schedule(r))),this.addHandles(this.layer.on("apply-edits",r=>this._updatingHandles.addPromise(r.result))),this.addHandles(this.layer.on("edits",r=>{const o=this._pendingEditsQueue.then(()=>this._handleEdits(r)).then();this._pendingEditsQueue=o,this._updatingHandles.addPromise(o)})),this.when(()=>{this._setupQueryEngine(),this._updatingHandles.add(()=>this.maximumNumberOfFeatures,r=>this._controller.featureTarget=r,N),this._updatingHandles.add(()=>this.suspended,r=>{r&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=y(this._treeDebugger),this._i3sOverrides=y(this._i3sOverrides),this._set("processor",y(this.processor)),this._controller=y(this._controller),this._queryEngine=y(this._queryEngine),this._worker=y(this._worker),this._memCache=y(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=y(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??1}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get maximumNumberOfFeatures(){var t,i;const e=(i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.displayFeatureLimit;return(e==null?void 0:e.maximumNumberOfFeatures)??0}set maximumNumberOfFeatures(e){e!=null?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var e;return!this.suspended&&!!((e=this._controller)!=null&&e.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,i)=>t-i):null}get lodFactor(){return this.layer.semantic==="Labels"?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}get contentVisible(){var e;return!this.suspended&&!!((e=this._controller)!=null&&e.rootNodeVisible)}get legendEnabled(){var e;return this.contentVisible&&((e=this.i3slayer)==null?void 0:e.legendEnabled)===!0}async whenGraphicAttributes(e,t){return Ie(this.layer,e,this._getObjectIdField(),t,()=>[...this.loadedGraphics.nodes()])}getHit(e){var r;if(!this.loadedGraphics)return null;const t=re(this.loadedGraphics.find(o=>o.uid===e),this.layer),i=this._getObjectIdField();return(r=t==null?void 0:t.attributes)!=null&&r[i]?(t.layer=this.layer,t.sourceLayer=this.layer,{type:"graphic",graphic:t,layer:t.layer}):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}isUpdating(){var e,t,i;return!!((e=this._controller)!=null&&e.updating||(t=this.processor)!=null&&t.updating||(i=this._fieldsHelper)!=null&&i.updating||this.layerFilterUpdating)}highlight(e,t){return this.processor.highlight(e,this.layer.objectIdField,(t==null?void 0:t.name)??Ae)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return me(this._attributeEditingContext,e)}async _decompressBinaryPointData(e,t){const i={geometryBuffer:e.geometryBuffer};this._worker==null&&(this._worker=new P(o=>this.view.resourceController.immediate.schedule(o)));const r=await this._worker.invoke(i,t);if(r==null)throw new Error("Failed to decompress Draco point data");return{positionData:r.positions,featureIds:r.featureIds}}async addNode(e,t,i){var f;if(!O(t)&&!Re(t))throw new Error;if(this.loadedGraphics.hasNode(e.index))return void w.getLogger(this).error("I3S node "+e.id+" already added");const r=this.layer.fullExtent!=null?Le(this.layer.fullExtent.clone(),.5):null,{featureIds:o,pointPositions:s}=O(t)?await this._extractBinaryPointPositions(e,t,i):this._extractLegacyPointPositions(t),a=new Array;this._validatePositions(e,o,s,r,a);const n=this._controller.crsVertex,p=this.view.spatialReference;S(s,n,0,s,p,0,o.length);const h=O(t)?e.level:0,l=this._createGraphics(o,s,e.index,h),d=new Pe(l,o,t.attributeDataInfo,e);if(await this._i3sOverrides.applyAttributeOverrides(d.featureIds,t.attributeDataInfo,i),e.numFeatures=d.graphics.length,this._updateNodeMemory(e),D(d),a.length>0&&(this._computeObb(e,a,n),this._controller.updateVisibility(e.index)),!this._controller.isGeometryVisible(e))return void this._cacheNodeData(d);if(this._verticalScale!=null)for(const b of d.graphics)this._verticalScale(b.geometry);const g=this.view._stage.renderView.olidRenderHelper;if(g){const b=se(this.view.map,this.layer.uid);for(let x=0;x<d.featureIds.length;x++){const E=d.featureIds[x];g.setUidToObjectAndLayerId(E,d.graphics[x].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled&&!b&&Se(this.layer,(f=this.view.popup)==null?void 0:f.defaultPopupTemplateEnabled),d.node.resources.attributes,x)}}this.loadedGraphics.addNode(e.index,d),this._controller.updateLoadStatus(e.index,!0),this._filterNode(d),this._treeDebugger&&this._treeDebugger.update()}_computeObb(e,t,i){const r=this._controller.crsIndex,o=r.isGeographic?this.view.renderSpatialReference:r;S(t,i,0,t,o,0),e.serviceObbInIndexSR=Ce(new De(t,3)),r.isGeographic&&(W(e.serviceObbInIndexSR.center,o,I,r),e.serviceObbInIndexSR.center=I)}isNodeLoaded(e){return this.loadedGraphics.hasNode(e)}isNodeReloading(){return!1}updateNodeState(){}async _extractBinaryPointPositions(e,t,i){const r=await this._decompressBinaryPointData(t,i),o=r.positionData,s=3,a=o.length/s,n=A(3*a),p=e.serviceObbInIndexSR!=null?e.serviceObbInIndexSR.center:B,h=Math.abs(p[2])*2**-20;for(let l=0;l<a;l++){const d=l*s;n[d]=o[d]+p[0],n[d+1]=o[d+1]+p[1],n[d+2]=o[d+2]+p[2],Math.abs(n[d+2])<h&&(n[d+2]=0)}return{featureIds:r.featureIds?J(r.featureIds):[],pointPositions:n}}_extractLegacyPointPositions(e){var o,s;const t=e.pointData.length,i=A(3*t),r=new Array;for(let a=0;a<t;a++){const n=e.pointData[a],p=n.featureDataPosition,h=p.length,l=((o=n.geometries)==null?void 0:o[0])??Ve[h],d=n.featureIds[0];if(l.type!=="Embedded"||l.params.type!=="points"||h<2||h>3)continue;const g=((s=l.params.vertexAttributes)==null?void 0:s.position)??[0,0,0],f=3*r.length;i[f]=p[0]+g[0],i[f+1]=p[1]+g[1],i[f+2]=h===3?p[2]+g[2]:NaN,r.push(d)}return{featureIds:r,pointPositions:i}}_validatePositions(e,t,i,r,o){if(r==null&&e.serviceObbInIndexSR)return;const s=t.length,a=3;for(let n=0;n<s;n++){const p=n*a;z(I,i[p],i[p+1],i[p+2]);const h=!Number.isNaN(i[2]);r==null||(h?Z(r,I):Y(r,I))||(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&w.getLogger(this).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&w.getLogger(this).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),e.serviceObbInIndexSR||o.push(I[0],I[1],I[2])}}_createGraphics(e,t,i,r){const o=e.length,s=3,a=this._getObjectIdField(),n=this.processor.graphicsCore,p=new Array,h=this.view.spatialReference;for(let l=0;l<o;l++){const d=e[l],g={};d!=null&&(g[a]=d);const f=d??F(),b=l*s,x=isNaN(t[b+2])?void 0:t[b+2],E=K(t[b],t[b+1],x,h),v=this.loadedGraphics.get(f);if(v!=null)(v.level==null||v.level<r)&&(_.property="geometry",_.graphic=v,_.oldValue=v.geometry,_.newValue=E,v.geometry=E,v.level=r,n.graphicUpdateHandler(_)),p.push(v);else{const L=F();p.push({objectId:f,uid:L,geometry:E,attributes:g,visible:!0,nodeIndex:i,level:r})}}return p}_updateNodeMemory(e){e.memory=4096+(e.numFeatures!=null?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){this._memCache.put(this._getMemCacheKey(e.node),e)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this.loadedGraphics.forEachNode((e,t)=>{if(e){const i=e.node;this._updateNodeMemory(i),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)}),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this.loadedGraphics.getNode(e);return t==null?null:(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeNode(e),this._treeDebugger&&this._treeDebugger.update(),t)}async loadCachedNodeData(e){var t;return(t=this._memCache)==null?void 0:t.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,i,r){this.loadedGraphics.hasNode(e.index)?w.getLogger(this).error("I3S node "+e.id+" already added"):(await this._i3sOverrides.applyAttributeOverrides(t.featureIds,i,r),t.attributeInfo=i,this.loadedGraphics.addNode(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),D(t),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this.loadedGraphics.forEachNode(t=>e.push(t.node.id)),e.sort()}getVisibleNodes(){const e=new Array;return this.loadedGraphics.forEachNode(t=>e.push(t.node)),e}getLoadedNodeIndices(e){this.loadedGraphics.forEachNode((t,i)=>e.push(i))}getLoadedAttributes(e){const t=this.loadedGraphics.getNode(e);if((t==null?void 0:t.attributeInfo)!=null)return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this.loadedGraphics.getNode(e);if((t==null?void 0:t.attributeInfo)!=null)return t.attributeInfo.attributeData}_setAttributeData(e,t){const i=this.loadedGraphics.getNode(e);(i==null?void 0:i.attributeInfo)!=null&&(i.attributeInfo.attributeData=t,this._attributeValuesChanged(i))}async updateAttributes(e,t,i){const r=this.loadedGraphics.getNode(e);r!=null&&(await this._i3sOverrides.applyAttributeOverrides(r.featureIds,t,i),r.attributeInfo=t,this._attributeValuesChanged(r))}_attributeValuesChanged(e){D(e),this._filterNode(e);const{processor:t}=this,{graphicsCore:i}=t;if(i.labelsEnabled){const r=e.node.index,o=new Array;e.graphics.forEach(s=>s.nodeIndex===r&&o.push(s.uid)),i.updateLabelingInfo(o)}t.refreshFilter()}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||ee}_getGlobalIdField(){var e;return(e=this.layer.associatedLayer)==null?void 0:e.globalIdField}async _rendererChange(e,t){const{layer:{fieldsIndex:i}}=this,r=new Set;let o,s;e?(await e.collectRequiredFields(r,i),o=Array.from(r).sort()):o=[],r.clear(),t?(await t.collectRequiredFields(r,i),s=Array.from(r).sort()):s=[],o.length===s.length&&o.every((a,n)=>o[n]===s[n])||this._reloadAllNodes()}_rangeInfosChanged(e){e!=null&&e.length>0&&w.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this.loadedGraphics.forEachNode(e=>this._filterNode(e))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,i=this._excludeObjectIdsSorted,r=this._getObjectIdField();for(const o of e.graphics){const s=o.visible,a=!t||this._evaluateClause(t,o),n=i==null||Q(i,o.attributes[r])<0;o.visible=a&&n,s!==o.visible&&(_.graphic=o,_.property="visible",_.oldValue=s,_.newValue=o.visible,this.processor.graphicsCore.graphicUpdateHandler(_))}}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(e):new $(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t==null?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():$.from(e))}_setupQueryEngine(){const{layer:e,view:t,hasM:i,hasZ:r}=this,{spatialReference:o,resourceController:s}=t,a=new le(o,e,s,()=>this.processor.featureStore,r,i);this._queryEngine=new de({context:a,priority:Ge.FEATURE_QUERY_ENGINE})}get usedMemory(){var e,t;return((t=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:t.usedMemory)??0}get unloadedMemory(){var e,t,i;return .8*((((e=this._controller)==null?void 0:e.unloadedMemoryEstimate)??0)+(((i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.unprocessedMemoryEstimate)??0))}get ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}async _handleEdits(e){const t=this._attributeEditingContext,i=await ue(t,e);ce(t,i)}get _attributeEditingContext(){const e=this._getObjectIdField(),t=this._getGlobalIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,globalIdField:t,forEachNode:i=>this.loadedGraphics.forEachNode(r=>i(r.node,r.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this._i3sOverrides,getAttributeData:i=>this.getAttributeData(i),setAttributeData:(i,r,o)=>{this._setAttributeData(i,r);const s=this.loadedGraphics.getNode(i);if(o!=null){const a=this.loadedGraphics.get(o.attributes[e]);a!=null&&this.processor.graphicsCore.recreateGraphics([a])}else s!=null&&this.processor.graphicsCore.recreateGraphics(s.graphics)},clearMemCache:()=>{}}}get performanceInfo(){return new we(this.usedMemory,this.loadedGraphics.length,-1,this.maximumNumberOfFeatures,this.loadedGraphics.nodeCount,this.processor.graphicsCore.performanceInfo)}get test(){}};u([c()],m.prototype,"processor",void 0),u([c({type:oe})],m.prototype,"filter",void 0),u([c()],m.prototype,"loadedGraphics",void 0),u([c()],m.prototype,"i3slayer",null),u([c()],m.prototype,"_controller",void 0),u([c()],m.prototype,"updating",void 0),u([c()],m.prototype,"suspended",void 0),u([c()],m.prototype,"holeFilling",void 0),u([c(Oe)],m.prototype,"updatingProgress",void 0),u([c()],m.prototype,"updatingProgressValue",null),u([c(R.requiredFields)],m.prototype,"requiredFields",null),u([c(R.availableFields)],m.prototype,"availableFields",void 0),u([c()],m.prototype,"_fieldsHelper",void 0),u([c({type:Number})],m.prototype,"maximumNumberOfFeatures",null),u([c({readOnly:!0})],m.prototype,"maximumNumberOfFeaturesExceeded",null),u([c()],m.prototype,"_excludeObjectIdsSorted",null),u([c({readOnly:!0})],m.prototype,"lodFactor",null),u([c({readOnly:!0})],m.prototype,"hasM",null),u([c({readOnly:!0})],m.prototype,"hasZ",null),u([c()],m.prototype,"contentVisible",null),u([c({readOnly:!0})],m.prototype,"legendEnabled",null),m=u([q("esri.views.3d.layers.SceneLayerGraphicsView3D")],m);const ja=m;function Re(e){return"pointData"in e}function O(e){return"geometryBuffer"in e&&e.geometryBuffer!==null}function Me(e,t,i){const r=t.attributeInfo;if((r==null?void 0:r.loadedAttributes)==null||r.attributeData==null)return!1;let o=!1;for(const{name:s}of r.loadedAttributes)if(r.attributeData[s]){const a=M(r.attributeData[s],i);a!==e.attributes[s]&&(e.attributes[s]=a,o=!0)}return o}function D(e){const t=e.attributeInfo,i=e.node.index;if((t==null?void 0:t.loadedAttributes)!=null&&t.attributeData!=null)for(let r=0;r<e.graphics.length;r++){const o=e.graphics[r];if(o.nodeIndex===i){o.attributes||(o.attributes={});for(const{name:s}of t.loadedAttributes)t.attributeData[s]&&(o.attributes[s]=M(t.attributeData[s],r))}}}function Le(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.zmin!=null&&e.zmax!=null&&(e.zmin-=t,e.zmax+=t),e.mmin!=null&&e.mmax!=null&&(e.mmin-=t,e.mmax+=t),e}const Ve={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},I=k(),_={graphic:null,property:null,oldValue:null,newValue:null};export{ja as default};
