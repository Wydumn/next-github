webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: footerStyled, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerStyled", function() { return footerStyled; });
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Footer;

var githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  paddingRight: 20
};
var footerStyled = {
  textAlign: 'center'
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      search = _useState[0],
      setSearch = _useState[1];

  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (event) {
    setSearch(event.target.value);
  }, [setSearch]);
  var handleOnSearch = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {}, []);
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(Header, null, __jsx(_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    render: __jsx("div", {
      className: "jsx-1816995820" + " " + "header-inner"
    })
  }, __jsx("div", {
    className: "jsx-1816995820" + " " + "header-left"
  }, __jsx("div", {
    className: "jsx-1816995820" + " " + 'logo'
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "github",
    style: githubIconStyle
  })), __jsx("div", {
    className: "jsx-1816995820"
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), __jsx("div", {
    className: "jsx-1816995820" + " " + 'header-right'
  }, __jsx("div", {
    className: "jsx-1816995820" + " " + "user"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 40,
    icon: "user"
  }))))), __jsx(Content, null, __jsx(_Container__WEBPACK_IMPORTED_MODULE_6__["default"], null, children)), __jsx(Footer, {
    style: footerStyled
  }, "Develop by wydumn"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3929896873"
  }, ".header-inner.jsx-1816995820{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkR3QixBQUdrQywwRUFFakIiLCJmaWxlIjoiRDpcXFByb2plY3RcXGludGVydmlld1xcYmxvZ1xcY29tcG9uZW50c1xcTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0LCBBdmF0YXIsIEljb24sIElucHV0IH0gZnJvbSAnYW50ZCdcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dFxyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcidcclxuXHJcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6IDQwLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBhZGRpbmdUb3A6IDEwLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3RlclN0eWxlZCA9IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcclxuICAgICAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSwgW3NldFNlYXJjaF0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZU9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge30sIFtdKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHJlbmRlcj17PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIi8+fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJnaXRodWJcIiBzdHlsZT17Z2l0aHViSWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfmkJzntKLku5PlupMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IGljb249XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxGb290ZXIgc3R5bGU9e2Zvb3RlclN0eWxlZH0+XHJcbiAgICAgICAgICAgICAgICBEZXZlbG9wIGJ5IHd5ZHVtblxyXG4gICAgICAgICAgICA8L0Zvb3Rlcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqXHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICNfX25leHR7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LWxheW91dHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LWxheW91dC1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\Project\\\\interview\\\\blog\\\\components\\\\Layout.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2292816812"
  }, "#__next{height:100%;}.ant-layout{min-height:100%;}.ant-layout-header{padding-left:0;padding-right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUUrQixBQUdnQyxBQUdJLEFBR0QsWUFMbEIsR0FNbUIsQ0FIbkIsZUFJQSIsImZpbGUiOiJEOlxcUHJvamVjdFxcaW50ZXJ2aWV3XFxibG9nXFxjb21wb25lbnRzXFxMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBMYXlvdXQsIEF2YXRhciwgSWNvbiwgSW5wdXQgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xyXG5cclxuY29uc3QgZ2l0aHViSWNvblN0eWxlID0ge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogNDAsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZ1RvcDogMTAsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDIwLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyU3R5bGVkID0ge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9LCBbc2V0U2VhcmNoXSlcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7fSwgW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgcmVuZGVyPXs8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiLz59PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImdpdGh1YlwiIHN0eWxlPXtnaXRodWJJY29uU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+aQnOe0ouS7k+W6kydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e2hhbmRsZU9uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLXJpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gaWNvbj1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgPEZvb3RlciBzdHlsZT17Zm9vdGVyU3R5bGVkfT5cclxuICAgICAgICAgICAgICAgIERldmVsb3AgYnkgd3lkdW1uXHJcbiAgICAgICAgICAgIDwvRm9vdGVyPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGpcclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgI19fbmV4dHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbnQtbGF5b3V0e1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbnQtbGF5b3V0LWhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Project\\\\interview\\\\blog\\\\components\\\\Layout.jsx */"));
});

/***/ })

})
//# sourceMappingURL=_app.js.634b8e271f6a9b5a3dee.hot-update.js.map