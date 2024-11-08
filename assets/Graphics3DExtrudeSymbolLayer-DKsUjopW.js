import{b as Tt,g as K}from"./subclass-BZA_h8Db.js";import{W as zt}from"./Point-Cg0-ChZE.js";import{e as wt}from"./earcut-Lltz9D9k.js";import{j as Ut}from"./mat3-BRl2i9Bz.js";import{e as Nt}from"./mat3f64-BBpwCtoL.js";import{h as Vt,e as jt}from"./mat4-GpOFENPA.js";import{e as Y}from"./mat4f64-Dk4dwAN8.js";import{b as Ft,s as Gt,A as tt,o as N,c as lt,_ as Ct,E as k,R as pt}from"./vec32-Dvg_eL9J.js";import{u as Ht,t as kt,_ as Wt,n as I}from"./vec3f64-BLpZdpfb.js";import{C as Zt}from"./computeTranslationToOriginAndRotation-Q27G6TBL.js";import{t as U,b as V,u as qt,m as Jt,A as Kt}from"./aaBoundingBox-BE7cC1jD.js";import{A as Ot,i as ht}from"./Indices-DflDlU4Z.js";import{e as Qt}from"./vec3-kbEkneOB.js";import{t as Xt,e as ut}from"./SnappingCandidate-O5eRSE6e.js";import{a as Yt}from"./renderingInfoUtils-DAsRBUXK.js";import{l as te}from"./ViewingMode-Dodu7ZZk.js";import{u as ee,g as mt,A as ne,R as se}from"./RibbonLine.glsl-BZu1FDpE.js";import{y as oe,e as dt,j as ie,p as ae,a as re}from"./LineCallout.glsl-C1R4fy2f.js";import{U as ce,b as le}from"./graphicUtils-CWEFaVJb.js";import"./geometry-D964gYQX.js";import{n as pe,v as he}from"./Polyline-D9YkgmM_.js";import{c as ue,a as It,p as At}from"./triangulationUtils-DWWEtF_0.js";import{t as L}from"./orientedBoundingBox-DOAJUK5g.js";import{e as et,t as me}from"./Material-_xx7OZxD.js";import{p as nt}from"./Texture-Fac_8AOC.js";import{e as C}from"./VertexAttribute-Cq4MnHjR.js";import{w as de}from"./Extent-Bf3YTe7m.js";import{a as ge}from"./edgeUtils-BUKTgPFR.js";import{r as fe}from"./ElevationProvider-C95wyCKc.js";import{n as ye}from"./projectBuffer-Bs7GwaPY.js";import{r as be}from"./OverlayCompositing.glsl-CiE3Tt8y.js";import{b as _e}from"./Matrix3DrawUniform-CiBFaSz6.js";import{e as Q}from"./renderState-DQLu6AJX.js";import{e as xe,s as Se}from"./Normals-DzBXR8Bg.js";import{B as gt}from"./DefaultMaterial-DgOvtNL9.js";function Sn(t,e,n){const o=(e.length>0?e[0]:t.length/3)-1,s=ue(t,o,n);if(s!==pe.Z){t=t.slice();for(let i=0;i<t.length;i+=3)t[i+s]=t[i+2]}return wt(t,e,3)}function Pn(t){const e=[[C.POSITION,new L(t.attributeData.position,t.indices,3,!0)]],n=Ot(t.indices.length);return t.attributeData.colorFeature!=null?e.push([C.COLORFEATUREATTRIBUTE,new L([t.attributeData.colorFeature],n,1,!0)]):t.attributeData.color&&e.push([C.COLOR,new L(t.attributeData.color,n,4,!0)]),t.attributeData.uvMapSpace&&e.push([C.UVMAPSPACE,new L(t.attributeData.uvMapSpace,t.indices,4,!0)]),t.attributeData.boundingRect&&e.push([C.BOUNDINGRECT,new L(t.attributeData.boundingRect,t.indices,9,!0)]),new nt(t.material,e,t.mapPositions,et.Mesh,t.attributeData.objectAndLayerIdColor)}function En(t,e=null){const n=[[C.POSITION,new L(t.attributeData.position,t.indices,3,!0)],[C.UV0,new L(t.attributeData.uv0,t.indices,2,!0)]];return new nt(t.material,n,t.mapPositions,et.Mesh,e)}function Pe(t){switch(t.type){case"extent":if(t instanceof de)return he.fromExtent(t);break;case"polygon":return t}return null}let wn=class{constructor(e,n,o){this.renderData=e,this.layerUid=n,this.graphicUid=o,this.outGeometries=new Array}};function Ee(t,e,n,o){const s=It(t.rings,!!t.hasZ&&o.mode!=="on-the-ground",At.CCW_IS_HOLE,t.spatialReference),i=U(s.position.length),a=ee(s.position,t.spatialReference,0,i,0,s.position,0,s.position.length/3,e,n,o),c=a!=null;return new Oe(s.position,i,vt(s.polygons,s.position,i),Mt(s.outlines,s.position,i),c,a)}function On(t,e){const n=It(t.rings,!1,At.CCW_IS_HOLE),o=ye(n.position,t.spatialReference,0,n.position,e,0);for(let s=2;s<n.position.length;s+=3)n.position[s]=be;return{position:n.position,polygons:vt(n.polygons,n.position),outlines:Mt(n.outlines,n.position),projectionSuccess:o}}function Mt(t,e,n=null){return t.filter(({count:o})=>o>1).map(({index:o,count:s})=>{const i=3*o,a=3*s;return n!=null?new Rt(o,s,V(e,i,a),V(n,i,a)):new st(o,s,V(e,i,a))})}function vt(t,e,n=null){const o=new Array;for(const{index:s,count:i,holeIndices:a,pathLengths:c}of t){if(i<=1)continue;const l=3*s,g=3*i,y=a.map(m=>m-s),d=n!=null?new we(s,i,V(e,3*s,3*i),V(n,l,g),y,c):new Ce(s,i,V(e,3*s,3*i),y,c);o.push(d)}return o}class st{constructor(e,n,o){this.index=e,this.count=n,this.position=o}}class Rt extends st{constructor(e,n,o,s){super(e,n,o),this.mapPositions=s}}class we extends Rt{constructor(e,n,o,s,i,a){super(e,n,o,s),this.holeIndices=i,this.pathLengths=a}}class Ce extends st{constructor(e,n,o,s,i){super(e,n,o),this.holeIndices=s,this.pathLengths=i}}class Oe{constructor(e,n,o,s,i,a){this.position=e,this.mapPositions=n,this.polygons=o,this.outlines=s,this.projectionSuccess=i,this.sampledElevation=a}}const Ie=["polygon","extent"];class In extends oe{constructor(e,n,o,s){super(e,n,o,s),this.ensureDrapedStatus(!1)}async doLoad(){var g,y,d,m;if(!this._drivenProperties.size){const S=ce(this._getSymbolSize());if(S)throw new Tt("graphics3dextrudesymbollayer:invalid-size",S)}const e=(y=(g=this.symbolLayer)==null?void 0:g.material)==null?void 0:y.color,n=this._getCombinedOpacityAndColor(e),o=Ht(n),s=n[3],i=s<1||this.needsDrivenTransparentPass,a=(m=(d=this.symbolLayer)==null?void 0:d.material)==null?void 0:m.emissiveFactor,c=a?Ft(kt(a)):Wt,l={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0,diffuse:o,ambient:o,opacity:s,transparent:i,cullFace:i?Q.None:Q.Back,hasVertexColors:!0,hasSlicePlane:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows,emissiveFactor:c,offsetTransparentBackfaces:!0,normalType:_e.Compressed};this._materials[v.Main]=new gt(l,this._context),this._materials[v.Bottom]=new gt({...l,cullFace:Q.Back},this._context),this._context.stage.addMany(this._materials)}destroy(){super.destroy(),this._context.stage.removeMany(this._materials),this._materials.length=0}createGraphics3DGraphic(e){const n=e.graphic;if(!this._validateGeometry(n.geometry,Ie,this.symbolLayer.type))return null;const o=this._getVertexOpacityAndColor(e.renderingInfo,255),s=this.setGraphicElevationContext(n);return this._createAs3DShape(n,e.renderingInfo,o,s,n.uid)}layerOpacityChanged(e,n){var c,l,g,y;const o=(l=(c=this.symbolLayer)==null?void 0:c.material)==null?void 0:l.color,s=this._getCombinedOpacity(o),i=s<1||this.needsDrivenTransparentPass;(g=this._materials[v.Main])==null||g.setParameters({opacity:s,transparent:i}),(y=this._materials[v.Bottom])==null||y.setParameters({opacity:s,transparent:i});const a=this._getLayerOpacity();e.forEach(d=>{var m;return(m=n(d))==null?void 0:m.layerOpacityChanged(a,this._context.isAsync)})}layerElevationInfoChanged(e,n){return this.updateGraphics3DGraphicElevationInfo(e,n,mt)}slicePlaneEnabledChanged(e,n){var o,s;return(o=this._materials[v.Main])==null||o.setParameters({hasSlicePlane:this._context.slicePlaneEnabled}),(s=this._materials[v.Bottom])==null||s.setParameters({hasSlicePlane:this._context.slicePlaneEnabled}),e.forEach(i=>{const a=n(i);a!=null&&a.slicePlaneEnabledChanged(this._context.slicePlaneEnabled,this._context.isAsync)}),!0}physicalBasedRenderingChanged(){var n,o;const e={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0};return(n=this._materials[v.Main])==null||n.setParameters(e),(o=this._materials[v.Bottom])==null||o.setParameters(e),!0}_getExtrusionSize(e){let n;return n=e.size&&this._drivenProperties.size?Yt(e.size,2)??0:this._getSymbolSize(),n/=this._context.renderCoordsHelper.unitInMeters,n}applyRendererDiff(e,n){return this._drivenPropertiesChanged(n)?dt.RecreateSymbol:dt.RecreateGraphics}async queryForSnapping(e,n,o,s){const i=this._getExtrusionSize(o)*this._context.renderCoordsHelper.unitInMeters/zt(n),{objectId:a,target:c}=e,l=K(c);switch(l.z=(l.z??0)+i,e.type){case"edge":{const{start:g,end:y}=e,d=K(g),m=K(y);return d.z=(d.z??0)+i,m.z=(m.z??0)+i,[ut(a,l,1/0,d,m)]}case"vertex":return[Xt(a,l,1/0),ut(a,c,1/0,c,l)];default:return[]}}_getSymbolSize(){return this.symbolLayer.size??1}_createAs3DShape(e,n,o,s,i){const a=Pe(e.geometry);if(a==null)return null;if(a.rings.length===0||!a.rings.some(A=>A.length>0))return this._logGeometryValidationWarnings(a.rings,"rings","ExtrudeSymbol3DLayer"),null;const c=Ee(a,this._context.elevationProvider,this._context.renderCoordsHelper,s);this._logGeometryCreationWarnings(c,a.rings,"rings","ExtrudeSymbol3DLayer");const l=le(a);if(l==null)return null;const g=new Array,y=new Array,d=qt(),m=Y(),S=I(),p=this._context.renderCoordsHelper.viewingMode===te.Global;p||this._context.renderCoordsHelper.worldUpAtPosition(null,S),Zt(a.spatialReference,[l.x,l.y,0],m,this._context.renderCoordsHelper.spatialReference);const b=Y();Vt(b,m);const f=Nt();Ut(f,b);const{polygons:x,mapPositions:u,position:_}=c,h=new Map,P=this._materials[v.Main];for(const A of x){const D=A.count;if(this._context.clippingExtent&&(Jt(A.mapPositions,d),!Kt(d,this._context.clippingExtent)))continue;const $=wt(A.mapPositions,A.holeIndices,3);if($.length===0)continue;const B=$.length,T=6*D,W=ht(T+B),Z=ht(B),F=U(3*T),ot=U(3*T),it=U(3*T),at=U(T);Ae(_,u,$,A,F,it,ot,at,W,Z,this._getExtrusionSize(n),S,p),Qt(F,F,b);const rt=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:i,layerUid:this._context.layer.uid}),q=new ze(F,it,xe(ot),at),J=ft(P,W,W.length-Z.length,q,o,rt),Dt=D,$t=D,Bt=2*A.count,ct=new Ue(Dt,$t,Bt,B/3);Lt(J,ct,m),h.set(J,ct),g.push(J,ft(this._materials[v.Bottom],Z,0,q,o,rt)),y.push(q.heights)}if(g.length===0)return null;const r=new ne({geometries:g,layerUid:this._context.layer.uid,graphicUid:i,isElevationSource:!0});r.transformation=m;const E=ge(this.symbolLayer,{opacity:this._getLayerOpacity()}),w=E?new ie(this._materials[v.Main],E,this._context.slicePlaneEnabled):null,R=new ae(this,r,g,null,null,(A,D,$,B,T)=>Re(A,D,$,B,T,y,h),s,w);return R.alignedSampledElevation=c.sampledElevation,R.needsElevationUpdates=mt(s.mode),R}}function ft(t,e,n,o,s,i){const a=Ot(e.length),c=[[C.POSITION,new L(o.positions,e,3,!0)],[C.NORMALCOMPRESSED,new L(o.normals,e,2,!0)],[C.COLOR,new L(s,a,4,!0)]];return new nt(t,c,o.elevation,et.Mesh,i,n)}function Ae(t,e,n,o,s,i,a,c,l,g,y,d,m){{const S=n.length/3,p=2*o.count;Me(t,e,o.index,o.count,n,0,S,s,i,a,c,l,g,p,y,d,m)}{let S=0,p=2*o.count,b=0;const f=o.pathLengths[0];yt(s,i,c,a,S,f,o.count,p,l,b,y),p+=4*f,b+=2*f,S+=f;for(let x=1;x<o.pathLengths.length;++x){const u=o.pathLengths[x];yt(s,i,c,a,S,u,o.count,p,l,b,y),p+=4*u,b+=2*u,S+=u}}}function Me(t,e,n,o,s,i,a,c,l,g,y,d,m,S,p,b,f){Gt(M,b);{const x=p>0?1:-1;let u=3*n,_=0,h=3*_,P=o,r=3*P;for(let E=0;E<o;++E){const w=t[u],R=t[u+1],A=t[u+2];f&&(M[0]=w,M[1]=R,M[2]=A,tt(M,M)),c[h+0]=w,c[h+1]=R,c[h+2]=A;const D=e[u+0],$=e[u+1],B=e[u+2];l[h+0]=D,l[h+1]=$,l[h+2]=B,g[h+0]=-x*M[0],g[h+1]=-x*M[1],g[h+2]=-x*M[2],y[_]=0,c[r+0]=w+p*M[0],c[r+1]=R+p*M[1],c[r+2]=A+p*M[2],l[r+0]=D,l[r+1]=$,l[r+2]=B,y[P]=p,h+=3,r+=3,u+=3,_+=1,P+=1}}{let x=3*i,u=0,_=3*S;const h=p<0?Et:Pt,P=p<0?Pt:Et;for(let r=0;r<a;++r)m[u]=s[x+h[0]],m[u+1]=s[x+h[1]],m[u+2]=s[x+h[2]],d[_]=s[x+P[0]]+o,d[_+1]=s[x+P[1]]+o,d[_+2]=s[x+P[2]]+o,u+=3,_+=3,x+=3}}function G(t,e,n,o,s,i,a){o[i]=o[a],a*=3,t[i*=3]=t[a],t[i+1]=t[a+1],t[i+2]=t[a+2],e[i]=e[a],e[i+1]=e[a+1],e[i+2]=e[a+2],n[i]=s[0],n[i+1]=s[1],n[i+2]=s[2]}const j=I();function yt(t,e,n,o,s,i,a,c,l,g,y){let d=s,m=s+1,S=s+a,p=s+a+1,b=c,f=c+1,x=c+2*i,u=c+2*i+1;y<0&&(d=s+a+1,p=s);let _=3*g;for(let h=0;h<i;++h)h===i-1&&(m=s,y>0?p=s+a:d=s+a),ve(t,d,m,S,j),G(t,e,o,n,j,b,d),G(t,e,o,n,j,f,m),G(t,e,o,n,j,x,S),G(t,e,o,n,j,u,p),l[_]=b,l[_+1]=x,l[_+2]=u,l[_+3]=b,l[_+4]=u,l[_+5]=f,_+=6,d++,m++,S++,p++,b+=2,f+=2,x+=2,u+=2}const X=I(),bt=I(),_t=I(),xt=I(),St=I();function ve(t,e,n,o,s){e*=3,n*=3,o*=3,N(X,t[e++],t[e++],t[e++]),N(bt,t[n++],t[n++],t[n++]),N(_t,t[o++],t[o++],t[o++]),lt(xt,bt,X),lt(St,_t,X),Ct(s,St,xt),tt(s,s)}const z=I();function Re(t,e,n,o,s,i,a){const c=t.stageObject,l=c.geometries,g=l.length,y=e.mode!=="absolute-height";let d=0;const m=c.transformation,S=jt(Y(),m);for(let p=0;p<g;p+=2){const b=l[p];if(!re(b))continue;const f=b.getMutableAttribute(C.POSITION).data,x=i[p/2],u=new fe(b.mapPositions),_=f.length/3;let h=!1,P=0;{let r=0;for(let E=0;E<_;E++){z[0]=f[r],z[1]=f[r+1],z[2]=f[r+2],o(u,H),y&&(P+=H.sampledElevation),me.TESTS_DISABLE_OPTIMIZATIONS?(N(O,u.array[u.offset],u.array[u.offset+1],H.z+x[r/3]),n!=null&&s.toRenderCoords(O,n,O),k(O,O,S)):(N(O,f[r],f[r+1],f[r+2]),k(O,O,m),s.setAltitude(O,H.z+x[r/3]),k(O,O,S)),f[r]=O[0],f[r+1]=O[1],f[r+2]=O[2];const w=Le/s.unitInMeters;(Math.abs(z[0]-f[r])>=w||Math.abs(z[1]-f[r+1])>=w||Math.abs(z[2]-f[r+2])>=w)&&(h=!0),u.offset+=3,r+=3}}if(h){const r=a.get(b);r&&Lt(b,r,m),c.geometryVertexAttributeUpdated(l[p],C.NORMALCOMPRESSED),b.invalidateBoundingInfo(),c.geometryVertexAttributeUpdated(l[p],C.POSITION),l[p+1].invalidateBoundingInfo(),c.geometryVertexAttributeUpdated(l[p+1],C.POSITION)}d+=P/_}return d/g}function Lt(t,e,n){const o=t.getMutableAttribute(C.POSITION),s=t.getMutableAttribute(C.NORMALCOMPRESSED).data,{topVertexStart:i,topVertexCount:a,topFaceStart:c,topFaceCount:l}=e,g=o.data,y=a,d=t.attributes.get(C.POSITION).indices,m=c+l,S=i+a,p=U(3*y);for(let h=0;h<y;++h){const P=3*h;p[P+0]=0,p[P+1]=0,p[P+2]=0}const b=De,f=$e,x=Be,u=Te,_=M;for(let h=c;h<m;++h){const P=3*h;for(let r=0;r<3;++r){const E=d[P+r];u[r]=E;const w=3*E;N(O,g[w+0],g[w+1],g[w+2]),k(b[r],O,n)}pt(f,b[1],b[0]),pt(x,b[2],b[0]),Ct(_,f,x),tt(_,_);for(let r=0;r<3;++r){const E=3*(u[r]-i);p[E+0]+=_[0],p[E+1]+=_[1],p[E+2]+=_[2]}}for(let h=i;h<S;++h){const P=3*(h-i),r=p[P+0],E=p[P+1],w=p[P+2],R=Math.sqrt(r*r+E*E+w*w);Se(s,h,r/R,E/R,w/R)}}const O=I(),M=I(),H=new se,Pt=[0,2,1],Et=[0,1,2],Le=.01,De=[I(),I(),I()],$e=I(),Be=I(),Te=[0,0,0];var v;(function(t){t[t.Main=0]="Main",t[t.Bottom=1]="Bottom"})(v||(v={}));class ze{constructor(e,n,o,s){this.positions=e,this.elevation=n,this.normals=o,this.heights=s}}class Ue{constructor(e,n,o,s){this.topVertexStart=e,this.topVertexCount=n,this.topFaceStart=o,this.topFaceCount=s}}export{Sn as a,Pe as b,On as c,wn as g,En as l,Pn as m,Ae as n,In as o,Ee as p};