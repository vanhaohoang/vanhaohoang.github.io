(self.webpackChunkvanhaohoang_github_io=self.webpackChunkvanhaohoang_github_io||[]).push([[655],{3150:function(e,t,r){var a=r(9720).w_;e.exports.C=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M12,20c-4.411,0-8-3.589-8-8 s3.567-8,7.953-8C16.391,4,20,7.589,20,12S16.411,20,12,20z"}},{tag:"path",attr:{d:"M11 7H13V14H11zM11 15H13V17H11z"}}]})(e)}},9881:function(e,t,r){var a=r(9720).w_;e.exports.L=function(e){return a({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}}]})(e)}},2091:function(e,t,r){"use strict";r.d(t,{hW:function(){return o}});var a=r(7294),n=r(9881),s=r(3150),c=r(5103);const l="info",o="error",i={[l]:a.createElement(n.L,{size:18}),[o]:a.createElement(s.C,{size:18})},u={[l]:"text-blue-600 bg-blue-100",[o]:"text-red-600 bg-red-100"};t.ZP=e=>{const{children:t,type:r}=e;return t?a.createElement("div",{className:"py-3 px-4 rounded-md "+u[r]},a.createElement(c.Z,null,a.createElement("div",{className:"mr-3"},i[r]),a.createElement("div",{className:"text-sm"},t))):null}},8288:function(e,t,r){"use strict";var a=r(4578),n=r(7294),s=r(2091);let c=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={hasError:!1},r}(0,a.Z)(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}};var r=t.prototype;return r.componentDidCatch=function(e,t){console.error(e,t),this.setState({hasError:!0})},r.render=function(){const{children:e}=this.props,{hasError:t}=this.state;return t?n.createElement(s.ZP,{type:s.hW},"Component has crashed"):e},t}(n.Component);t.Z=c},9737:function(e,t,r){"use strict";var a=r(7294),n=r(4519);t.Z=e=>{const{children:t,className:r=""}=e,s="mb-6 uppercase font-extrabold "+r;return a.createElement(n.Z,{level:n._.h1,className:s},t)}},5677:function(e,t,r){"use strict";var a=r(7294);t.Z=e=>{const{withHeader:t=!0}=e,r="border py-2 px-3 mb-3 rounded border-gray-300 border-solid appearance-none",n=t?a.createElement("h1",{className:"text-grey-darkest uppercase font-bold text-xl mb-3"},"Subscribe to the Newsletter"):null;return a.createElement("div",{className:"bg-white rounded-md shadow-md p-8"},n,a.createElement("p",{className:"text-sm mb-3"},"Get my latest posts and project updates by email"),a.createElement("form",{action:"https://dev.us1.list-manage.com/subscribe/post?u=7714f14ff32085c685da2cfaa&amp;id=53ffa81463",method:"post",className:"flex flex-col"},a.createElement("input",{placeholder:"First Name",type:"text",name:"FNAME",className:r,required:!0}),a.createElement("input",{placeholder:"Email",type:"email",name:"EMAIL",className:r,required:!0}),a.createElement("div",{className:"hidden","aria-hidden":"true"},a.createElement("input",{type:"text",name:"b_7714f14ff32085c685da2cfaa_53ffa81463",tabIndex:-1})),a.createElement("input",{type:"submit",value:"Subscribe",className:"transition duration-200 ease-in-out bg-black text-white py-2 px-3 rounded shadow-sm cursor-pointer hover:bg-gray-800"})))}},6181:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var a=r(7294),n=r(578),s=r(7943),c=r(5677),l=r(8288),o=r(9737);var i=()=>a.createElement(n.Z,null,a.createElement(s.ZP,{title:"Subscribe",description:"Subscribe to get my latest posts and projects updates by email"}),a.createElement(o.Z,null,"Subscribe to the newsletter"),a.createElement("div",{className:"flex flex-row justify-start items-center"},a.createElement("div",{className:"max-w-md"},a.createElement(l.Z,null,a.createElement(c.Z,{withHeader:!1})))));var u=()=>a.createElement(i,null)}}]);
//# sourceMappingURL=component---src-pages-subscribe-index-tsx-4926807285c03273ce45.js.map