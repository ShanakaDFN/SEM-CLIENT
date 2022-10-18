import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Status } from 'src/app/enum/status';


@Component({
  selector: 'app-brand-dialog',
  templateUrl: './brand-dialog.component.html',
  styleUrls: ['./brand-dialog.component.css']
})
export class BrandDialogComponent implements OnInit {

  action: string;
  local_data: any;

  public statusList = Object.values(Status);

  constructor(public dialogRef: MatDialogRef<BrandDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  ngOnInit(): void {
  }

  setValue(){
    console.log('Shanaka')

  }

  deleteBrand(){

  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
