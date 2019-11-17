(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myletter-myletter-module"],{

/***/ "./src/app/myletter/myletter.module.ts":
/*!*********************************************!*\
  !*** ./src/app/myletter/myletter.module.ts ***!
  \*********************************************/
/*! exports provided: MyletterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyletterPageModule", function() { return MyletterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myletter_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myletter.page */ "./src/app/myletter/myletter.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _myletter_page__WEBPACK_IMPORTED_MODULE_5__["MyletterPage"]
    }
];
var MyletterPageModule = /** @class */ (function () {
    function MyletterPageModule() {
    }
    MyletterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_myletter_page__WEBPACK_IMPORTED_MODULE_5__["MyletterPage"]]
        })
    ], MyletterPageModule);
    return MyletterPageModule;
}());



/***/ }),

/***/ "./src/app/myletter/myletter.page.html":
/*!*********************************************!*\
  !*** ./src/app/myletter/myletter.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" >\n        <ion-buttons slot=\"secondary\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>我的消息</ion-title>\n      </ion-toolbar>\n    </div>\n  </div>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-refresher *ngIf=\"appMin.islogin()\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"Crescent\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div style=\"margin-top: 1rem;padding: 0px;\">\n    <ion-list style=\"margin:0px\">\n      <ion-item detail (click)=\"note_click()\">\n        <ion-avatar slot=\"start\">\n          <img src=\"../assets/img/noteimg.png\">\n\n        </ion-avatar>\n        <ion-label text-wrap>\n          <ion-text color=\"primary\">\n            <h3>系统消息</h3>\n          </ion-text>\n\n\n        </ion-label>\n\n        <ion-badge slot=\"end\" *ngIf=\"sysNotes > 0\" item-end color=\"secondary\">{{sysNotes}}</ion-badge>\n      </ion-item>\n    </ion-list>\n    <div *ngIf=\"!is_show_ing\" style=\"text-align: center;color: #666666;margin-top: 1rem;font-size: 1.45rem\">\n      {{logintxt}}\n    </div>\n    <ion-list style=\"margin:0px\">\n      <ion-item detail *ngFor=\"let ContactIngItem of ContactIngItem let i of ContactIngItem.userid\"\n        (click)=\"myobjimg_click(ContactIngItem)\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{ContactIngItem.UserImgUrl}}\">\n        </ion-avatar>\n        <ion-label text-wrap>\n          <ion-text color=\"primary\">\n            <h3>{{ContactIngItem.CName}}</h3>\n          </ion-text>\n          <p>{{ContactIngItem.letter}}</p>\n\n        </ion-label>\n\n        <ion-badge slot=\"end\" *ngIf=\"ContactIngItem.isRed > 0\" item-end color=\"secondary\">{{ContactIngItem.isRed}}\n        </ion-badge>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n  <ion-infinite-scroll *ngIf=\"appMin.islogin()\" immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/myletter/myletter.page.scss":
/*!*********************************************!*\
  !*** ./src/app/myletter/myletter.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-note, ion-badge {\n  font-size: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXlsZXR0ZXIvbXlsZXR0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXlsZXR0ZXIvbXlsZXR0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW5vdGUsaW9uLWJhZGdle1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/myletter/myletter.page.ts":
/*!*******************************************!*\
  !*** ./src/app/myletter/myletter.page.ts ***!
  \*******************************************/
/*! exports provided: MyletterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyletterPage", function() { return MyletterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { MyletterDPage } from '../myletter-d/myletter-d'


//import { ConsultTimePage } from '../consult-time/consult-time';

var MyletterPage = /** @class */ (function () {
    function MyletterPage(navCtrl, Router, appMin, alertCtrl, actionSheetCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.Router = Router;
        this.appMin = appMin;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.page = 0;
        this.ContactIngItem = [];
        this.logintxt = "没有其他消息。。";
        this.checkMore = true;
        this.sysNotes = 0;
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
            console.log("判断为安卓系统 设置状态栏样式");
        }
    }
    MyletterPage.prototype.send = function (value, isshow) {
        var _this = this;
        if (!this.appMin.islogin()) {
            console.log("未登录 不加载对话列表");
            return;
        }
        ; //没有登录 不加载任何数据
        if (isshow) {
            if (!this.loader) {
                this.loader = this.loadingCtrl.create({
                    message: "加载中...",
                    duration: 3000
                });
                this.loader.present();
            }
        }
        this.appMin.get(JSON.parse(value)).subscribe(function (data) {
            if (isshow) {
                if (_this.loader) {
                    _this.loader.dismiss();
                }
            }
            if (_this.refresher) {
                // this.refresher.target.cancel();
            }
            _this.dataHandle(data, true);
        });
    };
    MyletterPage.prototype.getUserNote = function () {
        var _this = this;
        var obj = {
            type: 'getUserNote',
            toUserId: this.appMin.getUserid(),
        };
        this.appMin.get((obj)).subscribe(function (data) {
            _this.dataHandle(data, true);
        });
    };
    MyletterPage.prototype.doInfinite = function (infiniteScroll) {
        //无限加载
        if (!this.checkMore) {
            infiniteScroll.target.complete();
            return;
        }
        this.infiniteScroll = infiniteScroll;
        this.addContactIng();
    };
    MyletterPage.prototype.note_click = function () {
        this.Router.navigate(['user-note']);
    };
    MyletterPage.prototype.myobjclick = function (val) {
        //对方列表被单击
        var obj = {
            toUserId: val.userid,
            CName: val.CName,
            UserImgUrl: val.UserImgUrl
        };
        this.Router.navigate(["consult-time"], { queryParams: obj });
    };
    MyletterPage.prototype.doRefresh = function (refresher) {
        //下拉刷新
        console.log('Begin async operation', refresher);
        this.refresher = refresher;
        // this.addLetterList();
        this.page = 0;
        this.addContactIng();
        this.addNotesUnReadCount();
        this.getUserNote();
        // setTimeout(() => {
        //   this.refresher.target.complete();
        // }, 2000);
    };
    MyletterPage.prototype.dataHandle = function (meg, isSevaLocal) {
        //处理收到的数据
        //  console.log("contactret="+JSON.stringify(meg));
        if (meg == null)
            return;
        if (this.infiniteScroll) {
            this.infiniteScroll.target.complete(false);
        }
        if (this.refresher) {
            this.refresher.target.complete();
        }
        if (meg['type'] == 'addContactIng_ret') {
            if (meg['rows'].length < 10) {
                this.checkMore = false;
            }
            else {
                this.checkMore = true;
            }
            if (meg['page'] != "1") {
                //不是第一页
                for (var i = 0; i < meg['rows'].length; i++) {
                    this.ContactIngItem.push(meg['rows'][i]);
                }
            }
            else {
                //第一次加载
                this.ContactIngItem = meg['rows'];
            }
            if (this.ContactIngItem.length == 0) {
                this.is_show_ing = false;
            }
            else {
                this.is_show_ing = true;
            }
        }
    };
    MyletterPage.prototype.addContactIng = function () {
        //加载正在咨询中的消息
        console.log("addContactIng!");
        var c = {
            type: 'addContactIng',
            userId: this.appMin.getUserid(),
            page: (this.page += 1).toString()
        };
        this.send(JSON.stringify(c));
    };
    MyletterPage.prototype.myobjimg_click = function (val) {
        console.log("myobjimg_click=" + JSON.stringify(val));
        var obj = {
            toUserId: val.userid,
            CName: val.CName,
            UserImgUrl: val.UserImgUrl,
            orderId: val.orderId,
            userIsObj: 1 //
        };
        // this.navCtrl.push(ConsultTimePage, obj, null);
        this.Router.navigate(["consult-time"], { queryParams: obj });
    };
    MyletterPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter myletter!");
        if (!this.appMin.islogin()) {
            this.logintxt = "请先登录";
            this.ContactIngItem = [];
            this.page = 0;
            this.is_show_ing = false;
        }
        else {
            this.logintxt = "没有其他消息。。";
        }
        this.page = 0;
        this.addContactIng();
        this.addNotesUnReadCount();
        var myEvent = new Event('addNotesUnReadCount');
        window.dispatchEvent(myEvent); //触发登录全局事件 加载未读通知列表
    };
    MyletterPage.prototype.addNotesUnReadCount = function () {
        var _this = this;
        console.log("addNotesUnReadCount");
        var obj = {
            type: "addNotesUnReadCount",
            toUserId: this.appMin.getUserid(),
        };
        this.appMin.post((obj)).subscribe(function (data) {
            // console.log(data);
            _this.sysNotes = data['sysNotes'];
            // this.userMsgs = data['userMsgs'];
            // this.sumNote = this.sysNotes + this.userMsgs;
        });
    };
    MyletterPage.prototype.ngOnInit = function () {
        // this.getUserNote();
        var _this = this;
        window.addEventListener("back_consult", function () {
            //从聊天页面后退回来 重新刷新列表
            _this.page = 0;
            _this.addContactIng();
            _this.addNotesUnReadCount();
            _this.getUserNote();
        });
    };
    MyletterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myletter',
            template: __webpack_require__(/*! ./myletter.page.html */ "./src/app/myletter/myletter.page.html"),
            styles: [__webpack_require__(/*! ./myletter.page.scss */ "./src/app/myletter/myletter.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], MyletterPage);
    return MyletterPage;
}());



/***/ })

}]);
//# sourceMappingURL=myletter-myletter-module.js.map