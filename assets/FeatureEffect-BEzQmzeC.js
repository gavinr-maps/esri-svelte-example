import{r as s}from"./tslib.es6-B3Jf3DVX.js";import{m as d,c,a as b,b as p}from"./subclass-BZA_h8Db.js";import{f as y}from"./assets-C43MgM-v.js";import{n as u,a as n}from"./jsonUtils-CSnQD004.js";import{d as x}from"./FeatureFilter-BMHRQSxq.js";var a;const w={read:{reader:u},write:{writer:n,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},h={read:{reader:u},write:{writer:n,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},m={name:"showExcludedLabels",default:!0};let t=a=class extends y{constructor(l){super(l),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(l,e){var o,i;const r=super.write(l,e);if(e!=null&&e.origin){if(r.filter){const f=Object.keys(r.filter);if(f.length>1||f[0]!=="where")return(o=e.messages)==null||o.push(new p("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:e.layer,effect:this})),null}if("showExcludedLabels"in r)return(i=e.messages)==null||i.push(new p("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:e.layer,effect:this})),null}return r}clone(){return new a({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};s([d({type:x,json:{write:{allowNull:!0,writer(l,e,r,o){const i=l==null?void 0:l.write({},o);i&&Object.keys(i).length!==0?c(r,i,e):c(r,null,e)}}}})],t.prototype,"filter",void 0),s([d({json:{read:u,write:{writer:n,allowNull:!0},origins:{"web-map":w,"portal-item":w}}})],t.prototype,"includedEffect",void 0),s([d({json:{read:u,write:{writer:n,allowNull:!0},origins:{"web-map":h,"portal-item":h}}})],t.prototype,"excludedEffect",void 0),s([d({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":m,"portal-item":m}}})],t.prototype,"excludedLabelsVisible",void 0),t=a=s([b("esri.layers.support.FeatureEffect")],t);const N=t;export{N as w};