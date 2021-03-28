import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareschadenComponent } from './hardwareschaden.component';

describe('HardwareschadenComponent', () => {
  let component: HardwareschadenComponent;
  let fixture: ComponentFixture<HardwareschadenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareschadenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareschadenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
