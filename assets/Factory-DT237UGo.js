import{N as r}from"./Texture-CcsX4Ue_.js";const m="theme-style";function M(c,t){return u(s(g(N(c),t)),t.size)}function g(c,{accentColor:t,contrastColor:o}){const I=t.toHex(),a=t.a,n=o.toHex(),e=o.a,l=c.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(m);return l&&(l.innerHTML=`
      .contrast-fill { fill: ${n}; fill-opacity: ${e}; }
      .contrast-stroke { stroke: ${n}; stroke-opacity: ${e};  }
      .accent-fill { fill: ${I}; fill-opacity: ${a}; }
      .accent-stroke { stroke: ${I}; stroke-opacity:  ${a}; }`),c}function N(c){const t=c.split(",")[1],o=atob(t);return new DOMParser().parseFromString(o,"image/svg+xml")}function s(c){const t=new XMLSerializer().serializeToString(c);return`data:image/svg+xml;base64,${btoa(t)}`}function u(c,t){const o=new Image(t,t);return o.src=c,o}const j="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NiIgY2xhc3M9ImFjY2VudC1maWxsIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI0Ljk5IiBkPSJNMjAuMDUgNDAuODZhMTUuMDUgMTUuMDUgMCAwIDAgMTcuMTQtMS41IDE1LjA1IDE1LjA1IDAgMCAwIDQuNDctMTYuNjUgMTUuMDUgMTUuMDUgMCAwIDAtMjIuNzItNy4xNSAxNS4wNSAxNS4wNSAwIDAgMC01LjUgNy4xNSIgY2xhc3M9ImNvbnRyYXN0LXN0cm9rZSIvPjxwYXRoIGQ9Im0xMC45NyAzNS41NyA1LjM4IDEyLjA3IDcuNzktMTMuNDd6IiBjbGFzcz0iY29udHJhc3QtZmlsbCIvPjwvc3ZnPg==",Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTggMTEuOTggMCAwIDAtOS44IDcuNTA3IiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIGNvbnRyYXN0LWZpbGwiLz48cGF0aCBkPSJtMjkuODE4IDIyLjgwOC02LjE4NCA0LjYtLjU0MS04LjM2NHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+",i=64;function b(c,t){const{accentColor:o,contrastColor:I,preMultiplyAlpha:a}=t;return c.fromData(`heading-rotate:[accent:${o},contrast:${I},size:${i}]`,()=>new r(M(j,{accentColor:o,contrastColor:I,size:i}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:a}))}function D(c,t){const{accentColor:o,contrastColor:I,preMultiplyAlpha:a}=t;return c.fromData(`tilt-rotate:[accent:${o},contrast:${I},size:${i}]`,()=>new r(M(Z,{accentColor:o,contrastColor:I,size:i}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:a}))}export{b as l,D as n};
