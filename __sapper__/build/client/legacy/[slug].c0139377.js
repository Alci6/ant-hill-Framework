import{D as t,_ as n,a as e,b as r,c as s,i as a,d as c,S as o,s as i,f as u,e as f,t as l,u as h,k as p,l as v,g as d,h as m,j as y,m as x,n as g,o as w,q as R,B as b,p as j}from"./client.374fdc7c.js";function D(t,n,e,r,s,a,c){try{var o=t[a](c),i=o.value}catch(t){return void e(t)}o.done?n(i):Promise.resolve(i).then(r,s)}function k(t){return function(){var n=this,e=arguments;return new Promise((function(r,s){var a=t.apply(n,e);function c(t){D(a,r,s,c,o,"next",t)}function o(t){D(a,r,s,c,o,"throw",t)}c(void 0)}))}}function E(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(n){var c=e(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return r(this,s)}}function H(t){var n,e,r,s,a,c,o=t[0].title+"",i=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=u(),r=f("h1"),s=l(o),a=u(),c=f("div"),this.h()},l:function(t){h('[data-svelte="svelte-iu3vwn"]',document.head).forEach(p),e=v(t),r=d(t,"H1",{});var n=m(r);s=y(n,o),n.forEach(p),a=v(t),c=d(t,"DIV",{class:!0}),m(c).forEach(p),this.h()},h:function(){x(c,"class","content svelte-18mipvo")},m:function(t,n){g(t,e,n),g(t,r,n),w(r,s),g(t,a,n),g(t,c,n),c.innerHTML=i},p:function(t,e){var r=R(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&o!==(o=t[0].title+"")&&b(s,o),1&r&&i!==(i=t[0].html+"")&&(c.innerHTML=i)},i:j,o:j,d:function(t){t&&p(e),t&&p(r),t&&p(a),t&&p(c)}}}function P(t){return L.apply(this,arguments)}function L(){return(L=k(t.mark((function n(e){var r,s,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(s.status,a.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function M(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var S=function(t){n(r,o);var e=E(r);function r(t){var n;return s(this,r),n=e.call(this),a(c(n),t,M,H,i,{post:0}),n}return r}();export default S;export{P as preload};
