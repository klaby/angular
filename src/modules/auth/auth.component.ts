import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { CookieService } from 'ngx-cookie-service'

import { AuthService } from './auth.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [CookieService],
})
export class AuthComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  auth() {
    this.authService.signin().subscribe(signed => {
      if (signed) {
        this.router.navigate(['/console'])
      }
    })
  }

  ngOnInit(): void {}
}
