import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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
  nextSince: any;
  userName: string;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.getUsuarios(0);
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  getUsuarios(since) {
    this.submitted = true;
    this.usuariosService.getUsuarios(since).subscribe(
      data => {
        this.getHeaderLinks(data.headers);
        this.dataSource.data = data.body;
      },
      err => console.error(err),
      () => this.submitted = false
    );
  }
  getHeaderLinks(headers) {
    let links = headers.get('link').split(', ')
    links.forEach(link => {
      let sincePosition = link.search('since');
      if (link[sincePosition + 5] == '=')
        this.nextSince = this.getNextIntValue(link, sincePosition + 6)
    });
  }
  getNextIntValue(link: string, position: number) {
    if (link[position] >= '0' && link[position] <= '9')
      return link[position] + this.getNextIntValue(link, position + 1);
    return '';
  }
  onSubmit() {
    if(this.userName != undefined)
      this.router.navigate(['/usuarios/' + this.userName + '/repositorios']);
  }
}
