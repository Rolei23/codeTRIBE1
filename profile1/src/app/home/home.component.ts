import { Component, OnInit } from '@angular/core';
import { KeyproviderService } from '../keyprovider.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
list
  constructor(private keyproviderservice : KeyproviderService ) {this.keyproviderservice.getNews().subscribe((data )=>{

    this.list=data

    
  }) }

  ngOnInit() {
  }

}
