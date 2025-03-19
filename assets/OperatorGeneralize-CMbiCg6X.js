import{an as x,ao as D}from"./Accessor-BmwT4B0c.js";import{t as v}from"./SimpleGeometryCursor-B92kdZ15.js";import{P as z,j as w,l as C,a as f,f as G,h as E,z as R,c as S,e as P,M as T}from"./Transformation2D-CV3xaSnP.js";import{e as X,a as Y,N as I,o as N,s as b}from"./ProjectionTransformation-BlFTV7sx.js";class j{getOperatorType(){return 10204}supportsCurves(){return!0}accelerateGeometry(t,e,r){return!1}canAccelerateGeometry(t){return!1}executeMany(t,e,r,n){return new y(t,e,r,n)}execute(t,e,r,n){return t||z("null param is not allowed."),new y(null,e,r,n).generalize(t)}}class y extends v{constructor(t,e,r,n){super(),this.m_pline=null,this.m_point=new X,this.m_stack=[],this.m_resultstack=[],this.m_callCount=0,this.m_progressTracker=n,this.m_geoms=t,this.m_maxDeviation=e,this.m_bRemoveDegenerateParts=r}tock(){return!0}getRank(){return 1}next(){const t=this.m_geoms.next();return t===null?null:(w(t),this.generalize(t))}getGeometryID(){return this.m_geoms.getGeometryID()}generalize(t){const e=t.getGeometryType();if(C(e))return t;if(e===f.enumEnvelope){const s=new Y({vd:t.getDescription()});return s.addEnvelope(t,!1),this.generalize(s)}if(G(e)){const s=new I({vd:t.getDescription()});return s.addSegment(t,!0),this.generalize(s)}if(E(e)||R(""),t.isEmpty()||this.m_maxDeviation<=0)return t;const r=new N().execute(t,0,.05*this.m_maxDeviation,0,this.m_progressTracker);t.hasNonLinearSegments()&&(this.m_maxDeviation*=.95);const n=r,h=t.createInstance();h.getGeometryType()===f.enumPolygon&&h.setFillRule(t.getFillRule()),this.m_xy=n.getAttributeStreamRef(0);{const s={stack:[],error:void 0,hasError:!1};try{const m=new b;this.m_pline=m,x(s,S(()=>{this.m_pline=null},!1),!1);for(let a=0,l=n.getPathCount();a<l;a++)this.generalizePath(n.getImpl(),a,h.getImpl())}catch(m){s.error=m,s.hasError=!0}finally{D(s)}}return this.m_resultstack.length=0,this.m_stack.length=0,h}generalizePath(t,e,r){if(t.getPathSize(e)<2)return;this.m_resultstack.length=0,this.m_stack.length=0;const n=t.getPathStart(e),h=t.getPathEnd(e)-1,s=t.isClosedPath(e),m=t.isClosedPathInXYPlane(e);let a=0,l=-1;this.m_stack.push(s?n:h),this.m_stack.push(n);let o=!1,c=!1;for(!this.m_bRemoveDegenerateParts&&m&&(o=!0,c=!0);this.m_stack.length>1;){const i=this.m_stack.at(-1);this.m_stack.pop();const g=this.m_stack.at(-1);let k=t.getXY(i);this.m_pline.setStartXY(k),k=t.getXY(g),this.m_pline.setEndXY(k);const p=[Number.NaN];let u=this.findGreatestDistance(i,g,h,p);u>=0&&(o?o=!1:(c&&p[0]>a&&(a=p[0],l=u),p[0]<=this.m_maxDeviation&&(u=-1))),u>=0?(this.m_stack.push(u),this.m_stack.push(i)):this.m_resultstack.push(i)}s||this.m_resultstack.push(this.m_stack[0]);const _=this.m_resultstack.length;if(_===t.getPathSize(e)&&_===this.m_stack.length)r.addPath(t,e,!0);else if(this.m_resultstack.length>0){if(this.m_bRemoveDegenerateParts&&this.m_resultstack.length<=2&&(s||this.m_resultstack.length===1||P.distance(t.getXY(this.m_resultstack[0]),t.getXY(this.m_resultstack[1]))<=this.m_maxDeviation))return;if(c&&l>=0&&a<=this.m_maxDeviation){const i=this.m_resultstack.at(-1)>l;this.m_resultstack.push(l),i&&(this.m_resultstack[this.m_resultstack.length-2]=T(this.m_resultstack[this.m_resultstack.length-1],this.m_resultstack[this.m_resultstack.length-1]=this.m_resultstack[this.m_resultstack.length-2]))}for(let i=0,g=this.m_resultstack.length;i<g;i++)t.getPointByVal(this.m_resultstack[i],this.m_point),i===0?r.startPathPoint(this.m_point):r.lineToPoint(this.m_point);if(s){for(let i=this.m_resultstack.length;i<3;i++)r.lineToPoint(this.m_point);r.closePathWithLine()}}}findGreatestDistance(t,e,r,n){let h=e-1;e<=t&&(h=r);let s=-1,m=0;const a=new P;for(let l=t+1;l<=h;l++){this.m_xy.queryPoint2D(2*l,a);const o=a.x,c=a.y,_=this.m_pline.getClosestCoordinate(a,!1);a.assign(this.m_pline.getCoord2D(_)),a.x-=o,a.y-=c;const i=a.length();i>m&&(s=l,m=i),this.m_callCount++}return n[0]=m,s}}export{j as P};
