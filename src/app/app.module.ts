import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} 
      from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import { HomeComponent } from './screens/home/home.component';
import { CateListComponent } from './screens/cate-list/cate-list.component';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CateListComponent,
    ProductDetailComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
