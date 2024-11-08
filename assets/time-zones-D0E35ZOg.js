import{g as i,a as n}from"./index-p4VH55K1-DFe7Bl0A.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const s={CET:"Europe/Brussels",CST6CDT:"America/Chicago",EET:"Europe/Athens",EST:"America/Panama",EST5EDT:"America/New_York",HST:"Pacific/Honolulu",MET:"Europe/Brussels",MST:"America/Phoenix",MST7MDT:"America/Denver",PST8PDT:"America/Los_Angeles",WET:"Europe/Lisbon"},T=(()=>{const e=Object.keys(s);return Object.keys(i()).filter(o=>!e.includes(o))})();function a(e){const o=s[e];if(o)return o;const r=n(e);return(r==null?void 0:r.aliasOf)??e}export{a as normalize,T as timeZones};
