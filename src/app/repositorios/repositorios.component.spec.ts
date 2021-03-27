import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RepositoriosComponent } from './repositorios.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsuariosService } from '../_services/usuarios.service';
import { RepositoriosService } from '../_services/repositorios.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('RepositoriosComponent', () => {
  let component: RepositoriosComponent;
  let fixture: ComponentFixture<RepositoriosComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let data = {
    "avatar_url": "https://avatars.githubusercontent.com/u/25183572?v=4",
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule, MatSnackBarModule],
      declarations: [RepositoriosComponent],
      providers: [UsuariosService, RepositoriosService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ usuarioName: 'marcos-costa-braga' }))
          },
        }]
    })
      .compileComponents();

    const http = TestBed.inject(UsuariosService);
    const httpGetSpy: jasmine.Spy<any> = spyOn(http, 'getUsuario').and.returnValue(of(data));
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
