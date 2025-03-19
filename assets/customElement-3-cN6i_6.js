import{L as d,u as w,c as v,n as u,s as p,b as y,d as b,x as m,i as _,a as f}from"./index-4eY77cms.js";import{r as C}from"./index-C5b9dHRB.js";import{s as M,r as o,m as s,a as G}from"./Accessor-BmwT4B0c.js";import{m as $}from"./Viewpoint-DvyUmqUt.js";import{i as H}from"./Evented-Dw4_VOGn.js";import{t as E}from"./GoTo-zPv0y7kC.js";import{s as O}from"./useT9n-Dwv-EXPO.js";import{u as x}from"./useViewModel-x7-oy52B.js";import{e as g}from"./globalCss-B9-jl_gY.js";import"./Camera-CdyTfTAk.js";import"./Clonable-Z-AWS-16.js";import"./Cyclical-Dlbl-cQK.js";import"./mathUtils-Cfq9PL9W.js";import"./JSONSupport-DcrLLGjL.js";import"./cast-CsZslgGN.js";import"./writer-DKgfqj4X.js";import"./Point-Cz2JYYmX.js";import"./jsonUtils-CwFG8yN4.js";import"./Extent-g5W9hy0j.js";import"./Polyline-s-JzsQqo.js";import"./typeUtils-B6WBEKDM.js";import"./component-utils-D0ciaaZ_.js";let i=class extends E(H.EventedAccessor){constructor(t){super(t),this._initialViewpoint=null,this._goingHomeController=null,this.go=this.go.bind(this)}destroy(){this._cancelGo(),this.view=null}get state(){var t;return(t=this.view)!=null&&t.ready?this._goingHomeController?"going-home":"ready":"disabled"}set view(t){this._initialViewpoint=null,this._set("view",t),t&&t.when().then(()=>{this.view===t&&(this._initialViewpoint=t.viewpoint.clone(),this.notifyChange("viewpoint"))})}get viewpoint(){return this._get("viewpoint")||this._initialViewpoint}set viewpoint(t){this._set("viewpoint",t)}async go(){var e,r;if(!((e=this.view)!=null&&e.ready))throw new M("home:disabled-state","Cannot go when disabled.");this._cancelGo(),this.emit("go");const t=new AbortController;this._goingHomeController=t;try{await((r=this.view)==null?void 0:r.when()),await this.callGoTo({target:this.viewpoint,options:{signal:t.signal}})}catch{}this._goingHomeController=null}cancelGo(){this._cancelGo()}_cancelGo(){const{_goingHomeController:t}=this;t&&t.abort(),this._goingHomeController=null}};o([s()],i.prototype,"_goingHomeController",void 0),o([s({readOnly:!0})],i.prototype,"state",null),o([s()],i.prototype,"view",null),o([s({type:$})],i.prototype,"viewpoint",null),o([s()],i.prototype,"go",null),o([s()],i.prototype,"cancelGo",null),i=o([G("esri.widgets.Home.HomeViewModel")],i);const V=i;/*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.32/esri/copyright.txt for details.
v4.32.12 */const D=_`@layer{arcgis-home{display:block}}`,T={base:"esri-home"},k=x(V),n=class n extends d{constructor(){super(...arguments),this.messages=O(),this.viewModel=k(this),this.autoDestroyDisabled=!1,this.goToOverride=this.viewModel.goToOverride,this.icon="home",this.position="top-left",this.state=this.viewModel.state,this.viewpoint=this.viewModel.viewpoint,this.arcgisGo=C(()=>this.viewModel,"go"),this.arcgisPropertyChange=w()("state"),this.arcgisReady=v()}async cancelGo(){this.viewModel.cancelGo()}async destroy(){await this.manager.destroy()}async go(){this.viewModel.go()}_go(){const{viewModel:e}=this;e.state==="going-home"?e.cancelGo():e.go()}render(){var c;const{messages:e,icon:r}=this,a=(c=this.viewModel)==null?void 0:c.state,l=a==="going-home";return m`<div class=${p(b(T.base,g.widget))}><calcite-button class=${p(g.widgetButton)} .disabled=${a==="disabled"} .iconStart=${l?void 0:r??void 0} kind=neutral .label=${e.componentLabel} @click=${this._go} .scale=${l?"s":"m"} title=${(a==="going-home"?e.cancel:e.title)??y}>${l?m`<calcite-loader inline label></calcite-loader>`:null}</calcite-button></div>`}};n.properties={autoDestroyDisabled:5,goToOverride:0,icon:3,label:1,messageOverrides:0,position:3,referenceElement:1,state:3,viewpoint:0},n.shadowRootOptions=u,n.styles=D;let h=n;f("arcgis-home",h);export{h as ArcgisHome};
