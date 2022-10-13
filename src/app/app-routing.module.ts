import { ModelAddComponent } from './model/model-add/model-add.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ModelComponent } from './model/model.component';
import { BrandAddComponent } from './brand/brand-add/brand-add.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"product", component : ProductComponent},
  {path:"product/add", component : ProductAddComponent},
  {path:"brand", component : BrandComponent},
  {path:"brand/add", component : BrandAddComponent},
  {path:"model", component : ModelComponent},
  {path:"model/add", component : ModelAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
