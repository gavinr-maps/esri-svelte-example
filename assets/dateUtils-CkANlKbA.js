import"./intl-Duiy0OzY.js";import{s as A}from"./Accessor-BmwT4B0c.js";import{r as z}from"./mathUtils-Cfq9PL9W.js";import{x as E,a as H,k as R,E as q,j as w,D as s,b as J,n as j,r as U}from"./Promise-DfET-uns.js";import{i as _,j as B,s as x,n as G,l as K,m as S,q as g,t as I}from"./opacityUtils-Dim20wpZ.js";const L=j,D={date:null,time:null,timeZoneOffset:null},le=new Map([["hours",3600],["minutes",60],["seconds",1],["deciseconds",.1],["centiseconds",.01],["milliseconds",.001]]),P="latn",ae=new Set(["date-only","time-only","timestamp-offset"]),Q=e=>"valueAsDate"in e;function m(e){return{locale:U(),numberingSystem:P,zone:e??L}}function C(e,t){return e==null?null:s.fromMillis(e,m(t))}function W(e,t){if(e==null||!_(e)||e===""){if(t){const o=s.local({zone:t});return{date:null,time:null,timeZoneOffset:o.isValid?o.offset.toString():null}}return D}const n=s.fromISO(e,{setZone:!0});return{date:n.toFormat(x,m()),time:n.toFormat(B.HMS_MS,m()),timeZoneOffset:n.offset.toString()}}function re(e,t){if(e==null||!G(e)||isNaN(e))return D;const n=C(e,t);return n?{date:n.toFormat(x,m(t)),time:n.toFormat(K,m(t))}:D}function ie(e){switch(e.type){case"date":default:return w("short-date-short-time");case"date-only":return w("short-date");case"time-only":return w("short-time");case"timestamp-offset":return{...w("short-date-short-time"),timeZone:void 0,timeZoneName:"short"}}}function ue(e,t,n){if(!e||t==null)return null;switch(e.type){case"date":return q(t,n);case"date-only":return R(t,n);case"time-only":return H(t,n);case"timestamp-offset":return E(t,n);default:return null}}function se(e){const{dateComponent:t,defaultTimeZone:n,timeComponent:o,timeZoneComponent:l,oldValue:r}=e;if(!(t!=null&&t.value))return null;const{year:i,month:a,day:u}=s.fromFormat(t.value,x),{hour:f,minute:O,second:v,millisecond:c}=F(o,j)??s.now(),d=W(r,n),y=l!=null&&l.value?parseInt(l.value,10):d.timeZoneOffset!=null?parseInt(d.timeZoneOffset,10):new Date().getTimezoneOffset(),p=J.instance(y),h=s.fromObject({year:i,month:a,day:u,hour:f,minute:O,second:v,millisecond:c},{zone:p});return h.isValid?h.toISO({includeOffset:!0}):null}function me(e){const{dateComponent:t,timeComponent:n,timeZone:o,max:l,min:r,oldValue:i}=e,a=F(t,o);let u=!!e.applyRange;if(!a)return null;let f=null;if((n==null?void 0:n.value)!=null){const v=F(n,o),c=Date.now(),d=l!=null&&l<c?l:c,y=s.fromMillis(d,m(o)),p=a||y,{year:h,month:Z,day:$}=p,{hour:T,minute:V,second:N,millisecond:k}=v||y;f=p.set({year:h,month:Z,day:$,hour:T,minute:V,second:N,millisecond:k})}else{const v=C(b({value:i??Date.now(),max:l,min:r}),o),{year:c,month:d,day:y}=a,{hour:p,minute:h,second:Z,millisecond:$}=v;u=!0,f=a.set({year:c,month:d,day:y,hour:p,minute:h,second:Z,millisecond:$})}if(!f.isValid)return null;const O=f.toMillis();return u?b({value:O,max:l,min:r}):O}function F(e,t){if((e==null?void 0:e.value)==null||Array.isArray(e.value))return null;let n=null;return n=Q(e)?s.fromFormat(e.value,x,m(t)):S(e.value),n!=null&&n.isValid?n:null}function M(e){const{max:t,min:n,value:o}=e;return!isNaN(o)&&!(t!=null&&o>t)&&!(n!=null&&o<n)}function b(e){const{max:t,min:n,value:o}=e;return t!=null&&n!=null?z(o,n,t):t!=null&&o>t?t:n!=null&&o<n?n:o}function X(e){if(!e)return"";const t=e.split(".").at(0);if(!t||t.length<1)throw new A("invalid time-only field",`Cannot parse valid time-only field value from ${e}`);const n=t.split(":"),o=new Array(3);for(let l=0;l<3;l++){const r=n.at(l)??"";o[l]=r.padStart(2,"0")}return o.join(":")}function fe(e,t){switch(t){case"date":return e.getTime();case"date-only":return e.toISODate();case"time-only":return X(e.toISOTime(!0,!1));case"timestamp-offset":return e.toISOString(!1);default:return null}}function ce(e){return!!e&&typeof e=="object"&&"getTime"in e&&"toISOString"in e&&"timeZone"in e}function de(e){const{type:t,range:n,value:o}=e;if(o==null||!n||o===n.min||o===n.max)return!0;if(t==="date")return M({value:o,min:n.min,max:n.max});const{rawMax:l,rawMin:r}=n;let i=null,a=null,u=null;switch(t){case"date-only":i=I(l),a=I(r),u=I(o);break;case"time-only":i=S(l),a=S(r),u=S(o);break;case"timestamp-offset":i=g(l),a=g(r),u=g(o)}return!u||M({value:u.valueOf(),min:a==null?void 0:a.valueOf(),max:i==null?void 0:i.valueOf()})}export{re as C,X as E,ie as F,fe as H,m as I,ce as J,me as N,de as R,ue as T,W as V,se as b,le as g,P as j,M as k,ae as x};
