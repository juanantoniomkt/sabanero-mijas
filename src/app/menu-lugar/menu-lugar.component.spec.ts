import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLugarComponent } from './menu-lugar.component';

describe('MenuLugarComponent', () => {
  let component: MenuLugarComponent;
  let fixture: ComponentFixture<MenuLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
