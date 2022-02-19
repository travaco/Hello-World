import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { AdminComponent } from './users/admin/admin.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
 {path: 'login',
 component: LoginComponent
 },
 {path: 'register',
 component: RegisterComponent
 },
 {path: 'admin',
 component: AdminComponent
 },
 {path: 'user',
 component: UserComponent
 },
 { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
