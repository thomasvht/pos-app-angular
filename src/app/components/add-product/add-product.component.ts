import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    description: undefined,
    price: undefined,
    volume: undefined,
    volumeUnit: undefined
  });

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Product) {

  }

  ngOnInit() {
    this.form.patchValue({
      description: this.data.description,
      price: this.data.price,
      volume: this.data.volume,
      volumeUnit: this.data.volumeUnit
    });
  }
}
