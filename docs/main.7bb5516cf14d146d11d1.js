(self["webpackChunkglobing"] = self["webpackChunkglobing"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 8776);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);






// Note we need a separate function as it's required
// by the AOT compiler.
function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_1___default());
}
const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 8950)).then((m) => m.PagesModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes),
            ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule.forRoot({ player: playerFactory }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'globing';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 5757:
/*!**************************************************!*\
  !*** ./src/app/pages/index8/index8.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Index8Component": () => (/* binding */ Index8Component)
/* harmony export */ });
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es */ 6243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 8994);
/* harmony import */ var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/scrollspy.directive */ 6564);
/* harmony import */ var _shared_features_features_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/features/features.component */ 1717);
/* harmony import */ var _shared_team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/team/team.component */ 1324);
/* harmony import */ var _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/contact/contact.component */ 5492);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);









const _c0 = function (a0) { return { active: a0 }; };
const _c1 = function () { return ["SECTION"]; };
/**
 * Index-8 component
 */
class Index8Component {
    constructor() {
        this.currentSection = 'home';
    }
    ngOnInit() {
        document
            .getElementById('color-opt')
            .setAttribute('href', 'assets/css/colors/default.css');
        const wave11 = 'M0 32L10 35.8C20 39.7 40 47.3 60 49.3C80 51.3 100 47.7 120 45.5C140 43.3 160 42.7 180 42.3C200 42 220 42 240 42.2C260 42.3 280 42.7 300 43.8C320 45 340 47 360 48C380 49 400 49 420 48.3C440 47.7 460 46.3 480 44.2C500 42 520 39 540 40C560 41 580 46 600 47C620 48 640 45 660 42.3C680 39.7 700 37.3 720 38.3C740 39.3 760 43.7 780 43.8C800 44 820 40 840 40.5C860 41 880 46 900 47.7C920 49.3 940 47.7 950 46.8L960 46L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave12 = 'M0 34L10 35.3C20 36.7 40 39.3 60 39C80 38.7 100 35.3 120 33.8C140 32.3 160 32.7 180 35.7C200 38.7 220 44.3 240 45.3C260 46.3 280 42.7 300 42.7C320 42.7 340 46.3 360 45.2C380 44 400 38 420 39C440 40 460 48 480 49.7C500 51.3 520 46.7 540 43.5C560 40.3 580 38.7 600 37.7C620 36.7 640 36.3 660 37.7C680 39 700 42 720 45.5C740 49 760 53 780 52.2C800 51.3 820 45.7 840 44.3C860 43 880 46 900 45.8C920 45.7 940 42.3 950 40.7L960 39L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave13 = 'M0 33L10 35.3C20 37.7 40 42.3 60 46.5C80 50.7 100 54.3 120 53.3C140 52.3 160 46.7 180 46.2C200 45.7 220 50.3 240 51.5C260 52.7 280 50.3 300 48C320 45.7 340 43.3 360 43.2C380 43 400 45 420 44.5C440 44 460 41 480 42.7C500 44.3 520 50.7 540 53.2C560 55.7 580 54.3 600 52.7C620 51 640 49 660 46.7C680 44.3 700 41.7 720 40.3C740 39 760 39 780 41.8C800 44.7 820 50.3 840 51.5C860 52.7 880 49.3 900 46.3C920 43.3 940 40.7 950 39.3L960 38L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave14 = 'M0 53L10 51C20 49 40 45 60 44.3C80 43.7 100 46.3 120 45.3C140 44.3 160 39.7 180 37.2C200 34.7 220 34.3 240 35.5C260 36.7 280 39.3 300 39.8C320 40.3 340 38.7 360 38.2C380 37.7 400 38.3 420 37.5C440 36.7 460 34.3 480 33.8C500 33.3 520 34.7 540 39C560 43.3 580 50.7 600 53C620 55.3 640 52.7 660 52.7C680 52.7 700 55.3 720 52.8C740 50.3 760 42.7 780 39.5C800 36.3 820 37.7 840 41.5C860 45.3 880 51.7 900 53.5C920 55.3 940 52.7 950 51.3L960 50L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.header-wave1',
            d: [
                {
                    value: [wave11, wave12],
                },
                {
                    value: wave13,
                },
                {
                    value: wave14,
                },
                {
                    value: wave11,
                },
            ],
            easing: 'linear',
            duration: 15000,
            loop: true,
        });
        const wave21 = 'M0 27L10 29.7C20 32.3 40 37.7 60 41.2C80 44.7 100 46.3 120 44.8C140 43.3 160 38.7 180 36C200 33.3 220 32.7 240 32.8C260 33 280 34 300 34.2C320 34.3 340 33.7 360 32C380 30.3 400 27.7 420 30C440 32.3 460 39.7 480 43C500 46.3 520 45.7 540 43.3C560 41 580 37 600 36.8C620 36.7 640 40.3 660 41.2C680 42 700 40 720 37C740 34 760 30 780 29.3C800 28.7 820 31.3 840 33.8C860 36.3 880 38.7 900 41C920 43.3 940 45.7 950 46.8L960 48L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave22 = 'M0 48L10 47.8C20 47.7 40 47.3 60 43.8C80 40.3 100 33.7 120 30.5C140 27.3 160 27.7 180 30.5C200 33.3 220 38.7 240 38.3C260 38 280 32 300 31C320 30 340 34 360 37.3C380 40.7 400 43.3 420 41.2C440 39 460 32 480 31.5C500 31 520 37 540 38.7C560 40.3 580 37.7 600 35C620 32.3 640 29.7 660 31.8C680 34 700 41 720 42.7C740 44.3 760 40.7 780 39C800 37.3 820 37.7 840 36C860 34.3 880 30.7 900 28.8C920 27 940 27 950 27L960 27L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave23 = 'M0 46L10 43.5C20 41 40 36 60 33.2C80 30.3 100 29.7 120 31.2C140 32.7 160 36.3 180 36.5C200 36.7 220 33.3 240 33.7C260 34 280 38 300 38.2C320 38.3 340 34.7 360 32.8C380 31 400 31 420 30.3C440 29.7 460 28.3 480 30.3C500 32.3 520 37.7 540 38.3C560 39 580 35 600 35C620 35 640 39 660 40.8C680 42.7 700 42.3 720 42.8C740 43.3 760 44.7 780 43.5C800 42.3 820 38.7 840 38.5C860 38.3 880 41.7 900 40.7C920 39.7 940 34.3 950 31.7L960 29L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave24 = 'M0 39L10 37.3C20 35.7 40 32.3 60 30.3C80 28.3 100 27.7 120 27.5C140 27.3 160 27.7 180 29.8C200 32 220 36 240 37.8C260 39.7 280 39.3 300 38.7C320 38 340 37 360 36C380 35 400 34 420 32.5C440 31 460 29 480 30.8C500 32.7 520 38.3 540 41C560 43.7 580 43.3 600 40.7C620 38 640 33 660 33.7C680 34.3 700 40.7 720 42.5C740 44.3 760 41.7 780 41.7C800 41.7 820 44.3 840 42.3C860 40.3 880 33.7 900 31.3C920 29 940 31 950 32L960 33L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.header-wave2',
            d: [
                {
                    value: [wave21, wave22],
                },
                {
                    value: wave23,
                },
                {
                    value: wave24,
                },
                {
                    value: wave21,
                },
            ],
            easing: 'linear',
            duration: 15000,
            loop: true,
        });
        const wave31 = 'M0 37L10 36.2C20 35.3 40 33.7 60 30.8C80 28 100 24 120 23C140 22 160 24 180 23.7C200 23.3 220 20.7 240 19.8C260 19 280 20 300 20.2C320 20.3 340 19.7 360 21C380 22.3 400 25.7 420 26.5C440 27.3 460 25.7 480 24.7C500 23.7 520 23.3 540 24C560 24.7 580 26.3 600 28.3C620 30.3 640 32.7 660 30.8C680 29 700 23 720 22.3C740 21.7 760 26.3 780 29.2C800 32 820 33 840 32.7C860 32.3 880 30.7 900 28.2C920 25.7 940 22.3 950 20.7L960 19L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave32 = 'M0 31L10 31.3C20 31.7 40 32.3 60 31.3C80 30.3 100 27.7 120 28.3C140 29 160 33 180 32.2C200 31.3 220 25.7 240 24C260 22.3 280 24.7 300 25.3C320 26 340 25 360 26.7C380 28.3 400 32.7 420 32.7C440 32.7 460 28.3 480 27.5C500 26.7 520 29.3 540 31.5C560 33.7 580 35.3 600 34.7C620 34 640 31 660 29.2C680 27.3 700 26.7 720 25.3C740 24 760 22 780 23.7C800 25.3 820 30.7 840 30.5C860 30.3 880 24.7 900 23.2C920 21.7 940 24.3 950 25.7L960 27L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave33 = 'M0 23L10 24.7C20 26.3 40 29.7 60 30.3C80 31 100 29 120 28.3C140 27.7 160 28.3 180 29.3C200 30.3 220 31.7 240 31.5C260 31.3 280 29.7 300 27.5C320 25.3 340 22.7 360 23.3C380 24 400 28 420 29C440 30 460 28 480 28.8C500 29.7 520 33.3 540 35.2C560 37 580 37 600 36.7C620 36.3 640 35.7 660 33.7C680 31.7 700 28.3 720 26C740 23.7 760 22.3 780 21.8C800 21.3 820 21.7 840 24.2C860 26.7 880 31.3 900 33.7C920 36 940 36 950 36L960 36L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave34 = 'M0 23L10 24.2C20 25.3 40 27.7 60 26.7C80 25.7 100 21.3 120 20.2C140 19 160 21 180 21.2C200 21.3 220 19.7 240 19C260 18.3 280 18.7 300 20.8C320 23 340 27 360 27.8C380 28.7 400 26.3 420 27.2C440 28 460 32 480 34C500 36 520 36 540 33.7C560 31.3 580 26.7 600 26.5C620 26.3 640 30.7 660 32C680 33.3 700 31.7 720 30.7C740 29.7 760 29.3 780 28.8C800 28.3 820 27.7 840 28.2C860 28.7 880 30.3 900 31.5C920 32.7 940 33.3 950 33.7L960 34L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.header-wave3',
            d: [
                {
                    value: [wave31, wave32],
                },
                {
                    value: wave33,
                },
                {
                    value: wave34,
                },
                {
                    value: wave31,
                },
            ],
            easing: 'linear',
            duration: 15000,
            loop: true,
        });
        const wave41 = 'M0 22L10 21C20 20 40 18 60 17.7C80 17.3 100 18.7 120 20.3C140 22 160 24 180 23C200 22 220 18 240 16C260 14 280 14 300 14.5C320 15 340 16 360 16.3C380 16.7 400 16.3 420 16.5C440 16.7 460 17.3 480 18.5C500 19.7 520 21.3 540 20.5C560 19.7 580 16.3 600 15.5C620 14.7 640 16.3 660 16.8C680 17.3 700 16.7 720 16.2C740 15.7 760 15.3 780 17C800 18.7 820 22.3 840 22.2C860 22 880 18 900 15.7C920 13.3 940 12.7 950 12.3L960 12L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave42 = 'M0 24L10 22C20 20 40 16 60 15.2C80 14.3 100 16.7 120 16.5C140 16.3 160 13.7 180 14.3C200 15 220 19 240 20.5C260 22 280 21 300 20.2C320 19.3 340 18.7 360 19C380 19.3 400 20.7 420 20.7C440 20.7 460 19.3 480 18.2C500 17 520 16 540 16.8C560 17.7 580 20.3 600 21.3C620 22.3 640 21.7 660 20.2C680 18.7 700 16.3 720 15.8C740 15.3 760 16.7 780 16.7C800 16.7 820 15.3 840 16.5C860 17.7 880 21.3 900 21.8C920 22.3 940 19.7 950 18.3L960 17L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave43 = 'M0 18L10 16.8C20 15.7 40 13.3 60 13.2C80 13 100 15 120 15.5C140 16 160 15 180 15.2C200 15.3 220 16.7 240 18.8C260 21 280 24 300 25.5C320 27 340 27 360 26.5C380 26 400 25 420 24.3C440 23.7 460 23.3 480 22.2C500 21 520 19 540 18.3C560 17.7 580 18.3 600 18.5C620 18.7 640 18.3 660 18.3C680 18.3 700 18.7 720 19.8C740 21 760 23 780 22.5C800 22 820 19 840 18.2C860 17.3 880 18.7 900 19.5C920 20.3 940 20.7 950 20.8L960 21L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave44 = 'M0 19L10 18.7C20 18.3 40 17.7 60 18C80 18.3 100 19.7 120 18.8C140 18 160 15 180 13.5C200 12 220 12 240 13.5C260 15 280 18 300 18.7C320 19.3 340 17.7 360 16.2C380 14.7 400 13.3 420 13.7C440 14 460 16 480 17.7C500 19.3 520 20.7 540 22C560 23.3 580 24.7 600 24.8C620 25 640 24 660 22.8C680 21.7 700 20.3 720 19C740 17.7 760 16.3 780 16.8C800 17.3 820 19.7 840 21.7C860 23.7 880 25.3 900 24.3C920 23.3 940 19.7 950 17.8L960 16L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.header-wave4',
            d: [
                {
                    value: [wave41, wave42],
                },
                {
                    value: wave43,
                },
                {
                    value: wave44,
                },
                {
                    value: wave41,
                },
            ],
            easing: 'linear',
            duration: 15000,
            loop: true,
        });
        const wave51 = 'M0 10L10 9.2C20 8.3 40 6.7 60 5.8C80 5 100 5 120 7C140 9 160 13 180 14.5C200 16 220 15 240 14.5C260 14 280 14 300 13.7C320 13.3 340 12.7 360 11.5C380 10.3 400 8.7 420 8.8C440 9 460 11 480 11C500 11 520 9 540 8.7C560 8.3 580 9.7 600 10.3C620 11 640 11 660 11.3C680 11.7 700 12.3 720 11.2C740 10 760 7 780 6.3C800 5.7 820 7.3 840 9.2C860 11 880 13 900 14C920 15 940 15 950 15L960 15L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave52 = 'M0 7L10 6.8C20 6.7 40 6.3 60 6.2C80 6 100 6 120 7C140 8 160 10 180 11.7C200 13.3 220 14.7 240 15.5C260 16.3 280 16.7 300 16.5C320 16.3 340 15.7 360 14.5C380 13.3 400 11.7 420 10.2C440 8.7 460 7.3 480 7.8C500 8.3 520 10.7 540 12.2C560 13.7 580 14.3 600 13.3C620 12.3 640 9.7 660 9.3C680 9 700 11 720 12.3C740 13.7 760 14.3 780 13.8C800 13.3 820 11.7 840 10.5C860 9.3 880 8.7 900 9C920 9.3 940 10.7 950 11.3L960 12L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave53 = 'M0 9L10 8.7C20 8.3 40 7.7 60 9C80 10.3 100 13.7 120 14C140 14.3 160 11.7 180 11C200 10.3 220 11.7 240 12.8C260 14 280 15 300 13.5C320 12 340 8 360 6.3C380 4.7 400 5.3 420 6.2C440 7 460 8 480 8.7C500 9.3 520 9.7 540 9.8C560 10 580 10 600 10.8C620 11.7 640 13.3 660 14.2C680 15 700 15 720 13.7C740 12.3 760 9.7 780 8.5C800 7.3 820 7.7 840 7.8C860 8 880 8 900 9.3C920 10.7 940 13.3 950 14.7L960 16L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        const wave54 = 'M0 13L10 12.5C20 12 40 11 60 9.8C80 8.7 100 7.3 120 8.2C140 9 160 12 180 12.8C200 13.7 220 12.3 240 12C260 11.7 280 12.3 300 13.2C320 14 340 15 360 15C380 15 400 14 420 12.8C440 11.7 460 10.3 480 9C500 7.7 520 6.3 540 7.5C560 8.7 580 12.3 600 14.3C620 16.3 640 16.7 660 15.7C680 14.7 700 12.3 720 11.2C740 10 760 10 780 9C800 8 820 6 840 5.2C860 4.3 880 4.7 900 6.2C920 7.7 940 10.3 950 11.7L960 13L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z';
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.header-wave5',
            d: [
                {
                    value: [wave51, wave52],
                },
                {
                    value: wave53,
                },
                {
                    value: wave54,
                },
                {
                    value: wave51,
                },
            ],
            easing: 'linear',
            duration: 15000,
            loop: true,
        });
    }
    /**
     * Window scroll method
     */
    // tslint:disable-next-line: typedef
    windowScroll() {
        const navbar = document.getElementById('navbar');
        if (document.body.scrollTop > 40 ||
            document.documentElement.scrollTop > 40) {
            navbar.style.backgroundColor = '#1a1a1a';
            navbar.style.padding = '15px 0px';
        }
        else {
            navbar.style.backgroundColor = '';
            navbar.style.padding = '20px';
        }
    }
    /**
     * Toggle navbar
     */
    toggleMenu() {
        document.getElementById('navbarCollapse').classList.toggle('show');
    }
    /**
     * Section changed method
     * @param sectionId specify the current sectionID
     */
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
}
Index8Component.ɵfac = function Index8Component_Factory(t) { return new (t || Index8Component)(); };
Index8Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: Index8Component, selectors: [["app-index8"]], decls: 49, vars: 18, consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", "navbar-custom", "sticky", "sticky-dark", 3, "scroll"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/Aletta logo.svg", "width", "90", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "ti-menu"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], ["id", "navbar-navlist", 1, "navbar-nav", "mx-auto"], [1, "nav-item", 3, "ngClass"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngxScrollTo"], [1, "text-right", "list-unstyled", "list-inline", "mb-0", "nav-social"], ["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "section", "bg-gradient", "half-home"], [1, "home-center"], [1, "home-desc-center"], [1, "row", "justify-content-center"], [1, "col-lg-10"], [1, "text-center"], [1, "text-white", "home-title", "mb-0"], [1, "text-white", "home-subtitle-center", "home-subtitle", "mt-4", "mb-0", "mx-auto"], [1, "mt-4"], ["href", "#", 1, "btn", "btn-outline-white", "btn-round"], ["height", "100%", "width", "100%", "preserveAspectRatio", "none", "id", "visual", "viewBox", "0 0 960 137", "fill-rule", "evenodd", "clip-rule", "evenodd", "height", "137", "version", "1.1"], ["d", "M0 32L10 35.8C20 39.7 40 47.3 60 49.3C80 51.3 100 47.7 120 45.5C140 43.3 160 42.7 180 42.3C200 42 220 42 240 42.2C260 42.3 280 42.7 300 43.8C320 45 340 47 360 48C380 49 400 49 420 48.3C440 47.7 460 46.3 480 44.2C500 42 520 39 540 40C560 41 580 46 600 47C620 48 640 45 660 42.3C680 39.7 700 37.3 720 38.3C740 39.3 760 43.7 780 43.8C800 44 820 40 840 40.5C860 41 880 46 900 47.7C920 49.3 940 47.7 950 46.8L960 46L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z", "fill", "#194fa3", 1, "header-wave1"], ["d", "M0 27L10 29.7C20 32.3 40 37.7 60 41.2C80 44.7 100 46.3 120 44.8C140 43.3 160 38.7 180 36C200 33.3 220 32.7 240 32.8C260 33 280 34 300 34.2C320 34.3 340 33.7 360 32C380 30.3 400 27.7 420 30C440 32.3 460 39.7 480 43C500 46.3 520 45.7 540 43.3C560 41 580 37 600 36.8C620 36.7 640 40.3 660 41.2C680 42 700 40 720 37C740 34 760 30 780 29.3C800 28.7 820 31.3 840 33.8C860 36.3 880 38.7 900 41C920 43.3 940 45.7 950 46.8L960 48L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z", "fill", "#1968b6", 1, "header-wave2"], ["d", "M0 37L10 36.2C20 35.3 40 33.7 60 30.8C80 28 100 24 120 23C140 22 160 24 180 23.7C200 23.3 220 20.7 240 19.8C260 19 280 20 300 20.2C320 20.3 340 19.7 360 21C380 22.3 400 25.7 420 26.5C440 27.3 460 25.7 480 24.7C500 23.7 520 23.3 540 24C560 24.7 580 26.3 600 28.3C620 30.3 640 32.7 660 30.8C680 29 700 23 720 22.3C740 21.7 760 26.3 780 29.2C800 32 820 33 840 32.7C860 32.3 880 30.7 900 28.2C920 25.7 940 22.3 950 20.7L960 19L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z", "fill", "#2780c6", 1, "header-wave3"], ["width", "100%", "d", "M0 22L10 21C20 20 40 18 60 17.7C80 17.3 100 18.7 120 20.3C140 22 160 24 180 23C200 22 220 18 240 16C260 14 280 14 300 14.5C320 15 340 16 360 16.3C380 16.7 400 16.3 420 16.5C440 16.7 460 17.3 480 18.5C500 19.7 520 21.3 540 20.5C560 19.7 580 16.3 600 15.5C620 14.7 640 16.3 660 16.8C680 17.3 700 16.7 720 16.2C740 15.7 760 15.3 780 17C800 18.7 820 22.3 840 22.2C860 22 880 18 900 15.7C920 13.3 940 12.7 950 12.3L960 12L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z", "fill", "#3e99d5", 1, "header-wave4"], ["width", "100%", "d", "M0 10L10 9.2C20 8.3 40 6.7 60 5.8C80 5 100 5 120 7C140 9 160 13 180 14.5C200 16 220 15 240 14.5C260 14 280 14 300 13.7C320 13.3 340 12.7 360 11.5C380 10.3 400 8.7 420 8.8C440 9 460 11 480 11C500 11 520 9 540 8.7C560 8.3 580 9.7 600 10.3C620 11 640 11 660 11.3C680 11.7 700 12.3 720 11.2C740 10 760 7 780 6.3C800 5.7 820 7.3 840 9.2C860 11 880 13 900 14C920 15 940 15 950 15L960 15L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z", "fill", "#59b1e3", 1, "header-wave5"]], template: function Index8Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function Index8Component_Template_nav_scroll_0_listener() { return ctx.windowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Index8Component_Template_button_click_4_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("sectionChange", function Index8Component_Template_div_sectionChange_22_listener($event) { return ctx.onSectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " Are you struggling to get subjective data? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Meet Aletta ePro for clinical trials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Aletta's AI chatbot faciliates higher density of data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "app-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, ctx.currentSection === "home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c0, ctx.currentSection === "features"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngxScrollTo", "#features");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c0, ctx.currentSection === "team"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngxScrollTo", "#team");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](15, _c0, ctx.currentSection === "contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngxScrollTo", "#contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__.ScrollToDirective, _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollspyDirective, _shared_features_features_component__WEBPACK_IMPORTED_MODULE_2__.FeaturesComponent, _shared_team_team_component__WEBPACK_IMPORTED_MODULE_3__.TeamComponent, _shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleDguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 32, vars: 0, consts: [[1, "bg-login", "d-flex", "align-items-center"], [1, "container"], [1, "row", "justify-content-center", "mt-4"], [1, "col-lg-4"], [1, "bg-white", "p-4", "rounded"], [1, "text-center"], [1, "fw-bold", "mb-3"], [1, "login-form"], [1, "row"], [1, "col-lg-12", "mt-2"], ["type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], [1, "col-lg-12", "mt-3", "mb-4"], [1, "btn", "btn-primary", "w-100"], [1, "txet-center"], [1, "mb-0", "mt-2", "text-center"], ["routerLink", "/password_forget", 1, "text-dark", "fw-bold"], [1, "text-center", "mt-3"], [1, "text-white", "me-2"], ["routerLink", "/signup", 1, "text-white", "fw-bold"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Globing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Forgot your password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Don't have an account ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _index8_index8_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index8/index8.component */ 5757);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 4902);
/* harmony import */ var _password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-forget/password-forget.component */ 3503);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ 8406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







const routes = [
    {
        path: '',
        redirectTo: 'index-8',
        pathMatch: 'full'
    },
    {
        path: 'index-8',
        component: _index8_index8_component__WEBPACK_IMPORTED_MODULE_0__.Index8Component
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
    },
    {
        path: 'password_forget',
        component: _password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_2__.PasswordForgetComponent
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 8994);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-typed-js */ 3192);
/* harmony import */ var ng_particles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-particles */ 8439);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-routing.module */ 9730);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _index8_index8_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index8/index8.component */ 5757);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 4902);
/* harmony import */ var _password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-forget/password-forget.component */ 3503);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ 8406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);














function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_0___default());
}
class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.PagesRoutingModule,
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__.ScrollToModule.forRoot(),
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_10__.NgxTypedJsModule,
            ng_particles__WEBPACK_IMPORTED_MODULE_11__.NgParticlesModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_index8_index8_component__WEBPACK_IMPORTED_MODULE_3__.Index8Component,
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        _password_forget_password_forget_component__WEBPACK_IMPORTED_MODULE_5__.PasswordForgetComponent,
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__.SignupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.PagesRoutingModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__.ScrollToModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_10__.NgxTypedJsModule,
        ng_particles__WEBPACK_IMPORTED_MODULE_11__.NgParticlesModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule] }); })();


/***/ }),

/***/ 3503:
/*!********************************************************************!*\
  !*** ./src/app/pages/password-forget/password-forget.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordForgetComponent": () => (/* binding */ PasswordForgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class PasswordForgetComponent {
    constructor() { }
    ngOnInit() {
    }
}
PasswordForgetComponent.ɵfac = function PasswordForgetComponent_Factory(t) { return new (t || PasswordForgetComponent)(); };
PasswordForgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordForgetComponent, selectors: [["app-password-forget"]], decls: 23, vars: 0, consts: [[1, "bg-login", "d-flex", "align-items-center"], [1, "container"], [1, "row", "justify-content-center", "mt-4"], [1, "col-lg-4"], [1, "bg-white", "p-4", "mt-5", "rounded"], [1, "text-center"], [1, "fw-bold", "mb-3"], [1, "text-center", "text-muted", "fw-normal", "forgot-pass-txt"], [1, "login-form"], [1, "row"], [1, "col-lg-12", "mt-3"], ["type", "email", "placeholder", "Email", "required", "", 1, "form-control"], [1, "col-lg-12", "mt-4", "mb-2"], [1, "btn", "btn-primary", "w-100"], [1, "text-center", "mt-3"], [1, "text-white", "me-2"], ["routerLink", "/login", 1, "text-white", "fw-bold"]], template: function PasswordForgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Globing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter your email address and we'll send you an email with instructions to reset your password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Reset your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Already have account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC1mb3JnZXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8406:
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 32, vars: 0, consts: [[1, "bg-login", "d-flex", "align-items-center"], [1, "container"], [1, "row", "justify-content-center", "mt-4"], [1, "col-lg-4"], [1, "bg-white", "p-4", "mt-5", "rounded"], [1, "text-center"], [1, "fw-bold", "mb-3"], [1, "login-form"], [1, "row"], [1, "col-lg-12", "mt-2"], ["type", "text", "placeholder", "First Name", "required", "", 1, "form-control"], ["type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["href", "#"], [1, "col-lg-12", "mt-4"], [1, "btn", "btn-primary", "w-100"], [1, "text-center", "mt-3"], [1, "text-white", "me-2"], ["routerLink", "/login", 1, "text-white", "fw-bold"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Globing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " I Accept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Terms And Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Already have an account ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8677:
/*!***************************************************!*\
  !*** ./src/app/shared/client/client.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientComponent": () => (/* binding */ ClientComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);


function ClientComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Risus cubilia etiam parturient augue nostra sodales sit aptent venenatis magna sapien ante hendrerit ullamcorper tincidunt urna eget Ante feugiat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "- John Litts, Globing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Risus cubilia etiam parturient augue nostra sodales sit aptent venenatis ullamcorper tincidunt urna, eget magna sapien ante hendrerit Ante feugiat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "- John Litts, Globing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Risus cubilia etiam parturient augue nostra sodales sit aptent venenatis magna ullamcorper tincidunt urna, eget sapien ante hendrerit Ante feugiat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "- John Litts, Globing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
/**
 * Client component
 */
class ClientComponent {
    constructor() {
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            responsive: {
                0: {
                    items: 1
                },
            },
            nav: true,
            navText: ['<div class="test_nav_right"><i class="ti-angle-right"></i></div>', '<div class="test_nav_left"><i class="ti-angle-left"></i></div>']
        };
    }
    ngOnInit() {
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(); };
ClientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 8, vars: 1, consts: [["id", "testi", 1, "section", "bg-client"], [1, "container"], [1, "row", "justify-content-center", "mt-5", "mb-5"], [1, "col-lg-12"], [3, "options"], ["carouselSlide", ""], [1, "text-center", "w-75", "mx-auto"], [1, "testi-icon", "text-white"], [1, "ti-quote-left"], [1, "mt-3"], [1, "user-review", "text-center"], [1, ""], ["src", "assets/images/testi/testi-1.jpg", "alt", "", 1, "rounded-circle", "testi-user", "mx-auto", "d-block"], [1, "testi-user-name", "text-center", "text-white", "mb-0", "mt-4"], [1, "text-muted"], [1, "ti-star", "text-warning"], ["src", "assets/images/testi/testi-2.jpg", "alt", "", 1, "rounded-circle", "testi-user", "mx-auto", "d-block"], [1, "ti-star"], ["src", "assets/images/testi/testi-3.jpg", "alt", "", 1, "rounded-circle", "testi-user", "mx-auto", "d-block"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "owl-carousel-o", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientComponent_ng_template_5_Template, 16, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientComponent_ng_template_6_Template, 16, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClientComponent_ng_template_7_Template, 16, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5492:
/*!*****************************************************!*\
  !*** ./src/app/shared/contact/contact.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es */ 6243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


/**
 * Contact component
 */
class ContactComponent {
    constructor() { }
    ngOnInit() {
        const wave1 = [
            'M0 104L14.5 93.2C29 82.3 58 60.7 87.2 56.2C116.3 51.7 145.7 64.3 174.8 65.2C204 66 233 55 262 59.5C291 64 320 84 349 83.2C378 82.3 407 60.7 436.2 52.5C465.3 44.3 494.7 49.7 523.8 55C553 60.3 582 65.7 611 69.3C640 73 669 75 698 72.3C727 69.7 756 62.3 785.2 65C814.3 67.7 843.7 80.3 872.8 89.3C902 98.3 931 103.7 945.5 106.3L960 109L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
            'M0 125L14.5 114.2C29 103.3 58 81.7 87.2 77.2C116.3 72.7 145.7 85.3 174.8 91.7C204 98 233 98 262 91.7C291 85.3 320 72.7 349 79C378 85.3 407 110.7 436.2 118C465.3 125.3 494.7 114.7 523.8 109.3C553 104 582 104 611 97.7C640 91.3 669 78.7 698 83.2C727 87.7 756 109.3 785.2 112.8C814.3 116.3 843.7 101.7 872.8 91.7C902 81.7 931 76.3 945.5 73.7L960 71L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
            'M0 44L14.5 59.3C29 74.7 58 105.3 87.2 118C116.3 130.7 145.7 125.3 174.8 110C204 94.7 233 69.3 262 63C291 56.7 320 69.3 349 75.7C378 82 407 82 436.2 83.8C465.3 85.7 494.7 89.3 523.8 84C553 78.7 582 64.3 611 64.3C640 64.3 669 78.7 698 86.7C727 94.7 756 96.3 785.2 97.2C814.3 98 843.7 98 872.8 104.3C902 110.7 931 123.3 945.5 129.7L960 136L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
            'M0 93L14.5 95.7C29 98.3 58 103.7 87.2 102.7C116.3 101.7 145.7 94.3 174.8 90.7C204 87 233 87 262 88C291 89 320 91 349 83.8C378 76.7 407 60.3 436.2 56.7C465.3 53 494.7 62 523.8 62C553 62 582 53 611 54C640 55 669 66 698 66C727 66 756 55 785.2 57.7C814.3 60.3 843.7 76.7 872.8 84.8C902 93 931 93 945.5 93L960 93L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
        ];
        const wave2 = [
            'M0 163L14.5 166.7C29 170.3 58 177.7 87.2 184.8C116.3 192 145.7 199 174.8 193.5C204 188 233 170 262 162C291 154 320 156 349 157C378 158 407 158 436.2 165.2C465.3 172.3 494.7 186.7 523.8 188.3C553 190 582 179 611 181.7C640 184.3 669 200.7 698 206.2C727 211.7 756 206.3 785.2 201C814.3 195.7 843.7 190.3 872.8 183.2C902 176 931 167 945.5 162.5L960 158L960 107L945.5 104.3C931 101.7 902 96.3 872.8 87.3C843.7 78.3 814.3 65.7 785.2 63C756 60.3 727 67.7 698 70.3C669 73 640 71 611 67.3C582 63.7 553 58.3 523.8 53C494.7 47.7 465.3 42.3 436.2 50.5C407 58.7 378 80.3 349 81.2C320 82 291 62 262 57.5C233 53 204 64 174.8 63.2C145.7 62.3 116.3 49.7 87.2 54.2C58 58.7 29 80.3 14.5 91.2L0 102Z',
            'M0 222L14.5 213C29 204 58 186 87.2 183.3C116.3 180.7 145.7 193.3 174.8 195.2C204 197 233 188 262 182.7C291 177.3 320 175.7 349 202.7C378 229.7 407 285.3 436.2 311.3C465.3 337.3 494.7 333.7 523.8 311.2C553 288.7 582 247.3 611 223.2C640 199 669 192 698 202.8C727 213.7 756 242.3 785.2 265.7C814.3 289 843.7 307 872.8 308.8C902 310.7 931 296.3 945.5 289.2L960 282L960 69L945.5 71.7C931 74.3 902 79.7 872.8 89.7C843.7 99.7 814.3 114.3 785.2 110.8C756 107.3 727 85.7 698 81.2C669 76.7 640 89.3 611 95.7C582 102 553 102 523.8 107.3C494.7 112.7 465.3 123.3 436.2 116C407 108.7 378 83.3 349 77C320 70.7 291 83.3 262 89.7C233 96 204 96 174.8 89.7C145.7 83.3 116.3 70.7 87.2 75.2C58 79.7 29 101.3 14.5 112.2L0 123Z',
            'M0 131L14.5 143.5C29 156 58 181 87.2 190C116.3 199 145.7 192 174.8 179.5C204 167 233 149 262 140C291 131 320 131 349 137.2C378 143.3 407 155.7 436.2 161.8C465.3 168 494.7 168 523.8 155.5C553 143 582 118 611 119C640 120 669 147 698 161.3C727 175.7 756 177.3 785.2 171.8C814.3 166.3 843.7 153.7 872.8 160C902 166.3 931 191.7 945.5 204.3L960 217L960 134L945.5 127.7C931 121.3 902 108.7 872.8 102.3C843.7 96 814.3 96 785.2 95.2C756 94.3 727 92.7 698 84.7C669 76.7 640 62.3 611 62.3C582 62.3 553 76.7 523.8 82C494.7 87.3 465.3 83.7 436.2 81.8C407 80 378 80 349 73.7C320 67.3 291 54.7 262 61C233 67.3 204 92.7 174.8 108C145.7 123.3 116.3 128.7 87.2 116C58 103.3 29 72.7 14.5 57.3L0 42Z',
            'M0 131L14.5 139C29 147 58 163 87.2 170.2C116.3 177.3 145.7 175.7 174.8 175.7C204 175.7 233 177.3 262 174.7C291 172 320 165 349 148C378 131 407 104 436.2 102.2C465.3 100.3 494.7 123.7 523.8 133.5C553 143.3 582 139.7 611 139.7C640 139.7 669 143.3 698 143.3C727 143.3 756 139.7 785.2 146C814.3 152.3 843.7 168.7 872.8 175.8C902 183 931 181 945.5 180L960 179L960 91L945.5 91C931 91 902 91 872.8 82.8C843.7 74.7 814.3 58.3 785.2 55.7C756 53 727 64 698 64C669 64 640 53 611 52C582 51 553 60 523.8 60C494.7 60 465.3 51 436.2 54.7C407 58.3 378 74.7 349 81.8C320 89 291 87 262 86C233 85 204 85 174.8 88.7C145.7 92.3 116.3 99.7 87.2 100.7C58 101.7 29 96.3 14.5 93.7L0 91Z',
        ];
        const wave3 = [
            'M0 249L14.5 250.8C29 252.7 58 256.3 87.2 262.7C116.3 269 145.7 278 174.8 267.2C204 256.3 233 225.7 262 215.8C291 206 320 217 349 221.5C378 226 407 224 436.2 233C465.3 242 494.7 262 523.8 259.3C553 256.7 582 231.3 611 231.3C640 231.3 669 256.7 698 263C727 269.3 756 256.7 785.2 251.2C814.3 245.7 843.7 247.3 872.8 242C902 236.7 931 224.3 945.5 218.2L960 212L960 156L945.5 160.5C931 165 902 174 872.8 181.2C843.7 188.3 814.3 193.7 785.2 199C756 204.3 727 209.7 698 204.2C669 198.7 640 182.3 611 179.7C582 177 553 188 523.8 186.3C494.7 184.7 465.3 170.3 436.2 163.2C407 156 378 156 349 155C320 154 291 152 262 160C233 168 204 186 174.8 191.5C145.7 197 116.3 190 87.2 182.8C58 175.7 29 168.3 14.5 164.7L0 161Z',
            'M0 287L14.5 275.3C29 263.7 58 240.3 87.2 233.2C116.3 226 145.7 235 174.8 244C204 253 233 262 262 262C291 262 320 253 349 272.8C378 292.7 407 341.3 436.2 364.7C465.3 388 494.7 386 523.8 373.3C553 360.7 582 337.3 611 316.7C640 296 669 278 698 280.7C727 283.3 756 306.7 785.2 331C814.3 355.3 843.7 380.7 872.8 388.8C902 397 931 388 945.5 383.5L960 379L960 280L945.5 287.2C931 294.3 902 308.7 872.8 306.8C843.7 305 814.3 287 785.2 263.7C756 240.3 727 211.7 698 200.8C669 190 640 197 611 221.2C582 245.3 553 286.7 523.8 309.2C494.7 331.7 465.3 335.3 436.2 309.3C407 283.3 378 227.7 349 200.7C320 173.7 291 175.3 262 180.7C233 186 204 195 174.8 193.2C145.7 191.3 116.3 178.7 87.2 181.3C58 184 29 202 14.5 211L0 220Z',
            'M0 206L14.5 219.5C29 233 58 260 87.2 270.8C116.3 281.7 145.7 276.3 174.8 268.3C204 260.3 233 249.7 262 238.8C291 228 320 217 349 219.7C378 222.3 407 238.7 436.2 245.8C465.3 253 494.7 251 523.8 241C553 231 582 213 611 210.3C640 207.7 669 220.3 698 230.3C727 240.3 756 247.7 785.2 239.7C814.3 231.7 843.7 208.3 872.8 209.2C902 210 931 235 945.5 247.5L960 260L960 215L945.5 202.3C931 189.7 902 164.3 872.8 158C843.7 151.7 814.3 164.3 785.2 169.8C756 175.3 727 173.7 698 159.3C669 145 640 118 611 117C582 116 553 141 523.8 153.5C494.7 166 465.3 166 436.2 159.8C407 153.7 378 141.3 349 135.2C320 129 291 129 262 138C233 147 204 165 174.8 177.5C145.7 190 116.3 197 87.2 188C58 179 29 154 14.5 141.5L0 129Z',
            'M0 190L14.5 195.3C29 200.7 58 211.3 87.2 228.5C116.3 245.7 145.7 269.3 174.8 280.2C204 291 233 289 262 289C291 289 320 291 349 268.5C378 246 407 199 436.2 188.2C465.3 177.3 494.7 202.7 523.8 209C553 215.3 582 202.7 611 200.8C640 199 669 208 698 212.5C727 217 756 217 785.2 220.7C814.3 224.3 843.7 231.7 872.8 246C902 260.3 931 281.7 945.5 292.3L960 303L960 177L945.5 178C931 179 902 181 872.8 173.8C843.7 166.7 814.3 150.3 785.2 144C756 137.7 727 141.3 698 141.3C669 141.3 640 137.7 611 137.7C582 137.7 553 141.3 523.8 131.5C494.7 121.7 465.3 98.3 436.2 100.2C407 102 378 129 349 146C320 163 291 170 262 172.7C233 175.3 204 173.7 174.8 173.7C145.7 173.7 116.3 175.3 87.2 168.2C58 161 29 145 14.5 137L0 129Z',
        ];
        const wave4 = [
            'M0 444L14.5 435.8C29 427.7 58 411.3 87.2 402.3C116.3 393.3 145.7 391.7 174.8 372.8C204 354 233 318 262 327.8C291 337.7 320 393.3 349 410.3C378 427.3 407 405.7 436.2 388.7C465.3 371.7 494.7 359.3 523.8 364.8C553 370.3 582 393.7 611 397.2C640 400.7 669 384.3 698 368.2C727 352 756 336 785.2 330.7C814.3 325.3 843.7 330.7 872.8 331.5C902 332.3 931 328.7 945.5 326.8L960 325L960 210L945.5 216.2C931 222.3 902 234.7 872.8 240C843.7 245.3 814.3 243.7 785.2 249.2C756 254.7 727 267.3 698 261C669 254.7 640 229.3 611 229.3C582 229.3 553 254.7 523.8 257.3C494.7 260 465.3 240 436.2 231C407 222 378 224 349 219.5C320 215 291 204 262 213.8C233 223.7 204 254.3 174.8 265.2C145.7 276 116.3 267 87.2 260.7C58 254.3 29 250.7 14.5 248.8L0 247Z',
            'M0 363L14.5 354C29 345 58 327 87.2 319.8C116.3 312.7 145.7 316.3 174.8 324.3C204 332.3 233 344.7 262 343.7C291 342.7 320 328.3 349 342.8C378 357.3 407 400.7 436.2 422.3C465.3 444 494.7 444 523.8 432.3C553 420.7 582 397.3 611 373C640 348.7 669 323.3 698 324.2C727 325 756 352 785.2 375.3C814.3 398.7 843.7 418.3 872.8 423.7C902 429 931 420 945.5 415.5L960 411L960 377L945.5 381.5C931 386 902 395 872.8 386.8C843.7 378.7 814.3 353.3 785.2 329C756 304.7 727 281.3 698 278.7C669 276 640 294 611 314.7C582 335.3 553 358.7 523.8 371.3C494.7 384 465.3 386 436.2 362.7C407 339.3 378 290.7 349 270.8C320 251 291 260 262 260C233 260 204 251 174.8 242C145.7 233 116.3 224 87.2 231.2C58 238.3 29 261.7 14.5 273.3L0 285Z',
            'M0 341L14.5 348.2C29 355.3 58 369.7 87.2 388.7C116.3 407.7 145.7 431.3 174.8 419.7C204 408 233 361 262 335.7C291 310.3 320 306.7 349 320.2C378 333.7 407 364.3 436.2 368.8C465.3 373.3 494.7 351.7 523.8 354.3C553 357 582 384 611 402C640 420 669 429 698 432.7C727 436.3 756 434.7 785.2 423C814.3 411.3 843.7 389.7 872.8 389.7C902 389.7 931 411.3 945.5 422.2L960 433L960 258L945.5 245.5C931 233 902 208 872.8 207.2C843.7 206.3 814.3 229.7 785.2 237.7C756 245.7 727 238.3 698 228.3C669 218.3 640 205.7 611 208.3C582 211 553 229 523.8 239C494.7 249 465.3 251 436.2 243.8C407 236.7 378 220.3 349 217.7C320 215 291 226 262 236.8C233 247.7 204 258.3 174.8 266.3C145.7 274.3 116.3 279.7 87.2 268.8C58 258 29 231 14.5 217.5L0 204Z',
            'M0 298L14.5 316.8C29 335.7 58 373.3 87.2 391.3C116.3 409.3 145.7 407.7 174.8 413.2C204 418.7 233 431.3 262 429.5C291 427.7 320 411.3 349 405C378 398.7 407 402.3 436.2 394.3C465.3 386.3 494.7 366.7 523.8 355C553 343.3 582 339.7 611 351.3C640 363 669 390 698 395.3C727 400.7 756 384.3 785.2 378.8C814.3 373.3 843.7 378.7 872.8 390.3C902 402 931 420 945.5 429L960 438L960 301L945.5 290.3C931 279.7 902 258.3 872.8 244C843.7 229.7 814.3 222.3 785.2 218.7C756 215 727 215 698 210.5C669 206 640 197 611 198.8C582 200.7 553 213.3 523.8 207C494.7 200.7 465.3 175.3 436.2 186.2C407 197 378 244 349 266.5C320 289 291 287 262 287C233 287 204 289 174.8 278.2C145.7 267.3 116.3 243.7 87.2 226.5C58 209.3 29 198.7 14.5 193.3L0 188Z',
        ];
        const wave5 = [
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 323L945.5 324.8C931 326.7 902 330.3 872.8 329.5C843.7 328.7 814.3 323.3 785.2 328.7C756 334 727 350 698 366.2C669 382.3 640 398.7 611 395.2C582 391.7 553 368.3 523.8 362.8C494.7 357.3 465.3 369.7 436.2 386.7C407 403.7 378 425.3 349 408.3C320 391.3 291 335.7 262 325.8C233 316 204 352 174.8 370.8C145.7 389.7 116.3 391.3 87.2 400.3C58 409.3 29 425.7 14.5 433.8L0 442Z',
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 409L945.5 413.5C931 418 902 427 872.8 421.7C843.7 416.3 814.3 396.7 785.2 373.3C756 350 727 323 698 322.2C669 321.3 640 346.7 611 371C582 395.3 553 418.7 523.8 430.3C494.7 442 465.3 442 436.2 420.3C407 398.7 378 355.3 349 340.8C320 326.3 291 340.7 262 341.7C233 342.7 204 330.3 174.8 322.3C145.7 314.3 116.3 310.7 87.2 317.8C58 325 29 343 14.5 352L0 361Z',
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 431L945.5 420.2C931 409.3 902 387.7 872.8 387.7C843.7 387.7 814.3 409.3 785.2 421C756 432.7 727 434.3 698 430.7C669 427 640 418 611 400C582 382 553 355 523.8 352.3C494.7 349.7 465.3 371.3 436.2 366.8C407 362.3 378 331.7 349 318.2C320 304.7 291 308.3 262 333.7C233 359 204 406 174.8 417.7C145.7 429.3 116.3 405.7 87.2 386.7C58 367.7 29 353.3 14.5 346.2L0 339Z',
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 436L945.5 427C931 418 902 400 872.8 388.3C843.7 376.7 814.3 371.3 785.2 376.8C756 382.3 727 398.7 698 393.3C669 388 640 361 611 349.3C582 337.7 553 341.3 523.8 353C494.7 364.7 465.3 384.3 436.2 392.3C407 400.3 378 396.7 349 403C320 409.3 291 425.7 262 427.5C233 429.3 204 416.7 174.8 411.2C145.7 405.7 116.3 407.3 87.2 389.3C58 371.3 29 333.7 14.5 314.8L0 296Z',
        ];
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.contact-wave1',
            d: [
                {
                    value: [wave1[0], wave1[1]],
                },
                {
                    value: wave1[2],
                },
                {
                    value: wave1[3],
                },
                {
                    value: wave1[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.contact-wave2',
            d: [
                {
                    value: [wave2[0], wave2[1]],
                },
                {
                    value: wave2[2],
                },
                {
                    value: wave2[3],
                },
                {
                    value: wave2[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.contact-wave3',
            d: [
                {
                    value: [wave3[0], wave3[1]],
                },
                {
                    value: wave3[2],
                },
                {
                    value: wave3[3],
                },
                {
                    value: wave3[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.contact-wave4',
            d: [
                {
                    value: [wave4[0], wave4[1]],
                },
                {
                    value: wave4[2],
                },
                {
                    value: wave4[3],
                },
                {
                    value: wave4[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.contact-wave5',
            d: [
                {
                    value: [wave5[0], wave5[1]],
                },
                {
                    value: wave5[2],
                },
                {
                    value: wave5[3],
                },
                {
                    value: wave5[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 62, vars: 0, consts: [["id", "contact", 1, "section"], ["viewBox", "0 0 960 540", "height", "100%", "width", "100%", "preserveAspectRatio", "none", "fill-rule", "evenodd", "clip-rule", "evenodd", 2, "position", "absolute", "z-index", "1"], ["d", "M0 104L14.5 93.2C29 82.3 58 60.7 87.2 56.2C116.3 51.7 145.7 64.3 174.8 65.2C204 66 233 55 262 59.5C291 64 320 84 349 83.2C378 82.3 407 60.7 436.2 52.5C465.3 44.3 494.7 49.7 523.8 55C553 60.3 582 65.7 611 69.3C640 73 669 75 698 72.3C727 69.7 756 62.3 785.2 65C814.3 67.7 843.7 80.3 872.8 89.3C902 98.3 931 103.7 945.5 106.3L960 109L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z", "fill", "#59b1e3", 1, "contact-wave1"], ["d", "M0 163L14.5 166.7C29 170.3 58 177.7 87.2 184.8C116.3 192 145.7 199 174.8 193.5C204 188 233 170 262 162C291 154 320 156 349 157C378 158 407 158 436.2 165.2C465.3 172.3 494.7 186.7 523.8 188.3C553 190 582 179 611 181.7C640 184.3 669 200.7 698 206.2C727 211.7 756 206.3 785.2 201C814.3 195.7 843.7 190.3 872.8 183.2C902 176 931 167 945.5 162.5L960 158L960 107L945.5 104.3C931 101.7 902 96.3 872.8 87.3C843.7 78.3 814.3 65.7 785.2 63C756 60.3 727 67.7 698 70.3C669 73 640 71 611 67.3C582 63.7 553 58.3 523.8 53C494.7 47.7 465.3 42.3 436.2 50.5C407 58.7 378 80.3 349 81.2C320 82 291 62 262 57.5C233 53 204 64 174.8 63.2C145.7 62.3 116.3 49.7 87.2 54.2C58 58.7 29 80.3 14.5 91.2L0 102Z", "fill", "#8bc4ea", 1, "contact-wave2"], ["d", "M0 249L14.5 250.8C29 252.7 58 256.3 87.2 262.7C116.3 269 145.7 278 174.8 267.2C204 256.3 233 225.7 262 215.8C291 206 320 217 349 221.5C378 226 407 224 436.2 233C465.3 242 494.7 262 523.8 259.3C553 256.7 582 231.3 611 231.3C640 231.3 669 256.7 698 263C727 269.3 756 256.7 785.2 251.2C814.3 245.7 843.7 247.3 872.8 242C902 236.7 931 224.3 945.5 218.2L960 212L960 156L945.5 160.5C931 165 902 174 872.8 181.2C843.7 188.3 814.3 193.7 785.2 199C756 204.3 727 209.7 698 204.2C669 198.7 640 182.3 611 179.7C582 177 553 188 523.8 186.3C494.7 184.7 465.3 170.3 436.2 163.2C407 156 378 156 349 155C320 154 291 152 262 160C233 168 204 186 174.8 191.5C145.7 197 116.3 190 87.2 182.8C58 175.7 29 168.3 14.5 164.7L0 161Z", "fill", "#b4d7f1", 1, "contact-wave3"], ["d", "M0 444L14.5 435.8C29 427.7 58 411.3 87.2 402.3C116.3 393.3 145.7 391.7 174.8 372.8C204 354 233 318 262 327.8C291 337.7 320 393.3 349 410.3C378 427.3 407 405.7 436.2 388.7C465.3 371.7 494.7 359.3 523.8 364.8C553 370.3 582 393.7 611 397.2C640 400.7 669 384.3 698 368.2C727 352 756 336 785.2 330.7C814.3 325.3 843.7 330.7 872.8 331.5C902 332.3 931 328.7 945.5 326.8L960 325L960 210L945.5 216.2C931 222.3 902 234.7 872.8 240C843.7 245.3 814.3 243.7 785.2 249.2C756 254.7 727 267.3 698 261C669 254.7 640 229.3 611 229.3C582 229.3 553 254.7 523.8 257.3C494.7 260 465.3 240 436.2 231C407 222 378 224 349 219.5C320 215 291 204 262 213.8C233 223.7 204 254.3 174.8 265.2C145.7 276 116.3 267 87.2 260.7C58 254.3 29 250.7 14.5 248.8L0 247Z", "fill", "#daebf8", 1, "contact-wave4"], ["d", "M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 323L945.5 324.8C931 326.7 902 330.3 872.8 329.5C843.7 328.7 814.3 323.3 785.2 328.7C756 334 727 350 698 366.2C669 382.3 640 398.7 611 395.2C582 391.7 553 368.3 523.8 362.8C494.7 357.3 465.3 369.7 436.2 386.7C407 403.7 378 425.3 349 408.3C320 391.3 291 335.7 262 325.8C233 316 204 352 174.8 370.8C145.7 389.7 116.3 391.3 87.2 400.3C58 409.3 29 425.7 14.5 433.8L0 442Z", "fill", "#ffffff", 1, "contact-wave5"], [1, "container", 2, "position", "relative", "z-index", "2"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-headphone-alt", "title-icon", "text-muted"], [1, "title"], [1, "fw-bold"], [1, "mt-3", "title-subtitle", "mx-auto"], [1, "row"], [1, "col-lg-4"], [1, "mt-4", "pt-4"], [1, "mt-4"], [1, "d-block", "mt-2"], [1, "col-lg-8"], [1, "custom-form", "mt-4", "pt-4"], ["method", "post", "name", "myForm", "onsubmit", "return validateForm()"], ["id", "error-msg"], ["id", "simple-msg"], [1, "col-lg-6"], [1, "form-group", "mt-2"], ["name", "name", "id", "name", "type", "text", "placeholder", "Your name*", 1, "form-control"], ["name", "email", "id", "email", "type", "email", "placeholder", "Your email*", 1, "form-control"], ["type", "text", "id", "subject", "placeholder", "Your Subject..", 1, "form-control"], ["name", "comments", "id", "comments", "rows", "4", "placeholder", "Your message...", 1, "form-control"], [1, "col-lg-12", "text-right"], ["type", "submit", "id", "submit", "name", "send", "value", "Send Message", 1, "submitBnt", "btn", "btn-primary"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Get In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " It is a long established fact that a reader will be of a page when established fact looking at its layout. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Office Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Kadijk 4 9747 AT Groningen, Netherlands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Email Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "contact@aletta-solutions.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Office Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "9:00AM To 6:00PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1750:
/*!*********************************************!*\
  !*** ./src/app/shared/faq/faq.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function FaqComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens wil be deducted from your coupens account at Clooger.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
/**
 * FAQ component
 */
class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 65, vars: 6, consts: [["id", "faq", 1, "section"], [1, "container"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-comments", "title-icon", "text-muted"], [1, "title"], [1, "fw-bold"], [1, "text-muted", "mt-3", "title-subtitle", "mx-auto"], [1, "row", "mt-5"], [1, "col-lg-6"], [1, "pl-4", "pr-4"], [1, "mt-4"], [1, ""], [1, "mb-0", "f-18", "font-weight-600"], [1, "mt-3"], [3, "ngTemplateOutlet"], [1, "mt-5"], [1, "section"], [1, "row"], [1, "text-center"], [1, "mb-4"], ["href", "#", 1, "btn", "btn-round", "btn-primary"], ["content", ""], [1, "text-muted"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "It is a long established fact that a reader will be of a page when established fact looking at its layout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Q. What is Lorem Ipsum?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](20, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Q. Why use Lorem Ipsum?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](26, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Q. How many variations exist?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](32, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Q. What is Lorem Ipsum?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](40, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Q. Is safe use Lorem Ipsum?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](46, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Q. When can be used?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](52, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "You have another questions or need help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, FaqComponent_ng_template_63_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1717:
/*!*******************************************************!*\
  !*** ./src/app/shared/features/features.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesComponent": () => (/* binding */ FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 8776);


/**
 * Features component
 */
class FeaturesComponent {
    constructor() {
        this.options_industry = {
            path: 'assets/animations/Chat Bot Animation/Chat Bot Coloured/Chatbot Colour Animation.json',
        };
        this.options_academic = {
            path: 'assets/animations/Blogging Minimalistic/Blogging.json',
        };
    }
    ngOnInit() { }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
}
FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) { return new (t || FeaturesComponent)(); };
FeaturesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeaturesComponent, selectors: [["app-features"]], decls: 37, vars: 2, consts: [["id", "features", 1, "section"], [1, "container"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-ruler-pencil", "title-icon", "text-muted"], [1, "title"], [1, "fw-bold"], [1, "text-muted", "mt-3", "title-subtitle", "mx-auto"], [1, "row", "mt-5", "vertical-content"], [1, "col-lg-6", "mt-2"], [3, "options", "animationCreated"], [1, "col-lg-5", "offset-lg-1", "mt-2"], [1, "features-desc"], [1, "text-muted", "mt-3"], ["href", "#", 1, "btn", "btn-primary", "btn-round", "mt-3"], [1, "mdi", "mdi-chevron-right"], [1, "row", "mt-5", "pt-5", "vertical-content"], [1, "col-lg-5", "mt-2"], [1, "col-lg-6", "offset-lg-1", "mt-2"]], template: function FeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Custom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Whatever the field, Aletta can make a difference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ng-lottie", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function FeaturesComponent_Template_ng_lottie_animationCreated_14_listener($event) { return ctx.animationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Aletta ePro is the new patient-centered data capture tool. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Aletta ePro offers clinical trial organizers a cost-effective data capture solution, which is not only secure and compliant, but also increases participant engagement and retention. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Aletta ePro is to become a daily part of what researchers engage in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Aletta ePro wants to empower researchers by supporting their research ambitions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ng-lottie", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function FeaturesComponent_Template_ng_lottie_animationCreated_36_listener($event) { return ctx.animationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.options_industry);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.options_academic);
    } }, directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es */ 6243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


/**
 * Footer component
 */
class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        const wave1 = [
            'M0 147L14.5 137C29 127 58 107 87.2 103.3C116.3 99.7 145.7 112.3 174.8 111.5C204 110.7 233 96.3 262 96.3C291 96.3 320 110.7 349 118.8C378 127 407 129 436.2 130.8C465.3 132.7 494.7 134.3 523.8 127C553 119.7 582 103.3 611 89C640 74.7 669 62.3 698 60.7C727 59 756 68 785.2 79.7C814.3 91.3 843.7 105.7 872.8 108.3C902 111 931 102 945.5 97.5L960 93L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
            'M0 82L14.5 78.3C29 74.7 58 67.3 87.2 62C116.3 56.7 145.7 53.3 174.8 51.7C204 50 233 50 262 51.7C291 53.3 320 56.7 349 66.5C378 76.3 407 92.7 436.2 97.2C465.3 101.7 494.7 94.3 523.8 87.2C553 80 582 73 611 71.3C640 69.7 669 73.3 698 77.8C727 82.3 756 87.7 785.2 84C814.3 80.3 843.7 67.7 872.8 70.3C902 73 931 91 945.5 100L960 109L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
            'M0 114L14.5 109.5C29 105 58 96 87.2 97C116.3 98 145.7 109 174.8 122.5C204 136 233 152 262 161C291 170 320 172 349 164.8C378 157.7 407 141.3 436.2 130.5C465.3 119.7 494.7 114.3 523.8 116.2C553 118 582 127 611 130.7C640 134.3 669 132.7 698 124.5C727 116.3 756 101.7 785.2 99.8C814.3 98 843.7 109 872.8 110C902 111 931 102 945.5 97.5L960 93L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
            'M0 114L14.5 109.5C29 105 58 96 87.2 97C116.3 98 145.7 109 174.8 103.7C204 98.3 233 76.7 262 72.2C291 67.7 320 80.3 349 85.7C378 91 407 89 436.2 96.2C465.3 103.3 494.7 119.7 523.8 118.8C553 118 582 100 611 98.2C640 96.3 669 110.7 698 107C727 103.3 756 81.7 785.2 70C814.3 58.3 843.7 56.7 872.8 55.8C902 55 931 55 945.5 55L960 55L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
        ];
        const wave2 = [
            'M0 190L14.5 180.2C29 170.3 58 150.7 87.2 157.8C116.3 165 145.7 199 174.8 199.8C204 200.7 233 168.3 262 159.3C291 150.3 320 164.7 349 180C378 195.3 407 211.7 436.2 213.5C465.3 215.3 494.7 202.7 523.8 196.3C553 190 582 190 611 179.2C640 168.3 669 146.7 698 140.3C727 134 756 143 785.2 157.5C814.3 172 843.7 192 872.8 198.3C902 204.7 931 197.3 945.5 193.7L960 190L960 91L945.5 95.5C931 100 902 109 872.8 106.3C843.7 103.7 814.3 89.3 785.2 77.7C756 66 727 57 698 58.7C669 60.3 640 72.7 611 87C582 101.3 553 117.7 523.8 125C494.7 132.3 465.3 130.7 436.2 128.8C407 127 378 125 349 116.8C320 108.7 291 94.3 262 94.3C233 94.3 204 108.7 174.8 109.5C145.7 110.3 116.3 97.7 87.2 101.3C58 105 29 125 14.5 135L0 145Z',
            'M0 249L14.5 241C29 233 58 217 87.2 200.8C116.3 184.7 145.7 168.3 174.8 188.2C204 208 233 264 262 286.5C291 309 320 298 349 287.2C378 276.3 407 265.7 436.2 249.5C465.3 233.3 494.7 211.7 523.8 199C553 186.3 582 182.7 611 188C640 193.3 669 207.7 698 216.7C727 225.7 756 229.3 785.2 230.3C814.3 231.3 843.7 229.7 872.8 223.3C902 217 931 206 945.5 200.5L960 195L960 107L945.5 98C931 89 902 71 872.8 68.3C843.7 65.7 814.3 78.3 785.2 82C756 85.7 727 80.3 698 75.8C669 71.3 640 67.7 611 69.3C582 71 553 78 523.8 85.2C494.7 92.3 465.3 99.7 436.2 95.2C407 90.7 378 74.3 349 64.5C320 54.7 291 51.3 262 49.7C233 48 204 48 174.8 49.7C145.7 51.3 116.3 54.7 87.2 60C58 65.3 29 72.7 14.5 76.3L0 80Z',
            'M0 163L14.5 166.7C29 170.3 58 177.7 87.2 184.8C116.3 192 145.7 199 174.8 193.5C204 188 233 170 262 162C291 154 320 156 349 157C378 158 407 158 436.2 165.2C465.3 172.3 494.7 186.7 523.8 188.3C553 190 582 179 611 181.7C640 184.3 669 200.7 698 206.2C727 211.7 756 206.3 785.2 201C814.3 195.7 843.7 190.3 872.8 183.2C902 176 931 167 945.5 162.5L960 158L960 107L945.5 104.3C931 101.7 902 96.3 872.8 87.3C843.7 78.3 814.3 65.7 785.2 63C756 60.3 727 67.7 698 70.3C669 73 640 71 611 67.3C582 63.7 553 58.3 523.8 53C494.7 47.7 465.3 42.3 436.2 50.5C407 58.7 378 80.3 349 81.2C320 82 291 62 262 57.5C233 53 204 64 174.8 63.2C145.7 62.3 116.3 49.7 87.2 54.2C58 58.7 29 80.3 14.5 91.2L0 102Z',
            'M0 325L14.5 301.7C29 278.3 58 231.7 87.2 208.3C116.3 185 145.7 185 174.8 188.5C204 192 233 199 262 217C291 235 320 264 349 278.5C378 293 407 293 436.2 297.5C465.3 302 494.7 311 523.8 306.5C553 302 582 284 611 280.3C640 276.7 669 287.3 698 283.7C727 280 756 262 785.2 235.8C814.3 209.7 843.7 175.3 872.8 172.7C902 170 931 199 945.5 213.5L960 228L960 53L945.5 53C931 53 902 53 872.8 53.8C843.7 54.7 814.3 56.3 785.2 68C756 79.7 727 101.3 698 105C669 108.7 640 94.3 611 96.2C582 98 553 116 523.8 116.8C494.7 117.7 465.3 101.3 436.2 94.2C407 87 378 89 349 83.7C320 78.3 291 65.7 262 70.2C233 74.7 204 96.3 174.8 101.7C145.7 107 116.3 96 87.2 95C58 94 29 103 14.5 107.5L0 112Z',
        ];
        const wave3 = [
            'M0 222L14.5 220.3C29 218.7 58 215.3 87.2 226.2C116.3 237 145.7 262 174.8 264.7C204 267.3 233 247.7 262 237.8C291 228 320 228 349 233.3C378 238.7 407 249.3 436.2 255.7C465.3 262 494.7 264 523.8 261.3C553 258.7 582 251.3 611 243.2C640 235 669 226 698 224.2C727 222.3 756 227.7 785.2 238.5C814.3 249.3 843.7 265.7 872.8 269.3C902 273 931 264 945.5 259.5L960 255L960 188L945.5 191.7C931 195.3 902 202.7 872.8 196.3C843.7 190 814.3 170 785.2 155.5C756 141 727 132 698 138.3C669 144.7 640 166.3 611 177.2C582 188 553 188 523.8 194.3C494.7 200.7 465.3 213.3 436.2 211.5C407 209.7 378 193.3 349 178C320 162.7 291 148.3 262 157.3C233 166.3 204 198.7 174.8 197.8C145.7 197 116.3 163 87.2 155.8C58 148.7 29 168.3 14.5 178.2L0 188Z',
            'M0 298L14.5 294.3C29 290.7 58 283.3 87.2 268C116.3 252.7 145.7 229.3 174.8 246.5C204 263.7 233 321.3 262 342C291 362.7 320 346.3 349 338.2C378 330 407 330 436.2 312C465.3 294 494.7 258 523.8 247.3C553 236.7 582 251.3 611 258.7C640 266 669 266 698 275.8C727 285.7 756 305.3 785.2 308.8C814.3 312.3 843.7 299.7 872.8 288C902 276.3 931 265.7 945.5 260.3L960 255L960 193L945.5 198.5C931 204 902 215 872.8 221.3C843.7 227.7 814.3 229.3 785.2 228.3C756 227.3 727 223.7 698 214.7C669 205.7 640 191.3 611 186C582 180.7 553 184.3 523.8 197C494.7 209.7 465.3 231.3 436.2 247.5C407 263.7 378 274.3 349 285.2C320 296 291 307 262 284.5C233 262 204 206 174.8 186.2C145.7 166.3 116.3 182.7 87.2 198.8C58 215 29 231 14.5 239L0 247Z',
            'M0 249L14.5 250.8C29 252.7 58 256.3 87.2 262.7C116.3 269 145.7 278 174.8 267.2C204 256.3 233 225.7 262 215.8C291 206 320 217 349 221.5C378 226 407 224 436.2 233C465.3 242 494.7 262 523.8 259.3C553 256.7 582 231.3 611 231.3C640 231.3 669 256.7 698 263C727 269.3 756 256.7 785.2 251.2C814.3 245.7 843.7 247.3 872.8 242C902 236.7 931 224.3 945.5 218.2L960 212L960 156L945.5 160.5C931 165 902 174 872.8 181.2C843.7 188.3 814.3 193.7 785.2 199C756 204.3 727 209.7 698 204.2C669 198.7 640 182.3 611 179.7C582 177 553 188 523.8 186.3C494.7 184.7 465.3 170.3 436.2 163.2C407 156 378 156 349 155C320 154 291 152 262 160C233 168 204 186 174.8 191.5C145.7 197 116.3 190 87.2 182.8C58 175.7 29 168.3 14.5 164.7L0 161Z',
            'M0 411L14.5 378.7C29 346.3 58 281.7 87.2 263.7C116.3 245.7 145.7 274.3 174.8 285.2C204 296 233 289 262 300.8C291 312.7 320 343.3 349 359.5C378 375.7 407 377.3 436.2 375.5C465.3 373.7 494.7 368.3 523.8 360.2C553 352 582 341 611 349C640 357 669 384 698 386.8C727 389.7 756 368.3 785.2 340.5C814.3 312.7 843.7 278.3 872.8 272.8C902 267.3 931 290.7 945.5 302.3L960 314L960 226L945.5 211.5C931 197 902 168 872.8 170.7C843.7 173.3 814.3 207.7 785.2 233.8C756 260 727 278 698 281.7C669 285.3 640 274.7 611 278.3C582 282 553 300 523.8 304.5C494.7 309 465.3 300 436.2 295.5C407 291 378 291 349 276.5C320 262 291 233 262 215C233 197 204 190 174.8 186.5C145.7 183 116.3 183 87.2 206.3C58 229.7 29 276.3 14.5 299.7L0 323Z',
        ];
        const wave4 = [
            'M0 390L14.5 395.3C29 400.7 58 411.3 87.2 405.8C116.3 400.3 145.7 378.7 174.8 385C204 391.3 233 425.7 262 441C291 456.3 320 452.7 349 454.5C378 456.3 407 463.7 436.2 454.7C465.3 445.7 494.7 420.3 523.8 409.5C553 398.7 582 402.3 611 397C640 391.7 669 377.3 698 370.2C727 363 756 363 785.2 378.3C814.3 393.7 843.7 424.3 872.8 429.7C902 435 931 415 945.5 405L960 395L960 253L945.5 257.5C931 262 902 271 872.8 267.3C843.7 263.7 814.3 247.3 785.2 236.5C756 225.7 727 220.3 698 222.2C669 224 640 233 611 241.2C582 249.3 553 256.7 523.8 259.3C494.7 262 465.3 260 436.2 253.7C407 247.3 378 236.7 349 231.3C320 226 291 226 262 235.8C233 245.7 204 265.3 174.8 262.7C145.7 260 116.3 235 87.2 224.2C58 213.3 29 216.7 14.5 218.3L0 220Z',
            'M0 449L14.5 448.2C29 447.3 58 445.7 87.2 445.7C116.3 445.7 145.7 447.3 174.8 451.8C204 456.3 233 463.7 262 459.2C291 454.7 320 438.3 349 441.8C378 445.3 407 468.7 436.2 480.3C465.3 492 494.7 492 523.8 479.5C553 467 582 442 611 431.3C640 420.7 669 424.3 698 432.3C727 440.3 756 452.7 785.2 446.3C814.3 440 843.7 415 872.8 407.8C902 400.7 931 411.3 945.5 416.7L960 422L960 253L945.5 258.3C931 263.7 902 274.3 872.8 286C843.7 297.7 814.3 310.3 785.2 306.8C756 303.3 727 283.7 698 273.8C669 264 640 264 611 256.7C582 249.3 553 234.7 523.8 245.3C494.7 256 465.3 292 436.2 310C407 328 378 328 349 336.2C320 344.3 291 360.7 262 340C233 319.3 204 261.7 174.8 244.5C145.7 227.3 116.3 250.7 87.2 266C58 281.3 29 288.7 14.5 292.3L0 296Z',
            'M0 444L14.5 435.8C29 427.7 58 411.3 87.2 402.3C116.3 393.3 145.7 391.7 174.8 372.8C204 354 233 318 262 327.8C291 337.7 320 393.3 349 410.3C378 427.3 407 405.7 436.2 388.7C465.3 371.7 494.7 359.3 523.8 364.8C553 370.3 582 393.7 611 397.2C640 400.7 669 384.3 698 368.2C727 352 756 336 785.2 330.7C814.3 325.3 843.7 330.7 872.8 331.5C902 332.3 931 328.7 945.5 326.8L960 325L960 210L945.5 216.2C931 222.3 902 234.7 872.8 240C843.7 245.3 814.3 243.7 785.2 249.2C756 254.7 727 267.3 698 261C669 254.7 640 229.3 611 229.3C582 229.3 553 254.7 523.8 257.3C494.7 260 465.3 240 436.2 231C407 222 378 224 349 219.5C320 215 291 204 262 213.8C233 223.7 204 254.3 174.8 265.2C145.7 276 116.3 267 87.2 260.7C58 254.3 29 250.7 14.5 248.8L0 247Z',
            'M0 460L14.5 434.8C29 409.7 58 359.3 87.2 339.5C116.3 319.7 145.7 330.3 174.8 334.8C204 339.3 233 337.7 262 355.7C291 373.7 320 411.3 349 432C378 452.7 407 456.3 436.2 456.3C465.3 456.3 494.7 452.7 523.8 446.3C553 440 582 431 611 431C640 431 669 440 698 437.3C727 434.7 756 420.3 785.2 397.8C814.3 375.3 843.7 344.7 872.8 342.8C902 341 931 368 945.5 381.5L960 395L960 312L945.5 300.3C931 288.7 902 265.3 872.8 270.8C843.7 276.3 814.3 310.7 785.2 338.5C756 366.3 727 387.7 698 384.8C669 382 640 355 611 347C582 339 553 350 523.8 358.2C494.7 366.3 465.3 371.7 436.2 373.5C407 375.3 378 373.7 349 357.5C320 341.3 291 310.7 262 298.8C233 287 204 294 174.8 283.2C145.7 272.3 116.3 243.7 87.2 261.7C58 279.7 29 344.3 14.5 376.7L0 409Z',
        ];
        const wave5 = [
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 393L945.5 403C931 413 902 433 872.8 427.7C843.7 422.3 814.3 391.7 785.2 376.3C756 361 727 361 698 368.2C669 375.3 640 389.7 611 395C582 400.3 553 396.7 523.8 407.5C494.7 418.3 465.3 443.7 436.2 452.7C407 461.7 378 454.3 349 452.5C320 450.7 291 454.3 262 439C233 423.7 204 389.3 174.8 383C145.7 376.7 116.3 398.3 87.2 403.8C58 409.3 29 398.7 14.5 393.3L0 388Z',
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 420L945.5 414.7C931 409.3 902 398.7 872.8 405.8C843.7 413 814.3 438 785.2 444.3C756 450.7 727 438.3 698 430.3C669 422.3 640 418.7 611 429.3C582 440 553 465 523.8 477.5C494.7 490 465.3 490 436.2 478.3C407 466.7 378 443.3 349 439.8C320 436.3 291 452.7 262 457.2C233 461.7 204 454.3 174.8 449.8C145.7 445.3 116.3 443.7 87.2 443.7C58 443.7 29 445.3 14.5 446.2L0 447Z',
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 323L945.5 324.8C931 326.7 902 330.3 872.8 329.5C843.7 328.7 814.3 323.3 785.2 328.7C756 334 727 350 698 366.2C669 382.3 640 398.7 611 395.2C582 391.7 553 368.3 523.8 362.8C494.7 357.3 465.3 369.7 436.2 386.7C407 403.7 378 425.3 349 408.3C320 391.3 291 335.7 262 325.8C233 316 204 352 174.8 370.8C145.7 389.7 116.3 391.3 87.2 400.3C58 409.3 29 425.7 14.5 433.8L0 442Z',
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 393L945.5 379.5C931 366 902 339 872.8 340.8C843.7 342.7 814.3 373.3 785.2 395.8C756 418.3 727 432.7 698 435.3C669 438 640 429 611 429C582 429 553 438 523.8 444.3C494.7 450.7 465.3 454.3 436.2 454.3C407 454.3 378 450.7 349 430C320 409.3 291 371.7 262 353.7C233 335.7 204 337.3 174.8 332.8C145.7 328.3 116.3 317.7 87.2 337.5C58 357.3 29 407.7 14.5 432.8L0 458Z',
        ];
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.footer-wave1',
            d: [
                {
                    value: [wave1[0], wave1[1]],
                },
                {
                    value: wave1[2],
                },
                {
                    value: wave1[3],
                },
                {
                    value: wave1[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.footer-wave2',
            d: [
                {
                    value: [wave2[0], wave2[1]],
                },
                {
                    value: wave2[2],
                },
                {
                    value: wave2[3],
                },
                {
                    value: wave2[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.footer-wave3',
            d: [
                {
                    value: [wave3[0], wave3[1]],
                },
                {
                    value: wave3[2],
                },
                {
                    value: wave3[3],
                },
                {
                    value: wave3[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.footer-wave4',
            d: [
                {
                    value: [wave4[0], wave4[1]],
                },
                {
                    value: wave4[2],
                },
                {
                    value: wave4[3],
                },
                {
                    value: wave4[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.footer-wave5',
            d: [
                {
                    value: [wave5[0], wave5[1]],
                },
                {
                    value: wave5[2],
                },
                {
                    value: wave5[3],
                },
                {
                    value: wave5[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 35, vars: 1, consts: [[1, "section"], ["viewBox", "0 0 960 320", "height", "100%", "width", "100%", "preserveAspectRatio", "none", "fill-rule", "evenodd", "clip-rule", "evenodd", 2, "position", "absolute", "z-index", "1"], ["d", "M0 55L14.5 56.7C29 58.3 58 61.7 87.2 61.2C116.3 60.7 145.7 56.3 174.8 54.2C204 52 233 52 262 52.5C291 53 320 54 349 49.8C378 45.7 407 36.3 436.2 34.3C465.3 32.3 494.7 37.7 523.8 37.7C553 37.7 582 32.3 611 32.8C640 33.3 669 39.7 698 39.7C727 39.7 756 33.3 785.2 34.8C814.3 36.3 843.7 45.7 872.8 50.3C902 55 931 55 945.5 55L960 55L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z", "fill", "#ffffff", 1, "footer-wave1"], ["d", "M0 78L14.5 82.8C29 87.7 58 97.3 87.2 101.5C116.3 105.7 145.7 104.3 174.8 104.3C204 104.3 233 105.7 262 104.2C291 102.7 320 98.3 349 88.2C378 78 407 62 436.2 60.8C465.3 59.7 494.7 73.3 523.8 79.2C553 85 582 83 611 83C640 83 669 85 698 85C727 85 756 83 785.2 86.8C814.3 90.7 843.7 100.3 872.8 104.7C902 109 931 108 945.5 107.5L960 107L960 53L945.5 53C931 53 902 53 872.8 48.3C843.7 43.7 814.3 34.3 785.2 32.8C756 31.3 727 37.7 698 37.7C669 37.7 640 31.3 611 30.8C582 30.3 553 35.7 523.8 35.7C494.7 35.7 465.3 30.3 436.2 32.3C407 34.3 378 43.7 349 47.8C320 52 291 51 262 50.5C233 50 204 50 174.8 52.2C145.7 54.3 116.3 58.7 87.2 59.2C58 59.7 29 56.3 14.5 54.7L0 53Z", "fill", "#fff6d7", 1, "footer-wave2"], ["d", "M0 113L14.5 116.2C29 119.3 58 125.7 87.2 135.8C116.3 146 145.7 160 174.8 166.5C204 173 233 172 262 172C291 172 320 173 349 159.7C378 146.3 407 118.7 436.2 112.2C465.3 105.7 494.7 120.3 523.8 124C553 127.7 582 120.3 611 119.3C640 118.3 669 123.7 698 126.3C727 129 756 129 785.2 131.2C814.3 133.3 843.7 137.7 872.8 146.2C902 154.7 931 167.3 945.5 173.7L960 180L960 105L945.5 105.5C931 106 902 107 872.8 102.7C843.7 98.3 814.3 88.7 785.2 84.8C756 81 727 83 698 83C669 83 640 81 611 81C582 81 553 83 523.8 77.2C494.7 71.3 465.3 57.7 436.2 58.8C407 60 378 76 349 86.2C320 96.3 291 100.7 262 102.2C233 103.7 204 102.3 174.8 102.3C145.7 102.3 116.3 103.7 87.2 99.5C58 95.3 29 85.7 14.5 80.8L0 76Z", "fill", "#ffeeaf", 1, "footer-wave3"], ["d", "M0 177L14.5 188.2C29 199.3 58 221.7 87.2 232.3C116.3 243 145.7 242 174.8 245.2C204 248.3 233 255.7 262 254.7C291 253.7 320 244.3 349 240.7C378 237 407 239 436.2 234.2C465.3 229.3 494.7 217.7 523.8 210.7C553 203.7 582 201.3 611 208.2C640 215 669 231 698 234.3C727 237.7 756 228.3 785.2 225.2C814.3 222 843.7 225 872.8 231.8C902 238.7 931 249.3 945.5 254.7L960 260L960 178L945.5 171.7C931 165.3 902 152.7 872.8 144.2C843.7 135.7 814.3 131.3 785.2 129.2C756 127 727 127 698 124.3C669 121.7 640 116.3 611 117.3C582 118.3 553 125.7 523.8 122C494.7 118.3 465.3 103.7 436.2 110.2C407 116.7 378 144.3 349 157.7C320 171 291 170 262 170C233 170 204 171 174.8 164.5C145.7 158 116.3 144 87.2 133.8C58 123.7 29 117.3 14.5 114.2L0 111Z", "fill", "#ffe687", 1, "footer-wave4"], ["d", "M0 321L14.5 321C29 321 58 321 87.2 321C116.3 321 145.7 321 174.8 321C204 321 233 321 262 321C291 321 320 321 349 321C378 321 407 321 436.2 321C465.3 321 494.7 321 523.8 321C553 321 582 321 611 321C640 321 669 321 698 321C727 321 756 321 785.2 321C814.3 321 843.7 321 872.8 321C902 321 931 321 945.5 321L960 321L960 258L945.5 252.7C931 247.3 902 236.7 872.8 229.8C843.7 223 814.3 220 785.2 223.2C756 226.3 727 235.7 698 232.3C669 229 640 213 611 206.2C582 199.3 553 201.7 523.8 208.7C494.7 215.7 465.3 227.3 436.2 232.2C407 237 378 235 349 238.7C320 242.3 291 251.7 262 252.7C233 253.7 204 246.3 174.8 243.2C145.7 240 116.3 241 87.2 230.3C58 219.7 29 197.3 14.5 186.2L0 175Z", "fill", "#fede5b", 1, "footer-wave5"], [1, "container", 2, "position", "relative", "z-index", "2"], [1, "row"], [1, "col-lg-12"], [1, "text-center"], [1, "list-inline", "social", "mb-0"], [1, "list-inline-item"], ["href", "#", 1, "social-icon"], [1, "ti-facebook"], [1, "ti-twitter-alt"], [1, "ti-linkedin"], [1, "footer-terms"], [1, "mb-0", "list-inline", "text-center", "mt-4", "pt-2"], ["href", "#", 1, ""], [1, "mt-4", "pt-2", "text-center"], [1, "copy-rights", "text-primary", "mb-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Terms & Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.year, " \u00A9 Aletta");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4311:
/*!*****************************************************!*\
  !*** ./src/app/shared/pricing/pricing.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


const _c0 = function (a0) { return { "active": a0 }; };
function PricingComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Per Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bandwidth: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "No Hidden Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Join Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, item_r1.isActive === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.bandwidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Onlinespace: ", item_r1.space, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Support: ", item_r1.support, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.domain, " Domain");
} }
/**
 * Pricing component
 */
class PricingComponent {
    constructor() {
        this.pricingData = [
            {
                price: '$29',
                bandwidth: '1GB',
                space: '50MB',
                support: 'No',
                domain: 1
            },
            {
                price: '$59',
                bandwidth: '2GB',
                space: '500MB',
                support: 'Yes',
                domain: 5,
                isActive: true
            },
            {
                price: '$79',
                bandwidth: '4GB',
                space: '1 GB',
                support: 'Yes',
                domain: 10
            }
        ];
    }
    ngOnInit() {
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 13, vars: 1, consts: [["id", "pricing", 1, "section", "bg-light"], [1, "container"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-package", "title-icon", "text-muted"], [1, "title"], [1, "fw-bold"], [1, "text-muted", "mt-3", "title-subtitle", "mx-auto"], [1, "row", "mt-5"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "bg-white", "price-box", "text-center", "mt-3", 3, "ngClass"], [1, "plan-price", "fw-bold"], [1, "mb-0", "fw-bold"], [1, "mb-0"], [1, "plan-features", "text-muted", "mt-5", "mb-5"], [1, "text-primary"], ["href", "#", 1, "btn", "btn-primary", "btn-round"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "It is a long established fact that a reader will be of a page when established fact looking at its layout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PricingComponent_div_12_Template, 23, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pricingData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6564:
/*!***********************************************!*\
  !*** ./src/app/shared/scrollspy.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollspyDirective": () => (/* binding */ ScrollspyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);



class ScrollspyDirective {
    // tslint:disable-next-line: variable-name
    constructor(_el, document) {
        this._el = _el;
        this.document = document;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Window scroll method
     */
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.querySelectorAll('section');
        const scrollTop = this.document.documentElement.scrollTop;
        const parentOffset = this.document.documentElement.offsetTop;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
}
ScrollspyDirective.ɵfac = function ScrollspyDirective_Factory(t) { return new (t || ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
ScrollspyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollspyDirective, selectors: [["", "appScrollspy", ""]], hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });


/***/ }),

/***/ 2474:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/services.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function ServicesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", item_r1.icon, " text-primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
} }
/**
 * Services component
 */
class ServicesComponent {
    constructor() {
        this.servicesData = [
            {
                icon: 'ti-settings',
                title: 'Secure and compliant',
            },
            {
                icon: 'ti-palette',
                title: 'Time and cost efficient',
            },
            {
                icon: 'ti-stats-up',
                title: 'Feasibility in multicenter studies',
            },
            {
                icon: 'ti-package',
                title: 'Increased participant engagement and retention',
            },
            {
                icon: 'ti-dashboard',
                title: 'Efficient data capture',
            },
            {
                icon: 'ti-headphone',
                title: 'Better data management, reporting and tracking',
            },
        ];
    }
    ngOnInit() { }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 13, vars: 1, consts: [["id", "services", 1, "section"], [1, "container"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-ruler-pencil", "title-icon", "text-muted"], [1, "title"], [1, "fw-bold"], [1, "text-muted", "mt-3", "title-subtitle", "mx-auto"], [1, "row", "mt-5"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "services-box"], [1, "services-icon"], [1, "mt-3"], [1, "services-title", "fw-bold", "mb-3"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " It is a long established fact that a reader will be of a page when established fact looking at its layout. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ServicesComponent_div_12_Template, 7, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicesData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory),
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 8994);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services.component */ 2474);
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/features.component */ 1717);
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client/client.component */ 8677);
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team/team.component */ 1324);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq/faq.component */ 1750);
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricing/pricing.component */ 4311);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 5492);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ 5227);
/* harmony import */ var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scrollspy.directive */ 6564);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-lottie */ 8776);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lottie-web */ 3052);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);

















// Note we need a separate function as it's required
// by the AOT compiler.
function playerFactory() {
    return (lottie_web__WEBPACK_IMPORTED_MODULE_10___default());
}
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule,
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_14__.ScrollToModule.forRoot(),
            ngx_lottie__WEBPACK_IMPORTED_MODULE_9__.LottieModule.forRoot({ player: playerFactory }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_services_services_component__WEBPACK_IMPORTED_MODULE_0__.ServicesComponent,
        _features_features_component__WEBPACK_IMPORTED_MODULE_1__.FeaturesComponent,
        _client_client_component__WEBPACK_IMPORTED_MODULE_2__.ClientComponent,
        _team_team_component__WEBPACK_IMPORTED_MODULE_3__.TeamComponent,
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__.FaqComponent,
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__.PricingComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent,
        _scrollspy_directive__WEBPACK_IMPORTED_MODULE_8__.ScrollspyDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_14__.ScrollToModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_9__.LottieModule], exports: [_services_services_component__WEBPACK_IMPORTED_MODULE_0__.ServicesComponent,
        _features_features_component__WEBPACK_IMPORTED_MODULE_1__.FeaturesComponent,
        _client_client_component__WEBPACK_IMPORTED_MODULE_2__.ClientComponent,
        _team_team_component__WEBPACK_IMPORTED_MODULE_3__.TeamComponent,
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__.FaqComponent,
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__.PricingComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent,
        _scrollspy_directive__WEBPACK_IMPORTED_MODULE_8__.ScrollspyDirective] }); })();


/***/ }),

/***/ 1324:
/*!***********************************************!*\
  !*** ./src/app/shared/team/team.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamComponent": () => (/* binding */ TeamComponent)
/* harmony export */ });
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es */ 6243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


/**
 * Team component
 */
class TeamComponent {
    constructor() { }
    ngOnInit() {
        const wave1 = [
            'M0 147L14.5 137C29 127 58 107 87.2 103.3C116.3 99.7 145.7 112.3 174.8 111.5C204 110.7 233 96.3 262 96.3C291 96.3 320 110.7 349 118.8C378 127 407 129 436.2 130.8C465.3 132.7 494.7 134.3 523.8 127C553 119.7 582 103.3 611 89C640 74.7 669 62.3 698 60.7C727 59 756 68 785.2 79.7C814.3 91.3 843.7 105.7 872.8 108.3C902 111 931 102 945.5 97.5L960 93L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
            'M0 82L14.5 78.3C29 74.7 58 67.3 87.2 62C116.3 56.7 145.7 53.3 174.8 51.7C204 50 233 50 262 51.7C291 53.3 320 56.7 349 66.5C378 76.3 407 92.7 436.2 97.2C465.3 101.7 494.7 94.3 523.8 87.2C553 80 582 73 611 71.3C640 69.7 669 73.3 698 77.8C727 82.3 756 87.7 785.2 84C814.3 80.3 843.7 67.7 872.8 70.3C902 73 931 91 945.5 100L960 109L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
            'M0 114L14.5 109.5C29 105 58 96 87.2 97C116.3 98 145.7 109 174.8 122.5C204 136 233 152 262 161C291 170 320 172 349 164.8C378 157.7 407 141.3 436.2 130.5C465.3 119.7 494.7 114.3 523.8 116.2C553 118 582 127 611 130.7C640 134.3 669 132.7 698 124.5C727 116.3 756 101.7 785.2 99.8C814.3 98 843.7 109 872.8 110C902 111 931 102 945.5 97.5L960 93L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
            'M0 114L14.5 109.5C29 105 58 96 87.2 97C116.3 98 145.7 109 174.8 103.7C204 98.3 233 76.7 262 72.2C291 67.7 320 80.3 349 85.7C378 91 407 89 436.2 96.2C465.3 103.3 494.7 119.7 523.8 118.8C553 118 582 100 611 98.2C640 96.3 669 110.7 698 107C727 103.3 756 81.7 785.2 70C814.3 58.3 843.7 56.7 872.8 55.8C902 55 931 55 945.5 55L960 55L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z',
        ];
        const wave2 = [
            'M0 190L14.5 180.2C29 170.3 58 150.7 87.2 157.8C116.3 165 145.7 199 174.8 199.8C204 200.7 233 168.3 262 159.3C291 150.3 320 164.7 349 180C378 195.3 407 211.7 436.2 213.5C465.3 215.3 494.7 202.7 523.8 196.3C553 190 582 190 611 179.2C640 168.3 669 146.7 698 140.3C727 134 756 143 785.2 157.5C814.3 172 843.7 192 872.8 198.3C902 204.7 931 197.3 945.5 193.7L960 190L960 91L945.5 95.5C931 100 902 109 872.8 106.3C843.7 103.7 814.3 89.3 785.2 77.7C756 66 727 57 698 58.7C669 60.3 640 72.7 611 87C582 101.3 553 117.7 523.8 125C494.7 132.3 465.3 130.7 436.2 128.8C407 127 378 125 349 116.8C320 108.7 291 94.3 262 94.3C233 94.3 204 108.7 174.8 109.5C145.7 110.3 116.3 97.7 87.2 101.3C58 105 29 125 14.5 135L0 145Z',
            'M0 249L14.5 241C29 233 58 217 87.2 200.8C116.3 184.7 145.7 168.3 174.8 188.2C204 208 233 264 262 286.5C291 309 320 298 349 287.2C378 276.3 407 265.7 436.2 249.5C465.3 233.3 494.7 211.7 523.8 199C553 186.3 582 182.7 611 188C640 193.3 669 207.7 698 216.7C727 225.7 756 229.3 785.2 230.3C814.3 231.3 843.7 229.7 872.8 223.3C902 217 931 206 945.5 200.5L960 195L960 107L945.5 98C931 89 902 71 872.8 68.3C843.7 65.7 814.3 78.3 785.2 82C756 85.7 727 80.3 698 75.8C669 71.3 640 67.7 611 69.3C582 71 553 78 523.8 85.2C494.7 92.3 465.3 99.7 436.2 95.2C407 90.7 378 74.3 349 64.5C320 54.7 291 51.3 262 49.7C233 48 204 48 174.8 49.7C145.7 51.3 116.3 54.7 87.2 60C58 65.3 29 72.7 14.5 76.3L0 80Z',
            'M0 163L14.5 166.7C29 170.3 58 177.7 87.2 184.8C116.3 192 145.7 199 174.8 193.5C204 188 233 170 262 162C291 154 320 156 349 157C378 158 407 158 436.2 165.2C465.3 172.3 494.7 186.7 523.8 188.3C553 190 582 179 611 181.7C640 184.3 669 200.7 698 206.2C727 211.7 756 206.3 785.2 201C814.3 195.7 843.7 190.3 872.8 183.2C902 176 931 167 945.5 162.5L960 158L960 107L945.5 104.3C931 101.7 902 96.3 872.8 87.3C843.7 78.3 814.3 65.7 785.2 63C756 60.3 727 67.7 698 70.3C669 73 640 71 611 67.3C582 63.7 553 58.3 523.8 53C494.7 47.7 465.3 42.3 436.2 50.5C407 58.7 378 80.3 349 81.2C320 82 291 62 262 57.5C233 53 204 64 174.8 63.2C145.7 62.3 116.3 49.7 87.2 54.2C58 58.7 29 80.3 14.5 91.2L0 102Z',
            'M0 325L14.5 301.7C29 278.3 58 231.7 87.2 208.3C116.3 185 145.7 185 174.8 188.5C204 192 233 199 262 217C291 235 320 264 349 278.5C378 293 407 293 436.2 297.5C465.3 302 494.7 311 523.8 306.5C553 302 582 284 611 280.3C640 276.7 669 287.3 698 283.7C727 280 756 262 785.2 235.8C814.3 209.7 843.7 175.3 872.8 172.7C902 170 931 199 945.5 213.5L960 228L960 53L945.5 53C931 53 902 53 872.8 53.8C843.7 54.7 814.3 56.3 785.2 68C756 79.7 727 101.3 698 105C669 108.7 640 94.3 611 96.2C582 98 553 116 523.8 116.8C494.7 117.7 465.3 101.3 436.2 94.2C407 87 378 89 349 83.7C320 78.3 291 65.7 262 70.2C233 74.7 204 96.3 174.8 101.7C145.7 107 116.3 96 87.2 95C58 94 29 103 14.5 107.5L0 112Z',
        ];
        const wave3 = [
            'M0 222L14.5 220.3C29 218.7 58 215.3 87.2 226.2C116.3 237 145.7 262 174.8 264.7C204 267.3 233 247.7 262 237.8C291 228 320 228 349 233.3C378 238.7 407 249.3 436.2 255.7C465.3 262 494.7 264 523.8 261.3C553 258.7 582 251.3 611 243.2C640 235 669 226 698 224.2C727 222.3 756 227.7 785.2 238.5C814.3 249.3 843.7 265.7 872.8 269.3C902 273 931 264 945.5 259.5L960 255L960 188L945.5 191.7C931 195.3 902 202.7 872.8 196.3C843.7 190 814.3 170 785.2 155.5C756 141 727 132 698 138.3C669 144.7 640 166.3 611 177.2C582 188 553 188 523.8 194.3C494.7 200.7 465.3 213.3 436.2 211.5C407 209.7 378 193.3 349 178C320 162.7 291 148.3 262 157.3C233 166.3 204 198.7 174.8 197.8C145.7 197 116.3 163 87.2 155.8C58 148.7 29 168.3 14.5 178.2L0 188Z',
            'M0 298L14.5 294.3C29 290.7 58 283.3 87.2 268C116.3 252.7 145.7 229.3 174.8 246.5C204 263.7 233 321.3 262 342C291 362.7 320 346.3 349 338.2C378 330 407 330 436.2 312C465.3 294 494.7 258 523.8 247.3C553 236.7 582 251.3 611 258.7C640 266 669 266 698 275.8C727 285.7 756 305.3 785.2 308.8C814.3 312.3 843.7 299.7 872.8 288C902 276.3 931 265.7 945.5 260.3L960 255L960 193L945.5 198.5C931 204 902 215 872.8 221.3C843.7 227.7 814.3 229.3 785.2 228.3C756 227.3 727 223.7 698 214.7C669 205.7 640 191.3 611 186C582 180.7 553 184.3 523.8 197C494.7 209.7 465.3 231.3 436.2 247.5C407 263.7 378 274.3 349 285.2C320 296 291 307 262 284.5C233 262 204 206 174.8 186.2C145.7 166.3 116.3 182.7 87.2 198.8C58 215 29 231 14.5 239L0 247Z',
            'M0 249L14.5 250.8C29 252.7 58 256.3 87.2 262.7C116.3 269 145.7 278 174.8 267.2C204 256.3 233 225.7 262 215.8C291 206 320 217 349 221.5C378 226 407 224 436.2 233C465.3 242 494.7 262 523.8 259.3C553 256.7 582 231.3 611 231.3C640 231.3 669 256.7 698 263C727 269.3 756 256.7 785.2 251.2C814.3 245.7 843.7 247.3 872.8 242C902 236.7 931 224.3 945.5 218.2L960 212L960 156L945.5 160.5C931 165 902 174 872.8 181.2C843.7 188.3 814.3 193.7 785.2 199C756 204.3 727 209.7 698 204.2C669 198.7 640 182.3 611 179.7C582 177 553 188 523.8 186.3C494.7 184.7 465.3 170.3 436.2 163.2C407 156 378 156 349 155C320 154 291 152 262 160C233 168 204 186 174.8 191.5C145.7 197 116.3 190 87.2 182.8C58 175.7 29 168.3 14.5 164.7L0 161Z',
            'M0 411L14.5 378.7C29 346.3 58 281.7 87.2 263.7C116.3 245.7 145.7 274.3 174.8 285.2C204 296 233 289 262 300.8C291 312.7 320 343.3 349 359.5C378 375.7 407 377.3 436.2 375.5C465.3 373.7 494.7 368.3 523.8 360.2C553 352 582 341 611 349C640 357 669 384 698 386.8C727 389.7 756 368.3 785.2 340.5C814.3 312.7 843.7 278.3 872.8 272.8C902 267.3 931 290.7 945.5 302.3L960 314L960 226L945.5 211.5C931 197 902 168 872.8 170.7C843.7 173.3 814.3 207.7 785.2 233.8C756 260 727 278 698 281.7C669 285.3 640 274.7 611 278.3C582 282 553 300 523.8 304.5C494.7 309 465.3 300 436.2 295.5C407 291 378 291 349 276.5C320 262 291 233 262 215C233 197 204 190 174.8 186.5C145.7 183 116.3 183 87.2 206.3C58 229.7 29 276.3 14.5 299.7L0 323Z',
        ];
        const wave4 = [
            'M0 390L14.5 395.3C29 400.7 58 411.3 87.2 405.8C116.3 400.3 145.7 378.7 174.8 385C204 391.3 233 425.7 262 441C291 456.3 320 452.7 349 454.5C378 456.3 407 463.7 436.2 454.7C465.3 445.7 494.7 420.3 523.8 409.5C553 398.7 582 402.3 611 397C640 391.7 669 377.3 698 370.2C727 363 756 363 785.2 378.3C814.3 393.7 843.7 424.3 872.8 429.7C902 435 931 415 945.5 405L960 395L960 253L945.5 257.5C931 262 902 271 872.8 267.3C843.7 263.7 814.3 247.3 785.2 236.5C756 225.7 727 220.3 698 222.2C669 224 640 233 611 241.2C582 249.3 553 256.7 523.8 259.3C494.7 262 465.3 260 436.2 253.7C407 247.3 378 236.7 349 231.3C320 226 291 226 262 235.8C233 245.7 204 265.3 174.8 262.7C145.7 260 116.3 235 87.2 224.2C58 213.3 29 216.7 14.5 218.3L0 220Z',
            'M0 449L14.5 448.2C29 447.3 58 445.7 87.2 445.7C116.3 445.7 145.7 447.3 174.8 451.8C204 456.3 233 463.7 262 459.2C291 454.7 320 438.3 349 441.8C378 445.3 407 468.7 436.2 480.3C465.3 492 494.7 492 523.8 479.5C553 467 582 442 611 431.3C640 420.7 669 424.3 698 432.3C727 440.3 756 452.7 785.2 446.3C814.3 440 843.7 415 872.8 407.8C902 400.7 931 411.3 945.5 416.7L960 422L960 253L945.5 258.3C931 263.7 902 274.3 872.8 286C843.7 297.7 814.3 310.3 785.2 306.8C756 303.3 727 283.7 698 273.8C669 264 640 264 611 256.7C582 249.3 553 234.7 523.8 245.3C494.7 256 465.3 292 436.2 310C407 328 378 328 349 336.2C320 344.3 291 360.7 262 340C233 319.3 204 261.7 174.8 244.5C145.7 227.3 116.3 250.7 87.2 266C58 281.3 29 288.7 14.5 292.3L0 296Z',
            'M0 444L14.5 435.8C29 427.7 58 411.3 87.2 402.3C116.3 393.3 145.7 391.7 174.8 372.8C204 354 233 318 262 327.8C291 337.7 320 393.3 349 410.3C378 427.3 407 405.7 436.2 388.7C465.3 371.7 494.7 359.3 523.8 364.8C553 370.3 582 393.7 611 397.2C640 400.7 669 384.3 698 368.2C727 352 756 336 785.2 330.7C814.3 325.3 843.7 330.7 872.8 331.5C902 332.3 931 328.7 945.5 326.8L960 325L960 210L945.5 216.2C931 222.3 902 234.7 872.8 240C843.7 245.3 814.3 243.7 785.2 249.2C756 254.7 727 267.3 698 261C669 254.7 640 229.3 611 229.3C582 229.3 553 254.7 523.8 257.3C494.7 260 465.3 240 436.2 231C407 222 378 224 349 219.5C320 215 291 204 262 213.8C233 223.7 204 254.3 174.8 265.2C145.7 276 116.3 267 87.2 260.7C58 254.3 29 250.7 14.5 248.8L0 247Z',
            'M0 460L14.5 434.8C29 409.7 58 359.3 87.2 339.5C116.3 319.7 145.7 330.3 174.8 334.8C204 339.3 233 337.7 262 355.7C291 373.7 320 411.3 349 432C378 452.7 407 456.3 436.2 456.3C465.3 456.3 494.7 452.7 523.8 446.3C553 440 582 431 611 431C640 431 669 440 698 437.3C727 434.7 756 420.3 785.2 397.8C814.3 375.3 843.7 344.7 872.8 342.8C902 341 931 368 945.5 381.5L960 395L960 312L945.5 300.3C931 288.7 902 265.3 872.8 270.8C843.7 276.3 814.3 310.7 785.2 338.5C756 366.3 727 387.7 698 384.8C669 382 640 355 611 347C582 339 553 350 523.8 358.2C494.7 366.3 465.3 371.7 436.2 373.5C407 375.3 378 373.7 349 357.5C320 341.3 291 310.7 262 298.8C233 287 204 294 174.8 283.2C145.7 272.3 116.3 243.7 87.2 261.7C58 279.7 29 344.3 14.5 376.7L0 409Z',
        ];
        const wave5 = [
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 393L945.5 403C931 413 902 433 872.8 427.7C843.7 422.3 814.3 391.7 785.2 376.3C756 361 727 361 698 368.2C669 375.3 640 389.7 611 395C582 400.3 553 396.7 523.8 407.5C494.7 418.3 465.3 443.7 436.2 452.7C407 461.7 378 454.3 349 452.5C320 450.7 291 454.3 262 439C233 423.7 204 389.3 174.8 383C145.7 376.7 116.3 398.3 87.2 403.8C58 409.3 29 398.7 14.5 393.3L0 388Z',
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 420L945.5 414.7C931 409.3 902 398.7 872.8 405.8C843.7 413 814.3 438 785.2 444.3C756 450.7 727 438.3 698 430.3C669 422.3 640 418.7 611 429.3C582 440 553 465 523.8 477.5C494.7 490 465.3 490 436.2 478.3C407 466.7 378 443.3 349 439.8C320 436.3 291 452.7 262 457.2C233 461.7 204 454.3 174.8 449.8C145.7 445.3 116.3 443.7 87.2 443.7C58 443.7 29 445.3 14.5 446.2L0 447Z',
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 323L945.5 324.8C931 326.7 902 330.3 872.8 329.5C843.7 328.7 814.3 323.3 785.2 328.7C756 334 727 350 698 366.2C669 382.3 640 398.7 611 395.2C582 391.7 553 368.3 523.8 362.8C494.7 357.3 465.3 369.7 436.2 386.7C407 403.7 378 425.3 349 408.3C320 391.3 291 335.7 262 325.8C233 316 204 352 174.8 370.8C145.7 389.7 116.3 391.3 87.2 400.3C58 409.3 29 425.7 14.5 433.8L0 442Z',
            'M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 393L945.5 379.5C931 366 902 339 872.8 340.8C843.7 342.7 814.3 373.3 785.2 395.8C756 418.3 727 432.7 698 435.3C669 438 640 429 611 429C582 429 553 438 523.8 444.3C494.7 450.7 465.3 454.3 436.2 454.3C407 454.3 378 450.7 349 430C320 409.3 291 371.7 262 353.7C233 335.7 204 337.3 174.8 332.8C145.7 328.3 116.3 317.7 87.2 337.5C58 357.3 29 407.7 14.5 432.8L0 458Z',
        ];
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.team-wave1',
            d: [
                {
                    value: [wave1[0], wave1[1]],
                },
                {
                    value: wave1[2],
                },
                {
                    value: wave1[3],
                },
                {
                    value: wave1[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.team-wave2',
            d: [
                {
                    value: [wave2[0], wave2[1]],
                },
                {
                    value: wave2[2],
                },
                {
                    value: wave2[3],
                },
                {
                    value: wave2[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.team-wave3',
            d: [
                {
                    value: [wave3[0], wave3[1]],
                },
                {
                    value: wave3[2],
                },
                {
                    value: wave3[3],
                },
                {
                    value: wave3[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.team-wave4',
            d: [
                {
                    value: [wave4[0], wave4[1]],
                },
                {
                    value: wave4[2],
                },
                {
                    value: wave4[3],
                },
                {
                    value: wave4[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
        (0,animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__.default)({
            targets: '.team-wave5',
            d: [
                {
                    value: [wave5[0], wave5[1]],
                },
                {
                    value: wave5[2],
                },
                {
                    value: wave5[3],
                },
                {
                    value: wave5[0],
                },
            ],
            easing: 'linear',
            duration: 30000,
            loop: true,
        });
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 75, vars: 0, consts: [["id", "team", 1, "section"], ["viewBox", "0 0 960 540", "height", "100%", "width", "100%", "preserveAspectRatio", "none", "fill-rule", "evenodd", "clip-rule", "evenodd", 2, "position", "absolute", "z-index", "1"], ["d", "M0 147L14.5 137C29 127 58 107 87.2 103.3C116.3 99.7 145.7 112.3 174.8 111.5C204 110.7 233 96.3 262 96.3C291 96.3 320 110.7 349 118.8C378 127 407 129 436.2 130.8C465.3 132.7 494.7 134.3 523.8 127C553 119.7 582 103.3 611 89C640 74.7 669 62.3 698 60.7C727 59 756 68 785.2 79.7C814.3 91.3 843.7 105.7 872.8 108.3C902 111 931 102 945.5 97.5L960 93L960 0L945.5 0C931 0 902 0 872.8 0C843.7 0 814.3 0 785.2 0C756 0 727 0 698 0C669 0 640 0 611 0C582 0 553 0 523.8 0C494.7 0 465.3 0 436.2 0C407 0 378 0 349 0C320 0 291 0 262 0C233 0 204 0 174.8 0C145.7 0 116.3 0 87.2 0C58 0 29 0 14.5 0L0 0Z", "fill", "#ffffff", 1, "team-wave1"], ["d", "M0 190L14.5 180.2C29 170.3 58 150.7 87.2 157.8C116.3 165 145.7 199 174.8 199.8C204 200.7 233 168.3 262 159.3C291 150.3 320 164.7 349 180C378 195.3 407 211.7 436.2 213.5C465.3 215.3 494.7 202.7 523.8 196.3C553 190 582 190 611 179.2C640 168.3 669 146.7 698 140.3C727 134 756 143 785.2 157.5C814.3 172 843.7 192 872.8 198.3C902 204.7 931 197.3 945.5 193.7L960 190L960 91L945.5 95.5C931 100 902 109 872.8 106.3C843.7 103.7 814.3 89.3 785.2 77.7C756 66 727 57 698 58.7C669 60.3 640 72.7 611 87C582 101.3 553 117.7 523.8 125C494.7 132.3 465.3 130.7 436.2 128.8C407 127 378 125 349 116.8C320 108.7 291 94.3 262 94.3C233 94.3 204 108.7 174.8 109.5C145.7 110.3 116.3 97.7 87.2 101.3C58 105 29 125 14.5 135L0 145Z", "fill", "#daebf8", 1, "team-wave2"], ["d", "M0 222L14.5 220.3C29 218.7 58 215.3 87.2 226.2C116.3 237 145.7 262 174.8 264.7C204 267.3 233 247.7 262 237.8C291 228 320 228 349 233.3C378 238.7 407 249.3 436.2 255.7C465.3 262 494.7 264 523.8 261.3C553 258.7 582 251.3 611 243.2C640 235 669 226 698 224.2C727 222.3 756 227.7 785.2 238.5C814.3 249.3 843.7 265.7 872.8 269.3C902 273 931 264 945.5 259.5L960 255L960 188L945.5 191.7C931 195.3 902 202.7 872.8 196.3C843.7 190 814.3 170 785.2 155.5C756 141 727 132 698 138.3C669 144.7 640 166.3 611 177.2C582 188 553 188 523.8 194.3C494.7 200.7 465.3 213.3 436.2 211.5C407 209.7 378 193.3 349 178C320 162.7 291 148.3 262 157.3C233 166.3 204 198.7 174.8 197.8C145.7 197 116.3 163 87.2 155.8C58 148.7 29 168.3 14.5 178.2L0 188Z", "fill", "#b4d7f1", 1, "team-wave3"], ["d", "M0 390L14.5 395.3C29 400.7 58 411.3 87.2 405.8C116.3 400.3 145.7 378.7 174.8 385C204 391.3 233 425.7 262 441C291 456.3 320 452.7 349 454.5C378 456.3 407 463.7 436.2 454.7C465.3 445.7 494.7 420.3 523.8 409.5C553 398.7 582 402.3 611 397C640 391.7 669 377.3 698 370.2C727 363 756 363 785.2 378.3C814.3 393.7 843.7 424.3 872.8 429.7C902 435 931 415 945.5 405L960 395L960 253L945.5 257.5C931 262 902 271 872.8 267.3C843.7 263.7 814.3 247.3 785.2 236.5C756 225.7 727 220.3 698 222.2C669 224 640 233 611 241.2C582 249.3 553 256.7 523.8 259.3C494.7 262 465.3 260 436.2 253.7C407 247.3 378 236.7 349 231.3C320 226 291 226 262 235.8C233 245.7 204 265.3 174.8 262.7C145.7 260 116.3 235 87.2 224.2C58 213.3 29 216.7 14.5 218.3L0 220Z", "fill", "#8bc4ea", 1, "team-wave4"], ["d", "M0 541L14.5 541C29 541 58 541 87.2 541C116.3 541 145.7 541 174.8 541C204 541 233 541 262 541C291 541 320 541 349 541C378 541 407 541 436.2 541C465.3 541 494.7 541 523.8 541C553 541 582 541 611 541C640 541 669 541 698 541C727 541 756 541 785.2 541C814.3 541 843.7 541 872.8 541C902 541 931 541 945.5 541L960 541L960 393L945.5 403C931 413 902 433 872.8 427.7C843.7 422.3 814.3 391.7 785.2 376.3C756 361 727 361 698 368.2C669 375.3 640 389.7 611 395C582 400.3 553 396.7 523.8 407.5C494.7 418.3 465.3 443.7 436.2 452.7C407 461.7 378 454.3 349 452.5C320 450.7 291 454.3 262 439C233 423.7 204 389.3 174.8 383C145.7 376.7 116.3 398.3 87.2 403.8C58 409.3 29 398.7 14.5 393.3L0 388Z", "fill", "#59b1e3", 1, "team-wave5"], [1, "container", 2, "position", "relative", "z-index", "2"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-12"], [1, "ti-user", "title-icon", "text-muted"], [1, "title"], [1, "fw-bold"], [1, "row", "justify-content-md-center", "mt-5"], [1, "col-lg-3"], [1, "text-center", "bg-white", "team-box", "mt-3", "active"], [1, ""], ["src", "assets/images/fennie.jpg", "alt", "", "width", "80px", 1, "img-fluid", "rounded-circle", "mx-auto", "d-block"], [1, "team-name"], [1, "fw-bold", "mb-0", "mt-4"], [1, "text-muted", "mt-4"], [1, "list-inline", "team-social", "mt-4", "mb-0"], [1, "list-inline-item"], ["href", "#"], [1, "ti-linkedin"], ["src", "assets/images/alexandra.jpg", "width", "80px", "alt", "", 1, "img-fluid", "rounded-circle", "mx-auto", "d-block"], [1, "socials"], ["src", "assets/images/naila.jpg", "width", "80px", "alt", "", 1, "img-fluid", "rounded-circle", "mx-auto", "d-block"], ["src", "assets/images/vlad.jpg", "width", "80px", "alt", "", 1, "img-fluid", "rounded-circle", "mx-auto", "d-block"], [1, "ti-github"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "@Fennie van der Graaf");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "MSc Biomedical Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "@Alexandra Matei");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "MSc Chemistry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "@Naila Loudini");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "MSc Medicine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "@Vlad Iftime");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "MSc Artificial Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.7bb5516cf14d146d11d1.js.map