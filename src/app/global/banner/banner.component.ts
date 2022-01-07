import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.currentSelection="login"
  }  

currentSelection!:string ;

loadpage(currentSelection:string){
if(currentSelection=="login"){
  this.currentSelection=currentSelection
  this.route.navigateByUrl('/home/login')
  return 
}
if(currentSelection=="register"){
  this.currentSelection=currentSelection
  console.log("Inside register");
  this.route.navigateByUrl('/home/register')
  return
}
if(currentSelection=="viewissues"){
  this.currentSelection=currentSelection
  console.log("Inside view-issues");
  this.route.navigateByUrl('/home/viewissues')
  return
}
}

}
