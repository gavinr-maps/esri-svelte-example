import{f as ae,l as ne,m as G,n as re,o as ie,p as N,r as K}from"./dom-D_AJDzAj.js";import{d as oe}from"./jsxFactory-CJa39Fro.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 *//*!
* focus-trap 7.6.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function ue(o,a,u){return(a=ce(a))in o?Object.defineProperty(o,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[a]=u,o}function Q(o,a){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);a&&(i=i.filter(function(b){return Object.getOwnPropertyDescriptor(o,b).enumerable})),u.push.apply(u,i)}return u}function W(o){for(var a=1;a<arguments.length;a++){var u=arguments[a]!=null?arguments[a]:{};a%2?Q(Object(u),!0).forEach(function(i){ue(o,i,u[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):Q(Object(u)).forEach(function(i){Object.defineProperty(o,i,Object.getOwnPropertyDescriptor(u,i))})}return o}function se(o,a){if(typeof o!="object"||!o)return o;var u=o[Symbol.toPrimitive];if(u!==void 0){var i=u.call(o,a||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(o)}function ce(o){var a=se(o,"string");return typeof a=="symbol"?a:a+""}var X={activateTrap:function(a,u){if(a.length>0){var i=a[a.length-1];i!==u&&i.pause()}var b=a.indexOf(u);b===-1||a.splice(b,1),a.push(u)},deactivateTrap:function(a,u){var i=a.indexOf(u);i!==-1&&a.splice(i,1),a.length>0&&a[a.length-1].unpause()}},fe=function(a){return a.tagName&&a.tagName.toLowerCase()==="input"&&typeof a.select=="function"},le=function(a){return(a==null?void 0:a.key)==="Escape"||(a==null?void 0:a.key)==="Esc"||(a==null?void 0:a.keyCode)===27},B=function(a){return(a==null?void 0:a.key)==="Tab"||(a==null?void 0:a.keyCode)===9},de=function(a){return B(a)&&!a.shiftKey},ve=function(a){return B(a)&&a.shiftKey},Z=function(a){return setTimeout(a,0)},_=function(a,u){var i=-1;return a.every(function(b,s){return u(b)?(i=s,!1):!0}),i},L=function(a){for(var u=arguments.length,i=new Array(u>1?u-1:0),b=1;b<u;b++)i[b-1]=arguments[b];return typeof a=="function"?a.apply(void 0,i):a},j=function(a){return a.target.shadowRoot&&typeof a.composedPath=="function"?a.composedPath()[0]:a.target},be=[],pe=function(a,u){var i=(u==null?void 0:u.document)||document,b=(u==null?void 0:u.trapStack)||be,s=W({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:de,isKeyBackward:ve},u),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},y,h=function(e,t,r){return e&&e[t]!==void 0?e[t]:s[r||t]},T=function(e,t){var r=typeof(t==null?void 0:t.composedPath)=="function"?t.composedPath():void 0;return n.containerGroups.findIndex(function(c){var f=c.container,d=c.tabbableNodes;return f.contains(e)||(r==null?void 0:r.includes(f))||d.find(function(v){return v===e})})},E=function(e){var t=s[e];if(typeof t=="function"){for(var r=arguments.length,c=new Array(r>1?r-1:0),f=1;f<r;f++)c[f-1]=arguments[f];t=t.apply(void 0,c)}if(t===!0&&(t=void 0),!t){if(t===void 0||t===!1)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var d=t;if(typeof t=="string"&&(d=i.querySelector(t),!d))throw new Error("`".concat(e,"` as selector refers to no known node"));return d},k=function(){var e=E("initialFocus");if(e===!1)return!1;if(e===void 0||!G(e,s.tabbableOptions))if(T(i.activeElement)>=0)e=i.activeElement;else{var t=n.tabbableGroups[0],r=t&&t.firstTabbableNode;e=r||E("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},D=function(){if(n.containerGroups=n.containers.map(function(e){var t=re(e,s.tabbableOptions),r=ie(e,s.tabbableOptions),c=t.length>0?t[0]:void 0,f=t.length>0?t[t.length-1]:void 0,d=r.find(function(p){return N(p)}),v=r.slice().reverse().find(function(p){return N(p)}),m=!!t.find(function(p){return K(p)>0});return{container:e,tabbableNodes:t,focusableNodes:r,posTabIndexesFound:m,firstTabbableNode:c,lastTabbableNode:f,firstDomTabbableNode:d,lastDomTabbableNode:v,nextTabbableNode:function(F){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,w=t.indexOf(F);return w<0?O?r.slice(r.indexOf(F)+1).find(function(R){return N(R)}):r.slice(0,r.indexOf(F)).reverse().find(function(R){return N(R)}):t[w+(O?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!E("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(e){return e.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},S=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&t.shadowRoot.activeElement!==null?S(t.shadowRoot):t},g=function(e){if(e!==!1&&e!==S(document)){if(!e||!e.focus){g(k());return}e.focus({preventScroll:!!s.preventScroll}),n.mostRecentlyFocusedNode=e,fe(e)&&e.select()}},U=function(e){var t=E("setReturnFocus",e);return t||(t===!1?!1:e)},q=function(e){var t=e.target,r=e.event,c=e.isBackward,f=c===void 0?!1:c;t=t||j(r),D();var d=null;if(n.tabbableGroups.length>0){var v=T(t,r),m=v>=0?n.containerGroups[v]:void 0;if(v<0)f?d=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:d=n.tabbableGroups[0].firstTabbableNode;else if(f){var p=_(n.tabbableGroups,function(I){var x=I.firstTabbableNode;return t===x});if(p<0&&(m.container===t||G(t,s.tabbableOptions)&&!N(t,s.tabbableOptions)&&!m.nextTabbableNode(t,!1))&&(p=v),p>=0){var F=p===0?n.tabbableGroups.length-1:p-1,O=n.tabbableGroups[F];d=K(t)>=0?O.lastTabbableNode:O.lastDomTabbableNode}else B(r)||(d=m.nextTabbableNode(t,!1))}else{var w=_(n.tabbableGroups,function(I){var x=I.lastTabbableNode;return t===x});if(w<0&&(m.container===t||G(t,s.tabbableOptions)&&!N(t,s.tabbableOptions)&&!m.nextTabbableNode(t))&&(w=v),w>=0){var R=w===n.tabbableGroups.length-1?0:w+1,J=n.tabbableGroups[R];d=K(t)>=0?J.firstTabbableNode:J.firstDomTabbableNode}else B(r)||(d=m.nextTabbableNode(t))}}else d=E("fallbackFocus");return d},C=function(e){var t=j(e);if(!(T(t,e)>=0)){if(L(s.clickOutsideDeactivates,e)){y.deactivate({returnFocus:s.returnFocusOnDeactivate});return}L(s.allowOutsideClick,e)||e.preventDefault()}},H=function(e){var t=j(e),r=T(t,e)>=0;if(r||t instanceof Document)r&&(n.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var c,f=!0;if(n.mostRecentlyFocusedNode)if(K(n.mostRecentlyFocusedNode)>0){var d=T(n.mostRecentlyFocusedNode),v=n.containerGroups[d].tabbableNodes;if(v.length>0){var m=v.findIndex(function(p){return p===n.mostRecentlyFocusedNode});m>=0&&(s.isKeyForward(n.recentNavEvent)?m+1<v.length&&(c=v[m+1],f=!1):m-1>=0&&(c=v[m-1],f=!1))}}else n.containerGroups.some(function(p){return p.tabbableNodes.some(function(F){return K(F)>0})})||(f=!1);else f=!1;f&&(c=q({target:n.mostRecentlyFocusedNode,isBackward:s.isKeyBackward(n.recentNavEvent)})),g(c||n.mostRecentlyFocusedNode||k())}n.recentNavEvent=void 0},ee=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=e;var r=q({event:e,isBackward:t});r&&(B(e)&&e.preventDefault(),g(r))},M=function(e){(s.isKeyForward(e)||s.isKeyBackward(e))&&ee(e,s.isKeyBackward(e))},Y=function(e){le(e)&&L(s.escapeDeactivates,e)!==!1&&(e.preventDefault(),y.deactivate())},V=function(e){var t=j(e);T(t,e)>=0||L(s.clickOutsideDeactivates,e)||L(s.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},$=function(){if(n.active)return X.activateTrap(b,y),n.delayInitialFocusTimer=s.delayInitialFocus?Z(function(){g(k())}):g(k()),i.addEventListener("focusin",H,!0),i.addEventListener("mousedown",C,{capture:!0,passive:!1}),i.addEventListener("touchstart",C,{capture:!0,passive:!1}),i.addEventListener("click",V,{capture:!0,passive:!1}),i.addEventListener("keydown",M,{capture:!0,passive:!1}),i.addEventListener("keydown",Y),y},z=function(){if(n.active)return i.removeEventListener("focusin",H,!0),i.removeEventListener("mousedown",C,!0),i.removeEventListener("touchstart",C,!0),i.removeEventListener("click",V,!0),i.removeEventListener("keydown",M,!0),i.removeEventListener("keydown",Y),y},te=function(e){var t=e.some(function(r){var c=Array.from(r.removedNodes);return c.some(function(f){return f===n.mostRecentlyFocusedNode})});t&&g(k())},A=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(te):void 0,P=function(){A&&(A.disconnect(),n.active&&!n.paused&&n.containers.map(function(e){A.observe(e,{subtree:!0,childList:!0})}))};return y={get active(){return n.active},get paused(){return n.paused},activate:function(e){if(n.active)return this;var t=h(e,"onActivate"),r=h(e,"onPostActivate"),c=h(e,"checkCanFocusTrap");c||D(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=i.activeElement,t==null||t();var f=function(){c&&D(),$(),P(),r==null||r()};return c?(c(n.containers.concat()).then(f,f),this):(f(),this)},deactivate:function(e){if(!n.active)return this;var t=W({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},e);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,z(),n.active=!1,n.paused=!1,P(),X.deactivateTrap(b,y);var r=h(t,"onDeactivate"),c=h(t,"onPostDeactivate"),f=h(t,"checkCanReturnFocus"),d=h(t,"returnFocus","returnFocusOnDeactivate");r==null||r();var v=function(){Z(function(){d&&g(U(n.nodeFocusedBeforeActivation)),c==null||c()})};return d&&f?(f(U(n.nodeFocusedBeforeActivation)).then(v,v),this):(v(),this)},pause:function(e){if(n.paused||!n.active)return this;var t=h(e,"onPause"),r=h(e,"onPostPause");return n.paused=!0,t==null||t(),z(),P(),r==null||r(),this},unpause:function(e){if(!n.paused||!n.active)return this;var t=h(e,"onUnpause"),r=h(e,"onPostUnpause");return n.paused=!1,t==null||t(),D(),$(),P(),r==null||r(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return n.containers=t.map(function(r){return typeof r=="string"?i.querySelector(r):r}),n.active&&D(),P(),this}},y.updateContainerElements(a),y};function ye(o,a){const{el:u}=o,i=(a==null?void 0:a.focusTrapEl)||u;if(!i)return;const b={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:i,setReturnFocus:s=>(ae(s),!1),...a==null?void 0:a.focusTrapOptions,document:u.ownerDocument,tabbableOptions:ne,trapStack:oe};o.focusTrap=pe(i,b)}function ge(o,a){var u;o.focusTrapDisabled||(u=o.focusTrap)==null||u.activate(a)}function we(o,a){var u;(u=o.focusTrap)==null||u.deactivate(a)}function Fe(o){var a;(a=o.focusTrap)==null||a.updateContainerElements(o.el)}export{ge as a,ye as c,we as d,Fe as u};
