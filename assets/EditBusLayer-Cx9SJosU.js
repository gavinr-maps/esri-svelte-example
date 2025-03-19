const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./deleteForwardEdits-DgZWo5fT.js","./cast-BA_-jlhc.js","./Accessor-BHnuXKD2.js","./index-tefRSezt.js","./index-Cx51aysm.css","./JSONSupport-CGdeqxpk.js","./utils-Cy8wFNQo.js","./DeleteForwardEditsParameters-DjwxI12L.js"])))=>i.map(i=>d[i]);
import{a3 as L,r as j,m as R,a as P,c as p}from"./Accessor-BHnuXKD2.js";import{i as T}from"./Evented-DCWccWGU.js";import{_ as A}from"./index-tefRSezt.js";import{P as k}from"./cast-BA_-jlhc.js";import{o as x}from"./uuid-Cl5lrJ4c.js";const D=x(),$=new Map,H=new Map,J=new Map;async function K(e,r,n){if(!e||!n)return!1;if(!r)return!0;const i=new URL(e).host;let t=$.get(i);if(!t){const s=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");t=(await k(s,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return t===r}async function Q(e,r,n=!1){var s,o,a;if(!e||!r)return!0;const i=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),t=(s=H.get(i))==null?void 0:s.entries();if(t){for(const[m,l]of t)if(l.name===r){const u=!((o=l.stack)!=null&&o.hasForwardEdits());if(!u&&n){const[{deleteForwardEdits:h},{default:I}]=await Promise.all([A(()=>import("./deleteForwardEdits-DgZWo5fT.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),A(()=>import("./DeleteForwardEditsParameters-DjwxI12L.js"),__vite__mapDeps([7,2,5]),import.meta.url)]),b=await h(i,m,new I({sessionId:D,moment:l.moment}));return b.success&&((a=l.stack)==null||a.clearForwardEdits()),b.success}return u}}return!0}function O(e,r){var t;if(!e)return!1;const n=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),i=(t=H.get(n))==null?void 0:t.entries();if(i){for(const[s,o]of i)if(o.name===r)return o.lockType==="edit"}return!1}const g=new T.EventEmitter;function W(e){return g.on("apply-edits",new WeakRef(e))}function q(e){return g.on("update-moment",new WeakRef(e))}function X(e,r,n=null,i=!1){const t=L();return i=r==null||i,g.emit("apply-edits",{serviceUrl:e,layerId:r,gdbVersion:n,mayReceiveServiceEdits:i,result:t.promise}),t}function Y(e,r,n=null,i){g.emit("update-moment",{serviceUrl:e,layerId:r,gdbVersion:n,moment:i})}const S=Symbol();function Z(e){return e!=null&&typeof e=="object"&&S in e}function f(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function y(e,r,n){const i=new URL(e).host,t=$.get(i),s=o=>!o||o===t;return s(r)&&s(n)||r===n}const ee=e=>{var r;let n=class extends e{constructor(...i){super(...i),this[r]=!0,this._applyEditsHandler=t=>{const{serviceUrl:s,layerId:o,gdbVersion:a,mayReceiveServiceEdits:m,result:l}=t,u=s===this.url,h=o!=null&&this.layerId!=null&&o===this.layerId,I=f(this),b=f(this)&&y(s,a,this.gdbVersion);if(!u||I&&!b||!h&&!m)return;const U=l.then(d=>{var _;if(this.lastEditsEventDate=new Date,h&&(d.addedFeatures.length||d.updatedFeatures.length||d.deletedFeatures.length||d.addedAttachments.length||d.updatedAttachments.length||d.deletedAttachments.length))return this.emit("edits",p(d)),d;const v=(_=d.editedFeatures)==null?void 0:_.find(({layerId:F})=>F===this.layerId);if(v){const{adds:F,updates:E,deletes:w}=v.editedFeatures,V={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:F?F.map(({attributes:c})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],deletedFeatures:w?w.map(({attributes:c})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],updatedFeatures:E?E.map(({current:{attributes:c}})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],editedFeatures:p(d.editedFeatures),exceededTransferLimit:!1,historicMoment:p(d.historicMoment)};return this.emit("edits",V),V}const M={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:p(d.editedFeatures),exceededTransferLimit:!1,historicMoment:p(d.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(s,a,M.historicMoment)&&this.emit("edits",M),M}).then(d=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(s,a,d.historicMoment)&&(this.historicMoment=d.historicMoment),d));this.emit("apply-edits",{result:U})},this._updateMomentHandler=t=>{const{serviceUrl:s,gdbVersion:o,moment:a}=t,m=s===this.url,l=f(this),u=f(this)&&y(s,o,this.gdbVersion),h=f(this)&&!y(s,this.gdbVersion,null);m&&l&&u&&h&&"historicMoment"in this&&this.historicMoment!==a&&(this.historicMoment=a)},this.when().then(()=>{this.addHandles(W(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(q(this._updateMomentHandler))},()=>{})}_shouldUpdateHistoricMoment(i,t,s){return"historicMoment"in this&&this.historicMoment!==s&&O(i,t)}};return r=S,j([R()],n.prototype,"lastEditsEventDate",void 0),n=j([P("esri.layers.mixins.EditBusLayer")],n),n};export{ee as F,O as a,J as b,X as c,y as g,q as h,Q as i,W as l,$ as n,K as o,Z as p,H as s,D as t,Y as u};
