import { Component, OnInit } from '@angular/core';
import { KeyproviderService } from '../keyprovider.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
list;
  constructor(private keyprovider:KeyproviderService) { this.keyprovider.getNews().subscribe((data)=>{
    console.log(data)
  this.list=data})
}
 
  ngOnInit() {
  }

}
