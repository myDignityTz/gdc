(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AllegationTypes/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_2___default.a({
        name: ''
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
                return this.form.post('/allegation_types');

              case 3:
                this.$emit("close");
                _events__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('allegationTypeWasCreated', true);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    allegationType: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_2___default.a({})
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
                return this.form["delete"]("/allegation_types/".concat(this.allegationType.id));

              case 3:
                this.$emit("close");
                _events__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('allegationTypeWasDeleted', true);
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
    }(),
    cancel: function cancel() {
      this.$emit("close");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    allegationType: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      form: new form_backend_validation__WEBPACK_IMPORTED_MODULE_2___default.a({
        name: this.allegationType.name
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
                return this.form.put("/allegation_types/".concat(this.allegationType.id));

              case 3:
                this.$emit("close");
                _events__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('allegationTypeWasUpdated', true);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AllegationTypes/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/events.js */ "./resources/js/events.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create */ "./resources/js/Pages/AllegationTypes/Create.vue");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./resources/js/Pages/AllegationTypes/Edit.vue");
/* harmony import */ var _Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Delete */ "./resources/js/Pages/AllegationTypes/Delete.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    types: {
      required: true
    }
  },
  data: function data() {
    return {
      wasStored: false,
      wasUpdated: false,
      wasDeleted: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('allegationTypeWasCreated', function (value) {
      _this.wasStored = value;
    });
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('allegationTypeWasUpdated', function (value) {
      _this.wasUpdated = value;
    });
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].$on('allegationTypeWasDeleted', function (value) {
      _this.wasDeleted = value;
    });
    window.setInterval(function () {
      if (_this.wasStored) {
        _this.wasStored = false;
      }
    }, 5 * 1000);
  },
  methods: {
    handleCreating: function handleCreating() {
      this.$modal.show(_Create__WEBPACK_IMPORTED_MODULE_2__["default"], {}, {
        height: "auto"
      });
    },
    handleEditing: function handleEditing(allegationType) {
      this.$modal.show(_Edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
        allegationType: allegationType
      }, {
        height: "auto"
      });
    },
    handleDeleting: function handleDeleting(allegationType) {
      this.$modal.show(_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
        allegationType: allegationType
      }, {
        height: "auto"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Create.vue?vue&type=template&id=3ca6da4d&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AllegationTypes/Create.vue?vue&type=template&id=3ca6da4d& ***!
  \********************************************************************************************************************************************************************************************************************/
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
        ])
      ]),
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
        [_vm._v("Create Allegation Type")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=template&id=5437cf7c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=template&id=5437cf7c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _vm._m(1),
      _vm._v(" "),
      _c("footer", { staticClass: "px-6 py-3 flex justify-end bg-gray-100" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-gray mr-2",
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
            staticClass: "btn btn-red",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              }
            }
          },
          [_vm._v("Confirm Delete")]
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
        [_vm._v("Delete Allegation Type")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "mt-6" }, [
      _c("div", { staticClass: "px-6 mb-6" }, [
        _vm._v("Are you sure you want to delete this item?")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=template&id=095b4a9b&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=template&id=095b4a9b& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        ])
      ]),
      _vm._v(" "),
      _c("footer", { staticClass: "px-6 pb-4 flex justify-end" }, [
        _c(
          "button",
          {
            staticClass:
              "bg-purple-700 text-white text-xs uppercase tracking-wider px-5 py-3 rounded",
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
        [_vm._v("Edit Allegation Type")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Index.vue?vue&type=template&id=63c5c291&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AllegationTypes/Index.vue?vue&type=template&id=63c5c291& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "The Expert - Users" } }, [
    _c("div", { staticClass: "w-2/3 mx-auto mb-12" }, [
      _c("header", { staticClass: "flex justify-between my-8" }, [
        _c("h1", { staticClass: "text-lg font-semibold" }, [
          _vm._v("Allegation Types")
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-purple",
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.handleCreating($event)
              }
            }
          },
          [
            _c(
              "svg",
              {
                staticClass: "h-4 w-4 fill-current mr-1",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }
              },
              [
                _c("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                _c("path", {
                  attrs: { d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" }
                })
              ]
            ),
            _vm._v("\n                    New Type\n\t\t\t\t")
          ]
        )
      ]),
      _vm._v(" "),
      _vm.wasStored
        ? _c("div", { staticClass: "mt-6" }, [
            _c(
              "div",
              {
                staticClass:
                  "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",
                attrs: { role: "alert" }
              },
              [
                _c("strong", { staticClass: "font-bold" }, [
                  _vm._v("Holy smokes!")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "block sm:inline" }, [
                  _vm._v(" New relationship type is created successfully!")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "absolute top-0 bottom-0 right-0 px-4 py-3",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.wasStored = false
                      }
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "fill-current h-6 w-6 text-green-500",
                        attrs: {
                          role: "button",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20"
                        }
                      },
                      [
                        _c("title", [_vm._v("Close")]),
                        _c("path", {
                          attrs: {
                            d:
                              "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                          }
                        })
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        : _vm._e(),
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
                      "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wide"
                  },
                  [_vm._v("Name")]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wide"
                  },
                  [_vm._v("Created at")]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wide"
                  },
                  [_vm._v("Updated at")]
                ),
                _vm._v(" "),
                _c(
                  "th",
                  {
                    staticClass:
                      "px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wide"
                  },
                  [_vm._v(" ")]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.types, function(type) {
                return _c("tr", { key: type.id, staticClass: "border-t" }, [
                  _c("td", { staticClass: "px-4 py-4" }, [
                    _vm._v(_vm._s(type.name))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-4 py-4" }, [
                    _vm._v(_vm._s(type.created_at))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-4 py-4" }, [
                    _vm._v(_vm._s(type.updated_at))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-4 py-4" }, [
                    _c("div", { staticClass: "flex items-center" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "text-xs uppercase tracking-wider text-gray-700",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.handleEditing(type)
                            }
                          }
                        },
                        [_vm._v("Edit")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "text-xs px-2 text-gray-400" },
                        [_vm._v("|")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "text-xs uppercase tracking-wider text-gray-700",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.handleDeleting(type)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      )
                    ])
                  ])
                ])
              }),
              0
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

/***/ "./resources/js/Pages/AllegationTypes/Create.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Create.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_3ca6da4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=3ca6da4d& */ "./resources/js/Pages/AllegationTypes/Create.vue?vue&type=template&id=3ca6da4d&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/Pages/AllegationTypes/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_3ca6da4d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_3ca6da4d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/AllegationTypes/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Create.vue?vue&type=template&id=3ca6da4d&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Create.vue?vue&type=template&id=3ca6da4d& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_3ca6da4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=3ca6da4d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Create.vue?vue&type=template&id=3ca6da4d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_3ca6da4d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_3ca6da4d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Delete.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Delete.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Delete_vue_vue_type_template_id_5437cf7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Delete.vue?vue&type=template&id=5437cf7c& */ "./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=template&id=5437cf7c&");
/* harmony import */ var _Delete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Delete.vue?vue&type=script&lang=js& */ "./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Delete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Delete_vue_vue_type_template_id_5437cf7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Delete_vue_vue_type_template_id_5437cf7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/AllegationTypes/Delete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Delete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=template&id=5437cf7c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=template&id=5437cf7c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delete_vue_vue_type_template_id_5437cf7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Delete.vue?vue&type=template&id=5437cf7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Delete.vue?vue&type=template&id=5437cf7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delete_vue_vue_type_template_id_5437cf7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delete_vue_vue_type_template_id_5437cf7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Edit.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Edit.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_095b4a9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=095b4a9b& */ "./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=template&id=095b4a9b&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_095b4a9b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_095b4a9b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/AllegationTypes/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=template&id=095b4a9b&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=template&id=095b4a9b& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_095b4a9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=095b4a9b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Edit.vue?vue&type=template&id=095b4a9b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_095b4a9b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_095b4a9b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Index.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_63c5c291___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=63c5c291& */ "./resources/js/Pages/AllegationTypes/Index.vue?vue&type=template&id=63c5c291&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/AllegationTypes/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_63c5c291___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_63c5c291___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/AllegationTypes/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/AllegationTypes/Index.vue?vue&type=template&id=63c5c291&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/AllegationTypes/Index.vue?vue&type=template&id=63c5c291& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_63c5c291___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=63c5c291& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AllegationTypes/Index.vue?vue&type=template&id=63c5c291&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_63c5c291___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_63c5c291___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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