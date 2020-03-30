import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Variables
  form: FormGroup;
  loading: boolean;
  errors: boolean;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = fb.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        Validators.required
      ]
    });
  }

  ngOnInit(): void { }

  /**
   * Login the user based on the form values
   */
  login(): void {
    this.loading = true;
    this.errors = false;
    this.authService.login(this.controls.email.value, this.controls.password.value)
      .subscribe((res: any) => {
        // Store the access token in the localstorage
        localStorage.setItem('access_token', res.access_token);
        this.loading = false;
        // Navigate to home page
        this.router.navigate(['/']);
      }, (err: any) => {
        // This error can be internal or invalid credentials
        // You need to customize this based on the error.status code
        this.loading = false;
        this.errors = true;
      });
  }

  /**
   * Getter for the form controls
   */
  get controls() {
    return this.form.controls;
  }

}
