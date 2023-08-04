import { ProductServiceService } from './../../../Service/product-service.service';
import { Product } from './../../../Model/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

   products : Product[] = [];
   totalNumberOfPage : number = 0;
   page : number = 1;

   imageBaseUrl = "https://localhost:7100/Resources/";
   constructor(private productservice : ProductServiceService){}
   role : string = "no";
   ngOnInit(): void {
      
      this.getProducts(this.page);
   }

   getProducts(page : number) : void
   {
    this.productservice.GetProducts(this.page).subscribe(
      {
        next : (response) =>
        {
          
           this.products = response.products;
           this.totalNumberOfPage = response.totalNumberOfPage;
           
        }
      }
    )
   }

   GoNextPage() : void
   {
    console.log("hello next")
      this.page++;
      this.getProducts(this.page);

   }
   GoPrevPage() : void
   {
      this.page--;
      this.getProducts(this.page);
   }

    

}
