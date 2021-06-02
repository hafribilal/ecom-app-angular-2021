import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-articledetail',
	templateUrl: './articledetail.component.html',
	styleUrls: ['./articledetail.component.css']
})
export class ArticledetailComponent implements OnInit {

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			let id = params['id'];

			console.log(`Article.id = ${id}`);
		});
	}

}
