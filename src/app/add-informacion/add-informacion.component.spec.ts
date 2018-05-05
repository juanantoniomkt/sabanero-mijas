import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInformacionComponent } from './add-informacion.component';

describe('AddInformacionComponent', () => {
  let component: AddInformacionComponent;
  let fixture: ComponentFixture<AddInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
