import"./Accessor-BmwT4B0c.js";import{d as i}from"./reactiveUtils-XM7cS2OP.js";let c=class{get isDecoration(){return this._isDecoration}set isDecoration(t){this._isDecoration=t}constructor(t){this._isDecoration=!1,this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=t.view,this._handle=i(()=>t.view.ready,s=>{this._resourcesCreated&&(s?this._createResources():this._destroyResources())})}applyProperties(t){let s=!1;for(const e in t)e in this&&(e==="attached"?s=!!t[e]:this[e]=t[e]);this.attached=s}destroy(){this.attached=!1,this._handle.remove()}get attached(){return this._attached}set attached(t){t!==this._attached&&this.view._stage&&(this._attached=t,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources(),this.onAttachedChange(t))}onAttachedChange(t){}get visible(){return this._visible}set visible(t){t!==this._visible&&(this._visible=t,this.attached&&this.updateVisibility(t))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.updateVisibility(this.visible)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}};export{c as t};
