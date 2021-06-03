import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	panier!: number;

	constructor(private api: ApiService) {
		this.panier = 0;
	}

	ngOnInit(): void {
		this.api.getOne('/panier/count').then(
			(count) => {
				this.panier = count;
			}
		).catch(
			(err) => {
				console.log(err.status);
			}
		);
	}

}
