(window.webpackJsonp=window.webpackJsonp||[]).push([[2,14],{648:function(t,r,n){var content=n(651);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("4ff65f50",content,!0,{sourceMap:!1})},649:function(t,r,n){"use strict";n.r(r);var e=n(48),o=n(80),c=(n(27),{name:"WindowComponent",props:{show:{type:Boolean,default:!0},styles:{type:String,default:void 0},width:{type:String,default:"539px"},height:{type:String,default:"420px"},bg:{type:String,default:"transparent"},padding:{type:String,default:"1em"}},mounted:function(){var t=this,r=this.$refs["custome-window"].$el;this.$slots.header||(r.addEventListener("mousedown",(function(r){return t.$emit("customeDrag",r)})),r.addEventListener("touchstart",(function(r){return t.$emit("customeDrag",r)})))}}),l=(n(650),n(28)),component=Object(l.a)(c,(function(){var t=this,r=t._self._c;return r(e.a,{ref:"custome-window",staticClass:"custome-window",class:{show:t.show},style:"--w: ".concat(t.width,"; --h: ").concat(t.height,"; ").concat(t.$slots.header?"--h-toolbar: 46px":void 0,"; ").concat(t.styles),on:{mousedown:function(r){return t.$store.commit("increaseIndex",r)},touchstart:function(r){return t.$store.commit("increaseIndex",r)}}},[t.$slots.header?r(o.a,{staticClass:"custome-window--header",on:{mousedown:function(r){return t.$emit("customeDrag",r)},touchstart:function(r){return t.$emit("customeDrag",r)}}},[t._t("header")],2):t._e(),t._v(" "),r(e.a,{staticClass:"custome-window--content",style:"padding: ".concat(t.padding,"; ").concat(t.$slots.header?"calc(100% - var(--h-toolbar))":"height: 100%"),attrs:{color:t.bg}},[t._t("content")],2)],1)}),[],!1,null,null,null);r.default=component.exports},650:function(t,r,n){"use strict";n(648)},651:function(t,r,n){var e=n(18)(!1);e.push([t.i,':root{--primary:#d9d0b1;--secondary:#faf9f8;--accent:#000;--active:#5803c5;--error:#ff4040;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(90deg,#5803c5,#6b79f7);--c:var(--clr);--font1:"Pixelmix",sans-serif;--font2:"Pixelmix",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-header:100px;--w-navbar:55px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#111011;--clr-hover:#270330;--clr-scroll:var(--secondary);--clr-bg-scroll:var(--primary);--clr-card:var(--primary);--clr-btn:#fff;--clr-text-btn:var(--clr);--clr-badge:var(--secondary);--clr-text-badge:var(--clr);--clr-line:var(--accent)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#d9d0b1!important;background-color:var(--primary)!important}.clr_secondary{background-color:#faf9f8!important;background-color:var(--secondary)!important}.clr_accent{background-color:#000!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.custome-window{position:absolute!important;visibility:hidden;--w:initial;--max-w:none;--min-w:none;--h:initial;--max-h:none;--min-h:none;--bg:var(--clr-card);--c:var(--clr);--b:initial;--p:0;--f:initial;--t:initial;width:var(--w)!important;max-width:var(--max-w)!important;min-width:var(--min-w)!important;height:var(--h)!important;max-height:var(--max-h)!important;min-height:var(--min-h)!important;background:var(--bg)!important;color:var(--clr)!important;color:var(--c)!important;border:var(--b)!important;transform:var(--t);filter:var(--f);--c-size:4.5px;padding:var(--c-size);position:relative;isolation:isolate;--c-size:6px}.custome-window,.custome-window:after,.custome-window:before{-webkit-clip-path:polygon(0 var(--c-size),var(--c-size) var(--c-size),var(--c-size) 0,calc(100% - var(--c-size)) 0,calc(100% - var(--c-size)) var(--c-size),100% var(--c-size),100% calc(100% - var(--c-size)),calc(100% - var(--c-size)) calc(100% - var(--c-size)),calc(100% - var(--c-size)) 100%,var(--c-size) 100%,var(--c-size) calc(100% - var(--c-size)),0 calc(100% - var(--c-size)));clip-path:polygon(0 var(--c-size),var(--c-size) var(--c-size),var(--c-size) 0,calc(100% - var(--c-size)) 0,calc(100% - var(--c-size)) var(--c-size),100% var(--c-size),100% calc(100% - var(--c-size)),calc(100% - var(--c-size)) calc(100% - var(--c-size)),calc(100% - var(--c-size)) 100%,var(--c-size) 100%,var(--c-size) calc(100% - var(--c-size)),0 calc(100% - var(--c-size)))}.custome-window:after,.custome-window:before{content:""!important;position:absolute!important;opacity:1!important;z-index:-1!important;top:0;right:0;bottom:0;left:0}.custome-window:before{background-color:#000!important;background-color:var(--accent)!important}.custome-window:after{top:var(--c-size);right:var(--c-size);bottom:var(--c-size);left:var(--c-size);background-color:var(--bg)}.custome-window.show{visibility:visible;-webkit-animation:u6gfuwp .2s cubic-bezier(.445,.05,.55,.95);animation:u6gfuwp .2s cubic-bezier(.445,.05,.55,.95)}@-webkit-keyframes u6gfuwp{0%{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}@keyframes u6gfuwp{0%{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}.custome-window--header{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important;border-bottom:var(--c-size) solid var(--accent);min-height:var(--h-toolbar);max-height:var(--h-toolbar);-webkit-clip-path:polygon(0 var(--c-size),var(--c-size) var(--c-size),var(--c-size) 0,calc(100% - var(--c-size)) 0,calc(100% - var(--c-size)) var(--c-size),100% var(--c-size),100% 100%,0 100%);clip-path:polygon(0 var(--c-size),var(--c-size) var(--c-size),var(--c-size) 0,calc(100% - var(--c-size)) 0,calc(100% - var(--c-size)) var(--c-size),100% var(--c-size),100% 100%,0 100%)}.custome-window--header .v-toolbar__content{min-height:inherit;max-height:inherit;padding-top:0}.custome-window--header .v-toolbar__content[\\:has\\(\\%3E.space\\)]{padding-left:32px}.custome-window--header .v-toolbar__content:has(>.space){padding-left:32px}.custome-window--header .v-toolbar__content h2{--c:#fff;cursor:default}.custome-window--header .v-btn{background-color:transparent!important;box-shadow:none!important;min-width:-webkit-max-content!important;min-width:-moz-max-content!important;min-width:max-content!important;width:-webkit-max-content!important;width:-moz-max-content!important;width:max-content!important;padding:0!important}.custome-window--content{overflow-y:auto;height:calc(100% - var(--h-toolbar));display:flex;flex-direction:column;-webkit-clip-path:polygon(0 0,100% 0,100% calc(100% - var(--c-size)),calc(100% - var(--c-size)) calc(100% - var(--c-size)),calc(100% - var(--c-size)) 100%,var(--c-size) 100%,var(--c-size) calc(100% - var(--c-size)),0 calc(100% - var(--c-size)));clip-path:polygon(0 0,100% 0,100% calc(100% - var(--c-size)),calc(100% - var(--c-size)) calc(100% - var(--c-size)),calc(100% - var(--c-size)) 100%,var(--c-size) 100%,var(--c-size) calc(100% - var(--c-size)),0 calc(100% - var(--c-size)))}.custome-window--content>.v-form:not(.not_bg),.custome-window--content>.v-sheet:not(.v-list):not(.not_bg),.custome-window--content>.v-window:not(.not_bg){background-color:#faf9f8!important;background-color:var(--secondary)!important;border:2px solid #000!important;border:2px solid var(--accent)!important;padding:20px;overflow:auto;height:100%}',""]),t.exports=e},652:function(t,r,n){"use strict";n(31),n(43);r.a={methods:{customeDrag:function(t){var r,n=t.currentTarget.className.includes("custome-window v-sheet")?t.currentTarget:t.currentTarget.parentNode,e=!1;function o(t){return t.type.includes("mouse")?t:t.type.includes("touch")?t.touches[0]:void 0}e=!0,r=[n.offsetTop-o(t).clientY,n.offsetLeft-o(t).clientX];var c=function(t){var c=document.getElementById("home"),l=o(t).clientY+r[0],d=o(t).clientX+r[1],m=c.getBoundingClientRect().height-n.getBoundingClientRect().height,w=c.getBoundingClientRect().width-n.getBoundingClientRect().width;t.type.includes("mouse")&&t.preventDefault(),e&&l>0&&l<m&&(n.style.top="".concat(l,"px"),n.style.bottom="initial",n.style.margin="initial"),e&&d>55&&d<w&&(n.style.left="".concat(d,"px"),n.style.right="initial")},l=function(){window.onmouseup=null,window.onmousemove=null,window.ontouchend=null,window.ontouchmove=null,e=!1};window.onmouseup=function(){return l()},window.onmousemove=function(t){return c(t)},window.ontouchend=function(){return l()},window.ontouchmove=function(t){return c(t)}}}}},709:function(t,r,n){var content=n(746);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("65385638",content,!0,{sourceMap:!1})},715:function(t,r,n){"use strict";n.r(r);var e=n(626),o=n(681),c=n(756),l=n(753),d=n(707),m=n(708),w=n(24),f=(n(31),n(43),n(3),n(13),n(81),n(181)),v=n(278),h=n(652),x=f.Contract,_={name:"FillFormComponent",mixins:[v.a,h.a],data:function(){return{form_id:"1",auxBtn:!0,mainWindow:!0,fillFormWindow:!1,mintNftWindow:!1,windowStep:1,dataFormFill:[],nftPreview:n(744),zIndex:void 0}},watch:{mainWindow:function(t){if(t){var r=document.querySelector("#fillForm #mainWindow");this.$store.commit("increaseIndex",r)}},fillFormWindow:function(t){if(t){var r=document.getElementById("fillFormWindow");this.$store.commit("increaseIndex",r)}}},mounted:function(){this.zIndex=this.$store.state.zIndex,this.getForm()},methods:{fillForm:function(){if(!this.$wallet.isSignedIn())return alert("Please login to use this function.");this.mainWindow=!1,this.fillFormWindow=!0},changeSelect:function(t){t.error=!1},getForm:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("contract.owling.testnet",!t.$wallet.isSignedIn()){r.next=5;break}return n=new x(t.$wallet.account(),"contract.owling.testnet",{viewMethods:["form_by_id"],sender:t.$wallet.account()}),r.next=5,n.form_by_id({form_id:t.form_id}).then((function(r){for(var i=0;i<r.questions.length;i++){var n={question:r.questions[i],answer:void 0,answers:r.possibly_answers[i],type:void 0,error:!1};""===r.possibly_answers[i][0]?n.type="input":n.type="select",t.dataFormFill.push(n)}t.auxBtn=!0})).catch((function(t){console.log(t)}));case 5:case"end":return r.stop()}}),r)})))()},verifyQuestion:function(t){return t.includes("?")?t:t+"?"},goBack:function(){1===this.windowStep?this.clearWindow():(this.windowStep--,this.windowStep<this.dataFormFill.length&&(this.auxBtn=!0))},clearWindow:function(){this.windowStep=1,this.dataFormFill.forEach((function(t){t.answer=void 0})),this.fillFormWindow=!1,this.mintNftWindow=!1,this.mainWindow=!0,this.auxBtn=!0},openFillForm:function(){if(!this.$wallet.isSignedIn())return alert("Please login to use this function.");this.mainWindow=!1,this.fillFormWindow=!0,this.auxBtn=!0},inputAnswer:function(t){t.answer&&""!==t.answer?t.error=!1:t.error=!0},nextStep:function(){this.windowStep<this.dataFormFill.length&&(this.windowStep++,this.auxBtn=!0),this.windowStep===this.dataFormFill.length&&(this.auxBtn=!1)},nextStep2:function(t){t.answer&&""!==t.answer?(this.windowStep<this.dataFormFill.length&&(this.windowStep++,this.auxBtn=!0),this.windowStep===this.dataFormFill.length&&(this.auxBtn=!1)):t.error=!0},doneForm:function(t){var r=this;return Object(w.a)(regeneratorRuntime.mark((function n(){var e,o,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.answer||""===t.answer){n.next=10;break}if("contract.owling.testnet",!r.$wallet.isSignedIn()){n.next=8;break}for(e=new x(r.$wallet.account(),"contract.owling.testnet",{changeMethods:["submit_form"],sender:r.$wallet.account()}),o=[],i=0;i<r.dataFormFill.length;i++)o.push(r.dataFormFill[i].answer);return n.next=8,e.submit_form({form_id:r.form_id,answers:o}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}));case 8:n.next=11;break;case 10:t.error=!0;case 11:case"end":return n.stop()}}),n)})))()}}},y=(n(745),n(28)),component=Object(y.a)(_,(function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"fillForm"}},[r("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.mainWindow,expression:"mainWindow"}],attrs:{id:"mainWindow",width:"max-content",height:"165px",styles:"right: 0; bottom: 10%; z-index: ".concat(t.zIndex)},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"content",fn:function(){return[r("div",{staticClass:"divcol center fill tcenter",staticStyle:{gap:"10px",border:"2px solid var(--accent)",padding:"20px"}},[r("h4",{staticClass:"p",staticStyle:{cursor:"default"}},[t._v("We invite you to fill in a form")]),t._v(" "),r(e.a,{staticClass:"btn",staticStyle:{"--w":"167px"},on:{click:function(r){return t.fillForm()}}},[t._v("next")])],1)]},proxy:!0}])}),t._v(" "),r("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.fillFormWindow,expression:"fillFormWindow"}],attrs:{id:"fillFormWindow",width:"959px",height:"max-content",padding:"30px"},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"space fill_w"},[r("h2",{staticClass:"p tup"},[t._v("fill form")]),t._v(" "),r("aside",{staticClass:"custome-window--header-controls"},[r(e.a,{on:{click:function(r){return t.goBack()}}},[r("img",{attrs:{src:n(376),alt:"go back icon"}})]),t._v(" "),r(e.a,{on:{click:function(r){return t.clearWindow()}}},[r("img",{attrs:{src:n(375),alt:"close icon"}})])],1)])]},proxy:!0},{key:"content",fn:function(){return[r("h4",[t._v("Please fill out each answer to the best of your ability")]),t._v(" "),r(d.a,{model:{value:t.windowStep,callback:function(r){t.windowStep=r},expression:"windowStep"}},t._l(t.dataFormFill,(function(n,i){return r(m.a,{key:i,attrs:{value:i+1}},[r(o.a,{staticClass:"divcol",on:{submit:function(r){return r.preventDefault(),t.nextStep()}}},[r("label",{staticClass:"mb-4",attrs:{for:"question ".concat(i+1)}},[t._v(t._s(t.verifyQuestion(n.question))+" \n              "),r("span",{staticStyle:{"--c":"var(--error)"}},[t._v("This question is required*")])]),t._v(" "),"input"==n.type?r(l.a,{attrs:{id:"question ".concat(i+1),solo:"",label:"Type1 your answer here . . .",error:n.error},on:{input:function(r){return t.inputAnswer(n)}},model:{value:n.answer,callback:function(r){t.$set(n,"answer",r)},expression:"item.answer"}}):r(c.a,{attrs:{id:"question ".concat(i+1),items:n.answers,"hide-details":"",solo:"",label:"Select answer...",error:n.error},on:{change:function(r){return t.changeSelect(n)}},model:{value:n.answer,callback:function(r){t.$set(n,"answer",r)},expression:"item.answer"}}),t._v(" "),t.auxBtn?r(e.a,{staticClass:"btn align",staticStyle:{"--w":"164.19px"},on:{click:function(r){return t.nextStep2(n)}}},[t._v("\n              "+t._s("next")+"\n            ")]):r(e.a,{staticClass:"btn align",staticStyle:{"--w":"164.19px"},on:{click:function(r){return t.doneForm(n)}}},[t._v("\n              "+t._s("done")+"\n            ")]),t._v(" "),r("span",{staticClass:"alignr",staticStyle:{"font-size":"14px","--stroke":".5px"}},[t._v(t._s(t.windowStep)+"/"+t._s(t.dataFormFill.length))])],1)],1)})),1)]},proxy:!0}])}),t._v(" "),r("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.mintNftWindow,expression:"mintNftWindow"}],attrs:{id:"mintNftWindow",width:"31.25em",height:"max-content",padding:"30px",styles:"top: 0"},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"space fill_w"},[r("h2",{staticClass:"p tup"},[t._v("fill form")]),t._v(" "),r("aside",{staticClass:"custome-window--header-controls"},[r(e.a,{on:{click:function(r){t.mintNftWindow=!1,t.mainWindow=!0,t.auxBtn=!0,t.clearWindow()}}},[r("img",{attrs:{src:n(376),alt:"go back icon"}})]),t._v(" "),r(e.a,{on:{click:function(r){return t.clearWindow()}}},[r("img",{attrs:{src:n(375),alt:"close icon"}})])],1)])]},proxy:!0},{key:"content",fn:function(){return[r("h4",[t._v("Thank you for your time")]),t._v(" "),r("img",{staticClass:"nft-preview",attrs:{src:t.nftPreview,alt:"your nft"}}),t._v(" "),r("aside",{staticClass:"controls center mt-5"},[r(e.a,{staticClass:"btn2"},[t._v("generate")]),t._v(" "),r(e.a,{staticClass:"btn2"},[t._v("mint")])],1)]},proxy:!0}])})],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{WindowsWindow:n(649).default})},744:function(t,r,n){t.exports=n.p+"img/nft-preview-2.cebcb52.jpg"},745:function(t,r,n){"use strict";n(709)},746:function(t,r,n){var e=n(18)(!1);e.push([t.i,':root{--primary:#d9d0b1;--secondary:#faf9f8;--accent:#000;--active:#5803c5;--error:#ff4040;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(90deg,#5803c5,#6b79f7);--c:var(--clr);--font1:"Pixelmix",sans-serif;--font2:"Pixelmix",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-header:100px;--w-navbar:55px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#111011;--clr-hover:#270330;--clr-scroll:var(--secondary);--clr-bg-scroll:var(--primary);--clr-card:var(--primary);--clr-btn:#fff;--clr-text-btn:var(--clr);--clr-badge:var(--secondary);--clr-text-badge:var(--clr);--clr-line:var(--accent)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#d9d0b1!important;background-color:var(--primary)!important}.clr_secondary{background-color:#faf9f8!important;background-color:var(--secondary)!important}.clr_accent{background-color:#000!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#fillForm .custome-window:not(#mainWindow){left:0;right:0;margin:auto}#fillForm #fillFormWindow ::-webkit-scrollbar{display:none}#fillForm #mintNftWindow .nft-preview{--w:100%;aspect-ratio:1/1}#fillForm #mintNftWindow .controls{--gap:30px;width:calc(100% - 50px);grid-gap:var(--gap);gap:var(--gap);margin-left:auto}#fillForm #mintNftWindow .controls .v-btn{--w:126px;--h:34px;--min-h:34px;--fs:13px}',""]),t.exports=e}}]);