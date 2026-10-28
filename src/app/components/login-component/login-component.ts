import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

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
    console.log("usuario: " + usuario + " password: " + password);
    let respuesta = await this._service.getToken(usuario, password);
    this.token = respuesta.response;
    localStorage.setItem('token', this.token);

    if (this.token) {
      this._router.navigate(['/home']);
    } else{
      alert("Usuario o contraseña incorrectos");
    }
  }

}
