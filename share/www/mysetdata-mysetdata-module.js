(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mysetdata-mysetdata-module"],{

/***/ "./src/app/mysetdata/mysetdata.module.ts":
/*!***********************************************!*\
  !*** ./src/app/mysetdata/mysetdata.module.ts ***!
  \***********************************************/
/*! exports provided: MysetdataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysetdataPageModule", function() { return MysetdataPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mysetdata_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mysetdata.page */ "./src/app/mysetdata/mysetdata.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mysetdata_page__WEBPACK_IMPORTED_MODULE_5__["MysetdataPage"]
    }
];
var MysetdataPageModule = /** @class */ (function () {
    function MysetdataPageModule() {
    }
    MysetdataPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_mysetdata_page__WEBPACK_IMPORTED_MODULE_5__["MysetdataPage"]]
        })
    ], MysetdataPageModule);
    return MysetdataPageModule;
}());



/***/ }),

/***/ "./src/app/mysetdata/mysetdata.page.html":
/*!***********************************************!*\
  !*** ./src/app/mysetdata/mysetdata.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>修改资料</ion-title>\n        <ion-buttons slot='end'>\n          <ion-button (click)=\"baoc_click()\">\n            <ion-label style=\"font-size: 1.5rem;\">保存</ion-label>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </div>\n  </div>\n</ion-header>\n<ion-content #MysetdataPage_content1 style=\"background:rgb(245, 245, 249) none repeat scroll 0% 0%;\">\n  <div>\n    <ion-item-group class=\"list_f\">\n\n      <ion-item (click)=\"selectuserimg_click()\" detail>\n        <ion-label>\n          修改头像\n        </ion-label>\n        <ion-avatar slot=\"end\">\n          <img src=\"{{userImg}}\">\n        </ion-avatar>\n      </ion-item>\n      <!-- <ion-button ion-item (click)=\"selectuserimg_click()\">\n        <div class=\"toux_div cl\">\n          <p>修改头像</p>\n          <img src=\"{{userImg}}\">\n        </div>\n      </ion-button> -->\n      <ion-item>\n        <ion-label>昵称：</ion-label>\n        <ion-input slot=\"end\" class=\"cname_input\" #cnameInp (keyup)=\"cname_keyup(cnameInp.value)\" type=\"text\"\n          value=\"{{cname}}\">\n        </ion-input>\n      </ion-item>\n      <!-- <ion-button ion-item (click)=\"shezsex()\">\n        <div class=\"item_sex cl\">\n          <p>性别</p>\n          <p>{{sexShow}}</p>\n        </div>\n      </ion-button> -->\n      <ion-item (click)=\"shezsex()\" detail>\n        <ion-label>\n          <ion-text>\n            性别\n          </ion-text>\n        </ion-label>\n        <ion-text slot=\"end\">\n          <p>{{sexShow}}</p>\n        </ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"\">出生日期</ion-label>\n        <ion-datetime slot=\"end\" min=\"1930-01-01\" max=\"2017-12-12\" placeholder=\"1994-02-01\" cancelText=\"取消\"\n          doneText=\"确定\" displayFormat=\"YYYY/MM/DD\" [(ngModel)]=\"myDate\"></ion-datetime>\n      </ion-item>\n\n      <!-- <ion-button ion-item (click)=\"jianjie_click()\">\n        签名\n      </ion-button> -->\n      <ion-item (click)=\"jianjie_click()\" detail>\n        <ion-label>\n          签名\n        </ion-label>\n      </ion-item>\n\n    </ion-item-group>\n\n\n\n\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/mysetdata/mysetdata.page.scss":
/*!***********************************************!*\
  !*** ./src/app/mysetdata/mysetdata.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background:#ffffff;\n  --border-color:#eeeeee; }\n\n.toux_div p {\n  float: left;\n  line-height: 45px;\n  font-size: 1em !important;\n  color: #333333 !important; }\n\n.toux_div img {\n  float: right;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%; }\n\n.item-ios p {\n  color: 3333333 !important; }\n\n.cname_input {\n  padding-right: 10px;\n  text-align: right; }\n\n.input-wrapper input {\n  color: #333333 !important; }\n\n.text-input-ios {\n  text-align: right; }\n\n.datetime-text {\n  color: #666666 !important; }\n\n.list_f {\n  margin-top: 1rem; }\n\n.list-ios[inset] {\n  margin: 0px; }\n\n.item_sex p {\n  color: #333333 !important; }\n\n.item_sex p:nth-child(1) {\n  float: left;\n  font-size: 1.0em; }\n\n.item_sex p:nth-child(2) {\n  float: right;\n  font-size: 1.0em; }\n\n.nab_p {\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n\n.list_f ion-label {\n  color: #4D4D4D !important; }\n\n.qm_inp {\n  font-size: 0.9em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXlzZXRkYXRhL215c2V0ZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUNiLHNCQUFlLEVBQUE7O0FBSW5CO0VBQ0ksV0FBVTtFQUNWLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIseUJBQXdCLEVBQUE7O0FBR3hCO0VBQ0ksWUFBWTtFQUNaLFdBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kseUJBQXdCLEVBQUE7O0FBRTVCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHlCQUF3QixFQUFBOztBQUU1QjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHlCQUF3QixFQUFBOztBQUU1QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVUsRUFBQTs7QUFHZDtFQUNJLHlCQUF3QixFQUFBOztBQUU1QjtFQUNKLFdBQVc7RUFDWCxnQkFDSSxFQUFBOztBQUNBO0VBQ0ksWUFBWTtFQUNaLGdCQUNJLEVBQUE7O0FBQ0E7RUFDSSxxREFBcUQsRUFBQTs7QUFHekQ7RUFDWix5QkFBd0IsRUFBQTs7QUFFWjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXlzZXRkYXRhL215c2V0ZGF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAtLWJvcmRlci1jb2xvcjojZWVlZWVlO1xuICAgXG59XG5cbi50b3V4X2RpdiBwe1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgICBjb2xvcjojMzMzMzMzICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgfVxuICAgIC50b3V4X2RpdiBpbWd7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6NDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIFxuICAgIC5pdGVtLWlvcyBwe1xuICAgICAgICBjb2xvcjozMzMzMzMzICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jbmFtZV9pbnB1dHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5pbnB1dC13cmFwcGVyIGlucHV0e1xuICAgICAgICBjb2xvcjojMzMzMzMzICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC50ZXh0LWlucHV0LWlvc3tcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5kYXRldGltZS10ZXh0e1xuICAgICAgICBjb2xvcjojNjY2NjY2ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5saXN0X2Z7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuICAgIC5saXN0LWlvc1tpbnNldF17XG4gICAgICAgIG1hcmdpbjowcHg7XG5cbiAgICB9XG4gICAgLml0ZW1fc2V4IHB7XG4gICAgICAgIGNvbG9yOiMzMzMzMzMgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLml0ZW1fc2V4IHA6bnRoLWNoaWxkKDEpe1xuZmxvYXQ6IGxlZnQ7XG5mb250LXNpemU6IDEuMGVtXG4gICAgfVxuICAgIC5pdGVtX3NleCBwOm50aC1jaGlsZCgyKXtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDEuMGVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFiX3B7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5saXN0X2YgaW9uLWxhYmVse1xuY29sb3I6IzRENEQ0RCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnFtX2lucHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/mysetdata/mysetdata.page.ts":
/*!*********************************************!*\
  !*** ./src/app/mysetdata/mysetdata.page.ts ***!
  \*********************************************/
/*! exports provided: MysetdataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysetdataPage", function() { return MysetdataPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




 //本地存储

var MysetdataPage = /** @class */ (function () {
    function MysetdataPage(navCtrl, ActivatedRoute, Router, actionSheetCtrl, loadingCtrl, camera, storage, appmin) {
        this.navCtrl = navCtrl;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.storage = storage;
        this.appmin = appmin;
        this.cname = "未登录";
        this.sex = "";
        this.sexShow = "";
        this.myDate = "";
        this.qianming = "什么也没写╮(╯_╰)╭";
        this.userImg = "../assets/img/头像.png";
        if (this.appmin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        console.log("constructor");
        this.addUserData(); //加载用户数据
    }
    MysetdataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MysetdataPage');
        this.addStorageData();
    };
    MysetdataPage.prototype.send = function (value, isshow) {
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
                        this.appmin.get(JSON.parse(value)).subscribe(function (data) {
                            _this.dataHandle(data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MysetdataPage.prototype.jianjie_click = function () {
        //跳转简介页面
        var obj = {
            jianjie: this.qianming
        };
        //  this.navCtrl.push(MysetdataJianjiePage, obj);
        this.Router.navigate(["mysetdata-info"], { queryParams: obj });
    };
    MysetdataPage.prototype.shezsex = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //设置性别按钮
                        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("设置性别按钮被单击");
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                buttons: [
                                    {
                                        text: '男',
                                        icon: "ios-male",
                                        handler: function () {
                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('男_click');
                                            _this.sex = "0";
                                            _this.sexShow = "男";
                                        }
                                    }, {
                                        text: '女',
                                        icon: "ios-female",
                                        handler: function () {
                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('女_click');
                                            _this.sex = "1";
                                            _this.sexShow = "女";
                                        }
                                    }, {
                                        text: '取消',
                                        role: 'cancel',
                                        // icon: "ios-log-out",
                                        handler: function () {
                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('取消_click');
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
    MysetdataPage.prototype.set_date = function () {
        //修改日期按钮
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("修改日期按钮click");
    };
    MysetdataPage.prototype.baoc_click = function () {
        //保存按钮
        this.setUserData();
    };
    MysetdataPage.prototype.setUserData = function () {
        //设置用户数据
        var obj = {
            type: "setUserData",
            userId: this.appmin.getUserid(),
            cname: this.cname,
            sex: this.sex,
            stratDate: this.myDate,
            qianming: this.qianming
        };
        this.send(JSON.stringify(obj), true);
    };
    MysetdataPage.prototype.addUserData = function () {
        //加载用户数据
        var obj = {
            type: 'addUserData_mySetData',
            userId: this.appmin.getUserid()
        };
        this.send(JSON.stringify(obj), false);
    };
    MysetdataPage.prototype.qianming_click = function (value) {
        //输入签名
        if (value.length >= 20) {
            value = value.substring(0, 20);
        }
        this.qianming = value;
    };
    MysetdataPage.prototype.cname_keyup = function (value) {
        //输入昵称inp
        if (value.length >= 8) {
            value = value.substring(0, 8);
        }
        this.cname = value;
    };
    MysetdataPage.prototype.selectuserimg_click = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: '上传头像',
                            buttons: [
                                {
                                    text: '图库上传',
                                    role: 'destructive',
                                    handler: function () {
                                        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('上传头像click');
                                        _this.userSelectImg();
                                    }
                                }, {
                                    text: '拍照上传',
                                    handler: function () {
                                        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('拍照上传_click');
                                        _this.Photograph();
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('取消_click');
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
    MysetdataPage.prototype.Photograph = function () {
        //拍照上传
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 400,
            targetHeight: 400,
            allowEdit: true,
            cameraDirection: 0,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log('imageData=' + imageData);
            _this.getBase64Image(imageData);
        }, function (err) {
            // Handle error
            console.log('相机出错=' + err);
        });
    };
    MysetdataPage.prototype.userSelectImg = function () {
        var _this = this;
        //从图库上传
        //console.log("userSelectImg1")
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 400,
            targetHeight: 400,
            allowEdit: true,
            cameraDirection: 1,
            sourceType: 2 //从图库选择
        };
        //   console.log("userSelectImg2")
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log('imageData=' + imageData);
            _this.getBase64Image(imageData);
            //alert(imageData);
        }, function (err) {
            // Handle error
            console.log('相机出错=' + err);
        });
    };
    MysetdataPage.prototype.getBase64Image = function (imgUri) {
        //imgUri=imgUri.replace('file://','');  //解决WKWebView兼容问题
        //console.log('getBase64Image_uri=' + imgUri);
        // imgUri=normalizeURL(imgUri); //解决WKWebView兼容问题
        imgUri = window.Ionic.WebView.convertFileSrc(imgUri);
        console.log("getBase64Image!=" + imgUri);
        var this1 = this;
        var img = new Image();
        img.src = imgUri;
        img.onload = function () {
            console.log("getBase64Image img.onload!");
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            //var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
            var dataURL = canvas.toDataURL("image/jpeg");
            //return dataURL;
            this1.userImg = dataURL;
            var upobj = {
                type: "updataUserImg",
                userid: this1.appmin.getUserid(),
                userImgUri: dataURL
            };
            this1.appmin.post((upobj)).subscribe(function (data) {
                this1.dataHandle(data);
            });
            console.log("getBase64Image_json=" + JSON.stringify(upobj));
        };
    };
    MysetdataPage.prototype.dataHandle = function (meg) {
        if (meg['type'] == "setUserData_ok") {
            //更新数据完成 准备跳转
            this.navCtrl.pop();
        }
        if (meg['type'] == "addUserData_mySetData_ret") {
            //收到加载用户数据
            // this.cname = meg["CName"];
            this.cname = meg["CName"];
            this.storage.set("CName", meg["CName"]);
            if (meg["sex"] == "0") {
                this.sexShow = "男";
                this.storage.set("userSex", "男");
            }
            else {
                this.sexShow = "女";
                this.storage.set("userSex", "女");
            }
            var img = meg["UserImgUrl"];
            console.log('userimg=' + img);
            if (img.trim() != "") {
                this.userImg = meg["UserImgUrl"];
                this.storage.set("userimg", meg['UserImgUrl']);
                this.appmin.setUserImg(meg["UserImgUrl"]);
            }
            else {
                this.userImg = "../assets/img/头像.png";
                this.storage.set("userimg", "../assets/img/头像.png");
            }
            this.myDate = meg["startdate"];
            this.storage.set("startdate", meg['startdate']);
            this.qianming = meg["qianming"];
            this.storage.set("gexingqianming", meg['qianming']);
        }
        if (meg['type'] == "updataUserImg_ret") {
            //alert(JSON.stringify(meg));
        }
    };
    MysetdataPage.prototype.addStorageData = function () {
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("从本地存储加载用户数据");
        var this1 = this;
        this.storage.ready().then(function () {
            this1.storage.get('userSex').then(function (val) {
                this1.sexShow = val;
            });
            this1.storage.get('CName').then(function (val) {
                this1.cname = val;
            });
            this1.storage.get('gexingqianming').then(function (val) {
                this1.qianming = val;
                // WitePrompt("gexingqianming"+val);
            });
            this1.storage.get('userimg').then(function (val) {
                this1.userImg = val;
            });
            this1.storage.get('startdate').then(function (val) {
                this1.myDate = val;
                // WitePrompt("gexingqianming"+val);
            });
        });
        // this.navCtrl.resize();
    };
    MysetdataPage.prototype.ngOnInit = function () {
    };
    MysetdataPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mysetdata',
            template: __webpack_require__(/*! ./mysetdata.page.html */ "./src/app/mysetdata/mysetdata.page.html"),
            styles: [__webpack_require__(/*! ./mysetdata.page.scss */ "./src/app/mysetdata/mysetdata.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"]])
    ], MysetdataPage);
    return MysetdataPage;
}());



/***/ })

}]);
//# sourceMappingURL=mysetdata-mysetdata-module.js.map