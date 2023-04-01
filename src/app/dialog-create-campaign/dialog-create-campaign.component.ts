import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewslettersService } from '../services/newsletters/newsletters.service';

export interface DialogData {
  newsletterId: number;
  subject: string;
  content: string;
}

@Component({
  selector: 'app-dialog-create-campaign',
  templateUrl: './dialog-create-campaign.component.html',
  styleUrls: ['./dialog-create-campaign.component.css'],
})
export class DialogCreateCampaignComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogCreateCampaignComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private newsletterService: NewslettersService
  ) {}

  onSave(): void {
    this.newsletterService
      .addCampaign(this.data.newsletterId, this.data.subject, this.data.content)
      .subscribe((result) => {
        this.dialogRef.close(result);
      });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
