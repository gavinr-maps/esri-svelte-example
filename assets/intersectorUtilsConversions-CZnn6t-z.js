import{O as x}from"./mat4-Fi6iAz29.js";import{n as U}from"./vec3f64-BLpZdpfb.js";import{F as b}from"./aaBoundingBox-CeBivBRq.js";import{N as L}from"./sphere-DQxj5tsv.js";import{o as a,i as l,a as s,b as $,c as o,d as p}from"./intersectorUtils-l6zkk4nF.js";import{i as h}from"./Intersector-DPK4WnQE.js";class H extends s{constructor(n,r,e,i){super(r,e),this.point=n,this.createGraphic=i}}function d(t){return a(t)&&t.intersector===l.PCL&&!!t.target}let O=class extends ${constructor(n,r,e,i,V){super(n),this.layerUid=n,this.sublayerUid=r,this.nodeIndex=e,this.componentIndex=i,this.triangleNr=V}};class v extends s{constructor(n,r,e){super(r,null),this.point=n,this.createVoxelGraphic=e}}let C=class extends s{constructor(n,r){super(n,null),this.createTiles3DGraphic=r}};function g(t){return a(t)&&t.intersector===l.I3S&&!!t.target}function y(t){return a(t)&&t.intersector===l.VOXEL&&!!t.target}function I(t){return a(t)&&t.intersector===l.TILES3D&&!!t.target}function w(t){return a(t)&&t.intersector===l.TERRAIN&&!!t.target}class P extends s{constructor(n,r,e){super(n,r),this.triangleNr=e}}function m(t){return a(t)&&t.intersector===l.OVERLAY&&!!t.target}function W(t,n){var r,e;return o(t)||p(t)?u((r=t.target)==null?void 0:r.object,n):w(t)?(e=n.map)==null?void 0:e.ground:d(t)||g(t)||m(t)||y(t)?u(t.target,n):null}function X(t,n){const r=G(t,n);return r!=null&&r.type==="graphic"?r.graphic:null}function G(t,n){var r;if(t==null)return null;if(o(t)||p(t))return f((r=t.target)==null?void 0:r.object,n);if(d(t)){const e=t.target.createGraphic();return{type:"graphic",graphic:e,layer:e.layer}}if(y(t)){const e=t.target.createVoxelGraphic();return{type:"graphic",graphic:e,layer:e.layer}}if(I(t)){const e=t.target.createTiles3DGraphic();return{type:"graphic",graphic:e,layer:e.layer}}return m(t)||h(t)?f(t.target,n):g(t)?T(t.target,n):null}function f(t,n){if((t==null?void 0:t.graphicUid)==null)return null;const r=u(t,n);if(r==null)return null;if(r===n.graphics)return n.graphicsView==null||typeof t.graphicUid!="number"?null:n.graphicsView.getHit(t.graphicUid);const e=n.allLayerViews.find(i=>i.layer===r);return!e||e.suspended||t.graphicUid==null?null:"getHit"in e?e.getHit(t.graphicUid):null}function T(t,n){const r=u(t,n);if(r==null)return null;const e=n.allLayerViews.find(i=>i.layer===r);return e&&!e.suspended&&"getGraphicFromIntersectorTarget"in e?B(e.getGraphicFromIntersectorTarget(t)):null}function A(t,n){const r=u(t,n);if(r==null)return null;const e=n.allLayerViews.find(i=>i.layer===r);return e&&!e.suspended&&"getAABBFromIntersectorTarget"in e?e.getAABBFromIntersectorTarget(t):null}function B(t){return t!=null?{type:"graphic",graphic:t,layer:t.layer}:null}function u(t,n){return(t==null?void 0:t.layerUid)==null?null:n.graphicsView!=null&&t.layerUid===n.graphicsView.processor.layer.id?n.graphics:n.map.allLayers.find(r=>r.uid===t.layerUid)}function Y(t,n){if(o(t)||p(t))return L(t.target.object.boundingVolumeWorldSpace.bounds);if(h(t)){x(c,t.transformation);const r=Math.max(c[0],c[1],c[2]);return t.target.baseBoundingSphere.radius*r}if(g(t)){const r=A(t.target,n);return r?.5*b(r):null}return null}function k(t){return!o(t)&&!p(t)&&(h(t)?t.target.numLodLevels>1:!!g(t))}const c=U();export{Y as V,v as c,W as f,G as h,P as i,C as l,X as m,w as n,O as o,H as s,k as w};
