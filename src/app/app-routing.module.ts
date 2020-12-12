import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {HomeComponent} from './screens/home/home.component';
import {CateListComponent} from './screens/cate-list/cate-list.component';
import {ProductDetailComponent} from './screens/product-detail/product-detail.component';

import {AuthGuard} from './_helpers/auth.guard';
import { LoginComponent } from './screens/login/login.component';
import { LogoutComponent } from './screens/logout/logout.component';
import { InvoiceComponent } from './screens/invoice/invoice.component';
import { ClientLayoutComponent } from './components/client-layout/client-layout.component';
const routes: Routes = [
  {
    path: '', 
    component: ClientLayoutComponent, 
    children: [
      {path: '', component: HomeComponent},
      {path: 'san-pham', component: CateListComponent},
      {path: 'chi-tiet-san-pham/:id', component: ProductDetailComponent},
      
      
      {path: 'invoices', component: InvoiceComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
