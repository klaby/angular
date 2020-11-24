import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AuthComponent } from './auth/auth.component'
import { ConsoleComponent } from './console/console.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [AppComponent, AuthComponent, ConsoleComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
