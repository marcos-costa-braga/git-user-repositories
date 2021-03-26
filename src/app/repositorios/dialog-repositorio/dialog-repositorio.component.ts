import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RepositoriosService } from 'src/app/_services/repositorios.service';

@Component({
  selector: 'app-dialog-repositorio',
  templateUrl: './dialog-repositorio.component.html',
  styleUrls: ['./dialog-repositorio.component.css']
})
export class DialogRepositorioComponent implements OnInit {
  repositorio: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private repositoriosService: RepositoriosService,
    ) { }

  ngOnInit(): void {
    this.getRepositorio();
  }
  getRepositorio() {
    this.repositoriosService.getRepositorio(this.data.usuarioName, this.data.repositorioName).subscribe(data => this.repositorio = data)
  }
  
}
