import{e as o}from"./Evented-CXIxDjmW.js";import{V as m}from"./reactiveUtils-BFQ0BtrB.js";import{n as e,t as s}from"./collectionUtils-Dm1icNvk.js";import{y as p,b as a}from"./subclass-BR3PhgZG.js";import{f as n}from"./LayerView2D-Dn0gqiP2.js";import{y as l}from"./LayerView-CbIY_4n2.js";import"./Accessor-D6mNnsWy.js";import"./shared-B3wH2qpO.js";import"./Container-BQo1Tfto.js";import"./DefaultUI-Cy6B6U3V.js";import"./jsxFactory-Be5PKa9i.js";import"./intl-CArXn1et.js";import"./Promise-CZrWwByK.js";import"./jsonMap-DCC6W5ex.js";import"./assets-BNizZMOZ.js";import"./index-BVncS3aY.js";import"./uuid-fwrPAdZb.js";import"./UpdatingHandles-CMtXpTiG.js";import"./InputManager-C4xu1R9l.js";import"./Queue-DpHko4Yk.js";import"./signal-DzOfzcfh.js";import"./Map-D9sO0Jqv.js";import"./Basemap-CKBB4cRW.js";import"./Portal-DCqdz-K4.js";import"./writer-3zufXUNV.js";import"./Extent-B4rrMrqp.js";import"./Point-TlcsOcXV.js";import"./loadAll-z9YY33Kx.js";import"./PortalItem-CaeKabGc.js";import"./persistableUrlUtils-Dx61-x4K.js";import"./writeUtils-BUKZUL8X.js";import"./layerUtils-BzjQnEdj.js";import"./Ground-CSI-YC3C.js";import"./Color-DDUWtbqR.js";import"./colorUtils-CS9vdHXB.js";import"./mathUtils-ClvKsMak.js";import"./compilerUtils-BA04t1lN.js";import"./enumeration--HlxOQ_N.js";import"./opacityUtils-BT7mQkwC.js";import"./CollectionFlattener-CkyePFnC.js";import"./editableLayers-BdCikvlg.js";import"./catalogUtils--o1nDhfl.js";import"./basemapUtils-fcYt_ePc.js";import"./utils-D20M4_S8.js";import"./screenUtils-PfxkaaMN.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-ybYUU6jq.js";import"./TablesMixin-BWPSKW45.js";import"./Layer-CfUiPX3n.js";import"./geometry-CnaxvJsv.js";import"./Polyline-BQFeqYXi.js";import"./TimeExtent-Dl-qaORu.js";import"./timeUtils-DQR2jUPL.js";import"./Identifiable-BLvpQbOc.js";import"./GraphicsCollection-B0IuEpT5.js";import"./Graphic-Bi5hWHps.js";import"./PopupTemplate-D8mXPxzU.js";import"./Clonable-cKbRam6-.js";import"./fieldUtils-C5R42-PY.js";import"./ActionToggle-C0Z1k2jc.js";import"./symbols-CfvYGR4J.js";import"./TextSymbol-zZq0BA1M.js";import"./materialUtils-CQ3JLQ1x.js";import"./aaBoundingBox-BGxkJAW0.js";import"./jsonUtils-DtWlwXHP.js";import"./HeightModelInfo-CzO-kRMK.js";import"./ReactiveMap-Dl_3-Rm5.js";import"./Query-BpMwiNVl.js";import"./DataLayerSource-BX7Ap_tY.js";import"./Field-poIiHWUc.js";import"./fieldType-CIG5ey7e.js";import"./FullTextSearch-BhJOgh_r.js";import"./selectionUtils-DYi6daQO.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./screenUtils-BGG3AyYa.js";import"./a11yUtils-DwloBVAu.js";import"./heightModelInfoUtils-C5nNknML.js";import"./arcgisLayerUrl-ETqee4Bd.js";import"./ViewingMode-Dodu7ZZk.js";import"./projection-tSh-0UvX.js";import"./projectBuffer-iyGwL2dv.js";import"./geodesicConstants-kj1AtlGg.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-COYT31Am.js";import"./Compass-eoZ7sbNQ.js";import"./utils-DsJqvptN.js";import"./GoTo-CyjNnle5.js";import"./NavigationToggle-Dune4J79.js";import"./Zoom-BgowPovH.js";import"./EffectView-D2q0Wr_W.js";import"./parser-BN6zmHl-.js";import"./DisplayObject-DFOkWAgp.js";import"./highlightReasons-CQmHiFo_.js";import"./HighlightOptions-BG8_qaKQ.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./TileKey-CIqLSCov.js";import"./definitions-ByNBSgP9.js";import"./enums-BlUEVwJR.js";import"./Texture-BbJIOVx_.js";import"./ClipRect-CkQqwQzT.js";import"./layerViewUtils-D2JqIDZ8.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new m}set layerViews(t){this._set("layerViews",e(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};o([p({cast:s})],r.prototype,"layerViews",null),o([p({readOnly:!0})],r.prototype,"updatingProgress",null),r=o([a("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const ar=r;export{ar as default};
