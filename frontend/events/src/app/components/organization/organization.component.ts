import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Organization } from 'src/app/models/organization';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class OrganizationComponent implements AfterViewInit {
  
  columnsToDisplay: string[] = ['id', 'name', 'field', 'web', 'email'];
  dataSource: MatTableDataSource<Organization>;
  expandedElement: Organization | null;
  organizationsData: Organization[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private organizationService: OrganizationService) {
    this.organizationsData = this.organizationService.getOrganizations();
    this.dataSource = new MatTableDataSource(this.organizationsData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  redirectToEvents = (id: number) => {

  }

  redirectToAds = (id: number) => {

  }

  redirectToSurveys = (id: number) => {

  }
}
