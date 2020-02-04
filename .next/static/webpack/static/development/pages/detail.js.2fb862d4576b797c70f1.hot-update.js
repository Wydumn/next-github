webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./pages/detail/index.js":
/*!*******************************!*\
  !*** ./pages/detail/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Repo */ "./components/Repo.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_6__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function makeQuery(queryObject) {
  var query = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(queryObject).reduce(function (result, entry) {
    result.push(entry.join('='));
    return result;
  }, []).join('&');

  return "?".concat(query);
}

function Detail(_ref) {
  var repoBasic = _ref.repoBasic,
      router = _ref.router;
  console.log(repoBasic, router);
  var query = makeQuery(router.query);
  return __jsx("div", {
    className: "jsx-1522885583" + " " + "root"
  }, __jsx("div", {
    className: "jsx-1522885583" + " " + "repo-basic"
  }, __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    repo: repoBasic
  }), __jsx("div", {
    className: "jsx-1522885583" + " " + "tabs"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/detail".concat(query)
  }, __jsx("a", {
    className: "jsx-1522885583" + " " + "tab index"
  }, "Readme")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/detail/issues".concat(query)
  }, __jsx("a", {
    className: "jsx-1522885583" + " " + "tab issues"
  }, "Issues")))), __jsx("div", {
    className: "jsx-1522885583"
  }, "Readme"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1522885583"
  }, ".root.jsx-1522885583{padding-top:20px;}.repo-basic.jsx-1522885583{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-1522885583+.tab.jsx-1522885583{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXHBhZ2VzXFxkZXRhaWxcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDd0IsQUFHc0MsQUFHSixBQU1JLGFBTEssSUFIMUIsQUFTQSxrQkFMdUIsbUJBQ0Qsa0JBQ3RCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXHBhZ2VzXFxkZXRhaWxcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcG8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUmVwb1wiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuXHJcbmZ1bmN0aW9uIG1ha2VRdWVyeShxdWVyeU9iamVjdCkge1xyXG4gICAgY29uc3QgcXVlcnkgPSBPYmplY3QuZW50cmllcyhxdWVyeU9iamVjdClcclxuICAgICAgICAucmVkdWNlKChyZXN1bHQsIGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVudHJ5LmpvaW4oJz0nKSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgIH0sIFtdKS5qb2luKCcmJylcclxuICAgIFxyXG4gICAgcmV0dXJuIGA/JHtxdWVyeX1gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbCh7cmVwb0Jhc2ljLCByb3V0ZXJ9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXBvQmFzaWMsIHJvdXRlcilcclxuICAgIGNvbnN0IHF1ZXJ5ID0gbWFrZVF1ZXJ5KHJvdXRlci5xdWVyeSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwby1iYXNpY1wiPlxyXG4gICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb0Jhc2ljfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWwke3F1ZXJ5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaW5kZXhcIj5SZWFkbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsL2lzc3VlcyR7cXVlcnl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpc3N1ZXNcIj5Jc3N1ZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlJlYWRtZTwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmVwby1iYXNpYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRhYiArIC50YWIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByb3V0ZXIsIGN0eCB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcbiAgICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnlcclxuXHJcbiAgICBjb25zdCByZXBvQmFzaWMgPSBhd2FpdCBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX1gXHJcbiAgICB9LCBjdHgucmVxLCBjdHgucmVzKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlcG9CYXNpYylcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcG9CYXNpYzogcmVwb0Jhc2ljLmRhdGEsXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbCJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\interview\\\\blog\\\\pages\\\\detail\\\\index.js */"));
}

Detail.getInitialProps = function _callee(_ref2) {
  var router, ctx, _ctx$query, owner, name, repoBasic;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          router = _ref2.router, ctx = _ref2.ctx;
          console.log(router);
          _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_lib_api__WEBPACK_IMPORTED_MODULE_6___default.a.request({
            url: "/repos/".concat(owner, "/").concat(name)
          }, ctx.req, ctx.res));

        case 5:
          repoBasic = _context.sent;
          console.log(repoBasic);
          return _context.abrupt("return", {
            repoBasic: repoBasic.data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ })

})
//# sourceMappingURL=detail.js.2fb862d4576b797c70f1.hot-update.js.map