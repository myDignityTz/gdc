(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/events */ "./resources/js/events.js");
/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! form-backend-validation */ "./node_modules/form-backend-validation/dist/index.js");
/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(form_backend_validation__WEBPACK_IMPORTED_MODULE_2__);


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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    roles: {
      required: true
    },
    user: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_2___default.a({
        name: this.user.name,
        email: this.user.email,
        roles: this.user.roles.map(function (role) {
          return role.name;
        })
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
                return this.form.put("/users/".concat(this.user.id));

              case 3:
                this.$emit("close");
                _events__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('userWasUpdated', true);
                this.$inertia.reload();
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

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba& ***!
  \********************************************************************************************************************************************************************************************************/
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
      _c("section", { staticClass: "mt-6" }, [
        _c("div", { staticClass: "px-6 mb-6" }, [
          _c("label", { staticClass: "block mb-2", attrs: { for: "name" } }, [
            _vm._v("Name")
          ]),
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
            attrs: { type: "text", id: "name" },
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
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "px-6 mb-6" }, [
          _c("label", { staticClass: "block mb-2", attrs: { for: "email" } }, [
            _vm._v("Email")
          ]),
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
            attrs: { type: "email", id: "email" },
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
      _c(
        "section",
        { staticClass: "px-6" },
        [
          _c("span", [_vm._v("Roles")]),
          _vm._v(" "),
          _vm._l(_vm.roles, function(role) {
            return _c("div", { key: role.id, staticClass: "flex mt-1" }, [
              _c("label", { staticClass: "flex items-center" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.roles,
                      expression: "form.roles"
                    }
                  ],
                  staticClass: "form-checkbox",
                  attrs: { type: "checkbox" },
                  domProps: {
                    value: role.name,
                    checked: Array.isArray(_vm.form.roles)
                      ? _vm._i(_vm.form.roles, role.name) > -1
                      : _vm.form.roles
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.form.roles,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = role.name,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(_vm.form, "roles", $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.form,
                              "roles",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.form, "roles", $$c)
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-2" }, [
                  _vm._v(_vm._s(role.title))
                ])
              ])
            ])
          }),
          _vm._v(" "),
          _vm.form.errors.has("roles")
            ? _c("div", { staticClass: "mt-2 text-sm text-red-500" }, [
                _vm._v(
                  "\n            Users must be assigned at least to a one role\n        "
                )
              ])
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "my-4" }),
      _vm._v(" "),
      _c("footer", { staticClass: "px-6 pb-4 flex justify-end" }, [
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
          [_vm._v("Save Changes")]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "px-6 mt-6" }, [
      _c(
        "h2",
        {
          staticClass:
            "text-gray-700 text-xs uppercase tracking-wide font-semibold"
        },
        [_vm._v("Edit User")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Users/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Users/Edit.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=42efdfba& */ "./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=42efdfba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/events.js":
/*!********************************!*\
  !*** ./resources/js/events.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (new vue__WEBPACK_IMPORTED_MODULE_0__["default"]());

/***/ })

}]);