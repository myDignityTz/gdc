(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["regions"],
  data: function data() {
    return {
      form: {
        street: "",
        region: "",
        district: ""
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
        return item.id === _this.form.region;
      });
      return region ? region.districts : [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Static/Allegation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Static/Allegation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_SiteLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/SiteLayout */ "./resources/js/Shared/SiteLayout.vue");
/* harmony import */ var _Pages_Allegations_School__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Pages/Allegations/School */ "./resources/js/Pages/Allegations/School.vue");
/* harmony import */ var _Pages_Allegations_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Allegations/Home */ "./resources/js/Pages/Allegations/Home.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Layout: _Shared_SiteLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    HomeEnvironment: _Pages_Allegations_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
    SchoolEnvironment: _Pages_Allegations_School__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["allegations", "regions", "types", "relationships"],
  data: function data() {
    return {
      form: {
        type_id: "",
        category_id: "",
        description: "",
        environment_type: "",
        environment: null,
        victim: {
          name: "",
          age: "",
          gender: "",
          description: ""
        },
        suspect: {
          name: "",
          relationship: "",
          description: ""
        }
      }
    };
  },
  computed: {
    errors: function errors() {
      return this.$page.errors;
    },
    environment: function environment() {
      return this.form.environment_type ? "".concat(this.form.environment_type, "Environment") : null;
    },
    categories: function categories() {
      var _this = this;

      var type = this.types.find(function (item) {
        return item.id === _this.form.type_id;
      });
      return type ? type.categories : [];
    }
  },
  methods: {
    submit: function submit() {
      this.$inertia.post("/allegations", this.form);
    },
    appendEnvironment: function appendEnvironment(payload) {
      this.form.environment = payload;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Home.vue?vue&type=template&id=9cc6a4d4&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/Home.vue?vue&type=template&id=9cc6a4d4& ***!
  \**************************************************************************************************************************************************************************************************************/
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
          { staticClass: "block mb-1 text-gray-700", attrs: { for: "type" } },
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
          attrs: { type: "text" },
          domProps: { value: _vm.form.street },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form, "street", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "flex -mx-3" }, [
      _c("div", { staticClass: "mb-6 w-1/2 px-3" }, [
        _c(
          "label",
          { staticClass: "block mb-2 text-gray-700", attrs: { for: "type" } },
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
                value: _vm.form.region,
                expression: "form.region"
              }
            ],
            staticClass: "form-select w-full",
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
                  "region",
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
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-6 w-1/2 px-3" }, [
        _c(
          "label",
          { staticClass: "block mb-2 text-gray-700", attrs: { for: "type" } },
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
                value: _vm.form.district,
                expression: "form.district"
              }
            ],
            staticClass: "form-select w-full",
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
                  "district",
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
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Static/Allegation.vue?vue&type=template&id=6543615a&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Static/Allegation.vue?vue&type=template&id=6543615a& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "The Expert - About" } }, [
    _c("div", { staticClass: "w-full" }, [
      _c("section", { staticClass: "bg-purple-700 pt-24 pb-48" }, [
        _c("div", { staticClass: "w-2/3 mx-auto" }, [
          _c("header", { staticClass: "mb-4" }, [
            _c("h1", { staticClass: "text-3xl font-semibold text-white" }, [
              _vm._v("Report Issue")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-purple-100 text-lg leading-loose" }, [
            _vm._v(
              "\n\t\t\t\t\tGirls Dropout Cure (GDC) is a platform that encourages and prompts the\n\t\t\t\t\tcommunity to speak out and report different cases or issues that affect girls\n\t\t\t\t\tin their respective communities.\n\t\t\t\t"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "bg-white pb-24" }, [
        _c("div", { staticClass: "w-2/3 mx-auto" }, [
          _c("div", { staticClass: "w-2/3" }, [
            _c(
              "form",
              {
                staticClass: "relative bg-white rounded shadow-lg left-0",
                staticStyle: { top: "-7rem" }
              },
              [
                _c("div", { staticClass: "py-8" }, [
                  _c("section", { staticClass: "px-6 pb-12 mb-6 border-b" }, [
                    _c("header", { staticClass: "mb-6" }, [
                      _c("h2", { staticClass: "text-lg mb-2 text-gray-600" }, [
                        _vm._v("Report details")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-sm text-gray-700" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\tThis details will be used only for follow up\n\t\t\t\t\t\t\t\t\t\treported issues, And it is optional if you feel\n\t\t\t\t\t\t\t\t\t\tlike you don't want to share it.\n\t\t\t\t\t\t\t\t\t"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex -mx-3" }, [
                      _c("div", { staticClass: "w-full px-3 mb-6" }, [
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
                          staticClass: "form-input w-full",
                          attrs: { type: "text" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex -mx-3" }, [
                      _c("div", { staticClass: "w-1/2 px-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "block mb-2 text-gray-700",
                            attrs: { for: "name" }
                          },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-input w-full",
                          attrs: { type: "text" }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-1/2 px-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "block mb-2 text-gray-700",
                            attrs: { for: "name" }
                          },
                          [_vm._v("Phone")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-input w-full",
                          attrs: { type: "text" }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("section", { staticClass: "px-6 pb-12 mb-6 border-b" }, [
                    _c("header", { staticClass: "mb-6" }, [
                      _c("h2", { staticClass: "text-lg mb-2 text-gray-600" }, [
                        _vm._v("Case details")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-sm text-gray-700" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur, adipisicing elit.\n\t\t\t\t\t\t\t\t\t\tMolestias tenetur consequuntur eveniet accusantium eius nisi\n\t\t\t\t\t\t\t\t\t\titaque officia magni.\n\t\t\t\t\t\t\t\t\t"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex -mx-3" }, [
                      _c("div", { staticClass: "mb-6 w-1/2 px-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "block mb-2 text-gray-700",
                            attrs: { for: "type" }
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
                                value: _vm.form.type_id,
                                expression: "form.type_id"
                              }
                            ],
                            staticClass: "form-select w-full",
                            class: { "border-red-500": _vm.$page.errors.type },
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
                                  "type_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Choose...")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.types, function(type) {
                              return _c(
                                "option",
                                { key: type.id, domProps: { value: type.id } },
                                [_vm._v(_vm._s(type.name))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.$page.errors.type
                          ? _c(
                              "div",
                              {
                                staticClass: "text-red-500 text-sm italic mt-1"
                              },
                              [_vm._v(_vm._s(_vm.$page.errors.type[0]))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-6 w-1/2 px-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "block mb-2 text-gray-700",
                            attrs: { for: "type" }
                          },
                          [_vm._v("Category")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.category_id,
                                expression: "form.category_id"
                              }
                            ],
                            staticClass: "form-select w-full",
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
                                  "category_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Choose...")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.categories, function(category) {
                              return _c(
                                "option",
                                {
                                  key: category.id,
                                  domProps: { value: category.id }
                                },
                                [_vm._v(_vm._s(category.name))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.$page.errors.classification
                          ? _c(
                              "div",
                              {
                                staticClass: "text-red-500 text-sm italic mt-1"
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$page.errors.classification[0])
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex -mx-3" }, [
                      _c("div", { staticClass: "w-full px-3 mb-6" }, [
                        _c(
                          "label",
                          {
                            staticClass: "block mb-2 text-gray-700",
                            attrs: { for: "type" }
                          },
                          [_vm._v("Environment")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.environment_type,
                                expression: "form.environment_type"
                              }
                            ],
                            staticClass: "form-select w-full",
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
                                  "environment_type",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Choose...")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "home" } }, [
                              _vm._v("Home")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "school" } }, [
                              _vm._v("School")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm.$page.errors.environment
                          ? _c(
                              "div",
                              {
                                staticClass: "text-red-500 text-sm italic mt-1"
                              },
                              [_vm._v(_vm._s(_vm.$page.errors.environment[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "-mx-6" },
                      [
                        _c(_vm.environment, {
                          tag: "component",
                          attrs: { regions: _vm.regions },
                          on: { environment: _vm.appendEnvironment }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex -mx-3" }, [
                      _c("div", { staticClass: "w-full px-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "block mb-2 text-gray-700",
                            attrs: { for: "type" }
                          },
                          [_vm._v("Description")]
                        ),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.description,
                              expression: "form.description"
                            }
                          ],
                          staticClass: "form-textarea w-full",
                          attrs: { rows: "3" },
                          domProps: { value: _vm.form.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("section", { staticClass: "px-6 pb-12 mb-6 border-b" }, [
                    _c("header", { staticClass: "mb-6" }, [
                      _c("h2", { staticClass: "text-lg mb-2 text-gray-600" }, [
                        _vm._v("Victim details")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-sm text-gray-700" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur, adipisicing elit.\n\t\t\t\t\t\t\t\t\t\tMolestias tenetur consequuntur eveniet accusantium eius nisi\n\t\t\t\t\t\t\t\t\t\titaque officia magni.\n\t\t\t\t\t\t\t\t\t"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex -mx-3" }, [
                      _c("div", { staticClass: "mb-6 w-2/3 px-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "block mb-1 text-gray-700",
                            attrs: { for: "type" }
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.victim.name,
                              expression: "form.victim.name"
                            }
                          ],
                          staticClass: "form-input w-full",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.victim.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form.victim,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-6 w-1/3 px-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "block mb-1 text-gray-700",
                            attrs: { for: "type" }
                          },
                          [_vm._v("Age (In Years)")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.victim.age,
                              expression: "form.victim.age"
                            }
                          ],
                          staticClass: "form-input w-full",
                          attrs: { type: "number" },
                          domProps: { value: _vm.form.victim.age },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form.victim,
                                "age",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.$page.errors.victim
                          ? _c(
                              "div",
                              {
                                staticClass: "text-red-500 text-sm italic mt-1"
                              },
                              [_vm._v(_vm._s(_vm.$page.errors.victim.age[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-6" }, [
                      _c(
                        "label",
                        {
                          staticClass: "block mb-1 text-gray-700",
                          attrs: { for: "type" }
                        },
                        [_vm._v("Description")]
                      ),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.victim.description,
                            expression: "form.victim.description"
                          }
                        ],
                        staticClass: "form-textarea w-full",
                        attrs: { rows: "3" },
                        domProps: { value: _vm.form.victim.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.victim,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("section", { staticClass: "border-b mb-6 pb-5 px-6" }, [
                    _c("header", { staticClass: "mb-6" }, [
                      _c("h2", { staticClass: "text-lg mb-2 text-gray-600" }, [
                        _vm._v("Suspect details")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-sm text-gray-700" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur, adipisicing elit.\n\t\t\t\t\t\t\t\t\t\tMolestias tenetur consequuntur eveniet accusantium eius nisi\n\t\t\t\t\t\t\t\t\t\titaque officia magni.\n\t\t\t\t\t\t\t\t\t"
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex -mx-3" }, [
                      _c("div", { staticClass: "mb-6 w-full px-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "block mb-1 text-gray-700",
                            attrs: { for: "type" }
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.suspect.name,
                              expression: "form.suspect.name"
                            }
                          ],
                          staticClass: "form-input w-full",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.suspect.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form.suspect,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex -mx-3" }, [
                      _c("div", { staticClass: "mb-6 w-1/2 px-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "block mb-1 text-gray-700",
                            attrs: { for: "type" }
                          },
                          [_vm._v("Relationship")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.suspect.relationship,
                                expression: "form.suspect.relationship"
                              }
                            ],
                            staticClass: "form-select w-full",
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
                                  _vm.form.suspect,
                                  "relationship",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", [_vm._v("Choose...")]),
                            _vm._v(" "),
                            _vm._l(_vm.relationships, function(relationship) {
                              return _c(
                                "option",
                                {
                                  key: relationship.id,
                                  domProps: { value: relationship.name }
                                },
                                [_vm._v(_vm._s(relationship.name))]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-6" }, [
                      _c(
                        "label",
                        {
                          staticClass: "block mb-1 text-gray-700",
                          attrs: { for: "type" }
                        },
                        [_vm._v("Description")]
                      ),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.suspect.description,
                            expression: "form.suspect.description"
                          }
                        ],
                        staticClass: "form-textarea w-full",
                        attrs: { rows: "3" },
                        domProps: { value: _vm.form.suspect.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form.suspect,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("footer", { staticClass: "flex justify-end px-6" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.submit($event)
                          }
                        }
                      },
                      [_vm._v("Report Case")]
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Allegations/Home.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Allegations/Home.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_9cc6a4d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=9cc6a4d4& */ "./resources/js/Pages/Allegations/Home.vue?vue&type=template&id=9cc6a4d4&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Allegations/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_9cc6a4d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_9cc6a4d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Allegations/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Allegations/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Allegations/Home.vue?vue&type=template&id=9cc6a4d4&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/Home.vue?vue&type=template&id=9cc6a4d4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9cc6a4d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=9cc6a4d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Home.vue?vue&type=template&id=9cc6a4d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9cc6a4d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9cc6a4d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Static/Allegation.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Static/Allegation.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Allegation_vue_vue_type_template_id_6543615a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Allegation.vue?vue&type=template&id=6543615a& */ "./resources/js/Pages/Static/Allegation.vue?vue&type=template&id=6543615a&");
/* harmony import */ var _Allegation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Allegation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Static/Allegation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Allegation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Allegation_vue_vue_type_template_id_6543615a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Allegation_vue_vue_type_template_id_6543615a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Static/Allegation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Static/Allegation.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Static/Allegation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Allegation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Allegation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Static/Allegation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Allegation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Static/Allegation.vue?vue&type=template&id=6543615a&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Static/Allegation.vue?vue&type=template&id=6543615a& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Allegation_vue_vue_type_template_id_6543615a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Allegation.vue?vue&type=template&id=6543615a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Static/Allegation.vue?vue&type=template&id=6543615a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Allegation_vue_vue_type_template_id_6543615a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Allegation_vue_vue_type_template_id_6543615a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);