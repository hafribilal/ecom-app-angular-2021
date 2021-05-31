import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';

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

	login() {
		this.auth.login(this.username, this.password).then((result) => {
			if (result) {
				this.router.navigate([`/shop`]);
			}
		});
	}

}
