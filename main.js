(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sponsers/sponsers.component */ "./src/app/sponsers/sponsers.component.ts");









const routes = [
    // {path:'', redirectTo: '/home', pathMatch: 'full'},
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'sponsers', component: _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_6__["SponsersComponent"] },
    { path: 'media', component: _media_media_component__WEBPACK_IMPORTED_MODULE_4__["MediaComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _media_media_component__WEBPACK_IMPORTED_MODULE_4__["MediaComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");






class AppComponent {
    constructor() {
        this.title = 'myapp';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousal/carousal.component */ "./src/app/carousal/carousal.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sponsers/sponsers.component */ "./src/app/sponsers/sponsers.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _counter2_counter2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./counter2/counter2.component */ "./src/app/counter2/counter2.component.ts");
/* harmony import */ var _fastandup_fastandup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fastandup/fastandup.component */ "./src/app/fastandup/fastandup.component.ts");
/* harmony import */ var _mediacomponent_mediacomponent_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mediacomponent/mediacomponent.component */ "./src/app/mediacomponent/mediacomponent.component.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_8__["CarousalComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_10__["SponsersComponent"],
        _media_media_component__WEBPACK_IMPORTED_MODULE_11__["MediaComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
        _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_13__["TestimonialComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _counter_counter_component__WEBPACK_IMPORTED_MODULE_15__["CounterComponent"],
        _counter2_counter2_component__WEBPACK_IMPORTED_MODULE_16__["Counter2Component"],
        _fastandup_fastandup_component__WEBPACK_IMPORTED_MODULE_17__["FastandupComponent"],
        _mediacomponent_mediacomponent_component__WEBPACK_IMPORTED_MODULE_18__["MediacomponentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_8__["CarousalComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                    _sponsers_sponsers_component__WEBPACK_IMPORTED_MODULE_10__["SponsersComponent"],
                    _media_media_component__WEBPACK_IMPORTED_MODULE_11__["MediaComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                    _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_13__["TestimonialComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                    _counter_counter_component__WEBPACK_IMPORTED_MODULE_15__["CounterComponent"],
                    _counter2_counter2_component__WEBPACK_IMPORTED_MODULE_16__["Counter2Component"],
                    _fastandup_fastandup_component__WEBPACK_IMPORTED_MODULE_17__["FastandupComponent"],
                    _mediacomponent_mediacomponent_component__WEBPACK_IMPORTED_MODULE_18__["MediacomponentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/carousal/carousal.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousal/carousal.component.ts ***!
  \************************************************/
/*! exports provided: CarousalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarousalComponent", function() { return CarousalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CarousalComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarousalComponent.ɵfac = function CarousalComponent_Factory(t) { return new (t || CarousalComponent)(); };
CarousalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarousalComponent, selectors: [["app-carousal"]], decls: 36, vars: 0, consts: [["id", "carousel-example-2", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-indicators"], ["data-target", "#carousel-example-2", "data-slide-to", "0", 1, "active"], ["data-target", "#carousel-example-2", "data-slide-to", "1"], ["data-target", "#carousel-example-2", "data-slide-to", "2"], ["data-target", "#carousel-example-2", "data-slide-to", "3"], ["data-target", "#carousel-example-2", "data-slide-to", "4"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active"], [1, "view"], ["src", "../../assets/images/img1.jpg", "alt", "First slide", 1, "d-block", "adjustPicture"], [1, "mask", "rgba-black-light"], [1, "carousel-item"], ["src", "../../assets/images/img2.jpg", "alt", "Second slide", 1, "d-block", "adjustPicture"], ["src", "../../assets/images/img3.jpg", "alt", "Third slide", 1, "d-block", "adjustPicture"], ["src", "../../assets/images/img4.jpg", "alt", "Fourth slide", 1, "d-block", "adjustPicture"], ["src", "../../assets/images/img5.jpg", "alt", "Fifth slide", 1, "d-block", "adjustPicture"], ["href", "#carousel-example-2", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carousel-example-2", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function CarousalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".carousel[_ngcontent-%COMP%]   .adjustPicture[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzYWwvY2Fyb3VzYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9jYXJvdXNhbC9jYXJvdXNhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbHtcclxuICAgIC5hZGp1c3RQaWN0dXJle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarousalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousal',
                templateUrl: './carousal.component.html',
                styleUrls: ['./carousal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 40, vars: 0, consts: [[1, "p-0", 2, "background-image", "url('https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(97).jpg')", "width", "100%", "height", "100%vh"], [1, "rgba-black-strong", "rounded", "p-5"], [1, "text-center", "font-weight-bold", "text-white", "mt-3", "mb-5", "pt-5"], ["action", "", 1, "mx-md-5"], [1, "row"], [1, "col-md-6", "mb-4"], [1, "card"], [1, "card-body", "px-4"], [1, "md-form", "md-outline", "mt-0"], ["type", "text", "id", "name", 1, "form-control"], ["for", "name"], [1, "md-form", "md-outline"], ["type", "text", "id", "email", 1, "form-control"], ["for", "email"], ["id", "message", "rows", "3", 1, "md-textarea", "form-control"], ["for", "message"], ["type", "submit", 1, "btn", "btn-primary", "btn-md", "btn-block", "ml-0", "mb-0"], [1, "col-md-5", "offset-md-1", "mt-md-4", "mb-4", "white-text"], [1, "font-weight-bold"], [1, "mb-0"], [1, "mb-4", "pb-2"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit inquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1632 Main Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "New York, 94126");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+ 01 234 567 89");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "info@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



;
class CounterComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            var flag = true;
            jquery__WEBPACK_IMPORTED_MODULE_1__(window).scroll(function () {
                var hT = jquery__WEBPACK_IMPORTED_MODULE_1__('#scroll-to').offset().top, hH = jquery__WEBPACK_IMPORTED_MODULE_1__('#scroll-to').outerHeight(), wH = jquery__WEBPACK_IMPORTED_MODULE_1__(window).height(), wS = jquery__WEBPACK_IMPORTED_MODULE_1__(this).scrollTop();
                if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH) && flag == true) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
                        flag = false;
                        jquery__WEBPACK_IMPORTED_MODULE_1__('.counter').each(function () {
                            jquery__WEBPACK_IMPORTED_MODULE_1__(this).prop('Counter', 0).animate({
                                Counter: jquery__WEBPACK_IMPORTED_MODULE_1__(this).text()
                            }, {
                                duration: 5000,
                                easing: 'swing',
                                step: function (now) {
                                    jquery__WEBPACK_IMPORTED_MODULE_1__(this).text(Math.ceil(now));
                                }
                            });
                        });
                    });
                }
            });
        });
    }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); };
CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["app-counter"]], decls: 33, vars: 0, consts: [[1, "counterBackground", "text-center"], [1, "font-weight-bold", "decideHeadingFont"], [1, "container", "counterItems"], ["id", "scroll-to", 1, "row"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-in-out", "data-aos-delay", "500", 1, "four", "col-md-3"], [1, "counter-box", "colored"], [1, "fas", "fa-medal", "iconFont"], [1, "counter"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-in-out", "data-aos-delay", "1000", 1, "four", "col-md-3"], [1, "fas", "fa-trophy", "iconFont"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-in-out", "data-aos-delay", "1500", 1, "four", "col-md-3"], [1, "fas", "fa-award", "iconFont"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-in-out", "data-aos-delay", "2000", 1, "four", "col-md-3"], [1, "fas", "fa-bullseye", "iconFont"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Accolades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Medals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Trophies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".counterBackground[_ngcontent-%COMP%] {\n  background-color: black;\n  padding-top: 100px;\n  padding-bottom: 150px;\n}\n.counterBackground[_ngcontent-%COMP%]   .decideHeadingFont[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: white;\n}\n@media only screen and (max-width: 768px) {\n  .counterBackground[_ngcontent-%COMP%]   .decideHeadingFont[_ngcontent-%COMP%] {\n    font-size: 27px;\n    color: white;\n  }\n}\n.counterBackground[_ngcontent-%COMP%]   .counterItems[_ngcontent-%COMP%] {\n  padding-top: 80px;\n}\n.counterBackground[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%] {\n  display: block;\n  background: #f6f6f6;\n  padding: 40px 20px 37px;\n  text-align: center;\n}\n.counterBackground[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  padding: 0;\n  color: #909090;\n  font-size: 18px;\n  font-weight: 500;\n}\n.counterBackground[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .counter-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin: 0 0 15px;\n  color: #d2d2d2;\n}\n.counterBackground[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 32px;\n  font-weight: 700;\n  color: #666;\n  line-height: 28px;\n}\n.counterBackground[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .counter-box.colored[_ngcontent-%COMP%] {\n  background: black;\n}\n.counterBackground[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .counter-box.colored[_ngcontent-%COMP%]   .iconFont[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n.counterBackground[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .counter-box.colored[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .counterBackground[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .counter-box.colored[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .counterBackground[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .counter-box.colored[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBRVI7QUFBUTtFQUpKO0lBS1EsZUFBQTtJQUNBLFlBQUE7RUFHVjtBQUNGO0FBREk7RUFDSSxpQkFBQTtBQUdSO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUtBO0VBQ0ksaUJBQUE7QUFISjtBQUlJO0VBQ0ksZUFBQTtBQUZSO0FBTUE7OztFQUdJLFdBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudGVyQmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG4gICAgLmRlY2lkZUhlYWRpbmdGb250e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY291bnRlckl0ZW1ze1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4uY29udGFpbmVyIHtcclxuXHJcbi5jb3VudGVyLWJveCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHggMzdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uY291bnRlci1ib3ggcCB7XHJcbiAgICBtYXJnaW46IDVweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICM5MDkwOTA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwXHJcbn1cclxuXHJcbi5jb3VudGVyLWJveCBpIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBjb2xvcjogI2QyZDJkMlxyXG59XHJcblxyXG4uY291bnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4XHJcbn1cclxuXHJcbi5jb3VudGVyLWJveC5jb2xvcmVkIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgLmljb25Gb250e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvdW50ZXItYm94LmNvbG9yZWQgcCxcclxuLmNvdW50ZXItYm94LmNvbG9yZWQgaSxcclxuLmNvdW50ZXItYm94LmNvbG9yZWQgLmNvdW50ZXIge1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG59XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counter',
                templateUrl: './counter.component.html',
                styleUrls: ['./counter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/counter2/counter2.component.ts":
/*!************************************************!*\
  !*** ./src/app/counter2/counter2.component.ts ***!
  \************************************************/
/*! exports provided: Counter2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counter2Component", function() { return Counter2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Counter2Component {
    constructor() {
    }
    ngOnInit() {
    }
}
Counter2Component.ɵfac = function Counter2Component_Factory(t) { return new (t || Counter2Component)(); };
Counter2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Counter2Component, selectors: [["app-counter2"]], decls: 29, vars: 0, consts: [[1, "text-center", "py-4"], [1, "row"], [1, "col-md-6", "mb-4"], [1, "card", "default-color-dark"], [1, "view"], ["src", "https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg", "alt", "photo", 1, "card-img-top"], ["href", "#"], [1, "mask", "rgba-white-slight"], [1, "card-body", "text-center"], [1, "card-title", "white-text"], [1, "card-text", "white-text"], ["href", "#", 1, "btn", "btn-outline-white", "btn-md", "waves-effect"], [1, "card", "primary-color-dark"], ["src", "https://mdbootstrap.com/img/Photos/Slides/img%20(122).jpg", "alt", "photo", 1, "card-img-top"]], template: function Counter2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Two equal columns layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "News title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "News title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".odometer[_ngcontent-%COMP%] {\n  font-size: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRlcjIvY291bnRlcjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY291bnRlcjIvY291bnRlcjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2RvbWV0ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Counter2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counter2',
                templateUrl: './counter2.component.html',
                styleUrls: ['./counter2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/fastandup/fastandup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fastandup/fastandup.component.ts ***!
  \**************************************************/
/*! exports provided: FastandupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastandupComponent", function() { return FastandupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FastandupComponent {
    constructor() { }
    goToFastAndUp() {
        window.open("https://www.fastandup.in/", "_blank");
    }
    ngOnInit() {
    }
}
FastandupComponent.ɵfac = function FastandupComponent_Factory(t) { return new (t || FastandupComponent)(); };
FastandupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FastandupComponent, selectors: [["app-fastandup"]], decls: 14, vars: 0, consts: [[1, "container", "adjustBackground"], [1, "row"], [1, "col-xs-6", "sponserImage"], ["src", "../../assets/images/fastandup_logo.jpg", "alt", "fastanduplogo", 1, "alignImage"], [1, "sponserText"], [1, "colororange"], [1, "colorblue"], [1, "shopButton"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-rounded", "waves-effect", 3, "click"], [1, "col-xs-6", "subjectImage", "float-right"], ["src", "../../assets/images/fastandup_subject.jpg", "alt", ""]], template: function FastandupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#Sponsored");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Athlete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FastandupComponent_Template_button_click_10_listener() { return ctx.goToFastAndUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".adjustBackground[_ngcontent-%COMP%] {\n  padding: 50px 30px;\n}\n.adjustBackground[_ngcontent-%COMP%]   .sponserImage[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n@media only screen and (min-width: 768px) {\n  .adjustBackground[_ngcontent-%COMP%]   .sponserImage[_ngcontent-%COMP%] {\n    padding-top: 70px;\n    padding-left: 140px;\n    padding-right: 75px;\n  }\n}\n.adjustBackground[_ngcontent-%COMP%]   .sponserImage[_ngcontent-%COMP%]   .btn-rounded[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.adjustBackground[_ngcontent-%COMP%]   .sponserImage[_ngcontent-%COMP%]   .sponserText[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n.adjustBackground[_ngcontent-%COMP%]   .sponserImage[_ngcontent-%COMP%]   .shopButton[_ngcontent-%COMP%] {\n  padding-left: 150px;\n  padding-top: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .adjustBackground[_ngcontent-%COMP%]   .sponserImage[_ngcontent-%COMP%]   .shopButton[_ngcontent-%COMP%] {\n    padding-left: 125px;\n    padding-bottom: 10px;\n  }\n}\n.adjustBackground[_ngcontent-%COMP%]   .sponserImage[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%] {\n  color: #0364a7;\n}\n.adjustBackground[_ngcontent-%COMP%]   .sponserImage[_ngcontent-%COMP%]   .colororange[_ngcontent-%COMP%] {\n  color: #f88321;\n}\n.adjustBackground[_ngcontent-%COMP%]   .sponserImage[_ngcontent-%COMP%]   .colorblue[_ngcontent-%COMP%] {\n  color: #0364a7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFzdGFuZHVwL2Zhc3RhbmR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFFSTtFQUVJLGVBQUE7QUFEUjtBQUVRO0VBSEo7SUFJWSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFDZDtBQUNGO0FBQVE7RUFDSSxtQkFBQTtBQUVaO0FBQVE7RUFDSSxrQkFBQTtBQUVaO0FBQVE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FBRVo7QUFEWTtFQUhKO0lBSVEsbUJBQUE7SUFDQSxvQkFBQTtFQUlkO0FBQ0Y7QUFGUTtFQUNJLGNBQUE7QUFJWjtBQURRO0VBQ0ksY0FBQTtBQUdaO0FBQVE7RUFDSSxjQUFBO0FBRVoiLCJmaWxlIjoic3JjL2FwcC9mYXN0YW5kdXAvZmFzdGFuZHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkanVzdEJhY2tncm91bmR7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XHJcbiAgICBcclxuXHJcbiAgICAuc3BvbnNlckltYWdle1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLXJvdW5kZWR7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zcG9uc2VyVGV4dHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2hvcEJ1dHRvbntcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tb3V0bGluZS1wcmltYXJ5e1xyXG4gICAgICAgICAgICBjb2xvcjogIzAzNjRhNztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbG9yb3Jhbmdle1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y4ODMyMTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xvcmJsdWV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDM2NGE3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FastandupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fastandup',
                templateUrl: './fastandup.component.html',
                styleUrls: ['./fastandup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    goToFacebook() {
        window.open("https://www.facebook.com/parthjagtap09", "_blank");
    }
    goToTwitter() {
        window.open("https://twitter.com/parthjagtap09?lang=en", "_blank");
    }
    goToInsta() {
        window.open("https://www.instagram.com/parthjagtap09/?hl=en", "_blank");
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 22, vars: 0, consts: [[1, "page-footer", "font-small", "pt-4", "setBackground"], [1, "alignText"], [1, "list-unstyled", "list-inline", "text-center", "socialButtons"], [1, "list-inline-item"], ["type", "button", 1, "btn", "btn-social-icon", "btn-facebook", "btn-rounded", 3, "click"], [1, "fab", "fa-facebook-f"], ["type", "button", 1, "btn", "btn-social-icon", "btn-twitter", "btn-rounded", 3, "click"], [1, "fab", "fa-twitter"], ["type", "button", 1, "btn", "btn-social-icon", "btn-instagram", "btn-rounded", 3, "click"], [1, "fab", "fa-instagram"], [1, "footer-copyright", "text-center", "setBackground"], ["href", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Connect with me on social media, to track latest updates about roller hockey, and ice skating.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_6_listener() { return ctx.goToFacebook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_9_listener() { return ctx.goToTwitter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_12_listener() { return ctx.goToInsta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Parth Jagtap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Developed by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Kaustubh Aphale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".setBackground[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.setBackground[_ngcontent-%COMP%]   .alignText[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 50px 10px 50px;\n  font-size: 18px;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%] {\n  padding-top: 18px;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn.btn-social-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  padding: 0;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn.btn-rounded[_ngcontent-%COMP%] {\n  border-radius: 50px;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-facebook[_ngcontent-%COMP%] {\n  border: 1px solid #3b579d;\n  color: #3b579d;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-facebook[_ngcontent-%COMP%]:hover {\n  background: #3b579d;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-youtube[_ngcontent-%COMP%] {\n  border: 1px solid #e52d27;\n  color: #e52d27;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-twitter[_ngcontent-%COMP%] {\n  border: 1px solid #2caae1;\n  color: #2caae1;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-dribbble[_ngcontent-%COMP%] {\n  border: 1px solid #ea4c89;\n  color: #ea4c89;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-linkedin[_ngcontent-%COMP%] {\n  border: 1px solid #0177b5;\n  color: #0177b5;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-instagram[_ngcontent-%COMP%] {\n  border: 1px solid #dc4a38;\n  color: #dc4a38;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-twitter[_ngcontent-%COMP%]:hover {\n  background: #2caae1;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-linkedin[_ngcontent-%COMP%]:hover {\n  background: #0177b5;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-youtube[_ngcontent-%COMP%]:hover {\n  background: #e52d27;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-outline-instagram[_ngcontent-%COMP%]:hover {\n  background: #e52d27;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-facebook[_ngcontent-%COMP%] {\n  background: #3b579d;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-youtube[_ngcontent-%COMP%] {\n  background: #e52d27;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-twitter[_ngcontent-%COMP%] {\n  background: #2caae1;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-dribbble[_ngcontent-%COMP%] {\n  background: #ea4c89;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-linkedin[_ngcontent-%COMP%] {\n  background: #0177b5;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-instagram[_ngcontent-%COMP%] {\n  background: #dc4a38;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-facebook[_ngcontent-%COMP%]:hover, .setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-facebook[_ngcontent-%COMP%]:focus {\n  background: #2d4278;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-youtube[_ngcontent-%COMP%]:hover, .setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-youtube[_ngcontent-%COMP%]:focus {\n  background: #c21d17;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-twitter[_ngcontent-%COMP%]:hover, .setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-twitter[_ngcontent-%COMP%]:focus {\n  background: #1b8dbf;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-dribbble[_ngcontent-%COMP%]:hover, .setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-dribbble[_ngcontent-%COMP%]:focus {\n  background: #e51e6b;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-linkedin[_ngcontent-%COMP%]:hover, .setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-linkedin[_ngcontent-%COMP%]:focus {\n  background: #015682;\n  color: #ffffff;\n}\n.setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-instagram[_ngcontent-%COMP%]:hover, .setBackground[_ngcontent-%COMP%]   .socialButtons[_ngcontent-%COMP%]   .btn-instagram[_ngcontent-%COMP%]:focus {\n  background: #bf3322;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBRVI7QUFBQTtFQUNJLGlCQUFBO0FBRUo7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUVKO0FBRUE7RUFDSSxtQkFBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBRko7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFKSjtBQU9BO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBTEo7QUFRQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQU5KO0FBU0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFQSjtBQVVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBUko7QUFXQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQVRKO0FBWUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFWSjtBQWFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBWEo7QUFjQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQVpKO0FBZUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFiSjtBQWdCQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQWRKO0FBaUJBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBZko7QUFrQkE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFoQko7QUFtQkE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFqQko7QUFvQkE7O0VBRUksbUJBQUE7RUFDQSxjQUFBO0FBbEJKO0FBcUJBOztFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQW5CSjtBQXNCQTs7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUFwQko7QUF1QkE7O0VBRUksbUJBQUE7RUFDQSxjQUFBO0FBckJKO0FBd0JBOztFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQXRCSjtBQXlCQTs7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUF2QkoiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldEJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIC5hbGlnblRleHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6MTBweCA1MHB4IDEwcHggNTBweDsgXHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4uc29jaWFsQnV0dG9uc3tcclxuICAgIHBhZGRpbmctdG9wOjE4cHg7XHJcblxyXG4uYnRuLmJ0bi1zb2NpYWwtaWNvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxuXHJcbi5idG4uYnRuLXJvdW5kZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweFxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZmFjZWJvb2sge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNiNTc5ZDtcclxuICAgIGNvbG9yOiAjM2I1NzlkXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1mYWNlYm9vazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2I1NzlkO1xyXG4gICAgY29sb3I6ICNmZmZmZmZcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXlvdXR1YmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1MmQyNztcclxuICAgIGNvbG9yOiAjZTUyZDI3XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS10d2l0dGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyY2FhZTE7XHJcbiAgICBjb2xvcjogIzJjYWFlMVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZHJpYmJibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhNGM4OTtcclxuICAgIGNvbG9yOiAjZWE0Yzg5XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saW5rZWRpbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDE3N2I1O1xyXG4gICAgY29sb3I6ICMwMTc3YjVcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluc3RhZ3JhbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGM0YTM4O1xyXG4gICAgY29sb3I6ICNkYzRhMzhcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXR3aXR0ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzJjYWFlMTtcclxuICAgIGNvbG9yOiAjZmZmZmZmXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saW5rZWRpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDE3N2I1O1xyXG4gICAgY29sb3I6ICNmZmZmZmZcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXlvdXR1YmU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U1MmQyNztcclxuICAgIGNvbG9yOiAjZmZmZmZmXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1pbnN0YWdyYW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U1MmQyNztcclxuICAgIGNvbG9yOiAjZmZmZmZmXHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTc5ZDtcclxuICAgIGNvbG9yOiAjZmZmZmZmXHJcbn1cclxuXHJcbi5idG4teW91dHViZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTUyZDI3O1xyXG4gICAgY29sb3I6ICNmZmZmZmZcclxufVxyXG5cclxuLmJ0bi10d2l0dGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyY2FhZTE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG59XHJcblxyXG4uYnRuLWRyaWJiYmxlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlYTRjODk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG59XHJcblxyXG4uYnRuLWxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMTc3YjU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG59XHJcblxyXG4uYnRuLWluc3RhZ3JhbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGM0YTM4O1xyXG4gICAgY29sb3I6ICNmZmZmZmZcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vazpob3ZlcixcclxuLmJ0bi1mYWNlYm9vazpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmQ0Mjc4O1xyXG4gICAgY29sb3I6ICNmZmZmZmZcclxufVxyXG5cclxuLmJ0bi15b3V0dWJlOmhvdmVyLFxyXG4uYnRuLXlvdXR1YmU6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogI2MyMWQxNztcclxuICAgIGNvbG9yOiAjZmZmZmZmXHJcbn1cclxuXHJcbi5idG4tdHdpdHRlcjpob3ZlcixcclxuLmJ0bi10d2l0dGVyOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICMxYjhkYmY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG59XHJcblxyXG4uYnRuLWRyaWJiYmxlOmhvdmVyLFxyXG4uYnRuLWRyaWJiYmxlOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNTFlNmI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG59XHJcblxyXG4uYnRuLWxpbmtlZGluOmhvdmVyLFxyXG4uYnRuLWxpbmtlZGluOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMTU2ODI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG59XHJcblxyXG4uYnRuLWluc3RhZ3JhbTpob3ZlcixcclxuLmJ0bi1pbnN0YWdyYW06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogI2JmMzMyMjtcclxuICAgIGNvbG9yOiAjZmZmZmZmXHJcbn1cclxufVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousal/carousal.component */ "./src/app/carousal/carousal.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fastandup_fastandup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fastandup/fastandup.component */ "./src/app/fastandup/fastandup.component.ts");
/* harmony import */ var _mediacomponent_mediacomponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mediacomponent/mediacomponent.component */ "./src/app/mediacomponent/mediacomponent.component.ts");







class HomeComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 47, vars: 0, consts: [[2, "scroll-behavior", "smooth", "overflow", "hidden"], [1, "carousalEffects", "container"], ["data-aos", "fade-down", "data-aos-duration", "500", "data-aos-easing", "ease-in-out", "id", "aboutMe"], [1, "font-weight-bold", "text-center", "my-5", "decideHeadingFont"], [1, "lead", "grey-text", "text-center", "w-responsive", "mx-auto", "mb-5", "decideTextFont"], [1, "row"], ["data-aos", "fade-right", "data-aos-duration", "1000", "data-aos-easing", "ease-in-out", 1, "col-lg-5", "text-center", "text-lg-left", 2, "padding-bottom", "20px"], ["src", "../../assets/images/portrait.jpg", 1, "img-fluid"], [1, "col-lg-7"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-easing", "ease-in-out", "data-aos-delay", "300", 1, "row", "mb-3"], [1, "col-1"], [1, "fas", "fa-share", "fa-lg", "indigo-text"], [1, "col-xl-10", "col-md-11", "col-10"], [1, "font-weight-bold", "mb-3"], [1, "grey-text"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-easing", "ease-in-out", "data-aos-delay", "600", 1, "row", "mb-3"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-easing", "ease-in-out", "data-aos-delay", "1200", 1, "row", "mb-3"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-easing", "ease-in-out", "data-aos-delay", "1800", 1, "row"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Why skating?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This journey from a hobby to passion has been spectacular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "A breathtaking marvelous GAME of MIND-HAND-LEG and their coordination.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Art");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "HOCKEY on SKATES and ICE is INCOMPREHENSIBLE. An incredible art. Come, try, but be ready to invest some serious time and phenomenal skills.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Speed & Accuracy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Its not just the extraordinary pace - blend it with outstanding perfection. You will hit your target right.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Agility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "It is a complex sport that incorporates a great amount strength, power, flexibility, balance and grace. Skaters often transitions into jumps and spins footwork sequences which requires agility.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-fastandup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-mediacomponent");
    } }, directives: [_carousal_carousal_component__WEBPACK_IMPORTED_MODULE_2__["CarousalComponent"], _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__["CounterComponent"], _fastandup_fastandup_component__WEBPACK_IMPORTED_MODULE_4__["FastandupComponent"], _mediacomponent_mediacomponent_component__WEBPACK_IMPORTED_MODULE_5__["MediacomponentComponent"]], styles: [".carousalEffects[_ngcontent-%COMP%]   .decideHeadingFont[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n@media only screen and (max-width: 768px) {\n  .carousalEffects[_ngcontent-%COMP%]   .decideHeadingFont[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .carousalEffects[_ngcontent-%COMP%]   .decideTextFont[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQUFSO0FBQ1E7RUFGSjtJQUdRLGVBQUE7RUFFVjtBQUNGO0FBQ1E7RUFESjtJQUVRLGVBQUE7RUFFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2FsRWZmZWN0c3tcclxuICAgIC5kZWNpZGVIZWFkaW5nRm9udHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlY2lkZVRleHRGb250e1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MediaComponent {
    constructor() { }
    ngOnInit() {
    }
}
MediaComponent.ɵfac = function MediaComponent_Factory(t) { return new (t || MediaComponent)(); };
MediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaComponent, selectors: [["app-media"]], decls: 8, vars: 0, consts: [[1, "font-small", "mdb-color", "darken-3", "pt-5"], [1, "container", "pt-5"], [1, "row", "d-flex", "alignPosition", 2, "padding-top", "150px"], [1, "col-md-6"], [1, "embed-responsive", "embed-responsive-16by9", "mb-4", "alingContent"], ["src", "https://www.youtube.com/embed/vlDzYIIOYmM", "allowfullscreen", "", 1, "embed-responsive-item"], ["data-aos", "fade-left", "data-aos-duration", "1000", "data-aos-easing", "ease-in-out", 1, "col-md-6", "textProperties"]], template: function MediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorum ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]   .pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.container[_ngcontent-%COMP%]   .alignPosition[_ngcontent-%COMP%] {\n  justify-content: end;\n}\n.container[_ngcontent-%COMP%]   .alingContent[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.container[_ngcontent-%COMP%]   .textProperties[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvbWVkaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxvQkFBQTtBQUFSO0FBRUk7RUFDSSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvbWVkaWEvbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgLnB0LTEwe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmFsaWduUG9zaXRpb257XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICB9XHJcbiAgICAuYWxpbmdDb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHRQcm9wZXJ0aWVze1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media',
                templateUrl: './media.component.html',
                styleUrls: ['./media.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/mediacomponent/mediacomponent.component.ts":
/*!************************************************************!*\
  !*** ./src/app/mediacomponent/mediacomponent.component.ts ***!
  \************************************************************/
/*! exports provided: MediacomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediacomponentComponent", function() { return MediacomponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MediacomponentComponent {
    constructor() { }
    goToTimes() {
        window.open("https://m.timesofindia.com/city/pune/punes-ice-hockey-players-have-their-eyes-set-on-the-national-games/amp_articleshow/58234923.cms", "_blank");
    }
    goToPune() {
        window.open("https://punemirror.indiatimes.com/pune/campus/a-study-in-sport/amp_articleshow/56574145.cms", "_blank");
    }
    goToIBR() {
        window.open("https://indiabookofrecords.in/longest-non-stop-skating-marathon/", "_blank");
    }
    goToWRA() {
        window.open("https://www.worldrecordacademy.com/sports/longest_Roller_Skating_Marathon_Indian_skaters_set_world_record_112343.html#participants", "_blank");
    }
    goToIE() {
        window.open("https://indianexpress.com/article/sports/hockey/iihf-pune-boy-to-appear-in-world-in-line-hockey-championship-at-new-zealand/", "_blank");
    }
    goToIssuu() {
        window.open("https://issuu.com/thegoldensparrow/docs/tgs_broadsheet_pages_april_16_pdf_f/9", "_blank");
    }
    ngOnInit() {
    }
}
MediacomponentComponent.ɵfac = function MediacomponentComponent_Factory(t) { return new (t || MediacomponentComponent)(); };
MediacomponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediacomponentComponent, selectors: [["app-mediacomponent"]], decls: 31, vars: 0, consts: [[1, "adjustMediaPage"], [1, "row"], [1, "col-md-6"], ["data-aos", "fade-right", "data-aos-duration", "1500", "data-aos-easing", "ease-in-out", "data-aos-delay", "300", 1, "embed-responsive", "embed-responsive-16by9", "mb-4", "alingContent"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/Ul6HUycUmCI", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["data-aos", "fade-left", "data-aos-duration", "1500", "data-aos-easing", "ease-in-out", "data-aos-delay", "300", 1, "embed-responsive", "embed-responsive-16by9", "mb-4", "alingContent"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/D513YT4JPqM", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, ""], [1, "adjustNewsPage"], [1, "font-weight-bold", "decideHeadingFont", "text-center"], [1, "row", "pb-30", 2, "padding-top", "30px"], [1, "removeBtnstyle", "col-md-4", "pb-5", 3, "click"], ["src", "../../assets/images/times_of_india.png", "height", "120", "width", "250"], ["src", "../../assets/images/pune_mirror.png", "height", "120", "width", "250"], ["src", "../../assets/images/india_book_of_records.png", "height", "120", "width", "250"], ["src", "../../assets/images/WRA_Logo.bmp", "height", "120", "width", "250"], ["src", "../../assets/images/indian_express.png", "height", "120", "width", "250"], ["src", "../../assets/images/issuu_logo.png", "height", "120", "width", "250"]], template: function MediacomponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "News Mentions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediacomponentComponent_Template_button_click_12_listener() { return ctx.goToTimes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediacomponentComponent_Template_button_click_15_listener() { return ctx.goToPune(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediacomponentComponent_Template_button_click_18_listener() { return ctx.goToIBR(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediacomponentComponent_Template_button_click_22_listener() { return ctx.goToWRA(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediacomponentComponent_Template_button_click_25_listener() { return ctx.goToIE(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediacomponentComponent_Template_button_click_28_listener() { return ctx.goToIssuu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".adjustMediaPage[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background-color: black;\n}\n\n.adjustNewsPage[_ngcontent-%COMP%] {\n  padding: 50px 50px;\n}\n\n.adjustNewsPage[_ngcontent-%COMP%]   .decideHeadingFont[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n@media only screen and (max-width: 768px) {\n  .adjustNewsPage[_ngcontent-%COMP%]   .decideHeadingFont[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n\n.adjustNewsPage[_ngcontent-%COMP%]   .removeBtnstyle[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n}\n\n.adjustNewsPage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  border-radius: 16px;\n}\n\n@media only screen and (min-width: 768px) {\n  .adjustNewsPage[_ngcontent-%COMP%]   .pb30[_ngcontent-%COMP%] {\n    padding-bottom: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWFjb21wb25lbnQvbWVkaWFjb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNBO0VBT0ksa0JBQUE7QUFKSjs7QUFGSTtFQUNJLGVBQUE7QUFJUjs7QUFIUTtFQUZKO0lBR0ksZUFBQTtFQU1OO0FBQ0Y7O0FBSEk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFLUjs7QUFISTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFLUjs7QUFISTtFQUNBO0lBQ0ksb0JBQUE7RUFLTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVkaWFjb21wb25lbnQvbWVkaWFjb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRqdXN0TWVkaWFQYWdle1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5hZGp1c3ROZXdzUGFnZXtcclxuICAgIC5kZWNpZGVIZWFkaW5nRm9udHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHg7XHJcbiAgICAucmVtb3ZlQnRuc3R5bGV7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAgMTZweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wYjMwe1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediacomponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mediacomponent',
                templateUrl: './mediacomponent.component.html',
                styleUrls: ['./mediacomponent.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 5, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "navDisplay"], [1, "container"], ["src", "../../assets/images/white_background.png", "alt", "background", 1, "alignBackground", 2, "position", "relative", "left", "28%"], ["src", "../../assets/images/brand_logo.png", "alt", "logo", 1, "alignLogo", 2, "position", "relative", "left", "-22%", "top", "5px"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navDisplay[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  font-size: 23px;\n  padding-bottom: 10px;\n}\n.navDisplay[_ngcontent-%COMP%]   .alignBackground[_ngcontent-%COMP%] {\n  height: 42px;\n}\n@media only screen and (max-width: 768px) {\n  .navDisplay[_ngcontent-%COMP%]   .alignBackground[_ngcontent-%COMP%] {\n    height: 26px;\n  }\n}\n.navDisplay[_ngcontent-%COMP%]   .alignLogo[_ngcontent-%COMP%] {\n  height: 110px;\n}\n@media only screen and (max-width: 768px) {\n  .navDisplay[_ngcontent-%COMP%]   .alignLogo[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n}\n.navDisplay[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n.navDisplay[_ngcontent-%COMP%]   .navOptions[_ngcontent-%COMP%] {\n  margin-left: 22%;\n  margin-top: 2%;\n}\n.navDisplay[_ngcontent-%COMP%]   .navOptions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.navDisplay[_ngcontent-%COMP%]   .navOptions[_ngcontent-%COMP%]   .itemPadding[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.navDisplay[_ngcontent-%COMP%]   .navOptions[_ngcontent-%COMP%]   .active-link-effect[_ngcontent-%COMP%] {\n  border-bottom: 5px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBRFE7RUFGSjtJQUdRLFlBQUE7RUFJVjtBQUNGO0FBQUk7RUFDSSxhQUFBO0FBRVI7QUFEUTtFQUZKO0lBR1EsWUFBQTtFQUlWO0FBQ0Y7QUFGSTtFQUNJLG1CQUFBO0FBSVI7QUFESTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUdSO0FBRlE7RUFDSSxZQUFBO0FBSVo7QUFGUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFJWjtBQUZRO0VBQ0ksOEJBQUE7QUFJWiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2RGlzcGxheXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLmFsaWduQmFja2dyb3VuZHtcclxuICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5hbGlnbkxvZ297XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWJyYW5ke1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdk9wdGlvbnN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIyJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtUGFkZGluZ3tcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlLWxpbmstZWZmZWN0e1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _counter2_counter2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../counter2/counter2.component */ "./src/app/counter2/counter2.component.ts");



class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 57, vars: 0, consts: [[1, "font-small", "mdb-color", "darken-3", "pt-5", "pb-5"], [1, "container-fluid"], [1, "text-center", 2, "padding-top", "150px"], [1, "font-weight-bold", "mt-5", "mb-5", 2, "color", "white"], [1, "row"], [1, "col-lg-4", "col-md-12", "mb-lg-0", "mb-4"], [1, "card", "hoverable"], ["src", "https://mdbootstrap.com/img/Photos/Others/images/58.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title", "text-muted", "text-uppercase", "font-small", "mt-1", "mb-3"], [1, "mb-2"], [1, "col-lg-4", "col-md-6", "mb-md-0", "mb-4"], ["src", "https://mdbootstrap.com/img/Photos/Others/project4.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-lg-4", "col-md-6", "mb-0"], ["src", "https://mdbootstrap.com/img/Photos/Others/images/88.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "container", "my-5", "p-5", "z-depth-1", "unique-color-dark"], [1, "text-center", "white-text"], [1, "font-weight-bold", "mb-4", "pb-2", "text-uppercase"], [1, "lead", "mx-auto", "mb-5"], [1, "col-md-4", "mb-4"], [1, "fas", "fa-brain", "fa-3x", "purple-text"], [1, "font-weight-bold", "my-4", "text-uppercase"], [1, "mb-md-0", "mb-5"], [1, "fab", "fa-sass", "fa-3x", "purple-text"], [1, "fas", "fa-users", "fa-3x", "purple-text"], [1, "mb-0"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Recent Blog Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "We relocated our office to a new designed garage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Top five brilliant content marketing strategies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Best practices for minimalist design with example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Creativity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Professionalism");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-counter2");
    } }, directives: [_counter2_counter2_component__WEBPACK_IMPORTED_MODULE_1__["Counter2Component"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n@media (max-width: 740px) {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], .view[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n\n.top-nav-collapse[_ngcontent-%COMP%] {\n  background-color: #78909c !important;\n}\n\n.navbar[_ngcontent-%COMP%]:not(.top-nav-collapse) {\n  background: transparent !important;\n}\n\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]:not(.top-nav-collapse) {\n    background: #78909c !important;\n  }\n}\n\nh1[_ngcontent-%COMP%] {\n  letter-spacing: 8px;\n}\n\nh5[_ngcontent-%COMP%] {\n  letter-spacing: 3px;\n}\n\n.hr-light[_ngcontent-%COMP%] {\n  border-top: 3px solid #fff;\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUUsWUFBQTtBQUNGOztBQUVBO0VBQ0U7Ozs7SUFJRSxhQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQUY7O0FBR0E7RUFDRSxrQ0FBQTtBQUFGOztBQUdBO0VBQ0M7SUFDQyw4QkFBQTtFQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSxcclxuaGVhZGVyLFxyXG4udmlldyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICBodG1sLFxyXG4gIGJvZHksXHJcbiAgaGVhZGVyLFxyXG4gIC52aWV3IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4udG9wLW5hdi1jb2xsYXBzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4OTA5YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyOm5vdCgudG9wLW5hdi1jb2xsYXBzZSkge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcclxuICBiYWNrZ3JvdW5kOiAjNzg5MDljICFpbXBvcnRhbnQ7XHJcbiB9XHJcbn1cclxuXHJcbmgxIHtcclxuICBsZXR0ZXItc3BhY2luZzogOHB4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxufVxyXG5cclxuLmhyLWxpZ2h0IHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjtcclxuICB3aWR0aDogODBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sponsers/sponsers.component.ts":
/*!************************************************!*\
  !*** ./src/app/sponsers/sponsers.component.ts ***!
  \************************************************/
/*! exports provided: SponsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsersComponent", function() { return SponsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SponsersComponent {
    constructor() { }
    ngOnInit() {
    }
}
SponsersComponent.ɵfac = function SponsersComponent_Factory(t) { return new (t || SponsersComponent)(); };
SponsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SponsersComponent, selectors: [["app-sponsers"]], decls: 51, vars: 0, consts: [[1, "font-small", "mdb-color", "darken-3", "pt-5"], [1, "container", "pt-5"], [1, "row", "d-flex", "alignPosition", 2, "padding-top", "150px"], [1, "my-5"], [1, "grey", "lighten-2", "py-5"], [1, "flex-center"], [1, "row"], [1, "col-md-3", "flex-center"], ["src", "https://mdbootstrap.com/img/Photos/Template/34.png", "data-wow-delay", ".2s", 1, "img-fluid", "wow", "fadeIn"], ["src", "https://mdbootstrap.com/img/Photos/Template/35.png", "data-wow-delay", ".4s", 1, "img-fluid", "wow", "fadeIn"], ["src", "https://mdbootstrap.com/img/Photos/Template/36.png", "data-wow-delay", ".4s", 1, "img-fluid", "wow", "fadeIn"], ["src", "https://mdbootstrap.com/img/Photos/Template/37.png", "data-wow-delay", ".2s", 1, "img-fluid", "wow", "fadeIn"], [1, "container", "z-depth-1", "my-5"], [1, "text-center", "py-5"], [1, "mb-4", "pb-2", "lead", "font-weight-bold"], ["id", "carouselExampleSlidesOnly", "data-ride", "carousel", "data-interval", "1800", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "col-lg-3", "col-md-6", "d-flex", "align-items-center", "justify-content-center"], ["src", "https://mdbootstrap.com/img/Photos/Template/5.png", "alt", "Logo", 1, "img-fluid", "px-4"], ["src", "https://mdbootstrap.com/img/Photos/Template/7.png", "alt", "Logo", 1, "img-fluid", "px-4"], ["src", "https://mdbootstrap.com/img/Photos/Template/6.png", "alt", "Logo", 1, "img-fluid", "px-4"], ["src", "https://mdbootstrap.com/img/Photos/Template/9.png", "alt", "Logo", 1, "img-fluid", "px-4"], [1, "carousel-item"], ["src", "https://mdbootstrap.com/img/Photos/Template/11.png", "alt", "Logo", 1, "img-fluid", "px-4"], ["src", "https://mdbootstrap.com/img/Photos/Template/10.png", "alt", "Logo", 1, "img-fluid", "px-4"], ["src", "https://mdbootstrap.com/img/Photos/Template/12.png", "alt", "Logo", 1, "img-fluid", "px-4"], ["src", "https://mdbootstrap.com/img/Photos/Template/13.png", "alt", "Logo", 1, "img-fluid", "px-4"], ["src", "https://mdbootstrap.com/img/Photos/Template/1a.png", "alt", "Logo", 1, "img-fluid", "px-4"], ["src", "https://mdbootstrap.com/img/Photos/Template/2a.png", "alt", "Logo", 1, "img-fluid", "px-4"], ["src", "https://mdbootstrap.com/img/Photos/Template/3a.png", "alt", "Logo", 1, "img-fluid", "px-4"], ["src", "https://mdbootstrap.com/img/Photos/Template/4a.png", "alt", "Logo", 1, "img-fluid", "px-4"]], template: function SponsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Trusted by 1 000 000 + developers & designers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zZXJzL3Nwb25zZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SponsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sponsers',
                templateUrl: './sponsers.component.html',
                styleUrls: ['./sponsers.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/testimonial/testimonial.component.ts":
/*!******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.ts ***!
  \******************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TestimonialComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(); };
TestimonialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialComponent, selectors: [["app-testimonial"]], decls: 57, vars: 0, consts: [[1, "team-section", "text-center", "my-5", "alignTestimonial"], [1, "h1-responsive", "font-weight-bold", "my-5"], [1, "dark-grey-text", "w-responsive", "mx-auto", "mb-5"], [1, "row", "text-center"], [1, "col-md-4", "mb-md-0", "mb-5"], [1, "testimonial"], [1, "avatar", "mx-auto"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg", 1, "rounded-circle", "z-depth-1", "img-fluid"], [1, "font-weight-bold", "dark-grey-text", "mt-4"], [1, "font-weight-bold", "blue-text", "my-3"], [1, "font-weight-normal", "dark-grey-text"], [1, "fas", "fa-quote-left", "pr-2"], [1, "orange-text"], [1, "fas", "fa-star"], [1, "fas", "fa-star-half-alt"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg", 1, "rounded-circle", "z-depth-1", "img-fluid"], [1, "col-md-4"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg", 1, "rounded-circle", "z-depth-1", "img-fluid"], [1, "far", "fa-star"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Anna Deynah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Maria Kate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Photographer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".alignTestimonial[_ngcontent-%COMP%] {\n  padding-right: 50px;\n  padding-left: 50px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFsL3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduVGVzdGltb25pYWx7XHJcbnBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbnBhZGRpbmctbGVmdDogNTBweDtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonial',
                templateUrl: './testimonial.component.html',
                styleUrls: ['./testimonial.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Kaustubh\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map