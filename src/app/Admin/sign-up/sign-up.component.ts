import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validator/custom-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    phonenum: new FormControl('', [Validators.required, CustomValidator.ValidatePhone])
    });

    get f() {
      return this.form.controls;
    }

    submit() {

      if (this.form.status === 'VALID') {
      console.log(this.form.value);
      }

    }

}
