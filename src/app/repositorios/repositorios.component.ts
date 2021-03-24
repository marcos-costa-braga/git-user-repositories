import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

import { RepositoriosService } from '../_services/repositorios.service';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.css']
})
export class RepositoriosComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['id', 'name', 'created_at', 'language', 'html_url'];
  public dataSource = new MatTableDataSource<any>();
  usuarioName: string;

  constructor(
    private route: ActivatedRoute,
    private repositoriosService: RepositoriosService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuarioName = String(params.get('usuarioName'));
      console.log(this.usuarioName);
    });
    this.Retrepositorios();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  Retrepositorios() {
    this.repositoriosService.getRepositorios(this.usuarioName).subscribe(data => this.dataSource.data = data);
  }
}
