import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/brand/brand';
import { Status } from 'src/app/enum/status';
import { Model } from '../model';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {

  model : Model = {
    id : 0,
    name : '',
    brand : new Brand(),
    status : ''
  }

  brandList! : Brand[];

  successMessage : string = '';

  public statusList = Object.values(Status);

  constructor() { }

  ngOnInit(): void {
  }

  addModel() {
    alert('SUCCESS!! :-)\n\n' + this.model.name);
  }

}
