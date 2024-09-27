import{i as Ir,r as Mr,a as Pr,o as Nr}from"./colorUtils-CS9vdHXB.js";import{c as C}from"./subclass-BR3PhgZG.js";import{t as Tr,e as Ur,p as Br,f as Dr,m as Gr,a as Hr,d as _r,c as Jr}from"./utils-D20M4_S8.js";var ye,Ae,xe={exports:{}};Ae=function(){function t(c,g){function v(){this.constructor=c}v.prototype=g.prototype,c.prototype=new v}function o(c,g,v,r){var A=Error.call(this,c);return Object.setPrototypeOf&&Object.setPrototypeOf(A,o.prototype),A.expected=g,A.found=v,A.location=r,A.name="SyntaxError",A}function f(c,g,v){return v=v||" ",c.length>g?c:(g-=c.length,c+(v+=v.repeat(g)).slice(0,g))}function F(c,g){var v,r={},A=(g=g!==void 0?g:{}).grammarSource,j={start:ve},I=ve,M="none",P=")",p=",",d="(",O="%",w="px",W="cm",X="mm",Y="in",Z="pt",ee="pc",re="deg",ne="rad",te="grad",ue="turn",Ce="#",Fe=".",Ee="e",ae=/^[ \t\n\r]/,ce=/^[a-z\-]/,oe=/^[0-9a-fA-F]/,ie=/^[+\-]/,z=/^[0-9]/,$e=k("none"),je=x("none",!1),Oe=x(")",!1),le=x(",",!1),qe=k("whitespace"),se=T([" ","	",`
`,"\r"],!1,!1),Se=k("function"),ke=x("(",!1),ze=k("identifier"),fe=T([["a","z"],"-"],!1,!1),Re=k("percentage"),Ie=x("%",!1),Me=k("length"),Pe=x("px",!1),Ne=x("cm",!1),Te=x("mm",!1),Ue=x("in",!1),Be=x("pt",!1),De=x("pc",!1),Ge=k("angle"),He=x("deg",!1),_e=x("rad",!1),Je=x("grad",!1),Ke=x("turn",!1),Le=k("number"),Qe=k("color"),Ve=x("#",!1),pe=T([["0","9"],["a","f"],["A","F"]],!1,!1),he=T(["+","-"],!1,!1),R=T([["0","9"]],!1,!1),We=x(".",!1),Xe=x("e",!1),Ye=function(){return[]},Ze=function(e,u){return{type:"function",name:e,parameters:u||[]}},er=function(e,u){return u.length>0?Rr(e,u,3):[e]},rr=function(e){return{type:"quantity",value:e.value,unit:e.unit}},nr=function(e){return{type:"color",colorType:e.type,value:e.value}},tr=function(e){return e},ur=function(){return D()},ar=function(e){return{value:e,unit:"%"}},cr=function(e){return{value:e,unit:"px"}},or=function(e){return{value:e,unit:"cm"}},ir=function(e){return{value:e,unit:"mm"}},lr=function(e){return{value:e,unit:"in"}},sr=function(e){return{value:e,unit:"pt"}},fr=function(e){return{value:e,unit:"pc"}},pr=function(e){return{value:e,unit:"deg"}},hr=function(e){return{value:e,unit:"rad"}},mr=function(e){return{value:e,unit:"grad"}},gr=function(e){return{value:e,unit:"turn"}},vr=function(e){return{value:e,unit:null}},dr=function(){return{type:"hex",value:D()}},yr=function(e){return{type:"function",value:e}},Ar=function(){return{type:"named",value:D()}},wr=function(){return parseFloat(D())},n=0,h=0,B=[{line:1,column:1}],S=0,_=[],i=0;if("startRule"in g){if(!(g.startRule in j))throw new Error(`Can't start parsing from rule "`+g.startRule+'".');I=j[g.startRule]}function D(){return c.substring(h,n)}function x(e,u){return{type:"literal",text:e,ignoreCase:u}}function T(e,u,a){return{type:"class",parts:e,inverted:u,ignoreCase:a}}function xr(){return{type:"end"}}function k(e){return{type:"other",description:e}}function me(e){var u,a=B[e];if(a)return a;for(u=e-1;!B[u];)u--;for(a={line:(a=B[u]).line,column:a.column};u<e;)c.charCodeAt(u)===10?(a.line++,a.column=1):a.column++,u++;return B[e]=a,a}function ge(e,u,a){var s=me(e),y=me(u);return{source:A,start:{offset:e,line:s.line,column:s.column},end:{offset:u,line:y.line,column:y.column}}}function l(e){n<S||(n>S&&(S=n,_=[]),_.push(e))}function br(e,u,a){return new o(o.buildMessage(e,u),e,u,a)}function ve(){var e;return(e=Cr())===r&&(e=Fr()),e}function Cr(){var e,u;return i++,e=n,b(),c.substr(n,4)===M?(u=M,n+=4):(u=r,i===0&&l(je)),u!==r?(b(),h=e,e=Ye()):(n=e,e=r),i--,e===r&&i===0&&l($e),e}function Fr(){var e,u;if(e=[],(u=J())!==r)for(;u!==r;)e.push(u),u=J();else e=r;return e}function J(){var e,u,a,s;return e=n,b(),(u=$r())!==r?(b(),(a=Er())===r&&(a=null),b(),c.charCodeAt(n)===41?(s=P,n++):(s=r,i===0&&l(Oe)),s!==r?(b(),h=e,e=Ze(u,a)):(n=e,e=r)):(n=e,e=r),e}function Er(){var e,u,a,s,y,m,$,G;if(e=n,(u=K())!==r){for(a=[],s=n,y=b(),c.charCodeAt(n)===44?(m=p,n++):(m=r,i===0&&l(le)),m===r&&(m=null),$=b(),(G=K())!==r?s=y=[y,m,$,G]:(n=s,s=r);s!==r;)a.push(s),s=n,y=b(),c.charCodeAt(n)===44?(m=p,n++):(m=r,i===0&&l(le)),m===r&&(m=null),$=b(),(G=K())!==r?s=y=[y,m,$,G]:(n=s,s=r);h=e,e=er(u,a)}else n=e,e=r;return e}function K(){var e,u;return e=n,(u=jr())===r&&(u=Or())===r&&(u=qr())===r&&(u=Sr()),u!==r&&(h=e,u=rr(u)),(e=u)===r&&(e=n,(u=kr())!==r&&(h=e,u=nr(u)),e=u),e}function b(){var e,u;for(i++,e=[],ae.test(c.charAt(n))?(u=c.charAt(n),n++):(u=r,i===0&&l(se));u!==r;)e.push(u),ae.test(c.charAt(n))?(u=c.charAt(n),n++):(u=r,i===0&&l(se));return i--,u=r,i===0&&l(qe),e}function $r(){var e,u,a;return i++,e=n,(u=de())!==r?(c.charCodeAt(n)===40?(a=d,n++):(a=r,i===0&&l(ke)),a!==r?(h=e,e=tr(u)):(n=e,e=r)):(n=e,e=r),i--,e===r&&(u=r,i===0&&l(Se)),e}function de(){var e,u,a;if(i++,e=n,u=[],ce.test(c.charAt(n))?(a=c.charAt(n),n++):(a=r,i===0&&l(fe)),a!==r)for(;a!==r;)u.push(a),ce.test(c.charAt(n))?(a=c.charAt(n),n++):(a=r,i===0&&l(fe));else u=r;return u!==r&&(h=e,u=ur()),i--,(e=u)===r&&(u=r,i===0&&l(ze)),e}function jr(){var e,u,a;return i++,e=n,b(),(u=E())!==r?(c.charCodeAt(n)===37?(a=O,n++):(a=r,i===0&&l(Ie)),a!==r?(h=e,e=ar(u)):(n=e,e=r)):(n=e,e=r),i--,e===r&&i===0&&l(Re),e}function Or(){var e,u,a;return i++,e=n,b(),(u=E())!==r?(c.substr(n,2)===w?(a=w,n+=2):(a=r,i===0&&l(Pe)),a!==r?(h=e,e=cr(u)):(n=e,e=r)):(n=e,e=r),e===r&&(e=n,b(),(u=E())!==r?(c.substr(n,2)===W?(a=W,n+=2):(a=r,i===0&&l(Ne)),a!==r?(h=e,e=or(u)):(n=e,e=r)):(n=e,e=r),e===r&&(e=n,b(),(u=E())!==r?(c.substr(n,2)===X?(a=X,n+=2):(a=r,i===0&&l(Te)),a!==r?(h=e,e=ir(u)):(n=e,e=r)):(n=e,e=r),e===r&&(e=n,b(),(u=E())!==r?(c.substr(n,2)===Y?(a=Y,n+=2):(a=r,i===0&&l(Ue)),a!==r?(h=e,e=lr(u)):(n=e,e=r)):(n=e,e=r),e===r&&(e=n,b(),(u=E())!==r?(c.substr(n,2)===Z?(a=Z,n+=2):(a=r,i===0&&l(Be)),a!==r?(h=e,e=sr(u)):(n=e,e=r)):(n=e,e=r),e===r&&(e=n,b(),(u=E())!==r?(c.substr(n,2)===ee?(a=ee,n+=2):(a=r,i===0&&l(De)),a!==r?(h=e,e=fr(u)):(n=e,e=r)):(n=e,e=r)))))),i--,e===r&&i===0&&l(Me),e}function qr(){var e,u,a;return i++,e=n,(u=E())!==r?(c.substr(n,3)===re?(a=re,n+=3):(a=r,i===0&&l(He)),a!==r?(h=e,e=pr(u)):(n=e,e=r)):(n=e,e=r),e===r&&(e=n,(u=E())!==r?(c.substr(n,3)===ne?(a=ne,n+=3):(a=r,i===0&&l(_e)),a!==r?(h=e,e=hr(u)):(n=e,e=r)):(n=e,e=r),e===r&&(e=n,(u=E())!==r?(c.substr(n,4)===te?(a=te,n+=4):(a=r,i===0&&l(Je)),a!==r?(h=e,e=mr(u)):(n=e,e=r)):(n=e,e=r),e===r&&(e=n,(u=E())!==r?(c.substr(n,4)===ue?(a=ue,n+=4):(a=r,i===0&&l(Ke)),a!==r?(h=e,e=gr(u)):(n=e,e=r)):(n=e,e=r)))),i--,e===r&&(u=r,i===0&&l(Ge)),e}function Sr(){var e,u;return i++,e=n,b(),(u=E())!==r?(h=e,e=vr(u)):(n=e,e=r),i--,e===r&&i===0&&l(Le),e}function kr(){var e,u,a,s;if(i++,e=n,c.charCodeAt(n)===35?(u=Ce,n++):(u=r,i===0&&l(Ve)),u!==r){if(a=[],oe.test(c.charAt(n))?(s=c.charAt(n),n++):(s=r,i===0&&l(pe)),s!==r)for(;s!==r;)a.push(s),oe.test(c.charAt(n))?(s=c.charAt(n),n++):(s=r,i===0&&l(pe));else a=r;a!==r?(h=e,e=dr()):(n=e,e=r)}else n=e,e=r;return e===r&&(e=n,(u=J())!==r&&(h=e,u=yr(u)),(e=u)===r&&(e=n,(u=de())!==r&&(h=e,u=Ar()),e=u)),i--,e===r&&(u=r,i===0&&l(Qe)),e}function E(){var e,u,a,s,y,m,$;for(e=n,ie.test(c.charAt(n))?(c.charAt(n),n++):i===0&&l(he),u=n,a=[],z.test(c.charAt(n))?(s=c.charAt(n),n++):(s=r,i===0&&l(R));s!==r;)a.push(s),z.test(c.charAt(n))?(s=c.charAt(n),n++):(s=r,i===0&&l(R));if(c.charCodeAt(n)===46?(s=Fe,n++):(s=r,i===0&&l(We)),s!==r){if(y=[],z.test(c.charAt(n))?(m=c.charAt(n),n++):(m=r,i===0&&l(R)),m!==r)for(;m!==r;)y.push(m),z.test(c.charAt(n))?(m=c.charAt(n),n++):(m=r,i===0&&l(R));else y=r;y!==r?u=a=[a,s,y]:(n=u,u=r)}else n=u,u=r;if(u===r)if(u=[],z.test(c.charAt(n))?(a=c.charAt(n),n++):(a=r,i===0&&l(R)),a!==r)for(;a!==r;)u.push(a),z.test(c.charAt(n))?(a=c.charAt(n),n++):(a=r,i===0&&l(R));else u=r;if(u!==r){if(a=n,c.charCodeAt(n)===101?(s=Ee,n++):(s=r,i===0&&l(Xe)),s!==r){if(ie.test(c.charAt(n))?(y=c.charAt(n),n++):(y=r,i===0&&l(he)),y===r&&(y=null),m=[],z.test(c.charAt(n))?($=c.charAt(n),n++):($=r,i===0&&l(R)),$!==r)for(;$!==r;)m.push($),z.test(c.charAt(n))?($=c.charAt(n),n++):($=r,i===0&&l(R));else m=r;m!==r?a=s=[s,y,m]:(n=a,a=r)}else n=a,a=r;a===r&&(a=null),h=e,e=wr()}else n=e,e=r;return e}function zr(e,u){return e.map(function(a){return a[u]})}function Rr(e,u,a){return[e].concat(zr(u,a))}if((v=I())!==r&&n===c.length)return v;throw v!==r&&n<c.length&&l(xr()),br(_,S<c.length?c.charAt(S):null,S<c.length?ge(S,S+1):ge(S,S))}return t(o,Error),o.prototype.format=function(c){var g="Error: "+this.message;if(this.location){var v,r=null;for(v=0;v<c.length;v++)if(c[v].source===this.location.source){r=c[v].text.split(/\r\n|\n|\r/g);break}var A=this.location.start,j=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(A):A,I=this.location.source+":"+j.line+":"+j.column;if(r){var M=this.location.end,P=f("",j.line.toString().length," "),p=r[A.line-1],d=(A.line===M.line?M.column:p.length+1)-A.column||1;g+=`
 --> `+I+`
`+P+` |
`+j.line+" | "+p+`
`+P+" | "+f("",A.column-1," ")+f("",d,"^")}else g+=`
 at `+I}return g},o.buildMessage=function(c,g){var v={literal:function(p){return'"'+A(p.text)+'"'},class:function(p){var d=p.parts.map(function(O){return Array.isArray(O)?j(O[0])+"-"+j(O[1]):j(O)});return"["+(p.inverted?"^":"")+d.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(p){return p.description}};function r(p){return p.charCodeAt(0).toString(16).toUpperCase()}function A(p){return p.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+r(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+r(d)})}function j(p){return p.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+r(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+r(d)})}function I(p){return v[p.type](p)}function M(p){var d,O,w=p.map(I);if(w.sort(),w.length>0){for(d=1,O=1;d<w.length;d++)w[d-1]!==w[d]&&(w[O]=w[d],O++);w.length=O}switch(w.length){case 1:return w[0];case 2:return w[0]+" or "+w[1];default:return w.slice(0,-1).join(", ")+", or "+w[w.length-1]}}function P(p){return p?'"'+A(p)+'"':"end of input"}return"Expected "+M(c)+" but "+P(g)+" found."},{SyntaxError:o,parse:F}},(ye=xe).exports&&(ye.exports=Ae());var Kr=xe.exports;function mn(t){if(!t||t.length===0)return null;if(typeof t=="string"){const f=we(t);return f&&f.length!==0?f:null}const o=t.map(f=>{if(!Number.isFinite(f.scale)||f.scale<=0)throw new C("effect:invalid-scale","scale must be finite and greater than 0",{stop:f});return{scale:f.scale,effects:we(f.value)}});o.sort((f,F)=>F.effects.length-f.effects.length);for(let f=0;f<o.length-1;f++){if(!Tr(o[f].effects,o[f+1].effects))throw new C("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:o[f].effects,b:o[f+1].effects});Ur(o[f].effects,o[f+1].effects)}return o.sort((f,F)=>F.scale-f.scale),o}function we(t){let o;if(!t)return[];try{o=Kr.parse(t)}catch(f){throw new C("effect:invalid-syntax","Invalid effect syntax",{value:t,error:f})}return o.map(f=>Lr(f))}function Lr(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return Qr(t);case"opacity":return Vr(t);case"hue-rotate":return Wr(t);case"blur":return Xr(t);case"drop-shadow":return Yr(t);case"bloom":return Zr(t)}}catch(o){throw o.details.filter=t,o}throw new C("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}function Qr(t){let o=1;return N(t.parameters,1),t.parameters.length===1&&(o=q(t.parameters[0])),new Br(t.name,o)}function Vr(t){let o=1;return N(t.parameters,1),t.parameters.length===1&&(o=q(t.parameters[0])),new Dr(o)}function Wr(t){let o=0;return N(t.parameters,1),t.parameters.length===1&&(o=an(t.parameters[0])),new Gr(o)}function Xr(t){let o=0;return N(t.parameters,1),t.parameters.length===1&&(o=V(t.parameters[0]),U(o,t.parameters[0])),new Hr(o)}function Yr(t){const o=[];let f=null;for(const F of t.parameters)if(F.type==="color"){if(o.length&&Object.freeze(o),f)throw new C("effect:type-error","Accepts only one color",{});f=cn(F)}else{const c=V(F);if(Object.isFrozen(o))throw new C("effect:type-error","<length> parameters not consecutive",{lengths:o});o.push(c),o.length===3&&U(c,F)}if(o.length<2||o.length>3)throw new C("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${o.length}}`,{lengths:o});return new _r(o[0],o[1],o[2]||0,f||be("black"))}function Zr(t){let o=1,f=0,F=0;return N(t.parameters,3),t.parameters[0]&&(o=q(t.parameters[0])),t.parameters[1]&&(f=V(t.parameters[1]),U(f,t.parameters[1])),t.parameters[2]&&(F=q(t.parameters[2])),new Jr(o,f,F)}function N(t,o){if(t.length>o)throw new C("effect:type-error",`Function supports up to ${o} parameters, Actual: ${t.length}`,{parameters:t})}function H(t){if(t.type==="color")return"<color>";if(t.unit){if(t.unit in Q)return"<length>";if(t.unit in L)return"<angle>";if(t.unit==="%")return"<percentage>"}return"<double>"}function U(t,o){if(t<0)throw new C("effect:type-error",`Negative values are not allowed, Actual: ${t}`,{term:o})}function en(t){if(t.type!=="quantity"||t.unit!==null)throw new C("effect:type-error",`Expected <double>, Actual: ${H(t)}`,{term:t})}function rn(t){if(t.type!=="quantity"||t.unit!==null&&t.unit!=="%")throw new C("effect:type-error",`Expected <double> or <percentage>, Actual: ${H(t)}`,{term:t})}const L={deg:1,grad:.9,rad:180/Math.PI,turn:360};function nn(t){if(t.type!=="quantity"||!(t.value===0&&t.unit===null||t.unit&&L[t.unit]!=null))throw new C("effect:type-error",`Expected <angle>, Actual: ${H(t)}`,{term:t})}const Q={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function tn(t){if(t.type!=="quantity"||!(t.value===0&&t.unit===null||t.unit&&Q[t.unit]!=null))throw new C("effect:type-error",`Expected <length>, Actual: ${H(t)}`,{term:t})}function q(t){rn(t);const o=t.value;return U(o,t),t.unit==="%"?.01*o:o}function un(t){return en(t),U(t.value,t),t.value}function an(t){return nn(t),t.value*L[t.unit]||0}function V(t){return tn(t),t.value*Q[t.unit]||0}function cn(t){switch(t.colorType){case"hex":return Ir(t.value);case"named":return be(t.value);case"function":return sn(t.value)}}function be(t){if(!Mr(t))throw new C("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t});return Pr(t)}const on=/^rgba?/i,ln=/^hsla?/i;function sn(t){if(N(t.parameters,4),on.test(t.name))return[q(t.parameters[0]),q(t.parameters[1]),q(t.parameters[2]),t.parameters[3]?q(t.parameters[3]):1];if(ln.test(t.name))return Nr(un(t.parameters[0]),q(t.parameters[1]),q(t.parameters[2]),t.parameters[3]?q(t.parameters[3]):1);throw new C("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}export{mn as y};
