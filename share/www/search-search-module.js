(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.html":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <div class=\"{{header_class}}\">\n    <ion-toolbar color=\"primary\" mode=\"ios\">\n\n      <ion-searchbar (keyup.enter)=\"search_btn()\" [(ngModel)]=\"search\" cancelButtonText=\"返回\" #searchbar1\n        (ionInput)=\"getItems($event)\" id=\"searchbar1\" animated=\"true\" (ionCancel)=\"huitui()\" showCancelButton=\"true\"\n        placeholder=\"搜索塔罗师\"> </ion-searchbar>\n    </ion-toolbar>\n  </div>\n\n</ion-header>\n\n\n<ion-content style=\"background:#f7f7f7;\" padding>\n\n\n  <div class=\"list_f\">\n\n    <div *ngIf=\"notMoer == 0\" style=\"text-align: center;color: #666666;\">\n      没有找到。。\n    </div>\n\n \n\n\n   \n\n\n    <div *ngFor=\"let item of objlist let i=index  let id of objlist\"\n    (click)=\"listClick(id)\" class=\"oncardList\">\n    <div style=\"width:100%;padding: 0.5rem 1rem;\" class=\"cl\">\n      <div item-start class=\"fl\">\n        <img class=\"oncardList_t_img\" src=\"{{item.UserImgUrl}}\">\n      </div>\n      <div class=\"fl\" style=\"margin: 0px 1rem;\">\n        <h2 class=\"litem_h2_name \" style=\"margin-top: 1px;color:#333\"> {{item.CName}} </h2>\n        <p class=\"litem_P_span \">\n          <span>\n            占卜：{{item.zongdingdanliang}}\n            <!-- <ion-badge class=\"badge_t\" item-end> </ion-badge> -->\n          </span>\n          <span>\n            &nbsp; 评分：{{item.zixunpingfen}}%\n            <!-- <ion-badge class=\"badge_t\" item-end></ion-badge> -->\n          </span>\n        </p>\n      </div>\n    </div>\n    <!-- <img src=\"{{item.fnengmianurl}}\"> -->\n    <div>\n      <p class=\"item_p_text\">{{item.zixunjieshao}}</p>\n    </div>\n\n    <div class=\"litet_bottom_f cl\">\n      <div class=\"fl\">\n        <div class=\"cl\">\n          <ion-icon class=\"fl\" style=\"font-size: 1.8rem;\" src=\"../../assets/img/rmb.svg\"></ion-icon>\n\n          <div class=\"pj_divf fl\">{{item.danjia}}/问题 </div>\n        </div>\n      </div>\n      <div class=\"fl\" style=\"margin-left: 1rem;\">\n        <div class=\"cl\">\n          <ion-icon class=\"fl\" style=\"font-size: 1.8rem;\" src=\"../../assets/img/hua.svg\"></ion-icon>\n          <div class=\"pj_divf fl\">{{item.zixunpingfen}}好评</div>\n        </div>\n      </div>\n      <div class=\"fr\">\n        <ion-badge *ngIf=\"item.isLine==0\" color=\"primary\" style=\"font-size: 1.2rem;\">可预约</ion-badge>\n        <ion-badge *ngIf=\"item.isLine==1\" color=\"secondary\" style=\"font-size: 1.2rem;\">在线</ion-badge>\n      </div>\n    </div>\n  </div>\n\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  --background:rgba(0, 0, 0, 0)  ;\n  --background-activated:rgba(0, 0, 0, 0) ;\n  --background-checked:rgba(0, 0, 0, 0) ;\n  --color:rgb(233, 233, 233)  !important;\n  --color-checked:#fff  ;\n  --color-activated:#fff;\n  --color-disabled:rgb(241, 241, 241);\n  --color-checked-disabled:rgb(241, 241, 241); }\n\n#ion-content_1 {\n  padding-bottom: 30px; }\n\n.list_f ion-card {\n  border-radius: 6px; }\n\n.oncardList {\n  background: #fff;\n  margin: 1.2rem 0px;\n  box-shadow: 2px 6px 12px #eee;\n  border-radius: 10px;\n  padding: 1rem 0rem;\n  margin: 1rem 1.5rem; }\n\n.oncardList ion-item {\n  border-radius: 10px; }\n\n.oncardList_t_img {\n  border-radius: 50%;\n  width: 4.4rem;\n  height: 4.4rem; }\n\n.badge_t {\n  background: #8fa6c6; }\n\n.badge_t2 {\n  background: #f0cac9; }\n\n.css3ma_h {\n  transition: all 0.3s; }\n\n.row1 {\n  transition: height 0.3s;\n  overflow: hidden; }\n\n.pj_divf {\n  color: var(--color-button1);\n  font-size: 1.2rem; }\n\n.item-inner {\n  border-bottom: 0px !important; }\n\n.litem_h2_name {\n  font-size: 1.7rem !important;\n  margin-bottom: 0.5rem;\n  margin-top: 1px;\n  color: #333333; }\n\n.litem_P_span {\n  font-size: 1.4rem !important;\n  margin: 0px;\n  color: #555555; }\n\n.item_p_text {\n  font-size: 1.5rem !important;\n  margin: 1rem 0px !important;\n  padding: 0rem 2rem; }\n\n.litet_bottom_f {\n  padding: 0px 0.85rem; }\n\n.litet_bottom_f button {\n  padding: 0px; }\n\n.litet_bottom_f button ion-icon {\n  font-size: 1.6rem;\n  color: #fff; }\n\nion-icon {\n  color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBYTtFQUNiLHdDQUF1QjtFQUN2QixzQ0FBcUI7RUFDckIsc0NBQVE7RUFDUixzQkFBZ0I7RUFDaEIsc0JBQWtCO0VBRWxCLG1DQUFpQjtFQUNqQiwyQ0FBeUIsRUFBQTs7QUFRN0I7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDQSxnQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUU3QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUVuQjtFQUNDLG1CQUFtQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUVsQixhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUloQjtFQUVBLG1CQUFrQixFQUFBOztBQUVsQjtFQUNFLG1CQUNGLEVBQUE7O0FBR0E7RUFFQSxvQkFBb0IsRUFBQTs7QUFFcEI7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQ0YsRUFBQTs7QUFDQTtFQUNFLDJCQUEwQjtFQUMxQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUNGLEVBQUE7O0FBQ0E7RUFDQSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGNBQ0EsRUFBQTs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFYjtFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudC1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMCkgIDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOnJnYmEoMCwgMCwgMCwgMCkgO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOnJnYmEoMCwgMCwgMCwgMCkgO1xuICAgIC0tY29sb3I6cmdiKDIzMywgMjMzLCAyMzMpICAhaW1wb3J0YW50O1xuICAgIC0tY29sb3ItY2hlY2tlZDojZmZmICA7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6I2ZmZjtcbiAgLy8gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6I2ZmZjtcbiAgICAtLWNvbG9yLWRpc2FibGVkOnJnYigyNDEsIDI0MSwgMjQxKTtcbiAgICAtLWNvbG9yLWNoZWNrZWQtZGlzYWJsZWQ6cmdiKDI0MSwgMjQxLCAyNDEpO1xuICAgXG59XG5cblxuXG5cblxuI2lvbi1jb250ZW50XzF7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmxpc3RfZiBpb24tY2FyZHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBcbn1cbi5vbmNhcmRMaXN0e1xuYmFja2dyb3VuZDogICNmZmY7XG5tYXJnaW46IDEuMnJlbSAwcHg7XG5ib3gtc2hhZG93OiAycHggNnB4IDEycHggI2VlZTtcbi8vYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMik7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xucGFkZGluZzogMXJlbSAwcmVtO1xubWFyZ2luOiAxcmVtIDEuNXJlbTtcbn1cbi5vbmNhcmRMaXN0IGlvbi1pdGVte1xuIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ub25jYXJkTGlzdF90X2ltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNC40cmVtO1xuICBoZWlnaHQ6IDQuNHJlbTtcbi8vICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAjZWVlOyAgLy8g5aS05YOP6Zi05b2xXG59XG5cbi5iYWRnZV90IHtcblxuYmFja2dyb3VuZDojOGZhNmM2O1xufVxuLmJhZGdlX3QyIHtcbiAgYmFja2dyb3VuZDogI2YwY2FjOVxufVxuXG5cbi5jc3MzbWFfaFxue1xudHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucm93MSB7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xuICBvdmVyZmxvdzogaGlkZGVuXG59XG4ucGpfZGl2ZntcbiAgY29sb3I6dmFyKC0tY29sb3ItYnV0dG9uMSk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLml0ZW0taW5uZXJ7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50OyBcbn1cbi5saXRlbV9oMl9uYW1le1xuICBmb250LXNpemU6IDEuN3JlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgY29sb3I6IzMzMzMzM1xufVxuLmxpdGVtX1Bfc3BhbntcbmZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG5tYXJnaW46IDBweDtcbmNvbG9yOiM1NTU1NTVcbn1cbi5pdGVtX3BfdGV4dHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxcmVtIDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcmVtIDJyZW07XG59XG5cblxuLmxpdGV0X2JvdHRvbV9me1xuICBwYWRkaW5nOiAwcHggMC44NXJlbTtcbn1cbi5saXRldF9ib3R0b21fZiBidXR0b257XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5saXRldF9ib3R0b21fZiBidXR0b24gaW9uLWljb257XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1pY29ue1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
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




var SearchPage_message;
var SearchPage_close;
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, Router, ActivatedRoute, appMin, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.appMin = appMin;
        this.loadingCtrl = loadingCtrl;
        this.header_class = "";
        this.searchQuery = '';
        this.objlist = [];
        this.notMoer = 1; //是否显示 没有找到
        var key = this.ActivatedRoute.snapshot.queryParams['key'];
        console.log("key=" + key);
        if (key != "") {
            this.search = key;
            this.addSearch(key);
        }
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            //  console.log("判断为安卓系统 设置状态栏样式")
        }
        var _this = this;
        setTimeout(function () {
            _this.searchbar1.setFocus();
        }, 300);
    }
    SearchPage.prototype.send = function (value, ishow) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this_1 = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!ishow) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "加载中...",
                                duration: 3000
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        this.loader.present();
                        _b.label = 2;
                    case 2:
                        this.appMin.get(JSON.parse(value)).subscribe(function (data) {
                            _this_1.dataHandle(data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.ionViewDidEnter = function () {
        //每次进入页面
        console.log('进入搜索页面');
        setTimeout(function () {
            //  this.searchbar1.setFocus();
        }, 550);
        console.log('搜索页面设置搜索焦点完毕');
    };
    //自动完成
    SearchPage.prototype.getItems = function (ev) {
        console.log("getItems");
    };
    SearchPage.prototype.search_btn = function () {
        if (this.search != '') {
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('发送请求');
            this.addSearch(this.search);
        }
    };
    SearchPage.prototype.huitui = function () {
        //单击取消搜索返回按钮
        //  alert('返回');
        this.navCtrl.pop();
    };
    SearchPage.prototype.addSearch = function (key) {
        //发送搜索请求
        if (this.appMin.trim(key) != "") {
            var obj = {
                type: 'search',
                key: key
            };
            this.send(JSON.stringify(obj), true);
            console.log("send_key=" + key);
        }
        else {
            console.log("关键字为空");
        }
    };
    SearchPage.prototype.listClick = function (ev) {
        //咨询师列表被单击
        console.log(ev.ObjID);
        var obj = {
            animation: "ios-transition" //设置过度效果
        };
        var data = {
            userId: ev.ObjID
        };
        // this.navCtrl.push(Consultant, data, obj);
        this.Router.navigate(['consultant'], { queryParams: data });
    };
    SearchPage.prototype.dataHandle = function (meg) {
        var _this_1 = this;
        var this1 = this;
        if (meg['type'] == 'search_ret') {
            this.objlist = meg['rows'];
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('_this.objlist =' + JSON.stringify(meg['rows']));
        }
        setTimeout(function () {
            _this_1.searchbar1.setFocus();
        }, 200);
        console.log('搜索页面设置搜索焦点完毕');
        if (this.objlist.length == 0) {
            console.log('没有搜索到');
            this.notMoer = 0;
        }
    };
    SearchPage.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSearchbar"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSearchbar"])
    ], SearchPage.prototype, "searchbar1", void 0);
    SearchPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map