import{g as re,B as ze,r as a,m as d,a as oe,aV as Ve,N as E}from"./Accessor-BmwT4B0c.js";import{e as $e}from"./defaultUnit-CHqZKPQE.js";import{s as Me}from"./AnalysisView3D-DoDk2o7n.js";import{e as $}from"./interfaces-js1RL7O8.js";import{s as A}from"./quantityUtils-BsDK158M.js";import{d as C,A as z,P as Te}from"./reactiveUtils-XM7cS2OP.js";import{az as ae,ay as De,K as xe,x as Re}from"./Point-Cz2JYYmX.js";import{r as Ge,t as je,d as k}from"./LineVisualElement-BCLvCZUF.js";import{h as He}from"./euclideanLengthMeasurementUtils-Bcu5HQVu.js";import{f as Ne}from"./geodesicLengthMeasurementUtils-B4BXDmbs.js";import{f as Ie}from"./intl-Duiy0OzY.js";import{K as le,F as de,S as ke,E as ce,R as We,P as ue}from"./colorUtils-DaPfwnk3.js";import{a as Fe,s as Qe}from"./mathUtils-Cfq9PL9W.js";import{g as U,j as Be,y as he,w as Ue,d as pe}from"./quantityFormatUtils-Bo0-7oki.js";import{y as Ce,s as ne}from"./screenUtils-_ZIvrt5o.js";import{j as me}from"./vec2-ChnYg_BJ.js";import{o as K,A as q,c as Ae,_ as Oe,p as Ke,E as Y,s as qe,R as Ye,Y as Je,g as Xe,u as Ze}from"./vec32-Dvg_eL9J.js";import{n as b}from"./vec3f64-BLpZdpfb.js";import{e as y,o as S}from"./interfaces-CjSZqm0S.js";import{n as J}from"./viewUtils-CV6QVz7y.js";import{a as X,_ as ge,f as j,C as _e}from"./Segment-DI6rnOzR.js";import{e as et}from"./mat4f64-Dk4dwAN8.js";import{a as ve}from"./vec42-YcqnINSP.js";import{r as Z,n as ye}from"./vec4f64-o2zAXfmz.js";import{c as W}from"./plane-CpXmOyqq.js";import{a as tt}from"./Object3DVisualElement-D0-_EXFp.js";import{K as it,h as st}from"./cameraUtils-Cg-qbPDO.js";import{w as rt}from"./GeometryUtil-D-PMXorz.js";import{n as ot,b as nt,p as N}from"./Material-C_-mgXN8.js";import{H as at}from"./InterleavedLayout-_dYEAUNK.js";import{u as fe}from"./Matrix3PassUniform-uCCQMnlP.js";import{g as lt,s as ee,c as te,r as F,m as dt,t as ct,K as ut,E as ht,A as we,e as pt}from"./FloatArray-BQXWSSJh.js";import{e as f}from"./VertexAttribute-Cq4MnHjR.js";import{_ as mt}from"./index-4eY77cms.js";import{E as gt,O as _t}from"./enums-D9v74xTE.js";import{B as vt,g as yt,p as ft}from"./renderState-Ci93M1-P.js";import{i as be}from"./ShaderTechniqueConfiguration-D4dZMCXS.js";import{D as wt}from"./RightAngleQuadVisualElement-IhLHtjxy.js";import{h as ie}from"./lineStippleUtils-C89mzWlO.js";import{p as bt}from"./geodesicMeasurementUtils-B-7dBAnY.js";import{h as Lt}from"./Promise-DfET-uns.js";import"./mat4-Fi6iAz29.js";import"./BindType-BBwFZqyN.js";import{n as H}from"./glsl-BH37Aalp.js";import{i as Et}from"./ShaderBuilder-BKul5qh8.js";import"./getDefaultUnitForView-BBSnYQvp.js";import"./Portal-CmmHxpLg.js";import"./cast-CsZslgGN.js";import"./JSONSupport-DcrLLGjL.js";import"./writer-DKgfqj4X.js";import"./Extent-g5W9hy0j.js";import"./Evented-Dw4_VOGn.js";import"./SimpleObservable-CvOkykwM.js";import"./projection-CyCZAIaD.js";import"./Polyline-s-JzsQqo.js";import"./projectBuffer-CQnuEMuP.js";import"./geodesicConstants-RQL9oKdk.js";import"./ElevationProvider-aS5xrHHy.js";import"./dehydratedFeatureUtils-1rrRm6hF.js";import"./line-BiDIlUeT.js";import"./vec2f64-Dy6m9Nrb.js";import"./aaBoundingBox-Dw3yBk2f.js";import"./Indices-D8XWalpO.js";import"./ViewingMode-Dodu7ZZk.js";import"./Attribute-DGhdp5lO.js";import"./RibbonLine.glsl-DwJpAQ1c.js";import"./sphere-Cin5efBj.js";import"./common-DQOJ18NT.js";import"./mat3-CR8GKnhD.js";import"./mat3f64-BBpwCtoL.js";import"./mathUtils-BgCEaV43.js";import"./basicInterfaces-CZwQPxTp.js";import"./sdfPrimitives-DBgFWIDT.js";import"./doublePrecisionUtils-B0owpBza.js";import"./floatRGBA-Cb__GiDF.js";import"./Octree-CmoRJhci.js";import"./lineSegment-v806maA5.js";import"./Texture-BVJ22uHh.js";import"./signal-CySMLEX9.js";import"./getDataTypeBytes-BTGR5GyG.js";import"./RgbaFloatEncoding.glsl-_io2eW3M.js";import"./projectVectorToVector-CCOy_B5J.js";import"./projectPointToVector-BoxjK-qy.js";import"./spatialReferenceEllipsoidUtils-DBqQpPRa.js";import"./geometryEngine-CLtm9OQA.js";import"./geometryEngineBase-B0ZyeKAX.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-DcIAHEVL.js";import"./geodesicUtils-Cvz9v8ds.js";import"./Color-VJEMvW-n.js";import"./colorUtils-Rxh2V3ai.js";import"./Cyclical-Dlbl-cQK.js";import"./unitFormatUtils-Q7ZG7HcF.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./elevationInfoUtils-D26wVF2d.js";import"./unitConversionUtils-rg07EgOm.js";import"./lengthUtils-_77UiyVF.js";import"./VisualElement-CaupdJPJ.js";import"./jsxFactory-Cnml7uXM.js";import"./uuid-Cl5lrJ4c.js";import"./TextOverlayItem-Bocd_PuB.js";import"./quatf64-CCm9z-pX.js";import"./Camera-CdyTfTAk.js";import"./Clonable-Z-AWS-16.js";import"./projectVectorToPoint-DEm8-dt4.js";import"./Intersector-tBiZcjSu.js";import"./intersectorUtils-BNnvTT1E.js";import"./boundedPlane-DuGhiiFM.js";import"./verticalOffsetUtils-BFnFdbst.js";import"./orientedBoundingBox-B17G_yFO.js";import"./quat-CP7JhygC.js";import"./computeTranslationToOriginAndRotation-DYUrDrjE.js";import"./earthUtils-8WLQbUUl.js";import"./spatialReferenceSupport-DfixDcu7.js";import"./vec3f32-nZdmKIgz.js";import"./NoParameters-t-PuNrgq.js";import"./BufferView-0osDbyWD.js";import"./types-D0PSWh4d.js";import"./triangle-B1tKFm7z.js";import"./opacityUtils-Dim20wpZ.js";import"./requestImageUtils-DWgRKL5q.js";import"./TextureFormat-1mYWTFa-.js";import"./EngineVisualElement-BU-x7ubB.js";import"./Identifiable-BHVfzH03.js";import"./GridLocalOriginFactory-CngFIYNp.js";import"./OverlayCompositing.glsl-CUa8aMAb.js";import"./SceneLighting-BuSMIzqo.js";import"./RenderCamera-CDB-KFBK.js";import"./axisAngleDegrees-DdLZENJj.js";import"./weather-zOic7P_q.js";import"./enumeration-DpvDkLNI.js";import"./BooleanBindUniform-BgD_OP8i.js";import"./Float4DrawUniform-Db0CLl_z.js";import"./RenderPlugin-CTXypYLE.js";import"./HighlightDefaults-CumzVg9-.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./VertexArrayObject-vYejmVPr.js";import"./BufferObject-BJilD_hc.js";import"./memoryEstimations-Bcyf-mHz.js";import"./NestedMap-GuqgquCN.js";import"./HUDRenderStyle-BhGvVxgm.js";import"./Scheduler-i_u8qdlN.js";import"./debugFlags-B1LM_Apo.js";import"./ColorMaterial.glsl-B6FVFiO0.js";import"./DefaultBufferWriter-CqCDaNCZ.js";import"./TriangleMaterial-D-IjcYAX.js";import"./VertexColor.glsl-D3WyDYIi.js";import"./Matrix3DrawUniform-DD7AqlIc.js";import"./Matrix4PassUniform-COGIPIq4.js";let V=class extends re{constructor(t){super(t)}initialize(){this.addHandles([C(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:t,startPoint:e})=>{t.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(e)},z),C(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:t,endPoint:e})=>{t.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(e)},z),C(()=>({result:this._computedResult,viewData:this.viewData}),({result:t,viewData:e})=>{e.result=t},z)])}_applyProjectionAndElevationAlignment(t){if(t==null)return t;const{spatialReference:e,elevationProvider:i}=this.view;return Ge(t,e,i)??(je(this.analysis,t.spatialReference,ze.getLogger(this)),null)}get _computedResult(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e,measurementMode:i,unit:s}=this.viewData;if(t==null||e==null)return null;const r=He(t,e),o=Ne(t,e);if(r==null)return null;let u,c;switch(i){case $.Auto:c=o!=null?"geodesic":"euclidean",u=o??r.horizontal;break;case $.Geodesic:if(o==null)return null;c="geodesic",u=o;break;case $.Euclidean:c="euclidean",u=r.horizontal}let l=r.direct,h=r.vertical;const n=ae(l.value,l.unit,s),p=ae(u.value,u.unit,s),m=De(h.value,h.unit,s);return l=A(l,n),u=A(u,p),h=A(h,m),{mode:c,directDistance:l,horizontalDistance:u,verticalDistance:h}}};a([d()],V.prototype,"view",void 0),a([d()],V.prototype,"analysis",void 0),a([d()],V.prototype,"viewData",void 0),a([d()],V.prototype,"_computedResult",null),V=a([oe("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController")],V);function Pe(t){const e=new Et,{vertex:i,fragment:s}=e;lt(i,t),i.uniforms.add(new ee("width",o=>o.width)),e.attributes.add(f.POSITION,"vec3"),e.attributes.add(f.NORMAL,"vec3"),e.attributes.add(f.UV0,"vec2"),e.attributes.add(f.LENGTH,"float"),e.varyings.add("vtc","vec2"),e.varyings.add("vlength","float"),e.varyings.add("vradius","float"),i.main.add(H`vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;`),s.uniforms.add(new ee("outlineSize",o=>o.outlineSize),new te("outlineColor",o=>o.outlineColor),new ee("stripeLength",o=>o.stripeLength),new te("stripeEvenColor",o=>o.stripeEvenColor),new te("stripeOddColor",o=>o.stripeOddColor));const r=1/Math.sqrt(2);return s.code.add(H`
    const float INV_SQRT2 = ${H.float(r)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      }
      if (d < outlineSize) {
        return outlineColor;
      }
      return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
    }`),s.main.add(H`
    vec2 ntc = vec2(vtc.x / vradius, vtc.y);
    vec4 color = arrowColor(ntc, vlength / vradius);
    if (color.a < ${H.float(F)}) {
      discard;
    }
    fragColor = color;`),e}const Ct=Object.freeze(Object.defineProperty({__proto__:null,build:Pe},Symbol.toStringTag,{value:"Module"}));class At extends dt{constructor(e,i){super(e,i,new ct(Ct,()=>mt(()=>Promise.resolve().then(()=>Qt),void 0,import.meta.url)),Se),this.primitiveType=gt.TRIANGLE_STRIP}initializePipeline(e){return vt({blending:e.transparent?ut(e.oitPass):null,polygonOffset:e.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:_t.LESS},depthWrite:ft,colorWrite:yt})}}const Se=new Map([[f.POSITION,0],[f.NORMAL,1],[f.UV0,2],[f.LENGTH,3]]);class se extends ht{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1}}a([be()],se.prototype,"polygonOffsetEnabled",void 0),a([be()],se.prototype,"transparent",void 0);let Ot=class extends ot{constructor(e){super(e,St),this._configuration=new se,this.vertexAttributeLocations=Se,this.produces=new Map([[we.OPAQUE_MATERIAL,i=>!this._transparent&&fe(i)],[we.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>this._transparent&&fe(i)]])}getConfiguration(e,i){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.oitPass=i.oitPass,this._configuration}get visible(){const{outlineColor:e,stripeEvenColor:i,stripeOddColor:s}=this.parameters;return e[3]>=F||i[3]>=F||s[3]>=F}intersect(){}createGLMaterial(e){return new Pt(e)}createBufferWriter(){return new xt}get _transparent(){const{parameters:e}=this;return e.outlineColor[3]<1||e.stripeEvenColor[3]<1||e.stripeOddColor[3]<1}},Pt=class extends pt{beginSlot(e){return this.getTechnique(At,e)}};class St extends nt{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=Z(1,.5,0,1),this.stripeEvenColor=Z(1,1,1,1),this.stripeOddColor=Z(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const zt=at().vec3f(f.POSITION).vec3f(f.NORMAL).vec2f(f.UV0).f32(f.LENGTH),Vt=b(),$t=b(),Mt=b(),Tt=b(),Dt=b();class xt{constructor(){this.vertexBufferLayout=zt}elementCount(e){return 2*(e.get(f.POSITION).indices.length/2+1)}write(e,i,s,r,o,u){const{data:c,indices:l}=s.get(f.POSITION),h=s.get(f.NORMAL).data,n=c.length/3;l&&l.length!==2*(n-1)&&console.warn("MeasurementArrowMaterial does not support indices");const p=Vt,m=$t,_=Mt,L=Tt,M=Dt,T=o.position,D=o.normal,O=o.uv0;let x=0;for(let w=0;w<n;++w){const G=3*w;if(K(p,c[G],c[G+1],c[G+2]),w<n-1){const R=3*(w+1);K(m,c[R],c[R+1],c[R+2]),K(M,h[R],h[R+1],h[R+2]),q(M,M),Ae(_,m,p),q(_,_),Oe(L,M,_),q(L,L)}const B=Ke(p,m);e&&i&&(Y(p,p,e),Y(m,m,e),Y(L,L,i));const P=u+2*w,I=P+1;T.setVec(P,p),T.setVec(I,p),D.setVec(P,L),D.setVec(I,L),O.set(P,0,x),O.set(P,1,-1),O.set(I,0,x),O.set(I,1,1),w<n-1&&(x+=B)}const Q=o.length;for(let w=0;w<2*n;++w)Q.set(u+w,x)}}let Rt=class extends tt{constructor(e){super(e),this._arrowWidth=16,this._arrowSubdivisions=128,this._origin=b(),this._originTransform=et(),this._arrowCenter=b(),this._renderOccluded=N.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._color=ye(),this._contrastColor=ye(),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){var i;e!==this._renderOccluded&&(this._renderOccluded=e,(i=this._arrowMaterial)==null||i.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const i=this._stripesEnabled?this._contrastColor:this._color;this._arrowMaterial.setParameters({stripeEvenColor:i})}}get color(){return this._color}set color(e){le(e,this._color)||(ve(this._color,e),this._updateArrowColor())}get contrastColor(){return this._contrastColor}set contrastColor(e){le(e,this._color)||(ve(this._contrastColor,e),this._updateArrowColor())}createExternalResources(){const e=this._color,i=this._contrastColor,s=this._stripesEnabled?i:e;this._arrowMaterial=new Ot({outlineColor:e,stripeEvenColor:s,stripeOddColor:e,renderOccluded:this.renderOccluded,polygonOffset:!0,isDecoration:this.isDecoration}),this._handles=new Ve,this._handles.add(C(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles=E(this._handles)}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){var s;if(((s=this._geometry)==null?void 0:s.startRenderSpace)==null||this._geometry.endRenderSpace==null)return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,e.addGeometry(i),this._viewChanged()}_createArrowGeometry(e,i,s,r){const o=this.view,u=o.renderCoordsHelper,c=[],l=[],h=(n,p)=>{const m=W.get();Ae(m,n,s),c.push(m),l.push(p)};if(r.type==="euclidean"){r.eval(.5,this._arrowCenter);const n=W.get();if(u.worldUpAtPosition(this._arrowCenter,n),Gt(e,i,n)){const{heading:p,tilt:m}=o.camera,{direction:_}=it(o,e,p,m,jt);qe(n,_)}h(e,n),h(i,n)}else{r.eval(.5,this._arrowCenter);const n=this._arrowSubdivisions+1&-2;for(let p=0;p<n;++p){const m=p/(n-1),_=W.get(),L=W.get();r.eval(m,_),u.worldUpAtPosition(_,L),h(_,L)}}return rt(this._arrowMaterial,c,l)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&this._geometry!=null){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._arrowWidth*e})}}_updateArrowColor(){if(!this.attached)return;const e=this._color,i=this._contrastColor,s=this._stripesEnabled?i:e,r=e,o=e;this._arrowMaterial.setParameters({stripeEvenColor:s,outlineColor:r,stripeOddColor:o})}};function Gt(t,e,i){const s=Ye(Le,e,t),r=Oe(Le,s,i);return Je(r)===0}const Le=b(),jt=st();let v=class extends re{get _parameters(){const t=this.view.effectiveTheme,{accentColor:e,textColor:i}=t,s=de(e),r=ke(e,.75),o=de(ce(e)),u=ce(i,We.Low);return{accentColor:s,contrastColor:o,translucentAccentColor:r,triangleLineWidth:3,geodesicProjectionLineWidth:2,guideLineWidth:2,guideStippleLengthPixels:3,directLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12,textColor:i,textBackgroundColor:ue(u,.6),textCalloutColor:ue(u,.5)}}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e}=this.analysisView;if(t==null||e==null||t.equals(e))return y.None;const i=this.analysisView.result;if(i==null)return y.Direct;if(this.actualVisualizedMeasurement==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?y.ProjectedGeodesic:y.Direct;const{verticalDistance:s,horizontalDistance:r}=i,o=A(s,"meters").value,u=A(r,"meters").value;return Math.min(o/u,u/o)<this.triangleCollapseRatioThreshold?y.Direct:y.Triangle}get actualVisualizedMeasurement(){const{measurementMode:t,result:e}=this.analysisView;switch(t){case $.Auto:return e!=null&&A(e.horizontalDistance,"meters").value>bt?"geodesic":"euclidean";case $.Euclidean:return"euclidean";case $.Geodesic:return"geodesic"}}get allowVisualElementsOrientationChange(){return this._triangleOrientationOverride==null}set allowVisualElementsOrientationChange(t){this._triangleOrientationOverride==null!==t&&(this._triangleOrientationOverride==null?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){return this.actualVisualizedMeasurement==="geodesic"?{direct:null,horizontal:this._segmentLabel,vertical:this._verticalLabel}:{direct:this._segmentLabel,horizontal:this._horizontalLabel,vertical:this._verticalLabel}}constructor(t){super(t),this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=b(),this._endPosition=b(),this._cornerPosition=b(),this._startPositionAtSeaLevel=b(),this._endPositionAtSeaLevel=b(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=S.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const t=this._parameters,e={attached:!0,view:this.view,isDecoration:!0},{guideLineWidth:i,guideStippleLengthPixels:s,triangleLineWidth:r,geodesicProjectionLineWidth:o,directLabelFontSize:u,verticalLabelFontSize:c,horizontalLabelFontSize:l}=t;this._segmentVisualElement=new Rt({...e,geometry:null,renderOccluded:N.OccludeAndTransparent}),this._triangleVisualElement=new k({...e,width:r,renderOccluded:N.OccludeAndTransparent}),this._rightAngleQuad=new wt({...e,renderOccluded:N.OccludeAndTransparent});const h={...e,polygonOffset:!0,renderOccluded:N.OccludeAndTransparent};this._projectedGeodesicLine=new k({...h,width:o,stipplePattern:ie(s)}),this._geodesicStartHint=new k({...h,width:i,stipplePattern:ie(s)}),this._geodesicEndHint=new k({...h,width:i,stipplePattern:ie(s)}),this._segmentLabel=new X({...e,fontSize:u}),this._verticalLabel=new X({...e,fontSize:c}),this._horizontalLabel=new X({...e,fontSize:l}),this.addHandles([C(()=>{const{elevationAlignedStartPoint:n,elevationAlignedEndPoint:p}=this.analysisView,m=this.view;return{view:m,camera:m.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:n,elevationAlignedEndPoint:p,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},n=>this._updateGeometryAndViewMode(n),z),C(()=>({visible:this.visible,viewMode:this.viewMode}),n=>this._updateVisualElementVisibility(n),z),C(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),n=>this._updateLabelText(n),z),C(()=>({visible:this.visible,viewMode:this.viewMode}),n=>this._updateLabelVisibility(n),z),C(()=>this._measurementArrowStripeLength,n=>this._updateSegmentStripeLength(n),z),Lt(async()=>this._updateMessageBundle()),C(()=>this._parameters,({textBackgroundColor:n,textCalloutColor:p,textColor:m,translucentAccentColor:_,accentColor:L,contrastColor:M})=>{const{_segmentLabel:T,_verticalLabel:D,_horizontalLabel:O,_triangleVisualElement:x,_rightAngleQuad:Q,_projectedGeodesicLine:w,_geodesicStartHint:G,_geodesicEndHint:B,_segmentVisualElement:P}=this;T.backgroundColor=n,T.calloutColor=p,T.textColor=m,D.backgroundColor=n,D.calloutColor=p,D.textColor=m,O.backgroundColor=n,O.calloutColor=p,O.textColor=m,x.color=_,Q.color=_,w.color=_,G.color=_,B.color=_,P.color=L,P.contrastColor=M},Te)]),this._updateMessageBundle()}destroy(){this._segmentVisualElement=E(this._segmentVisualElement),this._triangleVisualElement=E(this._triangleVisualElement),this._rightAngleQuad=E(this._rightAngleQuad),this._projectedGeodesicLine=E(this._projectedGeodesicLine),this._geodesicStartHint=E(this._geodesicStartHint),this._geodesicEndHint=E(this._geodesicEndHint),this._segmentLabel=E(this._segmentLabel),this._verticalLabel=E(this._verticalLabel),this._horizontalLabel=E(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:t,viewMode:e}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,t)switch(e){case y.None:break;case y.Direct:this._segmentVisualElement.visible=!0;break;case y.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case y.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:t,camera:e,viewMode:i,elevationAlignedStartPoint:s,elevationAlignedEndPoint:r,orientation:o,visualizedMeasurement:u,stripeLength:c}){const l=t.renderCoordsHelper;if(l==null||s==null||r==null||s.equals(r))return;let h=this._startPosition,n=this._endPosition;l.toRenderCoords(s,h),l.toRenderCoords(r,n);const p=o===S.AboveSegment?1:-1,m=p*(l.getAltitude(n)-l.getAltitude(h));m<0&&(h=this._endPosition,n=this._startPosition);const _=u==="geodesic"?new ge(this._startPosition,this._endPosition,l.spatialReference):new j(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=_,this._updateSegmentStripeLength(c),i){case y.Direct:this._updateSegment(_,o);break;case y.Triangle:this._updateSegmentAndTriangle({view:t,camera:e,segment:_,orientation:o,startPosition:h,endPosition:n,deltaSign:p,altitudeDelta:m});break;case y.ProjectedGeodesic:this._updateSegmentAndProjection({view:t,orientation:o,startPosition:h,endPosition:n})}}_updateSegment(t,e){this._segmentLabel.anchor=e===S.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:t,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:t},camera:e,segment:i,orientation:s,startPosition:r,endPosition:o,deltaSign:u,altitudeDelta:c}){const l=this._cornerPosition;t.worldUpAtPosition(r,l),Xe(l,l,u*Math.abs(c)),Ze(l,l,r),this._triangleVisualElement.geometry=[[[r[0],r[1],r[2]],[l[0],l[1],l[2]],[o[0],o[1],o[2]]]],this._rightAngleQuad.geometry={previous:r,center:l,next:o};const h=new j(r,l),n=new j(l,o),p=Ht(r,o,l,s,e);this._segmentLabel.anchor=p.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._verticalLabel.anchor=p.vertical,this._horizontalLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},this._horizontalLabel.anchor=p.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:t},orientation:e,startPosition:i,endPosition:s}){t.setAltitude(this._startPositionAtSeaLevel,0,i),t.setAltitude(this._endPositionAtSeaLevel,0,s);const r=new ge(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(r),this._geodesicStartHint.setGeometryFromSegment(new j(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new j(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:r,sampleLocation:"center"},this._segmentLabel.anchor=e===S.AboveSegment?"top":"bottom"}_updateLabelText({text:t,visualizedMeasurement:e}){t!=null?(this._segmentLabel.text=e==="euclidean"?t.directDistance:t.horizontalDistance,this._horizontalLabel.text=t.horizontalDistance,this._verticalLabel.text=t.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:t,viewMode:e}){const i=this._segmentLabel,s=this._horizontalLabel,r=this._verticalLabel;if(i.visible=!1,s.visible=!1,r.visible=!1,t)switch(e){case y.Direct:i.visible=!0;break;case y.Triangle:i.visible=!0,s.visible=!0,r.visible=!0;break;case y.ProjectedGeodesic:i.visible=!0;case y.None:}}get _labelsText(){if(this.destroyed)return null;const t=this.messages,e=this.analysisView.result;if(e==null||t==null)return null;const{directDistance:i,horizontalDistance:s,verticalDistance:r}=e,o=this.analysisView.unit,u=c=>({directDistance:"",horizontalDistance:"",verticalDistance:"",...c});switch(o){case"metric":return u({directDistance:i&&pe(t,i),horizontalDistance:s&&pe(t,s),verticalDistance:r&&Ue(t,r)});case"imperial":return u({directDistance:i&&he(t,i),horizontalDistance:s&&he(t,s),verticalDistance:r&&Be(t,r)});default:return u({directDistance:i&&U(t,i,o),horizontalDistance:s&&U(t,s,o),verticalDistance:r&&U(t,r,o)})}}_updateSegmentStripeLength(t){const e=this._segmentVisualElement;t!=null?(e.stripeLength=t,e.stripesEnabled=!0):e.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(this._triangleOrientationOverride!=null)return this._triangleOrientationOverride;const t=this.visualElementOrientation;return t===S.Auto?this.view.state.camera.aboveGround?S.AboveSegment:S.BelowSegment:t}_requiresGeodesicGuideAt(t){const e=this.view;if(!(e!=null&&e.state))return!1;const i=e.state.camera,s=e.renderCoordsHelper;if(!s)return!1;const r=i.computeScreenPixelSizeAt(t);return s.getAltitude(t)/r>=10}get _measurementArrowStripeLength(){const{result:t,unit:e}=this.analysisView;if(t==null)return null;let i=null;const s=t.directDistance;switch(e){case"metric":i=s&&A(s,"meters");break;case"imperial":i=s&&A(s,xe(s.value,s.unit));break;default:i=s&&A(s,e)}return i==null?null:Fe(i.value/30)*Re(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,Ie("esri/core/t9n/Units").then(t=>{this.messages=t}).finally(()=>{this.loadingMessages=!1})}get testData(){}};function Ht(t,e,i,s,r){const o=Nt,u=It;r.projectToRenderScreen(i,o),r.projectToRenderScreen(e,u);const c={segment:"bottom",horizontal:"top",vertical:o[0]<u[0]?"left":"right"};{const l=kt,h=Wt;if(J(t,i,r,l),J(t,e,r,h),me(l,h)>=Ee){const n=Math.sign(l[1])===Math.sign(h[1]);c.segment=n?_e(c.vertical):c.vertical}else{const n=Ft;J(i,e,r,n),me(n,h)>=Ee&&(c.segment=Math.sign(n[0])===Math.sign(h[0])?_e(c.horizontal):c.horizontal)}}if(s===S.BelowSegment){const l=h=>h==="top"?"bottom":"top";c.segment=l(c.segment),c.horizontal=l(c.horizontal),c.vertical=l(c.vertical)}return c}a([d()],v.prototype,"_parameters",null),a([d()],v.prototype,"_triangleOrientationOverride",void 0),a([d()],v.prototype,"messages",void 0),a([d()],v.prototype,"view",void 0),a([d()],v.prototype,"analysis",void 0),a([d()],v.prototype,"analysisView",void 0),a([d()],v.prototype,"loadingMessages",void 0),a([d()],v.prototype,"visible",null),a([d()],v.prototype,"viewMode",null),a([d()],v.prototype,"actualVisualizedMeasurement",null),a([d()],v.prototype,"visualElementOrientation",void 0),a([d()],v.prototype,"triangleCollapseRatioThreshold",void 0),a([d()],v.prototype,"allowVisualElementsOrientationChange",null),a([d()],v.prototype,"labels",null),a([d()],v.prototype,"_labelsText",null),a([d()],v.prototype,"_actualVisualElementsOrientation",null),a([d()],v.prototype,"_measurementArrowStripeLength",null),v=a([oe("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],v);const Ee=Math.cos(Qe(12)),Nt=Ce(),It=Ce(),kt=ne(),Wt=ne(),Ft=ne();let g=class extends Me(re){constructor(t){super(t),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=$.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const t=this.view,e=this.analysis;this._analysisVisualization=new v({view:t,analysis:e,analysisView:this}),this._analysisController=new V({view:t,analysis:e,viewData:this})}destroy(){this._analysisController=E(this._analysisController),this._analysisVisualization=E(this._analysisVisualization)}get updating(){var t;return!!((t=this._analysisVisualization)!=null&&t.loadingMessages)}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(t){this._analysisVisualization.visualElementOrientation=t}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(t){this._analysisVisualization.allowVisualElementsOrientationChange=t}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(t){this._analysisVisualization.triangleCollapseRatioThreshold=t}get directLabelText(){var t;return((t=this._analysisVisualization.labels.direct)==null?void 0:t.text)??""}get horizontalLabelText(){var t;return((t=this._analysisVisualization.labels.horizontal)==null?void 0:t.text)??""}get verticalLabelText(){var t;return((t=this._analysisVisualization.labels.vertical)==null?void 0:t.text)??""}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){}};a([d()],g.prototype,"updating",null),a([d({readOnly:!0})],g.prototype,"type",void 0),a([d({constructOnly:!0,nonNullable:!0})],g.prototype,"analysis",void 0),a([d()],g.prototype,"result",void 0),a([d()],g.prototype,"measurementMode",void 0),a([d()],g.prototype,"elevationAlignedStartPoint",void 0),a([d()],g.prototype,"elevationAlignedEndPoint",void 0),a([d({readOnly:!0})],g.prototype,"viewMode",null),a([d({readOnly:!0})],g.prototype,"actualVisualizedMeasurement",null),a([d()],g.prototype,"visualElementOrientation",null),a([d()],g.prototype,"allowVisualElementsOrientationChange",null),a([d()],g.prototype,"triangleCollapseRatioThreshold",null),a([d({readOnly:!0})],g.prototype,"directLabelText",null),a([d({readOnly:!0})],g.prototype,"horizontalLabelText",null),a([d({readOnly:!0})],g.prototype,"verticalLabelText",null),a([d()],g.prototype,"_analysisVisualization",void 0),a([d()],g.prototype,"_analysisController",void 0),a([d()],g.prototype,"unit",null),a([d($e)],g.prototype,"_defaultUnit",void 0),g=a([oe("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],g);const Rr=g,Qt=Object.freeze(Object.defineProperty({__proto__:null,build:Pe},Symbol.toStringTag,{value:"Module"}));export{Rr as default};
