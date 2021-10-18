import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new Userdata();
 message="";
  constructor(private service : RegisterService, private _router : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.service.loginuser(this.user).subscribe(
      data => {console.log("response recived");
      this._router.navigate(['/loginsuccess'])
    },
      error => {console.log(" exception occured");
      this.message="Wrong Credentials, Please enter valid Credentials "
    }
    )
  }
}
