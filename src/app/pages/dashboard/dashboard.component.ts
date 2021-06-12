import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ArticleModule } from 'src/app/models/article/article.module';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';
import { CreateProductComponent } from '../../Components/create-product/create-product.component';
import { OnDestroy } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const baseURL = "/articles";
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

	@ViewChild(MatPaginator) paginator!: MatPaginator;
  	@ViewChild(MatSort) sort!: MatSort;

  	public displayedColumns: string[] = ['ID', 'Photo', 'Name', 'Price', 'Description'];
  	public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

	public columnsFilters = {};

	public dataSource!: MatTableDataSource<ArticleModule>;
	

	@ViewChild(CreateProductComponent) child!: CreateProductComponent;
	articles!: Array<ArticleModule>;
	private articlesSubscription: Subscription;
	images!: Array<string>;
	constructor(private api: ApiService, private common: CommonService) {
		this.dataSource = new MatTableDataSource<ArticleModule>();
		this.articlesSubscription = this.common.getArticles().subscribe
			((articles) => {
				//articles contains the data sent from common service
				//this.articles = articles;
				this.dataSource.data=articles;
				console.log(this.dataSource.data);
			});
	}
	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
    	this.dataSource.sort = this.sort;
	}

	ngOnDestroy() {
		// It's a good practice to unsubscribe to ensure no memory leaks
		this.articlesSubscription.unsubscribe();
	}
	ngOnInit(): void {
		this.common.updateArticles();
	}

	edit(selected: ArticleModule) {
		this.child.fill(selected);
	}

	delete(id: number) {
		if (confirm("Are you sure !!?")) {
			this.api.delete("/articles/" + id);
			window.location.reload();
		}
	}


}
