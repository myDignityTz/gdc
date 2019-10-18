(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SignIn.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SignIn.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        password: "",
        email: "",
        remember: false
      }
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      this.$inertia.post("/login", this.form).then(function (response) {
        _this.$emit("close");
      });
    },
    cancel: function cancel() {
      this.$emit("close");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SignUp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SignUp.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        passwordConfirm: ""
      }
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      this.$inertia.post("/register", {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        "password-confirm": this.form.passwordConfirm
      }).then(function (response) {
        _this.$emit("close");
      });
    },
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: String
  },
  data: function data() {
    return {
      options: {
        height: "auto",
        width: "450px",
        scrollable: false
      }
    };
  },
  computed: {
    user: function user() {
      return this.$page.auth.user;
    },
    isAuthenticated: function isAuthenticated() {
      return !!this.$page.auth.user;
    },
    today: function today() {
      return new Date();
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
      this.$modal.show(_SignUp__WEBPACK_IMPORTED_MODULE_1__["default"], {}, this.options).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SignIn.vue?vue&type=template&id=241935c4&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/SignIn.vue?vue&type=template&id=241935c4& ***!
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
  return _c("form", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "px-6" }, [
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
            attrs: {
              id: "email",
              type: "email",
              required: "",
              autocomplete: "email",
              autofocus: ""
            },
            domProps: { value: _vm.form.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "email", $event.target.value)
              }
            }
          })
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
            attrs: {
              id: "password",
              type: "password",
              required: "",
              autocomplete: "current-password"
            },
            domProps: { value: _vm.form.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "password", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-6" }, [
        _c("div", { staticClass: "flex justify-between" }, [
          _c("div", { staticClass: "flex items-center" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.remember,
                  expression: "form.remember"
                }
              ],
              staticClass: "form-checkbox",
              attrs: { type: "checkbox", name: "remember", id: "remember" },
              domProps: {
                checked: Array.isArray(_vm.form.remember)
                  ? _vm._i(_vm.form.remember, null) > -1
                  : _vm.form.remember
              },
              on: {
                change: function($event) {
                  var $$a = _vm.form.remember,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 &&
                        _vm.$set(_vm.form, "remember", $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        _vm.$set(
                          _vm.form,
                          "remember",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        )
                    }
                  } else {
                    _vm.$set(_vm.form, "remember", $$c)
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("label", { staticClass: "ml-2", attrs: { for: "remember" } }, [
              _vm._v("Remember me")
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "footer",
      { staticClass: "bg-purple-100 py-4 px-6 flex justify-end items-center" },
      [
        _c(
          "button",
          {
            staticClass:
              "bg-purple-200 text-purple-700 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded mr-3",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.cancel($event)
              }
            }
          },
          [_vm._v("Cancel")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.login($event)
              }
            }
          },
          [_vm._v("Sign In")]
        )
      ]
    )
  ])
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
        [_vm._v("Sign In")]
      )
    ])
  }
]
render._withStripped = true



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
  return _c("form", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "px-6" }, [
      _c("div", { staticClass: "flex mb-6" }, [
        _c("div", { staticClass: "w-full" }, [
          _c(
            "label",
            { staticClass: "block mb-2 text-gray-700", attrs: { for: "name" } },
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
            attrs: { id: "name", required: "", autofocus: "" },
            domProps: { value: _vm.form.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "name", $event.target.value)
              }
            }
          })
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
            attrs: { id: "email", type: "email", required: "" },
            domProps: { value: _vm.form.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "email", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-6 -mx-3" }, [
        _c("div", { staticClass: "w-1/2 px-3" }, [
          _c(
            "label",
            {
              staticClass: "block mb-2 text-gray-700",
              attrs: { for: "password" }
            },
            [_vm._v("Password")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
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
              attrs: { id: "password", type: "password", required: "" },
              domProps: { value: _vm.form.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "password", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/2 px-3" }, [
          _c("div", { staticClass: "mb-6" }, [
            _c(
              "label",
              {
                staticClass: "block mb-2 text-gray-700",
                attrs: { for: "password-confirm" }
              },
              [_vm._v("Confirm Password")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.passwordConfirm,
                    expression: "form.passwordConfirm"
                  }
                ],
                staticClass: "form-input w-full",
                attrs: { id: "password-confirm", type: "password" },
                domProps: { value: _vm.form.passwordConfirm },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "passwordConfirm", $event.target.value)
                  }
                }
              })
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "footer",
      { staticClass: "bg-purple-100 py-4 px-6 flex justify-end items-center" },
      [
        _c(
          "button",
          {
            staticClass:
              "bg-purple-200 text-purple-700 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded mr-3",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.cancel($event)
              }
            }
          },
          [_vm._v("Cancel")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.login($event)
              }
            }
          },
          [_vm._v("Register")]
        )
      ]
    )
  ])
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
      _c("nav", { staticClass: "w-2/3 mx-auto" }, [
        _c("div", { staticClass: "flex items-center justify-between" }, [
          _c(
            "div",
            { staticClass: "flex items-center text-purple-300" },
            [
              _c(
                "inertia-link",
                {
                  staticClass: "text-white font-bold pr-4",
                  attrs: { href: "/" }
                },
                [_vm._v("GDC")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass: "hover:text-white px-4",
                  class: { "text-white": _vm.route().current("about") },
                  attrs: { href: "/about" }
                },
                [_vm._v("About")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass: "hover:text-white px-4",
                  class: { "text-white": _vm.route().current("about") },
                  attrs: { href: "/stories" }
                },
                [_vm._v("Stories")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass: "hover:text-white px-4",
                  class: { "text-white": _vm.route().current("about") },
                  attrs: { href: "/how_we_work" }
                },
                [_vm._v("How We Work")]
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass: "hover:text-white px-4",
                  class: { "text-white": _vm.route().current("about") },
                  attrs: { href: "/contact" }
                },
                [_vm._v("Contact")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex items-center" },
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
                          "text-white px-3 text-xs uppercase tracking-wider font-semibold hover:underline",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.login($event)
                          }
                        }
                      },
                      [_vm._v("Sign in")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "text-white px-3 text-xs uppercase tracking-wider font-semibold hover:underline",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.register($event)
                          }
                        }
                      },
                      [_vm._v("Register")]
                    )
                  ],
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  staticClass:
                    "ml-4 bg-white text-blue-700 px-4 py-2 flex items-center rounded",
                  attrs: { href: "/report_issues" }
                },
                [
                  _c("i", { staticClass: "ri-add-line" }),
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
        ])
      ])
    ]),
    _vm._v(" "),
    _c("article", [_vm._t("default")], 2),
    _vm._v(" "),
    _c("footer", { staticClass: "py-8 bg-blue-900" }, [
      _c("div", { staticClass: "w-2/3 mx-auto" }, [
        _c("div", { staticClass: "flex items-center justify-between" }, [
          _c("div", { staticClass: "text-white" }, [
            _vm._v(
              "© Copyright " + _vm._s(_vm.today.getFullYear()) + ", The Expert."
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
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

/***/ "./resources/js/Shared/SignIn.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/SignIn.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignIn_vue_vue_type_template_id_241935c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignIn.vue?vue&type=template&id=241935c4& */ "./resources/js/Shared/SignIn.vue?vue&type=template&id=241935c4&");
/* harmony import */ var _SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignIn.vue?vue&type=script&lang=js& */ "./resources/js/Shared/SignIn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignIn_vue_vue_type_template_id_241935c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignIn_vue_vue_type_template_id_241935c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/SignIn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/SignIn.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/SignIn.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SignIn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SignIn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/SignIn.vue?vue&type=template&id=241935c4&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/SignIn.vue?vue&type=template&id=241935c4& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_241935c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SignIn.vue?vue&type=template&id=241935c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/SignIn.vue?vue&type=template&id=241935c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_241935c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_241935c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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