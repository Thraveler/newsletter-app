import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewslettersService } from '../services/newsletters/newsletters.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  campaignForm = new FormGroup({
    subject: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  })

  constructor(
    private dialogRef: MatDialogRef<DialogCreateCampaignComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private newsletterService: NewslettersService
  ) { }

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.campaignForm.patchValue({
        fileSource: file
      });
    }
  }

  onSave(): void {
    const formData = new FormData();
    formData.append('newsletter', this.campaignForm.get('fileSource').value);
    formData.append('subject', this.campaignForm.get('subject').value);
    formData.append('content', this.campaignForm.get('content').value);

    this.newsletterService
      .addCampaign(this.data.newsletterId, formData)
      .subscribe((result) => {
        this.dialogRef.close(result);
      });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
