import{r as e,m as t,$ as a,a as u}from"./Accessor-BmwT4B0c.js";import{h as p}from"./Color-VJEMvW-n.js";import{S as n}from"./JSONSupport-DcrLLGjL.js";import{r as c}from"./writer-DKgfqj4X.js";var l;let r=l=class extends n{constructor(o){super(o),this.color=null,this.label=null,this.value=null}writeValue(o,s,i){s[i]=o??0}clone(){return new l({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};e([t({type:p,json:{type:[a],write:{isRequired:!0}}})],r.prototype,"color",void 0),e([t({type:String,json:{write:!0}})],r.prototype,"label",void 0),e([t({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],r.prototype,"value",void 0),e([c("value")],r.prototype,"writeValue",null),r=l=e([u("esri.renderers.visualVariables.support.ColorStop")],r);const w=r;export{w as a};
