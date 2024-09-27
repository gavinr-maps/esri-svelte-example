import{a as X,n as V}from"./mathUtils-ClvKsMak.js";function B(s,o){return s[0]=o[0],s[1]=o[1],s[2]=o[2],s[3]=o[3],s[4]=o[4],s[5]=o[5],s[6]=o[6],s[7]=o[7],s[8]=o[8],s[9]=o[9],s[10]=o[10],s[11]=o[11],s[12]=o[12],s[13]=o[13],s[14]=o[14],s[15]=o[15],s}function C(s,o,r,e,h,u,M,c,i,n,b,f,l,m,g,q,x){return s[0]=o,s[1]=r,s[2]=e,s[3]=h,s[4]=u,s[5]=M,s[6]=c,s[7]=i,s[8]=n,s[9]=b,s[10]=f,s[11]=l,s[12]=m,s[13]=g,s[14]=q,s[15]=x,s}function Y(s){return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function G(s,o){if(s===o){const r=o[1],e=o[2],h=o[3],u=o[6],M=o[7],c=o[11];s[1]=o[4],s[2]=o[8],s[3]=o[12],s[4]=r,s[6]=o[9],s[7]=o[13],s[8]=e,s[9]=u,s[11]=o[14],s[12]=h,s[13]=M,s[14]=c}else s[0]=o[0],s[1]=o[4],s[2]=o[8],s[3]=o[12],s[4]=o[1],s[5]=o[5],s[6]=o[9],s[7]=o[13],s[8]=o[2],s[9]=o[6],s[10]=o[10],s[11]=o[14],s[12]=o[3],s[13]=o[7],s[14]=o[11],s[15]=o[15];return s}function H(s,o){return k(s,o)||Y(s),s}function k(s,o){const r=o[0],e=o[1],h=o[2],u=o[3],M=o[4],c=o[5],i=o[6],n=o[7],b=o[8],f=o[9],l=o[10],m=o[11],g=o[12],q=o[13],x=o[14],d=o[15],v=r*c-e*M,R=r*i-h*M,p=r*n-u*M,y=e*i-h*c,S=e*n-u*c,A=h*n-u*i,P=b*q-f*g,D=b*x-l*g,j=b*d-m*g,w=f*x-l*q,I=f*d-m*q,O=l*d-m*x;let T=v*O-R*I+p*w+y*j-S*D+A*P;return T?(T=1/T,s[0]=(c*O-i*I+n*w)*T,s[1]=(h*I-e*O-u*w)*T,s[2]=(q*A-x*S+d*y)*T,s[3]=(l*S-f*A-m*y)*T,s[4]=(i*j-M*O-n*D)*T,s[5]=(r*O-h*j+u*D)*T,s[6]=(x*p-g*A-d*R)*T,s[7]=(b*A-l*p+m*R)*T,s[8]=(M*I-c*j+n*P)*T,s[9]=(e*j-r*I-u*P)*T,s[10]=(g*S-q*p+d*v)*T,s[11]=(f*p-b*S-m*v)*T,s[12]=(c*D-M*w-i*P)*T,s[13]=(r*w-e*D+h*P)*T,s[14]=(q*R-g*y-x*v)*T,s[15]=(b*y-f*R+l*v)*T,s):null}function J(s,o){const r=o[0],e=o[1],h=o[2],u=o[3],M=o[4],c=o[5],i=o[6],n=o[7],b=o[8],f=o[9],l=o[10],m=o[11],g=o[12],q=o[13],x=o[14],d=o[15];return s[0]=c*(l*d-m*x)-f*(i*d-n*x)+q*(i*m-n*l),s[1]=-(e*(l*d-m*x)-f*(h*d-u*x)+q*(h*m-u*l)),s[2]=e*(i*d-n*x)-c*(h*d-u*x)+q*(h*n-u*i),s[3]=-(e*(i*m-n*l)-c*(h*m-u*l)+f*(h*n-u*i)),s[4]=-(M*(l*d-m*x)-b*(i*d-n*x)+g*(i*m-n*l)),s[5]=r*(l*d-m*x)-b*(h*d-u*x)+g*(h*m-u*l),s[6]=-(r*(i*d-n*x)-M*(h*d-u*x)+g*(h*n-u*i)),s[7]=r*(i*m-n*l)-M*(h*m-u*l)+b*(h*n-u*i),s[8]=M*(f*d-m*q)-b*(c*d-n*q)+g*(c*m-n*f),s[9]=-(r*(f*d-m*q)-b*(e*d-u*q)+g*(e*m-u*f)),s[10]=r*(c*d-n*q)-M*(e*d-u*q)+g*(e*n-u*c),s[11]=-(r*(c*m-n*f)-M*(e*m-u*f)+b*(e*n-u*c)),s[12]=-(M*(f*x-l*q)-b*(c*x-i*q)+g*(c*l-i*f)),s[13]=r*(f*x-l*q)-b*(e*x-h*q)+g*(e*l-h*f),s[14]=-(r*(c*x-i*q)-M*(e*x-h*q)+g*(e*i-h*c)),s[15]=r*(c*l-i*f)-M*(e*l-h*f)+b*(e*i-h*c),s}function K(s){const o=s[0],r=s[1],e=s[2],h=s[3],u=s[4],M=s[5],c=s[6],i=s[7],n=s[8],b=s[9],f=s[10],l=s[11],m=s[12],g=s[13],q=s[14],x=s[15];return(o*M-r*u)*(f*x-l*q)-(o*c-e*u)*(b*x-l*g)+(o*i-h*u)*(b*q-f*g)+(r*c-e*M)*(n*x-l*m)-(r*i-h*M)*(n*q-f*m)+(e*i-h*c)*(n*g-b*m)}function z(s,o,r){const e=o[0],h=o[1],u=o[2],M=o[3],c=o[4],i=o[5],n=o[6],b=o[7],f=o[8],l=o[9],m=o[10],g=o[11],q=o[12],x=o[13],d=o[14],v=o[15];let R=r[0],p=r[1],y=r[2],S=r[3];return s[0]=R*e+p*c+y*f+S*q,s[1]=R*h+p*i+y*l+S*x,s[2]=R*u+p*n+y*m+S*d,s[3]=R*M+p*b+y*g+S*v,R=r[4],p=r[5],y=r[6],S=r[7],s[4]=R*e+p*c+y*f+S*q,s[5]=R*h+p*i+y*l+S*x,s[6]=R*u+p*n+y*m+S*d,s[7]=R*M+p*b+y*g+S*v,R=r[8],p=r[9],y=r[10],S=r[11],s[8]=R*e+p*c+y*f+S*q,s[9]=R*h+p*i+y*l+S*x,s[10]=R*u+p*n+y*m+S*d,s[11]=R*M+p*b+y*g+S*v,R=r[12],p=r[13],y=r[14],S=r[15],s[12]=R*e+p*c+y*f+S*q,s[13]=R*h+p*i+y*l+S*x,s[14]=R*u+p*n+y*m+S*d,s[15]=R*M+p*b+y*g+S*v,s}function L(s,o,r){const e=r[0],h=r[1],u=r[2];if(o===s)s[12]=o[0]*e+o[4]*h+o[8]*u+o[12],s[13]=o[1]*e+o[5]*h+o[9]*u+o[13],s[14]=o[2]*e+o[6]*h+o[10]*u+o[14],s[15]=o[3]*e+o[7]*h+o[11]*u+o[15];else{const M=o[0],c=o[1],i=o[2],n=o[3],b=o[4],f=o[5],l=o[6],m=o[7],g=o[8],q=o[9],x=o[10],d=o[11];s[0]=M,s[1]=c,s[2]=i,s[3]=n,s[4]=b,s[5]=f,s[6]=l,s[7]=m,s[8]=g,s[9]=q,s[10]=x,s[11]=d,s[12]=M*e+b*h+g*u+o[12],s[13]=c*e+f*h+q*u+o[13],s[14]=i*e+l*h+x*u+o[14],s[15]=n*e+m*h+d*u+o[15]}return s}function U(s,o,r){const e=r[0],h=r[1],u=r[2];return s[0]=o[0]*e,s[1]=o[1]*e,s[2]=o[2]*e,s[3]=o[3]*e,s[4]=o[4]*h,s[5]=o[5]*h,s[6]=o[6]*h,s[7]=o[7]*h,s[8]=o[8]*u,s[9]=o[9]*u,s[10]=o[10]*u,s[11]=o[11]*u,s[12]=o[12],s[13]=o[13],s[14]=o[14],s[15]=o[15],s}function W(s,o,r,e){let h,u,M,c,i,n,b,f,l,m,g,q,x,d,v,R,p,y,S,A,P,D,j,w,I=e[0],O=e[1],T=e[2],F=Math.sqrt(I*I+O*O+T*T);return F<X()?null:(F=1/F,I*=F,O*=F,T*=F,h=Math.sin(r),u=Math.cos(r),M=1-u,c=o[0],i=o[1],n=o[2],b=o[3],f=o[4],l=o[5],m=o[6],g=o[7],q=o[8],x=o[9],d=o[10],v=o[11],R=I*I*M+u,p=O*I*M+T*h,y=T*I*M-O*h,S=I*O*M-T*h,A=O*O*M+u,P=T*O*M+I*h,D=I*T*M+O*h,j=O*T*M-I*h,w=T*T*M+u,s[0]=c*R+f*p+q*y,s[1]=i*R+l*p+x*y,s[2]=n*R+m*p+d*y,s[3]=b*R+g*p+v*y,s[4]=c*S+f*A+q*P,s[5]=i*S+l*A+x*P,s[6]=n*S+m*A+d*P,s[7]=b*S+g*A+v*P,s[8]=c*D+f*j+q*w,s[9]=i*D+l*j+x*w,s[10]=n*D+m*j+d*w,s[11]=b*D+g*j+v*w,o!==s&&(s[12]=o[12],s[13]=o[13],s[14]=o[14],s[15]=o[15]),s)}function a(s,o,r){const e=Math.sin(r),h=Math.cos(r),u=o[4],M=o[5],c=o[6],i=o[7],n=o[8],b=o[9],f=o[10],l=o[11];return o!==s&&(s[0]=o[0],s[1]=o[1],s[2]=o[2],s[3]=o[3],s[12]=o[12],s[13]=o[13],s[14]=o[14],s[15]=o[15]),s[4]=u*h+n*e,s[5]=M*h+b*e,s[6]=c*h+f*e,s[7]=i*h+l*e,s[8]=n*h-u*e,s[9]=b*h-M*e,s[10]=f*h-c*e,s[11]=l*h-i*e,s}function t(s,o,r){const e=Math.sin(r),h=Math.cos(r),u=o[0],M=o[1],c=o[2],i=o[3],n=o[8],b=o[9],f=o[10],l=o[11];return o!==s&&(s[4]=o[4],s[5]=o[5],s[6]=o[6],s[7]=o[7],s[12]=o[12],s[13]=o[13],s[14]=o[14],s[15]=o[15]),s[0]=u*h-n*e,s[1]=M*h-b*e,s[2]=c*h-f*e,s[3]=i*h-l*e,s[8]=u*e+n*h,s[9]=M*e+b*h,s[10]=c*e+f*h,s[11]=i*e+l*h,s}function s1(s,o,r){const e=Math.sin(r),h=Math.cos(r),u=o[0],M=o[1],c=o[2],i=o[3],n=o[4],b=o[5],f=o[6],l=o[7];return o!==s&&(s[8]=o[8],s[9]=o[9],s[10]=o[10],s[11]=o[11],s[12]=o[12],s[13]=o[13],s[14]=o[14],s[15]=o[15]),s[0]=u*h+n*e,s[1]=M*h+b*e,s[2]=c*h+f*e,s[3]=i*h+l*e,s[4]=n*h-u*e,s[5]=b*h-M*e,s[6]=f*h-c*e,s[7]=l*h-i*e,s}function o1(s,o){return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=o[0],s[13]=o[1],s[14]=o[2],s[15]=1,s}function r1(s,o){return s[0]=o[0],s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=o[1],s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=o[2],s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function e1(s,o,r){if(o===0)return Y(s);let e,h,u,M=r[0],c=r[1],i=r[2],n=Math.sqrt(M*M+c*c+i*i);return n<X()?null:(n=1/n,M*=n,c*=n,i*=n,e=Math.sin(o),h=Math.cos(o),u=1-h,s[0]=M*M*u+h,s[1]=c*M*u+i*e,s[2]=i*M*u-c*e,s[3]=0,s[4]=M*c*u-i*e,s[5]=c*c*u+h,s[6]=i*c*u+M*e,s[7]=0,s[8]=M*i*u+c*e,s[9]=c*i*u-M*e,s[10]=i*i*u+h,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s)}function h1(s,o){const r=Math.sin(o),e=Math.cos(o);return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=e,s[6]=r,s[7]=0,s[8]=0,s[9]=-r,s[10]=e,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function u1(s,o){const r=Math.sin(o),e=Math.cos(o);return s[0]=e,s[1]=0,s[2]=-r,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=r,s[9]=0,s[10]=e,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function M1(s,o){const r=Math.sin(o),e=Math.cos(o);return s[0]=e,s[1]=r,s[2]=0,s[3]=0,s[4]=-r,s[5]=e,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function E(s,o,r){const e=o[0],h=o[1],u=o[2],M=o[3],c=e+e,i=h+h,n=u+u,b=e*c,f=e*i,l=e*n,m=h*i,g=h*n,q=u*n,x=M*c,d=M*i,v=M*n;return s[0]=1-(m+q),s[1]=f+v,s[2]=l-d,s[3]=0,s[4]=f-v,s[5]=1-(b+q),s[6]=g+x,s[7]=0,s[8]=l+d,s[9]=g-x,s[10]=1-(b+m),s[11]=0,s[12]=r[0],s[13]=r[1],s[14]=r[2],s[15]=1,s}function c1(s,o){const r=i1,e=-o[0],h=-o[1],u=-o[2],M=o[3],c=o[4],i=o[5],n=o[6],b=o[7],f=e*e+h*h+u*u+M*M;return f>0?(r[0]=2*(c*M+b*e+i*u-n*h)/f,r[1]=2*(i*M+b*h+n*e-c*u)/f,r[2]=2*(n*M+b*u+c*h-i*e)/f):(r[0]=2*(c*M+b*e+i*u-n*h),r[1]=2*(i*M+b*h+n*e-c*u),r[2]=2*(n*M+b*u+c*h-i*e)),E(s,o,r),s}const i1=V();function n1(s,o){return s[0]=o[12],s[1]=o[13],s[2]=o[14],s}function f1(s,o){const r=o[0],e=o[1],h=o[2],u=o[4],M=o[5],c=o[6],i=o[8],n=o[9],b=o[10];return s[0]=Math.sqrt(r*r+e*e+h*h),s[1]=Math.sqrt(u*u+M*M+c*c),s[2]=Math.sqrt(i*i+n*n+b*b),s}function b1(s,o){const r=o[0]+o[5]+o[10];let e=0;return r>0?(e=2*Math.sqrt(r+1),s[3]=.25*e,s[0]=(o[6]-o[9])/e,s[1]=(o[8]-o[2])/e,s[2]=(o[1]-o[4])/e):o[0]>o[5]&&o[0]>o[10]?(e=2*Math.sqrt(1+o[0]-o[5]-o[10]),s[3]=(o[6]-o[9])/e,s[0]=.25*e,s[1]=(o[1]+o[4])/e,s[2]=(o[8]+o[2])/e):o[5]>o[10]?(e=2*Math.sqrt(1+o[5]-o[0]-o[10]),s[3]=(o[8]-o[2])/e,s[0]=(o[1]+o[4])/e,s[1]=.25*e,s[2]=(o[6]+o[9])/e):(e=2*Math.sqrt(1+o[10]-o[0]-o[5]),s[3]=(o[1]-o[4])/e,s[0]=(o[8]+o[2])/e,s[1]=(o[6]+o[9])/e,s[2]=.25*e),s}function l1(s,o,r,e){const h=o[0],u=o[1],M=o[2],c=o[3],i=h+h,n=u+u,b=M+M,f=h*i,l=h*n,m=h*b,g=u*n,q=u*b,x=M*b,d=c*i,v=c*n,R=c*b,p=e[0],y=e[1],S=e[2];return s[0]=(1-(g+x))*p,s[1]=(l+R)*p,s[2]=(m-v)*p,s[3]=0,s[4]=(l-R)*y,s[5]=(1-(f+x))*y,s[6]=(q+d)*y,s[7]=0,s[8]=(m+v)*S,s[9]=(q-d)*S,s[10]=(1-(f+g))*S,s[11]=0,s[12]=r[0],s[13]=r[1],s[14]=r[2],s[15]=1,s}function m1(s,o,r,e,h){const u=o[0],M=o[1],c=o[2],i=o[3],n=u+u,b=M+M,f=c+c,l=u*n,m=u*b,g=u*f,q=M*b,x=M*f,d=c*f,v=i*n,R=i*b,p=i*f,y=e[0],S=e[1],A=e[2],P=h[0],D=h[1],j=h[2],w=(1-(q+d))*y,I=(m+p)*y,O=(g-R)*y,T=(m-p)*S,F=(1-(l+d))*S,Q=(x+v)*S,$=(g+R)*A,_=(x-v)*A,Z=(1-(l+q))*A;return s[0]=w,s[1]=I,s[2]=O,s[3]=0,s[4]=T,s[5]=F,s[6]=Q,s[7]=0,s[8]=$,s[9]=_,s[10]=Z,s[11]=0,s[12]=r[0]+P-(w*P+T*D+$*j),s[13]=r[1]+D-(I*P+F*D+_*j),s[14]=r[2]+j-(O*P+Q*D+Z*j),s[15]=1,s}function x1(s,o){const r=o[0],e=o[1],h=o[2],u=o[3],M=r+r,c=e+e,i=h+h,n=r*M,b=e*M,f=e*c,l=h*M,m=h*c,g=h*i,q=u*M,x=u*c,d=u*i;return s[0]=1-f-g,s[1]=b+d,s[2]=l-x,s[3]=0,s[4]=b-d,s[5]=1-n-g,s[6]=m+q,s[7]=0,s[8]=l+x,s[9]=m-q,s[10]=1-n-f,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function q1(s,o,r,e,h,u,M){const c=1/(r-o),i=1/(h-e),n=1/(u-M);return s[0]=2*u*c,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*u*i,s[6]=0,s[7]=0,s[8]=(r+o)*c,s[9]=(h+e)*i,s[10]=(M+u)*n,s[11]=-1,s[12]=0,s[13]=0,s[14]=M*u*2*n,s[15]=0,s}function d1(s,o,r,e,h){const u=1/Math.tan(o/2);let M;return s[0]=u/r,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=u,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[11]=-1,s[12]=0,s[13]=0,s[15]=0,h!=null&&h!==1/0?(M=1/(e-h),s[10]=(h+e)*M,s[14]=2*h*e*M):(s[10]=-1,s[14]=-2*e),s}function g1(s,o,r,e){const h=Math.tan(o.upDegrees*Math.PI/180),u=Math.tan(o.downDegrees*Math.PI/180),M=Math.tan(o.leftDegrees*Math.PI/180),c=Math.tan(o.rightDegrees*Math.PI/180),i=2/(M+c),n=2/(h+u);return s[0]=i,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=n,s[6]=0,s[7]=0,s[8]=-(M-c)*i*.5,s[9]=(h-u)*n*.5,s[10]=e/(r-e),s[11]=-1,s[12]=0,s[13]=0,s[14]=e*r/(r-e),s[15]=0,s}function p1(s,o,r,e,h,u,M){const c=1/(o-r),i=1/(e-h),n=1/(u-M);return s[0]=-2*c,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=-2*i,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2*n,s[11]=0,s[12]=(o+r)*c,s[13]=(h+e)*i,s[14]=(M+u)*n,s[15]=1,s}function R1(s,o,r,e){const h=o[0],u=o[1],M=o[2];let c=h-r[0],i=u-r[1],n=M-r[2];const b=X();if(Math.abs(c)<b&&Math.abs(i)<b&&Math.abs(n)<b)return void Y(s);let f=1/Math.sqrt(c*c+i*i+n*n);c*=f,i*=f,n*=f;const l=e[0],m=e[1],g=e[2];let q=m*n-g*i,x=g*c-l*n,d=l*i-m*c;f=Math.sqrt(q*q+x*x+d*d),f?(f=1/f,q*=f,x*=f,d*=f):(q=0,x=0,d=0);let v=i*d-n*x,R=n*q-c*d,p=c*x-i*q;f=Math.sqrt(v*v+R*R+p*p),f?(f=1/f,v*=f,R*=f,p*=f):(v=0,R=0,p=0),s[0]=q,s[1]=v,s[2]=c,s[3]=0,s[4]=x,s[5]=R,s[6]=i,s[7]=0,s[8]=d,s[9]=p,s[10]=n,s[11]=0,s[12]=-(q*h+x*u+d*M),s[13]=-(v*h+R*u+p*M),s[14]=-(c*h+i*u+n*M),s[15]=1}function y1(s,o,r,e){const h=o[0],u=o[1],M=o[2],c=e[0],i=e[1],n=e[2];let b=h-r[0],f=u-r[1],l=M-r[2],m=b*b+f*f+l*l;m>0&&(m=1/Math.sqrt(m),b*=m,f*=m,l*=m);let g=i*l-n*f,q=n*b-c*l,x=c*f-i*b;return m=g*g+q*q+x*x,m>0&&(m=1/Math.sqrt(m),g*=m,q*=m,x*=m),s[0]=g,s[1]=q,s[2]=x,s[3]=0,s[4]=f*x-l*q,s[5]=l*g-b*x,s[6]=b*q-f*g,s[7]=0,s[8]=b,s[9]=f,s[10]=l,s[11]=0,s[12]=h,s[13]=u,s[14]=M,s[15]=1,s}function S1(s){return"mat4("+s[0]+", "+s[1]+", "+s[2]+", "+s[3]+", "+s[4]+", "+s[5]+", "+s[6]+", "+s[7]+", "+s[8]+", "+s[9]+", "+s[10]+", "+s[11]+", "+s[12]+", "+s[13]+", "+s[14]+", "+s[15]+")"}function T1(s){return Math.sqrt(s[0]**2+s[1]**2+s[2]**2+s[3]**2+s[4]**2+s[5]**2+s[6]**2+s[7]**2+s[8]**2+s[9]**2+s[10]**2+s[11]**2+s[12]**2+s[13]**2+s[14]**2+s[15]**2)}function v1(s,o,r){return s[0]=o[0]+r[0],s[1]=o[1]+r[1],s[2]=o[2]+r[2],s[3]=o[3]+r[3],s[4]=o[4]+r[4],s[5]=o[5]+r[5],s[6]=o[6]+r[6],s[7]=o[7]+r[7],s[8]=o[8]+r[8],s[9]=o[9]+r[9],s[10]=o[10]+r[10],s[11]=o[11]+r[11],s[12]=o[12]+r[12],s[13]=o[13]+r[13],s[14]=o[14]+r[14],s[15]=o[15]+r[15],s}function N(s,o,r){return s[0]=o[0]-r[0],s[1]=o[1]-r[1],s[2]=o[2]-r[2],s[3]=o[3]-r[3],s[4]=o[4]-r[4],s[5]=o[5]-r[5],s[6]=o[6]-r[6],s[7]=o[7]-r[7],s[8]=o[8]-r[8],s[9]=o[9]-r[9],s[10]=o[10]-r[10],s[11]=o[11]-r[11],s[12]=o[12]-r[12],s[13]=o[13]-r[13],s[14]=o[14]-r[14],s[15]=o[15]-r[15],s}function I1(s,o,r){return s[0]=o[0]*r,s[1]=o[1]*r,s[2]=o[2]*r,s[3]=o[3]*r,s[4]=o[4]*r,s[5]=o[5]*r,s[6]=o[6]*r,s[7]=o[7]*r,s[8]=o[8]*r,s[9]=o[9]*r,s[10]=o[10]*r,s[11]=o[11]*r,s[12]=o[12]*r,s[13]=o[13]*r,s[14]=o[14]*r,s[15]=o[15]*r,s}function O1(s,o,r,e){return s[0]=o[0]+r[0]*e,s[1]=o[1]+r[1]*e,s[2]=o[2]+r[2]*e,s[3]=o[3]+r[3]*e,s[4]=o[4]+r[4]*e,s[5]=o[5]+r[5]*e,s[6]=o[6]+r[6]*e,s[7]=o[7]+r[7]*e,s[8]=o[8]+r[8]*e,s[9]=o[9]+r[9]*e,s[10]=o[10]+r[10]*e,s[11]=o[11]+r[11]*e,s[12]=o[12]+r[12]*e,s[13]=o[13]+r[13]*e,s[14]=o[14]+r[14]*e,s[15]=o[15]+r[15]*e,s}function P1(s,o){return s[0]===o[0]&&s[1]===o[1]&&s[2]===o[2]&&s[3]===o[3]&&s[4]===o[4]&&s[5]===o[5]&&s[6]===o[6]&&s[7]===o[7]&&s[8]===o[8]&&s[9]===o[9]&&s[10]===o[10]&&s[11]===o[11]&&s[12]===o[12]&&s[13]===o[13]&&s[14]===o[14]&&s[15]===o[15]}function D1(s,o){if(s===o)return!0;const r=s[0],e=s[1],h=s[2],u=s[3],M=s[4],c=s[5],i=s[6],n=s[7],b=s[8],f=s[9],l=s[10],m=s[11],g=s[12],q=s[13],x=s[14],d=s[15],v=o[0],R=o[1],p=o[2],y=o[3],S=o[4],A=o[5],P=o[6],D=o[7],j=o[8],w=o[9],I=o[10],O=o[11],T=o[12],F=o[13],Q=o[14],$=o[15],_=X();return Math.abs(r-v)<=_*Math.max(1,Math.abs(r),Math.abs(v))&&Math.abs(e-R)<=_*Math.max(1,Math.abs(e),Math.abs(R))&&Math.abs(h-p)<=_*Math.max(1,Math.abs(h),Math.abs(p))&&Math.abs(u-y)<=_*Math.max(1,Math.abs(u),Math.abs(y))&&Math.abs(M-S)<=_*Math.max(1,Math.abs(M),Math.abs(S))&&Math.abs(c-A)<=_*Math.max(1,Math.abs(c),Math.abs(A))&&Math.abs(i-P)<=_*Math.max(1,Math.abs(i),Math.abs(P))&&Math.abs(n-D)<=_*Math.max(1,Math.abs(n),Math.abs(D))&&Math.abs(b-j)<=_*Math.max(1,Math.abs(b),Math.abs(j))&&Math.abs(f-w)<=_*Math.max(1,Math.abs(f),Math.abs(w))&&Math.abs(l-I)<=_*Math.max(1,Math.abs(l),Math.abs(I))&&Math.abs(m-O)<=_*Math.max(1,Math.abs(m),Math.abs(O))&&Math.abs(g-T)<=_*Math.max(1,Math.abs(g),Math.abs(T))&&Math.abs(q-F)<=_*Math.max(1,Math.abs(q),Math.abs(F))&&Math.abs(x-Q)<=_*Math.max(1,Math.abs(x),Math.abs(Q))&&Math.abs(d-$)<=_*Math.max(1,Math.abs(d),Math.abs($))}function j1(s){const o=X(),r=s[0],e=s[1],h=s[2],u=s[4],M=s[5],c=s[6],i=s[8],n=s[9],b=s[10];return Math.abs(1-(r*r+u*u+i*i))<=o&&Math.abs(1-(e*e+M*M+n*n))<=o&&Math.abs(1-(h*h+c*c+b*b))<=o}function _1(s){return s[0]===1&&s[1]===0&&s[2]===0&&s[4]===0&&s[5]===1&&s[6]===0&&s[8]===0&&s[9]===0&&s[10]===1}const A1=z,w1=N;Object.freeze(Object.defineProperty({__proto__:null,add:v1,adjoint:J,copy:B,determinant:K,equals:D1,exactEquals:P1,frob:T1,fromQuat:x1,fromQuat2:c1,fromRotation:e1,fromRotationTranslation:E,fromRotationTranslationScale:l1,fromRotationTranslationScaleOrigin:m1,fromScaling:r1,fromTranslation:o1,fromXRotation:h1,fromYRotation:u1,fromZRotation:M1,frustum:q1,getRotation:b1,getScaling:f1,getTranslation:n1,hasIdentityRotation:_1,identity:Y,invert:k,invertOrIdentity:H,isOrthoNormal:j1,lookAt:R1,mul:A1,multiply:z,multiplyScalar:I1,multiplyScalarAndAdd:O1,ortho:p1,perspective:d1,perspectiveFromFieldOfView:g1,rotate:W,rotateX:a,rotateY:t,rotateZ:s1,scale:U,set:C,str:S1,sub:w1,subtract:N,targetTo:y1,translate:L,transpose:G},Symbol.toStringTag,{value:"Module"}));export{q1 as A,P1 as B,D1 as C,m1 as D,j1 as G,_1 as H,n1 as I,A1 as J,f1 as O,l1 as P,p1 as Q,M1 as R,R1 as X,y1 as Y,x1 as _,W as b,z as c,r1 as d,H as e,U as f,h1 as g,k as h,L as i,b1 as j,a as l,t as m,B as n,Y as o,e1 as p,o1 as q,C as r,G as s,s1 as x,u1 as y};
