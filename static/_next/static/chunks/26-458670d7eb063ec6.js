"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1227:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(3827),s=r(4090),n=r(5810),i=r(8745),o=r(6680);function l(e){let{isOpen:t,onClose:r,onSuccess:l}=e,[c,d]=(0,s.useState)(""),[h,m]=(0,s.useState)(!1),[x,u]=(0,s.useState)(""),[g,p]=(0,s.useState)(!1),[f,w]=(0,s.useState)(null),[v,y]=(0,s.useState)("new");(0,s.useEffect)(()=>{t&&((0,n.Pi)()?y("manage"):(w(null),y("new")),d(""),u(""),p(!1))},[t]);let j=async e=>{if(e.preventDefault(),!c.trim()){u("请输入API Key");return}m(!0),u("");try{await (0,n.Gw)(c)?(p(!0),setTimeout(()=>{p(!1),l(c)},1200)):u("API Key无效，请重试")}catch(e){u("验证失败，请重试")}finally{m(!1)}},k=()=>{(0,n.o0)(),y("new"),w(null)};return t?"manage"===v?(0,a.jsx)(i.M,{children:(0,a.jsx)(o.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:(0,a.jsxs)(o.E.div,{initial:{scale:.9,y:20},animate:{scale:1,y:0},exit:{scale:.9,y:20},transition:{type:"spring",damping:25,stiffness:300},className:"bg-white dark:bg-slate-800 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl",children:[(0,a.jsxs)("div",{className:"flex items-center mb-6",children:[(0,a.jsx)("div",{className:"bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4 relative",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-green-600 dark:text-green-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),(0,a.jsx)("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"API 密钥管理"})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"您想要管理您的 API 密钥吗？"}),(0,a.jsx)("div",{className:"bg-gray-50 dark:bg-slate-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600",children:(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("span",{className:"bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-sm",children:"已验证密钥"})})})]}),(0,a.jsxs)("ul",{className:"mb-6 space-y-2 text-sm",children:[(0,a.jsxs)("li",{className:"flex items-start",children:[(0,a.jsx)("span",{className:"mr-2",children:"•"}),(0,a.jsx)("span",{className:"text-gray-600 dark:text-gray-300",children:"确定: 清除当前 API 密钥并输入新的密钥"})]}),(0,a.jsxs)("li",{className:"flex items-start",children:[(0,a.jsx)("span",{className:"mr-2",children:"•"}),(0,a.jsx)("span",{className:"text-gray-600 dark:text-gray-300",children:"取消: 保持当前设置"})]})]}),(0,a.jsxs)("div",{className:"flex justify-end gap-3",children:[(0,a.jsx)("button",{type:"button",onClick:()=>{r()},className:"px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"取消"}),(0,a.jsx)(o.E.button,{onClick:()=>{k(),r()},className:"px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 shadow-md transition-all",whileHover:{scale:1.03},whileTap:{scale:.97},children:"确定"})]})]})})}):(0,a.jsx)(i.M,{children:t&&(0,a.jsx)(o.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:(0,a.jsxs)(o.E.div,{initial:{scale:.9,y:20},animate:{scale:1,y:0},exit:{scale:.9,y:20},transition:{type:"spring",damping:25,stiffness:300},className:"bg-white dark:bg-slate-800 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl overflow-hidden relative",children:[(0,a.jsxs)("div",{className:"flex items-center mb-6",children:[(0,a.jsxs)("div",{className:"bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full mr-4 relative",children:[!g&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-indigo-600 dark:text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})}),g&&(0,a.jsx)(o.E.div,{initial:{scale:.5,opacity:0},animate:{scale:[.5,1.2,1],opacity:1,rotate:[0,10,-10,0]},transition:{duration:.5,times:[0,.6,.9,1],ease:"easeInOut"},className:"absolute inset-0 flex items-center justify-center",children:(0,a.jsx)("svg",{className:"h-6 w-6 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})})})]}),(0,a.jsx)("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"API 密钥验证"})]}),(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-300 mb-6",children:"请输入您的 API 密钥以使用 ImageFlow 服务"}),(0,a.jsxs)("form",{onSubmit:j,children:[(0,a.jsxs)("div",{className:"relative mb-6",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),(0,a.jsx)("input",{type:"password",value:c,onChange:e=>d(e.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-700 dark:text-white text-sm transition-all duration-200",placeholder:"输入您的API密钥",autoFocus:!0})]}),(0,a.jsx)(i.M,{children:x&&(0,a.jsx)(o.E.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"p-3 mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),x]})})}),(0,a.jsxs)("div",{className:"flex justify-end gap-3",children:[(0,a.jsx)("button",{type:"button",onClick:r,className:"px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"取消"}),(0,a.jsx)(o.E.button,{type:"submit",disabled:h||g,className:"px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 shadow-md disabled:opacity-70 transition-all",whileHover:{scale:1.03},whileTap:{scale:.97},children:h?(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"验证中"]}):g?(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("svg",{className:"mr-2 h-4 w-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"验证成功"]}):"验证"})]})]})]})})}):null}},8847:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(3827),s=r(8792),n=r(7007),i=r(7907),o=r(6680);function l(e){let{onApiKeyClick:t,title:r,isKeyVerified:l=!1}=e,{isDarkMode:c,toggleTheme:d}=(0,n.F)(),h=(0,i.usePathname)();return(0,a.jsxs)("div",{className:"flex items-center justify-between mb-10",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(s.default,{href:"/",className:"mr-4",children:(0,a.jsx)("div",{className:"bg-gradient-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),(0,a.jsx)("h1",{className:"text-4xl font-bold bg-clip-text text-transparent bg-gradient-primary",children:r||("/manage"===h?"图片管理":"ImageFlow")})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:["/manage"!==h&&(0,a.jsx)(s.default,{href:"/manage",className:"btn-icon",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})})}),(0,a.jsxs)("button",{onClick:t,className:"btn-icon relative",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})}),l&&(0,a.jsx)(o.E.div,{className:"absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center shadow-lg",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,boxShadow:["0 0 0 0 rgba(34, 197, 94, 0.4)","0 0 0 8px rgba(34, 197, 94, 0)","0 0 0 0 rgba(34, 197, 94, 0)"]},transition:{scale:{duration:.3,ease:"easeOut"},opacity:{duration:.3,ease:"easeOut"},boxShadow:{duration:2,repeat:1/0,ease:"easeOut"}},children:(0,a.jsx)(o.E.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,duration:.2},className:"w-2 h-2 bg-white rounded-full"})})]}),(0,a.jsx)("button",{onClick:d,className:"btn-icon",children:c?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-amber-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-700 dark:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]})]})}},7007:function(e,t,r){r.d(t,{F:function(){return s}});var a=r(4090);function s(){let[e,t]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e=localStorage.getItem("theme");e&&(t("dark"===e),document.documentElement.classList.toggle("dark","dark"===e))},[]),{isDarkMode:e,toggleTheme:()=>{let r=!e;t(r),localStorage.setItem("theme",r?"dark":"light"),document.documentElement.classList.toggle("dark",r)}}}},5810:function(e,t,r){r.d(t,{Gw:function(){return c},Lb:function(){return o},Pi:function(){return i},o0:function(){return l}});var a=r(9079);let s="imageflow_api_key",n=a.env.NEXT_PUBLIC_API_URL||"",i=()=>localStorage.getItem(s),o=e=>{localStorage.setItem(s,e)},l=()=>{localStorage.removeItem(s)},c=async e=>{try{let t=await fetch("".concat(n,"/api/validate-api-key"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!t.ok){let e=await t.text();return console.error("API Key validation failed:",{status:t.status,statusText:t.statusText,responseText:e}),!1}let r=await t.json();return!0===r.valid}catch(e){return console.error("API Key validation error:",e),!1}}},6053:function(e,t,r){r.d(t,{m:function(){return s}});let a=r(9079).env.NEXT_PUBLIC_API_URL||"";function s(e){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;try{return new URL(e,a||window.location.origin).toString()}catch(t){return console.error("URL格式错误:",t),e}}},7026:function(e,t,r){r.d(t,{v:function(){return a}});async function a(e){if(navigator.clipboard&&"function"==typeof navigator.clipboard.writeText)try{return await navigator.clipboard.writeText(e),!0}catch(e){console.error("Clipboard API 失败:",e)}try{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",t.style.pointerEvents="none",t.style.left="-999px",t.style.top="0",document.body.appendChild(t),t.focus(),t.select();let r=document.execCommand("copy");if(document.body.removeChild(t),r)return!0;console.error("execCommand 复制失败")}catch(e){console.error("文档复制方法失败:",e)}return!1}},3914:function(e,t,r){r.d(t,{hi:function(){return i}});var a=r(5810);let s=r(9079).env.NEXT_PUBLIC_API_URL||"";async function n(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,a.Pi)(),{params:i,...o}=r;try{t=new URL(e,window.location.origin)}catch(r){t=new URL(e,s||window.location.origin)}i&&Object.entries(i).forEach(e=>{let[r,a]=e;t.searchParams.append(r,a)});let l={Authorization:"Bearer ".concat(n),...r.headers},c=await fetch(t.toString(),{...o,headers:l});if(!c.ok)throw Error((await c.json().catch(()=>({}))).message||"请求失败");return c.json()}let i={request:n,get:(e,t)=>n(e,{method:"GET",params:t}),post:(e,t)=>n(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),delete:e=>n(e,{method:"DELETE"}),upload:(e,t)=>{let r=new FormData;return t.forEach(e=>{r.append("images[]",e)}),n(e,{method:"POST",body:r})}}}}]);