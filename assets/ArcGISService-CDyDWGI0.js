import{r as i,m as r,a as s,B as n}from"./Accessor-BmwT4B0c.js";import{d as o,y as u}from"./cast-CsZslgGN.js";const p=l=>{let e=class extends l{get title(){if(this._get("title")&&this.originOf("title")!=="defaults")return this._get("title");if(this.url){const t=o(this.url);if(t!=null&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",u(t,n.getLogger(this)))}};return i([r()],e.prototype,"title",null),i([r({type:String})],e.prototype,"url",null),e=i([s("esri.layers.mixins.ArcGISService")],e),e};export{p as l};
