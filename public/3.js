(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _SchoolProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchoolProfile */ "./resources/js/Pages/Allegations/SchoolProfile.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    school: _SchoolProfile__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["allegations", "stakeholders"],
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
        if (item.id === id) {
          return Object.assign(item, {
            isVisible: !item.isVisible
          });
        }

        return item;
      });
      console.log(this.cases);
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
  props: ["environment"]
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/Index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-popover {\n  line-height: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Allegations/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
              staticClass:
                "bg-purple-700 text-white text-xs uppercase tracking-wider px-5 py-3 font-semibold hover:bg-purple-600 rounded",
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
                _c("th", {
                  staticClass:
                    "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                })
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
                                attrs: {
                                  placement: "bottom-start",
                                  offset: "16"
                                }
                              },
                              [
                                _c(
                                  "button",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "text-xs uppercase mr-1" },
                                      [_vm._v("Actions")]
                                    ),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass: "ri-arrow-down-s-line"
                                    })
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
                                                    "Asssign to " +
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
                                            "block flex items-center px-4 py-2 text-purple-700 hover:bg-purple-700 hover:text-white",
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-edit-line"
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "text-sm ml-2" },
                                            [_vm._v("Update")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "inertia-link",
                                        {
                                          staticClass:
                                            "block flex items-center px-4 py-2 text-red-500 hover:bg-purple-700 hover:text-white",
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ri-delete-bin-line"
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "text-sm ml-2" },
                                            [_vm._v("Delete")]
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
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/Allegations/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/Pages/Allegations/Index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Allegations/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Allegations/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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