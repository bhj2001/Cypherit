(this.webpackJsonpcypherit=this.webpackJsonpcypherit||[]).push([[0],{189:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),i=a.n(s),c=a(88),l=a.n(c),h=(a(189),a(33)),r=a(34),d=a(11),p=a(37),o=a(36),b=a(349),j=a(348),u=a(175),g=a(176),x=a(94),O=a(77),m=a(179);var v=function(e){return Object(n.jsxs)(b.a,{width:500,height:300,data:e.data,margin:{top:5,right:30,left:20,bottom:5},children:[Object(n.jsx)(j.a,{strokeDasharray:"3 3"}),Object(n.jsx)(u.a,{dataKey:"name"}),Object(n.jsx)(g.a,{}),Object(n.jsx)(x.a,{}),Object(n.jsx)(O.a,{}),Object(n.jsx)(m.a,{type:"monotone",dataKey:"pFreq",stroke:"#99d98c",activeDot:{r:8}}),Object(n.jsx)(m.a,{type:"monotone",dataKey:"cFreq",stroke:"#168aad"})]})},f=function(e){Object(p.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={cipher:"",graphdata:"",plainText:"",lastwritten:0},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleChangedCipher=e.handleChangedCipher.bind(Object(d.a)(e)),e.getPlainText=e.getPlainText.bind(Object(d.a)(e)),e.getCipherText=e.getCipherText.bind(Object(d.a)(e)),e}return Object(r.a)(a,[{key:"handleChange",value:function(e){var t=this;this.setState({plainText:e.target.value,lastwritten:0},(function(){t.getCipherText()}))}},{key:"handleChangedCipher",value:function(e){var t=this;this.setState({cipher:e.target.value,lastwritten:1},(function(){t.getPlainText()}))}},{key:"getCipherText",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({plainText:this.state.plainText})};fetch("https://ragnar177.pythonanywhere.com/pa0",t).then((function(e){return e.json()})).then((function(t){e.setState({cipher:t.cipher,graphdata:t.graphdata})}))}},{key:"getPlainText",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({plainText:this.state.cipher})};fetch("https://ragnar177.pythonanywhere.com/pa0",t).then((function(e){return e.json()})).then((function(t){e.setState({plainText:t.cipher,graphdata:t.graphdata})}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"right-view",children:[Object(n.jsx)("div",{className:"heading-bar",children:Object(n.jsx)("p",{className:"page-heading",children:"Practical Assignment - 0"})}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"text-input-box",children:[Object(n.jsx)("li",{className:"input-item",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"input-box-heading",children:"Plain Text"}),Object(n.jsx)("textarea",{className:"inputBox",value:this.state.plainText,type:"text",placeholder:"Plain Text",onChange:this.handleChange})]})}),Object(n.jsx)("li",{className:"input-item",children:Object(n.jsxs)("div",{style:{display:"inline-block"},children:[Object(n.jsx)("p",{className:"input-box-heading",children:"Cipher Text"}),Object(n.jsx)("textarea",{className:"inputBox",value:this.state.cipher,type:"text",placeholder:"Cipher Text",onChange:this.handleChangedCipher})]})})]})}),Object(n.jsx)("div",{className:"graph-style",children:Object(n.jsx)(v,{data:this.state.graphdata})})]})}}]),a}(i.a.Component),y=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],N=function(e){Object(p.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={cipher:"",graphdata:"",plainText:"",rounds:1,blockSize:16,key:"",mode:1},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleRound=e.handleRound.bind(Object(d.a)(e)),e.handleBlockSize=e.handleBlockSize.bind(Object(d.a)(e)),e.handleKey=e.handleKey.bind(Object(d.a)(e)),e}return Object(r.a)(a,[{key:"handleKey",value:function(e){this.setState({key:e.target.value})}},{key:"handleRound",value:function(e){this.setState({rounds:e.target.value})}},{key:"handleBlockSize",value:function(e){this.setState({blockSize:e.target.value})}},{key:"handleChange",value:function(e){var t=this;this.setState({plainText:e.target.value},(function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({plainText:t.state.plainText,rounds:t.state.rounds,key:t.state.key,blockSize:t.state.blockSize,mode:t.state.mode})};fetch("https://ragnar177.pythonanywhere.com/des",e).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({cipher:e.txt})}))}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"right-view",children:[Object(n.jsx)("div",{className:"heading-bar",children:Object(n.jsx)("p",{className:"page-heading",children:"Practical Assignment - 1"})}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{className:"text-input-box",children:[Object(n.jsx)("li",{className:"input-item",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"input-box-heading",children:"Block Size"}),Object(n.jsx)("div",{children:Object(n.jsxs)("select",{value:this.state.selectValue,onChange:this.handleBlockSize,children:[Object(n.jsx)("option",{value:"16",children:"16 Bits"}),Object(n.jsx)("option",{value:"32",children:"32 Bits"}),Object(n.jsx)("option",{value:"64",children:"64 Bits"})]})})]})}),Object(n.jsx)("li",{className:"input-item",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"input-box-heading",children:"Rounds"}),Object(n.jsx)("div",{children:Object(n.jsx)("select",{value:this.state.selectValue,onChange:this.handleRound,children:y.map((function(e){return Object(n.jsx)("option",{value:e,children:e})}))})})]})}),Object(n.jsx)("li",{className:"input-item",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"input-box-heading",children:"Key"}),Object(n.jsx)("input",{className:"input-box",value:this.state.key,type:"text",placeholder:"Key",onChange:this.handleKey})]})})]}),Object(n.jsxs)("ul",{className:"text-input-box",children:[Object(n.jsx)("li",{className:"input-item",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"input-box-heading",children:"Plain Text"}),Object(n.jsx)("textarea",{className:"inputBox",value:this.state.plainText,type:"text",placeholder:"Plain Text",onChange:this.handleChange})]})}),Object(n.jsx)("li",{className:"input-item",children:Object(n.jsxs)("div",{style:{display:"inline-block"},children:[Object(n.jsx)("p",{className:"input-box-heading",children:"Cipher Text"}),Object(n.jsx)("textarea",{className:"inputBox",value:this.state.cipher,type:"text",placeholder:"Cipher Text",onChange:this.handleChangedCipher})]})})]})]}),Object(n.jsx)("div",{className:"graph-style",children:Object(n.jsx)(v,{data:this.state.graphdata})})]})}}]),a}(i.a.Component),w=a(17),k=a(47),C="light";function S(){"light"==C?(document.documentElement.setAttribute("data-theme","dark"),C="dark"):(document.documentElement.setAttribute("data-theme","light"),C="light")}var T=function(){var e,t,a;return Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{onClick:S,className:"nav-link",children:Object(n.jsx)("svg",(e={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg"},Object(w.a)(e,"xmlns","http://www.w3.org/1999/xlink"),Object(w.a)(e,"x","0px"),Object(w.a)(e,"y","0px"),Object(w.a)(e,"width","578.405px"),Object(w.a)(e,"height","578.405px"),Object(w.a)(e,"viewBox","0 0 578.405 578.405"),Object(w.a)(e,"xml","preserve"),Object(w.a)(e,"children",Object(n.jsx)("g",{children:Object(n.jsx)("g",{children:Object(n.jsx)("path",{d:"M289.203,0C129.736,0,0,129.736,0,289.203C0,448.67,129.736,578.405,289.203,578.405\r c159.467,0,289.202-129.735,289.202-289.202C578.405,129.736,448.67,0,289.203,0z M28.56,289.202\r C28.56,145.48,145.481,28.56,289.203,28.56l0,0v521.286l0,0C145.485,549.846,28.56,432.925,28.56,289.202z"})})})),e))}),Object(n.jsx)(k.b,{to:"/Cypherit/practical-assignment-0",style:{textDecoration:"none"},children:Object(n.jsx)("li",{className:"nav-link",children:Object(n.jsx)("p",{className:"font-icon",children:" PA0 "})})}),Object(n.jsx)(k.b,{to:"/practical-assignment-1",style:{textDecoration:"none"},children:Object(n.jsx)("li",{className:"nav-link",children:Object(n.jsx)("p",{className:"font-icon",children:" PA1 "})})}),Object(n.jsx)(k.b,{to:"/key-generator",children:Object(n.jsx)("li",{className:"nav-link",children:Object(n.jsx)("svg",(t={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg"},Object(w.a)(t,"xmlns","http://www.w3.org/1999/xlink"),Object(w.a)(t,"x","0px"),Object(w.a)(t,"y","0px"),Object(w.a)(t,"viewBox","0 0 469.333 469.333"),Object(w.a)(t,"xml","preserve"),Object(w.a)(t,"children",Object(n.jsx)("g",{children:Object(n.jsx)("g",{children:Object(n.jsx)("path",{d:"M248.533,192c-17.6-49.707-64.853-85.333-120.533-85.333c-70.72,0-128,57.28-128,128s57.28,128,128,128\r c55.68,0,102.933-35.627,120.533-85.333h92.8v85.333h85.333v-85.333h42.667V192H248.533z M128,277.333\r c-23.573,0-42.667-19.093-42.667-42.667S104.427,192,128,192c23.573,0,42.667,19.093,42.667,42.667S151.573,277.333,128,277.333z"})})})),t))})}),Object(n.jsx)(k.b,{to:"/encrypt-image",children:Object(n.jsx)("li",{className:"nav-link",children:Object(n.jsx)("svg",(a={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg"},Object(w.a)(a,"xmlns","http://www.w3.org/1999/xlink"),Object(w.a)(a,"x","0px"),Object(w.a)(a,"y","0px"),Object(w.a)(a,"width","535.5px"),Object(w.a)(a,"height","535.5px"),Object(w.a)(a,"viewBox","0 0 535.5 535.5"),Object(w.a)(a,"xml","preserve"),Object(w.a)(a,"children",Object(n.jsx)("g",{children:Object(n.jsx)("g",{id:"lock",children:Object(n.jsx)("path",{d:"M420.75,178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5c-71.4,0-127.5,56.1-127.5,127.5v51h-25.5c-28.05,0-51,22.95-51,51\r v255c0,28.05,22.95,51,51,51h306c28.05,0,51-22.95,51-51v-255C471.75,201.45,448.8,178.5,420.75,178.5z M267.75,408\r c-28.05,0-51-22.95-51-51s22.95-51,51-51s51,22.95,51,51S295.8,408,267.75,408z M346.8,178.5H188.7v-51\r c0-43.35,35.7-79.05,79.05-79.05c43.35,0,79.05,35.7,79.05,79.05V178.5z"})})})),a))})}),Object(n.jsx)(k.b,{to:"/encrypt-image-operation",children:Object(n.jsx)("li",{className:"nav-link",children:Object(n.jsxs)("svg",{id:"Layer_1","enable-background":"new 0 0 512.001 512.001",viewBox:"0 0 512.001 512.001",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"m437.334 0h-234.666s0 0-2.133 0c0 0 0 0-2.133 0s-4.267 2.133-4.267 2.133l-128 128c-2.135 2.134-2.135 2.134-2.135 4.267v2.133 2.133 362.667c0 6.4 4.267 10.667 10.667 10.667h362.667c6.4 0 10.667-4.267 10.667-10.667v-490.666c0-6.4-4.267-10.667-10.667-10.667zm-245.333 36.267v91.733h-91.733zm-32 390.4c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667zm21.333-128h-42.667c-6.4 0-10.667-4.267-10.667-10.667v-64c0-6.4 4.267-10.667 10.667-10.667h42.667c6.4 0 10.667 4.267 10.667 10.667v64c0 6.4-4.267 10.667-10.667 10.667zm74.667 117.333c0 6.4-4.267 10.667-10.667 10.667h-42.667c-6.4 0-10.667-4.267-10.667-10.667v-64c0-6.4 4.267-10.667 10.667-10.667h42.667c6.4 0 10.667 4.267 10.667 10.667zm-10.667-117.333c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667zm64 128c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667zm0-128c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667zm64 128c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667zm0-128c-6.4 0-10.667-4.267-10.667-10.667v-38.4l-2.133 2.133c-4.267 4.267-10.667 4.267-14.934 0s-4.267-10.667 0-14.934l21.333-21.333c2.133-2.133 8.533-4.267 10.667-2.133 4.267 2.133 6.4 6.4 6.4 10.667v64h.001c0 6.4-4.267 10.667-10.667 10.667z"}),Object(n.jsx)("path",{d:"m213.334 362.667h21.333v42.667h-21.333z"}),Object(n.jsx)("path",{d:"m149.334 234.667h21.333v42.667h-21.333z"})]})})})]})})},B=function(e){Object(p.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={pbn:"",pbg:"",prl:"",prmu:"",bits:10,fileDownloadUrl:null},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.changeBits=e.changeBits.bind(Object(d.a)(e)),e.downloadFile=e.downloadFile.bind(Object(d.a)(e)),e}return Object(r.a)(a,[{key:"handleChange",value:function(e){var t=this,a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bits:this.state.bits})};fetch("https://ragnar177.pythonanywhere.com/generate-keys",a).then((function(e){return e.json()})).then((function(e){t.setState({pbn:e.pbn,pbg:e.pbg,prl:e.prl,prmu:e.prmu})}))}},{key:"changeBits",value:function(e){this.setState({bits:e.target.value})}},{key:"downloadFile",value:function(){var e=this,t=new Blob([JSON.stringify(this.state)]),a=URL.createObjectURL(t);this.setState({fileDownloadUrl:a},(function(){e.dofileDownload.click(),URL.revokeObjectURL(a),e.setState({fileDownloadUrl:""})}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"right-view",children:[Object(n.jsx)("div",{className:"heading-bar",children:Object(n.jsx)("p",{className:"page-heading",children:"Generate Key-Pair"})}),Object(n.jsx)("input",{className:"input-box",value:this.state.bits,type:"number",placeholder:"Bits",onChange:this.changeBits}),Object(n.jsx)("p",{}),Object(n.jsxs)("div",{className:"content-box",children:[Object(n.jsx)("p",{className:"box-heading",children:"Public Key (n,g)"}),Object(n.jsxs)("div",{className:"view-box",children:[Object(n.jsx)("p",{className:"value-box",children:this.state.pbn}),Object(n.jsx)("p",{className:"value-box slight-left",children:this.state.pbg})]})]}),Object(n.jsxs)("div",{className:"content-box",children:[Object(n.jsx)("p",{className:"box-heading",children:"Private Key (lambda,mu)"}),Object(n.jsxs)("div",{className:"view-box",children:[Object(n.jsx)("p",{className:"value-box",children:this.state.prl}),Object(n.jsx)("p",{className:"value-box slight-left",children:this.state.prmu})]})]}),Object(n.jsx)("input",{className:"input-button example_b",id:"clickMe",type:"button",value:"Generate Keys",onClick:this.handleChange}),Object(n.jsx)("input",{className:"input-button example_b slight-left slight-left",id:"clickMe",type:"button",value:"Download Keys",onClick:this.downloadFile}),Object(n.jsx)("a",{style:{display:"none"},download:"temp",href:this.state.fileDownloadUrl,ref:function(t){return e.dofileDownload=t},children:"download it"})]})}}]),a}(i.a.Component),D=a(31),K=a.n(D),z=a(75),P=a(48),U=a.n(P),F=function(e){Object(p.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={furl:null,file:null,pbn:null,pbg:null,enc_img:null,fileDownloadUrl:"",keyfile:""},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleEncrypt=e.handleEncrypt.bind(Object(d.a)(e)),e.changeN=e.changeN.bind(Object(d.a)(e)),e.changeG=e.changeG.bind(Object(d.a)(e)),e.downloadFile=e.downloadFile.bind(Object(d.a)(e)),e.handleKeys=e.handleKeys.bind(Object(d.a)(e)),e}return Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState({furl:window.URL.createObjectURL(e.target.files[0]),file:e.target.files[0]})}},{key:"handleKeys",value:function(e){var t=this;this.setState({keyfile:e.target.files[0]},(function(){var a=new FileReader;a.onload=function(){var e=Object(z.a)(K.a.mark((function e(a){var n,s;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.target.result,s=JSON.parse(n),t.setState({pbn:s.pbn,pbg:s.pbg});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.readAsText(e.target.files[0])}))}},{key:"handleEncrypt",value:function(e){var t=this,a=new FormData;a.append("myFile",this.state.file,this.state.file.name),a.append("pbn",this.state.pbn),a.append("pbg",this.state.pbg),U.a.post("https://ragnar177.pythonanywhere.com/encrypt-image",a,{}).then((function(e){t.setState({enc_img:e.data},(function(){t.downloadFile()}))}))}},{key:"downloadFile",value:function(){var e=this,t=new Blob([JSON.stringify(this.state.enc_img)]),a=URL.createObjectURL(t);this.setState({fileDownloadUrl:a},(function(){e.dofileDownload.click(),URL.revokeObjectURL(a),e.setState({fileDownloadUrl:""})}))}},{key:"changeN",value:function(e){this.setState({pbn:e.target.value})}},{key:"changeG",value:function(e){this.setState({pbg:e.target.value})}},{key:"changeBits",value:function(e){this.setState({bits:e.target.value})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"right-view",children:[Object(n.jsx)("div",{className:"heading-bar",children:Object(n.jsx)("p",{className:"page-heading",children:"Encrpyt Image"})}),Object(n.jsx)("label",{for:"files",class:"example_b",children:"Select Image"}),Object(n.jsx)("input",{id:"files",className:"hide-button",type:"file",onChange:this.handleChange}),Object(n.jsx)("label",{for:"files2",class:"example_b",children:"Upload Keys"}),Object(n.jsx)("input",{id:"files2",className:"hide-button",type:"file",onChange:this.handleKeys}),Object(n.jsx)("img",{src:this.state.furl}),Object(n.jsx)("input",{className:"input-box",value:this.state.pbn,type:"number",placeholder:"Public Key N",onChange:this.changeN}),Object(n.jsx)("input",{className:"input-box slight-left",value:this.state.pbg,type:"number",placeholder:"Public Key G",onChange:this.changeG}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{className:"input-button example_b",id:"clickMe",type:"button",value:"Encrypt Image",onClick:this.handleEncrypt}),Object(n.jsx)("a",{style:{display:"none"},download:"temp",href:this.state.fileDownloadUrl,ref:function(t){return e.dofileDownload=t},children:"download it"})]})}}]),a}(i.a.Component),J=(a(343),function(e){Object(p.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={furl:null,file:null,pbn:null,pbg:null,prl:null,prmu:null,data:null,fileDownloadUrl:"",brightness:0,neg:1,blur:0},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.changeN=e.changeN.bind(Object(d.a)(e)),e.changeG=e.changeG.bind(Object(d.a)(e)),e.changeL=e.changeL.bind(Object(d.a)(e)),e.changeM=e.changeM.bind(Object(d.a)(e)),e.handleDecrypt=e.handleDecrypt.bind(Object(d.a)(e)),e.handleBrightness=e.handleBrightness.bind(Object(d.a)(e)),e.handleNegation=e.handleNegation.bind(Object(d.a)(e)),e.handleBlur=e.handleBlur.bind(Object(d.a)(e)),e.handleEdge=e.handleEdge.bind(Object(d.a)(e)),e.handleKeys=e.handleKeys.bind(Object(d.a)(e)),e}return Object(r.a)(a,[{key:"handleKeys",value:function(e){var t=this;this.setState({keyfile:e.target.files[0]},(function(){var a=new FileReader;a.onload=function(){var e=Object(z.a)(K.a.mark((function e(a){var n,s;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.target.result,s=JSON.parse(n),t.setState({pbn:s.pbn,pbg:s.pbg,prl:s.prl,prmu:s.prmu});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.readAsText(e.target.files[0])}))}},{key:"handleChange",value:function(e){var t=this;this.setState({file:e.target.files[0]},(function(){var a=new FileReader;a.onload=function(){var e=Object(z.a)(K.a.mark((function e(a){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.target.result,t.setState({data:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.readAsText(e.target.files[0])}))}},{key:"changeN",value:function(e){this.setState({pbn:e.target.value})}},{key:"changeG",value:function(e){this.setState({pbg:e.target.value})}},{key:"changeL",value:function(e){this.setState({prl:e.target.value})}},{key:"changeM",value:function(e){this.setState({prmu:e.target.value})}},{key:"handleBrightness",value:function(e){var t=this,a=new FormData;a.append("data",JSON.stringify(JSON.parse(this.state.data))),a.append("pbn",this.state.pbn),a.append("pbg",this.state.pbg),a.append("prl",this.state.prl),a.append("prmu",this.state.prmu),this.setState({brightness:e.target.value}),a.append("brightness",this.state.brightness),this.setState({brightness:e.target.value}),U.a.post("https://ragnar177.pythonanywhere.com/inc-brightness",a,{}).then((function(e){var a="data:image/gif;base64,".concat(e.data.b64);t.setState({furl:a}),console.log(a)}))}},{key:"handleNegation",value:function(){var e=this,t=new FormData;t.append("data",JSON.stringify(JSON.parse(this.state.data))),t.append("pbn",this.state.pbn),t.append("pbg",this.state.pbg),t.append("prl",this.state.prl),t.append("prmu",this.state.prmu),t.append("negation",this.state.neg),this.setState({neg:(this.state.neg+1)%2}),U.a.post("https://ragnar177.pythonanywhere.com/image-negation",t,{}).then((function(t){var a="data:image/gif;base64,".concat(t.data.b64);e.setState({furl:a}),console.log(a)}))}},{key:"handleBlur",value:function(e){var t=this,a=new FormData;a.append("data",JSON.stringify(JSON.parse(this.state.data))),a.append("pbn",this.state.pbn),a.append("pbg",this.state.pbg),a.append("prl",this.state.prl),a.append("prmu",this.state.prmu),a.append("blur",e.target.value),this.setState({blur:e.target.value}),U.a.post("https://ragnar177.pythonanywhere.com/image-blur",a,{}).then((function(e){var a="data:image/gif;base64,".concat(e.data.b64);t.setState({furl:a}),console.log(a)}))}},{key:"handleEdge",value:function(e){var t=this,a=new FormData;a.append("data",JSON.stringify(JSON.parse(this.state.data))),a.append("pbn",this.state.pbn),a.append("pbg",this.state.pbg),a.append("prl",this.state.prl),a.append("prmu",this.state.prmu),this.setState({blur:e.target.value}),U.a.post("https://ragnar177.pythonanywhere.com/image-edge-detect",a,{}).then((function(e){var a="data:image/gif;base64,".concat(e.data.b64);t.setState({furl:a}),console.log(a)}))}},{key:"handleDecrypt",value:function(){var e=this,t=new FormData;t.append("data",JSON.stringify(JSON.parse(this.state.data))),t.append("pbn",this.state.pbn),t.append("pbg",this.state.pbg),t.append("prl",this.state.prl),t.append("prmu",this.state.prmu),t.append("brightness",this.state.brightness),U.a.post("https://ragnar177.pythonanywhere.com/decrypt-image",t,{}).then((function(t){var a="data:image/gif;base64,".concat(t.data.b64);e.setState({furl:a}),console.log(a)}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"right-view",children:[Object(n.jsx)("div",{className:"heading-bar",children:Object(n.jsx)("p",{className:"page-heading",children:"Image Operations"})}),Object(n.jsx)("label",{for:"files",class:"example_b",children:"Select Encrpyted Image"}),Object(n.jsx)("input",{id:"files",className:"hide-button",type:"file",onChange:this.handleChange}),Object(n.jsx)("label",{for:"files2",class:"example_b",children:"Upload Keys"}),Object(n.jsx)("input",{id:"files2",className:"hide-button",type:"file",onChange:this.handleKeys}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{className:"input-box slight-left",value:this.state.pbn,type:"number",placeholder:"Public Key N",onChange:this.changeN}),Object(n.jsx)("input",{className:"input-box slight-left",value:this.state.pbg,type:"number",placeholder:"Public Key G",onChange:this.changeG}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{className:"input-box slight-left",value:this.state.prl,type:"number",placeholder:"Private Key Lambda",onChange:this.changeL}),Object(n.jsx)("input",{className:"input-box slight-left",value:this.state.prmu,type:"number",placeholder:"Private Key Mu",onChange:this.changeM}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{className:"input-button example_b",id:"clickMe",type:"button",value:"Decrypt Image",onClick:this.handleDecrypt}),Object(n.jsx)("div",{className:"controls",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("input",{className:"input-box slight-left",value:this.state.brightness,type:"number",placeholder:"Brightness",onChange:this.handleBrightness})}),Object(n.jsx)("li",{children:Object(n.jsx)("input",{className:"input-button example_b",id:"clickMe",type:"button",value:"Image Negation",onClick:this.handleNegation})}),Object(n.jsx)("li",{children:Object(n.jsx)("input",{className:"input-box slight-left",value:this.state.blur,type:"number",placeholder:"Blur Radius",onChange:this.handleBlur})}),Object(n.jsx)("li",{children:Object(n.jsx)("input",{className:"input-button example_b",id:"clickMe",type:"button",value:"Edge Detect",onClick:this.handleEdge})})]})}),Object(n.jsx)("a",{style:{display:"none"},download:"img",href:this.state.fileDownloadUrl,ref:function(t){return e.dofileDownload=t},children:"download it"}),Object(n.jsx)("img",{src:this.state.furl})]})}}]),a}(i.a.Component)),M=a(18);l.a.render(Object(n.jsx)(k.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(T,{}),Object(n.jsxs)(M.c,{children:[Object(n.jsx)(M.a,{path:"/encrypt-image",exact:!0,component:F}),Object(n.jsx)(M.a,{path:"/encrypt-image-operation",exact:!0,component:J}),Object(n.jsx)(M.a,{path:"/key-generator",exact:!0,component:B}),Object(n.jsx)(M.a,{path:"/Cypherit/practical-assignment-0",exact:!0,component:f}),Object(n.jsx)(M.a,{path:"/practical-assignment-1",exact:!0,component:N})]})]})}),document.getElementById("root"))}},[[342,1,2]]]);
//# sourceMappingURL=main.96ae758f.chunk.js.map