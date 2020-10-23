(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/alert/alert.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/shared/components/alert/alert.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-wrap\" *ngIf=\"text\">\n    <div\n            class=\"alert\"\n         [ngClass]=\"{\n        'alert-success': type === 'success',\n        'alert-warning': type === 'warning',\n        'alert-danger': type === 'danger'\n    }\"\n    >\n        {{ text }}\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n        *ngIf=\"posts$ | async as posts; else loading\"\n        class=\"posts\">\n    <app-post\n            *ngFor=\"let post of posts\"\n            [post]=\"post\"\n    >\n    </app-post>\n</div>\n\n<ng-template #loading>\n    <p class=\"text-center\">\n        Post loading...\n    </p>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post-page/post-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-page/post-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post$ | async as post; else loading\">\n<div class=\"post\">\n    <div class=\"header\">\n        <h1>{{post.title}}</h1>\n\n        <button routerLink=\"/\"\n                class=\"btn btn-light\">Home</button>\n    </div>\n\n    <div class=\"info\">\n        <strong>{{post.author}}</strong>\n        <small>{{post.date | date:'medium'}}</small>\n    </div>\n\n    <div>\n      <quill-view-html [content]=\"post.text\"></quill-view-html>\n    </div>\n</div>\n</div>\n\n<ng-template #loading>\n    <p class=\"text-center\">Loading post...</p>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/main-layout/main-layout.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/main-layout/main-layout.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar main\">\n    <h1>Angular Blog</h1>\n</nav>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/post/post.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/post/post.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        <h2>{{post.title}}</h2>\n\n        <small>{{post.date | date: 'dd.MM.yyyy'}}</small>\n    </div>\n\n    <div>\n        <small>{{post.author}}</small>\n    </div>\n\n    <button [routerLink]=\"['/post', post.id]\"\n            class=\"btn btn-dark\">\n        Open\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/shared/components/alert/alert.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/shared/components/alert/alert.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-wrap {\n  position: fixed;\n  top: 50px;\n  right: 40px;\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvQzpcXFVzZXJzXFxTZXJnaWlcXFdlYnN0b3JtUHJvamVjdHNcXGFuZ3VsYXItYmxvZy1wcm9qZWN0L3NyY1xcYXBwXFxhZG1pblxcc2hhcmVkXFxjb21wb25lbnRzXFxhbGVydFxcYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LXdyYXAge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwcHg7XHJcbiAgcmlnaHQ6IDQwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG4iLCIuYWxlcnQtd3JhcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/shared/components/alert/alert.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/shared/components/alert/alert.component.ts ***!
  \******************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/admin/shared/services/alert.service.ts");



let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.delay = 5000;
        this.type = 'success';
    }
    ngOnInit() {
        this.aSub = this.alertService.alert$.subscribe(alert => {
            this.text = alert.text;
            this.type = alert.type;
            const timeout = setTimeout(() => {
                clearTimeout(timeout);
                this.text = '';
            }, this.delay);
        });
    }
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
};
AlertComponent.ctorParameters = () => [
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "delay", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/alert/alert.component.html"),
        styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/admin/shared/components/alert/alert.component.scss")]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/admin/shared/services/alert.service.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/shared/services/alert.service.ts ***!
  \********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AlertService = class AlertService {
    constructor() {
        this.alert$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    success(text) {
        this.alert$.next({ type: 'success', text });
    }
    warning(text) {
        this.alert$.next({ type: 'warning', text });
    }
    danger(text) {
        this.alert$.next({ type: 'danger', text });
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AlertService);



/***/ }),

/***/ "./src/app/admin/shared/services/auth.services.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/shared/services/auth.services.ts ***!
  \********************************************************/
/*! exports provided: AuthServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServices", function() { return AuthServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthServices = class AuthServices {
    constructor(http) {
        this.http = http;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get token() {
        const expDate = new Date(localStorage.getItem('fb-token-exp'));
        if (new Date() > expDate) {
            this.logout();
            return null;
        }
        return localStorage.getItem('fb-token');
    }
    login(user) {
        user.returnSecureToken = true;
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiKey}`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(this.setToken), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError.bind(this)));
    }
    logout() {
        this.setToken(null);
    }
    isAuthenticated() {
        return !!this.token;
    }
    handleError(error) {
        const { message } = error.error.error;
        switch (message) {
            case 'INVALID_EMAIL':
                this.error$.next('Invalid email');
                break;
            case 'INVALID_PASSWORD':
                this.error$.next('Invalid password');
                break;
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Email not found');
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
    setToken(response) {
        if (response) {
            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-exp', expDate.toString());
        }
        else {
            localStorage.clear();
        }
    }
};
AuthServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthServices);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/main-layout/main-layout.component */ "./src/app/shared/components/main-layout/main-layout.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-page/post-page.component */ "./src/app/post-page/post-page.component.ts");






const routes = [
    {
        path: '',
        component: _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
        children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
            { path: 'post/:id', component: _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_5__["PostPageComponent"] }
        ]
    },
    {
        path: 'admin', loadChildren: './admin/admin.module#AdminModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/main-layout/main-layout.component */ "./src/app/shared/components/main-layout/main-layout.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-page/post-page.component */ "./src/app/post-page/post-page.component.ts");
/* harmony import */ var _shared_components_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/post/post.component */ "./src/app/shared/components/post/post.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/auth.interceptor */ "./src/app/shared/auth.interceptor.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");














const INTERCEPTOR_PROVIDER = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
    multi: true,
    useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"]
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
            _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_8__["PostPageComponent"],
            _shared_components_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production })
        ],
        providers: [INTERCEPTOR_PROVIDER],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".posts {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcU2VyZ2lpXFxXZWJzdG9ybVByb2plY3RzXFxhbmd1bGFyLWJsb2ctcHJvamVjdC9zcmNcXGFwcFxcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdHMge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIiwiLnBvc3RzIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/posts.service */ "./src/app/shared/posts.service.ts");



let HomePageComponent = class HomePageComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.posts$ = this.postService.getAll();
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _shared_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/post-page/post-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/post-page/post-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post .header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.post h1 {\n  margin-bottom: 0.5rem;\n}\n.post .info strong {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1wYWdlL0M6XFxVc2Vyc1xcU2VyZ2lpXFxXZWJzdG9ybVByb2plY3RzXFxhbmd1bGFyLWJsb2ctcHJvamVjdC9zcmNcXGFwcFxccG9zdC1wYWdlXFxwb3N0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3QtcGFnZS9wb3N0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKO0FERUU7RUFDRSxxQkFBQTtBQ0FKO0FESUk7RUFDRSxrQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1wYWdlL3Bvc3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnBvc3QgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wb3N0IGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnBvc3QgLmluZm8gc3Ryb25nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/post-page/post-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-page/post-page.component.ts ***!
  \**************************************************/
/*! exports provided: PostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageComponent", function() { return PostPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/posts.service */ "./src/app/shared/posts.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PostPageComponent = class PostPageComponent {
    constructor(route, postService) {
        this.route = route;
        this.postService = postService;
    }
    ngOnInit() {
        this.post$ = this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((params) => {
            return this.postService.getById(params['id']);
        }));
    }
};
PostPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }
];
PostPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-page',
        template: __webpack_require__(/*! raw-loader!./post-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/post-page/post-page.component.html"),
        styles: [__webpack_require__(/*! ./post-page.component.scss */ "./src/app/post-page/post-page.component.scss")]
    })
], PostPageComponent);



/***/ }),

/***/ "./src/app/shared/auth.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/shared/auth.interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _admin_shared_services_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/shared/services/auth.services */ "./src/app/admin/shared/services/auth.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthInterceptor = class AuthInterceptor {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    intercept(req, next) {
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setParams: {
                    auth: this.auth.token
                }
            });
        }
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            console.log('[Interceptor Error]: ', error);
            if (error.status === 401) {
                this.auth.logout();
                this.router.navigate(['/admin', 'login'], {
                    queryParams: {
                        authFailed: true
                    }
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _admin_shared_services_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/shared/components/main-layout/main-layout.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/main-layout/main-layout.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/main-layout/main-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainLayoutComponent = class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-layout',
        template: __webpack_require__(/*! raw-loader!./main-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/main-layout/main-layout.component.html"),
        styles: [__webpack_require__(/*! ./main-layout.component.scss */ "./src/app/shared/components/main-layout/main-layout.component.scss")]
    })
], MainLayoutComponent);



/***/ }),

/***/ "./src/app/shared/components/post/post.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/post/post.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/post/post.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/post/post.component.ts ***!
  \**********************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostComponent = class PostComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "post", void 0);
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: __webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/post/post.component.html"),
        styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/shared/components/post/post.component.scss")]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/shared/posts.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/posts.service.ts ***!
  \*****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PostsService = class PostsService {
    constructor(http) {
        this.http = http;
    }
    create(post) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/posts.json`, post)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return Object.assign({}, post, { id: response.name, date: new Date(post.date) });
        }));
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/posts.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return Object
                .keys(response)
                .map(key => (Object.assign({}, response[key], { id: key, date: new Date(response[key].date) })));
        }));
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/posts/${id}.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((post) => {
            return Object.assign({}, post, { id, date: new Date(post.date) });
        }));
    }
    remove(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/posts/${id}.json`);
    }
    upDate(post) {
        return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/posts/${post.id}.json`, post);
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PostsService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var _admin_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/shared/components/alert/alert.component */ "./src/app/admin/shared/components/alert/alert.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ],
        exports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"],
            _admin_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]
        ],
        declarations: [_admin_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]]
    })
], SharedModule);



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
    production: false,
    apiKey: 'AIzaSyBpzDD0frDiiP02gHQ1yvUXyCvYbm4MEKY',
    fbDbUrl: 'https://angular-blog-80c0b.firebaseio.com'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sergii\WebstormProjects\angular-blog-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map