import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemfehlerComponent } from './systemfehler.component';

describe('SystemfehlerComponent', () => {
  let component: SystemfehlerComponent;
  let fixture: ComponentFixture<SystemfehlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemfehlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemfehlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
