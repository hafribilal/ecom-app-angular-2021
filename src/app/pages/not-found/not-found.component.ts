import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

	@ViewChild('.error_title')
	title: any;

	zero: string = "</>";

	constructor() { }

	ngOnInit(): void {
	}

	//////// Light //////////
	@HostListener('document:mousemove', ['$event'])
	onmousemove(e: { pageX: number; pageY: number; }) {
		let x = e.pageX - window.innerWidth / 2;
		let y = e.pageY - window.innerHeight / 2;

		this.title.style.setProperty('--x', x + 'px')
		this.title.style.setProperty('--y', y + 'px')
	}




	fun(e: { pageX: number; pageY: number; }) {
		// let x = e.pageX - window.innerWidth/2;
		// let y = e.pageY - window.innerHeight/2;
		//
		// let rad:number = Math.atan2(y, x).toFixed(2);
		// let length = Math.round(Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))/10);
		//
		// let x_shadow = Math.round(length * Math.cos(rad));
		// let y_shadow = Math.round(length * Math.sin(rad));
		//
		// this.title.style.setProperty('--x-shadow', - x_shadow + 'px')
		// this.title.style.setProperty('--y-shadow', - y_shadow + 'px')
	}

}
