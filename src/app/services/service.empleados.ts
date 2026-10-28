import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceEmpleados {
    constructor(private _http: HttpClient) {}
    url = environment.urlApiEmpleados;

    async getToken(userName: string, password: string): Promise<any> {
        let json = JSON.stringify({userName, password});
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let request = "auth/login";
        console.log("Json:" + json);
        
        return firstValueFrom(
            this._http.post(this.url + request, json, {headers: header})
        );        
    }

    recuperarToken(){
        return localStorage.getItem('token') || '';
    }
}