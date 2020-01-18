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
      className: "jsx-3542649793" + " " + "header-inner"
    })
  }, __jsx("div", {
    className: "jsx-3542649793" + " " + "header-left"
  }, __jsx("div", {
    className: "jsx-3542649793" + " " + 'logo'
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "github",
    style: githubIconStyle
  })), __jsx("div", {
    className: "jsx-3542649793"
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), __jsx("div", {
    className: "jsx-3542649793" + " " + 'header-right'
  }, __jsx("div", {
    className: "jsx-3542649793" + " " + "user"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 40,
    icon: "user"
  }))))), __jsx(Content, null, __jsx(_Container__WEBPACK_IMPORTED_MODULE_6__["default"], null, children)), __jsx(Footer, {
    style: footerStyled
  }, "Develop by wydumn"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "787061700"
  }, ".header-inner.jsx-3542649793{display;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkR3QixBQUlnQixRQUFDIiwiZmlsZSI6IkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IExheW91dCwgQXZhdGFyLCBJY29uLCBJbnB1dCB9IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXRcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInXHJcblxyXG5jb25zdCBnaXRodWJJY29uU3R5bGUgPSB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiA0MCxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwYWRkaW5nVG9wOiAxMCxcclxuICAgIHBhZGRpbmdSaWdodDogMjAsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJTdHlsZWQgPSB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSB1c2VDYWxsYmFjayhldmVudCA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH0sIFtzZXRTZWFyY2hdKVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVPblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHt9LCBbXSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciByZW5kZXI9ezxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCIvPn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9e2dpdGh1Ykljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n5pCc57Si5LuT5bqTJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17aGFuZGxlT25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPntjaGlsZHJlbn08L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIHN0eWxlPXtmb290ZXJTdHlsZWR9PlxyXG4gICAgICAgICAgICAgICAgRGV2ZWxvcCBieSB3eWR1bW5cclxuICAgICAgICAgICAgPC9Gb290ZXI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlcclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgI19fbmV4dHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbnQtbGF5b3V0e1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbnQtbGF5b3V0LWhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Project\\\\interview\\\\blog\\\\components\\\\Layout.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2292816812"
  }, "#__next{height:100%;}.ant-layout{min-height:100%;}.ant-layout-header{padding-left:0;padding-right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0UrQixBQUdnQyxBQUdJLEFBR0QsWUFMbEIsR0FNbUIsQ0FIbkIsZUFJQSIsImZpbGUiOiJEOlxcUHJvamVjdFxcaW50ZXJ2aWV3XFxibG9nXFxjb21wb25lbnRzXFxMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBMYXlvdXQsIEF2YXRhciwgSWNvbiwgSW5wdXQgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xyXG5cclxuY29uc3QgZ2l0aHViSWNvblN0eWxlID0ge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogNDAsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZ1RvcDogMTAsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDIwLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyU3R5bGVkID0ge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9LCBbc2V0U2VhcmNoXSlcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7fSwgW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgcmVuZGVyPXs8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiLz59PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImdpdGh1YlwiIHN0eWxlPXtnaXRodWJJY29uU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J+aQnOe0ouS7k+W6kydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e2hhbmRsZU9uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLXJpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gaWNvbj1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgPEZvb3RlciBzdHlsZT17Zm9vdGVyU3R5bGVkfT5cclxuICAgICAgICAgICAgICAgIERldmVsb3AgYnkgd3lkdW1uXHJcbiAgICAgICAgICAgIDwvRm9vdGVyPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5XHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICNfX25leHR7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LWxheW91dHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LWxheW91dC1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\Project\\\\interview\\\\blog\\\\components\\\\Layout.jsx */"));
});

/***/ })

})
//# sourceMappingURL=_app.js.c8799a2b46f049d34dd4.hot-update.js.map