import{w as n}from"./Extent-CBBGeHb-.js";import{b as v,j as i}from"./Point-XGrwlf63.js";import{P as o,j as e,u as t}from"./Polyline-BmuD2-ZN.js";function u(r){return r.xmin!==void 0&&r.ymin!==void 0&&r.xmax!==void 0&&r.ymax!==void 0}function m(r){return r.points!==void 0}function l(r){return r.x!==void 0&&r.y!==void 0}function s(r){return r.paths!==void 0||r.curvePaths!==void 0}function y(r){return r.rings!==void 0||r.curveRings!==void 0}function G(r){return r==null?null:r instanceof v?r:l(r)?i.fromJSON(r):s(r)?o.fromJSON(r):y(r)?e.fromJSON(r):m(r)?t.fromJSON(r):u(r)?n.fromJSON(r):null}function P(r){return r?l(r)?"esriGeometryPoint":s(r)?"esriGeometryPolyline":y(r)?"esriGeometryPolygon":u(r)?"esriGeometryEnvelope":m(r)?"esriGeometryMultipoint":null:null}const c={esriGeometryPoint:i,esriGeometryPolyline:o,esriGeometryPolygon:e,esriGeometryEnvelope:n,esriGeometryMultipoint:t,esriGeometryMultiPatch:e};function f(r){return r&&c[r]||null}export{f as c,G as f,l,u as m,s,m as u,P as v,y};
