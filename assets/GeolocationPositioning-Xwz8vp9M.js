import{r as n}from"./tslib.es6-B3Jf3DVX.js";import{d}from"./Graphic-DsxsIjhH.js";import{b as M,s as S,c as f}from"./Accessor-BLX9ikPh.js";import{b as C,m as l,a as E}from"./subclass-BZA_h8Db.js";import{o as P}from"./Evented-BHRw9x22.js";import{watch as x,initial as R}from"./reactiveUtils-C5zUhJQJ.js";import{d as I}from"./symbols-CNimns--.js";import{g as U,f as F}from"./geolocationUtils-GsLnPMCi.js";import{t as N}from"./GoTo-Wtu9mgoE.js";const z=2500,m={type:"CIMPictureMarker",primitiveName:"headingOverride",enable:!0,anchorPoint:{x:0,y:-.5},anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:36,billboardMode3D:"FaceNearPlane",invertBackfaceTexture:!0,scaleX:1,textureFilter:"Picture",url:"data:image/png;base64,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"},k=new I({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:0},anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:14,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:17,ymax:17},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[8.5,0],[7.02,.13],[5.59,.51],[4.25,1.14],[3.04,1.99],[1.99,3.04],[1.14,4.25],[.51,5.59],[.13,7.02],[0,8.5],[.13,9.98],[.51,11.41],[1.14,12.75],[1.99,13.96],[3.04,15.01],[4.25,15.86],[5.59,16.49],[7.02,16.87],[8.5,17],[9.98,16.87],[11.41,16.49],[12.75,15.86],[13.96,15.01],[15.01,13.96],[15.86,12.75],[16.49,11.41],[16.87,9.98],[17,8.5],[16.87,7.02],[16.49,5.59],[15.86,4.25],[15.01,3.04],[13.96,1.99],[12.75,1.14],[11.41,.51],[9.98,.13],[8.5,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Round",joinStyle:"Round",lineStyle3D:"Strip",miterLimit:10,width:2,color:[255,255,255,255]},{type:"CIMSolidFill",enable:!0,color:[0,122,194,255]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:0},anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:16,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:17,ymax:17},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[8.5,0],[7.02,.13],[5.59,.51],[4.25,1.14],[3.04,1.99],[1.99,3.04],[1.14,4.25],[.51,5.59],[.13,7.02],[0,8.5],[.13,9.98],[.51,11.41],[1.14,12.75],[1.99,13.96],[3.04,15.01],[4.25,15.86],[5.59,16.49],[7.02,16.87],[8.5,17],[9.98,16.87],[11.41,16.49],[12.75,15.86],[13.96,15.01],[15.01,13.96],[15.86,12.75],[16.49,11.41],[16.87,9.98],[17,8.5],[16.87,7.02],[16.49,5.59],[15.86,4.25],[15.01,3.04],[13.96,1.99],[12.75,1.14],[11.41,.51],[9.98,.13],[8.5,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Round",joinStyle:"Round",lineStyle3D:"Strip",miterLimit:10,width:0,color:[255,255,255,255]},{type:"CIMSolidFill",enable:!0,color:[0,0,0,66]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,offsetX:0,offsetY:-1},m],angleAlignment:"Map"},primitiveOverrides:[{type:"CIMPrimitiveOverride",primitiveName:"headingOverride",propertyName:"Rotation",valueExpressionInfo:{type:"CIMExpressionInfo",title:"Rotation override",expression:"360 - $feature.heading",returnType:"Default"}},{type:"CIMPrimitiveOverride",primitiveName:"headingOverride",propertyName:"TintColor",valueExpressionInfo:{type:"CIMExpressionInfo",title:"TintColor override",expression:"IIF(IsEmpty($feature.heading), [255, 255, 255, 0], [255, 255, 255, 1])",returnType:"Default"}}]}});let r=class extends N(P.EventedMixin(M)){constructor(){super(...arguments),this._geolocationUsable=!0,this.geolocationOptions=null,this.goToLocationEnabled=!0,this.graphic=new d({symbol:k}),this.scale=null,this.rotationEnabled=!0,this.view=null}initialize(){U()||(this._geolocationUsable=!1),this.addHandles([x(()=>{var e;return(e=this.view)==null?void 0:e.type},()=>this._handleViewTypeChange(),R)])}destroy(){this._clearGraphic(),this.view=null}_clearGraphic(){const{view:e,graphic:t}=this;e&&t&&e.graphics.remove(t)}_addGraphic(){const{view:e,graphic:t}=this;e!=null&&e.graphics&&t&&!e.graphics.includes(t)&&e.graphics.push(t)}_handleViewTypeChange(){var e;m.enable=((e=this.view)==null?void 0:e.type)==="2d"}_getScaleWithinConstraints(e,t){if(!t)return e;if(t.type==="2d"){const{effectiveMaxScale:i,effectiveMinScale:o}=t.constraints;return Math.min(o,Math.max(i,e))}return e}_getScale(e){const{scale:t}=this,i=typeof t=="number"?t:z;return this._getScaleWithinConstraints(i,e)}_getHeading(e,t){var s;const i=t==null?void 0:t.spatialReference,o=(i==null?void 0:i.isWebMercator)||(i==null?void 0:i.isGeographic),a=(s=e.coords)==null?void 0:s.heading;return!o||typeof a!="number"||isNaN(a)||a<0||a>360?null:a}_addHeading(e){const{heading:t,target:i,view:o}=e;o&&t!==null&&(o.type!=="3d"?o.type==="2d"&&(i.rotation=360-t):i.heading=t)}async _animatePoint(e,t,i,o){const{view:a}=this;if(!this.goToLocationEnabled||!a)return;const s={target:e,scale:t};this.rotationEnabled&&this._addHeading({heading:i,target:s,view:a});const p={signal:o.signal};S(p),await this.callGoTo({target:s,options:p})}async updatePosition(e,t){try{const i=this.view,o=await F({position:e,view:i},{signal:t.signal}),{graphic:a}=this,{timestamp:s,coords:p}=e,{accuracy:y,altitude:g,altitudeAccuracy:h,latitude:A,longitude:u,speed:v}=p,c=this._getHeading(e,i),b={timestamp:s,accuracy:y,altitude:g,altitudeAccuracy:h,heading:c,latitude:A,longitude:u,speed:v};a&&(a.geometry=o,a.attributes=b);const w=this._getScale(i);await this._animatePoint(o,w,c,t)}catch(i){if(!f(i))throw new C("geolocation-positioning:invalid-point","Cannot position invalid point",{error:i})}return e}};n([l()],r.prototype,"_geolocationUsable",void 0),n([l()],r.prototype,"geolocationOptions",void 0),n([l()],r.prototype,"goToLocationEnabled",void 0),n([l({type:d,nonNullable:!0})],r.prototype,"graphic",void 0),n([l()],r.prototype,"scale",void 0),n([l()],r.prototype,"rotationEnabled",void 0),n([l()],r.prototype,"view",void 0),r=n([E("esri.widgets.support.GeolocationPositioning")],r);const q=r;export{q as b};