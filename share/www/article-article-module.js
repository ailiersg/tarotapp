(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article-article-module"],{

/***/ "./src/app/article/article.module.ts":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePageModule", function() { return ArticlePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _article_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article.page */ "./src/app/article/article.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _article_page__WEBPACK_IMPORTED_MODULE_5__["ArticlePage"]
    }
];
var ArticlePageModule = /** @class */ (function () {
    function ArticlePageModule() {
    }
    ArticlePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_article_page__WEBPACK_IMPORTED_MODULE_5__["ArticlePage"]]
        })
    ], ArticlePageModule);
    return ArticlePageModule;
}());



/***/ }),

/***/ "./src/app/article/article.page.html":
/*!*******************************************!*\
  !*** ./src/app/article/article.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"secondary\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{title}}</ion-title>\n\n      </ion-toolbar>\n    </div>\n  </div>\n\n</ion-header>\n\n<ion-content >\n    <img [src]=\"data.contentImg\" style=\"width:100%;margin-top: 1rem;\">\n \n</ion-content>"

/***/ }),

/***/ "./src/app/article/article.page.scss":
/*!*******************************************!*\
  !*** ./src/app/article/article.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/article/article.page.ts":
/*!*****************************************!*\
  !*** ./src/app/article/article.page.ts ***!
  \*****************************************/
/*! exports provided: ArticlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePage", function() { return ArticlePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlePage = /** @class */ (function () {
    function ArticlePage(Router, ActivatedRoute, appMin, sanitizer) {
        // this.data={
        //   contentImg:''
        // }
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.appMin = appMin;
        this.sanitizer = sanitizer;
        this.data = { contentImg: '' };
        //输出
        this.title = "";
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
            console.log("判断为安卓系统 设置状态栏样式");
        }
    }
    ArticlePage.prototype.ngOnInit = function () {
        this.addSpecialPage();
        //console.log(this.ActivatedRoute.snapshot.queryParams);
    };
    ArticlePage.prototype.addSpecialPage = function () {
        var _this = this;
        var obj = {
            type: 'addSpecialPage',
            specialId: this.ActivatedRoute.snapshot.queryParams["id"]
        };
        this.appMin.get(obj).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    ArticlePage.prototype.assembleHTML = function () {
        return this.sanitizer.bypassSecurityTrustHtml(this.txt);
    };
    ArticlePage.prototype.dataHandle = function (msg) {
        if (msg['type'] == 'addSpecialPage_ret') {
            console.log("addSpecialPage_ret=" + JSON.stringify(msg));
            this.title = msg['title'];
            // this.txt = msg['txt'];
            this.craet_date = msg['craet_date'];
            this.imgUrl = msg['imgUrl'];
            this.data = msg;
            this.contentImg = msg.contentImg;
            // this.objItem = msg['objItem'];
        }
    };
    ArticlePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.page.html */ "./src/app/article/article.page.html"),
            styles: [__webpack_require__(/*! ./article.page.scss */ "./src/app/article/article.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ArticlePage);
    return ArticlePage;
}());



/***/ })

}]);
//# sourceMappingURL=article-article-module.js.map