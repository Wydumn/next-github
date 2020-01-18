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
      className: "jsx-1126308009" + " " + "header-inner"
    })
  }, __jsx("div", {
    className: "jsx-1126308009" + " " + "header-left"
  }, __jsx("div", {
    className: "jsx-1126308009" + " " + 'logo'
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "github",
    style: githubIconStyle
  })), __jsx("div", {
    className: "jsx-1126308009"
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), __jsx("div", {
    className: "jsx-1126308009" + " " + 'header-right'
  }, __jsx("div", {
    className: "jsx-1126308009" + " " + "user"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 40,
    icon: "user"
  }))))), __jsx(Content, null, __jsx(_Container__WEBPACK_IMPORTED_MODULE_6__["default"], null, children)), __jsx(Footer, {
    style: footerStyled
  }, "Develop by wydumn"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2443374783"
  }, ".header-inner.jsx-1126308009{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-1126308009{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkR3QixBQUdrQyxBQUlBLDBFQUhpQixBQUlILHlHQUMvQixVQUpBIiwiZmlsZSI6IkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IExheW91dCwgQXZhdGFyLCBJY29uLCBJbnB1dCB9IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXRcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInXHJcblxyXG5jb25zdCBnaXRodWJJY29uU3R5bGUgPSB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiA0MCxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwYWRkaW5nVG9wOiAxMCxcclxuICAgIHBhZGRpbmdSaWdodDogMjAsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJTdHlsZWQgPSB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSB1c2VDYWxsYmFjayhldmVudCA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH0sIFtzZXRTZWFyY2hdKVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVPblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHt9LCBbXSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciByZW5kZXI9ezxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCIvPn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9e2dpdGh1Ykljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n5pCc57Si5LuT5bqTJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17aGFuZGxlT25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPntjaGlsZHJlbn08L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIHN0eWxlPXtmb290ZXJTdHlsZWR9PlxyXG4gICAgICAgICAgICAgICAgRGV2ZWxvcCBieSB3eWR1bW5cclxuICAgICAgICAgICAgPC9Gb290ZXI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFudC1sYXlvdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbnQtbGF5b3V0LWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\interview\\\\blog\\\\components\\\\Layout.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "708694815"
  }, "#__next{height:100%;}.ant-layout{height:100%;}.ant-layout-header{padding-left:0;padding-right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUUrQixBQUdpQyxBQUdBLEFBR0csWUFMbkIsQUFHQSxHQUdtQixnQkFDbkIiLCJmaWxlIjoiRDpcXFByb2plY3RcXGludGVydmlld1xcYmxvZ1xcY29tcG9uZW50c1xcTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0LCBBdmF0YXIsIEljb24sIElucHV0IH0gZnJvbSAnYW50ZCdcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dFxyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcidcclxuXHJcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6IDQwLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBhZGRpbmdUb3A6IDEwLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3RlclN0eWxlZCA9IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcclxuICAgICAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSwgW3NldFNlYXJjaF0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZU9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge30sIFtdKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHJlbmRlcj17PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIi8+fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJnaXRodWJcIiBzdHlsZT17Z2l0aHViSWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfmkJzntKLku5PlupMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IGljb249XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxGb290ZXIgc3R5bGU9e2Zvb3RlclN0eWxlZH0+XHJcbiAgICAgICAgICAgICAgICBEZXZlbG9wIGJ5IHd5ZHVtblxyXG4gICAgICAgICAgICA8L0Zvb3Rlcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LWxheW91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFudC1sYXlvdXQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDowO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\Project\\\\interview\\\\blog\\\\components\\\\Layout.jsx */"));
});

/***/ })

})
//# sourceMappingURL=_app.js.ea883b5b43753c775f1a.hot-update.js.map