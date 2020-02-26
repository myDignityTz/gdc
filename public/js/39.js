(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


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
      allegations: []
    };
  },
  mounted: function mounted() {
    this.fetchReport();
  },
  methods: {
    fetchReport: function () {
      var _fetchReport = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/internal_api/recent_allegations");

              case 2:
                response = _context.sent;
                this.allegations = response.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchReport() {
        return _fetchReport.apply(this, arguments);
      }

      return fetchReport;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=template&id=1d7ca112&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=template&id=1d7ca112& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "w-full bg-white mt-6 shadow rounded overflow-hidden" },
    [
      _c("table", { staticClass: "text-left w-full" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm._l(_vm.allegations, function(allegation) {
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
                  ])
                ])
              ]
            })
          ],
          2
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
    return _c("thead", [
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
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Dashboard/RecentAllegations.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/RecentAllegations.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecentAllegations_vue_vue_type_template_id_1d7ca112___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecentAllegations.vue?vue&type=template&id=1d7ca112& */ "./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=template&id=1d7ca112&");
/* harmony import */ var _RecentAllegations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecentAllegations.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecentAllegations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecentAllegations_vue_vue_type_template_id_1d7ca112___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecentAllegations_vue_vue_type_template_id_1d7ca112___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/RecentAllegations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentAllegations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecentAllegations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentAllegations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=template&id=1d7ca112&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=template&id=1d7ca112& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentAllegations_vue_vue_type_template_id_1d7ca112___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecentAllegations.vue?vue&type=template&id=1d7ca112& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/RecentAllegations.vue?vue&type=template&id=1d7ca112&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentAllegations_vue_vue_type_template_id_1d7ca112___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentAllegations_vue_vue_type_template_id_1d7ca112___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);