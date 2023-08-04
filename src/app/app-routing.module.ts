import { AddproductComponent } from './product/addproduct/addproduct.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product/product.component';
import { HomeComponent } from './home/home/home.component';
import { ManageproductComponent } from './product/ManageProduct/manageproduct/manageproduct.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { LoginComponent } from './auth/Login/login/login.component';
import { RegisterComponent } from './auth/Register/register/register.component';
import { ProductByCatagoryComponent } from './product/product-by-catagory/product-by-catagory/product-by-catagory.component';


const routes: Routes = [
  {
      path : '',
      component:HomeComponent
  },
  {
    path : 'add-product',
    component: AddproductComponent
  },
  {
     path : 'manage-product',
     component : ManageproductComponent
  },
  {
    path : "product-details/:id",
    component : ProductDetailsComponent
  },
  {
    path : "signin",
    component : LoginComponent
  },
  {
    path : "signup",
    component : RegisterComponent
  },
  {
    path : "product/catagory/:id",
    component : ProductByCatagoryComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
