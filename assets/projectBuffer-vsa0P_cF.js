import{M as _E,e as PE,h as cE,l as sE}from"./mathUtils-ClvKsMak.js";import{e as $,t as EE,s as W,G as ME,W as oE,a9 as OE,a3 as NE,x as iE,aa as LE,u as GE,S as WE,c as FE,p as fE,l as TE,m as IE}from"./Point-DB4Hp4hH.js";import{s as pE}from"./geodesicConstants-XRAvAZCD.js";var E;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",n[n.WGS84=2]="WGS84",n[n.WEB_MERCATOR=3]="WEB_MERCATOR",n[n.WGS84_ECEF=4]="WGS84_ECEF",n[n.CGCS2000=5]="CGCS2000",n[n.SPHERICAL_MARS_PCPF=6]="SPHERICAL_MARS_PCPF",n[n.GCSMARS2000=7]="GCSMARS2000",n[n.SPHERICAL_MOON_PCPF=8]="SPHERICAL_MOON_PCPF",n[n.GCSMOON2000=9]="GCSMOON2000",n[n.LON_LAT=10]="LON_LAT",n[n.PLATE_CARREE=11]="PLATE_CARREE"})(E||(E={}));const HE={[E.WGS84]:{[E.CGCS2000]:r,[E.GCSMARS2000]:null,[E.GCSMOON2000]:null,[E.LON_LAT]:r,[E.SPHERICAL_ECEF]:H,[E.SPHERICAL_MARS_PCPF]:null,[E.SPHERICAL_MOON_PCPF]:null,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:o,[E.PLATE_CARREE]:O,[E.WGS84]:r,[E.WGS84_ECEF]:i},[E.CGCS2000]:{[E.CGCS2000]:r,[E.GCSMARS2000]:null,[E.GCSMOON2000]:null,[E.LON_LAT]:r,[E.SPHERICAL_ECEF]:H,[E.SPHERICAL_MARS_PCPF]:null,[E.SPHERICAL_MOON_PCPF]:null,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:o,[E.PLATE_CARREE]:O,[E.WGS84]:r,[E.WGS84_ECEF]:i},[E.GCSMARS2000]:{[E.CGCS2000]:null,[E.GCSMARS2000]:r,[E.GCSMOON2000]:null,[E.LON_LAT]:r,[E.SPHERICAL_ECEF]:null,[E.SPHERICAL_MARS_PCPF]:x,[E.SPHERICAL_MOON_PCPF]:null,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:null,[E.PLATE_CARREE]:null,[E.WGS84]:null,[E.WGS84_ECEF]:null},[E.GCSMOON2000]:{[E.CGCS2000]:null,[E.GCSMARS2000]:null,[E.GCSMOON2000]:r,[E.LON_LAT]:r,[E.SPHERICAL_ECEF]:null,[E.SPHERICAL_MARS_PCPF]:null,[E.SPHERICAL_MOON_PCPF]:y,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:null,[E.PLATE_CARREE]:null,[E.WGS84]:null,[E.WGS84_ECEF]:null},[E.WEB_MERCATOR]:{[E.CGCS2000]:I,[E.GCSMARS2000]:null,[E.GCSMOON2000]:null,[E.LON_LAT]:I,[E.SPHERICAL_ECEF]:tE,[E.SPHERICAL_MARS_PCPF]:null,[E.SPHERICAL_MOON_PCPF]:null,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:r,[E.PLATE_CARREE]:CE,[E.WGS84]:I,[E.WGS84_ECEF]:eE},[E.WGS84_ECEF]:{[E.CGCS2000]:L,[E.GCSMARS2000]:null,[E.GCSMOON2000]:null,[E.LON_LAT]:L,[E.SPHERICAL_ECEF]:SE,[E.SPHERICAL_MARS_PCPF]:null,[E.SPHERICAL_MOON_PCPF]:null,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:uE,[E.PLATE_CARREE]:dE,[E.WGS84]:L,[E.WGS84_ECEF]:r},[E.SPHERICAL_ECEF]:{[E.CGCS2000]:N,[E.GCSMARS2000]:null,[E.GCSMOON2000]:null,[E.LON_LAT]:N,[E.SPHERICAL_ECEF]:r,[E.SPHERICAL_MARS_PCPF]:null,[E.SPHERICAL_MOON_PCPF]:null,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:aE,[E.PLATE_CARREE]:UE,[E.WGS84]:N,[E.WGS84_ECEF]:rE},[E.SPHERICAL_MARS_PCPF]:{[E.CGCS2000]:null,[E.GCSMARS2000]:z,[E.GCSMOON2000]:null,[E.LON_LAT]:z,[E.SPHERICAL_ECEF]:null,[E.SPHERICAL_MARS_PCPF]:r,[E.SPHERICAL_MOON_PCPF]:null,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:null,[E.PLATE_CARREE]:null,[E.WGS84]:null,[E.WGS84_ECEF]:null},[E.SPHERICAL_MOON_PCPF]:{[E.CGCS2000]:null,[E.GCSMARS2000]:null,[E.GCSMOON2000]:v,[E.LON_LAT]:v,[E.SPHERICAL_ECEF]:null,[E.SPHERICAL_MARS_PCPF]:null,[E.SPHERICAL_MOON_PCPF]:r,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:null,[E.PLATE_CARREE]:null,[E.WGS84]:null,[E.WGS84_ECEF]:null},[E.UNKNOWN]:{[E.CGCS2000]:null,[E.GCSMARS2000]:null,[E.GCSMOON2000]:null,[E.LON_LAT]:null,[E.SPHERICAL_ECEF]:null,[E.SPHERICAL_MARS_PCPF]:null,[E.SPHERICAL_MOON_PCPF]:null,[E.UNKNOWN]:r,[E.WEB_MERCATOR]:null,[E.PLATE_CARREE]:null,[E.WGS84]:null,[E.WGS84_ECEF]:null},[E.LON_LAT]:{[E.CGCS2000]:r,[E.GCSMARS2000]:r,[E.GCSMOON2000]:r,[E.LON_LAT]:r,[E.SPHERICAL_ECEF]:H,[E.SPHERICAL_MARS_PCPF]:x,[E.SPHERICAL_MOON_PCPF]:y,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:o,[E.PLATE_CARREE]:O,[E.WGS84]:r,[E.WGS84_ECEF]:i},[E.PLATE_CARREE]:{[E.CGCS2000]:p,[E.GCSMARS2000]:null,[E.GCSMOON2000]:null,[E.LON_LAT]:p,[E.SPHERICAL_ECEF]:KE,[E.SPHERICAL_MARS_PCPF]:null,[E.SPHERICAL_MOON_PCPF]:null,[E.UNKNOWN]:null,[E.WEB_MERCATOR]:wE,[E.PLATE_CARREE]:r,[E.WGS84]:p,[E.WGS84_ECEF]:BE}};function nE(n,e,t=lE()){return n==null||e==null?null:bE(n,e,t).projector}function yE(n,e){switch(nE(n,e,RE)){case r:return"copy3";case H:return"wgs84ToSphericalECEF";case o:return"wgs84ToWebMercator";case O:return"wgs84ToPlateCarree";case i:return"wgs84ToWGS84ECEF";case I:return"webMercatorToWGS84";case tE:return"webMercatorToSphericalECEF";case eE:return"webMercatorToWGS84ECEF";case CE:return"webMercatorToPlateCarree";case L:return"wgs84ECEFToWGS84";case SE:return"wgs84ECEFToSphericalECEF";case uE:return"wgs84ECEFToWebMercator";case N:return"sphericalECEFToWGS84";case aE:return"sphericalECEFToWebMercator";case z:return"sphericalMarsPCPFToMars2000";case v:return"sphericalMoonPCPFToMoon2000";case rE:return"sphericalECEFToWGS84ECEF";case x:return"mars2000ToSphericalPCPF";case y:return"moon2000ToSphericalPCPF";default:return null}}function X(n,e){return n?e.spatialReference===n?e.spatialReferenceId:(e.spatialReference=n,"metersPerUnit"in e&&(e.metersPerUnit=oE(n,1)),OE(n)?e.spatialReferenceId=E.SPHERICAL_ECEF:NE(n)?e.spatialReferenceId=E.WGS84:iE(n)?e.spatialReferenceId=E.WEB_MERCATOR:LE(n)?e.spatialReferenceId=E.PLATE_CARREE:n.wkt===GE.wkt?e.spatialReferenceId=E.WGS84_ECEF:n.wkid===WE.CGCS2000?e.spatialReferenceId=E.CGCS2000:n.wkt===FE.wkt?e.spatialReferenceId=E.SPHERICAL_MARS_PCPF:n.wkt===fE.wkt?e.spatialReferenceId=E.SPHERICAL_MOON_PCPF:TE(n)?e.spatialReferenceId=E.GCSMARS2000:IE(n)?e.spatialReferenceId=E.GCSMOON2000:e.spatialReferenceId=E.UNKNOWN):E.UNKNOWN}function r(n,e,t,C){n!==t&&(t[C++]=n[e++],t[C++]=n[e++],t[C]=n[e])}function I(n,e,t,C){t[C]=d*(n[e]/G),t[C+1]=d*(AE-2*Math.atan(Math.exp(-n[e+1]/G))),t[C+2]=n[e+2]}function tE(n,e,t,C){const S=n[e]/G,u=AE-2*Math.atan(Math.exp(-n[e+1]/G)),l=G+n[e+2],a=Math.cos(u)*l;t[C]=Math.cos(S)*a,t[C+1]=Math.sin(S)*a,t[C+2]=Math.sin(u)*l}function eE(n,e,t,C){I(n,e,t,C),i(t,C,t,C)}function hE(n,e,t,C,S){const u=.4999999*w,l=PE(h*n[e+1],-u,u),a=Math.sin(l);t[C++]=h*n[e]*S.radius,t[C++]=S.halfSemiMajorAxis*Math.log((1+a)/(1-a)),t[C]=n[e+2]}function o(n,e,t,C){hE(n,e,t,C,W)}function O(n,e,t,C){t[C]=n[e]*Y,t[C+1]=n[e+1]*Y,t[C+2]=n[e+2]}function p(n,e,t,C){t[C]=n[e]*Z,t[C+1]=n[e+1]*Z,t[C+2]=n[e+2]}function CE(n,e,t,C){I(n,e,t,C),O(t,C,t,C)}function dE(n,e,t,C){L(n,e,t,C),O(t,C,t,C)}function UE(n,e,t,C){N(n,e,t,C),O(t,C,t,C)}function KE(n,e,t,C){p(n,e,t,C),H(t,C,t,C)}function wE(n,e,t,C){p(n,e,t,C),o(t,C,t,C)}function BE(n,e,t,C){p(n,e,t,C),i(t,C,t,C)}function D(n,e,t,C,S){const u=S+n[e+2],l=h*n[e+1],a=h*n[e],R=Math.cos(l)*u;t[C]=Math.cos(a)*R,t[C+1]=Math.sin(a)*R,t[C+2]=Math.sin(l)*u}function y(n,e,t,C){D(n,e,t,C,$.radius)}function x(n,e,t,C){D(n,e,t,C,EE.radius)}function H(n,e,t,C){D(n,e,t,C,W.radius)}function J(n,e,t,C,S){const u=n[e],l=n[e+1],a=n[e+2],R=Math.sqrt(u*u+l*l+a*a),_=sE(a/(R===0?1:R)),A=Math.atan2(l,u);t[C++]=d*A,t[C++]=d*_,t[C]=R-S}function v(n,e,t,C){J(n,e,t,C,$.radius)}function z(n,e,t,C){J(n,e,t,C,EE.radius)}function N(n,e,t,C){J(n,e,t,C,W.radius)}function aE(n,e,t,C){N(n,e,t,C),o(t,C,t,C)}function rE(n,e,t,C){N(n,e,t,C),i(t,C,t,C)}function mE(n,e,t,C,S){const u=h*n[e],l=h*n[e+1],a=n[e+2],R=Math.sin(l),_=Math.cos(l),A=S.radius/Math.sqrt(1-S.eccentricitySquared*R*R);t[C++]=(A+a)*_*Math.cos(u),t[C++]=(A+a)*_*Math.sin(u),t[C++]=(A*(1-S.eccentricitySquared)+a)*R}function i(n,e,t,C){mE(n,e,t,C,W)}function L(n,e,t,C){const S=pE,u=n[e],l=n[e+1],a=n[e+2];let R,_,A,s,M,B,K,P,c,U,m,b,g,F,f,j,q,k,T,Q,V;R=Math.abs(a),_=u*u+l*l,A=Math.sqrt(_),s=_+a*a,M=Math.sqrt(s),Q=Math.atan2(l,u),B=a*a/s,K=_/s,F=S.a2/M,f=S.a3-S.a4/M,K>.3?(P=R/M*(1+K*(S.a1+F+B*f)/M),T=Math.asin(P),U=P*P,c=Math.sqrt(1-U)):(c=A/M*(1-B*(S.a5-F-K*f)/M),T=Math.acos(c),U=1-c*c,P=Math.sqrt(U)),m=1-W.eccentricitySquared*U,b=W.radius/Math.sqrt(m),g=S.a6*b,F=A-b*c,f=R-g*P,q=c*F+P*f,j=c*f-P*F,k=j/(g/m+q),T+=k,V=q+j*k/2,a<0&&(T=-T),t[C++]=d*Q,t[C++]=d*T,t[C]=V}function SE(n,e,t,C){L(n,e,t,C),H(t,C,t,C)}function uE(n,e,t,C){L(n,e,t,C),o(t,C,t,C)}function bE(n,e,t){if(n==null||e==null||t.source.spatialReference===n&&t.dest.spatialReference===e)return t;const C=X(n,t.source),S=X(e,t.dest);return C===E.UNKNOWN&&S===E.UNKNOWN?ME(n,e)?t.projector=r:t.projector=null:t.projector=HE[C][S],t}function lE(){return{source:{spatialReference:null,spatialReferenceId:E.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:E.UNKNOWN,metersPerUnit:1},projector:r}}const xE={spatialReference:null,spatialReferenceId:E.UNKNOWN},vE={spatialReference:null,spatialReferenceId:E.UNKNOWN},RE=lE(),h=cE(1),d=_E(1),w=Math.PI,AE=.5*w,G=W.radius,Y=G*w/180,Z=180/(G*w);function gE(n,e,t,C,S,u,l=1){const a=nE(e,S,RE);if(a==null)return!1;if(a===r){if(n===C&&t===u)return!0;const _=t+3*l;for(let A=t,s=u;A<_;A++,s++)C[s]=n[A];return!0}const R=t+3*l;for(let _=t,A=u;_<R;_+=3,A+=3)a(n,_,C,A);return!0}const zE=Object.freeze(Object.defineProperty({__proto__:null,projectBuffer:gE},Symbol.toStringTag,{value:"Module"}));export{Z as A,lE as C,RE as E,X as F,nE as G,hE as H,HE as L,E as N,yE as W,bE as a,vE as e,r as f,o as h,xE as l,gE as n,zE as p,J as y};
