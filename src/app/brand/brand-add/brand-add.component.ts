import { BrandService } from './../brand.service';
import { Brand } from './../brand';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Status } from 'src/app/enum/status';
import { MatDialogRef } from '@angular/material/dialog';
import { BrandDialogComponent } from '../brand-dialog/brand-dialog.component';

@Component({
  selector: 'sem-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandForm! : FormGroup;
  
  brand: Brand = {
      id : 0 ,
      name: '',
      status: ''
    }

  successMessage!: string;

  public statusList = Object.values(Status);

  constructor(private brandService : BrandService, private fb: FormBuilder,public dialogRef: MatDialogRef<BrandDialogComponent>) { }

  ngOnInit(): void {
      this.brandForm = this.fb.group({
         name: [null, [Validators.required]],
         status: [null],
       });
  }

  addBrand() { 
    this.brand.name = this.brandForm.value.name;
    this.brand.status = this.brandForm.value.status
     let response = this.brandService.addBrand(this.brand);
     response.subscribe((data)=>{
       return this.successMessage = data;
     });
     this.dialogRef.close({event:'Cancel'});
  }

  closeDialog() {
    this.dialogRef.close({event:'Cancel'});
  }
}
