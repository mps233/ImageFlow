(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{4223:function(e,r,t){Promise.resolve().then(t.bind(t,7279))},7279:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return n}});var a=t(3827),s=t(4090),l=t(8792),i=t(703);function n(){let[e,r]=(0,s.useState)(!1),[t,n]=(0,s.useState)(!1),[o,d]=(0,s.useState)([]),[c,x]=(0,s.useState)(!0),[g,h]=(0,s.useState)(null),[m,u]=(0,s.useState)(!1),[y,p]=(0,s.useState)("all"),[j,w]=(0,s.useState)("all"),[b,f]=(0,s.useState)(1),[v,k]=(0,s.useState)(1),[N,L]=(0,s.useState)(0),[M,C]=(0,s.useState)(null);(0,s.useEffect)(()=>{B()},[b,y,j]);let B=async()=>{try{let e=await fetch("/api/images?page=".concat(b,"&format=").concat(y,"&orientation=").concat(j));if(!e.ok)throw Error("获取图片列表失败");let r=await e.json();d(r.images),k(r.total_pages),L(r.total_images)}catch(e){C({type:"error",message:"获取图片列表失败，请重试"})}finally{x(!1)}},S=async e=>{if(confirm("确定要删除这张图片吗？"))try{if(!(await fetch("/api/images/".concat(e),{method:"DELETE"})).ok)throw Error("删除失败");C({type:"success",message:"删除成功"}),B(),u(!1)}catch(e){C({type:"error",message:"删除失败，请重试"})}},W=async e=>{try{await navigator.clipboard.writeText(e),C({type:"success",message:"复制成功"})}catch(e){C({type:"error",message:"复制失败，请重试"})}};return(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-10",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsxs)(l.default,{href:"/",className:"flex items-center group",children:[(0,a.jsx)("div",{className:"logo-gradient w-14 h-14 rounded-2xl flex items-center justify-center mr-4 shadow-lg transform rotate-12 transition-transform group-hover:rotate-0 duration-300",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),(0,a.jsx)("h1",{className:"text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500",children:"ImageFlow"})]})}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(l.default,{href:"/",className:"p-2 mr-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-flex items-center justify-center",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-700 dark:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})})}),(0,a.jsx)("button",{onClick:()=>n(!0),className:"p-2 mr-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-700 dark:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})})}),(0,a.jsx)("button",{onClick:()=>{r(!e),document.documentElement.classList.toggle("dark")},className:"p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:e?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-amber-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]})]}),(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsxs)("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-2 text-indigo-500 dark:text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})}),"图片管理"]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsxs)("select",{value:y,onChange:e=>p(e.target.value),className:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400",children:[(0,a.jsx)("option",{value:"original",children:"原始格式"}),(0,a.jsx)("option",{value:"webp",children:"WebP"}),(0,a.jsx)("option",{value:"avif",children:"AVIF"}),(0,a.jsx)("option",{value:"gif",children:"GIF格式"}),(0,a.jsx)("option",{value:"all",children:"所有格式"})]}),(0,a.jsxs)("select",{value:j,onChange:e=>w(e.target.value),className:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400",children:[(0,a.jsx)("option",{value:"landscape",children:"横向图片"}),(0,a.jsx)("option",{value:"portrait",children:"纵向图片"}),(0,a.jsx)("option",{value:"all",children:"所有方向"})]})]})]}),c?(0,a.jsxs)("div",{className:"flex justify-center items-center py-20",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"}),(0,a.jsx)("span",{className:"ml-3 text-gray-600 dark:text-gray-400",children:"正在加载图片..."})]}):o.length>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:o.map(e=>(0,a.jsxs)("div",{className:"preview-item cursor-pointer",onClick:()=>{h(e),u(!0)},children:[(0,a.jsx)("div",{className:"aspect-square",children:(0,a.jsx)(i.default,{src:e.url,alt:e.filename,width:300,height:300,className:"object-cover"})}),(0,a.jsx)("div",{className:"p-4",children:(0,a.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400 truncate",children:e.filename})})]},e.id))}),(0,a.jsxs)("div",{className:"mt-8 flex justify-between items-center",children:[(0,a.jsxs)("p",{className:"text-gray-600 dark:text-gray-400",children:["共 ",N," 张图片"]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsxs)("button",{onClick:()=>f(e=>Math.max(1,e-1)),disabled:1===b,className:"px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 transition-all flex items-center",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})}),"上一页"]}),(0,a.jsxs)("span",{className:"px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg",children:[b," / ",v]}),(0,a.jsxs)("button",{onClick:()=>f(e=>Math.min(v,e+1)),disabled:b===v,className:"px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 transition-all flex items-center",children:["下一页",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})]})]}):(0,a.jsxs)("div",{className:"text-center py-20",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-400 text-lg",children:"暂无图片"}),(0,a.jsx)(l.default,{href:"/",className:"inline-block mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors",children:"去上传图片"})]})]}),M&&(0,a.jsx)("div",{className:"mb-8 p-4 rounded-xl ".concat("success"===M.type?"bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300":"bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300"),children:M.message}),m&&g&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-200",children:"图片详情"}),(0,a.jsx)("button",{onClick:()=>u(!1),className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,a.jsx)("div",{className:"overflow-y-auto p-6 flex-grow",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row gap-6",children:[(0,a.jsx)("div",{className:"md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl p-4 overflow-hidden",children:(0,a.jsx)(i.default,{src:g.url,alt:g.filename,width:400,height:400,className:"max-w-full max-h-[40vh] object-contain"})}),(0,a.jsx)("div",{className:"md:w-1/2",children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",children:"文件名"}),(0,a.jsx)("p",{className:"text-gray-800 dark:text-gray-200 break-all",children:g.filename})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",children:"路径"}),(0,a.jsx)("p",{className:"text-gray-800 dark:text-gray-200 break-words whitespace-normal word-wrap overflow-hidden text-sm max-w-full",children:g.path})]}),(0,a.jsxs)("div",{className:"flex space-x-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",children:"大小"}),(0,a.jsx)("p",{className:"text-gray-800 dark:text-gray-200",children:(e=>{if(0===e)return"0 B";let r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(2))+" "+["B","KB","MB","GB"][r]})(g.size)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",children:"格式"}),(0,a.jsx)("p",{className:"text-gray-800 dark:text-gray-200",children:g.format})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",children:"方向"}),(0,a.jsx)("p",{className:"text-gray-800 dark:text-gray-200",children:g.orientation})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-1",children:"图片URL"}),(0,a.jsxs)("div",{className:"flex items-center space-x-0",children:[(0,a.jsx)("input",{type:"text",value:g.url,readOnly:!0,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm overflow-hidden text-ellipsis"}),(0,a.jsx)("button",{onClick:()=>W(g.url),className:"flex-shrink-0 px-3 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 border border-blue-600 transition duration-150 ease-in-out flex items-center justify-center",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,a.jsx)("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})})]})]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsxs)("button",{onClick:()=>S(g.id),className:"w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out flex items-center justify-center",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,a.jsx)("path",{d:"M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"}),(0,a.jsx)("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),(0,a.jsx)("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),"删除图片"]})})]})})]})}),(0,a.jsx)("div",{className:"px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end",children:(0,a.jsx)("button",{onClick:()=>u(!1),className:"px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 mr-2",children:"关闭"})})]})}),t&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full",children:[(0,a.jsxs)("div",{className:"flex items-center mb-6",children:[(0,a.jsx)("div",{className:"logo-gradient w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg transform rotate-12",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})})}),(0,a.jsx)("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200",children:"API 密钥验证"})]}),(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:"请输入您的 API 密钥以使用 ImageFlow 服务"}),(0,a.jsxs)("form",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"api-key-input",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"API 密钥"}),(0,a.jsx)("input",{type:"password",id:"api-key-input",className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:from-indigo-600 hover:to-purple-700",children:"验证"})]})]})})]})}}},function(e){e.O(0,[607,971,69,744],function(){return e(e.s=4223)}),_N_E=e.O()}]);