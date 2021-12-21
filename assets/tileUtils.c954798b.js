import"./vendor.f5642644.js";function i(c,e,n,t){const o=c.clone(),r=1<<o.level,l=o.col+e,w=o.row+n;return t&&l<0?(o.col=l+r,o.world-=1):l>=r?(o.col=l-r,o.world+=1):o.col=l,o.row=w,o}export{i as l};
