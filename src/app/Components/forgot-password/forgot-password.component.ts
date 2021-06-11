import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	form = new FormGroup({
		newpassword: new FormControl('', [Validators.required]),
		confirmpass: new FormControl('', [Validators.required])
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
