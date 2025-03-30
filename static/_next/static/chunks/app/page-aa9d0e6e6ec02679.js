(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5140:function(e,t,s){Promise.resolve().then(s.bind(s,5699))},5699:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var r=s(7437),a=s(2265),l=s(5017),i=s(6329),n=s(2896),o=s(3521),d=s(3145);function c(e){let{onUpload:t,isUploading:s,maxUploadCount:l=10}=e,[i,n]=(0,a.useState)([]),[o,c]=(0,a.useState)([]),[x,h]=(0,a.useState)(!1),[m,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(x&&!s){n([]),c([]),u(!1);let e=document.getElementById("file-input");e&&(e.value="")}h(s)},[s,x]);let g=e=>{if(e.length>l){let t=e.slice(0,l);n(t),u(!0),p(t)}else n(e),u(!1),p(e)},p=e=>{let t=e.map(e=>({id:Math.random().toString(36).substring(2,11),url:"",file:e}));t.forEach((t,s)=>{let r=new FileReader;r.onload=e=>{c(s=>{let r=[...s],a=r.findIndex(e=>e.id===t.id);if(-1!==a){var l;r[a]={...r[a],url:null===(l=e.target)||void 0===l?void 0:l.result}}return r})},r.readAsDataURL(e[s])}),c(t)},v=e=>{let t=o.filter(t=>t.id!==e);c(t);let s=i.filter(e=>t.some(t=>t.file===e));n(s),u(s.length>=l)},w=async e=>{e.preventDefault(),0!==i.length&&await t(i)};return(0,r.jsxs)("div",{className:"card p-8 mb-8",children:[(0,r.jsxs)("h2",{className:"text-2xl font-semibold mb-6 flex items-center",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-2 text-indigo-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),"上传图片"]}),(0,r.jsxs)("form",{onSubmit:w,children:[(0,r.jsxs)("div",{className:"drop-zone mb-6 flex flex-col items-center justify-center cursor-pointer",onDrop:e=>{e.preventDefault(),g(Array.from(e.dataTransfer.files))},onDragOver:e=>{e.preventDefault(),e.currentTarget.classList.add("active")},onDragLeave:e=>{e.preventDefault(),e.currentTarget.classList.remove("active")},children:[(0,r.jsx)("div",{className:"mb-4 bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-full",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-indigo-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})})}),(0,r.jsx)("p",{className:"text-lg font-medium mb-2",children:"拖放多张图片到这里"}),(0,r.jsx)("p",{className:"text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4",children:"或者点击选择文件（可多选）"}),(0,r.jsxs)("p",{className:"text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4",children:["最多可选择 ",l," 张图片"]}),(0,r.jsx)("input",{type:"file",id:"file-input",className:"hidden",accept:"image/*",multiple:!0,onChange:e=>{g(Array.from(e.target.files||[]))}}),(0,r.jsx)("button",{type:"button",onClick:()=>{var e;return null===(e=document.getElementById("file-input"))||void 0===e?void 0:e.click()},className:"btn-primary px-4 py-2",children:"选择图片"})]}),m&&(0,r.jsx)("div",{className:"mb-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300",children:(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2 mt-0.5 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),(0,r.jsxs)("span",{children:[(0,r.jsx)("strong",{children:"超出上传限制："}),"一次最多只能上传 ",l," 张图片。已自动选择前 ",l," 张。"]})]})}),o.length>0&&(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-3",children:[(0,r.jsxs)("h3",{className:"font-medium",children:["已选择 ",o.length," 张图片"]}),(0,r.jsx)("button",{type:"button",onClick:()=>{n([]),c([]),u(!1);let e=document.getElementById("file-input");e&&(e.value="")},className:"text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",children:"清除全部"})]}),(0,r.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",children:o.map(e=>(0,r.jsxs)("div",{className:"relative group rounded-lg overflow-hidden bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border",children:[e.url?(0,r.jsxs)("div",{className:"aspect-square relative",children:[(0,r.jsx)(d.default,{src:e.url,alt:e.file.name,fill:!0,className:"object-cover"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200"}),(0,r.jsx)("button",{type:"button",onClick:()=>v(e.id),className:"absolute top-1 right-1 bg-white/80 dark:bg-gray-800/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-gray-700 dark:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}):(0,r.jsx)("div",{className:"aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"}),(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 5a2 2 0 10-4 0 2 2 0 004 0z"})]})}),(0,r.jsx)("div",{className:"p-2 text-xs truncate",children:e.file.name})]},e.id))})]}),i.length>0&&(0,r.jsx)("button",{type:"submit",disabled:s,className:"w-full py-3 btn-primary disabled:opacity-50",children:s?"上传中...":"上传图片"})]})]})}var x=s(9597);function h(e){let{type:t,message:s}=e;return(0,r.jsx)(x.E.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"mb-8 p-4 rounded-xl ".concat("success"===t?"bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300":"warning"===t?"bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300":"bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"),children:s})}function m(e){let{progress:t}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"bg-light-bg-primary dark:bg-dark-bg-primary rounded-xl overflow-hidden mb-4",children:(0,r.jsx)("div",{className:"h-2 bg-gradient-primary transition-all duration-300",style:{width:"".concat(t,"%")}})}),(0,r.jsxs)("p",{className:"text-sm text-light-text-secondary dark:text-dark-text-secondary text-center",children:["上传进度: ",Math.round(t),"%"]})]})}var u=s(8614),g=s(3594),p=s(1214);function v(e){let{isOpen:t,onClose:s,image:l,onDelete:i}=e,[n,o]=(0,a.useState)(null),[c,h]=(0,a.useState)(!1),[m,v]=(0,a.useState)(!1);if(!l||"success"!==l.status||!l.urls)return null;let w=(e,t,s)=>{s&&s.stopPropagation(),(0,p.v)(e).then(e=>{e?(o({type:t}),setTimeout(()=>{o(null)},2e3)):console.error("复制失败")}).catch(e=>{console.error("复制失败:",e)})},b=e=>e?(0,g.m)(e):"",f=b(l.urls.original),j=b(l.urls.webp),k=b(l.urls.avif),y=async()=>{if(l&&i)try{var e;v(!0);let t=l.id;if(!t&&(null===(e=l.urls)||void 0===e?void 0:e.original)){let e=l.urls.original.split("/");t=e[e.length-1].split(".")[0]}if(!t)throw Error("无法获取图像ID");await i(t),s()}catch(e){console.error("删除失败:",e)}finally{v(!1)}};return(0,r.jsx)(u.M,{children:t&&(0,r.jsx)(x.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:s,children:(0,r.jsxs)(x.E.div,{initial:{scale:.9,y:20},animate:{scale:1,y:0},exit:{scale:.9,y:20},transition:{type:"spring",damping:25,stiffness:300},className:"bg-white dark:bg-slate-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden",onClick:e=>e.stopPropagation(),children:[(0,r.jsxs)("div",{className:"flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold",children:l.filename}),(0,r.jsx)("button",{onClick:s,className:"p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,r.jsx)("div",{className:"overflow-y-auto max-h-[calc(90vh-5rem)]",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,r.jsx)("div",{className:"w-full md:w-2/5 p-4 md:border-r border-slate-200 dark:border-slate-700 flex items-center",children:(0,r.jsx)(x.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.1},className:"relative w-full h-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700",style:{height:"400px"},children:(0,r.jsx)(d.default,{src:f,alt:l.filename,fill:!0,sizes:"(max-width: 768px) 100vw, 400px",className:"object-contain"})})}),(0,r.jsxs)("div",{className:"flex-1 p-4",children:[(0,r.jsx)("h4",{className:"text-lg font-medium mb-4",children:"可用格式"}),(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)(x.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"})}),(0,r.jsx)("div",{className:"font-medium",children:"原始图片"})]}),(0,r.jsxs)("div",{className:"rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center group relative hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-colors duration-200",children:[(0,r.jsx)("div",{className:"flex-1 px-4 py-3 text-sm font-mono overflow-hidden text-ellipsis",children:f}),(0,r.jsxs)("button",{onClick:e=>w(f,"original",e),className:"p-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-r-lg transition-colors duration-200 relative",title:"复制链接",children:[n&&"original"===n.type?(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}):(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),n&&"original"===n.type&&(0,r.jsx)("span",{className:"absolute -top-8 right-0 bg-black/70 text-white text-xs rounded px-2 py-1",children:"已复制!"})]})]})]}),j&&(0,r.jsxs)(x.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-purple-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),(0,r.jsx)("div",{className:"font-medium",children:"WebP 格式"})]}),(0,r.jsxs)("div",{className:"rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center group relative hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-colors duration-200",children:[(0,r.jsx)("div",{className:"flex-1 px-4 py-3 text-sm font-mono overflow-hidden text-ellipsis",children:j}),(0,r.jsxs)("button",{onClick:e=>w(j,"webp",e),className:"p-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-r-lg transition-colors duration-200 relative",title:"复制链接",children:[n&&"webp"===n.type?(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}):(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),n&&"webp"===n.type&&(0,r.jsx)("span",{className:"absolute -top-8 right-0 bg-black/70 text-white text-xs rounded px-2 py-1",children:"已复制!"})]})]})]}),k&&(0,r.jsxs)(x.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),(0,r.jsx)("div",{className:"font-medium",children:"AVIF 格式"})]}),(0,r.jsxs)("div",{className:"rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center group relative hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-colors duration-200",children:[(0,r.jsx)("div",{className:"flex-1 px-4 py-3 text-sm font-mono overflow-hidden text-ellipsis",children:k}),(0,r.jsxs)("button",{onClick:e=>w(k,"avif",e),className:"p-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-r-lg transition-colors duration-200 relative",title:"复制链接",children:[n&&"avif"===n.type?(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}):(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),n&&"avif"===n.type&&(0,r.jsx)("span",{className:"absolute -top-8 right-0 bg-black/70 text-white text-xs rounded px-2 py-1",children:"已复制!"})]})]})]}),(0,r.jsxs)(x.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-amber-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})}),(0,r.jsx)("div",{className:"font-medium",children:"Markdown 格式"})]}),(0,r.jsxs)("div",{className:"rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center group relative hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-colors duration-200",children:[(0,r.jsxs)("div",{className:"flex-1 px-4 py-3 text-sm font-mono overflow-hidden text-ellipsis",children:["![",l.filename,"](",f,")"]}),(0,r.jsxs)("button",{onClick:e=>w("![".concat(l.filename,"](").concat(f,")"),"markdown",e),className:"p-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-r-lg transition-colors duration-200 relative",title:"复制链接",children:[n&&"markdown"===n.type?(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}):(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),n&&"markdown"===n.type&&(0,r.jsx)("span",{className:"absolute -top-8 right-0 bg-black/70 text-white text-xs rounded px-2 py-1",children:"已复制!"})]})]})]})]})]})]})}),(0,r.jsxs)(x.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},className:"p-4 border-t border-slate-200 dark:border-slate-700 flex justify-between",children:[i&&(0,r.jsx)("div",{children:c?(0,r.jsxs)("div",{className:"flex space-x-2",children:[(0,r.jsx)("button",{onClick:()=>h(!1),className:"px-3 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-sm",disabled:m,children:"取消"}),(0,r.jsx)("button",{onClick:y,className:"px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm flex items-center",disabled:m,children:m?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"处理中"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),"确认删除"]})})]}):(0,r.jsxs)("button",{onClick:()=>h(!0),className:"px-4 py-2 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors font-medium flex items-center",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),"删除图片"]})}),(0,r.jsx)("button",{onClick:s,className:"px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors font-medium",children:"关闭"})]})]})})})}function w(e){let{isOpen:t,results:s,onClose:l,onDelete:i}=e,[n,o]=(0,a.useState)(null),[c,h]=(0,a.useState)(!1),[m,g]=(0,a.useState)("all"),p=s.filter(e=>"success"===e.status),w=s.filter(e=>"error"===e.status),b="all"===m?s:"success"===m?p:w,f=e=>{o(e),h(!0)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.M,{children:t&&(0,r.jsxs)(x.E.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:30,stiffness:300},className:"fixed top-0 right-0 w-full sm:w-96 h-full bg-white dark:bg-slate-900 shadow-xl z-30 border-l border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-indigo-500 to-purple-600 text-white",children:[(0,r.jsxs)("h2",{className:"text-lg font-semibold flex items-center",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2 text-white opacity-90",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"})}),"媒体库 (",s.length,")"]}),(0,r.jsx)("button",{onClick:l,className:"p-2 rounded-full hover:bg-white/10 transition-colors",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,r.jsxs)("div",{className:"flex border-b border-slate-200 dark:border-slate-700",children:[(0,r.jsxs)("button",{onClick:()=>g("all"),className:"flex-1 py-3 px-4 text-sm font-medium transition-colors relative ".concat("all"===m?"text-indigo-600 dark:text-indigo-400":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"),children:["全部 (",s.length,")","all"===m&&(0,r.jsx)(x.E.div,{layoutId:"tab-indicator",className:"absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"})]}),(0,r.jsxs)("button",{onClick:()=>g("success"),className:"flex-1 py-3 px-4 text-sm font-medium transition-colors relative ".concat("success"===m?"text-green-600 dark:text-green-400":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"),children:["成功 (",p.length,")","success"===m&&(0,r.jsx)(x.E.div,{layoutId:"tab-indicator",className:"absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 dark:bg-green-400"})]}),(0,r.jsxs)("button",{onClick:()=>g("error"),className:"flex-1 py-3 px-4 text-sm font-medium transition-colors relative ".concat("error"===m?"text-red-600 dark:text-red-400":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"),children:["失败 (",w.length,")","error"===m&&(0,r.jsx)(x.E.div,{layoutId:"tab-indicator",className:"absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 dark:bg-red-400"})]})]}),(0,r.jsx)("div",{className:"flex-1 overflow-y-auto p-4",children:0===b.length?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center h-full text-center text-slate-500 dark:text-slate-400 p-6",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16 mb-4 text-slate-300 dark:text-slate-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),(0,r.jsx)("p",{className:"text-lg font-medium mb-2",children:"暂无图片"}),(0,r.jsx)("p",{className:"text-sm",children:"all"===m?"上传完成的图片将会显示在这里":"success"===m?"没有成功上传的图片":"没有上传失败的图片"})]}):(0,r.jsx)("div",{className:"space-y-4",children:(0,r.jsx)("div",{className:"grid grid-cols-2 gap-3",children:b.map((e,t)=>{var s;return(0,r.jsx)(x.E.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.05*t},className:"relative rounded-lg overflow-hidden border ".concat("success"===e.status?"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800":"border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20"," shadow-sm hover:shadow-md transition-all cursor-pointer group"),onClick:()=>"success"===e.status&&f(e),children:"success"===e.status?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"aspect-square relative bg-slate-50 dark:bg-slate-900",children:[(null===(s=e.urls)||void 0===s?void 0:s.original)&&(0,r.jsx)(d.default,{src:e.urls.original,alt:e.filename,fill:!0,className:"object-cover group-hover:scale-105 transition-transform duration-300",sizes:"(max-width: 768px) 50vw, 33vw"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),(0,r.jsx)("div",{className:"absolute top-1 right-1",children:(0,r.jsx)("span",{className:"text-xs px-1.5 py-0.5 bg-green-500/80 text-white rounded-full",children:"完成"})}),(0,r.jsx)("div",{className:"absolute bottom-0 left-0 right-0 p-2 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300",children:(0,r.jsx)("p",{className:"text-xs truncate",title:e.filename,children:e.filename})})]})}):(0,r.jsx)("div",{className:"p-3 h-full flex flex-col",children:(0,r.jsxs)("div",{className:"flex items-start space-x-2",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-red-500 flex-shrink-0 mt-0.5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium text-sm text-red-600 dark:text-red-400",children:e.filename}),(0,r.jsx)("p",{className:"text-xs text-red-500 dark:text-red-300 mt-1",children:e.message})]})]})})},e.id||"".concat(m,"-").concat(t))})})})})]})}),(0,r.jsx)(v,{image:n,isOpen:c,onClose:()=>{h(!1)},onDelete:i}),(0,r.jsx)(u.M,{children:t&&(0,r.jsx)(x.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-20 sm:block hidden",onClick:l})})]})}let b=parseInt("20",10);function f(){let[e,t]=(0,a.useState)(!1),[s,d]=(0,a.useState)(!1),[u,g]=(0,a.useState)(0),[p,v]=(0,a.useState)(null),[f,j]=(0,a.useState)([]),[k,y]=(0,a.useState)(!1),[N,L]=(0,a.useState)(!1),[C,M]=(0,a.useState)(10);(0,a.useEffect)(()=>{f.length>0&&!k&&y(!0)},[f]),(0,a.useEffect)(()=>{(async()=>{let e=(0,l.Pi)();if(!e){t(!0),L(!1);return}await (0,l.Gw)(e)?L(!0):(t(!0),L(!1),v({type:"error",message:"API Key无效,请重新验证"}))})()},[]),(0,a.useEffect)(()=>{(async()=>{try{let e=await i.hi.request("/api/config");M(e.maxUploadCount)}catch(e){console.error("Failed to fetch config:",e),M(10)}})()},[]);let B=async e=>{if(!(0,l.Pi)()){t(!0);return}d(!0),g(0),v(null);try{let t=setInterval(()=>{g(e=>e>=90?(clearInterval(t),e):e+5)},300),s=await i.hi.upload("/api/upload",e);clearInterval(t),g(100);let r=s.results.map(e=>{var t,s;let r=Math.random().toString(36).substring(2),a=(null===(t=e.urls)||void 0===t?void 0:t.original)||"";if(null===(s=e.urls)||void 0===s?void 0:s.original){let t=e.urls.original.split("/"),s=t[t.length-1];s.includes(".")&&(r=s.split(".")[0])}return{...e,id:r,path:a}});j(r);let a=r.filter(e=>"success"===e.status).length,l=r.filter(e=>"error"===e.status).length,n=r.length;v({type:0===l?"success":"warning",message:"上传完成：共".concat(n,"张，").concat(a,"张成功，").concat(l,"张失败")})}catch(t){let e="上传失败，请重试";t instanceof Error&&(e=t.message.includes("超过最大上传数量")||t.message.includes("maximum upload")?"上传失败：超过最大上传数量限制（".concat(C,"张图片）"):"上传失败：".concat(t.message)),v({type:"error",message:e})}finally{d(!1),setTimeout(()=>g(0),1e3)}},E=async e=>{try{var t;let s=f.find(t=>t.id===e);if(!s||!(null===(t=s.urls)||void 0===t?void 0:t.original))return;let r=s.urls.original.split("/"),a=r[r.length-1].split(".")[0],l=await i.hi.post("/api/delete-image",{id:a});l.success?(j(t=>t.filter(t=>t.id!==e)),f.length<=1&&y(!1),v({type:"success",message:l.message})):v({type:"error",message:l.message})}catch(e){console.error("删除失败:",e),v({type:"error",message:"删除失败，请重试"})}};return(0,r.jsxs)("div",{className:"max-w-4xl mx-auto px-6 py-8",children:[(0,r.jsx)(o.Z,{onApiKeyClick:()=>t(!0),isKeyVerified:N}),(0,r.jsx)(c,{onUpload:B,isUploading:s,maxUploadCount:b}),p&&(0,r.jsx)(h,{type:p.type,message:p.message}),f.length>0&&!k&&(0,r.jsx)(x.E.button,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},whileHover:{scale:1.1},onClick:()=>y(!0),className:"fixed bottom-6 right-6 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-20 flex items-center justify-center",title:"查看已上传图片",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"})}),(0,r.jsx)("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",children:f.length})]})}),s&&(0,r.jsx)(m,{progress:u}),(0,r.jsx)(w,{isOpen:k,results:f,onClose:()=>y(!1),onDelete:E}),(0,r.jsx)(n.Z,{isOpen:e,onClose:()=>t(!1),onSuccess:e=>{(0,l.Lb)(e),t(!1),L(!0),v({type:"success",message:"API Key验证成功！"})}})]})}}},function(e){e.O(0,[654,75,971,117,744],function(){return e(e.s=5140)}),_N_E=e.O()}]);