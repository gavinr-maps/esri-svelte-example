import{r}from"./tslib.es6-B3Jf3DVX.js";import{n}from"./jsonMap-0cxwUWs2.js";import{f as p}from"./assets-C43MgM-v.js";import{m as o,a}from"./subclass-BZA_h8Db.js";var i;const s=new n({asc:"ascending",desc:"descending"});let e=i=class extends p{constructor(t){super(t),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new i({field:this.field,valueExpression:this.valueExpression,order:this.order})}};r([o({type:String,json:{write:!0}})],e.prototype,"field",void 0),r([o({type:String,json:{write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"valueExpression",void 0),r([o({type:s.apiValues,json:{type:s.jsonValues,read:s.read,write:s.write}})],e.prototype,"order",void 0),e=i=r([a("esri.layers.support.OrderByInfo")],e);const f=e;export{f as a};