import{r as e}from"./tslib.es6-B3Jf3DVX.js";import{m as t,a as S,g as J,b as Q,c as Z}from"./subclass-BZA_h8Db.js";import ee from"./FeatureLayer-wa_7EIxE.js";import{f as te}from"./TemporalLayer-Dpq2hKKV.js";import{n as k}from"./jsonMap-0cxwUWs2.js";import{i as T}from"./Clonable-D3rtuBWg.js";import{u as M,f as G}from"./assets-C43MgM-v.js";import{b as ie}from"./Accessor-BLX9ikPh.js";import{c as q}from"./Point-Cg0-ChZE.js";import{p as oe}from"./TimeExtent-DocT5yPf.js";import{A as X}from"./interfaces-CL2NbQte.js";let N=class extends ie{set horizontalWKID(o){o?q({wkid:+o})?this._set("horizontalWKID",+o):this._set("horizontalWKID",o):this._set("horizontalWKID",null)}set verticalWKID(o){o?this._set("verticalWKID",isFinite(o)&&q({wkid:+o})?+o:null):this._set("verticalWKID",null)}get isAdvanced(){const{affineTransformations:o,focalLength:r,principalOffsetPoint:n,radialDistortionCoefficients:l,tangentialDistortionCoefficients:a}=this;return(o==null?void 0:o.length)>1&&!Number.isNaN(r)&&(n==null?void 0:n.length)>1&&(l==null?void 0:l.length)>1&&(a==null?void 0:a.length)>1}};e([t({json:{write:!0}})],N.prototype,"affineTransformations",void 0),e([t({json:{write:!0}})],N.prototype,"focalLength",void 0),e([t({json:{write:!0}})],N.prototype,"principalOffsetPoint",void 0),e([t({json:{write:!0}})],N.prototype,"radialDistortionCoefficients",void 0),e([t({json:{write:!0}})],N.prototype,"tangentialDistortionCoefficients",void 0),e([t({json:{write:!0}})],N.prototype,"horizontalWKID",null),e([t({json:{write:!0}})],N.prototype,"verticalWKID",null),e([t({json:{write:!0}})],N.prototype,"x",void 0),e([t({json:{write:!0}})],N.prototype,"y",void 0),e([t({json:{write:!0}})],N.prototype,"z",void 0),e([t({json:{write:!0}})],N.prototype,"type",void 0),N=e([S("esri.layers.orientedImagery.core.CameraOrientation")],N);const _=N;let w=class extends T(M(_)){constructor(){super(...arguments),this.type=1}toString(){const{type:o,horizontalWKID:r,verticalWKID:n,x:l,y:a,z:d,heading:u,pitch:m,roll:b,affineTransformations:h,focalLength:x,principalOffsetPoint:f,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,y=[o,r,n,l,a,d,u,m,b];return this.isAdvanced&&(h==null||h.forEach(s=>y.push(s)),y.push(x),f==null||f.forEach(s=>y.push(s)),g==null||g.forEach(s=>y.push(s)),v==null||v.forEach(s=>y.push(s))),y.map(s=>Number.isNaN(s)?"":s).join("|")}};e([t({json:{write:!0}})],w.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"heading",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"pitch",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"roll",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"z",void 0),w=e([S("esri.layers.orientedImagery.core.CameraOrientationHPR")],w);const re=w;let I=class extends T(M(_)){constructor(){super(...arguments),this.type=4}toString(){const{type:o,latitude:r,longitude:n,ellipsoidRadius:l,squaredEccentricity:a,properties:d}=this,u=`${d}`.split("|");return u.splice(1,1),`${o}|${r}|${n}|${l}|${a}|${u.join("|")}`}};e([t({json:{write:!0}})],I.prototype,"type",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"latitude",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"longitude",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"ellipsoidRadius",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"squaredEccentricity",void 0),e([t({json:{write:!0}})],I.prototype,"properties",void 0),I=e([S("esri.layers.orientedImagery.core.CameraOrientationLTP")],I);const ne=I;let j=class extends T(M(_)){constructor(){super(...arguments),this.type=2}toString(){const{type:o,horizontalWKID:r,verticalWKID:n,x:l,y:a,z:d,omega:u,phi:m,kappa:b,affineTransformations:h,focalLength:x,principalOffsetPoint:f,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,y=[o,r,n,l,a,d,u,m,b];return this.isAdvanced&&(h==null||h.forEach(s=>y.push(s)),y.push(x),f==null||f.forEach(s=>y.push(s)),g==null||g.forEach(s=>y.push(s)),v==null||v.forEach(s=>y.push(s))),y.map(s=>isNaN(s)?"":s).join("|")}};e([t({json:{write:!0}})],j.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"omega",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"phi",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"kappa",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"z",void 0),j=e([S("esri.layers.orientedImagery.core.CameraOrientationOPK")],j);const se=j;let P=class extends T(M(_)){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:o,focalLength:r,principalOffsetPoint:n,radialDistortionCoefficients:l,tangentialDistortionCoefficients:a}=this;return(o==null?void 0:o.length)>1||!Number.isNaN(r)||(n==null?void 0:n.length)>1||(l==null?void 0:l.length)>1||(a==null?void 0:a.length)>1}toString(){const{type:o,horizontalWKID:r,verticalWKID:n,x:l,y:a,z:d,yaw:u,pitch:m,roll:b,affineTransformations:h,focalLength:x,principalOffsetPoint:f,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,y=[o,r,n,l,a,d,u,m,b];return this.isAdvanced&&(h==null||h.forEach(s=>y.push(s)),y.push(x),f==null||f.forEach(s=>y.push(s)),f==null||f.forEach(s=>y.push(s)),g==null||g.forEach(s=>y.push(s)),v==null||v.forEach(s=>y.push(s))),y.map(s=>Number.isNaN(s)?"":s).join("|")}};e([t({json:{write:!0}})],P.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"yaw",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"pitch",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"roll",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"z",void 0),P=e([S("esri.layers.orientedImagery.core.CameraOrientationYPR")],P);const ae=P;var D;(function(i){i[i.HPR=1]="HPR",i[i.OPK=2]="OPK",i[i.YPR=3]="YPR",i[i.LTP=4]="LTP"})(D||(D={}));const O=new Map;O.set(`${D.OPK}`,{desc:"Using Omega Phi Kappa",constructor:se}),O.set(`${D.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:re}),O.set(`${D.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:ae}),O.set(`${D.LTP}`,{desc:"Using Local Tangent Plane",constructor:ne});let $=class extends T(G){constructor(){super(...arguments),this.url=null}};e([t({type:Number,json:{write:!0}})],$.prototype,"lod",void 0),e([t({type:String,json:{write:!0}})],$.prototype,"rasterFunction",void 0),e([t({type:String,json:{write:!0}})],$.prototype,"url",void 0),$=e([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],$);let H=class extends T(G){constructor(){super(...arguments),this.constantElevation=null}};e([t({type:Number,json:{write:!0}})],H.prototype,"constantElevation",void 0),H=e([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")],H);const pe=i=>i!=null&&typeof i.constantElevation=="number",Ve=i=>{var o;return i!=null&&((o=i.url)==null?void 0:o.length)>0};function le(i,o,r){return o&&(i=`${o}${i}`),r&&(i+=`${r}`),i}function ue(i,o,r){let{url:n}=i;return n?(n=le(n,o,r),new $({...i,url:n})):null}function ye(i,o,r){return i&&(pe(i)?new H(i):ue(i,o,r))}const A=new k({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),V=new k({Feet:"feet",Meter:"meter"}),F=new k({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),z=new Map;function ce(i){const[o,r,n,l,a,d,u,m,b,h,x,f,g,v,y,s,E,K,C,L,W,R]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:n,y:l,z:a,omega:d,phi:u,kappa:m,...Y([b,h,x,f,g,v],[s,E],[K,C,L],[W,R],y)}}z.set(`${D.HPR}`,de),z.set(`${D.YPR}`,fe),z.set(`${D.OPK}`,ce),z.set(`${D.LTP}`,me);const U=i=>{const o=i.map(r=>parseFloat(r)).filter(r=>!isNaN(r));if(o.length===i.length)return o};function Y(i,o,r,n,l){const a=U(i),d=U(o),u=U(r),m=U(n);return{affineTransformations:(a==null?void 0:a.length)===6?a:void 0,focalLength:(a==null?void 0:a.length)===6?parseFloat(l):void 0,principalOffsetPoint:(d==null?void 0:d.length)!==2?[0,0]:d,radialDistortionCoefficients:(u==null?void 0:u.length)!==3?[0,0,0]:u,tangentialDistortionCoefficients:(m==null?void 0:m.length)!==2?[0,0]:m}}function de(i){const[o,r,n,l,a,d,u,m,b,h,x,f,g,v,y,s,E,K,C,L,W,R]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:n,y:l,z:a,heading:d,pitch:u,roll:m,...Y([b,h,x,f,g,v],[s,E],[K,C,L],[W,R],y)}}function fe(i){const[o,r,n,l,a,d,u,m,b,h,x,f,g,v,y,s,E,K,C,L,W,R]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:n,y:l,z:a,yaw:d,pitch:u,roll:m,...Y([b,h,x,f,g,v],[s,E],[K,C,L],[W,R],y)}}function me(i){var b;const[o,r,n,l,a,...d]=i.slice(1),u=z.get(a),m=(b=O.get(a))==null?void 0:b.constructor;return!u||!m?null:{latitude:o,longitude:r,ellipsoidRadius:n,squaredEccentricity:l,properties:new m(u([a,"",...d]))}}function Ue(i){if(!i)return null;const o=`${i}`.split("|");if(o.length===0)return null;const r=O.get(o[0]);if(!r)return null;const n=z.get(o[0]);return n?new r.constructor(n(o)):null}function he(i){return Array.isArray(i)&&(i==null?void 0:i.length)===9&&!i.some(isNaN)}const ge=new Set(["demPathPrefix","demPathSuffix","depthImagePathPrefix","depthImagePathSuffix","elevationSource","horizontalMeasurementUnit","verticalMeasurementUnit","videoPathPrefix","videoPathSuffix","timeAnimation","visibilityTimeExtent"]),B=(i,o)=>!ge.has(o)&&i,ve=(i,o,r)=>{const n=`orientedImageryProperties.${i}`;return{name:n,write:o?{ignoreOrigin:!0,target:n,writer:o}:{ignoreOrigin:!0},read:r?{ignoreOrigin:!0,source:n,reader:r}:{ignoreOrigin:!0}}};function we(i){return i.json&&(i.json.origins=i.json.origins??{},i.json.origins["web-scene"]={write:!1,read:!1}),i}function c(i,o,r,n){const{name:l,write:a,read:d}=ve(i,o,r),u={name:l,write:a,read:d,origins:{service:{name:`orientedImageryInfo.${l}`,write:o,read:r},"web-scene":{name:l,write:B(a,i),read:B(d,i)},"web-map":{name:l,write:a,read:d}}};return n&&u.origins&&(u.type=n,u.origins["web-map"].type=n,u.origins["web-scene"].type=n),u}let p=class extends ee{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.supportedSourceTypes=new Set(["Oriented Imagery Layer"]),this.type="oriented-imagery",this.timeIntervalUnit="days",this.useViewTime=!0,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null,this.visibilityTimeExtent=null}get effectiveElevationSource(){const{elevationSource:i,demPathPrefix:o,demPathSuffix:r}=this;return ye(i,o,r)}async save(i){return this._debouncedSaveOperations(X.SAVE,i)}async saveAs(i,o){return this._debouncedSaveOperations(X.SAVE_AS,o,i)}findFirstValidLayerId(i){var o,r;return(r=(o=i.layers)==null?void 0:o.find(n=>this.supportedSourceTypes.has(n.type)))==null?void 0:r.id}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new Q("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};e([t({type:Number,json:c("cameraHeading")})],p.prototype,"cameraHeading",void 0),e([t({type:Number,json:c("cameraHeight")})],p.prototype,"cameraHeight",void 0),e([t({type:Number,json:c("cameraPitch")})],p.prototype,"cameraPitch",void 0),e([t({type:Number,json:c("cameraRoll")})],p.prototype,"cameraRoll",void 0),e([t({type:Number,json:c("coveragePercent")})],p.prototype,"coveragePercent",void 0),e([t({type:String,json:c("demPathPrefix")})],p.prototype,"demPathPrefix",void 0),e([t({type:String,json:c("demPathSuffix")})],p.prototype,"demPathSuffix",void 0),e([t({type:String,json:c("depthImagePathPrefix")})],p.prototype,"depthImagePathPrefix",void 0),e([t({type:String,json:c("depthImagePathSuffix")})],p.prototype,"depthImagePathSuffix",void 0),e([t({type:Object,json:c("elevationSource")})],p.prototype,"elevationSource",void 0),e([t({readOnly:!0})],p.prototype,"effectiveElevationSource",null),e([t({type:Number,json:c("farDistance")})],p.prototype,"farDistance",void 0),e([t()],p.prototype,"geometryType",void 0),e([t({type:Number,json:c("horizontalFieldOfView")})],p.prototype,"horizontalFieldOfView",void 0),e([t({type:String,json:c("horizontalMeasurementUnit")})],p.prototype,"horizontalMeasurementUnit",void 0),e([t({type:String,json:c("imagePathPrefix")})],p.prototype,"imagePathPrefix",void 0),e([t({type:String,json:c("imagePathSuffix")})],p.prototype,"imagePathSuffix",void 0),e([t({type:Number,json:c("imageRotation")})],p.prototype,"imageRotation",void 0),e([t({type:Number,json:c("maximumDistance")})],p.prototype,"maximumDistance",void 0),e([t({type:Number,json:c("nearDistance")})],p.prototype,"nearDistance",void 0),e([t({type:["OrientedImageryLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),e([t({json:{...c("orientationAccuracy",(i,o,r)=>{Z(r,i.join(";"),o)},i=>{var r;const o=(r=i==null?void 0:i.split(";"))==null?void 0:r.map(Number);return he(o)?o:[0,0,0,0,0,0,0,0,0]},String)}})],p.prototype,"orientationAccuracy",void 0),e([t({json:{...c("orientedImageryType",F.write,F.read,F.jsonValues.slice(1))}})],p.prototype,"orientedImageryType",void 0),e([t({json:{read:!1},value:"oriented-imagery",readOnly:!0})],p.prototype,"type",void 0),e([t({type:A.apiValues,json:{...c("timeIntervalUnit",A.write,A.read,A.jsonValues)}})],p.prototype,"timeIntervalUnit",void 0),e([t(we(J(te)))],p.prototype,"useViewTime",void 0),e([t({type:Number,json:c("verticalFieldOfView")})],p.prototype,"verticalFieldOfView",void 0),e([t({type:V.apiValues,json:{...c("verticalMeasurementUnit",V.write,V.read,V.jsonValues)}})],p.prototype,"verticalMeasurementUnit",void 0),e([t({type:String,json:c("videoPathPrefix")})],p.prototype,"videoPathPrefix",void 0),e([t({type:String,json:c("videoPathSuffix")})],p.prototype,"videoPathSuffix",void 0),e([t({type:oe,json:{origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"visibilityTimeExtent",void 0),p=e([S("esri.layers.OrientedImageryLayer")],p);const je=p,He=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"}));export{Ue as D,He as O,D as P,je as S,H as a,ye as b,pe as c,_ as d,F as f,Ve as l,O as n,le as s};