import{r as s,a as n}from"./Accessor-BmwT4B0c.js";let l=0;const a=t=>{let e=class extends t{constructor(...r){super(...r),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+l++})}};return e=s([n("esri.core.Identifiable")],e),e},c=t=>{let e=class extends t{constructor(...r){super(...r),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:l++})}};return e=s([n("esri.core.Identifiable.NumericIdentifiable")],e),e};let i=class extends a(class{}){};i=s([n("esri.core.Identifiable")],i),function(t){t.IdentifiableMixin=a,t.NumericIdentifiableMixin=c}(i||(i={}));const f=i;export{f as n};
