import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandComponent } from './brand/brand.component';
import { ModelComponent } from './model/model.component';

import { NgMaterialModule } from './ng-material/ng-material.module';
import { BrandAddComponent } from './brand/brand-add/brand-add.component';
import { ModelAddComponent } from './model/model-add/model-add.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { BrandService } from './brand/brand.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BrandComponent,
    ModelComponent,
    BrandAddComponent,
    ModelAddComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
  ],
  providers: [BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
