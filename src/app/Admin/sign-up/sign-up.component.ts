import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin/admin.module';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidator } from 'src/app/validator/custom-validator';


@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


	admin!: Admin;

	constructor(private router: Router, private auth: AuthService) { }

	ngOnInit(): void {
		this.admin = new Admin();
	}

	async signup() {

		await this.auth.adminSignUp(this.admin).then(
			(admin) => {
				if (admin.password === "xxxxxx")
					this.router.navigate([`/login`, { username: admin.username }]);
				else alert("SignUp Refused");
			}
		).catch(
			(err) => {
				if (err.status === 500) {
					this.router.navigate([`/login`, { username: this.admin.username }]);
				}
			}
		);
	}


	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
		confirmpassword: new FormControl('', [Validators.required]),
		phonenum: new FormControl('', [Validators.required, CustomValidator.ValidatePhone])
	});

	get f() {
		return this.form.controls;
	}

	submit() {

		if (this.form.status === 'VALID') {
			//lets check this console log what will print first
			this.admin.email = this.form.value['email'];
			this.admin.nom = this.form.value['name'];
			this.admin.username = this.form.value['username'];
			this.admin.password = this.form.value['password'];
			this.admin.tele = this.form.value['phonenum'];
			this.signup();
		}

	}

}
