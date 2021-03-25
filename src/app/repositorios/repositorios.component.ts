import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

import { RepositoriosService } from '../_services/repositorios.service';
import { UsuariosService } from '../_services/usuarios.service';

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
  repositorios: any;
  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private repositoriosService: RepositoriosService,
    private usuariosService: UsuariosService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.usuarioName = String(params.get('usuarioName'));
    });
    this.getRepositorios();
    this.getUsuario();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  getUsuario() {
    this.usuariosService.getUsuario(this.usuarioName).subscribe(data => this.usuario = data);
  }
  getRepositorios() {
    this.repositoriosService.getRepositorios(this.usuarioName).subscribe(data => this.repositorios = data);
  }
}
