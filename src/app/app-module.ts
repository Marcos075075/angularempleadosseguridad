import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { ServiceEmpleados } from './services/service.empleados';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { AuthGuard } from './guards/auth-guard';
import { EjemploSignalComponent } from './components/ejemplo-signal-component/ejemplo-signal-component';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    PerfilComponent,
    SubordinadosComponent,
    MenuComponent,
    HomeComponent,
    EjemploSignalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    AuthGuard,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceEmpleados,
  ],
  bootstrap: [App],
})
export class AppModule {}
