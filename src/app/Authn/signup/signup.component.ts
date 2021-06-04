import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client/client.module';
//import { IAuth } from 'src/app/services/i-auth';
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
	}

	async signup() {

		await this.auth.clientSignUp(this.client).then(
			(client) => {
				console.log(client)
				if (client.password === "xxxxxx")
					this.router.navigate([`/login`, { username: client.username }]);
				else alert("SignUp Refused");
			}
		).catch(
			(err) => {
				if (err.status === 500) {
					this.router.navigate([`/login`, { username: this.client.username }]);
				}
			}
		);
	}

	form = new FormGroup({
		nom: new FormControl('', [Validators.required]),
		prenom: new FormControl('', [Validators.required]),
		username: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
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
			//lets check this console log what will print first
			this.client.email = this.form.value['email'];
			this.client.nom = this.form.value['nom'];
			this.client.prenom = this.form.value['prenom'];
			this.client.username = this.form.value['username'];
			this.client.password = this.form.value['password'];
			this.client.ville = this.form.value['city'];
			this.client.tele = this.form.value['phonenum'];
			this.signup();

		}

	}

}
