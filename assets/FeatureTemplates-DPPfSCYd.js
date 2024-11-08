const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TextSymbol-D8QO_KUV.js","./tslib.es6-B3Jf3DVX.js","./Color-BCS62Hs5.js","./colorUtils-0bJDPow9.js","./mathUtils-C4_ghTv4.js","./subclass-BZA_h8Db.js","./jsonMap-0cxwUWs2.js","./enumeration-Ba5njXdz.js","./screenUtils-_ZIvrt5o.js","./writer-DNAwXnhG.js","./assets-C43MgM-v.js","./index-Bh2oEzTI.js","./index-2kwcjS9-.css","./Accessor-BLX9ikPh.js","./cast-Bjksrh93.js","./calcite-icon-Cu0W9dtm.js","./icon-BQO9J86c.js","./jsxFactory-CJa39Fro.js","./intl-CChhNOV8.js","./date-DlqISzcw.js","./locale-C9TlLpzi.js","./messages-OmQvZhAg.js","./Evented-BHRw9x22.js","./Promise-B2Hu02L7.js","./reactiveUtils-C5zUhJQJ.js","./asyncUtils-CWX51uTe.js","./Collection-CEdjem1-.js","./shared-B3wH2qpO.js","./SimpleObservable-KocWTzVy.js","./uuid-fwrPAdZb.js","./dom-D_AJDzAj.js","./observers-D2xgmA06.js","./calcite-loader-DP4PIFO8.js","./loader-C-zIPscB.js","./locale-A4FuYD8q.js","./key-D63ExP77.js","./calcite-input-DAafN6Cc.js","./input2-BReyTnf4.js","./form-BZPQ5PUM.js","./interactive-y84HQRWL.js","./label-DEe8AW1C.js","./component-6CIDVndn.js","./loadable-DM18hPdE.js","./t9n-D0ry3MEw.js","./Validation-Bz9yoU6e.js","./input-j1u1wOBY.js","./input-message-CWvsvdFk.js","./progress-BXyickl_.js","./calcite-list-C4jOVpC-.js","./resources4-DXHY1U7R.js","./utils3-BrU6GrkI.js","./filter-yN6-jZOU.js","./debounce-BOqmhDXu.js","./scrim-DPa2aeKh.js","./calcite-list-item-vbKS6alm.js","./action-D0Er9Ef6.js","./handle-Ct1HP3bl.js","./calcite-notice-DSp0z_Oh.js","./conditionalSlot-R5D9krYS.js","./resources2-DjkgwdyM.js","./openCloseComponent-CmOrfBN-.js"])))=>i.map(i=>d[i]);
import{_ as F}from"./index-Bh2oEzTI.js";import{r as s}from"./tslib.es6-B3Jf3DVX.js";import{watch as A,initial as J,syncAndInitial as Y,sync as Z,when as ee}from"./reactiveUtils-C5zUhJQJ.js";import{m as l,a as M}from"./subclass-BZA_h8Db.js";import{O as te,k as ie}from"./layerUtils-BrNoooE9.js";import{n as p,l as K,e as j,B as se,r as re}from"./jsxFactory-CJa39Fro.js";import{d as le}from"./asyncUtils-CWX51uTe.js";import{o as ne}from"./Evented-BHRw9x22.js";import{b as G,e as oe,s as x}from"./Accessor-BLX9ikPh.js";import{h as ae}from"./UpdatingHandles-GfwcIh5z.js";import{d as de}from"./Graphic-DsxsIjhH.js";import{V as ue}from"./symbolUtils-_AKSLEsP.js";import{s as pe}from"./Identifiable-B1UbsKNt.js";import{e as ce}from"./Heading-C-odFCu-.js";import{e as me}from"./globalCss-CZa70j6i.js";import{e as he}from"./vmEvent-D4Ubqkbq.js";async function ye(e,t){var i;return e.type==="subtype-sublayer"?await((i=e.parent)==null?void 0:i.load(t)):await e.load(t),e}function fe(e){const t=new Map,i=[];for(const r of e)if(L(r)){i.push(r);for(const n of r.items)t.set(n.template,n)}else t.set(r.template,r);return[t,i]}const L=e=>"items"in e;var P;let _=P=class extends G{constructor(e){super(e),this._activeFetchInfo={id:null,request:null},this.disabledFunction=null,this.layer=null,this.template=null,this.thumbnail=null}initialize(){this.addHandles(A(()=>{const{layer:e}=this;return[e&&"renderer"in e?e.renderer:null,this.template]},()=>{this._activeFetchInfo.id=null,this._activeFetchInfo.request=null,this._set("thumbnail",null)},J))}get description(){var e;return(e=this.template)==null?void 0:e.description}set description(e){this.template&&(this.template.description=e)}get disabled(){var e;return((e=this.disabledFunction)==null?void 0:e.call(this,this))??!1}get label(){var e;return(e=this.template)==null?void 0:e.name}set label(e){this.template&&(this.template.name=e)}get id(){var e;return`${this.label??""}–${(e=this.layer)==null?void 0:e.id}`}get supportsUpload(){var e;return((e=this.layer)==null?void 0:e.type)==="scene"}clone(){const e=this.thumbnail!=null?this.thumbnail.cloneNode(!0):null,t=new P({layer:this.layer,template:this.template});return t._set("thumbnail",e),t}static async fetchThumbnail(e,t){var n;const i=await be(e,t);if(i==null)return null;const r={maxSize:36};return((n=e.renderer)==null?void 0:n.type)==="dictionary"&&(r.fieldMap=e.renderer.fieldMap??void 0,r.feature={attributes:t.prototype.attributes??{}}),await ue(i,r)}};s([l()],_.prototype,"description",null),s([l()],_.prototype,"disabled",null),s([l()],_.prototype,"disabledFunction",void 0),s([l()],_.prototype,"label",null),s([l()],_.prototype,"layer",void 0),s([l()],_.prototype,"template",void 0),s([l()],_.prototype,"thumbnail",void 0),s([l()],_.prototype,"id",null),s([l()],_.prototype,"supportsUpload",null),_=P=s([M("esri.widgets.FeatureTemplates.TemplateItem")],_);const Q=_;async function be(e,t){const{renderer:i}=e;if(i){const r=new de({attributes:t.prototype.attributes}),n=await i.getSymbolAsync(r);if(n)return n}return _e(e)}async function _e(e){const{geometryType:t}=e,i=t==="point"||t==="multipoint"?await F(()=>import("./TextSymbol-D8QO_KUV.js").then(r=>r.k),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url):t==="polyline"?await F(()=>import("./TextSymbol-D8QO_KUV.js").then(r=>r.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url):t==="polygon"||t==="mesh"||t==="multipatch"?await F(()=>import("./TextSymbol-D8QO_KUV.js").then(r=>r.j),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url):null;return i?new i.default:null}let T=class extends pe(G){constructor(t){super(t),this.allItems=[],this.filterFunction=null,this.label=null}get items(){const{filterFunction:t}=this;return t==null||t(this)?this.allItems:this.allItems.filter(t)}get id(){return this.label}reapplyFilter(){this.notifyChange("filterFunction")}findByTemplate(t){return this.items.find(i=>i.template===t)}};s([l()],T.prototype,"allItems",void 0),s([l()],T.prototype,"filterFunction",void 0),s([l()],T.prototype,"items",null),s([l()],T.prototype,"label",void 0),s([l()],T.prototype,"id",null),T=s([M("esri.widgets.FeatureTemplates.TemplateItemGroup")],T);const ge=T,U=e=>e==null||typeof e!="object"?[]:[..."templates"in e&&Array.isArray(e.templates)?e.templates:[],..."types"in e&&Array.isArray(e.types)?e.types.flatMap(t=>t.templates):[]];var O;const ve=({layer:e})=>({key:e,label:e.title??""}),Ie=({layer:e})=>({key:e.geometryType,label:e.geometryType??""});let u=O=class extends ne.EventedAccessor{constructor(e){super(e),this._allItems=[],this._updatingHandles=new ae,this._updateAllItemsTask=null,this.disabled=!1,this.disabledItemFunction=null,this.filterFunction=null,this.selectedItem=null}initialize(){this._get("groupBy")||(this.groupBy="layer"),this.addHandles([A(()=>[this._featureTemplatesByLayer,this._groupByFunction],()=>{this._updateAllItemsTask=oe(this._updateAllItemsTask);const e=le(t=>this._updateAllItems(t));this._updateAllItemsTask=e,this._updatingHandles.addPromise(e.promise)},Y),A(()=>this.filterFunction,e=>{for(const t of this._allItems)L(t)&&(t.filterFunction=e)},Z)])}get _featureTemplatesByLayer(){const e=new Map;if(!this.layers)return e;for(const t of this.layers)if(t.type==="subtype-group")for(const i of t.sublayers)e.set(i,U(i));else e.set(t,U(t));return e}set groupBy(e){if(this._set("groupBy",e),typeof e!="function")switch(e){case"layer":this._groupByFunction=ve;break;case"geometry":this._groupByFunction=Ie;break;default:this._groupByFunction=null}else this._groupByFunction=t=>this._ensureGroupByObject(e(t))}get layers(){return this._get("layers")}set layers(e){const t="layers";if(this.removeHandles(t),e){const i=()=>this.notifyChange("state");this.addHandles(e.map(r=>ee(()=>r.loadStatus,i)),t)}this._set("layers",e)}get state(){return this.updating?"loading":this.layers.length===0?"disabled":"ready"}get numberOfFeatureTemplates(){return Array.from(this._featureTemplatesByLayer.values()).reduce((e,t)=>e+t.length,0)}get items(){const{filterFunction:e}=this;return e==null?this._allItems:this._allItems.filter(t=>L(t)?t.items.length>0:e(t))}get updating(){return this._updatingHandles.updating}refresh(){this.notifyChange("filterFunction");for(const e of this._allItems)L(e)&&e.reapplyFilter()}select(e,{emit:t=!0}={}){const i=this.selectedItem,r=(e==null?void 0:e.clone())||null;this._set("selectedItem",r),t&&this.emit("select",{item:r,oldItem:i,template:(r==null?void 0:r.template)??null})}_createItem(e,t){return new Q({disabledFunction:this.disabledItemFunction,layer:t,template:e})}_ensureGroupByObject(e){return typeof e=="string"?{key:e,label:e}:e}async _updateAllItems(e){var m,$;const t=this._allItems;if(this.numberOfFeatureTemplates===0)return Fe(t),void(this._allItems=[]);const[i,r]=fe(t),n={signal:e},o=this._featureTemplatesByLayer,d=[];for(const[h,g]of o){await ye(h,n),x(e);const b=(m=te(h))==null?void 0:m.operations;if(b!=null&&b.supportsEditing&&(b!=null&&b.supportsAdd))for(const I of g)i.has(I)?(d.push(i.get(I)),i.delete(I)):d.push(this._createItem(I,h))}for(const h of[...i.values(),...r])h.destroy();if(this._groupByFunction==null)return x(e),void(this._allItems=d);const c=new Map;for(const h of d){const g=this._groupByFunction(h),{key:b,label:I}=g.key!=null?g:O.nullGroupBy;c.has(b)||c.set(b,{label:I,items:[]}),($=c.get(b))==null||$.items.push(h)}const{filterFunction:f}=this,y=Array.from(c.values()).map(({label:h,items:g})=>new ge({allItems:g,filterFunction:f,label:h}));x(e),y.length===1&&y[0].label===O.nullGroupBy.label?this._allItems=y[0].allItems:this._allItems=y}};function Fe(e){for(const t of e){if(L(t))for(const i of t.items)i.destroy();t.destroy()}}u.nullGroupBy={key:Symbol(),label:"Other​"},s([l()],u.prototype,"_allItems",void 0),s([l()],u.prototype,"_featureTemplatesByLayer",null),s([l()],u.prototype,"_groupByFunction",void 0),s([l()],u.prototype,"_updatingHandles",void 0),s([l()],u.prototype,"disabled",void 0),s([l()],u.prototype,"disabledItemFunction",void 0),s([l({value:null})],u.prototype,"filterFunction",void 0),s([l()],u.prototype,"groupBy",null),s([l({value:[]})],u.prototype,"layers",null),s([l()],u.prototype,"state",null),s([l({readOnly:!0})],u.prototype,"numberOfFeatureTemplates",null),s([l({readOnly:!0})],u.prototype,"items",null),s([l({readOnly:!0})],u.prototype,"selectedItem",void 0),s([l()],u.prototype,"updating",null),u=O=s([M("esri.widgets.FeatureTemplates.FeatureTemplatesViewModel")],u);const z=u,C="esri-item-list",B=`${C}__list-item`,v={base:C,filterContainerSticky:`${C}__filter-container--sticky`,group:`${C}__group`,groupHeader:`${C}__group__header`,item:B,itemDisabled:`${B}--disabled`,itemIcon:`${B}-icon`,itemContentEnd:`${B}-content-end`,noMatchesMessage:`${C}__no-matches-message`,scroller:`${C}__scroller`,scrollerEnabled:`${C}__scroller--enabled`},$e=4;function we(e){const{disabled:t,filterText:i="",id:r,messages:n,onFilterChange:o,...d}=e;return p("div",{key:r},e.filterEnabled??1?Le({disabled:t,filterText:i,id:r,messages:n,onFilterChange:o}):null,Ce({...d,disabled:t,enableListScroll:e.enableListScroll??!0,filterText:i,messages:n}))}function Te(e){return!!e.items}function Ce(e){const{headingLevel:t,items:i,...r}=e;return i.length===0?p("div",{class:v.noMatchesMessage,key:"no-matches"},e.messages.noMatches):p("div",{class:K({[v.scroller]:!0,[v.scrollerEnabled]:!!e.enableListScroll}),key:"item-container"},i.map(n=>Te(n)?Me({...r,group:n,headingLevel:t}):W({...r,grouped:!0,item:n})))}function Le(e){const{disabled:t,messages:i,filterText:r,enableListScroll:n}=e;return p("div",{class:n?void 0:v.filterContainerSticky,key:"filter"},p("calcite-input",{disabled:t,placeholder:i.filterPlaceholder,type:"search",value:r,onCalciteInputInput:o=>{const d=o.currentTarget;e.onFilterChange&&e.onFilterChange(d.value)}}))}function W(e){const{disabled:t,grouped:i,identify:r,item:n,onItemMouseEnter:o,onItemMouseLeave:d,onItemSelect:c,renderIcon:f,renderCustomItem:y,renderItemContent:m,renderItemContentEnd:$,renderItemLabel:h,renderItemDescription:g,selectedItem:b}=e,I=N(n,r),R=I===N(b,r),V=y==null?void 0:y(e);if(V)return V;const E=m==null?void 0:m(n),H=$==null?void 0:$(n),S=!(!n.disabled&&!t);return p("calcite-list-item",{afterUpdate:w=>{w.selected=R},"aria-level":i?"2":"",class:K({[v.item]:!0,[v.itemDisabled]:S}),"data-item":n,description:E?void 0:(g==null?void 0:g(n))??void 0,disabled:S,key:I,label:E?void 0:(h==null?void 0:h(n))??n.label??void 0,onmouseenter:w=>o==null?void 0:o(D(w)),onmouseleave:w=>d==null?void 0:d(D(w)),selected:R,tabIndex:S?-1:0,onCalciteListItemSelect:w=>{w.preventDefault(),c==null||c(D(w))}},p("div",{class:v.itemIcon,key:"content-start",slot:"content-start"},f==null?void 0:f(n)),E?p("div",{key:"content",slot:"content"},E):null,H?p("div",{class:v.itemContentEnd,key:"content-end",slot:"content-end"},H):null)}function N(e,t){return e?`${(t==null?void 0:t(e))||e.id}__${e.label}`:""}function D(e){return e.currentTarget["data-item"]}function Me(e){const{disabled:t,group:i,headingLevel:r=$e,selectionMode:n="none",renderCustomGroupContent:o,...d}=e,c=o==null?void 0:o(e);return p("div",{class:v.group,key:i.label??void 0},p(ce,{class:v.groupHeader,level:r},i.label),c||p("calcite-list",{disabled:t,selectionAppearance:"border",selectionMode:n},i.items.map(f=>W({...d,disabled:t,item:f,grouped:!0}))))}let k=class extends G{constructor(e){super(e),this.filter=!0}};s([l({type:Boolean,nonNullable:!0})],k.prototype,"filter",void 0),k=s([M("esri.widgets.FeatureTemplates.VisibleElements")],k);const X=k,Ee={base:"esri-feature-templates"};function Be(e){return e.length>0&&L(e[0])}function Oe(e){return e.id}let a=class extends se{constructor(e,t){super(e,t),this.enableListScroll=!0,this.filterText="",this.headingLevel=4,this.messages=null,this.messagesCommon=null,this.selectionMode="none",this.viewModel=new z,this.visibleElements=new X,this.renderCustomItem=i=>null,this.renderCustomGroupContent=i=>null,this.renderItemLabel=()=>null,this.renderItemDescription=()=>null,this.renderItemContent=i=>null,this.renderItemContentEnd=i=>null,this._iconIntersectionObserver=new IntersectionObserver((i,r)=>{i.forEach(async n=>{if(n.isIntersecting){const o=n.target;if(Ae(o))return void r.unobserve(o);const d=ke(o),{layer:c,template:f}=d;q(o,!0);const y=await Q.fetchThumbnail(c,f).catch(()=>(q(o,!1),null));if(y==null)return;o.appendChild(y)}})}),this._renderItemIcon=i=>ie(i.layer)?p("span",{"data-has-icon":!0,"data-item":i,key:"icon"},p("calcite-icon",{icon:"table"})):p("span",{afterCreate:this._afterItemCreateOrUpdate,afterRemoved:this._afterItemRemoved,afterUpdate:this._afterItemCreateOrUpdate,"data-has-icon":!1,"data-item":i,key:"icon"}),this._afterItemCreateOrUpdate=i=>{var r;(r=this._iconIntersectionObserver)==null||r.observe(i)},this._afterItemRemoved=i=>{var r;(r=this._iconIntersectionObserver)==null||r.unobserve(i)}}initialize(){const e=({label:t})=>!this.filterText||!!(t!=null&&t.toLowerCase().includes(this.filterText.toLowerCase()));this.addHandles(A(()=>this.viewModel,(t,i)=>{t&&!t.filterFunction&&(this.filterFunction=e),i&&i!==t&&i.filterFunction===e&&(i.filterFunction=null)},J))}destroy(){var e;(e=this._iconIntersectionObserver)==null||e.disconnect(),this._iconIntersectionObserver=null}loadDependencies(){return re({icon:()=>F(()=>import("./calcite-icon-Cu0W9dtm.js"),__vite__mapDeps([15,16,17,1,18,19,6,5,20,21,13,10,11,12,22,23,24,25,26,27,28,29,14,30,31]),import.meta.url),loader:()=>F(()=>import("./calcite-loader-DP4PIFO8.js"),__vite__mapDeps([32,33,17,1,18,19,6,5,20,21,13,10,11,12,22,23,24,25,26,27,28,29,14,30,34,35,31]),import.meta.url),input:()=>F(()=>import("./calcite-input-DAafN6Cc.js"),__vite__mapDeps([36,37,17,1,18,19,6,5,20,21,13,10,11,12,22,23,24,25,26,27,28,29,14,30,38,39,35,40,41,42,34,31,43,44,45,16,46,47]),import.meta.url),list:()=>F(()=>import("./calcite-list-C4jOVpC-.js"),__vite__mapDeps([48,17,1,18,19,6,5,20,21,13,10,11,12,22,23,24,25,26,27,28,29,14,30,39,31,49,50,42,43,34,35,51,52,16,37,38,40,41,44,45,46,47,33,53]),import.meta.url),"list-item":()=>F(()=>import("./calcite-list-item-vbKS6alm.js"),__vite__mapDeps([54,17,1,18,19,6,5,20,21,13,10,11,12,22,23,24,25,26,27,28,29,14,30,39,34,35,31,43,42,50,49,55,41,16,33,56]),import.meta.url),notice:()=>F(()=>import("./calcite-notice-DSp0z_Oh.js"),__vite__mapDeps([57,17,1,18,19,6,5,20,21,13,10,11,12,22,23,24,25,26,27,28,29,14,58,31,30,42,34,35,43,59,60,41,16]),import.meta.url)})}get disabled(){return this.viewModel.disabled}set disabled(e){this.viewModel.disabled=e}get filterFunction(){return this.viewModel.filterFunction}set filterFunction(e){this.viewModel.filterFunction=e}get groupBy(){return this.viewModel.groupBy}set groupBy(e){this.viewModel.groupBy=e}get icon(){return"list-rectangle"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get layers(){return this.viewModel.layers}set layers(e){this.viewModel.layers=e}get selectedItem(){return this.viewModel.selectedItem}select(e,t){return this.viewModel.select(e,t)}render(){const{disabled:e,enableListScroll:t,filterText:i,headingLevel:r,messages:n,viewModel:{items:o,numberOfFeatureTemplates:d,selectedItem:c,state:f}}=this,y=this.visibleElements.filter&&d>1;if(Be(o)){const m=o.find($=>$.label===z.nullGroupBy.label);m&&(m.label=n.other)}return p("div",{"aria-label":n.widgetLabel,class:this.classes(Ee.base,me.widget)},f==="loading"?p("calcite-loader",{key:"loader",label:this.messagesCommon.loading,type:"indeterminate"}):f==="ready"?p(we,{disabled:e,enableListScroll:t,filterEnabled:y,filterText:i,headingLevel:r,id:this.id,identify:Oe,items:o,messages:{filterPlaceholder:n.filterPlaceholder,noItems:n.noItems,noMatches:n.noMatches},renderCustomGroupContent:this.renderCustomGroupContent,renderCustomItem:this.renderCustomItem,renderIcon:this._renderItemIcon,renderItemContent:this.renderItemContent,renderItemContentEnd:this.renderItemContentEnd,renderItemDescription:this.renderItemDescription,renderItemLabel:this.renderItemLabel,selectedItem:c??void 0,selectionMode:this.selectionMode??void 0,onFilterChange:m=>{this.filterText=m},onItemSelect:m=>!L(m)&&this.viewModel.select(m)}):null)}};function ke(e){return e==null?void 0:e["data-item"]}function Ae(e){return!!(e!=null&&e["data-has-icon"])}function q(e,t){e&&(e["data-has-icon"]=t)}s([l()],a.prototype,"disabled",null),s([l()],a.prototype,"enableListScroll",void 0),s([l()],a.prototype,"filterFunction",null),s([l()],a.prototype,"filterText",void 0),s([l()],a.prototype,"groupBy",null),s([l()],a.prototype,"headingLevel",void 0),s([l()],a.prototype,"icon",null),s([l()],a.prototype,"label",null),s([l()],a.prototype,"layers",null),s([l(),j("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")],a.prototype,"messages",void 0),s([l(),j("esri/t9n/common")],a.prototype,"messagesCommon",void 0),s([l({readOnly:!0})],a.prototype,"selectedItem",null),s([l()],a.prototype,"selectionMode",void 0),s([l(),he("select")],a.prototype,"viewModel",void 0),s([l({type:X,nonNullable:!0})],a.prototype,"visibleElements",void 0),s([l()],a.prototype,"renderCustomItem",void 0),s([l()],a.prototype,"renderCustomGroupContent",void 0),s([l()],a.prototype,"renderItemLabel",void 0),s([l()],a.prototype,"renderItemDescription",void 0),s([l()],a.prototype,"renderItemContent",void 0),s([l()],a.prototype,"renderItemContentEnd",void 0),a=s([M("esri.widgets.FeatureTemplates")],a);const Se=a,Ye=Object.freeze(Object.defineProperty({__proto__:null,default:Se},Symbol.toStringTag,{value:"Module"}));export{Ye as F,Se as M,W as m,we as o,U as t,z as v};
