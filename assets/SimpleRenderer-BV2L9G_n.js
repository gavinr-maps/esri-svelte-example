import{r as i}from"./tslib.es6-B3Jf3DVX.js";import{g as l,m as o,a as m}from"./subclass-BZA_h8Db.js";import{r as n}from"./enumeration-Ba5njXdz.js";import{v as p,m as c,p as y}from"./UniqueValueRenderer-BQtAHUSo.js";var a;let s=a=class extends p(y){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(r=>r.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,r)=>t+r.getAttributeHash(),""))??""}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new a({description:this.description,label:this.label,symbol:l(this.symbol),visualVariables:l(this.visualVariables),authoringInfo:l(this.authoringInfo)})}};i([o({type:String,json:{write:!0}})],s.prototype,"description",void 0),i([o({type:String,json:{write:!0}})],s.prototype,"label",void 0),i([o(c)],s.prototype,"symbol",void 0),i([n({simple:"simple"})],s.prototype,"type",void 0),s=a=i([m("esri.renderers.SimpleRenderer")],s);const g=s;export{g as p};