import { Component } from '@angular/core';
import { FormGroup , FormControl , Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'form';
  mobilnumber = /^[0-9]{10}$/ ;
  letterpatturn = /^[a-zA-Z]{2,}$/ ;
  emailvalidatin =  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  registrationForm = new FormGroup ({ 
    name : new FormControl('', [Validators.required , Validators.pattern(this.letterpatturn)]),
    useremail : new FormControl('', [Validators.required , Validators.pattern(this.emailvalidatin)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    CunfurmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age : new FormControl('', [Validators.required , Validators.min(18) , Validators.max(99)]),
    mobile : new FormControl('', [Validators.required , Validators.pattern(this.mobilnumber)])
  })
  
 
  data: any[] = []; 
  registrationUser() {
    if (this.registrationForm.valid && this.passwordsDoNotMatch()) {
          const newData = this.registrationForm.value;
          this.data.push(newData);
          console.log(this.data); 
          this.resetForm();
      } else {
        console.log('Form is not valid or passwords do not match');
      }
  } 
  
  // password hide show
  password :string = "password"; 
  show = true; 
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  } 
  Confpassword :string ="password" ; 
  Confshow = true; 
  aaa() {
    if (this.Confpassword === 'password') {
      this.Confpassword = 'text';
      this.Confshow = false;
    } else {
      this.Confpassword = 'password';
      this.Confshow = true;
    }
  }
 
  resetForm() {
    this.registrationForm.reset(); 
  }
  passwordsDoNotMatch() {
    const password = this.registrationForm.get('password')?.value;
    const confirmPassword = this.registrationForm.get('CunfurmPassword')?.value;
    return password == confirmPassword;
  }
  controll(www: string) {
    return this.registrationForm.get(www) &&
      this.registrationForm.get(www)?.invalid &&
      this.registrationForm.get(www)?.touched;
  } 
 
}
