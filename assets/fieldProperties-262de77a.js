import{x as n,s,bc as l}from"./index-27db053b.js";import{y as o}from"./Field-a20a79af.js";import{Z as d}from"./FieldsIndex-f11b6b69.js";function g(){return{fields:{type:[o],value:null,set:function(e){if(e&&n("big-integer-warning-enabled")){const i=e.filter(t=>t.type==="big-integer"||t.type==="oid"&&(t.length||0)>=8);if(i.length){const t=i.map(r=>`'${r.name}'`).join(", ");s.getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${t}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",e)}},fieldsIndex:{readOnly:!0,get(){return d.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var i;const e=this._userOutFields;if(!(e!=null&&e.length))return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e)((i=this.fieldsIndex)==null?void 0:i.has(t))||s.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e});return l(this.fieldsIndex,e)}}}}export{g as s};
