var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&o(e,r,t[r]);if(a)for(var r of a(t))n.call(t,r)&&o(e,r,t[r]);return e},l=(e,a)=>t(e,r(a));import{bE as c,ei as b,q as u}from"./vendor.5b1a85aa.js";let p;function f(e,t={}){let r=t.responseType;r?"array-buffer"!==r&&"blob"!==r&&"json"!==r&&"native"!==r&&"native-request-init"!==r&&"text"!==r&&(r="text"):r="json";const a=c(t.signal);return delete t.signal,b.invokeStaticMessage("request",{url:e,options:t},{signal:a}).then((async s=>{let n,o,c,b,f;if(s.data)if(s.data instanceof ArrayBuffer){if(!("json"!==r&&"text"!==r&&"blob"!==r||(n=new Blob([s.data]),"json"!==r&&"text"!==r||(p||(p=new FileReaderSync),b=p.readAsText(n),"json"!==r)))){try{o=JSON.parse(b||null)}catch(d){const r=l(i({},d),{url:e,requestOptions:t});throw new u("request:server",d.message,r)}if(o.error){const r=l(i({},o.error),{url:e,requestOptions:t});throw new u("request:server",o.error.message,r)}}}else"native"===r&&(s.data.signal=a,c=await fetch(s.data.url,s.data));switch(r){case"blob":f=n;break;case"json":f=o;break;case"native":f=c;break;case"text":f=b;break;default:f=s.data}return{data:f,requestOptions:t,ssl:s.ssl,url:e}}))}export{f as execute};
