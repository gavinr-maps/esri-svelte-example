import{c,r as e,m as o,a as i}from"./Accessor-BHnuXKD2.js";import{b as l}from"./Graphic-CFXUQZlS.js";import{a as u}from"./Clonable-DvJsj5LF.js";import{o as d}from"./writer-B2bQV2uU.js";import{d as b}from"./FeatureSet-DpCN730g.js";var a;let r=a=class extends u.ClonableMixin(l){constructor(s){super(s),this.stackedAttributes=null}cloneShallow(){return new a({...super.cloneShallow(),stackedAttributes:this.stackedAttributes})}toJSON(){return{...super.toJSON(),stackedAttributes:c(this.stackedAttributes)}}};e([o()],r.prototype,"stackedAttributes",void 0),r=a=e([i("esri.AttributeBinsGraphic")],r);const n=r;let t=class extends u.ClonableMixin(b){constructor(){super(...arguments),this.features=[]}readFeatures(s,p){return this.readFeaturesWithClass(s,p,n)}};e([o({type:[n],json:{write:!0}})],t.prototype,"features",void 0),e([d("features")],t.prototype,"readFeatures",null),t=e([i("esri.rest.support.AttributeBinsFeatureSet")],t);const $=t;export{$ as c};
