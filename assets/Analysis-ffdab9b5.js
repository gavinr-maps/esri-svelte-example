import{cr as n,aW as a,cs as o,R as l,a as e,b as s,c as p,P as y}from"./index-e8c6bcc0.js";let c=0,t=class extends n(a(o(y))){constructor(r){super(r),this.id=`${Date.now().toString(16)}-analysis-${c++}`,this.title=null}get parent(){return this._get("parent")}set parent(r){const i=this.parent;if(i!=null)switch(i.type){case"line-of-sight":case"dimension":i.releaseAnalysis(this);break;case"2d":case"3d":i.analyses.includes(this)&&i.analyses.remove(this)}this._set("parent",r)}get isEditable(){return this.requiredPropertiesForEditing.every(l)}};e([s({type:String,constructOnly:!0,clonable:!1})],t.prototype,"id",void 0),e([s({type:String})],t.prototype,"title",void 0),e([s({constructOnly:!0})],t.prototype,"type",void 0),e([s({clonable:!1,value:null})],t.prototype,"parent",null),e([s({readOnly:!0})],t.prototype,"isEditable",null),e([s({readOnly:!0})],t.prototype,"requiredPropertiesForEditing",void 0),t=e([p("esri.analysis.Analysis")],t);const u=t;export{u as c};
