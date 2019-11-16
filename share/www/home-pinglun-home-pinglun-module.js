(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pinglun-home-pinglun-module"],{

/***/ "./src/app/home-pinglun/home-pinglun.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/home-pinglun/home-pinglun.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePinglunPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePinglunPageModule", function() { return HomePinglunPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_pinglun_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-pinglun.page */ "./src/app/home-pinglun/home-pinglun.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _home_pinglun_page__WEBPACK_IMPORTED_MODULE_5__["HomePinglunPage"]
    }
];
var HomePinglunPageModule = /** @class */ (function () {
    function HomePinglunPageModule() {
    }
    HomePinglunPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_pinglun_page__WEBPACK_IMPORTED_MODULE_5__["HomePinglunPage"]]
        })
    ], HomePinglunPageModule);
    return HomePinglunPageModule;
}());



/***/ }),

/***/ "./src/app/home-pinglun/home-pinglun.page.html":
/*!*****************************************************!*\
  !*** ./src/app/home-pinglun/home-pinglun.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" >\n        <ion-title>最新动态</ion-title>\n      </ion-toolbar>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" #mybox  id=\"myionRefresh\">\n    <ion-refresher-content pullingIcon=\"Crescent\"  refreshingSpinner=\"circles\"></ion-refresher-content>\n  </ion-refresher>\n\n  <div style=\"text-align: center;\">\n      <ion-spinner *ngIf=\"pinglList.length == 0\" name=\"circles\"></ion-spinner>\n  </div>\n\n  <div class=\"list_f\">\n    <div class=\"item\" *ngFor=\"let item of pinglList\" (click)=\"toObjpage(item.ObjUserId)\">\n      <div class=\"left_img\"><img src='{{item.user_img}}'></div>\n      <div class=\"item_right\">\n        <div class=\"top cl\">\n          <div class=\"fll\"><span style=\"font-size: 1.3rem;\"> {{item.user_cname}}</span></div>\n          <div class=\"flr\"> <span> {{item.date}}</span></div>\n        </div>\n        <div class=\"mide\">\n          <span style=\"font-size: 1.35rem;\">\n            {{item.plTxt}}\n          </span>\n        </div>\n        <div class=\"bottom\">\n\n          <div class=\"fuwu\">\n            <div class=\"cl\">\n              <div class=\"left fl\">\n                <img src=\"{{item.obj_img}}\">\n              </div>\n              <div class=\"right fl\">\n\n                <div class=\"name\">\n                  <span style=\"font-size: 1.3rem;\">{{item.serviceName}}</span>\n                </div>\n                <div class=\"money\">\n                  <span style=\"font-size: 1.2rem;\">{{item.service_money}}元/问</span>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n\n\n\n\n\n  </div>\n\n  <div style=\"padding-top: 1rem;\">\n    <ion-infinite-scroll immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home-pinglun/home-pinglun.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/home-pinglun/home-pinglun.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  padding: 10px 0px;\n  border-bottom: 1px solid #e4e4e4;\n  position: relative;\n  padding-bottom: 15px;\n  margin-top: 10px; }\n\n.item_right {\n  margin-left: 5rem; }\n\n.left_img {\n  position: absolute;\n  left: 0px;\n  top: 5px; }\n\n.left_img img {\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem; }\n\n.top div {\n  color: #666666;\n  font-size: 1.2rem; }\n\n.fll {\n  float: left; }\n\n.flr {\n  float: right; }\n\n.item .top .span {\n  color: #999999; }\n\n.item .mide {\n  color: #333333;\n  font-size: 1.35rem;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.bottom .fuwu {\n  border-radius: 5px;\n  box-shadow: 1px 2px 3px #eee;\n  width: 100%;\n  margin: 0px auto;\n  background: #fff;\n  height: 5rem;\n  padding: 5px 10px; }\n\n.bottom .fuwu .right {\n  margin-left: 10px;\n  margin-top: 0.4rem; }\n\n.bottom .fuwu .left img {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  margin: 20% auto; }\n\n.bottom .fuwu .money span {\n  font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvaG9tZS1waW5nbHVuL2hvbWUtcGluZ2x1bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFFaEIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFBRSxRQUFRLEVBQUE7O0FBRXZCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksY0FBYztFQUNsQixpQkFBaUIsRUFBQTs7QUFFakI7RUFBSyxXQUFXLEVBQUE7O0FBQ2hCO0VBQUssWUFBWSxFQUFBOztBQUNqQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFNeEI7RUFDSSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFNckI7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBTXBCO0VBQ0EsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBpbmdsdW4vaG9tZS1waW5nbHVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVte1xuICAgIHBhZGRpbmc6MTBweCAwcHg7XG4gICAvLyBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaXRlbV9yaWdodHtcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcbn1cbi5sZWZ0X2ltZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4OyB0b3A6IDVweDtcbn1cbi5sZWZ0X2ltZyBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogNHJlbTtcblxufVxuLnRvcCBkaXZ7XG4gICAgY29sb3I6ICM2NjY2NjY7XG5mb250LXNpemU6IDEuMnJlbTtcbn1cbi5mbGx7ZmxvYXQ6IGxlZnQ7fVxuLmZscntmbG9hdDogcmlnaHQ7fVxuLml0ZW0gLnRvcCAuc3BhbntcbiAgICBjb2xvcjogIzk5OTk5OTtcblxufVxuLml0ZW0gLm1pZGV7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uYm90dG9te1xuXG59XG4uYm90dG9tIC5mdXd1e1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjZWVlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjsgLy8jODljN2YwXG4gICAgaGVpZ2h0OjVyZW07XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG5cbn1cbi5ib3R0b20gLmZ1d3UgIC5sZWZ0e1xuICAvLyAgZmxvYXQ6IGxlZnQ7XG59XG4uYm90dG9tIC5mdXd1ICAucmlnaHR7XG4gIC8vICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwLjRyZW07XG59XG4uYm90dG9tIC5mdXd1ICAubGVmdCBpbWd7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xufVxuXG4uYm90dG9tIC5mdXd1IC5uYW1le1xuXG59XG4uYm90dG9tIC5mdXd1IC5tb25leSBzcGFue1xuZm9udC1zaXplOiAxLjJyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/home-pinglun/home-pinglun.page.ts":
/*!***************************************************!*\
  !*** ./src/app/home-pinglun/home-pinglun.page.ts ***!
  \***************************************************/
/*! exports provided: HomePinglunPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePinglunPage", function() { return HomePinglunPage; });
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




var HomePinglunPage = /** @class */ (function () {
    function HomePinglunPage(navCtrl, nav, router, events, appMin, appmin) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.router = router;
        this.events = events;
        this.appMin = appMin;
        this.appmin = appmin;
        this.addSum = 0; //加载次数 
        this.pinglList = []; //数据列表
        this.isadd = false;
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
            //   console.log("判断为安卓系统 设置状态栏样式")
        }
    }
    HomePinglunPage.prototype.ionViewWillEnter = function () {
    };
    HomePinglunPage.prototype.toObjpage = function (objid) {
        //  console.log(objid);
        var obj = {
            userId: objid
        };
        // this.navCtrl.push(Consultant, obj);
        this.router.navigate(['consultant'], { queryParams: obj });
        //this.nav.navigateForward("consultant")
        // this.navCtrl.
    };
    HomePinglunPage.prototype.addpinglList = function (iss) {
        var _this = this;
        //加载评论列表
        this.isadd = true;
        var obj = {
            type: 'addpinglList',
            addSum: this.addSum,
        };
        // this.appMin.send(JSON.stringify(obj));
        // console.log("发送addpinglList" + JSON.stringify(obj));
        this.appMin.get(obj).subscribe(function (data) {
            //  console.log("addpinglList=" + JSON.stringify(data));
            if (iss) {
                _this.pinglList = [];
            }
            _this.dataHandle(data);
        });
    };
    HomePinglunPage.prototype.doRefresh = function (refresher) {
        //顶部刷新
        //  console.log('Begin async operation', refresher);
        this.refresher = refresher;
        this.addSum = 0;
        this.addpinglList(true);
        setTimeout(function () {
            //  console.log('Async operation has ended');
        }, 2000);
    };
    HomePinglunPage.prototype.doInfinite = function (infiniteScroll) {
        //底部刷新加载
        this.infiniteScroll = infiniteScroll;
        if (this.isadd) {
            infiniteScroll.target.complete();
            return;
        }
        this.addpinglList();
        // if (infiniteScroll) {
        //   infiniteScroll.target.complete();
        // }
    };
    HomePinglunPage.prototype.dataHandle = function (msg, isSave) {
        if (this.refresher) {
            this.refresher.target.complete();
        }
        if (this.infiniteScroll) {
            this.infiniteScroll.target.complete();
        }
        if (msg.type == 'addpinglList_ret') {
            //   console.log("收到addpinglList_ret" + JSON.stringify(msg))
            for (var i = 0; i < msg['rows'].length; i++) {
                this.pinglList.push(msg['rows'][i]);
            }
            // console.log(this.pinglList)
            this.isadd = false;
            this.addSum = parseInt(msg['pages']) + 1;
            //  console.log("addSum=" + this.addSum);
        }
    };
    HomePinglunPage.prototype.ngOnInit = function () {
        this.addpinglList();
        // console.log("dom0=" + this.mybox);
    };
    HomePinglunPage.prototype.ngAfterViewInit = function () {
        //dom 加载完成
        var this1 = this;
        // console.log("dom0=" + this1.mybox);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myBox"),
        __metadata("design:type", Object)
    ], HomePinglunPage.prototype, "mybox", void 0);
    HomePinglunPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-pinglun',
            template: __webpack_require__(/*! ./home-pinglun.page.html */ "./src/app/home-pinglun/home-pinglun.page.html"),
            styles: [__webpack_require__(/*! ./home-pinglun.page.scss */ "./src/app/home-pinglun/home-pinglun.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"]])
    ], HomePinglunPage);
    return HomePinglunPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-pinglun-home-pinglun-module.js.map