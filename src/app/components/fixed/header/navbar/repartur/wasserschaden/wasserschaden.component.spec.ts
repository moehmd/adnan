import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WASSERSCHADENComponent } from './wasserschaden.component';

describe('WASSERSCHADENComponent', () => {
  let component: WASSERSCHADENComponent;
  let fixture: ComponentFixture<WASSERSCHADENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WASSERSCHADENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WASSERSCHADENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
