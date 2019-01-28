(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/main-view/main-view.component */ "./src/app/home-page/main-view/main-view.component.ts");




var routes = [
    { path: '', redirectTo: '/mainView', pathMatch: 'full' },
    { path: 'mainView', component: _home_page_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_3__["MainViewComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio-pro';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/main-view/main-view.component */ "./src/app/home-page/main-view/main-view.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-page/main-view/main-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/home-page/main-view/main-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer\">\n\n  <div class=\"shadowCont\">\n    <div class=\"shadow\" [style.minWidth.px]=\"minScreenWidth\"></div>\n  </div>\n\n  <div class=\"centerContainer\" [style.minWidth.px]=\"minScreenWidth\">\n    <div class=\"headerCont\" #headerCont>\n      <div class=\"headerLeft\">\n        <p #introDef>\n          {{'{ Hello, I am Valaram Chaudhari }'}}\n        </p>\n        <p #introTitle>\n          Introduction\n        </p>\n      </div>\n      <div class=\"headerCenter\" (mouseenter)=\"faceHover=true\"\n      (mouseleave)=\"faceHover=false\" #faceImg>\n        <img src=\"assets/Images/facePic.png\">\n      </div>\n      <div class=\"headerRight\">\n        <p #contactDef>+91 7728915303<br>\n          valaram.142@gmail.com</p>\n        <p #contactTitle>Contact</p>\n      </div>\n    </div>\n    <div class=\"SkillCont\">\n      <div class=\"skillHeader\">\n        <span>Techinical Skills</span>\n        <span>Designing Skills</span>\n      </div>\n      <div class=\"skillBody\">\n        <div class=\"skillLeftCont\">\n          <div class=\"charCont\">\n            <div class=\"yTriangle\" #yTriangle></div>\n            <div class=\"xTriangle\" #xTriangle></div>\n            <div class=\"bar bar1\" #bar1></div>\n            <div class=\"bar bar2\" #bar2></div>\n            <div class=\"bar bar3\" #bar3></div>\n            <div class=\"bar bar4\" #bar4></div>\n            <div class=\"bar bar5\" #bar5></div>\n          </div>\n        </div>\n        <div class=\"skillRightCont\">\n          <img src=\"assets/Images/softwareLogo.png\">\n        </div>\n      </div>\n\n    </div>\n    <div class=\"DomainCont\" #domainCont>\n      <div class=\"domainBody\">\n        <div class=\"domainLeft domainSubBody\">\n          <img src=\"assets/Images/webDevIcon.png\">\n          <p>Web Development</p>\n        </div>\n        <div class=\"domainRight domainSubBody\">\n          <img src=\"assets/Images/gameDevIcon.png\">\n          <p>Game Development</p>\n        </div>\n      </div>\n      <div class=\"domainFooter\">\n        My Recent Work\n      </div>\n    </div>\n    <div class=\"workCont\">\n      <div class=\"workrow1\">\n        <div class=\"workPanel workPanel1\">\n          <img src=\"assets/Images/AnimationEditor.png\">\n          <p>Animation Editor</p>\n        </div>\n        <div class=\"workPanel workPanel2\">\n          <img src=\"assets/Images/workInProgress.png\">\n          <p>Work in Progress</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"footerCont\">\n      <div class=\"leftFooter\">Valaram Chaudhari</div>\n      <img src=\"assets/Images/userIcon.png\" class=\"centerFooter\">\n      <div class=\"rightFooter\">valaram.142@gmail.com</div>\n    </div>\n  </div>\n\n  <!-- svg start -->\n  <svg class=\"mySvg\">\n    <g>\n      <path [class.header]=\"!faceHover\" [class.headerHighlight]=\"faceHover\" [attr.d]=\"path1\"></path>\n      <path  [class.header]=\"!faceHover\" [class.headerHighlight]=\"faceHover\" [attr.d]=\"path2\"></path>\n      <path  [class.header]=\"!faceHover\" [class.headerHighlight]=\"faceHover\" [attr.d]=\"path3\"></path>\n      <path [class.skill]=\"!skillHover\" [class.skillHighlight]=\"skillHover\" [attr.d]=\"path4\"></path>\n      <path [class.skill]=\"!skillHover\" [class.skillHighlight]=\"skillHover\" [attr.d]=\"path5\"></path>\n      <path [class.skill]=\"!skillHover\" [class.skillHighlight]=\"skillHover\" [attr.d]=\"path6\"></path>\n      <path [class.domain]=\"!domainHover\" [class.domainHighlight]=\"domainHover\" [attr.d]=\"path7\"></path>\n\n\n      <circle [attr.cx]=\"circle1.x\" [attr.cy]=\"circle1.y\" r=\"10\" stroke=\"#282828\" stroke-width=\"4\" fill=\"white\"></circle>\n      <circle [attr.cx]=\"circle2.x\" [attr.cy]=\"circle2.y\" r=\"6\" stroke=\"#282828\" stroke-width=\"0\" fill=\"white\"></circle>\n      <circle [attr.cx]=\"circle3.x\" [attr.cy]=\"circle3.y\" r=\"6\" stroke=\"#282828\" stroke-width=\"0\" fill=\"white\"></circle>\n      <circle [attr.cx]=\"circle4.x\" [attr.cy]=\"circle4.y\" r=\"6\" stroke=\"#282828\" stroke-width=\"0\" fill=\"white\"></circle>\n      <circle [attr.cx]=\"circle5.x\" [attr.cy]=\"circle5.y\" r=\"6\" stroke=\"#282828\" stroke-width=\"0\" fill=\"white\"></circle>\n      <circle [attr.cx]=\"circle6.x\" [attr.cy]=\"circle6.y\" r=\"6\" [attr.stroke]=\"(!skillHover)?'black':'red'\" stroke-width=\"3\" fill=\"white\"></circle>\n      <circle [attr.cx]=\"circle7.x\" [attr.cy]=\"circle7.y\" r=\"6\" [attr.stroke]=\"(!skillHover)?'black':'red'\" stroke-width=\"3\" fill=\"white\"></circle>\n      <circle [attr.cx]=\"circle8.x\" [attr.cy]=\"circle8.y\" r=\"10\" stroke=\"white\" stroke-width=\"4\" fill=\"#333C59\"></circle>\n      <circle [attr.cx]=\"circle9.x\" [attr.cy]=\"circle9.y\" r=\"6\" stroke=\"#282828\" stroke-width=\"0\" [attr.fill]=\"(!domainHover)?'white':'#dbff00'\"></circle>\n    </g>\n\n  </svg>\n  <!-- svg End -->\n\n  <div class=\"absoluteCont\">\n    <span class=\"chartText\" [style.left.px]=\"bar1Txt.x\" [style.top.px]=\"bar1Txt.y\">Angular</span>\n    <span class=\"chartText\" [style.left.px]=\"bar2Txt.x\" [style.top.px]=\"bar2Txt.y\">JavaScript</span>\n    <span class=\"chartText\" [style.left.px]=\"bar3Txt.x\" [style.top.px]=\"bar3Txt.y\">CSS</span>\n    <span class=\"chartText\" [style.left.px]=\"bar4Txt.x\" [style.top.px]=\"bar4Txt.y\">HTML5</span>\n    <span class=\"chartText\" [style.left.px]=\"bar5Txt.x\" [style.top.px]=\"bar5Txt.y\">Node.js</span>\n    <span class=\"chartAxisTxt\" [style.left.px]=\"tr1.x\" [style.top.px]=\"tr1.y\">X</span>\n    <span class=\"chartAxisTxt\" [style.left.px]=\"tr2.x\" [style.top.px]=\"tr2.y\">Y</span>\n    <img class=\"triangleImg\" [style.left.px]=\"tr3.x\" [style.top.px]=\"tr3.y\" src=\"assets/Images/Triangle.png\">\n    <img class=\"triangleImg\" [style.left.px]=\"tr4.x\" [style.top.px]=\"tr4.y\" src=\"assets/Images/Triangle.png\">\n    <div class=\"mySkillButton\" [style.left.px]=\"skillBtn.x\" [style.top.px]=\"skillBtn.y\"\n    (mouseenter)=\"skillHover=true\" (mouseleave)=\"skillHover=false\">My Skills</div>\n    <div class=\"myDomainButton\" [style.left.px]=\"domainBtn.x\" [style.top.px]=\"domainBtn.y\"\n    (mouseenter)=\"domainHover=true\" (mouseleave)=\"domainHover=false\">My Domain</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-page/main-view/main-view.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/home-page/main-view/main-view.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContainer {\n  width: 100%;\n  background: white;\n  padding: 50px 0px;\n  font-family: 'formalRegular',cursive; }\n\n.centerContainer {\n  box-shadow: 2px 4px 2px 3px #1a1a1a;\n  width: 70%;\n  background: pink;\n  margin: auto;\n  position: relative;\n  z-index: 2; }\n\n.shadowCont {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  z-index: 1; }\n\n.shadow {\n  width: 70%;\n  margin: auto;\n  background: #b9b9b9;\n  height: 1623px;\n  -webkit-transform: translate(21px, 21px);\n          transform: translate(21px, 21px); }\n\n.headerCont {\n  background-color: #282828;\n  width: 100%;\n  height: 420px;\n  color: white;\n  font-size: 24px;\n  font-family: 'formalRegular';\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center; }\n\n.headerLeft {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 330px;\n  margin-top: 68px; }\n\n.headerCenter {\n  background: white;\n  width: 176px;\n  border-radius: 50%;\n  overflow: hidden;\n  padding-top: 14px;\n  margin-left: -72px;\n  z-index: 5; }\n\n.headerCenter:hover {\n  background-color: #00ff28;\n  cursor: pointer; }\n\n.headerCenter img {\n  margin-bottom: -14px; }\n\n.headerRight {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 330px;\n  margin-top: 68px; }\n\n.mySvg {\n  z-index: 3;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 1310px;\n  pointer-events: none; }\n\n.mySvg g .header {\n  fill: transparent;\n  stroke: white;\n  stroke-width: 4px;\n  stroke-dasharray: 10px 8px;\n  transition: 0.5s; }\n\n.headerHighlight {\n  transition: 0.5s;\n  fill: transparent;\n  stroke: #00ff28;\n  stroke-width: 4px;\n  stroke-dasharray: 14px 8px; }\n\n.mySvg g .skill {\n  fill: transparent;\n  stroke: black;\n  stroke-width: 4px;\n  stroke-dasharray: 10px 8px;\n  transition: 0.3s; }\n\n.skillHighlight {\n  transition: 0.3s;\n  fill: transparent;\n  stroke: red;\n  stroke-width: 4px;\n  stroke-dasharray: 14px 8px; }\n\n.mySvg g .domain {\n  fill: transparent;\n  stroke: white;\n  stroke-width: 4px;\n  stroke-dasharray: 10px 8px;\n  transition: 0.4s; }\n\n.domainHighlight {\n  fill: transparent;\n  stroke: #dbff00;\n  stroke-width: 4px;\n  stroke-dasharray: 14px 8px;\n  transition: 0.4s; }\n\n.SkillCont {\n  background-color: #e9e9e9;\n  width: 100%;\n  height: 400px;\n  color: black;\n  font-size: 24px;\n  font-family: 'formalRegular';\n  text-align: center; }\n\n.skillHeader {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  padding-top: 18px; }\n\n.skillLeftCont {\n  width: 50%; }\n\n.skillRightCont {\n  width: 50%; }\n\n.skillRightCont img {\n  width: 60%;\n  margin-right: -70px; }\n\n.skillBody {\n  width: 100%;\n  display: flex;\n  align-items: center; }\n\n.charCont {\n  margin-top: 28px;\n  position: relative;\n  width: 70%;\n  margin-left: 9%;\n  height: 269px;\n  display: flex;\n  justify-content: space-evenly;\n  border-bottom: 3px solid #343434;\n  border-left: 3px solid #343434;\n  align-items: flex-end; }\n\n.bar {\n  width: 30px;\n  background: #3c3c3c; }\n\n.bar1 {\n  height: 80%; }\n\n.bar2 {\n  height: 70%; }\n\n.bar3 {\n  height: 60%; }\n\n.bar4 {\n  height: 40%; }\n\n.bar5 {\n  height: 45%; }\n\n.yTriangle {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  position: absolute;\n  left: -8px;\n  top: -1px;\n  width: 0px;\n  height: 0px;\n  border: 7px solid black;\n  border-left: 7px solid transparent;\n  border-bottom: 7px solid transparent; }\n\n.xTriangle {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  width: 0px;\n  height: 0px;\n  border: 7px solid black;\n  border-left: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  position: absolute;\n  right: -4px;\n  bottom: -8px; }\n\n.triangleImg {\n  position: absolute; }\n\n.absoluteCont span {\n  position: absolute;\n  padding: 0px;\n  margin: 0px;\n  z-index: 5; }\n\n.chartAxisTxt {\n  font-weight: 900; }\n\n.mySkillButton {\n  position: absolute;\n  width: 128px;\n  height: 38px;\n  border: 2px solid black;\n  background-color: white;\n  font-size: 24px;\n  text-align: center;\n  z-index: 5;\n  transition: 0.3s; }\n\n.mySkillButton:hover {\n  background: red;\n  color: white;\n  cursor: pointer;\n  border: 2px solid red; }\n\n.myDomainButton {\n  z-index: 5;\n  position: absolute;\n  width: 134px;\n  height: 40px;\n  border: 2px solid white;\n  background-color: #333C59;\n  font-size: 24px;\n  text-align: center;\n  color: white;\n  transition: 0.4s; }\n\n.myDomainButton:hover {\n  background: #dbff00;\n  color: black;\n  cursor: pointer;\n  border: 2px solid #dbff00; }\n\n.DomainCont {\n  background-color: #333C59;\n  width: 100%;\n  height: 420px;\n  color: white;\n  font-size: 24px;\n  font-family: 'formalRegular';\n  text-align: center; }\n\n.domainBody {\n  width: 100%;\n  display: flex;\n  font-family: 'formalLight'; }\n\n.domainLeft {\n  width: 50%; }\n\n.domainRight {\n  width: 50%; }\n\n.domainFooter {\n  text-align: center;\n  margin-top: 20px; }\n\n.domainSubBody {\n  text-align: center;\n  padding-top: 73px; }\n\n.domainSubBody img {\n  height: 175px; }\n\n.workCont {\n  background-color: #1a1a1a;\n  width: 100%;\n  height: 343px;\n  color: white;\n  font-size: 24px;\n  font-family: 'formalRegular';\n  text-align: center; }\n\n.workrow1 {\n  display: flex;\n  align-items: center; }\n\n.workPanel {\n  width: 50%;\n  padding-top: 44px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  transition: 0.3s; }\n\n.workPanel:hover {\n  -webkit-transform: scale(0.94);\n          transform: scale(0.94);\n  cursor: pointer; }\n\n.workPanel1 img {\n  height: 160px;\n  margin-top: 20px; }\n\n.workPanel2 img {\n  height: 100px;\n  margin-top: 48px; }\n\n.workPanel1 {\n  background: #282828; }\n\n.workPanel2 {\n  background: #123450; }\n\n.footerCont {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  background-color: #1A1A1A;\n  color: white;\n  align-items: center;\n  font-family: monospace;\n  font-size: 14px; }\n\n.leftFooter {\n  margin-left: 10px; }\n\n.centerFooter {\n  text-align: center;\n  height: 30px;\n  padding: 5px; }\n\n.rightFooter {\n  text-align: center;\n  margin-right: 10px; }\n\n@font-face {\n  font-family: 'formalRegular';\n  src: url(\"/assets/fonts/regularFont.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'formalLight';\n  src: url(\"/assets/fonts/lightFont.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: 'formalBold';\n  src: url(\"/assets/fonts/semiBoldFont.ttf\") format(\"truetype\"); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL21haW4tdmlldy9FOlxcUHJvamVjdFxcV2ViQXBwbGljYXRpb25cXFBvcnRmb2xpb1xccG9ydGZvbGlvLXByby9zcmNcXGFwcFxcaG9tZS1wYWdlXFxtYWluLXZpZXdcXG1haW4tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9DQUFvQyxFQUFBOztBQUd4QztFQUVJLG1DQUFtQztFQUNuQyxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdkO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdDQUErQjtVQUEvQixnQ0FBK0IsRUFBQTs7QUFHbkM7RUFDSSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0kseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFJbkI7RUFDSSxvQkFBb0IsRUFBQTs7QUFJeEI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksVUFBVTtF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LEVBQUE7O0FBR3RCO0VBQ0kseUJBQXlCO0VBQ3pCLDZEQUNrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL21haW4tdmlldy9tYWluLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW5Db250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNTBweCAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ2Zvcm1hbFJlZ3VsYXInLGN1cnNpdmU7XHJcbn1cclxuXHJcbi5jZW50ZXJDb250YWluZXJ7XHJcbiAgICAvLyBib3gtc2hhZG93OiAxOXB4IDE5cHggMHB4IC0xcHggI2JhYmFiYTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggMnB4IDNweCAjMWExYTFhO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc2hhZG93Q29udHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zaGFkb3d7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2I5YjliOTtcclxuICAgIGhlaWdodDogMTYyM3B4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjFweCwyMXB4KTtcclxufVxyXG5cclxuLmhlYWRlckNvbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb3JtYWxSZWd1bGFyJztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJMZWZ0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDMzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjhweDtcclxufVxyXG5cclxuLmhlYWRlckNlbnRlcntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDE3NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03MnB4O1xyXG4gICAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmhlYWRlckNlbnRlcjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGZmMjg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyQ2VudGVyIGltZ3tcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5oZWFkZXJSaWdodHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiAzMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDY4cHg7XHJcbn1cclxuXHJcblxyXG4ubXlTdmd7ICAgIFxyXG4gICAgei1pbmRleDogMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEzMTBweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubXlTdmcgZyAuaGVhZGVye1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICBzdHJva2U6d2hpdGU7IFxyXG4gICAgc3Ryb2tlLXdpZHRoOjRweDtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwcHggOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuXHJcbi5oZWFkZXJIaWdobGlnaHR7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICBzdHJva2U6IzAwZmYyODsgXHJcbiAgICBzdHJva2Utd2lkdGg6NHB4O1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTRweCA4cHg7XHJcbn07XHJcblxyXG4ubXlTdmcgZyAuc2tpbGx7XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgIHN0cm9rZTpibGFjazsgXHJcbiAgICBzdHJva2Utd2lkdGg6NHB4O1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTBweCA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2tpbGxIaWdobGlnaHR7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICBzdHJva2U6cmVkOyBcclxuICAgIHN0cm9rZS13aWR0aDo0cHg7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxNHB4IDhweDtcclxufVxyXG5cclxuLm15U3ZnIGcgLmRvbWFpbntcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gICAgc3Ryb2tlOndoaXRlOyBcclxuICAgIHN0cm9rZS13aWR0aDo0cHg7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMHB4IDhweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5kb21haW5IaWdobGlnaHR7XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgIHN0cm9rZTojZGJmZjAwOyBcclxuICAgIHN0cm9rZS13aWR0aDo0cHg7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxNHB4IDhweDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5Ta2lsbENvbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrOztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9ybWFsUmVndWxhcic7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5za2lsbEhlYWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5za2lsbExlZnRDb250e1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4uc2tpbGxSaWdodENvbnR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uc2tpbGxSaWdodENvbnQgaW1ne1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTcwcHg7XHJcbn1cclxuXHJcbi5za2lsbEJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhckNvbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5JTtcclxuICAgIGhlaWdodDogMjY5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzM0MzQzNDtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzM0MzQzNDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmJhcntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzNjM2MzYztcclxufVxyXG4uYmFyMXtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcbi5iYXIye1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbn1cclxuLmJhcjN7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG4uYmFyNHtcclxuICAgIGhlaWdodDogNDAlO1xyXG59XHJcbi5iYXI1e1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbn1cclxuXHJcbi55VHJpYW5nbGV7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLThweDtcclxuICAgIHRvcDogLTFweDtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ueFRyaWFuZ2xle1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgYm9yZGVyOiA3cHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC00cHg7XHJcbiAgICBib3R0b206IC04cHg7XHJcbn1cclxuXHJcbi50cmlhbmdsZUltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcbi5hYnNvbHV0ZUNvbnQgc3BhbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmNoYXJ0QXhpc1R4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5teVNraWxsQnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ubXlTa2lsbEJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIFxyXG59XHJcblxyXG4ubXlEb21haW5CdXR0b257XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEzNHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzQzU5O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm15RG9tYWluQnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2RiZmYwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkYmZmMDA7XHJcbn1cclxuXHJcbi5Eb21haW5Db250e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzM0M1OTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9ybWFsUmVndWxhcic7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kb21haW5Cb2R5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb3JtYWxMaWdodCc7XHJcbn1cclxuLmRvbWFpbkxlZnR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5kb21haW5SaWdodHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLmRvbWFpbkZvb3RlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5kb21haW5TdWJCb2R5e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDczcHg7XHJcbn1cclxuXHJcbi5kb21haW5TdWJCb2R5IGltZ3tcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbn1cclxuXHJcbi53b3JrQ29udHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzQzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ2Zvcm1hbFJlZ3VsYXInO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud29ya3JvdzF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLndvcmtQYW5lbHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNDRweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ud29ya1BhbmVsOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk0KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndvcmtQYW5lbDEgaW1ne1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi53b3JrUGFuZWwyIGltZ3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG59XHJcblxyXG4ud29ya1BhbmVsMXtcclxuICAgIGJhY2tncm91bmQ6ICMyODI4Mjg7XHJcbn1cclxuLndvcmtQYW5lbDJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTIzNDUwO1xyXG59XHJcblxyXG4uZm9vdGVyQ29udHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ubGVmdEZvb3RlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5jZW50ZXJGb290ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnJpZ2h0Rm9vdGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuQGZvbnQtZmFjZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9ybWFsUmVndWxhcic7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9yZWd1bGFyRm9udC50dGYnKSAgXHJcbiAgICBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgICBmb250LWZhbWlseTogJ2Zvcm1hbExpZ2h0JztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2xpZ2h0Rm9udC50dGYnKSAgXHJcbiAgICBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgICBmb250LWZhbWlseTogJ2Zvcm1hbEJvbGQnO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvc2VtaUJvbGRGb250LnR0ZicpICBcclxuICAgIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home-page/main-view/main-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home-page/main-view/main-view.component.ts ***!
  \************************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainViewComponent = /** @class */ (function () {
    function MainViewComponent() {
        this.path1 = "M0,0 L100,100";
        this.path2 = "M0,0 L100,100";
        this.path3 = "M0,0 L100,100";
        this.path4 = "M0,0 L100,100";
        this.path5 = "M0,0 L100,100";
        this.path6 = "M0,0 L100,100";
        this.path7 = "M0,0 L100,100";
        this.circle1 = { x: 10, y: 10 };
        this.circle2 = { x: 10, y: 10 };
        this.circle3 = { x: 10, y: 10 };
        this.circle4 = { x: 10, y: 10 };
        this.circle5 = { x: 10, y: 10 };
        this.circle6 = { x: 10, y: 10 };
        this.circle7 = { x: 10, y: 10 };
        this.circle8 = { x: 10, y: 10 };
        this.circle9 = { x: 10, y: 10 };
        this.tr1 = { x: 0, y: 0 };
        this.tr2 = { x: 0, y: 0 };
        this.tr3 = { x: 0, y: 0 };
        this.tr4 = { x: 0, y: 0 };
        this.bar1Txt = { x: 0, y: 0 };
        this.bar2Txt = { x: 0, y: 0 };
        this.bar3Txt = { x: 0, y: 0 };
        this.bar4Txt = { x: 0, y: 0 };
        this.bar5Txt = { x: 0, y: 0 };
        this.screen = {
            center: 0
        };
        this.skillBtn = { x: 0, y: 0 };
        this.domainBtn = { x: 0, y: 0 };
        this.minScreenWidth = 980;
        this.faceBtn = { x: 0, y: 0 };
        this.faceHover = false;
        this.skillHover = false;
        this.domainHover = false;
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
    }
    MainViewComponent.prototype.onWinResize = function (event) {
        console.log('resize', this.circle3.x);
        this.updateDomPosition();
    };
    MainViewComponent.prototype.ngOnInit = function () {
    };
    MainViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.updateDomPosition();
        }, 0);
    };
    MainViewComponent.prototype.updateDomPosition = function () {
        this.headerContRect = this.headerCont.nativeElement.getBoundingClientRect();
        this.introDefRect = this.introDef.nativeElement.getBoundingClientRect();
        this.introTitleRect = this.introTitle.nativeElement.getBoundingClientRect();
        this.faceImgRect = this.faceImg.nativeElement.getBoundingClientRect();
        this.contactDefRect = this.contactDef.nativeElement.getBoundingClientRect();
        this.contactTitleRect = this.contactTitle.nativeElement.getBoundingClientRect();
        this.xTriangleRect = this.xTriangle.nativeElement.getBoundingClientRect();
        this.yTriangleRect = this.yTriangle.nativeElement.getBoundingClientRect();
        this.bar1Rect = this.bar1.nativeElement.getBoundingClientRect();
        this.bar2Rect = this.bar2.nativeElement.getBoundingClientRect();
        this.bar3Rect = this.bar3.nativeElement.getBoundingClientRect();
        this.bar4Rect = this.bar4.nativeElement.getBoundingClientRect();
        this.bar5Rect = this.bar5.nativeElement.getBoundingClientRect();
        this.domainContRect = this.domainCont.nativeElement.getBoundingClientRect();
        this.screen.center = window.innerWidth / 2;
        var yOffset = -15;
        var xCenter = this.screen.center;
        var imgx = xCenter;
        var imgy = this.faceImgRect.top + this.faceImgRect.height / 2;
        this.path1 = "M" + xCenter + "," + (imgy + 106) + " L" + this.screen.center + "," + this.headerContRect.bottom;
        this.path2 = "M" + (xCenter + 66) + "," + (imgy + 66) + " L" + (xCenter + 120) + "," + (this.contactTitleRect.top + yOffset) + ", L" + (this.contactTitleRect.left + this.contactTitleRect.width / 2) + "," + (this.contactTitleRect.top + yOffset) + ",L" + (this.contactTitleRect.left + this.contactTitleRect.width / 2) + "," + (this.contactDefRect.bottom - yOffset);
        this.path3 = "M" + (xCenter - 74) + "," + (imgy + 66) + " L" + (xCenter - 120) + "," + (this.introTitleRect.top + yOffset) + ", L" + (this.introTitleRect.left + this.introTitleRect.width / 2) + "," + (this.introTitleRect.top + yOffset) + ",L" + (this.introTitleRect.left + this.introTitleRect.width / 2) + "," + (this.introDefRect.bottom - yOffset);
        this.path4 = "M" + this.screen.center + "," + this.headerContRect.bottom + " L" + xCenter + "," + this.domainContRect.top;
        this.path5 = "M" + xCenter + "," + (this.domainContRect.top - 100) + " L" + (xCenter - 80) + "," + (this.domainContRect.top - 100);
        this.path6 = "M" + xCenter + "," + (this.domainContRect.top - 160) + " L" + (xCenter + 80) + "," + (this.domainContRect.top - 160);
        this.path7 = "M" + xCenter + "," + this.domainContRect.top + " L" + xCenter + "," + (this.domainContRect.bottom - 70);
        this.circle1.x = xCenter;
        this.circle1.y = this.headerContRect.bottom;
        this.circle2.x = xCenter + 120;
        this.circle2.y = this.contactTitleRect.top + yOffset;
        this.circle3.x = this.contactTitleRect.left + this.contactTitleRect.width / 2;
        this.circle3.y = this.contactTitleRect.top + yOffset;
        this.circle4.x = xCenter - 120;
        this.circle4.y = this.introTitleRect.top + yOffset;
        this.circle5.x = this.introTitleRect.left + this.introTitleRect.width / 2;
        this.circle5.y = this.introTitleRect.top + yOffset;
        this.circle6.x = xCenter - 80;
        this.circle6.y = this.domainContRect.top - 100;
        this.circle7.x = xCenter + 80;
        this.circle7.y = this.domainContRect.top - 160;
        this.circle8.x = xCenter;
        this.circle8.y = this.domainContRect.top;
        this.circle9.x = xCenter;
        this.circle9.y = this.domainContRect.bottom - 70;
        this.tr1.x = this.xTriangleRect.left - 10;
        this.tr1.y = this.xTriangleRect.top + 20;
        this.tr2.x = this.yTriangleRect.left - 10;
        this.tr2.y = this.yTriangleRect.top + 20;
        this.tr3.x = this.contactTitleRect.left + this.contactTitleRect.width / 2 - 11;
        this.tr3.y = this.contactDefRect.bottom - yOffset - 11;
        this.tr4.x = this.introTitleRect.left + this.introTitleRect.width / 2 - 11;
        this.tr4.y = this.introDefRect.bottom - yOffset - 11;
        this.bar1Txt.x = this.bar1Rect.left;
        this.bar1Txt.y = this.bar1Rect.top - 40;
        this.bar2Txt.x = this.bar2Rect.left;
        this.bar2Txt.y = this.bar2Rect.top - 40;
        this.bar3Txt.x = this.bar3Rect.left;
        this.bar3Txt.y = this.bar3Rect.top - 40;
        this.bar4Txt.x = this.bar4Rect.left;
        this.bar4Txt.y = this.bar4Rect.top - 40;
        this.bar5Txt.x = this.bar5Rect.left;
        this.bar5Txt.y = this.bar5Rect.top - 40;
        this.skillBtn.x = xCenter - (128 / 2);
        this.skillBtn.y = this.headerContRect.bottom + 100;
        this.domainBtn.x = xCenter - (134 / 2);
        this.domainBtn.y = this.domainContRect.top + 100;
        this.faceBtn.x = xCenter;
        this.faceBtn.y = imgy;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MainViewComponent.prototype, "onWinResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerCont'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "headerCont", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('introDef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "introDef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('introTitle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "introTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('faceImg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "faceImg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactDef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "contactDef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactTitle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "contactTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('domainCont'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "domainCont", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('yTriangle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "yTriangle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xTriangle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "xTriangle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bar1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "bar1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bar2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "bar2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bar3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "bar3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bar4'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "bar4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bar5'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MainViewComponent.prototype, "bar5", void 0);
    MainViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/home-page/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.scss */ "./src/app/home-page/main-view/main-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Project\WebApplication\Portfolio\portfolio-pro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map