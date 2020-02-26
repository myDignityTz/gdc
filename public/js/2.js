(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Account.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Account.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    user: function user() {
      return this.$page.auth.user;
    }
  },
  data: function data() {
    return {
      isLoading: false,
      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_1___default.a({
        name: this.$page.auth.user.name,
        email: this.$page.auth.user.email
      })
    };
  },
  methods: {
    handleLogin: function () {
      var _handleLogin = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.form.put("/account/".concat(this.$page.auth.user.id));

              case 3:
                this.$emit("close");
                _context.next = 6;
                return this.$inertia.reload();

              case 6:
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function handleLogin() {
        return _handleLogin.apply(this, arguments);
      }

      return handleLogin;
    }(),
    cancel: function cancel() {
      this.$emit("close");
    }
  }
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
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account */ "./resources/js/Shared/Account.vue");
/* harmony import */ var _Password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Password */ "./resources/js/Shared/Password.vue");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignIn */ "./resources/js/Shared/SignIn.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AppAccount: _Account__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppPassword: _Password__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
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
  },
  methods: {
    showAccount: function showAccount() {
      this.$modal.show(_Account__WEBPACK_IMPORTED_MODULE_0__["default"], {}, {
        height: "auto",
        width: "450px",
        scrollable: true
      });
    },
    handleChangingPassword: function handleChangingPassword() {
      this.$modal.show(_Password__WEBPACK_IMPORTED_MODULE_1__["default"], {}, {
        height: "auto",
        width: "450px",
        scrollable: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Password.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Password.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    user: function user() {
      return this.$page.auth.user;
    }
  },
  data: function data() {
    return {
      isLoading: false,
      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_1___default.a({
        password_old: '',
        password: '',
        password_confirmation: ''
      })
    };
  },
  methods: {
    submit: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.form.put("/password/".concat(this.$page.auth.user.id));

              case 3:
                this.$emit("close");
                _context.next = 6;
                return this.$inertia.reload();

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }(),
    cancel: function cancel() {
      this.$emit("close");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Account.vue?vue&type=template&id=5e7141fe&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Account.vue?vue&type=template&id=5e7141fe& ***!
  \******************************************************************************************************************************************************************************************************/
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
          return _vm.handleLogin($event)
        }
      }
    },
    [
      _c("header", { staticClass: "px-6 py-6" }, [
        _c(
          "h2",
          { staticClass: "border-b pb-4 text-xs uppercase tracking-wider" },
          [_vm._v(_vm._s(_vm.user.name))]
        )
      ]),
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
              [_vm._v("Name")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.form.name,
                  expression: "form.name",
                  modifiers: { trim: true }
                }
              ],
              staticClass: "form-input w-full",
              attrs: { id: "name", type: "text" },
              domProps: { value: _vm.form.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "name", $event.target.value.trim())
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
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
                  rawName: "v-model.trim",
                  value: _vm.form.email,
                  expression: "form.email",
                  modifiers: { trim: true }
                }
              ],
              staticClass: "form-input w-full",
              attrs: { id: "email", type: "email", autocomplete: "email" },
              domProps: { value: _vm.form.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "email", $event.target.value.trim())
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
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
              staticClass: "btn btn-purple",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.handleLogin($event)
                }
              }
            },
            [_vm._v("Update")]
          )
        ]
      )
    ]
  )
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
            {
              staticClass:
                "flex items-center text-purple-300 font-medium text-sm"
            },
            [
              _vm.$can("view-dashboard")
                ? _c(
                    "inertia-link",
                    {
                      staticClass: "pr-4",
                      class: { "text-white": _vm.$current("home") },
                      attrs: { href: "/home" }
                    },
                    [_vm._v("Dashboard")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$can("browse-allegations")
                ? _c(
                    "inertia-link",
                    {
                      staticClass: "px-4",
                      class: {
                        "text-white": _vm.$current("allegations.index")
                      },
                      attrs: { href: _vm.$route("allegations.index") }
                    },
                    [_vm._v("Allegations")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$can("browse-stakeholders")
                ? _c(
                    "inertia-link",
                    {
                      staticClass: "px-4",
                      class: {
                        "text-white": _vm.$current("stakeholders.index")
                      },
                      attrs: { href: "/stakeholders" }
                    },
                    [_vm._v("Stakeholders")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$can("browse-users")
                ? _c(
                    "inertia-link",
                    {
                      staticClass: "px-4",
                      class: { "text-white": _vm.$current("users.index") },
                      attrs: { href: "/users" }
                    },
                    [_vm._v("Users")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$can("view-settings")
                ? _c(
                    "v-popover",
                    { attrs: { placement: "bottom-start", offset: "24" } },
                    [
                      _c("button", { staticClass: "flex items-center px-4" }, [
                        _c("span", { staticClass: "mr-2" }, [
                          _vm._v("Settings")
                        ]),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass: "h-5 w-5 fill-current",
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
                              attrs: {
                                d:
                                  "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("template", { slot: "popover" }, [
                        _c(
                          "div",
                          { staticClass: "bg-white shadow-xl" },
                          [
                            _vm.$can("browse-allegation-types")
                              ? _c(
                                  "inertia-link",
                                  {
                                    staticClass:
                                      "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                                    attrs: { href: "/allegation_types" }
                                  },
                                  [_vm._v("Allegation Type")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$can("browse-regions")
                              ? _c(
                                  "inertia-link",
                                  {
                                    staticClass:
                                      "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                                    attrs: { href: "/regions" }
                                  },
                                  [_vm._v("Regions")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$can("browse-districts")
                              ? _c(
                                  "inertia-link",
                                  {
                                    staticClass:
                                      "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                                    attrs: { href: "/districts" }
                                  },
                                  [_vm._v("Districts")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$can("browse-suspect-relationships")
                              ? _c(
                                  "inertia-link",
                                  {
                                    staticClass:
                                      "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                                    attrs: { href: "/relationships" }
                                  },
                                  [_vm._v("Suspect Relationships")]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    ],
                    2
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "font-medium text-sm" },
            [
              _c(
                "v-popover",
                { attrs: { placement: "bottom-end", offset: "16" } },
                [
                  _c(
                    "button",
                    { staticClass: "text-white flex items-center" },
                    [
                      _c("span", { staticClass: "mr-2 leading-none" }, [
                        _vm._v(_vm._s(_vm.$page.auth.user.name))
                      ]),
                      _vm._v(" "),
                      _c(
                        "svg",
                        {
                          staticClass: "h-5 w-5 fill-current",
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
                            attrs: {
                              d:
                                "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "popover" }, [
                    _c("div", { staticClass: "bg-white shadow-xl" }, [
                      _c("header", { staticClass: "px-4 py-2 border-b" }, [
                        _c(
                          "h3",
                          {
                            staticClass: "text-sm font-semibold text-gray-700"
                          },
                          [_vm._v(_vm._s(_vm.$page.auth.user.email))]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-gray-600" }, [
                          _vm._v(_vm._s(_vm.$page.auth.user.name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "py-2" },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                              attrs: { href: "#" },
                              on: { click: _vm.showAccount }
                            },
                            [_vm._v("Account")]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white",
                              attrs: { href: "#" },
                              on: { click: _vm.handleChangingPassword }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Password.vue?vue&type=template&id=2b83be77&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Password.vue?vue&type=template&id=2b83be77& ***!
  \*******************************************************************************************************************************************************************************************************/
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
          return _vm.submit($event)
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
                attrs: { for: "password_old" }
              },
              [_vm._v("Old Password")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.form.password_old,
                  expression: "form.password_old",
                  modifiers: { trim: true }
                }
              ],
              staticClass: "form-input w-full",
              attrs: { id: "password_old", type: "password" },
              domProps: { value: _vm.form.password_old },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "password_old", $event.target.value.trim())
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            }),
            _vm._v(" "),
            _vm.form.errors.has("password_old")
              ? _c("div", { staticClass: "mt-2 text-sm text-red-500" }, [
                  _vm._v(_vm._s(_vm.form.errors.first("password_old")))
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
                  rawName: "v-model.trim",
                  value: _vm.form.password,
                  expression: "form.password",
                  modifiers: { trim: true }
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
                  _vm.$set(_vm.form, "password", $event.target.value.trim())
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
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
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex mb-6" }, [
          _c("div", { staticClass: "w-full" }, [
            _c(
              "label",
              {
                staticClass: "block mb-2 text-gray-700",
                attrs: { for: "password_confirmation" }
              },
              [_vm._v("New password")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.form.password_confirmation,
                  expression: "form.password_confirmation",
                  modifiers: { trim: true }
                }
              ],
              staticClass: "form-input w-full",
              attrs: { id: "password_confirmation", type: "password" },
              domProps: { value: _vm.form.password_confirmation },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.form,
                    "password_confirmation",
                    $event.target.value.trim()
                  )
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            }),
            _vm._v(" "),
            _vm.form.errors.has("password_confirmation")
              ? _c("div", { staticClass: "mt-2 text-sm text-red-500" }, [
                  _vm._v(_vm._s(_vm.form.errors.first("password_confirmation")))
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
              staticClass: "btn btn-purple",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [_vm._v("Confirm")]
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
        [_vm._v("Change password")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Shared/Account.vue":
/*!*****************************************!*\
  !*** ./resources/js/Shared/Account.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Account_vue_vue_type_template_id_5e7141fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account.vue?vue&type=template&id=5e7141fe& */ "./resources/js/Shared/Account.vue?vue&type=template&id=5e7141fe&");
/* harmony import */ var _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Account.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Account_vue_vue_type_template_id_5e7141fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Account_vue_vue_type_template_id_5e7141fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Account.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Account.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Shared/Account.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Account.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Account.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Account.vue?vue&type=template&id=5e7141fe&":
/*!************************************************************************!*\
  !*** ./resources/js/Shared/Account.vue?vue&type=template&id=5e7141fe& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_5e7141fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Account.vue?vue&type=template&id=5e7141fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Account.vue?vue&type=template&id=5e7141fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_5e7141fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_5e7141fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/Shared/Password.vue":
/*!******************************************!*\
  !*** ./resources/js/Shared/Password.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Password_vue_vue_type_template_id_2b83be77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Password.vue?vue&type=template&id=2b83be77& */ "./resources/js/Shared/Password.vue?vue&type=template&id=2b83be77&");
/* harmony import */ var _Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Password.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Password_vue_vue_type_template_id_2b83be77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Password_vue_vue_type_template_id_2b83be77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Password.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Shared/Password.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Password.vue?vue&type=template&id=2b83be77&":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/Password.vue?vue&type=template&id=2b83be77& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_2b83be77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Password.vue?vue&type=template&id=2b83be77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Password.vue?vue&type=template&id=2b83be77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_2b83be77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_2b83be77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);