import{h as n,r,m as o,a as m}from"./Accessor-BmwT4B0c.js";import{S as a}from"./JSONSupport-DcrLLGjL.js";import{i as s}from"./typeUtils-cWA9Lf-p.js";import{p as u}from"./NetworkElement-BEwoE6j2.js";import"./cast-CsZslgGN.js";import"./index-4eY77cms.js";var i;let t=i=class extends a{static from(e){return n(i,e)}constructor(e){super(e),this.returnDeletes=!1,this.elements=[],this.types=[],this.gdbVersion=null,this.moment=null}};r([o({type:Boolean,json:{write:!0}})],t.prototype,"returnDeletes",void 0),r([o({type:[u],json:{write:!0}})],t.prototype,"elements",void 0),r([o({type:[s.apiValues],json:{type:s.jsonValues,read:s.read,write:s.write}})],t.prototype,"types",void 0),r([o({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),r([o({type:Date,json:{type:Number,write:{writer:(e,p)=>{p.moment=e==null?void 0:e.getTime()}}}})],t.prototype,"moment",void 0),t=i=r([m("esri.rest.networks.support.QueryAssociationsParameters")],t);const h=t;export{h as default};
