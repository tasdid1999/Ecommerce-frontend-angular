import { Catagory } from 'src/Model/Catagory';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/Model/Product';

@Component({
  selector: 'app-product-by-catagory',
  templateUrl: './product-by-catagory.component.html',
  styleUrls: ['./product-by-catagory.component.css']
})
export class ProductByCatagoryComponent implements OnInit,OnDestroy{
  
  private routeSub?: Subscription;
  products:Product[] = [];
  totalNumberOfPage : number = 0;
  page : number = 1;
  imageBaseUrl = "https://localhost:7100/Resources/";
  catagoryId : number = 1;
  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) 
      console.log(params['id']);
      this.catagoryId = params['id'];
    });
  }
  ngOnDestroy(): void {

    if(this.routeSub)
    {
      this.routeSub.unsubscribe();
    }
  }
  GoNextPage() : void
  {
   console.log("hello next")
     this.page++;
   

  }
  GoPrevPage() : void
  {
     this.page--;
    
  }


}
