import{c as k,g as K}from"./index-XUlETPJZ.js";import{a as _}from"./diffUtils-FaRWg0DV.js";import{s as F}from"./heatmapUtils-mFECwRl0.js";import{c as S}from"./definitions-pFhxwyTZ.js";import{p as U}from"./BaseProcessor-ux-jZ94l.js";import{o}from"./tileUtils-pcBJnprf.js";import"./vec4f64-_4WP0ZGf.js";class n{constructor(t,i){this.offset=t,this.extent=i}}function g(s){const t=s.key,i=new Map,r=256,e=S,a=s.tileInfoView.tileInfo.isWrappable;return i.set(o(t,-1,-1,a).id,new n([-e,-e],[e-r,e-r,e,e])),i.set(o(t,0,-1,a).id,new n([0,-e],[0,e-r,e,e])),i.set(o(t,1,-1,a).id,new n([e,-e],[0,e-r,r,e])),i.set(o(t,-1,0,a).id,new n([-e,0],[e-r,0,e,e])),i.set(o(t,1,0,a).id,new n([e,0],[0,0,r,e])),i.set(o(t,-1,1,a).id,new n([-e,e],[e-r,0,e,r])),i.set(o(t,0,1,a).id,new n([0,e],[0,0,e,r])),i.set(o(t,1,1,a).id,new n([e,e],[0,0,r,r])),i}let h=class extends U{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(s,t){const i=t.schema.processors[0];i.type==="heatmap"&&_(this._schema,i)&&(s.mesh=!0,this._schema=i)}onTileUpdate(s){for(const t of s.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(s){const t={clear:!0};return this._tileKeyToFeatureSets.delete(s.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:s.id,data:t})}async onTileMessage(s,t,i){this._tileKeyToFeatureSets.has(s.key.id)||this._tileKeyToFeatureSets.set(s.key.id,new Map);const r=this._tileKeyToFeatureSets.get(s.key.id);if(r&&t.addOrUpdate!=null&&t.addOrUpdate.hasFeatures&&r.set(t.addOrUpdate.instance,t),t.end){const e=[],a=g(s);this._tileKeyToFeatureSets.forEach((p,l)=>{if(l===s.key.id)p.forEach(({addOrUpdate:d})=>{d&&e.push(d)});else if(a.has(l)){const d=a.get(l),[y,T]=d.offset;p.forEach(({addOrUpdate:m})=>{if(m){const w=m.transform(y,T,1,1);e.push(w)}})}});const c=F(e,this._schema.mesh,512,512),f={tileKey:s.key.id,intensityInfo:c},u=[c.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",f,{...i,transferList:u})}}onTileError(s,t,i){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:s.id,error:t},i)}};h=k([K("esri.views.2d.layers.features.processors.HeatmapProcessor")],h);const I=h;export{I as default};