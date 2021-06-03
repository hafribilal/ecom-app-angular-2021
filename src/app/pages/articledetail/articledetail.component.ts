import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleModule } from 'src/app/models/article/article.module';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-articledetail',
	templateUrl: './articledetail.component.html',
	styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private api: ApiService,
	) { }
	discount: number = 9.99;
	article!: ArticleModule;
	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.api.getOne(`/articles/${params['id']}`).then(
				(article) => {
					this.article = article;
					console.log(this.article);
				}
			)
		});
		setTimeout(() => {
			if (!this.article) {
				alert("no product found")
				this.router.navigate(['/shop']);
			} else {
				this.discount += this.article.prix;
				console.log(this.discount);
				while (this.discount <= this.article.prix + 10 && this.discount >= this.article.prix * 3) {
					this.discount = Math.floor(Math.random()) * 10;
					console.log(this.discount);
				}
			}
		}, 2500);


	}

}
