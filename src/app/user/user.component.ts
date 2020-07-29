import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';

export interface User {
  position: number,
  firstName: string;
  lastName: string;
  address: string;
}

const DATA: User[] = [
  {position: 1, firstName: 'John',lastName: 'Gilman', address: '123, Flower lane, Fremont, CA'},
  {position: 2, firstName: 'May', lastName: 'CoCo', address: '481 Alverado Blvd, San Francisco, CA'},
  {position: 3, firstName: 'Emily',lastName: 'Malinoski', address: '489 Meteor St, Oakland, CA'},
  {position: 4, firstName: 'Chris',lastName: 'Plowe', address: '123 Zoom Ct, San Leandro, CA'},
  {position: 5, firstName: 'Wesley', lastName: 'Augestine', address: '43 El Camino Real, Los Altos, CA'},
  {position: 6, firstName: 'Alben', lastName: 'Chung', address: '3123 High St, Alameda, CA'},
  {position: 7, firstName: 'Hamza', lastName: 'Zizi', address: '523 Calvert Dr, Cupertino, CA'},
  {position: 8, firstName: 'James', lastName: 'Hunt', address: '13233 Dyer St, Hayward, CA'},
  {position: 9, firstName: 'Audrey', lastName: 'Louvet', address: '823 cisco way, Milpitas, CA'},
  {position: 10, firstName: 'Kai', lastName: 'Nyunt', address: '1233 gemini dr,  Union City, CA'},
]

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'address'];
  dataSource = new MatTableDataSource<User>(DATA);

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }




}
