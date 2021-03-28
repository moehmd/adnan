import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DISPLAYBRUCHComponent } from './displaybruch.component';

describe('DISPLAYBRUCHComponent', () => {
  let component: DISPLAYBRUCHComponent;
  let fixture: ComponentFixture<DISPLAYBRUCHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DISPLAYBRUCHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DISPLAYBRUCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
