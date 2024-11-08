import{o as at,r as tt}from"./mathUtils-C4_ghTv4.js";import{p as Bt,o as Jt,l as rt,m as Kt,x as Qt}from"./mat4-GpOFENPA.js";import{e as Ot}from"./mat4f64-Dk4dwAN8.js";import{r as Vt,_ as O}from"./vec2-maR1OrZI.js";import{r as U,n as Wt}from"./vec2f64-miziP1SN.js";import{o as G,I as b,A as ct,g as lt,E as K,u as Xt,s as st}from"./vec32-Dvg_eL9J.js";import{r as y,t as Yt,n as w}from"./vec3f64-BLpZdpfb.js";import{l as nt}from"./ViewingMode-Dodu7ZZk.js";import{v as Zt}from"./mathUtils-BG-eq9fO.js";import{r as ut}from"./tslib.es6-B3Jf3DVX.js";import{i as dt,a as tn}from"./ShaderTechniqueConfiguration-CBbn2DCi.js";var F=Math.PI,s=Math.sin,m=Math.cos,et=Math.tan,wt=Math.asin,it=Math.atan2,It=Math.acos,f=F/180,zt=864e5,Gt=2440588,St=2451545,nn={dec:0,ra:0};function en(t){return t.valueOf()/zt-.5+Gt}function S(t){return new Date((t+.5-Gt)*zt)}function L(t){return en(t)-St}var _=23.4397*f;function Dt(t,n){return it(s(t)*m(_)-et(n)*s(_),m(t))}function ot(t,n){return wt(s(n)*m(_)+m(n)*s(_)*s(t))}function Lt(t,n,i){return it(s(t),m(t)*s(n)-et(i)*m(n))}function Ht(t,n,i){return wt(s(n)*s(i)+m(n)*m(i)*m(t))}function _t(t,n){return f*(280.16+360.9856235*t)-n}function Rt(t){return f*(357.5291+.98560028*t)}function Ut(t){return f*(1.9148*s(t)+.02*s(2*t)+3e-4*s(3*t))}function Ft(t,n){return t+n+102.9372*f+F}function Ct(t,n){var i=Rt(t),e=Ft(i,Ut(i));return n||(n={dec:0,ra:0}),n.dec=ot(e,0),n.ra=Dt(e,0),n}var g={PolarException:{NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},getPosition:function(t,n,i,e){var a=f*-i,o=f*n,l=L(t),r=Ct(l,nn),d=_t(l,a)-r.ra;return e||(e={azimuth:0,altitude:0}),e.azimuth=Lt(d,o,r.dec),e.altitude=Ht(d,o,r.dec),e}},H=[[-.83,"sunrise","sunset"]];g.addTime=function(t,n,i){H.push([t,n,i])};var jt=9e-4;function on(t,n){return Math.round(t-jt-n/(2*F))}function ft(t,n,i){return jt+(t+n)/(2*F)+i}function mt(t,n,i){return St+t+.0053*s(n)-.0069*s(2*i)}function an(t,n,i){return It((s(t)-s(n)*s(i))/(m(n)*m(i)))}function ht(t){var n=f*(134.963+13.064993*t),i=f*(93.272+13.22935*t),e=f*(218.316+13.176396*t)+6.289*f*s(n),a=5.128*f*s(i),o=385001-20905*m(n);return{ra:Dt(e,a),dec:ot(e,a),dist:o}}g.getTimes=function(t,n,i){var e=f*-i,a=f*n,o=on(L(t),e),l=ft(0,e,o),r=Rt(l),d=Ut(r),c=Ft(r,d),M=ot(c,0),N=mt(l,r,c);function I(x){return mt(ft(an(x,a,M),e,o),r,c)}function P(x){var z=(s(x)-s(a)*s(M))/(m(a)*m(M));return z<-1?g.PolarException.MIDNIGHT_SUN:z>1?g.PolarException.POLAR_NIGHT:g.PolarException.NORMAL}var T,E,p,A,v,$={solarNoon:S(N),nadir:S(N-.5),polarException:g.PolarException.NORMAL};for(T=0,E=H.length;T<E;T+=1)v=N-((A=I((p=H[T])[0]*f))-N),$[p[1]]=S(v),$[p[2]]=S(A);return $.polarException=P(H[0][0]*f),$},g.getMoonPosition=function(t,n,i){var e=f*-i,a=f*n,o=L(t),l=ht(o),r=_t(o,e)-l.ra,d=Ht(r,a,l.dec);return d+=.017*f/et(d+10.26*f/(d+5.1*f)),{azimuth:Lt(r,a,l.dec),altitude:d,distance:l.dist}},g.getMoonFraction=function(t){var n=L(t),i=Ct(n),e=ht(n),a=149598e3,o=It(s(i.dec)*s(e.dec)+m(i.dec)*m(e.dec)*m(i.ra-e.ra)),l=it(a*s(o),e.dist-a*m(o));return(1+m(l))/2};const h={local:{altitude:1500,ambientAtNight:.1,ambientAtNoon:.45,ambientAtTwilight:.2,directAtNoon:.65,directAtTwilight:.7},global:{altitude:8e5,ambient:.015,direct:.75},planarDirection:{localAltitude:1e4,globalAltitude:1e6,globalAngles:{azimuth:1.3*Math.PI,altitude:.6*Math.PI}}};class D{constructor(n,i){this.direct=n,this.ambient=i}}function xn(t,n,i,e,a,o){G(o.ambient.color,1,1,1),o.ambient.intensity=h.global.ambient,G(o.direct.color,1,1,1),o.direct.intensity=h.global.direct;const l=n[2],r=tt((Math.abs(l)-h.local.altitude)/(h.global.altitude-h.local.altitude),0,1);let d;if(o.globalFactor=r,t!=null&&(d=g.getTimes(t,n[1],n[0])),r<1){let c;if(t!=null)c=dn(t,d,e);else{const M=qt(e);c={direct:{intensity:h.local.directAtNoon*M.direct,color:y(1,1,1)},ambient:{intensity:h.local.ambientAtNoon*M.ambient,color:y(1,1,1)},timeOfDay:"early afternoon"}}b(o.ambient.color,c.ambient.color,o.ambient.color,r),o.ambient.intensity=at(c.ambient.intensity,o.ambient.intensity,r),b(o.direct.color,c.direct.color,o.direct.color,r),o.direct.intensity=at(c.direct.intensity,o.direct.intensity,r),o.specularStrength=e==="rainy"||e==="snowy"||e==="foggy"?0:1,o.environmentStrength=e==="rainy"?.7:e==="snowy"||e==="foggy"?.75:1}o.noonFactor=t!=null?un(t,d):1,t!=null?kt(t,n,i,o.direct.directionToLightSource):rn(a,i,o.direct.directionToLightSource)}function rn(t,n,i){n===nt.Global?ct(q,t.eye):G(q,0,0,1),lt(B,t.viewForward,-1);const e=Zt(B,q),a=Math.max(e-2*J,0),o=.85*a/(a+1),l=Math.max(J,e-J-o);Bt(Pt,-l,t.viewRight),K(i,B,Pt),Xt(i,i,lt(fn,t.viewRight,mn)),ct(i,i)}function kt(t,n,i,e){const a=sn,o=Jt(ln);if(i===nt.Global)g.getPosition(t,0,0,a),G(e,0,0,-1),rt(o,o,-a.azimuth),Kt(o,o,-a.altitude),K(e,e,o);else{const l=h.planarDirection,r=l.globalAngles,d=n[2];let c=(Math.abs(d)-l.localAltitude)/(l.globalAltitude-l.localAltitude);c=tt(c,0,1),c<1?(g.getPosition(t,n[1],n[0],a),a.azimuth=(1-c)*a.azimuth+c*r.azimuth,a.altitude=(1-c)*a.altitude+c*r.altitude):(a.azimuth=r.azimuth,a.altitude=r.altitude),G(e,0,-1,0),Qt(o,o,-a.azimuth),rt(o,o,-a.altitude),K(e,e,o)}}function Pn(t,n){if(n===nt.Global)return!0;const i=h.planarDirection;return Math.abs(t)<i.localAltitude}function En(t,n,i,e,a){const o=t.getTime(),l=n.getTime()-o,r=Math.floor(l/i)+1,d=new Array(r);for(let c=0;c<r;++c)xt.setTime(o+i*c),d[c]=w(),kt(xt,e,a,d[c]);return d}const cn=y(.5773502691896258,-.5773502691896258,.5773502691896258);class On{constructor(){this.ambient={color:y(1,1,1),intensity:.55},this.direct={color:y(1,1,1),intensity:.55,directionToLightSource:Yt(cn)},this.noonFactor=.5,this.globalFactor=0,this.specularStrength=1,this.environmentStrength=1}}const ln=Ot(),sn={azimuth:0,altitude:0};function un(t,n){const i=t.valueOf();let e,a;n.polarException===g.PolarException.MIDNIGHT_SUN?(e=i-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,a=e+432e6):n.polarException===g.PolarException.POLAR_NIGHT?(e=i-2,a=i-1):(e=n.sunrise.valueOf(),a=n.sunset.valueOf());const o=e+(a-e)/2;return 1-tt(Math.abs(i-o)/432e5,0,1)}function qt(t){switch(t){case"disabled":case"sunny":case"cloudy":return new D(1,1);case"rainy":return new D(.4,1.2);case"snowy":return new D(.5,1.3);case"foggy":return new D(.2,1.6)}}function gt(t,n){const i=(t[0]+t[1]+t[2])/3;t[0]+=(i-t[0])*n,t[1]+=(i-t[1])*n,t[2]+=(i-t[2])*n}const C=y(.01,.01,.01),Q=y(1,.6,.5),V=y(1,.98,.98),bt=y(1,1,1),j=y(.8,.8,1),W=y(.8,.8,1),X=y(.98,.98,1),pt=y(1,1,1),k=U(.01,h.local.ambientAtNight),Y=U(h.local.directAtTwilight,h.local.ambientAtTwilight),Z=U(.9*h.local.directAtNoon,h.local.ambientAtNoon),$t=U(h.local.directAtNoon,h.local.ambientAtNoon),yt=Z,At=V,vt=X,Mt=Y,Nt=Q,Tt=W;function dn(t,n,i){const e=t.valueOf();let a,o;n.polarException===g.PolarException.MIDNIGHT_SUN?(a=e-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,o=a+432e6):n.polarException===g.PolarException.POLAR_NIGHT?(a=e-2,o=e-1):(a=n.sunrise.valueOf(),o=n.sunset.valueOf());const l=o-a,r=a+l/2,d=l/4,c=r-d,M=r+d,N=.06*l,I=a-N/2,P=a+N/2,T=o-N/2,E=o+N/2,p=Wt(),A=w(),v=w();let $="";if(e<I||e>E)Vt(p,k),st(A,C),st(v,j),$="night";else if(e<P){const u=(e-I)/(P-I);O(p,k,Y,u),b(A,C,Q,u),b(v,j,W,u),$="sun rising"}else if(e<c){const u=(e-P)/(c-P);O(p,Y,Z,u),b(A,Q,V,u),b(v,W,X,u),$="early morning"}else if(e<r){const u=(e-c)/(r-c);O(p,Z,$t,u),b(A,V,bt,u),b(v,X,pt,u),$="late morning"}else if(e<M){const u=(e-r)/(M-r);O(p,$t,yt,u),b(A,bt,At,u),b(v,pt,vt,u),$="early afternoon"}else if(e<T){const u=(e-M)/(T-M);O(p,yt,Mt,u),b(A,At,Nt,u),b(v,vt,Tt,u),$="late afternoon"}else if(e<E){const u=(e-T)/(E-T);O(p,Mt,k,u),b(A,Nt,C,u),b(v,Tt,j,u),$="sun setting"}let x=0;switch(i){case"rainy":case"foggy":x=.8;break;case"snowy":x=.5}x>0&&(gt(A,x),gt(v,x));const z=qt(i);return{direct:{intensity:p[0]*z.direct,color:A},ambient:{intensity:p[1]*z.ambient,color:v},timeOfDay:$}}const xt=new Date(0),Pt=Ot(),q=w(),B=w(),fn=w(),J=.25,mn=.2;var R;(function(t){t[t.Gradient=0]="Gradient",t[t.Threshold=1]="Threshold",t[t.COUNT=2]="COUNT"})(R||(R={}));class Et extends tn{constructor(){super(...arguments),this.visualization=R.Gradient,this.bandsEnabled=!1}}ut([dt({count:R.COUNT})],Et.prototype,"visualization",void 0),ut([dt()],Et.prototype,"bandsEnabled",void 0);export{En as D,On as I,rn as O,xn as j,g as m,Et as r,R as t,Pn as z};