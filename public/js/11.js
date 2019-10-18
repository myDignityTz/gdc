(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{0:function(t,e,s){"use strict";function a(t,e,s,a,i,r,n,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):i&&(l=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return a}))},3:function(t,e,s){"use strict";var a={data:function(){return{form:{password:"",email:"",remember:!1}}},methods:{login:function(){var t=this;this.$inertia.post("/login",this.form).then((function(e){t.$emit("close")}))},cancel:function(){this.$emit("close")}}},i=s(0),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[t._m(0),t._v(" "),s("div",{staticClass:"px-6"},[s("div",{staticClass:"flex mb-6"},[s("div",{staticClass:"w-full"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"email"}},[t._v("Email Address")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-input w-full",attrs:{id:"email",type:"email",required:"",autocomplete:"email",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flex mb-6"},[s("div",{staticClass:"w-full"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-input w-full",attrs:{id:"password",type:"password",required:"",autocomplete:"current-password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"mb-6"},[s("div",{staticClass:"flex justify-between"},[s("div",{staticClass:"flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.remember,expression:"form.remember"}],staticClass:"form-checkbox",attrs:{type:"checkbox",name:"remember",id:"remember"},domProps:{checked:Array.isArray(t.form.remember)?t._i(t.form.remember,null)>-1:t.form.remember},on:{change:function(e){var s=t.form.remember,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.form,"remember",s.concat([null])):r>-1&&t.$set(t.form,"remember",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.form,"remember",i)}}}),t._v(" "),s("label",{staticClass:"ml-2",attrs:{for:"remember"}},[t._v("Remember me")])])])])]),t._v(" "),s("footer",{staticClass:"bg-purple-100 py-4 px-6 flex justify-end items-center"},[s("button",{staticClass:"bg-purple-200 text-purple-700 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded mr-3",on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Sign In")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"px-6 py-6"},[e("h2",{staticClass:"border-b pb-4 text-xs uppercase tracking-wider"},[this._v("Sign In")])])}],!1,null,null,null).exports,n={data:function(){return{form:{email:"",name:"",password:"",passwordConfirm:""}}},methods:{login:function(){var t=this;this.$inertia.post("/register",{name:this.form.name,email:this.form.email,password:this.form.password,"password-confirm":this.form.passwordConfirm}).then((function(e){t.$emit("close")})).catch((function(t){}))},cancel:function(){this.$emit("close")}}},o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[t._m(0),t._v(" "),s("div",{staticClass:"px-6"},[s("div",{staticClass:"flex mb-6"},[s("div",{staticClass:"w-full"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"name"}},[t._v("Full Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input w-full",attrs:{id:"name",required:"",autofocus:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flex mb-6"},[s("div",{staticClass:"w-full"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"email"}},[t._v("Email Address")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-input w-full",attrs:{id:"email",type:"email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flex mb-6 -mx-3"},[s("div",{staticClass:"w-1/2 px-3"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-input w-full",attrs:{id:"password",type:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"w-1/2 px-3"},[s("div",{staticClass:"mb-6"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"password-confirm"}},[t._v("Confirm Password")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.passwordConfirm,expression:"form.passwordConfirm"}],staticClass:"form-input w-full",attrs:{id:"password-confirm",type:"password"},domProps:{value:t.form.passwordConfirm},on:{input:function(e){e.target.composing||t.$set(t.form,"passwordConfirm",e.target.value)}}})])])])])]),t._v(" "),s("footer",{staticClass:"bg-purple-100 py-4 px-6 flex justify-end items-center"},[s("button",{staticClass:"bg-purple-200 text-purple-700 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded mr-3",on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Register")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"px-6 py-6"},[e("h2",{staticClass:"border-b pb-4 text-xs uppercase tracking-wider"},[this._v("Register")])])}],!1,null,null,null).exports,l={props:{title:String},data:function(){return{options:{height:"auto",width:"450px",scrollable:!1}}},computed:{user:function(){return this.$page.auth.user},isAuthenticated:function(){return!!this.$page.auth.user},today:function(){return new Date}},watch:{title:{immediate:!0,handler:function(t){document.title=t}}},methods:{login:function(){this.$modal.show(r,{},this.options)},register:function(){this.$modal.show(o,{},this.options).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},c=Object(i.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("header",{staticClass:"bg-purple-700 py-5"},[s("nav",{staticClass:"w-2/3 mx-auto"},[s("div",{staticClass:"flex items-center justify-between"},[s("div",{staticClass:"flex items-center text-purple-300"},[s("inertia-link",{staticClass:"text-white font-bold pr-4",attrs:{href:"/"}},[t._v("GDC")]),t._v(" "),s("inertia-link",{staticClass:"hover:text-white px-4",class:{"text-white":t.route().current("about")},attrs:{href:"/about"}},[t._v("About")]),t._v(" "),s("inertia-link",{staticClass:"hover:text-white px-4",class:{"text-white":t.route().current("stories")},attrs:{href:"/stories"}},[t._v("Stories")]),t._v(" "),s("inertia-link",{staticClass:"hover:text-white px-4",class:{"text-white":t.route().current("how-we-work")},attrs:{href:"/how_we_work"}},[t._v("How We Work")]),t._v(" "),s("inertia-link",{staticClass:"hover:text-white px-4",class:{"text-white":t.route().current("contact")},attrs:{href:"/contact"}},[t._v("Contact")])],1),t._v(" "),s("div",{staticClass:"flex items-center"},[t.isAuthenticated?[s("inertia-link",{staticClass:"text-white px-3 hover:underline",attrs:{href:"/home"}},[t._v(t._s(t.user.name))])]:[s("button",{staticClass:"text-white px-3 text-xs uppercase tracking-wider font-semibold hover:underline",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Sign in")]),t._v(" "),s("button",{staticClass:"text-white px-3 text-xs uppercase tracking-wider font-semibold hover:underline",on:{click:function(e){return e.preventDefault(),t.register(e)}}},[t._v("Register")])],t._v(" "),s("inertia-link",{staticClass:"ml-4 bg-white text-blue-700 px-4 py-2 flex items-center rounded",attrs:{href:"/report_issues"}},[s("i",{staticClass:"ri-add-line"}),t._v(" "),s("span",{staticClass:"ml-2 leading-none text-xs uppercase tracking-wider font-semibold"},[t._v("Report Issue")])])],2)])])]),t._v(" "),s("article",[t._t("default")],2),t._v(" "),s("footer",{staticClass:"py-8 bg-blue-900"},[s("div",{staticClass:"w-2/3 mx-auto"},[s("div",{staticClass:"flex items-center justify-between"},[s("div",{staticClass:"text-white"},[t._v("© Copyright "+t._s(t.today.getFullYear())+", The Expert.")]),t._v(" "),t._m(0)])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"flex items-center"},[s("a",{staticClass:"px-2 text-blue-100 hover:text-blue-300 flex items-center",attrs:{href:"#"}},[s("i",{staticClass:"ri-facebook-box-fill"}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("Facebook")])]),t._v(" "),s("a",{staticClass:"px-2 text-blue-100 hover:text-blue-300 flex items-center",attrs:{href:"#"}},[s("i",{staticClass:"ri-instagram-fill"}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("Instagram")])]),t._v(" "),s("a",{staticClass:"px-2 text-blue-100 hover:text-blue-300 flex items-center",attrs:{href:"#"}},[s("i",{staticClass:"ri-twitter-fill"}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("Twitter")])])])}],!1,null,null,null);e.a=c.exports},30:function(t,e,s){"use strict";s.r(e);var a={components:{Layout:s(3).a}},i=s(0),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",{attrs:{title:"The Expert - About"}},[s("div",{staticClass:"w-full"},[s("section",{staticClass:"bg-purple-700 py-24"},[s("div",{staticClass:"w-2/3 mx-auto"},[s("header",{staticClass:"mb-4"},[s("h1",{staticClass:"text-3xl font-semibold text-white"},[t._v("About Us")])]),t._v(" "),s("div",{staticClass:"text-purple-100 text-lg leading-loose"},[t._v("\n\t\t\t\t\tGirls Dropout Cure (GDC) is a platform that encourages and prompts the\n\t\t\t\t\tcommunity to speak out and report different cases or issues that affect girls\n\t\t\t\t\tin their respective communities. The system or platform also creates a direct\n\t\t\t\t\tconnection of various stakeholders, key players that provide financial and\n\t\t\t\t\tsocial welfare services to marginalised girls and the community leaders to take\n\t\t\t\t\taction against the reported cases of incidence facing girls.\n\t\t\t\t")])])]),t._v(" "),s("section",{staticClass:"bg-gray-100 py-24"},[s("div",{staticClass:"w-2/3 mx-auto"},[s("div",{staticClass:"flex -mx-6"},[s("div",{staticClass:"w-1/2 px-6"},[s("header",{staticClass:"mb-6"},[s("h1",{staticClass:"inline-block pb-2 border-purple-500 border-b-2 text-sm text-gray-700 uppercase tracking-wider font-semibold"},[t._v("Vision")])]),t._v(" "),s("div",{staticClass:"text-gray-600 text-2xl"},[t._v("\n\t\t\t\t\t\t\tGDC envisions an Africa in which every girl is\n\t\t\t\t\t\t\teducated, valued, respected and protected and\n\t\t\t\t\t\t\tgrow to turn the tides of development in Africa.\n\t\t\t\t\t\t")])]),t._v(" "),s("div",{staticClass:"w-1/2 px-6"},[s("div",{staticClass:"shadow rounded overflow-hidden"},[s("img",{staticClass:"w-full h-64 object-cover",attrs:{src:"/img/pages/image01.jpg",alt:""}})])])])])]),t._v(" "),s("section",{staticClass:"bg-white py-24"},[s("div",{staticClass:"w-2/3 mx-auto"},[s("div",{staticClass:"flex -mx-6"},[s("div",{staticClass:"w-1/2 px-6"},[s("div",{staticClass:"shadow rounded overflow-hidden"},[s("img",{staticClass:"w-full h-64 object-cover",attrs:{src:"/img/pages/image02.jpg",alt:""}})])]),t._v(" "),s("div",{staticClass:"w-1/2 px-6"},[s("header",{staticClass:"mb-6"},[s("h1",{staticClass:"inline-block pb-2 border-purple-500 border-b-2 text-sm text-gray-700 uppercase tracking-wider font-semibold"},[t._v("Mission")])]),t._v(" "),s("div",{staticClass:"text-gray-600 text-2xl"},[t._v("\n\t\t\t\t\t\t\tTo give girls the voice to speak out against humiliations and\n\t\t\t\t\t\t\tharassments and provide educational support through our\n\t\t\t\t\t\t\tpartners for them to become leaders of change.\n\t\t\t\t\t\t")])])])])]),t._v(" "),s("section",{staticClass:"bg-gray-900 py-32"},[s("div",{staticClass:"w-2/3 mx-auto"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"w-2/3"},[s("header",{staticClass:"mb-6"},[s("h1",{staticClass:"inline-block pb-2 text-3xl font-thin text-purple-100 uppercase tracking-wider"},[t._v("Why girls educational support?")])]),t._v(" "),s("div",{staticClass:"text-2xl text-white font-serif italic"},[t._v("\n\t\t\t\t\t\t\tEducating a girl is the best investment we can use to change\n\t\t\t\t\t\t\tthe world and making it safer. Incredible multiplier effect,\n\t\t\t\t\t\t\tproviding returns for generations. Educated girls improve not\n\t\t\t\t\t\t\tjust their lives but also the lives of their communities and\n\t\t\t\t\t\t\tthe whole nation.\n\t\t\t\t\t\t")])])])])]),t._v(" "),s("section",{staticClass:"bg-white py-24"},[s("div",{staticClass:"w-2/3 mx-auto"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"w-full"},[s("header",{staticClass:"mb-6"},[s("h1",{staticClass:"inline-block pb-2 border-purple-500 border-b-2 text-sm text-gray-700 uppercase tracking-wider font-semibold"},[t._v("Core Values")])]),t._v(" "),s("div",{staticClass:"text-gray-600 text-2xl"},[t._v("\n\t\t\t\t\t\t\tTo give girls the voice to speak out against humiliations and\n\t\t\t\t\t\t\tharassments and provide educational support through our\n\t\t\t\t\t\t\tpartners for them to become leaders of change.\n\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"mt-8"},[s("div",{staticClass:"flex border-b"},[s("div",{staticClass:"w-1/2 border-r"},[s("div",{staticClass:"pr-6 pb-8"},[s("header",{staticClass:"mb-3"},[s("h3",{staticClass:"text-xs uppercase tracking-wider font-semibold text-purple-600"},[t._v("Urgency")])]),t._v(" "),s("div",{staticClass:"text-gray-700"},[s("p",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tWe believe that only with a quality education that\n\t\t\t\t\t\t\t\t\t\t\t\tgirls can reach their potentials and achieve their\n\t\t\t\t\t\t\t\t\t\t\t\tdreams and life goals. We act with urgency to get the\n\t\t\t\t\t\t\t\t\t\t\t\tgirls back to school, triggering widespread change\n\t\t\t\t\t\t\t\t\t\t\t\tthrough direct action with demonstrable results.\n\t\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),s("div",{staticClass:"w-1/2"},[s("div",{staticClass:"pl-6 pb-8"},[s("header",{staticClass:"mb-3"},[s("h3",{staticClass:"text-xs uppercase tracking-wider font-semibold text-purple-600"},[t._v("Dignity")])]),t._v(" "),s("div",{staticClass:"text-gray-700"},[s("p",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tRespect, protection and promoting dignity to the girls\n\t\t\t\t\t\t\t\t\t\t\t\tand community with the aim of debilitating effects and\n\t\t\t\t\t\t\t\t\t\t\t\texclusion on an individual`s sense of self- worth and\n\t\t\t\t\t\t\t\t\t\t\t\tentitlement.\n\t\t\t\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),s("div",{staticClass:"flex border-b"},[s("div",{staticClass:"w-1/2 border-r"},[s("div",{staticClass:"pr-6 py-8"},[s("header",{staticClass:"mb-3"},[s("h3",{staticClass:"text-xs uppercase tracking-wider font-semibold text-purple-600"},[t._v("Leadership")])]),t._v(" "),s("div",{staticClass:"text-gray-700"},[s("p",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tYoung people are experts on barriers they face apart from being victims.\n\t\t\t\t\t\t\t\t\t\t\t\tHence, we actually support young girls because their experiences and\n\t\t\t\t\t\t\t\t\t\t\t\texpertise are vital to the development of sustainable solutions.\n\t\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),s("div",{staticClass:"w-1/2"},[s("div",{staticClass:"pl-6 py-8"},[s("header",{staticClass:"mb-3"},[s("h3",{staticClass:"text-xs uppercase tracking-wider font-semibold text-purple-600"},[t._v("Partnership")])]),t._v(" "),s("div",{staticClass:"text-gray-700"},[s("p",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tWe build a strong but apolitical partnership with organizations hence\n\t\t\t\t\t\t\t\t\t\t\t\tinitiating an innovative partnership between communities, like-minded\n\t\t\t\t\t\t\t\t\t\t\t\torganizations and private sectors to maximize resources available to\n\t\t\t\t\t\t\t\t\t\t\t\ttackle the challenges which girls face.\n\t\t\t\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),s("div",{staticClass:"flex"},[s("div",{staticClass:"w-1/2 border-r"},[s("div",{staticClass:"pr-6 pt-8"},[s("header",{staticClass:"mb-3"},[s("h3",{staticClass:"text-xs uppercase tracking-wider font-semibold text-purple-600"},[t._v("Accountability")])]),t._v(" "),s("div",{staticClass:"text-gray-700"},[s("p",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tWe are accountable first to the vulnerable girls. Our\n\t\t\t\t\t\t\t\t\t\t\t\tsystem put this principle in action to secure and\n\t\t\t\t\t\t\t\t\t\t\t\treinforce girl`s rights and entitlement and underpins\n\t\t\t\t\t\t\t\t\t\t\t\tour partnership at every level.\n\t\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),s("div",{staticClass:"w-1/2"},[s("div",{staticClass:"pl-6 pt-8"},[s("header",{staticClass:"mb-3"},[s("h3",{staticClass:"text-xs uppercase tracking-wider font-semibold text-purple-600"},[t._v("Protection")])]),t._v(" "),s("div",{staticClass:"text-gray-700"},[s("p",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tWe hold information on any girl we support, tracking her\n\t\t\t\t\t\t\t\t\t\t\t\twelfare and engaging with all those who hold authority in\n\t\t\t\t\t\t\t\t\t\t\t\trelation to girls in order to mitigate girl`s vulnerability\n\t\t\t\t\t\t\t\t\t\t\t\tin any form of abuse or violation.\n\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);