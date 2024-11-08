import{r as n}from"./tslib.es6-B3Jf3DVX.js";import{h as U,s as m,a as k,o as V,U as b,d as _,i as h,l as M}from"./quantityUtils-D0GB2dMc.js";import{m as r,a as f}from"./subclass-BZA_h8Db.js";import{an as C}from"./Point-Cg0-ChZE.js";import{B as l,C as F,a as O,w as Q,J as R,A as z,b as A}from"./SketchTooltipInfo-BA57LzDt.js";import{b as D}from"./Accessor-BLX9ikPh.js";import{n as B}from"./uuid-fwrPAdZb.js";import{U as T}from"./quantityFormatUtils-CX8UdSzC.js";import{A as w,w as L,j as c}from"./angularMeasurementUtils-7e2vxqzG.js";import{e as j}from"./geodesicMeasurementUtils-Bt9h4589.js";import{k as $,j as X}from"./euclideanAreaMeasurementUtils-CfO9bFtV.js";import{o as Y}from"./geodesicAreaMeasurementUtils-BILXFcc4.js";let s=class extends D{constructor(e){super(e),this.actual=null,this.lockable=!0,this.id=B(),this.inputValue=null,this.readOnly=!1,this.suffix=null,this.visible=!0,this.invalid=!1,this.unlockOnVertexPlacement=!0}get committed(){return this.lockable?this._get("committed"):null}set committed(e){this.lockable&&this._set("committed",e)}get dirty(){return this.inputValue!=null}get locked(){return this.lockable&&this.committed!=null}onInput(e){this.inputValue=e}onCommit(e,o,t){this.lockable?this._onCommitLockable(e,t):this._onCommitNonLockable(t),this.invalid&&e==="commit-and-exit"||t.onCommit(o,e)}_onCommitLockable(e,o){const{inputValue:t,locked:i}=this;i&&d(t)?this.unlock():(e==="commit-and-exit"&&!i||t!=null)&&this._parseInputAndLock(o)}_onCommitNonLockable(e){const{inputValue:o}=this;d(o)?this.setActual(null):o!=null&&this._parseInputAndSetActual(e)}applyValue(e){this.lockable?this.lock(e):this.setActual(e)}clearInputValue(){this.inputValue=null,this.invalid=!1}setActual(e){this.actual=e,this.clearInputValue()}lock(e){this.lockable&&(this.committed=e??this.actual,this.clearInputValue())}unlock(){this.lockable&&(this.committed=null,this.clearInputValue())}toggleLock(e){this.lockable&&(this.locked?this.unlock():this._parseInputAndLock(e))}getSuffix(e){const{suffix:o}=this;return typeof o=="function"?o(e):o}getFormattedValue(e){const{actual:o,committed:t,format:i}=this;return t!=null?i(t,e):o!=null?i(o,e):null}getRawDisplayValue(e){const{actual:o,committed:t,inputValue:i}=this;return i??(this.lockable&&t!=null?this.formatForInputMode(t,e):o!=null?this.formatForInputMode(o,e):null)}_parseInputAndSetActual(e){const{inputValue:o}=this;if(o==null||d(o))return this.setActual(null);const t=this.parse(o,e);t!=null?this.setActual(t):this.invalid=!0}_parseInputAndLock(e){const{inputValue:o,actual:t}=this;if(d(o))return this.unlock();if(o==null)return this.lock(t);const i=this.parse(o,e);i!=null?this.lock(i):this.invalid=!0}};function d(e){return e!=null&&e.trim()===""}n([r()],s.prototype,"actual",void 0),n([r()],s.prototype,"committed",null),n([r()],s.prototype,"dirty",null),n([r()],s.prototype,"format",void 0),n([r()],s.prototype,"formatForInputMode",void 0),n([r()],s.prototype,"lockable",void 0),n([r()],s.prototype,"locked",null),n([r()],s.prototype,"id",void 0),n([r()],s.prototype,"inputValue",void 0),n([r()],s.prototype,"name",void 0),n([r()],s.prototype,"parse",void 0),n([r()],s.prototype,"readOnly",void 0),n([r()],s.prototype,"suffix",void 0),n([r()],s.prototype,"title",void 0),n([r()],s.prototype,"visible",void 0),n([r()],s.prototype,"invalid",void 0),n([r()],s.prototype,"unlockOnVertexPlacement",void 0),s=n([f("esri.views.interactive.tooltip.fields.TooltipField")],s);let g=class extends s{constructor(o){super(o),this.showAsZ=!1}normalizeCtorArgs(o){const t=i=>i.inputUnitInfos.verticalLength.unit;return{name:"elevation",actual:U,parse:l({createQuantity:(i,a)=>k(i,t(a))}),format:(i,a)=>a.formatters.verticalLength(i),formatForInputMode:(i,a)=>a.formatters.scalar(m(i,t(a))),suffix:i=>i.inputUnitInfos.verticalLength.abbreviation,title:i=>i.messages.sketch[this.showAsZ?"z":"elevation"],unlockOnVertexPlacement:!1,...o}}};n([r()],g.prototype,"showAsZ",void 0),g=n([f("esri.views.interactive.tooltip.fields.TooltipFieldElevation")],g);let v=class extends s{constructor(e){super(e),this.precision=1}normalizeCtorArgs(e){const o=t=>t.inputUnitInfos.angle.unit;return{name:"orientation",actual:null,parse:l({createQuantity:(t,i)=>V(t,o(i),"geographic"),sanitize:F}),format:t=>{const i=w(t);return T(i,"geographic",this.precision)},formatForInputMode:(t,i)=>{const a=w(t);return i.formatters.scalar(a)},suffix:t=>t.inputUnitInfos.angle.abbreviation,title:t=>t.messages.sketch.orientation,...e}}};n([r()],v.prototype,"precision",void 0),v=n([f("esri.views.interactive.tooltip.fields.TooltipFieldOrientation")],v);let y=class extends s{constructor(e){super(e),this.precision=null}normalizeCtorArgs(e){const o=t=>t.inputUnitInfos.length.unit;return{name:"size",actual:null,parse:l({createQuantity:(t,i)=>k(t,o(i))}),format:(t,i)=>i.formatters.length(t),formatForInputMode:(t,i)=>i.formatters.scalar(m(t,o(i))),suffix:t=>t.inputUnitInfos.length.abbreviation,title:t=>t.messages.sketch.size,...e}}};n([r()],y.prototype,"precision",void 0),y=n([f("esri.views.interactive.tooltip.fields.TooltipFieldSize")],y);function ut(e){const o=i=>i.inputUnitInfos.angle.unit,t=i=>i.sketchOptions.values.effectiveDirectionMode;return new s({name:"direction",actual:b,parse:l({createQuantity:(i,a)=>V(i,o(a),"geographic"),sanitize:F}),format:(i,a)=>{const u=t(a),p=L(i,u);switch(u){case c.Absolute:return a.formatters.direction(p);case c.Relative:return a.formatters.directionRelative(p);case c.RelativeBilateral:return a.formatters.directionRelativeBilateral(p)}},formatForInputMode:(i,a)=>{const u=L(i,t(a));return a.formatters.scalar(m(u,o(a)))},suffix:i=>i.inputUnitInfos.angle.abbreviation,title:i=>{const a=t(i),{absolute:u,relative:p}=i.messages.sketch.direction;switch(a){case c.Absolute:return u;case c.Relative:case c.RelativeBilateral:return p}},...e})}function I(e){const o=t=>t.inputUnitInfos.length.unit;return new s({name:"distance",actual:U,parse:l({createQuantity:(t,i)=>k(Math.max(t,0),o(i))}),format:(t,i)=>i.formatters.length(t),formatForInputMode:(t,i)=>i.formatters.scalar(m(t,o(i))),suffix:t=>t.inputUnitInfos.length.abbreviation,title:t=>t.messages.sketch.distance,...e})}function ct(e){return I({format:(o,t)=>t.formatters.totalLength(o),title:o=>o.messages.sketch.totalLength,readOnly:!0,...e})}function pt(e){return I({...e})}function ht(e){const o=t=>t.inputUnitInfos.length.unit;return I({...e,parse:l({createQuantity:(t,i)=>k(t,o(i))}),format:(t,i)=>i.formatters.lengthRelative(t)})}function P(e){return new g(e)}function mt(e){return new v(e)}function ft(e){return new y(e)}function dt(e){return x("scale",{name:"scale",actual:null,parse:l({createQuantity:o=>h(Math.abs(o))}),...e})}function gt(e){const o=t=>t.inputUnitInfos.area.unit;return new s({name:"area",actual:_,parse:l({createQuantity:(t,i)=>M(t,o(i))}),format:(t,i)=>i.formatters.area(t),formatForInputMode:(t,i)=>i.formatters.scalar(m(t,o(i))),suffix:t=>t.inputUnitInfos.area.abbreviation,title:t=>t.messages.sketch.area,readOnly:!0,...e})}function S(e){return new s({name:"x",actual:b,parse:O,format:(o,t)=>t.formatters.longitudeDecimalDegrees(o),formatForInputMode:o=>Q(o),suffix:o=>o.inputUnitInfos.angle.abbreviation,title:o=>o.messages.sketch.longitude,...e})}function Z(e){return new s({name:"y",actual:b,parse:R,format:(o,t)=>t.formatters.latitudeDecimalDegrees(o),formatForInputMode:o=>z(o),suffix:o=>o.inputUnitInfos.angle.abbreviation,title:o=>o.messages.sketch.latitude,...e})}function N(e){return x("x",{name:"x",...e})}function E(e){return x("y",{name:"y",...e})}function x(e,o){return new s({actual:h(0),parse:l({createQuantity:t=>h(t)}),format:(t,i)=>i.formatters.scalar(t),formatForInputMode:(t,i)=>i.formatters.scalar(t),title:t=>t.messages.sketch[e],...o})}const vt=e=>{let o=class extends e{constructor(){super(...arguments),this.longitude=S(),this.latitude=Z(),this.x=N(),this.y=E(),this.elevation=P(),this.geographic=!1}get effectiveX(){return this.geographic?this.longitude:this.x}get effectiveY(){return this.geographic?this.latitude:this.y}get key(){return{longitude:this.longitude.actual,latitude:this.latitude.actual,x:this.x.actual,y:this.y.actual,elevation:this.elevation.actual,geographic:this.geographic}}setLocationFromPoint(t,i=t==null?void 0:t.spatialReference){if(this.geographic=!!i&&j(i),t==null)return this._setActualLonLat(null,null),void this._setActualXY(null,null);if(this.geographic){const a=C(t,H);this._setActualLonLat(A(a==null?void 0:a[0]),A(a==null?void 0:a[1]))}else this._setActualXY(h(t.x),h(t.y))}_setActualLonLat(t,i){this.longitude.actual=t,this.latitude.actual=i}_setActualXY(t,i){this.x.actual=t,this.y.actual=i}};return n([r()],o.prototype,"geographic",void 0),n([r()],o.prototype,"effectiveX",null),n([r()],o.prototype,"effectiveY",null),n([r()],o.prototype,"key",null),o=n([f("esri.views.interactive.tooltip.infos.TooltipInfoWithCoordinates")],o),o},H=[0,0];function J(e,o,t=$()){{const i=Y(e);return i??X(e,t)}}function yt(e,o=$()){return J(e,"on-the-ground",o)}export{pt as F,gt as Q,dt as R,vt as h,ft as j,mt as k,yt as u,ct as w,ht as x,ut as y};