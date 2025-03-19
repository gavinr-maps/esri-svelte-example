import{r as e,m as i,a as S}from"./Accessor-BHnuXKD2.js";import{b as I,q as j,E as w}from"./Graphic-CFXUQZlS.js";import{a as D}from"./Clonable-DvJsj5LF.js";import{S as O}from"./JSONSupport-CGdeqxpk.js";import{P as k,j as Z}from"./Polyline-BmuD2-ZN.js";import{w as Y,y as H,D as N,r as K,U as Q,h as tt,m as et,S as L,k as U,N as T,p as d,g as M,A as g,T as B,v as J}from"./networkEnums-n7t8Au-e.js";import{o as u,r as C}from"./writer-B2bQV2uU.js";import{j as z}from"./Point-XGrwlf63.js";import{r as A}from"./enumeration-Cr5WIZs4.js";let p=class extends D.ClonableMixin(O){constructor(r){super(r),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}readId(r,a){return a.id??a.itemId??null}readRestrictionAttributes(r,a){const{restrictionAttributeNames:m}=a;return m==null?null:m.map(v=>Y.fromJSON(v))}writeRestrictionAttributes(r,a,m){r!=null&&(a[m]=r.map(v=>Y.toJSON(v)))}};e([i({type:[Object],json:{write:!0}})],p.prototype,"attributeParameterValues",void 0),e([i({type:String,json:{write:!0}})],p.prototype,"description",void 0),e([A(H,{ignoreUnknown:!1})],p.prototype,"distanceAttributeName",void 0),e([i({type:String,json:{write:!0}})],p.prototype,"id",void 0),e([u("id",["id","itemId"])],p.prototype,"readId",null),e([A(N,{ignoreUnknown:!1})],p.prototype,"impedanceAttributeName",void 0),e([i({type:String,json:{write:!0}})],p.prototype,"name",void 0),e([i({type:[String],json:{write:!0}})],p.prototype,"restrictionAttributeNames",void 0),e([u("restrictionAttributeNames")],p.prototype,"readRestrictionAttributes",null),e([C("restrictionAttributeNames")],p.prototype,"writeRestrictionAttributes",null),e([i({type:Number,json:{write:{allowNull:!0}}})],p.prototype,"simplificationTolerance",void 0),e([A(K)],p.prototype,"simplificationToleranceUnits",void 0),e([A(Q,{ignoreUnknown:!1})],p.prototype,"timeAttributeName",void 0),e([A(tt)],p.prototype,"type",void 0),e([i({type:Boolean,json:{write:!0}})],p.prototype,"useHierarchy",void 0),e([A(et)],p.prototype,"uturnAtJunctions",void 0),p=e([S("esri.rest.support.TravelMode")],p);const it=p;function f(t,r){if(t==null)return null;const a={},m=new RegExp(`^${r}`,"i");for(const v of Object.keys(t))if(m.test(v)){const W=v.slice(r.length);a[N.fromJSON(W)]=t[v]}return a}function X(t,r,a){if(t!=null){r.attributes||(r.attributes={});for(const m in t){const v=N.toJSON(m);r.attributes[`${a}${v}`]=t[m]}}}function F(t){const r={};for(const a of Object.keys(t)){const m=a;r[N.fromJSON(m)]=t[a]}return r}function E(t){const r={};for(const a of Object.keys(t)){const m=a;r[N.toJSON(m)]=t[a]}return r}function V(t,r){return t==null||r==null?null:Math.round((t-r)/6e4)}function ct(t){var m,v,W;const r=t.toJSON(),a=r;return a.accumulateAttributeNames&&(a.accumulateAttributeNames=(m=r.accumulateAttributeNames)==null?void 0:m.join()),a.attributeParameterValues&&(a.attributeParameterValues=JSON.stringify(r.attributeParameterValues)),a.barriers&&(a.barriers=JSON.stringify(r.barriers)),a.outSR&&(a.outSR=(v=r.outSR)==null?void 0:v.wkid),a.overrides&&(a.overrides=JSON.stringify(r.overrides)),a.polygonBarriers&&(a.polygonBarriers=JSON.stringify(r.polygonBarriers)),a.polylineBarriers&&(a.polylineBarriers=JSON.stringify(r.polylineBarriers)),a.restrictionAttributeNames&&(a.restrictionAttributeNames=(W=r.restrictionAttributeNames)==null?void 0:W.join()),a.stops&&(a.stops=JSON.stringify(r.stops)),a.travelMode&&(a.travelMode=JSON.stringify(r.travelMode)),a}var x;let y=x=class extends D.ClonableMixin(O){constructor(t){super(t),this.directionLineType=null,this.directionPointId=null,this.distance=null,this.duration=null,this.fromLevel=null,this.geometry=null,this.objectId=null,this.popupTemplate=null,this.symbol=null,this.toLevel=null,this.type="direction-line"}static fromGraphic(t){return new x({directionLineType:L.fromJSON(t.attributes.DirectionLineType),directionPointId:t.attributes.DirectionPointID,distance:t.attributes.Meters,duration:t.attributes.Minutes,fromLevel:t.attributes.FromLevel??null,geometry:t.geometry,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,symbol:t.symbol,toLevel:t.attributes.ToLevel??null})}toGraphic(){const t={ObjectID:this.objectId,DirectionLineType:this.directionLineType!=null?L.toJSON(this.directionLineType):null,DirectionPointID:this.directionPointId,Meters:this.distance,Minutes:this.duration};return this.fromLevel!=null&&(t.FromLevel=this.fromLevel),this.toLevel!=null&&(t.ToLevel=this.toLevel),new I({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};y.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"DirectionLineType",alias:"Line Type",type:"esriFieldTypeInteger"},{name:"DirectionPointID",alias:"Direction Point ID",type:"esriFieldTypeInteger"},{name:"FromLevel",alias:"From Level",type:"esriFieldTypeInteger"},{name:"Meters",alias:"Meters",type:"esriFieldTypeDouble"},{name:"Minutes",alias:"Minutes",type:"esriFieldTypeDouble"},{name:"ToLevel",alias:"To Level",type:"esriFieldTypeInteger"}],e([i({type:L.apiValues,json:{read:{source:"attributes.DirectionLineType",reader:L.read}}})],y.prototype,"directionLineType",void 0),e([i({json:{read:{source:"attributes.DirectionPointID"}}})],y.prototype,"directionPointId",void 0),e([i({json:{read:{source:"attributes.Meters"}}})],y.prototype,"distance",void 0),e([i({json:{read:{source:"attributes.Minutes"}}})],y.prototype,"duration",void 0),e([i({json:{read:{source:"attributes.FromLevel"}}})],y.prototype,"fromLevel",void 0),e([i({type:k})],y.prototype,"geometry",void 0),e([i({json:{read:{source:"attributes.ObjectID"}}})],y.prototype,"objectId",void 0),e([i({type:j})],y.prototype,"popupTemplate",void 0),e([i({types:w})],y.prototype,"symbol",void 0),e([i({json:{read:{source:"attributes.ToLevel"}}})],y.prototype,"toLevel",void 0),e([i({readOnly:!0,json:{read:!1}})],y.prototype,"type",void 0),y=x=e([S("esri.rest.support.DirectionLine")],y);const bt=y;var $;let l=$=class extends D.ClonableMixin(O){constructor(t){super(t),this.alternateName=null,this.arrivalTime=null,this.arrivalTimeOffset=null,this.azimuth=null,this.branchName=null,this.directionPointType=null,this.displayText=null,this.exitName=null,this.geometry=null,this.intersectingName=null,this.level=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.sequence=null,this.shortVoiceInstruction=null,this.stopId=null,this.symbol=null,this.towardName=null,this.type="direction-point",this.voiceInstruction=null}readArrivalTime(t,r){return r.attributes.ArrivalTime!=null?new Date(r.attributes.ArrivalTime):null}static fromGraphic(t){return new $({alternateName:t.attributes.AlternateName??null,arrivalTime:t.attributes.ArrivalTime!=null?new Date(t.attributes.ArrivalTime):null,arrivalTimeOffset:t.attributes.ArrivalUTCOffset??null,azimuth:t.attributes.Azimuth??null,branchName:t.attributes.BranchName??null,directionPointType:U.fromJSON(t.attributes.DirectionPointType),displayText:t.attributes.DisplayText??null,exitName:t.attributes.ExitName??null,geometry:t.geometry,intersectingName:t.attributes.IntersectingName??null,level:t.attributes.Level??null,name:t.attributes.Name??null,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,sequence:t.attributes.Sequence,shortVoiceInstruction:t.attributes.ShortVoiceInstruction??null,stopId:t.attributes.StopID??null,symbol:t.symbol,towardName:t.attributes.TowardName??null,voiceInstruction:t.attributes.VoiceInstruction??null})}toGraphic(){const t={ObjectID:this.objectId,DirectionPointType:this.directionPointType!=null?U.toJSON(this.directionPointType):null,Sequence:this.sequence,StopID:this.stopId};return this.alternateName!=null&&(t.AlternateName=this.alternateName),this.arrivalTime!=null&&(t.ArrivalTime=this.arrivalTime.getTime()),this.arrivalTimeOffset!=null&&(t.ArrivalUTCOffset=this.arrivalTimeOffset),this.azimuth!=null&&(t.Azimuth=this.azimuth),this.branchName!=null&&(t.BranchName=this.branchName),this.displayText!=null&&(t.DisplayText=this.displayText),this.exitName!=null&&(t.ExitName=this.exitName),this.intersectingName!=null&&(t.IntersectingName=this.intersectingName),this.level!=null&&(t.Level=this.level),this.name!=null&&(t.Name=this.name),this.shortVoiceInstruction!=null&&(t.ShortVoiceInstruction=this.shortVoiceInstruction),this.towardName!=null&&(t.TowardName=this.towardName),this.voiceInstruction!=null&&(t.VoiceInstruction=this.voiceInstruction),new I({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};l.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AlternateName",alias:"Alternative Name",type:"esriFieldTypeString"},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate"},{name:"ArrivalUTCOffset",alias:"Arrival Time Offset",type:"esriFieldTypeInteger"},{name:"Azimuth",alias:"Azimuth",type:"esriFieldTypeDouble"},{name:"BranchName",alias:"Branch Name",type:"esriFieldTypeString"},{name:"DirectionPointType",alias:"Directions Point Type",type:"esriFieldTypeInteger"},{name:"DisplayText",alias:"Display Text",type:"esriFieldTypeString"},{name:"ExitName",alias:"Exit Name",type:"esriFieldTypeString"},{name:"IntersectingName",alias:"Intersecting Name",type:"esriFieldTypeString"},{name:"Level",alias:"Level",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger"},{name:"ShortVoiceInstruction",alias:"Short Voice Instruction",type:"esriFieldTypeString"},{name:"StopID",alias:"Stop ID",type:"esriFieldTypeInteger"},{name:"TowardName",alias:"Toward Name",type:"esriFieldTypeString"},{name:"VoiceInstruction",alias:"Voice Instruction",type:"esriFieldTypeString"}],e([i({json:{read:{source:"attributes.AlternateName"}}})],l.prototype,"alternateName",void 0),e([i({type:Date})],l.prototype,"arrivalTime",void 0),e([u("arrivalTime",["attributes.ArrivalTime"])],l.prototype,"readArrivalTime",null),e([i({json:{read:{source:"attributes.ArrivalUTCOffset"}}})],l.prototype,"arrivalTimeOffset",void 0),e([i({json:{read:{source:"attributes.Azimuth"}}})],l.prototype,"azimuth",void 0),e([i({json:{read:{source:"attributes.BranchName"}}})],l.prototype,"branchName",void 0),e([i({type:U.apiValues,json:{read:{source:"attributes.DirectionPointType",reader:U.read}}})],l.prototype,"directionPointType",void 0),e([i({json:{read:{source:"attributes.DisplayText"}}})],l.prototype,"displayText",void 0),e([i({json:{read:{source:"attributes.ExitName"}}})],l.prototype,"exitName",void 0),e([i({type:z})],l.prototype,"geometry",void 0),e([i({json:{read:{source:"attributes.IntersectingName"}}})],l.prototype,"intersectingName",void 0),e([i({json:{read:{source:"attributes.Level"}}})],l.prototype,"level",void 0),e([i({json:{read:{source:"attributes.Name"}}})],l.prototype,"name",void 0),e([i({json:{read:{source:"attributes.ObjectID"}}})],l.prototype,"objectId",void 0),e([i({type:j})],l.prototype,"popupTemplate",void 0),e([i({json:{read:{source:"attributes.Sequence"}}})],l.prototype,"sequence",void 0),e([i({json:{read:{source:"attributes.ShortVoiceInstruction"}}})],l.prototype,"shortVoiceInstruction",void 0),e([i({json:{read:{source:"attributes.StopID"}}})],l.prototype,"stopId",void 0),e([i({types:w})],l.prototype,"symbol",void 0),e([i({json:{read:{source:"attributes.TowardName"}}})],l.prototype,"towardName",void 0),e([i({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),e([i({json:{read:{source:"attributes.VoiceInstruction"}}})],l.prototype,"voiceInstruction",void 0),l=$=e([S("esri.rest.support.DirectionPoint")],l);const Tt=l;var P;let n=P=class extends D.ClonableMixin(O){constructor(t){super(t),this.addedCost=null,this.barrierType=null,this.costs=null,this.curbApproach=null,this.fullEdge=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.sideOfEdge=null,this.sourceId=null,this.sourceOid=null,this.status=null,this.symbol=null,this.type="point-barrier"}readCosts(t,r){return f(r.attributes,"Attr_")}writeCosts(t,r){X(t,r,"Attr_")}static fromGraphic(t){return new P({addedCost:t.attributes.AddedCost??null,barrierType:t.attributes.BarrierType!=null?T.fromJSON(t.attributes.BarrierType):null,costs:t.attributes.Costs!=null?F(JSON.parse(t.attributes.Costs)):null,curbApproach:t.attributes.CurbApproach!=null?d.fromJSON(t.attributes.CurbApproach):null,fullEdge:t.attributes.FullEdge!=null?M.fromJSON(t.attributes.FullEdge):null,geometry:t.geometry,name:t.attributes.Name??null,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,status:t.attributes.Status!=null?g.fromJSON(t.attributes.Status):null,symbol:t.symbol})}toGraphic(){const t={ObjectID:this.objectId,AddedCost:this.addedCost,BarrierType:this.barrierType!=null?T.toJSON(this.barrierType):null,Costs:this.costs!=null?JSON.stringify(E(this.costs)):null,CurbApproach:this.curbApproach!=null?d.toJSON(this.curbApproach):null,FullEdge:this.fullEdge!=null?M.toJSON(this.fullEdge):null,Name:this.name,Status:this.status!=null?g.toJSON(this.status):null};return new I({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};n.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AddedCost",alias:"Added Cost",type:"esriFieldTypeDouble"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger"},{name:"FullEdge",alias:"Full Edge",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"Status",alias:"Status",type:"esriFieldTypeInteger"}],e([i()],n.prototype,"addedCost",void 0),e([i({type:T.apiValues,json:{name:"attributes.BarrierType",read:{reader:T.read},write:{writer:T.write}}})],n.prototype,"barrierType",void 0),e([i()],n.prototype,"costs",void 0),e([u("costs",["attributes"])],n.prototype,"readCosts",null),e([C("costs")],n.prototype,"writeCosts",null),e([i({type:d.apiValues,json:{read:{source:"attributes.CurbApproach",reader:d.read}}})],n.prototype,"curbApproach",void 0),e([i({type:M.apiValues,json:{name:"attributes.FullEdge",read:{reader:M.read},write:{writer:M.write}}})],n.prototype,"fullEdge",void 0),e([i({type:z,json:{write:!0}})],n.prototype,"geometry",void 0),e([i({json:{name:"attributes.Name"}})],n.prototype,"name",void 0),e([i({json:{name:"attributes.ObjectID"}})],n.prototype,"objectId",void 0),e([i({type:j})],n.prototype,"popupTemplate",void 0),e([i({type:B.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:B.read}}})],n.prototype,"sideOfEdge",void 0),e([i({json:{read:{source:"attributes.SourceID"}}})],n.prototype,"sourceId",void 0),e([i({json:{read:{source:"attributes.SourceOID"}}})],n.prototype,"sourceOid",void 0),e([i({type:g.apiValues,json:{read:{source:"attributes.Status",reader:g.read}}})],n.prototype,"status",void 0),e([i({types:w})],n.prototype,"symbol",void 0),e([i({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),n=P=e([S("esri.rest.support.PointBarrier")],n);const ht=n;var _;let c=_=class extends D.ClonableMixin(O){constructor(t){super(t),this.barrierType=null,this.costs=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.scaleFactor=null,this.symbol=null,this.type="polygon-barrier"}readCosts(t,r){return f(r.attributes,"Attr_")}writeCosts(t,r){X(t,r,"Attr_")}static fromGraphic(t){return new _({barrierType:t.attributes.BarrierType!=null?T.fromJSON(t.attributes.BarrierType):null,costs:t.attributes.Costs!=null?F(JSON.parse(t.attributes.Costs)):null,geometry:t.geometry,name:t.attributes.Name??null,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,scaleFactor:t.attributes.ScaleFactor??null,symbol:t.symbol})}toGraphic(){const t={ObjectID:this.objectId,BarrierType:this.barrierType!=null?T.toJSON(this.barrierType):null,Costs:this.costs!=null?JSON.stringify(E(this.costs)):null,Name:this.name??null,ScaleFactor:this.scaleFactor??null};return new I({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};c.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble"}],e([i({type:T.apiValues,json:{name:"attributes.BarrierType",read:{reader:T.read},write:{writer:T.write}}})],c.prototype,"barrierType",void 0),e([i()],c.prototype,"costs",void 0),e([u("costs",["attributes"])],c.prototype,"readCosts",null),e([C("costs")],c.prototype,"writeCosts",null),e([i({type:Z,json:{write:!0}})],c.prototype,"geometry",void 0),e([i({json:{name:"attributes.Name"}})],c.prototype,"name",void 0),e([i({json:{name:"attributes.ObjectID"}})],c.prototype,"objectId",void 0),e([i({type:j})],c.prototype,"popupTemplate",void 0),e([i()],c.prototype,"scaleFactor",void 0),e([i({types:w})],c.prototype,"symbol",void 0),e([i({readOnly:!0,json:{read:!1}})],c.prototype,"type",void 0),c=_=e([S("esri.rest.support.PolygonBarrier")],c);const vt=c;var q;let b=q=class extends D.ClonableMixin(O){constructor(t){super(t),this.barrierType=null,this.costs=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.scaleFactor=null,this.symbol=null,this.type="polyline-barrier"}readCosts(t,r){return f(r.attributes,"Attr_")}static fromGraphic(t){return new q({barrierType:t.attributes.BarrierType!=null?T.fromJSON(t.attributes.BarrierType):null,costs:t.attributes.Costs!=null?F(JSON.parse(t.attributes.Costs)):null,geometry:t.geometry,name:t.attributes.Name??null,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,scaleFactor:t.attributes.ScaleFactor??null,symbol:t.symbol})}toGraphic(){const t={ObjectID:this.objectId,BarrierType:this.barrierType!=null?T.toJSON(this.barrierType):null,Costs:this.costs!=null?JSON.stringify(E(this.costs)):null,Name:this.name,ScaleFactor:this.scaleFactor};return new I({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};b.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble"}],e([i({type:T.apiValues,json:{read:{source:"attributes.BarrierType",reader:T.read}}})],b.prototype,"barrierType",void 0),e([i()],b.prototype,"costs",void 0),e([u("costs",["attributes"])],b.prototype,"readCosts",null),e([i({type:k,json:{write:!0}})],b.prototype,"geometry",void 0),e([i({json:{name:"attributes.Name"}})],b.prototype,"name",void 0),e([i({json:{name:"attributes.ObjectID"}})],b.prototype,"objectId",void 0),e([i({type:j})],b.prototype,"popupTemplate",void 0),e([i()],b.prototype,"scaleFactor",void 0),e([i({types:w})],b.prototype,"symbol",void 0),e([i({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0),b=q=e([S("esri.rest.support.PolylineBarrier")],b);const ft=b;let h=class extends O{constructor(t){super(t),this.accumulateAttributes=null,this.directionsLanguage=null,this.findBestSequence=null,this.preserveFirstStop=null,this.preserveLastStop=null,this.startTimeIsUTC=null,this.timeWindowsAreUTC=null,this.travelMode=null}readAccumulateAttributes(t){return t==null?null:t.map(r=>N.fromJSON(r))}writeAccumulateAttributes(t,r,a){t!=null&&t.length&&(r[a]=t.map(m=>N.toJSON(m)))}};e([i({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],h.prototype,"accumulateAttributes",void 0),e([u("accumulateAttributes")],h.prototype,"readAccumulateAttributes",null),e([C("accumulateAttributes")],h.prototype,"writeAccumulateAttributes",null),e([i({type:String,json:{write:!0}})],h.prototype,"directionsLanguage",void 0),e([i({type:Boolean,json:{write:!0}})],h.prototype,"findBestSequence",void 0),e([i({type:Boolean,json:{write:!0}})],h.prototype,"preserveFirstStop",void 0),e([i({type:Boolean,json:{write:!0}})],h.prototype,"preserveLastStop",void 0),e([i({type:Boolean,json:{write:!0}})],h.prototype,"startTimeIsUTC",void 0),e([i({type:Boolean,json:{write:!0}})],h.prototype,"timeWindowsAreUTC",void 0),e([i({type:it,json:{write:!0}})],h.prototype,"travelMode",void 0),h=e([S("esri.rest.support.RouteSettings")],h);const rt=h;var R;let o=R=class extends D.ClonableMixin(O){constructor(t){super(t),this.analysisSettings=null,this.endTime=null,this.endTimeOffset=null,this.firstStopId=null,this.geometry=null,this.lastStopId=null,this.messages=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.startTime=null,this.startTimeOffset=null,this.stopCount=null,this.symbol=null,this.totalCosts=null,this.totalDistance=null,this.totalDuration=null,this.totalLateDuration=null,this.totalViolations=null,this.totalWait=null,this.totalWaitDuration=null,this.type="route-info",this.version="1.0.0"}readEndTime(t,r){return r.attributes.EndTimeUTC!=null?new Date(r.attributes.EndTimeUTC):null}readEndTimeOffset(t,r){return V(r.attributes.EndTime,r.attributes.EndTimeUTC)}readStartTime(t,r){return r.attributes.StartTimeUTC!=null?new Date(r.attributes.StartTimeUTC):null}readStartTimeOffset(t,r){return V(r.attributes.StartTime,r.attributes.StartTimeUTC)}readTotalCosts(t,r){return f(r.attributes,"Total_")}readTotalViolations(t,r){return f(r.attributes,"TotalViolation_")}readTotalWait(t,r){return f(r.attributes,"TotalWait_")}static fromGraphic(t){return new R({analysisSettings:t.attributes.AnalysisSettings!=null?rt.fromJSON(JSON.parse(t.attributes.AnalysisSettings)):null,endTime:t.attributes.EndTime!=null?new Date(t.attributes.EndTime):null,endTimeOffset:t.attributes.EndUTCOffset??null,geometry:t.geometry,messages:t.attributes.Messages!=null?JSON.parse(t.attributes.Messages):null,name:t.attributes.RouteName,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,startTime:t.attributes.StartTime!=null?new Date(t.attributes.StartTime):null,startTimeOffset:t.attributes.StartUTCOffset??null,symbol:t.symbol,totalCosts:t.attributes.TotalCosts!=null?F(JSON.parse(t.attributes.TotalCosts)):null,totalDistance:t.attributes.TotalMeters??null,totalDuration:t.attributes.TotalMinutes??null,totalLateDuration:t.attributes.TotalLateMinutes??null,totalWaitDuration:t.attributes.TotalWaitMinutes??null,version:t.attributes.Version})}toGraphic(){const t={ObjectID:this.objectId,AnalysisSettings:this.analysisSettings!=null?JSON.stringify(this.analysisSettings.toJSON()):null,EndTime:this.endTime!=null?this.endTime.getTime():null,EndUTCOffset:this.endTimeOffset,Messages:this.messages!=null?JSON.stringify(this.messages):null,RouteName:this.name,StartTime:this.startTime!=null?this.startTime.getTime():null,StartUTCOffset:this.startTimeOffset,TotalCosts:this.totalCosts!=null?JSON.stringify(E(this.totalCosts)):null,TotalLateMinutes:this.totalLateDuration,TotalMeters:this.totalDistance,TotalMinutes:this.totalDuration,TotalWaitMinutes:this.totalWaitDuration,Version:this.version};return new I({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};o.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AnalysisSettings",alias:"Analysis Settings",type:"esriFieldTypeString"},{name:"EndTime",alias:"End Time",type:"esriFieldTypeDate"},{name:"EndUTCOffset",alias:"End Time Offset",type:"esriFieldTypeInteger"},{name:"Messages",alias:"Messages",type:"esriFieldTypeString"},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString"},{name:"StartTime",alias:"Start Time",type:"esriFieldTypeDate"},{name:"StartUTCOffset",alias:"Start Time Offset",type:"esriFieldTypeInteger"},{name:"TotalCosts",alias:"Total Costs",type:"esriFieldTypeString"},{name:"TotalLateMinutes",alias:"Total Late Minutes",type:"esriFieldTypeDouble"},{name:"TotalMeters",alias:"Total Meters",type:"esriFieldTypeDouble"},{name:"TotalMinutes",alias:"Total Minutes",type:"esriFieldTypeDouble"},{name:"TotalWaitMinutes",alias:"Total Wait Minutes",type:"esriFieldTypeDouble"},{name:"Version",alias:"Version",type:"esriFieldTypeString"}],e([i()],o.prototype,"analysisSettings",void 0),e([i({type:Date})],o.prototype,"endTime",void 0),e([u("endTime",["attributes.EndTimeUTC"])],o.prototype,"readEndTime",null),e([i()],o.prototype,"endTimeOffset",void 0),e([u("endTimeOffset",["attributes.EndTime","attributes.EndTimeUTC"])],o.prototype,"readEndTimeOffset",null),e([i({json:{read:{source:"attributes.FirstStopID"}}})],o.prototype,"firstStopId",void 0),e([i({type:k})],o.prototype,"geometry",void 0),e([i({json:{read:{source:"attributes.LastStopID"}}})],o.prototype,"lastStopId",void 0),e([i()],o.prototype,"messages",void 0),e([i({json:{read:{source:"attributes.Name"}}})],o.prototype,"name",void 0),e([i({json:{read:{source:"attributes.ObjectID"}}})],o.prototype,"objectId",void 0),e([i({type:j})],o.prototype,"popupTemplate",void 0),e([i({type:Date})],o.prototype,"startTime",void 0),e([u("startTime",["attributes.StartTimeUTC"])],o.prototype,"readStartTime",null),e([i()],o.prototype,"startTimeOffset",void 0),e([u("startTimeOffset",["attributes.StartTime","attributes.StartTimeUTC"])],o.prototype,"readStartTimeOffset",null),e([i({json:{read:{source:"attributes.StopCount"}}})],o.prototype,"stopCount",void 0),e([i({types:w})],o.prototype,"symbol",void 0),e([i()],o.prototype,"totalCosts",void 0),e([u("totalCosts",["attributes"])],o.prototype,"readTotalCosts",null),e([i()],o.prototype,"totalDistance",void 0),e([i()],o.prototype,"totalDuration",void 0),e([i()],o.prototype,"totalLateDuration",void 0),e([i()],o.prototype,"totalViolations",void 0),e([u("totalViolations",["attributes"])],o.prototype,"readTotalViolations",null),e([i()],o.prototype,"totalWait",void 0),e([u("totalWait",["attributes"])],o.prototype,"readTotalWait",null),e([i()],o.prototype,"totalWaitDuration",void 0),e([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),e([i()],o.prototype,"version",void 0),o=R=e([S("esri.rest.support.RouteInfo")],o);const St=o;var G;let s=G=class extends D.ClonableMixin(O){constructor(t){super(t),this.arriveCurbApproach=null,this.arriveTime=null,this.arriveTimeOffset=null,this.bearing=null,this.bearingTol=null,this.cumulativeCosts=null,this.cumulativeDistance=null,this.cumulativeDuration=null,this.curbApproach=null,this.departCurbApproach=null,this.departTime=null,this.departTimeOffset=null,this.distanceToNetworkInMeters=null,this.geometry=null,this.lateDuration=null,this.locationType=null,this.name=null,this.navLatency=null,this.objectId=null,this.popupTemplate=null,this.posAlong=null,this.routeName=null,this.serviceCosts=null,this.serviceDistance=null,this.serviceDuration=null,this.sequence=null,this.sideOfEdge=null,this.snapX=null,this.snapY=null,this.snapZ=null,this.sourceId=null,this.sourceOid=null,this.status=null,this.symbol=null,this.timeWindowEnd=null,this.timeWindowEndOffset=null,this.timeWindowStart=null,this.timeWindowStartOffset=null,this.type="stop",this.violations=null,this.waitDuration=null,this.wait=null}readArriveTimeOffset(t,r){return V(r.attributes.ArriveTime,r.attributes.ArriveTimeUTC)}readCumulativeCosts(t,r){return f(r.attributes,"Cumul_")}readDepartTimeOffset(t,r){return V(r.attributes.DepartTime,r.attributes.DepartTimeUTC)}readServiceCosts(t,r){return f(r.attributes,"Attr_")}writeServiceCosts(t,r){X(t,r,"Attr_")}writeTimeWindowEnd(t,r){t!=null&&(r.attributes||(r.attributes={}),r.attributes.TimeWindowEnd=t.getTime())}writeTimeWindowStart(t,r){t!=null&&(r.attributes||(r.attributes={}),r.attributes.TimeWindowStart=t.getTime())}readViolations(t,r){return f(r.attributes,"Violation_")}readWait(t,r){return f(r.attributes,"Wait_")}static fromGraphic(t){return new G({arriveCurbApproach:t.attributes.ArrivalCurbApproach!=null?d.fromJSON(t.attributes.ArrivalCurbApproach):null,arriveTime:t.attributes.ArrivalTime!=null?new Date(t.attributes.ArrivalTime):null,arriveTimeOffset:t.attributes.ArrivalUTCOffset,cumulativeCosts:t.attributes.CumulativeCosts!=null?F(JSON.parse(t.attributes.CumulativeCosts)):null,cumulativeDistance:t.attributes.CumulativeMeters??null,cumulativeDuration:t.attributes.CumulativeMinutes??null,curbApproach:t.attributes.CurbApproach!=null?d.fromJSON(t.attributes.CurbApproach):null,departCurbApproach:t.attributes.DepartureCurbApproach!=null?d.fromJSON(t.attributes.DepartureCurbApproach):null,departTime:t.attributes.DepartureTime!=null?new Date(t.attributes.DepartureTime):null,departTimeOffset:t.attributes.DepartureUTCOffset??null,geometry:t.geometry,lateDuration:t.attributes.LateMinutes??null,locationType:t.attributes.LocationType!=null?J.fromJSON(t.attributes.LocationType):null,name:t.attributes.Name,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,routeName:t.attributes.RouteName,sequence:t.attributes.Sequence??null,serviceCosts:t.attributes.ServiceCosts!=null?F(JSON.parse(t.attributes.ServiceCosts)):null,serviceDistance:t.attributes.ServiceMeters??null,serviceDuration:t.attributes.ServiceMinutes??null,status:t.attributes.Status!=null?g.fromJSON(t.attributes.Status):null,symbol:t.symbol,timeWindowEnd:t.attributes.TimeWindowEnd!=null?new Date(t.attributes.TimeWindowEnd):null,timeWindowEndOffset:t.attributes.TimeWindowEndUTCOffset??null,timeWindowStart:t.attributes.TimeWindowStart!=null?new Date(t.attributes.TimeWindowStart):null,timeWindowStartOffset:t.attributes.TimeWindowStartUTCOffset??null,waitDuration:t.attributes.WaitMinutes??null})}toGraphic(){const t={ObjectID:this.objectId,ArrivalCurbApproach:this.arriveCurbApproach!=null?d.toJSON(this.arriveCurbApproach):null,ArrivalTime:this.arriveTime!=null?this.arriveTime.getTime():null,ArrivalUTCOffset:this.arriveTimeOffset,CumulativeCosts:this.cumulativeCosts!=null?JSON.stringify(E(this.cumulativeCosts)):null,CumulativeMeters:this.cumulativeDistance,CumulativeMinutes:this.cumulativeDuration,CurbApproach:this.curbApproach!=null?d.toJSON(this.curbApproach):null,DepartureCurbApproach:this.departCurbApproach!=null?d.toJSON(this.departCurbApproach):null,DepartureTime:this.departTime!=null?this.departTime.getTime():null,DepartureUTCOffset:this.departTimeOffset,LateMinutes:this.lateDuration,LocationType:this.locationType!=null?J.toJSON(this.locationType):null,Name:this.name,RouteName:this.routeName,Sequence:this.sequence,ServiceCosts:this.serviceCosts!=null?JSON.stringify(E(this.serviceCosts)):null,ServiceMeters:this.serviceDistance,ServiceMinutes:this.serviceDuration,Status:this.status!=null?g.toJSON(this.status):null,TimeWindowEnd:this.timeWindowEnd!=null?this.timeWindowEnd.getTime():null,TimeWindowEndUTCOffset:this.timeWindowEndOffset??this.arriveTimeOffset,TimeWindowStart:this.timeWindowStart!=null?this.timeWindowStart.getTime():null,TimeWindowStartUTCOffset:this.timeWindowStartOffset??this.arriveTimeOffset,WaitMinutes:this.waitDuration};return new I({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};s.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"ArrivalCurbApproach",alias:"Arrival Curb Approach",type:"esriFieldTypeInteger"},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate"},{name:"ArrivalUTCOffset",alias:"Arrival Time",type:"esriFieldTypeInteger"},{name:"CumulativeCosts",alias:"Cumulative Costs",type:"esriFieldTypeString"},{name:"CumulativeMeters",alias:"Cumulative Meters",type:"esriFieldTypeDouble"},{name:"CumulativeMinutes",alias:"Cumulative Minutes",type:"esriFieldTypeDouble"},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger"},{name:"DepartureCurbApproach",alias:"Departure Curb Approach",type:"esriFieldTypeInteger"},{name:"DepartureTime",alias:"Departure Time",type:"esriFieldTypeDate"},{name:"DepartureUTCOffset",alias:"Departure Time",type:"esriFieldTypeInteger"},{name:"LateMinutes",alias:"Minutes Late",type:"esriFieldTypeDouble"},{name:"LocationType",alias:"Location Type",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString"},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger"},{name:"ServiceCosts",alias:"Service Costs",type:"esriFieldTypeString"},{name:"ServiceMeters",alias:"Service Meters",type:"esriFieldTypeDouble"},{name:"ServiceMinutes",alias:"Service Minutes",type:"esriFieldTypeDouble"},{name:"Status",alias:"Status",type:"esriFieldTypeInteger"},{name:"TimeWindowEnd",alias:"Time Window End",type:"esriFieldTypeDate"},{name:"TimeWindowEndUTCOffset",alias:"Time Window End Offset",type:"esriFieldTypeInteger"},{name:"TimeWindowStart",alias:"Time Window Start",type:"esriFieldTypeDate"},{name:"TimeWindowStartUTCOffset",alias:"Time Window Start Offset",type:"esriFieldTypeInteger"},{name:"WaitMinutes",alias:"Minutes Wait",type:"esriFieldTypeDouble"}],e([i({type:d.apiValues,json:{read:{source:"attributes.ArrivalCurbApproach",reader:d.read}}})],s.prototype,"arriveCurbApproach",void 0),e([i({type:Date,json:{read:{source:"attributes.ArriveTimeUTC"}}})],s.prototype,"arriveTime",void 0),e([i()],s.prototype,"arriveTimeOffset",void 0),e([u("arriveTimeOffset",["attributes.ArriveTime","attributes.ArriveTimeUTC"])],s.prototype,"readArriveTimeOffset",null),e([i({json:{name:"attributes.Bearing",read:!1,write:!0}})],s.prototype,"bearing",void 0),e([i({json:{name:"attributes.BearingTol",read:!1,write:!0}})],s.prototype,"bearingTol",void 0),e([i()],s.prototype,"cumulativeCosts",void 0),e([u("cumulativeCosts",["attributes"])],s.prototype,"readCumulativeCosts",null),e([i()],s.prototype,"cumulativeDistance",void 0),e([i()],s.prototype,"cumulativeDuration",void 0),e([i({type:d.apiValues,json:{name:"attributes.CurbApproach",read:{reader:d.read},write:{writer:d.write}}})],s.prototype,"curbApproach",void 0),e([i({type:d.apiValues,json:{read:{source:"attributes.DepartCurbApproach",reader:d.read}}})],s.prototype,"departCurbApproach",void 0),e([i({type:Date,json:{read:{source:"attributes.DepartTimeUTC"}}})],s.prototype,"departTime",void 0),e([i()],s.prototype,"departTimeOffset",void 0),e([u("departTimeOffset",["attributes.DepartTime","attributes.DepartTimeUTC"])],s.prototype,"readDepartTimeOffset",null),e([i({json:{read:{source:"attributes.DistanceToNetworkInMeters"}}})],s.prototype,"distanceToNetworkInMeters",void 0),e([i({type:z,json:{write:!0}})],s.prototype,"geometry",void 0),e([i()],s.prototype,"lateDuration",void 0),e([i({type:J.apiValues,json:{name:"attributes.LocationType",read:{reader:J.read},write:{writer:J.write}}})],s.prototype,"locationType",void 0),e([i({json:{name:"attributes.Name"}})],s.prototype,"name",void 0),e([i({json:{name:"attributes.NavLatency",read:!1,write:!0}})],s.prototype,"navLatency",void 0),e([i({json:{name:"attributes.ObjectID"}})],s.prototype,"objectId",void 0),e([i({type:j})],s.prototype,"popupTemplate",void 0),e([i({json:{read:{source:"attributes.PosAlong"}}})],s.prototype,"posAlong",void 0),e([i({json:{name:"attributes.RouteName"}})],s.prototype,"routeName",void 0),e([i()],s.prototype,"serviceCosts",void 0),e([u("serviceCosts",["attributes"])],s.prototype,"readServiceCosts",null),e([C("serviceCosts")],s.prototype,"writeServiceCosts",null),e([i()],s.prototype,"serviceDistance",void 0),e([i()],s.prototype,"serviceDuration",void 0),e([i({json:{name:"attributes.Sequence"}})],s.prototype,"sequence",void 0),e([i({type:B.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:B.read}}})],s.prototype,"sideOfEdge",void 0),e([i({json:{read:{source:"attributes.SnapX"}}})],s.prototype,"snapX",void 0),e([i({json:{read:{source:"attributes.SnapY"}}})],s.prototype,"snapY",void 0),e([i({json:{read:{source:"attributes.SnapZ"}}})],s.prototype,"snapZ",void 0),e([i({json:{read:{source:"attributes.SourceID"}}})],s.prototype,"sourceId",void 0),e([i({json:{read:{source:"attributes.SourceOID"}}})],s.prototype,"sourceOid",void 0),e([i({type:g.apiValues,json:{read:{source:"attributes.Status",reader:g.read}}})],s.prototype,"status",void 0),e([i({types:w})],s.prototype,"symbol",void 0),e([i({type:Date,json:{name:"attributes.TimeWindowEnd"}})],s.prototype,"timeWindowEnd",void 0),e([C("timeWindowEnd")],s.prototype,"writeTimeWindowEnd",null),e([i()],s.prototype,"timeWindowEndOffset",void 0),e([i({type:Date,json:{name:"attributes.TimeWindowStart"}})],s.prototype,"timeWindowStart",void 0),e([C("timeWindowStart")],s.prototype,"writeTimeWindowStart",null),e([i()],s.prototype,"timeWindowStartOffset",void 0),e([i({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),e([i()],s.prototype,"violations",void 0),e([u("violations",["attributes"])],s.prototype,"readViolations",null),e([i()],s.prototype,"waitDuration",void 0),e([i()],s.prototype,"wait",void 0),e([u("wait",["attributes"])],s.prototype,"readWait",null),s=G=e([S("esri.rest.support.Stop")],s);const Ot=s;export{St as S,ht as T,vt as a,it as b,bt as c,rt as d,ft as j,V as n,ct as o,Ot as w,Tt as y};
