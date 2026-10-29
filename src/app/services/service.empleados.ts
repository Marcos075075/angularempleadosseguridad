import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Empleados } from "../models/empleados";
import { Login } from "../models/login";

@Injectable()
export class ServiceEmpleados {
    constructor(private _http: HttpClient) {}
    url = environment.urlApiEmpleados;

    async getToken(login: Login): Promise<any> {
        let json = JSON.stringify(login);
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let request = "auth/login";
        console.log("Json:" + json);
        
        return firstValueFrom(
            this._http.post(this.url + request, json, {headers: header})
        );        
    }

    recuperarToken(){
        return sessionStorage.getItem('token') || '';
    }

    async getSubordinados(): Promise<Empleados[]> {
        let request = "api/empleados/subordinados";
        let header = new HttpHeaders().set('Authorization', 'Bearer ' + this.recuperarToken())
        return firstValueFrom(
            this._http.get<Empleados[]>(this.url + request, {headers: header})
        )
    }

    async getPerfil(): Promise<Empleados> {
        let request = "api/empleados/perfilempleado";
        let header = new HttpHeaders().set('Authorization', 'Bearer ' + this.recuperarToken())
        return firstValueFrom(
            this._http.get<Empleados>(this.url + request, {headers: header})
        )
    }
}