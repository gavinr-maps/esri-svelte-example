import{r as o,m as n,a as c}from"./Accessor-BHnuXKD2.js";import{i as a}from"./Evented-DCWccWGU.js";import{p,d}from"./reactiveUtils-BR0C1Kq4.js";import{X as u}from"./projection-B2I9Bzj_.js";let t=class extends a.EventedAccessor{constructor(i){super(i),this.location=null,this.screenLocationEnabled=!1,this.view=null,this.addHandles([p(()=>{const e=this.screenLocationEnabled?this.view:null;return e?[e.size,e.type==="3d"?e.camera:e.viewpoint]:null},()=>this.notifyChange("screenLocation")),d(()=>this.screenLocation,(e,r)=>{e!=null&&r!=null&&this.emit("view-change")})])}destroy(){this.view=null}get screenLocation(){const{location:i,view:e,screenLocationEnabled:r}=this,s=e==null?void 0:e.spatialReference,l=s?u(i,s).geometry:null;return r&&l&&(e!=null&&e.ready)?e.toScreen(l):null}};o([n()],t.prototype,"location",void 0),o([n()],t.prototype,"screenLocation",null),o([n()],t.prototype,"screenLocationEnabled",void 0),o([n()],t.prototype,"view",void 0),t=o([c("esri.widgets.support.AnchorElementViewModel")],t);const y=t;export{y as l};
