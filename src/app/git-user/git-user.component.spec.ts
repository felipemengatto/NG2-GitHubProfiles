/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GitUserComponent } from './git-user.component';

describe('GitUserComponent', () => {
  let component: GitUserComponent;
  let fixture: ComponentFixture<GitUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
