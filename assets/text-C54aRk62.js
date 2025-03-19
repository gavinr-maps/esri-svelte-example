import{s as e,x as c}from"./index-4eY77cms.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const n={textMatch:"text-match"};function x({text:a,pattern:s}){if(!s||!a)return a;const t=a.split(s);return t.length>1&&(t[1]=c`<mark class=${e(n.textMatch)}>${t[1]}</mark>`),t}export{x as c};
