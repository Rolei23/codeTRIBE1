import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  list=[{ name:"home",path:"home"},
  { name:"education",path:"education"},
  { name:"contact",path:"contact"}];

  constructor(private router: Router) { }
  
  onNavigate (item){
    this.router.navigateByUrl(item.path)
  }
  ngOnInit() {
  }

}
