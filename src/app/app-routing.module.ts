import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './screens/home/home.component';
import {CateListComponent} from './screens/cate-list/cate-list.component';
import {ProductDetailComponent} from './screens/product-detail/product-detail.component';

import {AuthGuard} from './_helpers/auth.guard';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'san-pham', component: CateListComponent},
  {path: 'chi-tiet-san-pham/:id', component: ProductDetailComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
