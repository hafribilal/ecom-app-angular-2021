import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleModule } from 'src/app/models/article/article.module';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-articledetail',
	templateUrl: './articledetail.component.html',
	styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent implements OnInit {

	constructor(private route: ActivatedRoute, private api: ApiService) { }
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
	}

}
