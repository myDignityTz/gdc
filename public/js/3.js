(window.webpackJsonp=window.webpackJsonp||[]).push([[3,16,17],{0:function(t,e,s){"use strict";function r(t,e,s,r,i,a,o,n){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=n?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var m=c.render;c.render=function(t,e){return l.call(e),m(t,e)}}else{var v=c.beforeCreate;c.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return r}))},1:function(t,e,s){"use strict";var r={props:{title:String},watch:{title:{immediate:!0,handler:function(t){document.title=t}}}},i=s(0),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("header",{staticClass:"bg-purple-700 py-6"},[s("nav",{staticClass:"w-2/3 mx-auto"},[s("div",{staticClass:"flex justify-between"},[s("div",{staticClass:"flex items-center text-purple-300"},[t.$can("view-dashboard")?s("inertia-link",{staticClass:"pr-4",class:{"text-white":t.$current("home")},attrs:{href:"/home"}},[t._v("Dashboard")]):t._e(),t._v(" "),t.$can("browse-allegations")?s("inertia-link",{staticClass:"px-4",class:{"text-white":t.$current("allegations.index")},attrs:{href:t.$route("allegations.index")}},[t._v("Allegations")]):t._e(),t._v(" "),t.$can("browse-stakeholders")?s("inertia-link",{staticClass:"px-4",class:{"text-white":t.$current("stakeholders.index")},attrs:{href:"/stakeholders"}},[t._v("Stakeholders")]):t._e(),t._v(" "),t.$can("browse-users")?s("inertia-link",{staticClass:"px-4",class:{"text-white":t.$current("users.index")},attrs:{href:"/users"}},[t._v("Users")]):t._e(),t._v(" "),t.$can("view-settings")?s("v-popover",{attrs:{placement:"bottom-start",offset:"24"}},[s("button",{staticClass:"flex items-center px-4"},[s("span",{staticClass:"mr-2"},[t._v("Settings")]),t._v(" "),s("i",{staticClass:"ri-arrow-down-s-line"})]),t._v(" "),s("template",{slot:"popover"},[s("div",{staticClass:"bg-white shadow-xl"},[t.$can("browse-allegation-types")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/allegation_types"}},[t._v("Allegation Type")]):t._e(),t._v(" "),t.$can("browse-regions")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/regions"}},[t._v("Regions")]):t._e(),t._v(" "),t.$can("browse-districts")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/districts"}},[t._v("Districts")]):t._e(),t._v(" "),t.$can("browse-suspect-relationships")?s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/relationships"}},[t._v("Suspect Relationships")]):t._e()],1)])],2):t._e()],1),t._v(" "),s("div",[s("v-popover",{attrs:{placement:"bottom-start"}},[s("button",{staticClass:"text-white flex items-center"},[s("span",{staticClass:"mr-2 leading-none"},[t._v(t._s(t.$page.auth.user.name))]),t._v(" "),s("i",{staticClass:"ri-arrow-down-s-line"})]),t._v(" "),s("template",{slot:"popover"},[s("div",{staticClass:"bg-white shadow-xl"},[s("header",{staticClass:"px-4 py-2 border-b"},[s("h3",{staticClass:"text-sm font-semibold text-gray-700"},[t._v(t._s(t.$page.auth.user.name))]),t._v(" "),s("span",{staticClass:"text-xs text-gray-600"},[t._v(t._s(t.$page.auth.user.email))])]),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/account"}},[t._v("Account")]),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/password"}},[t._v("Change password")]),t._v(" "),s("inertia-link",{staticClass:"block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",attrs:{href:"/logout",method:"post"}},[t._v("Logout")])],1)])],2)],1)])])]),t._v(" "),s("article",[t._t("default")],2)])}),[],!1,null,null,null);e.a=a.exports},24:function(t,e,s){"use strict";s.r(e);var r=s(1),i=s(6),a=s(7),o={components:{Layout:r.a,HomeEnvironment:i.default,SchoolEnvironment:a.default},props:["allegations","regions","types","relationships"],data:function(){return{form:{type_id:"",category_id:"",description:"",environment_type:"",environment:null,victim:{name:"",age:"",gender:"",description:""},suspect:{name:"",relationship:"",description:""}}}},computed:{environment:function(){return this.form.environment_type?"".concat(this.form.environment_type,"Environment"):null},categories:function(){var t=this,e=this.types.find((function(e){return e.id===t.form.type_id}));return e?e.categories:[]}},methods:{submit:function(){this.$inertia.post("/allegations",this.form)},appendEnvironment:function(t){this.form.environment=t}}},n=s(0),l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",{attrs:{title:"Allegations - Create"}},[s("div",{staticClass:"w-2/5 mx-auto"},[Object.keys(t.$page.errors).length?s("div",{staticClass:"bg-white my-4 rounded px-4 py-4"},[s("pre",[t._v(t._s(t.$page.errors))])]):t._e(),t._v(" "),s("form",{staticClass:"my-8 bg-white rounded shadow py-6",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("header",{staticClass:"mb-8 px-6"},[s("h2",{staticClass:"text-lg mb-2 text-gray-600"},[t._v("Allegation Report Form")]),t._v(" "),s("p",{staticClass:"text-sm text-gray-700"},[t._v("\n\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt nam\n\t\t\t\t\t\tdoloremque id veritatis molestias nisi sint quia tenetur. Maiores vel soluta,\n\t\t\t\t\t\tfacere laudantium aliquid veniam quia tenetur! Odit, blanditiis.\n\t\t\t\t\t")])]),t._v(" "),s("section",{staticClass:"border-b mb-8 pb-5"},[s("div",{staticClass:"flex -mx-3 px-6"},[s("div",{staticClass:"mb-6 w-1/2 px-3"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"type"}},[t._v("Type")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type_id,expression:"form.type_id"}],staticClass:"form-select w-full",attrs:{id:"type"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"type_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose...")]),t._v(" "),t._l(t.types,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                                    "+t._s(e.name)+"\n                                ")])}))],2),t._v(" "),t.errors().has("type_id")?s("div",{staticClass:"form-error mt-1"},[t._v("\n                                "+t._s(t.errors().first("type_id"))+"\n                            ")]):t._e()]),t._v(" "),s("div",{staticClass:"mb-6 w-1/2 px-3"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"category_id"}},[t._v("Category")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.category_id,expression:"form.category_id"}],staticClass:"form-select w-full",attrs:{id:"category_id"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"category_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose...")]),t._v(" "),t._l(t.categories,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                                    "+t._s(e.name)+"\n                                ")])}))],2),t._v(" "),t.errors().has("category_id")?s("div",{staticClass:"form-error mt-1"},[t._v("\n                                "+t._s(t.errors().first("category_id"))+"\n                            ")]):t._e()])]),t._v(" "),s("div",{staticClass:"flex -mx-3 px-6"},[s("div",{staticClass:"w-full px-3 mb-6"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"environment"}},[t._v("Environment")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.environment_type,expression:"form.environment_type"}],staticClass:"form-select w-full",attrs:{id:"environment"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"environment_type",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose...")]),t._v(" "),s("option",{attrs:{value:"home"}},[t._v("Home")]),t._v(" "),s("option",{attrs:{value:"school"}},[t._v("School")])]),t._v(" "),t.errors().has("environment")?s("div",{staticClass:"form-error mt-1"},[t._v("\n                                "+t._s(t.errors().first("environment"))+"\n                            ")]):t._e()])]),t._v(" "),s(t.environment,{tag:"component",attrs:{regions:t.regions},on:{environment:t.appendEnvironment}}),t._v(" "),s("div",{staticClass:"mb-6 px-6"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"description"}},[t._v("Description")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-textarea w-full",attrs:{id:"description",rows:"3"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}})])],1),t._v(" "),s("section",{staticClass:"border-b mb-8 pb-5 px-6"},[s("header",{staticClass:"mb-8"},[s("h2",{staticClass:"text-xs uppercase font-semibold text-gray-600 tracking-wider"},[t._v("Victim Details")])]),t._v(" "),s("div",{staticClass:"flex -mx-3"},[s("div",{staticClass:"mb-6 w-2/3 px-3"},[s("label",{staticClass:"block mb-1 text-gray-700",attrs:{for:"victim_name"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.victim.name,expression:"form.victim.name"}],staticClass:"form-input w-full",attrs:{id:"victim_name",type:"text"},domProps:{value:t.form.victim.name},on:{input:function(e){e.target.composing||t.$set(t.form.victim,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mb-6 w-1/3 px-3"},[s("label",{staticClass:"block mb-1 text-gray-700",attrs:{for:"victim_age"}},[t._v("Age (In Years)")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.victim.age,expression:"form.victim.age"}],staticClass:"form-input w-full",attrs:{id:"victim_age",type:"number"},domProps:{value:t.form.victim.age},on:{input:function(e){e.target.composing||t.$set(t.form.victim,"age",e.target.value)}}}),t._v(" "),t.$page.errors.victim?s("div",{staticClass:"form-error mt-1"},[t._v("\n                                "+t._s(t.$page.errors.victim.age[0])+"\n                            ")]):t._e()])]),t._v(" "),s("div",{staticClass:"mb-6"},[s("label",{staticClass:"block mb-1 text-gray-700",attrs:{for:"victim_description"}},[t._v("Description")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.victim.description,expression:"form.victim.description"}],staticClass:"form-textarea w-full",attrs:{id:"victim_description",rows:"3"},domProps:{value:t.form.victim.description},on:{input:function(e){e.target.composing||t.$set(t.form.victim,"description",e.target.value)}}})])]),t._v(" "),s("section",{staticClass:"border-b mb-6 pb-5 px-6"},[s("header",{staticClass:"mb-8"},[s("h2",{staticClass:"text-xs uppercase font-semibold text-gray-600 tracking-wider"},[t._v("Suspect Details")])]),t._v(" "),s("div",{staticClass:"flex -mx-3"},[s("div",{staticClass:"mb-6 w-full px-3"},[s("label",{staticClass:"block mb-1 text-gray-700",attrs:{for:"suspect_name"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.suspect.name,expression:"form.suspect.name"}],staticClass:"form-input w-full",attrs:{id:"suspect_name",type:"text"},domProps:{value:t.form.suspect.name},on:{input:function(e){e.target.composing||t.$set(t.form.suspect,"name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flex -mx-3"},[s("div",{staticClass:"mb-6 w-1/2 px-3"},[s("label",{staticClass:"block mb-1 text-gray-700",attrs:{for:"suspect_relationship"}},[t._v("Relationship")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.suspect.relationship,expression:"form.suspect.relationship"}],staticClass:"form-select w-full",attrs:{id:"suspect_relationship"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form.suspect,"relationship",e.target.multiple?s:s[0])}}},[s("option",[t._v("Choose...")]),t._v(" "),t._l(t.relationships,(function(e){return s("option",{key:e.id,domProps:{value:e.name}},[t._v("\n                                    "+t._s(e.name)+"\n                                ")])}))],2)])]),t._v(" "),s("div",{staticClass:"mb-6"},[s("label",{staticClass:"block mb-1 text-gray-700",attrs:{for:"suspect_description"}},[t._v("Description")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.suspect.description,expression:"form.suspect.description"}],staticClass:"form-textarea w-full",attrs:{id:"suspect_description",rows:"3"},domProps:{value:t.form.suspect.description},on:{input:function(e){e.target.composing||t.$set(t.form.suspect,"description",e.target.value)}}})])]),t._v(" "),s("footer",{staticClass:"flex justify-end px-6"},[s("button",{staticClass:"bg-purple-700 text-white text-xs uppercase font-semibold tracking-wider px-5 py-3 rounded",on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("\n                        Save Changes\n                    ")])])])])])}),[],!1,null,null,null);e.default=l.exports},6:function(t,e,s){"use strict";s.r(e);var r={props:{regions:{type:Array,required:!0}},data:function(){return{form:{street:"",region_id:"",district_id:""}}},watch:{form:{handler:function(){this.$emit("environment",this.form)},deep:!0}},computed:{districts:function(){var t=this,e=this.regions.find((function(e){return e.id===t.form.region_id}));return e?e.districts:[]}}},i=s(0),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gray-100 px-6 py-6 mb-6 mt-3"},[s("div",{staticClass:"flex -mx-3"},[s("div",{staticClass:"mb-6 w-full px-3"},[s("label",{staticClass:"block mb-1 text-gray-700",attrs:{for:"home_street"}},[t._v("Street")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.street,expression:"form.street"}],staticClass:"form-input w-full",attrs:{type:"text",id:"home_street"},domProps:{value:t.form.street},on:{input:function(e){e.target.composing||t.$set(t.form,"street",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flex -mx-3"},[s("div",{staticClass:"mb-6 w-1/2 px-3"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"home_region"}},[t._v("Region")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.region_id,expression:"form.region_id"}],staticClass:"form-select w-full",attrs:{id:"home_region"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"region_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose...")]),t._v(" "),t._l(t.regions,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),s("div",{staticClass:"mb-6 w-1/2 px-3"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"home_district"}},[t._v("District")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.district_id,expression:"form.district_id"}],staticClass:"form-select w-full",attrs:{id:"home_district"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"district_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose...")]),t._v(" "),t._l(t.districts,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])])])}),[],!1,null,null,null);e.default=a.exports},7:function(t,e,s){"use strict";s.r(e);var r={props:["regions"],data:function(){return{form:{name:"",type:"",level:"",street:"",region_id:"",district_id:""}}},watch:{form:{handler:function(){this.$emit("environment",this.form)},deep:!0}},computed:{districts:function(){var t=this,e=this.regions.find((function(e){return e.id===t.form.region_id}));return e?e.districts:[]}}},i=s(0),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gray-100 px-6 py-6 mb-6 mt-3"},[s("div",{staticClass:"flex -mx-3"},[s("div",{staticClass:"mb-6 w-full px-3"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"school_name"}},[t._v("School name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input w-full",attrs:{id:"school_name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flex -mx-3"},[s("div",{staticClass:"mb-6 w-1/3 px-3"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"school_type"}},[t._v("Type")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"form-select w-full",attrs:{id:"school_type"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"type",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose...")]),t._v(" "),s("option",{attrs:{value:"private"}},[t._v("Private")]),t._v(" "),s("option",{attrs:{value:"government"}},[t._v("Government")])])]),t._v(" "),s("div",{staticClass:"mb-6 w-2/3 px-3"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"school_level"}},[t._v("Level")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.level,expression:"form.level"}],staticClass:"form-select w-full",attrs:{id:"school_level"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"level",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose...")]),t._v(" "),s("option",{attrs:{value:"primary"}},[t._v("Primary Education")]),t._v(" "),s("option",{attrs:{value:"a-level"}},[t._v("Secondary Education (O - level)")]),t._v(" "),s("option",{attrs:{value:"o-level"}},[t._v("Secondary Education (A - level)")])])])]),t._v(" "),s("div",{staticClass:"flex -mx-3"},[s("div",{staticClass:"mb-6 w-full px-3"},[s("label",{staticClass:"block mb-1 text-gray-700",attrs:{for:"school_street"}},[t._v("Street")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.street,expression:"form.street"}],staticClass:"form-input w-full",attrs:{type:"text",id:"school_street"},domProps:{value:t.form.street},on:{input:function(e){e.target.composing||t.$set(t.form,"street",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flex -mx-3"},[s("div",{staticClass:"mb-6 w-1/2 px-3"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"school_region"}},[t._v("Region")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.region_id,expression:"form.region_id"}],staticClass:"form-select w-full",attrs:{id:"school_region"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"region_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose...")]),t._v(" "),t._l(t.regions,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),s("div",{staticClass:"mb-6 w-1/2 px-3"},[s("label",{staticClass:"block mb-2 text-gray-700",attrs:{for:"school_district"}},[t._v("District")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.district_id,expression:"form.district_id"}],staticClass:"form-select w-full",attrs:{id:"school_district"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"district_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose...")]),t._v(" "),t._l(t.districts,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])])])}),[],!1,null,null,null);e.default=a.exports}}]);