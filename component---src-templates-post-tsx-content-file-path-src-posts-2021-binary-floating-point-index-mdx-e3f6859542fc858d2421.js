(self.webpackChunkvanhaohoang_github_io=self.webpackChunkvanhaohoang_github_io||[]).push([[5174],{3150:function(e,n,t){var a=t(9720).w_;e.exports.C=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M12,20c-4.411,0-8-3.589-8-8 s3.567-8,7.953-8C16.391,4,20,7.589,20,12S16.411,20,12,20z"}},{tag:"path",attr:{d:"M11 7H13V14H11zM11 15H13V17H11z"}}]})(e)}},9881:function(e,n,t){var a=t(9720).w_;e.exports.L=function(e){return a({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}}]})(e)}},4363:function(e,n,t){var a=t(9720).w_;e.exports.v=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}},550:function(e,n,t){var a=t(9720).w_;e.exports.T=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}},5633:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var a=t(1151),s=t(7294),l=t(6531),o=t(5785);var r=e=>{const{bit:n,onClick:t,color:a="#000000",detached:l=!1}=e,o={fontSize:"2rem",fontFamily:"monospace",marginTop:"0px",marginRight:l?"7px":"0px",marginBottom:"10px",marginLeft:"-1px",padding:"0px 7px 0px 7px",borderStyle:"solid",borderWidth:"1px",borderColor:a,color:a,lineHeight:"normal",outline:"0",display:"block",boxSizing:"border-box"};return s.createElement("button",{type:"button",onClick:t,style:o,className:"post--2021--binary-floating-point--bit-button"},n)};const i="#ff5b5b",c="#83b925",p="#4a87ff";var u=e=>{const{precision:n,onChange:t,bits:a}=e,l=a.map(((e,l)=>{let u=p;l<n.signBitsCount?u=i:l<n.signBitsCount+n.exponentBitsCount&&(u=c);let m=!1;l!==n.signBitsCount-1&&l!==n.signBitsCount+n.exponentBitsCount-1||(m=!0);return s.createElement(r,{key:l,bit:e,onClick:()=>{const e=(0,o.Z)(a);e[l]=e[l]?0:1,t&&t(e)},color:u,detached:m})}));return s.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}},l)};const m={half:{signBitsCount:1,exponentBitsCount:5,fractionBitsCount:10},single:{signBitsCount:1,exponentBitsCount:8,fractionBitsCount:23},double:{signBitsCount:1,exponentBitsCount:11,fractionBitsCount:52}};function d(e,n){const{signBitsCount:t,exponentBitsCount:a}=n,s=(-1)**e[0],l=2**(a-1)-1;return s*2**(e.slice(t,t+a).reduce(((e,n,t)=>e+n*2**(a-t-1)),0)-l)*(1+e.slice(t+a).reduce(((e,n,t)=>e+n*2**-(t+1)),0))}function g(e){return d(e,m.half)}function h(e){const{children:n,fontSize:t="1em",color:a="black"}=e,l=s.createElement("div",{style:{fontSize:"2rem",fontFamily:"monospace",color:a}},"↓");return s.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1,fontFamily:"monospace"}},l,s.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",fontSize:t,color:a}},n))}var f=e=>{const{precision:n=m.half}=e,{0:t,1:a}=(0,s.useState)([1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0]),{0:l,1:o}=(0,s.useState)(null);(0,s.useEffect)((()=>{o(g(t))}),[t]);const r=s.createElement(u,{onChange:e=>{a(e),o(g(e))},bits:t,precision:n}),d=s.createElement(s.Fragment,null," "),f=(-1)**t[0],A=l?s.createElement(h,{color:i},s.createElement("div",null,"sign = -1",s.createElement("sup",null,t[0])," = ",f)):null,b=t.slice(n.signBitsCount,n.signBitsCount+n.exponentBitsCount),E=t.slice(n.signBitsCount+n.exponentBitsCount),k=2**(n.exponentBitsCount-1)-1,y=b.reduce(((e,n)=>e+n),0),w=E.reduce(((e,n)=>e+n),0),v=b.map(((e,t)=>e?s.createElement("span",{key:t},"2",s.createElement("sup",null,n.exponentBitsCount-t-1)):null)).filter((e=>null!==e)).map(((e,n)=>{const t=n<y-1?s.createElement("span",null,d,"+",d):null;return s.createElement("span",{key:n},e,t)})),x=E.map(((e,n)=>e?s.createElement("span",{key:n},"2",s.createElement("sup",null,-(n+1))):null)).filter((e=>null!==e)).map(((e,n)=>{const t=n<w-1?s.createElement("span",null,d,"+",d):null;return s.createElement("span",{key:n},e,t)})),B=t?b.reduce(((e,t,a)=>t?e+2**(n.exponentBitsCount-a-1):e),0):null,S=t?E.reduce(((e,n,t)=>n?e+2**-(t+1):e),0):null,I=t&&null!==B?B-k:null,C=l?s.createElement(h,{color:c},s.createElement("div",{style:{display:"flex",flexDirection:"column"}},s.createElement("div",null,"bias = 2",s.createElement("sup",null,"k-1")," - 1 = 2",s.createElement("sup",null,n.exponentBitsCount,"-1")," - 1 = ",k),s.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},s.createElement("div",null,"exponent"),s.createElement("div",null,d,"=",d),v,0!==B?s.createElement("div",null,d,"=",d):null,B),s.createElement("div",null,"biased_exponent = exponent - bias = ",B," - ",k," = ",I))):null,N=l?s.createElement(h,{color:p},s.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},s.createElement("div",null,"fraction"),s.createElement("div",null,d,"=",d),x,0!==S?s.createElement("div",null,d,"=",d):null,S)):null,_=l?s.createElement(s.Fragment,null,s.createElement(h,null,s.createElement("div",null,"result",d,"=",d,s.createElement("span",{style:{color:i}},f),d,"×",d,"2",s.createElement("sup",null,s.createElement("span",{style:{color:c}},I)),d,"×",d,"(2",s.createElement("sup",null,"0")," + ",s.createElement("span",{style:{color:p}},S),")")),s.createElement(h,{fontSize:"2rem"},s.createElement("div",null,l))):null;return s.createElement("div",{style:{display:"flex",flexDirection:"column"}},r,A,C,N,_)};function A(e){const n=Object.assign({blockquote:"blockquote",p:"p",span:"span",a:"a",ul:"ul",li:"li",strong:"strong",h2:"h2"},(0,a.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.blockquote,null,"\n",s.createElement(n.p,null,"Anti-intuitive 🥸 but yet interactive example of how the floating-point numbers like -27.156 are stored in binary format in a computer's memory"),"\n"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1000px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAc/TMwoB/8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIQAAP/2gAIAQEAAQUC3RAqQz//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAYEAACAwAAAAAAAAAAAAAAAAAAAQIgQf/aAAgBAQAGPwIi9df/xAAYEAEAAwEAAAAAAAAAAAAAAAABEBFhAP/aAAgBAQABPyHrQYZKULVj/9oADAMBAAIAAwAAABCAD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQACAQUAAAAAAAAAAAAAAAEQESEAQVGBsf/aAAgBAQABPxALQ50XN826eTjyMFt1H//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Binary representation of floating point numbers"\n        title=""\n        src="/static/8e4f905a6b572efb5ada8bdbeda6dff6/a2510/01-cover-02.jpg"\n        srcset="/static/8e4f905a6b572efb5ada8bdbeda6dff6/0479a/01-cover-02.jpg 250w,\n/static/8e4f905a6b572efb5ada8bdbeda6dff6/41099/01-cover-02.jpg 500w,\n/static/8e4f905a6b572efb5ada8bdbeda6dff6/a2510/01-cover-02.jpg 1000w,\n/static/8e4f905a6b572efb5ada8bdbeda6dff6/c58a3/01-cover-02.jpg 1500w,\n/static/8e4f905a6b572efb5ada8bdbeda6dff6/0f98f/01-cover-02.jpg 1920w"\n        sizes="(max-width: 1000px) 100vw, 1000px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement("center",null,s.createElement("small",null,s.createElement(n.p,null,"Jolly photo by ",s.createElement("a",{href:"https://unsplash.com/@daniellanner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Daniel Lanner")))),"\n",s.createElement(n.p,null,"Have you ever wondered how computers store the floating-point numbers like ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">3.1416</code>'}})," (𝝿) or ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">9.109 × 10⁻³¹</code>'}})," (the mass of the electron in kg) in the memory which is limited by a finite number of ones and zeroes (aka bits)?"),"\n",s.createElement(n.p,null,"It seems pretty straightforward for integers (i.e. ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">17</code>'}}),"). Let's say we have 16 bits (2 bytes) to store the number. In 16 bits we may store the integers in a range of ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">[0, 65535]</code>'}}),":"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">(0000000000000000)₂ = (0)₁₀\n\n(0000000000010001)₂ =\n    (1 × 2⁴) +\n    (0 × 2³) +\n    (0 × 2²) +\n    (0 × 2¹) +\n    (1 × 2⁰) = (17)₁₀\n\n(1111111111111111)₂ =\n    (1 × 2¹⁵) +\n    (1 × 2¹⁴) +\n    (1 × 2¹³) +\n    (1 × 2¹²) +\n    (1 × 2¹¹) +\n    (1 × 2¹⁰) +\n    (1 × 2⁹) +\n    (1 × 2⁸) +\n    (1 × 2⁷) +\n    (1 × 2⁶) +\n    (1 × 2⁵) +\n    (1 × 2⁴) +\n    (1 × 2³) +\n    (1 × 2²) +\n    (1 × 2¹) +\n    (1 × 2⁰) = (65535)₁₀</code></pre></div>'}}),"\n",s.createElement(n.p,null,"If we need a signed integer we may use ",s.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Two%27s_complement"},"two's complement")," and shift the range of ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">[0, 65535]</code>'}})," towards the negative numbers. In this case, our 16 bits would represent the numbers in a range of ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">[-32768, +32767]</code>'}}),"."),"\n",s.createElement(n.p,null,"As you might have noticed, this approach won't allow you to represent the numbers like ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">-27.15625</code>'}})," (numbers after the decimal point are just being ignored)."),"\n",s.createElement(n.p,null,"We're not the first ones who have noticed this issue though. Around ≈36 years ago some smart folks overcame this limitation by introducing the ",s.createElement(n.a,{href:"https://en.wikipedia.org/wiki/IEEE_754"},"IEEE 754")," standard for floating-point arithmetic."),"\n",s.createElement(n.p,null,"The IEEE 754 standard describes the way (the framework) of using those 16 bits (or 32, or 64 bits) to store the numbers of wider range, including the small floating numbers (smaller than 1 and closer to 0)."),"\n",s.createElement(n.p,null,"To get the idea behind the standard we might recall the ",s.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Scientific_notation"},"scientific notation")," - a way of expressing numbers that are too large or too small (usually would result in a long string of digits) to be conveniently written in decimal form."),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1000px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 41.2%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABRUlEQVR42mWS3W6DMAyFef936mVvq0qVKnWbqqFCx1gDlARofvCZnZR2Uy2FiGB/Psch896jLEsURYHj8YimaUBEmKYJMULAPBiYyWF0wGQJN2txuSjUl3NM4fRHZJY/7nY7bLdbrNdr5HnOjICu61KGD3Bdi59WozFAPxK0NihOpygkAZ/ETBQKwDkHgc/znBKWJP4uKpejmRIgcCPrJwRy+BtZVVXY7/fYbDZYrVY4cWeBK6VShtZwdYUvpVFfgUYTrtceh8MB7x9vr5blIapkiVLZHzZk8ZmolJqb5dd7sbjxgd0RuyJ2AHpaNsa8zAKpk1TGndI4sQiQ5ktNBFISkom9tm1fgVLAtw5nI4wdo1R8w3xcf1fRcpxjGNCMOdTwiZs3yGKHu81/IfBhSCo5nE+/jMD7vo+zlp2vJ0JdGFmpxy9lI26Lxj21PgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Scientific number notation"\n        title=""\n        src="/static/e26099608e666c7e470a691203bda1ad/00d43/03-scientific-notation.png"\n        srcset="/static/e26099608e666c7e470a691203bda1ad/63868/03-scientific-notation.png 250w,\n/static/e26099608e666c7e470a691203bda1ad/0b533/03-scientific-notation.png 500w,\n/static/e26099608e666c7e470a691203bda1ad/00d43/03-scientific-notation.png 1000w,\n/static/e26099608e666c7e470a691203bda1ad/aa440/03-scientific-notation.png 1500w,\n/static/e26099608e666c7e470a691203bda1ad/d3d45/03-scientific-notation.png 1614w"\n        sizes="(max-width: 1000px) 100vw, 1000px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(n.p,null,"As you may see from the image, the number representation might be split into three parts:"),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,s.createElement(n.strong,null,"sign")),"\n",s.createElement(n.li,null,s.createElement(n.strong,null,"fraction (aka significand)")," - the valuable digits (the meaning, the payload) of the number"),"\n",s.createElement(n.li,null,s.createElement(n.strong,null,"exponent")," - controls how far and in which direction to move the decimal point in the fraction"),"\n"),"\n",s.createElement(n.p,null,"The ",s.createElement(n.strong,null,"base")," part we may omit by just agreeing on what it will be equal to. In our case, we'll be using ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">2</code>'}})," as a base."),"\n",s.createElement(n.p,null,"Instead of using all 16 bits (or 32 bits, or 64 bits) to store the fraction of the number, we may share the bits and store a sign, exponent, and fraction at the same time. Depending on the number of bits that we're going to use to store the number we end up with the following splits:"),"\n",s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,"Floating-point format"),s.createElement("th",null,"Total bits"),s.createElement("th",null,"Sign bits"),s.createElement("th",null,"Exponent bits"),s.createElement("th",null,"Fraction bits"),s.createElement("th",null,"Base"))),s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",null,s.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Half-precision_floating-point_format"},"Half-precision")),s.createElement("td",null,"16"),s.createElement("td",null,"1"),s.createElement("td",null,"5"),s.createElement("td",null,"10"),s.createElement("td",null,"2")),s.createElement("tr",null,s.createElement("td",null,s.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Single-precision_floating-point_format"},"Single-precision")),s.createElement("td",null,"32"),s.createElement("td",null,"1"),s.createElement("td",null,"8"),s.createElement("td",null,"23"),s.createElement("td",null,"2")),s.createElement("tr",null,s.createElement("td",null,s.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Double-precision_floating-point_format"},"Double-precision")),s.createElement("td",null,"64"),s.createElement("td",null,"1"),s.createElement("td",null,"11"),s.createElement("td",null,"52"),s.createElement("td",null,"2")))),"\n",s.createElement(n.p,null,"With this approach, the number of bits for the fraction has been reduced (i.e. for the 16-bits number it was reduced from 16 bits to 10 bits). It means that the fraction might take a narrower range of values now (losing some precision). However, since we also have an exponent part, it will actually increase the ultimate number range and also allow us to describe the numbers between 0 and 1 (if the exponent is negative)."),"\n",s.createElement(n.blockquote,null,"\n",s.createElement(n.p,null,"For example, a signed 32-bit integer variable has a maximum value of 2³¹ − 1 = 2,147,483,647, whereas an IEEE 754 32-bit base-2 floating-point variable has a maximum value of ≈ 3.4028235 × 10³⁸."),"\n"),"\n",s.createElement(n.p,null,"To make it possible to have a negative exponent, the IEEE 754 standard uses the ",s.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Exponent_bias"},"biased exponent"),". The idea is simple - subtract the bias from the exponent value to make it negative. For example, if the exponent has 5 bits, it might take the values from the range of ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">[0, 31]</code>'}})," (all values are positive here). But if we subtract the value of ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">15</code>'}})," from it, the range will be ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">[-15, 16]</code>'}}),". The number ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">15</code>'}})," is called bias, and it is being calculated by the following formula:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">exponent_bias = 2 ^ (k−1) − 1\n\nk - number of exponent bits</code></pre></div>'}}),"\n",s.createElement(n.p,null,"I've tried to describe the logic behind the converting of floating-point numbers from a binary format back to the decimal format on the image below. Hopefully, it will give you a better understanding of how the IEEE 754 standard works. The 16-bits number is being used here for simplicity, but the same approach works for 32-bits and 64-bits numbers as well."),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1000px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 70.4%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAACHElEQVR42n1U2ZLaMBDk//+GD9j8AMU7EM4Fm4AvfOg+OqMRZFOpsCraY1lST88hZs45ZFhYwuFwwHq9xna7xfl8wcfHD8znc8QYYa3FMAzw3uPdmFki+3t4H/By4n22wac9kUlfa28JvRDwVqGXNR7TDdKQghBBPxg614uAZnAYJDkLGWktjeTgX8y0FBSKgtYaSkkYa2A5JNpAT20MBDkN4UWSSd8rlBJSPEhBjUm1hA6DUGhJ1SiTMo9+IghP37N1PsIYjaIocL1eUZYl5/x+v2OGaSIFd1TTDq04oVcluknhXAP1AJRdxGcVce2AXw+gaAGhA6ZxwPF4ZJLNZoPlcklFPBMhxRJjoDCoCJEQLIEKQ1FrC8pptoqs1Hlu/Tchp4SERBYMkWjarOHoPcTAScazOIlI2UzODiy4eLzh2QEpwaxQUWWF7jKhk4z07qMlYsdVHUmdIFLKBld80tmqZxRpbh0yoTETfexpcWQyZQdSJVmtcdQFXnEq0oFEkgiSrvBsoT82JkKS6Z3JoTrN4SeyROA8hR58zm/IzZxaJv63D3OKZs/rwS5D9Jy/NFI/pjktMvgQvsi+vXpj20JLhVt1RT82aJsOPzdrNL1GNXy1y6Uh1B5t2/El2O12OJ1OWK1WWCwW2O/3REgXXqbmJvQ95VEpNE2Duq7QDYZ7sR2BW596kshbj+7R8+0pipLPXC4X/kOpqgq/AZSOQb1udwDPAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Half-precision floating point number format explained in one picture"\n        title=""\n        src="/static/131599cc123194bea250477696211e3a/00d43/02-half-precision-floating-point-number-explained.png"\n        srcset="/static/131599cc123194bea250477696211e3a/63868/02-half-precision-floating-point-number-explained.png 250w,\n/static/131599cc123194bea250477696211e3a/0b533/02-half-precision-floating-point-number-explained.png 500w,\n/static/131599cc123194bea250477696211e3a/00d43/02-half-precision-floating-point-number-explained.png 1000w,\n/static/131599cc123194bea250477696211e3a/aa440/02-half-precision-floating-point-number-explained.png 1500w,\n/static/131599cc123194bea250477696211e3a/e8950/02-half-precision-floating-point-number-explained.png 2000w,\n/static/131599cc123194bea250477696211e3a/78ed4/02-half-precision-floating-point-number-explained.png 2566w"\n        sizes="(max-width: 1000px) 100vw, 1000px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(n.p,null,"Here is also the interactive tool to give you better intuition of how the conversion works. Feel free to flip some bits and see how it affects the final formula."),"\n",s.createElement(l.Z,{title:"👉🏻 Half-precision (16 bits) floating point format"},s.createElement(f)),"\n",s.createElement(n.blockquote,null,"\n",s.createElement(n.p,null,"Be aware that this is by no means a complete and sufficient overview of the IEEE 754 standard. It is rather a simplified and basic overview. Several corner cases were omitted in the examples above for simplicity of presentation (i.e. ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">-0</code>'}}),", ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">-∞</code>'}}),", ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">+∞</code>'}})," and ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">NaN</code>'}})," (not a number) values)"),"\n"),"\n",s.createElement(n.p,null,"Here is the number ranges that different floating-point formats support:"),"\n",s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,"Floating-point format"),s.createElement("th",null,"Exp min"),s.createElement("th",null,"Exp max"),s.createElement("th",null,"Range"),s.createElement("th",null,"Min positive"))),s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",null,"Half-precision"),s.createElement("td",null,"−14"),s.createElement("td",null,"+15"),s.createElement("td",null,"±65,504"),s.createElement("td",null,"6.10 × 10⁻⁵")),s.createElement("tr",null,s.createElement("td",null,"Single-precision"),s.createElement("td",null,"−126"),s.createElement("td",null,"+127"),s.createElement("td",null,"±3.4028235 × 10³⁸"),s.createElement("td",null,"1.18 × 10⁻³⁸")))),"\n",s.createElement(n.h2,{id:"code-examples",style:{position:"relative"}},"Code examples",s.createElement(n.a,{href:"#code-examples","aria-label":"code examples permalink",className:"gatsby-remark-autolink-header-anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"In the ",s.createElement(n.a,{href:"https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/binary-floating-point"},"javascript-algorithms repository"),", I've added a source code of binary-to-decimal converters that were used in the interactive example above."),"\n",s.createElement(n.p,null,"Below you may find an example of how to get the binary representation of the floating-point numbers in JavaScript. JavaScript is a pretty high-level language, and the example might be too verbose and not as straightforward as in lower-level languages, but still it is something you may experiment with directly in the browser:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> singlePrecisionBytesLength <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 32 bits</span>\n<span class="token keyword">const</span> doublePrecisionBytesLength <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">// 64 bits</span>\n<span class="token keyword">const</span> bitsInByte <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * Converts the float number into its IEEE 754 binary representation.\n * @see: https://en.wikipedia.org/wiki/IEEE_754\n *\n * @param {number} floatNumber - float number in decimal format.\n * @param {number} byteLength - number of bytes to use to store the float number.\n * @return {string} - binary string representation of the float number.\n */</span>\n<span class="token keyword">function</span> <span class="token function">floatAsBinaryString</span><span class="token punctuation">(</span><span class="token parameter">floatNumber<span class="token punctuation">,</span> byteLength</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> numberAsBinaryString <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> arrayBuffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span>byteLength<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> dataView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataView</span><span class="token punctuation">(</span>arrayBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> byteOffset <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> littleEndian <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>byteLength <span class="token operator">===</span> singlePrecisionBytesLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    dataView<span class="token punctuation">.</span><span class="token function">setFloat32</span><span class="token punctuation">(</span>byteOffset<span class="token punctuation">,</span> floatNumber<span class="token punctuation">,</span> littleEndian<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    dataView<span class="token punctuation">.</span><span class="token function">setFloat64</span><span class="token punctuation">(</span>byteOffset<span class="token punctuation">,</span> floatNumber<span class="token punctuation">,</span> littleEndian<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> byteIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> byteIndex <span class="token operator">&lt;</span> byteLength<span class="token punctuation">;</span> byteIndex <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> bits <span class="token operator">=</span> dataView<span class="token punctuation">.</span><span class="token function">getUint8</span><span class="token punctuation">(</span>byteIndex<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>bits<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> bitsInByte<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      bits <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>bitsInByte <span class="token operator">-</span> bits<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">\'0\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token operator">+</span> bits<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    numberAsBinaryString <span class="token operator">+=</span> bits<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> numberAsBinaryString<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * Converts the float number into its IEEE 754 64-bits binary representation.\n *\n * @param {number} floatNumber - float number in decimal format.\n * @return {string} - 64 bits binary string representation of the float number.\n */</span>\n<span class="token keyword">function</span> <span class="token function">floatAs64BinaryString</span><span class="token punctuation">(</span><span class="token parameter">floatNumber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">floatAsBinaryString</span><span class="token punctuation">(</span>floatNumber<span class="token punctuation">,</span> doublePrecisionBytesLength<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * Converts the float number into its IEEE 754 32-bits binary representation.\n *\n * @param {number} floatNumber - float number in decimal format.\n * @return {string} - 32 bits binary string representation of the float number.\n */</span>\n<span class="token keyword">function</span> <span class="token function">floatAs32BinaryString</span><span class="token punctuation">(</span><span class="token parameter">floatNumber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">floatAsBinaryString</span><span class="token punctuation">(</span>floatNumber<span class="token punctuation">,</span> singlePrecisionBytesLength<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Usage example</span>\n<span class="token function">floatAs32BinaryString</span><span class="token punctuation">(</span><span class="token number">1.875</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> "00111111111100000000000000000000"</span></code></pre></div>'}}),"\n",s.createElement(n.h2,{id:"references",style:{position:"relative"}},"References",s.createElement(n.a,{href:"#references","aria-label":"references permalink",className:"gatsby-remark-autolink-header-anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"You might also want to check out the following resources to get a deeper understanding of the binary representation of floating-point numbers:"),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"https://indepth.dev/posts/1139/here-is-what-you-need-to-know-about-javascripts-number-type"},"Here is what you need to know about JavaScript’s Number type")),"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"https://float.exposed/"},"Float Exposed")),"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"https://bartaz.github.io/ieee754-visualization/"},"IEEE754 Visualization")),"\n"))}var b=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?s.createElement(n,e,s.createElement(A,e)):A(e)},E=t(7084);const k=e=>{const{data:n,children:t}=e;return s.createElement(E.Z,{post:n},t)};function y(e){return s.createElement(k,e,s.createElement(b,e))}},7084:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var a=t(7294),s=t(578),l=t(4363),o=t(550),r=t(9737),i=t(5103),c=t(2717),p=t(8288);var u=e=>{var n,t,s,u,m,d,g;const{post:h,children:f}=e,A=null!=h&&null!==(n=h.mdx)&&void 0!==n&&null!==(t=n.frontmatter)&&void 0!==t&&t.date?a.createElement(i.Z,{className:"mr-6 mb-6 text-gray-500 text-sm"},a.createElement(l.v,{className:"mr-1"}),null==h||null===(s=h.mdx)||void 0===s?void 0:s.frontmatter.date):null,b=null!=h&&null!==(u=h.mdx)&&void 0!==u&&u.timeToRead?a.createElement(i.Z,null,a.createElement(o.T,{className:"mr-1"}),(0,c.j)(null==h||null===(m=h.mdx)||void 0===m?void 0:m.timeToRead)," min to read"):null;return a.createElement("div",{className:"flex flex-col items-center"},a.createElement("article",{className:"w-full prose prose-sm sm:prose overflow-hidden prose-red",style:{maxWidth:"860px"}},a.createElement(r.Z,null,(null===(d=h.mdx)||void 0===d||null===(g=d.frontmatter)||void 0===g?void 0:g.title)||""),a.createElement(i.Z,null,A,b),a.createElement(p.Z,null,f)))},m=t(7943),d=t(5677);var g=e=>{var n,t,l,o,r,i,c,g,h,f,A;const{post:b,children:E}=e;return a.createElement(s.Z,null,a.createElement(m.ZP,{title:(null===(n=b.mdx)||void 0===n||null===(t=n.frontmatter)||void 0===t?void 0:t.title)||"",titleMode:m.H0,description:(null===(l=b.mdx)||void 0===l||null===(o=l.frontmatter)||void 0===o?void 0:o.summary)||"",image:(null===(r=b.mdx)||void 0===r||null===(i=r.frontmatter)||void 0===i||null===(c=i.cover)||void 0===c||null===(g=c.childImageSharp)||void 0===g||null===(h=g.gatsbyImageData)||void 0===h||null===(f=h.images)||void 0===f||null===(A=f.fallback)||void 0===A?void 0:A.src)||"",type:m.Sp}),a.createElement(u,{post:b},E),a.createElement("div",{className:"flex flex-row justify-center items-center mt-16"},a.createElement("div",{className:"max-w-md"},a.createElement(p.Z,null,a.createElement(d.Z,null)))))}},2091:function(e,n,t){"use strict";t.d(n,{Iy:function(){return r},hW:function(){return i}});var a=t(7294),s=t(9881),l=t(3150),o=t(5103);const r="info",i="error",c={[r]:a.createElement(s.L,{size:18}),[i]:a.createElement(l.C,{size:18})},p={[r]:"text-blue-600 bg-blue-100",[i]:"text-red-600 bg-red-100"};n.ZP=e=>{const{children:n,type:t}=e;return n?a.createElement("div",{className:"py-3 px-4 rounded-md "+p[t]},a.createElement(o.Z,null,a.createElement("div",{className:"mr-3"},c[t]),a.createElement("div",{className:"text-sm"},n))):null}},8288:function(e,n,t){"use strict";var a=t(4578),s=t(7294),l=t(2091);let o=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={hasError:!1},t}(0,a.Z)(n,e),n.getDerivedStateFromError=function(){return{hasError:!0}};var t=n.prototype;return t.componentDidCatch=function(e,n){console.error(e,n),this.setState({hasError:!0})},t.render=function(){const{children:e}=this.props,{hasError:n}=this.state;return n?s.createElement(l.ZP,{type:l.hW},"Component has crashed"):e},n}(s.Component);n.Z=o},6531:function(e,n,t){"use strict";var a=t(7294),s=t(8288);n.Z=e=>{const{children:n,title:t,className:l=""}=e;if(!n)return null;const o=t?a.createElement("div",{className:"text-xs font-light"},t):null;return a.createElement(s.Z,null,o,a.createElement("div",{className:"p-6 border border-dashed border-gray-300 rounded-md overflow-hidden "+l},n))}},9737:function(e,n,t){"use strict";var a=t(7294),s=t(4519);n.Z=e=>{const{children:n,className:t=""}=e,l="mb-6 uppercase font-extrabold "+t;return a.createElement(s.Z,{level:s._.h1,className:l},n)}},5677:function(e,n,t){"use strict";var a=t(7294);n.Z=e=>{const{withHeader:n=!0}=e,t="border py-2 px-3 mb-3 rounded border-gray-300 border-solid appearance-none",s=n?a.createElement("h1",{className:"text-grey-darkest uppercase font-bold text-xl mb-3"},"Subscribe to the Newsletter"):null;return a.createElement("div",{className:"bg-white rounded-md shadow-md p-8"},s,a.createElement("p",{className:"text-sm mb-3"},"Get my latest posts and project updates by email"),a.createElement("form",{action:"https://dev.us1.list-manage.com/subscribe/post?u=7714f14ff32085c685da2cfaa&amp;id=53ffa81463",method:"post",className:"flex flex-col"},a.createElement("input",{placeholder:"First Name",type:"text",name:"FNAME",className:t,required:!0}),a.createElement("input",{placeholder:"Email",type:"email",name:"EMAIL",className:t,required:!0}),a.createElement("div",{className:"hidden","aria-hidden":"true"},a.createElement("input",{type:"text",name:"b_7714f14ff32085c685da2cfaa_53ffa81463",tabIndex:-1})),a.createElement("input",{type:"submit",value:"Subscribe",className:"transition duration-200 ease-in-out bg-black text-white py-2 px-3 rounded shadow-sm cursor-pointer hover:bg-gray-800"})))}},2717:function(e,n,t){"use strict";t.d(n,{D:function(){return s},j:function(){return a}});const a=e=>{if("number"!=typeof e)return null;return Math.ceil(1*e)||1},s=async e=>new Promise((n=>{setTimeout(n,e)}))},1151:function(e,n,t){"use strict";t.d(n,{ah:function(){return l}});var a=t(7294);const s=a.createContext({});function l(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-src-posts-2021-binary-floating-point-index-mdx-e3f6859542fc858d2421.js.map