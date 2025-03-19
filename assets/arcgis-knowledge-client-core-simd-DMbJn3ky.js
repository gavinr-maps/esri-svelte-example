var se=Object.defineProperty;var ue=(k,P,R)=>P in k?se(k,P,{enumerable:!0,configurable:!0,writable:!0,value:R}):k[P]=R;var Wt=(k,P,R)=>ue(k,typeof P!="symbol"?P+"":P,R);import{o as fe,e as _a}from"./_commonjsHelpers-DCkdB7M8.js";var jt,Pt={exports:{}};function le(){var Ia;return jt||(jt=1,k=Pt,P=typeof document<"u"?(Ia=document.currentScript)==null?void 0:Ia.src:void 0,R=function(Et={}){var Ba,ta,Ma,s=Et,Ot=new Promise((a,t)=>{Ba=a,ta=t}),Ha=Object.assign({},s),Da="./this.program",_="";typeof document<"u"&&document.currentScript&&(_=document.currentScript.src),P&&(_=P),_=_.startsWith("blob:")?"":_.substr(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1),Ma=async a=>{if((a=await fetch(a,{credentials:"same-origin"})).ok)return a.arrayBuffer();throw Error(a.status+" : "+a.url)};var kt=s.print||console.log.bind(console),D=s.printErr||console.error.bind(console);Object.assign(s,Ha),Ha=null,s.thisProgram&&(Da=s.thisProgram);var ea,wa,V,b,z,q,I,m,Va,za,Na,qa,na=s.wasmBinary,ra=!1;function La(){var a=ea.buffer;s.HEAP8=V=new Int8Array(a),s.HEAP16=z=new Int16Array(a),s.HEAPU8=b=new Uint8Array(a),s.HEAPU16=q=new Uint16Array(a),s.HEAP32=I=new Int32Array(a),s.HEAPU32=m=new Uint32Array(a),s.HEAPF32=Va=new Float32Array(a),s.HEAPF64=qa=new Float64Array(a),s.HEAP64=za=new BigInt64Array(a),s.HEAPU64=Na=new BigUint64Array(a)}var Ga=[],Ja=[],Ka=[];function St(){var a=s.preRun.shift();Ga.unshift(a)}var B=0,L=null;function Qa(a){var t;throw(t=s.onAbort)==null||t.call(s,a),D(a="Aborted("+a+")"),ra=!0,a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info."),ta(a),a}var $a,Ya=a=>a.startsWith("data:application/octet-stream;base64,");async function xt(a){if(!na)try{var t=await Ma(a);return new Uint8Array(t)}catch{}if(a!=$a||!na)throw"both async and sync fetching of the wasm failed";return a=new Uint8Array(na)}async function Ft(a,t){try{var e=await xt(a);return await WebAssembly.instantiate(e,t)}catch(n){D(`failed to asynchronously prepare wasm: ${n}`),Qa(n)}}async function Ut(a){var t=$a;if(!na&&typeof WebAssembly.instantiateStreaming=="function"&&!Ya(t)&&typeof fetch=="function")try{var e=fetch(t,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(e,a)}catch(n){D(`wasm streaming compile failed: ${n}`),D("falling back to ArrayBuffer instantiation")}return Ft(t,a)}class Za{constructor(t){Wt(this,"name","ExitStatus");this.message=`Program terminated with exit(${t})`,this.status=t}}var ba=a=>{for(;0<a.length;)a.shift()(s)},Ta=s.noExitRuntime||!0;class Rt{constructor(t){this.ga=t-24}}var oa={},ia=a=>{for(;a.length;){var t=a.pop();a.pop()(t)}};function G(a){return this.fromWireType(m[a>>2])}var J,Xa,p,N={},M={},sa={},W=(a,t,e)=>{function n(i){if((i=e(i)).length!==a.length)throw new J("Mismatched type converter count");for(var f=0;f<a.length;++f)j(a[f],i[f])}a.forEach(i=>sa[i]=t);var r=Array(t.length),o=[],u=0;t.forEach((i,f)=>{M.hasOwnProperty(i)?r[f]=M[i]:(o.push(i),N.hasOwnProperty(i)||(N[i]=[]),N[i].push(()=>{r[f]=M[i],++u===o.length&&n(r)}))}),o.length===0&&n(r)},ua=a=>{if(a===null)return"null";var t=typeof a;return t==="object"||t==="array"||t==="function"?a.toString():""+a},g=a=>{for(var t="";b[a];)t+=Xa[b[a++]];return t};function _t(a,t,e={}){var n=t.name;if(!a)throw new p(`type "${n}" must have a positive integer typeid pointer`);if(M.hasOwnProperty(a)){if(e.La)return;throw new p(`Cannot register type '${n}' twice`)}M[a]=t,delete sa[a],N.hasOwnProperty(a)&&(t=N[a],delete N[a],t.forEach(r=>r()))}function j(a,t,e={}){return _t(a,t,e)}var at=(a,t,e)=>{switch(t){case 1:return e?n=>V[n]:n=>b[n];case 2:return e?n=>z[n>>1]:n=>q[n>>1];case 4:return e?n=>I[n>>2]:n=>m[n>>2];case 8:return e?n=>za[n>>3]:n=>Na[n>>3];default:throw new TypeError(`invalid integer width (${t}): ${a}`)}},Aa=a=>{throw new p(a.ea.ha.fa.name+" instance already deleted")},Ca=!1,tt=()=>{},et=(a,t,e)=>t===e?a:e.ka===void 0||(a=et(a,t,e.ka))===null?null:e.Ea(a),nt={},It={},Bt=(a,t)=>{if(t===void 0)throw new p("ptr should not be undefined");for(;a.ka;)t=a.ua(t),a=a.ka;return It[t]},fa=(a,t)=>{if(!t.ha||!t.ga)throw new J("makeClassHandle requires ptr and ptrType");if(!!t.na!=!!t.ja)throw new J("Both smartPtrType and smartPtr must be specified");return t.count={value:1},la(Object.create(a,{ea:{value:t,writable:!0}}))},la=a=>typeof FinalizationRegistry>"u"?(la=t=>t,a):(Ca=new FinalizationRegistry(t=>{--(t=t.ea).count.value,t.count.value===0&&(t.ja?t.na.oa(t.ja):t.ha.fa.oa(t.ga))}),tt=t=>{Ca.unregister(t)},(la=t=>{var e=t.ea;return e.ja&&Ca.register(t,{ea:e},t),t})(a));function ca(){}var K=(a,t)=>Object.defineProperty(t,"name",{value:a}),Wa=(a,t,e)=>{if(a[t].ia===void 0){var n=a[t];a[t]=function(...r){if(!a[t].ia.hasOwnProperty(r.length))throw new p(`Function '${e}' called with an invalid number of arguments (${r.length}) - expects one of (${a[t].ia})!`);return a[t].ia[r.length].apply(this,r)},a[t].ia=[],a[t].ia[n.qa]=n}},ja=(a,t,e)=>{if(s.hasOwnProperty(a)){if(e===void 0||s[a].ia!==void 0&&s[a].ia[e]!==void 0)throw new p(`Cannot register public name '${a}' twice`);if(Wa(s,a,a),s[a].ia.hasOwnProperty(e))throw new p(`Cannot register multiple overloads of a function with the same number of arguments (${e})!`);s[a].ia[e]=t}else s[a]=t,s[a].qa=e},Mt=a=>{var t=(a=a.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=t&&57>=t?`_${a}`:a};function Ht(a,t,e,n,r,o,u,i){this.name=a,this.constructor=t,this.pa=e,this.oa=n,this.ka=r,this.Ga=o,this.ua=u,this.Ea=i,this.Na=[]}var ha=(a,t,e)=>{for(;t!==e;){if(!t.ua)throw new p(`Expected null or instance of ${e.name}, got an instance of ${t.name}`);a=t.ua(a),t=t.ka}return a};function Dt(a,t){if(t===null){if(this.ya)throw new p(`null is not a valid ${this.name}`);return 0}if(!t.ea)throw new p(`Cannot pass "${ua(t)}" as a ${this.name}`);if(!t.ea.ga)throw new p(`Cannot pass deleted object as a pointer of type ${this.name}`);return ha(t.ea.ga,t.ea.ha.fa,this.fa)}function Vt(a,t){if(t===null){if(this.ya)throw new p(`null is not a valid ${this.name}`);if(this.xa){var e=this.za();return a!==null&&a.push(this.oa,e),e}return 0}if(!t||!t.ea)throw new p(`Cannot pass "${ua(t)}" as a ${this.name}`);if(!t.ea.ga)throw new p(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.wa&&t.ea.ha.wa)throw new p(`Cannot convert argument of type ${t.ea.na?t.ea.na.name:t.ea.ha.name} to parameter type ${this.name}`);if(e=ha(t.ea.ga,t.ea.ha.fa,this.fa),this.xa){if(t.ea.ja===void 0)throw new p("Passing raw pointer to smart pointer is illegal");switch(this.Sa){case 0:if(t.ea.na!==this)throw new p(`Cannot convert argument of type ${t.ea.na?t.ea.na.name:t.ea.ha.name} to parameter type ${this.name}`);e=t.ea.ja;break;case 1:e=t.ea.ja;break;case 2:if(t.ea.na===this)e=t.ea.ja;else{var n=t.clone();e=this.Oa(e,E(()=>n.delete())),a!==null&&a.push(this.oa,e)}break;default:throw new p("Unsupporting sharing policy")}}return e}function zt(a,t){if(t===null){if(this.ya)throw new p(`null is not a valid ${this.name}`);return 0}if(!t.ea)throw new p(`Cannot pass "${ua(t)}" as a ${this.name}`);if(!t.ea.ga)throw new p(`Cannot pass deleted object as a pointer of type ${this.name}`);if(t.ea.ha.wa)throw new p(`Cannot convert argument of type ${t.ea.ha.name} to parameter type ${this.name}`);return ha(t.ea.ga,t.ea.ha.fa,this.fa)}function Q(a,t,e,n,r,o,u,i,f,c,l){this.name=a,this.fa=t,this.ya=e,this.wa=n,this.xa=r,this.Ma=o,this.Sa=u,this.Ca=i,this.za=f,this.Oa=c,this.oa=l,r||t.ka!==void 0?this.toWireType=Vt:(this.toWireType=n?Dt:zt,this.ma=null)}var rt,ot,it=(a,t,e)=>{if(!s.hasOwnProperty(a))throw new J("Replacing nonexistent public symbol");s[a].ia!==void 0&&e!==void 0?s[a].ia[e]=t:(s[a]=t,s[a].qa=e)},pa=[],$=(a,t)=>{a=g(a);var e=pa[t];if(e||(t>=pa.length&&(pa.length=t+1),pa[t]=e=rt.get(t)),typeof e!="function")throw new p(`unknown function pointer with signature ${a}: ${t}`);return e},st=a=>{a=bt(a);var t=g(a);return F(a),t},H=(a,t)=>{function e(o){r[o]||M[o]||(sa[o]?sa[o].forEach(e):(n.push(o),r[o]=!0))}var n=[],r={};throw t.forEach(e),new ot(`${a}: `+n.map(st).join([", "]))};function Nt(a){for(var t=1;t<a.length;++t)if(a[t]!==null&&a[t].ma===void 0)return!0;return!1}function da(a,t,e,n,r){var o=t.length;if(2>o)throw new p("argTypes array size mismatch! Must at least get return value and 'this' types!");var u=t[1]!==null&&e!==null,i=Nt(t),f=t[0].name!=="void",c=o-2,l=Array(c),h=[],d=[];return K(a,function(...w){if(d.length=0,h.length=u?2:1,h[0]=r,u){var y=t[1].toWireType(d,this);h[1]=y}for(var v=0;v<c;++v)l[v]=t[v+2].toWireType(d,w[v]),h.push(l[v]);if(w=n(...h),i)ia(d);else for(v=u?1:2;v<t.length;v++){var A=v===1?y:l[v-2];t[v].ma!==null&&t[v].ma(A)}return y=f?t[0].fromWireType(w):void 0})}var Pa,ut,ft,Y,ma=(a,t)=>{for(var e=[],n=0;n<a;n++)e.push(m[t+4*n>>2]);return e},Ea=a=>{const t=(a=a.trim()).indexOf("(");return t!==-1?a.substr(0,t):a},lt=(a,t,e)=>{if(!(a instanceof Object))throw new p(`${e} with invalid "this": ${a}`);if(!(a instanceof t.fa.constructor))throw new p(`${e} incompatible with "this" of type ${a.constructor.name}`);if(!a.ea.ga)throw new p(`cannot call emscripten binding method ${e} on deleted object`);return ha(a.ea.ga,a.ea.ha.fa,t.fa)},Oa=[],S=[],ka=a=>{9<a&&--S[a+1]==0&&(S[a]=void 0,Oa.push(a))},T=a=>{if(!a)throw new p("Cannot use deleted val. handle = "+a);return S[a]},E=a=>{switch(a){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:const t=Oa.pop()||S.length;return S[t]=a,S[t+1]=1,t}},ct={name:"emscripten::val",fromWireType:a=>{var t=T(a);return ka(a),t},toWireType:(a,t)=>E(t),la:8,readValueFromPointer:G,ma:null},qt=(a,t,e)=>{switch(t){case 1:return e?function(n){return this.fromWireType(V[n])}:function(n){return this.fromWireType(b[n])};case 2:return e?function(n){return this.fromWireType(z[n>>1])}:function(n){return this.fromWireType(q[n>>1])};case 4:return e?function(n){return this.fromWireType(I[n>>2])}:function(n){return this.fromWireType(m[n>>2])};default:throw new TypeError(`invalid integer width (${t}): ${a}`)}},Z=(a,t)=>{var e=M[a];if(e===void 0)throw a=`${t} has unknown type ${st(a)}`,new p(a);return e},Lt=(a,t)=>{switch(t){case 4:return function(e){return this.fromWireType(Va[e>>2])};case 8:return function(e){return this.fromWireType(qa[e>>3])};default:throw new TypeError(`invalid float width (${t}): ${a}`)}},Gt=Object.assign({optional:!0},ct),X=(a,t,e)=>{var n=b;if(0<e){e=t+e-1;for(var r=0;r<a.length;++r){var o=a.charCodeAt(r);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&a.charCodeAt(++r)),127>=o){if(t>=e)break;n[t++]=o}else{if(2047>=o){if(t+1>=e)break;n[t++]=192|o>>6}else{if(65535>=o){if(t+2>=e)break;n[t++]=224|o>>12}else{if(t+3>=e)break;n[t++]=240|o>>18,n[t++]=128|o>>12&63}n[t++]=128|o>>6&63}n[t++]=128|63&o}}n[t]=0}},ht=typeof TextDecoder<"u"?new TextDecoder:void 0,pt=(a,t=0,e=NaN)=>{var n=t+e;for(e=t;a[e]&&!(e>=n);)++e;if(16<e-t&&a.buffer&&ht)return ht.decode(a.subarray(t,e));for(n="";t<e;){var r=a[t++];if(128&r){var o=63&a[t++];if((224&r)==192)n+=String.fromCharCode((31&r)<<6|o);else{var u=63&a[t++];65536>(r=(240&r)==224?(15&r)<<12|o<<6|u:(7&r)<<18|o<<12|u<<6|63&a[t++])?n+=String.fromCharCode(r):(r-=65536,n+=String.fromCharCode(55296|r>>10,56320|1023&r))}}else n+=String.fromCharCode(r)}return n},dt=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Jt=(a,t)=>{for(var e=a>>1,n=e+t/2;!(e>=n)&&q[e];)++e;if(32<(e<<=1)-a&&dt)return dt.decode(b.subarray(a,e));for(e="",n=0;!(n>=t/2);++n){var r=z[a+2*n>>1];if(r==0)break;e+=String.fromCharCode(r)}return e},Kt=(a,t,e)=>{if(e??(e=2147483647),2>e)return 0;var n=t;e=(e-=2)<2*a.length?e/2:a.length;for(var r=0;r<e;++r)z[t>>1]=a.charCodeAt(r),t+=2;return z[t>>1]=0,t-n},Qt=a=>2*a.length,Yt=(a,t)=>{for(var e=0,n="";!(e>=t/4);){var r=I[a+4*e>>2];if(r==0)break;++e,65536<=r?(r-=65536,n+=String.fromCharCode(55296|r>>10,56320|1023&r)):n+=String.fromCharCode(r)}return n},Zt=(a,t,e)=>{if(e??(e=2147483647),4>e)return 0;var n=t;e=n+e-4;for(var r=0;r<a.length;++r){var o=a.charCodeAt(r);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&a.charCodeAt(++r)),I[t>>2]=o,(t+=4)+4>e)break}return I[t>>2]=0,t-n},Xt=a=>{for(var t=0,e=0;e<a.length;++e){var n=a.charCodeAt(e);55296<=n&&57343>=n&&++e,t+=4}return t},Sa=0,mt=(a,t,e)=>{var n=[];return a=a.toWireType(n,e),n.length&&(m[t>>2]=E(n)),a},va=[],ae={},xa=a=>{var t=ae[a];return t===void 0?g(a):t},vt=()=>{function a(t){t.$$$embind_global$$$=t;var e=typeof $$$embind_global$$$=="object"&&t.$$$embind_global$$$==t;return e||delete t.$$$embind_global$$$,e}if(typeof globalThis=="object")return globalThis;if(typeof $$$embind_global$$$=="object"||(typeof _a=="object"&&a(_a)?$$$embind_global$$$=_a:typeof self=="object"&&a(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")},te=a=>{var t=va.length;return va.push(a),t},ee=(a,t)=>{for(var e=Array(a),n=0;n<a;++n)e[n]=Z(m[t+4*n>>2],"parameter "+n);return e},ne=Reflect.construct,aa={},yt=a=>{if(!(a instanceof Za||a=="unwind"))throw a},gt=a=>{var t;throw wa=a,Ta||0<Sa||((t=s.onExit)==null||t.call(s,a),ra=!0),new Za(a)},re=a=>{if(!ra)try{if(a(),!(Ta||0<Sa))try{wa=a=wa,gt(a)}catch(t){yt(t)}}catch(t){yt(t)}},Fa={},wt=()=>{if(!Pa){var a,t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:Da||"./this.program"};for(a in Fa)Fa[a]===void 0?delete t[a]:t[a]=Fa[a];var e=[];for(a in t)e.push(`${a}=${t[a]}`);Pa=e}return Pa},oe=[null,[],[]];J=s.InternalError=class extends Error{constructor(a){super(a),this.name="InternalError"}};for(var $t=Array(256),ya=0;256>ya;++ya)$t[ya]=String.fromCharCode(ya);Xa=$t,p=s.BindingError=class extends Error{constructor(a){super(a),this.name="BindingError"}},Object.assign(ca.prototype,{isAliasOf:function(a){if(!(this instanceof ca&&a instanceof ca))return!1;var t=this.ea.ha.fa,e=this.ea.ga;a.ea=a.ea;var n=a.ea.ha.fa;for(a=a.ea.ga;t.ka;)e=t.ua(e),t=t.ka;for(;n.ka;)a=n.ua(a),n=n.ka;return t===n&&e===a},clone:function(){if(this.ea.ga||Aa(this),this.ea.ta)return this.ea.count.value+=1,this;var a=la,t=Object,e=t.create,n=Object.getPrototypeOf(this),r=this.ea;return(a=a(e.call(t,n,{ea:{value:{count:r.count,sa:r.sa,ta:r.ta,ga:r.ga,ha:r.ha,ja:r.ja,na:r.na}}}))).ea.count.value+=1,a.ea.sa=!1,a},delete(){if(this.ea.ga||Aa(this),this.ea.sa&&!this.ea.ta)throw new p("Object already scheduled for deletion");tt(this);var a=this.ea;--a.count.value,a.count.value===0&&(a.ja?a.na.oa(a.ja):a.ha.fa.oa(a.ga)),this.ea.ta||(this.ea.ja=void 0,this.ea.ga=void 0)},isDeleted:function(){return!this.ea.ga},deleteLater:function(){if(this.ea.ga||Aa(this),this.ea.sa&&!this.ea.ta)throw new p("Object already scheduled for deletion");return this.ea.sa=!0,this}}),Object.assign(Q.prototype,{Ha(a){return this.Ca&&(a=this.Ca(a)),a},Aa(a){var t;(t=this.oa)==null||t.call(this,a)},la:8,readValueFromPointer:G,fromWireType:function(a){function t(){return this.xa?fa(this.fa.pa,{ha:this.Ma,ga:e,na:this,ja:a}):fa(this.fa.pa,{ha:this,ga:a})}var e=this.Ha(a);if(!e)return this.Aa(a),null;var n=Bt(this.fa,e);if(n!==void 0)return n.ea.count.value===0?(n.ea.ga=e,n.ea.ja=a,n.clone()):(n=n.clone(),this.Aa(a),n);if(n=this.fa.Ga(e),!(n=nt[n]))return t.call(this);n=this.wa?n.Da:n.pointerType;var r=et(e,this.fa,n.fa);return r===null?t.call(this):this.xa?fa(n.fa.pa,{ha:n,ga:r,na:this,ja:a}):fa(n.fa.pa,{ha:n,ga:r})}}),ot=s.UnboundTypeError=(ut=Error,(Y=K(ft="UnboundTypeError",function(a){this.name=ft,this.message=a,(a=Error(a).stack)!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))})).prototype=Object.create(ut.prototype),Y.prototype.constructor=Y,Y.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},Y),S.push(0,1,void 0,1,null,1,!0,1,!1,1),s.count_emval_handles=()=>S.length/2-5-Oa.length;var x,ie={m:(a,t,e)=>{var n=new Rt(a);throw m[n.ga+16>>2]=0,m[n.ga+4>>2]=t,m[n.ga+8>>2]=e,a},O:()=>Qa(""),r:a=>{var t=oa[a];delete oa[a];var e=t.za,n=t.oa,r=t.Ba,o=r.map(u=>u.Ka).concat(r.map(u=>u.Qa));W([a],o,u=>{var i={};return r.forEach((f,c)=>{var l=u[c],h=f.Ia,d=f.Ja,w=u[c+r.length],y=f.Pa,v=f.Ra;i[f.Fa]={read:A=>l.fromWireType(h(d,A)),write:(A,U)=>{var O=[];y(v,A,w.toWireType(O,U)),ia(O)}}}),[{name:t.name,fromWireType:f=>{var c,l={};for(c in i)l[c]=i[c].read(f);return n(f),l},toWireType:(f,c)=>{for(var l in i)if(!(l in c))throw new TypeError(`Missing field: "${l}"`);var h=e();for(l in i)i[l].write(h,c[l]);return f!==null&&f.push(n,h),h},la:8,readValueFromPointer:G,ma:n}]})},E:(a,t,e)=>{j(a,{name:t=g(t),fromWireType:n=>n,toWireType:function(n,r){if(typeof r!="bigint"&&typeof r!="number")throw new TypeError(`Cannot convert "${ua(r)}" to ${this.name}`);return typeof r=="number"&&(r=BigInt(r)),r},la:8,readValueFromPointer:at(t,e,t.indexOf("u")==-1),ma:null})},V:(a,t,e,n)=>{j(a,{name:t=g(t),fromWireType:function(r){return!!r},toWireType:function(r,o){return o?e:n},la:8,readValueFromPointer:function(r){return this.fromWireType(b[r])},ma:null})},f:(a,t,e,n,r,o,u,i,f,c,l,h,d)=>{l=g(l),o=$(r,o),i&&(i=$(u,i)),c&&(c=$(f,c)),d=$(h,d);var w=Mt(l);ja(w,function(){H(`Cannot construct ${l} due to unbound types`,[n])}),W([a,t,e],n?[n]:[],y=>{if(y=y[0],n)var v=y.fa,A=v.pa;else A=ca.prototype;y=K(l,function(...Ra){if(Object.getPrototypeOf(this)!==U)throw new p("Use 'new' to construct "+l);if(C.ra===void 0)throw new p(l+" has no accessible constructor");var Ct=C.ra[Ra.length];if(Ct===void 0)throw new p(`Tried to invoke ctor of ${l} with invalid number of parameters (${Ra.length}) - expected (${Object.keys(C.ra).toString()}) parameters instead!`);return Ct.apply(this,Ra)});var U=Object.create(A,{constructor:{value:y}});y.prototype=U;var O,C=new Ht(l,y,U,d,v,o,i,c);return C.ka&&((O=C.ka).va??(O.va=[]),C.ka.va.push(C)),v=new Q(l,C,!0,!1,!1),O=new Q(l+"*",C,!1,!1,!1),A=new Q(l+" const*",C,!1,!0,!1),nt[a]={pointerType:O,Da:A},it(w,y),[v,O,A]})},v:(a,t,e,n,r,o,u)=>{var i=ma(e,n);t=g(t),t=Ea(t),o=$(r,o),W([],[a],f=>{function c(){H(`Cannot call ${l} due to unbound types`,i)}var l=`${(f=f[0]).name}.${t}`;t.startsWith("@@")&&(t=Symbol[t.substring(2)]);var h=f.fa.constructor;return h[t]===void 0?(c.qa=e-1,h[t]=c):(Wa(h,t,l),h[t].ia[e-1]=c),W([],i,d=>{if(d=da(l,[d[0],null].concat(d.slice(1)),null,o,u),h[t].ia===void 0?(d.qa=e-1,h[t]=d):h[t].ia[e-1]=d,f.fa.va)for(const w of f.fa.va)w.constructor.hasOwnProperty(t)||(w.constructor[t]=d);return[]}),[]})},g:(a,t,e,n,r,o)=>{var u=ma(t,e);r=$(n,r),W([],[a],i=>{var f=`constructor ${(i=i[0]).name}`;if(i.fa.ra===void 0&&(i.fa.ra=[]),i.fa.ra[t-1]!==void 0)throw new p(`Cannot register multiple constructors with identical number of parameters (${t-1}) for class '${i.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return i.fa.ra[t-1]=()=>{H(`Cannot construct ${i.name} due to unbound types`,u)},W([],u,c=>(c.splice(1,0,null),i.fa.ra[t-1]=da(f,c,null,r,o),[])),[]})},a:(a,t,e,n,r,o,u,i)=>{var f=ma(e,n);t=g(t),t=Ea(t),o=$(r,o),W([],[a],c=>{function l(){H(`Cannot call ${h} due to unbound types`,f)}var h=`${(c=c[0]).name}.${t}`;t.startsWith("@@")&&(t=Symbol[t.substring(2)]),i&&c.fa.Na.push(t);var d=c.fa.pa,w=d[t];return w===void 0||w.ia===void 0&&w.className!==c.name&&w.qa===e-2?(l.qa=e-2,l.className=c.name,d[t]=l):(Wa(d,t,h),d[t].ia[e-2]=l),W([],f,y=>(y=da(h,y,c,o,u),d[t].ia===void 0?(y.qa=e-2,d[t]=y):d[t].ia[e-2]=y,[])),[]})},c:(a,t,e,n,r,o,u,i,f,c)=>{t=g(t),r=$(n,r),W([],[a],l=>{var h=`${(l=l[0]).name}.${t}`,d={get(){H(`Cannot access ${h} due to unbound types`,[e,u])},enumerable:!0,configurable:!0};return d.set=f?()=>H(`Cannot access ${h} due to unbound types`,[e,u]):()=>{throw new p(h+" is a read-only property")},Object.defineProperty(l.fa.pa,t,d),W([],f?[e,u]:[e],w=>{var y=w[0],v={get(){var U=lt(this,l,h+" getter");return y.fromWireType(r(o,U))},enumerable:!0};if(f){f=$(i,f);var A=w[1];v.set=function(U){var O=lt(this,l,h+" setter"),C=[];f(c,O,A.toWireType(C,U)),ia(C)}}return Object.defineProperty(l.fa.pa,t,v),[]}),[]})},T:a=>j(a,ct),n:(a,t,e,n)=>{function r(){}t=g(t),r.values={},j(a,{name:t,constructor:r,fromWireType:function(o){return this.constructor.values[o]},toWireType:(o,u)=>u.value,la:8,readValueFromPointer:qt(t,e,n),ma:null}),ja(t,r)},e:(a,t,e)=>{var n=Z(a,"enum");t=g(t),a=n.constructor,n=Object.create(n.constructor.prototype,{value:{value:e},constructor:{value:K(`${n.name}_${t}`,function(){})}}),a.values[e]=n,a[t]=n},D:(a,t,e)=>{j(a,{name:t=g(t),fromWireType:n=>n,toWireType:(n,r)=>r,la:8,readValueFromPointer:Lt(t,e),ma:null})},X:(a,t,e,n,r,o)=>{var u=ma(t,e);a=g(a),a=Ea(a),r=$(n,r),ja(a,function(){H(`Cannot call ${a} due to unbound types`,u)},t-1),W([],u,i=>(it(a,da(a,[i[0],null].concat(i.slice(1)),null,r,o),t-1),[]))},w:(a,t,e,n,r)=>{if(t=g(t),r===-1&&(r=4294967295),r=i=>i,n===0){var o=32-8*e;r=i=>i<<o>>>o}var u=t.includes("unsigned")?function(i,f){return f>>>0}:function(i,f){return f};j(a,{name:t,fromWireType:r,toWireType:u,la:8,readValueFromPointer:at(t,e,n!==0),ma:null})},o:(a,t,e)=>{function n(o){return new r(V.buffer,m[o+4>>2],m[o>>2])}var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];j(a,{name:e=g(e),fromWireType:n,la:8,readValueFromPointer:n},{La:!0})},t:a=>{j(a,Gt)},i:(a,t,e,n,r,o,u,i,f,c,l,h)=>{e=g(e),o=$(r,o),i=$(u,i),c=$(f,c),h=$(l,h),W([a],[t],d=>(d=d[0],[new Q(e,d.fa,!1,!1,!0,d,n,o,i,c,h)]))},U:(a,t)=>{j(a,{name:t=g(t),fromWireType:function(e){for(var n,r=m[e>>2],o=e+4,u=o,i=0;i<=r;++i){var f=o+i;i!=r&&b[f]!=0||(u=u?pt(b,u,f-u):"",n===void 0?n=u:(n+="\0",n+=u),u=f+1)}return F(e),n},toWireType:function(e,n){n instanceof ArrayBuffer&&(n=new Uint8Array(n));var r,o=typeof n=="string";if(!(o||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int8Array))throw new p("Cannot pass non-string to std::string");if(o)for(var u=r=0;u<n.length;++u){var i=n.charCodeAt(u);127>=i?r++:2047>=i?r+=2:55296<=i&&57343>=i?(r+=4,++u):r+=3}else r=n.length;if(i=(u=Ua(4+r+1))+4,m[u>>2]=r,o)X(n,i,r+1);else if(o)for(o=0;o<r;++o){var f=n.charCodeAt(o);if(255<f)throw F(i),new p("String has UTF-16 code units that do not fit in 8 bits");b[i+o]=f}else for(o=0;o<r;++o)b[i+o]=n[o];return e!==null&&e.push(F,u),u},la:8,readValueFromPointer:G,ma(e){F(e)}})},C:(a,t,e)=>{if(e=g(e),t===2)var n=Jt,r=Kt,o=Qt,u=i=>q[i>>1];else t===4&&(n=Yt,r=Zt,o=Xt,u=i=>m[i>>2]);j(a,{name:e,fromWireType:i=>{for(var f,c=m[i>>2],l=i+4,h=0;h<=c;++h){var d=i+4+h*t;h!=c&&u(d)!=0||(l=n(l,d-l),f===void 0?f=l:(f+="\0",f+=l),l=d+t)}return F(i),f},toWireType:(i,f)=>{if(typeof f!="string")throw new p(`Cannot pass non-string to C++ string type ${e}`);var c=o(f),l=Ua(4+c+t);return m[l>>2]=c/t,r(f,l+4,c+t),i!==null&&i.push(F,l),l},la:8,readValueFromPointer:G,ma(i){F(i)}})},s:(a,t,e,n,r,o)=>{oa[a]={name:g(t),za:$(e,n),oa:$(r,o),Ba:[]}},j:(a,t,e,n,r,o,u,i,f,c)=>{oa[a].Ba.push({Fa:g(t),Ka:e,Ia:$(n,r),Ja:o,Qa:u,Pa:$(i,f),Ra:c})},W:(a,t)=>{j(a,{Ta:!0,name:t=g(t),la:0,fromWireType:()=>{},toWireType:()=>{}})},J:()=>{Ta=!1,Sa=0},l:(a,t,e)=>(a=T(a),t=Z(t,"emval::as"),mt(t,e,a)),y:(a,t)=>(a=T(a),(t=Z(t,"emval::as")).toWireType(null,a)),Y:(a,t,e,n)=>(a=va[a])(null,t=T(t),e,n),B:(a,t,e,n,r)=>(a=va[a])(t=T(t),t[e=xa(e)],n,r),b:ka,G:a=>a===0?E(vt()):(a=xa(a),E(vt()[a])),A:(a,t,e)=>{var n=ee(a,t),r=n.shift();a--;var o=Array(a);return t=`methodCaller<(${n.map(u=>u.name).join(", ")}) => ${r.name}>`,te(K(t,(u,i,f,c)=>{for(var l=0,h=0;h<a;++h)o[h]=n[h].readValueFromPointer(c+l),l+=n[h].la;return u=e===1?ne(i,o):i.apply(u,o),mt(r,f,u)}))},q:(a,t)=>(a=T(a),t=T(t),E(a[t])),h:a=>{9<a&&(S[a+1]+=1)},I:(a,t)=>(a=T(a))instanceof(t=T(t)),u:a=>typeof(a=T(a))=="number",x:a=>typeof(a=T(a))=="string",F:()=>E([]),p:a=>E(xa(a)),k:a=>{var t=T(a);ia(t),ka(a)},d:(a,t)=>(a=(a=Z(a,"_emval_take_value")).readValueFromPointer(t),E(a)),z:a=>(a=T(a),E(typeof a)),K:(a,t)=>{if(aa[a]&&(clearTimeout(aa[a].id),delete aa[a]),!t)return 0;var e=setTimeout(()=>{delete aa[a],re(()=>Tt(a,performance.now()))},t);return aa[a]={id:e,Ua:t},0},L:(a,t,e,n)=>{var r=new Date().getFullYear(),o=new Date(r,0,1).getTimezoneOffset();r=new Date(r,6,1).getTimezoneOffset(),m[a>>2]=60*Math.max(o,r),I[t>>2]=+(o!=r),a=(t=u=>{var i=Math.abs(u);return`UTC${0<=u?"-":"+"}${String(Math.floor(i/60)).padStart(2,"0")}${String(i%60).padStart(2,"0")}`})(o),t=t(r),r<o?(X(a,e,17),X(t,n,17)):(X(a,n,17),X(t,e,17))},P:a=>{var t=b.length;if(2147483648<(a>>>=0))return!1;for(var e=1;4>=e;e*=2){var n=t*(1+.2/e);n=Math.min(n,a+100663296);a:{n=(Math.min(2147483648,65536*Math.ceil(Math.max(a,n)/65536))-ea.buffer.byteLength+65535)/65536|0;try{ea.grow(n),La();var r=1;break a}catch{}r=void 0}if(r)return!0}return!1},M:(a,t)=>{var e=0;return wt().forEach((n,r)=>{var o=t+e;for(r=m[a+4*r>>2]=o,o=0;o<n.length;++o)V[r++]=n.charCodeAt(o);V[r]=0,e+=n.length+1}),0},N:(a,t)=>{var e=wt();m[a>>2]=e.length;var n=0;return e.forEach(r=>n+=r.length+1),m[t>>2]=n,0},S:()=>52,R:function(){return 70},Q:(a,t,e,n)=>{for(var r=0,o=0;o<e;o++){var u=m[t>>2],i=m[t+4>>2];t+=8;for(var f=0;f<i;f++){var c=b[u+f],l=oe[a];c===0||c===10?((a===1?kt:D)(pt(l)),l.length=0):l.push(c)}r+=i}return m[n>>2]=r,0},H:gt};(async function(){var n;function a(r){var o;return x=r.exports,ea=x.Z,La(),rt=x.ca,Ja.unshift(x._),B--,(o=s.monitorRunDependencies)==null||o.call(s,B),B==0&&L&&(r=L,L=null,r()),x}B++,(n=s.monitorRunDependencies)==null||n.call(s,B);var t={a:ie};if(s.instantiateWasm)try{return s.instantiateWasm(t,a)}catch(r){D(`Module.instantiateWasm callback failed with error: ${r}`),ta(r)}$a??($a=Ya("arcgis-knowledge-client-core-simd.wasm")?"arcgis-knowledge-client-core-simd.wasm":s.locateFile?s.locateFile("arcgis-knowledge-client-core-simd.wasm",_):_+"arcgis-knowledge-client-core-simd.wasm");try{var e=await Ut(t);return a(e.instance),e}catch(r){ta(r)}})();var ga,bt=a=>(bt=x.$)(a),Ua=a=>(Ua=x.aa)(a),F=a=>(F=x.ba)(a),Tt=(a,t)=>(Tt=x.da)(a,t);function At(){function a(){var e;if(!ga&&(ga=!0,s.calledRun=!0,!ra)){if(ba(Ja),Ba(s),(e=s.onRuntimeInitialized)==null||e.call(s),s.postRun)for(typeof s.postRun=="function"&&(s.postRun=[s.postRun]);s.postRun.length;){var t=s.postRun.shift();Ka.unshift(t)}ba(Ka)}}if(!(0<B)){if(s.preRun)for(typeof s.preRun=="function"&&(s.preRun=[s.preRun]);s.preRun.length;)St();ba(Ga),0<B||(s.setStatus?(s.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>s.setStatus(""),1),a()},1)):a())}}if(L=function a(){ga||At(),ga||(L=a)},s.preInit)for(typeof s.preInit=="function"&&(s.preInit=[s.preInit]);0<s.preInit.length;)s.preInit.pop()();return At(),Ot},k.exports=R,k.exports.default=R),Pt.exports;var k,P,R}const ce=fe(le()),de=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));export{de as a};
