import { Injectable, signal } from "@angular/core";
import { Router } from "@angular/router";
import { Empleados } from "../models/empleados";
import { ServiceEmpleados } from "./service.empleados";

@Injectable({providedIn: 'root'})
export class ServiceAuthEmpleados {
    constructor(
        private _service: ServiceEmpleados,
        private _router: Router
    ){}
    
    public user = signal<Empleados | null>(null);

    async loginEmpleado(token: string): Promise<void> {
        sessionStorage.setItem("token", token);
        let empleado = await this._service.getPerfil();
        this.user.set(empleado) 
    }

    logOutEmpleado(): void {
        sessionStorage.removeItem("token");
        this.user.set(null);
        this._router.navigate(['/']);
    }
}