import{n as o}from"./mat4-ybYUU6jq.js";import{e as i}from"./mat4f64-Dk4dwAN8.js";import{t as a}from"./VisualElement-CT5Yhr5G.js";import{c,C as n,O as h}from"./RenderGeometry-CXcYvifi.js";class f extends a{constructor(e){super(e),this._resources=null,this._transform=i()}get object(){return this._resources!=null?this._resources.object:null}get transform(){return this._transform}set transform(e){o(this._transform,e),this._resources!=null&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(this._resources==null)return;const e=this._resources.object,s=this.view._stage;s.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),e.visible=this.visible,s.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const s=new c(e,{pickable:!1,updatePolicy:n.SYNC}),r=new h({castShadow:!1});r.transformation=this._transform,this.createExternalResources(),this.createGeometries(r),e.addMany(r.geometries),this.forEachExternalMaterial(t=>e.add(t)),e.add(r),s.add(r),r.visible=this.visible,this._resources={layer:s,object:r}}destroyResources(){const e=this.view._stage;this._resources!=null&&e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this.forEachExternalMaterial(s=>{e.remove(s)}),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){this._resources!=null&&(this._resources.object.visible=e)}}export{f as a};
