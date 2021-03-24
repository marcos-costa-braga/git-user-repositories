import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { UsuariosService } from '../_services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['id', 'avatar_url', 'login', 'html_url'];
  public dataSource = new MatTableDataSource<any>();
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(data => this.dataSource.data = data);
  }
}
