import"./vendor.5b1a85aa.js";function o(o,l,r,c){const e=o.clone(),n=1<<e.level,t=e.col+l,w=e.row+r;return c&&t<0?(e.col=t+n,e.world-=1):t>=n?(e.col=t-n,e.world+=1):e.col=t,e.row=w,e}export{o as l};
