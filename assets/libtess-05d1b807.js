import{an as Zn}from"./index-e8c6bcc0.js";function nt(S,O){for(var T=0;T<O.length;T++){const f=O[T];if(typeof f!="string"&&!Array.isArray(f)){for(const t in f)if(t!=="default"&&!(t in S)){const _=Object.getOwnPropertyDescriptor(f,t);_&&Object.defineProperty(S,t,_.get?_:{enumerable:!0,get:()=>f[t]})}}}return Object.freeze(Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}))}var $,pn,J={exports:{}};J.exports,$=J,(pn=function(){function S(O){const T=O.locateFile,f={};var t=t!==void 0?t:{};const _=(()=>{let n;return{resolve:e=>n(e),promise:new Promise(e=>n=e)}})(),hn=()=>_.promise;t.locateFile=T,t.onRuntimeInitialized=()=>{_.resolve(f)},f.Module=t,f.whenLoaded=hn;var h,j={};for(h in t)t.hasOwnProperty(h)&&(j[h]=t[h]);var D,W,U,E,R,K=typeof window=="object",x=typeof importScripts=="function",gn=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",p="";function dn(n){return t.locateFile?t.locateFile(n,p):p+n}gn?(p=x?require("path").dirname(p)+"/":__dirname+"/",D=function(n,e){return E||(E=require("fs")),R||(R=require("path")),n=R.normalize(n),E.readFileSync(n,e?null:"utf8")},U=function(n){var e=D(n,!0);return e.buffer||(e=new Uint8Array(e)),bn(e.buffer),e},W=function(n,e,r){E||(E=require("fs")),R||(R=require("path")),n=R.normalize(n),E.readFile(n,function(o,i){o?r(o):e(i.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),$.exports=t,process.on("uncaughtException",function(n){if(!(n instanceof $n))throw n}),process.on("unhandledRejection",q),t.inspect=function(){return"[Emscripten Module object]"}):(K||x)&&(x?p=self.location.href:typeof document<"u"&&document.currentScript&&(p=document.currentScript.src),p=p.indexOf("blob:")!==0?p.substr(0,p.lastIndexOf("/")+1):"",D=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.send(null),e.responseText},x&&(U=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),W=function(n,e,r){var o=new XMLHttpRequest;o.open("GET",n,!0),o.responseType="arraybuffer",o.onload=function(){o.status==200||o.status==0&&o.response?e(o.response):r()},o.onerror=r,o.send(null)});var yn=t.print||console.log.bind(console),P=t.printErr||console.warn.bind(console);for(h in j)j.hasOwnProperty(h)&&(t[h]=j[h]);j=null,t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.quit&&t.quit;var I,z,Q=0,vn=function(n){Q=n},wn=function(){return Q};t.wasmBinary&&(I=t.wasmBinary),t.noExitRuntime,typeof WebAssembly!="object"&&q("no native wasm support detected");var V=!1;function bn(n,e){n||q("Assertion failed: "+e)}var Z,H,M,m,nn=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function tn(n,e,r){for(var o=e+r,i=e;n[i]&&!(i>=o);)++i;if(i-e>16&&n.subarray&&nn)return nn.decode(n.subarray(e,i));for(var a="";e<i;){var u=n[e++];if(128&u){var l=63&n[e++];if((224&u)!=192){var d=63&n[e++];if((u=(240&u)==224?(15&u)<<12|l<<6|d:(7&u)<<18|l<<12|d<<6|63&n[e++])<65536)a+=String.fromCharCode(u);else{var C=u-65536;a+=String.fromCharCode(55296|C>>10,56320|1023&C)}}else a+=String.fromCharCode((31&u)<<6|l)}else a+=String.fromCharCode(u)}return a}function An(n,e){return n?tn(H,n,e):""}function _n(n,e){return n%e>0&&(n+=e-n%e),n}function en(n){Z=n,t.HEAP8=new Int8Array(n),t.HEAP16=new Int16Array(n),t.HEAP32=M=new Int32Array(n),t.HEAPU8=H=new Uint8Array(n),t.HEAPU16=new Uint16Array(n),t.HEAPU32=new Uint32Array(n),t.HEAPF32=new Float32Array(n),t.HEAPF64=new Float64Array(n)}t.INITIAL_MEMORY;var rn=[],on=[],an=[];function En(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Sn(t.preRun.shift());N(rn)}function Rn(){N(on)}function Pn(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)jn(t.postRun.shift());N(an)}function Sn(n){rn.unshift(n)}function Tn(n){on.unshift(n)}function jn(n){an.unshift(n)}var y=0,F=null;function xn(n){y++,t.monitorRunDependencies&&t.monitorRunDependencies(y)}function In(n){if(y--,t.monitorRunDependencies&&t.monitorRunDependencies(y),y==0&&F){var e=F;F=null,e()}}function q(n){throw t.onAbort&&t.onAbort(n),P(n+=""),V=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}t.preloadedImages={},t.preloadedAudios={};var s,Hn="data:application/octet-stream;base64,";function un(n){return n.startsWith(Hn)}function sn(n){return n.startsWith("file://")}function fn(n){try{if(n==s&&I)return new Uint8Array(I);if(U)return U(n);throw"both async and sync fetching of the wasm failed"}catch(e){q(e)}}function Mn(){if(!I&&(K||x)){if(typeof fetch=="function"&&!sn(s))return fetch(s,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+s+"'";return n.arrayBuffer()}).catch(function(){return fn(s)});if(W)return new Promise(function(n,e){W(s,function(r){n(new Uint8Array(r))},e)})}return Promise.resolve().then(function(){return fn(s)})}function Fn(){var n={a:Bn};function e(a,u){var l=a.exports;t.asm=l,en((z=t.asm.m).buffer),m=t.asm.q,Tn(t.asm.n),In()}function r(a){e(a.instance)}function o(a){return Mn().then(function(u){return WebAssembly.instantiate(u,n)}).then(a,function(u){P("failed to asynchronously prepare wasm: "+u),q(u)})}function i(){return I||typeof WebAssembly.instantiateStreaming!="function"||un(s)||sn(s)||typeof fetch!="function"?o(r):fetch(s,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,n).then(r,function(u){return P("wasm streaming compile failed: "+u),P("falling back to ArrayBuffer instantiation"),o(r)})})}if(xn(),t.instantiateWasm)try{return t.instantiateWasm(n,e)}catch(a){return P("Module.instantiateWasm callback failed with error: "+a),!1}return i(),{}}function N(n){for(;n.length>0;){var e=n.shift();if(typeof e!="function"){var r=e.func;typeof r=="number"?e.arg===void 0?m.get(r)():m.get(r)(e.arg):r(e.arg===void 0?null:e.arg)}else e(t)}}function qn(){throw"longjmp"}function Cn(n,e,r){H.copyWithin(n,e,e+r)}function On(n){try{return z.grow(n-Z.byteLength+65535>>>16),en(z.buffer),1}catch{}}function Wn(n){var e=H.length,r=2147483648;if((n>>>=0)>r)return!1;for(var o=1;o<=4;o*=2){var i=e*(1+.2/o);if(i=Math.min(i,n+100663296),On(Math.min(r,_n(Math.max(n,i),65536))))return!0}return!1}un(s="libtess.wasm")||(s=dn(s));var L={mappings:{},buffers:[null,[],[]],printChar:function(n,e){var r=L.buffers[n];e===0||e===10?((n===1?yn:P)(tn(r,0)),r.length=0):r.push(e)},varargs:void 0,get:function(){return L.varargs+=4,M[L.varargs-4>>2]},getStr:function(n){return An(n)},get64:function(n,e){return n}};function Un(n,e,r,o){for(var i=0,a=0;a<r;a++){for(var u=M[e+8*a>>2],l=M[e+(8*a+4)>>2],d=0;d<l;d++)L.printChar(n,H[u+d]);i+=l}return M[o>>2]=i,0}function Ln(){return wn()}function kn(n){vn(n)}var Bn={h:qn,l:Cn,g:Wn,f:Un,b:Ln,k:Gn,d:Nn,j:Xn,i:Yn,e:zn,c:Dn,a:kn};Fn(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.n).apply(null,arguments)},t._malloc=function(){return(t._malloc=t.asm.o).apply(null,arguments)},t._free=function(){return(t._free=t.asm.p).apply(null,arguments)},t._triangulate=function(){return(t._triangulate=t.asm.r).apply(null,arguments)};var k,v=t.stackSave=function(){return(v=t.stackSave=t.asm.s).apply(null,arguments)},w=t.stackRestore=function(){return(w=t.stackRestore=t.asm.t).apply(null,arguments)},b=t._setThrew=function(){return(b=t._setThrew=t.asm.u).apply(null,arguments)};function Dn(n,e,r){var o=v();try{m.get(n)(e,r)}catch(i){if(w(o),i!==i+0&&i!=="longjmp")throw i;b(1,0)}}function zn(n,e){var r=v();try{m.get(n)(e)}catch(o){if(w(r),o!==o+0&&o!=="longjmp")throw o;b(1,0)}}function Nn(n,e){var r=v();try{return m.get(n)(e)}catch(o){if(w(r),o!==o+0&&o!=="longjmp")throw o;b(1,0)}}function Gn(n){var e=v();try{return m.get(n)()}catch(r){if(w(e),r!==r+0&&r!=="longjmp")throw r;b(1,0)}}function Xn(n,e,r){var o=v();try{return m.get(n)(e,r)}catch(i){if(w(o),i!==i+0&&i!=="longjmp")throw i;b(1,0)}}function Yn(n,e,r,o){var i=v();try{return m.get(n)(e,r,o)}catch(a){if(w(i),a!==a+0&&a!=="longjmp")throw a;b(1,0)}}function $n(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function G(n){function e(){k||(k=!0,t.calledRun=!0,V||(Rn(),t.onRuntimeInitialized&&t.onRuntimeInitialized(),Pn()))}y>0||(En(),y>0||(t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),e()},1)):e()))}if(F=function n(){k||G(),k||(F=n)},t.run=G,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();G();let X=null,g=null,A=null,B=null;const c=f.Module,Jn=2,cn=4e3;let ln=0;const Kn=(n,e,r)=>{X||(X=c._triangulate);let o=c.HEAPF32;const i=c.HEAP32.BYTES_PER_ELEMENT,a=2,u=o.BYTES_PER_ELEMENT;r>ln&&(ln=r,A&&(c._free(A),A=0),g&&(c._free(g),g=0)),A||(A=c._malloc(r*u)),B||(B=c._malloc(cn*i));const l=r*Jn;g||(g=c._malloc(l*u)),o=c.HEAPF32,o.set(n,A/u),c.HEAP32.set(e,B/i);const d=l/a,C=X(A,B,Math.min(e.length,cn),a,g,d),Qn=C*a;o=c.HEAPF32;const Vn=o.slice(g/u,g/u+Qn),Y={};return Y.buffer=Vn,Y.vertexCount=C,Y};return f.triangulate=Kn,f.whenLoaded()}return{load:S}}())!==void 0&&($.exports=pn);var mn=J.exports;const et=nt({__proto__:null,default:Zn(mn)},[mn]);export{et as l};
