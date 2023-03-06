import{B as o,z as d,an as T,l as u,r as m,G as c,ao as p,ap as A,b as w,Q as f,aq as g,ar as x,as as F,at as I,au as O,y as j,av as D,aw as y}from"./arcadeUtils-84954c90.js";import{t as v,e as l}from"./executionError-fb3f283a.js";import"./index-3399a756.js";import"./arcadeTimeUtils-90af5493.js";import"./number-19a1e355.js";function b(a,e){return a&&a.domain?a.domain.type==="coded-value"||a.domain.type==="codedValue"?w.convertObjectToArcadeDictionary({type:"codedValue",name:a.domain.name,dataType:y[a.field.type],codedValues:a.domain.codedValues.map(t=>({name:t.name,code:t.code}))},f(e)):w.convertObjectToArcadeDictionary({type:"range",name:a.domain.name,dataType:y[a.field.type],min:a.domain.min,max:a.domain.max},f(e)):null}function S(a){a.mode==="async"&&(a.functions.domain=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,2,3,e,t),d(n[0]))return b(T(n[0],m(n[1]),n[2]===void 0?void 0:u(n[2])),e);if(c(n[0]))return await n[0]._ensureLoaded(),b(p(m(n[1]),n[0],null,n[2]===void 0?void 0:u(n[2])),e);throw new v(e,l.InvalidParameter,t)})},a.functions.subtypes=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,1,e,t),d(n[0])){const r=A(n[0]);return r?w.convertObjectToArcadeDictionary(r,f(e)):null}if(c(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypes();return r?w.convertObjectToArcadeDictionary(r,f(e)):null}throw new v(e,l.InvalidParameter,t)})},a.functions.domainname=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,2,4,e,t),d(n[0]))return g(n[0],m(n[1]),n[2],n[3]===void 0?void 0:u(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const r=p(m(n[1]),n[0],null,n[3]===void 0?void 0:u(n[3]));return x(r,n[2])}throw new v(e,l.InvalidParameter,t)})},a.signatures.push({name:"domainname",min:2,max:4}),a.functions.domaincode=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,2,4,e,t),d(n[0]))return F(n[0],m(n[1]),n[2],n[3]===void 0?void 0:u(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const r=p(m(n[1]),n[0],null,n[3]===void 0?void 0:u(n[3]));return I(r,n[2])}throw new v(e,l.InvalidParameter,t)})},a.signatures.push({name:"domaincode",min:2,max:4})),a.functions.text=function(e,t){return a.standardFunctionAsync(e,t,(i,s,n)=>{if(o(n,1,2,e,t),!c(n[0]))return O(n[0],n[1]);{const r=j(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal)}})},a.functions.gdbversion=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,1,e,t),d(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new v(e,l.InvalidParameter,t)})},a.functions.schema=function(e,t){return a.standardFunctionAsync(e,t,async(i,s,n)=>{if(o(n,1,1,e,t),c(n[0]))return await n[0].load(),w.convertObjectToArcadeDictionary(n[0].schema(),f(e));if(d(n[0])){const r=D(n[0]);return r?w.convertObjectToArcadeDictionary(r,f(e)):null}throw new v(e,l.InvalidParameter,t)})}}export{S as registerFunctions};
