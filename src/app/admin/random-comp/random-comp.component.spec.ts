import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCompComponent } from './random-comp.component';

describe('RandomCompComponent', () => {
  let component: RandomCompComponent;
  let fixture: ComponentFixture<RandomCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
