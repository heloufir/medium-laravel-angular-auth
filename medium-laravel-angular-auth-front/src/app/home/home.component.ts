import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '../services/jwt-helper.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Variables
  accessToken: any;
  accessTokenDetails: any;
  loading: boolean;

  constructor(
    jwtHelper: JwtHelperService,
    private authService: AuthService,
    private router: Router
  ) {
    this.accessToken = localStorage.getItem('access_token');
    this.accessTokenDetails = {
      id: jwtHelper.id(),
      name: jwtHelper.name(),
      email: jwtHelper.email()
    };
  }

  ngOnInit(): void { }

  /**
   * Logout the user and revoke his token
   */
  logout(): void {
    this.loading = true;
    this.authService.logout()
      .subscribe(() => {
        this.loading = false;
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
      });
  }

}
