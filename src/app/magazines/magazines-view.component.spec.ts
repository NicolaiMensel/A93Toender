import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinesViewComponent } from './magazines-view.component';

describe('MagazinesViewComponent', () => {
  let component: MagazinesViewComponent;
  let fixture: ComponentFixture<MagazinesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazinesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
