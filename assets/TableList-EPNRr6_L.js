const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-jjUP6Yam.js","./index-CMxz6F2k.js","./jsxFactory-Cnml7uXM.js","./Accessor-BmwT4B0c.js","./intl-Duiy0OzY.js","./Promise-DfET-uns.js","./cast-CsZslgGN.js","./index-4eY77cms.js","./index-Cx51aysm.css","./JSONSupport-DcrLLGjL.js","./Evented-Dw4_VOGn.js","./reactiveUtils-XM7cS2OP.js","./SimpleObservable-CvOkykwM.js","./uuid-Cl5lrJ4c.js","./guid-ejniuQmw.js","./useT9n-C1Hrfc-A.js","./index-DwIhxbHs.js","./dom-DEluURzl.js","./observers-Co4E8E8j.js","./ref-D9wHsL_T.js","./directive-helpers-DaBykg1t.js","./static-DLD4WjLv.js","./form-BzoUrXC7.js","./interactive-DTzfFku4.js","./label-CHHpnzD0.js","./loadable-XBvaWFYY.js","./component-CBVlbUuE.js","./index-CMdCteX_.js","./index-Z5_W1-0F.js","./index-BPm91e5Z.js","./keyed-CU1C-h1n.js","./index-DMeQur4V.js","./floating-ui-IixYHfbQ.js","./debounce-DbkufipY.js","./openCloseComponent-nqWrSaIH.js","./FloatingArrow-BZRr6Zld.js","./useFocusTrap-COeL24Kx.js","./focusTrapComponent-D1wJZ4RD.js","./key-CZcQa38B.js","./index-DK5B8inx.js","./array-BbE1dLa5.js","./index-DyXGQ9Xl.js","./index-C6rrpqn6.js","./index-BCDLx0rN.js","./index-fFnlo_g2.js","./index-DWeq-ojO.js","./index-pyEU_klK.js","./live-D7NQ-TrC.js","./locale-CXx8I9ox.js","./Validation-BYp9DS84.js","./input-DI9tZAPS.js","./filter-D4A4y0z5.js","./escapeRegExp-CdLjXKbf.js","./utils-Dtivty39.js","./index-CV25o1as.js","./resources4-Crg87oFz.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./index-4eY77cms.js";import{r as i,m as s,a as P,g as J,ax as G,G as se}from"./Accessor-BmwT4B0c.js";import{V as E,d as _,P as C,v as le}from"./reactiveUtils-XM7cS2OP.js";import{n as H}from"./Identifiable-BHVfzH03.js";import{O as Q,n as h,c as oe,T as W,e as z}from"./jsxFactory-Cnml7uXM.js";import{I as re}from"./LayerListItem-F6gOcfEF.js";import{p as ne,u as R,d as ae,e as de,i as he,q as j,s as ce,f as pe}from"./layerListUtils-BIu86t6C.js";import{e as $}from"./globalCss-vQlnDsEX.js";import{t as me}from"./listUtils-vswmtyNy.js";import{e as ue}from"./vmEvent-D4Ubqkbq.js";import{a as ye}from"./cast-CsZslgGN.js";import{a as be,c as _e,p as fe}from"./ActionToggle-D7439N1A.js";import{e as q}from"./widget-GKEQ1p1m.js";import{i as ge}from"./Evented-Dw4_VOGn.js";import"./SimpleObservable-CvOkykwM.js";import"./intl-Duiy0OzY.js";import"./Promise-DfET-uns.js";import"./uuid-Cl5lrJ4c.js";import"./catalogUtils-CGCu8hgu.js";import"./actionUtils-CtQI3q6p.js";import"./substitute-CvdjmBYq.js";import"./JSONSupport-DcrLLGjL.js";const v="esri-table-list",w=`${v}__item`,A={base:v,actionMenu:`${v}__action-menu`,actionGroup:`${v}__action-group`,filterNoResults:`${v}__filter-no-results`,item:w,itemContentBottom:`${w}-content-bottom`,itemMessage:`${w}-message`,itemActionIcon:`${w}-action-icon`,itemActionImage:`${w}-action-image`,itemTemporaryIcon:`${w}-temporary-icon`,publishing:`${v}__publishing`,statusIndicator:`${v}__status-indicator`};let m=class extends H.IdentifiableMixin(Q){constructor(t,l){super(t,l),this.className=null,this.content=null,this.flowEnabled=!1,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}get disabled(){return!(this.content&&this.listItem)}set disabled(t){this._overrideIfSome("disabled",t)}get icon(){const{image:t}=this,l=this._getFirstWidget();return this._get("icon")??(!t&&l?l.icon:null)}set icon(t){this._overrideIfSome("icon",t)}get title(){var t;return this._get("title")||(((t=this._getFirstWidget())==null?void 0:t.label)??"")}set title(t){this._override("title",t)}render(){return h("div",{class:"esri-list-item-panel"},this._renderContents())}_renderContent(t){const{disabled:l,open:o}=this;return t&&!l&&o?typeof t=="string"?h("div",{innerHTML:t,key:t}):q(t)?h("div",{key:"content-widget"},t.render()):t instanceof HTMLElement?h("div",{afterCreate:this._attachToNode,bind:t,key:"content-element"}):null:null}_renderContents(){const{content:t,open:l}=this;return l?Array.isArray(t)?t.map(o=>this._renderContent(o)):this._renderContent(t):null}_attachToNode(t){t.appendChild(this)}_getWidget(t){return q(t)?t:null}_getFirstWidget(){const{content:t}=this;return Array.isArray(t)?t.map(l=>this._getWidget(l)).find(l=>l):this._getWidget(t)}};i([s()],m.prototype,"className",void 0),i([s()],m.prototype,"content",void 0),i([s()],m.prototype,"disabled",null),i([s()],m.prototype,"flowEnabled",void 0),i([s()],m.prototype,"icon",null),i([s()],m.prototype,"image",void 0),i([s()],m.prototype,"listItem",void 0),i([s()],m.prototype,"open",void 0),i([s()],m.prototype,"title",null),i([s()],m.prototype,"visible",void 0),m=i([P("esri.widgets.TableList.ListItemPanel")],m);const X=m;var L;const x="layer",k="child-list-mode",Ie="hide",ve=E.ofType({key:"type",defaultKeyValue:"button",base:fe,typeMap:{button:_e,toggle:be}}),Y=E.ofType(ve);let a=L=class extends H.IdentifiableMixin(J){constructor(e){super(e),this.actionsSections=new Y,this.actionsOpen=!1,this.checkPublishStatusEnabled=!1,this.children=new(E.ofType(L)),this.hidden=!1,this.layer=null,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.open=!1,this.panel=null,this.parent=null,this.sortable=!0}initialize(){if(this.addHandles([_(()=>{var e;return[(e=this.layer)==null?void 0:e.listMode,this.listModeDisabled]},()=>this._watchLayerProperties(this.layer),C),_(()=>this.checkPublishStatusEnabled,e=>this._updateChildrenPublishing(e),C),_(()=>this.panel,e=>this._setListItemOnPanel(e),C)]),typeof this.listItemCreatedFunction=="function"){const e={item:this};this.listItemCreatedFunction.call(null,e)}}destroy(){var e;(e=this.panel)==null||e.destroy(),this.children.destroyAll()}get error(){var e;return(e=this.layer)==null?void 0:e.loadError}castPanel(e){var t;return(t=this.panel)!=null&&t.open&&!e.hasOwnProperty("open")&&(e.open=!0),e?new X(e):null}get publishing(){var l;const{layer:e,checkPublishStatusEnabled:t}=this;return(t&&e&&"publishingInfo"in e&&((l=e.publishingInfo)==null?void 0:l.status)==="publishing")??!1}get title(){var t;const e=G(this,"layer.layer");return(!e||e&&G(this,"layer.layer.loaded")?(t=this.layer)==null?void 0:t.title:null)??""}set title(e){this._overrideIfSome("title",e)}clone(){return new L({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,children:this.children.clone(),hidden:this.hidden,layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,listModeDisabled:this.listModeDisabled,open:this.open,panel:this.panel,parent:this.parent,sortable:this.sortable,title:this.title})}_updateChildrenPublishing(e){var t;(t=this.children)==null||t.forEach(l=>l.checkPublishStatusEnabled=e)}_setListItemOnPanel(e){e&&(e.listItem=this)}_createChildItems(e,t){return e.reverse().map(l=>t||ne(l)?new L({layer:l,checkPublishStatusEnabled:this.checkPublishStatusEnabled,listItemCreatedFunction:this.listItemCreatedFunction,listModeDisabled:this.listModeDisabled,parent:this}):null).filter(se)}_createChildren(e){const{listModeDisabled:t,children:l}=this,o=e.reverse().filter(n=>!l.some(d=>d.layer===n));l.addMany(this._createChildItems(o,t))}_destroyChildren(e){const{children:t}=this,l=t.filter(o=>!!o.layer&&!e.includes(o.layer));t.destroyMany(l)}_sortChildren(e){this.children.sort((t,l)=>e.indexOf(l.layer)-e.indexOf(t.layer))}_destroyAllChildren(){this.removeHandles(k),this.children.destroyAll()}_compileChildren(e){const t=this.listModeDisabled?e:e==null?void 0:e.filter(l=>R(l)!==Ie);e!=null&&e.length?(this._createChildren(t),this._destroyChildren(t),this._sortChildren(t),this._watchChildLayerListMode(e)):this._destroyAllChildren()}_watchChildLayerListMode(e){this.removeHandles(k),this.listModeDisabled||this.addHandles(e.toArray().map(t=>_(()=>t.listMode,()=>this._compileChildren(e))),k)}_watchSublayerChanges(e){e&&this.addHandles(e.on("change",()=>this._compileChildren(e)),x)}_initializeChildLayers(e){this._compileChildren(e),this._watchSublayerChanges(e)}_watchLayerProperties(e){if(this.removeHandles(x),this.removeHandles(k),!e)return;if(e.load(),(!this.listModeDisabled&&R(e))==="hide-children")return void this.children.destroyAll();const t=ae(e);t&&this.addHandles(_(()=>e[t],l=>{e.hasOwnProperty(t)&&this._initializeChildLayers(l)},C),x)}};i([s({type:Y})],a.prototype,"actionsSections",void 0),i([s()],a.prototype,"actionsOpen",void 0),i([s()],a.prototype,"checkPublishStatusEnabled",void 0),i([s({type:E.ofType(a)})],a.prototype,"children",void 0),i([s({readOnly:!0})],a.prototype,"error",null),i([s()],a.prototype,"hidden",void 0),i([s()],a.prototype,"layer",void 0),i([s()],a.prototype,"listItemCreatedFunction",void 0),i([s({nonNullable:!0})],a.prototype,"listModeDisabled",void 0),i([s()],a.prototype,"open",void 0),i([s({type:X})],a.prototype,"panel",void 0),i([ye("panel")],a.prototype,"castPanel",null),i([s()],a.prototype,"parent",void 0),i([s({readOnly:!0})],a.prototype,"publishing",null),i([s()],a.prototype,"sortable",void 0),i([s()],a.prototype,"title",null),a=L=i([P("esri.widgets.TableList.ListItem")],a);const U=a,B={map:"map",layerListMode:"layer-list-mode"},we="hide",Z=E.ofType(U);let u=class extends ge.EventedAccessor{constructor(e){super(e),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.tableItems=new Z,this.map=null}initialize(){this.addHandles([_(()=>{var e;return[this.tables,(e=this.map)==null?void 0:e.allTables.toArray()]},()=>this._compileList(),C),_(()=>{var e;return[(e=this.map)==null?void 0:e.loaded,this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled]},()=>this._recompileList())],B.map)}destroy(){this._removeAllItems(),this.map=null,this.tables=null}get tables(){var e;return(e=this.map)==null?void 0:e.allTables}set tables(e){this._overrideIfSome("tables",e)}get state(){const{map:e,tables:t}=this;if(!e)return t?"ready":"disabled";const l=e==null?void 0:e.loadStatus;return typeof l=="string"?l==="loaded"?"ready":l==="loading"?"loading":"disabled":"ready"}get totalItems(){return this.tableItems.length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}_removeAllItems(){this.tableItems.destroyAll()}_getViewableTables(e){return e?this.listModeDisabled?e:e.filter(t=>R(t)!==we):void 0}_watchTablesListMode(e){this.removeHandles(B.layerListMode),e&&!this.listModeDisabled&&this.addHandles(_(()=>e.filter(t=>"listMode"in t).map(t=>t.listMode).toArray(),()=>this._compileList()),B.layerListMode)}_compileList(){const{tables:e}=this;this._watchTablesListMode(e);const t=this._getViewableTables(e);t!=null&&t.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{tableItems:t,listItemCreatedFunction:l,checkPublishStatusEnabled:o}=this;e.forEach(n=>{t.some(d=>d.layer===n)||t.add(new U({checkPublishStatusEnabled:o,layer:n,listItemCreatedFunction:l}))})}_removeItems(e){const{tableItems:t}=this;t.forEach(l=>{if(!l)return;(e==null?void 0:e.find(n=>l.layer===n))||(t.remove(l),l.destroy())})}_sortItems(e){const{tableItems:t}=this;t.sort((l,o)=>{const n=e.indexOf(l.layer),d=e.indexOf(o.layer);return n>d?-1:n<d?1:0})}_recompileList(){this._removeAllItems(),this._compileList()}};i([s()],u.prototype,"checkPublishStatusEnabled",void 0),i([s()],u.prototype,"listItemCreatedFunction",void 0),i([s({nonNullable:!0})],u.prototype,"listModeDisabled",void 0),i([s({type:Z,readOnly:!0})],u.prototype,"tableItems",void 0),i([s()],u.prototype,"tables",null),i([s()],u.prototype,"map",void 0),i([s({readOnly:!0})],u.prototype,"state",null),i([s()],u.prototype,"totalItems",null),u=i([P("esri.widgets.TableList.TableListViewModel")],u);const ee=u;let y=class extends J{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryTableIndicators=!1}};i([s({type:Boolean,nonNullable:!0})],y.prototype,"closeButton",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"collapseButton",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"errors",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"filter",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"flow",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"heading",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"statusIndicators",void 0),i([s({type:Boolean,nonNullable:!0})],y.prototype,"temporaryTableIndicators",void 0),y=i([P("esri.widgets.TableList.TableListVisibleElements")],y);const te=y;function O(e){return e["data-item"]}function Ce(e,t){e==null||e.sort((l,o)=>{const n=t.indexOf(l.uid),d=t.indexOf(o.uid);return n>d?-1:n<d?1:0})}const K="nested",ie=E.ofType(U);let r=class extends H.IdentifiableMixin(Q){constructor(e,t){super(e,t),this._rootListEl=null,this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this._rootGroupUid=`table-${this.uid}`,this.collapsed=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterPredicate=null,this.filterText="",this.headingLevel=2,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.minDragEnabledItems=de,this.minFilterItems=he,this.selectedItems=new ie,this.selectionMode="none",this.viewModel=new ee,this.visibleElements=new te,this._canMove=({dragEl:l,fromEl:o,toEl:n},d)=>{const g=d==="pull"?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,p=O(l);if(!(p!=null&&p.sortable))return!1;const I=O(o),f=j(o),b=O(n),F=j(n),D=!!f&&!!F&&f===F,S={selected:p,from:I,to:b},N=o.group,T=n.group;return N&&T&&typeof g=="function"?g.call(null,S):D},this._onCalciteListOrderChange=l=>{var f;const{_lastDragDetail:o}=this,{toEl:n,fromEl:d,dragEl:g,newIndex:p}=l;if(!d||!n||(o==null?void 0:o.newIndex)===p&&(o==null?void 0:o.dragEl)===g&&(o==null?void 0:o.toEl)===n&&(o==null?void 0:o.fromEl)===d)return;this._lastDragDetail=l,this._selectedDragItemLayerUid=g.value;const I=Array.from(d.children).filter(b=>b==null?void 0:b.matches("calcite-list-item")).map(b=>b.value);Ce((f=this.map)==null?void 0:f.tables,I)},this._onSelectedDragItemLayerUidChange=l=>{this._selectedDragItemLayerUid=l},this._onTriggerAction=(l,o)=>{this.triggerAction(l,o)},this._onPanelOpen=()=>{this._focusPanelFlowItem=!0}}initialize(){this.addHandles([le(()=>this.viewModel.tableItems,"change",()=>ce(this.selectedItems),C),_(()=>[this.filterPredicate,this._rootListEl],()=>pe(this._rootListEl,this.filterPredicate))])}loadDependencies(){return oe({button:()=>M(()=>import("./index-jjUP6Yam.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url),flow:()=>M(()=>import("./index-CMdCteX_.js"),__vite__mapDeps([27,2,3,4,5,6,7,8,9,10,11,12,13,19,20,18,25,17,14]),import.meta.url),"flow-item":()=>M(()=>import("./index-Z5_W1-0F.js"),__vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,29,30,20,19,23,25,26,31,32,33,34,21,35,36,37,38,39,40,41,42]),import.meta.url),list:()=>M(()=>import("./index-BCDLx0rN.js"),__vite__mapDeps([43,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,41,19,20,18,17,30,16,44,45,46,47,21,22,23,38,24,25,48,26,49,50,51,52,33,53]),import.meta.url),notice:()=>M(()=>import("./index-CV25o1as.js"),__vite__mapDeps([54,16,2,3,4,5,6,7,8,9,10,11,12,13,17,14,18,19,20,25,55,34,26,15]),import.meta.url)})}get _dragEnabled(){return this.viewModel.totalItems>=this.minDragEnabledItems&&this.dragEnabled}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get _visibleItems(){var e;return(e=this.tableItems)==null?void 0:e.filter(t=>!t.hidden&&(this.visibleElements.errors||!t.error))}get _openedPanelItems(){return this._visibleItems.filter(({hidden:e,panel:t})=>!e&&(t==null?void 0:t.open)&&!t.disabled&&t.flowEnabled)}get icon(){return"table"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get map(){return this.viewModel.map}set map(e){this.viewModel.map=e}get tableItems(){return this.viewModel.tableItems}get tables(){return this.viewModel.tables}set tables(e){this.viewModel.tables=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){var o;const e=(o=this.viewModel)==null?void 0:o.state,{_visibleItems:t}=this,l={[$.hidden]:e==="loading",[$.disabled]:e==="disabled"};return h("div",{class:this.classes(A.base,$.widget,$.panel,l)},t!=null&&t.length?this._renderItems():this._renderNoItems())}_renderNoItemsMessage(){return h("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return h("div",{class:A.itemMessage,key:"esri-layer-list__no-items"},h("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(){const{_openedPanelItems:e}=this;return e.toArray().map(({title:t,panel:l},o)=>{const n=()=>this._handlePanelFlowItemBack(l);return h("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:t,heading:l.title,headingLevel:this.headingLevel,key:`flow-panel-${l.uid}`,selected:o===e.length-1,onCalciteFlowItemBack:d=>{d.preventDefault(),n()}},l.render(),h("calcite-button",{appearance:"transparent",onclick:n,slot:"footer-actions",width:"full"},this.messagesCommon.back))})}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,W(e))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,W(e))}_renderItems(){const{visible:e,collapsed:t,visibleElements:{closeButton:l,collapseButton:o,heading:n,flow:d},_dragEnabled:g,_visibleItems:p,_filterEnabled:I,_rootGroupUid:f,_openedPanelItems:b,selectionMode:F,messages:D,filterPlaceholder:S,filterText:N}=this,T=[h("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:l,closed:!e,collapsed:t,collapsible:o,heading:n?D.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",selected:!b.length,onCalciteFlowItemClose:()=>this.visible=!1},h("calcite-list",{afterCreate:c=>{this._rootListEl=c},afterRemoved:()=>{this._rootListEl=null},canPull:c=>this._canMove(c,"pull"),canPut:c=>this._canMove(c,"put"),"data-layer-type":f,displayMode:K,dragEnabled:g,filterEnabled:I,filterPlaceholder:S,filterProps:me,filterText:I?N:"",group:f,key:"root-list",label:D.widgetLabel,selectionAppearance:"border",selectionMode:F,onCalciteListChange:c=>this._handleCalciteListChange(c),onCalciteListDragEnd:c=>this._handleCalciteListDragEnd(c.detail),onCalciteListFilter:c=>{var V;return this.filterText=((V=c.currentTarget)==null?void 0:V.filterText)??""},onCalciteListOrderChange:c=>this._onCalciteListOrderChange(c.detail)},p==null?void 0:p.toArray().map(c=>this._renderItem(c)),p!=null&&p.length&&I?h("div",{class:A.filterNoResults,slot:"filter-no-results"},h("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems()];return e?d?h("calcite-flow",{key:"root-flow"},T):T:null}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:l,oldIndex:o}=e;t.insertBefore(l,t.children[o])}_renderItem(e){return h(re,{canMove:this._canMove,css:A,displayMode:K,dragEnabled:this.dragEnabled,item:e,key:`layerListItem-${e.layer.uid}`,listModeDisabled:this.viewModel.listModeDisabled,messages:this.messages,messagesCommon:this.messagesCommon,rootGroupUid:this._rootGroupUid,selectedDragItemLayerUid:this._selectedDragItemLayerUid,selectedItems:this.selectedItems,selectionMode:this.selectionMode,visibleElements:this.visibleElements,onAction:this._onTriggerAction,onPanelOpen:this._onPanelOpen,onSelectedDragItemLayerUidChange:this._onSelectedDragItemLayerUidChange})}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:l}=this;if(t==="none")return;const o=e.target.selectedItems.map(n=>O(n)).filter(Boolean);l.removeAll(),l.addMany(o)}};i([s()],r.prototype,"_rootListEl",void 0),i([s()],r.prototype,"_focusRootFlowItem",void 0),i([s()],r.prototype,"_focusPanelFlowItem",void 0),i([s()],r.prototype,"_dragEnabled",null),i([s()],r.prototype,"_filterEnabled",null),i([s()],r.prototype,"_visibleItems",null),i([s()],r.prototype,"_openedPanelItems",null),i([s()],r.prototype,"collapsed",void 0),i([s()],r.prototype,"dragEnabled",void 0),i([s()],r.prototype,"filterPlaceholder",void 0),i([s()],r.prototype,"filterPredicate",void 0),i([s()],r.prototype,"filterText",void 0),i([s()],r.prototype,"headingLevel",void 0),i([s()],r.prototype,"icon",null),i([s()],r.prototype,"label",null),i([s()],r.prototype,"listItemCanGiveFunction",void 0),i([s()],r.prototype,"listItemCanReceiveFunction",void 0),i([s()],r.prototype,"listItemCreatedFunction",null),i([s()],r.prototype,"map",null),i([s(),z("esri/widgets/TableList/t9n/TableList")],r.prototype,"messages",void 0),i([s(),z("esri/t9n/common")],r.prototype,"messagesCommon",void 0),i([s()],r.prototype,"minDragEnabledItems",void 0),i([s()],r.prototype,"minFilterItems",void 0),i([s({type:ie})],r.prototype,"selectedItems",void 0),i([s()],r.prototype,"selectionMode",void 0),i([s({readOnly:!0})],r.prototype,"tableItems",null),i([s()],r.prototype,"tables",null),i([ue("trigger-action"),s({type:ee})],r.prototype,"viewModel",void 0),i([s({type:te,nonNullable:!0})],r.prototype,"visibleElements",void 0),r=i([P("esri.widgets.TableList")],r);const qe=r;export{qe as default};
