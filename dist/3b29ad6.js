(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{723:function(t,e,r){"use strict";r(37),r(49);e.a={methods:{customeDrag:function(t){var e,r=t.currentTarget.className.includes("custome-window v-sheet")?t.currentTarget:t.currentTarget.parentNode,n=!1;function o(t){return t.type.includes("mouse")?t:t.type.includes("touch")?t.touches[0]:void 0}n=!0,e=[r.offsetTop-o(t).clientY,r.offsetLeft-o(t).clientX];var c=function(t){var c=document.getElementById("home"),l=o(t).clientY+e[0],d=o(t).clientX+e[1],m=c.getBoundingClientRect().height-r.getBoundingClientRect().height,f=c.getBoundingClientRect().width-r.getBoundingClientRect().width;t.type.includes("mouse")&&t.preventDefault(),n&&l>0&&l<m&&(r.style.top="".concat(l,"px"),r.style.bottom="initial",r.style.margin="initial"),n&&d>55&&d<f&&(r.style.left="".concat(d,"px"),r.style.right="initial")},l=function(){window.onmouseup=null,window.onmousemove=null,window.ontouchend=null,window.ontouchmove=null,n=!1};window.onmouseup=function(){return l()},window.onmousemove=function(t){return c(t)},window.ontouchend=function(){return l()},window.ontouchmove=function(t){return c(t)}}}}},890:function(t,e,r){var content=r(907);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("5aaf8b54",content,!0,{sourceMap:!1})},905:function(t,e,r){var map={"./af":737,"./af.js":737,"./ar":738,"./ar-dz":739,"./ar-dz.js":739,"./ar-kw":740,"./ar-kw.js":740,"./ar-ly":741,"./ar-ly.js":741,"./ar-ma":742,"./ar-ma.js":742,"./ar-sa":743,"./ar-sa.js":743,"./ar-tn":744,"./ar-tn.js":744,"./ar.js":738,"./az":745,"./az.js":745,"./be":746,"./be.js":746,"./bg":747,"./bg.js":747,"./bm":748,"./bm.js":748,"./bn":749,"./bn-bd":750,"./bn-bd.js":750,"./bn.js":749,"./bo":751,"./bo.js":751,"./br":752,"./br.js":752,"./bs":753,"./bs.js":753,"./ca":754,"./ca.js":754,"./cs":755,"./cs.js":755,"./cv":756,"./cv.js":756,"./cy":757,"./cy.js":757,"./da":758,"./da.js":758,"./de":759,"./de-at":760,"./de-at.js":760,"./de-ch":761,"./de-ch.js":761,"./de.js":759,"./dv":762,"./dv.js":762,"./el":763,"./el.js":763,"./en-au":764,"./en-au.js":764,"./en-ca":765,"./en-ca.js":765,"./en-gb":766,"./en-gb.js":766,"./en-ie":767,"./en-ie.js":767,"./en-il":768,"./en-il.js":768,"./en-in":769,"./en-in.js":769,"./en-nz":770,"./en-nz.js":770,"./en-sg":771,"./en-sg.js":771,"./eo":772,"./eo.js":772,"./es":773,"./es-do":774,"./es-do.js":774,"./es-mx":775,"./es-mx.js":775,"./es-us":776,"./es-us.js":776,"./es.js":773,"./et":777,"./et.js":777,"./eu":778,"./eu.js":778,"./fa":779,"./fa.js":779,"./fi":780,"./fi.js":780,"./fil":781,"./fil.js":781,"./fo":782,"./fo.js":782,"./fr":783,"./fr-ca":784,"./fr-ca.js":784,"./fr-ch":785,"./fr-ch.js":785,"./fr.js":783,"./fy":786,"./fy.js":786,"./ga":787,"./ga.js":787,"./gd":788,"./gd.js":788,"./gl":789,"./gl.js":789,"./gom-deva":790,"./gom-deva.js":790,"./gom-latn":791,"./gom-latn.js":791,"./gu":792,"./gu.js":792,"./he":793,"./he.js":793,"./hi":794,"./hi.js":794,"./hr":795,"./hr.js":795,"./hu":796,"./hu.js":796,"./hy-am":797,"./hy-am.js":797,"./id":798,"./id.js":798,"./is":799,"./is.js":799,"./it":800,"./it-ch":801,"./it-ch.js":801,"./it.js":800,"./ja":802,"./ja.js":802,"./jv":803,"./jv.js":803,"./ka":804,"./ka.js":804,"./kk":805,"./kk.js":805,"./km":806,"./km.js":806,"./kn":807,"./kn.js":807,"./ko":808,"./ko.js":808,"./ku":809,"./ku.js":809,"./ky":810,"./ky.js":810,"./lb":811,"./lb.js":811,"./lo":812,"./lo.js":812,"./lt":813,"./lt.js":813,"./lv":814,"./lv.js":814,"./me":815,"./me.js":815,"./mi":816,"./mi.js":816,"./mk":817,"./mk.js":817,"./ml":818,"./ml.js":818,"./mn":819,"./mn.js":819,"./mr":820,"./mr.js":820,"./ms":821,"./ms-my":822,"./ms-my.js":822,"./ms.js":821,"./mt":823,"./mt.js":823,"./my":824,"./my.js":824,"./nb":825,"./nb.js":825,"./ne":826,"./ne.js":826,"./nl":827,"./nl-be":828,"./nl-be.js":828,"./nl.js":827,"./nn":829,"./nn.js":829,"./oc-lnc":830,"./oc-lnc.js":830,"./pa-in":831,"./pa-in.js":831,"./pl":832,"./pl.js":832,"./pt":833,"./pt-br":834,"./pt-br.js":834,"./pt.js":833,"./ro":835,"./ro.js":835,"./ru":836,"./ru.js":836,"./sd":837,"./sd.js":837,"./se":838,"./se.js":838,"./si":839,"./si.js":839,"./sk":840,"./sk.js":840,"./sl":841,"./sl.js":841,"./sq":842,"./sq.js":842,"./sr":843,"./sr-cyrl":844,"./sr-cyrl.js":844,"./sr.js":843,"./ss":845,"./ss.js":845,"./sv":846,"./sv.js":846,"./sw":847,"./sw.js":847,"./ta":848,"./ta.js":848,"./te":849,"./te.js":849,"./tet":850,"./tet.js":850,"./tg":851,"./tg.js":851,"./th":852,"./th.js":852,"./tk":853,"./tk.js":853,"./tl-ph":854,"./tl-ph.js":854,"./tlh":855,"./tlh.js":855,"./tr":856,"./tr.js":856,"./tzl":857,"./tzl.js":857,"./tzm":858,"./tzm-latn":859,"./tzm-latn.js":859,"./tzm.js":858,"./ug-cn":860,"./ug-cn.js":860,"./uk":861,"./uk.js":861,"./ur":862,"./ur.js":862,"./uz":863,"./uz-latn":864,"./uz-latn.js":864,"./uz.js":863,"./vi":865,"./vi.js":865,"./x-pseudo":866,"./x-pseudo.js":866,"./yo":867,"./yo.js":867,"./zh-cn":868,"./zh-cn.js":868,"./zh-hk":869,"./zh-hk.js":869,"./zh-mo":870,"./zh-mo.js":870,"./zh-tw":871,"./zh-tw.js":871};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=905},906:function(t,e,r){"use strict";r(890)},907:function(t,e,r){var n=r(22)(!1);n.push([t.i,':root{--primary:#d9d0b1;--secondary:#faf9f8;--accent:#000;--active:#5803c5;--error:#ff4040;--warning:#ffc260;--success:#3cd4a0;--clr-gradient:linear-gradient(90deg,#5803c5,#6b79f7);--c:var(--clr);--font1:"Pixelmix",sans-serif;--font2:"Pixelmix",sans-serif;--fw:initial;--margin-global:6em;--parent:1600px;--subparent:1900px;--h-header:100px;--w-navbar:55px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,0.3));--sombra-card:0px 4px 4px rgba(0,0,0,0.25);--sombra-btn:0px 4px 4px rgba(0,0,0,0.25)}:root.light{--bg-ap:#fff;--clr:#111011;--clr-hover:#270330;--clr-scroll:var(--secondary);--clr-bg-scroll:var(--primary);--clr-card:var(--primary);--clr-btn:#fff;--clr-text-btn:var(--clr);--clr-badge:var(--secondary);--clr-text-badge:var(--clr);--clr-line:var(--accent)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px){:root{--margin-global:clamp(1em,5vw,4em)}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:#d9d0b1!important;background-color:var(--primary)!important}.clr_secondary{background-color:#faf9f8!important;background-color:var(--secondary)!important}.clr_accent{background-color:#000!important;background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:linear-gradient(90deg,#5803c5,#6b79f7)!important;background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}#newForm{--margin-input:30px}#newForm .custome-window:not(#mainWindow):not(#statsFormComplement){left:0;right:0;margin:auto}#newForm .custome-window:not(#mainWindow):not(#statsFormComplement) .custome-window--content .v-form .v-btn,#newForm .custome-window:not(#mainWindow):not(#statsFormComplement) .custome-window--content .v-sheet:not(.v-list) .v-btn{--h:52px}#newForm .container-answers{margin-bottom:50px}#newForm .container-answers>.v-input{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding-top:5px!important}#newForm .container-answers>.v-input label{color:rgba(0,0,0,.6)}#newForm .container-answers>.v-input .pts{--bg:var(--primary);--b:2px solid var(--accent);--fs:12px;--fs-label:12px;--w-size:60px;--h-size:20px;--min-w:var(--w-size)!important;--max-w:var(--w-size)!important;--w:var(--w-size)!important;--min-h:var(--h-size)!important;--max-h:var(--h-size)!important;--h:var(--h-size)!important;--p:0 5px}#newForm .container-answers>.v-input .pts *{text-align:center}#newForm .container-answers>.v-input .pts .v-label{margin:auto!important;left:0!important;right:0!important}#newForm .container-answers>.v-input .pts .v-text-field__details{display:none!important}#newForm .container-answers>.v-input .pts .v-input__slot{margin-bottom:auto!important}#newForm .container-answers>.v-input .v-input__append-inner{margin:auto!important}#newForm #zeroForm .input-nfts .v-input__control{margin-right:20px}#newForm #zeroForm .input-nfts .v-input__append-outer{margin:0!important}#newForm #zeroForm .input-nfts .v-input__append-outer img{margin-bottom:var(--margin-input)}#newForm #zeroForm span+h4{margin-top:10px}#newForm #editForm .container-edit>:not(.v-input){margin-bottom:var(--margin-input)}#newForm #editForm .container-edit .v-btn,#newForm #editForm .container-edit .v-input{--h:36px!important;--min-h:none!important}#newForm #editForm .container-edit .v-btn{--fs:14px;max-width:126px!important}.v-dialog .custome-window{visibility:visible!important}',""]),t.exports=n},913:function(t,e,r){"use strict";r.r(e);var n,o,c,l=r(699),d=r(984),m=r(893),f=r(284),w=r(161),h=r(141),v=r(54),x=r(983),_=(r(223),r(35),r(904)),j=r(26),y=r(10),k=(r(34),r(424),r(37),r(49),r(83),r(174)),F=r(203),C=r(721),W=r.n(C),S=r(305),z=r(723),Z=k.Contract,A={name:"NewFormComponent",mixins:[S.a,z.a],data:function(){return{formId:null,mainWindow:!0,createWindow:!1,zeroFormWindow:!1,editFormWindow:!1,statsFormWindow:!1,previewImg_zero:void 0,formZero:{title:void 0,errorTitle:!1,slots:[{question:void 0,error:!1,dataAnswers:[{answer:void 0,pts:void 0,error:!1},{answer:void 0,pts:void 0,error:!1},{answer:void 0,pts:void 0,error:!1}]}],nfts:[{title:void 0,url:void 0,error:!1,errorUrl:!1},{title:void 0,url:void 0,error:!1,errorUrl:!1}]},formEdit:[],formStats:{maxpts:"-",responses:"-",average:"-"},dataControlsChart:["this week","this month"],selection:0,chartSeries:[],chartOptions:{defaultLocale:"en",grid:{show:!0},colors:["#5803C5"],chart:{stacked:!1,toolbar:{show:!1,autoSelected:"zoom"}},stroke:{curve:"smooth",lineCap:"butt",width:4.5},dataLabels:{enabled:!1},markers:{size:0,style:"hollow",colors:["#000"],strokeColors:["#fff"],strokeWidth:4,hover:{size:8}},tooltip:{custom:function(t){t.series;var e=t.seriesIndex,r=t.dataPointIndex,n=t.w,o=Object(y.a)(n.globals.initialSeries[e].data[r],2)[1];return"<span>Responses: <b>".concat(o,"</b></span>")},marker:{show:!1},style:{fontSize:"11px"}},legend:{show:!1,position:"top",horizontalAlign:"start"},yaxis:{labels:{style:{fontSize:"16px",fontFamily:"Pixelmix, sans-serif",fontWeight:800}}},xaxis:{type:"datetime",categories:[1991,1992,1993,1994,1995,1996,1997,1998],labels:{style:{fontSize:"16px",fontFamily:"Pixelmix, sans-serif",fontWeight:800}},axisBorder:{show:!1},axisTicks:{show:!1}}}}},watch:{mainWindow:function(t){if(t){var e=document.querySelector("#newForm #mainWindow");this.$store.commit("increaseIndex",e)}},createWindow:function(t){if(t){var e=document.getElementById("createForm");this.$store.commit("increaseIndex",e)}},zeroFormWindow:function(t){if(t){var e=document.getElementById("zeroForm");this.$store.commit("increaseIndex",e)}},editFormWindow:function(t){if(t){var e=document.getElementById("editForm");this.$store.commit("increaseIndex",e)}},statsFormWindow:function(t){if(t){var e=document.getElementById("statsForm"),r=document.getElementById("statsFormComplement");this.$store.commit("increaseIndex",e),this.$store.commit("increaseIndex",r)}}},mounted:function(){this.queryApollo()},methods:{updateData:function(t){switch(t){case"this week":this.selection=0,this.getGrafic(this.formId),this.statsForm(this.formId);break;case"this month":this.selection=1,this.getGrafic(this.formId),this.statsForm(this.formId);break;default:this.selection=2,this.getGrafic(this.formId),this.statsForm(this.formId)}},getGrafic:function(t){var e=this;return Object(j.a)(regeneratorRuntime.mark((function r(){var o,c,l,d,m,f,i,w,h,v,x,j,y,k;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.formId=t,o=e.$apollo.provider.clients.defaultClient,c=Object(F.a)(n||(n=Object(_.a)(["\n        query ALL_CHARACTERS_QUERY($fecha: BigInt, $formId: String) {\n          submitForms(where: {fecha_gte: $fecha, form_id: $formId}, first: 1000) {\n            answers\n            fecha\n            final_image\n            final_result\n            form_id\n            id\n            total_points\n            wallet_id\n          }\n        }\n      "]))),0===e.selection?l=7:1===e.selection&&(l=31),d=1e6*W()().subtract(l,"d").valueOf(),r.next=7,o.query({query:c,variables:{fecha:String(d),formId:t.id}});case 7:for(m=r.sent,f=m.data.submitForms,i=0;i<f.length;i++)f[i].date=W()(f[i].fecha/1e6).format("YYYY-MM-DD");for(w=[],h=0;h<l;h++){for(v=1e6*W()().subtract(h,"d").valueOf(),x=W()(v/1e6).format("YYYY-MM-DD"),j=new Date(x).valueOf(),y=0,k=0;k<f.length;k++)x===f[k].date&&(y+=1);w.push([j,y])}e.chartSeries=[{name:"Responses",data:w}];case 13:case"end":return r.stop()}}),r)})))()},copyUrl:function(t){navigator.clipboard.writeText(t)},queryApollo:function(){var t=this;return Object(j.a)(regeneratorRuntime.mark((function e(){var r,n,c,i,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$apollo.provider.clients.defaultClient,n=Object(F.a)(o||(o=Object(_.a)(["\n        query ALL_CHARACTERS_QUERY($user_id: String) {\n          forms(first: 1000, where: {creator: $user_id}) {\n            id\n            questions\n            possibly_answers\n            creator\n            fecha\n            results\n            title\n            creation\n          }\n        }\n      "]))),e.next=4,r.query({query:n,variables:{user_id:t.$wallet.getAccountId()}});case 4:for(c=e.sent,i=0;i<c.data.forms.length;i++)l={id:c.data.forms[i].id,name:c.data.forms[i].title,url:window.location.host+window.location.pathname+c.data.forms[i].id},t.formEdit.push(l);case 6:case"end":return e.stop()}}),e)})))()},statsForm:function(t){var e=this;return Object(j.a)(regeneratorRuntime.mark((function r(){var n,o,l,d,m,f,w,h,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.formId=t,e.formStats={maxpts:"-",responses:"-",average:"-"},n=e.$apollo.provider.clients.defaultClient,o=Object(F.a)(c||(c=Object(_.a)(["\n        query ALL_CHARACTERS_QUERY($fecha: BigInt, $formId: String) {\n          submitForms(where: {fecha_gte: $fecha, form_id: $formId}, first: 1000) {\n            answers\n            fecha\n            final_image\n            final_result\n            form_id\n            id\n            total_points\n            wallet_id\n          }\n        }\n      "]))),0===e.selection?l=7:1===e.selection&&(l=31),d=1e6*W()().subtract(l,"d").valueOf(),r.next=8,n.query({query:o,variables:{fecha:String(d),formId:t.id}});case 8:for(m=r.sent,f=m.data.submitForms,w=0,h=0,i=0;i<f.length;i++)h+=Number(f[i].total_points),Number(f[i].total_points)>w&&(w=Number(f[i].total_points));0!==w&&(e.formStats.maxpts=w),e.formStats.average=(h/f.length).toFixed(2)||"-",e.formStats.responses=String(f.length);case 16:case"end":return r.stop()}}),r)})))()},createForm:function(){if(!this.$wallet.isSignedIn())return alert("Please login to use this function.");this.mainWindow=!1,this.createWindow=!0},save:function(){var t=this;return Object(j.a)(regeneratorRuntime.mark((function e(){var r,n,i,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("backend.owlling.near",!t.$wallet.isSignedIn()){e.next=10;break}if(!t.validateForm()){e.next=10;break}for(r=new Z(t.$wallet.account(),"backend.owlling.near",{changeMethods:["create_form"],sender:t.$wallet.account()}),n={title:t.formZero.title,questions:[],possibly_answers:[],answer_points:[],results:[],results_images:[]},i=0;i<t.formZero.slots.length;i++){for(n.questions.push(t.formZero.slots[i].question),o=[],c=[],l=0;l<t.formZero.slots[i].dataAnswers.length;l++)o.push(t.formZero.slots[i].dataAnswers[l].answer),c.push(Number(t.formZero.slots[i].dataAnswers[l].pts)||0);n.possibly_answers.push(o),n.answer_points.push(c)}for(d=0;d<t.formZero.nfts.length;d++)n.results.push(t.formZero.nfts[d].title),n.results_images.push(t.formZero.nfts[d].url);return localStorage.tipohash="form",e.next=10,r.create_form(n,"300000000000000","30000000000000000000000").then((function(e){t.$refs.modal.openModal("success")})).catch((function(t){console.log(t)}));case 10:case"end":return e.stop()}}),e)})))()},validateForm:function(){var title,t,e,r,n;this.formZero.title&&""!==this.formZero.title?title=!0:(this.formZero.errorTitle=!0,title=!1);for(var i=0;i<this.formZero.slots.length;i++){this.formZero.slots[i].question&&""!==this.formZero.slots[i].question?!1!==t&&(t=!0):(this.formZero.slots[i].error=!0,t=!1);for(var o=0;o<this.formZero.slots[i].dataAnswers.length;o++)this.formZero.slots[i].dataAnswers[o].answer&&""!==this.formZero.slots[i].dataAnswers[o].answer&&this.formZero.slots[i].dataAnswers[o].pts&&""!==this.formZero.slots[i].dataAnswers[o].pts?!1!==e&&(e=!0):(this.formZero.slots[i].dataAnswers[o].error=!0,e=!1)}for(var c=0;c<this.formZero.nfts.length;c++)this.formZero.nfts[c].title&&""!==this.formZero.nfts[c].title?!1!==r&&(r=!0):(this.formZero.nfts[c].error=!0,r=!1),this.formZero.nfts[c].url&&""!==this.formZero.nfts[c].url&&this.formZero.nfts[c].url.includes("://")?!1!==n&&(n=!0):(this.formZero.nfts[c].errorUrl=!0,n=!1);return!!(title&&t&&e&&r&&n)},inputTitle:function(){this.formZero.title&&""!==this.formZero.title?this.formZero.errorTitle=!1:this.formZero.errorTitle=!0},inputQuestion:function(t){t.question&&""!==t.question?t.error=!1:t.error=!0},inputAnswer:function(t){t.answer&&""!==t.answer&&t.pts&&""!==t.pts?t.error=!1:t.error=!0},inputNFT:function(t){t.title&&""!==t.title?t.error=!1:t.error=!0},inputURL:function(t){t.url&&""!==t.url&&t.url.includes("://")?t.errorUrl=!1:t.errorUrl=!0},backWindow:function(){this.formZero={title:void 0,errorTitle:!1,slots:[{question:void 0,error:!1,dataAnswers:[{answer:void 0,pts:void 0,error:!1},{answer:void 0,pts:void 0,error:!1},{answer:void 0,pts:void 0,error:!1}]}],nfts:[{title:void 0,url:void 0,error:!1,errorUrl:!1},{title:void 0,url:void 0,error:!1,errorUrl:!1}]}},clearWindow:function(){this.mainWindow=!0,this.createWindow=!1,this.zeroFormWindow=!1,this.editFormWindow=!1,this.statsFormWindow=!1,this.formZero={title:void 0,errorTitle:!1,slots:[{question:void 0,error:!1,dataAnswers:[{answer:void 0,pts:void 0,error:!1},{answer:void 0,pts:void 0,error:!1},{answer:void 0,pts:void 0,error:!1}]}],nfts:[{title:void 0,url:void 0,error:!1,errorUrl:!1},{title:void 0,url:void 0,error:!1,errorUrl:!1}]}},openNewForm:function(){if(!this.$wallet.isSignedIn())return alert("Please login to use this function.");this.clearWindow(),this.mainWindow=!1,this.createWindow=!0}}},I=(r(906),r(28)),component=Object(I.a)(A,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"newForm"}},[e("ModalsNewFormModal",{ref:"modal"}),t._v(" "),e("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.mainWindow,expression:"mainWindow"}],attrs:{id:"mainWindow",bg:"var(--secondary)",width:"326px",height:"max-content",padding:"30px",styles:"right: 0; top: 10%"},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"header",fn:function(){return[e("h2",{staticClass:"p tup align"},[t._v("new form")])]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"divcol center",staticStyle:{gap:"20px"}},[e("img",{staticStyle:{"--w":"169px"},attrs:{src:r(428),alt:"new form image"}}),t._v(" "),e(l.a,{staticClass:"btn",staticStyle:{"--w":"164.19px"},on:{click:function(e){return t.createForm()}}},[t._v("create")])],1)]},proxy:!0}])}),t._v(" "),e("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.createWindow,expression:"createWindow"}],attrs:{id:"createForm",width:"978px",height:"464px",padding:"30px"},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"space fill_w"},[e("h2",{staticClass:"p tup"},[t._v("new form")]),t._v(" "),e("aside",{staticClass:"custome-window--header-controls"},[e(l.a,{on:{click:function(e){return t.clearWindow()}}},[e("img",{attrs:{src:r(413),alt:"go back icon"}})]),t._v(" "),e(l.a,{on:{click:function(e){return t.clearWindow()}}},[e("img",{attrs:{src:r(221),alt:"close icon"}})])],1)])]},proxy:!0},{key:"content",fn:function(){return[e("h4",[t._v("Create or import a form to start gathering data")]),t._v(" "),e(v.a,{staticClass:"spacee",attrs:{color:"var(--secondary)"}},[e("div",{staticClass:"divcol center",staticStyle:{gap:"20px"}},[e("img",{staticStyle:{"--w":"169px"},attrs:{src:r(429),alt:"zero form image"}}),t._v(" "),e(l.a,{staticClass:"btn",staticStyle:{"--w":"164.19px"},on:{click:function(e){t.createWindow=!1,t.zeroFormWindow=!0}}},[t._v("from zero")])],1),t._v(" "),e("div",{staticClass:"divcol center",staticStyle:{gap:"20px"}},[e("img",{staticStyle:{"--w":"169px"},attrs:{src:r(427),alt:"edit form image"}}),t._v(" "),e(l.a,{staticClass:"btn",staticStyle:{"--w":"164.19px"},on:{click:function(e){t.createWindow=!1,t.editFormWindow=!0}}},[t._v("edit")])],1)])]},proxy:!0}])}),t._v(" "),e("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.zeroFormWindow,expression:"zeroFormWindow"}],attrs:{id:"zeroForm",width:"61.125em",height:"628px",padding:"30px",styles:"top: 0"},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"space fill_w"},[e("h2",{staticClass:"p tup"},[t._v("new form - from zero")]),t._v(" "),e("aside",{staticClass:"custome-window--header-controls"},[e(l.a,{on:{click:function(e){t.zeroFormWindow=!1,t.createWindow=!0,t.backWindow()}}},[e("img",{attrs:{src:r(413),alt:"go back icon"}})]),t._v(" "),e(l.a,{on:{click:function(e){return t.clearWindow()}}},[e("img",{attrs:{src:r(221),alt:"close icon"}})])],1)])]},proxy:!0},{key:"content",fn:function(){return[e("h4",[t._v("Fill in the following information")]),t._v(" "),e(m.a,{staticClass:"divcol pb-7 px-12"},[e("div",{staticClass:"acenter",staticStyle:{gap:"10px"}},[e("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),e(x.a,{attrs:{id:"title",solo:"",error:t.formZero.errorTitle},on:{input:function(e){return t.inputTitle()}},model:{value:t.formZero.title,callback:function(e){t.$set(t.formZero,"title",e)},expression:"formZero.title"}})],1),t._v(" "),t._l(t.formZero.slots,(function(n,i){return[e("div",{key:i,staticClass:"acenter",staticStyle:{gap:"10px"}},[e("label",{staticClass:"tup",attrs:{for:"question"}},[t._v("question")]),t._v(" "),e(x.a,{attrs:{id:"question","hide-details":"",solo:"",error:n.error},on:{input:function(e){return t.inputQuestion(n)}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[i>0?e("img",{staticClass:"pointer",attrs:{src:r(416),alt:"delete question icon"},on:{click:function(e){return t.formZero.slots.splice(i)}}}):t._e()]},proxy:!0}],null,!0),model:{value:n.question,callback:function(e){t.$set(n,"question",e)},expression:"item.question"}})],1),t._v(" "),e("section",{key:i,staticClass:"container-answers"},[t._l(n.dataAnswers,(function(o,c){return e(x.a,{key:c,staticClass:"mt-0",attrs:{label:"Answer ".concat(c+1),messages:c+1===n.dataAnswers.length&&n.dataAnswers.length<4?"message":"",error:o.error},on:{input:function(e){return t.inputAnswer(o)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(x.a,{staticClass:"pts",attrs:{solo:"",type:"number",label:"pts",error:o.error},on:{input:function(e){return t.inputAnswer(o)}},model:{value:o.pts,callback:function(e){t.$set(o,"pts",e)},expression:"item2.pts"}})]},proxy:!0},c+1===n.dataAnswers.length&&n.dataAnswers.length>2?{key:"append",fn:function(){return[e("img",{staticClass:"pointer",attrs:{src:r(416),alt:"delete question icon"},on:{click:function(t){return n.dataAnswers.pop()}}})]},proxy:!0}:null,c+1===n.dataAnswers.length&&n.dataAnswers.length<4?{key:"message",fn:function(){return[e("h4",{staticClass:"p end pointer",staticStyle:{"--fs":"12px","--c":"#5803C4",gap:"5px"},on:{click:function(t){return n.dataAnswers.push({answer:void 0,pts:void 0})}}},[t._v("\n                    ADD ANOTHER ANSWER "),e("img",{staticStyle:{"--w":"1.2em"},attrs:{src:r(415),alt:"add icon"}})])]},proxy:!0}:null],null,!0),model:{value:o.answer,callback:function(e){t.$set(o,"answer",e)},expression:"item2.answer"}})})),t._v(" "),e("span",{staticClass:"end",staticStyle:{"font-size":"14px","--stroke":".5px"}},[t._v(t._s(i+1)+"/"+t._s(t.formZero.slots.length))]),t._v(" "),i+1===t.formZero.slots.length&&t.formZero.slots.length<10?e("h4",{staticClass:"p end pointer",staticStyle:{"--c":"#5803C4",gap:"5px"},on:{click:function(e){return t.formZero.slots.push({question:void 0,error:!1,dataAnswers:[{answer:void 0,pts:void 0,error:!1},{answer:void 0,pts:void 0,error:!1},{answer:void 0,pts:void 0,error:!1}]})}}},[t._v("\n                ADD ANOTHER QUESTION "),e("img",{staticStyle:{"--w":"1.2em"},attrs:{src:r(415),alt:"add icon"}})]):t._e()],2)]})),t._v(" "),t._l(t.formZero.nfts,(function(n,i){return e("div",{key:i,staticClass:"acenter",staticStyle:{gap:"10px"}},[e(x.a,{staticStyle:{"--fs":"16px","--w":"100px"},attrs:{solo:"",label:"NFT TITLE",error:n.error},on:{input:function(e){return t.inputNFT(n)}},model:{value:n.title,callback:function(e){t.$set(n,"title",e)},expression:"item.title"}}),t._v(" "),e(x.a,{staticClass:"input-nfts",staticStyle:{"--fs":"16px"},attrs:{solo:"",label:"NFT URL",error:n.errorUrl},on:{input:function(e){return t.inputURL(n)}},scopedSlots:t._u([t.previewImg_zero?{key:"append-outer",fn:function(){return[e("img",{staticStyle:{"--w":"57.56px","--h":"50px"},attrs:{src:t.previewImg_zero,alt:"nft preview"}})]},proxy:!0}:null],null,!0),model:{value:n.url,callback:function(e){t.$set(n,"url",e)},expression:"item.url"}}),t._v(" "),i+1===t.formZero.nfts.length&&t.formZero.nfts.length>2?e("img",{staticClass:"pointer",staticStyle:{"margin-bottom":"var(--margin-input)"},attrs:{src:r(416),alt:"delete nft icon"},on:{click:function(e){return t.formZero.nfts.shift()}}}):t._e()],1)})),t._v(" "),t.formZero.nfts.length<=3?e("h4",{staticClass:"p end pointer",staticStyle:{"--c":"#5803C4",gap:"5px"},on:{click:function(e){return t.formZero.nfts.push({title:void 0,url:void 0,error:!1,errorUrl:!1})}}},[t._v("\n            ADD ANOTHER NFT "),e("img",{staticStyle:{"--w":"1.2em"},attrs:{src:r(415),alt:"add icon"}})]):t._e(),t._v(" "),e(l.a,{staticClass:"btn align",staticStyle:{"--w":"167px"},on:{click:function(e){return t.save()}}},[t._v("save")])],2)]},proxy:!0}])}),t._v(" "),e("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.editFormWindow,expression:"editFormWindow"}],attrs:{id:"editForm",width:"978px",height:"474px",padding:"30px"},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"space fill_w"},[e("h2",{staticClass:"p tup"},[t._v("new form - edit")]),t._v(" "),e("aside",{staticClass:"custome-window--header-controls"},[e(l.a,{on:{click:function(e){t.editFormWindow=!1,t.createWindow=!0}}},[e("img",{attrs:{src:r(413),alt:"go back icon"}})]),t._v(" "),e(l.a,{on:{click:function(e){return t.clearWindow()}}},[e("img",{attrs:{src:r(221),alt:"close icon"}})])],1)])]},proxy:!0},{key:"content",fn:function(){return[e("h4",[t._v("Change status and properties")]),t._v(" "),e(v.a,{staticClass:"divcol pb-7",attrs:{color:"var(--secondary)"}},t._l(t.formEdit,(function(n,i){return e("aside",{key:i,staticClass:"container-edit fwrap acenter",staticStyle:{gap:"20px"}},[e("div",{staticClass:"acenter",staticStyle:{gap:"10px"}},[e("img",{attrs:{src:r(426),alt:"edit icon"}}),t._v(" "),e("h4",{staticClass:"p tup"},[t._v(t._s(n.name))])]),t._v(" "),e(x.a,{attrs:{solo:""},scopedSlots:t._u([{key:"append",fn:function(){return[e("button",{on:{click:function(e){return t.copyUrl(n.url)}}},[e("img",{attrs:{src:r(425),alt:"clip icon"}})])]},proxy:!0}],null,!0),model:{value:n.url,callback:function(e){t.$set(n,"url",e)},expression:"item.url"}}),t._v(" "),e(l.a,{staticClass:"btn2",on:{click:function(e){t.getGrafic(n),t.statsForm(n),t.editFormWindow=!1,t.statsFormWindow=!0}}},[t._v("Stats")])],1)})),0)]},proxy:!0}])}),t._v(" "),e("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.statsFormWindow,expression:"statsFormWindow"}],attrs:{id:"statsForm",width:"978px",height:"max-content",padding:"30px"},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"space fill_w"},[e("h2",{staticClass:"p tup"},[t._v("new form - stats")]),t._v(" "),e("aside",{staticClass:"custome-window--header-controls"},[e(l.a,{on:{click:function(e){t.statsFormWindow=!1,t.editFormWindow=!0}}},[e("img",{attrs:{src:r(413),alt:"go back icon"}})]),t._v(" "),e(l.a,{on:{click:function(e){return t.clearWindow()}}},[e("img",{attrs:{src:r(221),alt:"close icon"}})])],1)])]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"charts fill"},[e(d.a,{staticClass:"charts-controls",attrs:{"background-color":"transparent",mandatory:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},t._l(t.dataControlsChart,(function(r){return e(l.a,{key:r,on:{click:function(e){return t.updateData(r)}}},[t._v("\n              "+t._s(r)+"\n            ")])})),1),t._v(" "),e(v.a,{staticClass:"divcol pb-0",attrs:{color:"var(--secondary)"}},[e("ApexChart",{ref:"chart",attrs:{width:"100%",height:"257px",type:"line",options:t.chartOptions,series:t.chartSeries}})],1)],1)]},proxy:!0}])}),t._v(" "),e("WindowsWindow",{directives:[{name:"show",rawName:"v-show",value:t.statsFormWindow,expression:"statsFormWindow"}],attrs:{id:"statsFormComplement",width:"309.2px",height:"max-content",padding:"0",styles:"right: 0; bottom: 20%"},on:{customeDrag:t.customeDrag},scopedSlots:t._u([{key:"content",fn:function(){return[e(f.a,{staticClass:"menuList",attrs:{color:"transparent"}},[e(w.a,[e(h.b,[t._v(t._s(t.formStats.responses)+" Responses")])],1),t._v(" "),e(w.a,[e(h.b,[t._v(t._s(t.formStats.maxpts)+" High Score")])],1),t._v(" "),e(w.a,[e(h.b,[t._v(t._s(t.formStats.average)+" Average Score")])],1)],1)]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ModalsNewFormModal:r(417).default,WindowsWindow:r(414).default})}}]);