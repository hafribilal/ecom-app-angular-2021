import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleModule } from 'src/app/models/article/article.module';
import { ApiService } from 'src/app/services/api.service';
import { PanierModule } from 'src/app/models/panier/panier.module';
import { CommonService } from 'src/app/services/common.service';

@Component({
	selector: 'app-articledetail',
	templateUrl: './articledetail.component.html',
	styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent implements OnInit {
	role = localStorage.getItem("USER_ROLE");
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private api: ApiService,
		private common: CommonService
	) { }
	discount: number = 9.99;
	article!: ArticleModule;
	panier!: PanierModule;
	quantity: number = 1;
	ngOnInit(): void {
		this.article = new ArticleModule();
		this.route.params.subscribe(params => {
			this.api.getOne(`/articles/${params['id']}`).then(
				(article) => {
					this.article = article;
				}
			)
		});
		if (localStorage.getItem("USER_ROLE") === "USER") {
			this.common.updatePanier();
		}
		setTimeout(() => {
			if (!this.article) {
				alert("no product found")
				this.router.navigate(['/shop']);
			} else {
				this.discount += this.article.prix;
				while (this.discount <= this.article.prix + 10 && this.discount >= this.article.prix * 3) {
					this.discount = Math.floor(Math.random()) * 10;
				}
			}
		}, 600);


	}

	addToCart() {
		if (this.quantity >= 0) {
			this.panier = new PanierModule();
			this.panier.article = this.article;
			this.panier.quantite = this.quantity;
			this.api.add('/panier/create', this.panier).then(
				(result) => {
					this.common.updatePanier();
				}
			).catch(
				(err) => {
					console.log(err.status + " - " + err.message);
				}
			);
			console.log("Add To Cart clicked");
		} else {
			alert("Wrong quantity");
		}
	}

}
