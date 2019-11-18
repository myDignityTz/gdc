(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{0:function(t,e,s){"use strict";function a(t,e,s,a,i,r,o,l){var n,p="function"==typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=s,p._compiled=!0),a&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),o?(n=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},p._ssrRegister=n):i&&(n=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),n)if(p.functional){p._injectStyles=n;var c=p.render;p.render=function(t,e){return n.call(e),c(t,e)}}else{var v=p.beforeCreate;p.beforeCreate=v?[].concat(v,n):[n]}return{exports:t,options:p}}s.d(e,"a",(function(){return a}))},1:function(t,e,s){"use strict";var a={props:{title:String},watch:{title:{immediate:!0,handler:function(t){document.title=t}}}},i=s(0),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("header",{staticClass:"bg-purple-700 py-6"},[s("nav",{staticClass:"w-2/3 mx-auto"},[s("div",{staticClass:"flex justify-between"},[s("div",{staticClass:"flex items-center text-purple-300"},[t.$can("view-dashboard")?s("inertia-link",{staticClass:"pr-4",class:{"text-white":t.$current("home")},attrs:{href:"/home"}},[t._v("Dashboard")]):t._e(),t._v(" "),t.$can("browse-allegations")?s("inertia-link",{staticClass:"px-4",class:{"text-white":t.$current("allegations.index")},attrs:{href:t.$route("allegations.index")}},[t._v("Allegations")]):t._e(),t._v(" "),t.$can("browse-stakeholders")?s("inertia-link",{staticClass:"px-4",class:{"text-white":t.$current("stakeholders.index")},attrs:{href:"/stakeholders"}},[t._v("Stakeholders")]):t._e(),t._v(" "),t.$can("browse-users")?s("inertia-link",{staticClass:"px-4",class:{"text-white":t.$current("users.index")},attrs:{href:"/users"}},[t._v("Users")]):t._e(),t._v(" "),t.$can("view-settings")?s("v-popover",{attrs:{placement:"bottom-start",offset:"24"}},[s("button",{staticClass:"flex items-center px-4"},[s("span",{staticClass:"mr-2"},[t._v("Settings")]),t._v(" "),s("i",{staticClass:"ri-arrow-down-s-line"})]),t._v(" "),s("template",{slot:"popover"},[s("div",{staticClass:"bg-white shadow-xl"},[t.$can("browse-allegation-types")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/allegation_types"}},[t._v("Allegation Type")]):t._e(),t._v(" "),t.$can("browse-regions")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/regions"}},[t._v("Regions")]):t._e(),t._v(" "),t.$can("browse-districts")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/districts"}},[t._v("Districts")]):t._e(),t._v(" "),t.$can("browse-suspect-relationships")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/relationships"}},[t._v("Suspect Relationships")]):t._e()],1)])],2):t._e()],1),t._v(" "),s("div",[s("v-popover",{attrs:{placement:"bottom-start"}},[s("button",{staticClass:"text-white flex items-center"},[s("span",{staticClass:"mr-2 leading-none"},[t._v(t._s(t.$page.auth.user.name))]),t._v(" "),s("i",{staticClass:"ri-arrow-down-s-line"})]),t._v(" "),s("template",{slot:"popover"},[s("div",{staticClass:"bg-white shadow-xl"},[s("header",{staticClass:"px-4 py-2 border-b"},[s("h3",{staticClass:"text-sm font-semibold text-gray-700"},[t._v(t._s(t.$page.auth.user.name))]),t._v(" "),s("span",{staticClass:"text-xs text-gray-600"},[t._v(t._s(t.$page.auth.user.email))])]),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/account"}},[t._v("Account")]),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/password"}},[t._v("Change password")]),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/logout",method:"post"}},[t._v("Logout")])],1)])],2)],1)])])]),t._v(" "),s("article",[t._t("default")],2)])}),[],!1,null,null,null);e.a=r.exports},30:function(t,e,s){"use strict";s.r(e);var a={components:{Layout:s(1).a},props:["stakeholders"]},i=s(0),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",{attrs:{title:"The Expert - Stakeholders"}},[s("div",{staticClass:"w-2/3 mx-auto"},t._l(t.stakeholders,(function(e){return s("div",{key:e.id,staticClass:"bg-white rounded shadow overflow-hidden my-6"},[s("header",{staticClass:"px-6 pt-4 pb-6"},[s("h2",{staticClass:"text-lg font-semibold text-gray-700"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"text-gray-600"},[t._v(t._s(e.description))])]),t._v(" "),s("table",{staticClass:"text-left w-full"},[s("thead",[s("tr",[s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"},[t._v("Type")]),t._v(" "),s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"},[t._v("Category")]),t._v(" "),s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"},[t._v("Environment")]),t._v(" "),s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"},[t._v("Victim")]),t._v(" "),s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"},[t._v("Suspect")]),t._v(" "),s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"},[t._v("Status")]),t._v(" "),s("th",{staticClass:"px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"})])]),t._v(" "),s("tbody",t._l(e.allegations,(function(a){return s("tr",{key:a.id,staticClass:"border-t"},[s("td",{staticClass:"px-4 py-4"},[t._v(t._s(a.type.name))]),t._v(" "),s("td",{staticClass:"px-4 py-4"},[t._v(t._s(a.category.name))]),t._v(" "),s("td",{staticClass:"px-4 py-4"},[t._v(t._s(a.environment_category))]),t._v(" "),s("td",{staticClass:"px-4 py-4"},[s("h3",{staticClass:"text-sm font-semibold"},[t._v(t._s(a.victim.name))]),t._v(" "),s("span",{staticClass:"text-xs text-gray-600"},[t._v(t._s(a.victim.age)+" Years")])]),t._v(" "),s("td",{staticClass:"px-4 py-4"},[s("h3",{staticClass:"text-sm font-semibold"},[t._v(t._s(a.suspect.name))]),t._v(" "),s("span",{staticClass:"text-xs text-gray-600"},[t._v(t._s(a.suspect.relationship))])]),t._v(" "),s("td",{staticClass:"px-4 py-4"},[s("span",{staticClass:"text-xs uppercase tracking-wider bg-gray-200 px-2 py-1 rounded-full"},[t._v(t._s(a.pivot.status))])]),t._v(" "),s("td",{staticClass:"px-4 py-4"},[s("v-popover",{attrs:{placement:"bottom-start"}},[s("button",{staticClass:"px-5"},[s("i",{staticClass:"ri-more-fill"})]),t._v(" "),s("template",{slot:"popover"},[s("div",{staticClass:"bg-white shadow-xl border"},[s("inertia-link",{staticClass:"block px-4 py-2 hover:bg-purple-700 hover:text-white",attrs:{href:"/allegations/"+a.id+"/statuses",method:"patch",data:{stakeholder_id:e.id,status:"spam"}}},[t._v("Mark as Spam")]),t._v(" "),"current"!==a.pivot.status?[s("inertia-link",{staticClass:"block px-4 py-2 hover:bg-purple-700 hover:text-white",attrs:{href:"/allegations/"+a.id+"/statuses",method:"patch",data:{stakeholder_id:e.id,status:"current"}}},[t._v("Mark as Current")])]:t._e(),t._v(" "),"closed"!==a.pivot.status?[s("inertia-link",{staticClass:"block px-4 py-2 hover:bg-purple-700 hover:text-white",attrs:{href:"/allegations/"+a.id+"/statuses",method:"patch",data:{stakeholder_id:e.id,status:"closed"}}},[t._v("Mark as Closed")])]:t._e(),t._v(" "),s("hr"),t._v(" "),"closed"!==a.pivot.status?[s("inertia-link",{staticClass:"block px-4 py-2 hover:bg-purple-700 hover:text-white",attrs:{href:"#"}},[t._v("Edit Allegation")])]:t._e(),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 hover:bg-purple-700 hover:text-white",attrs:{href:"#"}},[t._v("Remove Allegation")]),t._v(" "),"closed"!==a.pivot.status?[s("hr"),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 hover:bg-purple-700 hover:text-white",attrs:{href:"allegations/"+a.id+"/forward",method:"patch",data:{stakeholder_id:e.id}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tForward to\n\t\t\t\t\t\t\t\t\t\t\t\t"),s("span",{staticClass:"font-semibold"},[t._v(t._s(e.name))])])]:t._e()],2)])],2)],1)])})),0)])])})),0)])}),[],!1,null,null,null);e.default=r.exports}}]);