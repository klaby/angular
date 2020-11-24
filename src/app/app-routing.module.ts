import { NgModule } from '@angular/core'

import { AuthComponent } from './auth/auth.component'
import { ConsoleComponent } from './console/console.component'

import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'console', component: ConsoleComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
