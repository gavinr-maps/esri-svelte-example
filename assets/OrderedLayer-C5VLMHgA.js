import{r as s}from"./tslib.es6-B3Jf3DVX.js";import{m as d,a as c,c as f}from"./subclass-BZA_h8Db.js";import{a}from"./OrderByInfo-IYmS1EXF.js";function l(e,r,t){if(!e)return null;const i=e.find(o=>!!o.field);if(!i)return null;const n=new a;return n.read(i,t),[n]}function u(e,r,t,i){const n=e.find(o=>!!o.field);n&&f(t,[n.toJSON()],r)}const m={type:[a],json:{origins:{"web-scene":{write:!1,read:!1}},name:"layerDefinition.orderBy",read:{reader:l},write:{writer:u}}},x=e=>{let r=class extends e{constructor(){super(...arguments),this.orderBy=null}};return s([d(m)],r.prototype,"orderBy",void 0),r=s([c("esri.layers.mixins.OrderedLayer")],r),r};export{m as c,x as p};
