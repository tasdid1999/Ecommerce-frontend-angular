import { Product } from 'src/Model/Product';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/Service/product-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  public constructor(private router : ActivatedRoute ,private productService : ProductServiceService){}
  imageBaseUrl = "https://localhost:7100/Resources/";
  ProductId : number = -1;
  ProductQuantityForBuy : number = 1;
  product : Product = 
  {
     id : 0,
     name:"",
     price:0,
     amount:0,
     productDetails:"",
     imageUrl : "",
     ProductImage : null,
     catagoryId : 0



  };
  ngOnInit(): void {

    this.router.params.subscribe(params => {
      this.ProductId = params['id'];
      if(this.ProductId != -1)
      {
        this.getProductById();
      }
  });

  }

  getProductById() :void
  {
     this.productService.GetProductById(this.ProductId).subscribe(
        {
          next : (response) =>
          {
            console.log(response)
              this.product = response;
          }
        }
     );
  }
  counterMinus() : void{
     
     if(this.ProductQuantityForBuy > 0)
     {
      this.ProductQuantityForBuy--;
     }
  }
  counterPlus() : void{
     
    if(this.ProductQuantityForBuy < 5)
    {
     this.ProductQuantityForBuy++;
    }
 }




}
