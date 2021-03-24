import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { RepositoriosComponent } from './repositorios/repositorios.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/usuarios",
    pathMatch: "full"
  }, {
    path: "usuarios",
    component: UsuariosComponent
  }, {
    path: 'usuarios/:usuarioName/repositorios',
    component: RepositoriosComponent
  }, {
    path: '**',
    redirectTo: "/usuarios"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
