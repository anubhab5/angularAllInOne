import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityCom1Component } from './security-com1.component';

describe('SecurityCom1Component', () => {
  let component: SecurityCom1Component;
  let fixture: ComponentFixture<SecurityCom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityCom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityCom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
