import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  public token!: string;
  @ViewChild ("cajauser") cajaUser!: ElementRef;
  @ViewChild ("cajapass") cajaPass!: ElementRef;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ){}

  async login(): Promise<void> {    
    let usuario = this.cajaUser.nativeElement.value;
    let password = this.cajaPass.nativeElement.value;
    let log: Login = new Login(usuario, password);
    let respuesta = await this._service.getToken(log);
    this.token = respuesta.response;
    sessionStorage.setItem('token', this.token);

    if (this.token) {
      this._router.navigate(['/home']);
    } else{
      alert("Usuario o contraseña incorrectos");
    }
  }

}
