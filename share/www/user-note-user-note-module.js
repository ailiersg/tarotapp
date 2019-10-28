(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-note-user-note-module"],{

/***/ "./src/app/user-note/user-note.module.ts":
/*!***********************************************!*\
  !*** ./src/app/user-note/user-note.module.ts ***!
  \***********************************************/
/*! exports provided: UserNotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotePageModule", function() { return UserNotePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_note_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-note.page */ "./src/app/user-note/user-note.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _user_note_page__WEBPACK_IMPORTED_MODULE_5__["UserNotePage"]
    }
];
var UserNotePageModule = /** @class */ (function () {
    function UserNotePageModule() {
    }
    UserNotePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_note_page__WEBPACK_IMPORTED_MODULE_5__["UserNotePage"]]
        })
    ], UserNotePageModule);
    return UserNotePageModule;
}());



/***/ }),

/***/ "./src/app/user-note/user-note.page.html":
/*!***********************************************!*\
  !*** ./src/app/user-note/user-note.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" >\n        <ion-buttons  slot=\"secondary\">\n          <ion-back-button  text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>系统消息</ion-title>\n      </ion-toolbar>\n    </div>\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-refresher  (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"Crescent\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <div class=\"items\">\n    <div class=\"item\" *ngFor=\"let item of items\">\n      <div class=\"head cl\">\n        <img src=\"../assets/img/noteimg.png\">\n        <span>\n          <div>系统通知</div>\n          <div>{{item.date}}</div>\n        </span>\n\n      </div>\n      <div class=\"about\">\n        {{item.msg}}\n      </div>\n    </div>\n  </div>\n\n  <ion-infinite-scroll immediate-check=\"false\" [disabled]=\"disabled\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/user-note/user-note.page.scss":
/*!***********************************************!*\
  !*** ./src/app/user-note/user-note.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head img {\n  width: 3rem;\n  float: left;\n  margin-right: 1rem; }\n\n.head div {\n  color: #666666; }\n\n.head {\n  margin-bottom: .5rem; }\n\n.about {\n  color: #333333; }\n\n.item {\n  padding: 1rem;\n  background: #ffffff;\n  border-radius: 0.4rem;\n  margin-bottom: 1rem; }\n\n.about {\n  margin-top: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvdXNlci1ub3RlL3VzZXItbm90ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyLW5vdGUvdXNlci1ub3RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtc3tcblxufVxuLmhlYWQgaW1ne1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5oZWFkIGRpdntcbiAgICBjb2xvcjojNjY2NjY2O1xufVxuLmhlYWR7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG4uYWJvdXR7XG4gICAgY29sb3I6IzMzMzMzMztcbn1cbi5pdGVte1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5hYm91dHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user-note/user-note.page.ts":
/*!*********************************************!*\
  !*** ./src/app/user-note/user-note.page.ts ***!
  \*********************************************/
/*! exports provided: UserNotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotePage", function() { return UserNotePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserNotePage = /** @class */ (function () {
    function UserNotePage(Router, AppMin) {
        this.Router = Router;
        this.AppMin = AppMin;
        this.items = [];
        this.page = 0;
        this.disabled = false;
    }
    UserNotePage.prototype.doRefresh = function (refresher) {
        this.page = 0;
        this.items = [];
        this.addNote(refresher);
    };
    UserNotePage.prototype.doInfinite = function (infiniteScroll) {
        this.addNote(infiniteScroll);
    };
    UserNotePage.prototype.addNote = function (infiniteScroll) {
        var _this = this;
        var obj = {
            type: "getUserNote",
            page: this.page + 1,
            toUserId: this.AppMin.getUserid(),
        };
        this.AppMin.get((obj)).subscribe(function (data) {
            // this.items = data['rows'];
            for (var i = 0; i < data['rows'].length; i++) {
                _this.items.push(data['rows'][i]);
            }
            _this.page = data['page'];
            if (data['rows'].length == 0) {
                _this.disabled = true;
            }
            if (infiniteScroll) {
                infiniteScroll.target.complete();
            }
        });
    };
    UserNotePage.prototype.ngOnInit = function () {
        this.addNote();
    };
    UserNotePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-note',
            template: __webpack_require__(/*! ./user-note.page.html */ "./src/app/user-note/user-note.page.html"),
            styles: [__webpack_require__(/*! ./user-note.page.scss */ "./src/app/user-note/user-note.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"]])
    ], UserNotePage);
    return UserNotePage;
}());



/***/ })

}]);
//# sourceMappingURL=user-note-user-note-module.js.map