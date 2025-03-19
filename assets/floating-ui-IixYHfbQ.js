import{m as Nt,M as At}from"./jsxFactory-Cnml7uXM.js";import{b as Zt}from"./dom-DEluURzl.js";import{d as te}from"./debounce-DbkufipY.js";const Wt=["top","right","bottom","left"],Et=["start","end"],Rt=Wt.reduce((t,e)=>t.concat(e,e+"-"+Et[0],e+"-"+Et[1]),[]),K=Math.min,I=Math.max,it=Math.round,ot=Math.floor,k=t=>({x:t,y:t}),ee={left:"right",right:"left",bottom:"top",top:"bottom"},ne={start:"end",end:"start"};function pt(t,e,n){return I(t,K(e,n))}function U(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function F(t){return t.split("-")[1]}function Ht(t){return t==="x"?"y":"x"}function yt(t){return t==="y"?"height":"width"}function J(t){return["top","bottom"].includes(W(t))?"y":"x"}function xt(t){return Ht(J(t))}function Vt(t,e,n){n===void 0&&(n=!1);const o=F(t),i=xt(t),s=yt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=st(r)),[r,st(r)]}function oe(t){const e=st(t);return[rt(t),e,rt(e)]}function rt(t){return t.replace(/start|end/g,e=>ne[e])}function ie(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function re(t,e,n,o){const i=F(t);let s=ie(W(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(rt)))),s}function st(t){return t.replace(/left|right|bottom|top/g,e=>ee[e])}function se(t){return{top:0,right:0,bottom:0,left:0,...t}}function _t(t){return typeof t!="number"?se(t):{top:t,right:t,bottom:t,left:t}}function ct(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Pt(t,e,n){let{reference:o,floating:i}=t;const s=J(e),r=xt(e),c=yt(r),l=W(e),a=s==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let f;switch(l){case"top":f={x:d,y:o.y-i.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(F(e)){case"start":f[r]-=m*(n&&a?-1:1);break;case"end":f[r]+=m*(n&&a?-1:1);break}return f}const ce=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=Pt(a,o,l),m=o,f={},g=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x:y,y:x,data:b,reset:v}=await p({x:d,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});d=y??d,u=x??u,f={...f,[w]:{...f[w],...b}},v&&g<=50&&(g++,typeof v=="object"&&(v.placement&&(m=v.placement),v.rects&&(a=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=Pt(a,m,l)),h=-1)}return{x:d,y:u,placement:m,strategy:i,middlewareData:f}};async function Z(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:f=0}=U(e,t),g=_t(f),w=c[m?u==="floating"?"reference":"floating":u],p=ct(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),y=u==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},v=ct(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:x,strategy:l}):y);return{top:(p.top-v.top+g.top)/b.y,bottom:(v.bottom-p.bottom+g.bottom)/b.y,left:(p.left-v.left+g.left)/b.x,right:(v.right-p.right+g.right)/b.x}}const le=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:a,padding:d=0}=U(t,e)||{};if(a==null)return{};const u=_t(d),m={x:n,y:o},f=xt(i),g=yt(f),h=await r.getDimensions(a),w=f==="y",p=w?"top":"left",y=w?"bottom":"right",x=w?"clientHeight":"clientWidth",b=s.reference[g]+s.reference[f]-m[f]-s.floating[g],v=m[f]-s.reference[f],E=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let A=E?E[x]:0;(!A||!await(r.isElement==null?void 0:r.isElement(E)))&&(A=c.floating[x]||s.floating[g]);const H=b/2-v/2,C=A/2-h[g]/2-1,O=K(u[p],C),S=K(u[y],C),B=O,z=A-h[g]-S,R=A/2-h[g]/2+H,q=pt(B,R,z),N=!l.arrow&&F(i)!=null&&R!==q&&s.reference[g]/2-(R<B?O:S)-h[g]/2<0,D=N?R<B?R-B:R-z:0;return{[f]:m[f]+D,data:{[f]:q,centerOffset:R-q-D,...N&&{alignmentOffset:D}},reset:N}}});function ae(t,e,n){return(t?[...n.filter(i=>F(i)===t),...n.filter(i=>F(i)!==t)]:n.filter(i=>W(i)===i)).filter(i=>t?F(i)===t||(e?rt(i)!==i:!1):!0)}const fe=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:c,platform:l,elements:a}=e,{crossAxis:d=!1,alignment:u,allowedPlacements:m=Rt,autoAlignment:f=!0,...g}=U(t,e),h=u!==void 0||m===Rt?ae(u||null,f,m):m,w=await Z(e,g),p=((n=r.autoPlacement)==null?void 0:n.index)||0,y=h[p];if(y==null)return{};const x=Vt(y,s,await(l.isRTL==null?void 0:l.isRTL(a.floating)));if(c!==y)return{reset:{placement:h[0]}};const b=[w[W(y)],w[x[0]],w[x[1]]],v=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:y,overflows:b}],E=h[p+1];if(E)return{data:{index:p+1,overflows:v},reset:{placement:E}};const A=v.map(O=>{const S=F(O.placement);return[O.placement,S&&d?O.overflows.slice(0,2).reduce((B,z)=>B+z,0):O.overflows[0],O.overflows]}).sort((O,S)=>O[1]-S[1]),C=((i=A.filter(O=>O[2].slice(0,F(O[0])?2:3).every(S=>S<=0))[0])==null?void 0:i[0])||A[0][0];return C!==c?{data:{index:p+1,overflows:v},reset:{placement:C}}:{}}}},ue=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...w}=U(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=W(i),y=J(c),x=W(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(a.floating)),v=m||(x||!h?[st(c)]:oe(c)),E=g!=="none";!m&&E&&v.push(...re(c,h,g,b));const A=[c,...v],H=await Z(e,w),C=[];let O=((o=s.flip)==null?void 0:o.overflows)||[];if(d&&C.push(H[p]),u){const R=Vt(i,r,b);C.push(H[R[0]],H[R[1]])}if(O=[...O,{placement:i,overflows:C}],!C.every(R=>R<=0)){var S,B;const R=(((S=s.flip)==null?void 0:S.index)||0)+1,q=A[R];if(q)return{data:{index:R,overflows:O},reset:{placement:q}};let N=(B=O.filter(D=>D.overflows[0]<=0).sort((D,V)=>D.overflows[1]-V.overflows[1])[0])==null?void 0:B.placement;if(!N)switch(f){case"bestFit":{var z;const D=(z=O.filter(V=>{if(E){const _=J(V.placement);return _===y||_==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(_=>_>0).reduce((_,Gt)=>_+Gt,0)]).sort((V,_)=>V[1]-_[1])[0])==null?void 0:z[0];D&&(N=D);break}case"initialPlacement":N=c;break}if(i!==N)return{reset:{placement:N}}}return{}}}};function Ct(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function St(t){return Wt.some(e=>t[e]>=0)}const de=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=U(t,e);switch(o){case"referenceHidden":{const s=await Z(e,{...i,elementContext:"reference"}),r=Ct(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:St(r)}}}case"escaped":{const s=await Z(e,{...i,altBoundary:!0}),r=Ct(s,n.floating);return{data:{escapedOffsets:r,escaped:St(r)}}}default:return{}}}}};async function me(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=W(n),c=F(n),l=J(n)==="y",a=["left","top"].includes(r)?-1:1,d=s&&l?-1:1,u=U(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof g=="number"&&(f=c==="end"?g*-1:g),l?{x:f*d,y:m*a}:{x:m*a,y:f*d}}const ge=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await me(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},pe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y}=w;return{x:p,y}}},...l}=U(t,e),a={x:n,y:o},d=await Z(e,l),u=J(W(i)),m=Ht(u);let f=a[m],g=a[u];if(s){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",y=f+d[w],x=f-d[p];f=pt(y,f,x)}if(r){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",y=g+d[w],x=g-d[p];g=pt(y,g,x)}const h=c.fn({...e,[m]:f,[u]:g});return{...h,data:{x:h.x-n,y:h.y-o,enabled:{[m]:s,[u]:r}}}}}};function at(){return typeof window<"u"}function G(t){return jt(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $(t){var e;return(e=(jt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function jt(t){return at()?t instanceof Node||t instanceof P(t).Node:!1}function T(t){return at()?t instanceof Element||t instanceof P(t).Element:!1}function M(t){return at()?t instanceof HTMLElement||t instanceof P(t).HTMLElement:!1}function Tt(t){return!at()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof P(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function he(t){return["table","td","th"].includes(G(t))}function ft(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ut(t){const e=vt(),n=T(t)?L(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function we(t){let e=j(t);for(;M(e)&&!Q(e);){if(ut(e))return e;if(ft(e))return null;e=j(e)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Q(t){return["html","body","#document"].includes(G(t))}function L(t){return P(t).getComputedStyle(t)}function dt(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function j(t){if(G(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Tt(t)&&t.host||$(t);return Tt(e)?e.host:e}function zt(t){const e=j(t);return Q(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&nt(e)?e:zt(e)}function tt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=zt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=P(i);if(s){const c=ht(r);return e.concat(r,r.visualViewport||[],nt(i)?i:[],c&&n?tt(c):[])}return e.concat(i,tt(i,[],n))}function ht(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function It(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=M(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=it(n)!==s||it(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function bt(t){return T(t)?t:t.contextElement}function X(t){const e=bt(t);if(!M(e))return k(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=It(e);let r=(s?it(n.width):n.width)/o,c=(s?it(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const ye=k(0);function Yt(t){const e=P(t);return!vt()||!e.visualViewport?ye:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function xe(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==P(t)?!1:e}function Y(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=bt(t);let r=k(1);e&&(o?T(o)&&(r=X(o)):r=X(t));const c=xe(s,n,o)?Yt(s):k(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,d=i.width/r.x,u=i.height/r.y;if(s){const m=P(s),f=o&&T(o)?P(o):o;let g=m,h=ht(g);for(;h&&o&&f!==g;){const w=X(h),p=h.getBoundingClientRect(),y=L(h),x=p.left+(h.clientLeft+parseFloat(y.paddingLeft))*w.x,b=p.top+(h.clientTop+parseFloat(y.paddingTop))*w.y;l*=w.x,a*=w.y,d*=w.x,u*=w.y,l+=x,a+=b,g=P(h),h=ht(g)}}return ct({width:d,height:u,x:l,y:a})}function Ot(t,e){const n=dt(t).scrollLeft;return e?e.left+n:Y($(t)).left+n}function Ut(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(n?0:Ot(t,o)),s=o.top+e.scrollTop;return{x:i,y:s}}function ve(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=$(o),c=e?ft(e.floating):!1;if(o===r||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=k(1);const d=k(0),u=M(o);if((u||!u&&!s)&&((G(o)!=="body"||nt(r))&&(l=dt(o)),M(o))){const f=Y(o);a=X(o),d.x=f.x+o.clientLeft,d.y=f.y+o.clientTop}const m=r&&!u&&!s?Ut(r,l,!0):k(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+d.x+m.x,y:n.y*a.y-l.scrollTop*a.y+d.y+m.y}}function be(t){return Array.from(t.getClientRects())}function Oe(t){const e=$(t),n=dt(t),o=t.ownerDocument.body,i=I(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=I(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Ot(t);const c=-n.scrollTop;return L(o).direction==="rtl"&&(r+=I(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function Ae(t,e){const n=P(t),o=$(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=vt();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function Ee(t,e){const n=Y(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=M(t)?X(t):k(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=o*s.y;return{width:r,height:c,x:l,y:a}}function Lt(t,e,n){let o;if(e==="viewport")o=Ae(t,n);else if(e==="document")o=Oe($(t));else if(T(e))o=Ee(e,n);else{const i=Yt(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return ct(o)}function qt(t,e){const n=j(t);return n===e||!T(n)||Q(n)?!1:L(n).position==="fixed"||qt(n,e)}function Re(t,e){const n=e.get(t);if(n)return n;let o=tt(t,[],!1).filter(c=>T(c)&&G(c)!=="body"),i=null;const s=L(t).position==="fixed";let r=s?j(t):t;for(;T(r)&&!Q(r);){const c=L(r),l=ut(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(r)&&!l&&qt(t,r))?o=o.filter(d=>d!==r):i=c,r=j(r)}return e.set(t,o),o}function Pe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ft(e)?[]:Re(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((a,d)=>{const u=Lt(e,d,i);return a.top=I(u.top,a.top),a.right=K(u.right,a.right),a.bottom=K(u.bottom,a.bottom),a.left=I(u.left,a.left),a},Lt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ce(t){const{width:e,height:n}=It(t);return{width:e,height:n}}function Se(t,e,n){const o=M(e),i=$(e),s=n==="fixed",r=Y(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=k(0);if(o||!o&&!s)if((G(e)!=="body"||nt(i))&&(c=dt(e)),o){const m=Y(e,!0,s,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else i&&(l.x=Ot(i));const a=i&&!o&&!s?Ut(i,c):k(0),d=r.left+c.scrollLeft-l.x-a.x,u=r.top+c.scrollTop-l.y-a.y;return{x:d,y:u,width:r.width,height:r.height}}function mt(t){return L(t).position==="static"}function Dt(t,e){if(!M(t)||L(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return $(t)===n&&(n=n.ownerDocument.body),n}function Xt(t,e){const n=P(t);if(ft(t))return n;if(!M(t)){let i=j(t);for(;i&&!Q(i);){if(T(i)&&!mt(i))return i;i=j(i)}return n}let o=Dt(t,e);for(;o&&he(o)&&mt(o);)o=Dt(o,e);return o&&Q(o)&&mt(o)&&!ut(o)?n:o||we(t)||n}const Te=async function(t){const e=this.getOffsetParent||Xt,n=this.getDimensions,o=await n(t.floating);return{reference:Se(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Le(t){return L(t).direction==="rtl"}const wt={convertOffsetParentRelativeRectToViewportRelativeRect:ve,getDocumentElement:$,getClippingRect:Pe,getOffsetParent:Xt,getElementRects:Te,getClientRects:be,getDimensions:Ce,getScale:X,isElement:T,isRTL:Le};function Kt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function De(t,e){let n=null,o;const i=$(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const a=t.getBoundingClientRect(),{left:d,top:u,width:m,height:f}=a;if(c||e(),!m||!f)return;const g=ot(u),h=ot(i.clientWidth-(d+m)),w=ot(i.clientHeight-(u+f)),p=ot(d),x={rootMargin:-g+"px "+-h+"px "+-w+"px "+-p+"px",threshold:I(0,K(1,l))||1};let b=!0;function v(E){const A=E[0].intersectionRatio;if(A!==l){if(!b)return r();A?r(!1,A):o=setTimeout(()=>{r(!1,1e-7)},1e3)}A===1&&!Kt(a,t.getBoundingClientRect())&&r(),b=!1}try{n=new IntersectionObserver(v,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(v,x)}n.observe(t)}return r(!0),s}function ke(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=bt(t),d=i||s?[...a?tt(a):[],...tt(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const u=a&&c?De(a,n):null;let m=-1,f=null;r&&(f=new ResizeObserver(p=>{let[y]=p;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),n()}),a&&!l&&f.observe(a),f.observe(e));let g,h=l?Y(t):null;l&&w();function w(){const p=Y(t);h&&!Kt(h,p)&&n(),h=p,g=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),u==null||u(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(g)}}const Fe=ge,Me=fe,$e=pe,kt=ue,Be=de,Ne=le,We=(t,e,n)=>{const o=new Map,i={platform:wt,...n},s={...i.platform,_c:o};return ce(t,e,{...i,platform:s})};function He(t){return Ve(t)}function gt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Ve(t){for(let e=t;e;e=gt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=gt(t);e;e=gt(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||ut(n)||e.tagName==="BODY"))return e}return null}/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */(function(){if(Nt()){const t=wt.getOffsetParent;wt.getOffsetParent=e=>t(e,He)}})();function Ft(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}const Jt=async(t,{referenceEl:e,floatingEl:n,overlayPositioning:o="absolute",placement:i,flipDisabled:s,flipPlacements:r,offsetDistance:c,offsetSkidding:l,arrowEl:a,type:d})=>{var x;if(!e||!n)return;const u=Zt(n)==="rtl",{x:m,y:f,placement:g,strategy:h,middlewareData:w}=await We(e,n,{strategy:o,placement:i==="auto"||i==="auto-start"||i==="auto-end"?void 0:$t(i,u),middleware:je({placement:i,flipDisabled:s,flipPlacements:r==null?void 0:r.map(b=>$t(b,u)),offsetDistance:c,offsetSkidding:l,arrowEl:a,type:d})});if(a&&w.arrow){const{x:b,y:v}=w.arrow,E=g.split("-")[0],A=b!=null?"left":"top",H=Ie[E],C={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout=E==="left"||E==="right"?"horizontal":"vertical"),Object.assign(a.style,{...C,[A]:`${A=="left"?b:v}px`,[E]:"100%",transform:H})}const p=(x=w.hide)!=null&&x.referenceHidden?"hidden":null,y=p?"none":null;n.setAttribute(_e,g),Object.assign(n.style,{pointerEvents:y,position:h,transform:`translate(${Ft(m)}px,${Ft(f)}px)`,visibility:p})},_e="data-placement",Mt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end","leading","trailing","leading-start","leading-end","trailing-start","trailing-end"],Je="bottom-start",Qe="bottom-end",Ge={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function je({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:o,offsetSkidding:i,arrowEl:s,type:r}){const c=[$e(),Be()];if(r==="menu")return[...c,kt({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(r==="popover"||r==="tooltip"){const l=[...c,Fe({mainAxis:typeof o=="number"?o:0,crossAxis:typeof i=="number"?i:0})];return t==="auto"||t==="auto-start"||t==="auto-end"?l.push(Me({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null})):e||l.push(kt(n?{fallbackPlacements:n}:{})),s&&l.push(Ne({element:s})),l}return[]}function Ze(t,e){const n=t.filter(o=>Mt.includes(o));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${Mt.map(o=>`"${o}"`).join(", ").trim()}`,{el:e}),n}function $t(t,e=!1){const n=["left","right"];return e&&n.reverse(),t.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function tn(t,e,n=!1){if(!(!t.open||!e.floatingEl||!e.referenceEl)){if(Object.assign(e.floatingEl.style,{display:"block",position:e.overlayPositioning??"absolute"}),!et.get(t))return Qt(t);await(n?ze(t):Jt)(t,e)}}function ze(t){let e=lt.get(t);return e||(e=te(Jt,At.reposition,{leading:!0,maxWait:At.reposition}),lt.set(t,e),e)}const Ie={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},et=new WeakMap,lt=new WeakMap;async function Qt(t){const{referenceEl:e,floatingEl:n}=t;if(!n.isConnected)return;const o=Nt()?ke:(r,c,l)=>(l(),()=>{});et.set(t,{state:"pending"});let i;const s=o(e,n,()=>{const r=t.reposition();i||(i=r)});return et.set(t,{state:"active",cleanUp:s}),i}function Ye(t){const{floatingEl:e}=t;e&&Object.assign(e.style,{display:"",pointerEvents:"",position:"",transform:"",visibility:""})}async function en(t){const{floatingEl:e,referenceEl:n}=t;if(Ye(t),!(!e||!n)&&(Ue(t),!!t.open))return Qt(t)}function Ue(t){var i;const{floatingEl:e,referenceEl:n}=t;if(!e||!n)return;const o=et.get(t);(o==null?void 0:o.state)==="active"&&o.cleanUp(),et.delete(t),(i=lt.get(t))==null||i.cancel(),lt.delete(t)}const Bt=4,nn=Math.ceil(Math.hypot(Bt,Bt));export{Ye as X,Ue as Y,en as c,tn as f,Ze as l,Je as o,Qe as r,Ge as s,nn as u};
