var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,n=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&i(e,t,r[t]);if(a)for(var t of a(r))o.call(r,t)&&i(e,t,r[t]);return e};import{ab as l,ac as p,al as c,cE as u,cC as y,b8 as f,cF as d,ad as v,cG as B,ck as m,b7 as g,bE as P,cI as b,cJ as h,L as A,cK as S}from"./vendor.5b1a85aa.js";import{i as O,u as j,d as k,a as R,p as w,o as C}from"./networkService.cc2d1a70.js";import"./GPMessage.b6e5a08b.js";function N(e){return e.features.map((r=>{const t=g.fromJSON(e.spatialReference),a=d.fromJSON(r);return P(a.geometry).spatialReference=t,a}))}function E(e){return e.features.map((r=>(r.geometry.spatialReference=e.spatialReference,m(r.geometry))))}let I=class extends B{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return E(e)}readPointBarriers(e,r){return E(r.barriers)}readPolylineBarriers(e){return E(e)}readPolygonBarriers(e){return E(e)}readIncidents(e,r){return N(r.saPolylines)}readServiceAreaPolygons(e,r){return N(r.saPolygons)}};l([p({type:[c]})],I.prototype,"facilities",void 0),l([u("facilities")],I.prototype,"readFacilities",null),l([p({type:[O]})],I.prototype,"messages",void 0),l([p({type:[c]})],I.prototype,"pointBarriers",void 0),l([u("pointBarriers",["barriers"])],I.prototype,"readPointBarriers",null),l([p({type:[y]})],I.prototype,"polylineBarriers",void 0),l([u("polylineBarriers")],I.prototype,"readPolylineBarriers",null),l([p({type:[f]})],I.prototype,"polygonBarriers",void 0),l([u("polygonBarriers")],I.prototype,"readPolygonBarriers",null),l([p({type:[d]})],I.prototype,"serviceAreaPolylines",void 0),l([u("serviceAreaPolylines",["saPolylines"])],I.prototype,"readIncidents",null),l([p({type:[d]})],I.prototype,"serviceAreaPolygons",void 0),l([u("serviceAreaPolygons",["saPolygons"])],I.prototype,"readServiceAreaPolygons",null),I=l([v("esri.rest.support.ServiceAreaSolveResult")],I);var J=I;const x=C({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});let F=class extends S{constructor(e){super(e),this.url=null}solve(e,a){return async function(e,a,s){const o=[],i=[],l={},p={},c=b(e);return a.facilities&&a.facilities.features&&j(a.facilities.features,i,"facilities.features",l),a.pointBarriers&&a.pointBarriers.features&&j(a.pointBarriers.features,i,"pointBarriers.features",l),a.polylineBarriers&&a.polylineBarriers.features&&j(a.polylineBarriers.features,i,"polylineBarriers.features",l),a.polygonBarriers&&a.polygonBarriers.features&&j(a.polygonBarriers.features,i,"polygonBarriers.features",l),h(i).then((e=>{for(const r in l){const t=l[r];o.push(r),p[r]=e.slice(t[0],t[1])}return k(p,o)?R(c.path).catch((()=>({dontCheck:!0}))):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||w(p,o);for(const r in p)p[r].forEach(((e,t)=>{a.get(r)[t].geometry=e}));let i={query:n((l=n({},c.query),u={f:"json"},r(l,t(u))),x.toQueryParams(a))};var l,u;return s&&(i=n(n({},s),i)),A(`${c.path}/solveServiceArea`,i)})).then((e=>J.fromJSON(e.data)))}(this.url,e,a)}};l([p()],F.prototype,"url",void 0),F=l([v("esri.tasks.ServiceAreaTask")],F);var q=F;export{q as default};
