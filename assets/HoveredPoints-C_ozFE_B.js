import{r as l}from"./tslib.es6-B3Jf3DVX.js";import{b as c}from"./Accessor-BLX9ikPh.js";import{V as m}from"./Collection-CEdjem1-.js";import{watch as v,syncAndInitial as P}from"./reactiveUtils-C5zUhJQJ.js";import{m as p,a as f}from"./subclass-BZA_h8Db.js";import{r as b}from"./ElevationProfile-ltu2j9-y.js";import{l as y}from"./AnchorElementViewModel-DhGwA7fN.js";let a=class extends c{constructor(e){super(e),this._hoveredPoints=new m}initialize(){this.addHandles(v(()=>this._hoveredPoints.toArray().map(({anchor:e,element:o})=>({screenLocation:e.screenLocation,element:o})),e=>{for(const{screenLocation:o,element:t}of e)o&&(t.style.transform=`translate(${o.x}px, ${o.y}px)`)},P))}destroy(){this._hoveredPoints.drain(e=>this._destroyHoveredPoint(e))}update(e){var s;const o=this.view,t=this._hoveredPoints,i=e.length;for(;this._hoveredPoints.length>i;)this._destroyHoveredPoint(this._hoveredPoints.pop());for(;this._hoveredPoints.length<i;){const n=this._makeHoveredPoint();t.push(n),(s=o.surface)==null||s.appendChild(n.element)}for(let n=0;n<i;++n){const h=t.at(i-1-n),d=e[n];this._updateHoveredPoint(h,d)}}_makeHoveredPoint(){const{size:e,borderStyle:o,borderColor:t,borderWidth:i,boxShadow:s}=b().hoveredPointsStyle,n=this.view,h=new y({view:n,screenLocationEnabled:!0}),d=document.createElement("div"),r=d.style;return r.position="absolute",r.top="0",r.left="0",r.contain="strict",r.boxSizing="border-box",r.width=`${e}px`,r.height=`${e}px`,r.marginTop=`-${e/2}px`,r.marginLeft=`-${e/2}px`,r.border=`${o} ${i}px ${t}`,r.borderRadius=`${e}px`,r.boxShadow=s,{anchor:h,element:d}}_updateHoveredPoint({anchor:e,element:o},t){e.screenLocationEnabled=!0,e.location=t.hoveredPoint;const i=o.style;i.display="block",i.background=t.color.toCss()}_destroyHoveredPoint({anchor:e,element:o}){var t;e.destroy(),(t=this.view.surface)==null||t.removeChild(o)}};l([p()],a.prototype,"view",void 0),l([p()],a.prototype,"_hoveredPoints",void 0),a=l([f("esri.widgets.ElevationProfile.support.HoveredPoints")],a);export{a};