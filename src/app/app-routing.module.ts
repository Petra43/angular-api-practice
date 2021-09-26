import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/pages/board/board.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { UserLoggedInGuard } from './Guards/user-logged-in.guard';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [UserLoggedInGuard]},
  {path: '', component: DashboardComponent, canActivate: [UserLoggedInGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'board/:id', component: BoardComponent, canActivate: [UserLoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
