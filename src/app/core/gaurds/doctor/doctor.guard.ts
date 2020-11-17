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
export class DoctorGuard implements CanActivate {
  constructor( private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.userSettings$.pipe(
      take(1),
      map((user) => (user && user.roles.doctor ? true : false)),
      tap((isDoctor) => {
        if (!isDoctor) {
          console.error('Access denied - Doctors only');
        }
      })
    );
  }
}
