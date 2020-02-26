(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      labels: [],
      series: this.series
    };
  },
  mounted: function mounted() {
    this.fetchReport();
  },
  computed: {
    options: function options() {
      return {
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
        labels: this.labels
      };
    }
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/internal_api/allegation_types");

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.labels = data.map(function (item) {
                  return item.name;
                });
                this.series = [{
                  name: "Allegation Types",
                  data: data.map(function (item) {
                    return item.total;
                  })
                }];

              case 6:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      labels: [],
      series: []
    };
  },
  mounted: function mounted() {
    this.fetchReport();
  },
  computed: {
    options: function options() {
      return {
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
          categories: this.labels
        },
        theme: {
          palette: "palette1"
        }
      };
    }
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/internal_api/annual_report");

              case 2:
                response = _context.sent;
                this.labels = response.data.map(function (item) {
                  return item.month;
                });
                this.series = [{
                  name: "Allegations (Cases)",
                  data: response.data.map(function (item) {
                    return item.total;
                  })
                }];

              case 5:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      series: [],
      labels: []
    };
  },
  mounted: function mounted() {
    this.fetchReport();
  },
  computed: {
    options: function options() {
      return {
        chart: {
          type: "donut"
        },
        legend: {
          show: false
        },
        labels: this.labels
      };
    }
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/internal_api/environment_types");

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.series = data.map(function (item) {
                  return item.total;
                });
                this.labels = data.map(function (item) {
                  return item.environment;
                });

              case 6:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _AnnualReport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnualReport */ "./resources/js/Pages/Dashboard/AnnualReport.vue");
/* harmony import */ var _SchoolType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SchoolType */ "./resources/js/Pages/Dashboard/SchoolType.vue");
/* harmony import */ var _EnvironmentType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EnvironmentType */ "./resources/js/Pages/Dashboard/EnvironmentType.vue");
/* harmony import */ var _TopAmbassadors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopAmbassadors */ "./resources/js/Pages/Dashboard/TopAmbassadors.vue");
/* harmony import */ var _AllegationTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllegationTypes */ "./resources/js/Pages/Dashboard/AllegationTypes.vue");
/* harmony import */ var _AllegationsStatuses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AllegationsStatuses */ "./resources/js/Pages/Dashboard/AllegationsStatuses.vue");
/* harmony import */ var _PopularTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PopularTags */ "./resources/js/Pages/Dashboard/PopularTags.vue");
/* harmony import */ var _RecentAllegations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RecentAllegations */ "./resources/js/Pages/Dashboard/RecentAllegations.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AnnualReport: _AnnualReport__WEBPACK_IMPORTED_MODULE_1__["default"],
    SchoolType: _SchoolType__WEBPACK_IMPORTED_MODULE_2__["default"],
    EnvironmentType: _EnvironmentType__WEBPACK_IMPORTED_MODULE_3__["default"],
    TopAmbassadors: _TopAmbassadors__WEBPACK_IMPORTED_MODULE_4__["default"],
    AllegationTypes: _AllegationTypes__WEBPACK_IMPORTED_MODULE_5__["default"],
    AllegationsStatuses: _AllegationsStatuses__WEBPACK_IMPORTED_MODULE_6__["default"],
    PopularTags: _PopularTags__WEBPACK_IMPORTED_MODULE_7__["default"],
    RecentAllegations: _RecentAllegations__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/internal_api/popular_tags");

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      labels: [],
      series: []
    };
  },
  mounted: function mounted() {
    this.fetchReport();
  },
  computed: {
    options: function options() {
      return {
        chart: {
          type: "donut"
        },
        legend: {
          show: false
        },
        labels: this.labels
      };
    }
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/internal_api/school_types");

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.labels = data.map(function (item) {
                  return item.type;
                });
                this.series = data.map(function (item) {
                  return item.total;
                });

              case 6:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ambassadors: []
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
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/internal_api/top_ambassadors");

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.ambassadors = data;

              case 5:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=template&id=5b5b485a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=template&id=5b5b485a& ***!
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
    "div",
    { staticClass: "bg-white pt-8 pb-4 shadow rounded overflow-hidden" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pr-4" },
        [
          _c("apexchart", {
            attrs: { height: "194", options: _vm.options, series: _vm.series }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "mb-5 px-6" }, [
      _c(
        "h4",
        {
          staticClass:
            "text-gray-700 uppercase text-xs tracking-wider border-b pb-5"
        },
        [_vm._v("Allegation Types (Abuses)")]
      )
    ])
  }
]
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=template&id=7fc26cd2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=template&id=7fc26cd2& ***!
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
    "div",
    { staticClass: "w-full bg-white px-5 py-8 shadow rounded overflow-hidden" },
    [
      _c("apexchart", {
        attrs: {
          height: "320",
          options: _vm.options,
          series: _vm.series,
          labeles: ["A", "B"]
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=template&id=c10f580e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=template&id=c10f580e& ***!
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
    "div",
    { staticClass: "bg-white py-8 shadow rounded overflow-hidden" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("apexchart", {
        attrs: { height: "258", options: _vm.options, series: _vm.series }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "mb-5 px-6" }, [
      _c(
        "h4",
        {
          staticClass:
            "text-gray-700 uppercase text-xs tracking-wider border-b pb-5"
        },
        [_vm._v("Environment Metrics")]
      )
    ])
  }
]
render._withStripped = true



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
      _c("section", { staticClass: "flex mb-6 -mx-3" }, [
        _c("div", { staticClass: "w-full px-3" }, [_c("AnnualReport")], 1)
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "flex mb-6 -mx-3" }, [
        _c("div", { staticClass: "w-1/3 px-3" }, [_c("SchoolType")], 1),
        _vm._v(" "),
        _c("div", { staticClass: "w-2/3 px-3" }, [_c("AllegationTypes")], 1)
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "flex mb-6 -mx-3" }, [
        _c("div", { staticClass: "w-3/5 px-3" }, [_c("TopAmbassadors")], 1),
        _vm._v(" "),
        _c("div", { staticClass: "w-2/5 px-3" }, [_c("EnvironmentType")], 1)
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "flex mb-6" }, [_c("RecentAllegations")], 1)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=template&id=49fa261e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=template&id=49fa261e& ***!
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
                "text-gray-700 uppercase text-xs tracking-wider border-b pb-5"
            },
            [_vm._v("Popular tags")]
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "flex py-3 items-center justify-between" }, [
            _c("a", { staticClass: "text-blue-500", attrs: { href: "#" } }, [
              _vm._v("#ChildAbuse")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("12")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex py-3 items-center justify-between" }, [
            _c("a", { staticClass: "text-blue-500", attrs: { href: "#" } }, [
              _vm._v("#Education")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("12")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex py-3 items-center justify-between" }, [
            _c("a", { staticClass: "text-blue-500", attrs: { href: "#" } }, [
              _vm._v("#Misbehavour")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("12")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex py-3 items-center justify-between" }, [
            _c("a", { staticClass: "text-blue-500", attrs: { href: "#" } }, [
              _vm._v("#GoodConduct")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=template&id=0f4fe81c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=template&id=0f4fe81c& ***!
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
    "div",
    { staticClass: "bg-white px-2 py-8 shadow rounded overflow-hidden" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("apexchart", {
        attrs: { height: "225", options: _vm.options, series: _vm.series }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "mb-5 px-6" }, [
      _c(
        "h4",
        {
          staticClass:
            "border-b pb-4 text-gray-700 uppercase text-xs tracking-wider"
        },
        [_vm._v("School Types Metrics")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=template&id=0e3bb25e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=template&id=0e3bb25e& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "bg-white px-6 py-8 shadow rounded overflow-hidden" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        _vm._l(_vm.ambassadors, function(ambassador) {
          return _c(
            "div",
            { staticClass: "flex py-2 border-t items-center justify-between" },
            [
              _c("div", [
                _c(
                  "h4",
                  { staticClass: "text-gray-700 text-sm font-semibold" },
                  [
                    _vm._v(
                      _vm._s(ambassador.name ? ambassador.name : "Unknown")
                    )
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "text-gray-600 text-xs" }, [
                  _vm._v("Ambassador")
                ])
              ]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(ambassador.total))])
            ]
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "mb-5" }, [
      _c(
        "h4",
        { staticClass: "text-gray-700 uppercase text-xs tracking-wider" },
        [_vm._v("Ambassadors Metrics")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Dashboard/AllegationTypes.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/AllegationTypes.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllegationTypes_vue_vue_type_template_id_5b5b485a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllegationTypes.vue?vue&type=template&id=5b5b485a& */ "./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=template&id=5b5b485a&");
/* harmony import */ var _AllegationTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllegationTypes.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllegationTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllegationTypes_vue_vue_type_template_id_5b5b485a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllegationTypes_vue_vue_type_template_id_5b5b485a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/AllegationTypes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllegationTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllegationTypes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllegationTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=template&id=5b5b485a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=template&id=5b5b485a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllegationTypes_vue_vue_type_template_id_5b5b485a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AllegationTypes.vue?vue&type=template&id=5b5b485a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AllegationTypes.vue?vue&type=template&id=5b5b485a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllegationTypes_vue_vue_type_template_id_5b5b485a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllegationTypes_vue_vue_type_template_id_5b5b485a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/Pages/Dashboard/AnnualReport.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Dashboard/AnnualReport.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnnualReport_vue_vue_type_template_id_7fc26cd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnnualReport.vue?vue&type=template&id=7fc26cd2& */ "./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=template&id=7fc26cd2&");
/* harmony import */ var _AnnualReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnualReport.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AnnualReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnnualReport_vue_vue_type_template_id_7fc26cd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnnualReport_vue_vue_type_template_id_7fc26cd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/AnnualReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnualReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AnnualReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnualReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=template&id=7fc26cd2&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=template&id=7fc26cd2& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnualReport_vue_vue_type_template_id_7fc26cd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AnnualReport.vue?vue&type=template&id=7fc26cd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/AnnualReport.vue?vue&type=template&id=7fc26cd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnualReport_vue_vue_type_template_id_7fc26cd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnualReport_vue_vue_type_template_id_7fc26cd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Dashboard/EnvironmentType.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/EnvironmentType.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnvironmentType_vue_vue_type_template_id_c10f580e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnvironmentType.vue?vue&type=template&id=c10f580e& */ "./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=template&id=c10f580e&");
/* harmony import */ var _EnvironmentType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnvironmentType.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EnvironmentType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EnvironmentType_vue_vue_type_template_id_c10f580e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EnvironmentType_vue_vue_type_template_id_c10f580e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/EnvironmentType.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnvironmentType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=template&id=c10f580e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=template&id=c10f580e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentType_vue_vue_type_template_id_c10f580e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnvironmentType.vue?vue&type=template&id=c10f580e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/EnvironmentType.vue?vue&type=template&id=c10f580e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentType_vue_vue_type_template_id_c10f580e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentType_vue_vue_type_template_id_c10f580e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/Pages/Dashboard/PopularTags.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Dashboard/PopularTags.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopularTags_vue_vue_type_template_id_49fa261e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopularTags.vue?vue&type=template&id=49fa261e& */ "./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=template&id=49fa261e&");
/* harmony import */ var _PopularTags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopularTags.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopularTags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopularTags_vue_vue_type_template_id_49fa261e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopularTags_vue_vue_type_template_id_49fa261e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/PopularTags.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularTags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopularTags.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularTags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=template&id=49fa261e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=template&id=49fa261e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularTags_vue_vue_type_template_id_49fa261e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopularTags.vue?vue&type=template&id=49fa261e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/PopularTags.vue?vue&type=template&id=49fa261e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularTags_vue_vue_type_template_id_49fa261e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularTags_vue_vue_type_template_id_49fa261e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/Pages/Dashboard/SchoolType.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Dashboard/SchoolType.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SchoolType_vue_vue_type_template_id_0f4fe81c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchoolType.vue?vue&type=template&id=0f4fe81c& */ "./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=template&id=0f4fe81c&");
/* harmony import */ var _SchoolType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchoolType.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SchoolType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SchoolType_vue_vue_type_template_id_0f4fe81c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SchoolType_vue_vue_type_template_id_0f4fe81c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/SchoolType.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SchoolType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=template&id=0f4fe81c&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=template&id=0f4fe81c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolType_vue_vue_type_template_id_0f4fe81c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SchoolType.vue?vue&type=template&id=0f4fe81c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/SchoolType.vue?vue&type=template&id=0f4fe81c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolType_vue_vue_type_template_id_0f4fe81c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchoolType_vue_vue_type_template_id_0f4fe81c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Dashboard/TopAmbassadors.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/TopAmbassadors.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopAmbassadors_vue_vue_type_template_id_0e3bb25e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopAmbassadors.vue?vue&type=template&id=0e3bb25e& */ "./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=template&id=0e3bb25e&");
/* harmony import */ var _TopAmbassadors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopAmbassadors.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopAmbassadors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopAmbassadors_vue_vue_type_template_id_0e3bb25e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopAmbassadors_vue_vue_type_template_id_0e3bb25e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/TopAmbassadors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAmbassadors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopAmbassadors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAmbassadors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=template&id=0e3bb25e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=template&id=0e3bb25e& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAmbassadors_vue_vue_type_template_id_0e3bb25e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopAmbassadors.vue?vue&type=template&id=0e3bb25e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/TopAmbassadors.vue?vue&type=template&id=0e3bb25e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAmbassadors_vue_vue_type_template_id_0e3bb25e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopAmbassadors_vue_vue_type_template_id_0e3bb25e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);