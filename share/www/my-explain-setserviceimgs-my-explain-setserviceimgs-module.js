(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-explain-setserviceimgs-my-explain-setserviceimgs-module"],{

/***/ "./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MyExplainSetserviceimgsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainSetserviceimgsPageModule", function() { return MyExplainSetserviceimgsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_explain_setserviceimgs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-explain-setserviceimgs.page */ "./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_explain_setserviceimgs_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainSetserviceimgsPage"]
    }
];
var MyExplainSetserviceimgsPageModule = /** @class */ (function () {
    function MyExplainSetserviceimgsPageModule() {
    }
    MyExplainSetserviceimgsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_explain_setserviceimgs_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainSetserviceimgsPage"]]
        })
    ], MyExplainSetserviceimgsPageModule);
    return MyExplainSetserviceimgsPageModule;
}());



/***/ }),

/***/ "./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <div class=\"header_class\">\n      <div class=\"head_berd\">\n          <ion-toolbar color=\"primary\" mode=\"ios\">\n              <ion-buttons slot=\"start\">\n                <ion-back-button text=\"\"></ion-back-button>\n              </ion-buttons>\n          <ion-title>设置封面</ion-title>\n          <ion-buttons slot='end'>\n            <ion-button ion-button icon-only (click)=\"add_img()\">\n              <ion-icon name=\"more\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </div>\n    </div>\n  </ion-header>\n  \n  \n  <ion-content  style=\"background: #000000;\">\n  \n    <div style=\"margin-top:1.5rem;\">\n      \n      <img src=\"{{showImg}}\" style=\"width:100%\">\n  \n    </div>\n    \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header_class_ {\n  padding-top: 20px;\n  background: rgba(49, 49, 49, 0.9); }\n\n.toolbar-ios-button2 .toolbar-background-ios {\n  background: rgba(49, 49, 49, 0.9) !important; }\n\n.toolbar-ios-button2 .toolbar-title-ios, .toolbar-ios-button2 .bar-button-clear-ios, .toolbar-ios-button2 .bar-button-default-ios {\n  color: #eeeeee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktZXhwbGFpbi1zZXRzZXJ2aWNlaW1ncy9teS1leHBsYWluLXNldHNlcnZpY2VpbWdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixpQ0FBOEIsRUFBQTs7QUFHbEM7RUFDSSw0Q0FBeUMsRUFBQTs7QUFFN0M7RUFDSSxjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9teS1leHBsYWluLXNldHNlcnZpY2VpbWdzL215LWV4cGxhaW4tc2V0c2VydmljZWltZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9jbGFzc197XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSg0OSw0OSw0OSwwLjkpO1xufVxuXG4udG9vbGJhci1pb3MtYnV0dG9uMiAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc3tcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ5LDQ5LDQ5LDAuOSkgIWltcG9ydGFudDtcbn1cbi50b29sYmFyLWlvcy1idXR0b24yIC50b29sYmFyLXRpdGxlLWlvcywgLnRvb2xiYXItaW9zLWJ1dHRvbjIgLmJhci1idXR0b24tY2xlYXItaW9zLCAudG9vbGJhci1pb3MtYnV0dG9uMiAuYmFyLWJ1dHRvbi1kZWZhdWx0LWlvc3tcbiAgICBjb2xvcjojZWVlZWVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.page.ts ***!
  \*****************************************************************************/
/*! exports provided: MyExplainSetserviceimgsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainSetserviceimgsPage", function() { return MyExplainSetserviceimgsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
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




// var MyExplainSetserviceimgsPage_message;
var MyExplainSetserviceimgsPage = /** @class */ (function () {
    function MyExplainSetserviceimgsPage(appmin, navCtrl, alertCtrl, actionSheetCtrl, loadingCtrl, camera) {
        this.appmin = appmin;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.selectImgUrl = "";
        if (appmin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        // socket1.removeEventListener('message', MyExplainSetserviceimgsPage_message);
        // let _this = this;
        // MyExplainSetserviceimgsPage_message = function (event) {
        //   let meg = JSON.parse(event.data);
        //   if (meg.type == "error") {
        //     WitePrompt("MyExplainSetserviceimgsPage页面监听消息===" + JSON.stringify(meg));
        //   } else {
        //     WitePrompt("MyExplainSetserviceimgsPage页面监听消息===" + meg.type);
        //   }
        //   if (_this.loader) {
        //     _this.loader.dismiss();
        //     _this.loader = null;
        //   }
        //   //安全的删除加载框结束 --  addServiceImgs
        //   if (meg.type == 'addServiceImgs_ret') {
        //     _this.dataHandle(meg);
        //   }
        //   if (meg.type == 'upUserServiceImg_ret') {
        //     _this.dataHandle(meg);
        //   }
        // }
        // socket1.addEventListener('message', MyExplainSetserviceimgsPage_message);
    }
    MyExplainSetserviceimgsPage.prototype.addServiceImgs = function () {
        console.log("addServiceImgs()!");
        var obj = {
            type: "serviceImgs",
            userId: this.appmin.getUserid()
        };
        this.send(JSON.stringify(obj), false);
    };
    MyExplainSetserviceimgsPage.prototype.send = function (value, isshow) {
        var _this = this;
        if (isshow) {
            if (!this.loader) {
                this.loader = this.loadingCtrl.create({
                    message: "加载中...",
                    duration: 3000
                });
                this.loader.present();
            }
        }
        // this.appmin.send(value);
        // WitePrompt("发送了数据=" + value);
        this.appmin.post(JSON.parse(value)).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyExplainSetserviceimgsPage.prototype.Photograph = function () {
        //拍照上传
        var _this = this;
        console.log("拍照上传");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 800,
            targetHeight: 450,
            allowEdit: true,
            cameraDirection: 0,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.getBase64Image(imageData);
        }, function (err) {
            // Handle error
        });
    };
    MyExplainSetserviceimgsPage.prototype.deleteServiceImg = function () {
        //删除图片按钮
        var obj = {
            type: "deleteServiceImg",
            userId: this.appmin.getUserid(),
            imgUrl: this.selectImgUrl
        };
        this.send(JSON.stringify(obj), true);
    };
    MyExplainSetserviceimgsPage.prototype.add_img = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //添加图片按钮
                        console.log("添加图片按钮");
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: '',
                                buttons: [
                                    {
                                        text: '图库',
                                        role: 'destructive',
                                        // icon: "ios-image-outline",
                                        handler: function () {
                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('从图库上传');
                                            _this.userSelectImg();
                                        }
                                    }, {
                                        text: '拍照',
                                        // icon: "ios-reverse-camera-outline",
                                        handler: function () {
                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('拍照');
                                            _this.Photograph();
                                        }
                                    }, {
                                        text: '取消',
                                        role: 'cancel',
                                        // icon: 'ios-log-out-outline',
                                        handler: function () {
                                            console.log('取消 clicked');
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
    MyExplainSetserviceimgsPage.prototype.userSelectImg = function () {
        var _this = this;
        //从图库上传
        console.log("从图库上传");
        var options = {
            quality: 100,
            sourceType: 0,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 800,
            targetHeight: 450,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.getBase64Image(imageData);
            //alert(imageData);
        }, function (err) {
            // Handle error
        });
    };
    MyExplainSetserviceimgsPage.prototype.getBase64Image = function (imgUri) {
        //转码并发送
        console.log("转码并发送");
        //console.log("imgUri=" + imgUri);
        // imgUri=normalizeURL(imgUri);//解决WKWebView兼容问题
        imgUri = window.Ionic.WebView.convertFileSrc(imgUri);
        var this1 = this;
        var img = new Image();
        img.src = imgUri;
        img.onload = function () {
            console.log("getBase64Image()-图像载入正常");
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            //var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
            var dataURL = canvas.toDataURL("image/jpeg");
            console.log("dataURL=" + dataURL);
            var upobj = {
                type: "upUserServiceImg",
                userid: this1.appmin.getUserid(),
                imgBase64: dataURL
            };
            this1.send(JSON.stringify(upobj), true);
            console.log(JSON.stringify(upobj));
        };
        img.onerror = function () {
            console.log("getBase64Image_图像载入失败");
        };
    };
    MyExplainSetserviceimgsPage.prototype.presentAlert = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '提示',
                            subHeader: val,
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
    MyExplainSetserviceimgsPage.prototype.dataHandle = function (msg) {
        if (msg['type'] == 'upUserServiceImg_ret') {
            this.addServiceImgs(); //上传图片后 重新加载以便刷新显示图片
            console.log("重新加载以便刷新显示图片");
        }
        if (msg['type'] == 'addServiceImgs_ret') {
            console.log("addServiceImgs_ret=" + JSON.stringify(msg));
            if (msg["serviceImgs"] != undefined && msg["serviceImgs"] != null) {
                this.showImg = msg["serviceImgs"];
            }
        }
    };
    MyExplainSetserviceimgsPage.prototype.ngOnInit = function () {
        this.addServiceImgs(); //加载初始图片
    };
    MyExplainSetserviceimgsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-explain-setserviceimgs',
            template: __webpack_require__(/*! ./my-explain-setserviceimgs.page.html */ "./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.page.html"),
            styles: [__webpack_require__(/*! ./my-explain-setserviceimgs.page.scss */ "./src/app/my-explain-setserviceimgs/my-explain-setserviceimgs.page.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]])
    ], MyExplainSetserviceimgsPage);
    return MyExplainSetserviceimgsPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-explain-setserviceimgs-my-explain-setserviceimgs-module.js.map