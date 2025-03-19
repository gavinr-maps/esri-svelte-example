import{s as C,h as _}from"./Accessor-BHnuXKD2.js";import{P as tt,x as B,g as D,O as et}from"./Point-XGrwlf63.js";import{P as nt,j as st}from"./Polyline-BmuD2-ZN.js";import{i as q,d as at,t as it}from"./geodesicConstants-yASAK_zX.js";function H(t){if(!t)return null;const n=t.wkid;if(n)return at[n];const e=t.wkt2??t.wkt;return e?ot(e):null}function ot(t){const n=it.exec(t);if(!n||n.length!==2)return null;const e=n[1].split(",");if(!e||e.length<3)return null;const c=parseFloat(e[1]),s=parseFloat(e[2]);return isNaN(c)||isNaN(s)?null:{a:c,f:s===0?0:1/s}}function G(t){const n=H(t);if(rt(n))return n;const e=n.a*(1-n.f);return Object.assign(n,{b:e,eSq:1-(e/n.a)**2,radius:(2*n.a+e)/3,densificationRatio:1e4/((2*n.a+e)/3)})}function rt(t){return t!=null&&"b"in t&&"eSq"in t&&"radius"in t}function E(t,n,e){const{a:c,eSq:s}=G(e),a=Math.sqrt(s),i=Math.sin(n[1]*q),l=c*n[0]*q;let r;return s>0?r=c*((1-s)*(i/(1-s*(i*i))-1/(2*a)*Math.log((1-a*i)/(1+a*i))))*.5:r=c*i,t[0]=l,t[1]=r,t}function I(t){return tt(t)&&!!H(t)}function pt(t,n="square-meters"){if(t.some(i=>!I(i.spatialReference)))throw new C("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const e=[];for(let i=0;i<t.length;i++){const l=t[i],r=l.spatialReference,{radius:h,densificationRatio:u}=G(r),o=h*u;e.push(ht(l,o))}const c=[],s=[0,0],a=[0,0];for(let i=0;i<e.length;i++){const{rings:l,spatialReference:r}=e[i];let h=0;for(let u=0;u<l.length;u++){const o=l[u];E(s,o[0],r),E(a,o[o.length-1],r);let M=a[0]*s[1]-s[0]*a[1];for(let d=0;d<o.length-1;d++)E(s,o[d+1],r),E(a,o[d],r),M+=a[0]*s[1]-s[0]*a[1];h+=M}h=B(h,"square-meters",n),c.push(h/-2)}return c}function Mt(t,n="meters"){if(!t)throw new C("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(c=>!I(c.spatialReference)))throw new C("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const e=[];for(let c=0;c<t.length;c++){const s=t[c],{spatialReference:a}=s,i=s.type==="polyline"?s.paths:s.rings;let l=0;for(let r=0;r<i.length;r++){const h=i[r];let u=0;for(let o=1;o<h.length;o++){const M=h[o-1][0],d=h[o][0],m=h[o-1][1],g=h[o][1];if(m!==g||M!==d){const p=new J;K(p,[M,m],[d,g],a),u+=p.distance}}l+=u}l=B(l,"meters",n),e.push(l)}return e}function ht(t,n){if(t.type!=="polyline"&&t.type!=="polygon")throw new C("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:e}=t;if(!I(e))throw new C("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const c=t.type==="polyline"?t.paths:t.rings,s=[],a=[0,0],i=new J;for(const r of c){const h=[];s.push(h),h.push([r[0][0],r[0][1]]);let u,o,M=r[0][0],d=r[0][1];for(let m=0;m<r.length-1;m++){if(u=r[m+1][0],o=r[m+1][1],M===u&&d===o)continue;const g=[M,d];K(i,[M,d],[u,o],e);const{azimuth:p,distance:v}=i,w=v/n;if(w>1){for(let j=1;j<=w-1;j++)U(a,g,p,j*n,e),h.push(a.slice());U(a,g,p,(v+Math.floor(w-1)*n)/2,e),h.push(a.slice())}U(a,g,p,v,e),h.push(a.slice()),M=a[0],d=a[1]}}const l=_(D,e);return t.type==="polyline"?new nt({paths:s,spatialReference:l}):new st({rings:s,spatialReference:l})}class J{constructor(n=0,e=void 0,c=void 0){this.distance=n,this.azimuth=e,this.reverseAzimuth=c}}function U(t,n,e,c,s){const a=n[0],i=n[1],l=a*q,r=i*q,h=(e??0)*q,{a:u,b:o,f:M}=G(s),d=Math.sin(h),m=Math.cos(h),g=(1-M)*Math.tan(r),p=1/Math.sqrt(1+g*g),v=g*p,w=Math.atan2(g,m),j=p*d,P=j*j,z=1-P,f=z*(u*u-o*o)/(o*o),S=1+f/16384*(4096+f*(f*(320-175*f)-768)),k=f/1024*(256+f*(f*(74-47*f)-128));let R,$,y,b=c/(o*S),F=2*Math.PI;for(;Math.abs(b-F)>1e-12;)y=Math.cos(2*w+b),R=Math.sin(b),$=Math.cos(b),F=b,b=c/(o*S)+k*R*(y+k/4*($*(2*y*y-1)-k/6*y*(4*R*R-3)*(4*y*y-3)));const N=v*R-p*$*m,A=Math.atan2(v*$+p*R*m,(1-M)*Math.sqrt(P+N*N)),x=M/16*z*(4+M*(4-3*z)),O=Math.atan2(R*d,p*$-v*R*m)-(1-x)*M*j*(b+x*R*(y+x*$*(2*y*y-1)));return t[0]=(l+O)/q,t[1]=A/q,t}function K(t,n,e,c){const s=n[0]*q,a=n[1]*q,i=e[0]*q,l=e[1]*q,{a:r,b:h,f:u,radius:o}=G(c),M=i-s,d=Math.atan((1-u)*Math.tan(a)),m=Math.atan((1-u)*Math.tan(l)),g=Math.sin(d),p=Math.cos(d),v=Math.sin(m),w=Math.cos(m);let j,P,z,f,S,k,R,$,y,b,F=1e3,N=M;do{if(R=Math.sin(N),$=Math.cos(N),z=Math.sqrt(w*R*(w*R)+(p*v-g*w*$)*(p*v-g*w*$)),z===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;S=g*v+p*w*$,k=Math.atan2(z,S),y=p*w*R/z,P=1-y*y,f=S-2*g*v/P,isNaN(f)&&(f=0),b=u/16*P*(4+u*(4-3*P)),j=N,N=M+(1-b)*u*y*(k+b*z*(f+b*S*(2*f*f-1)))}while(Math.abs(N-j)>1e-12&&--F>0);if(F===0){const T=o,V=Math.acos(Math.sin(a)*Math.sin(l)+Math.cos(a)*Math.cos(l)*Math.cos(i-s))*T,W=i-s,X=Math.sin(W)*Math.cos(l),Y=Math.cos(a)*Math.sin(l)-Math.sin(a)*Math.cos(l)*Math.cos(W),Z=Math.atan2(X,Y);return t.azimuth=Z/q,t.distance=V,t.reverseAzimuth=void 0,t}const A=P*(r*r-h*h)/(h*h),x=A/1024*(256+A*(A*(74-47*A)-128)),O=h*(1+A/16384*(4096+A*(A*(320-175*A)-768)))*(k-x*z*(f+x/4*(S*(2*f*f-1)-x/6*f*(4*z*z-3)*(4*f*f-3)))),L=Math.atan2(w*Math.sin(N),p*v-g*w*Math.cos(N)),Q=Math.atan2(p*Math.sin(N),p*v*Math.cos(N)-g*w);return t.azimuth=L/q,t.distance=O,t.reverseAzimuth=Q/q,t}function dt(t){return I(t)?t:et(t)?D.WGS84:null}export{dt as N,Mt as R,J as b,U as j,K as q,pt as v,I as y,ht as z};
