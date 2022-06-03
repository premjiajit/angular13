import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialExampleModule } from '../materil.module';
import { SharedModule } from '../shared-modules/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialExampleModule,
    SharedModule
  ]
})
export class LoginModule { }
