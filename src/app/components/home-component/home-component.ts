import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  
  constructor(
    private _router: Router,
  ) {}

  logout() {
    sessionStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}
