import{f as u,U as y}from"./assets-C43MgM-v.js";import{f as d,s as h,i as l}from"./utils-6jMaHUrH.js";import{r as i}from"./tslib.es6-B3Jf3DVX.js";import{m,a as x}from"./subclass-BZA_h8Db.js";import{d as $}from"./Association-CIWSDxb_.js";import"./index-Bh2oEzTI.js";import"./Accessor-BLX9ikPh.js";import"./geometry-D964gYQX.js";import"./Extent-Bf3YTe7m.js";import"./Point-Cg0-ChZE.js";import"./cast-Bjksrh93.js";import"./writer-DNAwXnhG.js";import"./jsonMap-0cxwUWs2.js";import"./Polyline-D9YkgmM_.js";import"./mathUtils-C4_ghTv4.js";import"./NetworkElement-CyYx535m.js";let r=class extends u{constructor(t){super(t),this.maxGeometryCountExceeded=!1,this.associations=[]}};i([m({type:Boolean,json:{write:!0}})],r.prototype,"maxGeometryCountExceeded",void 0),i([m({type:[$],json:{write:!0}})],r.prototype,"associations",void 0),r=i([x("esri.rest.networks.support.AssociationGeometriesResult")],r);const G=r;async function b(t,e,o){const s=d(t),n={...e.toJSON(),f:"json"},p=h({...s.query,...n});o?o.method="post":o={method:"post"};const a=l(p,o),c=`${s.path}/synthesizeAssociationGeometries`;return y(c,a).then(f=>R(f,e.outSpatialReference))}function R(t,e){const{data:o}=t;if(e)for(const s of o.associations)s.geometry.spatialReference||(s.geometry.spatialReference=e.clone());return G.fromJSON(o)}export{b as synthesizeAssociationGeometries};