webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_9___default.a({
  maxAge: 1000 * 10
});

var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_6___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var cachedUserRepos, cachedUserStarredRepos;
var isServer = false;

function Index(_ref) {
  var userRepos = _ref.userRepos,
      userStarredRepos = _ref.userStarredRepos,
      user = _ref.user,
      router = _ref.router;
  // console.log(userRepos, userStarredRepos)
  var tabKey = router.query.key || '1';

  var handleTabChange = function handleTabChange(activeKey) {
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/?key=".concat(activeKey));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (!isServer) {
      // cachedUserRepos = userRepos.data
      // cachedUserStarredRepos = userStarredRepos.data
      // if (userRepos) {
      //     cache.set('userRepos', userRepos)
      // }
      // if (userStarredRepos) {
      //     cache.set('userStarredRepos', userStarredRepos)
      // }
      var timeout = setTimeout(function () {
        cachedUserRepos = null;
        cachedUserStarredRepos = null;
      }, 1000);
    }
  }, [userRepos, userStarredRepos]);

  if (!user || !user.id) {
    return __jsx("div", {
      className: "jsx-2321875535" + " " + 'root'
    }, __jsx("p", {
      className: "jsx-2321875535"
    }, "\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "primary",
      href: publicRuntimeConfig.OAUTH_URL
    }, "\u70B9\u51FB\u767B\u5F55"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "2321875535"
    }, ".root.jsx-2321875535{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRDRCLEFBR3NDLGFBQ0EsMEVBQ1MsOEVBQ0MsbUdBQ0osNkZBQ3ZCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIFRhYnMgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTFJVICBmcm9tICdscnUtY2FjaGUnXHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nXHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xyXG4gICAgbWF4QWdlOiAxMDAwICoxMFxyXG59KVxyXG5cclxuY29uc3QgYXBpID0gcmVxdWlyZSgnLi4vbGliL2FwaScpXHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXHJcblxyXG5sZXQgY2FjaGVkVXNlclJlcG9zLCBjYWNoZWRVc2VyU3RhcnJlZFJlcG9zXHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXHJcblxyXG5mdW5jdGlvbiBJbmRleCAoeyB1c2VyUmVwb3MsIHVzZXJTdGFycmVkUmVwb3MsIHVzZXIsIHJvdXRlcn0pIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJSZXBvcywgdXNlclN0YXJyZWRSZXBvcylcclxuXHJcbiAgICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8ICcxJyBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoYWN0aXZlS2V5KSA9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWlzU2VydmVyKSB7ICAgIFxyXG4gICAgICAgICAgICAvLyBjYWNoZWRVc2VyUmVwb3MgPSB1c2VyUmVwb3MuZGF0YVxyXG4gICAgICAgICAgICAvLyBjYWNoZWRVc2VyU3RhcnJlZFJlcG9zID0gdXNlclN0YXJyZWRSZXBvcy5kYXRhXHJcbiAgICAgICAgICAgIC8vIGlmICh1c2VyUmVwb3MpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNhY2hlLnNldCgndXNlclJlcG9zJywgdXNlclJlcG9zKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGlmICh1c2VyU3RhcnJlZFJlcG9zKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjYWNoZS5zZXQoJ3VzZXJTdGFycmVkUmVwb3MnLCB1c2VyU3RhcnJlZFJlcG9zKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhY2hlZFVzZXJSZXBvcyA9IG51bGxcclxuICAgICAgICAgICAgICAgIGNhY2hlZFVzZXJTdGFycmVkUmVwb3MgPSBudWxsIFxyXG4gICAgICAgICAgICB9LCAxMDAwIClcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlclJlcG9zLCB1c2VyU3RhcnJlZFJlcG9zXSlcclxuXHJcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgICAgICAgICA8cD7mgqjov5jmsqHmnInnmbvlvZU8L3A+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PlxyXG4gICAgICAgICAgICAgICAgICAgIOeCueWHu+eZu+W9lVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD1cInVzZXIgYXZhdGFyXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cIm1haWxcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT57dXNlci5lbWFpbH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlclJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyU3RhcnJlZFJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnVzZXItcmVwb3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIHJlZHV4U3RvcmUgfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyXHJcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc0xvZ2luOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAgICAgLy8gaWYgKGNhY2hlLmdldCgndXNlclJlcG9zJykgJiYgY2FjaGUuZ2V0KCd1c2VyU3RhcnJlZFJlcG9zJykpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgICAgICAvLyAgICAgICAgIHVzZXJSZXBvczogY2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSxcclxuICAgICAgICAvLyAgICAgICAgIHVzZXJTdGFycmVkUmVwb3M6IGNhY2hlLmdldCgndXNlclN0YXJyZWRSZXBvcycpLFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZiAoY2FjaGVkVXNlclJlcG9zICYmIGNhY2hlZFVzZXJTdGFycmVkUmVwb3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVzZXJSZXBvczogY2FjaGVkVXNlclJlcG9zLFxyXG4gICAgICAgICAgICAgICAgdXNlclN0YXJyZWRSZXBvczogY2FjaGVkVXNlclN0YXJyZWRSZXBvc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluS7k+W6k1xyXG4gICAgY29uc3QgdXNlclJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy91c2VyL3JlcG9zJ1xyXG4gICAgfSwgY3R4LnJlcSwgY3R4LnJlcylcclxuXHJcbiAgICAvLyDojrflj5borqTor4HnlKjmiLdTdGFy55qE5LuT5bqTXHJcbiAgICBjb25zdCB1c2VyU3RhcnJlZFJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy91c2VyL3N0YXJyZWQnXHJcbiAgICB9LCBjdHgucmVxLCBjdHgucmVzKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNMb2dpbjogdHJ1ZSxcclxuICAgICAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxyXG4gICAgICAgIHVzZXJTdGFycmVkUmVwb3M6IHVzZXJTdGFycmVkUmVwb3MuZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QoZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgICB9XHJcbn0pKEluZGV4KSkiXX0= */\n/*@ sourceURL=D:\\\\Project\\\\interview\\\\blog\\\\pages\\\\index.js */"));
  }

  return __jsx("div", {
    className: "jsx-2375105089" + " " + "root"
  }, __jsx("div", {
    className: "jsx-2375105089" + " " + "user-info"
  }, __jsx("img", {
    src: user.avatar_url,
    alt: "user avatar",
    className: "jsx-2375105089" + " " + "avatar"
  }), __jsx("span", {
    className: "jsx-2375105089" + " " + "login"
  }, user.login), __jsx("span", {
    className: "jsx-2375105089" + " " + "name"
  }, user.name), __jsx("span", {
    className: "jsx-2375105089" + " " + "bio"
  }, user.bio), __jsx("p", {
    className: "jsx-2375105089" + " " + "email"
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "mail",
    style: {
      marginRight: 10
    }
  }), __jsx("a", {
    href: "mailto:".concat(user.email),
    className: "jsx-2375105089"
  }, user.email))), __jsx("div", {
    className: "jsx-2375105089" + " " + "user-repos"
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a, {
    activeKey: tabKey,
    onChange: handleTabChange,
    animated: false
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane, {
    tab: "\u4F60\u7684\u4ED3\u5E93",
    key: "1"
  }, userRepos.map(function (repo) {
    return __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: repo.id,
      repo: repo
    });
  })), __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane, {
    tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
    key: "2"
  }, userStarredRepos.map(function (repo) {
    return __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: repo.id,
      repo: repo
    });
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2375105089"
  }, ".root.jsx-2375105089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-2375105089{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-2375105089{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-2375105089{font-size:16px;color:#777;}.bio.jsx-2375105089{margin-top:20px;color:#333;}.avatar.jsx-2375105089{width:100%;border-radius:5px;}.user-repos.jsx-2375105089{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RndCLEFBR2tDLEFBS0QsQUFPSSxBQUtELEFBSUMsQUFJTCxBQUlDLFdBSE0sQ0FwQkEsR0FZUCxDQUxJLEFBU0osVUFIZixDQUlBLEVBSUEsQ0FwQmtCLENBT0UsZ0JBQ3BCLHdCQWVBLEdBN0IyQixZQU9WLDBFQUNTLHVCQVBQLGVBQ25CLHdDQU9BIiwiZmlsZSI6IkQ6XFxQcm9qZWN0XFxpbnRlcnZpZXdcXGJsb2dcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIFRhYnMgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTFJVICBmcm9tICdscnUtY2FjaGUnXHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nXHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xyXG4gICAgbWF4QWdlOiAxMDAwICoxMFxyXG59KVxyXG5cclxuY29uc3QgYXBpID0gcmVxdWlyZSgnLi4vbGliL2FwaScpXHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXHJcblxyXG5sZXQgY2FjaGVkVXNlclJlcG9zLCBjYWNoZWRVc2VyU3RhcnJlZFJlcG9zXHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXHJcblxyXG5mdW5jdGlvbiBJbmRleCAoeyB1c2VyUmVwb3MsIHVzZXJTdGFycmVkUmVwb3MsIHVzZXIsIHJvdXRlcn0pIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJSZXBvcywgdXNlclN0YXJyZWRSZXBvcylcclxuXHJcbiAgICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8ICcxJyBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoYWN0aXZlS2V5KSA9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWlzU2VydmVyKSB7ICAgIFxyXG4gICAgICAgICAgICAvLyBjYWNoZWRVc2VyUmVwb3MgPSB1c2VyUmVwb3MuZGF0YVxyXG4gICAgICAgICAgICAvLyBjYWNoZWRVc2VyU3RhcnJlZFJlcG9zID0gdXNlclN0YXJyZWRSZXBvcy5kYXRhXHJcbiAgICAgICAgICAgIC8vIGlmICh1c2VyUmVwb3MpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNhY2hlLnNldCgndXNlclJlcG9zJywgdXNlclJlcG9zKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGlmICh1c2VyU3RhcnJlZFJlcG9zKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjYWNoZS5zZXQoJ3VzZXJTdGFycmVkUmVwb3MnLCB1c2VyU3RhcnJlZFJlcG9zKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhY2hlZFVzZXJSZXBvcyA9IG51bGxcclxuICAgICAgICAgICAgICAgIGNhY2hlZFVzZXJTdGFycmVkUmVwb3MgPSBudWxsIFxyXG4gICAgICAgICAgICB9LCAxMDAwIClcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlclJlcG9zLCB1c2VyU3RhcnJlZFJlcG9zXSlcclxuXHJcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgICAgICAgICA8cD7mgqjov5jmsqHmnInnmbvlvZU8L3A+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PlxyXG4gICAgICAgICAgICAgICAgICAgIOeCueWHu+eZu+W9lVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD1cInVzZXIgYXZhdGFyXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cIm1haWxcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT57dXNlci5lbWFpbH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlclJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyU3RhcnJlZFJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnVzZXItcmVwb3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIHJlZHV4U3RvcmUgfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyXHJcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc0xvZ2luOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAgICAgLy8gaWYgKGNhY2hlLmdldCgndXNlclJlcG9zJykgJiYgY2FjaGUuZ2V0KCd1c2VyU3RhcnJlZFJlcG9zJykpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgICAgICAvLyAgICAgICAgIHVzZXJSZXBvczogY2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSxcclxuICAgICAgICAvLyAgICAgICAgIHVzZXJTdGFycmVkUmVwb3M6IGNhY2hlLmdldCgndXNlclN0YXJyZWRSZXBvcycpLFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZiAoY2FjaGVkVXNlclJlcG9zICYmIGNhY2hlZFVzZXJTdGFycmVkUmVwb3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVzZXJSZXBvczogY2FjaGVkVXNlclJlcG9zLFxyXG4gICAgICAgICAgICAgICAgdXNlclN0YXJyZWRSZXBvczogY2FjaGVkVXNlclN0YXJyZWRSZXBvc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluS7k+W6k1xyXG4gICAgY29uc3QgdXNlclJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy91c2VyL3JlcG9zJ1xyXG4gICAgfSwgY3R4LnJlcSwgY3R4LnJlcylcclxuXHJcbiAgICAvLyDojrflj5borqTor4HnlKjmiLdTdGFy55qE5LuT5bqTXHJcbiAgICBjb25zdCB1c2VyU3RhcnJlZFJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy91c2VyL3N0YXJyZWQnXHJcbiAgICB9LCBjdHgucmVxLCBjdHgucmVzKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNMb2dpbjogdHJ1ZSxcclxuICAgICAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxyXG4gICAgICAgIHVzZXJTdGFycmVkUmVwb3M6IHVzZXJTdGFycmVkUmVwb3MuZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QoZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgICB9XHJcbn0pKEluZGV4KSkiXX0= */\n/*@ sourceURL=D:\\\\Project\\\\interview\\\\blog\\\\pages\\\\index.js */"));
}

Index.getInitialProps = function _callee(_ref2) {
  var ctx, reduxStore, user, userRepos, userStarredRepos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx = _ref2.ctx, reduxStore = _ref2.reduxStore;
          user = reduxStore.getState().user;

          if (!(!user || !user.id)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", {
            isLogin: false
          });

        case 4:
          if (isServer) {
            _context.next = 7;
            break;
          }

          if (!(cachedUserRepos && cachedUserStarredRepos)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", {
            userRepos: cachedUserRepos,
            userStarredRepos: cachedUserStarredRepos
          });

        case 7:
          _context.next = 9;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(api.request({
            url: '/user/repos'
          }, ctx.req, ctx.res));

        case 9:
          userRepos = _context.sent;
          _context.next = 12;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(api.request({
            url: '/user/starred'
          }, ctx.req, ctx.res));

        case 12:
          userStarredRepos = _context.sent;
          return _context.abrupt("return", {
            isLogin: true,
            userRepos: userRepos.data,
            userStarredRepos: userStarredRepos.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function mapStateToProps(state) {
  return {
    user: state.user
  };
})(Index)));

/***/ })

})
//# sourceMappingURL=index.js.ca927841daa6b2a46eb4.hot-update.js.map