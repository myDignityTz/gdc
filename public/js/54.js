(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    environment: {
      required: true,
      type: Object
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _SchoolProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchoolProfile */ "./resources/js/Pages/Allegations/SchoolProfile.vue");
/* harmony import */ var _HomeProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeProfile */ "./resources/js/Pages/Allegations/HomeProfile.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    school: _SchoolProfile__WEBPACK_IMPORTED_MODULE_1__["default"],
    home: _HomeProfile__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    allegations: {
      required: true,
      type: Array
    },
    stakeholders: {
      required: true,
      type: Array
    }
  },
  data: function data() {
    return {
      cases: this.allegations.map(function (item) {
        return Object.assign(item, {
          isVisible: false
        });
      })
    };
  },
  methods: {
    show: function show(id) {
      this.cases = this.cases.map(function (item) {
        if (item.id !== id) {
          return item;
        }

        return Object.assign(item, {
          isVisible: !item.isVisible
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    environment: {
      required: true,
      type: Object
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=template&id=37f19a3a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=template&id=37f19a3a& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "mb-6 bg-white shadow rounded px-4 py-4" },
    [
      _c("h3", { staticClass: "text-xs uppercase mb-6" }, [_vm._v("Home")]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-2" }, [
        _c("ul", { staticClass: "w-full" }, [
          _c("li", { staticClass: "border-t py-3 flex justify-between" }, [
            _c("span", [_vm._v("Street")]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.environment.street))])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "border-t py-3 flex justify-between" }, [
            _c("span", [_vm._v("District")]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.environment.district.name))])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "border-t py-3 flex justify-between" }, [
            _c("span", [_vm._v("Region")]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.environment.region.name))])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Index.vue?vue&type=template&id=53936eaa&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/Index.vue?vue&type=template&id=53936eaa& ***!
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
  return _c("layout", { attrs: { title: "The Expert - Allegations" } }, [
    _c("div", { staticClass: "w-2/3 mx-auto" }, [
      _c(
        "header",
        { staticClass: "flex justify-between items-center my-8" },
        [
          _c("h1", { staticClass: "text-lg font-semibold" }, [
            _vm._v("Allegations (Cases)")
          ]),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              staticClass: "btn btn-purple",
              attrs: { href: "/allegations/create" }
            },
            [_vm._v("Report Allegation")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bg-white mt-6 shadow rounded overflow-hidden" },
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
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                  },
                  [_vm._v(" ")]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.cases, function(allegation) {
                  return [
                    _c("tr", { key: allegation.id, staticClass: "border-t" }, [
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _c(
                          "h3",
                          { staticClass: "text-sm font-semibold leading-none" },
                          [_vm._v(_vm._s(allegation.reporter_name))]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs text-gray-600" }, [
                          _vm._v("Ambassador")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _c(
                          "h3",
                          { staticClass: "text-sm font-semibold leading-none" },
                          [_vm._v(_vm._s(allegation.type.name))]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs text-gray-600" }, [
                          _vm._v(_vm._s(allegation.category.name))
                        ])
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
                          { staticClass: "text-sm font-semibold leading-none" },
                          [_vm._v(_vm._s(allegation.victim.name))]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-xs text-gray-600" }, [
                          _vm._v(_vm._s(allegation.victim.age) + " Years")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _c(
                          "h3",
                          { staticClass: "text-sm font-semibold leading-none" },
                          [_vm._v(_vm._s(allegation.suspect.name))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "text-xs text-gray-600 capitalize" },
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
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _c(
                          "div",
                          { staticClass: "flex items-center" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "text-xs uppercase",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.show(allegation.id)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(allegation.isVisible ? "Hide" : "Show")
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "px-3 text-xs text-gray-400" },
                              [_vm._v("|")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-popover",
                              {
                                attrs: { placement: "bottom-end", offset: "16" }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "flex items-center text-xs uppercase"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                Actions\n                                                "
                                    ),
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "h-4 w-4 fill-current ml-1 text-gray-600",
                                        attrs: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24"
                                        }
                                      },
                                      [
                                        _c("path", {
                                          attrs: {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                          }
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
                                  _c(
                                    "div",
                                    { staticClass: "bg-white shadow-xl" },
                                    [
                                      _vm._l(_vm.stakeholders, function(
                                        stakeholder
                                      ) {
                                        return [
                                          !allegation.stakeholders.find(
                                            function(s) {
                                              return s.id === stakeholder.id
                                            }
                                          )
                                            ? _c(
                                                "inertia-link",
                                                {
                                                  key: stakeholder.id,
                                                  staticClass:
                                                    "block text-sm px-4 py-2 hover:bg-purple-700 hover:text-white",
                                                  attrs: {
                                                    href:
                                                      "/allegations/" +
                                                      allegation.id +
                                                      "/stakeholders",
                                                    method: "post",
                                                    data: {
                                                      stakeholder_id:
                                                        stakeholder.id
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Assign to " +
                                                      _vm._s(stakeholder.name)
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      }),
                                      _vm._v(" "),
                                      _c("hr", { staticClass: "mt-3" }),
                                      _vm._v(" "),
                                      _c(
                                        "inertia-link",
                                        {
                                          staticClass:
                                            "block flex items-center px-4 py-2 text-purple-700 hover:bg-purple-700 hover:text-white text-sm",
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "w-4 h-4 fill-current mr-2",
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24"
                                              }
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  fill: "none",
                                                  d: "M0 0h24v24H0z"
                                                }
                                              }),
                                              _c("path", {
                                                attrs: {
                                                  d:
                                                    "M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(
                                            "\n                                                        Update\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "inertia-link",
                                        {
                                          staticClass:
                                            "block flex items-center px-4 py-2 text-red-500 hover:bg-purple-700 hover:text-white text-sm",
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "w-4 h-4 fill-current mr-2",
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24"
                                              }
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  fill: "none",
                                                  d: "M0 0h24v24H0z"
                                                }
                                              }),
                                              _c("path", {
                                                attrs: {
                                                  d:
                                                    "M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(
                                            "\n                                                        Delete\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
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
                      ])
                    ]),
                    _vm._v(" "),
                    allegation.isVisible
                      ? _c(
                          "tr",
                          {
                            key: "details-" + allegation.id,
                            staticClass: "border-t"
                          },
                          [
                            _c(
                              "td",
                              {
                                staticClass: "bg-gray-100 px-4 py-6",
                                attrs: { colspan: "7" }
                              },
                              [
                                _c("div", { staticClass: "mb-8" }, [
                                  _c(
                                    "h2",
                                    {
                                      staticClass: "mb-2 text-lg font-semibold"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(allegation.type.name) + " Case"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(_vm._s(allegation.description))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "flex" }, [
                                  _c("div", { staticClass: "w-1/2" }, [
                                    _c(
                                      "section",
                                      { staticClass: "mb-6 border-b pb-6" },
                                      [
                                        _c(
                                          "h3",
                                          {
                                            staticClass:
                                              "text-xs uppercase mb-4"
                                          },
                                          [_vm._v("Basic Details")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "flex mb-2" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-1/3 text-gray-600 text-sm font-semibold"
                                              },
                                              [_vm._v("Type")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "w-2/3" },
                                              [
                                                _vm._v(
                                                  _vm._s(allegation.type.name)
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "flex mb-2" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-1/3 text-gray-600 text-sm font-semibold"
                                              },
                                              [_vm._v("Tags")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "w-2/3" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    allegation.category.name
                                                  )
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "flex mb-2" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-1/3 text-gray-600 text-sm font-semibold"
                                              },
                                              [_vm._v("Environment")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "w-2/3 capitalize"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    allegation.environment_category
                                                  ) + " Environment"
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "section",
                                      { staticClass: "mb-6 border-b pb-6" },
                                      [
                                        _c(
                                          "h3",
                                          {
                                            staticClass:
                                              "text-xs uppercase mb-4"
                                          },
                                          [_vm._v("Reporter")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "flex mb-2" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-1/3 text-gray-600 text-sm font-semibold"
                                              },
                                              [_vm._v("Name")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "w-2/3" },
                                              [_vm._v("David Pella")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "flex mb-2" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-1/3 text-gray-600 text-sm font-semibold"
                                              },
                                              [_vm._v("Type")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "w-2/3" },
                                              [_vm._v("Ambassador")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "flex mb-2" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-1/3 text-gray-600 text-sm font-semibold"
                                              },
                                              [_vm._v("Contact")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "w-2/3" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "mb-2" },
                                                  [
                                                    _vm._v(
                                                      "Phone: 0714 681 951"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("div", [
                                                  _vm._v(
                                                    "Email: david.pella@example.com"
                                                  )
                                                ])
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "section",
                                      { staticClass: "mb-6 border-b pb-6" },
                                      [
                                        _c(
                                          "h3",
                                          {
                                            staticClass:
                                              "text-xs uppercase mb-4"
                                          },
                                          [_vm._v("Victim Details")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "flex mb-2" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-1/3 text-gray-600 text-sm font-semibold"
                                              },
                                              [_vm._v("Name")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "w-2/3" },
                                              [
                                                _vm._v(
                                                  _vm._s(allegation.victim.name)
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "flex mb-2" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-1/3 text-gray-600 text-sm font-semibold"
                                              },
                                              [_vm._v("Age")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "w-2/3" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    allegation.victim.age
                                                  ) + " Years Old"
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "flex mb-2" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-1/3 text-gray-600 text-sm font-semibold"
                                              },
                                              [_vm._v("Gender")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "w-2/3" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    allegation.victim.gender
                                                  )
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("section", { staticClass: "mb-6" }, [
                                      _c(
                                        "h3",
                                        {
                                          staticClass: "text-xs uppercase mb-4"
                                        },
                                        [_vm._v("Suspect Details")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "flex mb-2" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "w-1/3 text-gray-600 text-sm font-semibold"
                                          },
                                          [_vm._v("Name")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "w-2/3" }, [
                                          _vm._v(
                                            _vm._s(allegation.suspect.name)
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "flex mb-2" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "w-1/3 text-gray-600 text-sm font-semibold"
                                          },
                                          [_vm._v("Relationship")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "w-2/3" }, [
                                          _vm._v(
                                            _vm._s(
                                              allegation.suspect.relationship
                                            )
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "flex mb-2" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "w-1/3 text-gray-600 text-sm font-semibold"
                                          },
                                          [_vm._v("Contact")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "w-2/3" }, [
                                          _vm._v(
                                            _vm._s(allegation.suspect.name)
                                          )
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "w-1/2 px-6" },
                                    [
                                      _c(
                                        "section",
                                        {
                                          staticClass:
                                            "mb-6 bg-white shadow rounded px-4 py-4"
                                        },
                                        [
                                          _c(
                                            "h3",
                                            {
                                              staticClass:
                                                "text-xs uppercase mb-6"
                                            },
                                            [_vm._v("Assigned Stakeholders")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "flex mb-2" },
                                            [
                                              _c(
                                                "ul",
                                                { staticClass: "w-full" },
                                                _vm._l(
                                                  allegation.stakeholders,
                                                  function(stakeholder) {
                                                    return _c(
                                                      "li",
                                                      {
                                                        key: stakeholder.id,
                                                        staticClass:
                                                          "border-t py-3 flex justify-between"
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              stakeholder.name
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "text-sm"
                                                          },
                                                          [_vm._v("Remove")]
                                                        )
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(allegation.environment_category, {
                                        tag: "component",
                                        attrs: {
                                          environment: allegation.environment
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ])
                              ]
                            )
                          ]
                        )
                      : _vm._e()
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=template&id=5af9f0ee&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=template&id=5af9f0ee& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "mb-6 bg-white shadow rounded px-4 py-4" },
    [
      _c("h3", { staticClass: "text-xs uppercase mb-6" }, [_vm._v("School")]),
      _vm._v(" "),
      _c("div", { staticClass: "flex mb-2" }, [
        _c("ul", { staticClass: "w-full" }, [
          _c("li", { staticClass: "border-t py-3 flex justify-between" }, [
            _c("span", [_vm._v("Name")]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.environment.name))])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "border-t py-3 flex justify-between" }, [
            _c("span", [_vm._v("Type")]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.environment.type))])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "border-t py-3 flex justify-between" }, [
            _c("span", [_vm._v("Street")]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.environment.street))])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "border-t py-3 flex justify-between" }, [
            _c("span", [_vm._v("District")]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.environment.district.name))])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "border-t py-3 flex justify-between" }, [
            _c("span", [_vm._v("Region")]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.environment.region.name))])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Allegations/HomeProfile.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Allegations/HomeProfile.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeProfile_vue_vue_type_template_id_37f19a3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeProfile.vue?vue&type=template&id=37f19a3a& */ "./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=template&id=37f19a3a&");
/* harmony import */ var _HomeProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeProfile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeProfile_vue_vue_type_template_id_37f19a3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeProfile_vue_vue_type_template_id_37f19a3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Allegations/HomeProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=template&id=37f19a3a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=template&id=37f19a3a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeProfile_vue_vue_type_template_id_37f19a3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeProfile.vue?vue&type=template&id=37f19a3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/HomeProfile.vue?vue&type=template&id=37f19a3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeProfile_vue_vue_type_template_id_37f19a3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeProfile_vue_vue_type_template_id_37f19a3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Allegations/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Allegations/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_53936eaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=53936eaa& */ "./resources/js/Pages/Allegations/Index.vue?vue&type=template&id=53936eaa&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Allegations/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_53936eaa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_53936eaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Allegations/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Allegations/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Allegations/Index.vue?vue&type=template&id=53936eaa&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/Index.vue?vue&type=template&id=53936eaa& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_53936eaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=53936eaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Index.vue?vue&type=template&id=53936eaa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_53936eaa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_53936eaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Allegations/SchoolProfile.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Allegations/SchoolProfile.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SchoolProfile_vue_vue_type_template_id_5af9f0ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchoolProfile.vue?vue&type=template&id=5af9f0ee& */ "./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=template&id=5af9f0ee&");
/* harmony import */ var _SchoolProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchoolProfile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SchoolProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SchoolProfile_vue_vue_type_template_id_5af9f0ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SchoolProfile_vue_vue_type_template_id_5af9f0ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Allegations/SchoolProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SchoolProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=template&id=5af9f0ee&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=template&id=5af9f0ee& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolProfile_vue_vue_type_template_id_5af9f0ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SchoolProfile.vue?vue&type=template&id=5af9f0ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/SchoolProfile.vue?vue&type=template&id=5af9f0ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolProfile_vue_vue_type_template_id_5af9f0ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolProfile_vue_vue_type_template_id_5af9f0ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);