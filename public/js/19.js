(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["allegations"],
  data: function data() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          width: "100%",
          type: "area",
          foreColor: "#4299E1",
          toolbar: {
            show: false
          }
        },
        title: {
          text: "Annual Report",
          align: "left",
          margin: 16,
          offsetX: 18,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "16px",
            color: "#263238"
          }
        },
        fill: {
          colors: "#4299E1"
        },
        grid: {
          show: true,
          borderColor: "#EDF2F7"
        },
        noData: {
          text: "Not data yet, visit again to see progress",
          align: "center"
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          width: 3,
          colors: ["#4299E1"]
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jub", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        theme: {
          // mode: "dark",
          palette: "palette1"
        }
      },
      series: [{
        name: "Allegations (Cases)",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 50, 49, 60, 70]
      }],
      governmentPrivateOptions: {
        chart: {
          type: "donut"
        },
        legend: {
          show: false
        },
        labels: ["Government", "Private", "Other"]
      },
      governmentPrivateSeries: [44, 55, 13],
      homeSchoolOptions: {
        chart: {
          type: "donut"
        },
        labels: ["Home", "School", "Other"]
      },
      homeSchoolSeries: [78, 55, 93],
      allegationTypesOptions: {
        chart: {
          type: "bar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "40%"
          }
        },
        dataLabels: {
          enabled: false
        },
        labels: ["Physical", "Emotinal", "Sexual", "Negleting"]
      },
      allegationTypesSeries: [{
        name: "Allegation Types",
        data: [34, 56, 21, 67]
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "The Expert - Dashboard" } }, [
    _c("div", { staticClass: "w-2/3 mx-auto mb-12" }, [
      _c("header", { staticClass: "my-8" }, [
        _c("h2", { staticClass: "mb-2 text-lg font-bold text-gray-700" }, [
          _vm._v("Dashboard")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-gray-700" }, [
          _vm._v(
            "Welcome, now you are logged in as: " +
              _vm._s(_vm.$page.auth.user.name)
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "flex mb-6" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full bg-white px-5 py-8 shadow rounded overflow-hidden"
          },
          [
            _c("apexchart", {
              attrs: {
                height: "320",
                options: _vm.chartOptions,
                series: _vm.series
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "flex mb-6 -mx-3" }, [
        _c("div", { staticClass: "w-1/3 px-3" }, [
          _c(
            "div",
            {
              staticClass: "bg-white px-2 py-8 shadow rounded overflow-hidden"
            },
            [
              _c("header", { staticClass: "mb-5 px-6" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "border-b pb-4 text-gray-700 uppercase text-xs tracking-wider"
                  },
                  [_vm._v("School Types Metrics")]
                )
              ]),
              _vm._v(" "),
              _c("apexchart", {
                attrs: {
                  height: "225",
                  options: _vm.governmentPrivateOptions,
                  series: _vm.governmentPrivateSeries
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-2/3 px-3" }, [
          _c(
            "div",
            {
              staticClass: "bg-white px-6 py-8 shadow rounded overflow-hidden"
            },
            [
              _c("header", { staticClass: "mb-5" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "border-b pb-4 text-gray-700 uppercase text-xs tracking-wider"
                  },
                  [_vm._v("Allegations status Metrics")]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  { staticClass: "flex py-3 items-center justify-between" },
                  [
                    _c("div", { staticClass: "flex items-center" }, [
                      _c("span", { staticClass: "block h-4 w-4 bg-gray-500" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-2 text-gray-700" }, [
                        _vm._v("Pending")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex py-3 items-center justify-between" },
                  [
                    _c("div", { staticClass: "flex items-center" }, [
                      _c("span", { staticClass: "block h-4 w-4 bg-green-500" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-2 text-green-700" }, [
                        _vm._v("Current")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex py-3 items-center justify-between" },
                  [
                    _c("div", { staticClass: "flex items-center" }, [
                      _c("span", { staticClass: "block h-4 w-4 bg-red-500" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-2 text-gray-700" }, [
                        _vm._v("Spam")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex py-3 items-center justify-between" },
                  [
                    _c("div", { staticClass: "flex items-center" }, [
                      _c("span", { staticClass: "block h-4 w-4 bg-blue-500" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-2 text-gray-700" }, [
                        _vm._v("Closed")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                )
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "flex mb-6 -mx-3" }, [
        _c("div", { staticClass: "w-3/5 px-3" }, [
          _c(
            "div",
            {
              staticClass: "bg-white px-6 py-8 shadow rounded overflow-hidden"
            },
            [
              _c("header", { staticClass: "mb-5" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "text-gray-700 uppercase text-xs tracking-wider"
                  },
                  [_vm._v("Ambassodor Metrics")]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex py-2 border-t items-center justify-between"
                  },
                  [
                    _c("div", [
                      _c(
                        "h4",
                        { staticClass: "text-gray-700 text-sm font-semibold" },
                        [_vm._v("David Pella")]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-gray-600 text-xs" }, [
                        _vm._v("Ambassador")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "flex py-2 border-t items-center justify-between"
                  },
                  [
                    _c("div", [
                      _c(
                        "h4",
                        { staticClass: "text-gray-700 text-sm font-semibold" },
                        [_vm._v("Richard Jacob")]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-gray-600 text-xs" }, [
                        _vm._v("Ambassador")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "flex py-2 border-t items-center justify-between"
                  },
                  [
                    _c("div", [
                      _c(
                        "h4",
                        { staticClass: "text-gray-700 text-sm font-semibold" },
                        [_vm._v("Magreth Mussa")]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-gray-600 text-xs" }, [
                        _vm._v("Ambassador")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "flex py-2 border-t items-center justify-between"
                  },
                  [
                    _c("div", [
                      _c(
                        "h4",
                        { staticClass: "text-gray-700 text-sm font-semibold" },
                        [_vm._v("Gideon James")]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-gray-600 text-xs" }, [
                        _vm._v("Ambassador")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-2/5 px-3" }, [
          _c(
            "div",
            { staticClass: "bg-white py-8 shadow rounded overflow-hidden" },
            [
              _c("header", { staticClass: "mb-5 px-6" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "text-gray-700 uppercase text-xs tracking-wider border-b pb-5"
                  },
                  [_vm._v("Environment Metrics")]
                )
              ]),
              _vm._v(" "),
              _c("apexchart", {
                attrs: {
                  height: "258",
                  options: _vm.governmentPrivateOptions,
                  series: _vm.governmentPrivateSeries
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "flex mb-6 -mx-3" }, [
        _c("div", { staticClass: "w-1/2 px-3" }, [
          _c(
            "div",
            {
              staticClass: "bg-white pt-8 pb-4 shadow rounded overflow-hidden"
            },
            [
              _c("header", { staticClass: "mb-5 px-6" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "text-gray-700 uppercase text-xs tracking-wider border-b pb-5"
                  },
                  [_vm._v("Allegation Types (Abuses)")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pr-4" },
                [
                  _c("apexchart", {
                    attrs: {
                      height: "194",
                      options: _vm.allegationTypesOptions,
                      series: _vm.allegationTypesSeries
                    }
                  })
                ],
                1
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/2 px-3" }, [
          _c(
            "div",
            {
              staticClass: "bg-white px-6 py-8 shadow rounded overflow-hidden"
            },
            [
              _c("header", { staticClass: "mb-5" }, [
                _c(
                  "h4",
                  {
                    staticClass:
                      "text-gray-700 uppercase text-xs tracking-wider border-b pb-5"
                  },
                  [_vm._v("Popular tags")]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  { staticClass: "flex py-3 items-center justify-between" },
                  [
                    _c(
                      "a",
                      { staticClass: "text-blue-500", attrs: { href: "#" } },
                      [_vm._v("#ChildAbuse")]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex py-3 items-center justify-between" },
                  [
                    _c(
                      "a",
                      { staticClass: "text-blue-500", attrs: { href: "#" } },
                      [_vm._v("#Education")]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex py-3 items-center justify-between" },
                  [
                    _c(
                      "a",
                      { staticClass: "text-blue-500", attrs: { href: "#" } },
                      [_vm._v("#Misbehavour")]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex py-3 items-center justify-between" },
                  [
                    _c(
                      "a",
                      { staticClass: "text-blue-500", attrs: { href: "#" } },
                      [_vm._v("#GoodConduct")]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v("12")])
                  ]
                )
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "flex mb-6" }, [
        _c(
          "div",
          {
            staticClass: "w-full bg-white mt-6 shadow rounded overflow-hidden"
          },
          [
            _c("table", { staticClass: "text-left w-full" }, [
              _c("thead", [
                _c("tr", [
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    },
                    [_vm._v("Reporter")]
                  ),
                  _vm._v(" "),
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
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.allegations, function(allegation) {
                    return [
                      _c(
                        "tr",
                        { key: allegation.id, staticClass: "border-t" },
                        [
                          _c("td", { staticClass: "px-4 py-4" }, [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "text-sm font-semibold leading-none"
                              },
                              [_vm._v(_vm._s(allegation.reporter_name))]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "text-xs text-gray-600" },
                              [_vm._v("Ambassador")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "px-4 py-4" }, [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "text-sm font-semibold leading-none"
                              },
                              [_vm._v(_vm._s(allegation.type.name))]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "text-xs text-gray-600" },
                              [_vm._v(_vm._s(allegation.category.name))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "px-4 py-4 align-top" }, [
                            _c("span", { staticClass: "capitalize" }, [
                              _vm._v(_vm._s(allegation.environment_category))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "px-4 py-4" }, [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "text-sm font-semibold leading-none"
                              },
                              [_vm._v(_vm._s(allegation.victim.name))]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "text-xs text-gray-600" },
                              [_vm._v(_vm._s(allegation.victim.age) + " Years")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "px-4 py-4" }, [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "text-sm font-semibold leading-none"
                              },
                              [_vm._v(_vm._s(allegation.suspect.name))]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "text-xs text-gray-600 capitalize"
                              },
                              [_vm._v(_vm._s(allegation.suspect.relationship))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "px-4 py-4" }, [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "text-xs uppercase tracking-wider font-semibold bg-gray-200 px-2 py-1 rounded-full"
                              },
                              [_vm._v(_vm._s(allegation.status))]
                            )
                          ])
                        ]
                      )
                    ]
                  })
                ],
                2
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=48cd2f5e& */ "./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=48cd2f5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);