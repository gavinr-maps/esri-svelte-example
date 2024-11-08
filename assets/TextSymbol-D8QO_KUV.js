import{r as t}from"./tslib.es6-B3Jf3DVX.js";import{l as S}from"./Color-BCS62Hs5.js";import{n as z}from"./jsonMap-0cxwUWs2.js";import{m as i,a as p,g as m,T as H}from"./subclass-BZA_h8Db.js";import{r as b}from"./enumeration-Ba5njXdz.js";import{o as n}from"./screenUtils-_ZIvrt5o.js";import{o as V,r as j}from"./writer-DNAwXnhG.js";import{f as T}from"./assets-C43MgM-v.js";import{s as q}from"./cast-Bjksrh93.js";import{r as J}from"./mathUtils-C4_ghTv4.js";const P=new z({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let K=0,w=class extends T{constructor(o){super(o),this.id="sym"+K++,this.type=null,this.color=new S([0,0,0,1])}readColor(o){return(o==null?void 0:o[0])!=null?[o[0],o[1],o[2],o[3]/255]:o}async collectRequiredFields(o,r){}hash(){return JSON.stringify(this.toJSON())}clone(){}};t([i({type:P.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:P.write}}})],w.prototype,"type",void 0),t([i({type:S,json:{write:{allowNull:!0}}})],w.prototype,"color",void 0),t([V("color")],w.prototype,"readColor",null),w=t([p("esri.symbols.Symbol")],w);const k=w;let $=class extends k{constructor(o){super(o),this.type="simple-line",this.width=.75}hash(){return`${this.type}.${this.width}`}};t([b({esriSLS:"simple-line"},{readOnly:!0})],$.prototype,"type",void 0),t([i({type:Number,cast:n,json:{write:!0}})],$.prototype,"width",void 0),$=t([p("esri.symbols.LineSymbol")],$);const R=$,ge=["begin","end","begin-end"],I=["arrow","circle","square","diamond","cross","x"];var N;let a=N=class extends T{constructor(e){super(e),this.placement="begin-end",this.type="line-marker",this.style="arrow"}writeStyle(e,o,r,s){o[r]=(s==null?void 0:s.origin)==="web-map"?"arrow":e}set color(e){this._set("color",e)}readColor(e){return(e==null?void 0:e[0])!=null?[e[0],e[1],e[2],e[3]/255]:e}writeColor(e,o,r,s){(s==null?void 0:s.origin)==="web-map"||(o[r]=e)}clone(){return new N({color:m(this.color),placement:this.placement,style:this.style})}hash(){var e;return`${this.placement}.${(e=this.color)==null?void 0:e.hash()}.${this.style}`}};t([i({type:["begin","end","begin-end"],json:{write:!0}})],a.prototype,"placement",void 0),t([b({"line-marker":"line-marker"},{readOnly:!0}),i({json:{origins:{"web-map":{write:!1}}}})],a.prototype,"type",void 0),t([i({type:I})],a.prototype,"style",void 0),t([j("style")],a.prototype,"writeStyle",null),t([i({type:S,value:null,json:{write:{allowNull:!0}}})],a.prototype,"color",null),t([V("color")],a.prototype,"readColor",null),t([j("color")],a.prototype,"writeColor",null),a=N=t([p("esri.symbols.LineSymbolMarker")],a);const X=a;var M;const x=new z({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let y=M=class extends R{constructor(...e){super(...e),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2}normalizeCtorArgs(e,o,r,s,u,W){if(e&&typeof e!="string")return e;const f={};return e!=null&&(f.style=e),o!=null&&(f.color=o),r!=null&&(f.width=n(r)),s!=null&&(f.cap=s),u!=null&&(f.join=u),W!=null&&(f.miterLimit=n(W)),f}clone(){var e;return new M({color:m(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:(e=this.marker)==null?void 0:e.clone()})}hash(){var e,o;return`${super.hash()}.${(e=this.color)==null?void 0:e.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${(o=this.marker)==null?void 0:o.hash()}`}};t([b({esriSLS:"simple-line"},{readOnly:!0})],y.prototype,"type",void 0),t([i({type:x.apiValues,json:{read:x.read,write:x.write}})],y.prototype,"style",void 0),t([i({type:["butt","round","square"],json:{write:{overridePolicy:(e,o,r)=>({enabled:e!=="round"&&(r==null?void 0:r.origin)==null})}}})],y.prototype,"cap",void 0),t([i({type:["miter","round","bevel"],json:{write:{overridePolicy:(e,o,r)=>({enabled:e!=="round"&&(r==null?void 0:r.origin)==null})}}})],y.prototype,"join",void 0),t([i({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":X}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],y.prototype,"marker",void 0),t([i({type:Number,json:{read:!1,write:!1}})],y.prototype,"miterLimit",void 0),y=M=t([p("esri.symbols.SimpleLineSymbol")],y);const L=y,we=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));let v=class extends k{constructor(o){super(o),this.outline=null,this.type=null}hash(){var o;return`${this.type}.${(o=this.outline)==null?void 0:o.hash()}`}};t([i({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":L}},json:{default:null,write:!0}})],v.prototype,"outline",void 0),t([i({type:["simple-fill","picture-fill"],readOnly:!0})],v.prototype,"type",void 0),v=t([p("esri.symbols.FillSymbol")],v);const E=v,G=["none","underline","line-through"],Q=["normal","italic","oblique"],U=["normal","lighter","bold","bolder"],Y={type:Number,cast:e=>{const o=H(e);return o===0?1:J(o,.1,4)},nonNullable:!0},Z=["left","right","center"],ee=["baseline","top","middle","bottom"],te={type:Z,nonNullable:!0},oe={type:ee,nonNullable:!0},$e=8;var O;let d=O=class extends T{constructor(e){super(e),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal"}castSize(e){return n(e)}clone(){return new O({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return`${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}};t([i({type:G,json:{default:"none",write:!0}})],d.prototype,"decoration",void 0),t([i({type:String,json:{write:!0}})],d.prototype,"family",void 0),t([i({type:Number,json:{write:{overridePolicy:(e,o,r)=>({enabled:!r||!r.textSymbol3D})}}})],d.prototype,"size",void 0),t([q("size")],d.prototype,"castSize",null),t([i({type:Q,json:{default:"normal",write:!0}})],d.prototype,"style",void 0),t([i({type:U,json:{default:"normal",write:!0}})],d.prototype,"weight",void 0),d=O=t([p("esri.symbols.Font")],d);const B=d;let c=class extends k{constructor(e){super(e),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9}hash(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};t([i({type:Number,json:{read:e=>e&&-1*e,write:(e,o)=>o.angle=e&&-1*e}})],c.prototype,"angle",void 0),t([i({type:["simple-marker","picture-marker"],readOnly:!0})],c.prototype,"type",void 0),t([i({type:Number,cast:n,json:{write:!0}})],c.prototype,"xoffset",void 0),t([i({type:Number,cast:n,json:{write:!0}})],c.prototype,"yoffset",void 0),t([i({cast:e=>e==="auto"?e:H(n(e)),json:{write:!0}})],c.prototype,"size",void 0),c=t([p("esri.symbols.MarkerSymbol")],c);const ie=c;var F;const C=new z({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let g=F=class extends E{constructor(...e){super(...e),this.color=new S([0,0,0,.25]),this.outline=new L,this.type="simple-fill",this.style="solid"}normalizeCtorArgs(e,o,r){if(e&&typeof e!="string")return e;const s={};return e&&(s.style=e),o&&(s.outline=o),r&&(s.color=r),s}clone(){return new F({color:m(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return`${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};t([i()],g.prototype,"color",void 0),t([i()],g.prototype,"outline",void 0),t([b({esriSFS:"simple-fill"},{readOnly:!0})],g.prototype,"type",void 0),t([i({type:C.apiValues,json:{read:C.read,write:C.write}})],g.prototype,"style",void 0),g=F=t([p("esri.symbols.SimpleFillSymbol")],g);const re=g,ve=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));var A;const D=new z({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});let h=A=class extends ie{constructor(...e){super(...e),this.color=new S([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new L}normalizeCtorArgs(e,o,r,s){if(e&&typeof e!="string")return e;const u={};return e&&(u.style=e),o!=null&&(u.size=n(o)),r&&(u.outline=r),s&&(u.color=s),u}writeColor(e,o){e&&this.style!=="x"&&this.style!=="cross"&&(o.color=e.toJSON()),e===null&&(o.color=null)}set path(e){this.style="path",this._set("path",e)}clone(){return new A({angle:this.angle,color:m(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){var e;return`${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${(e=this.outline)==null?void 0:e.hash()}`}};t([i()],h.prototype,"color",void 0),t([j("color")],h.prototype,"writeColor",null),t([b({esriSMS:"simple-marker"},{readOnly:!0})],h.prototype,"type",void 0),t([i()],h.prototype,"size",void 0),t([i({type:D.apiValues,json:{read:D.read,write:D.write}})],h.prototype,"style",void 0),t([i({type:String,json:{write:!0}})],h.prototype,"path",null),t([i({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":L}},json:{default:null,write:!0}})],h.prototype,"outline",void 0),h=A=t([p("esri.symbols.SimpleMarkerSymbol")],h);const se=h,je=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));var _;let l=_=class extends k{constructor(...e){super(...e),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new B,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment="baseline",this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1}normalizeCtorArgs(e,o,r){if(e&&typeof e!="string")return e;const s={};return e&&(s.text=e),o&&(s.font=o),r&&(s.color=r),s}writeLineWidth(e,o,r,s){s&&typeof s!="string"?s.origin:o[r]=e}castLineWidth(e){return n(e)}writeLineHeight(e,o,r,s){s&&typeof s!="string"?s.origin:o[r]=e}clone(){return new _({angle:this.angle,backgroundColor:m(this.backgroundColor),borderLineColor:m(this.borderLineColor),borderLineSize:this.borderLineSize,color:m(this.color),font:this.font&&this.font.clone(),haloColor:m(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){var e,o,r;return`${(e=this.backgroundColor)==null?void 0:e.hash()}.${this.borderLineColor}.${this.borderLineSize}.${(o=this.color)==null?void 0:o.hash()}.${this.font&&this.font.hash()}.${(r=this.haloColor)==null?void 0:r.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}};t([i({type:S,json:{write:!0}})],l.prototype,"backgroundColor",void 0),t([i({type:S,json:{write:!0}})],l.prototype,"borderLineColor",void 0),t([i({type:Number,json:{write:!0},cast:n})],l.prototype,"borderLineSize",void 0),t([i({type:B,json:{write:!0}})],l.prototype,"font",void 0),t([i({...te,json:{write:!0}})],l.prototype,"horizontalAlignment",void 0),t([i({type:Boolean,json:{write:!0}})],l.prototype,"kerning",void 0),t([i({type:S,json:{write:!0}})],l.prototype,"haloColor",void 0),t([i({type:Number,cast:n,json:{write:!0}})],l.prototype,"haloSize",void 0),t([i({type:Boolean,json:{write:!0}})],l.prototype,"rightToLeft",void 0),t([i({type:Boolean,json:{write:!0}})],l.prototype,"rotated",void 0),t([i({type:String,json:{write:!0}})],l.prototype,"text",void 0),t([b({esriTS:"text"},{readOnly:!0})],l.prototype,"type",void 0),t([i({...oe,json:{write:!0}})],l.prototype,"verticalAlignment",void 0),t([i({type:Number,cast:n,json:{write:!0}})],l.prototype,"xoffset",void 0),t([i({type:Number,cast:n,json:{write:!0}})],l.prototype,"yoffset",void 0),t([i({type:Number,json:{read:e=>e&&-1*e,write:(e,o)=>o.angle=e&&-1*e}})],l.prototype,"angle",void 0),t([i({type:Number,json:{write:!0}})],l.prototype,"width",void 0),t([i({type:Number})],l.prototype,"lineWidth",void 0),t([j("lineWidth")],l.prototype,"writeLineWidth",null),t([q("lineWidth")],l.prototype,"castLineWidth",null),t([i(Y)],l.prototype,"lineHeight",void 0),t([j("lineHeight")],l.prototype,"writeLineHeight",null),l=_=t([p("esri.symbols.TextSymbol")],l);const Le=l;export{re as S,B as a,I as b,te as c,L as d,ge as e,Y as f,E as g,ie as h,we as i,ve as j,je as k,Le as m,k as n,oe as p,$e as s,X as u,se as y};
