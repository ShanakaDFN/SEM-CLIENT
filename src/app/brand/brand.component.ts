import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Brand } from './brand';
import { BrandDialogComponent } from './brand-dialog/brand-dialog.component';
import { BrandService } from './brand.service';

@Component({
  selector: 'sem-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandList!: Brand[];
  displayedColumns: string[] = ['id', 'name', 'status', 'action'];
  dataSource = new MatTableDataSource<Brand>(this.brandList);

  dialogRef : any;

  successMessage!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private brandService: BrandService, private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllBrands() {
    let response = this.brandService.getAll();
    response.subscribe((data) => { this.dataSource.data = data as Brand[] });
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, obj: any) {
    console.log(action);
    obj.action = action;
    this.dialogRef = this.dialog.open(BrandDialogComponent, {
      width: '350px',
      data: obj
    });

    // this.dialogRef.afterClosed().subscribe((result: { event: string; data: any; }) => {
    //   if (result.event == 'Add') {
    //     console.log(result.event);
    //     console.log(result.data);
    //     let response = this.brandService.addBrand(result.data);
    //     response.subscribe((data) => {
    //       return this.successMessage = data;
    //     });
    //     // this.addRowData(result.data);
    //   } else if (result.event == 'Update') {
    //     console.log(result.data);
    //     //this.updateRowData(result.data);
    //   } else if (result.event == 'Delete') {
    //     console.log(result.data);
    //     //this.deleteRowData(result.data);
    //   }
    // });

  }

}
