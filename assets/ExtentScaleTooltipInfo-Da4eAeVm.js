import{r as t}from"./tslib.es6-B3Jf3DVX.js";import{m as e,a as u}from"./subclass-BZA_h8Db.js";import{r as x}from"./SketchTooltipInfo-BA57LzDt.js";import{p as f,h as m}from"./quantityUtils-D0GB2dMc.js";import{u as p}from"./automaticLengthMeasurementUtils-BXgXm1JY.js";let s=class extends x{constructor(i){super(i),this.type="extent-rotate",this.angle=0}};t([e()],s.prototype,"type",void 0),t([e()],s.prototype,"angle",void 0),s=t([u("esri.views.interactive.tooltip.infos.ExtentRotateTooltipInfo")],s);function g({topLeft:i,topRight:n,bottomRight:l,bottomLeft:a,spatialReference:r}){const c=f(p(a,l,r),p(i,n,r));if(c==null)return null;const y=f(p(l,n,r),p(a,i,r));return y==null?null:{xSize:c,ySize:y}}let o=class extends x{constructor(i){super(i),this.type="extent-scale",this.xScale=0,this.yScale=0,this.xSize=m,this.ySize=m}};t([e()],o.prototype,"type",void 0),t([e()],o.prototype,"xScale",void 0),t([e()],o.prototype,"yScale",void 0),t([e()],o.prototype,"xSize",void 0),t([e()],o.prototype,"ySize",void 0),o=t([u("esri.views.interactive.tooltip.infos.ExtentScaleTooltipInfo")],o);export{o as i,g as o,s};