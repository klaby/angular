import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AuthComponent } from '@modules/auth/auth.component'
import { ConsoleComponent } from '@modules/console/console.component'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent, AuthComponent, ConsoleComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
