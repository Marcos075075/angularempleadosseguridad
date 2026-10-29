import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceSignal } from '../../services/service.signal';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  private _serviceAuth: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);
  public usuario = this._serviceAuth.user;
  public contador = this._serviceSignal.contador;

  get isAuthenticated(): boolean {
    return Boolean(sessionStorage.getItem('token'));
  }

  logout(): void {
    this._serviceAuth.logOutEmpleado();
  }
}
