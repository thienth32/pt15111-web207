import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './screens/home/home.component';
import {CateListComponent} from './screens/cate-list/cate-list.component';
import {ProductDetailComponent} from './screens/product-detail/product-detail.component';

import {AuthGuard} from './_helpers/auth.guard';
import { LoginComponent } from './screens/login/login.component';
import { LogoutComponent } from './screens/logout/logout.component';
import { InvoiceComponent } from './screens/invoice/invoice.component';
const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'san-pham', component: CateListComponent},
  {path: 'chi-tiet-san-pham/:id', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'invoices', component: InvoiceComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
