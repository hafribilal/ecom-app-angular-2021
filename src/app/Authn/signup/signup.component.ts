import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Client } from 'src/app/models/client/client.module';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	client!: Client;
	confirm_password!: string;
	terms: boolean = false;

	constructor(private auth: AuthService) {
		this.client = new Client()
	}

	ngOnInit(): void {
		// this.client.prenom = "test";
		// this.client.nom = "test";
		// this.client.username = "test10";
		// this.client.email = this.client.username + "@example.com";
		// this.client.password = "testtest";
		// this.confirm_password = "testtest";
		// this.client.ville = "testCity";
		// this.client.tele = "0987654321";
		// this.terms = true;
	}

	async signup() {
		if (this.client.password === this.confirm_password && this.terms) {
			this.client = await this.auth.clientSignUp(this.client);
			setTimeout(() => { console.log(this.client) }, 2500);
		}

	}

}
