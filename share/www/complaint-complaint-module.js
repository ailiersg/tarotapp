(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaint-complaint-module"],{

/***/ "./src/app/complaint/complaint.module.ts":
/*!***********************************************!*\
  !*** ./src/app/complaint/complaint.module.ts ***!
  \***********************************************/
/*! exports provided: ComplaintPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintPageModule", function() { return ComplaintPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _complaint_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complaint.page */ "./src/app/complaint/complaint.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _complaint_page__WEBPACK_IMPORTED_MODULE_5__["ComplaintPage"]
    }
];
var ComplaintPageModule = /** @class */ (function () {
    function ComplaintPageModule() {
    }
    ComplaintPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_complaint_page__WEBPACK_IMPORTED_MODULE_5__["ComplaintPage"]]
        })
    ], ComplaintPageModule);
    return ComplaintPageModule;
}());



/***/ }),

/***/ "./src/app/complaint/complaint.page.html":
/*!***********************************************!*\
  !*** ./src/app/complaint/complaint.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>投诉咨询师</ion-title>\n      </ion-toolbar>\n    </div>\n  </div>\n</ion-header>\n<ion-content class=\"complaint\" style=\"background-color: #f5f5f9;\" overflow-scroll=\"true\">\n  <div padding style=\"margin-bottom: 40px;   margin-top: 10px;\">\n\n    <div style=\"border-radius: 8px;padding:6px;background-color:#fff;margin-bottom:10px;box-shadow: 1px 3px 2px #eee;\">\n      <ion-list class=\"list_f\">\n        <ion-list-header>\n          投诉内容\n        </ion-list-header>\n        <ion-item>\n          塔罗师：\n          <span class='btn_sp'>{{toUserCName}}</span>\n\n        </ion-item>\n        <ion-item>\n          订单号：\n          <span class='btn_sp'>{{orderId}}</span>\n        </ion-item>\n\n\n      </ion-list>\n      <ion-list  *ngIf=\"!ishowjb()\">\n        <ion-radio-group>\n        <ion-list-header>\n          投诉原因\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>没有回复我</ion-label>\n          <ion-radio checked  (click)='onRadio(\"没有回复我\")' value=\"cord\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>咨询质量不好</ion-label>\n          <ion-radio  (click)='onRadio(\"咨询质量不好\")' value=\"duesenberg\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>太水</ion-label>\n          <ion-radio  (click)='onRadio(\"太水\")' value=\"hudson\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          其他原因：\n          <ion-textarea [(ngModel)]=\"OtherCause\" placeholder=\"其他原因...\" ></ion-textarea>\n        </ion-item>\n        <ion-item style=\"display: none;\">\n          评价：\n          <ion-textarea placeholder=\"我的评价...\" style=\"border: 1px solid #eee;border-radius: 10px;\"></ion-textarea>\n        </ion-item>\n\n      </ion-radio-group>\n      </ion-list>\n      <ion-list radio-group *ngIf=\"ishowjb()\">\n\n        <ion-list-header>\n          投诉原因\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>{{txt}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n          日期：{{date}}\n\n        </ion-item>\n\n\n\n\n      </ion-list>\n      <div>\n        <div style=\"padding-left:10px;\">\n          <p style=\"color:#666666;font-size: 1.4rem;\">·投诉之后我们将会与您电话联系，请留意。</p>\n        </div>\n        <div style='margin-top:10px;padding:5px;text-align: center;' *ngIf=\"!ishowjb()\">\n          <!-- 按钮组开始 -->\n          <ion-button color=\"primary\" (click)=\"submitts()\" size=\"small\">提交投诉</ion-button>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/complaint/complaint.page.scss":
/*!***********************************************!*\
  !*** ./src/app/complaint/complaint.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background:#ffffff;\n  --padding-end:16px; }\n\n.list-ios {\n  background: #ffffff !important; }\n\n.list_f {\n  margin-bottom: 15px;\n  padding-bottom: 10px; }\n\n.col_button {\n  text-align: center; }\n\nion-list-header {\n  border-top: 0px !important;\n  color: #333333; }\n\nion-item {\n  color: #333333; }\n\n.showm_text ion-label {\n  white-space: inherit !important; }\n\n.no_border_botton {\n  border-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvY29tcGxhaW50L2NvbXBsYWludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUNiLGtCQUFjLEVBQUE7O0FBRWxCO0VBQ0ksOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUt0QjtFQUNFLGtCQUNGLEVBQUE7O0FBQ0E7RUFDSSwwQkFBMEI7RUFDMUIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWMsRUFBQTs7QUFHcEI7RUFBc0IsK0JBQThCLEVBQUE7O0FBU3BEO0VBQ0Esa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wbGFpbnQvY29tcGxhaW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAgIC0tcGFkZGluZy1lbmQ6MTZweDtcbn1cbi5saXN0LWlvc3tcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG4ubGlzdF9me1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICBcbiAgXG4gIH1cblxuICAuY29sX2J1dHRvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgfVxuICBpb24tbGlzdC1oZWFkZXJ7XG4gICAgICBib3JkZXItdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICB9XG4gIGlvbi1pdGVte1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cblxuLnNob3dtX3RleHQgaW9uLWxhYmVse3doaXRlLXNwYWNlOmluaGVyaXQgIWltcG9ydGFudDt9XG5cbi5jb21wbGFpbnQgaW9uLWl0ZW17XG4gICAgLy8gZm9udC1zaXplOiAxLjQ1cmVtO1xuICAgIC8vIGZvbnQtc2l6ZTogNC44dnc7XG59ICBcblxuXG4vL+mAmueUqFxuLm5vX2JvcmRlcl9ib3R0b257XG5ib3JkZXItYm90dG9tOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/complaint/complaint.page.ts":
/*!*********************************************!*\
  !*** ./src/app/complaint/complaint.page.ts ***!
  \*********************************************/
/*! exports provided: ComplaintPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintPage", function() { return ComplaintPage; });
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




var ComplaintPage = /** @class */ (function () {
    function ComplaintPage(navCtrl, ActivatedRoute, alertCtrl, loadingCtrl, appMin) {
        this.navCtrl = navCtrl;
        this.ActivatedRoute = ActivatedRoute;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appMin = appMin;
        this.cause = ''; //投诉原因
        this.OtherCause = ''; //其他原因
        this.isjubao = 'True';
        this.orderId = this.ActivatedRoute.snapshot.queryParams['orderId'];
        this.toUserCName = this.ActivatedRoute.snapshot.queryParams['toUserCName'];
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
    }
    ComplaintPage.prototype.send = function (value, isshow) {
        // if (isshow) {
        //   this.loader = this.loadingCtrl.create({
        //     message: "加载中...",
        //     duration: 3000
        //   });
        //   this.loader.present();
        // }
        var _this = this;
        this.appMin.get(JSON.parse(value)).subscribe(function (data) {
            _this.dataHandle(data);
        });
        // try {
        //   this.appMin.send(value);
        //   console.log("发送了数据=" + value);
        // } catch (error) {
        //   console.log("发送失败" + error.message);
        // }
    };
    ComplaintPage.prototype.addComplaintData = function () {
        //加载初始数据
        console.log('addComplaintData');
        var obj = {
            type: 'addComplaintData',
            orderId: this.orderId
        };
        this.send(JSON.stringify(obj));
    };
    ComplaintPage.prototype.submitts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //投诉按钮
                        console.log('cause=' + this.cause);
                        console.log('OtherCause=' + this.OtherCause);
                        if (!(this.cause != "")) return [3 /*break*/, 1];
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.OtherCause != "")) return [3 /*break*/, 2];
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.alertCtrl.create({
                            header: '',
                            subHeader: '请至少填写一项。',
                            buttons: ['确定']
                        })];
                    case 3:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                    case 5:
                        obj = {
                            type: 'submitts',
                            userId: this.appMin.getUserid(),
                            cause: this.cause,
                            OtherCause: this.OtherCause,
                            orderId: this.orderId
                        };
                        this.send(JSON.stringify(obj), true);
                        return [2 /*return*/];
                }
            });
        });
    };
    ComplaintPage.prototype.dataHandle = function (meg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (meg['type'] == "addComplaintData_ret") {
                            //加载初始数据
                            console.log('addComplaintData_ret=' + JSON.stringify(meg));
                            //this.toUserCName = meg['CName']
                            this.txt = meg['txt'];
                            this.date = meg['date'];
                            this.isjubao = meg['isjubao'];
                            this.ishowjb();
                        }
                        if (!(meg['type'] == 'submitts_ret')) return [3 /*break*/, 3];
                        console.log("submitts_ret=" + JSON.stringify(meg));
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '',
                                subHeader: '投诉成功，我们将尽快给答复。',
                                buttons: ['确定']
                            })];
                    case 1:
                        alert_2 = _a.sent();
                        alert_2.present();
                        //重新加载
                        return [4 /*yield*/, this.addComplaintData()];
                    case 2:
                        //重新加载
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ComplaintPage.prototype.onRadio = function (txt) {
        console.log('onRadio=' + txt);
        this.cause = txt;
    };
    ComplaintPage.prototype.ishowjb = function () {
        if (this.isjubao == 'True') {
            //已经被举报了
            //   console.log('已经被举报了');
            return true;
        }
        else {
            //   console.log('没有被举报');
            return false;
        }
    };
    ComplaintPage.prototype.ngOnInit = function () {
        console.log("ngOnInit!");
        this.addComplaintData(); //加载初始数据
    };
    ComplaintPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-complaint',
            template: __webpack_require__(/*! ./complaint.page.html */ "./src/app/complaint/complaint.page.html"),
            styles: [__webpack_require__(/*! ./complaint.page.scss */ "./src/app/complaint/complaint.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"]])
    ], ComplaintPage);
    return ComplaintPage;
}());



/***/ })

}]);
//# sourceMappingURL=complaint-complaint-module.js.map