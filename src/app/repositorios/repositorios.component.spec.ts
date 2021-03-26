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

describe('RepositoriosComponent', () => {
  let component: RepositoriosComponent;
  let fixture: ComponentFixture<RepositoriosComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let data = {
    "login": "marcos-costa-braga",
    "id": 25183572,
    "node_id": "MDQ6VXNlcjI1MTgzNTcy",
    "avatar_url": "https://avatars.githubusercontent.com/u/25183572?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/marcos-costa-braga",
    "html_url": "https://github.com/marcos-costa-braga",
    "followers_url": "https://api.github.com/users/marcos-costa-braga/followers",
    "following_url": "https://api.github.com/users/marcos-costa-braga/following{/other_user}",
    "gists_url": "https://api.github.com/users/marcos-costa-braga/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/marcos-costa-braga/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/marcos-costa-braga/subscriptions",
    "organizations_url": "https://api.github.com/users/marcos-costa-braga/orgs",
    "repos_url": "https://api.github.com/users/marcos-costa-braga/repos",
    "events_url": "https://api.github.com/users/marcos-costa-braga/events{/privacy}",
    "received_events_url": "https://api.github.com/users/marcos-costa-braga/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Marcos Costa Braga",
    "company": "SdBusiness",
    "blog": "mcosta.dev",
    "location": "Brasília, Brasil",
    "email": null,
    "hireable": true,
    "bio": "Desenvolvedor Web Jr.\r\nBacharel em Ciência da Computação.\r\nTécnico em Informática. ",
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 3,
    "following": 5,
    "created_at": "2017-01-17T19:16:24Z",
    "updated_at": "2021-03-25T22:28:46Z"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule],
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
