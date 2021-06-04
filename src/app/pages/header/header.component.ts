import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { take, map } from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	isLoggedIn: boolean = false;
	isAdmin: boolean = false;
	isClient: boolean = false;
	panier: number = 0;
	private panierSubscription!: Subscription;
	private authSubscription!: Subscription;

	constructor(private api: ApiService,
		private auth: AuthService,
		private common: CommonService) {

		if (localStorage.getItem("USER_ROLE")) {
			setTimeout(
				() => {
					this.auth.load();
					console.log("after 5s")
				}, 5000
			);

		}

	}

	ngOnDestroy() {
		// It's a good practice to unsubscribe to ensure no memory leaks
		this.panierSubscription.unsubscribe();
	}

	ngOnInit(): void {
		this.authSubscription = this.auth.isAdmin.subscribe(
			(isAdmin) => {
				this.isAdmin = isAdmin;
			}
		);

		this.authSubscription = this.auth.isClient.subscribe(
			(isClient) => {
				this.isClient = isClient;
				console.log("TEST CLIENT PERMISSION")
				if (isClient) {
					// subscribe to common component
					this.panierSubscription = this.common.getPanier().subscribe
						((count) => {
							//count contains the data sent from common service
							this.panier = count;
						});
				}
			}
		);

		this.authSubscription = this.auth.isLoggedIn.subscribe(
			(isLoggedIn) => {
				this.isLoggedIn = isLoggedIn;
			}
		);
	}

	logout() {
		this.auth.logout();
	}

}
