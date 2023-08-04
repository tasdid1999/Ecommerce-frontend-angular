import { Observable } from 'rxjs';
import { Product } from './../Model/Product';
import { ProductResponse } from './../Model/ResponseModel/productResponse';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  private baseUrl = 'https://localhost:7100/api/';
  constructor(private http : HttpClient) { }
  
  AddProduct(data : FormData):Observable<Product>
  {
    
    return this.http.post<Product>(this.baseUrl + 'products',data);

  }
  GetProducts(page : number):Observable<ProductResponse>
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page",page);

    return this.http.get<ProductResponse>(this.baseUrl + 'products' , {params: queryParams});
     
     
  }
  GetProductById(id : number) : Observable<Product>
  {
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }
  deleteProduct(id : number) : Observable<boolean>
  {
    return this.http.delete<boolean>(this.baseUrl + 'products/' + id);
  }
}
