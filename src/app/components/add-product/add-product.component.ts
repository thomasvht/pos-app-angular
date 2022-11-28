import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    description: [undefined, Validators.required],
    price: [undefined, Validators.required],
    volume: [undefined, Validators.required],
    volumeUnit: [undefined, Validators.required]
  });

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Promise<Product>) {

  }

  ngOnInit() {
    if ( this.data) {
      this.data.then((product: Product) => this.form.patchValue(product));
    }
  }
}
