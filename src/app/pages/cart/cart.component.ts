import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PanierModule } from 'src/app/models/panier/panier.module';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	paniers!: Array<PanierModule>;
	constructor(private api: ApiService) { }

	ngOnInit(): void {
		this.paniers = new Array();
		this.api.getAll("/panier/all").then(
			(paniers) => {
				this.paniers = paniers;
				console.log(paniers)
			}
		);
	}

	load() {

	}

	delete(id: number) {
		this.api.delete("/panier/" + id).then(
			() => {
				this.paniers = this.paniers.filter(obj => obj.id != id);
			}
		).catch(
			(err) => {
				console.log(err.message)
			}
		);
	}

}
