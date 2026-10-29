import { Component, computed, inject, signal } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-ejemplo-signal-component',
  standalone: false,
  styleUrl: './ejemplo-signal-component.css',
  templateUrl: './ejemplo-signal-component.html',
})
export class EjemploSignalComponent {

  private _serviceSignal: ServiceSignal = inject(ServiceSignal);

  public contador = this._serviceSignal.contador;

  public doble = this._serviceSignal.doble;

  reiniciarContador (): void {
    this._serviceSignal.reiniciarContador();
  }

  incrementarContador(): void {
    this._serviceSignal.incrementarContador();
  }
}
