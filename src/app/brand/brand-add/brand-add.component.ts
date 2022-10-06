import { Brand } from './../brand';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Status } from 'src/app/enum/status';

@Component({
  selector: 'sem-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  // brandForm : FormGroup = new FormGroup({});

  brand : Brand = {
    name : '',
    status : ''
  }

  successMessage : string = '';

  public statusList = Object.values(Status);

  constructor() { }

  ngOnInit(): void {
  }

  addBrand() {
    alert('SUCCESS!! :-)\n\n' + this.brand.name);
  }

}
