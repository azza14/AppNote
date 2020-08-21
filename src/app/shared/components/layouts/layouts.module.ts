import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { BlanckLayoutComponent } from './blanck-layout/blanck-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminLayoutComponent, 
    UserLayoutComponent,
    BlanckLayoutComponent, 
    AuthLayoutComponent],
  imports: [
    CommonModule,RouterModule
  ]
})
export class LayoutsModule { }
