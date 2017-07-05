import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineCreateViewComponent } from './magazine-create-view.component';

describe('MagazineCreateViewComponent', () => {
  let component: MagazineCreateViewComponent;
  let fixture: ComponentFixture<MagazineCreateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineCreateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
