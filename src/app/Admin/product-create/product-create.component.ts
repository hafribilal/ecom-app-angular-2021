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

	btnSubmit_txt: string = "ADD";
	article!: ArticleModule;
	constructor(private api: ApiService, private common: CommonService) { }

	ngOnInit(): void {
		this.article = new ArticleModule();
	}

	form = new FormGroup({
		productRef: new FormControl({ value: 0, disabled: true }, [Validators.required]),
		prodName: new FormControl('', [Validators.required]),
		prodPrice: new FormControl('', [Validators.required]),
		prodStock: new FormControl('', [Validators.required]),
		description: new FormControl('', [Validators.required])
	});

	get f() {
		return this.form.controls;
	}

	submit() {
		if (this.form.status === 'VALID') {
			let obj = this.form.getRawValue()
			if (obj.productRef) {
				this.article.id = obj.productRef;
			}
			this.article.titre = obj.prodName;
			this.article.prix = obj.prodPrice;
			this.article.stock = obj.prodStock;
			if (obj.description) {
				this.article.description = obj.description;
			} else {
				this.article.description = lorem_ipsum;
			}
			if (!obj.productRef) {
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
		this.btnSubmit_txt = "ADD";
		this.form.reset();
		this.form.patchValue({ productRef: 0 });
	}

	fill(article: ArticleModule) {
		this.btnSubmit_txt = "UPDATE";
		this.form.setValue({
			productRef: article.id,
			prodName: article.titre,
			prodPrice: article.prix,
			prodStock: article.stock,
			description: article.description
		});
	}

}

const lorem_ipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
