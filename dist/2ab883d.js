(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{277:function(t,n,e){"use strict";var r=e(626);n.a=r.a},653:function(t,n,e){"use strict";e(3),e(13);var r=e(0);function o(t,n){var e=t.changedTouches[0];n.touchendX=e.clientX,n.touchendY=e.clientY,n.end&&n.end(Object.assign(t,n)),function(t){var n=t.touchstartX,e=t.touchendX,r=t.touchstartY,o=t.touchendY;t.offsetX=e-n,t.offsetY=o-r,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&e<n-16&&t.left(t),t.right&&e>n+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&o<r-16&&t.up(t),t.down&&o>r+16&&t.down(t))}(n)}function c(t){var n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,n){var e=t.changedTouches[0];n.touchstartX=e.clientX,n.touchstartY=e.clientY,n.start&&n.start(Object.assign(t,n))}(t,n)},touchend:function(t){return o(t,n)},touchmove:function(t){return function(t,n){var e=t.changedTouches[0];n.touchmoveX=e.clientX,n.touchmoveY=e.clientY,n.move&&n.move(Object.assign(t,n))}(t,n)}}}var l={inserted:function(t,n,e){var o=n.value,l=o.parent?t.parentElement:t,d=o.options||{passive:!0};if(l){var v=c(n.value);l._touchHandlers=Object(l._touchHandlers),l._touchHandlers[e.context._uid]=v,Object(r.t)(v).forEach((function(t){l.addEventListener(t,v[t],d)}))}},unbind:function(t,n,e){var o=n.value.parent?t.parentElement:t;if(o&&o._touchHandlers){var c=o._touchHandlers[e.context._uid];Object(r.t)(c).forEach((function(t){o.removeEventListener(t,c[t])})),delete o._touchHandlers[e.context._uid]}}};n.a=l},662:function(t,n,e){var content=e(663);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("0d135400",content,!0,{sourceMap:!1})},663:function(t,n,e){var r=e(18)(!1);r.push([t.i,':root{--primary:#d9d0b1;--secondary:#faf9f8;--accent:#000;--active:#5803c5;--error:#ff4040;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(90deg,#5803c5,#6b79f7);--c:var(--clr);--font1:"Pixelmix",sans-serif;--font2:"Pixelmix",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-header:100px;--w-navbar:55px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#111011;--clr-hover:#270330;--clr-scroll:var(--secondary);--clr-bg-scroll:var(--primary);--clr-card:var(--primary);--clr-btn:#fff;--clr-text-btn:var(--clr);--clr-badge:var(--secondary);--clr-text-badge:var(--clr);--clr-line:var(--accent)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#d9d0b1!important;background-color:var(--primary)!important}.clr_secondary{background-color:#faf9f8!important;background-color:var(--secondary)!important}.clr_accent{background-color:#000!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}',""]),t.exports=r},669:function(t,n,e){"use strict";var r=e(2),o=(e(31),e(43),e(279),e(14),e(3),e(13),e(44),e(70),e(7),e(10),e(16),e(17),e(8)),c=e(106),l=e(158);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}n.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var n=Object.values(t).includes(!0);this.$emit("input",!n)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,n=function(input){return input.$watch("hasError",(function(n){t.$set(t.errorBag,input._uid,n)}),{immediate:!0})},e={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?e.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(e.valid=n(input)))})):e.valid=n(input),e},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var n=this.watchers.find((function(i){return i._uid===t._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var n=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return n.$emit("submit",t)}}},this.$slots.default)}})},704:function(t,n,e){"use strict";e(7),e(10),e(14),e(16),e(13),e(17);var r=e(2),o=(e(27),e(70),e(3),e(280),e(662),e(653)),c=e(277),l=e(157),d=e(159);function v(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}n.a=d.a.extend({name:"v-window",directives:{Touch:o.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return h(h({},d.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",n=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(n,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(n,i){return t.internalValue===t.getValue(n,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,n){this.isReverse=this.updateReverse(t,n)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,n,e){var r,o,d,v=this,h={click:function(t){t.stopPropagation(),v.changedByDelimiters=!0,e()}},f={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},w=null!==(d=null===(o=(r=this.$scopedSlots)[t])||void 0===o?void 0:o.call(r,{on:h,attrs:f}))&&void 0!==d?d:[this.$createElement(c.a,{props:{icon:!0},attrs:f,on:h},[this.$createElement(l.a,{props:{large:!0}},n)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},w)},genControlIcons:function(){var t=[],n=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&n&&"string"==typeof n){var e=this.genIcon("prev",n,this.prev);e&&t.push(e)}var r=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&r&&"string"==typeof r){var o=this.genIcon("next",r,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var n=(t+1)%this.items.length;return this.items[n].disabled?this.getNextIndex(n):n},getPrevIndex:function(t){var n=(t+this.items.length-1)%this.items.length;return this.items[n].disabled?this.getPrevIndex(n):n},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),n=this.items[t];this.internalValue=this.getValue(n,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),n=this.items[t];this.internalValue=this.getValue(n,t)}},updateReverse:function(t,n){var e=this.items.length,r=e-1;return e<=2?t<n:t===r&&0===n||(0!==t||n!==r)&&t<n}},render:function(t){var n=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var e=this.touch||{left:function(){n.$vuetify.rtl?n.prev():n.next()},right:function(){n.$vuetify.rtl?n.next():n.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:e})}return t("div",data,[this.genContainer()])}})},705:function(t,n,e){"use strict";var r=e(161),o=e(160),c=e(653),l=e(0),d=e(8),v=Object(d.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));n.a=v.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var n=this;this.inTransition&&this.$nextTick((function(){n.computedTransition&&n.inTransition&&(n.windowGroup.transitionHeight=Object(l.g)(t.clientHeight))}))}},render:function(t){var n=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[n.genWindowItem()]})))}})}}]);