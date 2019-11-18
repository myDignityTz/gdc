(window.webpackJsonp=window.webpackJsonp||[]).push([[6,19],{0:function(t,e,s){"use strict";function a(t,e,s,a,i,r,n,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):i&&(l=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var p=c.render;c.render=function(t,e){return l.call(e),p(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return a}))},1:function(t,e,s){"use strict";var a={props:{title:String},watch:{title:{immediate:!0,handler:function(t){document.title=t}}}},i=s(0),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("header",{staticClass:"bg-purple-700 py-6"},[s("nav",{staticClass:"w-2/3 mx-auto"},[s("div",{staticClass:"flex justify-between"},[s("div",{staticClass:"flex items-center text-purple-300"},[t.$can("view-dashboard")?s("inertia-link",{staticClass:"pr-4",class:{"text-white":t.$current("home")},attrs:{href:"/home"}},[t._v("Dashboard")]):t._e(),t._v(" "),t.$can("browse-allegations")?s("inertia-link",{staticClass:"px-4",class:{"text-white":t.$current("allegations.index")},attrs:{href:t.$route("allegations.index")}},[t._v("Allegations")]):t._e(),t._v(" "),t.$can("browse-stakeholders")?s("inertia-link",{staticClass:"px-4",class:{"text-white":t.$current("stakeholders.index")},attrs:{href:"/stakeholders"}},[t._v("Stakeholders")]):t._e(),t._v(" "),t.$can("browse-users")?s("inertia-link",{staticClass:"px-4",class:{"text-white":t.$current("users.index")},attrs:{href:"/users"}},[t._v("Users")]):t._e(),t._v(" "),t.$can("view-settings")?s("v-popover",{attrs:{placement:"bottom-start",offset:"24"}},[s("button",{staticClass:"flex items-center px-4"},[s("span",{staticClass:"mr-2"},[t._v("Settings")]),t._v(" "),s("i",{staticClass:"ri-arrow-down-s-line"})]),t._v(" "),s("template",{slot:"popover"},[s("div",{staticClass:"bg-white shadow-xl"},[t.$can("browse-allegation-types")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/allegation_types"}},[t._v("Allegation Type")]):t._e(),t._v(" "),t.$can("browse-regions")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/regions"}},[t._v("Regions")]):t._e(),t._v(" "),t.$can("browse-districts")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/districts"}},[t._v("Districts")]):t._e(),t._v(" "),t.$can("browse-suspect-relationships")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/relationships"}},[t._v("Suspect Relationships")]):t._e()],1)])],2):t._e()],1),t._v(" "),s("div",[s("v-popover",{attrs:{placement:"bottom-start"}},[s("button",{staticClass:"text-white flex items-center"},[s("span",{staticClass:"mr-2 leading-none"},[t._v(t._s(t.$page.auth.user.name))]),t._v(" "),s("i",{staticClass:"ri-arrow-down-s-line"})]),t._v(" "),s("template",{slot:"popover"},[s("div",{staticClass:"bg-white shadow-xl"},[s("header",{staticClass:"px-4 py-2 border-b"},[s("h3",{staticClass:"text-sm font-semibold text-gray-700"},[t._v(t._s(t.$page.auth.user.name))]),t._v(" "),s("span",{staticClass:"text-xs text-gray-600"},[t._v(t._s(t.$page.auth.user.email))])]),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/account"}},[t._v("Account")]),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/password"}},[t._v("Change password")]),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/logout",method:"post"}},[t._v("Logout")])],1)])],2)],1)])])]),t._v(" "),s("article",[t._t("default")],2)])}),[],!1,null,null,null);e.a=r.exports},16:function(t,e,s){"use strict";s.r(e);var a={props:["regions"],data:function(){return{form:{name:"",region_id:""}}},methods:{submit:function(){var t=this;this.$inertia.post("/districts",this.form).then((function(e){t.$emit("close")}))}}},i=s(0),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("section",{staticClass:"mt-6"},[s("div",{staticClass:"px-6 mb-6"},[s("label",{staticClass:"block mb-2",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input w-full",attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"px-6 mb-6"},[s("label",{staticClass:"block mb-2",attrs:{for:"region"}},[t._v("Region")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.region_id,expression:"form.region_id"}],staticClass:"form-select w-full",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"region_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose...")]),t._v(" "),t._l(t.regions,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])]),t._v(" "),s("footer",{staticClass:"px-6 pb-4 flex justify-end"},[s("button",{staticClass:"bg-purple-700 text-white text-xs uppercase tracking-wider px-5 py-3 rounded",on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Save Changes")])])])}),[],!1,null,null,null);e.default=r.exports},27:function(t,e,s){"use strict";s.r(e);var a=s(1),i=s(16),r={components:{Layout:a.a},props:["districts","regions"],data:function(){return{options:{height:"auto"}}},methods:{create:function(){this.$modal.show(i.default,{regions:this.regions},this.options)}}},n=s(0),o=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",{attrs:{title:"The Expert - Users"}},[s("div",{staticClass:"w-2/3 mx-auto mb-12"},[s("header",{staticClass:"flex justify-between my-8"},[s("h1",{staticClass:"text-lg font-semibold"},[t._v("Districts")]),t._v(" "),s("button",{staticClass:"flex items-center bg-purple-700 text-white px-5 py-2 hover:bg-purple-600 rounded",on:{click:function(e){return e.preventDefault(),t.create(e)}}},[s("i",{staticClass:"ri-add-line mr-2"}),t._v(" "),s("span",{staticClass:"text-xs uppercase tracking-wider font-semibold"},[t._v("New District")])])]),t._v(" "),s("div",{staticClass:"bg-white mt-6 shadow rounded overflow-hidden"},[s("table",{staticClass:"text-left w-full"},[s("thead",[s("tr",[s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"},[t._v("Name")]),t._v(" "),s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"},[t._v("Region")]),t._v(" "),s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"},[t._v("Created at")]),t._v(" "),s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"},[t._v("Updated at")]),t._v(" "),s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"})])]),t._v(" "),s("tbody",t._l(t.districts,(function(e){return s("tr",{key:e.id,staticClass:"border-t"},[s("td",{staticClass:"px-4 py-4"},[t._v(t._s(e.name))]),t._v(" "),s("td",{staticClass:"px-4 py-4"},[t._v(t._s(e.region.name))]),t._v(" "),s("td",{staticClass:"px-4 py-4"},[t._v(t._s(e.created_at))]),t._v(" "),s("td",{staticClass:"px-4 py-4"},[t._v(t._s(e.updated_at))]),t._v(" "),s("td",{staticClass:"px-4 py-4"},[s("div",{staticClass:"flex items-center"},[s("a",{staticClass:"text-xs uppercase tracking-wider text-gray-700",attrs:{href:"#"}},[t._v("Edit")]),t._v(" "),s("span",{staticClass:"text-xs px-2 text-gray-400"},[t._v("|")]),t._v(" "),s("a",{staticClass:"text-xs uppercase tracking-wider text-gray-700",attrs:{href:"#"}},[t._v("Delete")])])])])})),0)])])])])}),[],!1,null,null,null);e.default=o.exports}}]);