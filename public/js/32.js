(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Stakeholders/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Stakeholders/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["stakeholders"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: String
  },
  watch: {
    title: {
      immediate: true,
      handler: function handler(title) {
        document.title = title;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Stakeholders/Index.vue?vue&type=template&id=2ffa55ce&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Stakeholders/Index.vue?vue&type=template&id=2ffa55ce& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("layout", { attrs: { title: "The Expert - Stakeholders" } }, [
    _c(
      "div",
      { staticClass: "w-2/3 mx-auto" },
      _vm._l(_vm.stakeholders, function(stakeholder) {
        return _c(
          "div",
          {
            key: stakeholder.id,
            staticClass: "bg-white rounded shadow overflow-hidden my-6"
          },
          [
            _c("header", { staticClass: "px-6 pt-4 pb-6" }, [
              _c("h2", { staticClass: "text-lg font-semibold text-gray-700" }, [
                _vm._v(_vm._s(stakeholder.name))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-gray-600" }, [
                _vm._v(_vm._s(stakeholder.description))
              ])
            ]),
            _vm._v(" "),
            _c("table", { staticClass: "text-left w-full" }, [
              _c("thead", [
                _c("tr", [
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    },
                    [_vm._v("Type")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    },
                    [_vm._v("Category")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    },
                    [_vm._v("Environment")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    },
                    [_vm._v("Victim")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    },
                    [_vm._v("Suspect")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    },
                    [_vm._v("Status")]
                  ),
                  _vm._v(" "),
                  _c("th", {
                    staticClass:
                      "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(stakeholder.allegations, function(allegation) {
                  return _c(
                    "tr",
                    { key: allegation.id, staticClass: "border-t" },
                    [
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _vm._v(_vm._s(allegation.type.name))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _vm._v(_vm._s(allegation.category.name))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _vm._v(_vm._s(allegation.environment_category))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _c("h3", { staticClass: "text-sm font-semibold" }, [
                          _vm._v(_vm._s(allegation.victim.name))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs text-gray-600" }, [
                          _vm._v(_vm._s(allegation.victim.age) + " Years")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _c("h3", { staticClass: "text-sm font-semibold" }, [
                          _vm._v(_vm._s(allegation.suspect.name))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs text-gray-600" }, [
                          _vm._v(_vm._s(allegation.suspect.relationship))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-xs uppercase tracking-wider bg-gray-200 px-2 py-1 rounded-full"
                          },
                          [_vm._v(_vm._s(allegation.pivot.status))]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-4 py-4" },
                        [
                          _c(
                            "v-popover",
                            { attrs: { placement: "bottom-start" } },
                            [
                              _c("button", { staticClass: "px-5" }, [
                                _c("i", { staticClass: "ri-more-fill" })
                              ]),
                              _vm._v(" "),
                              _c("template", { slot: "popover" }, [
                                _c(
                                  "div",
                                  { staticClass: "bg-white shadow-xl border" },
                                  [
                                    _c(
                                      "inertia-link",
                                      {
                                        staticClass:
                                          "block px-4 py-2 hover:bg-purple-700 hover:text-white",
                                        attrs: {
                                          href:
                                            "/allegations/" +
                                            allegation.id +
                                            "/statuses",
                                          method: "patch",
                                          data: {
                                            stakeholder_id: stakeholder.id,
                                            status: "spam"
                                          }
                                        }
                                      },
                                      [_vm._v("Mark as Spam")]
                                    ),
                                    _vm._v(" "),
                                    allegation.pivot.status !== "current"
                                      ? [
                                          _c(
                                            "inertia-link",
                                            {
                                              staticClass:
                                                "block px-4 py-2 hover:bg-purple-700 hover:text-white",
                                              attrs: {
                                                href:
                                                  "/allegations/" +
                                                  allegation.id +
                                                  "/statuses",
                                                method: "patch",
                                                data: {
                                                  stakeholder_id:
                                                    stakeholder.id,
                                                  status: "current"
                                                }
                                              }
                                            },
                                            [_vm._v("Mark as Current")]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    allegation.pivot.status !== "closed"
                                      ? [
                                          _c(
                                            "inertia-link",
                                            {
                                              staticClass:
                                                "block px-4 py-2 hover:bg-purple-700 hover:text-white",
                                              attrs: {
                                                href:
                                                  "/allegations/" +
                                                  allegation.id +
                                                  "/statuses",
                                                method: "patch",
                                                data: {
                                                  stakeholder_id:
                                                    stakeholder.id,
                                                  status: "closed"
                                                }
                                              }
                                            },
                                            [_vm._v("Mark as Closed")]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("hr"),
                                    _vm._v(" "),
                                    allegation.pivot.status !== "closed"
                                      ? [
                                          _c(
                                            "inertia-link",
                                            {
                                              staticClass:
                                                "block px-4 py-2 hover:bg-purple-700 hover:text-white",
                                              attrs: { href: "#" }
                                            },
                                            [_vm._v("Edit Allegation")]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "inertia-link",
                                      {
                                        staticClass:
                                          "block px-4 py-2 hover:bg-purple-700 hover:text-white",
                                        attrs: { href: "#" }
                                      },
                                      [_vm._v("Remove Allegation")]
                                    ),
                                    _vm._v(" "),
                                    allegation.pivot.status !== "closed"
                                      ? [
                                          _c("hr"),
                                          _vm._v(" "),
                                          _c(
                                            "inertia-link",
                                            {
                                              staticClass:
                                                "block px-4 py-2 hover:bg-purple-700 hover:text-white",
                                              attrs: {
                                                href:
                                                  "allegations/" +
                                                  allegation.id +
                                                  "/forward",
                                                method: "patch",
                                                data: {
                                                  stakeholder_id: stakeholder.id
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tForward to\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                              ),
                                              _c(
                                                "span",
                                                {
                                                  staticClass: "font-semibold"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(stakeholder.name)
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ])
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _c("header", { staticClass: "bg-purple-700 py-6" }, [
      _c("nav", { staticClass: "w-2/3 mx-auto" }, [
        _c("div", { staticClass: "flex justify-between" }, [
          _c(
            "div",
            { staticClass: "flex items-center text-purple-300" },
            [
              _c(
                "inertia-link",
                {
                  staticClass: "pr-4",
                  class: { "text-white": _vm.route().current("home") },
                  attrs: { href: "/home" }
                },
                [_vm._v("Dashboard")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass: "px-4",
                  class: {
                    "text-white": _vm.route().current("allegations.index")
                  },
                  attrs: { href: "/allegations" }
                },
                [_vm._v("Allegations")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass: "px-4",
                  class: {
                    "text-white": _vm.route().current("stakeholders.index")
                  },
                  attrs: { href: "/stakeholders" }
                },
                [_vm._v("Stakeholders")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass: "px-4",
                  class: { "text-white": _vm.route().current("users.index") },
                  attrs: { href: "/users" }
                },
                [_vm._v("Users")]
              ),
              _vm._v(" "),
              _c(
                "v-popover",
                { attrs: { placement: "bottom-start", offset: "24" } },
                [
                  _c("button", { staticClass: "flex items-center px-4" }, [
                    _c("span", { staticClass: "mr-2" }, [_vm._v("Settings")]),
                    _vm._v(" "),
                    _c("i", { staticClass: "ri-arrow-down-s-line" })
                  ]),
                  _vm._v(" "),
                  _c("template", { slot: "popover" }, [
                    _c(
                      "div",
                      { staticClass: "bg-white shadow-xl" },
                      [
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                            attrs: { href: "/allegation_types" }
                          },
                          [_vm._v("Allegation Type")]
                        ),
                        _vm._v(" "),
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                            attrs: { href: "/regions" }
                          },
                          [_vm._v("Regions")]
                        ),
                        _vm._v(" "),
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                            attrs: { href: "/districts" }
                          },
                          [_vm._v("Districts")]
                        ),
                        _vm._v(" "),
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                            attrs: { href: "/relationships" }
                          },
                          [_vm._v("Suspect Relationshiphs")]
                        )
                      ],
                      1
                    )
                  ])
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "v-popover",
                { attrs: { placement: "bottom-start" } },
                [
                  _c(
                    "button",
                    { staticClass: "text-white flex items-center" },
                    [
                      _c("span", { staticClass: "mr-2 leading-none" }, [
                        _vm._v(_vm._s(_vm.$page.auth.user.name))
                      ]),
                      _vm._v(" "),
                      _c("i", { staticClass: "ri-arrow-down-s-line" })
                    ]
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "popover" }, [
                    _c(
                      "div",
                      { staticClass: "bg-white shadow-xl" },
                      [
                        _c("header", { staticClass: "px-4 py-2 border-b" }, [
                          _c(
                            "h3",
                            {
                              staticClass: "text-sm font-semibold text-gray-700"
                            },
                            [_vm._v(_vm._s(_vm.$page.auth.user.name))]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-xs text-gray-600" }, [
                            _vm._v(_vm._s(_vm.$page.auth.user.email))
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                            attrs: { href: "/account" }
                          },
                          [_vm._v("Account")]
                        ),
                        _vm._v(" "),
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                            attrs: { href: "/password" }
                          },
                          [_vm._v("Change password")]
                        ),
                        _vm._v(" "),
                        _c(
                          "inertia-link",
                          {
                            staticClass:
                              "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                            attrs: { href: "/logout", method: "post" }
                          },
                          [_vm._v("Logout")]
                        )
                      ],
                      1
                    )
                  ])
                ],
                2
              )
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("article", [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/Stakeholders/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Stakeholders/Index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_2ffa55ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2ffa55ce& */ "./resources/js/Pages/Stakeholders/Index.vue?vue&type=template&id=2ffa55ce&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Stakeholders/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2ffa55ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_2ffa55ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Stakeholders/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Stakeholders/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Stakeholders/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Stakeholders/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Stakeholders/Index.vue?vue&type=template&id=2ffa55ce&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Stakeholders/Index.vue?vue&type=template&id=2ffa55ce& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2ffa55ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=2ffa55ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Stakeholders/Index.vue?vue&type=template&id=2ffa55ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2ffa55ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2ffa55ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086& */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=6bf30086& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);