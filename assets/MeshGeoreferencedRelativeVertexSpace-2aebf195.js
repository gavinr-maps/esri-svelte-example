import{bb as n,az as a,ci as c,aL as p,cj as g,f as o,ck as l,g as y,j as d}from"./index-27db053b.js";let r=class extends n(a){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=c()}getOriginPoint(e){const[t,i,s]=this.origin;return new p({x:t,y:i,z:s,spatialReference:e})}setOriginFromPoint({x:e,y:t,z:i}){this.origin=g(e,t,i??0)}};o([l({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],r.prototype,"type",void 0),o([y({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=o([d("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],r);const h=r;export{h as m};
