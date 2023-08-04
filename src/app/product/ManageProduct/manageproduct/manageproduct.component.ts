import { ProductServiceService } from './../../../../Service/product-service.service';
import { Product } from './../../../../Model/Product';
import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras  } from '@angular/router';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit{
  
  trashIcon = faTrash;
  products : Product[] = [];
  page:number = 1;
  imageBaseUrl = "https://localhost:7100/Resources/";
  totalNumberOfPage : number = 0;
  constructor(private ProductService : ProductServiceService, private router:Router){}
  
  getProducts(page : number)
  {
     this.ProductService.GetProducts(page).subscribe(
      {
         next : (response) =>
         {
            this.products = response.products;
            this.totalNumberOfPage = response.totalNumberOfPage;
         }
      }
     )
  }
  deleteProduct(id: number)
  {
   
    
      this.ProductService.deleteProduct(id).subscribe(
        {
           
            next : (response) =>
            {
              this.getProducts(this.page);
            }
        }
      )
  }
  ngOnInit(): void {

    this.getProducts(this.page);
  }

  GoNextPage() : void
  {
   
     this.page++;
     this.getProducts(this.page);

  }
  GoPrevPage() : void
  {
     this.page--;
     this.getProducts(this.page);
  }

}
