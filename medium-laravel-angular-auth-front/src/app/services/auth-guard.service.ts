import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  /**
   * Constructor
   * @param router The router object
   */
  constructor(
    private router: Router
  ) { }

  /**
   * Can activate function
   * @param next The activated route snapshot object
   * @param state The router state snapshot object
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (
      localStorage.getItem('access_token')
    ) { return true; }
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/login');
    return false;
  }

}
