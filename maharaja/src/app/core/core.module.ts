import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInterceptor } from './interceptors/Error/error.interceptor';
import { RequestInterceptor } from './interceptors/Request/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './services/Api/api.service';
import { AuthService } from './services/Auth/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    AuthService,
    {provide:HTTP_INTERCEPTORS, useClass:RequestInterceptor,multi:true}, 
    {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor,multi:true}
  ]
})
export class CoreModule { }

// storage
// API
//Auth
//Token
// Toast
// Logger
// 