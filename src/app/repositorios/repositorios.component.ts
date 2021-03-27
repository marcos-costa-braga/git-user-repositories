import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { RepositoriosService } from '../_services/repositorios.service';
import { UsuariosService } from '../_services/usuarios.service';
import { DialogRepositorioComponent } from './dialog-repositorio/dialog-repositorio.component';

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
  repositorios: any = [{}];
  usuario: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private repositoriosService: RepositoriosService,
    private usuariosService: UsuariosService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
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
    this.usuariosService.getUsuario(this.usuarioName).subscribe(
      data => this.usuario = data,
      () => {
        this.snackBar.open('Usuário não encontrado', null, {
          duration: 2000,
          panelClass: ['text-white', 'font-weight-bold']
        });
        this.router.navigate(['/usuarios'])
      }
    );
  }
  getRepositorios() {
    this.repositoriosService.getRepositorios(this.usuarioName).subscribe(data => this.repositorios = data, err => this.router.navigate(['/usuarios']));
  }
  openDialog(repositorioName) {
    this.dialog.open(DialogRepositorioComponent, {
      maxHeight: '90vh',
      data: {
        repositorioName: repositorioName,
        usuarioName: this.usuarioName
      }
    })
  }
  changeUser(usuarioName){
    this.usuarioName = usuarioName;
    this.getRepositorios();
    this.getUsuario();
  }
  ngOnDestroy(): void {
    this.dialog.closeAll();
  }
}
