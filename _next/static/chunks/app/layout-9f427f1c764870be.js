(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9624:function(e,t,n){Promise.resolve().then(n.bind(n,4414)),Promise.resolve().then(n.bind(n,8366)),Promise.resolve().then(n.t.bind(n,972,23)),Promise.resolve().then(n.t.bind(n,5750,23)),Promise.resolve().then(n.t.bind(n,9812,23)),Promise.resolve().then(n.t.bind(n,8098,23)),Promise.resolve().then(n.bind(n,8511))},4414:function(e,t,n){"use strict";var r=n(9533),i=n(1229),o=n(987);t.default=()=>{let[e,t]=(0,i.useState)(!1);if((0,i.useEffect)(()=>{let e=()=>{t(window.scrollY>window.innerHeight)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),e)return(0,r.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"bg-gradient-to-t from-primary to-secondary text-white animate-bounce flex justify-center items-center text-xl cursor-pointer fixed z-40 bottom-10 right-3 rounded-full w-[40px] h-[40px]",children:(0,r.jsx)(o.Jj$,{})})}},8366:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var r=n(9533),i=n(6353),o=n(1229),a=n(987),s=n(8197),l=e=>{let{type:t,imageSrc:n,brandName:o,tagLine:a}=e,[l,...c]=(null!=o?o:"React To Next").split(" "),u=c.join(" ");return(0,r.jsx)("div",{className:"brand-logo",children:"image"===t?(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)(s.default,{src:n,alt:o})}):(0,r.jsx)("div",{className:"flex items-start flex-col justify-center",children:(0,r.jsxs)(i.default,{href:"/",className:"text-xl tracking-wide uppercase leading-none font-semibold inline-flex gap-2",children:[(0,r.jsx)("span",{className:"text-white",children:l}),(0,r.jsx)("span",{className:"text-white",children:u})]})})})},c=n(1250),u=e=>{let{heading:t,children:n}=e;return(0,r.jsx)("div",{className:"top-0 text-sm z-[99] bg-gradient-to-r from-primary to-secondary md:text-center text-white py-2 right-0 left-0",children:(0,r.jsxs)("div",{className:"container mx-auto flex flex-wrap gap-2 md:gap-4 items-center",children:[(0,r.jsx)("h4",{className:"font-semibold",children:"\uD83D\uDE80 Learn React & Next JS for Free!"}),(0,r.jsx)("p",{className:"text-sm",children:"Explore in-depth tutorials and articles at no cost. Start your journey to mastering React and Next.js with our expert guidance!"})]})})},d=()=>{let[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)({}),[d,f]=(0,o.useState)(""),[p,m]=(0,o.useState)(!0),[h,b]=(0,o.useState)(0),g=(0,c.usePathname)();(0,o.useEffect)(()=>{f(g)},[g]),(0,o.useEffect)(()=>{let e=()=>{let e=window.pageYOffset||document.documentElement.scrollTop;e>h&&e>500?m(!1):e<h&&m(!0),b(e<=0?0:e)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[h]);let x=[{id:"home-menu",label:"Home",link:"/"},{id:"blog-menu",label:"Blog",link:"/blog"},{id:"videos-menu",label:"Youtube Videos",link:"https://www.youtube.com/@reacttonext",subMenu:!1,subMenus:[{id:"videos-react-js-menu",label:"React JS - Videos",link:"/category/react-js-videos"}]}],y=e=>{s(t=>({...t,[e]:!t[e]}))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("header",{className:"bg-darkBgModal hidden md:block fixed top-0 w-full z-50 transition-transform duration-300 ".concat(p?"translate-y-0":"-translate-y-full"),children:[(0,r.jsx)(u,{}),(0,r.jsxs)("div",{className:"container mx-auto flex flex-wrap justify-between items-center",children:[(0,r.jsx)(l,{brandName:"React To Next",tagLine:"Skill Up in Coding"}),(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:"h-[50px] flex justify-center items-center flex-wrap gap-2",children:x.map(e=>(0,r.jsxs)("li",{className:"relative group",children:[(0,r.jsx)(i.default,{className:"px-4 py-2 leading-1 text-sm hover:bg-secondary rounded-lg transition-all ease-in-out ".concat((e.link,"")),href:e.link,children:e.label}),e.subMenu&&(0,r.jsx)("ul",{className:"absolute hidden group-hover:block bg-darkBg min-w-[200px] mt-1 shadow-lg py-2 rounded-md",children:e.subMenus.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{className:"block px-4 py-2 text-sm hover:bg-primary hover:text-white transition-all",href:e.link,children:e.label})},"submenu_".concat(e.id)))})]},"menu_".concat(e.id)))})})]})]}),(0,r.jsx)("button",{onClick:()=>t(!e),className:"md:hidden z-50 bg-secondary text-primary inline-block p-2 rounded-md fixed right-3 top-3",children:(0,r.jsx)(a.gq,{})}),e&&(0,r.jsx)("header",{className:"md:hidden fixed top-0 bottom-0 h-full right-0 w-[250px] z-40",children:(0,r.jsx)("nav",{className:"rounded-t-none bg-darkBgModal max-w-4xl mx-auto h-full pt-10",children:(0,r.jsx)("ul",{className:"flex flex-col items-stretch justify-stretch flex-wrap",children:x.map(e=>(0,r.jsxs)("li",{children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)(i.default,{onClick:()=>t(!1),className:"block w-full px-6 py-3 leading-1 text-sm transition-all ease-in-out ".concat((e.link,"")),href:e.link,children:e.label}),e.subMenu&&(0,r.jsx)("button",{className:"mr-2",onClick:()=>y(e.id),children:n[e.id]?"-":"+"})]}),e.subMenu&&n[e.id]&&(0,r.jsx)("ul",{className:"pl-6",children:e.subMenus.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{className:"block py-2 text-sm hover:bg-primary hover:text-white transition-all",href:e.link,children:e.label})},"mobile_submenu_".concat(e.id)))})]},"menu2_".concat(e.id)))})})})]})}},8197:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(4249),i=n.n(r)},6353:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(9812),i=n.n(r)},1250:function(e,t,n){"use strict";var r=n(7797);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},4249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return s}});let r=n(8848),i=n(7373),o=n(5750),a=r._(n(7649));function s(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=o.Image},972:function(){},8098:function(e){e.exports={style:{fontFamily:"'__Rubik_b539cb', '__Rubik_Fallback_b539cb'",fontStyle:"normal"},className:"__className_b539cb"}},8511:function(e,t,n){"use strict";let r,i;function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Toaster:function(){return e_}});var a,s=n(1229);let l={data:""},c=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,f=/\n+/g,p=(e,t)=>{let n="",r="",i="";for(let o in e){let a=e[o];"@"==o[0]?"i"==o[1]?n=o+" "+a+";":r+="f"==o[1]?p(a,o):o+"{"+p(a,"k"==o[1]?"":t)+"}":"object"==typeof a?r+=p(a,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=a&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=p.p?p.p(o,a):o+":"+a+";")}return n+(t&&i?t+"{"+i+"}":i)+r},m={},h=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+h(e[n]);return t}return e},b=(e,t,n,r,i)=>{var o;let a=h(e),s=m[a]||(m[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(a));if(!m[s]){let t=a!==e?e:(e=>{let t,n,r=[{}];for(;t=u.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(n=t[3].replace(f," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(f," ").trim();return r[0]})(e);m[s]=p(i?{["@keyframes "+s]:t}:t,n?"":"."+s)}let l=n&&m.g?m.g:null;return n&&(m.g=m[s]),o=m[s],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=r?o+t.data:t.data+o),s},g=(e,t,n)=>e.reduce((e,r,i)=>{let o=t[i];if(o&&o.call){let e=o(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function x(e){let t=this||{},n=e.call?e(t.p):e;return b(n.unshift?n.raw?g(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,c(t.target),t.g,t.o,t.k)}x.bind({g:1});let y,v,w,j=x.bind({k:1});function N(e,t){let n=this||{};return function(){let r=arguments;function i(o,a){let s=Object.assign({},o),l=s.className||i.className;n.p=Object.assign({theme:v&&v()},s),n.o=/ *go\d+/.test(l),s.className=x.apply(n,r)+(l?" "+l:""),t&&(s.ref=a);let c=e;return e[0]&&(c=s.as||e,delete s.as),w&&c[0]&&w(s),y(c,s)}return t?t(i):i}}function O(){let e=o(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return O=function(){return e},e}function k(){let e=o(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return k=function(){return e},e}function E(){let e=o(["\nfrom {\n  transform: scale(0) rotate(90deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n	opacity: 1;\n}"]);return E=function(){return e},e}function P(){let e=o(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return P=function(){return e},e}function _(){let e=o(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return _=function(){return e},e}function S(){let e=o(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return S=function(){return e},e}function C(){let e=o(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n	opacity: 1;\n}"]);return C=function(){return e},e}function z(){let e=o(["\n0% {\n	height: 0;\n	width: 0;\n	opacity: 0;\n}\n40% {\n  height: 0;\n	width: 6px;\n	opacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return z=function(){return e},e}function D(){let e=o(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return D=function(){return e},e}function M(){let e=o(["\n  position: absolute;\n"]);return M=function(){return e},e}function I(){let e=o(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return I=function(){return e},e}function T(){let e=o(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return T=function(){return e},e}function L(){let e=o(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return L=function(){return e},e}function A(){let e=o(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return A=function(){return e},e}function F(){let e=o(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return F=function(){return e},e}function R(){let e=o(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return R=function(){return e},e}var H=e=>"function"==typeof e,B=(e,t)=>H(e)?e(t):e,Y=(r=0,()=>(++r).toString()),J=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},U=new Map,V=e=>{if(U.has(e))return;let t=setTimeout(()=>{U.delete(e),Z({type:4,toastId:e})},1e3);U.set(e,t)},q=e=>{let t=U.get(e);t&&clearTimeout(t)},$=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&q(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return e.toasts.find(e=>e.id===n.id)?$(e,{type:1,toast:n}):$(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?V(r):e.toasts.forEach(e=>{V(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},G=[],W={toasts:[],pausedAt:void 0},Z=e=>{W=$(W,e),G.forEach(e=>{e(W)})},K={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,s.useState)(W);(0,s.useEffect)(()=>(G.push(n),()=>{let e=G.indexOf(n);e>-1&&G.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var n,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||K[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},X=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||Y()}},ee=e=>(t,n)=>{let r=X(t,e,n);return Z({type:2,toast:r}),r.id},et=(e,t)=>ee("blank")(e,t);et.error=ee("error"),et.success=ee("success"),et.loading=ee("loading"),et.custom=ee("custom"),et.dismiss=e=>{Z({type:3,toastId:e})},et.remove=e=>Z({type:4,toastId:e}),et.promise=(e,t,n)=>{let r=et.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(et.success(B(t.success,e),{id:r,...n,...null==n?void 0:n.success}),e)).catch(e=>{et.error(B(t.error,e),{id:r,...n,...null==n?void 0:n.error})}),e};var en=(e,t)=>{Z({type:1,toast:{id:e,height:t}})},er=()=>{Z({type:5,time:Date.now()})},ei=e=>{let{toasts:t,pausedAt:n}=Q(e);(0,s.useEffect)(()=>{if(n)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(n<0){t.visible&&et.dismiss(t.id);return}return setTimeout(()=>et.dismiss(t.id),n)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,n]);let r=(0,s.useCallback)(()=>{n&&Z({type:6,time:Date.now()})},[n]),i=(0,s.useCallback)((e,n)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:o}=n||{},a=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=a.findIndex(t=>t.id===e.id),l=a.filter((e,t)=>t<s&&e.visible).length;return a.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:en,startPause:er,endPause:r,calculateOffset:i}}},eo=j(O()),ea=j(k()),es=j(E()),el=N("div")(P(),e=>e.primary||"#ff4b4b",eo,ea,e=>e.secondary||"#fff",es),ec=j(_()),eu=N("div")(S(),e=>e.secondary||"#e0e0e0",e=>e.primary||"#616161",ec),ed=j(C()),ef=j(z()),ep=N("div")(D(),e=>e.primary||"#61d345",ed,ef,e=>e.secondary||"#fff"),em=N("div")(M()),eh=N("div")(I()),eb=j(T()),eg=N("div")(L(),eb),ex=e=>{let{toast:t}=e,{icon:n,type:r,iconTheme:i}=t;return void 0!==n?"string"==typeof n?s.createElement(eg,null,n):n:"blank"===r?null:s.createElement(eh,null,s.createElement(eu,{...i}),"loading"!==r&&s.createElement(em,null,"error"===r?s.createElement(el,{...i}):s.createElement(ep,{...i})))},ey=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),ev=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),ew=N("div")(A()),ej=N("div")(F()),eN=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=J()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ey(n),ev(n)];return{animation:t?"".concat(j(r)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(j(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}},eO=s.memo(e=>{let{toast:t,position:n,style:r,children:i}=e,o=t.height?eN(t.position||n||"top-center",t.visible):{opacity:0},a=s.createElement(ex,{toast:t}),l=s.createElement(ej,{...t.ariaProps},B(t.message,t));return s.createElement(ew,{className:t.className,style:{...o,...r,...t.style}},"function"==typeof i?i({icon:a,message:l}):s.createElement(s.Fragment,null,a,l))});a=s.createElement,p.p=void 0,y=a,v=void 0,w=void 0;var ek=e=>{let{id:t,className:n,style:r,onHeightUpdate:i,children:o}=e,a=s.useCallback(e=>{if(e){let n=()=>{i(t,e.getBoundingClientRect().height)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return s.createElement("div",{ref:a,className:n,style:r},o)},eE=(e,t)=>{let n=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:J()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...n?{top:0}:{bottom:0},...r}},eP=x(R()),e_=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:r,gutter:i,children:o,containerStyle:a,containerClassName:l}=e,{toasts:c,handlers:u}=ei(r);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(e=>{let r=e.position||n,a=eE(r,u.calculateOffset(e,{reverseOrder:t,gutter:i,defaultPosition:n}));return s.createElement(ek,{id:e.id,key:e.id,onHeightUpdate:u.updateHeight,className:e.visible?eP:"",style:a},"custom"===e.type?B(e.message,e):o?o(e):s.createElement(eO,{toast:e,position:r}))}))}},9976:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(1229),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return t=>r.createElement(d,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,c({key:n},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var n,{attr:i,size:o,title:l}=e,u=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,a),d=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,e=>t(e)):t(i)}}},function(e){e.O(0,[158,782,812,750,170,842,744],function(){return e(e.s=9624)}),_N_E=e.O()}]);