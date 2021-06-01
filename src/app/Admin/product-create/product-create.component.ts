import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }


  form = new FormGroup({
    productRef: new FormControl('', [Validators.required]),
    prodName: new FormControl('', [Validators.required]),
    prodPrice: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
    });

    get f() {
      return this.form.controls;
    }
     
    submit() {

      if (this.form.status === 'VALID') {
         console.log(this.form.value);
      }

    }

}
