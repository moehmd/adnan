import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATENSCHUTZComponent } from './datenschutz.component';

describe('DATENSCHUTZComponent', () => {
  let component: DATENSCHUTZComponent;
  let fixture: ComponentFixture<DATENSCHUTZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DATENSCHUTZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DATENSCHUTZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
