(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9],{706:function(t,n,r){var content=r(720);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("63e14e10",content,!0,{sourceMap:!1})},718:function(t,n,r){var content=r(742);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("17899d08",content,!0,{sourceMap:!1})},719:function(t,n,r){"use strict";r(706)},720:function(t,n,r){var e=r(22)(!1);e.push([t.i,':root{--primary:#d9d0b1;--secondary:#faf9f8;--accent:#000;--active:#5803c5;--error:#ff4040;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(90deg,#5803c5,#6b79f7);--c:var(--clr);--font1:"Pixelmix",sans-serif;--font2:"Pixelmix",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-header:100px;--w-navbar:55px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#111011;--clr-hover:#270330;--clr-scroll:var(--secondary);--clr-bg-scroll:var(--primary);--clr-card:var(--primary);--clr-btn:#fff;--clr-text-btn:var(--clr);--clr-badge:var(--secondary);--clr-text-badge:var(--clr);--clr-line:var(--accent)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#d9d0b1!important;background-color:var(--primary)!important}.clr_secondary{background-color:#faf9f8!important;background-color:var(--secondary)!important}.clr_accent{background-color:#000!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#navbar{transform:translateX(-55px);transform:translateX(calc(var(--w-navbar)*-1));z-index:-1}#navbar .v-toolbar__content{flex-direction:column;height:100%!important;padding:0;grid-gap:30px;gap:30px}#navbar .v-toolbar__content .v-btn{padding:2px;box-shadow:none!important;max-height:-webkit-max-content!important;max-height:-moz-max-content!important;max-height:max-content!important;height:-webkit-max-content!important;height:-moz-max-content!important;height:max-content!important}#navbar .v-toolbar__content .v-btn__content{flex-direction:column;grid-gap:10px;gap:10px}',""]),t.exports=e},737:function(t,n,r){"use strict";r.r(n);var e=r(677),o=r(278),c=r(279),l=r(159),m=r(280),d=r(141),f=r(678),v=r(89);r(35),r(50),r(47),r(5),r(52),r(37),r(24),r(12),r(60),r(63),r(43);function w(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return h(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}var x={name:"NavbarComponent",mixins:[r(300).a],data:function(){return{dataNavbar:[{img:r(410),name:"menu",menu:{about:"About us",newForm:"New Form",fillForm:"Fill a Form",login:"Log in",logout:"Log out"}},{img:r(411),name:"Twitter"},{img:r(409),name:"Instagram"}],menuSelection:void 0,menuList:!1,isClicked:!1}},computed:{menu:function(){return this.dataNavbar[0].menu}},watch:{menuList:function(){var t=this;setTimeout((function(){if(!1===t.isClicked){var n,r=w(document.querySelectorAll(".menuList .v-list-item"));try{var e=function(){var r=n.value;r.onclick=function(){t.isClicked=!0,r.onclick=null}};for(r.s();!(n=r.n()).done;)e()}catch(t){r.e(t)}finally{r.f()}}}),100)}},methods:{}},_=(r(719),r(32)),component=Object(_.a)(x,(function(){var t=this,n=t._self._c;return n("div",[n(v.a,{staticClass:"isolate",attrs:{id:"navbar",color:"transparent",absolute:"","min-height":"100%",width:"var(--w-navbar)"}},t._l(t.dataNavbar,(function(r,i){return n("div",{key:i},["Instagram"===r.name?n(e.a,{class:{openMenuList:"menu"===r.name},attrs:{color:"transparent",ripple:!1,href:"https://www.instagram.com/",target:"_blank"}},[n("img",{staticStyle:{"--w":"55px"},attrs:{src:r.img,alt:"".concat(r.name," icon")}}),t._v(" "),n("span",[t._v(t._s(r.name))])]):"Twitter"===r.name?n(e.a,{class:{openMenuList:"menu"===r.name},attrs:{href:"https://twitter.com/?lang=es",target:"_blank",color:"transparent",ripple:!1}},[n("img",{staticStyle:{"--w":"55px"},attrs:{src:r.img,alt:"".concat(r.name," icon")}}),t._v(" "),n("span",[t._v(t._s(r.name))])]):n(e.a,{class:{openMenuList:"menu"===r.name},attrs:{color:"transparent",ripple:!1}},[n("img",{staticStyle:{"--w":"55px"},attrs:{src:r.img,alt:"".concat(r.name," icon")}}),t._v(" "),n("span",[t._v(t._s(r.name))])])],1)})),0),t._v(" "),n(f.a,{attrs:{right:"","offset-x":"","nudge-left":"-10px",activator:".openMenuList"},model:{value:t.menuList,callback:function(n){t.menuList=n},expression:"menuList"}},[n(c.a,{staticClass:"menuList card"},[n(m.a,{attrs:{"active-class":"activeClass",mandatory:t.isClicked}},[n(l.a,{on:{click:function(n){return t.$parent.openAbout()}}},[n(d.b,[t._v(t._s(t.menu.about))])],1),t._v(" "),n(l.a,{on:{click:function(n){return t.$parent.openNewForm()}}},[n(d.b,[t._v("\n            "+t._s(t.menu.newForm)+"\n          ")]),t._v(" "),n(o.a,{attrs:{large:""}},[t._v("mdi-menu-right")])],1),t._v(" "),n(l.a,{on:{click:function(n){return t.$parent.openFillForm()}}},[n(d.b,[t._v(t._s(t.menu.fillForm))]),t._v(" "),n(o.a,{attrs:{large:""}},[t._v("mdi-menu-right")])],1),t._v(" "),t.isLogged?n(l.a,{on:{click:function(n){return t.$store.commit("signOut")}}},[n(d.b,[t._v(t._s(t.menu.logout))])],1):n(l.a,{on:{click:function(n){t.$parent.$parent.$parent.$parent.$refs.connect.modalConnect=!0}}},[n(d.b,[t._v(t._s(t.menu.login))])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports},741:function(t,n,r){"use strict";r(718)},742:function(t,n,r){var e=r(22)(!1);e.push([t.i,':root{--primary:#d9d0b1;--secondary:#faf9f8;--accent:#000;--active:#5803c5;--error:#ff4040;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(90deg,#5803c5,#6b79f7);--c:var(--clr);--font1:"Pixelmix",sans-serif;--font2:"Pixelmix",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-header:100px;--w-navbar:55px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#111011;--clr-hover:#270330;--clr-scroll:var(--secondary);--clr-bg-scroll:var(--primary);--clr-card:var(--primary);--clr-btn:#fff;--clr-text-btn:var(--clr);--clr-badge:var(--secondary);--clr-text-badge:var(--clr);--clr-line:var(--accent)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#d9d0b1!important;background-color:var(--primary)!important}.clr_secondary{background-color:#faf9f8!important;background-color:var(--secondary)!important}.clr_accent{background-color:#000!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#home{max-width:1600px!important;max-width:var(--parent)!important;width:100%;margin-left:auto;margin-right:auto;padding-left:55px;padding-left:var(--w-navbar);grid-gap:4em;gap:4em;height:100%;position:relative;isolation:isolate;z-index:10;pointer-events:none}#home *{pointer-events:all}',""]),t.exports=e},757:function(t,n){},777:function(t,n,r){"use strict";r.r(n);var e=r(677),o=r(743),c=r(842),l=r(837),m=r(838),d=r(839),f=r(26),v=(r(36),r(49),r(5),r(15),r(83),r(172)),w=r(300),h=r(701),x=v.Contract,_={name:"FillFormComponent",mixins:[w.a,h.a],data:function(){return{form_id:"1",auxBtn:!0,mainWindow:!0,fillFormWindow:!1,mintNftWindow:!1,windowStep:1,dataFormFill:[],nftPreview:r(735),zIndex:void 0}},watch:{mainWindow:function(t){if(t){var n=document.querySelector("#fillForm #mainWindow");this.$store.commit("increaseIndex",n)}},fillFormWindow:function(t){if(t){var n=document.getElementById("fillFormWindow");this.$store.commit("increaseIndex",n)}}},mounted:function(){this.zIndex=this.$store.state.zIndex,this.getForm()},methods:{fillForm:function(){if(!this.$wallet.isSignedIn())return alert("Please login to use this function.");this.mainWindow=!1,this.fillFormWindow=!0},changeSelect:function(t){t.error=!1},getForm:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("contract.owling.testnet",!t.$wallet.isSignedIn()){n.next=5;break}return r=new x(t.$wallet.account(),"contract.owling.testnet",{viewMethods:["form_by_id"],sender:t.$wallet.account()}),n.next=5,r.form_by_id({form_id:t.form_id}).then((function(n){for(var i=0;i<n.questions.length;i++){var r={question:n.questions[i],answer:void 0,answers:n.possibly_answers[i],type:void 0,error:!1};""===n.possibly_answers[i][0]?r.type="input":r.type="select",t.dataFormFill.push(r)}t.auxBtn=!0})).catch((function(t){console.log(t)}));case 5:case"end":return n.stop()}}),n)})))()},verifyQuestion:function(t){return t.includes("?")?t:t+"?"},goBack:function(){1===this.windowStep?this.clearWindow():(this.windowStep--,this.windowStep<this.dataFormFill.length&&(this.auxBtn=!0))},clearWindow:function(){this.windowStep=1,this.dataFormFill.forEach((function(t){t.answer=void 0})),this.fillFormWindow=!1,this.mintNftWindow=!1,this.mainWindow=!0,this.auxBtn=!0},openFillForm:function(){if(!this.$wallet.isSignedIn())return alert("Please login to use this function.");this.mainWindow=!1,this.fillFormWindow=!0,this.auxBtn=!0},inputAnswer:function(t){t.answer&&""!==t.answer?t.error=!1:t.error=!0},nextStep:function(){this.windowStep<this.dataFormFill.length&&(this.windowStep++,this.auxBtn=!0),this.windowStep===this.dataFormFill.length&&(this.auxBtn=!1)},nextStep2:function(t){t.answer&&""!==t.answer?(this.windowStep<this.dataFormFill.length&&(this.windowStep++,this.auxBtn=!0),this.windowStep===this.dataFormFill.length&&(this.auxBtn=!1)):t.error=!0},doneForm:function(t){var n=this;return Object(f.a)(regeneratorRuntime.mark((function r(){var e,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.answer||""===t.answer){r.next=10;break}if("contract.owling.testnet",!n.$wallet.isSignedIn()){r.next=8;break}for(e=new x(n.$wallet.account(),"contract.owling.testnet",{changeMethods:["submit_form"],sender:n.$wallet.account()}),o=[],i=0;i<n.dataFormFill.length;i++)o.push(n.dataFormFill[i].answer);return r.next=8,e.submit_form({form_id:n.form_id,answers:o}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}));case 8:r.next=11;break;case 10:t.error=!0;case 11:case"end":return r.stop()}}),r)})))()}}},y=(r(736),r(32)),component=Object(y.a)(_,(function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"fillForm2"}},[n("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.mainWindow,expression:"mainWindow"}],attrs:{id:"mainWindow",width:"max-content",height:"165px",styles:"right: 0; bottom: 10%; z-index: ".concat(t.zIndex)},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"divcol center fill tcenter",staticStyle:{gap:"10px",border:"2px solid var(--accent)",padding:"20px"}},[n("h4",{staticClass:"p",staticStyle:{cursor:"default"}},[t._v("Wee invite you to fill in a form")]),t._v(" "),n(e.a,{staticClass:"btn",staticStyle:{"--w":"167px"},on:{click:function(n){return t.fillForm()}}},[t._v("next")])],1)]},proxy:!0}])}),t._v(" "),n("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.fillFormWindow,expression:"fillFormWindow"}],attrs:{id:"fillFormWindow",width:"959px",height:"max-content",padding:"30px"},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"space fill_w"},[n("h2",{staticClass:"p tup"},[t._v("fill form")]),t._v(" "),n("aside",{staticClass:"custome-window--header-controls"},[n(e.a,{on:{click:function(n){return t.goBack()}}},[n("img",{attrs:{src:r(406),alt:"go back icon"}})]),t._v(" "),n(e.a,{on:{click:function(n){return t.clearWindow()}}},[n("img",{attrs:{src:r(405),alt:"close icon"}})])],1)])]},proxy:!0},{key:"content",fn:function(){return[n("h4",[t._v("Please fill out each answer to the best of your ability")]),t._v(" "),n(m.a,{model:{value:t.windowStep,callback:function(n){t.windowStep=n},expression:"windowStep"}},t._l(t.dataFormFill,(function(r,i){return n(d.a,{key:i,attrs:{value:i+1}},[n(o.a,{staticClass:"divcol",on:{submit:function(n){return n.preventDefault(),t.nextStep()}}},[n("label",{staticClass:"mb-4",attrs:{for:"question ".concat(i+1)}},[t._v(t._s(t.verifyQuestion(r.question))+" \n              "),n("span",{staticStyle:{"--c":"var(--error)"}},[t._v("This question is required*")])]),t._v(" "),"input"==r.type?n(l.a,{attrs:{id:"question ".concat(i+1),solo:"",label:"Type1 your answer here . . .",error:r.error},on:{input:function(n){return t.inputAnswer(r)}},model:{value:r.answer,callback:function(n){t.$set(r,"answer",n)},expression:"item.answer"}}):n(c.a,{attrs:{id:"question ".concat(i+1),items:r.answers,"hide-details":"",solo:"",label:"Select answer...",error:r.error},on:{change:function(n){return t.changeSelect(r)}},model:{value:r.answer,callback:function(n){t.$set(r,"answer",n)},expression:"item.answer"}}),t._v(" "),t.auxBtn?n(e.a,{staticClass:"btn align",staticStyle:{"--w":"164.19px"},on:{click:function(n){return t.nextStep2(r)}}},[t._v("\n              "+t._s("next")+"\n            ")]):n(e.a,{staticClass:"btn align",staticStyle:{"--w":"164.19px"},on:{click:function(n){return t.doneForm(r)}}},[t._v("\n              "+t._s("done")+"\n            ")]),t._v(" "),n("span",{staticClass:"alignr",staticStyle:{"font-size":"14px","--stroke":".5px"}},[t._v(t._s(t.windowStep)+"/"+t._s(t.dataFormFill.length))])],1)],1)})),1)]},proxy:!0}])}),t._v(" "),n("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.mintNftWindow,expression:"mintNftWindow"}],attrs:{id:"mintNftWindow",width:"31.25em",height:"max-content",padding:"30px",styles:"top: 0"},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"space fill_w"},[n("h2",{staticClass:"p tup"},[t._v("fill form")]),t._v(" "),n("aside",{staticClass:"custome-window--header-controls"},[n(e.a,{on:{click:function(n){t.mintNftWindow=!1,t.mainWindow=!0,t.auxBtn=!0,t.clearWindow()}}},[n("img",{attrs:{src:r(406),alt:"go back icon"}})]),t._v(" "),n(e.a,{on:{click:function(n){return t.clearWindow()}}},[n("img",{attrs:{src:r(405),alt:"close icon"}})])],1)])]},proxy:!0},{key:"content",fn:function(){return[n("h4",[t._v("Thank you for your time")]),t._v(" "),n("img",{staticClass:"nft-preview",attrs:{src:t.nftPreview,alt:"your nft"}}),t._v(" "),n("aside",{staticClass:"controls center mt-5"},[n(e.a,{staticClass:"btn2"},[t._v("generate")]),t._v(" "),n(e.a,{staticClass:"btn2"},[t._v("mint")])],1)]},proxy:!0}])})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{WindowsWindow:r(698).default})},844:function(t,n,r){"use strict";r.r(n);r(5),r(84);var e=r(756),o=r.n(e),c={name:"HomePage",mixins:[r(300).a],validate:function(t){var n=t.params.slug;return console.log(n),n&&"string"==typeof n},data:function(){return{form_slug:this.$route.params.slug,login:!1,about:!0,newForm:!0,fillForm:!0}},head:function(){return{title:"Home"}},mounted:function(){this.descryp()},methods:{descryp:function(){var t=o.a.AES.decrypt(this.form_slug,"owling"),n=t.toString(o.a.enc.Utf8);console.log(n)},openAbout:function(){this.$store.commit("increaseIndex",document.querySelector("#about #mainWindow")),this.$store.commit("increaseIndex",document.querySelector("#about #team")),this.$refs.about.teamWindow=!0},openNewForm:function(){this.$refs.newForm.openNewForm()},openFillForm:function(){this.$refs.fillForm.openFillForm()}}},l=(r(741),r(32)),component=Object(l.a)(c,(function(){var t=this._self._c;return t("div",{staticClass:"divcol",attrs:{id:"home"}},[t("Navbar"),this._v(" "),t("WindowsFillForm2",{ref:"fillForm2"})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Navbar:r(737).default,WindowsFillForm2:r(777).default})}}]);