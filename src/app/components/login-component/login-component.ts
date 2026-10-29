import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  private _serviceAuth: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);
  public token!: string;
  @ViewChild ("cajauser") cajaUser!: ElementRef;
  @ViewChild ("cajapass") cajaPass!: ElementRef;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ){}

  async login(): Promise<void> {    
    let usuario = this.cajaUser.nativeElement.value;
    let password = this.cajaPass.nativeElement.value;
    let log: Login = new Login(usuario, password);
    try {
      let respuesta = await this._service.getToken(log);
      this.token = respuesta?.response;

      if (!this.token) {
        alert("Usuario o contraseña incorrectos");
        return;
      }

      await this._serviceAuth.loginEmpleado(this.token);
      this._cdr.detectChanges();
      this._router.navigate(['/home']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert("No se pudo iniciar sesión. Comprueba la conexión con el servidor.");
    }
  }

}
