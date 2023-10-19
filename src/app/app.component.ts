import { Component } from '@angular/core';
import { FormGroup , FormControl , Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  mobilnumber = /(\d{3})(\d{3})(\d{4})/ ;
  letterpatturn = /^[a-z,A-Z]/ ;
  emailvalidatin =  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  registrationForm = new FormGroup ({

    name : new FormControl('', [Validators.required , Validators.pattern(this.letterpatturn) ]),
    // useremail : new FormControl('', [Validators.required , Validators.email]),
    useremail : new FormControl('', [Validators.required , Validators.pattern(this.emailvalidatin)]),
    password : new FormControl('', [Validators.required , Validators.minLength(6)]), 
    CunfurmPassword : new FormControl('', [Validators.required , Validators.minLength(6)]),
    age : new FormControl('', [Validators.required , Validators.min(18) , Validators.max(99)]),
    mobile : new FormControl('', [Validators.required , Validators.pattern(this.mobilnumber)])
  })

  registrationUser(){
   console.log(this.registrationForm.value); 
  }
   

  //  controll(www:any){
  //   return this.registrationForm.get(www)
  // }

  get useremail() {
    return this.registrationForm.get('useremail')
  }
  get name() {
    return this.registrationForm.get('name')
  }
  get password() {
    return this.registrationForm.get('password')
  }
  get CunfurmPassword() {
    return this.registrationForm.get('CunfurmPassword')
  }
  get age() {
    return this.registrationForm.get('age')
  }
  get mobile() {
    return this.registrationForm.get('mobile')
  }
}
