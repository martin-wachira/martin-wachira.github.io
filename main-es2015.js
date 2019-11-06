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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- <app-welcome></app-welcome> -->\n<!-- <app-login></app-login> -->\n<p style=\"color: red; font-weight: 400;\"></p>\n&nbsp; &nbsp;\n<p style=\"text-align: center; color: green; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\">Application by Martin Wachira | All Rights Reserved &copy; 2019 Andela|Google|Pluralsight</p>\n&nbsp; &nbsp;"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/favorite/favorite.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/favorite/favorite.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark maroon\" [containerInside]=\"false\">\n    <!-- Navbar brand -->\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"/assets/images/netflix.jpg\" height=\"120\" class=\"d-inline-block align-top\" alt=\"mini_netflix logo\">\n    </a>\n    <div class=\"row\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n                <button mdbBtn type=\"button\" color=\"danger\" rounded=\"true\">Favorites</button>\n            </li>\n\n            &nbsp; &nbsp;\n            <li class=\"nav-item pull-right\">\n                <input style=\"margin-top: 10px;\" class=\"form-control\" type=\"text\" placeholder=\"Search\"\n                    [(ngModel)]=\"searchText\">\n            </li>\n            <!-- <a class=\"nav-link\" style=\"margin-top: 10px;\">Search</a> -->\n        </ul>\n    </div>\n\n</mdb-navbar>\n\n<div class=\"row\">\n    <div class=\"col-md-4\">\n        <!--Card-->\n        <mdb-card cascade=\"true\" wider=\"true\">\n\n            <!-- Card image-->\n            <div class=\"view view-cascade overlay waves-light\" style=\"height: 250px;\" mdbWavesEffect>\n                <!-- <mdb-card-img [src]='item.imgUrl'>\n                </mdb-card-img> -->\n                <a>\n                    <div class=\"mask rgba-black-slight\"></div>\n                </a>\n            </div>\n            <!--/Card image -->\n\n            <mdb-card-body cascade=\"true\" class=\"text-center\">\n                <!--Card content-->\n                <!--Title-->\n                <h4 class=\"card-title\">\n                    <strong></strong>\n                </h4>\n                <h5 class=\"indigo-text\">\n                    <!-- <strong>{{item.title}}</strong> -->\n                </h5>\n\n                <mdb-card-text>\n\n                    <!-- <ul>\n                        <li>\n                            {{item.title}}\n                        </li>\n                        <li>\n                            {{item.releaseDate}}\n                        </li>\n                        <li>\n                            {{item.director}}\n                        </li>\n                    </ul> -->\n                </mdb-card-text>\n\n                <!-- <button mdbBtn type=\"button\" color=\"danger\" rounded=\"true\" (click)=\"likeMovie(item)\">like</button> -->\n\n            </mdb-card-body>\n            <!--/.Card content-->\n\n        </mdb-card>\n        <!--/.Card-->\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/welcome.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/welcome.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\r\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark maroon\" [containerInside]=\"false\">\r\n\r\n    <!-- Navbar brand -->\r\n    <a class=\"navbar-brand\">\r\n        <img src=\"/assets/images/netflix.jpg\" height=\"120\" class=\"d-inline-block align-top\" alt=\"mini_netflix logo\">\r\n    </a>\r\n    <div class=\"row\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <button mdbBtn type=\"button\" color=\"danger\" rounded=\"true\" (click)=\"gotoFav()\">Favorites</button>\r\n            </li>\r\n\r\n            &nbsp; &nbsp;\r\n            <li class=\"nav-item pull-right\">\r\n                <input style=\"margin-top: 10px;\" class=\"form-control\" type=\"text\" placeholder=\"Search\"\r\n                    [(ngModel)]=\"searchText\">\r\n            </li>\r\n            <!-- <a class=\"nav-link\" style=\"margin-top: 10px;\">Search</a> -->\r\n        </ul>\r\n    </div>\r\n\r\n    <links>\r\n\r\n        <!-- Links -->\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <a style=\"color: green\" (click)=\"moveToLogin()\">Sign in</a> &nbsp;\r\n                <button mdbBtn type=\"button\" color=\"danger\" rounded=\"true\" outline=\"true\" mdbWavesEffect type=\"button\"\r\n                    mdbBtn rounded=\"true\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"frame.show()\"\r\n                    mdbWavesEffect>Sign Up</button>\r\n\r\n                <div mdbModal #frame=\"mdbModal\" class=\"modal fade top\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\"\r\n                    aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                    <div class=\"modal-dialog\" role=\"document\">\r\n                        <!--Content-->\r\n                        <div class=\"modal-content form-elegant\">\r\n                            <!--Header-->\r\n                            <div class=\"modal-header text-center\">\r\n                                <h3 class=\"modal-title w-100 dark-grey-text font-weight-bold my-3\" id=\"myModalLabel\">\r\n                                    <strong>Sign Up</strong>\r\n                                </h3>\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n                                    (click)=\"frame.hide()\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <!--Body-->\r\n                            <div class=\"modal-body mx-4\">\r\n                                <!--Body-->\r\n\r\n                                <form [formGroup]=\"validatingForm\">\r\n                                    <div class=\"md-form form-sm\">\r\n                                        <mdb-icon fas icon=\"user\" class=\"prefix grey-text\"></mdb-icon>\r\n                                        <input style=\"color: rgb(126, 93, 93)\" type=\"text\" id=\"Form-username1\"\r\n                                            formControlName=\"username\" class=\"form-control\" mdbInput mdbValidate>\r\n                                        <label for=\"Form-username1\">Username</label>\r\n                                        <mdb-error *ngIf=\"username.invalid && (username.dirty || username.touched)\">\r\n                                            Input invalid\r\n                                        </mdb-error>\r\n                                        <!-- <mdb-success *ngIf=\"username.valid && (username.dirty || username.touched)\">\r\n                                        Input valid\r\n                                    </mdb-success> -->\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"md-form form-sm\">\r\n                                        <mdb-icon fas icon=\"envelope\" class=\"prefix grey-text\"></mdb-icon>\r\n                                        <input type=\"email\" style=\"color: rgb(126, 93, 93)\" id=\"Form-email1\"\r\n                                            formControlName=\"email\" class=\"form-control\" mdbInput mdbValidate>\r\n                                        <label for=\"Form-email1\">Email</label>\r\n                                        <mdb-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n                                            Input invalid\r\n                                        </mdb-error>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"md-form form-sm\">\r\n                                        <mdb-icon fas icon=\"lock\" class=\"prefix grey-text\"></mdb-icon>\r\n                                        <input type=\"password\" style=\"color: rgb(126, 93, 93)\" id=\"Form-pass1\"\r\n                                            formControlName=\"password\" class=\"form-control\" mdbInput mdbValidate>\r\n                                        <label for=\"Form-pass1\">Your password</label>\r\n                                        <mdb-error *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n                                            Input invalid\r\n                                        </mdb-error>\r\n\r\n                                    </div>\r\n\r\n                                    <!-- <div class=\"md-form form-sm\">\r\n                                        <mdb-icon fas icon=\"lock\" class=\"prefix grey-text\"></mdb-icon>\r\n                                        <input type=\"password\" style=\"color: rgb(126, 93, 93)\" formControlName=\"cnfpass\" class=\"form-control\" mdbInput mdbValidate>\r\n                                        <label for=\"form23\">Confirm</label>\r\n                                        <mdb-error>\r\n                                            Input invalid\r\n                                        </mdb-error>\r\n                                        <mdb-success *ngIf=\"cnfpass.valid && (cnfpass.dirty || cnfpass.touched)\">\r\n                                            Input valid\r\n                                        </mdb-success>\r\n                                        <p class=\"font-small blue-text d-flex justify-content-end\">Forgot\r\n                                            <a href=\"#\" class=\"blue-text ml-1\"> Password?</a>\r\n                                        </p>\r\n                                </div> -->\r\n\r\n                                    <div class=\"md-form form-sm\">\r\n\r\n                                        <mdb-success>\r\n                                            {{successMessage}}\r\n                                        </mdb-success>\r\n                                    </div>\r\n\r\n                                    <div class=\"text-center mb-3\">\r\n                                        <button type=\"button\" mdbBtn gradient=\"blue\" block=\"true\" rounded=\"true\"\r\n                                            class=\"z-depth-1a waves-light\" mdbWavesEffect color=\"success\"\r\n                                            (click)=\"register()\">Sign up\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                </form>\r\n\r\n\r\n                                <p class=\"font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2\">\r\n                                    or Sign in\r\n                                    with:</p>\r\n\r\n                                <div class=\"row my-3 d-flex justify-content-center\">\r\n                                    <!--Facebook-->\r\n                                    <button type=\"button\" mdbBtn color=\"white\" rounded=\"true\"\r\n                                        class=\"mr-md-3 z-depth-1a waves-light\" mdbWavesEffect>\r\n                                        <mdb-icon fab icon=\"facebook-f\" class=\"text-center\"></mdb-icon>\r\n                                    </button>\r\n                                    <!--Twitter-->\r\n                                    <button type=\"button\" mdbBtn color=\"white\" rounded=\"true\"\r\n                                        class=\"mr-md-3 z-depth-1a waves-light\" mdbWavesEffect>\r\n                                        <mdb-icon fab icon=\"twitter\"></mdb-icon>\r\n                                    </button>\r\n                                    <!--Google +-->\r\n                                    <button type=\"button\" mdbBtn color=\"white\" rounded=\"true\"\r\n                                        class=\"z-depth-1a waves-light\" mdbWavesEffect>\r\n                                        <mdb-icon fab icon=\"google-plus\"></mdb-icon>\r\n                                    </button>\r\n                                </div>\r\n                                <!--Footer-->\r\n                                <div class=\"modal-footer mx-5 pt-3 mb-1\">\r\n                                    <p class=\"font-small grey-text d-flex justify-content-end\">Already have an Account?\r\n                                        <a class=\"blue-text ml-1\" (click)=\"moveToLogin()\"> Sign In</a>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--/.Content-->\r\n                    </div>\r\n                </div>\r\n\r\n            </li>\r\n        </ul>\r\n        <!-- Links -->\r\n    </links>\r\n\r\n</mdb-navbar>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\" *ngFor=\"let movie of movies | filter:searchText\">\r\n        <!--Card-->\r\n        <mdb-card cascade=\"true\" wider=\"true\">\r\n\r\n            <!-- Card image-->\r\n            <div class=\"view view-cascade overlay waves-light\" style=\"height: 250px;\" mdbWavesEffect>\r\n                <!-- <a [routerLink]=\"[ '/movie', movie.id ]\"> -->\r\n                <a (click)=\"gotoDetails(movie.id)\">\r\n                    <mdb-card-img [src]='movie.imgUrl'>\r\n                    </mdb-card-img>\r\n                    <div class=\"mask rgba-black-slight\"></div>\r\n                </a>\r\n            </div>\r\n            \r\n\r\n            <mdb-card-body cascade=\"true\" class=\"text-center\">\r\n                <!--Card content-->\r\n                <!--Title-->\r\n                <h4 class=\"card-title\">\r\n                    <strong></strong>\r\n                </h4>\r\n                <h5 class=\"indigo-text\">\r\n                    <strong>{{movie.title}}</strong>\r\n                </h5>\r\n\r\n                <mdb-card-text>\r\n                \r\n                    <ul>\r\n                        <li>\r\n                            {{movie.title}}\r\n                        </li>\r\n                        <li>\r\n                            {{movie.releaseDate}}\r\n                        </li>\r\n                        <li>\r\n                            {{movie.director}}\r\n                        </li>\r\n                    </ul>\r\n                </mdb-card-text>\r\n\r\n                <button mdbBtn type=\"button\" color=\"danger\" rounded=\"true\" (click)=\"toggleLike()\">\r\n                    {{showLike ? 'Like' : 'Like'}}\r\n                </button>\r\n\r\n            </mdb-card-body>\r\n            <!--/.Card content-->\r\n\r\n        </mdb-card>\r\n        <!--/.Card-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark maroon\" [containerInside]=\"false\">\n\n        <!-- Navbar brand -->\n        <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"/assets/images/netflix.jpg\" height=\"120\" class=\"d-inline-block align-top\" alt=\"mini_netflix logo\">\n        </a>\n    \n    </mdb-navbar>\n    \n\n\n<!-- Material form login -->\n\n<mdb-card class=\"col-md-4\">\n\n        <mdb-card-header class=\"info-color white-text text-center py-4\">\n          <h5>\n            <strong>Sign in</strong>\n          </h5>\n        </mdb-card-header>\n      \n      \n        <!--Card content-->\n        <mdb-card-body class=\"px-lg-5 pt-0\">\n      \n          <!-- Form -->\n          <form class=\"text-center\" [formGroup]=\"loginForm\">\n      \n            <!-- Email -->\n            <div class=\"md-form\">\n              <input type=\"email\" id=\"materialLoginFormEmail\" class=\"form-control\" formControlName=\"email\" mdbInput>\n              <label for=\"materialLoginFormEmail\">E-mail</label>\n              <mdb-error *ngIf=\"isValid('email')\">Email cannot be blank</mdb-error>\n            </div>\n      \n            <!-- Password -->\n            <div class=\"md-form\">\n              <input type=\"password\" id=\"materialLoginFormPassword\" class=\"form-control\" formControlName=\"password\" mdbInput>\n              <label for=\"materialLoginFormPassword\">Password</label>\n              <mdb-error *ngIf=\"isValid('password')\">Password cannot be blank</mdb-error>\n            </div>\n\n            \n            <div class=\"d-flex justify-content-around\">\n              <div>\n                <!-- Remember me -->\n                <mdb-checkbox>Remember me</mdb-checkbox>\n              </div>\n              <div>\n                <!-- Forgot password -->\n                <a href=\"\">Forgot password?</a>\n              </div>\n            </div>\n      \n            <!-- Sign in button -->\n            <button mdbBtn color=\"info\" outline=\"true\" rounded=\"true\" block=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect\n              type=\"submit\" (click)=\"login()\">Sign in</button>\n      \n            <!-- Register -->\n            <p>Not a member?\n              <a class=\"blue-text ml-1\" (click)=\"moveToRegister()\">Register</a>\n            </p>\n      \n            <!-- Social login -->\n            <p>or sign in with:</p>\n            <a type=\"button\" mdbBtn floating=\"true\" color=\"fb\" size=\"sm\">\n              <mdb-icon fab icon=\"facebook\"></mdb-icon>\n            </a>\n            <a type=\"button\" mdbBtn floating=\"true\" color=\"tw\" size=\"sm\">\n              <mdb-icon fab icon=\"twitter\"></mdb-icon>\n            </a>\n            <a type=\"button\" mdbBtn floating=\"true\" color=\"li\" size=\"sm\">\n              <mdb-icon fab icon=\"linkedin\"></mdb-icon>\n            </a>\n            <a type=\"button\" mdbBtn floating=\"true\" color=\"git\" size=\"sm\">\n              <mdb-icon fab icon=\"github\"></mdb-icon>\n            </a>\n      \n          </form>\n          <!-- Form -->\n      \n        </mdb-card-body>\n      \n      </mdb-card>\n      <!-- Material form login -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movies/movie.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movies/movie.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark maroon\" [containerInside]=\"false\">\n    <!-- Navbar brand -->\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"/assets/images/netflix.jpg\" height=\"120\" class=\"d-inline-block align-top\" alt=\"mini_netflix logo\">\n    </a>\n    <div class=\"row\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n                    <a href=\"favorite\"> <button mdbBtn type=\"button\" color=\"danger\" rounded=\"true\"> Favorites</button></a>\n            </li>\n\n            &nbsp; &nbsp;\n            <li class=\"nav-item pull-right\">\n                <input style=\"margin-top: 10px;\" class=\"form-control\" type=\"text\" placeholder=\"Search\"\n                    [(ngModel)]=\"searchText\">\n            </li>\n\n        </ul>\n    </div>\n\n</mdb-navbar>\n\n<section *ngIf=\"movie\">\n\n    <!--Section heading-->\n    <h2 style=\"color:green;\" class=\"h1 py-5 font-weight-bold text-center\">{{movie.title}}</h2>\n    \n    <!--Grid row-->\n    <div class=\"row pt-2\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-5 text-center text-lg-left\">\n            <img [src]='movie.imgUrl' alt=\"\" class=\"img-fluid z-depth-0\">\n        </div>\n\n        <div class=\"col-lg-7\">\n\n            <!--Grid row-->\n            <div class=\"row pb-3\">\n                <div class=\"col-10\"  *ngIf=\"movie.author\">\n                    <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Author</h5>\n                    <p class=\"grey-text text-left\">{{movie.author}}</p>\n                </div>\n\n                <div class=\"col-10\"  *ngIf=\"movie.director\">\n                    <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Author</h5>\n                    <p class=\"grey-text text-left\">{{movie.director}}</p>\n                </div>\n\n                <div class=\"col-10\" *ngIf=\"movie.description\">\n                    <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Description</h5>\n                    <p class=\"grey-text text-left\">{{movie.description}}</p>\n                </div>\n                \n                <div class=\"col-10\"  *ngIf=\"movie.plot\">\n                    <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Plot</h5>\n                    <p class=\"grey-text text-left\">{{movie.plot}}</p>\n                </div>\n\n                <div class=\"col-10\"  *ngIf=\"movie.genre\">\n                    <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Genre</h5>\n                    <p class=\"grey-text text-left\">{{movie.genre}}</p>\n                </div>\n\n                <div class=\"col-10\"  *ngIf=\"movie.releaseDate\">\n                    <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Release Date</h5>\n                    <p class=\"grey-text text-left\">{{movie.releaseDate}}</p>\n                </div>\n                \n                <div class=\"col-10\"  *ngIf=\"movie.award\">\n                    <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Awards</h5>\n                    <p class=\"grey-text text-left\">{{movie.award}}</p>\n                </div>\n\n                <div class=\"col-10\" *ngIf=\"movie.rating\">\n                    <h5 class=\"font-weight-bold text-left mb-3 dark-grey-text\">Rating</h5>\n                    <p class=\"grey-text text-left\">{{movie.rating}}</p>\n                </div>\n            </div>\n            <!--Grid row-->\n\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n</section>\n<!--Section: Features v.3-->"

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
/* harmony import */ var _movies_movie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies/movie.component */ "./src/app/movies/movie.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");








const routes = [
    { path: 'register', component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'favorite', component: _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_7__["FavoriteComponent"] },
    { path: 'movie', component: _movies_movie_component__WEBPACK_IMPORTED_MODULE_1__["MovieComponent"] },
    { path: 'movie/:id', component: _movies_movie_component__WEBPACK_IMPORTED_MODULE_1__["MovieComponent"] },
    // { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: '**', redirectTo: 'register', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        declarations: []
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
    constructor() {
        this.title = 'mdb-angular-free';
    }
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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _movies_movie_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movies/movie.component */ "./src/app/movies/movie.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _movies_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./movies/filter.pipe */ "./src/app/movies/filter.pipe.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _home_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"],
            _movies_movie_component__WEBPACK_IMPORTED_MODULE_14__["MovieComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_16__["FavoriteComponent"],
            _movies_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MDBBootstrapModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/favorite/favorite.component.scss":
/*!**************************************************!*\
  !*** ./src/app/favorite/favorite.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlL2Zhdm9yaXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/favorite/favorite.component.ts":
/*!************************************************!*\
  !*** ./src/app/favorite/favorite.component.ts ***!
  \************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavoriteComponent = class FavoriteComponent {
    constructor() {
        this.searchText = '';
    }
    ngOnInit() { }
};
FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite',
        template: __webpack_require__(/*! raw-loader!./favorite.component.html */ "./node_modules/raw-loader/index.js!./src/app/favorite/favorite.component.html"),
        styles: [__webpack_require__(/*! ./favorite.component.scss */ "./src/app/favorite/favorite.component.scss")]
    })
], FavoriteComponent);



/***/ }),

/***/ "./src/app/home/register.service.ts":
/*!******************************************!*\
  !*** ./src/app/home/register.service.ts ***!
  \******************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");







let RegisterService = class RegisterService {
    constructor(http, fs, db) {
        this.http = http;
        this.fs = fs;
        this.db = db;
        this.movieCollection = this.fs.collection('movies', ref => ref.orderBy('title', 'asc'));
        this.movies = this.movieCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    getAllMovies() {
        return this.movies;
    }
    getMovie(id) {
        return this.getAllMovies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((movies) => movies.find(m => m.id === id)));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An Error Occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server Returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    submitRegister(body) {
        return this.http.post('http://localhost:3000/users/register', body, {
            observe: 'body'
        });
    }
    login(body) {
        return this.http.post('http://localhost:3000/users/login', body, {
            observe: 'body'
        });
    }
    getUserName() {
        return this.http.get('http://localhost:3000/users/username', {
            observe: 'body',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('token', localStorage.getItem('token'))
        });
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }
];
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegisterService);



/***/ }),

/***/ "./src/app/home/welcome.component.scss":
/*!*********************************************!*\
  !*** ./src/app/home/welcome.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-elegant .font-small {\n  font-size: 0.8rem;\n}\n\n.form-elegant .z-depth-1a {\n  box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);\n}\n\n.form-elegant .z-depth-1-half,\n.form-elegant .btn:hover {\n  box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);\n}\n\n.form-elegant .modal-header {\n  border-bottom: none;\n}\n\n.modal-dialog .form-elegant .btn .fa {\n  color: #2196f3 !important;\n}\n\n.form-elegant .modal-body, .form-elegant .modal-footer {\n  font-weight: 400;\n}\n\nmdb-card-body {\n  background-color: black;\n}\n\nhr {\n  color: green;\n  height: 5px;\n  font-weight: 100;\n}\n\nh4 {\n  color: white;\n}\n\nimg.img-fluid {\n  width: 40px;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJvamVjdHNcXEFuZ3VsYXJcXE1pbmlOZXRmbGl4XFxuZXRmbGl4TWluaS9zcmNcXGFwcFxcaG9tZVxcd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURDSTtFQUVBLHdGQUFBO0FDRUo7O0FEQUk7O0VBR0Esd0ZBQUE7QUNHSjs7QURESTtFQUNBLG1CQUFBO0FDSUo7O0FERkk7RUFDQSx5QkFBQTtBQ0tKOztBREhJO0VBQ0EsZ0JBQUE7QUNNSjs7QURISTtFQUNJLHVCQUFBO0FDTVI7O0FESEk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDTVI7O0FESEk7RUFDSSxZQUFBO0FDTVI7O0FESEk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ01SIiwiZmlsZSI6InNyYy9hcHAvaG9tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZWxlZ2FudCAuZm9udC1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTsgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1lbGVnYW50IC56LWRlcHRoLTFhIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSg1NSwgMTYxLCAyNTUsIDAuMjYpLCAwIDRweCAxMnB4IDAgcmdiYSgxMjEsIDE1NSwgMjU0LCAwLjI1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoNTUsIDE2MSwgMjU1LCAwLjI2KSwgMCA0cHggMTJweCAwIHJnYmEoMTIxLCAxNTUsIDI1NCwgMC4yNSk7IH1cclxuICAgIFxyXG4gICAgLmZvcm0tZWxlZ2FudCAuei1kZXB0aC0xLWhhbGYsXHJcbiAgICAuZm9ybS1lbGVnYW50IC5idG46aG92ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgyNTUsIDg1LCA4NSwgMC4yOCksIDAgNHB4IDE1cHggMCByZ2JhKDI1NSwgNTQsIDM2LCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDg1LCAxODIsIDI1NSwgMC4yOCksIDAgNHB4IDE1cHggMCByZ2JhKDM2LCAxMzMsIDI1NSwgMC4xNSk7IH1cclxuICAgIFxyXG4gICAgLmZvcm0tZWxlZ2FudCAubW9kYWwtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cclxuICAgIFxyXG4gICAgLm1vZGFsLWRpYWxvZyAuZm9ybS1lbGVnYW50IC5idG4gLmZhIHtcclxuICAgIGNvbG9yOiAjMjE5NmYzIWltcG9ydGFudDsgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1lbGVnYW50IC5tb2RhbC1ib2R5LCAuZm9ybS1lbGVnYW50IC5tb2RhbC1mb290ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxyXG5cclxuICAgIC8vIGN1c3RvbWUgc3R5bGUgQGF1dGhvcj13Y3JcclxuICAgIG1kYi1jYXJkLWJvZHl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaHJ7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgIFxyXG4gICAgfVxyXG5cclxuICAgIGltZy5pbWctZmx1aWQge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcblxyXG4iLCIuZm9ybS1lbGVnYW50IC5mb250LXNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5mb3JtLWVsZWdhbnQgLnotZGVwdGgtMWEge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoNTUsIDE2MSwgMjU1LCAwLjI2KSwgMCA0cHggMTJweCAwIHJnYmEoMTIxLCAxNTUsIDI1NCwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoNTUsIDE2MSwgMjU1LCAwLjI2KSwgMCA0cHggMTJweCAwIHJnYmEoMTIxLCAxNTUsIDI1NCwgMC4yNSk7XG59XG5cbi5mb3JtLWVsZWdhbnQgLnotZGVwdGgtMS1oYWxmLFxuLmZvcm0tZWxlZ2FudCAuYnRuOmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgyNTUsIDg1LCA4NSwgMC4yOCksIDAgNHB4IDE1cHggMCByZ2JhKDI1NSwgNTQsIDM2LCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoODUsIDE4MiwgMjU1LCAwLjI4KSwgMCA0cHggMTVweCAwIHJnYmEoMzYsIDEzMywgMjU1LCAwLjE1KTtcbn1cblxuLmZvcm0tZWxlZ2FudCAubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLm1vZGFsLWRpYWxvZyAuZm9ybS1lbGVnYW50IC5idG4gLmZhIHtcbiAgY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZWxlZ2FudCAubW9kYWwtYm9keSwgLmZvcm0tZWxlZ2FudCAubW9kYWwtZm9vdGVyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxubWRiLWNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5ociB7XG4gIGNvbG9yOiBncmVlbjtcbiAgaGVpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbmg0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbWcuaW1nLWZsdWlkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.service */ "./src/app/home/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");






let WelcomeComponent = class WelcomeComponent {
    constructor(fb, service, router, a_route, db) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.a_route = a_route;
        this.db = db;
        this.successMessage = '';
        this.showLike = false;
        this.searchText = '';
        this.errorMessage = '';
        this.editState = false;
        this.validationMessages = {
            required: 'Please enter your password.',
        };
    }
    ngOnInit() {
        this.validatingForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.service.getAllMovies().subscribe(movies => {
            this.movies = movies;
        });
    }
    gotoDetails(id) {
        this.router.navigate(['/movie', id]);
    }
    setMessage(c) {
        this.passMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.passMessage = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
        }
    }
    toggleLike() {
        this.showLike = !this.showLike;
    }
    register() {
        console.log(this.validatingForm.value);
        if (this.validatingForm.valid) {
            this.service.submitRegister(this.validatingForm.value)
                .subscribe(data => this.successMessage = 'Registration Successfuly', error => this.successMessage = 'Some errors');
        }
    }
    moveToLogin() {
        this.router.navigate(['../login'], { relativeTo: this.a_route });
    }
    gotoFav() {
        this.router.navigate(['../favorite'], { relativeTo: this.a_route });
    }
    get username() {
        return this.validatingForm.get('username');
    }
    get email() {
        return this.validatingForm.get('email');
    }
    get password() {
        return this.validatingForm.get('password');
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/home/welcome.component.scss")]
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  color: #757575;\n}\n\nmdb-card {\n  margin-left: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFByb2plY3RzXFxBbmd1bGFyXFxNaW5pTmV0ZmxpeFxcbmV0ZmxpeE1pbmkvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGNvbG9yOiAjNzU3NTc1XHJcbn1cclxubWRiLWNhcmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xyXG59IiwiZm9ybSB7XG4gIGNvbG9yOiAjNzU3NTc1O1xufVxuXG5tZGItY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiA1MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/register.service */ "./src/app/home/register.service.ts");





let LoginComponent = class LoginComponent {
    constructor(fb, service, router, a_route) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.a_route = a_route;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    isValid(controlName) {
        return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
    }
    login() {
        console.log(this.loginForm.value);
        if (this.loginForm.valid) {
            this.service.login(this.loginForm.value)
                .subscribe(data => {
                console.log(data);
                localStorage.setItem('token', data.toString());
                this.router.navigate(['/favorite']);
            }, error => { });
        }
    }
    moveToRegister() {
        this.router.navigate(['../register'], { relativeTo: this.a_route });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _home_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);

;


/***/ }),

/***/ "./src/app/movies/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/movies/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, searchText) {
        if (!items || !searchText) {
            return items;
        }
        return items.filter(item => item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/movies/movie.component.scss":
/*!*********************************************!*\
  !*** ./src/app/movies/movie.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/movies/movie.component.ts":
/*!*******************************************!*\
  !*** ./src/app/movies/movie.component.ts ***!
  \*******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../home/register.service */ "./src/app/home/register.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let MovieComponent = class MovieComponent {
    constructor(service, a_route) {
        this.service = service;
        this.a_route = a_route;
    }
    ngOnInit() {
        let param = this.a_route.snapshot.paramMap.get('id');
        if (param) {
            const id = param;
            this.getMovie(id);
        }
    }
    getMovie(id) {
        this.service.getMovie(id).subscribe({
            next: movie => this.movie = movie,
        });
    }
};
MovieComponent.ctorParameters = () => [
    { type: _home_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-movie',
        template: __webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/index.js!./src/app/movies/movie.component.html"),
        styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/movies/movie.component.scss")]
    })
], MovieComponent);



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
    firebase: {
        apiKey: "AIzaSyBuKNJVHq057JovzyBq1tVL8uIhI7YVXUw",
        authDomain: "netflixmini-dc522.firebaseapp.com",
        databaseURL: "https://netflixmini-dc522.firebaseio.com",
        projectId: "netflixmini-dc522",
        storageBucket: "netflixmini-dc522.appspot.com",
        messagingSenderId: "243595701311",
        appId: "1:243595701311:web:aecbbfe1ec29a843a4dc8a",
        measurementId: "G-Z0Z471R5PK"
    }
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

module.exports = __webpack_require__(/*! D:\Projects\Angular\MiniNetflix\netflixMini\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map