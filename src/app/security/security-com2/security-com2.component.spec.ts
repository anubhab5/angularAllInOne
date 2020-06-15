import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityCom2Component } from './security-com2.component';

describe('SecurityCom2Component', () => {
  let component: SecurityCom2Component;
  let fixture: ComponentFixture<SecurityCom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityCom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityCom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
