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
	@Input()
	@Output()
	article!: ArticleModule;
	constructor(private api: ApiService, private common: CommonService) { }

	ngOnInit(): void {
		this.article = new ArticleModule();
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
			this.article.description = this.form.value['description'];
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
		this.api.add(baseURL + "/create", this.article).then(() => this.common.updateArticles());
	}
	update() {
		this.api.update(baseURL + "/update", this.article).then(() => this.common.updateArticles());
	}
}
