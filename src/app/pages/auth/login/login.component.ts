import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private auth: AuthService
	) { }

	username!: string;
	password!: string;

	ngOnInit(): void {
		let username = this.route.snapshot.paramMap.get('username');
		this.username = username ? username : "";

	}

	form = new FormGroup({
		Loginuser: new FormControl('', [Validators.required]),
		passworduser: new FormControl('', [Validators.required])
	});

	get f() {
		return this.form.controls;
	}

	submit() {

		if (this.form.status === 'VALID') {
			this.auth.login(this.username, this.password).then(
				(result) => {
					if (result) {
						this.router.navigate([`/shop`]);
					}
				}
			).catch(
				(err) => {
					console.log("error status : " + err.status)
				}
			);
		}

	}

}
