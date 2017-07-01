import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangementComponent } from './arrangement.component';

describe('ArrangementComponent', () => {
  let component: ArrangementComponent;
  let fixture: ComponentFixture<ArrangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
