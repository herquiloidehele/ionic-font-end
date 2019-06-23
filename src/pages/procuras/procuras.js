var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProcurasProvider } from "../../providers/procuras/procuras";
import { UrlapiProvider } from "../../providers/urlapi/urlapi";
import { DetalhesProcuraPage } from "../detalhes-procura/detalhes-procura";
var ProcurasPage = /** @class */ (function () {
    function ProcurasPage(navCtrl, urlApi, procurasProvider) {
        this.navCtrl = navCtrl;
        this.urlApi = urlApi;
        this.procurasProvider = procurasProvider;
        this.procuras = [];
        this.loader = true;
    }
    ProcurasPage.prototype.ionViewDidLoad = function () {
        this.getProcuras();
    };
    ProcurasPage.prototype.getProcuras = function () {
        var _this = this;
        this.procurasProvider.getAll().subscribe(function (response) {
            _this.procuras = response['procuras'];
        }, function (error) {
            console.log(error);
        }, function () {
            _this.loader = false;
        });
    };
    ProcurasPage.prototype.goDetalhesProcura = function (procura) {
        console.log(procura);
        this.navCtrl.push(DetalhesProcuraPage, { procura_id: procura.id });
    };
    ProcurasPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-procuras',
            templateUrl: 'procuras.html',
        }),
        __metadata("design:paramtypes", [NavController, UrlapiProvider, ProcurasProvider])
    ], ProcurasPage);
    return ProcurasPage;
}());
export { ProcurasPage };
//# sourceMappingURL=procuras.js.map