import{S as s,i as t,s as a,e,t as o,a as r,x as n,c as i,b as p,d as c,f as l,g as h,j as m,k as f,y as u,n as d,H as x}from"./client.e76841e1.js";import{f as j}from"./posts.355aacd8.js";function k(s){let t,a,j,k,H,$=s[0].title+"",b=s[0].html+"";return{c(){t=e("h1"),a=o($),j=r(),H=n(),this.h()},l(s){t=i(s,"H1",{});var e=p(t);a=c(e,$),e.forEach(l),j=h(s),H=n(),this.h()},h(){k=new x(H)},m(s,e){m(s,t,e),f(t,a),m(s,j,e),k.m(b,s,e),m(s,H,e)},p(s,[t]){1&t&&$!==($=s[0].title+"")&&u(a,$),1&t&&b!==(b=s[0].html+"")&&k.p(b)},i:d,o:d,d(s){s&&l(t),s&&l(j),s&&l(H),s&&k.d()}}}function H(s){return{post:j(s.params.permalink)}}function $(s,t,a){let{post:e}=t;return s.$$set=s=>{"post"in s&&a(0,e=s.post)},[e]}export default class extends s{constructor(s){super(),t(this,s,$,k,a,{post:0})}}export{H as preload};
