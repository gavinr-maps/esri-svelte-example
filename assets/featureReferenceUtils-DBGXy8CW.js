import{R as w,r as R,q as T}from"./vec32-Dvg_eL9J.js";import{n as f}from"./vec3f64-BLpZdpfb.js";import{b as h,S as A}from"./sphere-C77djCO6.js";import{e as L}from"./intersectorUtils-BK9EUwUf.js";import{m as O,w as P,V as q}from"./intersectorUtilsConversions-D_fcRVdX.js";function E(t,r){return I(t)===I(r)}function I(t){if(t==null)return null;const r=t.layer!=null?t.layer.id:"";let e=null;return e=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,e==null?null:`o-${r}-${e}`}const G={json:{write:{writer:x,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:H}}}};function x(t,r){var e;((e=t==null?void 0:t.layer)==null?void 0:e.objectIdField)!=null&&t.attributes!=null&&(r.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function H(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}function J(t,r,e,l){const{sceneIntersectionHelper:F}=t,{observer:m,observerFeatureId:d,targetFeatureId:s,target:j}=e;if(d==null&&s==null)return;l||(l=n=>n),w(i,m,j);const u=R(i),c=1;T(i,m,i,c/u);const N=A(i,j,V);r.options.store=L.ALL,F.intersectToolIntersectorRay(N,r);let y=null,g=null,a=null,o=null;for(const n of r.results.all){const p=O(n,t);if(p==null||n.distanceInRenderSpace==null)continue;const b=I(p);b!=null&&(d!=null&&b===d&&(y??(y=l(S(n,t,u))),n.distanceInRenderSpace-c<y&&(a=n)),s!=null&&b===s&&(g??(g=l(S(n,t,u))),o==null&&n.distanceInRenderSpace-c<u&&u-n.distanceInRenderSpace+c<g&&(o=n)))}const{observerAdjusted:v,targetAdjusted:$}=e;a!=null&&a.getIntersectionPoint(v)?e.observerSurfaceNormal=a.getTransformedNormal(f()):e.observerSurfaceNormal=null,o!=null&&o.getIntersectionPoint($)?e.targetSurfaceNormal=o.getTransformedNormal(f()):e.targetSurfaceNormal=null}function S(t,r,e){if(P(t)){const l=q(t,r);if(l!=null)return Math.min(l*M,e)}return 1e-5*e}const M=.05,V=h(),i=f();export{G as b,E as c,I as d,J as m};