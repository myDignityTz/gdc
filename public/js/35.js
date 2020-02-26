(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.fetchReport();
  },
  methods: {
    fetchReport: function () {
      var _fetchReport = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/internal_api/allegation_statuses");

              case 2:
                _ref = _context.sent;
                data = _ref.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetchReport() {
        return _fetchReport.apply(this, arguments);
      }

      return fetchReport;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=template&id=51ca1f2d&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=template&id=51ca1f2d& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "bg-white px-6 py-8 shadow rounded overflow-hidden" },
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
          _c("div", { staticClass: "flex py-3 items-center justify-between" }, [
            _c("div", { staticClass: "flex items-center" }, [
              _c("span", { staticClass: "block h-4 w-4 bg-gray-500" }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-gray-700" }, [
                _vm._v("Pending")
              ])
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("12")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex py-3 items-center justify-between" }, [
            _c("div", { staticClass: "flex items-center" }, [
              _c("span", { staticClass: "block h-4 w-4 bg-green-500" }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-green-700" }, [
                _vm._v("Current")
              ])
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("12")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex py-3 items-center justify-between" }, [
            _c("div", { staticClass: "flex items-center" }, [
              _c("span", { staticClass: "block h-4 w-4 bg-red-500" }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-gray-700" }, [
                _vm._v("Spam")
              ])
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("12")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex py-3 items-center justify-between" }, [
            _c("div", { staticClass: "flex items-center" }, [
              _c("span", { staticClass: "block h-4 w-4 bg-blue-500" }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-gray-700" }, [
                _vm._v("Closed")
              ])
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("12")])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Dashboard/AllegationsStatuses.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/AllegationsStatuses.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllegationsStatuses_vue_vue_type_template_id_51ca1f2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllegationsStatuses.vue?vue&type=template&id=51ca1f2d& */ "./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=template&id=51ca1f2d&");
/* harmony import */ var _AllegationsStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllegationsStatuses.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllegationsStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllegationsStatuses_vue_vue_type_template_id_51ca1f2d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllegationsStatuses_vue_vue_type_template_id_51ca1f2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/AllegationsStatuses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllegationsStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllegationsStatuses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllegationsStatuses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=template&id=51ca1f2d&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=template&id=51ca1f2d& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllegationsStatuses_vue_vue_type_template_id_51ca1f2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllegationsStatuses.vue?vue&type=template&id=51ca1f2d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AllegationsStatuses.vue?vue&type=template&id=51ca1f2d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllegationsStatuses_vue_vue_type_template_id_51ca1f2d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllegationsStatuses_vue_vue_type_template_id_51ca1f2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);