import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegiterService } from 'src/app/services/regiter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData ={
    firstName: '',
    password : '',
    mobileNo: ''
  }

  constructor(private _router:Router, private _registersrc: RegiterService) { }

  ngOnInit(): void {
  }

  logIn(){
    if(this.loginData.firstName == 'admin' && this.loginData.password === 'admin')
    {console.log("wright...."+this.loginData.firstName);
    console.log("wright...."+this.loginData.password);
      this._router.navigate(['/updatenews']);
    }
    else{
    console.log("wrong....");
    console.log("wrong....");
    }
    //JSON.stringify(storagearray)
 /*   this._registersrc.loginVerification(this.loginData)
    .subscribe(res =>{ console.log("Login Success"+res);})
  */}

}
