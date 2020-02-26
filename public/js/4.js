(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/School.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/School.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["regions"],
  data: function data() {
    return {
      form: {
        name: "",
        type: "",
        level: "",
        street: "",
        region_id: "",
        district_id: ""
      }
    };
  },
  watch: {
    form: {
      handler: function handler() {
        this.$emit("environment", this.form);
      },
      deep: true
    }
  },
  computed: {
    districts: function districts() {
      var _this = this;

      var region = this.regions.find(function (item) {
        return item.id === _this.form.region_id;
      });
      return region ? region.districts : [];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/School.vue?vue&type=template&id=7e1e542a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/School.vue?vue&type=template&id=7e1e542a& ***!
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
  return _c("div", { staticClass: "bg-gray-100 px-6 py-6 mb-6 mt-3" }, [
    _c("div", { staticClass: "flex -mx-3" }, [
      _c("div", { staticClass: "mb-6 w-full px-3" }, [
        _c(
          "label",
          {
            staticClass: "block mb-2 text-gray-700",
            attrs: { for: "school_name" }
          },
          [_vm._v("School name")]
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
          attrs: { id: "school_name" },
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
        _vm.errors().has("environment.name")
          ? _c("div", { staticClass: "form-error mt-1" }, [
              _vm._v(
                "\n                    The school name field is required.\n                "
              )
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "flex -mx-3" }, [
      _c("div", { staticClass: "mb-6 w-1/3 px-3" }, [
        _c(
          "label",
          {
            staticClass: "block mb-2 text-gray-700",
            attrs: { for: "school_type" }
          },
          [_vm._v("Type")]
        ),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.type,
                expression: "form.type"
              }
            ],
            staticClass: "form-select w-full",
            attrs: { id: "school_type" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.form,
                  "type",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v("Choose...")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "private" } }, [_vm._v("Private")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "government" } }, [
              _vm._v("Government")
            ])
          ]
        ),
        _vm._v(" "),
        _vm.errors().has("environment.type")
          ? _c("div", { staticClass: "form-error mt-1" }, [
              _vm._v(
                "\n                    The school type field is required.\n                "
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-6 w-2/3 px-3" }, [
        _c(
          "label",
          {
            staticClass: "block mb-2 text-gray-700",
            attrs: { for: "school_level" }
          },
          [_vm._v("Level")]
        ),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.level,
                expression: "form.level"
              }
            ],
            staticClass: "form-select w-full",
            attrs: { id: "school_level" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.form,
                  "level",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v("Choose...")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "primary" } }, [
              _vm._v("Primary Education")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "a-level" } }, [
              _vm._v("Secondary Education (O - level)")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "o-level" } }, [
              _vm._v("Secondary Education (A - level)")
            ])
          ]
        ),
        _vm._v(" "),
        _vm.errors().has("environment.level")
          ? _c("div", { staticClass: "form-error mt-1" }, [
              _vm._v(
                "\n                    The level field is required.\n                "
              )
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "flex -mx-3" }, [
      _c("div", { staticClass: "mb-6 w-full px-3" }, [
        _c(
          "label",
          {
            staticClass: "block mb-1 text-gray-700",
            attrs: { for: "school_street" }
          },
          [_vm._v("Street")]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.street,
              expression: "form.street"
            }
          ],
          staticClass: "form-input w-full",
          attrs: { type: "text", id: "school_street" },
          domProps: { value: _vm.form.street },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form, "street", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _vm.errors().has("environment.street")
          ? _c("div", { staticClass: "form-error mt-1" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.errors().first("environment.street")) +
                  "\n                "
              )
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "flex -mx-3" }, [
      _c("div", { staticClass: "mb-6 w-1/2 px-3" }, [
        _c(
          "label",
          {
            staticClass: "block mb-2 text-gray-700",
            attrs: { for: "school_region" }
          },
          [_vm._v("Region")]
        ),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.region_id,
                expression: "form.region_id"
              }
            ],
            staticClass: "form-select w-full",
            attrs: { id: "school_region" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.form,
                  "region_id",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v("Choose...")]),
            _vm._v(" "),
            _vm._l(_vm.regions, function(region) {
              return _c(
                "option",
                { key: region.id, domProps: { value: region.id } },
                [_vm._v(_vm._s(region.name))]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _vm.errors().has("environment.region_id")
          ? _c("div", { staticClass: "form-error mt-1" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.errors().first("environment.region_id")) +
                  "\n                "
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-6 w-1/2 px-3" }, [
        _c(
          "label",
          {
            staticClass: "block mb-2 text-gray-700",
            attrs: { for: "school_district" }
          },
          [_vm._v("District")]
        ),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.district_id,
                expression: "form.district_id"
              }
            ],
            staticClass: "form-select w-full",
            attrs: { id: "school_district" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.form,
                  "district_id",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v("Choose...")]),
            _vm._v(" "),
            _vm._l(_vm.districts, function(district) {
              return _c(
                "option",
                { key: district.id, domProps: { value: district.id } },
                [_vm._v(_vm._s(district.name))]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _vm.errors().has("environment.district_id")
          ? _c("div", { staticClass: "form-error mt-1" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.errors().first("environment.district_id")) +
                  "\n                "
              )
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Allegations/School.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Allegations/School.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _School_vue_vue_type_template_id_7e1e542a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./School.vue?vue&type=template&id=7e1e542a& */ "./resources/js/Pages/Allegations/School.vue?vue&type=template&id=7e1e542a&");
/* harmony import */ var _School_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./School.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Allegations/School.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _School_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _School_vue_vue_type_template_id_7e1e542a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _School_vue_vue_type_template_id_7e1e542a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Allegations/School.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Allegations/School.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/School.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_School_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./School.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/School.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_School_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Allegations/School.vue?vue&type=template&id=7e1e542a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/School.vue?vue&type=template&id=7e1e542a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_School_vue_vue_type_template_id_7e1e542a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./School.vue?vue&type=template&id=7e1e542a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/School.vue?vue&type=template&id=7e1e542a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_School_vue_vue_type_template_id_7e1e542a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_School_vue_vue_type_template_id_7e1e542a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);