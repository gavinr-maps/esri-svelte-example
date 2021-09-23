import{h as e,y as t,L as n,N as r,P as o,o as a,z as c,Z as i,W as l,T as s,r as u,M as f,a as h,R as p,j as d,D as g,t as E,f as m,S as y,p as w,u as v,I as N,E as I,O as b,$ as S,b as T,c as R,J as O,d as A,e as U,A as C,Y as F,C as M,g as x,B as D,i as P,k as L,l as k,s as _,m as j,n as V,q as B,v as Y}from"./arcadeUtils.5b619627.js";import{registerFunctions as G}from"./geomasync.646704d6.js";import{gM as z,gR as q,gO as H,b8 as Z,gN as K,fV as W,al as J,b9 as X,cK as Q,cJ as $,cU as ee}from"./vendor.d0a39f0f.js";import"./number.65ee9777.js";import"./FeatureSetReader.3c31cb94.js";import"./centroid.1404a86d.js";import"./geometryEngineAsync.aca6f819.js";function te(e){return e instanceof Error?H(e):H(new Error(e))}function ne(e){return K(e)}function re(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(ce(e,t.arguments[r]));return q(n)}function oe(e,t,n){return z(((r,o)=>{re(e,t).then((a=>{try{r(n(e,t,a))}catch(c){o(c)}}),o)}))}function ae(e,t,n){try{return re(e,t).then((r=>{try{const o=n(e,t,r);return function(e){return e&&"function"==typeof e.then}(o)?o:K(o)}catch(o){return te(o)}}))}catch(r){return te(r)}}function ce(e,t,n){try{if(t.breakpoint&&!0!==n)return t.breakpoint().then((()=>ce(e,t,!0)));switch(t.type){case"VariableDeclarator":return function(e,t){try{let n=null;return n=null===t.init?K(null):ce(e,t.init),null!==e.localScope?n.then((n=>z((r=>{if(n===p&&(n=null),"Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const o=t.id.name.toLowerCase();e.localScope[o]={value:n,valueset:!0,node:t.init},r(p)})))):n.then((n=>z((r=>{if("Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const o=t.id.name.toLowerCase();n===p&&(n=null),e.globalScope[o]={value:n,valueset:!0,node:t.init},r(p)}))))}catch(n){return te(n)}}(e,t);case"VariableDeclaration":return ge(e,t,0);case"BlockStatement":return function(e,t){try{return de(e,t,0)}catch(n){return te(n)}}(e,t);case"FunctionDeclaration":return function(e,t){try{const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new E(t,e)},K(p)}catch(n){return te(n)}}(e,t);case"ReturnStatement":return function(e,t){return z(((n,r)=>{null===t.argument?n(new f(p)):ce(e,t.argument).then((e=>{try{n(new f(e))}catch(t){r(t)}}),r)}))}(e,t);case"IfStatement":return function(e,t){return z(((n,r)=>{"AssignmentExpression"!==t.test.type&&"UpdateExpression"!==t.test.type?ce(e,t.test).then((o=>{try{!0===o?ce(e,t.consequent).then(n,r):!1===o?null!==t.alternate?ce(e,t.alternate).then(n,r):n(p):r(new Error(I(t.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(a){r(a)}}),r):r(new Error(I(t.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,t);case"ExpressionStatement":return function(e,t){try{return"AssignmentExpression"===t.expression.type?ce(e,t.expression):(t.expression.type,ce(e,t.expression).then((e=>z((t=>{t(e===p?p:new h(e))})))))}catch(n){return H(n)}}(e,t);case"UpdateExpression":return function(e,t){try{const n=t.argument;if("MemberExpression"===n.type){const r={t:null};return ce(e,n.object).then((t=>{let o=null;return r.t=t,!0===n.computed?o=ce(e,n.property):"Identifier"===n.property.type&&(o=K(n.property.name)),o})).then((e=>z((n=>{const o=r.t;let a;if(T(o)){if(!F(e))throw new Error("Invalid Parameter");if(e<0&&(e=o.length+e),e<0||e>=o.length)throw new Error("Assignment outside of array bounds");a=x(o[e]),o[e]="++"===t.operator?a+1:a-1}else if(o instanceof A){if(!1===R(e))throw new Error("Dictionary accessor must be a string");if(!0!==o.hasField(e))throw new Error("Invalid Parameter");a=x(o.field(e)),o.setField(e,"++"===t.operator?a+1:a-1)}else{if(!(o instanceof U))throw O(o)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===R(e))throw new Error("Feature accessor must be a string");if(!0!==o.hasField(e))throw new Error("Invalid Parameter");a=x(o.field(e)),o.setField(e,"++"===t.operator?a+1:a-1)}!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1)}))))}return z(((n,r)=>{const o="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!o)throw new Error("Invalid identifier");let a;return null!==e.localScope&&void 0!==e.localScope[o]?(a=x(e.localScope[o].value),e.localScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1))):void 0!==e.globalScope[o]?(a=x(e.globalScope[o].value),e.globalScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?n(a):n("++"===t.operator?a+1:a-1))):void r(new Error("Variable not recognised"))}))}catch(n){return H(n)}}(e,t);case"AssignmentExpression":return function(e,t){return z(((n,r)=>{const o=t.left;if("MemberExpression"===o.type)ce(e,t.right).then((a=>{try{ce(e,o.object).then((c=>{try{let i=null;if(!0===o.computed)i=ce(e,o.property);else{if("Identifier"!==o.property.type)throw new Error("Expected computed or identifier for assignemnt target");i=K(o.property.name)}i.then((e=>{try{if(T(c)){if(!F(e))throw new Error("Invalid Parameter");if(e<0&&(e=c.length+e),e<0||e>c.length)throw new Error("Assignment outside of array bounds");if(e===c.length){if("="!==t.operator)throw new Error("Invalid Parameter");c[e]=pe(a,t.operator,c[e],t)}else c[e]=pe(a,t.operator,c[e],t)}else if(c instanceof A){if(!1===R(e))throw new Error("Dictionary accessor must be a string");if(!0===c.hasField(e))c.setField(e,pe(a,t.operator,c.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");c.setField(e,pe(a,t.operator,null,t))}}else{if(!(c instanceof U))throw O(c)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===R(e))throw new Error("Feature accessor must be a string");if(!0===c.hasField(e))c.setField(e,pe(a,t.operator,c.field(e),t));else{if("="!==t.operator)throw new Error("Invalid Parameter");c.setField(e,pe(a,t.operator,null,t))}}n(p)}catch(o){r(o)}}),r)}catch(i){r(i)}}),r)}catch(c){r(c)}}),r);else{const a=o.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[a])return void ce(e,t.right).then((o=>{try{e.localScope[a]={value:pe(o,t.operator,e.localScope[a].value,t),valueset:!0,node:t.right},n(p)}catch(c){r(c)}}),r);void 0!==e.globalScope[a]?ce(e,t.right).then((o=>{try{e.globalScope[a]={value:pe(o,t.operator,e.globalScope[a].value,t),valueset:!0,node:t.right},n(p)}catch(c){r(c)}}),r):r(new Error("Cannot assign undeclared variable"))}}))}(e,t);case"ForStatement":return function(e,t){try{return null!==t.init?ce(e,t.init).then((()=>z(((n,r)=>{le(e,t,{testResult:!0,lastAction:p},(e=>{n(e)}),(e=>{r(e)}),0)})))):z(((n,r)=>{le(e,t,{testResult:!0,lastAction:p},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(n){return H(n)}}(e,t);case"ForInStatement":return function(e,t){return z(((n,r)=>{ce(e,t.right).then((o=>{try{let a=null;a="VariableDeclaration"===t.left.type?ce(e,t.left):K(),a.then((()=>{try{let a="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(a=e.name)}else"Identifier"===t.left.type&&(a=t.left.name);if(!a)throw new Error(I(t,"RUNTIME","INVALIDVARIABLE"));a=a.toLowerCase();let c=null;if(null!==e.localScope&&void 0!==e.localScope[a]&&(c=e.localScope[a]),null===c&&void 0!==e.globalScope[a]&&(c=e.globalScope[a]),null===c)return void r(new Error(I(t,"RUNTIME","VARIABLENOTDECLARED")));T(o)||R(o)?fe(e,t,o,{reject:r,resolve:n},c):O(o)?function(e,t,n,r,a,c){try{if(void 0===c&&(c="i"),0===n.length)return void r.resolve(p);ue(e,t,n,a,0,c,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(o){r.reject(o)}}(e,t,o,{reject:r,resolve:n},c):o instanceof A||o instanceof U?function(e,t,n,o,a){try{fe(e,t,n.keys(),o,a,"k")}catch(r){o.reject(r)}}(e,t,o,{reject:r,resolve:n},c):C(o)?he(o.iterator(e.abortSignal),e,t,o,c,(e=>{n(e)}),(e=>{r(e)}),0):fe(e,t,[],{reject:r,resolve:n},c)}catch(a){r(a)}}),r)}catch(a){r(a)}}),r)}))}(e,t);case"BreakStatement":return K(d);case"EmptyStatement":return K(p);case"ContinueStatement":return K(g);case"TemplateElement":return function(e,t){return K(t.value?t.value.cooked:"")}(0,t);case"TemplateLiteral":return function(e,t){return z((n=>{const r=[];b(t.expressions,((t,n,o,a)=>ce(e,n).then((e=>{r[o]=S(e)})))).then((()=>{let e="",o=0;for(const n of t.quasis)e+=n.value?n.value.cooked:"",!1===n.tail&&(e+=r[o]?r[o]:"",o++);n(e)}))}))}(e,t);case"Identifier":return ye(e,t);case"MemberExpression":return function(e,t){try{return ce(e,t.object).then((n=>{try{return null===n?H(new Error(I(t,"RUNTIME","NOTFOUND"))):!1===t.computed?"Identifier"===t.property.type?n instanceof A||n instanceof U?K(n.field(t.property.name)):n instanceof W?K(me(n,t.property.name,e,t)):H(new Error(I(t,"RUNTIME","INVALIDTYPE"))):H(new Error(I(t,"RUNTIME","INVALIDTYPE"))):ce(e,t.property).then((r=>z(((o,a)=>{if(n instanceof A||n instanceof U)R(r)?o(n.field(r)):a(new Error(I(t,"RUNTIME","INVALIDTYPE")));else if(n instanceof W)R(r)?o(me(n,r,e,t)):a(new Error(I(t,"RUNTIME","INVALIDTYPE")));else if(T(n))if(F(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new Error(I(t,"RUNTIME","OUTOFBOUNDS"));o(n[r])}else a(new Error(I(t,"RUNTIME","INVALIDTYPE")));else if(O(n))if(F(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new Error(I(t,"RUNTIME","OUTOFBOUNDS"));o(n.get(r))}else a(new Error(I(t,"RUNTIME","INVALIDTYPE")));else if(R(n))if(F(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new Error(I(t,"RUNTIME","OUTOFBOUNDS"));o(n[r])}else a(new Error(I(t,"RUNTIME","INVALIDTYPE")));else a(new Error(I(t,"RUNTIME","INVALIDTYPE")))}))))}catch(r){return te(r)}}))}catch(n){return te(n)}}(e,t);case"Literal":return ne(t.value);case"CallExpression":return function(e,t){try{if("Identifier"!==t.callee.type)return te(I(t,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];return n.value instanceof s?n.value.fn(e,t):n.value instanceof E?Oe(e,t,n.value.definition):te(I(t,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];return n.value instanceof s?n.value.fn(e,t):n.value instanceof E?Oe(e,t,n.value.definition):te(I(t,"RUNTIME","NOTAFUNCTION"))}return te(I(t,"RUNTIME","NOTFOUND"))}catch(n){return te(n)}}(e,t);case"UnaryExpression":return function(e,t){try{return ce(e,t.argument).then((e=>z(((n,r)=>{i(e)&&"!"===t.operator?n(!e):"-"===t.operator?n(-1*x(e)):"+"===t.operator?n(1*x(e)):"~"===t.operator?n(~x(e)):r(new Error(I(t,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))}))))}catch(n){return te(n)}}(e,t);case"BinaryExpression":return function(e,t){try{return q([ce(e,t.left),ce(e,t.right)]).then((e=>z(((n,r)=>{const o=e[0],a=e[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":n(P(x(o),x(a),t.operator));case"==":n(l(o,a));break;case"!=":n(!l(o,a));break;case"<":case">":case"<=":case">=":n(D(o,a,t.operator));break;case"+":R(o)||R(a)?n(S(o)+S(a)):n(x(o)+x(a));break;case"-":n(x(o)-x(a));break;case"*":n(x(o)*x(a));break;case"/":n(x(o)/x(a));break;case"%":n(x(o)%x(a));break;default:r(new Error(I(t,"RUNTIME","OPERATORNOTRECOGNISED")))}}))))}catch(n){return te(n)}}(e,t);case"LogicalExpression":return function(e,t){return z(((n,r)=>{"AssignmentExpression"!==t.left.type&&"UpdateExpression"!==t.left.type?"AssignmentExpression"!==t.right.type&&"UpdateExpression"!==t.right.type?ce(e,t.left).then((o=>{try{if(!i(o))throw new Error(I(t,"RUNTIME","ONLYBOOLEAN"));switch(t.operator){case"||":!0===o?n(o):ce(e,t.right).then((e=>{try{if(!i(e))throw new Error(I(t,"RUNTIME","ONLYORORAND"));n(e)}catch(o){r(o)}}),r);break;case"&&":!1===o?n(o):ce(e,t.right).then((e=>{try{if(!i(e))throw new Error(I(t,"RUNTIME","ONLYORORAND"));n(e)}catch(o){r(o)}}),r);break;default:throw new Error(I(t,"RUNTIME","ONLYORORAND"))}}catch(a){r(a)}}),r):r(new Error(I(t.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):r(new Error(I(t.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))}))}(e,t);case"ArrayExpression":return function(e,t){try{const n=[];for(let r=0;r<t.elements.length;r++)n.push(ce(e,t.elements[r]));return q(n).then((e=>z(((n,r)=>{for(let o=0;o<e.length;o++){if(M(e[o]))return void r(new Error(I(t,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[o]===p&&(e[o]=null)}n(e)}))))}catch(n){return te(n)}}(e,t);case"ObjectExpression":return function(e,t){try{const n=[];for(let r=0;r<t.properties.length;r++)n.push(ce(e,t.properties[r]));return q(n).then((e=>z((t=>{const n={};for(let o=0;o<e.length;o++){const t=e[o];if(M(t.value))throw new Error("Illegal Argument");if(!1===R(t.key))throw new Error("Illegal Argument");t.value===p?n[t.key.toString()]=null:n[t.key.toString()]=t.value}const r=new A(n);r.immutable=!1,t(r)}))))}catch(n){return te(n)}}(e,t);case"Property":return function(e,t){try{return ce(e,t.value).then((n=>z((r=>{"Identifier"===t.key.type?r({key:t.key.name,value:n}):ce(e,t.key).then((e=>{r({key:e,value:n})}))}))))}catch(n){return H(n)}}(e,t);default:return te(I(t,"RUNTIME","UNREOGNISED"))}}catch(r){return te(r)}}function ie(e,t,n){try{return ce(e,t.body).then((r=>{try{return n.lastAction=r,n.lastAction===d||n.lastAction instanceof f?(n.testResult=!1,K(n)):null!==t.update?ce(e,t.update).then((()=>K(n))):K(n)}catch(o){return H(o)}}))}catch(r){return H(r)}}function le(e,t,n,r,o,a){try{(function(e,t,n){try{return null!==t.test?ce(e,t.test).then((r=>{try{return!0===e.abortSignal.aborted?H(new Error("Cancelled")):(n.testResult=r,!1===n.testResult?K(n):!0!==n.testResult?H(new Error(I(t,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):ie(e,t,n))}catch(o){return H(o)}})):ie(e,t,n)}catch(r){return H(r)}})(e,t,n).then((()=>{try{!0===n.testResult?++a>100?(a=0,setTimeout((()=>{le(e,t,n,r,o,a)}),0)):le(e,t,n,r,o,a):n.lastAction instanceof f?r(n.lastAction):r(p)}catch(c){o(c)}}),(e=>{o(e)}))}catch(c){o(c)}}function se(e,t,n,r,o,a,c,i,l,s){try{if(r<=a)return void i(p);o.value="k"===c?n[a]:a,ce(e,t.body).then((u=>{try{u instanceof f?i(u):u===d?i(p):++s>100?(s=0,setTimeout((()=>{se(e,t,n,r,o,a+1,c,i,l,s)}),0)):se(e,t,n,r,o,a+1,c,i,l,s)}catch(h){l(h)}}),(e=>{l(e)}))}catch(u){l(u)}}function ue(e,t,n,r,o,a,c,i,l){try{if(n.length()<=o)return void c(p);r.value="k"===a?n.get(o):o,ce(e,t.body).then((s=>{s instanceof f?c(s):s===d?c(p):++l>100?(l=0,setTimeout((()=>{ue(e,t,n,r,o+1,a,c,i,l)}),0)):ue(e,t,n,r,o+1,a,c,i,l)}),(e=>{i(e)}))}catch(s){i(s)}}function fe(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(p);se(e,t,n,n.length,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(c){r.reject(c)}}function he(e,t,n,r,o,a,c,i){try{e.next().then((l=>{try{if(null===l)a(p);else{const s=U.createFromGraphicLikeObject(l.geometry,l.attributes,r);s._underlyingGraphic=l,o.value=s,ce(t,n.body).then((l=>{try{l===d?a(p):l instanceof f?a(l):++i>100?(i=0,setTimeout((()=>{he(e,t,n,r,o,a,c,i)}),0)):he(e,t,n,r,o,a,c,i)}catch(s){c(s)}}),(e=>{c(e)}))}}catch(s){c(s)}}),(e=>{c(e)}))}catch(l){c(l)}}function pe(e,t,n,r){switch(t){case"=":return e===p?null:e;case"/=":return x(n)/x(e);case"*=":return x(n)*x(e);case"-=":return x(n)-x(e);case"+=":return R(n)||R(e)?S(n)+S(e):x(n)+x(e);case"%=":return x(n)%x(e);default:throw new Error(I(r,"RUNTIME","OPERATORNOTRECOGNISED"))}}function de(e,t,n){try{return n>=t.body.length?K(p):z(((r,o)=>{ce(e,t.body[n]).then((a=>{try{a instanceof f||a===d||a===g||n===t.body.length-1?r(a):de(e,t,n+1).then(r,o)}catch(c){o(c)}}),o)}))}catch(r){return te(r)}}function ge(e,t,n){return z(((r,o)=>{n>=t.declarations.length?r(p):ce(e,t.declarations[n]).then((()=>{n===t.declarations.length-1?r(p):ge(e,t,n+1).then((()=>{r(p)}),o)}),o)}))}let Ee=0;function me(e,t,n,r){let o;switch(t=t.toLowerCase()){case"hasz":{const t=e.hasZ;return void 0!==t&&t}case"hasm":{const t=e.hasM;return void 0!==t&&t}case"spatialreference":{let t=e.spatialReference._arcadeCacheId;if(void 0===t){let n=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(n=!1),n&&(Ee++,e.spatialReference._arcadeCacheId=Ee,t=Ee)}const n=new A({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==t&&(n._arcadeCacheId="SPREF"+t.toString()),n}}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const n=e[t];return void 0!==n?n:null}case"type":return"Extent"}break;case"polygon":switch(t){case"rings":return o=e.cache._arcadeCacheId,void 0===o&&(Ee++,o=Ee,e.cache._arcadeCacheId=o),new Y(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return"Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return"Point"}break;case"polyline":switch(t){case"paths":return o=e.cache._arcadeCacheId,void 0===o&&(Ee++,o=Ee,e.cache._arcadeCacheId=o),new Y(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return"Polyline"}break;case"multipoint":switch(t){case"points":return o=e.cache._arcadeCacheId,void 0===o&&(Ee++,o=Ee,e.cache._arcadeCacheId=o),new B(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,o,1);case"type":return"Multipoint"}}throw new Error(I(r,"RUNTIME","PROPERTYNOTFOUND"))}function ye(e,t){return z(((n,r)=>{const o=t.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[o])if(void 0===e.globalScope[o])r(new Error(I(t,"RUNTIME","VARIABLENOTFOUND")));else{const t=e.globalScope[o];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=ce(e,t.node),t.d.then((e=>{try{t.value=e,t.valueset=!0,n(e)}catch(o){r(o)}}),r))}else{const t=e.localScope[o];!0===t.valueset?n(t.value):null!==t.d?t.d.then(n,r):(t.d=ce(e,t.node),t.d.then((e=>{try{t.value=e,t.valueset=!0,n(e)}catch(o){r(o)}}),r))}}))}const we={};function ve(e){return null===e?"":T(e)||O(e)?"Array":L(e)?"Date":R(e)?"String":i(e)?"Boolean":F(e)?"Number":e instanceof k?"Attachment":e instanceof _?"Portal":e instanceof A?"Dictionary":e instanceof U?"Feature":e instanceof J?"Point":e instanceof X?"Polygon":e instanceof Q?"Polyline":e instanceof $?"Multipoint":e instanceof ee?"Extent":M(e)?"Function":C(e)?"FeatureSet":j(e)?"FeatureSetCollection":e===p?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function Ne(e,t,n,r){return z(((o,a)=>{ce(e,t.arguments[n]).then((c=>{try{if(l(c,r))return void ce(e,t.arguments[n+1]).then(o,a);{const c=t.arguments.length-n;return 1===c?void ce(e,t.arguments[n]).then(o,a):(2===c&&o(null),3===c?void ce(e,t.arguments[n+2]).then(o,a):void Ne(e,t,n+2,r).then(o,a))}}catch(i){a(i)}}),a)}))}function Ie(e,t,n,r){return z(((o,a)=>{!0===r?ce(e,t.arguments[n+1]).then(o,a):t.arguments.length-n==3?ce(e,t.arguments[n+2]).then(o,a):ce(e,t.arguments[n+2]).then((r=>{try{if(!1===i(r))return void a(new Error("WHEN needs boolean test conditions"));Ie(e,t,n+2,r).then(o,a)}catch(c){a(c)}}))}))}function be(e,t){try{const n=e.length,r=Math.floor(n/2);return 0===n?K([]):1===n?K([e[0]]):z(((o,a)=>{const c=[be(e.slice(0,r),t),be(e.slice(r,n),t)];q(c).then((e=>{try{Se(e[0],e[1],t,[]).then(o,a)}catch(n){a(n)}}),a)}))}catch(n){return te(n)}}function Se(e,t,n,r){return z(((o,a)=>{const c=r;e.length>0||t.length>0?e.length>0&&t.length>0?n(e[0],t[0]).then((i=>{try{isNaN(i)&&(i=1),i<=0?(c.push(e[0]),e=e.slice(1)):(c.push(t[0]),t=t.slice(1)),Se(e,t,n,r).then(o,a)}catch(l){a(l)}}),a):e.length>0?(c.push(e[0]),Se(e=e.slice(1),t,n,r).then(o,a)):t.length>0&&(c.push(t[0]),t=t.slice(1),Se(e,t,n,r).then(o,a)):o(r)}))}function Te(e,t){const n=e.length,r=Math.floor(n/2);return t||(t=function(e,t){return e<t?-1:e===t?0:1}),0===n?[]:1===n?[e[0]]:function(e,t,n){const r=[];for(;e.length>0||t.length>0;)if(e.length>0&&t.length>0){let o=n(e[0],t[0]);isNaN(o)&&(o=1),o<=0?(r.push(e[0]),e=e.slice(1)):(r.push(t[0]),t=t.slice(1))}else e.length>0?(r.push(e[0]),e=e.slice(1)):t.length>0&&(r.push(t[0]),t=t.slice(1));return r}(Te(e.slice(0,r),t),Te(e.slice(r,n),t),t)}function Re(e,t,n){try{const r=e.body;if(n.length!==e.params.length)return te(new Error("Invalid Parameter calls to function."));for(let o=0;o<n.length;o++){const r=e.params[o];"Identifier"===r.type&&(t.localScope[r.name.toLowerCase()]={d:null,value:n[o],valueset:!0,node:null})}return ce(t,r).then((e=>z(((t,n)=>{e instanceof f?t(e.value):e!==d?e!==g?t(e instanceof h?e.value:e):n(new Error("Cannot Continue from a Function")):n(new Error("Cannot Break from a Function"))}))))}catch(r){return H(r)}}function Oe(e,t,n){return ae(e,t,(function(t,r,o){const a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return Re(n,a,o)}))}function Ae(e){return function(){const t={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,interceptor:e.context.interceptor,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(t.depthCounter>64)throw new Error("Exceeded maximum function depth");return Re(e.definition,t,arguments)}}e(we,oe),t(we,oe),n(we,oe),r(we,oe),o(we,oe),a(we,oe),G({functions:we,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:oe,standardFunctionAsync:ae}),we.typeof=function(e,t){return oe(e,t,(function(e,t,n){c(n,1,1);const r=ve(n[0]);if("Unrecognised Type"===r)throw new Error("Unrecognised Type");return r}))},we.iif=function(e,t){return z(((n,r)=>{c(null===t.arguments?[]:t.arguments,3,3),ce(e,t.arguments[0]).then((o=>{try{if(!1===i(o))return void r(new Error("IF Function must have a boolean test condition"));q([ce(e,t.arguments[1]),ce(e,t.arguments[2])]).then((e=>{n(o?e[0]:e[1])}),r)}catch(a){r(a)}}),r)}))},we.decode=function(e,t){return z(((n,r)=>{t.arguments.length<2?r(new Error("Missing Parameters")):2!==t.arguments.length?(t.arguments.length-1)%2!=0?ce(e,t.arguments[0]).then((o=>{try{Ne(e,t,1,o).then(n,r)}catch(a){r(a)}}),r):r(new Error("Must have a default value result.")):ce(e,t.arguments[1]).then(n,r)}))},we.when=function(e,t){try{return t.arguments.length<3?te("Missing Parameters"):t.arguments.length%2==0?te("Must have a default value result."):ce(e,t.arguments[0]).then((n=>z(((r,o)=>{!1!==i(n)?Ie(e,t,0,n).then(r,o):o(new Error("WHEN needs boolean test conditions"))}))))}catch(n){return te(n)}},we.sort=function(e,t){return ae(e,t,(function(e,t,n){c(n,1,2);let r=n[0];if(O(r)&&(r=r.toArray()),!1===T(r))return te(Error("Illegal Argument"));if(n.length>1)return!1===M(n[1])?te(Error("Illegal Argument")):be(r,Ae(n[1]));{let e=r;if(0===e.length)return K([]);const t={};for(let r=0;r<e.length;r++){const n=ve(e[r]);""!==n&&(t[n]=!0)}if(!0===t.Array||!0===t.Dictionary||!0===t.Feature||!0===t.Point||!0===t.Polygon||!0===t.Polyline||!0===t.Multipoint||!0===t.Extent||!0===t.Function)return K(e.slice(0));let n=0,o="";for(const r in t)n++,o=r;return n>1||"String"===o?e=Te(e,(function(e,t){if(null==e||e===p)return null==t||t===p?0:1;if(null==t||t===p)return-1;const n=S(e),r=S(t);return n<r?-1:n===r?0:1})):"Number"===o?e=Te(e,(function(e,t){return e-t})):"Boolean"===o?e=Te(e,(function(e,t){return e===t?0:t?-1:1})):"Date"===o&&(e=Te(e,(function(e,t){return t-e}))),K(e)}}))};const Ue={failDefferred:te,resolveDeffered:ne,fixSpatialReference:V,parseArguments:re,standardFunction:oe,standardFunctionAsync:ae,evaluateIdentifier:ye,arcadeCustomFunction:Ae};for(const Ve in we)we[Ve]={value:new s(we[Ve]),valueset:!0,node:null};const Ce=function(){};function Fe(e){console.log(e)}(Ce.prototype=we).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},Ce.prototype.pi={value:Math.PI,valueset:!0,node:null};const Me=Ue;function xe(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:oe,standardFunctionAsync:ae,failDefferred:te,evaluateIdentifier:ye,arcadeCustomFunctionHandler:Ae};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)we[n]={value:new s(t.functions[n]),valueset:!0,node:null},Ce.prototype[n]=we[n];for(let n=0;n<t.signatures.length;n++)u(t.signatures[n],"async")}function De(e,t){let n=t.spatialReference;null==n&&(n=new Z({wkid:102100}));const r=function(e,t){const n=new Ce;null==e&&(e={}),null==t&&(t={});const r=new A({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});r.immutable=!1,n.textformatting={value:r,valueset:!0,node:null};for(const o in t)n[o]={value:new s(t[o]),native:!0,valueset:!0,node:null};for(const o in e)e[o]&&"esri.Graphic"===e[o].declaredClass?n[o]={value:U.createFromGraphic(e[o]),valueset:!0,node:null}:n[o]={value:e[o],valueset:!0,node:null};return n}(t.vars,t.customfunctions);return ce({spatialReference:n,services:t.services,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:r,console:t.console?t.console:Fe,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:1},e.body[0].body).then((e=>z(((t,n)=>{e instanceof f&&(e=e.value),e instanceof h&&(e=e.value),e===p&&(e=null),e!==d?e!==g?e instanceof s||e instanceof E?n(new Error("Cannot return FUNCTION")):t(e):n(new Error("Cannot return CONTINUE")):n(new Error("Cannot return BREAK"))}))))}function Pe(e,t){return m(e)}function Le(e,t){return y(e,t,"full")}function ke(e,t){return w(e,t)}function _e(e,t){return v(e,t)}function je(e){return N(e)}export{De as executeScript,xe as extend,Pe as extractFieldLiterals,je as findFunctionCalls,Me as functionHelper,_e as referencesFunction,ke as referencesMember,Le as validateScript};
