import{b as j}from"./Graphic-CFXUQZlS.js";import{aP as M}from"./Accessor-BHnuXKD2.js";import{f as V,g as A}from"./screenUtils-_ZIvrt5o.js";import{n as F}from"./vec3f64-BLpZdpfb.js";import{g as w,j as G}from"./Point-XGrwlf63.js";import{n as R}from"./projectVectorToVector-dS8io47t.js";import{o as H}from"./LayerConstants-B33OP6sh.js";import{m as T}from"./layerUtils-dJgsXxkC.js";import{t as W}from"./Material-Ba8x5bbY.js";import{a as X}from"./ElevationProvider-aS5xrHHy.js";import{T as C}from"./Intersector-DqUGp7Vs.js";import{e as E,o as k,i as z}from"./intersectorUtils-l6zkk4nF.js";import{f as D,h as N}from"./intersectorUtilsConversions-CZnn6t-z.js";import{w as U}from"./verticalOffsetUtils-CUH6QZ7-.js";class ae{constructor(t){this._store=t}destroy(){this._store.destroy()}get(t){return this._store.get(t)}put(t,n){this._store.put(t,n)}}async function ue(e,t,n,i){const r=n?_(e,n):i,l=V(t.x,t.y);r.requiresGroundFeedback=!0,r.enableDraped=!0;const o=C(e.state.viewingMode);o.options.selectionMode=!0,o.options.store=E.ALL,e.sceneIntersectionHelper.intersectIntersectorScreen(l,o,r);const u=q(e,o.results.all,r.graphics),s=o.results.ground,c=D(s,e),d=c!=null&&"type"in c&&T(c.type)?c:null,a={screenPoint:t,results:u,ground:{mapPoint:m(e,s),distance:k(s)?s.distanceInRenderSpace:0,layer:d}};return W.SCENEVIEW_HITTEST_RETURN_INTERSECTOR&&(a.intersector=o),a}function de(e,t,n,i){var d,a,x,L,b;const r=n?_(e,n):i,l=!(!((d=r.graphics)!=null&&d.include)&&!((a=r.graphics)!=null&&a.exclude)),o=!(!((x=r.mediaElements)!=null&&x.include)&&!((L=r.mediaElements)!=null&&L.exclude)),u=A(t);r.enableDraped=r.include&&!r.include.has(U)||((b=r.exclude)==null?void 0:b.has(U));const s=e.sceneIntersectionHelper,c=C(e.state.viewingMode);if(c.options.selectionMode=!0,c.options.store=l||o?E.ALL:E.MIN,c.options.excludeLabels=(n==null?void 0:n.excludeLabels)??!1,s.intersectIntersectorScreen(u,c,r),l||o){for(const y of c.results.all){const g=N(y,e);if(g==null||l&&(g.type!=="graphic"||P(r.graphics,g.graphic))||o&&(g.type!=="media"||v(r.mediaElements,g.element)))return m(e,y)}return null}return m(e,c.results.min)}function q(e,t,n){const i=new Array;let r=null;for(let l=0;l<t.length;l++){const o=t[l],u=D(o,e);if(u!=null&&(u===e.map.ground||"type"in u&&T(u.type)))break;const s=N(o,e);if(s==null)continue;if(s.type==="graphic"){if(r==null&&l!==t.length-1&&(r=new Set),r!=null){const a=S(s.graphic);if(r.has(a))continue;r.add(a)}if(!P(n,s.graphic))continue}const c=m(e,o),d=o.distanceInRenderSpace;if(s.type==="media"){const a=s.element.toSource(c);i.push({...s,mapPoint:c,distance:d,sourcePoint:a})}else i.push({...s,mapPoint:c,distance:d})}return i}function m(e,t,n){return t.getIntersectionPoint(f)?(n=O(e,f,n),t.intersector===z.TERRAIN&&e.basemapTerrain&&(n.z=X(e.basemapTerrain,n)??0),n):null}function S(e){var r;const t=e.sourceLayer,n=e.layer,i=t&&"objectIdField"in t?t:n&&"objectIdField"in n?n:t;if(i){const l=i.objectIdField??H,o=(r=e.attributes)==null?void 0:r[l];if(o)return`o-${i.id}-${o}`}return`u-${e.uid}`}function P(e,t){return v(e,S(t))}function v(e,t){return e==null||(e.include==null||e.include.has(t))&&(e.exclude==null||!e.exclude.has(t))}function O(e,t,n){let i=e.spatialReference||w.WGS84;return R(t,e.renderSpatialReference,f,i)?t=f:(i=w.WGS84,R(t,e.renderSpatialReference,f,i)&&(t=f)),n?(n.x=t[0],n.y=t[1],n.z=t[2],n.spatialReference=i):n=new G(t,i),n}function _(e,t){const n=I(e,t.include,h.INCLUDE),i=I(e,t.exclude,h.EXCLUDE);return{include:n.layerUids,exclude:i.layerUids,graphics:{include:n.graphicUids,exclude:i.graphicUids},mediaElements:{include:n.mediaElements,exclude:i.mediaElements}}}function I(e,t,n,i={layerUids:void 0,graphicUids:void 0,mediaElements:void 0}){if(!t)return i;if(t instanceof j)B(i,S(t)),n===h.INCLUDE&&(e.graphicsView!=null&&t.layer===e?p(i,e.graphicsView.processor.layer.id):t.layer&&p(i,t.layer.uid));else if("layer"in t&&"element"in t)J(i,t.element),n===h.INCLUDE&&p(i,t.layer.uid);else if(M(t))for(const r of t)r===e.graphics&&e.graphicsView!=null?p(i,e.graphicsView.processor.layer.id):r===e.map.ground?p(i,U):I(e,r,n,i);else"uid"in t&&p(i,t.uid);return i}function p(e,t){e.layerUids||(e.layerUids=new Set),e.layerUids.add(t)}function B(e,t){e.graphicUids||(e.graphicUids=new Set),e.graphicUids.add(t)}function J(e,t){e.mediaElements||(e.mediaElements=new Set),e.mediaElements.add(t)}const f=F();var h;(function(e){e[e.INCLUDE=0]="INCLUDE",e[e.EXCLUDE=1]="EXCLUDE"})(h||(h={}));export{_ as R,ue as U,de as b,ae as t,O as x};
