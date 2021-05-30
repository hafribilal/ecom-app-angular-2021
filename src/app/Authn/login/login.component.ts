import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private router: Router, private auth: AuthService) { }

	username!: string;
	password!: string;

	ngOnInit(): void {
	}

	login() {
		let token = this.auth.login(this.username, this.password);
		console.log(token)
	}

}
