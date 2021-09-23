import"./vendor.d0a39f0f.js";function o(o,l,r,c){const e=o.clone(),n=1<<e.level,t=e.col+l,d=e.row+r;return c&&t<0?(e.col=t+n,e.world-=1):t>=n?(e.col=t-n,e.world+=1):e.col=t,e.row=d,e}export{o as l};
