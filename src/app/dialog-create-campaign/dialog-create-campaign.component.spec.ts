import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateCampaignComponent } from './dialog-create-campaign.component';

describe('DialogCreateCampaignComponent', () => {
  let component: DialogCreateCampaignComponent;
  let fixture: ComponentFixture<DialogCreateCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
