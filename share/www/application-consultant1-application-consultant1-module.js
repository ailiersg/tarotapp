(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-consultant1-application-consultant1-module"],{

/***/ "./src/app/application-consultant1/application-consultant1.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/application-consultant1/application-consultant1.module.ts ***!
  \***************************************************************************/
/*! exports provided: ApplicationConsultant1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationConsultant1PageModule", function() { return ApplicationConsultant1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _application_consultant1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application-consultant1.page */ "./src/app/application-consultant1/application-consultant1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _application_consultant1_page__WEBPACK_IMPORTED_MODULE_5__["ApplicationConsultant1Page"]
    }
];
var ApplicationConsultant1PageModule = /** @class */ (function () {
    function ApplicationConsultant1PageModule() {
    }
    ApplicationConsultant1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_application_consultant1_page__WEBPACK_IMPORTED_MODULE_5__["ApplicationConsultant1Page"]]
        })
    ], ApplicationConsultant1PageModule);
    return ApplicationConsultant1PageModule;
}());



/***/ }),

/***/ "./src/app/application-consultant1/application-consultant1.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/application-consultant1/application-consultant1.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"secondary\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>咨询师入驻</ion-title>\n        <ion-buttons slot='end'>\n          <ion-button (click)='ApplicationConsultant()'>\n            <ion-label style=\"font-size: 1.5rem;\">下一步</ion-label>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </div>\n  </div>\n\n</ion-header>\n\n\n\n<ion-content>\n  <ion-item-group>\n    <ion-item>\n      <ion-label stacked>昵称</ion-label>\n      <ion-input [disabled]=true type=\"text\" [(ngModel)]=\"input_CName\" placeholder=\"\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>真实姓名<sup>*</sup></ion-label>\n      <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"input_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>手机号</ion-label>\n      <ion-input [disabled]='true' [(ngModel)]=\"input_PhoneUnmber\" type=\"number\" placeholder=\"\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>QQ号</ion-label>\n      <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"input_QQ\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>从业时长<sup>*</sup></ion-label>\n      <ion-input type=\"number\" placeholder=\"年\" [(ngModel)]=\"input_workYears\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>年龄<sup>*</sup></ion-label>\n      <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"input_age\"></ion-input>\n    </ion-item>\n    <ion-item button [detail]='true'>\n      <ion-label stacked>性别<sup>*</sup></ion-label>\n      <ion-input (click)=\"selectGender()\" type=\"text\" [disabled]='!checkGender' [readonly]='true' placeholder=\"\" [ngModel]=\"input_gender\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">是否有入驻其他平台，有则填写平台名称</ion-label>\n      <ion-textarea  placeholder=\"点此输入\" [(ngModel)]=\"input_otherPlatforms\"></ion-textarea>\n    </ion-item>\n    <ion-item style=\"display:none\">\n      <ion-label  stacked>是否有入驻其他平台，有则填写平台名称</ion-label>\n      <ion-input type=\"text\" placeholder=\"\"></ion-input>\n    </ion-item>\n  </ion-item-group>\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/application-consultant1/application-consultant1.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/application-consultant1/application-consultant1.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: #ffffff;\n  --border-color:#eeeeee; }\n\nion-content {\n  --padding-top:16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvYXBwbGljYXRpb24tY29uc3VsdGFudDEvYXBwbGljYXRpb24tY29uc3VsdGFudDEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7RUFDYixzQkFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi1jb25zdWx0YW50MS9hcHBsaWNhdGlvbi1jb25zdWx0YW50MS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItY29sb3I6I2VlZWVlZTtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLXRvcDoxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/application-consultant1/application-consultant1.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/application-consultant1/application-consultant1.page.ts ***!
  \*************************************************************************/
/*! exports provided: ApplicationConsultant1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationConsultant1Page", function() { return ApplicationConsultant1Page; });
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




var ApplicationConsultant1Page = /** @class */ (function () {
    function ApplicationConsultant1Page(navCtrl, Router, alertCtrl, actionSheetCtrl, appMin, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.Router = Router;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.appMin = appMin;
        this.loadingCtrl = loadingCtrl;
        this.input_CName = "";
        this.input_name = "";
        this.input_PhoneUnmber = "";
        this.input_QQ = "";
        this.input_workYears = "";
        this.input_age = ""; //年龄
        this.input_gender = ""; //输出性别
        this.input_sex = ""; //提交性别
        this.input_otherPlatforms = ""; //其他平台
        this.checkGender = false;
        if (this.appMin.GetPhoneMode() != "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
        }
        var _this = this;
    }
    ApplicationConsultant1Page.prototype.ionViewDidLoad = function () {
        // this.addApplicationConsultant();
    };
    ApplicationConsultant1Page.prototype.ngOnInit = function () {
        this.addApplicationConsultant();
    };
    ApplicationConsultant1Page.prototype.send = function (value, isshow) {
        return __awaiter(this, void 0, void 0, function () {
            var _this_1 = this;
            return __generator(this, function (_a) {
                if (isshow) {
                    // this.loader = await this.loadingCtrl.create({
                    //   header : "加载中...",
                    //   duration: 3000
                    // });
                    // this.loader.present();
                }
                this.appMin.post(JSON.parse(value)).subscribe(function (data) {
                    _this_1.dataHandle(data);
                });
                return [2 /*return*/];
            });
        });
    };
    ApplicationConsultant1Page.prototype.selectGender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            buttons: [
                                {
                                    text: '男',
                                    // role: 'destructive',
                                    handler: function () {
                                        _this_1.input_gender = "男";
                                        _this_1.input_sex = '0';
                                    }
                                },
                                {
                                    text: '女',
                                    handler: function () {
                                        _this_1.input_gender = '女';
                                        _this_1.input_sex = '1';
                                    }
                                },
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationConsultant1Page.prototype.addApplicationConsultant = function () {
        var obj = {
            type: 'ApplicationConsultant',
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj));
    };
    ApplicationConsultant1Page.prototype.presentAlert = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            // header: '提示',
                            message: val,
                            buttons: ['确定']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationConsultant1Page.prototype.ApplicationConsultant = function () {
        //提交申请表
        var this1 = this;
        if (this.input_name == '') {
            this.presentAlert("请填写姓名");
            return;
        }
        // if (this.input_QQ.trim() == '') {
        //   this.presentAlert("请填写QQ号");
        //   return;
        // }
        if (this.input_workYears == '') {
            this.presentAlert("请填写从业时长");
            return;
        }
        if (this.input_age == '') {
            this.presentAlert("请填写年龄");
            return;
        }
        console.log('this.input_sex=' + this.input_sex);
        if (this.input_sex == '') {
            this.presentAlert("请填写性别");
            return;
        }
        var obj = {
            type: 'upApplicationConsultant',
            userId: this.appMin.getUserid(),
            input_age: this.input_age,
            input_gender: (this.input_gender == '男') ? '0' : '1',
            input_name: this.input_name,
            input_otherPlatforms: this.input_otherPlatforms,
            input_QQ: this.input_QQ,
            input_workYears: this.input_workYears,
        };
        this.send(JSON.stringify(obj));
    };
    ApplicationConsultant1Page.prototype.dataHandle = function (meg) {
        console.log(JSON.stringify(meg));
        if (meg['type'] == 'ApplicationConsultant_ret') {
            this.input_CName = meg['CName'];
            this.input_name = meg['name'];
            this.input_gender = meg['gender'];
            if (meg['gender'] == '') {
                this.checkGender = true;
            }
            else {
                if (meg['gender'] == '男') {
                    this.input_sex = '0';
                }
                else {
                    this.input_sex = '1';
                }
            }
            this.input_PhoneUnmber = meg['PhoneUnmber'];
        }
        if (meg['type'] == 'upApplicationConsultant_ret') {
            if (meg['count'] == '1') {
                //提交成功 准备跳转
                this.appMin.setIsApplicationConsultant(true); //标识已经申请了
                this.Router.navigate(['application-consultant2']);
                // this.navCtrl.push(ApplicationConsultant_2Page);
            }
            else {
                //  console.log('提交失败');
            }
        }
    };
    ApplicationConsultant1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-consultant1',
            template: __webpack_require__(/*! ./application-consultant1.page.html */ "./src/app/application-consultant1/application-consultant1.page.html"),
            styles: [__webpack_require__(/*! ./application-consultant1.page.scss */ "./src/app/application-consultant1/application-consultant1.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], ApplicationConsultant1Page);
    return ApplicationConsultant1Page;
}());



/***/ })

}]);
//# sourceMappingURL=application-consultant1-application-consultant1-module.js.map