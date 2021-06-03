import { Component, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleModule } from 'src/app/models/article/article.module';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

const baseURL = "/articles";
@Component({
	selector: 'product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

	article!: ArticleModule;
	constructor(private api: ApiService, private common: CommonService) { }

	ngOnInit(): void {

	}

	form = new FormGroup({
		productRef: new FormControl({ value: '00', disabled: true }, [Validators.required]),
		prodName: new FormControl('', [Validators.required]),
		prodPrice: new FormControl('', [Validators.required]),
		prodStock: new FormControl('', [Validators.required]),
		description: new FormControl('', [Validators.required])
	});

	get f() {
		return this.form.controls;
	}

	submit() {
		console.log("SUBMIT")
		if (this.form.status === 'VALID') {
			if (this.form.value['productRef'] != "00") {
				this.article.id = this.form.value['productRef'];
			}
			this.article.titre = this.form.value['prodName'];
			this.article.prix = this.form.value['prodPrice'];
			this.article.stock = this.form.value['prodStock'];
			if (this.form.value['description']) {
				this.article.description = this.form.value['description'];
			} else {
				this.article.description = lorem_ipsum;
			}
			if (this.form.value['productRef'] != "00") {
				console.log("create");
				this.create();
			} else {
				console.log("update");
				this.update();
			}
		}
	}

	create() {
		this.api.add(baseURL + "/create", this.article).then(
			() => { this.common.updateArticles(); this.reset(); }
		);

	}
	update() {
		this.api.update(baseURL + "/update", this.article).then(
			() => { this.common.updateArticles(); this.reset(); }
		);
	}

	reset() {
		this.form.reset();
		this.form.patchValue({ productRef: "00" });
	}

	fill(article: ArticleModule) {
		this.form.setValue({
			productRef: article.id,
			prodName: article.titre,
			prodPrice: article.prix,
			prodStock: article.stock,
			description: article.description
		});
		console.log("fill")
	}

}

const lorem_ipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
