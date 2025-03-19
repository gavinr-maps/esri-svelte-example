import{P as c,s as o}from"./cast-CsZslgGN.js";function d(t){return p(t)||l(t)}function m(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="feature"}function v(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="graphics"}function w(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="map-notes"&&"sublayers"in t}function h(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="knowledge-graph"&&"layers"in t}function j(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="link-chart"&&"layers"in t}function l(t){return(t==null?void 0:t.type)==="scene"}function y(t){return t!=null&&typeof t=="object"&&"type"in t&&t.type==="subtype-group"&&"sublayers"in t}function L(t){return(t==null?void 0:t.type)==="subtype-sublayer"}function p(t){const e=t==null?void 0:t.type;return e==="imagery-tile"||e==="tile"||e==="open-street-map"||e==="vector-tile"||e==="web-tile"||e==="wmts"}function S(t){const e=t==null?void 0:t.type;return e==="base-tile"||e==="tile"||e==="elevation"||e==="imagery-tile"||e==="base-elevation"||e==="open-street-map"||e==="wcs"||e==="web-tile"||e==="wmts"||e==="vector-tile"}function C(t){return t!=null&&"type"in t&&t.type==="group"}const M={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};function x(t){const e=t==null?void 0:t.type;return e==="building-scene"||e==="integrated-mesh"||e==="point-cloud"||e==="scene"}function E(t){return t==="IntegratedMeshLayer"||t==="IntegratedMesh3DTilesLayer"}function I(t){return t==="integrated-mesh"||t==="integrated-mesh-3dtiles"}function P(t){return(t==null?void 0:t.type)==="voxel"}function T(t){return(t==null?void 0:t.type)==="imagery-tile"}function k(t){return(t==null?void 0:t.parent)!=null&&"declaredClass"in t.parent&&t.parent.declaredClass==="esri.Basemap"&&t.parent.baseLayers.includes(t)}function B(t){var e;return(t==null?void 0:t.type)==="feature"&&!t.url&&((e=t.source)==null?void 0:e.type)==="memory"}function O(t){var n;const e=t==null?void 0:t.type;return(e==="feature"||e==="subtype-group"||e==="oriented-imagery")&&((n=t==null?void 0:t.source)==null?void 0:n.type)==="feature-layer"}function $(t){if(t.activeLayer){const e=t.activeLayer.tileMatrixSet;if(e)return e;const n=t.activeLayer.tileMatrixSets;if(n)return n}return null}async function D(t,e){var s;const n=(s=o)==null?void 0:s.findServerInfo(t);if((n==null?void 0:n.currentVersion)!=null)return n.owningSystemUrl||null;const i=t.toLowerCase().indexOf("/rest/services");if(i===-1)return null;const u=`${t.slice(0,i)}/rest/info`,a=e!=null?e.signal:null,{data:r}=await c(u,{query:{f:"json"},responseType:"json",signal:a});return(r==null?void 0:r.owningSystemUrl)||null}function f(t){if(!("capabilities"in t))return!1;switch(t.type){case"catalog":case"catalog-footprint":case"csv":case"feature":case"geojson":case"imagery":case"knowledge-graph-sublayer":case"ogc-feature":case"oriented-imagery":case"scene":case"sublayer":case"subtype-group":case"subtype-sublayer":case"wfs":return!0;default:return!1}}function U(t){return t!=null&&typeof t=="object"&&"isTable"in t&&!!t.isTable}function q(t){return f(t)?"effectiveCapabilities"in t?t.effectiveCapabilities:t.capabilities:null}function b(t){if(!("editingEnabled"in t))return!1;switch(t.type){case"csv":case"feature":case"geojson":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":return!0;default:return!1}}function V(t){return!!b(t)&&("effectiveEditingEnabled"in t?t.effectiveEditingEnabled:t.editingEnabled)}function z(t){return t?("subtypes"in t?t.subtypes:y(t.parent)?t.parent.subtypes:[])??[]:[]}export{V as B,f as I,O as L,$ as M,q as O,z as P,j as a,x as b,y as c,E as d,p as f,M as g,P as h,v as i,k as j,U as k,L as l,I as m,d as n,C as p,m as r,h as s,w as u,T as v,B as w,D as x,S as y};
