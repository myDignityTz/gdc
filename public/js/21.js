(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{0:function(t,e,n){"use strict";function s(t,e,n,s,o,r,i,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),s&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,"a",(function(){return s}))},17:function(t,e,n){"use strict";n.r(e);var s={data:function(){return{form:{name:""}}},methods:{submit:function(){var t=this;this.$inertia.post("/regions",this.form).then((function(e){t.$emit("close")}))}}},o=n(0),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("section",{staticClass:"mt-6"},[n("div",{staticClass:"px-6 mb-6"},[n("label",{staticClass:"block mb-2",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input w-full",attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),n("footer",{staticClass:"px-6 pb-4 flex justify-end"},[n("button",{staticClass:"bg-purple-700 text-white text-xs uppercase tracking-wider px-5 py-3 rounded",on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Save Changes")])])])}),[],!1,null,null,null);e.default=r.exports}}]);