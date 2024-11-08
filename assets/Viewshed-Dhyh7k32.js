import{r as t}from"./tslib.es6-B3Jf3DVX.js";import"./geometry-D964gYQX.js";import{c as o,b as s}from"./featureReferenceUtils-DBGXy8CW.js";import{l as a}from"./Clonable-D3rtuBWg.js";import{a as l}from"./Cyclical-oTUX3aX7.js";import{u as n}from"./assets-C43MgM-v.js";import{H as p}from"./Accessor-BLX9ikPh.js";import{m as r,T as m,a as d}from"./subclass-BZA_h8Db.js";import{s as u}from"./cast-Bjksrh93.js";import{j as f}from"./Point-Cg0-ChZE.js";let i=class extends n(a){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return p(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&o(this.feature,e.feature)}};t([r({type:f,json:{write:!0}})],i.prototype,"observer",void 0),t([r({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],i.prototype,"farDistance",void 0),t([r({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),u(e=>l.normalize(m(e),void 0,!0))],i.prototype,"heading",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],i.prototype,"tilt",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],i.prototype,"horizontalFieldOfView",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],i.prototype,"verticalFieldOfView",void 0),t([r(s)],i.prototype,"feature",void 0),t([r({json:{read:!1}})],i.prototype,"isValid",null),i=t([d("esri.analysis.Viewshed")],i);const F=i;export{F as d};
