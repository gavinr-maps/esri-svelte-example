import{j as f,E as T,k as j,b as k,x as v}from"./date-DlqISzcw.js";import{d as D,c as w,g as S,u as F,a as _}from"./locale-C9TlLpzi.js";import{l as C,z as I,n as z,b}from"./subclass-BZA_h8Db.js";import{f as B,u as E,h as W}from"./messages-OmQvZhAg.js";import{U as G,c as J}from"./assets-C43MgM-v.js";const P={ar:"ar-u-nu-latn"};let g=new WeakMap,M={};function y(e){const t=e||M;if(!g.has(t)){const n=w(),r=P[w()]||n;g.set(t,new Intl.NumberFormat(r,e))}return g.get(t)}function q(e={}){const t={};return e.digitSeparator!=null&&(t.useGrouping=e.digitSeparator),e.places!=null&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function m(e,t){return Object.is(e,-0)&&(e=0),y(t).format(e)}function ae(e,t=w()){var r,a;if(!e)return null;let n=O.get(t);if(!n){const o=y().formatToParts(12345.6),s=[...y({useGrouping:!1}).format(9876543210)].reverse(),u=new Map(s.map((i,d)=>[i,d])),c=new RegExp(`[${(r=o.find(i=>i.type==="group"))==null?void 0:r.value}]`,"g"),p=new RegExp(`[${(a=o.find(i=>i.type==="decimal"))==null?void 0:a.value}]`),l=new RegExp(`[${s.join("")}]`,"g"),$=/[\u200E\u200F\u202A\u202B\u202C\u202D\u202E\u2066\u2067\u2068\u2069\u061C]/g,h=/[-\u2212\u2013\u2014\u2015]/g;n=i=>{if((i=i.trim().replaceAll(c,"").replace(p,".").replace(l,N=>String(u.get(N))).replaceAll($,"").replaceAll(h,"-"))==="")return null;const d=Number(i);return isNaN(d)?null:d},O.set(t,n)}return n(e)}D(()=>{g=new WeakMap,M={}});const O=new Map,U=()=>z.getLogger("esri.intl.substitute");function H(e,t,n={}){const{format:r={}}=n;return C(e,a=>K(a,t,r))}function K(e,t,n){let r,a;const o=e.indexOf(":");if(o===-1?r=e.trim():(r=e.slice(0,o).trim(),a=e.slice(o+1).trim()),!r)return"";const s=I(r,t);if(s==null)return"";const u=(a?n==null?void 0:n[a]:null)??(n==null?void 0:n[r]);return u?Q(s,u):a?V(s,a):L(s)}function Q(e,t){switch(t.type){case"date":return f(e,t.intlOptions);case"number":return m(e,t.intlOptions);default:return U().warn("missing format descriptor for key {key}"),L(e)}}function V(e,t){switch(t.toLowerCase()){case"dateformat":return f(e);case"numberformat":return m(e);default:return U().warn(`inline format is unsupported since 4.12: ${t}`),/^(dateformat|datestring)/i.test(t)?f(e):/^numberformat/i.test(t)?m(e):L(e)}}function L(e){switch(typeof e){case"string":return e;case"number":return m(e);case"boolean":return""+e;default:return e instanceof Date?f(e):""}}async function X(e,t,n,r){const a=t.exec(n);if(!a)throw new b("esri-intl:invalid-bundle",`Bundle id "${n}" is not compatible with the pattern "${t}"`);const o=a[1]?`${a[1]}/`:"",s=a[2],u=B(r),c=`${o}${s}.json`,p=u?`${o}${s}_${u}.json`:c;let l;try{l=await x(e(p))}catch($){if(p===c)throw new b("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:$});try{l=await x(e(c))}catch(h){throw new b("intl:unknown-bundle",`Bundle "${n}" cannot be loaded`,{error:h})}}return l}async function x(e){if(R.fetchBundleAsset!=null)return R.fetchBundleAsset(e);const t=await G(e,{responseType:"text"});return JSON.parse(t.data)}class Y{constructor({base:t="",pattern:n,location:r=new URL(window.location.href)}){let a;a=typeof r=="string"?o=>new URL(o,new URL(r,window.location.href)).href:r instanceof URL?o=>new URL(o,r).href:r,this.pattern=typeof n=="string"?new RegExp(`^${n}`):n,this.getAssetUrl=a,t=t?t.endsWith("/")?t:t+"/":"",this.matcher=new RegExp(`^${t}(?:(.*)\\/)?(.*)$`)}fetchMessageBundle(t,n){return X(this.getAssetUrl,this.matcher,t,n)}}function A(e){return new Y(e)}const R={};E(A({pattern:"esri/",location:J}));const oe=Object.freeze(Object.defineProperty({__proto__:null,convertDateFormatToIntlOptions:T,convertNumberFormatToIntlOptions:q,createJSONLoader:A,fetchMessageBundle:W,formatDate:f,formatDateOnly:j,formatNumber:m,formatTimeOnly:k,formatTimestamp:v,getLocale:w,normalizeMessageBundleLocale:B,onLocaleChange:S,prefersRTL:F,registerMessageBundleLoader:E,setLocale:_,substitute:H},Symbol.toStringTag,{value:"Module"}));export{oe as a,q as i,m as l,ae as o,H as s};