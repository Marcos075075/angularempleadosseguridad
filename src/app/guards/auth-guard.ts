import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, MaybeAsync, GuardResult, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private _router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (sessionStorage.getItem("token")) {
      return true;
    } else{
      return this._router.createUrlTree(['/'],
      {queryParams: {returnUrl: state.url}}
      )
    }
  }
}