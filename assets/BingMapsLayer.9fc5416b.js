import{gE as e,gF as t,gG as a,c$ as r,d0 as s,b7 as o,c8 as i,aA as l,L as n,q as p,ab as d,ac as g,ad as u,bX as y,cU as c,cW as h,r as b,m as v}from"./vendor.5b1a85aa.js";const m={id:"0/0/0",level:0,row:0,col:0,extent:null};let M=class extends(e(t(a(r)))){constructor(){super(...arguments),this.tileInfo=s.create({spatialReference:o.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new i(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,o.WebMercator),this.spatialReference=o.WebMercator}getTileBounds(e,t,a,r){const s=r||l();return m.level=e,m.row=t,m.col=a,m.extent=s,this.tileInfo.updateTileInfo(m),m.extent=null,s}fetchTile(e,t,a,r={}){const{signal:s,timestamp:o}=r,i=this.getTileUrl(e,t,a),l={responseType:"image",signal:s};return null!=o&&(l.query={_ts:r.timestamp}),n(i,l).then((e=>e.data))}getTileUrl(){throw new p("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};d([g({type:s})],M.prototype,"tileInfo",void 0),d([g({type:["show","hide"]})],M.prototype,"listMode",void 0),d([g({readOnly:!0,value:"base-tile"})],M.prototype,"type",void 0),d([g()],M.prototype,"fullExtent",void 0),d([g()],M.prototype,"spatialReference",void 0),M=d([u("esri.layers.BaseTileLayer")],M);var w=M;const f=new y({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let S=class extends(e(c(h(w)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new s({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:o.WebMercator},spatialReference:o.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return b(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return f.toJSON(this.style)}get bingLogo(){return b(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new p("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,a){if(!this.loaded||v(this.bingMetadata))return null;const r=this.bingMetadata.resourceSets[0].resources[0],s=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],o=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",s).replace("{quadkey}",o)}async fetchAttributionData(){return this.load().then((()=>v(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return n(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new p("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new p("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new p("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new p("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return n(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new p("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new p("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,a){let r="";for(let s=e;s>0;s--){let e=0;const o=1<<s-1;0!=(a&o)&&(e+=1),0!=(t&o)&&(e+=2),r+=e.toString()}return r}};d([g({json:{read:!1,write:!1},value:null})],S.prototype,"bingMetadata",null),d([g({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],S.prototype,"type",void 0),d([g({type:s})],S.prototype,"tileInfo",void 0),d([g({type:String,readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"copyright",null),d([g({type:String,json:{write:!1,read:!1}})],S.prototype,"key",void 0),d([g({type:f.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:f.read}}})],S.prototype,"style",void 0),d([g({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],S.prototype,"operationalLayerType",null),d([g({type:String,json:{write:!1,read:!1}})],S.prototype,"culture",void 0),d([g({type:String,json:{write:!1,read:!1}})],S.prototype,"region",void 0),d([g({type:String,json:{write:!0,read:!0}})],S.prototype,"portalUrl",void 0),d([g({type:Boolean,json:{write:!1,read:!1}})],S.prototype,"hasAttributionData",void 0),d([g({type:String,readOnly:!0})],S.prototype,"bingLogo",null),S=d([u("esri.layers.BingMapsLayer")],S);var x=S;export{x as default};
