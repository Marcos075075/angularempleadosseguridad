import { Component } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  public token: string;

  constructor(
    _service: ServiceEmpleados
  ) {
    this.token = _service.recuperarToken();
  }
}
