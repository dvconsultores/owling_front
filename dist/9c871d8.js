(window.webpackJsonp=window.webpackJsonp||[]).push([[6,13],{645:function(t,r,o){var content=o(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("4ff65f50",content,!0,{sourceMap:!1})},646:function(t,r,o){"use strict";o.r(r);var n=o(48),e=o(80),c=(o(27),{name:"WindowComponent",props:{show:{type:Boolean,default:!0},styles:{type:String,default:void 0},width:{type:String,default:"539px"},height:{type:String,default:"420px"},bg:{type:String,default:"transparent"},padding:{type:String,default:"1em"}},mounted:function(){var t=this,r=this.$refs["custome-window"].$el;this.$slots.header||(r.addEventListener("mousedown",(function(r){return t.$emit("customeDrag",r)})),r.addEventListener("touchstart",(function(r){return t.$emit("customeDrag",r)})))}}),l=(o(647),o(28)),component=Object(l.a)(c,(function(){var t=this,r=t._self._c;return r(n.a,{ref:"custome-window",staticClass:"custome-window",class:{show:t.show},style:"--w: ".concat(t.width,"; --h: ").concat(t.height,"; ").concat(t.$slots.header?"--h-toolbar: 46px":void 0,"; ").concat(t.styles),on:{mousedown:function(r){return t.$store.commit("increaseIndex",r)},touchstart:function(r){return t.$store.commit("increaseIndex",r)}}},[t.$slots.header?r(e.a,{staticClass:"custome-window--header",on:{mousedown:function(r){return t.$emit("customeDrag",r)},touchstart:function(r){return t.$emit("customeDrag",r)}}},[t._t("header")],2):t._e(),t._v(" "),r(n.a,{staticClass:"custome-window--content",style:"padding: ".concat(t.padding,"; ").concat(t.$slots.header?"calc(100% - var(--h-toolbar))":"height: 100%"),attrs:{color:t.bg}},[t._t("content")],2)],1)}),[],!1,null,null,null);r.default=component.exports},647:function(t,r,o){"use strict";o(645)},648:function(t,r,o){var n=o(18)(!1);n.push([t.i,':root{--primary:#d9d0b1;--secondary:#faf9f8;--accent:#000;--active:#5803c5;--error:#ff4040;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(90deg,#5803c5,#6b79f7);--c:var(--clr);--font1:"Pixelmix",sans-serif;--font2:"Pixelmix",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-header:100px;--w-navbar:55px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#111011;--clr-hover:#270330;--clr-scroll:var(--secondary);--clr-bg-scroll:var(--primary);--clr-card:var(--primary);--clr-btn:#fff;--clr-text-btn:var(--clr);--clr-badge:var(--secondary);--clr-text-badge:var(--clr);--clr-line:var(--accent)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#d9d0b1!important;background-color:var(--primary)!important}.clr_secondary{background-color:#faf9f8!important;background-color:var(--secondary)!important}.clr_accent{background-color:#000!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.custome-window{position:absolute!important;visibility:hidden;--w:initial;--max-w:none;--min-w:none;--h:initial;--max-h:none;--min-h:none;--bg:var(--clr-card);--c:var(--clr);--b:initial;--p:0;--f:initial;--t:initial;width:var(--w)!important;max-width:var(--max-w)!important;min-width:var(--min-w)!important;height:var(--h)!important;max-height:var(--max-h)!important;min-height:var(--min-h)!important;background:var(--bg)!important;color:var(--clr)!important;color:var(--c)!important;border:var(--b)!important;transform:var(--t);filter:var(--f);--c-size:4.5px;padding:var(--c-size);position:relative;isolation:isolate;--c-size:6px}.custome-window,.custome-window:after,.custome-window:before{-webkit-clip-path:polygon(0 var(--c-size),var(--c-size) var(--c-size),var(--c-size) 0,calc(100% - var(--c-size)) 0,calc(100% - var(--c-size)) var(--c-size),100% var(--c-size),100% calc(100% - var(--c-size)),calc(100% - var(--c-size)) calc(100% - var(--c-size)),calc(100% - var(--c-size)) 100%,var(--c-size) 100%,var(--c-size) calc(100% - var(--c-size)),0 calc(100% - var(--c-size)));clip-path:polygon(0 var(--c-size),var(--c-size) var(--c-size),var(--c-size) 0,calc(100% - var(--c-size)) 0,calc(100% - var(--c-size)) var(--c-size),100% var(--c-size),100% calc(100% - var(--c-size)),calc(100% - var(--c-size)) calc(100% - var(--c-size)),calc(100% - var(--c-size)) 100%,var(--c-size) 100%,var(--c-size) calc(100% - var(--c-size)),0 calc(100% - var(--c-size)))}.custome-window:after,.custome-window:before{content:""!important;position:absolute!important;opacity:1!important;z-index:-1!important;top:0;right:0;bottom:0;left:0}.custome-window:before{background-color:#000!important;background-color:var(--accent)!important}.custome-window:after{top:var(--c-size);right:var(--c-size);bottom:var(--c-size);left:var(--c-size);background-color:var(--bg)}.custome-window.show{visibility:visible;-webkit-animation:uji4ud8 .2s cubic-bezier(.445,.05,.55,.95);animation:uji4ud8 .2s cubic-bezier(.445,.05,.55,.95)}@-webkit-keyframes uji4ud8{0%{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}@keyframes uji4ud8{0%{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}.custome-window--header{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important;border-bottom:var(--c-size) solid var(--accent);min-height:var(--h-toolbar);max-height:var(--h-toolbar);-webkit-clip-path:polygon(0 var(--c-size),var(--c-size) var(--c-size),var(--c-size) 0,calc(100% - var(--c-size)) 0,calc(100% - var(--c-size)) var(--c-size),100% var(--c-size),100% 100%,0 100%);clip-path:polygon(0 var(--c-size),var(--c-size) var(--c-size),var(--c-size) 0,calc(100% - var(--c-size)) 0,calc(100% - var(--c-size)) var(--c-size),100% var(--c-size),100% 100%,0 100%)}.custome-window--header .v-toolbar__content{min-height:inherit;max-height:inherit;padding-top:0}.custome-window--header .v-toolbar__content[\\:has\\(\\%3E.space\\)]{padding-left:32px}.custome-window--header .v-toolbar__content:has(>.space){padding-left:32px}.custome-window--header .v-toolbar__content h2{--c:#fff;cursor:default}.custome-window--header .v-btn{background-color:transparent!important;box-shadow:none!important;min-width:-webkit-max-content!important;min-width:-moz-max-content!important;min-width:max-content!important;width:-webkit-max-content!important;width:-moz-max-content!important;width:max-content!important;padding:0!important}.custome-window--content{overflow-y:auto;height:calc(100% - var(--h-toolbar));display:flex;flex-direction:column;-webkit-clip-path:polygon(0 0,100% 0,100% calc(100% - var(--c-size)),calc(100% - var(--c-size)) calc(100% - var(--c-size)),calc(100% - var(--c-size)) 100%,var(--c-size) 100%,var(--c-size) calc(100% - var(--c-size)),0 calc(100% - var(--c-size)));clip-path:polygon(0 0,100% 0,100% calc(100% - var(--c-size)),calc(100% - var(--c-size)) calc(100% - var(--c-size)),calc(100% - var(--c-size)) 100%,var(--c-size) 100%,var(--c-size) calc(100% - var(--c-size)),0 calc(100% - var(--c-size)))}.custome-window--content>.v-form:not(.not_bg),.custome-window--content>.v-sheet:not(.v-list):not(.not_bg),.custome-window--content>.v-window:not(.not_bg){background-color:#faf9f8!important;background-color:var(--secondary)!important;border:2px solid #000!important;border:2px solid var(--accent)!important;padding:20px;overflow:auto;height:100%}',""]),t.exports=n},661:function(t,r,o){t.exports=o.p+"img/form-img.fbf789d.png"},662:function(t,r,o){t.exports=o.p+"img/zero-form-img.3a048b1.png"},663:function(t,r,o){t.exports=o.p+"img/edit-form-img.732c345.png"},680:function(t,r,o){var map={"./bg-drawing-editor.png":681,"./cancel.png":682,"./edit-form-img.png":663,"./form-img.png":661,"./label-editor.png":683,"./statistics-form-img.png":684,"./success.png":685,"./zero-form-img.png":662};function n(t){var r=e(t);return o(r)}function e(t){if(!o.o(map,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=e,t.exports=n,n.id=680},681:function(t,r,o){t.exports=o.p+"img/bg-drawing-editor.3b7cf03.png"},682:function(t,r,o){t.exports=o.p+"img/cancel.149fdb0.png"},683:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABSCAYAAAC14+EtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKsSURBVHgB7Z2BbaNAEEWHkwsgHbiElEAquSvhUoF9ndxVEtKBr4K4g7gDZzZCER4vCV5wyFfek5Cl1bJ4eQaG2QVXdV2vzSwtfXYHxy6ktC1fr/aPWyvAm24/qrNEH71eYzOR6+PKl1+VVZt+4dGOd/7R2uWUtnXr6z1YGdWIOp/exwn9yXHWxx8GkiBOFMSJsrIF8Av3Npb5deKPFZBp68kv5v/s67H3PhZ9r1wfFxEXL+5O+3x4vrMCbuqbY2zLly8pzn9QWysg10dOlaIgThTEiYI4URAnCuJEQZwoiBNl1d0UbvuFfqf+4Dd9J9ltv0GuQp0mZsBT9iPWgzeazI30KHL7lCNOFMSJgjhRhpLM//16dVKQGYpfe502lO0Nhjj4/tr1CzxGWFuYBtHV+XBKRVacByy/Y1kuQ12a0f+mpHkpJ/srDddkRkrux8yj4VQpCuJEQZwoi4yAwxttDAKdJgaCuZFzxC1IF4S0/bKUtfKApQlVt3FdTpWiIE4UxImyyDWum2vfZx1HIya0lcs6/M1keX76Njd2+fYeM9vc2Xzce/t1vyDum5RdWURczAx0UVRjBcRsxECdvYV0nG9zU7jNxzGZjVK87bMfQRTnwQunSlUQJwriAAAAAAC+LXGSa24OxOtE19KnKae0P1T/2ih8H+7jREGcKIgTBXGiIE4UyclCc0W5l5J7JO09rhmlc8SJgjhRECcK4kRBnCijxKXIKD0fF5fc6wvhc+CIEwVxoiBOFMSJgjhRRuUq3xsRzr3m6Nq5xC7KnTwSvVTOcw444kRBnCiIEwVxoiBOlEkj4EMjwkPR5lwoR4NzwREnCuJEQZwoiBMFcaJcRVyK+NIr1+NS+ud+cA5HnCiIEwVxoiBOFMSJgjhRECcK4kRBnCiIEwVxorwAP5gciwFQFJoAAAAASUVORK5CYII="},684:function(t,r,o){t.exports=o.p+"img/statistics-form-img.d041dde.png"},685:function(t,r,o){t.exports=o.p+"img/success.68f8589.png"},686:function(t,r,o){t.exports=o.p+"img/edit-form-preview-img.f2a8c77.jpg"},707:function(t,r,o){"use strict";o.r(r);var n=o(624),e=o(642),c={name:"AlertsComponent",data:function(){return{newFormModal:!1,globalKey:void 0,editFormModal:!1}},methods:{openModal:function(t){this.globalKey=t,this.newFormModal=!0}}},l=o(28),component=Object(l.a)(c,(function(){var t=this,r=t._self._c;return r("div",[r(e.a,{attrs:{"max-width":"max-content"},model:{value:t.newFormModal,callback:function(r){t.newFormModal=r},expression:"newFormModal"}},[r("WindowsWindow",{attrs:{show:!1,bg:"var(--secondary)",padding:"40px",height:"max-content",styles:"position: relative !important"},scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"space fill_w"},[r("h2",{staticClass:"p tup"},[t._v("new form")]),t._v(" "),r(n.a,{on:{click:function(r){t.newFormModal=!1}}},[r("img",{attrs:{src:o(375),alt:"close icon"}})])],1)]},proxy:!0},{key:"content",fn:function(){return[r("img",{attrs:{src:o(680)("./".concat(t.globalKey,".png")),alt:"".concat(t.globalKey," image")}})]},proxy:!0}])})],1),t._v(" "),r(e.a,{attrs:{"max-width":"max-content"},model:{value:t.editFormModal,callback:function(r){t.editFormModal=r},expression:"editFormModal"}},[r("WindowsWindow",{attrs:{show:!1,bg:"var(--secondary)",padding:"40px",height:"max-content",styles:"position: relative !important"},scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"space fill_w"},[r("h2",{staticClass:"p tup"},[t._v("new form - edit - preview")]),t._v(" "),r(n.a,{on:{click:function(r){t.editFormModal=!1}}},[r("img",{attrs:{src:o(375),alt:"close icon"}})])],1)]},proxy:!0},{key:"content",fn:function(){return[r("img",{attrs:{src:o(686),alt:"preview image"}})]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{WindowsWindow:o(646).default})}}]);