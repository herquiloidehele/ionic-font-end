import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlapiProvider} from "../urlapi/urlapi";
import 'rxjs/add/operator/retry'


/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  private header: HttpHeaders;

  constructor(public http: HttpClient, public urlProvider: UrlapiProvider) {
    this.header = new HttpHeaders({'Content-Type': 'application/json'});
  }


  getAll(){
    return this.http.get(this.urlProvider.getURL() +'produtos', {headers: this.header}).retry();
  }

  salvar(produto){
    return this.http.post(this.urlProvider.getURL()+ 'produtos',produto, {headers: this.header});
  }

}
