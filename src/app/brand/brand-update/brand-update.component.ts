import { MatNativeDateModule } from '@angular/material/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/enum/status';
import { MatDialogRef } from '@angular/material/dialog';
import { BrandDialogComponent } from '../brand-dialog/brand-dialog.component';

@Component({
  selector: 'sem-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  @Input() action = '';
  @Input() local_data : any ;
 

  brandForm! : FormGroup;

  public statusList = Object.values(Status);

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<BrandDialogComponent>) { }

  ngOnInit(): void {
    console.log(this.local_data.name);
    this.brandForm = this.fb.group({
      name: [this.local_data.name, [Validators.required]],
      status: [this.local_data.status],
    });
  }

  updateBrand(){

  }

  closeDialog() {
    this.dialogRef.close({event:'Cancel'});
  }

}
