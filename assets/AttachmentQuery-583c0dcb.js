import{f as e,g as s,a_ as n,j as a,a$ as p,az as h,a6 as u}from"./index-27db053b.js";var r;let t=r=class extends h{constructor(o){super(o),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(o,i){i.resultOffset=this.start,i.resultRecordCount=this.num||10}clone(){return new r(u({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};e([s({type:[String],json:{write:!0}})],t.prototype,"attachmentTypes",void 0),e([s({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],t.prototype,"attachmentsWhere",void 0),e([s({type:Boolean,json:{write:!0}})],t.prototype,"cacheHint",void 0),e([s({type:[String],json:{write:!0}})],t.prototype,"keywords",void 0),e([s({type:[Number],json:{write:!0}})],t.prototype,"globalIds",void 0),e([s({json:{write:!0}})],t.prototype,"name",void 0),e([s({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),e([s({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),e([s({type:Boolean,json:{default:!1,write:!0}})],t.prototype,"returnMetadata",void 0),e([s({type:[Number],json:{write:!0}})],t.prototype,"size",void 0),e([s({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),e([n("start"),n("num")],t.prototype,"writeStart",null),e([s({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],t.prototype,"where",void 0),t=r=e([a("esri.rest.support.AttachmentQuery")],t),t.from=p(t);const l=t;export{l as c};
