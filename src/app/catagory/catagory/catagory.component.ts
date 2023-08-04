import { Subscriber } from 'rxjs';
import { Catagory } from './../../../Model/Catagory';
import { CatagoryService } from './../../../Service/catagory.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit{
 
 constructor(private catagoryService : CatagoryService){}
 catagories:Catagory[] = [];

 @Input() catagoryId = 0;

 getCatagories()
 {
    this.catagoryService.getCatagories().subscribe(
      {
          next : (response) =>
          {
             this.catagories = response;
             
          }
      }
    )
 }
 ngOnInit(): void {

   this.getCatagories();
   console.log(this.catagoryId)
 }

}
