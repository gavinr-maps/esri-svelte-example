const o={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},s={dash:o.dash,"dash-dot":[...o.dash,...o.dot],dot:o.dot,"long-dash":o["long-dash"],"long-dash-dot":[...o["long-dash"],...o.dot],"long-dash-dot-dot":[...o["long-dash"],...o.dot,...o.dot],none:null,"short-dash":o["short-dash"],"short-dash-dot":[...o["short-dash"],...o["short-dot"]],"short-dash-dot-dot":[...o["short-dash"],...o["short-dot"],...o["short-dot"]],"short-dot":o["short-dot"],solid:null},h=8;function n(t,d){return t==null?t:{pattern:t.slice(),pixelRatio:d}}function r(t){return{pattern:[t,t],pixelRatio:2}}function a(t){return(t==null?void 0:t.type)==="style"?l(t.style):null}function l(t){return t!=null?n(s[t],h):null}export{r as h,a as n};
