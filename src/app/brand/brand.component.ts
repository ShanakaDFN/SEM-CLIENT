import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Brand } from './brand';
import { BrandService } from './brand.service';

@Component({
  selector: 'sem-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandList! : Brand[];
  displayedColumns : string[] = ['id', 'name', 'status'];
  dataSource = new MatTableDataSource<Brand>(this.brandList);

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;

  constructor(private brandService : BrandService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllBrands(){
    let response = this.brandService.getAll();
    response.subscribe((data)=>{this.dataSource.data = data as Brand[]});
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

  applyFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
