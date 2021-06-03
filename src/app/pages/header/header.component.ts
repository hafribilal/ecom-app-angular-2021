import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	panier!: number;
	private panierSubscription: Subscription;

	constructor(private api: ApiService, private common: CommonService) {
		// subscribe to sender component messages
		this.panierSubscription = this.common.getPanier().subscribe
			((count) => {
				//count contains the data sent from common service
				this.panier = count;
			});
	}

	ngOnDestroy() {
		// It's a good practice to unsubscribe to ensure no memory leaks
		this.panierSubscription.unsubscribe();
	}

	ngOnInit(): void {
		this.common.updatePanier();
	}

}
