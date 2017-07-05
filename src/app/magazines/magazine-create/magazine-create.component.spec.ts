import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineCreateComponent } from './magazine-create.component';

describe('MagazineCreateComponent', () => {
  let component: MagazineCreateComponent;
  let fixture: ComponentFixture<MagazineCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
