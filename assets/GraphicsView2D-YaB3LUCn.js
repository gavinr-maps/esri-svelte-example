import{M,g as he,G as ue,j as ce,D as le,q as de,r as S,m as v,a as me}from"./Accessor-BmwT4B0c.js";import{n as pe}from"./Identifiable-BHVfzH03.js";import{d as fe}from"./reactiveUtils-XM7cS2OP.js";import{o as ge,G as ye,H as D,l as _e,y as be,A as we,C as Ie,a as $,R as Se,f as ve}from"./Polyline-s-JzsQqo.js";import{v as K,m as ee,s as Me,y as xe}from"./jsonUtils-CwFG8yN4.js";import{Z as Re}from"./FieldsIndex-FW1AMU67.js";import{m as te,f as $e,i as A,e as X,$ as Te,t as Ge}from"./CIMSymbolHelper-BDfNg_6w.js";import{OverrideHelper as Pe}from"./OverrideHelper-BItCoKFp.js";import{O as Ce,y as De,N as je}from"./defaults-FkBa0ybj.js";import{a as j,X as Ue,S as ke,W as ze,M as Oe}from"./definitions-CP59Y04S.js";import{b as Le}from"./WGLContainer-CAGx_8nH.js";import{M as qe,p as Ae,x as Be,n as Fe,s as Ee,a as Ve}from"./FeatureMetadata-Bu8jYZ4s.js";import{n as He,M as Ze,h as We,P as Ne,g as Xe,y as Qe,S as Ye,V as Je,u as Ke,p as et,z as B,a as tt,b as st}from"./FeatureCommandQueue-D2VPggrt.js";import{s as rt,m as it,d as F}from"./featureConversionUtils-CvnFcmH_.js";import{e as G}from"./OptimizedGeometry-BJqUA4Pi.js";import{u as L}from"./screenUtils-_ZIvrt5o.js";import{i as ot}from"./Tile-DxjvolLp.js";import{L as at}from"./normalizeUtils-BTGdXlpz.js";import{L as nt}from"./Point-Cz2JYYmX.js";import{e as ht}from"./memoryEstimations-Bcyf-mHz.js";import{m as ut}from"./mathUtils-Cfq9PL9W.js";import{r as E,e as V}from"./mat3-CR8GKnhD.js";import{e as ct}from"./mat3f64-BBpwCtoL.js";import{b as lt}from"./vec2-ChnYg_BJ.js";import{a as dt}from"./normalizeUtilsSync-12EQcOVf.js";import{F as mt,e as pt,n as ft,i as gt,r as yt}from"./dehydratedFeatures-kwLHUA1D.js";import{x as _t,j as bt}from"./queryUtils-DBEPdow2.js";import{d as wt}from"./UpdateTracking2D-DnXhWMyK.js";async function It(t,e,s){const r=[],i={scaleInfo:He(t),scaleExpression:null};for(const o of e)switch(o.type){case"marker":if(o.animationParams){r.push(...Ke(s.instances.animatedMarker,o,B,i));break}r.push(...et(s.instances.marker,o,B,i));break;case"fill":o.spriteRasterizationParam==null?r.push(...Ye(s.instances.fill,o,i)):r.push(...Je(s.instances.complexFill,o,!1,i));break;case"line":o.spriteRasterizationParam?r.push(...Xe(s.instances.texturedLine,o,!1,i)):r.push(...Qe(s.instances.line,o,!1,i));break;case"text":r.push(...Ne(s.instances.text,o,B,i));break;case"gradientFill":r.push(...We(s.instances.gradientFill,o,i));break;case"gradientStroke":r.push(...Ze(s.instances.gradientStroke,o,i))}return r}let St=class Z extends qe{static from(e,s,r){return new Z(e,s,r)}constructor(e,s,r){super(r),this._items=e,this._tile=s,this._index=-1,this._cachedGeometry=null;const i=s.lod;i.wrap&&(this._wrappingInfo={worldSizeX:i.worldSize[0]})}get _current(){return this._items[this._index]}getItem(){return this._current}getZOrder(){return this._current.zOrder}getMeshWriters(){var e;return((e=this._current.symbolResource)==null?void 0:e.symbolInfo.meshWriters)??[]}hasField(e){return this._current.attributes[e]!=null}field(e){return this.readAttribute(e)}get geometryType(){const e=K(this._current.geometry);return e==="esriGeometryPoint"?"esriGeometryMultipoint":e}getCursor(){return this.copy()}copy(){const e=new Z(this._items,this._tile,this.metadata);return this.copyInto(e),e}copyInto(e){super.copyInto(e),e._cachedGeometry=this._cachedGeometry,e._index=this._index}get fields(){throw new Error("Fields reading not supported to graphics.")}get hasFeatures(){return!!this._items.length}get hasNext(){return this._index+1<this._items.length}get exceededTransferLimit(){throw new Error("InternalError: exceededTransferLimit not implemented for graphics.")}get hasZ(){return!1}get hasM(){return!1}get usedMemory(){return this._current.usedMemory}getInTransform(){return this._tile.transform}getSize(){return this._items.length}getAttributeHash(){let e="";for(const s in this._current.attributes)e+=this._current.attributes[s];return e}getObjectId(){return this._items[this._index].objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){throw new Error("InternalError: Setting displayId not supported for graphics.")}setIndex(e){this._index=e}getIndex(){return this._index}next(){for(this._cachedGeometry=null;++this._index<this._items.length&&!this._getExists(););return this._index<this._items.length}readGeometryArea(){throw new Error("InternalError: readGeometryArea not supported for graphics.")}_readGeometry(){if(!this._cachedGeometry){let e=rt(this._current.projectedGeometry,this.hasZ,this.hasM);if(this.geometryType==="esriGeometryPolyline"&&(e=it(new G,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform.scale[0])),this._cachedGeometry=F(new G,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform),!this._cachedGeometry)return null;this._wrapGeometry(this._cachedGeometry)}return this._cachedGeometry}_wrapGeometry(e){if(!this._wrappingInfo)return;const{worldSizeX:s}=this._wrappingInfo;if(e.isPoint)return s===1?(e.coords.push(j,0),e.coords.push(-1024,0),void e.lengths.push(3)):s===2?(e.coords.push(2*j,0),e.coords.push(-2048,0),void e.lengths.push(3)):void this._wrapVertex(e.coords,0,2,s);if(this.geometryType==="esriGeometryMultipoint"){if(s===1){const r=e.coords.slice();r[0]-=512;const i=e.coords.slice();i[0]+=512,e.coords.push(...r,...i);const o=e.lengths[0];return void e.lengths.push(o,o)}this._wrapVertex(e.coords,0,2,s)}}_wrapVertex(e,s,r,i){const o=s*r,a=e[o];a<-512*(i-2)?e[o]=a+j*i:a>j*(i-1)&&(e[o]=a-j*i)}_readX(){const e=this._readGeometry();return e!=null?e.coords[0]:0}_readY(){const e=this._readGeometry();return e!=null?e.coords[1]:0}_readServerCentroid(){switch(this.geometryType){case"esriGeometryPolygon":{const e=ye(this._current.projectedGeometry),s=new G([],e);return F(new G,s,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}case"esriGeometryPolyline":{const e=this._current.projectedGeometry,s=ge(e.paths,this.hasZ),r=new G([],s);return F(new G,r,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}}return null}_readAttribute(e,s){const r=this._current.attributes[e];if(r!==void 0)return r;const i=e.toLowerCase();for(const o in this._current.attributes)if(o.toLowerCase()===i)return this._current.attributes[o]}_readAttributes(){return this._current.attributes}};function W(t){var e,s;return"curveRings"in t&&!!((e=t.curveRings)!=null&&e.length)||"curvePaths"in t&&!!((s=t.curvePaths)!=null&&s.length)}function vt(t){return"curveRings"in t?t.curveRings:t.curvePaths}function se(t){return"b"in t}function re(t){return"c"in t}function Mt(t){return Array.isArray(t)}function ie(t){return"a"in t}function xt(t){return t.a.length===4}function Rt(t){return se(t)?t.b[0]:re(t)?t.c[0]:ie(t)?t.a[0]:t}const H={maxSegmentLength:1/0,maxSegmentsPerCurve:12e3,minSegmentsPerCurve:1},q=1e-6,P=ct();function U(t,e){return lt(t,e)}function T(t,e){const s=Math.atan2(t,e);return s<0?s+2*Math.PI:s}function oe(t,e,s,{maxSegmentLength:r,maxSegmentsPerCurve:i,minSegmentsPerCurve:o},a){const n=r*r,c=1/i,u=a(0),h=a(1);U(e,u)>q&&t.push(u);const l=[1],d=[h],m=1/o;for(let f=o-1;f>0;f--){const y=f*m;l.push(y),d.push(a(y))}let p=0,g=u;for(;l.length>0;){const f=l.pop(),y=d.pop();if(U(g,y)<n||p===f||f-p<c)t.push(y),p=f,g=y;else{l.push(f),d.push(y);const _=(p+f)/2;l.push(_),d.push(a(_))}}return U(s,h)>q&&t.push([...s]),t}function $t(t,e,s,r,i){const o=1-i,a=o*o,n=i*i,c=a*o,u=3*i*a,h=3*n*o,l=n*i;return[t[0]*c+e[0]*u+s[0]*h+r[0]*l,t[1]*c+e[1]*u+s[1]*h+r[1]*l]}function Tt(t,e,s,r){const[i,o,a]=s.b;return oe(t,e,i,r,n=>$t(e,o,a,i,n))}function Gt(t,e,s,r){const[i,o]=e,[a,n]=s,[c,u]=r,h=i*i+o*o,l=a*a+n*n,d=c*c+u*u;E(P,i,a,c,o,n,u,1,1,1);const m=V(P);if(m===0)return null;E(P,h,l,d,o,n,u,1,1,1);const p=V(P);E(P,h,l,d,i,a,c,1,1,1);const g=p/m*.5,f=V(P)/m*-.5;return t[0]=g,t[1]=f,t}function ae(t,e,s,r,i,o,a,n,{maxSegmentLength:c,maxSegmentsPerCurve:u,minSegmentsPerCurve:h}){const l=2*o,d=[r+o*Math.cos(a),i+o*Math.sin(a)],m=[r+o*Math.cos(n),i+o*Math.sin(n)];U(e,d)>q&&t.push(d);const p=n-a,g=c<l?2*Math.asin(c/l):p,f=Math.min(u,Math.max(h,Math.ceil(Math.abs(p/g)))),y=1/f;for(let _=1;_<f;_++){const w=_*y,b=a*(1-w)+n*w;t.push([r+o*Math.cos(b),i+o*Math.sin(b)])}return t.push(m),U(s,m)>q&&t.push([...s]),t}function Pt(t,e,s,r){const[i,o]=s.c,a=Gt([],e,o,i);if(a==null)return t.push([...i]),t;const[n,c]=e,[u,h]=o,[l,d]=i,[m,p]=a,g=n-m,f=c-p,y=Math.sqrt(g*g+f*f),_=T(c-p,n-m),w=T(h-p,u-m);let b=T(d-p,l-m);return(w-_)*(b-w)<0&&(b+=2*Math.sign(_-b)*Math.PI),ae(t,e,i,m,p,y,_,b,r)}function ne(t,e,s){const[r,i,o,a]=s.a,n=Math.abs(t-e),c=n>Math.PI,u=n<Math.PI,h=ut(n,Math.PI);return(!h&&(c&&o||u&&!o)||h&&(t>e&&a||t<e&&!a))&&(t+=2*(Math.sign(e-t)||1)*Math.PI),t}function Ct(t,e,s,r){const[i,o]=s.a,[a,n]=e,[c,u]=i,[h,l]=o,d=a-h,m=n-l,p=Math.sqrt(d*d+m*m),g=T(n-l,a-h);return ae(t,e,i,h,l,p,g,ne(T(u-l,c-h),g,s),r)}function Dt(t,e,s,r){const[i,o,a,n,c,u,h]=s.a,[l,d]=e,[m,p]=i,[g,f]=o,y=u*h,_=Math.cos(c),w=Math.sin(c),b=T(1/y*(d-f)*_-1/y*(l-g)*w,1/u*(d-f)*w+1/u*(l-g)*_),C=ne(T(1/y*(p-f)*_-1/y*(m-g)*w,1/u*(p-f)*w+1/u*(m-g)*_),b,s);return oe(t,e,i,r,R=>{const k=b*(1-R)+C*R,z=Math.cos(k),O=Math.sin(k);return[u*z*_-y*O*w+g,u*z*w+y*O*_+f]})}function jt(t,e,s,r){return se(s)?Tt(t,e,s,r):re(s)?Pt(t,e,s,r):ie(s)?xt(s)?Ct(t,e,s,r):Dt(t,e,s,r):(Mt(s)&&t.push([...s]),t)}function Q(t,e){if(!W(t))return t;const s=vt(t),r=[];for(const i of s){const o=[];for(let a=0,n=1;n<i.length;a=n++){const c=Rt(i[a]);a===0&&o.push(c),jt(o,c,i[n],{maxSegmentLength:e.maxSegmentLength??H.maxSegmentLength,maxSegmentsPerCurve:e.maxSegmentsPerCurve??H.maxSegmentsPerCurve,minSegmentsPerCurve:Math.max(e.minSegmentsPerCurve??H.minSegmentsPerCurve,1)})}r.push(o)}return"curvePaths"in t?{paths:r,spatialReference:t.spatialReference}:{rings:r,spatialReference:t.spatialReference}}class N{static fromGraphic(e,s,r,i){return new N(e.geometry,s,e.attributes,e.visible,e.uid,e.version,r,i)}constructor(e,s,r,i,o,a,n,c){this.geometry=e,this.symbol=s,this.attributes=r,this.visible=i,this.objectId=o,this._version=a,this.zOrder=n,this.displayId=c,this.symbolBounds=D(),this.prevSymbolBounds=D(),this.size=[0,0,0,0],this.geometryBounds=D(),this._isDensificationDirty=!1,this._densificationSegmentLength=1/0}get projectedGeometry(){return this._projectedGeometry}get linearCIM(){var e;return(e=this.symbolResource)==null?void 0:e.symbolInfo.linearCIM}get usedMemory(){return 128+ht(this.attributes)+mt(this.geometry)}get hasAnimations(){const{linearCIM:e}=this;return!!e&&e.some(s=>"animationParams"in s&&!!s.animationParams)}get hasCurvedGeoemtry(){return this.geometry!=null&&this.geometry.type!=="mesh"&&W(this.geometry)}update(e,s,r){return(this._version!==e.version||this.zOrder!==r||this.symbol!==s)&&(this.prevSymbolBounds=this.symbolBounds,this.symbolBounds=D(),this.zOrder=r,this.geometry=e.geometry,this.attributes=e.attributes,this.symbol=s,this.visible=e.visible,this._version=e.version,this.symbolResource=null,this._projectedGeometry=null,D(this.geometryBounds),this._minDensificationSegmentLength=null,!0)}updateDensificationResolution(e){if(!this.hasCurvedGeoemtry)return!1;const s=Math.max(Ut(e),this._minDensificationSegmentLength??0);return s!==this._densificationSegmentLength&&(this._densificationSegmentLength=s,this._isDensificationDirty=!0,!0)}async projectAndNormalize(e){let s,r=this.geometry;if(r&&r.spatialReference&&r.type!=="mesh"&&(r.type==="extent"&&(r=te(r)),s=W(r)?Q(r,{maxSegmentLength:1/0,minSegmentsPerCurve:pt()}):r.toJSON(),this._projectedGeometry=await Y(s,r.spatialReference,e),_e(this.geometryBounds,this._projectedGeometry),this.hasCurvedGeoemtry&&this._projectedGeometry!=null)){const i=be(this.geometryBounds),o=we(this.geometryBounds);(i||o)&&(this._minDensificationSegmentLength=Math.max(i,o)/ft())}}async densifyCurvedGeometryForDisplay(e){if(!this.hasCurvedGeoemtry||!this._isDensificationDirty)return;this._isDensificationDirty=!1;const s=this.geometry;if(!s||!s.spatialReference||s.type==="mesh")return;const r=e.metersPerUnit/s.spatialReference.metersPerUnit,i=this._densificationSegmentLength*r,o=Q(s,{maxSegmentLength:i,minSegmentsPerCurve:gt()});this._projectedGeometry=await Y(o,s.spatialReference,e)}}async function Y(t,e,s){await _t(t.spatialReference,s);const r=dt(t);if(!r)return;const i=bt(r,e,s);return i&&Ie(i),ee(i)?te(i):i}function Ut(t){return 2**Math.round(Math.log2(t))*yt()}class kt{constructor(e,s,r){this.added=e,this.updated=s,this.removed=r}hasAnyUpdate(){return!!(this.added.length||this.updated.length||this.removed.length)}}const J=1e-5;function zt(t,e){return e.zOrder-t.zOrder}class Ot{constructor(e,s,r,i,o){this._items=new Map,this._boundsDirty=!1,this._outSpatialReference=e,this._cimResourceManager=s,this._hittestDrawHelper=new $e(s),this._tileInfoView=r,this._store=o;const a=r.getClosestInfoForScale(i);this._resolution=this._tileInfoView.getTileResolution(a.level)}destroy(){this._hittestDrawHelper.destroy()}items(){return this._items.values()}getItem(e){return this._items.get(e)}async update(e,s,r){const i=[],o=[],a=[],n=new Set,c=[];let u=0;for(const h of e.items){u++;const l=h.uid,d=this._items.get(l),m=s(h);if(n.add(l),d){const f=d.update(h,m,u),y=d.updateDensificationResolution(this._resolution);f&&c.push(this._updateItem(d,r)),(f||y)&&o.push(d);continue}const p=this._store.createDisplayIdForObjectId(l),g=N.fromGraphic(h,m,u,p);g.updateDensificationResolution(this._resolution),c.push(this._updateItem(g,r)),this._items.set(g.objectId,g),i.push(g)}for(const[h,l]of this._items.entries())n.has(h)||(this._store.releaseDisplayIdForObjectId(h),this._items.delete(h),a.push(l));return await Promise.all(c),this._index=null,new kt(i,o,a)}updateLevel(e){if(this._resolution===e)return!1;this._index=null,this._boundsDirty=!0,this._resolution=e;for(const s of this.items())if(s.hasCurvedGeoemtry)return!0;return!1}hitTest(e,s,r,i,o){const a=M("esri-mobile"),n=a?ke:ze,c=n+(a?0:Ue);e=at(e,this._tileInfoView.spatialReference);const u=i*window.devicePixelRatio*c,h=$();h[0]=e-u,h[1]=s-u,h[2]=e+u,h[3]=s+u;const l=i*window.devicePixelRatio*n,d=$();d[0]=e-l,d[1]=s-l,d[2]=e+l,d[3]=s+l;const m=.5*i*(c+A),p=this._searchIndex(e-m,s-m,e+m,s+m);if(!p||p.length===0)return[];const g=[],f=$(),y=$();for(const b of p){if(!b.visible)continue;const{geometryBounds:C,symbolResource:R}=b;this._getSymbolBounds(f,R,C,y,o),y[3]=y[2]=y[1]=y[0]=0,Se(f,h)&&g.push(b)}if(g.length===0)return[];const _=this._hittestDrawHelper,w=[];for(const b of g){const{projectedGeometry:C,symbolResource:R}=b;if(!R)continue;const{textInfo:k,symbolInfo:z}=R,O=z.cimSymbol;_.hitTest(d,O.symbol,C,k,o,i)&&w.push(b)}return w.sort(zt),w.map(b=>b.objectId)}queryItems(e){return this._items.size===0?[]:this._searchForItems(e)}clear(){this._items.clear(),this._index=null}async _updateItem(e,s){await e.projectAndNormalize(this._outSpatialReference),await s(e);const{size:r}=e;r[0]=r[1]=r[2]=r[3]=0,this._getSymbolBounds(e.symbolBounds,e.symbolResource,e.geometryBounds,e.size,0)}_searchIndex(e,s,r,i){return this._boundsDirty&&(this._items.forEach(o=>this._getSymbolBounds(o.symbolBounds,o.symbolResource,o.geometryBounds,o.size,0)),this._boundsDirty=!1),this._index||(this._index=ot(9,o=>({minX:o.symbolBounds[0],minY:o.symbolBounds[1],maxX:o.symbolBounds[2],maxY:o.symbolBounds[3]})),this._index.load(Array.from(this._items.values()))),this._index.search({minX:e,minY:s,maxX:r,maxY:i})}_searchForItems(e){const s=this._tileInfoView.spatialReference,r=e.bounds,i=nt(s);if(i&&s.isWrappable){const[o,a]=i.valid,n=Math.abs(r[2]-a)<J,c=Math.abs(r[0]-o)<J;if((!n||!c)&&(n||c)){const u=e.resolution;let h;h=$(n?[o,r[1],o+u*A,r[3]]:[a-u*A,r[1],a,r[3]]);const l=this._searchIndex(r[0],r[1],r[2],r[3]),d=this._searchIndex(h[0],h[1],h[2],h[3]);return[...new Set([...l,...d])]}}return this._searchIndex(r[0],r[1],r[2],r[3])}_getSymbolBounds(e,s,r,i,o){if(!s||!s.symbolInfo.linearCIM)return null;if(e||(e=$()),ve(e,r),!i||i[0]===0&&i[1]===0&&i[2]===0&&i[3]===0){const{textInfo:c,symbolInfo:u}=s,h=u.cimSymbol;i||(i=[0,0,0,0]);const l=X.getSymbolInflateSize(i,h.symbol,this._cimResourceManager,o,c);i[0]=L(l[0]),i[1]=L(l[1]),i[2]=L(l[2]),i[3]=L(l[3])}const a=this._resolution,n=X.safeSize(i);return e[0]-=n*a,e[1]-=n*a,e[2]+=n*a,e[3]+=n*a,e}}class x{static getOrCreate(e,s,r){let i=s.get(e.id);return i||(i=new x(e,r),s.set(e.id,i)),i}static fromItems(e,s,r){const i=new x(e,r);for(const o of s)i.append(o);return i}constructor(e,s){this.tile=e,this.metadata=s,this.addedOrModified=[],this.removed=[],this.objectIdMap=null}get reader(){return this._reader||(this._reader=St.from(this.addedOrModified,this.tile,this.metadata)),this._reader}append(e){this.addedOrModified.push(e),e.hasAnimations&&(this.objectIdMap=this.objectIdMap||{},this.objectIdMap[e.displayId]=e.objectId)}}let I=class extends pe.IdentifiableMixin(he){constructor(t){super(t),this._attached=!1,this._tiles=new Map,this._controller=new AbortController,this._hashToSymbolInfo=new Map,this._lastCleanup=performance.now(),this._cleanupRequired=!0,this.lastUpdateId=-1,this.renderer=null,this._updateTracking=new wt({debugName:"GraphicsView2D"}),this.updateRequested=!1,this.defaultPointSymbolEnabled=!0,this._commandQueue=new tt({process:e=>{if(e.type==="update")return this._update();throw new Error("InternalError: Unsupported command")}}),this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this.container.destroy(),this.view=null,this.renderer=null,this._set("graphics",null),this._controller.abort(),this._graphicStore.clear(),this._graphicStore.destroy(),this._attributeStore=null,this._hashToSymbolInfo.clear(),this._updateTracking.destroy(),this._commandQueue.destroy()}_initAttributeStore(){this._storage=new Ae({spatialReference:this.view.spatialReference,fields:new Re}),this._attributeStore=new Be({isLocal:!0,update:e=>{M("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`,{message:e}),this.container.attributeView.requestUpdate(e),this.container.requestRender(),M("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`,{message:e})}});const t=st(null,[]);this._attributeStore.update(t,this._storage,null),this.container.checkHighlight=()=>this._attributeStore.hasHighlight}initialize(){this._initAttributeStore(),this._metadata=Fe.createGraphics(this.view.spatialReference),this._resourceProxy=new Ee({fetch:e=>Promise.all(e.map(s=>this.view.stage.textureManager.rasterizeItem(s))),fetchDictionary:e=>{throw new Error("InternalError: Graphics do not support Dictionary requests")}}),this.addHandles([fe(()=>this._effectiveRenderer,()=>this._pushUpdate()),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",()=>{var e;this.addHandles([this.graphics.on("change",()=>this._pushUpdate())]),(e=this._graphicStore)==null||e.destroy(),this._graphicStore=new Ot(this.view.spatialReference,this._cimResourceManager,this.view.featuresTilingScheme,this.view.state.scale,this._attributeStore),this._attached=!0,this.requestUpdate(),this._pushUpdate()})]),this._updateTracking.addUpdateTracking("CommandQueue",this._commandQueue.updateTracking);const t=this.view.graphicsTileStore.tiles;this._onTileUpdate({added:t,removed:[]})}get _effectiveRenderer(){return typeof this.renderer=="function"?this.renderer():this.renderer}get _cimResourceManager(){return this.view.stage.textureManager.resourceManager}get updating(){const t=!this._attached||this._updateTracking.updating;return M("esri-2d-log-updating")&&console.log(`Updating GraphicsView2D: ${t}
  -> attaching ${!this._attached}
  -> updateTracking ${this._updateTracking.updating}`),t}hitTest(t){if(!this.view||this.view.suspended)return[];const{resolution:e,rotation:s}=this.view.state,r=this._graphicStore.hitTest(t.x,t.y,2,e,s),i=new Set(r),o=this.graphics.items.reduce((a,n)=>(i.has(n.uid)&&a.set(n.uid,n),a),new Map);return r.map(a=>o.get(a)).filter(ue)}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback()),this.notifyChange("updating")}processUpdate(t){this.updateRequested&&(this.updateRequested=!1,this.update(t))}viewChange(){this.requestUpdate()}setHighlight(t){var s;const e=[];for(const{objectId:r,highlightFlags:i}of t){const o=(s=this._graphicStore.getItem(r))==null?void 0:s.displayId;e.push({objectId:r,highlightFlags:i,displayId:o})}this._attributeStore.setHighlight(e,t),this._pushUpdate()}graphicUpdateHandler(t){this._pushUpdate()}update(t){this.updateRequested=!1,this._attached&&this._graphicStore.updateLevel(t.state.resolution)&&this.pushUpdate()}pushUpdate(){this._pushUpdate()}_pushUpdate(){ce(this._commandQueue.push({type:"update"}))}async _update(){try{M("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);const t=await this._graphicStore.update(this.graphics,s=>this._getSymbolForGraphic(s),s=>this._ensureSymbolResource(s));for(const s of t.updated)this.container.restartAnimation(s.objectId);if(!t.hasAnyUpdate())return void this._attributeStore.sendUpdates();t.removed.length&&(this._cleanupRequired=!0),M("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`,t);const e=this._createTileMessages(t);await this._densifyItemsForDisplay(e),await this._fetchResources(e),this._write(e);for(const s of t.added)this._setFilterState(s);for(const s of t.updated)this._setFilterState(s);M("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`,t),this._attributeStore.sendUpdates(),M("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`,t)}catch{}this._cleanupSharedResources()}_createTileMessages(t){const e=new Map;for(const s of t.added){const r=this.view.graphicsTileStore.getIntersectingTiles(s.symbolBounds);for(const i of r)x.getOrCreate(i,e,this._metadata).append(s)}for(const s of t.updated){const r=this.view.graphicsTileStore.getIntersectingTiles(s.prevSymbolBounds),i=this.view.graphicsTileStore.getIntersectingTiles(s.symbolBounds);for(const o of r)x.getOrCreate(o,e,this._metadata).removed.push(s.displayId);for(const o of i)x.getOrCreate(o,e,this._metadata).append(s)}for(const s of t.removed){const r=this.view.graphicsTileStore.getIntersectingTiles(s.symbolBounds);for(const i of r)x.getOrCreate(i,e,this._metadata).removed.push(s.displayId)}return Array.from(e.values())}async _densifyItemsForDisplay(t){const e=new Map;for(const s of t)for(const r of s.addedOrModified)e.has(r)||e.set(r,r.densifyCurvedGeometryForDisplay(this.view.spatialReference));await Promise.all(e.values())}async _fetchResources(t){const e={timeZone:null,timeExtent:null};for(const{tile:s,reader:r}of t){M("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${s.id}] GraphicsView fetchResources`,t);const i=r.getCursor();for(;i.next();)for(const o of i.getMeshWriters())o.enqueueRequest(this._resourceProxy,i,s.createArcadeEvaluationOptions(e))}await this._resourceProxy.fetchEnqueuedResources()}_write(t){for(const e of t){M("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${e.tile.id}] GraphicsView write`,e);const s=this._writeMeshes(e);let r=this._tiles.get(e.tile.key);r||(r=this._createFeatureTile(e.tile.key)),M("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${e.tile.id}] GraphicsView onTileData`,e),this.container.onTileData(r,{type:"update",modify:s,remove:e.removed,end:!1,attributeEpoch:this._attributeStore.epoch,objectIdMap:e.objectIdMap}),this.container.requestRender()}}_writeMeshes(t){const e={timeZone:null,timeExtent:null},s=new Ve(t.tile.id),r=t.reader.getCursor();for(;r.next();){s.entityStart(r.getDisplayId(),r.getZOrder());for(const i of r.getMeshWriters())i.write(s,this._resourceProxy,r,t.tile.createArcadeEvaluationOptions(e),t.tile.level);s.entityEnd()}return{...s.serialize().message,tileId:t.tile.id}}_setFilterState(t){const e=t.displayId,s=this._attributeStore.getHighlightFlags(t.objectId);this._attributeStore.setData(e,0,0,s|(t.visible?Oe:0))}_getSymbolForGraphic(t){return t.symbol!=null?t.symbol:this._effectiveRenderer!=null?this._effectiveRenderer.getSymbol(t):this._getNullSymbol(t)}async _ensureSymbolResource(t){if(!t.symbol)return;const e=await this._getSymbolInfo(t.symbol);if(!e)return;const s=e.linearCIM.filter(r=>r.type==="text");if(s.length>0){const r=await this._getTextResources(t,s);t.symbolResource={symbolInfo:e,textInfo:r}}else t.symbolResource={symbolInfo:e}}_getSymbolInfo(t){const e=t.hash();return this._hashToSymbolInfo.has(e)||this._hashToSymbolInfo.set(e,this._createSymbolInfo(e,t).catch(s=>null)),this._hashToSymbolInfo.get(e)}async _createSymbolInfo(t,e){const s=await this._convertToCIMSymbol(e),r=await this._createLinearCIM(s);return{hash:t,cimSymbol:s,linearCIM:r,meshWriters:await this._createMeshWriters(s,r)}}async _convertToCIMSymbol(t){const e=Te(t);return e.type==="web-style"?(await e.fetchCIMSymbol()).data:e}async _createLinearCIM(t){return await Promise.all(Ge.fetchResources(t.symbol,this._cimResourceManager,[])),this.view.stage.cimAnalyzer.analyzeSymbolReference(t,!1)}async _createMeshWriters(t,e){le(this._controller.signal);const s=this.container.instanceStore,r=this.view.stage.meshWriterRegistry,i=await It(t,e,s);return Promise.all(i.map(o=>r.createMeshWriter(this._storage,this._resourceProxy,{tileInfo:this.view.featuresTilingScheme.tileInfo},o)))}_onTileUpdate(t){if(t.added&&t.added.length>0)for(const e of t.added)this._updateTracking.addPromise(this._addTile(e));if(t.removed&&t.removed.length>0)for(const e of t.removed)this._removeTile(e.key)}_createFeatureTile(t){const e=this.view.featuresTilingScheme.getTileBounds($(),t),s=this.view.featuresTilingScheme.getTileResolution(t.level),r=new Le(t,s,e[0],e[3]);return this._tiles.set(t,r),this.container.addChild(r),r}async _addTile(t){if(!this._attached)return;const e=this._graphicStore.queryItems(t);if(!e.length)return;const s=this._createFeatureTile(t.key),r=x.fromItems(t,e,this._metadata);await this._densifyItemsForDisplay([r]),await this._fetchResources([r]);const i=this._writeMeshes(r);s.onMessage({type:"append",append:i,clear:!1,end:!0,attributeEpoch:this._attributeStore.epoch,objectIdMap:r.objectIdMap})}_removeTile(t){if(!this._tiles.has(t))return;const e=this._tiles.get(t);this.container.removeChild(e),e.destroy(),this._tiles.delete(t)}_getNullSymbol(t){const e=t.geometry;return Me(e)?Ce:xe(e)||ee(e)?De:this.defaultPointSymbolEnabled?je:null}async _getTextResources(t,e){const s=new Array,r=new Array;for(let n=0;n<e.length;n++){const c=e[n],{resource:u,overrides:h}=c.textRasterizationParam;if((h==null?void 0:h.length)>0){const l=Pe.resolveSymbolOverrides({type:"CIMSymbolReference",primitiveOverrides:h,symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:u.symbol.height,anchorPointUnits:"Relative",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:u.symbol,textString:u.textString}],scaleSymbolsProportionally:!0,respectFrame:!0}]}},t,this.view.spatialReference,null,K(t.projectedGeometry),null,null);l.then(d=>{const m=d.symbolLayers[0],{textString:p}=m.markerGraphics[0];r.push({type:"cim-rasterization-info",resource:{type:"text",textString:p||"",font:u.font}}),c.text=u.textString=p||""}),s.push(l)}else r.push({type:"cim-rasterization-info",resource:u})}s.length>0&&await Promise.all(s);const i=r.map(n=>this.view.stage.textureManager.rasterizeItem(n)),o=await Promise.all(i);de(o);const a=new Map;for(let n=0;n<e.length;n++){const c=e[n];a.set(c.textRasterizationParam.resource.symbol,{text:c.text,glyphMosaicItems:o[n]})}return a}_cleanupSharedResources(){var r;if(!this._cleanupRequired)return;const t=performance.now();if(t-this._lastCleanup<5e3)return;this._cleanupRequired=!1,this._lastCleanup=t;const e=new Set;for(const i of this._graphicStore.items()){const o=(r=i.symbolResource)==null?void 0:r.symbolInfo.hash;e.add(o)}const s=new Set(this._hashToSymbolInfo.keys());for(const i of s.values())e.has(i)||this._hashToSymbolInfo.delete(i)}};S([v()],I.prototype,"_effectiveRenderer",null),S([v({constructOnly:!0})],I.prototype,"layerId",void 0),S([v({constructOnly:!0})],I.prototype,"requestUpdateCallback",void 0),S([v()],I.prototype,"container",void 0),S([v({constructOnly:!0})],I.prototype,"graphics",void 0),S([v()],I.prototype,"renderer",void 0),S([v()],I.prototype,"_updateTracking",void 0),S([v()],I.prototype,"updating",null),S([v()],I.prototype,"view",void 0),S([v()],I.prototype,"updateRequested",void 0),S([v()],I.prototype,"defaultPointSymbolEnabled",void 0),I=S([me("esri.views.2d.layers.graphics.GraphicsView2D")],I);const ds=I;export{ds as A};
