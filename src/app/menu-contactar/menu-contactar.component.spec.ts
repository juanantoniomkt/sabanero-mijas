import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContactarComponent } from './menu-contactar.component';

describe('MenuContactarComponent', () => {
  let component: MenuContactarComponent;
  let fixture: ComponentFixture<MenuContactarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuContactarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContactarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
