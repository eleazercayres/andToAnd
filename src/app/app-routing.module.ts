import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancedValueAddComponent } from './financed-value-add/financed-value-add.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { FinancedComponent } from './financed/financed.component';

const routes: Routes = [
  {
    path: 'financed',
    component: FinancedComponent
  },
  {
    path: 'product/create',
    component: ProductAddComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'products',
    component: ProductGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
