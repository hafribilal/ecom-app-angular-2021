import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client/client.module';
import { IAuth } from 'src/app/services/i-auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validator/custom-validator';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

	client!: Client;
	confirm_password!: string;
	terms: boolean = false;
	//auth!: IAuth;

	constructor(private router: Router, private auth: AuthService) {
		this.client = new Client()
	}

	ngOnInit(): void {
		// this.client.prenom = "test";
		// this.client.nom = "test";
		// this.client.username = "test19";
		// this.client.email = this.client.username + "@example.com";
		// this.client.password = "testtest";
		// this.confirm_password = "testtest";
		// this.client.ville = "testCity";
		// this.client.tele = "0987654321";
		// this.terms = true;
	}

	async signup() {
		if (this.client.password === this.confirm_password && this.terms) {
			await this.auth.clientSignUp(this.client).then(
				(client) => {
					if (client.password === "xxxxxx")
						this.router.navigate([`/login`, { username: client.username }]);
					else alert("SignUp Refused");
				}
			);

		} else {
			if (!this.terms)
				alert("please accept the terms to compleate the signup");
			else
				alert("please comfirm your password to compleate the signup");
		}
	}

	form = new FormGroup({
		nom: new FormControl('', [Validators.required]),
		prenom: new FormControl('', [Validators.required]),
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
