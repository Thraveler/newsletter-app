import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewslettersService } from '../services/newsletters/newsletters.service';

export interface DialogData {
  newsletterId: number;
  name: string;
  lastname: string;
  email: string;
}

@Component({
  selector: 'app-dialog-create-subscriber',
  templateUrl: './dialog-create-subscriber.component.html',
  styleUrls: ['./dialog-create-subscriber.component.css'],
})
export class DialogCreateSubscriberComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogCreateSubscriberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private newsletterService: NewslettersService
  ) {}

  onSave(): void {
    this.newsletterService
      .addSubscriber(
        this.data.newsletterId,
        this.data.name,
        this.data.lastname,
        this.data.email
      )
      .subscribe((result) => {
        this.dialogRef.close(result);
      });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
