import{E as p,am as a,P as o,r as g,af as s,ag as m,ah as l}from"./index-3399a756.js";import{f as c,u as n}from"./LayerView-7a9bc80f.js";import{i as d}from"./GraphicContainer-7b79e76d.js";import{a as u}from"./GraphicsView2D-8d82edee.js";import"./Container-1a5da220.js";import"./definitions-3ddd14a8.js";import"./enums-64ab819c.js";import"./Texture-cba35665.js";import"./color-199f3589.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-143c5355.js";import"./FeatureContainer-fed03af3.js";import"./AttributeStoreView-6133d335.js";import"./TiledDisplayObject-6fc1e3a1.js";import"./visualVariablesUtils-0b29afa3.js";import"./visualVariablesUtils-1b9fc8b0.js";import"./VertexArrayObject-98ddbe48.js";import"./TileContainer-628b08e3.js";import"./WGLContainer-d8afca4f.js";import"./ProgramTemplate-e80c0ea0.js";import"./MaterialKey-cce0ae8e.js";import"./utils-126220d8.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-c21ed6c9.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-8cf98e7a.js";import"./floatRGBA-72238bb3.js";import"./normalizeUtilsSync-0119d177.js";import"./projectionSupport-3c43db74.js";import"./json-48e3ea08.js";import"./Matcher-c99a71cb.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c5d22745.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-18fcc6c1.js";import"./util-8c53f1d8.js";import"./ComputedAttributeStorage-a877177c.js";import"./arcadeTimeUtils-90af5493.js";import"./executionError-fb3f283a.js";import"./centroid-3df0d3b7.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(g);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const mi=e;export{mi as default};
