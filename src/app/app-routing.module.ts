import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthComponent } from '@modules/auth/auth.component'
import { ConsoleComponent } from '@modules/console/console.component'


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
