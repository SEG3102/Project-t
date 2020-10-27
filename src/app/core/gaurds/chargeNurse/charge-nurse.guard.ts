import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChargeNurseGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean> {
    return this.auth.userSettings$.pipe(
      take(1),
      map((user) => (user && user.roles.nurse ? true : false)),
      tap((isNurse) => {
        if (!isNurse) {
          console.error('Access denied - Registered Nurse only');
        }
      })
    );
  }
}
