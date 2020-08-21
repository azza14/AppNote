import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  constructor() { }
  public show:boolean=false;
  public divName ="show";
  ngOnInit(): void {
    this.toggle();

   
    }
  toggle(){
    this.show =! this.show;
    if(this.show)
    this.divName="Hide";
    else
    this.divName="Show";

  }
  
  }
