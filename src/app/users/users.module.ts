import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent
  ],

  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UsersModule { }
