import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewslettersService } from '../services/newsletters/newsletters.service';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-dialog-create-newsletter',
  templateUrl: './dialog-create-newsletter.component.html',
  styleUrls: ['./dialog-create-newsletter.component.css'],
})
export class DialogCreateNewsletterComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogCreateNewsletterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private newsletterService: NewslettersService
  ) {}

  onSave(): void {
    this.newsletterService
      .createNewsletter(this.data.name)
      .subscribe((result) => {
        this.dialogRef.close(result);
      });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
