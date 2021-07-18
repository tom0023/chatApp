import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private session: SessionService,
              private router: Router){
              }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.session
      .checkLoginState()
      .pipe(
        map(session => {
          if(session.login){
            this.router.navigate(['/']);
          }
          return !session.login;
        })
      )
  }

}
