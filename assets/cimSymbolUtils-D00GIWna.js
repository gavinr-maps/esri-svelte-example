import{u as f}from"./Color-DDUWtbqR.js";import{y as C,m as k,M as p,b as l,f as I}from"./utils-CO7DMJWl.js";function b(e,o,s,t){if(e)if(e.type!=="CIMTextSymbol"){if(e.effects)for(const a of e.effects)d(a,o);if(e.symbolLayers)for(const a of e.symbolLayers)switch(a.type){case"CIMPictureMarker":case"CIMVectorMarker":h(a,o,t);break;case"CIMPictureStroke":case"CIMSolidStroke":!(t!=null&&t.preserveOutlineWidth)&&a.width&&(a.width*=o);break;case"CIMPictureFill":a.height&&(a.height*=o),a.offsetX&&(a.offsetX*=o),a.offsetY&&(a.offsetY*=o);break;case"CIMHatchFill":b(a.lineSymbol,o,!0,{...t,preserveOutlineWidth:!1}),a.offsetX&&(a.offsetX*=o),a.offsetY&&(a.offsetY*=o),a.separation&&(a.separation*=o)}}else e.height!=null&&(e.height*=o)}function h(e,o,s){if(e&&(e.markerPlacement&&y(e.markerPlacement,o),e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o),e.anchorPoint&&e.anchorPointUnits==="Absolute"&&(e.anchorPoint={x:e.anchorPoint.x*o,y:e.anchorPoint.y*o}),e.size=e.size!=null?e.size*o:0,e.type==="CIMVectorMarker"&&e.markerGraphics))for(const t of e.markerGraphics)e.scaleSymbolsProportionally||b(t.symbol,o,!0,s)}function y(e,o){switch(l(e)&&e.offset&&(e.offset*=o),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=o),e.offsetAlongLine&&(e.offsetAlongLine*=o),e.placementTemplate&&e.placementTemplate.length){const s=e.placementTemplate.map(t=>t*o);e.placementTemplate=s}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=o),e.placementTemplate&&e.placementTemplate.length){const s=e.placementTemplate.map(t=>t*o);e.placementTemplate=s}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=o);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=o);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=o),e.endPosition&&(e.endPosition*=o);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o),e.stepX&&(e.stepX*=o),e.stepY&&(e.stepY*=o)}}function d(e,o){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=o);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=o);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=o),e.endCut&&(e.endCut*=o),e.middleCut&&(e.middleCut*=o);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=o),e.offsetAlongLine&&(e.offsetAlongLine*=o),e.dashTemplate&&e.dashTemplate.length){const s=e.dashTemplate.map(t=>t*o);e.dashTemplate=s}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=o);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=o);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=o);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=o),e.length&&(e.length*=o),e.toWidth&&(e.toWidth*=o);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=o),e.period&&(e.period*=o)}}function S(e){const o=[];return n(C(e),o),o.length?new f(I(o[0])):null}function n(e,o){var a;if(!e)return;let s;s=e.type==="CIMTextSymbol"?e.symbol:e;const t=e.type==="CIMPolygonSymbol";if(s!=null&&s.symbolLayers){for(const r of s.symbolLayers)if(!(r.colorLocked||t&&(k(r)||p(r)&&r.markerPlacement&&l(r.markerPlacement))))switch(r.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":r.tintColor&&M(o,r.tintColor);break;case"CIMVectorMarker":(a=r.markerGraphics)==null||a.forEach(c=>{n(c.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":M(o,r.color);break;case"CIMHatchFill":n(r.lineSymbol,o)}}}function M(e,o){for(const s of e)if(s.join(".")===o.join("."))return;e.push(o)}function E(e,o,s){o instanceof f||(o=new f(o));const t=C(e);t&&i(t,o)}function i(e,o,s){var r;if(!e)return;let t;t=e.type==="CIMTextSymbol"?e.symbol:e;const a=(t==null?void 0:t.type)==="CIMPolygonSymbol";if(t!=null&&t.symbolLayers)for(const c of t.symbolLayers){if(c.colorLocked||a&&(k(c)||p(c)&&c.markerPlacement&&l(c.markerPlacement)))continue;const m=o.toArray();switch(c.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":c.tintColor=m;break;case"CIMVectorMarker":(r=c.markerGraphics)==null||r.forEach(u=>{i(u.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":c.color=m;break;case"CIMHatchFill":i(c.lineSymbol,o)}}}export{S as C,E as I,b as l};
