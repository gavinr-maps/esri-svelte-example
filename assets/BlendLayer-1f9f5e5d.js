import{f as r,g as t,j as n}from"./index-27db053b.js";import{n as a,a as s}from"./jsonUtils-94e6a40e.js";const o={read:{reader:a},write:{allowNull:!0,writer:s}},u=i=>{let e=class extends i{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return r([t({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],e.prototype,"blendMode",void 0),r([t({json:{read:!1,write:!1,origins:{"web-map":o,"portal-item":o}}})],e.prototype,"effect",void 0),e=r([n("esri.layers.mixins.BlendLayer")],e),e};export{u as a};
