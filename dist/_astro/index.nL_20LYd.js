import{o as B,n as Y,v as $,x as q,g as J,y as K,z as N,r as O,A as F,B as H,w as Q}from"./runtime-core.esm-bundler.BXDehHhB.js";function U(e){return K()?(N(e),!0):!1}function y(e){return typeof e=="function"?e():$(e)}const Z=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ee=Object.prototype.toString,te=e=>ee.call(e)==="[object Object]",D=()=>{};function k(e,l){function t(...o){return new Promise((s,i)=>{Promise.resolve(e(()=>l.apply(this,o),{fn:l,thisArg:this,args:o})).then(s).catch(i)})}return t}function oe(e,l={}){let t,o,s=D;const i=a=>{clearTimeout(a),s(),s=D};return a=>{const v=y(e),r=y(l.maxWait);return t&&i(t),v<=0||r!==void 0&&r<=0?(o&&(i(o),o=null),Promise.resolve(a())):new Promise((c,u)=>{s=l.rejectOnCancel?u:c,r&&!o&&(o=setTimeout(()=>{t&&i(t),o=null,c(a())},r)),t=setTimeout(()=>{o&&i(o),o=null,c(a())},v)})}}function ne(...e){let l=0,t,o=!0,s=D,i,d,a,v,r;!q(e[0])&&typeof e[0]=="object"?{delay:d,trailing:a=!0,leading:v=!0,rejectOnCancel:r=!1}=e[0]:[d,a=!0,v=!0,r=!1]=e;const c=()=>{t&&(clearTimeout(t),t=void 0,s(),s=D)};return m=>{const f=y(d),T=Date.now()-l,x=()=>i=m();return c(),f<=0?(l=Date.now(),x()):(T>f&&(v||!o)?(l=Date.now(),x()):a&&(i=new Promise((S,h)=>{s=r?h:S,t=setTimeout(()=>{l=Date.now(),o=!0,S(x()),c()},Math.max(0,f-T))})),!v&&!t&&(t=setTimeout(()=>o=!0,f)),o=!1,i)}}function le(e){return J()}function re(e,l=200,t={}){return k(oe(l,t),e)}function se(e,l=200,t=!1,o=!0,s=!1){return k(ne(l,t,o,s),e)}function ie(e,l=!0,t){le()?B(e,t):l?e():Y(e)}const G=Z?window:void 0;function X(e){var l;const t=y(e);return(l=t?.$el)!=null?l:t}function I(...e){let l,t,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,o,s]=e,l=G):[l,t,o,s]=e,!l)return D;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const i=[],d=()=>{i.forEach(c=>c()),i.length=0},a=(c,u,m,f)=>(c.addEventListener(u,m,f),()=>c.removeEventListener(u,m,f)),v=Q(()=>[X(l),y(s)],([c,u])=>{if(d(),!c)return;const m=te(u)?{...u}:u;i.push(...t.flatMap(f=>o.map(T=>a(c,f,T,m))))},{immediate:!0,flush:"post"}),r=()=>{v(),d()};return U(r),r}const V=1;function ue(e,l={}){const{throttle:t=0,idle:o=200,onStop:s=D,onScroll:i=D,offset:d={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0},behavior:v="auto",window:r=G,onError:c=n=>{console.error(n)}}=l,u=O(0),m=O(0),f=F({get(){return u.value},set(n){x(n,void 0)}}),T=F({get(){return m.value},set(n){x(void 0,n)}});function x(n,E){var p,A,L,w;if(!r)return;const b=y(e);if(!b)return;(L=b instanceof Document?r.document.body:b)==null||L.scrollTo({top:(p=y(E))!=null?p:T.value,left:(A=y(n))!=null?A:f.value,behavior:y(v)});const j=((w=b?.document)==null?void 0:w.documentElement)||b?.documentElement||b;f!=null&&(u.value=j.scrollLeft),T!=null&&(m.value=j.scrollTop)}const S=O(!1),h=H({left:!0,right:!1,top:!0,bottom:!1}),g=H({left:!1,right:!1,top:!1,bottom:!1}),M=n=>{S.value&&(S.value=!1,g.left=!1,g.right=!1,g.top=!1,g.bottom=!1,s(n))},z=re(M,t+o),C=n=>{var E;if(!r)return;const p=((E=n?.document)==null?void 0:E.documentElement)||n?.documentElement||X(n),{display:A,flexDirection:L}=getComputedStyle(p),w=p.scrollLeft;g.left=w<u.value,g.right=w>u.value;const b=Math.abs(w)<=(d.left||0),j=Math.abs(w)+p.clientWidth>=p.scrollWidth-(d.right||0)-V;A==="flex"&&L==="row-reverse"?(h.left=j,h.right=b):(h.left=b,h.right=j),u.value=w;let _=p.scrollTop;n===r.document&&!_&&(_=r.document.body.scrollTop),g.top=_<m.value,g.bottom=_>m.value;const P=Math.abs(_)<=(d.top||0),R=Math.abs(_)+p.clientHeight>=p.scrollHeight-(d.bottom||0)-V;A==="flex"&&L==="column-reverse"?(h.top=R,h.bottom=P):(h.top=P,h.bottom=R),m.value=_},W=n=>{var E;if(!r)return;const p=(E=n.target.documentElement)!=null?E:n.target;C(p),S.value=!0,z(n),i(n)};return I(e,"scroll",t?se(W,t,!0,!1):W,a),ie(()=>{try{const n=y(e);if(!n)return;C(n)}catch(n){c(n)}}),I(e,"scrollend",M,a),{x:f,y:T,isScrolling:S,arrivedState:h,directions:g,measure(){const n=y(e);r&&n&&C(n)}}}export{ue as u};
