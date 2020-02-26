(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SignUp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SignUp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form-backend-validation */ "./node_modules/form-backend-validation/dist/index.js");
/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(form_backend_validation__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  data: function data() {
    return {
      isLoading: false,
      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_1___default.a({
        email: '',
        name: '',
        password: ''
      })
    };
  },
  methods: {
    handleRegistration: function () {
      var _handleRegistration = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return this.form.post("/register", this.form);

              case 4:
                this.$emit("close");
                this.isLoading = false;
                this.$inertia.reload();
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                this.isLoading = false;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function handleRegistration() {
        return _handleRegistration.apply(this, arguments);
      }

      return handleRegistration;
    }(),
    cancel: function cancel() {
      this.$emit("close");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SiteLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SiteLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignIn */ "./resources/js/Shared/SignIn.vue");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp */ "./resources/js/Shared/SignUp.vue");
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
  props: {
    title: String
  },
  data: function data() {
    return {
      options: {
        height: "auto",
        width: "450px",
        scrollable: true
      }
    };
  },
  computed: {
    user: function user() {
      return this.$page.auth.user;
    },
    isAuthenticated: function isAuthenticated() {
      return !!this.$page.auth.user;
    }
  },
  watch: {
    title: {
      immediate: true,
      handler: function handler(title) {
        document.title = title;
      }
    }
  },
  methods: {
    login: function login() {
      this.$modal.show(_SignIn__WEBPACK_IMPORTED_MODULE_0__["default"], {}, this.options);
    },
    register: function register() {
      this.$modal.show(_SignUp__WEBPACK_IMPORTED_MODULE_1__["default"], {}, this.options);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SignUp.vue?vue&type=template&id=0289bb94&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SignUp.vue?vue&type=template&id=0289bb94& ***!
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
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.handleRegistration($event)
        }
      }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "px-6" }, [
        _c("div", { staticClass: "flex mb-6" }, [
          _c("div", { staticClass: "w-full" }, [
            _c(
              "label",
              {
                staticClass: "block mb-2 text-gray-700",
                attrs: { for: "name" }
              },
              [_vm._v("Full Name")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.name,
                  expression: "form.name"
                }
              ],
              staticClass: "form-input w-full",
              attrs: { id: "name" },
              domProps: { value: _vm.form.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.errors.has("name")
              ? _c("div", { staticClass: "mt-2 text-sm text-red-500" }, [
                  _vm._v(_vm._s(_vm.form.errors.first("name")))
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex mb-6" }, [
          _c("div", { staticClass: "w-full" }, [
            _c(
              "label",
              {
                staticClass: "block mb-2 text-gray-700",
                attrs: { for: "email" }
              },
              [_vm._v("Email Address")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.email,
                  expression: "form.email"
                }
              ],
              staticClass: "form-input w-full",
              attrs: { id: "email", type: "email" },
              domProps: { value: _vm.form.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "email", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.errors.has("email")
              ? _c("div", { staticClass: "mt-2 text-sm text-red-500" }, [
                  _vm._v(_vm._s(_vm.form.errors.first("email")))
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex mb-6" }, [
          _c("div", { staticClass: "w-full" }, [
            _c(
              "label",
              {
                staticClass: "block mb-2 text-gray-700",
                attrs: { for: "password" }
              },
              [_vm._v("Password")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.password,
                  expression: "form.password"
                }
              ],
              staticClass: "form-input w-full",
              attrs: { id: "password", type: "password" },
              domProps: { value: _vm.form.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "password", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.errors.has("password")
              ? _c("div", { staticClass: "mt-2 text-sm text-red-500" }, [
                  _vm._v(_vm._s(_vm.form.errors.first("password")))
                ])
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "footer",
        {
          staticClass: "bg-purple-100 py-4 px-6 flex justify-end items-center"
        },
        [
          _c(
            "button",
            {
              staticClass:
                "bg-purple-200 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded text-purple-700  mr-3",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.cancel($event)
                }
              }
            },
            [_vm._v("\n            Cancel\n        ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "bg-purple-700 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded text-white",
              class: { "opacity-50 cursor-not-allowed": _vm.isLoading },
              attrs: { disabled: _vm.isLoading },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.handleRegistration($event)
                }
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.isLoading ? "Submitting..." : "Register") +
                  "\n        "
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "px-6 py-6" }, [
      _c(
        "h2",
        { staticClass: "border-b pb-4 text-xs uppercase tracking-wider" },
        [_vm._v("Register")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SiteLayout.vue?vue&type=template&id=6f57e5a6&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SiteLayout.vue?vue&type=template&id=6f57e5a6& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    _c("header", { staticClass: "bg-purple-700 py-5" }, [
      _c("nav", { staticClass: "lg:w-2/3 w-full mx-auto" }, [
        _c(
          "div",
          {
            staticClass:
              "flex lg:flex-row flex-col items-center justify-between"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "flex w-full lg:flex-row flex-col items-center text-purple-300"
              },
              [
                _c(
                  "inertia-link",
                  {
                    staticClass:
                      "flex-shrink-0 mb-6 lg:mb-0 text-white font-bold lg:pr-4 lg:inline-block block pl-6 lg:pl-0 text-left w-full lg:w-auto",
                    attrs: { href: "/" }
                  },
                  [
                    _c("img", {
                      staticClass: "h-12 w-12",
                      attrs: { src: "/img/logo/logo.png", alt: "" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex flex-col lg:flex-row w-full" },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "hover:text-white lg:px-4 px-6 block lg:inline mb-4 lg:mb-0 whitespace-no-wrap",
                        class: { "text-white": _vm.$current("about") },
                        attrs: { href: "/about" }
                      },
                      [_vm._v("About")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "hover:text-white lg:px-4 px-6 block lg:inline mb-4 lg:mb-0 whitespace-no-wrap",
                        class: { "text-white": _vm.$current("stories") },
                        attrs: { href: "/stories" }
                      },
                      [_vm._v("Stories")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "hover:text-white lg:px-4 px-6 block lg:inline mb-4 lg:mb-0 whitespace-no-wrap",
                        class: { "text-white": _vm.$current("how-we-work") },
                        attrs: { href: "/how_we_work" }
                      },
                      [_vm._v("How We Work")]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "hover:text-white lg:px-4 px-6 block lg:inline mb-4 lg:mb-0 whitespace-no-wrap",
                        class: { "text-white": _vm.$current("contact") },
                        attrs: { href: "/contact" }
                      },
                      [_vm._v("Contact")]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex lg:flex-row flex-col lg:items-center w-full px-6 lg:px-0 justify-end"
              },
              [
                _vm.isAuthenticated
                  ? [
                      _c(
                        "inertia-link",
                        {
                          staticClass: "text-white px-3 hover:underline",
                          attrs: { href: "/home" }
                        },
                        [_vm._v(_vm._s(_vm.user.name))]
                      )
                    ]
                  : [
                      _c(
                        "button",
                        {
                          staticClass:
                            "block text-white px-3 text-xs uppercase tracking-wider font-semibold hover:underline rounded bg-purple-600 lg:bg-transparent py-3 mb-4 lg:mb-0",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.login($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            Sign in\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "block text-white px-3 text-xs uppercase tracking-wider font-semibold hover:underline rounded bg-purple-600 lg:bg-transparent py-3 mb-4 lg:mb-0",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.register($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            Register\n                        "
                          )
                        ]
                      )
                    ],
                _vm._v(" "),
                _c(
                  "inertia-link",
                  {
                    staticClass:
                      "lg:ml-4 bg-white text-blue-700 px-4 py-3 flex items-center justify-center rounded text-center",
                    attrs: { href: "/report_issues" }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "w-5 h-5 fill-current",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24"
                        }
                      },
                      [
                        _c("path", {
                          attrs: { fill: "none", d: "M0 0h24v24H0z" }
                        }),
                        _c("path", {
                          attrs: { d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "ml-2 leading-none text-xs uppercase tracking-wider font-semibold"
                      },
                      [_vm._v("Report Issue")]
                    )
                  ]
                )
              ],
              2
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("article", [_vm._t("default")], 2),
    _vm._v(" "),
    _c("footer", { staticClass: "py-8 bg-blue-900" }, [
      _c("div", { staticClass: "lg:w-2/3 mx-auto px-6 lg:px-0" }, [
        _c(
          "div",
          {
            staticClass:
              "flex lg:flex-row flex-col items-center justify-between"
          },
          [
            _c("div", { staticClass: "text-white mb-4" }, [
              _vm._v(
                "\n                    © Copyright " +
                  _vm._s(new Date().getFullYear()) +
                  ", The Expert.\n                "
              )
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "flex items-center" }, [
      _c(
        "a",
        {
          staticClass:
            "px-2 text-blue-100 hover:text-blue-300 flex items-center",
          attrs: { href: "#" }
        },
        [
          _c("i", { staticClass: "ri-facebook-box-fill" }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-2" }, [_vm._v("Facebook")])
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "px-2 text-blue-100 hover:text-blue-300 flex items-center",
          attrs: { href: "#" }
        },
        [
          _c("i", { staticClass: "ri-instagram-fill" }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-2" }, [_vm._v("Instagram")])
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "px-2 text-blue-100 hover:text-blue-300 flex items-center",
          attrs: { href: "#" }
        },
        [
          _c("i", { staticClass: "ri-twitter-fill" }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-2" }, [_vm._v("Twitter")])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Shared/SignUp.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/SignUp.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUp_vue_vue_type_template_id_0289bb94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.vue?vue&type=template&id=0289bb94& */ "./resources/js/Shared/SignUp.vue?vue&type=template&id=0289bb94&");
/* harmony import */ var _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.vue?vue&type=script&lang=js& */ "./resources/js/Shared/SignUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUp_vue_vue_type_template_id_0289bb94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUp_vue_vue_type_template_id_0289bb94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/SignUp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/SignUp.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/SignUp.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SignUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/SignUp.vue?vue&type=template&id=0289bb94&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/SignUp.vue?vue&type=template&id=0289bb94& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_0289bb94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=template&id=0289bb94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SignUp.vue?vue&type=template&id=0289bb94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_0289bb94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_0289bb94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/SiteLayout.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/SiteLayout.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SiteLayout_vue_vue_type_template_id_6f57e5a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SiteLayout.vue?vue&type=template&id=6f57e5a6& */ "./resources/js/Shared/SiteLayout.vue?vue&type=template&id=6f57e5a6&");
/* harmony import */ var _SiteLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteLayout.vue?vue&type=script&lang=js& */ "./resources/js/Shared/SiteLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SiteLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SiteLayout_vue_vue_type_template_id_6f57e5a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SiteLayout_vue_vue_type_template_id_6f57e5a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/SiteLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/SiteLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/SiteLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SiteLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/SiteLayout.vue?vue&type=template&id=6f57e5a6&":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/SiteLayout.vue?vue&type=template&id=6f57e5a6& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteLayout_vue_vue_type_template_id_6f57e5a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteLayout.vue?vue&type=template&id=6f57e5a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SiteLayout.vue?vue&type=template&id=6f57e5a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteLayout_vue_vue_type_template_id_6f57e5a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteLayout_vue_vue_type_template_id_6f57e5a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);