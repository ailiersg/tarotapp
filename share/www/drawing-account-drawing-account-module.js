(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drawing-account-drawing-account-module"],{

/***/ "./src/app/drawing-account/drawing-account.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/drawing-account/drawing-account.module.ts ***!
  \***********************************************************/
/*! exports provided: DrawingAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingAccountPageModule", function() { return DrawingAccountPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _drawing_account_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawing-account.page */ "./src/app/drawing-account/drawing-account.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _drawing_account_page__WEBPACK_IMPORTED_MODULE_5__["DrawingAccountPage"]
    }
];
var DrawingAccountPageModule = /** @class */ (function () {
    function DrawingAccountPageModule() {
    }
    DrawingAccountPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_drawing_account_page__WEBPACK_IMPORTED_MODULE_5__["DrawingAccountPage"]]
        })
    ], DrawingAccountPageModule);
    return DrawingAccountPageModule;
}());



/***/ }),

/***/ "./src/app/drawing-account/drawing-account.page.html":
/*!***********************************************************!*\
  !*** ./src/app/drawing-account/drawing-account.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>设置提款账户</ion-title>\n        <ion-buttons slot='end'>\n          <ion-button (click)=\"baoc_click()\">\n            <ion-label>保存</ion-label>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </div>\n  </div>\n\n\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-label color=\"button2\" stacked>支付宝账户:</ion-label>\n      <ion-input [(ngModel)]=\"AlipayNab\" type=\"text\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>身份证号码:</ion-label>\n      <ion-input [(ngModel)]=\"identification\" type=\"Number\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>姓名:</ion-label>\n      <ion-input [(ngModel)]=\"name\" type=\"text\" ></ion-input>\n    </ion-item>\n    <ion-item style=\"display:none\">\n      <ion-label floating>服务名称</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/drawing-account/drawing-account.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/drawing-account/drawing-account.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: #ffffff;\n  --border-color:#eeeeee; }\n\nion-content {\n  --padding-top:16px; }\n\nion-input {\n  --color:#666666; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvZHJhd2luZy1hY2NvdW50L2RyYXdpbmctYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYTtFQUNiLHNCQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kcmF3aW5nLWFjY291bnQvZHJhd2luZy1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci1jb2xvcjojZWVlZWVlO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLXRvcDoxNnB4O1xufVxuXG5pb24taW5wdXR7XG4gICAgLS1jb2xvcjojNjY2NjY2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/drawing-account/drawing-account.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/drawing-account/drawing-account.page.ts ***!
  \*********************************************************/
/*! exports provided: DrawingAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingAccountPage", function() { return DrawingAccountPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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



var DrawingAccountPage = /** @class */ (function () {
    function DrawingAccountPage(navCtrl, appMin, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.appMin = appMin;
        this.loadingCtrl = loadingCtrl;
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        // socket.removeEventListener('message', DrawingAccountPage_message);
        // let _this = this;
        // DrawingAccountPage_message = function (event) {
        //   let meg = JSON.parse(event.data);
        //   if (meg.type == "error") {
        //     WitePrompt("DrawingAccountPage页面监听消息===" + JSON.stringify(meg));
        //   } else {
        //     WitePrompt("DrawingAccountPage页面监听消息===" + meg.type);
        //   }
        //   if (_this.loader) {
        //     _this.loader.dismiss();
        //     _this.loader = null;
        //   }
        //   //安全的删除加载框结束 --
        //   if (meg.type == 'addDrawingAccountPage_ret') {
        //     _this.dataHandle(meg);
        //   }
        //   if (meg.type == 'setDrawingAccount_ret') {
        //     _this.dataHandle(meg);
        //   }
        // }
        // socket.addEventListener('message', DrawingAccountPage_message);
    }
    DrawingAccountPage.prototype.send = function (value, isshow) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isshow) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "加载中...",
                                duration: 3000
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        this.appMin.post(JSON.parse(value)).subscribe(function (data) {
                            _this.dataHandle(data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DrawingAccountPage.prototype.baoc_click = function () {
        //保存按钮
        var obj = {
            type: "setDrawingAccount",
            userId: this.appMin.getUserid(),
            AlipayNab: this.AlipayNab,
            identification: this.identification,
            name: this.name
        };
        this.send(JSON.stringify(obj), true);
    };
    DrawingAccountPage.prototype.addDrawingAccountPage = function () {
        //加载初始数据
        var obj = {
            type: "addDrawingAccountPage",
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj), false);
    };
    DrawingAccountPage.prototype.dataHandle = function (meg) {
        if (meg['type'] == "addDrawingAccountPage_ret") {
            // AlipayNab:string;
            // identification:string;
            // name:string;
            this.AlipayNab = meg["AlipayNab"];
            this.identification = meg["identification"];
            this.name = meg["name"];
        }
        if (meg['type'] == "setDrawingAccount_ret") {
            //设置账户ok
            this.navCtrl.pop();
        }
    };
    DrawingAccountPage.prototype.ngOnInit = function () {
        this.addDrawingAccountPage();
    };
    DrawingAccountPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawing-account',
            template: __webpack_require__(/*! ./drawing-account.page.html */ "./src/app/drawing-account/drawing-account.page.html"),
            styles: [__webpack_require__(/*! ./drawing-account.page.scss */ "./src/app/drawing-account/drawing-account.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], DrawingAccountPage);
    return DrawingAccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=drawing-account-drawing-account-module.js.map