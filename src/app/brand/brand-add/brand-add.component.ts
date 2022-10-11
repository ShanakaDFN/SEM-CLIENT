import { BrandService } from './../brand.service';
import { Brand } from './../brand';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Status } from 'src/app/enum/status';

@Component({
  selector: 'sem-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandForm : FormGroup = new FormGroup({});
  
  brand: Brand = {
      id : 0 ,
      name: '',
      status: ''
    }

  successMessage!: string;

  public statusList = Object.values(Status);

  constructor(private brandService : BrandService, private fb: FormBuilder) { }

  ngOnInit(): void {
      this.brandForm = this.fb.group({
        name: [null, [Validators.required]],
        status: [null],
      });
  }

  public addBrand(brand : Brand) { //brandForm : any
     let response = this.brandService.addBrand(brand);
     response.subscribe((data)=>{
       return this.successMessage = data;
     });
  }

}
