import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

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
            if(!session.login){
              this.router.navigate(['/account/login']);
            }
            return session.login;
          })
        )
    }
}
