import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Product } from 'src/Model/Product';
import { ProductServiceService } from 'src/Service/product-service.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CatagoryService } from 'src/Service/catagory.service';
import { Catagory } from 'src/Model/Catagory';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{

  frm!: FormGroup;
  imageFile?:File;
  catagories : Catagory[] = [];

  constructor(private productservice : ProductServiceService, private fb : FormBuilder,private catagoryService : CatagoryService){}
    
  ngOnInit(): void {
      this.frm = this.fb.group(
         {
          'id':[0],
          'name':[''],
          'price':[0],
          'amount':[0],
          'productDetails':'',
          'ImageFile':[],
          'catagoryId':[0]
         }

      );
      this.getCatagories();
    }
   getCatagories()
   {
      this.catagoryService.getCatagories().subscribe(
         {
            next : (response) =>
            {
               console.log(response);
               this.catagories = response;
            }
         }
        )
   }
    onChange(event:any)
    {
       this.imageFile = event.target.files[0];
       //console.log(this.imageFile);
    }
addProduct() : void
{
  //console.log(this.frm.value);
    const frmdata:Product = Object.assign(this.frm.value);
    frmdata.ProductImage = this.imageFile;
    //console.log("this is form data");
    let formdata = new FormData();
    
    formdata.append("Name",frmdata.name);
    formdata.append("Price",frmdata.price.toString());
    formdata.append("Amount",frmdata.amount.toString());
    formdata.append("ProductDetails",frmdata.productDetails);
    formdata.append("CatagoryId",frmdata.catagoryId.toString());
    formdata.append("ImageFile",frmdata.ProductImage || "");
    console.log(frmdata.productDetails);
    this.productservice.AddProduct(formdata).subscribe(
      {
         next :(response) =>
         {
            console.log(response);
         }
               
      }
    )
}




}


