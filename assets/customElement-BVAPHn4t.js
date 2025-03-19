import{i as g,L as u,u as w,c as v,n as x,x as p,s as m,d as L,a as k}from"./index-tefRSezt.js";import{e as d}from"./globalCss-CyPh17x2.js";import{s as y,r as s,m as n,a as C}from"./Accessor-BHnuXKD2.js";import{i as E}from"./Evented-DCWccWGU.js";import{C as b}from"./supportUtils-CYitzarn.js";import{u as f}from"./useViewModel-BxErfUSG.js";import{s as $}from"./useT9n-B0I3cNlQ.js";import{r as T}from"./index-BkKcLxWB.js";import"./Graphic-CFXUQZlS.js";import"./Clonable-DvJsj5LF.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./JSONSupport-CGdeqxpk.js";import"./cast-BA_-jlhc.js";import"./writer-B2bQV2uU.js";import"./opacityUtils-CSd4XoR2.js";import"./Promise-CmQqe-ke.js";import"./Point-XGrwlf63.js";import"./enumeration-Cr5WIZs4.js";import"./Color-gncXBiLc.js";import"./colorUtils-Rxh2V3ai.js";import"./mathUtils-DV9iOXpW.js";import"./ActionToggle-__-l4AdQ.js";import"./Identifiable-BrT7zvUW.js";import"./jsonUtils-Cu7OBRmN.js";import"./Extent-CBBGeHb-.js";import"./Polyline-BmuD2-ZN.js";import"./typeUtils-BSg8Y507.js";import"./TextSymbol-BQ_NW9Xo.js";import"./screenUtils-_ZIvrt5o.js";import"./collectionUtils-CbaToa73.js";import"./Portal-CTRRujjZ.js";import"./vec3f64-BLpZdpfb.js";import"./aaBoundingBox-CeBivBRq.js";import"./GraphicsLayer-Acqd2VFm.js";import"./GraphicsCollection-CkliHSk1.js";import"./Layer-C9uQlTBT.js";import"./TimeExtent-J5qnUFx_.js";import"./timeUtils-D2X862bk.js";import"./ScaleRangeLayer-C59zG_yk.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-TjZmCq6l.js";import"./utils-DYurMneM.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-Fi6iAz29.js";import"./common-DQOJ18NT.js";import"./ElevationInfo-Di4W6v5U.js";import"./unitConversionUtils-C4AR5obr.js";import"./lengthUtils-DjJgJFRg.js";import"./knowledgeGraphService-BDS0AlFK.js";import"./submitJob-Cqg9t7s8.js";import"./normalizeUtils-XRAPXbWa.js";import"./normalizeUtilsCommon-D0zPTJCj.js";import"./utils-Cy8wFNQo.js";import"./utils-CkSELPnj.js";import"./Field-Cyk7Ur5d.js";import"./fieldType-L-VlbZqy.js";import"./networkEnums-n7t8Au-e.js";import"./FeatureSet-DpCN730g.js";import"./GPMessage-ttuUMj6y.js";import"./Path-BzF4EEAV.js";import"./GraphQueryStreaming-DnnY4k6p.js";import"./component-utils-DWY0IMHC.js";let e=class extends E.EventedAccessor{constructor(t){super(t),this._goToExtentController=null,this._scaleExtent=(i,r)=>{const o=i,c=(i.xmax-i.xmin)/2*(r-1),a=(i.ymax-i.ymin)/2*(r-1);return o.xmin=i.xmin-c,o.ymin=i.ymin-a,o.xmax=i.xmax+c,o.ymax=i.ymax+a,o},this.switchLayout=this.switchLayout.bind(this)}destroy(){this._cancelGoToExtent(),this.view=null}set view(t){this._set("view",t),t&&t.when().then(()=>{if(this.view===t){if(!this.view.map.linkChartProperties)throw new y("linkChartLayoutSwitcher:error","Link chart layouts are only supported on WebLinkCharts.");this.layout=b(this.view.map.linkChartProperties.layoutType)}})}get state(){return this.view?this.view.map.linkChartProperties?"ready":"disabled":"loading"}get layout(){return this._get("layout")||"organic-standard"}set layout(t){this._set("layout",t)}get preventExtentUpdate(){return this._get("preventExtentUpdate")||!1}set preventExtentUpdate(t){this._set("preventExtentUpdate",t)}async switchLayout(t){if(!this.view||!this.view.map)throw new y("linkChartLayoutSwitcher:loading-state","Cannot change layout when link chart has not loaded.");if(this.layout=t,await this.view.map.applyLayout(t),!this.preventExtentUpdate&&this.view.map.diagramNodesExtent){const i=t!=="geographic-organic-standard"?this._scaleExtent(this.view.map.diagramNodesExtent,1.4):this.view.map.diagramNodesExtent,r=new AbortController;this._goToExtentController=r;try{await this.view.when(),await this.view.goTo(i,{signal:r.signal})}catch{}this._goToExtentController=null}this.emit("switchLayout",{layout:t})}_cancelGoToExtent(){const{_goToExtentController:t}=this;t&&t.abort(),this._goToExtentController=null}};s([n()],e.prototype,"_goToExtentController",void 0),s([n()],e.prototype,"view",null),s([n({readOnly:!0})],e.prototype,"state",null),s([n()],e.prototype,"layout",null),s([n()],e.prototype,"preventExtentUpdate",null),e=s([C("esri.widgets.LinkChartLayoutSwitcher.LinkChartLayoutSwitcherViewModel")],e);const _=e;/*! All material copyright Esri, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.32/esri/copyright.txt for details.
v4.32.12 */const M=g`@layer{arcgis-link-chart-layout-switcher{display:block}}`,S={basicLayoutCategory:["basic-grid"],organicLayoutCategory:["organic-standard","organic-community","geographic-organic-standard"],treeLayoutCategory:["tree-left-to-right","radial-root-centric"],hierarchicalLayoutCategory:["hierarchical-bottom-to-top"],chronologicalLayoutCategory:["chronological-mono-timeline","chronological-multi-timeline"]},U={"organic-standard":"force-directed-link-chart-layout","organic-community":"community-link-chart-layout","basic-grid":"simple-link-chart-layout","hierarchical-bottom-to-top":"hierarchical-link-chart-layout","radial-root-centric":"radial-tree-link-chart-layout","tree-left-to-right":"smart-tree-link-chart-layout","geographic-organic-standard":"geographic-link-chart-layout","chronological-mono-timeline":"clock-forward","chronological-multi-timeline":"clock-forward"},D={"organic-standard":"forceDirected","organic-community":"community","basic-grid":"simple","hierarchical-bottom-to-top":"hierarchical","radial-root-centric":"radialTree","tree-left-to-right":"smartTree","geographic-organic-standard":"geographic","chronological-mono-timeline":"chronologicalSingle","chronological-multi-timeline":"chronologicalMultiple"},P={base:"esri-link-chart-layout-switcher"},O=f(_),l=class l extends u{constructor(){super(...arguments),this.messages=$(),this.viewModel=O(this),this.autoDestroyDisabled=!1,this.icon="nodes-link",this.layout=this.viewModel.layout,this.position="top-left",this.preventExtentUpdate=this.viewModel.preventExtentUpdate,this.state=this.viewModel.state,this.arcgisSwitchLayout=T(()=>this.viewModel,"switchLayout"),this.arcgisPropertyChange=w()("state"),this.arcgisReady=v()}async destroy(){await this.manager.destroy()}async switchLayout(i){this.viewModel.switchLayout(i)}render(){const{messages:i,icon:r}=this;return p`<div class=${m(L(P.base,d.widget))}><calcite-dropdown scale=s width=m max-items=9><calcite-button class=${m(d.widgetButton)} slot=trigger kind=neutral .disabled=${this.viewModel.state==="disabled"} .iconStart=${r??void 0} .label=${i.layoutOptions??"Layout"}></calcite-button>${Object.entries(S).map(([o,c])=>p`<calcite-dropdown-group selection-mode=single .groupTitle=${this.messages[o]}>${c.map(a=>p`<calcite-dropdown-item .iconStart=${U[a]} .selected=${a===this.layout?!0:void 0} @click=${()=>void this.switchLayout(a)}>${i[D[a]]}</calcite-dropdown-item>`)}</calcite-dropdown-group>`)}</calcite-dropdown></div>`}};l.properties={autoDestroyDisabled:5,icon:3,label:1,layout:32,position:3,preventExtentUpdate:5,referenceElement:1,state:3},l.shadowRootOptions=x,l.styles=M;let h=l;k("arcgis-link-chart-layout-switcher",h);export{h as ArcgisLinkChartLayoutSwitcher};
