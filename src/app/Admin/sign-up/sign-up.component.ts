import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validator/custom-validator';
import { Admin } from 'src/app/models/admin/admin.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	admin!: Admin;
	constructor(private auth: AuthService) { }

	ngOnInit(): void {
		this.admin = new Admin();
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
			this.admin.username = this.form.value['username'];
			this.admin.nom = this.form.value['name'];
			this.admin.email = this.form.value['email'];
			this.admin.password = this.form.value['password'];
			this.admin.tele = this.form.value['phonenum'];
			this.auth.adminSignUp(this.admin);
		}
	}

}
