import{M as u,aR as Z}from"./Accessor-BmwT4B0c.js";import{e as v,s as l,i as I,u as y}from"./memoryEstimations-Bcyf-mHz.js";import{g as k}from"./Point-Cz2JYYmX.js";import{q as F,N as m}from"./aaBoundingBox-Dw3yBk2f.js";import{H as M,s as h}from"./Polyline-s-JzsQqo.js";import{H as j,D as z,B as R,C as w}from"./quantizationUtils-DgFbqZi7.js";import{y as A}from"./typeUtils-B6WBEKDM.js";import{y as T}from"./Field-BDG0QV_T.js";import"./mathUtils-Cfq9PL9W.js";function V(){return u("curve-densification-coarse-segments")}function S(){return u("curve-densification-max-segments")}function W(){return u("curve-densification-min-segments")}function X(){return u("curve-densification-pixels-per-segment")}class Y{constructor(e,s,n){this.uid=e,this.geometry=s,this.attributes=n,this.visible=!0,this.objectId=null,this.centroid=null}}function _(t){return t.geometry!=null}class ${constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function tt(t,e){var f;const s=A.fromJSON(t.geometryType),n=k.fromJSON(t.spatialReference),r=t.transform,o=t.objectIdFieldName,d=e==null?void 0:e.maxStringAttributeLength,b=e==null?void 0:e.maxStringAttributeFields;let c;const x=t.features.map(p=>{const a=L(p,s,n,t.objectIdFieldName),i=a.geometry;if(O(a.attributes,b,d,N=>{c??(c=[]);const g=J(a,o);g!=null&&c.push({objectId:g,attribute:N})}),i!=null&&r)switch(i.type){case"point":a.geometry=w(r,i,i);break;case"multipoint":a.geometry=R(r,i,i);break;case"polygon":a.geometry=z(r,i,i);break;case"polyline":a.geometry=j(r,i,i);break;case"extent":case"mesh":a.geometry=i}return a});return{geometryType:s,features:x,spatialReference:n,fields:((f=t.fields)==null?void 0:f.map(p=>T.fromJSON(p)))??[],objectIdFieldName:t.objectIdFieldName,globalIdFieldName:t.globalIdFieldName,geohashFieldName:t.geohashFieldName,geometryProperties:t.geometryProperties,hasZ:t.hasZ,hasM:t.hasM,exceededTransferLimit:t.exceededTransferLimit,transform:null,missingAttributes:c}}function L(t,e,s,n){return{uid:Z(),objectId:n&&t.attributes?t.attributes[n]:null,attributes:t.attributes,geometry:P(t.geometry,e,s),visible:!0}}function P(t,e,s){if(t==null)return null;switch(e){case"point":{const n=t;return{x:n.x,y:n.y,z:n.z,m:n.m,hasZ:n.z!=null,hasM:n.m!=null,type:"point",spatialReference:s}}case"polyline":{const n=t;return{paths:n.paths,hasZ:!!n.hasZ,hasM:!!n.hasM,type:"polyline",spatialReference:s}}case"polygon":{const n=t;return{rings:n.rings,hasZ:!!n.hasZ,hasM:!!n.hasM,type:"polygon",spatialReference:s}}case"multipoint":{const n=t;return{points:n.points,hasZ:!!n.hasZ,hasM:!!n.hasM,type:"multipoint",spatialReference:s}}}}function H(t){if(t==null)return 0;switch(t.type){case"point":return l+10+8+24;case"polyline":case"polygon":{let e=0;const s=2+(t.hasZ?1:0)+(t.hasM?1:0),n=t.type==="polyline"?t.paths:t.rings,r=t.type==="polyline"?t.curvePaths:t.curveRings;if(r!=null&&r.length){const o=3*S()*128;e=8*o*s+128*o+32*(n.length+1)}else e=y(n);return l+64+e+34}case"multipoint":{const e=y(t.points);return l+e+64+34+32}case"extent":return l+10+64+34;case"mesh":{const e=t.vertexAttributes;return l+I(e.position,e.normal,e.uv,e.tangent)}default:return l}}function et(t){let e=32;return e+=v(t.attributes),e+=3,e+=8+H(t.geometry),e}function st(t){if(t==null)return 0;switch(t.type){case"point":return 1;case"polyline":{let e=0;for(const s of t.paths)e+=s.length;return e}case"polygon":{let e=0;for(const s of t.rings)e+=s.length;return e}case"multipoint":return t.points.length;case"extent":return 2;case"mesh":{const e=t.vertexAttributes&&t.vertexAttributes.position;return e?e.length/3:0}default:return}}function nt(t){if(t==null)return!1;switch(t.type){case"extent":case"point":return!0;case"polyline":for(const e of t.paths)if(e.length>0)return!0;return!1;case"polygon":for(const e of t.rings)if(e.length>0)return!0;return!1;case"multipoint":return t.points.length>0;case"mesh":return!t.loaded||t.vertexAttributes.position.length>0}}function rt(t,e){switch(F(e),t.type==="mesh"&&(t=t.extent),t.type){case"point":e[0]=e[3]=t.x,e[1]=e[4]=t.y,t.hasZ&&(e[2]=e[5]=t.z);break;case"polyline":for(let s=0;s<t.paths.length;s++)m(e,t.paths[s],!!t.hasZ);break;case"polygon":for(let s=0;s<t.rings.length;s++)m(e,t.rings[s],!!t.hasZ);break;case"multipoint":m(e,t.points,!!t.hasZ);break;case"extent":e[0]=t.xmin,e[1]=t.ymin,e[3]=t.xmax,e[4]=t.ymax,t.zmin!=null&&(e[2]=t.zmin),t.zmax!=null&&(e[5]=t.zmax)}}function it(t,e){switch(M(e),t.type==="mesh"&&(t=t.extent),t.type){case"point":e[0]=e[2]=t.x,e[1]=e[3]=t.y;break;case"polyline":for(let s=0;s<t.paths.length;s++)h(e,t.paths[s]);break;case"polygon":for(let s=0;s<t.rings.length;s++)h(e,t.rings[s]);break;case"multipoint":h(e,t.points);break;case"extent":e[0]=t.xmin,e[1]=t.ymin,e[2]=t.xmax,e[3]=t.ymax}}function J(t,e){return t.objectId!=null?t.objectId:t.attributes&&e?t.attributes[e]:null}function O(t,e,s,n){if(e!=null&&e.size&&s!=null&&t)for(const r in t){if(!e.has(r))continue;const o=t[r];typeof o=="string"&&o.length>s&&(n(r),t[r]="")}}export{H as F,et as I,nt as M,J as R,_ as b,Y as d,V as e,W as i,tt as j,st as k,S as n,X as r,rt as v,O as w,$ as x,it as z};
