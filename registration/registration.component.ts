import { Component, OnInit } from '@angular/core';
import { RegiterService } from 'src/app/services/regiter.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  submitted: boolean = false;
  mobiles = [
    { name: "RealMe" },
    { name: "Nokia" },
    { name: "Samsung" }
  ]
  registrationData: FormGroup = this.formBuilder.group({
    _id: new FormControl(null),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, Validators.required),
    dob: new FormControl(null, Validators.required),
    mailId: new FormControl(null,Validators.email),
    mobileNo: new FormControl('',[Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmpwd: new FormControl(null, [Validators.required])
  },
  {
    validators: this.mustMatch('password','confirmpwd')
  })
 
  constructor(private formBuilder: FormBuilder,private register_src: RegiterService) {  }

  //below function returns all controls of the form when usng 'f' 
  //and instead of writing 'registrationData.controls' in html file every where 
  get f (){
    return this.registrationData.controls;
  }

//password and confirm password validation mathod
  mustMatch(pwd: string, confpwd: string ){
    return(formGroup: FormGroup) => {
      const pwd1 = formGroup.controls[pwd];
      const confpwd1 = formGroup.controls[confpwd];
      if(confpwd1.errors && !confpwd1.errors.mustMatch){
        return;
      }
      if(pwd1.value !== confpwd1.value){
        confpwd1.setErrors({mustMatch:true})
      }
      else{
        confpwd1.setErrors(null);
      }
    }
  }
  onSubmit() {
    this.submitted = true;
   if(this.registrationData.invalid){
      return; 
    }

    if(this.registrationData.valid){
    //  console.log("from .ts..."+this.registrationData.value)
     this.register_src.insertRegistrationData(this.registrationData.value)
      .subscribe(res => { console.log(res);  });      
    }
  }

  ngOnInit(): void {
  }

}
