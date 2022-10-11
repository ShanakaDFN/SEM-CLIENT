import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/brand/brand';
import { Status } from 'src/app/enum/status';
import { Model } from 'src/app/model/model';
import { Product } from '../product';


@Component({
  selector: 'sem-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    tagName: '',
    oem: '',
    hsCode: '',
    volume: 0,
    weight: 0,
    brand: new Brand(),
    model: new Model(),
    wholesaleProfitMarkup: 0,
    retailProfitMarkup: 0,
    salePercentage: 0,
    warrantyProfitMarkup: 0,
    minimumProfitMarkup: 0,
    status: '',
  }

  successMessage: string = '';

  public statusList = Object.values(Status);

  brandList! : Brand[];

  modelList! : Model[];

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    alert('SUCCESS!! :-)\n\n' + this.product.name);
  }

  getBrandList(){

  }

  getModelList(){
    
  }
}
