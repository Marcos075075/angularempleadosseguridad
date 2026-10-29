import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleados } from '../../models/empleados';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit{
  public empleado!: Empleados

  public constructor(
    private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  logout() {
    sessionStorage.removeItem('token');
    this._router.navigate(['/']);
  }

  async ngOnInit(): Promise<void> {
    if (!this._service.recuperarToken()) {
      alert("No tiene token, por favor inicie sesión");
      this._router.navigate(['/']);
    } else {
      this.empleado = await this._service.getPerfil();
      this._cdr.detectChanges();
    }
  }
}
