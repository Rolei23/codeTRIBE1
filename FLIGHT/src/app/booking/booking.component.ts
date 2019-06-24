import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
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

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onCLICK(){
    console.log(this.firstname)
    console.log(this.email)
    console.log(this.address)
    console.log(this.city)
    console.log(this.state)
    console.log(this.cname)
    console.log(this.ccnumber)
    console.log(this.expmonth)
    console.log(this.expyear)
    console.log(this.cvv)
    
    // this.router.navigateByUrl("check-in")
    this.route.navigate(['/check-in'], { queryParams: { firstname:this.firstname,
      email:this.email,address:this.address, 
      city:this.city, state:this.state, zip:this.zip} });
}
}
