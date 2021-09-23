import{ab as e,ac as t,ad as o,cu as i,fJ as s,bC as r,cy as n,fW as p,d0 as l,d2 as a,d7 as y,ax as u,i$ as d,hi as h,hD as c}from"./vendor.d0a39f0f.js";let v=class extends i{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};e([t({type:Boolean,json:{write:!0}})],v.prototype,"enabled",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"label",void 0),e([t({type:[Number],json:{write:!0}})],v.prototype,"normal",void 0),e([t({type:[Number],json:{write:!0}})],v.prototype,"point",void 0),v=e([o("esri.layers.support.VoxelSlice")],v);var w=v;let m=class extends i{constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=null,this.variableId=null}};e([t({type:Boolean,json:{default:!0,write:!0}})],m.prototype,"enabled",void 0),e([t({type:String,json:{write:!0}})],m.prototype,"href",void 0),e([t({type:s,json:{write:!0}})],m.prototype,"id",void 0),e([t({type:String,json:{write:!0}})],m.prototype,"label",void 0),e([t({type:[Number],json:{write:!0}})],m.prototype,"normal",void 0),e([t({type:[Number],json:{write:!0}})],m.prototype,"point",void 0),e([t({type:[s],json:{write:!0}})],m.prototype,"sizeInPixel",void 0),e([t({type:[w],json:{write:!0}})],m.prototype,"slices",void 0),e([t({type:s,json:{write:!0}})],m.prototype,"timeId",void 0),e([t({type:s,json:{write:!0}})],m.prototype,"variableId",void 0),m=e([o("esri.layers.support.VoxelSection")],m);var b=m;let j=class extends i{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};e([t({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],j.prototype,"diffuseFactor",void 0),e([t({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],j.prototype,"specularFactor",void 0),j=e([o("esri.layers.support.VoxelSimpleShading")],j);var S=j;let g=class extends i{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=""}};e([t({type:r,json:{type:[s],write:!0}})],g.prototype,"color",void 0),e([t({type:Number,json:{write:!0}})],g.prototype,"value",void 0),e([t({type:Boolean,json:{default:!0,write:!0}})],g.prototype,"enabled",void 0),e([t({type:String,json:{write:!0}})],g.prototype,"label",void 0),g=e([o("esri.layers.support.VoxelIsosurface")],g);var f=g;let x=class extends i{constructor(){super(...arguments),this.alpha=null,this.position=null}};e([t({type:Number,json:{write:!0}})],x.prototype,"alpha",void 0),e([t({type:Number,json:{write:!0}})],x.prototype,"position",void 0),x=e([o("esri.layers.support.VoxelAlphaStop")],x);var V=x;let N=class extends i{constructor(){super(...arguments),this.color=null,this.position=null}};e([t({type:r,json:{type:[s],write:!0}})],N.prototype,"color",void 0),e([t({type:Number,json:{write:!0}})],N.prototype,"position",void 0),N=e([o("esri.layers.support.VoxelColorStop")],N);var T=N;let z=class extends i{constructor(){super(...arguments),this.enabled=!1,this.range=null}};e([t({type:Boolean,json:{default:!1,write:!0}})],z.prototype,"enabled",void 0),e([t({type:[Number],json:{write:!0}})],z.prototype,"range",void 0),z=e([o("esri.layers.support.VoxelRangeFilter")],z);var I=z;let _=class extends i{constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this.colorStops=new n,this.alphaStops=new n}set colorStops(e){this._set("colorStops",p(e,this._get("colorStops"),n.ofType(T)))}set alphaStops(e){this._set("alphaStops",p(e,this._get("alphaStops"),n.ofType(V)))}};e([t({type:["linear","nearest"],json:{write:!0}})],_.prototype,"interpolation",void 0),e([t({type:[Number],json:{write:!0}})],_.prototype,"stretchRange",void 0),e([t({type:n.ofType(T),json:{write:!0}})],_.prototype,"colorStops",null),e([t({type:n.ofType(V),json:{write:!0}})],_.prototype,"alphaStops",null),e([t({type:I,json:{write:!0}})],_.prototype,"rangeFilter",void 0),_=e([o("esri.layers.support.VoxelTransferFunctionStyle")],_);var D=_;let F=class extends i{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=null}};e([t({type:r,json:{type:[s],write:!0}})],F.prototype,"color",void 0),e([t({type:s,json:{write:!0}})],F.prototype,"value",void 0),e([t({type:Boolean,json:{default:!0,write:!0}})],F.prototype,"enabled",void 0),e([t({type:String,json:{write:!0}})],F.prototype,"label",void 0),F=e([o("esri.layers.support.VoxelUniqueValue")],F);var B=F;let L=class extends i{constructor(e){super(e),this.variableId=null,this.label=null,this.transferFunction=null,this.uniqueValues=new n,this.isosurfaces=new n}set uniqueValues(e){this._set("uniqueValues",p(e,this._get("uniqueValues"),n.ofType(B)))}set isosurfaces(e){this._set("isosurfaces",p(e,this._get("isosurfaces"),n.ofType(f)))}};e([t({type:s,json:{write:!0}})],L.prototype,"variableId",void 0),e([t({type:String,json:{write:!0}})],L.prototype,"label",void 0),e([t({type:D,json:{write:!0}})],L.prototype,"transferFunction",void 0),e([t({type:n.ofType(B),json:{write:!0}})],L.prototype,"uniqueValues",null),e([t({type:n.ofType(f),json:{write:!0}})],L.prototype,"isosurfaces",null),L=e([o("esri.layers.support.VoxelVariableStyle")],L);var q=L;let A=class extends i{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};e([t({type:Boolean,json:{default:!0,write:!0}})],A.prototype,"enabled",void 0),e([t({type:String,json:{write:!0}})],A.prototype,"label",void 0),e([t({type:[Number],json:{write:!0}})],A.prototype,"normal",void 0),e([t({type:[Number],json:{write:!0}})],A.prototype,"point",void 0),A=e([o("esri.layers.support.VoxelDynamicSection")],A);var k=A;let W=class extends i{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.currentTimeId=null,this.slices=new n,this.dynamicSections=new n}set slices(e){this._set("slices",p(e,this._get("slices"),n.ofType(w)))}set dynamicSections(e){this._set("dynamicSections",p(e,this._get("dynamicSections"),n.ofType(k)))}};e([t({type:s,json:{default:0,write:!0}})],W.prototype,"volumeId",void 0),e([t({type:Number,json:{default:1,write:!0}})],W.prototype,"verticalExaggeration",void 0),e([t({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],W.prototype,"exaggerationMode",void 0),e([t({type:Number,json:{default:0,write:!0}})],W.prototype,"verticalOffset",void 0),e([t({type:s,json:{read:!1}})],W.prototype,"currentTimeId",void 0),e([t({type:n.ofType(w),json:{write:!0}})],W.prototype,"slices",null),e([t({type:n.ofType(k),json:{write:!0}})],W.prototype,"dynamicSections",null),W=e([o("esri.layers.support.VoxelVolumeStyle")],W);var E=W;let R=class extends i{constructor(e){super(e),this.currentVariableId=-1,this.renderMode="volume",this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=null,this.volumeStyles=new n,this.variableStyles=new n}set volumeStyles(e){this._set("volumeStyles",p(e,this._get("volumeStyles"),n.ofType(E)))}set variableStyles(e){this._set("variableStyles",p(e,this._get("variableStyles"),n.ofType(q)))}};e([t({type:n.ofType(E),json:{write:!0}})],R.prototype,"volumeStyles",null),e([t({type:s,json:{write:{enabled:!0,isRequired:!0}}})],R.prototype,"currentVariableId",void 0),e([t({type:["volume","surfaces"],json:{write:!0}})],R.prototype,"renderMode",void 0),e([t({type:n.ofType(q),json:{write:!0}})],R.prototype,"variableStyles",null),e([t({type:Boolean,json:{write:!0}})],R.prototype,"enableSlices",void 0),e([t({type:Boolean,json:{write:!0}})],R.prototype,"enableSections",void 0),e([t({type:Boolean,json:{write:!0}})],R.prototype,"enableDynamicSections",void 0),e([t({type:Boolean,json:{write:!0}})],R.prototype,"enableIsosurfaces",void 0),e([t({type:S,json:{write:!0}})],R.prototype,"shading",void 0),R=e([o("esri.layers.support.VoxelStyle")],R);var M=R;let O=class extends i{constructor(){super(...arguments),this.continuity=null,this.hasNoData=null,this.noData=null,this.offset=null,this.scale=null,this.type=null}};e([t({type:String,json:{write:!0}})],O.prototype,"continuity",void 0),e([t({type:Boolean,json:{write:!0}})],O.prototype,"hasNoData",void 0),e([t({type:Number,json:{write:!0}})],O.prototype,"noData",void 0),e([t({type:Number,json:{write:!0}})],O.prototype,"offset",void 0),e([t({type:Number,json:{write:!0}})],O.prototype,"scale",void 0),e([t({type:String,json:{write:!0}})],O.prototype,"type",void 0),O=e([o("esri.layers.support.VoxelFormat")],O);var P=O;let U=class extends i{constructor(){super(...arguments),this.description="",this.originalFormat=null,this.renderingFormat=null,this.unit=null,this.volumeId=0}};e([t({type:Number,json:{write:!0}})],U.prototype,"id",void 0),e([t({type:String,json:{write:!0}})],U.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],U.prototype,"name",void 0),e([t({type:P,json:{write:!0}})],U.prototype,"originalFormat",void 0),e([t({type:P,json:{write:!0}})],U.prototype,"renderingFormat",void 0),e([t({type:String,json:{write:!0}})],U.prototype,"unit",void 0),e([t({type:Number,json:{write:!0}})],U.prototype,"volumeId",void 0),U=e([o("esri.layers.support.VoxelVariable")],U);var C=U;let Z=class extends i{constructor(){super(...arguments),this.values=null}};e([t({type:[Number],json:{write:!0}})],Z.prototype,"values",void 0),Z=e([o("esri.layers.support.VoxelIrregularSpacing")],Z);var J=Z;let $=class extends i{constructor(){super(...arguments),this.scale=1,this.offset=0}};e([t({type:Number,json:{write:!0}})],$.prototype,"scale",void 0),e([t({type:Number,json:{write:!0}})],$.prototype,"offset",void 0),$=e([o("esri.layers.support.VoxelRegularSpacing")],$);var G=$;let H=class extends i{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=null,this.isWrappedDateLine=null,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}};e([t({type:J,json:{write:!0}})],H.prototype,"irregularSpacing",void 0),e([t({type:Boolean,json:{write:!0}})],H.prototype,"isPositiveUp",void 0),e([t({type:Boolean,json:{write:!0}})],H.prototype,"isWrappedDateLine",void 0),e([t({type:String,json:{write:!0}})],H.prototype,"label",void 0),e([t({type:String,json:{write:!0}})],H.prototype,"name",void 0),e([t({type:String,json:{write:!0}})],H.prototype,"quantity",void 0),e([t({type:G,json:{write:!0}})],H.prototype,"regularSpacing",void 0),e([t({type:Number,json:{write:!0}})],H.prototype,"size",void 0),e([t({type:String,json:{write:!0}})],H.prototype,"unit",void 0),H=e([o("esri.layers.support.VoxelDimension")],H);var K=H;let Q=class extends i{constructor(){super(...arguments),this.id=null,this.dimensions=null}getZDimension(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}isVolumeValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&4===this.dimensions.length&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&-1!==this.getZDimension()}};e([t({type:Number})],Q.prototype,"id",void 0),e([t({type:[K],json:{write:!0,origins:{service:{write:!1},"web-document":{write:!1},"portal-item":{write:!1}}}})],Q.prototype,"dimensions",void 0),Q=e([o("esri.layers.support.VoxelVolume")],Q);var X,Y=Q;let ee=X=class extends i{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new X;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&3===this.brickSize.length&&3===this.nodeSize.length&&32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]}};e([t({type:Number,json:{write:!0,read:!0}})],ee.prototype,"apronWidth",void 0),e([t({type:[Number],json:{write:!0,read:!0}})],ee.prototype,"brickSize",void 0),e([t({type:Number,json:{write:!0,read:!0}})],ee.prototype,"maxLodLevel",void 0),e([t({type:[Number],json:{write:!0,read:!0}})],ee.prototype,"nodeSize",void 0),ee=X=e([o("esri.layers.support.VoxelVolumeIndex")],ee);var te=ee;let oe=class extends(l(a(y))){constructor(e){super(e),this.serviceRoot="",this.popupEnabled=!0,this.itemId=null,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.url=null,this.sections=new n,this.style=null,this.opacity=1,this.variables=new n,this.volumes=new n,this.index=null,this.type="voxel",this.name=null,this._handles=new u}destroy(){this._handles=d(this._handles)}};e([t(h)],oe.prototype,"popupEnabled",void 0),e([t({type:String,json:{write:!0}})],oe.prototype,"itemId",void 0),e([t({type:["Voxel"]})],oe.prototype,"operationalLayerType",void 0),e([t(c)],oe.prototype,"legendEnabled",void 0),e([t({json:{write:!0}})],oe.prototype,"title",void 0),e([t({type:String,json:{write:!0}})],oe.prototype,"url",void 0),e([t({type:n.ofType(b),json:{write:!0,origins:{"web-scene":{name:"layerDefinition.sections",write:!0},service:{write:!1}}}})],oe.prototype,"sections",void 0),e([t({type:M,json:{write:!0,origins:{"web-scene":{name:"layerDefinition.style",write:!0},service:{write:!1}}}})],oe.prototype,"style",void 0),e([t({type:["show","hide"]})],oe.prototype,"listMode",void 0),e([t({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],oe.prototype,"opacity",void 0),e([t({type:n.ofType(C)})],oe.prototype,"variables",void 0),e([t({type:n.ofType(Y),json:{write:!1}})],oe.prototype,"volumes",void 0),e([t({type:te})],oe.prototype,"index",void 0),e([t({json:{read:!1},readOnly:!0})],oe.prototype,"type",void 0),e([t({readOnly:!0})],oe.prototype,"name",void 0),oe=e([o("esri.layers.VoxelLayer")],oe);var ie=oe;export{ie as default};
