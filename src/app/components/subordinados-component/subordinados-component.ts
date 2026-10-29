import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Empleados } from '../../models/empleados';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit {
  public subordinados!: Empleados[];

  constructor(
    private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef,
    private _router: Router,
  ) {}

  logout() {
    sessionStorage.removeItem('token');
    this._router.navigate(['/']);
  }

  async ngOnInit(): Promise<void> {
    if (!this._service.recuperarToken()) {
      alert('No tiene token, por favor inicie sesión');
      this._router.navigate(['/']);
    } else {
      this.subordinados = await this._service.getSubordinados();
      this._cdr.detectChanges();
    }
  }
}
