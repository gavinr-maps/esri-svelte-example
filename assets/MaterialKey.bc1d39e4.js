var t=Object.defineProperty,e=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(e,i,s)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,o=(t,e)=>{for(var i in e||(e={}))a.call(e,i)&&n(t,i,e[i]);if(s)for(var i of s(e))r.call(e,i)&&n(t,i,e[i]);return t},v=(t,s)=>e(t,i(s));import{q as h}from"./vendor.5b1a85aa.js";import{E as l,A as u,b as S}from"./Utils.e2f03d29.js";function c(t){switch(t){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}function d(t,e,i,s,a){switch(t){case l.FILL:return T.from(e,s);case l.LINE:return L.from(e,i);case l.MARKER:return m.from(e);case l.TEXT:return b.from(e);case l.LABEL:return f.from(e,a);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function p(t){switch(V.load(t).geometryType){case l.MARKER:return new m(t);case l.FILL:return new T(t);case l.LINE:return new L(t);case l.TEXT:return new b(t);case l.LABEL:return new f(t)}}class V{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(t){this.setBits(t,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(t){this.setBit(20,t)}get sdf(){return!!this.bit(11)}set sdf(t){this.setBit(11,t)}get pattern(){return!!this.bit(12)}set pattern(t){this.setBit(12,t)}get textureBinding(){return this.bits(0,8)}set textureBinding(t){this.setBits(t,0,8)}get geometryTypeString(){switch(this.geometryType){case l.FILL:return"fill";case l.MARKER:return"marker";case l.LINE:return"line";case l.TEXT:return"text";case l.LABEL:return"label";default:throw new h(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i}bit(t){return(this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,a=0;s<i;s++,a++)this.setBit(s,0!=(t&1<<a))}bits(t,e){let i=0;for(let s=t,a=0;s<e;s++,a++)i|=this.bit(s)<<a;return i}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}V.shared=new V(0);const g=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(t){this.setBit(16,t)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(t){this.setBit(17,t)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(t){this.setBit(18,t)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(t){this.setBit(19,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const i=function(t,e=!1){const i=u.SIZE_FIELD_STOPS|u.SIZE_MINMAX_VALUE|u.SIZE_SCALE_STOPS|u.SIZE_UNIT_VALUE,s=(t&(S.FIELD_TARGETS_OUTLINE|S.MINMAX_TARGETS_OUTLINE|S.SCALE_TARGETS_OUTLINE|S.UNIT_TARGETS_OUTLINE))>>>4;return e?i&s:i&~s}(t,e)&t;this.vvSizeMinMaxValue=!!(i&u.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(i&u.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(i&u.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(i&u.SIZE_SCALE_STOPS)}},y=t=>class extends t{get vvRotation(){return 0!==this.bit(15)}set vvRotation(t){this.setBit(15,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e&&!!(t&u.ROTATION)}},z=t=>class extends t{get vvColor(){return 0!==this.bit(13)}set vvColor(t){this.setBit(13,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e&&!!(t&u.COLOR)}},E=t=>class extends t{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(t){this.setBit(14,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e&&!!(t&u.OPACITY)}};class T extends(z(E(V))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=l.FILL,e?i.dotDensity=!0:i.setVV(t,!1),i.data}getVariation(){return v(o({},super.getVariation()),{dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity})}get dotDensity(){return!!this.bit(15)}set dotDensity(t){this.setBit(15,t)}}T.shared=new T(0);class m extends(z(E(y(g(V))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=l.MARKER,e.setVV(t,!1),e.data}getVariation(){return v(o({},super.getVariation()),{vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}m.shared=new m(0);class L extends(z(E(g(V)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=l.LINE,i.setVV(t,e),i.data}getVariation(){return v(o({},super.getVariation()),{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}L.shared=new L(0);class b extends(z(E(y(g(V))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(t);return e.geometryType=l.TEXT,e.setVV(t,!1),e.data}getVariation(){return v(o({},super.getVariation()),{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}b.shared=new b(0);class f extends(g(V)){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=l.LABEL,i.setVV(t,!1),i.mapAligned=c(e),i.data}getVariation(){return v(o({},super.getVariation()),{vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}f.shared=new f(0);export{d as A,T as C,b as F,f as N,V as _,L as b,c as e,p as f,m as w};
