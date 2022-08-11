import{h7 as S,$ as c,a0 as l,a1 as d,cf as h,as as m,h8 as w,dm as R,dD as v,U as J,w as u,f,bB as N}from"./index.ebaf2ed0.js";function O(r,t,e){const o=S(t);return r.map(a=>{const n=o.fromJSON(a);return n.spatialReference=e,n})}let s=class extends h{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const r=this.geometries.map(o=>o.toJSON()),t=this.geometries[0],e={};return e.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),e.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),e.geometries=JSON.stringify({geometryType:m(t),geometries:r}),this.transformation&&(e.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(e.transformForward=this.transformForward),e}};c([l()],s.prototype,"geometries",void 0),c([l({json:{read:{source:"outSR"}}})],s.prototype,"outSpatialReference",void 0),c([l()],s.prototype,"transformation",void 0),c([l()],s.prototype,"transformForward",void 0),s=c([d("esri.rest.support.ProjectParameters")],s);const p=s,$=w(p);async function j(r,t,e){t=$(t);const o=R(r),a={...o.query,f:"json",...t.toJSON()},n=t.outSpatialReference,i=m(t.geometries[0]),g=v(a,e);return J(o.path+"/project",g).then(({data:{geometries:y}})=>O(y,i,n))}async function F(r=null,t){var a,n;if(u.geometryServiceUrl)return u.geometryServiceUrl;if(!r)throw new f("internal:geometry-service-url-not-configured");let e;e="portal"in r?r.portal||N.getDefault():r,await e.load({signal:t});const o=(n=(a=e.helperServices)==null?void 0:a.geometry)==null?void 0:n.url;if(!o)throw new f("internal:geometry-service-url-not-configured");return o}async function k(r,t,e=null,o){const a=await F(e,o),n=new p;n.geometries=[r],n.outSpatialReference=t;const i=await j(a,n,{signal:o});if(i&&Array.isArray(i)&&i.length===1)return i[0];throw new f("internal:geometry-service-projection-failed")}export{F as getGeometryServiceURL,k as projectGeometry};
