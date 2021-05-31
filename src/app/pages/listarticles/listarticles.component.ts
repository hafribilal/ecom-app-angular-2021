import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-listarticles',
	templateUrl: './listarticles.component.html',
	styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent implements OnInit {

	constructor(private api: ApiService) { }

	ngOnInit(): void {
		this.test();
	}

	async test() {
		let result = await this.api.getAll("/articles/all");
		console.log(result);
	}
}
