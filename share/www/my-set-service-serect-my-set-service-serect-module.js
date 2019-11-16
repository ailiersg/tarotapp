(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-set-service-serect-my-set-service-serect-module"],{

/***/ "./src/app/my-set-service-serect/my-set-service-serect.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/my-set-service-serect/my-set-service-serect.module.ts ***!
  \***********************************************************************/
/*! exports provided: MySetServiceSerectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySetServiceSerectPageModule", function() { return MySetServiceSerectPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_set_service_serect_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-set-service-serect.page */ "./src/app/my-set-service-serect/my-set-service-serect.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_set_service_serect_page__WEBPACK_IMPORTED_MODULE_5__["MySetServiceSerectPage"]
    }
];
var MySetServiceSerectPageModule = /** @class */ (function () {
    function MySetServiceSerectPageModule() {
    }
    MySetServiceSerectPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_set_service_serect_page__WEBPACK_IMPORTED_MODULE_5__["MySetServiceSerectPage"]]
        })
    ], MySetServiceSerectPageModule);
    return MySetServiceSerectPageModule;
}());



/***/ }),

/***/ "./src/app/my-set-service-serect/my-set-service-serect.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/my-set-service-serect/my-set-service-serect.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>我的服务</ion-title>\n        <ion-buttons slot='end'>\n          <ion-button (click)=\"addservice_click()\">\n            <ion-label style=\"font-size: 1.6rem;\">添加</ion-label>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </div>\n\n\n  </div>\n\n\n\n</ion-header>\n\n<ion-content>\n  <ion-list style=\"margin-top:20px;\">\n\n\n    <ion-item *ngFor=\"let item of objlist\">\n      <ion-label >\n        <ion-text color=\"dark\">\n          {{item.serviceName}}\n        </ion-text>\n\n      </ion-label>\n      <ion-badge>{{item.serviceMoney}}¥</ion-badge>\n      <ion-buttons>\n        <ion-button expand=\"block\" (click)=\"deleteService(item.serviceId)\">删除</ion-button>\n        <ion-button shape=\"round\" (click)=\"serviceBtn(item.serviceId)\"> 查看</ion-button>\n      </ion-buttons>\n    </ion-item>\n    <!-- <ion-item class=\"item_f\" *ngFor=\"let item of objlist\">\n      <h2 class=\"name_h\">{{item.serviceName}}</h2>\n      <p>\n        <ion-badge>{{item.serviceMoney}}¥</ion-badge>\n        <span class=\"cish_sp\">服务{{item.serviceCount}}次</span>\n      </p>\n      <ion-button (click)=\"deleteService(item.serviceId)\">删除</ion-button>\n      <ion-button (click)=\"serviceBtn(item.serviceId)\">查看</ion-button>\n    </ion-item> -->\n\n    <!-- <ion-item  class=\"item_f\">\n            \n              <h2  class=\"name_h\">事业走势占卜</h2>\n              <p><ion-badge >99¥</ion-badge><span class=\"cish_sp\">服务287次</span></p>\n              <button ion-button clear item-end>删除</button>\n              <button ion-button clear item-end>查看</button>\n            </ion-item> -->\n  </ion-list>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/my-set-service-serect/my-set-service-serect.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/my-set-service-serect/my-set-service-serect.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: #ffffff;\n  --border-color: #eeeeee; }\n\nion-label {\n  --color:#333333\n; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktc2V0LXNlcnZpY2Utc2VyZWN0L215LXNldC1zZXJ2aWNlLXNlcmVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUNiLHVCQUFlLEVBQUE7O0FBRW5CO0VBQ0k7QUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXktc2V0LXNlcnZpY2Utc2VyZWN0L215LXNldC1zZXJ2aWNlLXNlcmVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItY29sb3I6ICNlZWVlZWU7XG59XG5pb24tbGFiZWx7XG4gICAgLS1jb2xvcjojMzMzMzMzXG59XG4vLyAudGl0bGVfaHtcbi8vICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbi8vIH1cbi8vIC5pbWdfZGl2e1xuLy8gICAgIHdpZHRoOiA1NXB4O1xuLy8gICAgIGhlaWdodDogNTVweDtcbi8vICAgICBiYWNrZ3JvdW5kOiAjQTNDQkUyO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjZmZmO1xuICAgIFxuLy8gICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgIFxuLy8gICAgIGZvbnQtc2l6ZTogMS4zZW07XG4vLyB9XG4vLyAuY2lzaF9zcHtcbi8vICAgICBtYXJnaW4tbGVmdDogNXB4O1xuLy8gfVxuLy8gLm5hbWVfaHttYXJnaW4tYm90dG9tOiA0cHg7fVxuLy8gLmljb24xe2ZvbnQtc2l6ZTogMS4zZW19XG5cbi8vICp7dHJhbnNpdGlvbjowLjVzIGxpbmVhciBhbGw7fSJdfQ== */"

/***/ }),

/***/ "./src/app/my-set-service-serect/my-set-service-serect.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/my-set-service-serect/my-set-service-serect.page.ts ***!
  \*********************************************************************/
/*! exports provided: MySetServiceSerectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySetServiceSerectPage", function() { return MySetServiceSerectPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MySetServiceSerectPage = /** @class */ (function () {
    function MySetServiceSerectPage(navCtrl, ActivatedRoute, Router, appMin, loadingCtrl, alertCtrl) {
        // socket1.removeEventListener('message', MySetServiceSerectPage_message);
        // let _this = this;
        this.navCtrl = navCtrl;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.appMin = appMin;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        // MySetServiceSerectPage_message = function (event) {
        //   let meg = JSON.parse(event.data);
        //   if (meg.type == "error") {
        //     WitePrompt("MySetServiceSerectPage页面监听消息===" + JSON.stringify(meg));
        //   } else {
        //     WitePrompt("MySetServiceSerectPage页面监听消息===" + meg.type);
        //   }
        //   if (_this.loader) {
        //     _this.loader.dismiss();
        //     _this.loader = null;
        //   }
        //   //安全的删除加载框结束 --
        //   if (meg.type == 'addMySetServiceSerectPage_ret') {
        //     _this.dataHandle(meg);
        //   }
        //   if (meg.type == 'deleteService_ret') {
        //     _this.dataHandle(meg);
        //   }
        // }
        // socket1.removeEventListener('close', MySetServiceSerectPage_close);
        // MySetServiceSerectPage_close = function () {
        //   WitePrompt('MySetServiceDatePage页面真听到close事件');
        //   let c = setInterval(function () {
        //     if (socket1.readyState == 1) {
        //       socket1.removeEventListener('message', MySetServiceSerectPage_message);
        //       socket1.addEventListener('message', MySetServiceSerectPage_message);
        //       clearInterval(c);
        //       WitePrompt('MySetServiceDatePage页面重新建立连接完成');
        //       c = null;
        //     }
        //   }, 500)
        // }
        // socket1.addEventListener('close', MySetServiceSerectPage_close);
        // socket1.addEventListener('message', MySetServiceSerectPage_message);
    }
    MySetServiceSerectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MySetServiceSerectPage');
    };
    MySetServiceSerectPage.prototype.ionViewDidEnter = function () {
        this.addMySetServiceSerectPage();
    };
    MySetServiceSerectPage.prototype.send = function (value, isshow) {
        var _this = this;
        if (isshow) {
            this.loader = this.loadingCtrl.create({
                message: "加载中...",
                duration: 3000
            });
            this.loader.present();
        }
        this.appMin.post(JSON.parse(value)).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MySetServiceSerectPage.prototype.addMySetServiceSerectPage = function () {
        //加载初始数据
        var obj = {
            type: "addMySetServiceSerectPage",
            userId: this.appMin.getUserid(),
        };
        this.send(JSON.stringify(obj), false);
    };
    MySetServiceSerectPage.prototype.serviceBtn = function (obj) {
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("send serviceId is " + obj);
        var par = {
            serviceId: obj
        };
        // this.navCtrl.push(MyServiceSetPage, par);
        //查看按钮单击事件
        //跳转
        this.Router.navigate(['my-service-info'], { queryParams: par });
    };
    MySetServiceSerectPage.prototype.addservice_click = function () {
        //添加新服务
        //  this.navCtrl.push(CreatServicePage);
        this.Router.navigate(['my-set-service-create'], { queryParams: {} });
    };
    MySetServiceSerectPage.prototype.deleteService = function (serviceId) {
        //删除服务
        this.showConfirm(serviceId);
    };
    MySetServiceSerectPage.prototype.showConfirm = function (serviceId) {
        return __awaiter(this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '删除咨询项目?',
                            message: '你确定要删除咨询项目吗?',
                            buttons: [
                                {
                                    text: '取消',
                                    handler: function () {
                                        console.log('Disagree clicked');
                                    }
                                },
                                {
                                    text: '删除',
                                    handler: function () {
                                        console.log('Agree clicked');
                                        var obj = {
                                            type: "deleteService",
                                            serviceId: serviceId,
                                            userId: _this.appMin.getUserid()
                                        };
                                        _this.send(JSON.stringify(obj), true);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        confirm = _a.sent();
                        confirm.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MySetServiceSerectPage.prototype.dataHandle = function (meg) {
        if (meg['type'] == "addMySetServiceSerectPage_ret") {
            this.objlist = meg["rows"];
        }
        if (meg['type'] == "deleteService_ret") {
            //删除完成 重新加载数据
            this.addMySetServiceSerectPage();
        }
    };
    MySetServiceSerectPage.prototype.ngOnInit = function () {
    };
    MySetServiceSerectPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-set-service-serect',
            template: __webpack_require__(/*! ./my-set-service-serect.page.html */ "./src/app/my-set-service-serect/my-set-service-serect.page.html"),
            styles: [__webpack_require__(/*! ./my-set-service-serect.page.scss */ "./src/app/my-set-service-serect/my-set-service-serect.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], MySetServiceSerectPage);
    return MySetServiceSerectPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-set-service-serect-my-set-service-serect-module.js.map