(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/create-page/create-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/create-page/create-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <h1>Creating a new post</h1>\n\n    <div\n            class=\"form-control\"\n         [ngClass]=\"{invalid: form.get('title').touched && form.get('title').invalid}\"\n    >\n        <label for=\"title\">Title:</label>\n        <input id=\"title\" type=\"text\" formControlName=\"title\">\n        <div\n                *ngIf=\"form.get('title').touched && form.get('title').invalid\"\n                class=\"validation\">\n            <small *ngIf=\"form.get('title').errors.required\">\n                enter name title\n            </small>\n        </div>\n    </div>\n    \n    <div class=\"form-control\">\n        <label>Post content:</label>\n        <quill-editor formControlName=\"text\"></quill-editor>\n    </div>\n\n    <div class=\"form-control\"\n         [ngClass]=\"{invalid: form.get('author').touched && form.get('author').invalid}\">\n        <label for=\"author\">Author:</label>\n        <input id=\"author\" type=\"text\" formControlName=\"author\">\n        <div\n                *ngIf=\"form.get('author').touched && form.get('author').invalid\"\n                class=\"validation\">\n            <small *ngIf=\"form.get('author').errors.required\">\n                enter name author\n            </small>\n        </div>\n    </div>\n\n    <button\n    type=\"submit\"\n    class=\"btn btn-block btn-dark\"\n    [disabled]=\"form.invalid\"\n    >Create post</button>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/dashboard-page/dashboard-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/dashboard-page/dashboard-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"posts.length; else loading\">\n    <div class=\"form-control\">\n        <input type=\"text\" placeholder=\"Search post...\" [(ngModel)]=\"searchStr\">\n    </div>\n    <table>\n        <thead>\n        <tr>\n            <th>#</th>\n            <th>Author</th>\n            <th>Title</th>\n            <th>Date</th>\n            <th>To do</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let post of posts | searchPosts: searchStr; let idx = index\">\n            <td>{{ idx + 1 }}</td>\n            <td>{{ post.author }}</td>\n            <td>{{ post.title }}</td>\n            <td>{{ post.date | date: 'medium'}}</td>\n            <td>\n                <button class=\"btn btn-link open\"\n                        [routerLink]=\"['/admin', 'post', post.id, 'edit']\"\n                >\n                    Open\n                </button>\n                <a (click)=\"remove(post.id)\">Delete post</a>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n\n<ng-template #loading>\n    <p class=\"text-center\">Page loading...</p>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/edit-page/edit-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/edit-page/edit-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"form; else loading\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n        <div class=\"form-control\"\n             [ngClass]=\"{invalid: form.get('title').touched && form.get('title').invalid}\">\n            <label for=\"title\">Title:</label>\n            <input id=\"title\" type=\"text\" formControlName=\"title\">\n            <div\n                    *ngIf=\"form.get('title').touched && form.get('title').invalid\"\n                    class=\"validation\">\n                <small *ngIf=\"form.get('title').errors.required\">\n                    enter name title\n                </small>\n            </div>\n        </div>\n\n        <div class=\"form-control\">\n            <quill-editor formControlName=\"text\"></quill-editor>\n        </div>\n\n        <button\n                class=\"btn btn-primary\"\n                type=\"submit\"\n                [disabled]=\"form.invalid || submitted\"\n        >Refresh\n        </button>\n    </form>\n</div>\n\n<ng-template #loading>\n    <p class=\"text-center\">Loading, please wait...</p>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/login-page/login-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/login-page/login-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"card\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <h2>Please enter your login details</h2>\n\n    <div class=\"alert alert-danger\" *ngIf=\"auth.error$ | async as error\">\n        {{error}}\n    </div>\n\n    <div class=\"alert alert-info\" *ngIf=\"message\">\n        {{message}}\n    </div>\n\n    <div class=\"form-control\"\n         [ngClass]=\"{invalid: form.get('email').touched && form.get('email').invalid}\"\n    >\n        <label for=\"email\">Email:</label>\n        <input id=\"email\" type=\"email\" formControlName=\"email\">\n        <div\n                *ngIf=\"form.get('email').touched && form.get('email').invalid\"\n                class=\"validation\">\n            <small *ngIf=\"form.get('email').errors.required\">\n                enter email\n            </small>\n            <small *ngIf=\"form.get('email').errors.email\">\n                please enter correct email\n            </small>\n        </div>\n    </div>\n    <div class=\"form-control\"\n         [ngClass]=\"{invalid: form.get('password').touched && form.get('password').invalid}\"\n    >\n        <label for=\"password\">Password:</label>\n        <input id=\"password\" type=\"password\" formControlName=\"password\">\n        <div class=\"validation\"\n             *ngIf=\"form.get('password').touched && form.get('password').invalid\">\n            <small *ngIf=\"form.get('password').errors.required\">\n                enter password\n            </small>\n            <small *ngIf=\"form.get('password').errors.minlength\">\n                the password must be at least\n                {{form.get('password').errors.minlength.requiredLength}}\n                number of characters\n                {{form.get('password').errors.minlength.actualLength}}\n            </small>\n        </div>\n    </div>\n    <button\n            type=\"submit\"\n            class=\"btn btn-primary\"\n            [disabled]=\"form.invalid || submitted \"\n    >Login\n    </button>\n</form>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/admin-layout/admin-layout.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/shared/components/admin-layout/admin-layout.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-alert></app-alert>\n\n<div class=\"navbar bg-primary\">\n    <h1>\n        <a routerLink=\"/\">Angular admin</a>\n    </h1>\n\n    <ul *ngIf=\"auth.isAuthenticated()\">\n        <li routerLinkActive=\"active\">\n            <a [routerLink]=\"['/admin', 'dashboard']\">Home</a>\n        </li>\n        <li routerLinkActive=\"active\">\n            <a [routerLink]=\"['/admin', 'create']\">Create</a>\n        </li>\n        <li>\n            <a href=\"#\" (click)=\"logout($event)\">Logout</a>\n        </li>\n    </ul>\n</div>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/admin-layout/admin-layout.component */ "./src/app/admin/shared/components/admin-layout/admin-layout.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/admin/login-page/login-page.component.ts");
/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./src/app/admin/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-page/create-page.component */ "./src/app/admin/create-page/create-page.component.ts");
/* harmony import */ var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-page/edit-page.component */ "./src/app/admin/edit-page/edit-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/auth.guard */ "./src/app/admin/shared/services/auth.guard.ts");
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/search.pipe */ "./src/app/admin/shared/search.pipe.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/alert.service */ "./src/app/admin/shared/services/alert.service.ts");














var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
                _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_7__["DashboardPageComponent"],
                _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_8__["CreatePageComponent"],
                _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_9__["EditPageComponent"],
                _shared_search_pipe__WEBPACK_IMPORTED_MODULE_12__["SearchPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '', component: _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"], children: [
                            { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
                            { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"] },
                            { path: 'dashboard', component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_7__["DashboardPageComponent"], canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                            { path: 'create', component: _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_8__["CreatePageComponent"], canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                            { path: 'post/:id/edit', component: _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_9__["EditPageComponent"], canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] }
                        ]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_13__["AlertService"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/create-page/create-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/create-page/create-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  max-width: 600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY3JlYXRlLXBhZ2UvQzpcXFVzZXJzXFxTZXJnaWlcXFdlYnN0b3JtUHJvamVjdHNcXGFuZ3VsYXItYmxvZy1wcm9qZWN0L3NyY1xcYXBwXFxhZG1pblxcY3JlYXRlLXBhZ2VcXGNyZWF0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jcmVhdGUtcGFnZS9jcmVhdGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY3JlYXRlLXBhZ2UvY3JlYXRlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIiwiZm9ybSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/create-page/create-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/create-page/create-page.component.ts ***!
  \************************************************************/
/*! exports provided: CreatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageComponent", function() { return CreatePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/posts.service */ "./src/app/shared/posts.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/admin/shared/services/alert.service.ts");





var CreatePageComponent = /** @class */ (function () {
    function CreatePageComponent(postsService, alert) {
        this.postsService = postsService;
        this.alert = alert;
    }
    CreatePageComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    CreatePageComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        var post = {
            title: this.form.value.title,
            author: this.form.value.author,
            text: this.form.value.text,
            date: new Date()
        };
        this.postsService.create(post).subscribe(function () {
            _this.form.reset();
            _this.alert.success('Congratulations, the post was added !');
        });
    };
    CreatePageComponent.ctorParameters = function () { return [
        { type: _shared_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
    ]; };
    CreatePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-page',
            template: __webpack_require__(/*! raw-loader!./create-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/create-page/create-page.component.html"),
            styles: [__webpack_require__(/*! ./create-page.component.scss */ "./src/app/admin/create-page/create-page.component.scss")]
        })
    ], CreatePageComponent);
    return CreatePageComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard-page/dashboard-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/dashboard-page/dashboard-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".open {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkLXBhZ2UvQzpcXFVzZXJzXFxTZXJnaWlcXFdlYnN0b3JtUHJvamVjdHNcXGFuZ3VsYXItYmxvZy1wcm9qZWN0L3NyY1xcYXBwXFxhZG1pblxcZGFzaGJvYXJkLXBhZ2VcXGRhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGVuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiIsIi5vcGVuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard-page/dashboard-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/dashboard-page/dashboard-page.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/posts.service */ "./src/app/shared/posts.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/admin/shared/services/alert.service.ts");




var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent(postService, alert) {
        this.postService = postService;
        this.alert = alert;
        this.posts = [];
        this.searchStr = '';
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pSub = this.postService.getAll().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    DashboardPageComponent.prototype.remove = function (id) {
        var _this = this;
        this.dSub = this.postService.remove(id).subscribe(function () {
            _this.posts = _this.posts.filter(function (post) { return post.id !== id; });
            _this.alert.warning('The post was remove !');
        });
    };
    DashboardPageComponent.prototype.ngOnDestroy = function () {
        if (this.pSub) {
            this.pSub.unsubscribe();
        }
        if (this.dSub) {
            this.dSub.unsubscribe();
        }
    };
    DashboardPageComponent.ctorParameters = function () { return [
        { type: _shared_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    DashboardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-page',
            template: __webpack_require__(/*! raw-loader!./dashboard-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-page.component.scss */ "./src/app/admin/dashboard-page/dashboard-page.component.scss")]
        })
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-page/edit-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/edit-page/edit-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtcGFnZS9lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/edit-page/edit-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/edit-page/edit-page.component.ts ***!
  \********************************************************/
/*! exports provided: EditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageComponent", function() { return EditPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/posts.service */ "./src/app/shared/posts.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/admin/shared/services/alert.service.ts");







var EditPageComponent = /** @class */ (function () {
    function EditPageComponent(route, postsServices, alert) {
        this.route = route;
        this.postsServices = postsServices;
        this.alert = alert;
        this.submitted = false;
    }
    EditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.postsServices.getById(params['id']);
        })).subscribe(function (post) {
            _this.post = post;
            _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](post.title, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](post.text, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
        });
    };
    EditPageComponent.prototype.ngOnDestroy = function () {
        if (this.uSub) {
            this.uSub.unsubscribe();
        }
    };
    EditPageComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        this.uSub = this.postsServices.upDate(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.post, { text: this.form.value.text, title: this.form.value.title })).subscribe(function () {
            _this.submitted = false;
            _this.alert.success('Congratulations, the post was refreshed!');
        });
    };
    EditPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
    ]; };
    EditPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-page',
            template: __webpack_require__(/*! raw-loader!./edit-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/edit-page/edit-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-page.component.scss */ "./src/app/admin/edit-page/edit-page.component.scss")]
        })
    ], EditPageComponent);
    return EditPageComponent;
}());



/***/ }),

/***/ "./src/app/admin/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/login-page/login-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  max-width: 600px;\n  margin: 0 auto;\n  background-color: #c7f2f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbG9naW4tcGFnZS9DOlxcVXNlcnNcXFNlcmdpaVxcV2Vic3Rvcm1Qcm9qZWN0c1xcYW5ndWxhci1ibG9nLXByb2plY3Qvc3JjXFxhcHBcXGFkbWluXFxsb2dpbi1wYWdlXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdmMmY4O1xyXG59XHJcbiIsImZvcm0ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3ZjJmODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.services */ "./src/app/admin/shared/services/auth.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['loginAgain']) {
                _this.message = 'Please login';
            }
            else if (params['authFailed']) {
                _this.message = 'Your session has expired, please login again.  ';
            }
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ])
        });
    };
    LoginPageComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        var user = {
            email: this.form.value.email,
            password: this.form.value.password
        };
        this.auth.login(user).subscribe(function () {
            _this.form.reset();
            _this.router.navigate(['/admin', 'dashboard']);
            _this.submitted = false;
        }, function () {
            _this.submitted = false;
        });
    };
    LoginPageComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/admin/login-page/login-page.component.scss")]
        })
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/components/admin-layout/admin-layout.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/shared/components/admin-layout/admin-layout.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NoYXJlZC9jb21wb25lbnRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/shared/components/admin-layout/admin-layout.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/shared/components/admin-layout/admin-layout.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.services */ "./src/app/admin/shared/services/auth.services.ts");




var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.auth.logout();
        this.router.navigate(['/admin', 'login']);
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"] }
    ]; };
    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/shared/components/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/admin/shared/components/admin-layout/admin-layout.component.scss")]
        })
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/shared/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (posts, search) {
        if (search === void 0) { search = ''; }
        if (!search.trim()) {
            return posts;
        }
        return posts.filter(function (post) {
            return post.title.toLowerCase().includes(search.toLowerCase());
        });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchPosts'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/admin/shared/services/auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/shared/services/auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.services */ "./src/app/admin/shared/services/auth.services.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.auth.logout();
            this.router.navigate(['/admin', 'login'], {
                queryParams: {
                    loginAgain: true
                }
            });
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthServices"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es5.js.map