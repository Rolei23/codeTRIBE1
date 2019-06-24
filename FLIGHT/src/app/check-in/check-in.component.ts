import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  firstname
  email
  address
  city
  state
  zip
  cname
  ccnumber
  expmonth 
  expyear
  cvv



  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.firstname = params.firstname;
        console.log(this.firstname); // popular

        this.email = params.email;
        console.log(this.email); // popular

        this.address = params.address;
        console.log(this.address); // popular

        this.city = params.city;
        console.log(this.city); // popular

        this.state = params.state;
        console.log(this.state); // popular

        this.zip = params.zip;
        console.log(this.zip); // popular

        this.zip = params.zip;
        console.log(this.zip); // popular

        this.cname= params.cname;
        console.log(this.cname); // popular

        this.ccnumber = params.ccnum;
        console.log(this.ccnumber); // popular

        this.expmonth = params.expmonth;
        console.log(this.expmonth); // popular

        this.expyear= params.expyear;
        console.log(this.expyear); // popular
        
        this.cvv= params.cvv;
        console.log(this.cvv); // popular


       

      });
  }
  }