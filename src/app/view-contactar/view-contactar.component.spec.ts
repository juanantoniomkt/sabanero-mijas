import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactarComponent } from './view-contactar.component';

describe('ViewContactarComponent', () => {
  let component: ViewContactarComponent;
  let fixture: ComponentFixture<ViewContactarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContactarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
