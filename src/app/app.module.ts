import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { HttpClientModule } from  '@angular/common/http';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CatagoryComponent } from './catagory/catagory/catagory.component';
import { ManageproductComponent } from './product/ManageProduct/manageproduct/manageproduct.component';
import { NavComponent } from './common/header/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { LoginComponent } from './auth/Login/login/login.component';
import { RegisterComponent } from './auth/Register/register/register.component';
import { ProductByCatagoryComponent } from './product/product-by-catagory/product-by-catagory/product-by-catagory.component';



@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ProductComponent,
    CatagoryComponent,
    ManageproductComponent,
    NavComponent,
    HomeComponent,
    ProductDetailsComponent,
    SearchBarComponent,
    LoginComponent,
    RegisterComponent,
    ProductByCatagoryComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
