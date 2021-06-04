import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PanierModule } from 'src/app/models/panier/panier.module';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	total: number = 0;
	paniers!: Array<PanierModule>;
	constructor(private api: ApiService) { }

	ngOnInit(): void {
		this.paniers = new Array();
		this.api.getAll("/panier/all").then(
			(paniers) => {
				this.paniers = paniers;
				this.update(null);
			}
		);
	}

	update(index: number | null) {
		this.total = 0;
		if (index != null) {
			this.api.update("/panier/update", this.paniers[index]);
		}
		for (let i = 0; i < this.paniers.length; i++) {
			this.total += this.paniers[i].article.prix * this.paniers[i].quantite;
		}
	}

	delete(id: number) {
		this.api.delete("/panier/" + id).then(
			() => {
				this.paniers = this.paniers.filter(obj => obj.id != id);
				this.update(null)
			}
		).catch(
			(err) => {
				console.log(err.message)
			}
		);
	}

	submit() {

	}

}
