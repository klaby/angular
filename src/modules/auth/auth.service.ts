import { Injectable } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly cookieService: CookieService) {}

  signin(): Observable<boolean> {
    const token = Math.random().toString(36).substr(2, 9)

    this.cookieService.set('_a', token)
    return of(true)
  }

  isSigned(): Observable<boolean> {
    return of(!!this.cookieService.get('_a'))
  }
}
