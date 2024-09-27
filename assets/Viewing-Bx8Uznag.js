import{e}from"./Evented-CXIxDjmW.js";import{f as n}from"./assets-C2mb-ea2.js";import{y as t,b as a,N as q,a as m}from"./subclass-BR3PhgZG.js";import{V as N}from"./reactiveUtils-BFQ0BtrB.js";import{o as R,r as A}from"./writer-3zufXUNV.js";import{o as M}from"./enumeration--HlxOQ_N.js";import{i as E}from"./fieldType-CIG5ey7e.js";let p=class extends n{constructor(i){super(i),this.facilityIdField=null,this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null}};e([t({type:String,json:{write:!0}})],p.prototype,"facilityIdField",void 0),e([t({type:String,json:{write:!0}})],p.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],p.prototype,"nameField",void 0),e([t({type:String,json:{write:!0}})],p.prototype,"siteIdField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],p.prototype,"sublayerId",void 0),p=e([a("esri.layers.support.FacilityLayerInfo")],p);const B=p;let o=class extends n{constructor(i){super(i),this.facilityIdField=null,this.layerId=null,this.levelIdField=null,this.levelNumberField=null,this.longNameField=null,this.shortNameField=null,this.sublayerId=null,this.verticalOrderField=null}};e([t({type:String,json:{write:!0}})],o.prototype,"facilityIdField",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"levelIdField",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"levelNumberField",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"longNameField",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"shortNameField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"sublayerId",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"verticalOrderField",void 0),o=e([a("esri.layers.support.LevelLayerInfo")],o);const O=o;let y=class extends n{constructor(r){super(r),this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null}};e([t({type:String,json:{write:!0}})],y.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"nameField",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"siteIdField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],y.prototype,"sublayerId",void 0),y=e([a("esri.layers.support.SiteLayerInfo")],y);const V=y;let c=class extends n{constructor(i){super(i),this.levelLayer=null,this.facilityLayer=null,this.siteLayer=null}};e([t({type:O,json:{write:!0}})],c.prototype,"levelLayer",void 0),e([t({type:B,json:{write:!0}})],c.prototype,"facilityLayer",void 0),e([t({type:V,json:{write:!0}})],c.prototype,"siteLayer",void 0),c=e([a("esri.support.MapFloorInfo")],c);const te=c,k={width:600,height:400},v=1.5;function re(r,i){i=i||k;let{width:s,height:d}=i;const x=s/d;return x<v?d=s/v:x>v&&(s=d*v),s>r.width&&(d*=r.width/s,s=r.width),d>r.height&&(s*=r.height/d,d=r.height),{width:Math.round(s),height:Math.round(d)}}function L(r){return{enabled:!!(r!=null&&r.length)}}var j;let h=j=class extends n{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new j({exactMatch:this.exactMatch,type:this.type,name:this.name})}};e([t({type:Boolean,json:{write:!0}})],h.prototype,"exactMatch",void 0),e([t({type:String,json:{write:!0}})],h.prototype,"name",void 0),e([M(E)],h.prototype,"type",void 0),h=j=e([a("esri.webdoc.applicationProperties.SearchLayerField")],h);const z=h;var S;let u=S=class extends n{constructor(r){super(r),this.field=null,this.id=null,this.subLayer=null}clone(){return new S(m({field:this.field,id:this.id,subLayer:this.subLayer}))}};e([t({type:z,json:{write:{isRequired:!0}}})],u.prototype,"field",void 0),e([t({type:String,json:{write:{isRequired:!0}}})],u.prototype,"id",void 0),e([t({type:q,json:{write:!0}})],u.prototype,"subLayer",void 0),u=S=e([a("esri.webdoc.applicationProperties.SearchLayer")],u);const C=u;var f;let w=f=class extends n{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new f({exactMatch:this.exactMatch,type:this.type,name:this.name})}};e([t({type:Boolean,json:{write:!0}})],w.prototype,"exactMatch",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"name",void 0),e([M(E)],w.prototype,"type",void 0),w=f=e([a("esri.webdoc.applicationProperties.SearchTableField")],w);const D=w;var I;let b=I=class extends n{constructor(r){super(r),this.field=null,this.id=null}clone(){return new I(m({field:this.field,id:this.id}))}};e([t({type:D,json:{write:{isRequired:!0}}})],b.prototype,"field",void 0),e([t({type:String,json:{write:{isRequired:!0}}})],b.prototype,"id",void 0),b=I=e([a("esri.webdoc.applicationProperties.SearchTable")],b);const G=b;var F;const P=N.ofType(C),T=N.ofType(G);let l=F=class extends n{constructor(r){super(r),this.addressSearchEnabled=!0,this.enabled=!0,this.hintText=null,this.layers=new P,this.tables=new T}readAddressSearchEnabled(r){return!r}writeAddressSearchEnabled(r,i,s){i[s]=!r}clone(){return new F(m({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers,tables:this.tables}))}};e([t({type:Boolean,nonNullable:!0,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder",isRequired:!0},origins:{"web-scene":{read:!1,write:!1}}}})],l.prototype,"addressSearchEnabled",void 0),e([R("addressSearchEnabled")],l.prototype,"readAddressSearchEnabled",null),e([A("addressSearchEnabled")],l.prototype,"writeAddressSearchEnabled",null),e([t({type:Boolean,nonNullable:!0,json:{write:!0,origins:{"web-map":{write:{isRequired:!0}},"web-scene":{default:!0,write:!0}}}})],l.prototype,"enabled",void 0),e([t({type:String,json:{write:!0}})],l.prototype,"hintText",void 0),e([t({type:P,json:{write:{overridePolicy:L},origins:{"web-scene":{write:{isRequired:!0}}}}})],l.prototype,"layers",void 0),e([t({type:T,json:{read:!0,write:{overridePolicy:L}}})],l.prototype,"tables",void 0),l=F=e([a("esri.webdoc.applicationProperties.Search")],l);const H=l;var $;let g=$=class extends n{constructor(r){super(r),this.search=null}clone(){return new $(m({search:this.search}))}};e([t({type:H,json:{write:!0}})],g.prototype,"search",void 0),g=$=e([a("esri.webdoc.applicationProperties.Viewing")],g);const ie=g;export{re as a,ie as i,te as l};
