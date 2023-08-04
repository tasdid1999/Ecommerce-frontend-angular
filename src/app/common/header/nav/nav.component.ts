import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  
  role : string = "Admin";
  item : number = 2;
  public constructor(){}

  ngOnInit(): void {
    
  }

}
