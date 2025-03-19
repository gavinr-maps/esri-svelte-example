import{r as i,m as o,a as f}from"./Accessor-BmwT4B0c.js";import{i as y}from"./Evented-Dw4_VOGn.js";import{S as b}from"./JSONSupport-DcrLLGjL.js";import{o as w,r as m}from"./writer-DKgfqj4X.js";var T;let n=T=class extends b{constructor(e){super(e),this.type="sun",this.date=null,this.directShadowsEnabled=!1,this.displayUTCOffset=null}readDate(e,t){return t.datetime!=null&&new Date(t.datetime)||null}writeDate(e,t,s){t[s]=e.getTime()}readDirectShadowsEnabled(e,t){return!!t.directShadows}writedirectShadowsEnabled(e,t,s){e&&(t[s]=e)}writeDisplayUTCOffset(e,t){e!=null&&(t.displayUTCOffset=e)}clone(){return new T(this.cloneConstructProperties())}cloneConstructProperties(){const e={directShadowsEnabled:this.directShadowsEnabled,displayUTCOffset:this.displayUTCOffset!=null?this.displayUTCOffset:null};return this.date!=null&&(e.date=new Date(this.date.getTime())),e}};i([o({readOnly:!0,type:["sun"],json:{write:!0}})],n.prototype,"type",void 0),i([o({type:Date,json:{type:Number,write:{target:"datetime"}}})],n.prototype,"date",void 0),i([w("date",["datetime"])],n.prototype,"readDate",null),i([m("date")],n.prototype,"writeDate",null),i([o({type:Boolean,json:{default:!1,write:{target:"directShadows"}}})],n.prototype,"directShadowsEnabled",void 0),i([w("directShadowsEnabled",["directShadows"])],n.prototype,"readDirectShadowsEnabled",null),i([m("directShadowsEnabled")],n.prototype,"writedirectShadowsEnabled",null),i([o({type:Number,json:{write:!0}})],n.prototype,"displayUTCOffset",void 0),i([m("displayUTCOffset")],n.prototype,"writeDisplayUTCOffset",null),n=T=i([f("esri.webscene.SunLighting")],n);const D=n;var r;let a=r=class extends y.EventedMixin(D){constructor(e){super(e),this.cameraTrackingEnabled=!0,this.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0};const t=new Date().getFullYear(),s=new Date("March 15, "+t+" 12:00:00 UTC");this._set("defaultDate",s),this._set("date",s)}get defaultDate(){return new Date(this._get("defaultDate").getTime())}static fromWebsceneLighting(e){return new r(e.cloneConstructProperties())}set defaultDate(e){const t=this._get("date")===this._get("defaultDate");e=new Date(e.getTime()),this._set("defaultDate",e),t&&this._set("date",e)}set date(e){e!=null&&(this.positionTimezoneInfo.autoUpdated=!1,this._set("date",new Date(e.getTime())))}autoUpdate(e,t){const s=r.calculateTimezoneOffset(this.positionTimezoneInfo);this.positionTimezoneInfo.hours=t.hours,this.positionTimezoneInfo.minutes=t.minutes,this.positionTimezoneInfo.seconds=t.seconds;let d=null;e!=null&&(this.positionTimezoneInfo.autoUpdated=!0,isNaN(e.getTime())?(d=this.defaultDate.getTime(),this._set("date",this.defaultDate)):(d=this.date&&this.date.getTime(),this._set("date",new Date(e.getTime()))));const c=r.calculateTimezoneOffset(this.positionTimezoneInfo);if(s!==c&&(u.target=this,u.timezoneOffset=c,this.emit("timezone-will-change",u),u.target=null),e!=null)return isNaN(e.getTime())||d!==e.getTime()}clone(){const e=this._get("date")===this._get("defaultDate"),t=new r({...this.cloneConstructProperties(),defaultDate:this.defaultDate,cameraTrackingEnabled:this.cameraTrackingEnabled});return e&&t._set("date",t._get("defaultDate")),t.positionTimezoneInfo.autoUpdated=this.positionTimezoneInfo.autoUpdated,t.positionTimezoneInfo.hours=this.positionTimezoneInfo.hours,t.positionTimezoneInfo.minutes=this.positionTimezoneInfo.minutes,t.positionTimezoneInfo.seconds=this.positionTimezoneInfo.seconds,t}cloneWithWebsceneLighting(e){const t=this.clone();return e.date!=null&&(t.date=e.date),t.directShadowsEnabled=e.directShadowsEnabled,t.displayUTCOffset=e.displayUTCOffset,t}cloneNonPersistentConstructProperties(){return{cameraTrackingEnabled:this.cameraTrackingEnabled}}};i([o({type:Boolean})],a.prototype,"cameraTrackingEnabled",void 0),i([o({type:Date})],a.prototype,"defaultDate",null),i([o({type:Date})],a.prototype,"date",null),a=r=i([f("esri.views.3d.environment.SunLighting")],a),function(e){function t({hours:s,minutes:d,seconds:c}){return Math.round(s+d/60+c/3600)}e.calculateTimezoneOffset=t}(a||(a={}));const u={target:null,timezoneOffset:0},O=a;var g;let l=g=class extends b{constructor(e){super(e),this.type="virtual",this.directShadowsEnabled=!1}clone(){return new g(this.cloneConstructProperties())}cloneConstructProperties(){return{directShadowsEnabled:this.directShadowsEnabled}}};i([o({readOnly:!0,type:["virtual"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),i([o({type:Boolean,json:{default:!1,name:"directShadows",write:!0}})],l.prototype,"directShadowsEnabled",void 0),l=g=i([f("esri.webscene.VirtualLighting")],l);const E=l;var p;let h=p=class extends y.EventedMixin(E){constructor(e){super(e),this.cameraTrackingEnabled=!0}clone(){return new p({...this.cloneConstructProperties(),cameraTrackingEnabled:this.cameraTrackingEnabled})}static fromWebsceneLighting(e){return new p(e.cloneConstructProperties())}cloneWithWebsceneLighting(e){const t=this.clone();return t.directShadowsEnabled=e.directShadowsEnabled,t}cloneNonPersistentConstructProperties(){return{cameraTrackingEnabled:this.cameraTrackingEnabled}}};i([o({type:Boolean})],h.prototype,"cameraTrackingEnabled",void 0),h=p=i([f("esri.views.3d.environment.VirtualLighting")],h);const U=h;export{U as a,E as c,O as d,D as p};
