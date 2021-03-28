import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttitleComponent } from './contacttitle.component';

describe('ContacttitleComponent', () => {
  let component: ContacttitleComponent;
  let fixture: ComponentFixture<ContacttitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacttitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacttitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
