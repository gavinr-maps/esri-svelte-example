import{w as u}from"./Extent-g5W9hy0j.js";import{f as s}from"./scaleUtils-DPfHG2g0.js";function m(t){var n;switch(t==null?void 0:t.type){case"point":return t;case"extent":return t.center;case"polygon":return t.centroid;case"multipoint":case"polyline":return(n=t.extent)==null?void 0:n.center;default:return null}}async function f(t,n){var a,c;if(t.hasZ||n.type==="2d")return t;const e=(a=n.map)==null?void 0:a.ground;if(!(e!=null&&e.layers.length))return t;const{geometry:r}=await e.queryElevation(t,{cache:(c=n.basemapTerrain)==null?void 0:c.elevationQueryCache});return r}function y(t,n,e){return i(t.center,n,e)}function x(t,n,e){switch(t==null?void 0:t.type){case"extent":return t;case"multipoint":case"polygon":case"polyline":return t.extent;case"point":return i(t,n,e);default:return null}}function i(t,n,e){const r=t.hasZ?t.z:void 0;if(n!=null&&n.map)return(e!=null?s(n,e):n.extent).clone().centerAt(t).set({zmax:r,zmin:r});const{x:a,y:c,spatialReference:o}=t;return new u({xmin:a-.25,ymin:c-.25,xmax:a+.25,ymax:c+.25,spatialReference:o,zmin:r,zmax:r})}export{y as a,x as c,m as n,f as r};
