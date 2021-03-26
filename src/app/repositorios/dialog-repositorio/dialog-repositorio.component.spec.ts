import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Inject } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { RepositoriosService } from 'src/app/_services';

import { DialogRepositorioComponent } from './dialog-repositorio.component';

describe('DialogRepositorioComponent', () => {
  let component: DialogRepositorioComponent;
  let fixture: ComponentFixture<DialogRepositorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule],
      declarations: [DialogRepositorioComponent],
      providers: [RepositoriosService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
