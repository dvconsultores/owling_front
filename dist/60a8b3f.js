(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8,11],{277:function(t,r,n){"use strict";var e=n(626);r.a=e.a},653:function(t,r,n){"use strict";n(3),n(13);var e=n(0);function o(t,r){var n=t.changedTouches[0];r.touchendX=n.clientX,r.touchendY=n.clientY,r.end&&r.end(Object.assign(t,r)),function(t){var r=t.touchstartX,n=t.touchendX,e=t.touchstartY,o=t.touchendY;t.offsetX=n-r,t.offsetY=o-e,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<r-16&&t.left(t),t.right&&n>r+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&o<e-16&&t.up(t),t.down&&o>e+16&&t.down(t))}(r)}function c(t){var r={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,r){var n=t.changedTouches[0];r.touchstartX=n.clientX,r.touchstartY=n.clientY,r.start&&r.start(Object.assign(t,r))}(t,r)},touchend:function(t){return o(t,r)},touchmove:function(t){return function(t,r){var n=t.changedTouches[0];r.touchmoveX=n.clientX,r.touchmoveY=n.clientY,r.move&&r.move(Object.assign(t,r))}(t,r)}}}var l={inserted:function(t,r,n){var o=r.value,l=o.parent?t.parentElement:t,d=o.options||{passive:!0};if(l){var v=c(r.value);l._touchHandlers=Object(l._touchHandlers),l._touchHandlers[n.context._uid]=v,Object(e.t)(v).forEach((function(t){l.addEventListener(t,v[t],d)}))}},unbind:function(t,r,n){var o=r.value.parent?t.parentElement:t;if(o&&o._touchHandlers){var c=o._touchHandlers[n.context._uid];Object(e.t)(c).forEach((function(t){o.removeEventListener(t,c[t])})),delete o._touchHandlers[n.context._uid]}}};r.a=l},655:function(t,r,n){var content=n(668);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("63e14e10",content,!0,{sourceMap:!1})},662:function(t,r,n){var content=n(663);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("0d135400",content,!0,{sourceMap:!1})},663:function(t,r,n){var e=n(18)(!1);e.push([t.i,':root{--primary:#d9d0b1;--secondary:#faf9f8;--accent:#000;--active:#5803c5;--error:#ff4040;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(90deg,#5803c5,#6b79f7);--c:var(--clr);--font1:"Pixelmix",sans-serif;--font2:"Pixelmix",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-header:100px;--w-navbar:55px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#111011;--clr-hover:#270330;--clr-scroll:var(--secondary);--clr-bg-scroll:var(--primary);--clr-card:var(--primary);--clr-btn:#fff;--clr-text-btn:var(--clr);--clr-badge:var(--secondary);--clr-text-badge:var(--clr);--clr-line:var(--accent)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#d9d0b1!important;background-color:var(--primary)!important}.clr_secondary{background-color:#faf9f8!important;background-color:var(--secondary)!important}.clr_accent{background-color:#000!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}',""]),t.exports=e},666:function(t,r,n){var content=n(689);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("17899d08",content,!0,{sourceMap:!1})},667:function(t,r,n){"use strict";n(655)},668:function(t,r,n){var e=n(18)(!1);e.push([t.i,':root{--primary:#d9d0b1;--secondary:#faf9f8;--accent:#000;--active:#5803c5;--error:#ff4040;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(90deg,#5803c5,#6b79f7);--c:var(--clr);--font1:"Pixelmix",sans-serif;--font2:"Pixelmix",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-header:100px;--w-navbar:55px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#111011;--clr-hover:#270330;--clr-scroll:var(--secondary);--clr-bg-scroll:var(--primary);--clr-card:var(--primary);--clr-btn:#fff;--clr-text-btn:var(--clr);--clr-badge:var(--secondary);--clr-text-badge:var(--clr);--clr-line:var(--accent)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#d9d0b1!important;background-color:var(--primary)!important}.clr_secondary{background-color:#faf9f8!important;background-color:var(--secondary)!important}.clr_accent{background-color:#000!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#navbar{transform:translateX(-55px);transform:translateX(calc(var(--w-navbar)*-1));z-index:-1}#navbar .v-toolbar__content{flex-direction:column;height:100%!important;padding:0;grid-gap:30px;gap:30px}#navbar .v-toolbar__content .v-btn{padding:2px;box-shadow:none!important;max-height:-webkit-max-content!important;max-height:-moz-max-content!important;max-height:max-content!important;height:-webkit-max-content!important;height:-moz-max-content!important;height:max-content!important}#navbar .v-toolbar__content .v-btn__content{flex-direction:column;grid-gap:10px;gap:10px}',""]),t.exports=e},669:function(t,r,n){"use strict";var e=n(2),o=(n(31),n(43),n(279),n(14),n(3),n(13),n(44),n(70),n(7),n(10),n(16),n(17),n(8)),c=n(106),l=n(158);function d(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}r.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var r=Object.values(t).includes(!0);this.$emit("input",!r)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,r=function(input){return input.$watch("hasError",(function(r){t.$set(t.errorBag,input._uid,r)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(e){e&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=r(input)))})):n.valid=r(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var r=this.watchers.find((function(i){return i._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var r=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return r.$emit("submit",t)}}},this.$slots.default)}})},683:function(t,r,n){"use strict";n.r(r);var e=n(626),o=n(259),c=n(260),l=n(150),d=n(261),v=n(132),f=n(629),h=n(80);n(30),n(44),n(42),n(3),n(46),n(32),n(20),n(10),n(53),n(56),n(38);function m(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(!t)return;if("string"==typeof t)return w(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,r)}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function w(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,n=new Array(r);i<r;i++)n[i]=t[i];return n}var x={name:"NavbarComponent",mixins:[n(278).a],data:function(){return{dataNavbar:[{img:n(380),name:"menu",menu:{about:"About us",newForm:"New Form",fillForm:"Fill a Form",login:"Log in",logout:"Log out"}},{img:n(381),name:"Twitter"},{img:n(379),name:"Instagram"}],menuSelection:void 0,menuList:!1,isClicked:!1}},computed:{menu:function(){return this.dataNavbar[0].menu}},watch:{menuList:function(){var t=this;setTimeout((function(){if(!1===t.isClicked){var r,n=m(document.querySelectorAll(".menuList .v-list-item"));try{var e=function(){var n=r.value;n.onclick=function(){t.isClicked=!0,n.onclick=null}};for(n.s();!(r=n.n()).done;)e()}catch(t){n.e(t)}finally{n.f()}}}),100)}},methods:{}},_=(n(667),n(28)),component=Object(_.a)(x,(function(){var t=this,r=t._self._c;return r("div",[r(h.a,{staticClass:"isolate",attrs:{id:"navbar",color:"transparent",absolute:"","min-height":"100%",width:"var(--w-navbar)"}},t._l(t.dataNavbar,(function(n,i){return r("div",{key:i},["Instagram"===n.name?r(e.a,{class:{openMenuList:"menu"===n.name},attrs:{color:"transparent",ripple:!1,href:"https://www.instagram.com/",target:"_blank"}},[r("img",{staticStyle:{"--w":"55px"},attrs:{src:n.img,alt:"".concat(n.name," icon")}}),t._v(" "),r("span",[t._v(t._s(n.name))])]):"Twitter"===n.name?r(e.a,{class:{openMenuList:"menu"===n.name},attrs:{href:"https://twitter.com/?lang=es",target:"_blank",color:"transparent",ripple:!1}},[r("img",{staticStyle:{"--w":"55px"},attrs:{src:n.img,alt:"".concat(n.name," icon")}}),t._v(" "),r("span",[t._v(t._s(n.name))])]):r(e.a,{class:{openMenuList:"menu"===n.name},attrs:{color:"transparent",ripple:!1}},[r("img",{staticStyle:{"--w":"55px"},attrs:{src:n.img,alt:"".concat(n.name," icon")}}),t._v(" "),r("span",[t._v(t._s(n.name))])])],1)})),0),t._v(" "),r(f.a,{attrs:{right:"","offset-x":"","nudge-left":"-10px",activator:".openMenuList"},model:{value:t.menuList,callback:function(r){t.menuList=r},expression:"menuList"}},[r(c.a,{staticClass:"menuList card"},[r(d.a,{attrs:{"active-class":"activeClass",mandatory:t.isClicked}},[r(l.a,{on:{click:function(r){return t.$parent.openAbout()}}},[r(v.b,[t._v(t._s(t.menu.about))])],1),t._v(" "),r(l.a,{on:{click:function(r){return t.$parent.openNewForm()}}},[r(v.b,[t._v("\n            "+t._s(t.menu.newForm)+"\n          ")]),t._v(" "),r(o.a,{attrs:{large:""}},[t._v("mdi-menu-right")])],1),t._v(" "),r(l.a,{on:{click:function(r){return t.$parent.openFillForm()}}},[r(v.b,[t._v(t._s(t.menu.fillForm))]),t._v(" "),r(o.a,{attrs:{large:""}},[t._v("mdi-menu-right")])],1),t._v(" "),t.isLogged?r(l.a,{on:{click:function(r){return t.$store.commit("signOut")}}},[r(v.b,[t._v(t._s(t.menu.logout))])],1):r(l.a,{on:{click:function(r){t.$parent.$parent.$parent.$parent.$refs.connect.modalConnect=!0}}},[r(v.b,[t._v(t._s(t.menu.login))])],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports},688:function(t,r,n){"use strict";n(666)},689:function(t,r,n){var e=n(18)(!1);e.push([t.i,':root{--primary:#d9d0b1;--secondary:#faf9f8;--accent:#000;--active:#5803c5;--error:#ff4040;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(90deg,#5803c5,#6b79f7);--c:var(--clr);--font1:"Pixelmix",sans-serif;--font2:"Pixelmix",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-header:100px;--w-navbar:55px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#111011;--clr-hover:#270330;--clr-scroll:var(--secondary);--clr-bg-scroll:var(--primary);--clr-card:var(--primary);--clr-btn:#fff;--clr-text-btn:var(--clr);--clr-badge:var(--secondary);--clr-text-badge:var(--clr);--clr-line:var(--accent)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#d9d0b1!important;background-color:var(--primary)!important}.clr_secondary{background-color:#faf9f8!important;background-color:var(--secondary)!important}.clr_accent{background-color:#000!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#home{max-width:1600px!important;max-width:var(--parent)!important;width:100%;margin-left:auto;margin-right:auto;padding-left:55px;padding-left:var(--w-navbar);grid-gap:4em;gap:4em;height:100%;position:relative;isolation:isolate;z-index:10;pointer-events:none}#home *{pointer-events:all}',""]),t.exports=e},704:function(t,r,n){"use strict";n(7),n(10),n(14),n(16),n(13),n(17);var e=n(2),o=(n(27),n(70),n(3),n(280),n(662),n(653)),c=n(277),l=n(157),d=n(159);function v(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}r.a=d.a.extend({name:"v-window",directives:{Touch:o.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return f(f({},d.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",r=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(r,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(r,i){return t.internalValue===t.getValue(r,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,r){this.isReverse=this.updateReverse(t,r)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,r,n){var e,o,d,v=this,f={click:function(t){t.stopPropagation(),v.changedByDelimiters=!0,n()}},h={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},m=null!==(d=null===(o=(e=this.$scopedSlots)[t])||void 0===o?void 0:o.call(e,{on:f,attrs:h}))&&void 0!==d?d:[this.$createElement(c.a,{props:{icon:!0},attrs:h,on:f},[this.$createElement(l.a,{props:{large:!0}},r)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},m)},genControlIcons:function(){var t=[],r=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&r&&"string"==typeof r){var n=this.genIcon("prev",r,this.prev);n&&t.push(n)}var e=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&e&&"string"==typeof e){var o=this.genIcon("next",e,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var r=(t+1)%this.items.length;return this.items[r].disabled?this.getNextIndex(r):r},getPrevIndex:function(t){var r=(t+this.items.length-1)%this.items.length;return this.items[r].disabled?this.getPrevIndex(r):r},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),r=this.items[t];this.internalValue=this.getValue(r,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),r=this.items[t];this.internalValue=this.getValue(r,t)}},updateReverse:function(t,r){var n=this.items.length,e=n-1;return n<=2?t<r:t===e&&0===r||(0!==t||r!==e)&&t<r}},render:function(t){var r=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){r.$vuetify.rtl?r.prev():r.next()},right:function(){r.$vuetify.rtl?r.next():r.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:n})}return t("div",data,[this.genContainer()])}})},705:function(t,r,n){"use strict";var e=n(161),o=n(160),c=n(653),l=n(0),d=n(8),v=Object(d.a)(e.a,Object(o.a)("windowGroup","v-window-item","v-window"));r.a=v.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var r=this;this.inTransition&&this.$nextTick((function(){r.computedTransition&&r.inTransition&&(r.windowGroup.transitionHeight=Object(l.g)(t.clientHeight))}))}},render:function(t){var r=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[r.genWindowItem()]})))}})},758:function(t,r,n){"use strict";n.r(r);var e={name:"HomePage",mixins:[n(278).a],validate:function(t){var r=t.params.slug;return console.log(r),r&&"string"==typeof r},data:function(){return{form_slug:this.$route.params.slug,login:!1,about:!0,newForm:!0,fillForm:!0}},head:function(){return{title:"Home"}},mounted:function(){console.log(this.$route.params.slug)},methods:{openAbout:function(){this.$store.commit("increaseIndex",document.querySelector("#about #mainWindow")),this.$store.commit("increaseIndex",document.querySelector("#about #team")),this.$refs.about.teamWindow=!0},openNewForm:function(){this.$refs.newForm.openNewForm()},openFillForm:function(){this.$refs.fillForm.openFillForm()}}},o=(n(688),n(28)),component=Object(o.a)(e,(function(){var t=this._self._c;return t("div",{staticClass:"divcol",attrs:{id:"home"}},[t("Navbar"),this._v(" "),t("WindowsFillForm",{ref:"fillForm2"})],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{Navbar:n(683).default,WindowsFillForm:n(720).default})}}]);