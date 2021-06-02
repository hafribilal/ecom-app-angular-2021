import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  role!:string;

  constructor() { 
   
  }

  ngOnInit(): void {
    let role = localStorage.getItem("USER_ROLE");
    this.role=role?role:"";
    if(!this.role){
      localStorage.setItem("USER_ROLE","guest");
    }
    console.log(this.role)
  }

}
