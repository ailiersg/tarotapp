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

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <ion-toolbar color=\"primary\" >\n\n      <ion-searchbar mode=\"ios\" class=\"mysearchbar\" (keyup.enter)=\"search_btn()\" [(ngModel)]=\"search\" cancelButtonText=\"返回\" #searchbar1\n        (ionInput)=\"getItems($event)\" id=\"searchbar1\" animated=\"true\" (ionCancel)=\"huitui()\" showCancelButton=\"true\"\n        placeholder=\"搜索塔罗师\"> </ion-searchbar>\n    </ion-toolbar>\n  </div>\n\n</ion-header>\n\n\n<ion-content style=\"background:#f7f7f7;\" padding>\n\n\n  <div class=\"list_f\">\n\n    <div *ngIf=\"notMoer == 0\" style=\"text-align: center;color: #666666;\">\n      没有找到。。\n    </div>\n\n\n\n\n\n\n\n    <div *ngFor=\"let item of objlist let i=index  let id of objlist\" (click)=\"listClick(id)\" class=\"oncardList\">\n      <div style=\"width:100%;padding: 0.5rem 1rem;\" class=\"cl\">\n        <div item-start class=\"fl\">\n          <img class=\"oncardList_t_img\" src=\"{{item.UserImgUrl}}\">\n        </div>\n        <div class=\"fl\" style=\"margin: 0px 1rem;\">\n          <h2 class=\"litem_h2_name \" style=\"margin-top: 1px;color:#333\"> {{item.CName}} </h2>\n          <p class=\"litem_P_span \">\n            <span>\n              占卜：{{item.zongdingdanliang}}\n              <!-- <ion-badge class=\"badge_t\" item-end> </ion-badge> -->\n            </span>\n            <span>\n              &nbsp; 评分：{{item.zixunpingfen}}%\n              <!-- <ion-badge class=\"badge_t\" item-end></ion-badge> -->\n            </span>\n          </p>\n        </div>\n      </div>\n      <!-- <img src=\"{{item.fnengmianurl}}\"> -->\n      <div>\n        <p class=\"item_p_text\">{{item.zixunjieshao}}</p>\n      </div>\n\n      <div class=\"litet_bottom_f cl\">\n        <div class=\"fl\">\n          <div class=\"cl\">\n            <ion-icon class=\"fl\" style=\"font-size: 1.8rem;\" src=\"../../assets/img/rmb.svg\"></ion-icon>\n\n            <div class=\"pj_divf fl\">{{item.danjia}}/问题 </div>\n          </div>\n        </div>\n        <div class=\"fl\" style=\"margin-left: 1rem;\">\n          <div class=\"cl\">\n            <ion-icon class=\"fl\" style=\"font-size: 1.8rem;\" src=\"../../assets/img/hua.svg\"></ion-icon>\n            <div class=\"pj_divf fl\">{{item.zixunpingfen}}好评</div>\n          </div>\n        </div>\n        <div class=\"fr\">\n          <ion-badge *ngIf=\"item.isLine==0\" color=\"primary\" style=\"font-size: 1.2rem;\">可预约</ion-badge>\n          <ion-badge *ngIf=\"item.isLine==1\" color=\"secondary\" style=\"font-size: 1.2rem;\">在线</ion-badge>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  --background:rgba(0, 0, 0, 0)  ;\n  --background-activated:rgba(0, 0, 0, 0) ;\n  --background-checked:rgba(0, 0, 0, 0) ;\n  --color:rgb(233, 233, 233)  !important;\n  --color-checked:#fff  ;\n  --color-activated:#fff;\n  --color-disabled:rgb(241, 241, 241);\n  --color-checked-disabled:rgb(241, 241, 241); }\n\n#ion-content_1 {\n  padding-bottom: 30px; }\n\n.list_f ion-card {\n  border-radius: 6px; }\n\n.oncardList {\n  background: #fff;\n  margin: 1.2rem 0px;\n  box-shadow: 2px 6px 12px #eee;\n  border-radius: 10px;\n  padding: 1rem 0rem;\n  margin: 1rem 1.5rem; }\n\n.oncardList ion-item {\n  border-radius: 10px; }\n\n.oncardList_t_img {\n  border-radius: 50%;\n  width: 4.4rem;\n  height: 4.4rem; }\n\n.badge_t {\n  background: #8fa6c6; }\n\n.badge_t2 {\n  background: #f0cac9; }\n\n.css3ma_h {\n  transition: all 0.3s; }\n\n.row1 {\n  transition: height 0.3s;\n  overflow: hidden; }\n\n.pj_divf {\n  color: var(--color-button1);\n  font-size: 1.2rem; }\n\n.item-inner {\n  border-bottom: 0px !important; }\n\n.litem_h2_name {\n  font-size: 1.7rem !important;\n  margin-bottom: 0.5rem;\n  margin-top: 1px;\n  color: #333333; }\n\n.litem_P_span {\n  font-size: 1.4rem !important;\n  margin: 0px;\n  color: #555555; }\n\n.item_p_text {\n  font-size: 1.5rem !important;\n  margin: 1rem 0px !important;\n  padding: 0rem 2rem; }\n\n.md .mysearchbar {\n  margin-top: 1rem; }\n\n.litet_bottom_f {\n  padding: 0px 0.85rem; }\n\n.litet_bottom_f button {\n  padding: 0px; }\n\n.litet_bottom_f button ion-icon {\n  font-size: 1.6rem;\n  color: #fff; }\n\nion-icon {\n  color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBYTtFQUNiLHdDQUF1QjtFQUN2QixzQ0FBcUI7RUFDckIsc0NBQVE7RUFDUixzQkFBZ0I7RUFDaEIsc0JBQWtCO0VBRWxCLG1DQUFpQjtFQUNqQiwyQ0FBeUIsRUFBQTs7QUFRN0I7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDQSxnQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUU3QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUVuQjtFQUNDLG1CQUFtQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUVsQixhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUloQjtFQUVBLG1CQUFrQixFQUFBOztBQUVsQjtFQUNFLG1CQUNGLEVBQUE7O0FBR0E7RUFFQSxvQkFBb0IsRUFBQTs7QUFFcEI7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQ0YsRUFBQTs7QUFDQTtFQUNFLDJCQUEwQjtFQUMxQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUNGLEVBQUE7O0FBQ0E7RUFDQSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGNBQ0EsRUFBQTs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUViO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwKSAgO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6cmdiYSgwLCAwLCAwLCAwKSA7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6cmdiYSgwLCAwLCAwLCAwKSA7XG4gICAgLS1jb2xvcjpyZ2IoMjMzLCAyMzMsIDIzMykgICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvci1jaGVja2VkOiNmZmYgIDtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDojZmZmO1xuICAvLyAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDojZmZmO1xuICAgIC0tY29sb3ItZGlzYWJsZWQ6cmdiKDI0MSwgMjQxLCAyNDEpO1xuICAgIC0tY29sb3ItY2hlY2tlZC1kaXNhYmxlZDpyZ2IoMjQxLCAyNDEsIDI0MSk7XG4gICBcbn1cblxuXG5cblxuXG4jaW9uLWNvbnRlbnRfMXtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4ubGlzdF9mIGlvbi1jYXJke1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIFxufVxuLm9uY2FyZExpc3R7XG5iYWNrZ3JvdW5kOiAgI2ZmZjtcbm1hcmdpbjogMS4ycmVtIDBweDtcbmJveC1zaGFkb3c6IDJweCA2cHggMTJweCAjZWVlO1xuLy9ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKTtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5wYWRkaW5nOiAxcmVtIDByZW07XG5tYXJnaW46IDFyZW0gMS41cmVtO1xufVxuLm9uY2FyZExpc3QgaW9uLWl0ZW17XG4gYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5vbmNhcmRMaXN0X3RfaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0LjRyZW07XG4gIGhlaWdodDogNC40cmVtO1xuLy8gIGJveC1zaGFkb3c6IDFweCAycHggMXB4ICNlZWU7ICAvLyDlpLTlg4/pmLTlvbFcbn1cblxuLmJhZGdlX3Qge1xuXG5iYWNrZ3JvdW5kOiM4ZmE2YzY7XG59XG4uYmFkZ2VfdDIge1xuICBiYWNrZ3JvdW5kOiAjZjBjYWM5XG59XG5cblxuLmNzczNtYV9oXG57XG50cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5yb3cxIHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3M7XG4gIG92ZXJmbG93OiBoaWRkZW5cbn1cbi5wal9kaXZme1xuICBjb2xvcjp2YXIoLS1jb2xvci1idXR0b24xKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uaXRlbS1pbm5lcntcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7IFxufVxuLmxpdGVtX2gyX25hbWV7XG4gIGZvbnQtc2l6ZTogMS43cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBjb2xvcjojMzMzMzMzXG59XG4ubGl0ZW1fUF9zcGFue1xuZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbm1hcmdpbjogMHB4O1xuY29sb3I6IzU1NTU1NVxufVxuLml0ZW1fcF90ZXh0e1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDFyZW0gMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDByZW0gMnJlbTtcbn1cblxuLm1kIC5teXNlYXJjaGJhcntcbiAgbWFyZ2luLXRvcDoxcmVtO1xufVxuXG4ubGl0ZXRfYm90dG9tX2Z7XG4gIHBhZGRpbmc6IDBweCAwLjg1cmVtO1xufVxuLmxpdGV0X2JvdHRvbV9mIGJ1dHRvbntcbiAgcGFkZGluZzogMHB4O1xufVxuLmxpdGV0X2JvdHRvbV9mIGJ1dHRvbiBpb24taWNvbntcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLWljb257XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuIl19 */"

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
            this.header_class = "header_class_md";
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