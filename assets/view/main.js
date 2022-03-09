"use strict";
(self["webpackChunkview"] = self["webpackChunkview"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _v2ray_v2ray_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v2ray/v2ray.component */ 9768);
/* harmony import */ var _public_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/page-not-found/page-not-found.component */ 1806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: 'index', component: _v2ray_v2ray_component__WEBPACK_IMPORTED_MODULE_0__.V2rayComponent },
    { path: '', redirectTo: "/index", pathMatch: "full" },
    { path: "**", component: _public_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _public_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/toolbar/toolbar.component */ 5686);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);






class AppComponent {
    constructor(matIconRegistry) {
        this.matIconRegistry = matIconRegistry;
        this.title = 'v2ray-web';
        // 配置位置
        this.config = new angular2_toaster__WEBPACK_IMPORTED_MODULE_0__.ToasterConfig({
            positionClass: "toast-bottom-right"
        });
        this.matIconRegistry.registerFontClassAlias('fontawesome-fa', // 為此 Icon Font 定義一個 別名
        'fa' // 此 Icon Font 使用的 class 名稱
        ).registerFontClassAlias('fontawesome-fab', 'fab').registerFontClassAlias('fontawesome-fal', 'fal').registerFontClassAlias('fontawesome-far', 'far').registerFontClassAlias('fontawesome-fas', 'fas');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconRegistry)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[3, "toasterconfig"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "public-toolbar")(1, "toaster-container", 0)(2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("toasterconfig", ctx.config);
    } }, directives: [_public_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.ToolbarComponent, angular2_toaster__WEBPACK_IMPORTED_MODULE_0__.ToasterContainerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/public.module */ 7348);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _v2ray_v2ray_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./v2ray/v2ray.component */ 9768);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _protocol_protocol_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./protocol/protocol.component */ 2301);
/* harmony import */ var _vmess_vmess_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vmess/vmess.component */ 4728);
/* harmony import */ var _vless_vless_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vless/vless.component */ 3057);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscribe/subscribe.component */ 1660);
/* harmony import */ var _subconfig_subconfig_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subconfig/subconfig.component */ 9329);
/* harmony import */ var _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./qrcode/qrcode.component */ 269);
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-qrcode */ 9349);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);
/* harmony import */ var _unmarshal_unmarshal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./unmarshal/unmarshal.component */ 9298);
/* harmony import */ var _socks_socks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./socks/socks.component */ 2542);
/* harmony import */ var _shadowsocks_shadowsocks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shadowsocks/shadowsocks.component */ 8320);
/* harmony import */ var _configfile_configfile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./configfile/configfile.component */ 2784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);









































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            _public_public_module__WEBPACK_IMPORTED_MODULE_2__.PublicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__.MatGridListModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__.MatCheckboxModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDividerModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__.MatSidenavModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__.MatTooltipModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__.MatMenuModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__.MatDialogModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__.MatSlideToggleModule,
            angular2_qrcode__WEBPACK_IMPORTED_MODULE_11__.QRCodeModule,
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__.ClipboardModule,
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__.ToasterModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _v2ray_v2ray_component__WEBPACK_IMPORTED_MODULE_4__.V2rayComponent,
        _protocol_protocol_component__WEBPACK_IMPORTED_MODULE_5__.ProtocolComponent,
        _vmess_vmess_component__WEBPACK_IMPORTED_MODULE_6__.VmessComponent,
        _vless_vless_component__WEBPACK_IMPORTED_MODULE_7__.VlessComponent,
        _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_8__.SubscribeComponent,
        _subconfig_subconfig_component__WEBPACK_IMPORTED_MODULE_9__.SubconfigComponent,
        _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_10__.QrcodeComponent,
        _unmarshal_unmarshal_component__WEBPACK_IMPORTED_MODULE_12__.UnmarshalComponent,
        _socks_socks_component__WEBPACK_IMPORTED_MODULE_13__.SocksComponent,
        _shadowsocks_shadowsocks_component__WEBPACK_IMPORTED_MODULE_14__.ShadowsocksComponent,
        _configfile_configfile_component__WEBPACK_IMPORTED_MODULE_15__.ConfigfileComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _public_public_module__WEBPACK_IMPORTED_MODULE_2__.PublicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__.MatGridListModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__.MatCheckboxModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDividerModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__.MatSidenavModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__.MatTooltipModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__.MatDialogModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__.MatSlideToggleModule,
        angular2_qrcode__WEBPACK_IMPORTED_MODULE_11__.QRCodeModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__.ClipboardModule, angular2_toaster__WEBPACK_IMPORTED_MODULE_3__.ToasterModule] }); })();


/***/ }),

/***/ 2784:
/*!****************************************************!*\
  !*** ./src/app/configfile/configfile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigfileComponent": () => (/* binding */ ConfigfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/protocol/protocol.service */ 5480);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _service_msg_msg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/msg/msg.service */ 5670);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);










class ConfigfileComponent {
    constructor(protocol, toaster, dialogRef, msg, data) {
        this.protocol = protocol;
        this.toaster = toaster;
        this.dialogRef = dialogRef;
        this.msg = msg;
        this.data = data;
        // 是否禁用按钮
        this.disable = false;
        // 当前协议的初始化配置文件
        this.v2rayCnf = '';
    }
    ngOnInit() {
        this.params = {
            Custom: true,
        };
        // 修改
        if (this.data.op === 'update') {
            this.params.Protocol = this.data.value.Protocol,
                this.params.ID = this.data.value.ID,
                this.params.Name = this.data.value.Name,
                this.v2rayCnf = this.data.value.ConfigFile;
            this.on = true;
        }
        // 增加
        if (this.data.op === 'add') {
            this.on = false;
        }
    }
    // 修改
    update() {
        // 支持配置文件修改。
        // 解析配置文件进行输入框对应的参数做修改
        try {
            const cnf = JSON.parse(this.v2rayCnf);
            const initCnf = JSON.parse(this.v2rayCnf);
            if (typeof cnf === 'number') {
                this.toaster.pop("error", "JSON格式不正确");
                return;
            }
            // 除了日志，其他符合本应用的定位的配置允许使用配置文件修改。
            initCnf["api"] = cnf["api"];
            initCnf["dns"] = cnf["dns"];
            initCnf["routing"] = cnf["routing"];
            initCnf["policy"] = cnf["policy"];
            initCnf["transport"] = cnf["transport"];
            initCnf["stats"] = cnf["stats"];
            initCnf["reverse"] = cnf["reverse"];
            initCnf["inbounds"] = cnf["inbounds"];
            const outbound = cnf["outbounds"][0];
            if (!outbound) {
                this.toaster.pop("error", "导入失败", "配置文件不正确");
                return;
            }
            const vp = outbound["settings"]["vnext"];
            const sp = outbound["settings"]["servers"];
            if (!vp && !sp) {
                this.toaster.pop("error", "导入失败", "配置文件不正确");
                return;
            }
            // vmess，vless 协议参数
            if (vp) {
                this.params.Address = vp[0]["address"];
                this.params.Port = vp[0]["port"];
                const user = vp[0]["users"][0];
                if (user) {
                    this.params.UserID = user["id"];
                    this.params.AlertID = user["alterId"];
                    this.params.Level = user["level"];
                    this.params.Security = user["security"];
                    this.params.Encryption = user["encryption"];
                }
                const streamSettings = outbound["streamSettings"];
                if (streamSettings) {
                    this.params.Network = streamSettings["network"];
                    this.params.NetSecurity = streamSettings["security"];
                    if (streamSettings["wsSettings"]) {
                        this.params.Path = streamSettings["wsSettings"]["path"];
                        if (streamSettings["wsSettings"]["headers"]) {
                            this.params.Domains = streamSettings["wsSettings"]["headers"]["Host"];
                        }
                    }
                    if (streamSettings["httpSettings"]) {
                        this.params.Path = streamSettings["httpSettings"]["path"];
                        this.params.Domains = streamSettings["httpSettings"]["host"];
                    }
                }
            }
            // socks，ss 协议参数
            if (sp) {
                this.params.Address = sp[0]["address"];
                this.params.Port = sp[0]["port"];
                if (sp[0]["users"]) {
                    const user = sp[0]["users"][0];
                    if (user) {
                        this.params.User = user["user"];
                        this.params.Passwd = user["pass"];
                    }
                }
                if (sp[0]["method"]) {
                    this.params.Security = sp[0]["method"];
                }
                if (sp[0]["password"]) {
                    this.params.Passwd = sp[0]["password"];
                }
            }
            initCnf["outbounds"] = cnf["outbounds"];
            this.disable = true;
            this.params.ConfigFile = JSON.stringify(initCnf, null, 4);
            this.protocol.update(this.params).then(() => {
                this.msg.updateProtocol(this.params);
                this.toaster.pop("success", "修改成功");
                this.dialogRef.close();
            }).catch(() => {
                this.toaster.pop("error", "修改失败");
            }).finally(() => {
                this.disable = false;
            });
        }
        catch (error) {
            console.log(error);
            this.toaster.pop("error", "JSON格式不正确");
        }
    }
    // 加载
    load() {
        try {
            const cnf = JSON.parse(this.v2rayCnf);
            if (typeof cnf === 'number') {
                this.toaster.pop("error", "JSON格式不正确");
                return;
            }
            // 除了日志，其他符合本应用的定位的配置允许使用配置文件修改。
            if (cnf["log"]) {
                cnf["log"] = {
                    "access": "",
                    "error": "",
                    "loglevel": "warning",
                };
            }
            const outbound = cnf["outbounds"][0];
            if (!outbound) {
                this.toaster.pop("error", "导入失败", "配置文件不正确");
                return;
            }
            // 设置协议
            this.params.Protocol = outbound["protocol"];
            const vp = outbound["settings"]["vnext"];
            const sp = outbound["settings"]["servers"];
            if (!vp && !sp) {
                this.toaster.pop("error", "导入失败", "配置文件不正确");
                return;
            }
            // vmess，vless 协议参数
            if (vp) {
                this.params.Address = vp[0]["address"];
                this.params.Port = vp[0]["port"];
                const user = vp[0]["users"][0];
                if (user) {
                    this.params.UserID = user["id"];
                    this.params.AlertID = user["alterId"];
                    this.params.Level = user["level"];
                    this.params.Security = user["security"];
                    this.params.Encryption = user["encryption"];
                }
                const streamSettings = outbound["streamSettings"];
                if (streamSettings) {
                    this.params.Network = streamSettings["network"];
                    this.params.NetSecurity = streamSettings["security"];
                    if (streamSettings["wsSettings"]) {
                        this.params.Path = streamSettings["wsSettings"]["path"];
                        if (streamSettings["wsSettings"]["headers"]) {
                            this.params.Domains = streamSettings["wsSettings"]["headers"]["Host"];
                        }
                    }
                    if (streamSettings["httpSettings"]) {
                        this.params.Path = streamSettings["httpSettings"]["path"];
                        this.params.Domains = streamSettings["httpSettings"]["host"];
                    }
                }
            }
            // socks，ss 协议参数
            if (sp) {
                this.params.Address = sp[0]["address"];
                this.params.Port = sp[0]["port"];
                if (sp[0]["users"]) {
                    const user = sp[0]["users"][0];
                    if (user) {
                        this.params.User = user["user"];
                        this.params.Passwd = user["pass"];
                    }
                }
                if (sp[0]["method"]) {
                    this.params.Security = sp[0]["method"];
                }
                if (sp[0]["password"]) {
                    this.params.Passwd = sp[0]["password"];
                }
            }
            this.params.ConfigFile = JSON.stringify(cnf, null, 4);
            this.disable = true;
            this.protocol.save(this.params).then((value) => {
                // 通知主界面将新增的协议增加到列表里。
                this.params.ID = value.data.id;
                this.params.ConfigFile = value.data.cnf;
                this.msg.addProtocol(this.params);
                this.toaster.pop("success", "增加成功");
                this.dialogRef.close();
            }).catch(() => {
                this.toaster.pop("error", "增加失败");
            }).finally(() => {
                this.disable = false;
            });
        }
        catch (error) {
            console.log(error);
            this.toaster.pop("error", "导入失败", error);
        }
    }
}
ConfigfileComponent.ɵfac = function ConfigfileComponent_Factory(t) { return new (t || ConfigfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_0__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_1__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_2__.MsgService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
ConfigfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ConfigfileComponent, selectors: [["app-configfile"]], decls: 10, vars: 3, consts: [["mat-dialog-title", ""], ["appearance", "outline", 1, "full-width"], ["rows", "20", "matInput", "", 3, "disabled", "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "matDialogClose", ""]], template: function ConfigfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u5B8C\u6574\u914D\u7F6E\u6587\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field", 1)(4, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigfileComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.v2rayCnf = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-dialog-actions")(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfigfileComponent_Template_button_click_6_listener() { return ctx.on ? ctx.update() : ctx.load(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u4FDD\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.v2rayCnf);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disable);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose], styles: [".full-width[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJjb25maWdmaWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 2301:
/*!************************************************!*\
  !*** ./src/app/protocol/protocol.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolComponent": () => (/* binding */ ProtocolComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _vmess_vmess_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vmess/vmess.component */ 4728);
/* harmony import */ var _vless_vless_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vless/vless.component */ 3057);
/* harmony import */ var _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../qrcode/qrcode.component */ 269);
/* harmony import */ var _socks_socks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socks/socks.component */ 2542);
/* harmony import */ var _shadowsocks_shadowsocks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shadowsocks/shadowsocks.component */ 8320);
/* harmony import */ var _configfile_configfile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configfile/configfile.component */ 2784);
/* harmony import */ var _service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/protocol/protocol.service */ 5480);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _service_v2ray_v2ray_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/v2ray/v2ray.service */ 6617);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _service_msg_msg_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/msg/msg.service */ 5670);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);


















class ProtocolComponent {
    constructor(protocol, toaster, v2ray, dialog, msg) {
        this.protocol = protocol;
        this.toaster = toaster;
        this.v2ray = v2ray;
        this.dialog = dialog;
        this.msg = msg;
        this.power = false; // v2ray 启动状态 
        this.VLess = false; // vless 暂不支持分享，官网在之后会统一定制分享标准。
        this.socksParam = {};
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter(); // 导出属性
    }
    set value(data) {
        if (data == null || data == undefined) {
            return;
        }
        this.data = data;
    }
    ngOnInit() {
        // Vless 协议暂不支持分享，官方会统一标准。
        if (this.data) {
            if (this.data.Protocol == "vless") {
                this.VLess = true;
            }
        }
        // 禁用按钮状态
        this.msg.disableSource.subscribe((b) => {
            this.disable = b;
        });
        // v2ray服务器启动状态
        this.msg.statusSource.subscribe((v) => {
            if (v) {
                const status = JSON.parse(v);
                // 运行状态
                if (this.data.ID == status.id && this.data.Protocol == status.protocol) {
                    this.power = status.running;
                }
                else {
                    this.power = false;
                }
            }
        });
        // 订阅本地配置
        this.msg.localSettingSource.subscribe((v) => {
            if (!v) {
                this.socksParam = {
                    Protocol: "socks",
                    Port: 1080,
                    Address: "127.0.0.1",
                };
                return;
            }
            this.socksParam.Address = v.Address;
            this.socksParam.Port = v.Port;
            this.socksParam.Protocol = v.Protocol;
        });
    }
    // 删除配置
    remove(data) {
        this.disable = true;
        this.protocol.delete({
            "name": data.Protocol,
            "id": data.ID,
        }).then(() => {
            this.toaster.pop("success", "删除成功");
            this.click.emit(this.data);
        }).catch(() => {
            this.toaster.pop("error", "删除失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    openConfigFileWindow(v) {
        this.dialog.open(_configfile_configfile_component__WEBPACK_IMPORTED_MODULE_5__.ConfigfileComponent, {
            width: "45%",
            data: {
                "op": "update",
                "value": v,
            }
        });
    }
    // 打开窗口
    openProtocolWindow(v) {
        switch (v.Protocol) {
            case "vmess":
                this.dialog.open(_vmess_vmess_component__WEBPACK_IMPORTED_MODULE_0__.VmessComponent, {
                    width: "45%",
                    data: {
                        "op": "update",
                        "value": v,
                    }
                });
                break;
            case "vless":
                this.dialog.open(_vless_vless_component__WEBPACK_IMPORTED_MODULE_1__.VlessComponent, {
                    width: "45%",
                    data: {
                        "op": "update",
                        "value": v,
                    }
                });
                break;
            case "socks":
                this.dialog.open(_socks_socks_component__WEBPACK_IMPORTED_MODULE_3__.SocksComponent, {
                    width: "45%",
                    data: {
                        "op": "update",
                        "value": v,
                    }
                });
                break;
            case "shadowsocks":
                this.dialog.open(_shadowsocks_shadowsocks_component__WEBPACK_IMPORTED_MODULE_4__.ShadowsocksComponent, {
                    width: "45%",
                    data: {
                        "op": "update",
                        "value": v,
                    }
                });
                break;
            default:
                break;
        }
    }
    // 二维码窗口
    openQrCodeWindow(v) {
        this.dialog.open(_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_2__.QrcodeComponent, {
            data: v,
        });
    }
    // 复制base64编码到剪贴板
    copyToClipboard() {
        let content;
        switch (this.data.Protocol) {
            case "vmess":
                const vms = {
                    v: this.data.Level,
                    ps: this.data.Name,
                    add: this.data.Address,
                    port: this.data.Port,
                    id: this.data.UserID,
                    aid: this.data.AlertID,
                    net: this.data.Network,
                    host: this.data.Domains,
                    type: this.data.Security,
                    path: this.data.Path,
                    tls: this.data.NetSecurity,
                };
                let objJsonStr = JSON.stringify(vms);
                content = "vmess://" + btoa(unescape(encodeURIComponent(objJsonStr)));
                break;
            case "vless":
                const vls = {
                    v: this.data.Level,
                    ps: this.data.Name,
                    add: this.data.Address,
                    port: this.data.Port,
                    id: this.data.UserID,
                    encry: this.data.Encryption,
                    flow: this.data.Flow,
                    net: this.data.Network,
                    sec: this.data.NetSecurity,
                    path: this.data.Path,
                };
                content = "vless://" + btoa(unescape(encodeURIComponent(JSON.stringify(vls))));
                break;
            case "socks":
                const socks = this.data.User + ":" + this.data.Passwd + "@" +
                    this.data.Address + ":" + this.data.Port;
                content = "socks://" + btoa(socks) +
                    "#" + encodeURI(this.data.Name);
                break;
            case "shadowsocks":
                const ss = this.data.Security + ":" + this.data.Passwd + "@" +
                    this.data.Address + ":" + this.data.Port;
                content = "ss://" + btoa(ss) +
                    "#" + encodeURI(this.data.Name);
                break;
            default:
                content = 'TODO';
                break;
        }
        return content;
    }
    // 复制完整配置文件
    copyAllToClipboard() {
        if (this.data.ConfigFile) {
            return this.data.ConfigFile;
        }
        else {
            return "TODO";
        }
    }
    // 控制 v2ray 的开启和关闭
    switch() {
        if (this.power) {
            this.stop();
        }
        else {
            this.start();
        }
    }
    // 开启
    start() {
        this.msg.disableButton(true);
        // 启动
        this.v2ray.start(this.data).then((res) => {
            this.toaster.pop("success", "启动成功", res.data.msg);
            this.power = true;
        }).catch((e) => {
            // 不是刷新 token 的错误，弹出错误内容。
            if (e.status == 403) {
                this.toaster.pop("warning", "长时间未操作请重新登录");
            }
            else {
                this.toaster.pop("error", "启动失败", e.error.error);
            }
        }).finally(() => {
            this.msg.disableButton(false);
        });
    }
    // 关闭
    stop() {
        this.msg.disableButton(true);
        this.v2ray.stop().then((res) => {
            this.power = false;
            this.toaster.pop("success", "关闭成功", res.data.msg);
        }).catch((e) => {
            // 不是刷新 token 的错误，弹出错误内容。
            if (e.status == 403) {
                this.toaster.pop("warning", "长时间未操作请重新登录");
            }
            else {
                this.toaster.pop("error", "关闭失败", e.error.error);
            }
        }).finally(() => {
            this.msg.disableButton(false);
        });
    }
}
ProtocolComponent.ɵfac = function ProtocolComponent_Factory(t) { return new (t || ProtocolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_6__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_7__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_v2ray_v2ray_service__WEBPACK_IMPORTED_MODULE_8__.V2rayService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_9__.MsgService)); };
ProtocolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ProtocolComponent, selectors: [["app-protocol"]], inputs: { value: "value" }, outputs: { click: "clickEvt" }, decls: 60, vars: 18, consts: [[1, "flex"], [2, "margin-top", "10px"], ["color", "primary"], [1, "fill-remaining-space"], [1, "font"], ["color", "primary", "mat-icon-button", "", "matTooltip", "\u5206\u4EAB", 3, "disabled", "matMenuTriggerFor"], ["share", "matMenu"], ["color", "primary", "mat-menu-item", "", 3, "click"], ["fontSet", "fontawesome-fas", "fontIcon", "fa-qrcode", 1, "icon"], ["mat-menu-item", "", 3, "cdkCopyToClipboard"], ["fontSet", "fontawesome-far", "fontIcon", "fa-clipboard", 1, "icon"], ["fontSet", "fontawesome-fas", "fontIcon", "fa-clipboard-list", 1, "icon"], ["color", "primary", "mat-icon-button", "", 3, "disabled", "matTooltip", "click"], [3, "hidden"], ["color", "primary", "mat-icon-button", "", "matTooltip", "\u83DC\u5355", 3, "disabled", "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "disabled", "click"]], template: function ProtocolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "span", 1)(2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 3)(5, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\u540D\u79F0\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p")(9, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\u5730\u5740\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "\u534F\u8BAE\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "\u7AEF\u53E3\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span")(19, "button", 5)(20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "mat-menu", null, 6)(24, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProtocolComponent_Template_button_click_24_listener() { return ctx.openQrCodeWindow(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "\u4E8C\u7EF4\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "\u5BFC\u51FA\u5230\u526A\u8D34\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "\u5BFC\u51FA\u5B8C\u6574\u914D\u7F6E\u5230\u526A\u8D34\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProtocolComponent_Template_button_click_36_listener() { return ctx.switch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span", 13)(40, "button", 14)(41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "mat-menu", null, 15)(45, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProtocolComponent_Template_button_click_45_listener() { return ctx.openProtocolWindow(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "\u4FEE\u6539");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProtocolComponent_Template_button_click_50_listener() { return ctx.openConfigFileWindow(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "\u914D\u7F6E\u6587\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProtocolComponent_Template_button_click_55_listener() { return ctx.remove(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "\u5220\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](23);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.power ? "router" : "dns");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.data.Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.data.Address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.data.Protocol, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.data.Port, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.VLess)("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cdkCopyToClipboard", ctx.copyToClipboard());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cdkCopyToClipboard", ctx.copyAllToClipboard());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", ctx.power ? "\u505C\u6B62" : "\u542F\u52A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.power ? "stop" : "play_arrow", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.power);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.disable)("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.disable);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_16__.CdkCopyToClipboard], styles: [".flex[_ngcontent-%COMP%]{\n    display: flex;\n    margin-top: 35px;\n}\n.fill-remaining-space[_ngcontent-%COMP%]{\n  flex: 1 1 auto;\n  margin-left: 20px;\n}\n.font[_ngcontent-%COMP%]{\n  color: rgb(42, 42, 153);\n}\n.icon[_ngcontent-%COMP%]{\n  font-size: 1.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvY29sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJwcm90b2NvbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmZpbGwtcmVtYWluaW5nLXNwYWNle1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uZm9udHtcbiAgY29sb3I6IHJnYig0MiwgNDIsIDE1Myk7XG59XG4uaWNvbntcbiAgZm9udC1zaXplOiAxLjdlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 1806:
/*!*******************************************************************!*\
  !*** ./src/app/public/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7348:
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicModule": () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar/toolbar.component */ 5686);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 1806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);















class PublicModule {
}
PublicModule.ɵfac = function PublicModule_Factory(t) { return new (t || PublicModule)(); };
PublicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PublicModule });
PublicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PublicModule, { declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent,
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule], exports: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent] }); })();


/***/ }),

/***/ 5686:
/*!*****************************************************!*\
  !*** ./src/app/public/toolbar/toolbar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/msg/msg.service */ 5670);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);









class ToolbarComponent {
    // inject dialog service
    constructor(dialog, toast, router, msg) {
        this.dialog = dialog;
        this.toast = toast;
        this.router = router;
        this.msg = msg;
    }
    ngOnInit() {
        this.hiddenIcon = false;
        // this.msg.messageSource.subscribe((single) => {
        //   switch (single) {
        //     case 1:
        //       this.hiddenIcon = false
        //       break;
        //     case 2:
        //       this.hiddenIcon = true
        //       break;
        //     default:
        //       break;
        //   }
        // })
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_0__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_1__.MsgService)); };
ToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["public-toolbar"]], decls: 11, vars: 0, consts: [["color", "primary", 1, "mat-elevation-z8"], ["toolbar", ""], ["routerLink", "/", "mat-button", "", "matTooltip", "\u4E3B\u9875"], [1, "fill-remaining-space"], ["mat-button", "", "matTooltip", "\u83DC\u5355"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0, 1)(2, "span")(3, "button", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span")(8, "button", 4)(9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "view_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], styles: [".fill-remaining-space[_ngcontent-%COMP%]{\n      \n    flex: 1 1 auto;\n}\n\n.icon[_ngcontent-%COMP%]{\n    font-size: 1.7em;\n}\n\n.v2ray[_ngcontent-%COMP%]{\n    font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNO21EQUM2QztJQUMvQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZXtcbiAgICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5pY29ue1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG59XG5cbi52MnJheXtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 269:
/*!********************************************!*\
  !*** ./src/app/qrcode/qrcode.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrcodeComponent": () => (/* binding */ QrcodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/protocol/api */ 5843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-qrcode */ 9349);




class QrcodeComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        switch (this.data.Protocol) {
            case _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__.Vmess:
                const vms = {
                    v: this.data.Level,
                    ps: this.data.Name,
                    add: this.data.Address,
                    port: this.data.Port,
                    id: this.data.UserID,
                    aid: this.data.AlertID,
                    net: this.data.Network,
                    host: this.data.Domains,
                    type: this.data.Security,
                    path: this.data.Path,
                    tls: this.data.NetSecurity,
                };
                let objJsonStr = JSON.stringify(vms);
                this.value = "vmess://" + btoa(unescape(encodeURIComponent(objJsonStr)));
                break;
            case _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__.Vless:
                const vls = {
                    v: this.data.Level,
                    ps: this.data.Name,
                    add: this.data.Address,
                    port: this.data.Port,
                    id: this.data.UserID,
                    encry: this.data.Encryption,
                    flow: this.data.Flow,
                    net: this.data.Network,
                    sec: this.data.NetSecurity,
                    path: this.data.Path,
                };
                this.value = "vless://" + btoa(unescape(encodeURIComponent(JSON.stringify(vls))));
                break;
            case _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__.Socks:
                const socks = this.data.User + ":" + this.data.Passwd + "@" +
                    this.data.Address + ":" + this.data.Port;
                this.value = "socks://" + btoa(socks) +
                    "#" + encodeURI(this.data.Name);
                break;
            case _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__.Shadowsocks:
                const ss = this.data.Security + ":" + this.data.Passwd + "@" +
                    this.data.Address + ":" + this.data.Port;
                this.value = "ss://" + btoa(ss) +
                    "#" + encodeURI(this.data.Name);
                break;
            default:
                this.value = 'TODO';
                break;
        }
    }
}
QrcodeComponent.ɵfac = function QrcodeComponent_Factory(t) { return new (t || QrcodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
QrcodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QrcodeComponent, selectors: [["app-qrcode"]], decls: 2, vars: 2, consts: [[3, "value", "size"]], template: function QrcodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "qr-code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.value)("size", 300);
    } }, directives: [angular2_qrcode__WEBPACK_IMPORTED_MODULE_1__.QRCodeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxcmNvZGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5670:
/*!********************************************!*\
  !*** ./src/app/service/msg/msg.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsgService": () => (/* binding */ MsgService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MsgService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.protocolSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.updateProtocolSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.addSubscribeSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.updateSubscribeSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.statusSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.localSettingSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.disableSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    changemessage(single) {
        this.messageSource.next(single);
    }
    addProtocol(data) {
        this.protocolSource.next(data);
    }
    updateProtocol(data) {
        this.updateProtocolSource.next(data);
    }
    addSubscribeURL(data) {
        this.addSubscribeSource.next(data);
    }
    updateSubscribeURL(data) {
        this.updateSubscribeSource.next(data);
    }
    v2rayStatus(status) {
        this.statusSource.next(status);
    }
    disableButton(b) {
        this.disableSource.next(b);
    }
    localSetting(data) {
        this.localSettingSource.next(data);
    }
}
MsgService.ɵfac = function MsgService_Factory(t) { return new (t || MsgService)(); };
MsgService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MsgService, factory: MsgService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5843:
/*!*****************************************!*\
  !*** ./src/app/service/protocol/api.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Save": () => (/* binding */ Save),
/* harmony export */   "Delete": () => (/* binding */ Delete),
/* harmony export */   "Update": () => (/* binding */ Update),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "Clear": () => (/* binding */ Clear),
/* harmony export */   "Vmess": () => (/* binding */ Vmess),
/* harmony export */   "Vless": () => (/* binding */ Vless),
/* harmony export */   "Socks": () => (/* binding */ Socks),
/* harmony export */   "Shadowsocks": () => (/* binding */ Shadowsocks),
/* harmony export */   "SS": () => (/* binding */ SS)
/* harmony export */ });
// 后端 API 请求路径 
const Save = '/api/protocol/add'; // 增加协议
const Delete = '/api/protocol/delete'; // 删除协议
const Update = '/api/protocol/update'; // 修改协议
const List = '/api/protocol/list'; // 列出协议列表
const Clear = '/api/protocol/clear'; // 清空协议列表
// 协议
const Vmess = "vmess";
const Vless = "vless";
const Socks = "socks";
const Shadowsocks = "shadowsocks";
const SS = "ss";


/***/ }),

/***/ 5480:
/*!******************************************************!*\
  !*** ./src/app/service/protocol/protocol.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolService": () => (/* binding */ ProtocolService)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ 5843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ProtocolService {
    constructor(http) {
        this.http = http;
    }
    // 保存协议
    save(param) {
        return this.http.post(_api__WEBPACK_IMPORTED_MODULE_0__.Save, param).toPromise();
    }
    // 删除协议
    delete(param) {
        return this.http.post(_api__WEBPACK_IMPORTED_MODULE_0__.Delete, param).toPromise();
    }
    // 修改协议
    update(param) {
        return this.http.post(_api__WEBPACK_IMPORTED_MODULE_0__.Update, param).toPromise();
    }
    // 查询协议
    list(param) {
        return this.http.post(_api__WEBPACK_IMPORTED_MODULE_0__.List, param).toPromise();
    }
    // 清空协议
    clear(param) {
        return this.http.post(_api__WEBPACK_IMPORTED_MODULE_0__.Clear, param).toPromise();
    }
}
ProtocolService.ɵfac = function ProtocolService_Factory(t) { return new (t || ProtocolService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProtocolService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProtocolService, factory: ProtocolService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 977:
/*!******************************************!*\
  !*** ./src/app/service/subscribe/api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Add": () => (/* binding */ Add),
/* harmony export */   "Update": () => (/* binding */ Update),
/* harmony export */   "Delete": () => (/* binding */ Delete),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "Pull": () => (/* binding */ Pull)
/* harmony export */ });
const Add = '/api/subscribe/add'; // 增加订阅地址
const Update = '/api/subscribe/update'; // 修改订阅地址
const Delete = '/api/subscribe/delete'; // 删除订阅地址
const List = '/api/subscribe/list'; // 查询订阅地址
const Pull = '/api/subscribe/pull'; // 订阅


/***/ }),

/***/ 9560:
/*!********************************************************!*\
  !*** ./src/app/service/subscribe/subscribe.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeService": () => (/* binding */ SubscribeService)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ 977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class SubscribeService {
    constructor(http) {
        this.http = http;
    }
    // 订阅协议
    subscribe(param) {
        return this.http.post(_api__WEBPACK_IMPORTED_MODULE_0__.Pull, param).toPromise();
    }
    // 增加订阅地址
    add(param) {
        return this.http.post(_api__WEBPACK_IMPORTED_MODULE_0__.Add, param).toPromise();
    }
    // 修改订阅地址
    update(param) {
        return this.http.post(_api__WEBPACK_IMPORTED_MODULE_0__.Update, param).toPromise();
    }
    // 删除订阅地址
    delete(param) {
        return this.http.post(_api__WEBPACK_IMPORTED_MODULE_0__.Delete, param).toPromise();
    }
    // 查询订阅地址
    list(param) {
        return this.http.post(_api__WEBPACK_IMPORTED_MODULE_0__.List, param).toPromise();
    }
}
SubscribeService.ɵfac = function SubscribeService_Factory(t) { return new (t || SubscribeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SubscribeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubscribeService, factory: SubscribeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7528:
/*!**************************************!*\
  !*** ./src/app/service/v2ray/api.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Start": () => (/* binding */ Start),
/* harmony export */   "Stop": () => (/* binding */ Stop),
/* harmony export */   "Status": () => (/* binding */ Status),
/* harmony export */   "Logs": () => (/* binding */ Logs),
/* harmony export */   "Settings": () => (/* binding */ Settings),
/* harmony export */   "ListSettings": () => (/* binding */ ListSettings),
/* harmony export */   "getWebSocketAddr": () => (/* binding */ getWebSocketAddr)
/* harmony export */ });
// 后端 API 请求路径 
const Start = '/api/v2ray/start';
const Stop = '/api/v2ray/stop';
const Status = '/api/v2ray/status';
const Logs = '/api/v2ray/logs';
const Settings = "/api/v2ray/settings";
const ListSettings = "/api/v2ray/listSettings";
// 获取 websocket 地址
function getWebSocketAddr(path) {
    const location = document.location;
    let addr;
    if (location.protocol == "https") {
        addr = `wss://${location.hostname}`;
        if (location.port == "") {
            addr += ":443";
        }
        else {
            addr += `:${location.port}`;
        }
    }
    else {
        addr = `ws://${location.hostname}`;
        if (location.port == "") {
            addr += ":80";
        }
        else {
            addr += `:${location.port}`;
        }
    }
    return `${addr}${path}`;
}


/***/ }),

/***/ 6617:
/*!************************************************!*\
  !*** ./src/app/service/v2ray/v2ray.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V2rayService": () => (/* binding */ V2rayService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ 7528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class V2rayService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // 启动 v2ray
    start(param) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.httpClient.post(_api__WEBPACK_IMPORTED_MODULE_0__.Start, param).toPromise();
        });
    }
    // 关闭 v2ray
    stop() {
        return this.httpClient.get(_api__WEBPACK_IMPORTED_MODULE_0__.Stop).toPromise();
    }
    // 参数设置
    settings(param) {
        return this.httpClient.post(_api__WEBPACK_IMPORTED_MODULE_0__.Settings, param).toPromise();
    }
    // 获取参数配置
    listSettings() {
        return this.httpClient.get(_api__WEBPACK_IMPORTED_MODULE_0__.ListSettings).toPromise();
    }
}
V2rayService.ɵfac = function V2rayService_Factory(t) { return new (t || V2rayService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
V2rayService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: V2rayService, factory: V2rayService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8320:
/*!******************************************************!*\
  !*** ./src/app/shadowsocks/shadowsocks.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShadowsocksComponent": () => (/* binding */ ShadowsocksComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/protocol/api */ 5843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/protocol/protocol.service */ 5480);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _service_msg_msg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/msg/msg.service */ 5670);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);















class ShadowsocksComponent {
    constructor(protocol, toaster, dialogRef, msg, data) {
        this.protocol = protocol;
        this.toaster = toaster;
        this.dialogRef = dialogRef;
        this.msg = msg;
        this.data = data;
        // 是否禁用按钮
        this.disable = false;
        // 显示密码
        this.hide = true;
    }
    ngOnInit() {
        this.params = {
            Protocol: _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__.Shadowsocks,
            Security: "none" // 默认值
        };
        // 修改
        if (this.data.op === "update") {
            this.params.ID = this.data.value.ID;
            this.params.Name = this.data.value.Name;
            this.params.Address = this.data.value.Address;
            this.params.Port = this.data.value.Port;
            this.params.Passwd = this.data.value.Passwd;
            this.params.Security = this.data.value.Security;
            this.params.Direct = this.data.value.Direct;
            this.on = true;
        }
        // 增加
        if (this.data.op === 'add') {
            this.on = false;
        }
    }
    // 增加
    save() {
        this.disable = true;
        this.protocol.save(this.params).then((value) => {
            // 通知主界面将新增的协议增加到列表里。
            this.params.ID = value.data.id;
            this.params.ConfigFile = value.data.cnf;
            this.msg.addProtocol(this.params);
            this.toaster.pop("success", "增加成功");
            this.dialogRef.close();
        }).catch(() => {
            this.toaster.pop("error", "增加失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    // 修改
    update() {
        this.disable = true;
        this.protocol.update(this.params).then((v) => {
            this.params.ConfigFile = v.data.cnf;
            this.msg.updateProtocol(this.params);
            this.toaster.pop("success", "修改成功");
            this.dialogRef.close();
        }).catch((e) => {
            this.toaster.pop("error", "修改失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    // 加密方式
    security(evt) {
        this.params.Security = evt.value;
    }
    // 国内直连
    direct(evt) {
        this.params.Direct = evt.checked;
    }
}
ShadowsocksComponent.ɵfac = function ShadowsocksComponent_Factory(t) { return new (t || ShadowsocksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_1__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_2__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_3__.MsgService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
ShadowsocksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ShadowsocksComponent, selectors: [["app-shadowsocks"]], decls: 43, vars: 16, consts: [["mat-dialog-title", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", 3, "disabled", "type", "ngModel", "ngModelChange"], ["mat-flat-button", "", "matSuffix", "", 3, "click"], ["color", "primary"], [3, "disabled", "value", "valueChange", "selectionChange"], ["value", "none"], ["value", "aes-256-gcm"], ["value", "aes-128-gcm"], ["value", "chacha20-poly1305"], ["value", "chacha20-ietf-poly1305"], ["color", "primary", 3, "disabled", "checked", "change"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "matDialogClose", "", 3, "disabled"]], template: function ShadowsocksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Shadowsocks \u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field", 1)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u522B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ShadowsocksComponent_Template_input_ngModelChange_6_listener($event) { return ctx.params.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 1)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ShadowsocksComponent_Template_input_ngModelChange_10_listener($event) { return ctx.params.Address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 1)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ShadowsocksComponent_Template_input_ngModelChange_14_listener($event) { return ctx.params.Port = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 1)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u5BC6\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ShadowsocksComponent_Template_input_ngModelChange_18_listener($event) { return ctx.params.Passwd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShadowsocksComponent_Template_button_click_19_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field", 1)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u52A0\u5BC6\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function ShadowsocksComponent_Template_mat_select_valueChange_25_listener($event) { return ctx.params.Security = $event; })("selectionChange", function ShadowsocksComponent_Template_mat_select_selectionChange_25_listener($event) { return ctx.security($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "aes-256-gcm");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "aes-128-gcm");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "chacha20-poly1305");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "chacha20-ietf-poly1305");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-slide-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ShadowsocksComponent_Template_mat_slide_toggle_change_36_listener($event) { return ctx.direct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\u56FD\u5185\u76F4\u8FDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-dialog-actions")(39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShadowsocksComponent_Template_button_click_39_listener() { return ctx.on ? ctx.update() : ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\u4FDD\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Port);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("type", ctx.hide ? "password" : "text")("ngModel", ctx.params.Passwd);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("value", ctx.params.Security);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("checked", ctx.params.Direct);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], styles: [".full-width[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYWRvd3NvY2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic2hhZG93c29ja3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 2542:
/*!******************************************!*\
  !*** ./src/app/socks/socks.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocksComponent": () => (/* binding */ SocksComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/protocol/api */ 5843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/protocol/protocol.service */ 5480);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _service_msg_msg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/msg/msg.service */ 5670);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);













class SocksComponent {
    constructor(protocol, toaster, dialogRef, msg, data) {
        this.protocol = protocol;
        this.toaster = toaster;
        this.dialogRef = dialogRef;
        this.msg = msg;
        this.data = data;
        // 是否禁用按钮
        this.disable = false;
        // 显示密码
        this.hide = true;
    }
    ngOnInit() {
        // 获取用户信息
        this.params = {
            Protocol: _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__.Socks, // socks 协议
        };
        // 修改
        if (this.data.op === "update") {
            this.params.ID = this.data.value.ID;
            this.params.Name = this.data.value.Name;
            this.params.Address = this.data.value.Address;
            this.params.Port = this.data.value.Port;
            this.params.User = this.data.value.User;
            this.params.Passwd = this.data.value.Passwd;
            this.on = true;
        }
        // 增加
        if (this.data.op === 'add') {
            this.on = false;
        }
    }
    // 增加
    save() {
        this.disable = true;
        this.protocol.save(this.params).then((value) => {
            // 通知主界面将新增的协议增加到列表里。
            this.params.ID = value.data.id;
            this.params.ConfigFile = value.data.cnf;
            this.msg.addProtocol(this.params);
            this.toaster.pop("success", "增加成功");
            this.dialogRef.close();
        }).catch(() => {
            this.toaster.pop("error", "增加失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    // 修改
    update() {
        this.disable = true;
        this.protocol.update(this.params).then((v) => {
            this.params.ConfigFile = v.data.cnf;
            this.msg.updateProtocol(this.params);
            this.toaster.pop("success", "修改成功");
            this.dialogRef.close();
        }).catch((e) => {
            this.toaster.pop("error", "修改失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    // 国内直连
    direct(evt) {
        this.params.Direct = evt.checked;
    }
}
SocksComponent.ɵfac = function SocksComponent_Factory(t) { return new (t || SocksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_1__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_2__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_3__.MsgService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
SocksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SocksComponent, selectors: [["app-socks"]], decls: 33, vars: 16, consts: [["mat-dialog-title", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", 3, "disabled", "type", "ngModel", "ngModelChange"], ["mat-flat-button", "", "matSuffix", "", 3, "click"], ["color", "primary"], ["color", "primary", 3, "disabled", "checked", "change"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "matDialogClose", "", 3, "disabled"]], template: function SocksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Socks \u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field", 1)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u522B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SocksComponent_Template_input_ngModelChange_6_listener($event) { return ctx.params.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 1)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SocksComponent_Template_input_ngModelChange_10_listener($event) { return ctx.params.Address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 1)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SocksComponent_Template_input_ngModelChange_14_listener($event) { return ctx.params.Port = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 1)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u7528\u6237\u540D(\u53EF\u9009)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SocksComponent_Template_input_ngModelChange_18_listener($event) { return ctx.params.User = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 1)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u5BC6\u7801(\u53EF\u9009)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SocksComponent_Template_input_ngModelChange_22_listener($event) { return ctx.params.Passwd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SocksComponent_Template_button_click_23_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SocksComponent_Template_mat_slide_toggle_change_26_listener($event) { return ctx.direct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u56FD\u5185\u76F4\u8FDE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-dialog-actions")(29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SocksComponent_Template_button_click_29_listener() { return ctx.on ? ctx.update() : ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\u4FDD\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Port);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.User);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("type", ctx.hide ? "password" : "text")("ngModel", ctx.params.Passwd);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("checked", ctx.params.Direct);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], styles: [".full-width[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic29ja3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 9329:
/*!**************************************************!*\
  !*** ./src/app/subconfig/subconfig.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubconfigComponent": () => (/* binding */ SubconfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_subscribe_subscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/subscribe/subscribe.service */ 9560);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _service_msg_msg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/msg/msg.service */ 5670);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);










class SubconfigComponent {
    constructor(subService, toaster, dialogRef, msg, data) {
        this.subService = subService;
        this.toaster = toaster;
        this.dialogRef = dialogRef;
        this.msg = msg;
        this.data = data;
        // 是否禁用按钮
        this.disable = false;
    }
    ngOnInit() {
        // 获取用户信息
        this.params = {};
        // 修改
        if (this.data.op === 'update') {
            this.params.ID = this.data.value.ID;
            this.params.Name = this.data.value.Name;
            this.params.URL = this.data.value.URL;
            this.on = true;
        }
        // 增加
        if (this.data.op === 'add') {
            this.on = false;
        }
    }
    // 增加
    save() {
        this.disable = true;
        this.subService.add(this.params).then((value) => {
            this.params.ID = value.data.id;
            this.msg.addSubscribeURL(this.params);
            this.toaster.pop("success", "增加成功");
            this.dialogRef.close();
        }).catch((e) => {
            console.log(e);
            this.toaster.pop("error", "增加失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    // 修改
    update() {
        this.disable = true;
        this.subService.update(this.params).then(() => {
            this.msg.updateSubscribeURL(this.params);
            this.toaster.pop("success", "修改成功");
            this.dialogRef.close();
        }).catch((e) => {
            console.log(e);
            this.toaster.pop("error", "修改失败");
        }).finally(() => {
            this.disable = false;
        });
    }
}
SubconfigComponent.ɵfac = function SubconfigComponent_Factory(t) { return new (t || SubconfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_subscribe_subscribe_service__WEBPACK_IMPORTED_MODULE_0__.SubscribeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_1__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_2__.MsgService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
SubconfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubconfigComponent, selectors: [["app-subconfig"]], decls: 16, vars: 6, consts: [["mat-dialog-title", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", 3, "disabled", "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "matDialogClose", "", 3, "disabled"]], template: function SubconfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u8BA2\u9605\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field", 1)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubconfigComponent_Template_input_ngModelChange_6_listener($event) { return ctx.params.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 1)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SubconfigComponent_Template_input_ngModelChange_10_listener($event) { return ctx.params.URL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-dialog-actions")(12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubconfigComponent_Template_button_click_12_listener() { return ctx.on ? ctx.update() : ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u4FDD\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.URL);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disable);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose], styles: [".full-width[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmNvbmZpZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InN1YmNvbmZpZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGh7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 1660:
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeComponent": () => (/* binding */ SubscribeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _subconfig_subconfig_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subconfig/subconfig.component */ 9329);
/* harmony import */ var _service_subscribe_subscribe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/subscribe/subscribe.service */ 9560);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 2796);










class SubscribeComponent {
    constructor(subService, toaster, dialog) {
        this.subService = subService;
        this.toaster = toaster;
        this.dialog = dialog;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(); // 导出属性
    }
    set value(data) {
        if (!data) {
            return;
        }
        this.data = data;
    }
    ngOnInit() {
    }
    // 打开窗口
    openSubconfigWindow(v) {
        this.dialog.open(_subconfig_subconfig_component__WEBPACK_IMPORTED_MODULE_0__.SubconfigComponent, {
            width: "45%",
            data: {
                "op": "update",
                "value": v,
            }
        });
    }
    // 删除配置
    remove(data) {
        this.disable = true;
        this.subService.delete({
            ID: data.ID,
        }).then(() => {
            this.toaster.pop("success", "删除成功");
            this.click.emit(this.data);
        }).catch(() => {
            this.toaster.pop("error", "删除失败");
        }).finally(() => {
            this.disable = false;
        });
    }
}
SubscribeComponent.ɵfac = function SubscribeComponent_Factory(t) { return new (t || SubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_subscribe_subscribe_service__WEBPACK_IMPORTED_MODULE_1__.SubscribeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_2__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
SubscribeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubscribeComponent, selectors: [["app-subscribe"]], inputs: { value: "value" }, outputs: { click: "clickEvt" }, decls: 29, vars: 6, consts: [[1, "flex"], [2, "margin-top", "10px"], ["color", "primary"], [1, "fill-remaining-space"], [1, "font"], ["color", "primary", "mat-icon-button", "", "matTooltip", "\u83DC\u5355", 3, "disabled", "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "disabled", "click"]], template: function SubscribeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "span", 1)(2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "import_contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 3)(5, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u540D\u79F0\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p")(9, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u5730\u5740\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span")(13, "span")(14, "button", 5)(15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-menu", null, 6)(19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubscribeComponent_Template_button_click_19_listener() { return ctx.openSubconfigWindow(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u4FEE\u6539");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubscribeComponent_Template_button_click_24_listener() { return ctx.remove(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u5220\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.data.URL, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disable)("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disable);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem], styles: [".flex[_ngcontent-%COMP%]{\n    display: flex;\n    margin-top: 35px;\n}\n.fill-remaining-space[_ngcontent-%COMP%]{\n  flex: 1 1 auto;\n  margin-left: 20px;\n}\n.font[_ngcontent-%COMP%]{\n  color: rgb(42, 42, 153);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmliZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InN1YnNjcmliZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmZpbGwtcmVtYWluaW5nLXNwYWNle1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uZm9udHtcbiAgY29sb3I6IHJnYig0MiwgNDIsIDE1Myk7XG59Il19 */"] });


/***/ }),

/***/ 9298:
/*!**************************************************!*\
  !*** ./src/app/unmarshal/unmarshal.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnmarshalComponent": () => (/* binding */ UnmarshalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _service_msg_msg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/msg/msg.service */ 5670);
/* harmony import */ var _service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/protocol/protocol.service */ 5480);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);









class UnmarshalComponent {
    constructor(toaster, msg, protService, dialogRef) {
        this.toaster = toaster;
        this.msg = msg;
        this.protService = protService;
        this.dialogRef = dialogRef;
        this.content = '';
    }
    ngOnInit() {
    }
    // 导入
    import() {
        const content = this.content.trim();
        if (!content || content === '') {
            this.toaster.pop("error", "导入失败", "格式错误");
            return;
        }
        const rest = content.split("://");
        if (rest.length != 2) {
            this.toaster.pop("error", "导入失败", "不支持该格式");
            return;
        }
        const protName = rest[0];
        const protContent = rest[1];
        const ss = protContent.split("#");
        let data, ps, userCnf, serverCnf;
        if (ss.length == 2) {
            ps = decodeURI(ss[1]);
            data = this.b64_to_utf8(ss[0]);
            const cnf = data.split("@");
            if (cnf.length != 2) {
                this.toaster.pop("error", "导入失败", "不支持该格式");
                return;
            }
            userCnf = cnf[0].split(":");
            serverCnf = cnf[1].split(":");
            if (userCnf.length != 2 || serverCnf.length != 2) {
                this.toaster.pop("error", "导入失败", "不支持该格式");
                return;
            }
        }
        else {
            data = JSON.parse(this.b64_to_utf8(protContent));
        }
        switch (protName.toUpperCase()) {
            case "VLESS":
                this.toaster.pop("error", "导入失败", "不支持该格式");
                break;
            case "VMESS":
                this.protocol = {
                    Protocol: protName,
                    Name: data.ps,
                    Address: data.add,
                    AlertID: +data.aid,
                    Domains: data.host,
                    Level: +data.v,
                    NetSecurity: data.tls,
                    Network: data.net,
                    Path: data.path,
                    Port: +data.port,
                    Security: data.type,
                    UserID: data.id,
                    Direct: false
                };
                break;
            case "SOCKS":
                this.protocol = {
                    Protocol: protName,
                    Direct: false,
                    Name: ps,
                    Address: serverCnf[0],
                    Port: +serverCnf[1],
                    User: userCnf[0],
                    Passwd: userCnf[1],
                };
                break;
            case "SS":
                this.protocol = {
                    Protocol: "shadowsocks",
                    Direct: false,
                    Name: ps,
                    Address: serverCnf[0],
                    Port: +serverCnf[1],
                    Security: userCnf[0],
                    Passwd: userCnf[1],
                };
                break;
            default:
                this.toaster.pop("warning", "导入失败", "暂不支持该协议");
                return;
        }
        this.protService.save(this.protocol).then((v) => {
            this.protocol.ID = v.data.id;
            this.protocol.ConfigFile = v.data.cnf;
            this.msg.addProtocol(this.protocol);
            this.toaster.pop("success", "导入成功");
        }).catch((e) => {
            console.log(e);
            this.toaster.pop("error", "导入失败");
        });
        this.dialogRef.close();
    }
    // decode 
    b64_to_utf8(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }
}
UnmarshalComponent.ɵfac = function UnmarshalComponent_Factory(t) { return new (t || UnmarshalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_0__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_1__.MsgService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_2__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef)); };
UnmarshalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UnmarshalComponent, selectors: [["app-unmarshal"]], decls: 12, vars: 2, consts: [["mat-dialog-title", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "matDialogClose", ""]], template: function UnmarshalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u526A\u8D34\u677F\u5BFC\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field", 1)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UnmarshalComponent_Template_input_ngModelChange_6_listener($event) { return ctx.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-dialog-actions")(8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UnmarshalComponent_Template_button_click_8_listener() { return ctx.import(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u786E\u8BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", false);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose], styles: [".full-width[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubWFyc2hhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InVubWFyc2hhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGh7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 9768:
/*!******************************************!*\
  !*** ./src/app/v2ray/v2ray.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V2rayComponent": () => (/* binding */ V2rayComponent)
/* harmony export */ });
/* harmony import */ var _vmess_vmess_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vmess/vmess.component */ 4728);
/* harmony import */ var _service_v2ray_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/v2ray/api */ 7528);
/* harmony import */ var _vless_vless_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vless/vless.component */ 3057);
/* harmony import */ var _subconfig_subconfig_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subconfig/subconfig.component */ 9329);
/* harmony import */ var _unmarshal_unmarshal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unmarshal/unmarshal.component */ 9298);
/* harmony import */ var _socks_socks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socks/socks.component */ 2542);
/* harmony import */ var _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/protocol/api */ 5843);
/* harmony import */ var _shadowsocks_shadowsocks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shadowsocks/shadowsocks.component */ 8320);
/* harmony import */ var _configfile_configfile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../configfile/configfile.component */ 2784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_v2ray_v2ray_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/v2ray/v2ray.service */ 6617);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _service_msg_msg_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/msg/msg.service */ 5670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/protocol/protocol.service */ 5480);
/* harmony import */ var _service_subscribe_subscribe_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../service/subscribe/subscribe.service */ 9560);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _protocol_protocol_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../protocol/protocol.component */ 2301);
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../subscribe/subscribe.component */ 1660);



























function V2rayComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " \u670D\u52A1\u7BA1\u7406 ");
} }
function V2rayComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainer"](0);
} }
function V2rayComponent_ng_template_65_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "app-protocol", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("clickEvt", function V2rayComponent_ng_template_65_div_0_Template_app_protocol_clickEvt_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r16.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const protocol_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", protocol_r15);
} }
function V2rayComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, V2rayComponent_ng_template_65_div_0_Template, 2, 1, "div", 18);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r4.protocols);
} }
function V2rayComponent_ng_template_67_Template(rf, ctx) { }
function V2rayComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " \u8BA2\u9605\u7BA1\u7406 ");
} }
function V2rayComponent_ng_container_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainer"](0);
} }
function V2rayComponent_ng_template_82_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "app-subscribe", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("clickEvt", function V2rayComponent_ng_template_82_div_0_Template_app_subscribe_clickEvt_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r20.removeSubscribeURL($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", data_r19);
} }
function V2rayComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, V2rayComponent_ng_template_82_div_0_Template, 2, 1, "div", 18);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r10.subscribes);
} }
function V2rayComponent_ng_template_84_Template(rf, ctx) { }
function V2rayComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " \u5173\u4E8E\u5E94\u7528 ");
} }
class V2rayComponent {
    constructor(v2ray, toaster, msg, dialog, proto, subSerivce) {
        this.v2ray = v2ray;
        this.toaster = toaster;
        this.msg = msg;
        this.dialog = dialog;
        this.proto = proto;
        this.subSerivce = subSerivce;
        this.checked = true;
        this.on = true;
        // 运行状态不允许清空协议
        this.lock = false;
        // 协议内容
        this._vmessProt = new Map();
        this._vlessProt = new Map();
        this._socksProt = new Map();
        this._shadowsocksProt = new Map();
        this._subscribeMap = new Map();
    }
    ngOnInit() {
        this.disable = false;
        this.enabled = false;
        this.params = {};
        this.logs = '';
        this.protocols = new Array();
        this.socksParam = {};
        this.subscribes = new Array();
        this.subscribeParam = {};
        // 订阅协议，增加到视图上。
        this.msg.protocolSource.subscribe((protocol) => {
            if (!protocol) {
                return;
            }
            this.protocols.push(protocol);
            switch (protocol.Protocol) {
                case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Vmess:
                    this._vmessProt.set(protocol.ID, protocol);
                    break;
                case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Vless:
                    this._vlessProt.set(protocol.ID, protocol);
                    break;
                case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Socks:
                    this._socksProt.set(protocol.ID, protocol);
                    break;
                case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Shadowsocks:
                    this._shadowsocksProt.set(protocol.ID, protocol);
                    break;
            }
        });
        // 修改协议
        this.msg.updateProtocolSource.subscribe((protocol) => {
            if (!protocol) {
                return;
            }
            let preProtocol;
            switch (protocol.Protocol) {
                case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Vmess:
                    preProtocol = this._vmessProt.get(protocol.ID);
                    this._vmessProt.set(protocol.ID, protocol);
                    break;
                case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Vless:
                    preProtocol = this._vlessProt.get(protocol.ID);
                    this._vlessProt.set(protocol.ID, protocol);
                    break;
                case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Socks:
                    preProtocol = this._socksProt.get(protocol.ID);
                    this._socksProt.set(protocol.ID, protocol);
                    break;
                case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Shadowsocks:
                    preProtocol = this._shadowsocksProt.get(protocol.ID);
                    this._shadowsocksProt.set(protocol.ID, protocol);
                    break;
            }
            const index = this.protocols.indexOf(preProtocol);
            if (index === -1) {
                return;
            }
            this.protocols[index] = protocol;
        }, (err) => {
            console.error(err);
        });
        // 增加订阅地址
        this.msg.addSubscribeSource.subscribe((data) => {
            if (!data) {
                return;
            }
            this.subscribes.push(data);
            this._subscribeMap.set(data.ID, data);
        }, (err) => {
            console.error(err);
        });
        // 修改订阅地址
        this.msg.updateSubscribeSource.subscribe((data) => {
            if (!data) {
                return;
            }
            const preData = this._subscribeMap.get(data.ID);
            const index = this.subscribes.indexOf(preData);
            if (index === -1) {
                return;
            }
            this.subscribes[index] = data;
            this._subscribeMap.set(data.ID, data);
        }, (err) => {
            console.error(err);
        });
        // 获取协议列表
        this.proto.list({}).then((v) => {
            if (!v.data.vmess && !v.data.vless &&
                !v.data.socks && !v.data.shadowsocks) {
                this.toaster.pop("warning", "暂无代理协议");
                return;
            }
            if (v.data.vmess) {
                v.data.vmess.forEach((data) => {
                    this.protocols.push(data);
                    this._vmessProt.set(data.ID, data);
                });
            }
            if (v.data.vless) {
                v.data.vless.forEach((data) => {
                    this.protocols.push(data);
                    this._vlessProt.set(data.ID, data);
                });
            }
            if (v.data.socks) {
                v.data.socks.forEach((data) => {
                    this.protocols.push(data);
                    this._socksProt.set(data.ID, data);
                });
            }
            if (v.data.shadowsocks) {
                v.data.shadowsocks.forEach((data) => {
                    this.protocols.push(data);
                    this._shadowsocksProt.set(data.ID, data);
                });
            }
        }).catch((e) => {
            this.toaster.pop("error", "获取协议列表失败", e);
        });
        // 获取订阅地址
        // this.subscribeParam.UID = userInfo.user_id
        this.subSerivce.list(this.subscribeParam).
            then((v) => {
            if (!v.data.content) {
                return;
            }
            if (v.data.content) {
                v.data.content.forEach((data) => {
                    this.subscribes.push(data);
                    this._subscribeMap.set(data.ID, data);
                });
            }
        }).catch((e) => {
            this.toaster.pop("error", "获取订阅地址失败", e);
        });
        // 登录成功后开启 ws 协议，获取 v2ray 状态
        const statusAddr = (0,_service_v2ray_api__WEBPACK_IMPORTED_MODULE_1__.getWebSocketAddr)(_service_v2ray_api__WEBPACK_IMPORTED_MODULE_1__.Status);
        this.wsStatus = new WebSocket(statusAddr, [localStorage.getItem("access_token")]);
        this.wsStatus.onmessage = (v) => {
            this.msg.v2rayStatus(v.data);
            const status = JSON.parse(v.data);
            if (status.running) {
                this.lock = true;
            }
            else {
                this.lock = false;
            }
        };
        this.wsStatus.onerror = (v) => {
            console.log(v);
            this.toaster.pop("error", "获取 v2ray 状态失败");
        };
        this.wsStatus.onclose = (v) => {
            console.log("close", v);
        };
        // 登录成功后开启 ws 协议，用于开启日志
        const logsAddr = (0,_service_v2ray_api__WEBPACK_IMPORTED_MODULE_1__.getWebSocketAddr)(_service_v2ray_api__WEBPACK_IMPORTED_MODULE_1__.Logs);
        this.wsLogs = new WebSocket(logsAddr, [localStorage.getItem("access_token")]);
        this.wsLogs.onmessage = (v) => {
            if (this.on) {
                this.logs = v.data + this.logs;
            }
        };
        this.wsLogs.onerror = (v) => {
            console.log(v);
            this.toaster.pop("error", "获取 v2ray 日志失败");
        };
        this.wsLogs.onclose = (v) => {
            console.log(v);
        };
    }
    ngOnDestroy() {
        this.wsLogs.close();
        this.wsStatus.close();
    }
    // 加密方式
    security(evt) {
        this.params.Security = evt.value;
    }
    // 传输协议
    network(evt) {
        this.params.Network = evt.value;
    }
    // 传输协议加密方式
    netSecurity(evt) {
        this.params.NetSecurity = evt.value;
    }
    // 启动
    start() {
        if (this.enabled) {
            this.disable = true;
            return;
        }
        if (Object.keys(this.params).length === 0) {
            return;
        }
        this.disable = true;
        // 启动
        this.v2ray.start(this.params).then((res) => {
            this.toaster.pop("success", "启动成功", res.data.msg);
            this.enabled = true;
            this.logs = '';
        }).catch((e) => {
            // 不是刷新 token 的错误，弹出错误内容。
            if (e.status == 403) {
                this.toaster.pop("warning", "长时间未操作请重新登录");
            }
            else {
                this.toaster.pop("error", "关闭失败", e.error.error);
            }
        }).finally(() => {
            this.disable = false;
        });
    }
    // 关闭
    stop() {
        if (!this.enabled) {
            this.toaster.pop("error", "关闭失败", "服务未启动");
            return;
        }
        this.disable = true;
        this.v2ray.stop().then((res) => {
            this.enabled = false;
            this.toaster.pop("success", "关闭成功", res.data.msg);
        }).catch((e) => {
            // 不是刷新 token 的错误，弹出错误内容。
            if (e.status == 403) {
                this.toaster.pop("warning", "长时间未操作请重新登录");
            }
            else {
                this.toaster.pop("error", "关闭失败", e.error.error);
            }
        }).finally(() => {
            this.disable = false;
        });
    }
    // 开启日志
    startLogs(started) {
        this.on = started;
    }
    // 打开 vmess 协议的配置窗口
    openVmessWindow() {
        this.dialog.open(_vmess_vmess_component__WEBPACK_IMPORTED_MODULE_0__.VmessComponent, {
            width: "45%",
            data: {
                "op": "add",
            }
        });
    }
    // 打开 vless 协议的窗口配置
    openVLESSWindow() {
        this.dialog.open(_vless_vless_component__WEBPACK_IMPORTED_MODULE_2__.VlessComponent, {
            width: "45%",
            data: {
                "op": "add",
            }
        });
    }
    // 打开 socks 协议的窗口配置
    openSocksWindow() {
        this.dialog.open(_socks_socks_component__WEBPACK_IMPORTED_MODULE_5__.SocksComponent, {
            width: "45%",
            data: {
                "op": "add",
            }
        });
    }
    // 打开 shadowsocks 协议的窗口配置
    openShadowsocksWindow() {
        this.dialog.open(_shadowsocks_shadowsocks_component__WEBPACK_IMPORTED_MODULE_7__.ShadowsocksComponent, {
            width: "45%",
            data: {
                "op": "add",
            }
        });
    }
    // 打开 URL 导入窗口
    openLoadConfigWindow() {
        this.dialog.open(_unmarshal_unmarshal_component__WEBPACK_IMPORTED_MODULE_4__.UnmarshalComponent, {
            width: "45%",
            data: {
                "op": "add",
            }
        });
    }
    // 完整配置导入
    openLoadConfigFileWindow() {
        this.dialog.open(_configfile_configfile_component__WEBPACK_IMPORTED_MODULE_8__.ConfigfileComponent, {
            width: "45%",
            data: {
                "op": "add",
            }
        });
    }
    // 打开订阅窗口配置
    openSubconfigWindow() {
        this.dialog.open(_subconfig_subconfig_component__WEBPACK_IMPORTED_MODULE_3__.SubconfigComponent, {
            width: "45%",
            data: {
                "op": "add",
            }
        });
    }
    // 删除协议
    remove(evt) {
        const index = this.protocols.indexOf(evt, 0);
        if (index > -1) {
            this.protocols.splice(index, 1);
        }
        switch (evt.Protocol) {
            case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Vmess:
                this._vmessProt.delete(evt.ID);
                break;
            case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Vless:
                this._vlessProt.delete(evt.ID);
                break;
            case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Socks:
                this._socksProt.delete(evt.ID);
                break;
            case _service_protocol_api__WEBPACK_IMPORTED_MODULE_6__.Shadowsocks:
                this._socksProt.delete(evt.ID);
                break;
        }
    }
    // 订阅服务
    subscribe() {
        if (this.subscribes.length === 0) {
            return;
        }
        this.disable = true;
        this.subscribes.forEach((param) => {
            this.subSerivce.subscribe(param).then((v) => {
                this.toaster.pop("success", param.Name + ": 订阅成功");
                if (!v.data.vmess && !v.data.vless && !v.data.socks && v.data.shadowsocks) {
                    return;
                }
                if (v.data.vmess) {
                    v.data.vmess.forEach((data) => {
                        this.protocols.push(data);
                        this._vmessProt.set(data.ID, data);
                    });
                }
                if (v.data.vless) {
                    v.data.vless.forEach((data) => {
                        this.protocols.push(data);
                        this._vlessProt.set(data.ID, data);
                    });
                }
                if (v.data.socks) {
                    v.data.socks.forEach((data) => {
                        this.protocols.push(data);
                        this._socksProt.set(data.ID, data);
                    });
                }
                if (v.data.shadowsocks) {
                    v.data.shadowsocks.forEach((data) => {
                        this.protocols.push(data);
                        this._shadowsocksProt.set(data.ID, data);
                    });
                }
            }).catch((e) => {
                console.log(e);
                this.toaster.pop("error", param.Name + ": 订阅失败");
            }).finally(() => {
                this.disable = false;
            });
        });
    }
    // 删除订阅地址
    removeSubscribeURL(evt) {
        const index = this.subscribes.indexOf(evt, 0);
        if (index > -1) {
            this.subscribes.splice(index, 1);
        }
        this._subscribeMap.delete(evt.ID);
    }
    //清空服务列表
    clearProtocol() {
        if (this.lock) {
            this.toaster.pop("warning", "服务运行中", "不允许清空协议");
            return;
        }
        this.disable = true;
        this.proto.clear({}).then(() => {
            this.toaster.pop("success", "清空成功");
            this.protocols = [];
            this._vmessProt.clear();
            this._vlessProt.clear();
            this._shadowsocksProt.clear();
            this._socksProt.clear();
        }).catch((e) => {
            console.log(e);
            this.toaster.pop("error", "清空失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    // 清空日志
    clearLog() {
        this.logs = '';
    }
}
V2rayComponent.ɵfac = function V2rayComponent_Factory(t) { return new (t || V2rayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_service_v2ray_v2ray_service__WEBPACK_IMPORTED_MODULE_9__.V2rayService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_10__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_11__.MsgService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_12__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_service_subscribe_subscribe_service__WEBPACK_IMPORTED_MODULE_13__.SubscribeService)); };
V2rayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: V2rayComponent, selectors: [["app-v2ray"]], decls: 119, vars: 12, consts: [["mat-tab-label", ""], [2, "margin-top", "30px"], ["mat-raised-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "30px", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 2, "margin-left", "30px", 3, "click"], ["color", "primary", 3, "ngModel", "ngModelChange", "change"], ["rows", "6", "matInput", "", 1, "log", 3, "ngModel", "readonly", "ngModelChange"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["ready", ""], ["load", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fin", ""], ["none", ""], ["href", "https://github.com/GopherTy/v2rayW/releases"], ["href", "https://github.com/GopherTy/v2rayW/issues"], ["fontSet", "fontawesome-fab", "fontIcon", "fa-earlybirds", 1, "icon"], [4, "ngFor", "ngForOf"], [3, "value", "clickEvt"], ["fontSet", "fontawesome-far", "fontIcon", "fa-bell", 1, "icon"], ["fontSet", "fontawesome-far", "fontIcon", "fa-kiss-wink-heart", 1, "icon"]], template: function V2rayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-tab-group")(1, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, V2rayComponent_ng_template_2_Template, 2, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "mat-card")(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, " \u670D\u52A1\u5217\u8868 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "mat-card-subtitle", 1)(7, "button", 2)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "library_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\u589E\u52A0\u670D\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "mat-menu", null, 3)(14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function V2rayComponent_Template_button_click_14_listener() { return ctx.openVmessWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "Vmess\u534F\u8BAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function V2rayComponent_Template_button_click_19_listener() { return ctx.openVLESSWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "VLESS\u534F\u8BAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function V2rayComponent_Template_button_click_24_listener() { return ctx.openSocksWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26, "public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "Socks\u534F\u8BAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function V2rayComponent_Template_button_click_29_listener() { return ctx.openShadowsocksWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "Shadowsocks\u534F\u8BAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function V2rayComponent_Template_button_click_34_listener() { return ctx.openLoadConfigWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, "public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38, "\u526A\u8D34\u677F\u5BFC\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function V2rayComponent_Template_button_click_39_listener() { return ctx.openLoadConfigFileWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41, "public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](43, "\u5B8C\u6574\u914D\u7F6E\u5BFC\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function V2rayComponent_Template_button_click_44_listener() { return ctx.subscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46, "subscriptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](48, "\u8BA2\u9605\u670D\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function V2rayComponent_Template_button_click_49_listener() { return ctx.clearProtocol(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](51, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](53, "\u6E05\u7A7A\u670D\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function V2rayComponent_Template_button_click_54_listener() { return ctx.clearLog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](56, "delete_sweep");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](58, "\u6E05\u7A7A\u65E5\u5FD7");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](59, "mat-card-content")(60, "div")(61, "mat-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function V2rayComponent_Template_mat_checkbox_ngModelChange_61_listener($event) { return ctx.checked = $event; })("change", function V2rayComponent_Template_mat_checkbox_change_61_listener($event) { return ctx.startLogs($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](62, "\u5F00\u542F\u65E5\u5FD7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](63, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function V2rayComponent_Template_textarea_ngModelChange_63_listener($event) { return ctx.logs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](64, V2rayComponent_ng_container_64_Template, 1, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](65, V2rayComponent_ng_template_65_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](67, V2rayComponent_ng_template_67_Template, 0, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](69, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](70, V2rayComponent_ng_template_70_Template, 2, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](71, "mat-card")(72, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](73, "\u8BA2\u9605\u5217\u8868");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](74, "mat-card-subtitle", 1)(75, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function V2rayComponent_Template_button_click_75_listener() { return ctx.openSubconfigWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](76, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](77, "widgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](79, "\u8BA2\u9605\u8BBE\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](80, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](81, V2rayComponent_ng_container_81_Template, 1, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](82, V2rayComponent_ng_template_82_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](84, V2rayComponent_ng_template_84_Template, 0, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](86, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](87, V2rayComponent_ng_template_87_Template, 2, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](88, "mat-card")(89, "mat-card-header")(90, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](91, "v2rayW");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](92, "mat-card-content")(93, "div")(94, "h3")(95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](96, "\u7B80\u4ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](98, " \u672C\u9879\u76EE\u4E3A ProjectV(\u8FC1\u79FB\u81F3 V2fly) \u9879\u76EE\u4E2D v2ray-core \u7684 web \u5BA2\u6237\u7AEF\u3002\u901A\u8FC7\u7F51\u9875\u7AEF\u914D\u7F6E\u4EE3\u7406\u534F\u8BAE\u8FDB\u884C\u79D1\u5B66\u4E0A\u7F51\u3002 \u76EE\u524D\u652F\u6301 vmess,vless,socks,shadowsocks \u534F\u8BAE\uFF0C\u5176\u4ED6\u534F\u8BAE\u548C\u66F4\u591A\u529F\u80FD\u5C06\u4E4B\u540E\u8FDB\u884C\u8FED\u4EE3\u5F00\u53D1\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](99, "div")(100, "h3")(101, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](102, "\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](104, " \u5728\u670D\u52A1\u7BA1\u7406\u91CC\u9009\u62E9\u5408\u9002\u7684\u65B9\u5F0F\uFF0C\u914D\u7F6E\u597D\u6B63\u786E\u7684\u4EE3\u7406\u534F\u8BAE\uFF0C\u70B9\u51FB\u542F\u52A8\u6309\u94AE\u3002\u672C\u5730\u9ED8\u8BA4\u4EE3\u7406\u7AEF\u53E3\u4E3A 1080\uFF0C\u534F\u8BAE\u4E3A socks\u3002 \u53EF\u4EE5\u67E5\u770B\u5BF9\u5E94\u534F\u8BAE\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDB\u884C\u4FEE\u6539\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](105, "div")(106, "h3")(107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](108, "\u5176\u4ED6");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](110, " \u5F53\u524D v2rayW \u7248\u672C\u4E3A v2.0.0 \u7248\u672C\u66F4\u65B0\u8BE6\u60C5\u8BF4\u660E\u89C1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](111, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](112, "release");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](113, "\u3002 v2ray-core \u7248\u672C\u4E3A v4.44.0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](115, " \u82E5\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4EFB\u4F55 bug \uFF0C\u6216\u9700\u8981 v2rayW \u652F\u6301\u7684\u529F\u80FD\u6B22\u8FCE\u4F60\u5411 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](116, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](117, "github");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](118, " \u63D0\u4EA4 issue \u8FDB\u884C\u8BF4\u660E\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](66);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](68);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](83);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.logs)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.protocols.length != 0)("ngIfThen", _r3)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.subscribes.length != 0)("ngIfThen", _r9)("ngIfElse", _r11);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardSubtitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuItem, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardContent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _protocol_protocol_component__WEBPACK_IMPORTED_MODULE_14__.ProtocolComponent, _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_15__.SubscribeComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardHeader], styles: [".mat-tab-group[_ngcontent-%COMP%]{\n    margin-top: 15px;\n}\n\n.icon[_ngcontent-%COMP%]{\n    font-size: 1.5em;\n}\n\n.mat-card[_ngcontent-%COMP%]{\n    margin: 10px;\n    \n}\n\n.mat-form-field[_ngcontent-%COMP%]{\n    margin-left: 10px;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]{\n    margin: 10px;\n    width: 50%;\n}\n\n.log[_ngcontent-%COMP%]{\n    background-color: white;\n    resize: vertical;\n    width: 100%;\n    background-color: rgb(207, 215, 238);\n}\n\n.status[_ngcontent-%COMP%]{\n    color: grey;\n}\n\n\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n\n\n.full-width[_ngcontent-%COMP%]{\n    width: 32%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInYycmF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxlQUFlOztBQUNmOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUEsU0FBUzs7QUFDVDtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJ2MnJheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmljb257XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLm1hdC1jYXJke1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAvKiB3aWR0aDogNTAlOyAqL1xufVxuLm1hdC1mb3JtLWZpZWxke1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWx7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG4ubG9ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjE1LCAyMzgpO1xufVxuLnN0YXR1c3tcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLyog5bGV5byA6Z2i5p2/5qCH6aKY5aS06YOo5biD5bGAICovXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIOWPguaVsOiuvue9riAqL1xuLmZ1bGwtd2lkdGh7XG4gICAgd2lkdGg6IDMyJTtcbn0iXX0= */"] });


/***/ }),

/***/ 3057:
/*!******************************************!*\
  !*** ./src/app/vless/vless.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VlessComponent": () => (/* binding */ VlessComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/protocol/api */ 5843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/protocol/protocol.service */ 5480);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _service_msg_msg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/msg/msg.service */ 5670);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);














class VlessComponent {
    constructor(protocol, toaster, dialogRef, msg, data) {
        this.protocol = protocol;
        this.toaster = toaster;
        this.dialogRef = dialogRef;
        this.msg = msg;
        this.data = data;
        // 是否禁用按钮
        this.disable = false;
    }
    ngOnInit() {
        this.params = {
            Protocol: _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__.Vless,
            NetSecurity: "none",
            Flow: "",
            Encryption: "none", // 默认不加密
        };
        // 修改
        if (this.data.op === 'update') {
            this.params.ID = this.data.value.ID;
            this.params.Name = this.data.value.Name;
            this.params.Address = this.data.value.Address;
            this.params.Flow = this.data.value.Flow; // 预留 flow
            this.params.Domains = this.data.value.Domains;
            this.params.Level = this.data.value.Level;
            this.params.NetSecurity = this.data.value.NetSecurity;
            this.params.Network = this.data.value.Network;
            this.params.Path = this.data.value.Path;
            this.params.Port = this.data.value.Port;
            this.params.Encryption = this.data.value.Encryption;
            this.params.UserID = this.data.value.UserID;
            this.params.Direct = this.data.value.Direct;
            this.on = true;
        }
        // 增加
        if (this.data.op === 'add') {
            this.on = false;
        }
    }
    // 加密方式
    security(evt) {
        this.params.Security = evt.value;
    }
    // 传输协议
    network(evt) {
        this.params.Network = evt.value;
    }
    // 传输协议加密方式
    netSecurity(evt) {
        this.params.NetSecurity = evt.value;
    }
    // 保存协议
    save() {
        this.disable = true;
        this.protocol.save(this.params).then((value) => {
            // 通知主界面将新增的协议增加到列表里。
            this.params.ID = value.data.id;
            this.params.ConfigFile = value.data.cnf;
            this.msg.addProtocol(this.params);
            this.toaster.pop("success", "增加成功");
            this.dialogRef.close();
        }).catch(() => {
            this.toaster.pop("error", "增加失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    // 修改协议
    update() {
        this.disable = true;
        this.protocol.update(this.params).then((v) => {
            this.params.ConfigFile = v.data.cnf;
            this.msg.updateProtocol(this.params);
            this.toaster.pop("success", "修改成功");
            this.dialogRef.close();
        }).catch((e) => {
            this.toaster.pop("error", "修改失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    // 国内直连
    direct(evt) {
        this.params.Direct = evt.checked;
    }
}
VlessComponent.ɵfac = function VlessComponent_Factory(t) { return new (t || VlessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_1__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_2__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_3__.MsgService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
VlessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VlessComponent, selectors: [["app-vless"]], decls: 66, vars: 24, consts: [["mat-dialog-title", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", 3, "disabled", "ngModel", "ngModelChange"], [3, "disabled", "value", "valueChange", "selectionChange"], ["value", "tcp"], ["value", "kcp"], ["value", "ws"], ["value", "h2"], ["value", "quic"], ["matInput", "", 3, "disabled", "ngModel", "ngModelChange"], ["value", "none"], ["value", "tls"], ["value", "xtls"], ["color", "primary", 3, "disabled", "checked", "change"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "matDialogClose", "", 3, "disabled"]], template: function VlessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "VLESS \u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field", 1)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u522B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VlessComponent_Template_input_ngModelChange_6_listener($event) { return ctx.params.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 1)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VlessComponent_Template_input_ngModelChange_10_listener($event) { return ctx.params.Address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 1)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VlessComponent_Template_input_ngModelChange_14_listener($event) { return ctx.params.Port = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 1)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u7528\u6237ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VlessComponent_Template_input_ngModelChange_18_listener($event) { return ctx.params.UserID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 1)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u52A0\u5BC6(encryption)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VlessComponent_Template_input_ngModelChange_22_listener($event) { return ctx.params.Encryption = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 1)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u7528\u6237\u7B49\u7EA7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VlessComponent_Template_input_ngModelChange_26_listener($event) { return ctx.params.Level = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-form-field", 1)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\u4F20\u8F93\u534F\u8BAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function VlessComponent_Template_mat_select_valueChange_30_listener($event) { return ctx.params.Network = $event; })("selectionChange", function VlessComponent_Template_mat_select_selectionChange_30_listener($event) { return ctx.network($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "tcp");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "kcp");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "ws");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "quic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-form-field", 1)(42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\u57DF\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VlessComponent_Template_textarea_ngModelChange_44_listener($event) { return ctx.params.Domains = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-form-field", 1)(46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u8DEF\u5F84");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VlessComponent_Template_input_ngModelChange_48_listener($event) { return ctx.params.Path = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-form-field", 1)(50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\u5E95\u5C42\u4F20\u8F93\u5B89\u5168");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function VlessComponent_Template_mat_select_valueChange_52_listener($event) { return ctx.params.NetSecurity = $event; })("selectionChange", function VlessComponent_Template_mat_select_selectionChange_52_listener($event) { return ctx.netSecurity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "tls");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "xtls");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "mat-slide-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VlessComponent_Template_mat_slide_toggle_change_59_listener($event) { return ctx.direct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "\u56FD\u5185\u76F4\u8FDE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-dialog-actions")(62, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VlessComponent_Template_button_click_62_listener() { return ctx.on ? ctx.update() : ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "\u4FDD\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Port);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.UserID);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Encryption);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Level);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("value", ctx.params.Network);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Domains);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Path);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("value", ctx.params.NetSecurity);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("checked", ctx.params.Direct);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], styles: [".full-width[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZsZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoidmxlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 4728:
/*!******************************************!*\
  !*** ./src/app/vmess/vmess.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VmessComponent": () => (/* binding */ VmessComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/protocol/api */ 5843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/protocol/protocol.service */ 5480);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ 13);
/* harmony import */ var _service_msg_msg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/msg/msg.service */ 5670);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);














class VmessComponent {
    constructor(protocol, toaster, dialogRef, msg, data) {
        this.protocol = protocol;
        this.toaster = toaster;
        this.dialogRef = dialogRef;
        this.msg = msg;
        this.data = data;
        // 是否禁用按钮
        this.disable = false;
    }
    ngOnInit() {
        this.params = {
            Protocol: _service_protocol_api__WEBPACK_IMPORTED_MODULE_0__.Vmess,
            //  v2fly 官方文档配置说明的推荐默认值
            AlertID: 0,
            Security: "auto",
            Network: "tcp",
            NetSecurity: "none",
        };
        // 修改
        if (this.data.op === 'update') {
            this.params.ID = this.data.value.ID;
            this.params.Name = this.data.value.Name;
            this.params.Address = this.data.value.Address;
            this.params.AlertID = this.data.value.AlertID;
            this.params.Domains = this.data.value.Domains;
            this.params.Level = this.data.value.Level;
            this.params.NetSecurity = this.data.value.NetSecurity;
            this.params.Network = this.data.value.Network;
            this.params.Path = this.data.value.Path;
            this.params.Port = this.data.value.Port;
            this.params.Security = this.data.value.Security;
            this.params.UserID = this.data.value.UserID;
            this.params.Direct = this.data.value.Direct;
            this.on = true;
        }
        // 增加
        if (this.data.op === 'add') {
            this.on = false;
        }
    }
    // 加密方式
    security(evt) {
        this.params.Security = evt.value;
    }
    // 传输协议
    network(evt) {
        this.params.Network = evt.value;
    }
    // 传输协议加密方式
    netSecurity(evt) {
        this.params.NetSecurity = evt.value;
    }
    // 保存协议
    save() {
        this.disable = true;
        this.protocol.save(this.params).then((value) => {
            // 通知主界面将新增的协议增加到列表里。
            this.params.ID = value.data.id;
            this.params.ConfigFile = value.data.cnf;
            this.msg.addProtocol(this.params);
            this.toaster.pop("success", "增加成功");
            this.dialogRef.close();
        }).catch(() => {
            this.toaster.pop("error", "增加失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    // 修改协议
    update() {
        this.disable = true;
        this.protocol.update(this.params).then((v) => {
            this.params.ConfigFile = v.data.cnf;
            this.msg.updateProtocol(this.params);
            this.toaster.pop("success", "修改成功");
            this.dialogRef.close();
        }).catch(() => {
            this.toaster.pop("error", "修改失败");
        }).finally(() => {
            this.disable = false;
        });
    }
    // 国内直连
    direct(evt) {
        this.params.Direct = evt.checked;
    }
}
VmessComponent.ɵfac = function VmessComponent_Factory(t) { return new (t || VmessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_protocol_protocol_service__WEBPACK_IMPORTED_MODULE_1__.ProtocolService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](angular2_toaster__WEBPACK_IMPORTED_MODULE_2__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_msg_msg_service__WEBPACK_IMPORTED_MODULE_3__.MsgService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
VmessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VmessComponent, selectors: [["app-vmess"]], decls: 76, vars: 26, consts: [["mat-dialog-title", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", 3, "disabled", "ngModel", "ngModelChange"], [3, "disabled", "value", "valueChange", "selectionChange"], ["value", "auto"], ["value", "none"], ["value", "aes-128-gcm"], ["value", "chacha20-poly1305"], ["value", "tcp"], ["value", "kcp"], ["value", "ws"], ["value", "h2"], ["value", "quic"], ["matInput", "", 3, "disabled", "ngModel", "ngModelChange"], ["value", "tls"], ["color", "primary", 3, "disabled", "checked", "change"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "matDialogClose", "", 3, "disabled"]], template: function VmessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Vmess \u914D\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field", 1)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u522B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VmessComponent_Template_input_ngModelChange_6_listener($event) { return ctx.params.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 1)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VmessComponent_Template_input_ngModelChange_10_listener($event) { return ctx.params.Address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 1)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u7AEF\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VmessComponent_Template_input_ngModelChange_14_listener($event) { return ctx.params.Port = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 1)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u7528\u6237ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VmessComponent_Template_input_ngModelChange_18_listener($event) { return ctx.params.UserID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 1)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u989D\u5916ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VmessComponent_Template_input_ngModelChange_22_listener($event) { return ctx.params.AlertID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 1)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u7528\u6237\u7B49\u7EA7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VmessComponent_Template_input_ngModelChange_26_listener($event) { return ctx.params.Level = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-form-field", 1)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\u52A0\u5BC6\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function VmessComponent_Template_mat_select_valueChange_30_listener($event) { return ctx.params.Security = $event; })("selectionChange", function VmessComponent_Template_mat_select_selectionChange_30_listener($event) { return ctx.security($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "aes-128-gcm");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "chacha20-poly1305");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-form-field", 1)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\u4F20\u8F93\u534F\u8BAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function VmessComponent_Template_mat_select_valueChange_42_listener($event) { return ctx.params.Network = $event; })("selectionChange", function VmessComponent_Template_mat_select_selectionChange_42_listener($event) { return ctx.network($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "tcp");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "kcp");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "ws");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "quic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-form-field", 1)(54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\u57DF\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VmessComponent_Template_textarea_ngModelChange_56_listener($event) { return ctx.params.Domains = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-form-field", 1)(58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "\u8DEF\u5F84");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VmessComponent_Template_input_ngModelChange_60_listener($event) { return ctx.params.Path = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-form-field", 1)(62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "\u5E95\u5C42\u4F20\u8F93\u5B89\u5168");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function VmessComponent_Template_mat_select_valueChange_64_listener($event) { return ctx.params.NetSecurity = $event; })("selectionChange", function VmessComponent_Template_mat_select_selectionChange_64_listener($event) { return ctx.netSecurity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "tls");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-slide-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VmessComponent_Template_mat_slide_toggle_change_69_listener($event) { return ctx.direct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\u56FD\u5185\u76F4\u8FDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-dialog-actions")(72, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VmessComponent_Template_button_click_72_listener() { return ctx.on ? ctx.update() : ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "\u4FDD\u5B58");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Port);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.UserID);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.AlertID);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Level);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("value", ctx.params.Security);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("value", ctx.params.Network);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Domains);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("ngModel", ctx.params.Path);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("value", ctx.params.NetSecurity);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable)("checked", ctx.params.Direct);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disable);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], styles: [".full-width[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZtZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoidm1lc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map