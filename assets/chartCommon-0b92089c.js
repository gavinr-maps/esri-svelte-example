import{J as S,K as X,R as H,p as D,l as b,t as w,X as s,A as P,v as T,z as M,U as f}from"./Popup-c895845f.js";import{u as he,Y as le}from"./Popup-c895845f.js";import{n as x,o as R}from"./Button-d0430561.js";import{s as me}from"./ColorSet-c52cf8cf.js";import"./index-e8c6bcc0.js";import"./throttle-7bf02de9.js";import"./ByteSizeUnit-d4757d40.js";import"./AttachmentInfo-a3b0fc63.js";import"./AttachmentQuery-35d4fb4f.js";import"./widget-eb9d71ed.js";import"./ColorStop-3149a864.js";import"./utils-6059fcf1.js";import"./parser-c8281db0.js";import"./utils-bd9a7a79.js";import"./LRUCache-3922d825.js";import"./jsonUtils-f94670aa.js";import"./UniqueValueRenderer-6847f026.js";import"./LegendOptions-0ffe455e.js";import"./diffUtils-f8f9fc73.js";import"./SizeVariable-dc6fe734.js";import"./colorRamps-7c0167a8.js";import"./lengthUtils-b9fae671.js";import"./featureFlags-bf3d5654.js";import"./styleUtils-d6218d7e.js";import"./DictionaryLoader-67262ed1.js";import"./Version-651090e3.js";import"./FieldsIndex-888b8bd2.js";import"./heatmapUtils-ee8bc01a.js";import"./vec4f64-aa64c7e9.js";import"./Query-ce383482.js";import"./Field-fadcb771.js";import"./fieldType-a79b2e2e.js";import"./executeQueryJSON-5cf36760.js";import"./utils-c9a76eea.js";import"./query-0796d492.js";import"./normalizeUtils-f64efc29.js";import"./normalizeUtilsCommon-123fc71f.js";import"./pbfQueryUtils-a8ac8764.js";import"./pbf-2b43d9bb.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-c236a6ea.js";import"./FeatureSet-72ed3e08.js";import"./featureConversionUtils-096a49d9.js";import"./RelationshipQuery-5b5a1cfb.js";import"./TopFeaturesQuery-1a582382.js";import"./FeatureLayer-6a49528b.js";import"./MultiOriginJSONSupport-476ea916.js";import"./LabelClass-669bcee9.js";import"./labelUtils-98630c63.js";import"./defaultsJSON-b087dd4d.js";import"./FeatureLayerBase-f34fe56d.js";import"./commonProperties-a06e23a3.js";import"./ElevationInfo-9f2bd050.js";import"./featureLayerUtils-07676dd2.js";import"./serviceCapabilitiesUtils-722af797.js";import"./editsZScale-b2a6d781.js";import"./APIKeyMixin-9f78a4f2.js";import"./ArcGISService-a51cd6d5.js";import"./BlendLayer-63dc08ea.js";import"./jsonUtils-45b2dffb.js";import"./CustomParametersMixin-518863ba.js";import"./EditBusLayer-d52c85d8.js";import"./FeatureEffectLayer-6c255e54.js";import"./FeatureEffect-70b2b2ed.js";import"./FeatureReductionLayer-2ee74cd2.js";import"./clusterUtils-a6986c79.js";import"./OperationalLayer-6d8023bf.js";import"./OrderedLayer-38737c5b.js";import"./PortalLayer-9295b91f.js";import"./portalItemUtils-9c4b4c29.js";import"./RefreshableLayer-4a8676fc.js";import"./ScaleRangeLayer-4cc0b1db.js";import"./TemporalLayer-0500715a.js";import"./FeatureTemplate-1e31fa32.js";import"./FeatureType-f32ea6a9.js";import"./fieldProperties-0a0dca54.js";import"./labelingInfo-98c89153.js";import"./versionUtils-4823e346.js";import"./styleUtils-1146cb85.js";import"./popupUtils-b796c605.js";class _ extends S{constructor(){super(...arguments),Object.defineProperty(this,"thumb",{enumerable:!0,configurable:!0,writable:!0,value:this._makeThumb()}),Object.defineProperty(this,"startGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"endGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"_thumbBusy",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_startDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_endDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_thumbDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_gripDown",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}_addOrientationClass(){this._settings.themeTags=X(this._settings.themeTags,["scrollbar",this._settings.orientation]),this._settings.background||(this._settings.background=x.new(this._root,{themeTags:X(this._settings.themeTags,["main","background"])}))}_makeButton(){return this.children.push(R.new(this._root,{themeTags:["resize","button",this.get("orientation")],icon:H.new(this._root,{themeTags:["icon"]})}))}_makeThumb(){return this.children.push(x.new(this._root,{themeTags:["thumb",this.get("orientation")]}))}_handleAnimation(i){i&&this._disposers.push(i.events.on("stopped",()=>{this.setPrivateRaw("isBusy",!1),this._thumbBusy=!1}))}_afterNew(){this._addOrientationClass(),super._afterNew();const i=this.startGrip,r=this.endGrip,n=this.thumb,o=this.get("background");o&&this._disposers.push(o.events.on("click",a=>{this.setPrivateRaw("isBusy",!0);const h=this._display.toLocal(a.point),l=this.width(),m=this.height(),p=this.get("orientation");let d,u,g;d=p=="vertical"?(h.y-n.height()/2)/m:(h.x-n.width()/2)/l,p=="vertical"?(u=d*m,g="y"):(u=d*l,g="x");const c=this.get("animationDuration",0);c>0?(this._thumbBusy=!0,this._handleAnimation(this.thumb.animate({key:g,to:u,duration:c,easing:this.get("animationEasing")}))):(this.thumb.set(g,u),this._root.events.once("frameended",()=>{this.setPrivateRaw("isBusy",!1)}))})),this._disposers.push(n.events.on("dblclick",a=>{if(!D(a.originalEvent,this))return;const h=this.get("animationDuration",0),l=this.get("animationEasing");this.animate({key:"start",to:0,duration:h,easing:l}),this.animate({key:"end",to:1,duration:h,easing:l})})),this._disposers.push(i.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._startDown=!0,this._gripDown="start"})),this._disposers.push(r.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._endDown=!0,this._gripDown="end"})),this._disposers.push(n.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._thumbDown=!0,this._gripDown=void 0})),this._disposers.push(i.events.on("globalpointerup",()=>{this._startDown&&this.setPrivateRaw("isBusy",!1),this._startDown=!1})),this._disposers.push(r.events.on("globalpointerup",()=>{this._endDown&&this.setPrivateRaw("isBusy",!1),this._endDown=!1})),this._disposers.push(n.events.on("globalpointerup",()=>{this._thumbDown&&this.setPrivateRaw("isBusy",!1),this._thumbDown=!1})),this._disposers.push(i.on("x",()=>{this._updateThumb()})),this._disposers.push(r.on("x",()=>{this._updateThumb()})),this._disposers.push(i.on("y",()=>{this._updateThumb()})),this._disposers.push(r.on("y",()=>{this._updateThumb()})),this._disposers.push(n.events.on("positionchanged",()=>{this._updateGripsByThumb()})),this.get("orientation")=="vertical"?(i.set("x",0),r.set("x",0),this._disposers.push(n.adapters.add("y",a=>Math.max(Math.min(Number(a),this.height()-n.height()),0))),this._disposers.push(n.adapters.add("x",a=>this.width()/2)),this._disposers.push(i.adapters.add("x",a=>this.width()/2)),this._disposers.push(r.adapters.add("x",a=>this.width()/2)),this._disposers.push(i.adapters.add("y",a=>Math.max(Math.min(Number(a),this.height()),0))),this._disposers.push(r.adapters.add("y",a=>Math.max(Math.min(Number(a),this.height()),0)))):(i.set("y",0),r.set("y",0),this._disposers.push(n.adapters.add("x",a=>Math.max(Math.min(Number(a),this.width()-n.width()),0))),this._disposers.push(n.adapters.add("y",a=>this.height()/2)),this._disposers.push(i.adapters.add("y",a=>this.height()/2)),this._disposers.push(r.adapters.add("y",a=>this.height()/2)),this._disposers.push(i.adapters.add("x",a=>Math.max(Math.min(Number(a),this.width()),0))),this._disposers.push(r.adapters.add("x",a=>Math.max(Math.min(Number(a),this.width()),0))))}_updateChildren(){super._updateChildren(),(this.isDirty("end")||this.isDirty("start")||this._sizeDirty)&&this.updateGrips()}_changed(){if(super._changed(),this.isDirty("start")||this.isDirty("end")){const i="rangechanged";this.events.isEnabled(i)&&this.events.dispatch(i,{type:i,target:this,start:this.get("start",0),end:this.get("end",1),grip:this._gripDown})}}updateGrips(){const i=this.startGrip,r=this.endGrip,n=this.get("orientation"),o=this.height(),a=this.width();n=="vertical"?(i.set("y",o*this.get("start",0)),r.set("y",o*this.get("end",1))):(i.set("x",a*this.get("start",0)),r.set("x",a*this.get("end",1)));const h=this.getPrivate("positionTextFunction"),l=Math.round(100*this.get("start",0)),m=Math.round(100*this.get("end",0));let p,d;h?(p=h.call(this,this.get("start",0)),d=h.call(this,this.get("end",0))):(p=l+"%",d=m+"%"),i.set("ariaLabel",this._t("From %1",void 0,p)),i.set("ariaValueNow",""+l),i.set("ariaValueText",l+"%"),i.set("ariaValueMin","0"),i.set("ariaValueMax","100"),r.set("ariaLabel",this._t("To %1",void 0,d)),r.set("ariaValueNow",""+m),r.set("ariaValueText",m+"%"),r.set("ariaValueMin","0"),r.set("ariaValueMax","100")}_updateThumb(){const i=this.thumb,r=this.startGrip,n=this.endGrip,o=this.height(),a=this.width();let h=r.x(),l=n.x(),m=r.y(),p=n.y(),d=0,u=1;this.get("orientation")=="vertical"?b(m)&&b(p)&&(this._thumbBusy||i.isDragging()||(i.set("height",p-m),i.set("y",m)),d=m/o,u=p/o):b(h)&&b(l)&&(this._thumbBusy||i.isDragging()||(i.set("width",l-h),i.set("x",h)),d=h/a,u=l/a),!this.getPrivate("isBusy")||this.get("start")==d&&this.get("end")==u||(this.set("start",d),this.set("end",u));const g=this.getPrivate("positionTextFunction"),c=Math.round(100*this.get("start",0)),L=Math.round(100*this.get("end",0));let v,y;g?(v=g.call(this,this.get("start",0)),y=g.call(this,this.get("end",0))):(v=c+"%",y=L+"%"),i.set("ariaLabel",this._t("From %1 to %2",void 0,v,y)),i.set("ariaValueNow",""+c),i.set("ariaValueText",c+"%")}_updateGripsByThumb(){const i=this.thumb,r=this.startGrip,n=this.endGrip;if(this.get("orientation")=="vertical"){const o=i.height();r.set("y",i.y()),n.set("y",i.y()+o)}else{const o=i.width();r.set("x",i.x()),n.set("x",i.x()+o)}}}Object.defineProperty(_,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Scrollbar"}),Object.defineProperty(_,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.classNames.concat([_.className])});const se=class extends w{setupDefaultRules(){super.setupDefaultRules(),this.rule("Component").setAll({interpolationDuration:600}),this.rule("Hierarchy").set("animationDuration",600),this.rule("Scrollbar").set("animationDuration",600),this.rule("Tooltip").set("animationDuration",300),this.rule("MapChart").set("animationDuration",1e3),this.rule("MapChart").set("wheelDuration",300),this.rule("Entity").setAll({stateAnimationDuration:600}),this.rule("Sprite").states.create("default",{stateAnimationDuration:600}),this.rule("Tooltip",["axis"]).setAll({animationDuration:200}),this.rule("WordCloud").set("animationDuration",500)}},ae=class extends w{setupDefaultRules(){super.setupDefaultRules(),this.rule("InterfaceColors").setAll({stroke:s.fromHex(0),fill:s.fromHex(2829099),primaryButton:s.lighten(s.fromHex(6788316),-.2),primaryButtonHover:s.lighten(s.fromHex(6779356),-.2),primaryButtonDown:s.lighten(s.fromHex(6872181),-.2),primaryButtonActive:s.lighten(s.fromHex(6872182),-.2),primaryButtonText:s.fromHex(16777215),primaryButtonStroke:s.lighten(s.fromHex(6788316),-.2),secondaryButton:s.fromHex(3881787),secondaryButtonHover:s.lighten(s.fromHex(3881787),.1),secondaryButtonDown:s.lighten(s.fromHex(3881787),.15),secondaryButtonActive:s.lighten(s.fromHex(3881787),.2),secondaryButtonText:s.fromHex(12303291),secondaryButtonStroke:s.lighten(s.fromHex(3881787),-.2),grid:s.fromHex(12303291),background:s.fromHex(0),alternativeBackground:s.fromHex(16777215),text:s.fromHex(16777215),alternativeText:s.fromHex(0),disabled:s.fromHex(11382189),positive:s.fromHex(5288704),negative:s.fromHex(11730944)})}};let e=class extends w{constructor(){super(...arguments),Object.defineProperty(this,"responsiveRules",{enumerable:!0,configurable:!0,writable:!0,value:[]})}static widthXXS(t,i){return t<=e.XXS}static widthXS(t,i){return t<=e.XS}static widthS(t,i){return t<=e.S}static widthM(t,i){return t<=e.M}static widthL(t,i){return t<=e.L}static widthXL(t,i){return t<=e.XL}static widthXXL(t,i){return t<=e.XXL}static heightXXS(t,i){return i<=e.XXS}static heightXS(t,i){return i<=e.XS}static heightS(t,i){return i<=e.S}static heightM(t,i){return i<=e.M}static heightL(t,i){return i<=e.L}static heightXL(t,i){return i<=e.XL}static heightXXL(t,i){return i<=e.XXL}static isXXS(t,i){return t<=e.XXS&&i<=e.XXS}static isXS(t,i){return t<=e.XS&&i<=e.XS}static isS(t,i){return t<=e.S&&i<=e.S}static isM(t,i){return t<=e.M&&i<=e.M}static isL(t,i){return t<=e.L&&i<=e.L}static isXL(t,i){return t<=e.XL&&i<=e.XL}static isXXL(t,i){return t<=e.XXL&&i<=e.XXL}static maybeXXS(t,i){return t<=e.XXS||i<=e.XXS}static maybeXS(t,i){return t<=e.XS||i<=e.XS}static maybeS(t,i){return t<=e.S||i<=e.S}static maybeM(t,i){return t<=e.M||i<=e.M}static maybeL(t,i){return t<=e.L||i<=e.L}static maybeXL(t,i){return t<=e.XL||i<=e.XL}static maybeXXL(t,i){return t<=e.XXL||i<=e.XXL}static newEmpty(t){return new this(t,!0)}addRule(t){return t.name&&!t.template&&(t.template=this.rule(t.name,t.tags)),t._dp=new P([this._root._rootContainer.onPrivate("width",i=>{this._isUsed()&&this._applyRule(t)}),this._root._rootContainer.onPrivate("height",i=>{this._isUsed()&&this._applyRule(t)})]),this.responsiveRules.push(t),this._applyRule(t),t}removeRule(t){T(this.responsiveRules,t),t._dp&&t._dp.dispose()}_isUsed(){return this._root._rootContainer.get("themes").indexOf(this)!==-1}_applyRule(t){const i=this._root._rootContainer.getPrivate("width"),r=this._root._rootContainer.getPrivate("height"),n=t.relevant.call(t,i,r),o=t.applied;n?o||(t.applied=!0,t.template&&t.settings&&t.template.setAll(t.settings),t.applying&&t.applying.call(t)):o&&(t.applied=!1,t.template&&t.template.removeAll(),t.removing&&t.removing.call(t))}setupDefaultRules(){super.setupDefaultRules();const t=i=>this.addRule(i);t({name:"Chart",relevant:e.widthXXS,settings:{paddingLeft:0,paddingRight:0}}),t({name:"Chart",relevant:e.heightXXS,settings:{paddingTop:0,paddingBottom:0}}),t({name:"Bullet",relevant:e.isXS,settings:{forceHidden:!0}}),t({name:"Legend",relevant:e.isXS,settings:{forceHidden:!0}}),t({name:"HeatLegend",tags:["vertical"],relevant:e.widthXS,settings:{forceHidden:!0}}),t({name:"HeatLegend",tags:["horizontal"],relevant:e.heightXS,settings:{forceHidden:!0}}),t({name:"Label",tags:["heatlegend","start"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Label",tags:["heatlegend","end"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Button",tags:["resize"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"AxisRendererX",relevant:e.heightXS,settings:{inside:!0}}),t({name:"AxisRendererY",relevant:e.widthXS,settings:{inside:!0}}),t({name:"AxisRendererXLabel",relevant:e.heightXS,settings:{minPosition:.1,maxPosition:.9}}),t({name:"AxisLabel",tags:["y"],relevant:e.widthXS,settings:{centerY:M,maxPosition:.9}}),t({name:"AxisLabel",tags:["x"],relevant:e.heightXXS,settings:{forceHidden:!0}}),t({name:"AxisLabel",tags:["y"],relevant:e.widthXXS,settings:{forceHidden:!0}}),t({name:"AxisTick",tags:["x"],relevant:e.heightXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),t({name:"AxisTick",tags:["y"],relevant:e.widthXXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),t({name:"Grid",relevant:e.maybeXXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["radial"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["circular"],relevant:e.maybeS,settings:{inside:!0}}),t({name:"AxisTick",relevant:e.maybeS,settings:{inside:!0}}),t({name:"RadialLabel",tags:["circular"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"AxisTick",tags:["circular"],relevant:e.maybeXS,settings:{inside:!0}}),t({name:"PieChart",relevant:e.maybeXS,settings:{radius:f(99)}}),t({name:"PieChart",relevant:e.widthM,settings:{radius:f(99)}}),t({name:"RadialLabel",tags:["pie"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["pie"],relevant:e.widthM,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pie"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pie"],relevant:e.widthM,settings:{forceHidden:!0}}),t({name:"FunnelSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["funnel","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["funnel","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["funnel","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["funnel","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"PyramidSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["pyramid","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pyramid","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["pyramid","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pyramid","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"PictorialStackedSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["pictorial","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pictorial","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["pictorial","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pictorial","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Label",tags:["flow","horizontal"],relevant:e.widthS,settings:{forceHidden:!0}}),t({name:"Label",tags:["flow","vertical"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Chord",relevant:e.maybeXS,settings:{radius:f(99)}}),t({name:"Label",tags:["hierarchy","node"],relevant:e.maybeXS,settings:{forceHidden:!0}})}};Object.defineProperty(e,"XXS",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(e,"XS",{enumerable:!0,configurable:!0,writable:!0,value:200}),Object.defineProperty(e,"S",{enumerable:!0,configurable:!0,writable:!0,value:300}),Object.defineProperty(e,"M",{enumerable:!0,configurable:!0,writable:!0,value:400}),Object.defineProperty(e,"L",{enumerable:!0,configurable:!0,writable:!0,value:600}),Object.defineProperty(e,"XL",{enumerable:!0,configurable:!0,writable:!0,value:800}),Object.defineProperty(e,"XXL",{enumerable:!0,configurable:!0,writable:!0,value:1e3});const re=e;export{se as AnimatedThemeAm5,me as ColorSetAm5,ae as DarkThemeAm5,re as ResponsiveThemeAm5,_ as ScrollbarAm5,w as ThemeAm5,he as TooltipAm5,le as colorAm5};
