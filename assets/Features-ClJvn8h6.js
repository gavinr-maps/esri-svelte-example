const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BPm91e5Z.js","./index-CMxz6F2k.js","./jsxFactory-Cnml7uXM.js","./Accessor-BmwT4B0c.js","./intl-Duiy0OzY.js","./Promise-DfET-uns.js","./cast-CsZslgGN.js","./index-4eY77cms.js","./index-Cx51aysm.css","./JSONSupport-DcrLLGjL.js","./Evented-Dw4_VOGn.js","./reactiveUtils-XM7cS2OP.js","./SimpleObservable-CvOkykwM.js","./uuid-Cl5lrJ4c.js","./guid-ejniuQmw.js","./useT9n-C1Hrfc-A.js","./index-DwIhxbHs.js","./dom-DEluURzl.js","./observers-Co4E8E8j.js","./keyed-CU1C-h1n.js","./directive-helpers-DaBykg1t.js","./ref-D9wHsL_T.js","./interactive-DTzfFku4.js","./loadable-XBvaWFYY.js","./component-CBVlbUuE.js","./index-BeicfmvH.js","./index-DMeQur4V.js","./floating-ui-IixYHfbQ.js","./debounce-DbkufipY.js","./openCloseComponent-nqWrSaIH.js","./static-DLD4WjLv.js","./FloatingArrow-BZRr6Zld.js","./useFocusTrap-COeL24Kx.js","./focusTrapComponent-D1wJZ4RD.js","./key-CZcQa38B.js","./index-DK5B8inx.js","./array-BbE1dLa5.js","./index-Cz6Ao6Wl.js","./ExpandToggle-BhiztZLi.js","./index-Z5_W1-0F.js","./index-DyXGQ9Xl.js","./index-C6rrpqn6.js","./index-jjUP6Yam.js","./form-BzoUrXC7.js","./label-CHHpnzD0.js","./index-CMdCteX_.js","./index-BCDLx0rN.js","./index-fFnlo_g2.js","./index-DWeq-ojO.js","./index-pyEU_klK.js","./live-D7NQ-TrC.js","./locale-CXx8I9ox.js","./Validation-BYp9DS84.js","./input-DI9tZAPS.js","./filter-D4A4y0z5.js","./escapeRegExp-CdLjXKbf.js","./utils-Dtivty39.js","./index-B0pN5y8B.js","./index-DVGzfobf.js","./dynamicClasses-pKEMtFzB.js","./index-C7Sgjfzm.js","./resources6-Cs2_VmEC.js","./index-XCNLEnDV.js","./customElement-_nG5icNK.js","./resources5-SciNIBSe.js","./index-1aQH8s9k.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./index-4eY77cms.js";import{av as x,r as s,m as n,a as T,g as U,B as N,j,b1 as q}from"./Accessor-BmwT4B0c.js";import{l as b}from"./intl-Duiy0OzY.js";import{V as K,d as _,p as G}from"./reactiveUtils-XM7cS2OP.js";import{e as J}from"./throttle-jjSnxk80.js";import{n as Q}from"./geometryUtils-D1iOC1ST.js";import{e as X,n as Y}from"./actionUtils-CtQI3q6p.js";import{n as ee,j as te,t as ie}from"./Feature-zYPb8B0H.js";import{h as oe}from"./Spinner--kyaGywN.js";import{O as L,c as B,n as a,i as se,e as A,T as ne}from"./jsxFactory-Cnml7uXM.js";import{n as h,D as R,f as re}from"./FeaturesViewModel-_JXCqV25.js";import{n as le,i as V}from"./actions-fElEWZWj.js";import{s as f}from"./substitute-CvdjmBYq.js";import{e as C}from"./globalCss-vQlnDsEX.js";import{e as ae}from"./Heading-BcR6CGTM.js";import{e as de}from"./vmEvent-D4Ubqkbq.js";const w=le.clone();let M=class extends L{constructor(e,i){super(e,i),this.messages=null,this.closed=!1,this.closable=!0,this._handleOpenFeature=t=>{this.emit("open-feature",{feature:t})},this._handleZoomToFeature=t=>{this.emit("zoom-to-feature",{featureWidget:t})}}loadDependencies(){return B({action:()=>p(()=>import("./index-BPm91e5Z.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),import.meta.url),"action-bar":()=>p(()=>import("./index-BeicfmvH.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35,36,37,38]),import.meta.url),"action-group":()=>p(()=>import("./index-Cz6Ao6Wl.js").then(e=>e.i),__vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35,36]),import.meta.url),"flow-item":()=>p(()=>import("./index-Z5_W1-0F.js"),__vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35,36,40,41]),import.meta.url)})}render(){const{flowItems:e}=this,i=e==null?void 0:e.toArray();return a(se,null,i==null?void 0:i.map((t,o)=>this._renderFlowItem(t,o===e.length-1)))}_handleCloseClick(){this.emit("close")}_handleExitClick(){this.emit("exit")}_handleDrillInBackClick(){const{flowItems:e}=this,i=e==null?void 0:e.pop();i&&("activeCategory"in i.viewModel?(i.viewModel.activeCategory=null,e.length||(i.viewModel.showAllEnabled=!1)):"showAllEnabled"in i.viewModel&&(i.viewModel.showAllEnabled=!1),i&&(i.viewModel=null,i.destroy()))}_getExitMessage(e){switch(e.flowType){case"feature":case"feature-association":return"";case"feature-relationship":return this.messages.exitRelatedRecords;case"feature-utility-network-associations":case"feature-utility-network-association-type":return this.messages.exitAssociations}}_renderFlowItem(e,i){const{messages:t,closable:o,closed:l}=this,u="graphic"in e&&!e.isTable,d=e.flowType==="feature-association",c=this._getExitMessage(e),m=t.selectFeature;return a("calcite-flow-item",{bind:this,closable:o,closed:l,description:x(this._getDrillInFlowItemDescription(e)??""),heading:x(e.title??""),key:`flow-item-${e.viewModel.uid}`,selected:i,onCalciteFlowItemBack:g=>{g.preventDefault(),this._handleDrillInBackClick()},onCalciteFlowItemClose:this._handleCloseClick},a("calcite-action",{appearance:"transparent",bind:this,class:h.actionExit,icon:"move-up",key:"exit-action",onclick:this._handleExitClick,slot:"header-actions-start",text:c,title:c}),u?a("calcite-action",{appearance:"transparent",bind:this,icon:"zoom-to-object",key:"open-feature-action",onclick:()=>this._handleOpenFeature(e),slot:"header-actions-end",text:m,title:m}):null,d?a("calcite-action-bar",{expandDisabled:!0,expanded:!0,key:"header-action-bar",scale:"s",slot:"action-bar"},a("calcite-action-group",{overlayPositioning:"fixed",scale:"s"},this._renderDefaultActions(e))):null,a("div",{class:h.container},e.render()))}_renderDefaultActions(e){const i=this._getActionTitle(w);return a("calcite-action",{active:w.active,appearance:"solid",bind:this,"data-action-uid":w.uid,disabled:w.disabled,icon:w.icon??"question",indicator:w.indicator,key:`action-${w.uid}`,loading:w.active,onclick:()=>this._handleZoomToFeature(e),scale:"s",text:i,textEnabled:!0,title:i})}_getActionTitle(e){const{messages:i}=this,{id:t}=e,o=e.title??"";return t==="zoom-to-feature"?f(o,{messages:i}):o}_getDrillInFlowItemDescription(e){switch(e.flowType){case"feature":case"feature-association":case"feature-utility-network-associations":return e.viewModel.description??"";case"feature-relationship":return e.allItemsDescription;case"feature-utility-network-association-type":return e.description??""}}};s([n()],M.prototype,"flowItems",void 0),s([n(),A("esri/widgets/Features/t9n/Features")],M.prototype,"messages",void 0),s([n()],M.prototype,"closed",void 0),s([n()],M.prototype,"closable",void 0),M=s([T("esri.widgets.Features.FeaturesDrillIn")],M);const ue=M;let v=class extends U{constructor(){super(...arguments),this.actionBar=!0,this.closeButton=!0,this.collapseButton=!1,this.featureMenuHeading=!0,this.featureNavigation=!0,this.featureListLayerTitle=!0,this.flow=!0,this.heading=!0,this.spinner=!0}};s([n({type:Boolean,nonNullable:!0})],v.prototype,"actionBar",void 0),s([n({type:Boolean,nonNullable:!0})],v.prototype,"closeButton",void 0),s([n({type:Boolean,nonNullable:!0})],v.prototype,"collapseButton",void 0),s([n({type:Boolean,nonNullable:!0})],v.prototype,"featureMenuHeading",void 0),s([n({type:Boolean,nonNullable:!0})],v.prototype,"featureNavigation",void 0),s([n({type:Boolean,nonNullable:!0})],v.prototype,"featureListLayerTitle",void 0),s([n({type:Boolean,nonNullable:!0})],v.prototype,"flow",void 0),s([n({type:Boolean,nonNullable:!0})],v.prototype,"heading",void 0),s([n({type:Boolean,nonNullable:!0})],v.prototype,"spinner",void 0),v=s([T("esri.widgets.Features.FeaturesVisibleElements")],v);const $=v,k="selected-index",ce=0,D="features-spinner";function O(e){return(e==null?void 0:e.declaredClass.startsWith("esri.layers."))??!1}let r=class extends ee(L){constructor(e,i){super(e,i),this._featureMenuIntersectionObserverCallback=([t])=>{t!=null&&t.isIntersecting&&this.viewModel.featurePage!=null&&this.viewModel.featurePage++},this._featureMenuIntersectionObserver=new IntersectionObserver(this._featureMenuIntersectionObserverCallback,{root:window.document}),this._featureMenuIntersectionObserverNode=null,this._spinner=null,this._feature=null,this._focusAbortController=null,this._drillInFlowItems=new K,this._drillInWidget=new ue({flowItems:this._drillInFlowItems}),this._rootNode=null,this._rootFlowItemNode=null,this._featureMenuViewportNode=null,this._actionBarMenuNode=null,this.collapsed=!1,this.featureNavigationTop=!1,this.headerActions=new V,this.headingLevel=2,this.messages=null,this.messagesCommon=null,this.responsiveActionsEnabled=!1,this.viewModel=new R,this.visibleElements=new $,this._renderAction=(t,o)=>{const l=this._getActionTitle(t),{type:u,active:d,uid:c,disabled:m,indicator:g}=t;return t.visible?a("calcite-action",{active:u==="toggle"&&t.value,appearance:"solid",bind:this,"data-action-id":t.id,"data-action-uid":c,disabled:m,icon:this._getActionIcon(t),indicator:g,key:`action-${o}`,loading:d,onclick:this._triggerAction,scale:"s",text:l,textEnabled:!this._hideActionText,title:this._hideActionText?l:void 0},this._getFallbackIcon(t)):null},this._openFeatureMenu=()=>{this.featureMenuOpen=!0,this._focusFlowItemNode()},this._closeFeatureMenu=()=>{this.featureMenuOpen=!1,this._focusFlowItemNode()},this._previousFeature=()=>{this.viewModel.previous()},this._nextFeature=()=>{this.viewModel.next()},this._handleFeatureBack=()=>{this.initialDisplayMode==="list"?(this.selectedFeatureIndex=-1,this._focusFlowItemNode()):this._openFeatureMenu()},this._handleFeatureMenuBack=()=>{this.initialDisplayMode==="list"?(this.selectedFeatureIndex=-1,this._focusFlowItemNode()):this.featureMenuOpen&&this._closeFeatureMenu()},this._storeRootNode=t=>{this._rootNode=t},this._displaySpinnerThrottled=J(()=>this._displaySpinner(),ce),this._addSelectedFeatureIndexHandle(),this.addHandles([this._displaySpinnerThrottled,_(()=>{var t;return(t=this.viewModel)==null?void 0:t.active},()=>this._toggleScreenLocationEnabled()),_(()=>{var t;return(t=this.viewModel)==null?void 0:t.active},t=>this._drillInWidget.closed=!t),_(()=>{var t;return(t=this.visibleElements)==null?void 0:t.closeButton},t=>this._drillInWidget.closable=t),_(()=>{var t;return(t=this.visibleElements)==null?void 0:t.spinner},t=>this._spinnerEnabledChange(t)),_(()=>{var t;return(t=this.viewModel)==null?void 0:t.view},(t,o)=>this._viewChange(t,o)),_(()=>{var t,o;return(o=(t=this.viewModel)==null?void 0:t.view)==null?void 0:o.ready},(t,o)=>this._viewReadyChange(t??!1,o??!1)),_(()=>{var t,o;return[(t=this.viewModel)==null?void 0:t.waitingForResult,(o=this.viewModel)==null?void 0:o.location]},()=>{this._hideSpinner(),this._displaySpinnerThrottled()}),_(()=>{var t;return(t=this.viewModel)==null?void 0:t.screenLocation},()=>this._closeOpenActionMenu()),_(()=>this.selectedFeatureWidget,()=>this._destroyDrillInFlowItemWidgets()),_(()=>{var o;const t=(o=this.selectedFeatureWidget)==null?void 0:o.viewModel;return[t==null?void 0:t.title,t==null?void 0:t.state]},()=>this._setTitleFromFeatureWidget()),_(()=>{var o;const t=(o=this.selectedFeatureWidget)==null?void 0:o.viewModel;return[t==null?void 0:t.content,t==null?void 0:t.state]},()=>this._setContentFromFeatureWidget()),_(()=>{var t;return(t=this.viewModel)==null?void 0:t.featureViewModels},()=>this._featureMenuViewportScrollTop()),_(()=>this._drillInFlowItems.length,()=>this._focusFlowItemNode()),this._drillInWidget.on("close",()=>this.close()),this._drillInWidget.on("exit",()=>this._destroyDrillInFlowItemWidgets()),this._drillInWidget.on("open-feature",({feature:t})=>this._openRelatedFeature(t)),this._drillInWidget.on("zoom-to-feature",({featureWidget:t})=>re(this.viewModel,t))])}loadDependencies(){return B({action:()=>p(()=>import("./index-BPm91e5Z.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),import.meta.url),"action-bar":()=>p(()=>import("./index-BeicfmvH.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35,36,37,38]),import.meta.url),"action-group":()=>p(()=>import("./index-Cz6Ao6Wl.js").then(e=>e.i),__vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35,36]),import.meta.url),button:()=>p(()=>import("./index-jjUP6Yam.js"),__vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,20,30,43,22,44,23,24]),import.meta.url),icon:()=>p(()=>import("./index-DwIhxbHs.js").then(e=>e.i),__vite__mapDeps([16,2,3,4,5,6,7,8,9,10,11,12,13,17,14,18]),import.meta.url),flow:()=>p(()=>import("./index-CMdCteX_.js"),__vite__mapDeps([45,2,3,4,5,6,7,8,9,10,11,12,13,21,20,18,23,17,14]),import.meta.url),"flow-item":()=>p(()=>import("./index-Z5_W1-0F.js"),__vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35,36,40,41]),import.meta.url),list:()=>p(()=>import("./index-BCDLx0rN.js"),__vite__mapDeps([46,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,40,21,20,18,17,19,16,47,48,49,50,30,43,22,34,44,23,51,24,52,53,54,55,28,56]),import.meta.url),"list-item":()=>p(()=>import("./index-B0pN5y8B.js"),__vite__mapDeps([57,16,2,3,4,5,6,7,8,9,10,11,12,13,17,14,18,58,21,20,27,28,22,34,23,29,59,1,15,0,19,24,60,61,62,63,56,64]),import.meta.url),"list-item-group":()=>p(()=>import("./index-1aQH8s9k.js"),__vite__mapDeps([65,2,3,4,5,6,7,8,9,10,11,12,13,22,64]),import.meta.url),loader:()=>p(()=>import("./index-CMxz6F2k.js"),__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url)})}destroy(){var e,i,t;this._destroyDrillInFlowItemWidgets(),this._destroySelectedFeatureWidget(),this._destroySpinner(),this._unobserveFeatureMenuObserver(),(e=this._featureMenuIntersectionObserver)==null||e.disconnect(),(i=this._drillInWidget)==null||i.destroy(),(t=this._focusAbortController)==null||t.abort()}get _hideActionText(){var i;if(!this.responsiveActionsEnabled)return!1;const e=(i=this.view)==null?void 0:i.widthBreakpoint;return e==="xsmall"||e==="small"||e==="medium"}get _featureNavigationVisible(){return this.viewModel.active&&this.viewModel.featureCount>1&&!!this.viewModel.selectedFeature&&this.visibleElements.featureNavigation}get _isCollapsed(){return this._collapseEnabled&&this.collapsed}get _collapseEnabled(){return this.visibleElements.collapseButton&&(this.initialDisplayMode==="list"||!!this.title&&!!this.content)}get active(){return this.viewModel.active}get content(){return this.viewModel.content}set content(e){this.viewModel.content=e}get icon(){return null}get featureMenuOpen(){return this.viewModel.featureMenuOpen}set featureMenuOpen(e){this.viewModel.featureMenuOpen=e}get featureMenuTitle(){return this.viewModel.featureMenuTitle}set featureMenuTitle(e){this.viewModel.featureMenuTitle=e}get features(){return this.viewModel.features}set features(e){this.viewModel.features=e}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get initialDisplayMode(){return this.viewModel.initialDisplayMode}set initialDisplayMode(e){this.viewModel.initialDisplayMode=e}get location(){return this.viewModel.location}set location(e){this.viewModel.location=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get map(){return this.viewModel.map}set map(e){this.viewModel.map=e}get promises(){return this.viewModel.promises}set promises(e){this.viewModel.promises=e}get selectedFeature(){return this.viewModel.selectedFeature}get selectedDrillInFeature(){const e=Array.from(this._drillInFlowItems).at(-1);if(!e)return null;const{flowType:i}=e;return i==="feature-association"||i==="feature-relationship"?e.graphic??null:null}get selectedFeatureIndex(){return this.viewModel.selectedFeatureIndex}set selectedFeatureIndex(e){this.viewModel.selectedFeatureIndex=e}get selectedFeatureWidget(){const{_feature:e,headingLevel:i,_drillInFlowItems:t,timeZone:o,spatialReference:l,map:u}=this,{selectedFeatureViewModel:d}=this.viewModel,c={title:!1};return d?(e?(e.viewModel=d,e.visibleElements=c):this._feature=new te({flowItems:t,headingLevel:i+1,timeZone:o,spatialReference:l,map:u,viewModel:d,visibleElements:c}),this._feature):null}get spatialReference(){return this.viewModel.spatialReference}set spatialReference(e){this.viewModel.spatialReference=e}get title(){return this.viewModel.title}set title(e){this.viewModel.title=e}get timeZone(){return this.viewModel.timeZone}set timeZone(e){this.viewModel.timeZone=e}get updateLocationEnabled(){return this.viewModel.updateLocationEnabled}set updateLocationEnabled(e){this.viewModel.updateLocationEnabled=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}blur(){var i;const{active:e}=this.viewModel;e?(i=this._rootFlowItemNode)==null||i.blur():N.getLogger(this).warn("Features can only be blurred when currently active.")}clear(){return this.viewModel.clear()}close(){this.viewModel.visible=!1}fetchFeatures(e,i){return this.viewModel.fetchFeatures(e,i)}focus(){const{active:e}=this.viewModel;e?this._focusFlowItemNode():N.getLogger(this).warn("Features can only be focused when currently active.")}next(){return this.viewModel.next()}open(e){this.removeHandles(k);const i={collapsed:(e==null?void 0:e.collapsed)??!1};this.set(i),this.viewModel.open(e),this.addHandles(G(()=>!this.viewModel.waitingForResult,()=>this._addSelectedFeatureIndexHandle(),{once:!0}))}previous(){return this.viewModel.previous()}triggerAction(e){return this.viewModel.triggerAction(e)}render(){return a("div",{afterCreate:this._storeRootNode,bind:this,class:this.classes(h.base,C.widget,C.panel),onkeydown:this._onMainKeydown},this._renderHeader(),this._renderContentContainer())}_renderFeatureNavigation(){return[this._renderPagination(),this.initialDisplayMode==="list"?this._renderFeaturePaginationText():this._renderFeatureMenuButton()]}_renderHeader(){return this.featureNavigationTop&&this._featureNavigationVisible?a("div",{class:h.header,key:"header-actions"},this._renderFeatureNavigation()):null}_renderFooter(){return!this.featureNavigationTop&&this._featureNavigationVisible?a("div",{class:h.footer,key:"footer-actions",slot:"footer"},this._renderFeatureNavigation()):null}_renderFeaturePaginationText(){const{messages:e,viewModel:i}=this,{featureCount:t,selectedFeatureIndex:o}=i;return a("div",{class:h.paginationText,key:"feature-pagination-text"},f(e.pageText,{index:b(o+1),total:b(t)}))}_renderFeatureMenuButton(){const{messages:e,viewModel:i}=this,{featureCount:t,selectedFeatureIndex:o,pendingPromisesCount:l}=i;return a("calcite-action",{appearance:"solid",bind:this,class:h.paginationMenuButton,icon:"list",key:"feature-menu-button",label:e.selectFeature,loading:l>0,onclick:this._openFeatureMenu,scale:"s",text:f(e.pageText,{index:b(o+1),total:b(t)}),textEnabled:!0,title:e.selectFeature})}_renderPagination(){const{previous:e,next:i}=this.messagesCommon.pagination;return a("calcite-action-bar",{class:h.paginationActionBar,expandDisabled:!0,key:"pagination-action-bar",layout:"horizontal",overflowActionsDisabled:!0,scale:"s"},a("calcite-action-group",{scale:"s"},a("calcite-action",{appearance:"solid",class:h.paginationPrevious,icon:"chevron-left",iconFlipRtl:!0,label:e,onclick:this._previousFeature,scale:"s",text:e,title:e}),a("calcite-action",{appearance:"solid",icon:"chevron-right",iconFlipRtl:!0,label:i,onclick:this._nextFeature,scale:"s",text:i,title:i})))}_renderFeatureMenuItem(e){const{initialDisplayMode:i}=this,{selectedFeatureViewModel:t,featureViewModels:o}=this.viewModel,l=e===t,u=o.indexOf(e);return a("calcite-list-item",{bind:this,"data-feature-index":u,key:`feature-menu-item-${e.uid}`,onblur:this._removeActiveFeature,onfocus:this._setActiveFeature,onmouseleave:this._removeActiveFeature,onmouseover:this._setActiveFeature,selected:l,onCalciteListItemSelect:this._selectFeature},a("span",{innerHTML:e.title||this.messagesCommon.untitled,slot:"content"}),i==="list"?a("calcite-icon",{flipRtl:!0,icon:"chevron-right",scale:"s",slot:"content-end"}):null)}_groupResultsByLayer(){const{featureViewModels:e}=this.viewModel,i=new Map;return e.forEach(t=>{const o=t==null?void 0:t.graphic;if(!o)return;const{layer:l,sourceLayer:u}=o,d=(O(l)?l:null)||(O(u)?u:null),c=i.get(d)??[];i.set(d,[...c,t])}),i}_renderFeatureMenu(){const{messages:e,viewModel:i}=this,t=this._groupResultsByLayer(),o=this.initialDisplayMode==="list"?"none":"single";return i.featureViewModels.length?a("calcite-list",{displayMode:"flat",label:e==null?void 0:e.featuresList,selectionAppearance:"icon",selectionMode:o},Array.from(t.keys(),l=>{var c;const u=(c=t.get(l))==null?void 0:c.map(m=>this._renderFeatureMenuItem(m)),d=l?l.title??this.messagesCommon.untitled:null;return this.visibleElements.featureListLayerTitle&&d!==null?a("calcite-list-item-group",{heading:d,key:(l==null?void 0:l.uid)||"map-graphics"},u):u})):null}_renderHeaderAction(e,i){const t=e.title||"";return e.visible?a("calcite-action",{active:e.type==="toggle"&&e.value,appearance:"solid",bind:this,"data-action-id":e.id,"data-action-uid":e.uid,disabled:e.disabled,icon:e.icon??void 0,indicator:e.indicator,key:`header-action-${i}`,loading:e.active,onclick:this._triggerHeaderAction,slot:"header-actions-end",text:t,title:t}):null}_renderHeaderActions(){return this.headerActions.map((e,i)=>this._renderHeaderAction(e,i)).toArray()}_renderContentFeature(){const{headingLevel:e,visibleElements:i,_isCollapsed:t,_collapseEnabled:o,featureNavigationTop:l,_drillInFlowItems:u,initialDisplayMode:d,selectedFeature:c,featureMenuOpen:m}=this,{title:g,active:y}=this.viewModel,F=i.heading&&g?g:"";if(d==="list"&&!c)return null;const I=u.length===0&&(d==="list"?!!c:!m);return a("calcite-flow-item",{afterCreate:this._storeRootFlowItemNode,bind:this,class:this.classes({[h.contentFeature]:!0,[h.flowItemCollapsed]:t}),closable:i.closeButton,closed:!y,collapsed:t,collapseDirection:l?"down":"up",collapsible:o,headingLevel:e,key:"root-flow-item",selected:I,onCalciteFlowItemBack:this._handleFeatureBack,onCalciteFlowItemClose:this.close,onCalciteFlowItemToggle:this._handleCollapseToggle},F?a(ae,{class:this.classes(h.featuresHeading,C.heading),innerHTML:F,key:"header-content",level:this.headingLevel,slot:"header-content"}):null,this._renderHeaderActions(),this._renderActionBar(),a("div",{class:this.classes(h.container,h.contentContainer)},this._renderContent()),this._renderFooter())}_renderFeatureMenuContainer(){const{viewModel:e,visibleElements:i,featureMenuTitle:t,messages:o,messagesCommon:l,_drillInFlowItems:u,initialDisplayMode:d,featureMenuOpen:c,selectedFeature:m,_collapseEnabled:g,_isCollapsed:y,featureNavigationTop:F,headingLevel:I}=this,{active:W,featureViewModels:P,pendingPromisesCount:S}=e,{featureMenuHeading:E}=i,H=t??o.selectFeature;if(d==="feature"&&!c)return null;const Z=u.length===0&&(d==="list"?!m:c);return a("calcite-flow-item",{afterCreate:this._storeFeatureMenuFlowItemNode,bind:this,class:this.classes({[h.flowItemCollapsed]:y}),closable:d==="list"&&i.closeButton,closed:!W,collapsed:d==="list"&&y,collapseDirection:F?"down":"up",collapsible:d==="list"&&g,description:E?f(o.total,{total:P.length}):void 0,heading:E?H:void 0,headingLevel:I,key:"feature-menu",loading:e.waitingForContents,selected:Z,onCalciteFlowItemBack:z=>{z.preventDefault(),this._handleFeatureMenuBack()},onCalciteFlowItemClose:this.close,onCalciteFlowItemToggle:this._handleCollapseToggle},d==="list"?this._renderHeaderActions():null,S>0?a("calcite-loader",{class:h.loader,inline:!0,key:"feature-menu-loader",label:l.loading,slot:"header-actions-end"}):null,a("div",{class:h.container},this._renderFeatureMenu()),a("div",{afterCreate:this._featureMenuIntersectionObserverCreated,bind:this,class:h.featureMenuObserver}),d==="feature"?a("calcite-button",{appearance:"transparent",onclick:this._handleFeatureMenuBack,slot:"footer-actions",width:"full"},l.back):null)}_renderContentContainer(){const e=this.initialDisplayMode==="list"?[this._renderFeatureMenuContainer(),this._renderContentFeature(),this._drillInWidget.render()]:[this._renderContentFeature(),this._renderFeatureMenuContainer(),this._drillInWidget.render()];return this.visibleElements.flow?a("calcite-flow",{key:"content-container"},e):e}_getFallbackIcon(e){const{className:i,icon:t}=e;if(t)return null;const o=X({action:e,feature:this.selectedFeature}),l={[h.icon]:!!i,[h.actionImage]:!!o};return i&&(l[i]=!0),o||i?a("span",{"aria-hidden":"true",class:this.classes(h.icon,l),key:"icon",styles:Y(o)}):null}_renderActionBar(){var e;return!this._isCollapsed&&this.visibleElements.actionBar&&((e=this.viewModel.allActions)!=null&&e.length)?a("calcite-action-bar",{expandDisabled:!0,expanded:!this._hideActionText,key:"header-action-bar",scale:"s",slot:"action-bar"},a("calcite-action-group",{afterCreate:i=>this._actionBarMenuNode=i,overlayPositioning:"fixed",scale:"s"},this._renderActions())):null}_renderActions(){return this.viewModel.allActions.toArray().map(this._renderAction)}_renderContent(){var i;const e=(i=this.viewModel)==null?void 0:i.content;return e?typeof e=="string"?a("div",{class:ie.contentNode,innerHTML:e,key:e}):this.renderNodeContent(e):null}_handleCollapseToggle(){this.collapsed=!this.collapsed}async _openRelatedFeature(e){await e.viewModel.updateGeometry();const i=e.graphic,t=i==null?void 0:i.geometry;if(t==null||i==null)return;this._destroyDrillInFlowItemWidgets(),await this.viewModel.zoomTo({target:t});const o=Q(t);this.open({features:[i],location:o??void 0}),this._focusFlowItemNode()}async _focusFlowItemNode(){var t,o;(t=this._focusAbortController)==null||t.abort(),this._focusAbortController=new AbortController;const e=this._focusAbortController.signal;await j(q(e));const i=(o=this._rootNode)==null?void 0:o.querySelector("calcite-flow-item[selected]");ne(i)}_storeRootFlowItemNode(e){this._rootFlowItemNode=e}_storeFeatureMenuFlowItemNode(e){this._featureMenuViewportNode=e}_setActiveFeature(e){var o;const{viewModel:i}=this,t=e.currentTarget["data-feature-index"];i.activeFeature=((o=i.features)==null?void 0:o[t])||null}_removeActiveFeature(){this.viewModel.activeFeature=null}_selectFeature(e){const i=e.currentTarget["data-feature-index"];isNaN(i)||(this.viewModel.selectedFeatureIndex=i),this.initialDisplayMode==="feature"?this._handleFeatureMenuBack():this._focusFlowItemNode()}_unobserveFeatureMenuObserver(){this._featureMenuIntersectionObserverNode&&this._featureMenuIntersectionObserver.unobserve(this._featureMenuIntersectionObserverNode)}_featureMenuIntersectionObserverCreated(e){this._unobserveFeatureMenuObserver(),this._featureMenuIntersectionObserver.observe(e),this._featureMenuIntersectionObserverNode=e}_getActionIcon(e){return e.icon?e.icon:e.image||e.className?void 0:"question"}_getActionTitle(e){const{messages:i,selectedFeature:t,messagesCommon:o}=this,{id:l}=e,u=t==null?void 0:t.attributes,d=e.title??"",c=l==="zoom-to-feature"?f(d,{messages:i}):l==="remove-selected-feature"?f(d,{messages:o}):l==="zoom-to-clustered-features"||l==="browse-clustered-features"?f(d,{messages:i}):e.title;return c&&u?f(c,u):c??""}_onMainKeydown(e){const{key:i}=e;i==="ArrowLeft"&&(e.stopPropagation(),this._handleFeatureMenuBack(),this.previous()),i==="ArrowRight"&&(e.stopPropagation(),this._handleFeatureMenuBack(),this.next())}_featureMenuViewportScrollTop(){this._featureMenuViewportNode&&this._featureMenuViewportNode.scrollContentTo({top:0})}_setContentFromFeatureWidget(){const{selectedFeatureWidget:e}=this;e&&(this.viewModel.content=e)}_setTitleFromFeatureWidget(){const{selectedFeatureWidget:e,messagesCommon:i}=this,t=e==null?void 0:e.viewModel;e&&(this.viewModel.title=(t==null?void 0:t.state)==="error"?i==null?void 0:i.errorMessage:(t==null?void 0:t.title)||"")}_addSelectedFeatureIndexHandle(){const e=_(()=>{var i;return(i=this.viewModel)==null?void 0:i.selectedFeatureIndex},(i,t)=>this._selectedFeatureIndexUpdated(i,t));this.addHandles(e,k)}_selectedFeatureIndexUpdated(e,i){const{featureCount:t}=this.viewModel;t&&e!==i&&e!==-1&&(this._destroyDrillInFlowItemWidgets(),this._rootFlowItemNode&&this._rootFlowItemNode.scrollContentTo({top:0}))}_triggerHeaderAction(e){const i=e.currentTarget;if(i.disabled)return;const t=i.dataset.actionUid,o=this.headerActions.find(({uid:l})=>l===t);o&&!o.disabled&&((o==null?void 0:o.type)==="toggle"&&(o.value=!o.value),this.emit("trigger-header-action",{action:o}))}_triggerAction(e){const i=e.currentTarget;if(i.disabled)return;const t=i.dataset.actionUid,{allActions:o}=this.viewModel,l=o.findIndex(d=>d.uid===t),u=o.at(l);u&&u.type==="toggle"&&(u.value=!u.value),this.viewModel.triggerAction(l)}_createSpinner(e){e&&(this._spinner=new oe({view:e}),e.ui.add(this._spinner,{key:D,position:"manual",internal:!0}))}_wireUpView(e){var i;this._destroySpinner(),e&&((i=this.visibleElements)!=null&&i.spinner)&&this._createSpinner(e)}_hideSpinner(){const{_spinner:e}=this;e&&(e.location=null,e.hide())}_viewReadyChange(e,i){var t;e?this._wireUpView((t=this.viewModel)==null?void 0:t.view):i&&this.viewModel.clear()}_viewChange(e,i){e&&i&&this.viewModel.clear()}_destroySelectedFeatureWidget(){const{_feature:e}=this;e&&(e.viewModel=null,!e.destroyed&&e.destroy()),this._feature=null}_closeOpenActionMenu(){const{_actionBarMenuNode:e}=this;e&&(e.menuOpen=!1)}_destroyDrillInFlowItemWidgets(){this._drillInFlowItems.drain(e=>{"showAllEnabled"in e.viewModel&&(e.viewModel.showAllEnabled=!1),"activeCategory"in e.viewModel&&(e.viewModel.activeCategory=null),e.viewModel=null,e.destroy()})}_toggleScreenLocationEnabled(){const{viewModel:e}=this;e&&(e.screenLocationEnabled=e.active)}_displaySpinner(){const{_spinner:e}=this;if(!e)return;const{location:i,waitingForResult:t}=this.viewModel;t&&i?e.show({location:i}):e.hide()}_destroySpinner(){var i,t;const{_spinner:e}=this;e&&((t=(i=e.view)==null?void 0:i.ui)==null||t.remove(e,D),e.destroy(),this._spinner=null)}_spinnerEnabledChange(e){var i;this._destroySpinner(),e&&this._createSpinner((i=this.viewModel)==null?void 0:i.view)}};s([n()],r.prototype,"_drillInFlowItems",void 0),s([n()],r.prototype,"_hideActionText",null),s([n()],r.prototype,"_featureNavigationVisible",null),s([n()],r.prototype,"_isCollapsed",null),s([n()],r.prototype,"_collapseEnabled",null),s([n({readOnly:!0})],r.prototype,"active",null),s([n()],r.prototype,"collapsed",void 0),s([n()],r.prototype,"content",null),s([n()],r.prototype,"icon",null),s([n()],r.prototype,"featureMenuOpen",null),s([n()],r.prototype,"featureMenuTitle",null),s([n()],r.prototype,"featureNavigationTop",void 0),s([n()],r.prototype,"features",null),s([n()],r.prototype,"goToOverride",null),s([n({type:V})],r.prototype,"headerActions",void 0),s([n()],r.prototype,"headingLevel",void 0),s([n()],r.prototype,"initialDisplayMode",null),s([n()],r.prototype,"location",null),s([n()],r.prototype,"label",null),s([n()],r.prototype,"map",null),s([n(),A("esri/widgets/Features/t9n/Features")],r.prototype,"messages",void 0),s([n(),A("esri/t9n/common")],r.prototype,"messagesCommon",void 0),s([n()],r.prototype,"promises",null),s([n()],r.prototype,"responsiveActionsEnabled",void 0),s([n({readOnly:!0})],r.prototype,"selectedFeature",null),s([n({readOnly:!0})],r.prototype,"selectedDrillInFeature",null),s([n()],r.prototype,"selectedFeatureIndex",null),s([n({readOnly:!0})],r.prototype,"selectedFeatureWidget",null),s([n()],r.prototype,"spatialReference",null),s([n()],r.prototype,"title",null),s([n()],r.prototype,"timeZone",null),s([n()],r.prototype,"updateLocationEnabled",null),s([n()],r.prototype,"view",null),s([n({type:R}),de(["triggerAction","trigger-action"])],r.prototype,"viewModel",void 0),s([n({type:$,nonNullable:!0})],r.prototype,"visibleElements",void 0),s([n()],r.prototype,"visible",null),r=s([T("esri.widgets.Features")],r);const Ee=r;export{Ee as B};
