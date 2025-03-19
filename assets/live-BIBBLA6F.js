import{h as s,j as T,o as t,T as n,E as l}from"./index-tefRSezt.js";import{f as a,m as f}from"./directive-helpers-C0aXnQdc.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=s(class extends T{constructor(e){if(super(e),e.type!==t.PROPERTY&&e.type!==t.ATTRIBUTE&&e.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!a(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===n||r===l)return r;const o=e.element,i=e.name;if(e.type===t.PROPERTY){if(r===o[i])return n}else if(e.type===t.BOOLEAN_ATTRIBUTE){if(!!r===o.hasAttribute(i))return n}else if(e.type===t.ATTRIBUTE&&o.getAttribute(i)===r+"")return n;return f(e),r}});export{E as l};
