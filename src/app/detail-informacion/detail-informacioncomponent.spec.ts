import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInformacionComponent } from './detail-informacion.component';

describe('DetailInformacionComponent', () => {
  let component: DetailInformacionComponent;
  let fixture: ComponentFixture<DetailInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
