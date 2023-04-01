import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateNewsletterComponent } from './dialog-create-newsletter.component';

describe('DialogCreateNewsletterComponent', () => {
  let component: DialogCreateNewsletterComponent;
  let fixture: ComponentFixture<DialogCreateNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
