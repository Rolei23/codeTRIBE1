import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
list=[{name:"login",path:"login"},
{name:"contact",path:"contact"},
{name:"about",path:"about"}]

  constructor(private router:Router) {
   }

  ngOnInit() {
  }
  onNavigation(item)
  {
    this.router.navigateByUrl(item.path)
  }
}
