import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { TicketTurnoComponent } from './components/ticket-turno/ticket-turno.component';
import { AccessGuard } from './guards/access.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ticket-turno',
    component: TicketTurnoComponent,
    //canActivate: [AccessGuard],
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
