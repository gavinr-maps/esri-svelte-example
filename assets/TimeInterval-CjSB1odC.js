import{e as s}from"./Evented-CXIxDjmW.js";import{i as t}from"./Clonable-cKbRam6-.js";import{f as o}from"./assets-C2mb-ea2.js";import{m as r}from"./timeUtils-DQR2jUPL.js";import{y as n,b as m}from"./subclass-BR3PhgZG.js";import{o as l}from"./enumeration--HlxOQ_N.js";import{i as a}from"./jsonMap-DCC6W5ex.js";const u=a()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});let i=class extends t(o){constructor(e){super(e),this.unit="milliseconds",this.value=0}toMilliseconds(){return r(this.value,this.unit,"milliseconds")}};s([l(u,{nonNullable:!0})],i.prototype,"unit",void 0),s([n({type:Number,json:{write:!0},nonNullable:!0})],i.prototype,"value",void 0),i=s([m("esri.TimeInterval")],i);const v=i;export{u as e,v as l};
