import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparturComponent } from './repartur.component';

describe('ReparturComponent', () => {
  let component: ReparturComponent;
  let fixture: ComponentFixture<ReparturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
