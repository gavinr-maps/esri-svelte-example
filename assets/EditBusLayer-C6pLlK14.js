const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./deleteForwardEdits-CwqCjaK6.js","./assets-C2mb-ea2.js","./subclass-BR3PhgZG.js","./index-CeCSsEgo.js","./index-CjOb8WjV.css","./Evented-CXIxDjmW.js","./Accessor-D6mNnsWy.js","./utils-D61i9O7E.js","./DeleteForwardEditsParameters-dCq0Dg84.js"])))=>i.map(i=>d[i]);
import{o as S,e as j}from"./Evented-CXIxDjmW.js";import{y as R,b as T,a as p}from"./subclass-BR3PhgZG.js";import{L as k}from"./Accessor-D6mNnsWy.js";import{_ as A}from"./index-CeCSsEgo.js";import{U as x}from"./assets-C2mb-ea2.js";import{o as D}from"./uuid-fwrPAdZb.js";const P=D(),U=new Map,$=new Map,K=new Map;async function Q(e,r,n){if(!e||!n)return!1;if(!r)return!0;const i=new URL(e).host;let t=U.get(i);if(!t){const s=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");t=(await x(s,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return t===r}async function X(e,r,n=!1){var s,o,a;if(!e||!r)return!0;const i=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),t=(s=$.get(i))==null?void 0:s.entries();if(t){for(const[m,l]of t)if(l.name===r){const u=!((o=l.stack)!=null&&o.hasForwardEdits());if(!u&&n){const[{deleteForwardEdits:h},{default:I}]=await Promise.all([A(()=>import("./deleteForwardEdits-CwqCjaK6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),A(()=>import("./DeleteForwardEditsParameters-dCq0Dg84.js"),__vite__mapDeps([8,5,6,2,1,3,4]),import.meta.url)]),b=await h(i,m,new I({sessionId:P,moment:l.moment}));return b.success&&((a=l.stack)==null||a.clearForwardEdits()),b.success}return u}}return!0}function O(e,r){var t;if(!e)return!1;const n=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),i=(t=$.get(n))==null?void 0:t.entries();if(i){for(const[s,o]of i)if(o.name===r)return o.lockType==="edit"}return!1}const g=new S.EventEmitter;function W(e){return g.on("apply-edits",new WeakRef(e))}function q(e){return g.on("update-moment",new WeakRef(e))}function Y(e,r,n=null,i=!1){const t=k();return i=r==null||i,g.emit("apply-edits",{serviceUrl:e,layerId:r,gdbVersion:n,mayReceiveServiceEdits:i,result:t.promise}),t}function Z(e,r,n=null,i){g.emit("update-moment",{serviceUrl:e,layerId:r,gdbVersion:n,moment:i})}const H=Symbol();function ee(e){return e!=null&&typeof e=="object"&&H in e}function f(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function y(e,r,n){const i=new URL(e).host,t=U.get(i),s=o=>!o||o===t;return s(r)&&s(n)||r===n}const te=e=>{var r;let n=class extends e{constructor(...i){super(...i),this[r]=!0,this._applyEditsHandler=t=>{const{serviceUrl:s,layerId:o,gdbVersion:a,mayReceiveServiceEdits:m,result:l}=t,u=s===this.url,h=o!=null&&this.layerId!=null&&o===this.layerId,I=f(this),b=f(this)&&y(s,a,this.gdbVersion);if(!u||I&&!b||!h&&!m)return;const L=l.then(d=>{var _;if(this.lastEditsEventDate=new Date,h&&(d.addedFeatures.length||d.updatedFeatures.length||d.deletedFeatures.length||d.addedAttachments.length||d.updatedAttachments.length||d.deletedAttachments.length))return this.emit("edits",p(d)),d;const v=(_=d.editedFeatures)==null?void 0:_.find(({layerId:F})=>F===this.layerId);if(v){const{adds:F,updates:E,deletes:w}=v.editedFeatures,V={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:F?F.map(({attributes:c})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],deletedFeatures:w?w.map(({attributes:c})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],updatedFeatures:E?E.map(({current:{attributes:c}})=>({objectId:this.objectIdField&&c[this.objectIdField],globalId:this.globalIdField&&c[this.globalIdField]})):[],editedFeatures:p(d.editedFeatures),exceededTransferLimit:!1,historicMoment:p(d.historicMoment)};return this.emit("edits",V),V}const M={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:p(d.editedFeatures),exceededTransferLimit:!1,historicMoment:p(d.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(s,a,M.historicMoment)&&this.emit("edits",M),M}).then(d=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(s,a,d.historicMoment)&&(this.historicMoment=d.historicMoment),d));this.emit("apply-edits",{result:L})},this._updateMomentHandler=t=>{const{serviceUrl:s,gdbVersion:o,moment:a}=t,m=s===this.url,l=f(this),u=f(this)&&y(s,o,this.gdbVersion),h=f(this)&&!y(s,this.gdbVersion,null);m&&l&&u&&h&&"historicMoment"in this&&this.historicMoment!==a&&(this.historicMoment=a)},this.when().then(()=>{this.addHandles(W(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(q(this._updateMomentHandler))},()=>{})}_shouldUpdateHistoricMoment(i,t,s){return"historicMoment"in this&&this.historicMoment!==s&&O(i,t)}};return r=H,j([R()],n.prototype,"lastEditsEventDate",void 0),n=j([T("esri.layers.mixins.EditBusLayer")],n),n};export{te as F,O as a,K as b,Y as c,y as g,q as h,X as i,W as l,U as n,Q as o,ee as p,$ as s,P as t,Z as u};
