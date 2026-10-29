import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEmpleados } from '../../services/service.empleados';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  public contador = this._serviceSignal.contador;
  constructor(
    private _router: Router,
  ) {}

  

  logout() {
    sessionStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}
