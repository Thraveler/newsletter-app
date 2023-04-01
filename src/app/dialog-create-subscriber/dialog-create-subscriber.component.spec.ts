import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateSubscriberComponent } from './dialog-create-subscriber.component';

describe('DialogCreateSubscriberComponent', () => {
  let component: DialogCreateSubscriberComponent;
  let fixture: ComponentFixture<DialogCreateSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateSubscriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
