(self.webpackChunkvanhaohoang_github_io=self.webpackChunkvanhaohoang_github_io||[]).push([[600],{3150:function(e,t,n){var r=n(9720).w_;e.exports.C=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M12,20c-4.411,0-8-3.589-8-8 s3.567-8,7.953-8C16.391,4,20,7.589,20,12S16.411,20,12,20z"}},{tag:"path",attr:{d:"M11 7H13V14H11zM11 15H13V17H11z"}}]})(e)}},9881:function(e,t,n){var r=n(9720).w_;e.exports.L=function(e){return r({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}}]})(e)}},4363:function(e,t,n){var r=n(9720).w_;e.exports.v=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}},550:function(e,t,n){var r=n(9720).w_;e.exports.T=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}},5999:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(7294);const l=r.createContext({});function a(e){const t=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}function o(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",span:"span",blockquote:"blockquote",strong:"strong"},a(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Apple has found a way to run large language models (LLMs) locally, exceeding available DRAM capacity by leveraging flash memory for LLM weight tensor storage and dynamic loading into DRAM."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://lnkd.in/gxASDYJX"},"ARXIV preprint by Apple"),' titled "Efficient Large Language Model Inference with Limited Memory" introduces this innovative technique.'),"\n",r.createElement(t.li,null,"By dynamically loading parameters from flash memory, Apple addresses the challenge of running models that are too large for DRAM alone."),"\n",r.createElement(t.li,null,"This method involves exploiting sparsity in the FeedForward Network (FFN) layers, using selective loading of parameters, sparsity prediction, and static memory preallocation."),"\n"),"\n",r.createElement(t.h2,{id:"key-insights",style:{position:"relative"}},"Key Insights",r.createElement(t.a,{href:"#key-insights","aria-label":"key insights permalink",className:"gatsby-remark-autolink-header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Standard methods require loading the entire model into DRAM, but Apple's approach selectively loads parameters from flash memory as needed."),"\n",r.createElement(t.li,null,"The model utilizes the HuggingFace transformers, KV caching, and a 32-thread reading process to optimize performance."),"\n"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"See the full paper on ",r.createElement(t.a,{href:"https://lnkd.in/gxASDYJX"},"ARXIV"),"."),"\n"),"\n",r.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nI3uYT3quxQ?si=TRD-2-tpR1T7Wb-n",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",r.createElement(t.h2,{id:"memory-allocation-breakdown",style:{position:"relative"}},"Memory Allocation Breakdown",r.createElement(t.a,{href:"#memory-allocation-breakdown","aria-label":"memory allocation breakdown permalink",className:"gatsby-remark-autolink-header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"The memory retained in DRAM for Apple's model includes multiple components:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.strong,null,"Embeddings"),": 3% of the model size."),"\n",r.createElement(t.li,null,r.createElement(t.strong,null,"Attention Model weights"),": 32.3%."),"\n",r.createElement(t.li,null,r.createElement(t.strong,null,"Feed Forward Network (FFN)"),": 15.5% (calculated as 0.24 × 64.62)."),"\n",r.createElement(t.li,null,r.createElement(t.strong,null,"Predictor"),": 1.25%."),"\n"),"\n",r.createElement(t.p,null,"The total DRAM usage amounts to 52.1% of the model size."),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"Hint: The Mixture of Experts (MoE) model, which has sparse structures in its FFN layer, could combine well with Apple’s method, allowing even larger MoEs to run on personal devices."),"\n"),"\n",r.createElement(t.p,null,"Source: ",r.createElement(t.a,{href:"https://lnkd.in/gXtXtubx"},"Apple’s ARXIV paper")),"\n",r.createElement(t.h2,{id:"deep-dive",style:{position:"relative"}},"Deep Dive:",r.createElement(t.a,{href:"#deep-dive","aria-label":"deep dive permalink",className:"gatsby-remark-autolink-header-anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://lnkd.in/gxASDYJX"},"Full ARXIV Preprint")),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},a(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},c=n(578),s=n(4363),m=n(550),u=n(9737),d=n(5103),h=n(2717),p=n(8288);var f=e=>{var t,n,l,a,o,i,c;const{post:f,children:v}=e,g=null!=f&&null!==(t=f.mdx)&&void 0!==t&&null!==(n=t.frontmatter)&&void 0!==n&&n.date?r.createElement(d.Z,{className:"mr-6 mb-6 text-gray-500 text-sm"},r.createElement(s.v,{className:"mr-1"}),null==f||null===(l=f.mdx)||void 0===l?void 0:l.frontmatter.date):null,E=null!=f&&null!==(a=f.mdx)&&void 0!==a&&a.timeToRead?r.createElement(d.Z,null,r.createElement(m.T,{className:"mr-1"}),(0,h.j)(null==f||null===(o=f.mdx)||void 0===o?void 0:o.timeToRead)," min to read"):null;return r.createElement("div",{className:"flex flex-col items-center"},r.createElement("article",{className:"w-full prose prose-sm sm:prose overflow-hidden prose-red",style:{maxWidth:"860px"}},r.createElement(u.Z,null,(null===(i=f.mdx)||void 0===i||null===(c=i.frontmatter)||void 0===c?void 0:c.title)||""),r.createElement(d.Z,null,g,E),r.createElement(p.Z,null,v)))},v=n(7943),g=n(5677);var E=e=>{var t,n,l,a,o,i,s,m,u,d,h;const{post:E,children:y}=e;return r.createElement(c.Z,null,r.createElement(v.ZP,{title:(null===(t=E.mdx)||void 0===t||null===(n=t.frontmatter)||void 0===n?void 0:n.title)||"",titleMode:v.H0,description:(null===(l=E.mdx)||void 0===l||null===(a=l.frontmatter)||void 0===a?void 0:a.summary)||"",image:(null===(o=E.mdx)||void 0===o||null===(i=o.frontmatter)||void 0===i||null===(s=i.cover)||void 0===s||null===(m=s.childImageSharp)||void 0===m||null===(u=m.gatsbyImageData)||void 0===u||null===(d=u.images)||void 0===d||null===(h=d.fallback)||void 0===h?void 0:h.src)||"",type:v.Sp}),r.createElement(f,{post:E},y),r.createElement("div",{className:"flex flex-row justify-center items-center mt-16"},r.createElement("div",{className:"max-w-md"},r.createElement(p.Z,null,r.createElement(g.Z,null)))))};const y=e=>{const{data:t,children:n}=e;return r.createElement(E,{post:t},n)};function b(e){return r.createElement(y,e,r.createElement(i,e))}},2091:function(e,t,n){"use strict";n.d(t,{hW:function(){return c}});var r=n(7294),l=n(9881),a=n(3150),o=n(5103);const i="info",c="error",s={[i]:r.createElement(l.L,{size:18}),[c]:r.createElement(a.C,{size:18})},m={[i]:"text-blue-600 bg-blue-100",[c]:"text-red-600 bg-red-100"};t.ZP=e=>{const{children:t,type:n}=e;return t?r.createElement("div",{className:"py-3 px-4 rounded-md "+m[n]},r.createElement(o.Z,null,r.createElement("div",{className:"mr-3"},s[n]),r.createElement("div",{className:"text-sm"},t))):null}},8288:function(e,t,n){"use strict";var r=n(4578),l=n(7294),a=n(2091);let o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hasError:!1},n}(0,r.Z)(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}};var n=t.prototype;return n.componentDidCatch=function(e,t){console.error(e,t),this.setState({hasError:!0})},n.render=function(){const{children:e}=this.props,{hasError:t}=this.state;return t?l.createElement(a.ZP,{type:a.hW},"Component has crashed"):e},t}(l.Component);t.Z=o},9737:function(e,t,n){"use strict";var r=n(7294),l=n(4519);t.Z=e=>{const{children:t,className:n=""}=e,a="mb-6 uppercase font-extrabold "+n;return r.createElement(l.Z,{level:l._.h1,className:a},t)}},5677:function(e,t,n){"use strict";var r=n(7294);t.Z=e=>{const{withHeader:t=!0}=e,n="border py-2 px-3 mb-3 rounded border-gray-300 border-solid appearance-none",l=t?r.createElement("h1",{className:"text-grey-darkest uppercase font-bold text-xl mb-3"},"Subscribe to the Newsletter"):null;return r.createElement("div",{className:"bg-white rounded-md shadow-md p-8"},l,r.createElement("p",{className:"text-sm mb-3"},"Get my latest posts and project updates by email"),r.createElement("form",{action:"https://gmail.us8.list-manage.com/subscribe?u=5adef344d2c51668e5ca2569f&id=b128317c3c",method:"post",className:"flex flex-col"},r.createElement("input",{placeholder:"First Name",type:"text",name:"FNAME",className:n,required:!0}),r.createElement("input",{placeholder:"Email",type:"email",name:"EMAIL",className:n,required:!0}),r.createElement("div",{className:"hidden","aria-hidden":"true"},r.createElement("input",{type:"text",name:"b_7714f14ff32085c685da2cfaa_53ffa81463",tabIndex:-1})),r.createElement("input",{type:"submit",value:"Subscribe",className:"transition duration-200 ease-in-out bg-black text-white py-2 px-3 rounded shadow-sm cursor-pointer hover:bg-gray-800"})))}},2717:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});const r=e=>{if("number"!=typeof e)return null;return Math.ceil(1*e)||1}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2024-efficient-llm-inference-with-limited-memory-by-apple-index-mdx-36f24af65bc2fe9921c7.js.map