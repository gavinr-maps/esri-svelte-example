import"./geometry-D964gYQX.js";import{s as D}from"./Accessor-BLX9ikPh.js";import{n as O}from"./vec3f64-BLpZdpfb.js";import{i as P}from"./projectPointToVector-GINIbYMz.js";import{e as q}from"./projectVectorToVector-G2uWGoIb.js";import{s as E}from"./elevationInfoUtils-BC_66_Fg.js";import{d as G,c as A,f as B,o as H,R as J}from"./RibbonLine.glsl-BZu1FDpE.js";import{g as $}from"./Point-Cg0-ChZE.js";import{i as N}from"./fieldUtils-tmQlKvWo.js";async function X(t,p,d,f,a){const{elevationProvider:l,renderCoordsHelper:s}=t,{elevationInfo:u}=p,{pointsInFeatures:b,spatialReference:m}=f,g=$.fromJSON(m),h=G(u,!0),y=await A(h,g,a);D(a);const c=[],e=new Set,r=new Set,o=new H,n=q(0,0,0,$.WGS84),i=new J,S=O();n.spatialReference=g;const j=t.elevationProvider.spatialReference??t.spatialReference;for(const{objectId:w,points:v}of b){const I=d(w);if(I==null){for(const R of v)c.push(R.z??0);e.add(w);continue}I.isDraped&&r.add(w);const z=I.graphic.geometry;o.setFromElevationInfo(E(z,u)),o.updateFeatureExpressionInfoContext(y,I.graphic,p);for(const{x:R,y:C,z:F}of v)n.x=R,n.y=C,n.z=F??0,await P(n,S,j,0,{signal:a}),B(S,l,o,s,i),c.push(i.z)}return{elevations:c,drapedObjectIds:r,failedObjectIds:e}}async function Y(t,p,d){if(t==null||p.candidates.length===0)return x;const f=t.graphics3DGraphicsByObjectID??t.graphics3DGraphics,a=[],l=[],{renderer:s}=t,u=s!=null&&"arcadeRequired"in s&&s.arcadeRequired?N():null,b=async(e,{graphic:r,graphics3DSymbol:o})=>{const n=await u,i=await t.getRenderingInfoAsync(r,s,n,{signal:d});return i==null?[]:o.queryForSnapping(e,g,i,d)},{candidates:m,spatialReference:g}=p;for(let e=0;e<m.length;++e){const r=m[e],{objectId:o}=r,n=typeof o=="number"?f==null?void 0:f.get(o):void 0;if(n==null)continue;const{graphics3DSymbol:i}=n;i.symbologySnappingSupported&&(a.push(b(r,n)),l.push(e))}if(a.length===0)return x;const h=await Promise.all(a);D(d);const y=[],c=[];for(let e=0;e<h.length;++e){const r=h[e],o=l[e];for(const n of r)y.push(n),c.push(o)}return{candidates:y,sourceCandidateIndices:c}}const x={candidates:[],sourceCandidateIndices:[]};export{X as m,Y as r};