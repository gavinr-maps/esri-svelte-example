import{r as t,m as a,a as l,e as d,D as h}from"./Accessor-BmwT4B0c.js";import{w as p}from"./reactiveUtils-XM7cS2OP.js";import{g as c,a as f}from"./heightModelInfoUtils-D_x68P3s.js";const w=n=>{let e=class extends n{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),c(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const s=new AbortController,i=s.signal;this.addHandles(d(()=>s.abort())),await p(()=>{var r;return(r=this.view.defaultsFromMap)==null?void 0:r.heightModelInfoReady},i),h(i);const o=f(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(o)throw o}};return t([a()],e.prototype,"view",void 0),t([a()],e.prototype,"slicePlaneEnabled",void 0),e=t([l("esri.views.3d.layers.LayerView3D")],e),e};export{w as l};
