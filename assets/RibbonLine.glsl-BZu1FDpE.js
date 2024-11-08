import{n as Ve,c as et,H as Yt}from"./mat4-GpOFENPA.js";import{e as Re,o as Zt}from"./mat4f64-Dk4dwAN8.js";import{n as x,r as Be}from"./vec3f64-BLpZdpfb.js";import{C as Xt}from"./computeTranslationToOriginAndRotation-Q27G6TBL.js";import{n as ke}from"./projectBuffer-Bs7GwaPY.js";import{t as Qt}from"./dehydratedFeatureUtils-B--Sgpdi.js";import{t as Kt,a as _e}from"./ElevationProvider-C95wyCKc.js";import{e as h,E as ei}from"./VertexAttribute-Cq4MnHjR.js";import{n as ti,e as ii}from"./unitConversionUtils-BMfW9yAe.js";import{n as Ot}from"./subclass-BZA_h8Db.js";import{s as ri,t as tt,W as ni,q as si,a as At}from"./Accessor-BLX9ikPh.js";import{u as ai}from"./hydratedFeatures-DBKLr8hT.js";import{i as oi}from"./fieldUtils-tmQlKvWo.js";import{I as li,E as G,p as qe,o as H,u as Ce,H as ci,s as X,c as pe,P as it,g as Ie,r as di}from"./vec32-Dvg_eL9J.js";import{s as pi,n as hi,N as ui,r as fi}from"./vec4f64-o2zAXfmz.js";import{t as mi}from"./orientedBoundingBox-DOAJUK5g.js";import{r as Rt,e as Le,n as vi,p as se}from"./Material-_xx7OZxD.js";import{ai as gi,aj as Si,E as xt,k as Ct,F as Dt,ak as rt,S as _i,f as Ti,w as Ye,b as bi,e as xe,o as yi,a2 as Ei,V as Oi,d as Ai,c as Ri,u as xi,P as Ci,q as Di,r as Li,h as Pi,j as $i,x as nt,y as Ii,a9 as wi,z as Ni,B as Ui,aa as st,ab as at,ac as zi,D as Fi,al as ot,am as ji,an as Mi,ao as Wi,ap as Vi,A as k,m as Bi,aq as ki,p as Gi}from"./Texture-Fac_8AOC.js";import{U as lt,E as Hi}from"./sphere-C77djCO6.js";import{m as Ji}from"./mathUtils-BG-eq9fO.js";import{t as qi,B as Te,g as we,c as ct}from"./renderState-DQLu6AJX.js";import{s as Yi,m as Zi}from"./Util-BIfApRF5.js";import{n as Xi,r as Qi,q as Ki}from"./sdfPrimitives-CUWZbMRe.js";import{o as er}from"./Evented-BHRw9x22.js";import{Y as tr}from"./Octree-C8d4sqjv.js";import{r as Ne}from"./mathUtils-C4_ghTv4.js";import{y as ae}from"./screenUtils-_ZIvrt5o.js";import{r as ir}from"./vec2-maR1OrZI.js";import{j as be}from"./frustum-CQrOepbv.js";import{v as Lt,M as rr,b as Ue,B as nr}from"./lineSegment-D7sKPPYf.js";import{M as Pe,p as ye,V,O as dt}from"./plane-IENfwZlB.js";import{H as sr}from"./InterleavedLayout-e-di2fxs.js";import{o as M,h as Ee,i as ar,n as J,p as or,q as lr,C as cr,v as pt,w as dr,e as Ge}from"./Matrix3DrawUniform-CiBFaSz6.js";import{o as he}from"./AlphaCutoff-UcccL64p.js";import{_ as pr}from"./index-Bh2oEzTI.js";import{G as Pt,D as $t,E as ht,f as Oe}from"./enums-D9v74xTE.js";import"./BindType-BmZEZMMh.js";import{o as p}from"./interfaces-DDtDqZYj.js";import{t as hr}from"./Float4DrawUniform-N58YDhuZ.js";import{o as ur}from"./floatRGBA-CfH_2xsy.js";import{e as It,m as wt}from"./Texture-Begq2x5n.js";import{s as fr}from"./vec42-YcqnINSP.js";import{r as g}from"./tslib.es6-B3Jf3DVX.js";import{i as S}from"./ShaderTechniqueConfiguration-CBbn2DCi.js";import"./vec2f64-miziP1SN.js";function Kn(t,e,i,r,n,s,l,o,a,c,d){const v=yr[d.mode];let m,f,E=0;if(ke(t,e,i,r,a.spatialReference,n,o))return v!=null&&v.requiresAlignment(d)?(E=v.applyElevationAlignmentBuffer(r,n,s,l,o,a,c,d),m=s,f=l):(m=r,f=n),ke(m,a.spatialReference,f,s,c.spatialReference,l,o)?E:void 0}function Nt(t,e,i,r,n){const s=(Qt(t)?t.z:Kt(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const l=_e(e,t,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=l,void(n.z=l)}case"relative-to-ground":{const l=_e(e,t,"ground")??0,o=i.geometryZWithOffset(s,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"relative-to-scene":{const l=_e(e,t,"scene")??0,o=i.geometryZWithOffset(s,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"absolute-height":{const l=i.geometryZWithOffset(s,r),o=_e(e,t,"ground")??0;return n.verticalDistanceToGround=l-o,n.sampledElevation=o,void(n.z=l)}default:return void(n.z=0)}}function es(t,e,i,r){return Nt(t,e,i,r,oe),oe.z}function ts(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:He.UPDATE:t.onTheGroundChanged}function is(t){return t==="relative-to-ground"||t==="relative-to-scene"}function rs(t){return t!=="absolute-height"}function ns(t,e,i,r,n){Nt(e,i,n,r,oe),mr(t,oe.verticalDistanceToGround);const s=oe.sampledElevation,l=Ve(Er,t.transformation);return Ae[0]=e.x,Ae[1]=e.y,Ae[2]=oe.z,Xt(e.spatialReference,Ae,l,r.spatialReference)?t.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),s}function mr(t,e){for(let i=0;i<t.geometries.length;++i){const r=t.geometries[i].getMutableAttribute(h.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==e&&(r.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],h.CENTEROFFSETANDDISTANCE))}}function vr(t,e,i,r,n,s){let l=0;const o=s.spatialReference;e*=3,r*=3;for(let a=0;a<n;++a){const c=t[e],d=t[e+1],v=t[e+2],m=s.getElevation(c,d,v,o,"ground")??0;l+=m,i[r]=c,i[r+1]=d,i[r+2]=m,e+=3,r+=3}return l/n}function gr(t,e,i,r,n,s,l,o){let a=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,v=s.spatialReference;e*=3,r*=3;for(let m=0;m<n;++m){const f=t[e],E=t[e+1],y=t[e+2],A=s.getElevation(f,E,y,v,"ground")??0;a+=A,i[r]=f,i[r+1]=E,i[r+2]=d==null?y+A+c:A+c,e+=3,r+=3}return a/n}function Sr(t,e,i,r,n,s,l,o){let a=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,v=s.spatialReference;e*=3,r*=3;for(let m=0;m<n;++m){const f=t[e],E=t[e+1],y=t[e+2],A=s.getElevation(f,E,y,v,"scene")??0;a+=A,i[r]=f,i[r+1]=E,i[r+2]=d==null?y+A+c:A+c,e+=3,r+=3}return a/n}function _r(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function Tr(t,e,i,r,n,s,l,o){const a=o.calculateOffsetRenderUnits(l),c=o.featureExpressionInfoContext;e*=3,r*=3;for(let d=0;d<n;++d){const v=t[e],m=t[e+1],f=t[e+2];i[r]=v,i[r+1]=m,i[r+2]=c==null?f+a:a,e+=3,r+=3}return 0}class br{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var He;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(He||(He={}));const yr={"absolute-height":{applyElevationAlignmentBuffer:Tr,requiresAlignment:_r},"on-the-ground":{applyElevationAlignmentBuffer:vr,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:gr,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Sr,requiresAlignment:()=>!0}},Er=Re(),oe=new br,Ae=x(),Or=()=>Ot.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Ar(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}function ss(t){const e=t==null?void 0:t.expression;if(typeof e=="string"){const i=zt(e);if(i!=null)return{cachedResult:i}}return null}async function as(t,e,i,r){const n=t==null?void 0:t.expression;if(typeof n!="string")return null;const s=zt(n);if(s!=null)return{cachedResult:s};const l=await oi();ri(i);const o=l.arcadeUtils,a=o.createSyntaxTree(n);return o.dependsOnView(a)?(r!=null&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:o.createFunction(a),context:o.createExecContext(null,{sr:e}),modules:l}}}function Rr(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function xr(t,e){if(t!=null&&!Ut(t)){if(!e||!t.arcade)return void Or().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=ai(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function Cr(t){if(t!=null){if(Ut(t))return t.cachedResult;const e=t.arcade;let i=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function os(t,e=!1){let i=t==null?void 0:t.featureExpressionInfo;const r=i==null?void 0:i.expression;return e||r==="0"||(i=null),i??null}const ls={cachedResult:0};function Ut(t){return t.cachedResult!=null}function zt(t){return t==="0"?0:null}let cs=class Ft{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=ti(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const r=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?r:e+r}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return r!=null&&(i+=Cr(r)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=ii(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,i,r){if(e==null)return void(this._featureExpressionInfoContext=null);const n=e==null?void 0:e.arcade;n&&i!=null&&r!=null?(this._featureExpressionInfoContext=Ar(e),xr(this._featureExpressionInfoContext,Rr(n.modules,i,r))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const i=new Ft;return e!=null&&i.setFromElevationInfo(e),i}},Dr=class extends Rt{get geometries(){return this._geometries}get transformation(){return this._transformation??Zt}set transformation(e){this._transformation=Ve(this._transformation??Re(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Ve(this._shaderTransformation??Re(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Le.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new jt),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){Yi(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const i=this._geometries.splice(e,1)[0];i&&(this._emit("geometryRemoved",{object:this,geometry:i}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,i,r=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:i,sync:r}),ei(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const i of this._geometries)i.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new gi;for(const i of this._geometries)i.occludees=Xi(i.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const i of this._geometries)i.occludees=Qi(i.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const i=new Si(e);for(const r of this._geometries)r.addHighlight(i);return this._emit("highlightChanged",this),i}removeHighlight(e){for(const i of this._geometries)i.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===qi.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return et(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=Re()){return et(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new ut,this._validateBoundingVolume(this._bvWorldSpace,ue.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new ut,this._validateBoundingVolume(this._bvObjectSpace,ue.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,i){const r=i===ue.ObjectSpace;for(const n of this._geometries){const s=n.boundingInfo;s&&Lr(s,e,r?n.transformation:this.getCombinedShaderTransformation(n))}li(lt(e.bounds),e.min,e.max,.5);for(const n of this._geometries){const s=n.boundingInfo;if(s==null)continue;const l=r?n.transformation:this.getCombinedShaderTransformation(n),o=Ji(l);G(ft,s.center,l);const a=qe(ft,lt(e.bounds)),c=s.radius*o;e.bounds[3]=Math.max(e.bounds[3],a+c)}}_invalidateBoundingVolume(){var i;const e=(i=this._bvWorldSpace)==null?void 0:i.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,i){this._parentLayer&&this._parentLayer.events.emit(e,i)}get test(){}};class jt{constructor(){this.min=Be(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=Be(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class ut extends jt{constructor(){super(...arguments),this.bounds=Hi()}}function Lr(t,e,i){const r=t.bbMin,n=t.bbMax;if(Yt(i)){const s=H(Pr,i[12],i[13],i[14]);Ce(F,r,s),Ce(j,n,s);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],F[l]),e.max[l]=Math.max(e.max[l],j[l])}else if(G(F,r,i),ci(r,n))for(let s=0;s<3;++s)e.min[s]=Math.min(e.min[s],F[s]),e.max[s]=Math.max(e.max[s],F[s]);else{G(j,n,i);for(let s=0;s<3;++s)e.min[s]=Math.min(e.min[s],F[s],j[s]),e.max[s]=Math.max(e.max[s],F[s],j[s]);for(let s=0;s<3;++s){X(F,r),X(j,n),F[s]=n[s],j[s]=r[s],G(F,F,i),G(j,j,i);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],F[l],j[l]),e.max[l]=Math.max(e.max[l],F[l],j[l])}}}const Pr=x(),F=x(),j=x(),ft=x();var ue;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(ue||(ue={}));const $r=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];var De;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(De||(De={}));let Ir=class extends Rt{constructor(e,i,r=""){super(),this.stage=e,this.apiLayerUid=r,this.type=Le.Layer,this.events=new er,this.visible=!0,this.sliceable=!1,this._objectsAdded=new tt,this._handles=new ni,this._objects=new tt,this._pickable=!0,this.visible=(i==null?void 0:i.visible)??!0,this._pickable=(i==null?void 0:i.pickable)??!0,this.updatePolicy=(i==null?void 0:i.updatePolicy)??De.ASYNC,this._disableOctree=(i==null?void 0:i.disableOctree)??!1,e.add(this);for(const n of $r)this._handles.add(this.events.on(n,s=>e.handleEvent(n,s)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const i of e)i.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const i=new Array;if(this._objects.removeUnorderedMany(e,e.length,i),i.length!==0){for(const r of i)r.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:i}),this._octree!=null){for(let r=0;r<i.length;)this._objectsAdded.removeUnordered(i[r])?(i[r]=i[i.length-1],i.length-=1):++r;this._octree.remove(i)}}}sync(){this.updatePolicy!==De.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,i){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,i)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new tr(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=si(this._octree),this._objectsAdded.clear()}};function hs(t){return t!=null&&t.type===Le.Layer}var mt,vt,gt;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(mt||(mt={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(vt||(vt={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(gt||(gt={}));let wr=class{constructor(e,i){this.vec3=e,this.id=i}};function St(t,e,i,r){return new wr(Be(t,e,i),r)}var ie,me;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(ie||(ie={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(me||(me={}));let U=class extends xt{constructor(){super(...arguments),this.space=ie.Screen,this.anchor=me.Center,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=Ct.None,this.emissionSource=Dt.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===ie.Draped}};g([S({count:ie.COUNT})],U.prototype,"space",void 0),g([S({count:me.COUNT})],U.prototype,"anchor",void 0),g([S()],U.prototype,"occluder",void 0),g([S()],U.prototype,"hasSlicePlane",void 0),g([S()],U.prototype,"writeDepth",void 0),g([S()],U.prototype,"hideOnShortSegments",void 0),g([S()],U.prototype,"hasCap",void 0),g([S()],U.prototype,"hasTip",void 0),g([S()],U.prototype,"vvSize",void 0),g([S()],U.prototype,"vvColor",void 0),g([S()],U.prototype,"vvOpacity",void 0),g([S()],U.prototype,"hasOccludees",void 0),g([S()],U.prototype,"terrainDepthTest",void 0),g([S()],U.prototype,"cullAboveTerrain",void 0);const _t=8;function Nr(t,e){const i=t.vertex;i.uniforms.add(new M("intrinsicWidth",r=>r.width)),e.vvSize?(t.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new Ee("vvSizeMinSize",r=>r.vvSize.minSize),new Ee("vvSizeMaxSize",r=>r.vvSize.maxSize),new Ee("vvSizeOffset",r=>r.vvSize.offset),new Ee("vvSizeFactor",r=>r.vvSize.factor)),i.code.add(p`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add(h.SIZE,"float"),i.code.add(p`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new rt("vvOpacityValues",r=>r.vvOpacity.values,_t),new rt("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,_t)),i.code.add(p`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(p`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(t.include(_i,e),t.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),i.code.add(p`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(t.attributes.add(h.COLOR,"vec4"),i.code.add(p`vec4 getColor(){
return applyOpacity(color);
}`))}class Ur{constructor(e,i,r){this._createTexture=e,this._parametersKey=i,this._repository=new Map,this._orphanCache=r.newCache(`procedural-texture-repository:${At()}`,n=>n.dispose())}destroy(){for(const{texture:e}of this._repository.values())e.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(e,i=null){const r=this._acquire(e);return this.release(i),r}release(e){if(e==null)return;const i=this._parametersKey(e),r=this._repository.get(i);if(r&&(r.refCount--,r.refCount===0)){this._repository.delete(i);const{texture:n}=r,s=n.usedMemory;this._orphanCache.put(i,n,s)}}_acquire(e){if(e==null)return null;const i=this._parametersKey(e),r=this._repository.get(i);if(r)return r.refCount++,r.texture;const n=this._orphanCache.pop(i)??this._createTexture(e),s=new zr(n);return this._repository.set(i,s),n}}class zr{constructor(e){this.texture=e,this.refCount=1}}function ms(t,e){return new Ur(i=>{const{encodedData:r,textureSize:n}=Fr(i),s=new It;return s.internalFormat=Pt.RGBA,s.width=n,s.height=1,s.wrapMode=$t.REPEAT,new wt(t,s,r)},i=>`${i.pattern.join(",")}-r${i.pixelRatio}`,e)}function Fr(t){const e=Ze(t),i=1/t.pixelRatio,r=Mt(t),n=Wt(t),s=(Math.floor(.5*(n-1))+.5)*i,l=[];let o=1;for(const m of e){for(let f=0;f<m;f++){const E=o*(Math.min(f,m-1-f)+.5)*i/s*.5+.5;l.push(E)}o=-o}const a=Math.round(e[0]/2),c=[...l.slice(a),...l.slice(0,a)],d=new Uint8Array(4*r);let v=0;for(const m of c)ur(m,d,v),v+=4;return{encodedData:d,textureSize:r}}function Ze(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function Mt(t){if(t==null)return 1;const e=Ze(t);return Math.floor(e.reduce((i,r)=>i+r))}function Wt(t){return Ze(t).reduce((e,i)=>Math.max(e,i))}function jr(t){return t==null?pi:t.length===4?t:fr(Mr,t[0],t[1],t[2],1)}const Mr=hi();function Wr(t,e){e.stippleEnabled?Vr(t,e):Br(t)}function Vr(t,e){const i=!(e.draped&&e.stipplePreferContinuous),{vertex:r,fragment:n}=t;n.include(hr),e.draped||(Ti(r,e),r.uniforms.add(new M("worldToScreenPerDistanceRatio",(s,l)=>1/l.camera.perScreenPixelRatio)),r.code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),r.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${Gr};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(p`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),Ye(r),r.code.add(p`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),n.uniforms.add(new bi("stipplePatternTexture",s=>s.stippleTexture),new M("stipplePatternSDFNormalizer",s=>kr(s.stipplePattern)),new M("stipplePatternPixelSizeInv",s=>1/Vt(s))),n.code.add(p`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),e.stippleOffColorEnabled?(n.uniforms.add(new xe("stippleOffColor",s=>jr(s.stippleOffColor))),n.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):n.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function Br(t){t.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function kr(t){return t?(Math.floor(.5*(Wt(t)-1))+.5)/t.pixelRatio:1}function Vt(t){const e=t.stipplePattern;return e?Mt(t.stipplePattern)/e.pixelRatio:1}const Gr=p.float(.4),fe=64,Bt=fe/2,kt=Bt/5,Hr=fe/kt,vs=.25;function gs(t,e){const i=Ki(t,fe,Bt,kt),r=new It;return r.internalFormat=Pt.RGBA,r.width=fe,r.height=fe,r.wrapMode=$t.CLAMP_TO_EDGE,new wt(e,r,i)}function Jr(t,e){const i=t.vertex;Ye(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",Hr).code.add(p`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===ie.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new M("perRenderPixelRatio",(r,n)=>n.camera.perRenderPixelRatio)),i.code.add(p`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var re;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})(re||(re={}));class O extends xt{constructor(){super(...arguments),this.capType=re.BUTT,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=Ct.None,this.emissionSource=Dt.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}}g([S({count:re.COUNT})],O.prototype,"capType",void 0),g([S()],O.prototype,"hasSlicePlane",void 0),g([S()],O.prototype,"hasPolygonOffset",void 0),g([S()],O.prototype,"writeDepth",void 0),g([S()],O.prototype,"draped",void 0),g([S()],O.prototype,"stippleEnabled",void 0),g([S()],O.prototype,"stippleOffColorEnabled",void 0),g([S()],O.prototype,"stipplePreferContinuous",void 0),g([S()],O.prototype,"roundJoins",void 0),g([S()],O.prototype,"applyMarkerOffset",void 0),g([S()],O.prototype,"vvSize",void 0),g([S()],O.prototype,"vvColor",void 0),g([S()],O.prototype,"vvOpacity",void 0),g([S()],O.prototype,"falloffEnabled",void 0),g([S()],O.prototype,"innerColorEnabled",void 0),g([S()],O.prototype,"hasOccludees",void 0),g([S()],O.prototype,"occluder",void 0),g([S()],O.prototype,"terrainDepthTest",void 0),g([S()],O.prototype,"cullAboveTerrain",void 0),g([S()],O.prototype,"wireframe",void 0),g([S()],O.prototype,"discardInvisibleFragments",void 0),g([S()],O.prototype,"objectAndLayerIdColorInstanced",void 0);const ve=1;function Gt(t){const e=new yi,{attributes:i,varyings:r,vertex:n,fragment:s}=e,{applyMarkerOffset:l,draped:o,output:a,capType:c,stippleEnabled:d,falloffEnabled:v,roundJoins:m,wireframe:f,innerColorEnabled:E}=t;e.include(Ei),e.include(Nr,t),e.include(Wr,t),e.include(Oi,t);const y=l&&!o;y&&(n.uniforms.add(new M("markerScale",_=>_.markerScale)),e.include(Jr,{space:ie.World})),Ai(n,t),n.uniforms.add(new ar("inverseProjectionMatrix",(_,u)=>u.camera.inverseProjectionMatrix),new Ri("nearFar",(_,u)=>u.camera.nearFar),new M("miterLimit",_=>_.join!=="miter"?0:_.miterLimit),new xe("viewport",(_,u)=>u.camera.fullViewport)),n.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(h.POSITION,"vec3"),i.add(h.PREVPOSITION,"vec3"),i.add(h.NEXTPOSITION,"vec3"),i.add(h.SUBDIVISIONFACTOR,"float"),i.add(h.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const A=t.terrainDepthTest&&a===J.Color;A&&r.add("depth","float");const D=d;D&&r.add("vLineSizeInv","float");const b=c===re.ROUND,N=d&&b,T=v||N;T&&r.add("vLineDistanceNorm","float"),b&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),n.code.add(p`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),n.code.add(p`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),n.code.add(p`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${A?"depth = pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),Ye(n),n.constants.add("aaWidth","float",d?0:1).main.add(p`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${D?p`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),y&&n.main.add(p`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),n.main.add(p`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(d||b)&&n.main.add(p`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${b?p`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),n.main.add(p`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),m?n.main.add(p`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${d?p`min(1.0, subdivisionFactor * ${p.float((ve+2)/(ve+1))})`:p`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):n.main.add(p`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const P=c!==re.BUTT;return n.main.add(p`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${P?p`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),n.main.add(p`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${T?p`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),b&&n.main.add(p`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(o?n.uniforms.add(new M("worldToScreenRatio",(_,u)=>1/u.screenToPCSRatio)):n.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),o?n.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):n.main.add(p`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.uniforms.add(new M("stipplePatternPixelSize",_=>Vt(_))),n.main.add(p`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),n.main.add(p`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${f&&!o?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),A&&e.include(xi,t),e.include(Ci,t),e.include(Di,t),s.include(Li),s.main.add(p`
    discardBySlice(vpos);
    ${A?"terrainDepthTest(depth);":""}
  `),f?s.main.add(p`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(b&&s.main.add(p`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${p.float(he)}) {
          discard;
        }
      `),N?s.main.add(p`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.float(he)}, stippleCoverage);
      `):s.main.add(p`float stippleAlpha = getStippleAlpha();`),a!==J.ObjectAndLayerIdColor&&s.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(he)});`),s.uniforms.add(new xe("intrinsicColor",_=>_.color)),s.main.add(p`vec4 color = intrinsicColor * vColor;`),E&&(s.uniforms.add(new xe("innerColor",_=>_.innerColor??_.color),new M("innerWidth",(_,u)=>_.innerWidth*u.camera.pixelRatio)),s.main.add(p`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),s.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),v&&(s.uniforms.add(new M("falloff",_=>_.falloff)),s.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||s.main.add(p`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),s.main.add(p`outputColorHighlightOID(finalColor, vpos);`),e}const qr=Object.freeze(Object.defineProperty({__proto__:null,build:Gt,ribbonlineNumRoundJoinSubdivisions:ve},Symbol.toStringTag,{value:"Module"}));class Yr extends Pi{constructor(e,i,r){super(e,i,new $i(qr,()=>pr(()=>Promise.resolve().then(()=>on),void 0,import.meta.url)),r,Ht),this.primitiveType=i.wireframe?ht.LINES:ht.TRIANGLE_STRIP}_makePipelineState(e,i){const{oitPass:r,output:n,hasOccludees:s,hasPolygonOffset:l}=e,o=r===nt.NONE,a=r===nt.FrontFace;return Te({blending:e.output===J.Color?Ii(r):null,depthTest:{func:wi(r)},depthWrite:Ni(e),drawBuffers:n===J.Depth?{buffers:[Oe.NONE]}:Ui(r,n),colorWrite:we,stencilWrite:s?st:null,stencilTest:s?i?at:zi:null,polygonOffset:o||a?l?Tt:null:Fi})}initializePipeline(e){if(e.occluder){const i=e.hasPolygonOffset?Tt:null;this._occluderPipelineTransparent=Te({blending:ct,polygonOffset:i,depthTest:ot,depthWrite:null,colorWrite:we,stencilWrite:null,stencilTest:ji,drawBuffers:e.output===J.Depth?{buffers:[Oe.NONE]}:null}),this._occluderPipelineOpaque=Te({blending:ct,polygonOffset:i,depthTest:ot,depthWrite:null,colorWrite:we,stencilWrite:Mi,stencilTest:Wi,drawBuffers:e.output===J.Depth?{buffers:[Oe.NONE]}:null}),this._occluderPipelineMaskWrite=Te({blending:null,polygonOffset:i,depthTest:Vi,depthWrite:null,colorWrite:null,stencilWrite:st,stencilTest:at,drawBuffers:e.output===J.Depth?{buffers:[Oe.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){if(e)return this._occludeePipeline;switch(i){case k.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case k.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const Tt={factor:0,units:-4},Ht=new Map([[h.POSITION,0],[h.PREVPOSITION,1],[h.NEXTPOSITION,2],[h.SUBDIVISIONFACTOR,3],[h.UV0,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);var z;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(z||(z={}));class Zr extends vi{constructor(e){super(e,Qr),this._configuration=new O,this.vertexAttributeLocations=Ht,this.produces=new Map([[k.OPAQUE_MATERIAL,i=>or(i)||lr(i)&&this.parameters.renderOccluded===se.OccludeAndTransparentStencil],[k.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>cr(i)],[k.OCCLUDER_MATERIAL,i=>pt(i)&&this.parameters.renderOccluded===se.OccludeAndTransparentStencil],[k.TRANSPARENT_OCCLUDER_MATERIAL,i=>pt(i)&&this.parameters.renderOccluded===se.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL,i=>i===J.Color&&this.parameters.writeDepth&&this.parameters.renderOccluded!==se.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>i===J.Color&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==se.OccludeAndTransparentStencil],[k.DRAPED_MATERIAL,i=>dr(i)]])}getConfiguration(e,i){this._configuration.output=e,this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===k.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&e!==J.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&en(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===se.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){var e;return this.parameters.color[3]>=he||this.parameters.stipplePattern!=null&&(((e=this.parameters.stippleOffColor)==null?void 0:e[3])??0)>he}intersectDraped({attributes:e,screenToWorldRatio:i},r,n,s,l,o){if(!n.options.selectionMode)return;const a=e.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const D=e.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Ne(this.parameters.vvSize.offset[0]+D*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else a&&(c*=a.data[0]);const d=s[0],v=s[1],m=(c/2+4)*i;let f=Number.MAX_VALUE,E=0;const y=e.get(h.POSITION).data,A=Je(this.parameters,e)?y.length-2:y.length-5;for(let D=0;D<A;D+=3){const b=y[D],N=y[D+1],T=(D+3)%y.length,P=d-b,_=v-N,u=y[T]-b,Z=y[T+1]-N,L=Ne((u*P+Z*_)/(u*u+Z*Z),0,1),ne=u*L-P,$=Z*L-_,Q=ne*ne+$*$;Q<f&&(f=Q,E=D/3)}f<m*m&&l(o.dist,o.normal,E,!1)}intersect(e,i,r,n,s,l){if(!r.options.selectionMode||!e.visible)return;if(!Zi(i))return void Ot.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=e.attributes,a=o.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const b=o.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Ne(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(h.SIZE)&&(c*=o.get(h.SIZE).data[0]);const d=r.camera,v=tn;ir(v,r.point);const m=c*d.pixelRatio/2+4*d.pixelRatio;H(de[0],v[0]-m,v[1]+m,0),H(de[1],v[0]+m,v[1]+m,0),H(de[2],v[0]+m,v[1]-m,0),H(de[3],v[0]-m,v[1]-m,0);for(let b=0;b<4;b++)if(!d.unprojectFromRenderScreen(de[b],Y[b]))return;ye(d.eye,Y[0],Y[1],Fe),ye(d.eye,Y[1],Y[2],je),ye(d.eye,Y[2],Y[3],Me),ye(d.eye,Y[3],Y[0],We);let f=Number.MAX_VALUE,E=0;const y=Je(this.parameters,o)?a.length-2:a.length-5;for(let b=0;b<y;b+=3){I[0]=a[b]+i[12],I[1]=a[b+1]+i[13],I[2]=a[b+2]+i[14];const N=(b+3)%a.length;if(w[0]=a[N]+i[12],w[1]=a[N+1]+i[13],w[2]=a[N+2]+i[14],V(Fe,I)<0&&V(Fe,w)<0||V(je,I)<0&&V(je,w)<0||V(Me,I)<0&&V(Me,w)<0||V(We,I)<0&&V(We,w)<0)continue;if(d.projectToRenderScreen(I,ee),d.projectToRenderScreen(w,te),ee[2]<0&&te[2]>0){pe(B,I,w);const P=d.frustum,_=-V(P[be.NEAR],I)/it(B,dt(P[be.NEAR]));Ie(B,B,_),Ce(I,I,B),d.projectToRenderScreen(I,ee)}else if(ee[2]>0&&te[2]<0){pe(B,w,I);const P=d.frustum,_=-V(P[be.NEAR],w)/it(B,dt(P[be.NEAR]));Ie(B,B,_),Ce(w,w,B),d.projectToRenderScreen(w,te)}else if(ee[2]<0&&te[2]<0)continue;ee[2]=0,te[2]=0;const T=rr(Ue(ee,te,Et),v);T<f&&(f=T,X(bt,I),X(yt,w),E=b/3)}const A=r.rayBegin,D=r.rayEnd;if(f<m*m){let b=Number.MAX_VALUE;if(nr(Ue(bt,yt,Et),Ue(A,D,rn),K)){pe(K,K,A);const N=di(K);Ie(K,K,1/N),b=N/qe(A,D)}l(b,K,E,!1)}}get _layout(){const e=sr().vec3f(h.POSITION).vec3f(h.PREVPOSITION).vec3f(h.NEXTPOSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0);return this.parameters.vvSize?e.f32(h.SIZEFEATUREATTRIBUTE):e.f32(h.SIZE),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4f(h.COLOR),this.parameters.vvOpacity&&e.f32(h.OPACITYFEATUREATTRIBUTE),Ge()&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new Kr(this._layout,this.parameters)}createGLMaterial(e){return new Xr(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}}class Xr extends Bi{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.acquireTechnique(Yr,e)}}class Qr extends ki{constructor(){super(...arguments),this.width=0,this.color=ui,this.join="miter",this.cap=re.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){var e;return this.color[3]<1||this.stipplePattern!=null&&(((e=this.stippleOffColor)==null?void 0:e[3])??0)<1}}class Kr{constructor(e,i){this.vertexBufferLayout=e,this._parameters=i,this.numJoinSubdivisions=0;const r=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=ve+r}}_isClosed(e){return Je(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const r=e.get(h.POSITION).indices.length/2+1,n=this._isClosed(e);let s=n?2:2*2;return s+=((n?r:r-1)-(n?0:1))*(2*this.numJoinSubdivisions+4),s+=2,this._parameters.wireframe&&(s=2+4*(s-2)),s}write(e,i,r,n,s,l){var Xe,Qe,Ke;const o=nn,a=sn,c=an,d=r.get(h.POSITION),v=d.indices,m=d.data.length/3,f=(Xe=r.get(h.DISTANCETOSTART))==null?void 0:Xe.data;v&&v.length!==2*(m-1)&&console.warn("RibbonLineMaterial does not support indices");const E=((Qe=r.get(h.SIZEFEATUREATTRIBUTE))==null?void 0:Qe.data[0])??((Ke=r.get(h.SIZE))==null?void 0:Ke.data[0])??1;let y=[1,1,1,1],A=0;const D=this.vertexBufferLayout.fields.has(h.COLORFEATUREATTRIBUTE);D?A=r.get(h.COLORFEATUREATTRIBUTE).data[0]:r.has(h.COLOR)&&(y=r.get(h.COLOR).data);const b=this.vertexBufferLayout.fields.has(h.OPACITYFEATUREATTRIBUTE),N=b?r.get(h.OPACITYFEATUREATTRIBUTE).data[0]:0,T=new Float32Array(s.buffer),P=Ge()?new Uint8Array(s.buffer):null,_=this.vertexBufferLayout.stride/4;let u=l*_;const Z=u;let L=0;const ne=f?(R,W,q)=>L=f[q]:(R,W,q)=>L+=qe(R,W),$=(R,W,q,ce,ge,Jt,qt)=>{if(T[u++]=W[0],T[u++]=W[1],T[u++]=W[2],T[u++]=R[0],T[u++]=R[1],T[u++]=R[2],T[u++]=q[0],T[u++]=q[1],T[u++]=q[2],T[u++]=ce,T[u++]=qt,T[u++]=ge,T[u++]=E,D)T[u++]=A;else{const Se=Math.min(4*Jt,y.length-4);T[u++]=y[Se],T[u++]=y[Se+1],T[u++]=y[Se+2],T[u++]=y[Se+3]}b&&(T[u++]=N),Ge()&&(n&&(P[4*u]=n[0],P[4*u+1]=n[1],P[4*u+2]=n[2],P[4*u+3]=n[3]),u++)};u+=_,H(a,d.data[0],d.data[1],d.data[2]),e&&G(a,a,e);const Q=this._isClosed(r);if(Q){const R=d.data.length-3;H(o,d.data[R],d.data[R+1],d.data[R+2]),e&&G(o,o,e)}else H(c,d.data[3],d.data[4],d.data[5]),e&&G(c,c,e),$(a,a,c,1,z.LEFT_CAP_START,0,0),$(a,a,c,1,z.RIGHT_CAP_START,0,0),X(o,a),X(a,c);const $e=Q?0:1,le=Q?m:m-1;for(let R=$e;R<le;R++){const W=(R+1)%m*3;H(c,d.data[W],d.data[W+1],d.data[W+2]),e&&G(c,c,e),ne(o,a,R),$(o,a,c,0,z.LEFT_JOIN_END,R,L),$(o,a,c,0,z.RIGHT_JOIN_END,R,L);const q=this.numJoinSubdivisions;for(let ce=0;ce<q;++ce){const ge=(ce+1)/(q+1);$(o,a,c,ge,z.LEFT_JOIN_END,R,L),$(o,a,c,ge,z.RIGHT_JOIN_END,R,L)}$(o,a,c,1,z.LEFT_JOIN_START,R,L),$(o,a,c,1,z.RIGHT_JOIN_START,R,L),X(o,a),X(a,c)}Q?(H(c,d.data[3],d.data[4],d.data[5]),e&&G(c,c,e),L=ne(o,a,le),$(o,a,c,0,z.LEFT_JOIN_END,$e,L),$(o,a,c,0,z.RIGHT_JOIN_END,$e,L)):(L=ne(o,a,le),$(o,a,a,0,z.LEFT_CAP_END,le,L),$(o,a,a,0,z.RIGHT_CAP_END,le,L)),ze(T,Z+_,T,Z,_),u=ze(T,u-_,T,u,_),this._parameters.wireframe&&this._addWireframeVertices(s,Z,u,_)}_addWireframeVertices(e,i,r,n){const s=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT,r-i);let o=0;const a=c=>o=ze(l,c,s,o,n);for(let c=0;c<l.length-1;c+=2*n)a(c),a(c+2*n),a(c+1*n),a(c+2*n),a(c+1*n),a(c+3*n)}}function ze(t,e,i,r,n){for(let s=0;s<n;s++)i[r++]=t[e++];return r}function Je(t,e){return t.isClosed?e.get(h.POSITION).indices.length>2:!1}function en(t){return t.anchor===me.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const I=x(),w=x(),B=x(),K=x(),tn=x(),ee=ae(),te=ae(),bt=x(),yt=x(),Et=Lt(),rn=Lt(),nn=x(),sn=x(),an=x(),de=[ae(),ae(),ae(),ae()],Y=[x(),x(),x(),x()],Fe=Pe(),je=Pe(),Me=Pe(),We=Pe();class Ss{constructor(e){this._originSR=e,this._rootOriginId="root/"+At(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const i=this._origins.get(this._rootOriginId);if(i==null){const d=St(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const r=this._gridSize,n=Math.round(e[0]/r),s=Math.round(e[1]/r),l=Math.round(e[2]/r),o=`${n}/${s}/${l}`;let a=this._origins.get(o);const c=.5*r;if(pe(C,e,i.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),C[0]<c&&C[1]<c&&C[2]<c){if(a){const d=Math.max(...C);if(pe(C,e,a.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),Math.max(...C)<d)return a}return i}return a||(a=St(n*r,s*r,l*r,o),this._origins.set(o,a)),a}_drawOriginBox(e,i=fi(1,1,0,1)){const r=window.view,n=r._stage,s=i.toString();if(!this._objects.has(s)){this._material=new Zr({width:2,color:i}),n.add(this._material);const f=new Ir(n,{pickable:!1}),E=new Dr({castShadow:!1});n.add(E),f.add(E),this._objects.set(s,E)}const l=this._objects.get(s),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],a=o.length,c=new Array(3*a),d=new Array,v=.5*this._gridSize;for(let f=0;f<a;f++)c[3*f]=e[0]+(1&o[f]?v:-v),c[3*f+1]=e[1]+(2&o[f]?v:-v),c[3*f+2]=e[2]+(4&o[f]?v:-v),f>0&&d.push(f-1,f);ke(c,this._originSR,0,c,r.renderSpatialReference,0,a);const m=new Gi(this._material,[[h.POSITION,new mi(c,d,3,!0)]],null,Le.Line);n.add(m),l.addGeometry(m)}get test(){}}const C=x(),on=Object.freeze(Object.defineProperty({__proto__:null,build:Gt,ribbonlineNumRoundJoinSubdivisions:ve},Symbol.toStringTag,{value:"Module"}));export{Dr as A,vs as B,De as C,U as D,mr as E,re as F,St as G,hs as H,Ur as I,gs as J,ms as K,br as R,Zr as W,Ss as _,Ir as a,vt as b,as as c,os as d,mt as e,Nt as f,rs as g,ss as h,es as i,me as j,ls as k,xr as l,He as m,ns as n,cs as o,Hr as p,ts as q,is as r,Rr as s,gt as t,Kn as u,ie as v,Nr as w,Jr as x,fe as y,Bt as z};
