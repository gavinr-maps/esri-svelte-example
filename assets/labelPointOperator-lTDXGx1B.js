import{j as F,P as Y,a as v,g as k,e as g,aa as G,aZ as H,R as J}from"./Transformation2D-CV3xaSnP.js";import{e as w,n as D,E as K,a as W,aQ as ee,as as X,s as te}from"./ProjectionTransformation-BlFTV7sx.js";import"./Extent-g5W9hy0j.js";import"./Polyline-s-JzsQqo.js";import"./Point-Cz2JYYmX.js";import"./jsonConverter-CHvsvxL-.js";import{s as ne,t as re}from"./SimpleGeometryCursor-B92kdZ15.js";import{u as oe}from"./Centroid-DZi-eb9F-bNjZp_G4.js";import{m as A}from"./OperatorProximity-BCGIXr06.js";import{fromGeometry as I,getSpatialReference as U,toPoint as V}from"./apiConverter-THGFVp57.js";class se{getOperatorType(){return 10203}accelerateGeometry(e,s,o){return!1}canAccelerateGeometry(e){return!1}supportsCurves(){return!0}executeMany(e,s){return new $(e,s)}execute(e,s){return new $(null,s).labelPoint(e)}}class $ extends re{progress_(){}tock(){return!0}getRank(){return 1}constructor(e,s){super(),this.m_index=-1,this.m_progressCounter=0,this.m_progressTracker=s,this.m_inputGeoms=e}next(){const e=this.m_inputGeoms.next();return e?(F(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.labelPoint(e)):null}getGeometryID(){return this.m_index}labelPoint(e){if(e===null&&Y("null pointer is not allowed"),e.getGeometryType()===v.enumPoint)return e;if(e.isEmpty())return new w({vd:e.getDescription()});switch(e.getGeometryType()){case v.enumPolygon:return this.labelPointPolygon(e);case v.enumPolyline:return this.labelPointPolyline(e);case v.enumMultiPoint:return this.labelPointMultiPoint(e);case v.enumEnvelope:return this.labelPointEnvelope(e);default:Y("geometry is not supported")}}labelPointPolygon(e){const s=new D;e.queryEnvelope(s);const o=K(null,s,!0).total();let l=null,r=e;if(e.hasNonLinearSegments()){const t=new W({copy:e}),m=ee(t,.25*o,o);k(m!==e),l=m,r=l}let u=0,x=0;for(let t=0,m=r.getPathCount();t<m;++t){const M=Math.abs(r.calculateRingArea2D(t));M>x&&(x=M,u=t)}const a=new g;if(Math.abs(x)<=2*o*o?a.setNAN():a.assign(oe(r,u)),Number.isNaN(a.x)){const t=new D;return r.queryPathEnvelope(u,t),new w({pt:t.getCenter()})}if(r.getPointCount()<4)return new w({x:a.x,y:a.y});const b=g.getNAN(),n=[b.clone(),b.clone(),b.clone(),b.clone()],f=[Number.NaN,Number.NaN,Number.NaN,Number.NaN],N=[Number.NaN,Number.NaN,Number.NaN,Number.NaN];let E=!1,y=new A().getNearestCoordinate(r,a,!0,!1);if(y.m_distance===0&&(E=!0,n[0]=a,y=new A().getNearestCoordinate(r,a,!1,!1),y.m_distance>.25*s.minDimension()*1.66666666))return new w({x:a.x,y:a.y});f[0]=y.m_distance,N[0]=0;const d=new g;let c=!1,i=.25,p=-1;const _=new D;r.queryPathEnvelope(u,_);do{let t=Number.NaN;if(n[1]=this.calculateParacentroid_(r,G(_.xmin,_.xmax,i),o),n[1].isNAN()||(y=new A().getNearestCoordinate(r,n[1],!1,!1),t=y.m_distance),t>o&&X(r,n[1],o)===1)c=!0,f[1]=t,N[1]=g.sqrDistance(n[1],a);else if(t>p&&(p=t,d.setCoordsPoint2D(n[1])),i-=.01,i<.1){if(!(p>=0))break;c=!0,f[1]=p,n[1]=d,N[1]=g.sqrDistance(n[1],a)}}while(!c);c=!1,i=.5,p=-1;let T=.01,j=1;do{let t=Number.NaN;if(n[2]=this.calculateParacentroid_(r,G(_.xmin,_.xmax,i),o),n[2].isNAN()||(y=new A().getNearestCoordinate(r,n[2],!1,!1),t=y.m_distance),t>o&&X(r,n[2],o)===1)c=!0,f[2]=t,N[2]=g.sqrDistance(n[2],a);else if(t>p&&(p=t,d.setCoordsPoint2D(n[2])),i=.5+T*j,T+=.01,j*=-1,i<.3||i>.7){if(!(p>=0))break;c=!0,f[2]=p,n[2]=d,N[2]=g.sqrDistance(n[2],a)}}while(!c);c=!1,i=.75,p=-1;do{let t=Number.NaN;if(n[3]=this.calculateParacentroid_(r,G(_.xmin,_.xmax,i),o),n[3].isNAN()||(y=new A().getNearestCoordinate(r,n[3],!1,!1),t=y.m_distance),t>o&&X(r,n[3],o)===1)c=!0,f[3]=t,N[3]=g.sqrDistance(n[3],a);else if(t>p&&(p=t,d.setCoordsPoint2D(n[3])),i+=.01,i>.9){if(!(p>=0))break;c=!0,f[3]=p,n[3]=d,N[3]=g.sqrDistance(n[3],a)}}while(!c);const h=[0,1,2,3],S=E?0:1;for(let t=S;t<4;t++)for(let m=S;m<3;m++){const M=N[m],R=N[m+1];if(H(M,R)>0){const B=h[m];h[m]=h[m+1],h[m+1]=B,N[m]=R,N[m+1]=M}}let q=S,O=0,C=0;for(let t=S;t<4;t++){switch(t){case 0:C=2*f[h[t]];break;case 1:C=1.66666666*f[h[t]];break;case 2:C=1.33333333*f[h[t]];break;case 3:C=f[h[t]]}C>O&&(O=C,q=h[t])}return k(!n[q].isNAN()),new w({x:n[q].x,y:n[q].y})}labelPointPolyline(e){const s=new g;if(e.getPointCount()>2*e.getPathCount()){let o=-1,l=-Number.MAX_VALUE;for(let a=0,b=e.getPathCount();a<b;a++)if(e.getPathSize(a)>2){const n=e.calculatePathLength2D(a);n>l&&(l=n,o=a)}const r=e.getPathStart(o),u=e.getPathEnd(o),x=Math.trunc((r+u)/2);s.assign(e.getXY(x))}else{let o=-Number.MAX_VALUE;const l=e.querySegmentIterator();for(;l.nextPath();)if(l.hasNextSegment()){const r=l.nextSegment(),u=r.calculateLength2D();u>o&&(o=u,s.assign(r.getCoord2D(r.lengthToT(.5*u))))}}return new w({x:s.x,y:s.y})}labelPointMultiPoint(e){const s=new D;e.queryEnvelope(s);const o=s.getCenter(),l=new A().getNearestCoordinate(e,o,!1,!1).m_coordinate;return new w({x:l.x,y:l.y})}labelPointEnvelope(e){const s=e.getCenterXY();return new w({x:s.x,y:s.y})}calculateParacentroid_(e,s,o){const l=new D;e.queryEnvelope(l);const r=new g(s,0);let u=Number.MAX_VALUE,x=Number.MAX_VALUE,a=!1,b=!1;const n=new te;n.setStartXYCoords(r.x,l.ymin-1),n.setEndXYCoords(r.x,l.ymax+1);const f=new D,N=new g,E=new g,y=J(g,2),d=e.querySegmentIterator();for(;d.nextPath();)for(;d.hasNextSegment();){const c=d.nextSegment();if(c.queryEnvelope(f),k(c.isMonotoneQuickAndDirty()),N.setCoordsPoint2D(n.getStartXY()),E.setCoordsPoint2D(n.getEndXY()),f.clipLine(N,E)===0||n.intersect(c,y,null,null,o)!==1)continue;const i=y[0].y;u>x?i<u&&(u=i,a=!0):i<x&&(x=i,b=!0)}return a&&b?r.y=(u+x)/2:r.setNAN(),r}}const L=new se;function ae(P){return L.execute(P,null)}function ie(P){const e=L.executeMany(new ne(P),null);return Array.from(e)}function le(){return L.supportsCurves()}function z(P){return V(ae(I(P)),U(P))}function Q(P){const e=P.map(I),s=U(P);return ie(e).map(o=>V(o,s))}const Z=le(),de=Object.freeze(Object.defineProperty({__proto__:null,execute:z,executeMany:Q,supportsCurves:Z},Symbol.toStringTag,{value:"Module"})),be=Object.freeze(Object.defineProperty({__proto__:null,execute:z,executeMany:Q,supportsCurves:Z},Symbol.toStringTag,{value:"Module"}));export{de as c,be as l};
