import{U as c,t as o}from"./assets-C2mb-ea2.js";function b(t){return y(t)||l(t)}function d(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="feature"}function m(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="graphics"}function v(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="map-notes"&&"sublayers"in t}function w(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="knowledge-graph"&&"layers"in t}function h(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="link-chart"&&"layers"in t}function l(t){return(t==null?void 0:t.type)==="scene"}function j(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="subtype-group"&&"sublayers"in t}function L(t){return(t==null?void 0:t.type)==="subtype-sublayer"}function y(t){const e=t==null?void 0:t.type;return e==="imagery-tile"||e==="tile"||e==="open-street-map"||e==="vector-tile"||e==="web-tile"||e==="wmts"}function S(t){const e=t==null?void 0:t.type;return e==="base-tile"||e==="tile"||e==="elevation"||e==="imagery-tile"||e==="base-elevation"||e==="open-street-map"||e==="wcs"||e==="web-tile"||e==="wmts"||e==="vector-tile"}function C(t){return t!=null&&"type"in t&&t.type==="group"}const M={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};function x(t){const e=t==null?void 0:t.type;return e==="building-scene"||e==="integrated-mesh"||e==="point-cloud"||e==="scene"}function E(t){return t==="IntegratedMeshLayer"||t==="IntegratedMesh3DTilesLayer"}function I(t){return t==="integrated-mesh"||t==="integrated-mesh-3dtiles"}function T(t){return(t==null?void 0:t.type)==="voxel"}function k(t){return(t==null?void 0:t.type)==="imagery-tile"}function B(t){return(t==null?void 0:t.parent)!=null&&"declaredClass"in t.parent&&t.parent.declaredClass==="esri.Basemap"&&t.parent.baseLayers.includes(t)}function O(t){var e;return(t==null?void 0:t.type)==="feature"&&!t.url&&((e=t.source)==null?void 0:e.type)==="memory"}function P(t){var e;return((t==null?void 0:t.type)==="feature"||(t==null?void 0:t.type)==="subtype-group")&&((e=t.source)==null?void 0:e.type)==="feature-layer"}function U(t){if(t.activeLayer){const e=t.activeLayer.tileMatrixSet;if(e)return e;const n=t.activeLayer.tileMatrixSets;if(n)return n}return null}async function D(t,e){var u;const n=(u=o)==null?void 0:u.findServerInfo(t);if((n==null?void 0:n.currentVersion)!=null)return n.owningSystemUrl||null;const i=t.toLowerCase().indexOf("/rest/services");if(i===-1)return null;const a=`${t.substring(0,i)}/rest/info`,s=e!=null?e.signal:null,{data:r}=await c(a,{query:{f:"json"},responseType:"json",signal:s});return(r==null?void 0:r.owningSystemUrl)||null}function p(t){if(!("capabilities"in t))return!1;switch(t.type){case"catalog":case"catalog-footprint":case"csv":case"feature":case"geojson":case"imagery":case"knowledge-graph-sublayer":case"ogc-feature":case"oriented-imagery":case"scene":case"sublayer":case"subtype-group":case"subtype-sublayer":case"wfs":return!0;default:return!1}}function q(t){return t!=null&&typeof t=="object"&&"isTable"in t&&!!t.isTable}function V(t){return p(t)?"effectiveCapabilities"in t?t.effectiveCapabilities:t.capabilities:null}function f(t){if(!("editingEnabled"in t))return!1;switch(t.type){case"csv":case"feature":case"geojson":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":return!0;default:return!1}}function $(t){return!!f(t)&&("effectiveEditingEnabled"in t?t.effectiveEditingEnabled:t.editingEnabled)}export{$ as B,P as L,U as M,V as O,h as a,x as b,j as c,E as d,y as f,M as g,T as h,m as i,B as j,q as k,L as l,I as m,b as n,C as p,d as r,w as s,v as u,k as v,O as w,D as x,S as y};
