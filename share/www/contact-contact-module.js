(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_5__["ContactPage"]
    }
];
var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_5__["ContactPage"]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.page.html":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <div class=\"head_berd\">\n        <div class=\"{{header_class}} header_backcolor\">\n            <!-- test -->\n            <ion-toolbar color=\"primary\" mode=\"ios\">\n                <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"settings()\">\n                        <ion-icon style=\"font-size: 2.85rem\" name=\"settings\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-toolbar>\n            <!-- test -->\n\n\n            <ion-row style=\"padding-bottom:5px;padding-top:5%;padding-left:5%;padding-right:5%\"\n                class=\"header_backcolor\">\n                <ion-col style=\"padding:0px\">\n                    <div style=\"text-align:left;position:relative\">\n                        <div\n                            style=\"display: inline-block;width:6.8rem;height:6.8rem;padding-top:0.4rem;border-radius:50%;background:#eee;text-align: center;\">\n                            <img src=\"{{userimg}}\" style=\"border-radius:50%;width: 6rem;height: 6rem;\" />\n                        </div>\n                        <div style=\"text-align: left;margin-left: 1rem;    display: inline-block;\">\n                            <p\n                                style=\"border-radius: 3px;padding: 0px;font-size:1.85rem;color:#fff;text-align:left;margin-bottom:7px;margin-top:2px;\">\n                                {{CName}}</p>\n                            <div *ngIf='checkTarotObj == 1'>\n                                <span\n                                    style=\"background:#f0cac9;color:#fff;border-radius:3px;padding:3px;padding-top:2px;padding-bottom:2px;font-size: 1.3rem;\">{{yingyezhuangtai}}</span>\n                                <span style=\"margin-left:5px;margin-right:5px;font-size: 1.3rem;\">|</span>\n                                <span style=\"color:#fff;font-size: 1.3rem;\">{{zixunpingfen}}%好评\n                                </span>\n                            </div>\n                            <p\n                                style=\"font-size:1.3rem;color:#fff;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;text-align:left;margin-bottom: 12px;\">\n                                {{gexingqianming}}</p>\n                        </div>\n\n                    </div>\n                </ion-col>\n\n            </ion-row>\n\n            <div class=\"shenq_f\" stype=\"height:30px;\">\n                <div *ngIf=\"checkTarotObj == 0\" class=\"cl\" (click)=\"applicationConsultant()\">\n                    <span style=\"float:left\">申请开始塔罗师之旅</span>\n                    <ion-icon name=\"ios-arrow-forward-outline\"></ion-icon>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ion-header>\n\n<ion-content #mycontent>\n\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"Crescent\" refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <!-- <ion-scroll scrollY=\"true\" zoom=\"true\" style=\"height:450px;background: rgba(255, 255, 255,1);\"> -->\n\n    <div\n        style=\"padding-top:15px;min-height:100%;background:#fff;border-top-left-radius:7px;border-top-right-radius:7px;\">\n        <p style=\"margin:0px;margin-bottom: 15px;margin-left:15px;font-size: 1.45rem;    color: #333333;\">个人中心</p>\n        <div>\n            <style>\n            </style>\n            <ion-row class=\"row11\">\n                <ion-col class=\"ion-col_top4\" (click)=\"dingd_click()\">\n                    <img src=\"../../assets/img/订单.png\">\n                    <p>我的订单</p>\n                </ion-col>\n                <ion-col class=\"ion-col_top4\" (click)=\"myfollow_click()\">\n                    <img src=\"../../assets/img/关注.png\">\n                    <p>我的关注</p>\n                </ion-col>\n                <ion-col class=\"ion-col_top4\" (click)=\"mywallet_click()\">\n\n                    <!-- <ion-icon color=\"button2\" ios=\"ios-card\" md=\"md-card\" isActive=\"false\"></ion-icon> -->\n                    <img src=\"../../assets/img/我的钱包.png\">\n                    <p>我的钱包</p>\n                </ion-col>\n                <ion-col class=\"ion-col_top4\" (click)=\"mysixin_click()\">\n                    <img src=\"../../assets/img/私信.png\">\n                    <p>我的消息</p>\n                </ion-col>\n\n            </ion-row>\n            <ion-row class=\"row11\">\n                <ion-col button (click)=\"mydata_click()\">\n                    <img src=\"../../assets/img/我的.png\" isActive=\"false\">\n                    <p>个人资料</p>\n                </ion-col>\n                <ion-col (click)=\"mycoupon_click()\">\n                    <img src=\"../../assets/img/优惠券.svg\">\n                    <p>优惠券</p>\n                </ion-col>\n                <ion-col (click)=\"todataactivety_click()\">\n                    <!-- <ion-icon color=\"button2\" name=\"ios-bowtie-outline\" isActive=\"false\"></ion-icon>\n                        <p>当前活动</p> -->\n                </ion-col>\n                <ion-col>\n                    <!-- <img src=\"img/联系我们.png\">\n                        <p>联系我们</p> -->\n                </ion-col>\n            </ion-row>\n            <div *ngIf=\"hangye =='tarot'\">\n                <p style=\"margin-bottom: 15px;margin-left:15px;font-size: 1.45rem;color: #333333;\">塔罗师设置</p>\n                <ion-row class=\"row11\">\n\n                    <ion-col (click)=\"myservicedate_click()\">\n                        <img src=\"../../assets/img/商店.png\">\n                        <p>营业设置</p>\n                    </ion-col>\n                    <ion-col>\n                        <img src=\"../../assets/img/名片.png\" (click)=\"myexolain_click()\">\n                        <p>名片编辑</p>\n                    </ion-col>\n                    <!-- <ion-col (click)=\"myserviceset_click()\">\n                        <img src=\"../../assets/img/咨询项目2.png\">\n                        <p>占卜项目</p>\n                    </ion-col> -->\n                    <ion-col (click)=\"objOrderListPage_click()\">\n                        <img src=\"../../assets/img/订单3.png\">\n                        <p>咨询订单</p>\n                    </ion-col>\n                    <ion-col (click)=\"myserviceset_click()\">\n                        <!-- <img src=\"../../assets/img/咨询项目2.png\">\n                        <p>占卜项目</p> -->\n                    </ion-col>\n\n                </ion-row>\n            </div>\n        </div>\n\n    </div>\n    <!-- </ion-scroll> -->\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-scroll {\n  white-space: nowrap; }\n\n.my-custom-menu {\n  --width: 500px; }\n\n.cl:after {\n  content: \".\";\n  clear: both;\n  display: block;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden; }\n\n.shenq_f {\n  text-align: center;\n  padding-bottom: 10px;\n  width: 80%;\n  margin: 0px auto; }\n\n.shenq_f div {\n  border-radius: 5px;\n  padding: 5px;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.1); }\n\n.shenq_f div:active {\n  background: rgba(0, 0, 0, 0.3); }\n\n.shenq_f ion-icon {\n  float: right;\n  margin-top: 2px; }\n\n.row11 ion-col ion-icon {\n  font-size: 4rem; }\n\n.row11 ion-col {\n  padding-top: 10px;\n  border: 1px solid #eee;\n  border-left: 0px;\n  text-align: center; }\n\n.row11 ion-col p {\n  margin-bottom: 7px;\n  font-size: 1.5rem;\n  color: #333333; }\n\n.ion-col_top4 {\n  border-bottom: 0px !important; }\n\n.row11 ion-col img {\n  width: 3rem !important;\n  /* margin-top: 3px */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLG1CQUFtQixFQUFBOztBQUMvQjtFQUNJLGNBQVEsRUFBQTs7QUFFWjtFQUNJLFlBQVc7RUFDWCxXQUFVO0VBQ1YsY0FBYTtFQUNiLFNBQVE7RUFDUixnQkFBZTtFQUNmLGtCQUFpQixFQUFBOztBQUVUO0VBRUksa0JBQWtCO0VBQUMsb0JBQW9CO0VBQUMsVUFBUztFQUFDLGdCQUFlLEVBQUE7O0FBR3JFO0VBQ0ksa0JBQWtCO0VBQUMsWUFBWTtFQUFDLFdBQVc7RUFBQyw4QkFBMkIsRUFBQTs7QUFHM0U7RUFDSSw4QkFBMkIsRUFBQTs7QUFJL0I7RUFBa0IsWUFBVztFQUFDLGVBQWUsRUFBQTs7QUFFN0M7RUFFSSxlQUFjLEVBQUE7O0FBRWxCO0VBQ0ksaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksc0JBQXNCO0VBQ3RCLG9CQUFBLEVBQXFCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zY3JvbGwge3doaXRlLXNwYWNlOm5vd3JhcCB9O1xuLm15LWN1c3RvbS1tZW51IHtcbiAgICAtLXdpZHRoOiA1MDBweDtcbiAgfVxuLmNsOmFmdGVye1xuICAgIGNvbnRlbnQ6XCIuXCI7XG4gICAgY2xlYXI6Ym90aDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGhlaWdodDowO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OmhpZGRlbjtcbiAgICAgIH1cbiAgICAgICAgICAgIC5zaGVucV9me1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZy1ib3R0b206IDEwcHg7d2lkdGg6ODAlO21hcmdpbjowcHggYXV0bzs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaGVucV9mIGRpdntcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7cGFkZGluZzogNXB4O2NvbG9yOiAjZmZmO2JhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNoZW5xX2YgZGl2OmFjdGl2ZXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICBcbiAgICAgICAgICAgIC5zaGVucV9mIGlvbi1pY29ue2Zsb2F0OnJpZ2h0O21hcmdpbi10b3A6IDJweDt9XG5cbiAgICAgICAgICAgIC5yb3cxMSBpb24tY29sIGlvbi1pY29uIHtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdzExIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93MTEgaW9uLWNvbCBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW9uLWNvbF90b3A0IHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJvdzExIGlvbi1jb2wgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogM3JlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC8qIG1hcmdpbi10b3A6IDNweCAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlcl9iYWNrY29sb3J7XG4gICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiRjb2xvcl9idXR0b24yO1xuICAgICAgICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
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






var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, Router, appMin, loadingCtrl, storage, menu) {
        this.navCtrl = navCtrl;
        this.Router = Router;
        this.appMin = appMin;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.menu = menu;
        this.isShowshenqing = true;
        this.header_class = "";
        this.userimg = "../assets/img/头像.png";
        // this.addUserData(false)//加载用户数据
        console.log("ContactPage!");
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        var _this = this;
        Router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                console.log('NavigationEnd !');
                _this.addUserData();
                _this.getCheckApplicationStep();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationCancel"]) {
                //
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationError"]) {
                //
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["RoutesRecognized"]) {
                //
            }
        });
    }
    ContactPage.prototype.ngOnInit = function () {
        this.LocalDataInitialization();
        this.addUserData();
        this.getCheckApplicationStep();
    };
    ContactPage.prototype.ionViewDidEnter = function () {
        //完全加载时触发
    };
    ContactPage.prototype.getCheckApplicationStep = function () {
        this.send(JSON.stringify({
            type: 'getCheckApplicationStep',
            userId: this.appMin.getUserid()
        }));
    };
    ContactPage.prototype.send = function (value, isshow) {
        var _this_1 = this;
        if (isshow) {
            this.loader = this.loadingCtrl.create({
                message: "加载中...",
                duration: 3000
            });
            this.loader.present();
        }
        this.appMin.post(JSON.parse(value)).subscribe(function (data) {
            _this_1.dataHandle(data);
        });
    };
    ContactPage.prototype.addUserData = function (isshow) {
        //加载用户数据
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('加载用户数据');
        var obj = {
            type: "getUserData",
            userId: this.appMin.getUserid(),
        };
        this.send(JSON.stringify(obj), isshow);
    };
    ContactPage.prototype.ionViewDidLeave = function () {
        //离开页面时触发
    };
    ContactPage.prototype.ionViewWillEnter = function () {
        //每次即将进入页面时触发
    };
    ContactPage.prototype.viewWillLeave = function () {
        //当将要从页面离开时触发
    };
    ContactPage.prototype.dingd_click = function () {
        //我的订单按钮
        var obj = {
            animation: "ios-transition" //设置过度效果
        };
        //  this.navCtrl.push(MyOrderListPage, null, obj);
        // this.router.navigate(['/consultant'],{queryParams:data})
        this.Router.navigate(['my-order-list'], { queryParams: {} });
    };
    ContactPage.prototype.myfollow_click = function () {
        //我的关注按钮
        //  this.navCtrl.push(MyfollowPage); 
        this.Router.navigate(['/myfollow'], { queryParams: {} });
    };
    ContactPage.prototype.mywallet_click = function () {
        //我的钱包按钮
        //   this.navCtrl.push(MywalletPage);
        this.Router.navigate(['/mywallet'], { queryParams: {} });
    };
    ContactPage.prototype.mysixin_click = function () {
        //我的私信
        //  this.navCtrl.push(MyletterPage);
        this.Router.navigate(['myletter'], { queryParams: {} });
    };
    ContactPage.prototype.mydata_click = function () {
        //我的个人资料按钮
        //  this.navCtrl.push(MysetdataPage);
        this.Router.navigate(["mysetdata"], { queryParams: {} });
    };
    ContactPage.prototype.mycoupon_click = function () {
        //我的优惠券按钮
        //  this.navCtrl.push(MyCouponPage);
        this.Router.navigate(["my-coupon"], { queryParams: {} });
    };
    ContactPage.prototype.todataactivety_click = function () {
        //当前活动按钮
        //  this.navCtrl.push(MyActivityPage);
    };
    ContactPage.prototype.myservicedate_click = function () {
        //营业设置
        //  this.navCtrl.push(MySetServiceDatePage);
        this.Router.navigate(["my-set-service-data"], { queryParams: {} });
    };
    ContactPage.prototype.myserviceset_click = function () {
        //服务设置按钮
        // this.navCtrl.push(MySetServiceSerectPage);
        this.Router.navigate(['my-set-service-serect']);
    };
    ContactPage.prototype.isShowhangye = function () {
        if (this.hangye == '0') {
            //显示加入申请
            this.isShowshenqing = true;
        }
        else {
            this.isShowshenqing = false;
        }
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("isShowhangye" + this.hangye);
        //  this.navCtrl.resize();
    };
    ContactPage.prototype.toPercent = function (point) {
        var str = Number(point * 10).toFixed(0);
        str += "%";
        return str;
    };
    ContactPage.prototype.myexolain_click = function () {
        //设置名片按钮
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("名片按钮被单击");
        //   this.navCtrl.push(MyExplainTxtSetPage);
        this.Router.navigate(['my-explain-txt-set']);
    };
    ContactPage.prototype.objOrderListPage_click = function () {
        // this.navCtrl.push(ObjOrderListPage);
        this.Router.navigate(['/obj-order-list'], { queryParams: {} });
    };
    ContactPage.prototype.settings = function () {
        //打开系统设置页面
        console.log('settings');
        this.Router.navigate(['settings'], { queryParams: {} });
        //   this.navCtrl.push(SettingsPage);
    };
    ContactPage.prototype.dataHandle = function (meg) {
        console.log(meg);
        if (this.refresher) {
            this.refresher.target.complete();
        }
        if (meg['type'] == 'getUserData_return') {
            // console.log('getUserData_return=' + JSON.stringify(meg));
            //返回用户数据
            this.CName = meg['CName'];
            // WitePrompt("getUserData_return的cname=" + this.CName);
            _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("CName", meg['CName'], 30);
            // alert("getUserData_return this.CName="+this.CName);
            if (meg['sex'] == "0") {
                this.sex = "男";
                _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("userSex", "男", 30);
            }
            else {
                this.sex = "女";
                _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("userSex", "女", 30);
            }
            if (meg['yingyezhuangtai'] == "1") {
                this.yingyezhuangtai = "Open";
                _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("yingyezhuangtai", "Open", 30);
            }
            else {
                this.yingyezhuangtai = "Stop";
                _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("yingyezhuangtai", "Stop", 30);
            }
            if (meg.hasOwnProperty('gexingqianming')) {
                this.gexingqianming = meg['gexingqianming'];
                if (this.gexingqianming.trim() == '') {
                    this.gexingqianming = "什么也没写";
                }
            }
            this.checkTarotObj = meg['checkTarotObj'];
            _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("gexingqianming", this.gexingqianming, 30);
            this.hangye = meg['hangye'];
            _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("hangye", meg['hangye'], 30);
            this.isShowhangye(); //显示隐藏咨询师申请
            //this.zixunpingfen = this.toPercent(meg['zixunpingfen']);
            var c = meg['zixunpingfen'];
            //  console.log("c=" + c);
            c = c * 100;
            c = Math.floor(c);
            //  console.log("c*100=" + c);
            this.zixunpingfen = c;
            _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("zixunpingfen", this.toPercent(meg['zixunpingfen']), 30);
            if (meg.hasOwnProperty('userimg')) {
                if (meg['userimg'] != '') {
                    this.userimg = meg['userimg'];
                    _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("userimg", meg['userimg'], 30);
                    this.appMin.setUserImg(meg['userimg']);
                }
                else {
                    this.userimg = "assets/img/头像.png";
                    _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("userimg", "assets/img/头像.png", 30);
                }
            }
            else {
                this.userimg = "assets/img/头像.png";
                _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("userimg", "assets/img/头像.png", 30);
            }
        }
        else if (meg['type'] == 'getCheckApplicationStep_ret') {
            this.applicationHandle = meg['Handle'];
        }
    };
    ContactPage.prototype.LocalDataInitialization = function () {
        //从本地存储加载用户数据
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("从本地存储加载用户数据");
        this.gexingqianming = _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('gexingqianming');
        this.yingyezhuangtai = _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('yingyezhuangtai');
        this.zixunpingfen = _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('zixunpingfen');
        this.hangye = _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('hangye');
        this.CName = _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('CName');
        this.sex = _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('userSez');
        this.userimg = _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('userimg');
        //  this.navCtrl.resize();
        // this.addUserData(false);
    };
    ContactPage.prototype.applicationConsultant = function () {
        //申请咨询师按钮
        // -1 无记录 0 未处理 1已通过 2 被驳回
        if (this.applicationHandle == '0') {
            //已经申请过
            this.Router.navigate(['application-consultant2'], { skipLocationChange: true }); //不保留历史记录
        }
        else if (this.applicationHandle == '-1' || this.applicationHandle == '2') {
            //不存在申请记录 或 已经被驳回需要重新申请
            this.Router.navigate(['application-consultant1']);
        }
        else {
            //applicationHandle==1 已经通过了
        }
    };
    ContactPage.prototype.doRefresh = function (refresher) {
        this.refresher = refresher;
        console.log('Begin async operation', refresher);
        this.addUserData(false);
        this.getCheckApplicationStep();
    };
    ContactPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.page.html */ "./src/app/contact/contact.page.html"),
            styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], ContactPage);
    return ContactPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map