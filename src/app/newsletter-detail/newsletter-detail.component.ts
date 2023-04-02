import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewslettersService } from '../services/newsletters/newsletters.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateCampaignComponent } from '../dialog-create-campaign/dialog-create-campaign.component';
import { DialogCreateSubscriberComponent } from '../dialog-create-subscriber/dialog-create-subscriber.component';

export interface NewsletterDetail {
  id: number;
  name: string;
  owner: Owner;
  subscribers: Subscriber[];
  campaigns: Campaign[];
}

export interface Owner {
  id: number;
  name: string;
  email: string;
}

export interface Subscriber {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

export interface Campaign {
  id: number;
  subject: string;
  sendDate: string;
}

@Component({
  selector: 'app-newsletter-detail',
  templateUrl: './newsletter-detail.component.html',
  styleUrls: ['./newsletter-detail.component.css'],
})
export class NewsletterDetailComponent implements OnInit {
  newsletter: NewsletterDetail | undefined;
  displayedColumns: string[] = ['id', 'subject', 'sendDate', 'createdAt', 'updatedAt'];
  displayedColumnsSubscribers: string[] = ['id', 'name', 'email'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsletterService: NewslettersService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('newsletterId');
    if (id) this.getNewsletterById(+id);
  }

  openDialogAddCampaign(): void {
    const dialogRef = this.dialog.open(DialogCreateCampaignComponent, {
      data: { newsletterId: this.newsletter?.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.router.navigate([`/campaigns/${result.id}`], { relativeTo: this.route });
    });
  }

  openDialogAddSubscriber(): void {
    const dialogRef = this.dialog.open(DialogCreateSubscriberComponent, {
      data: { newsletterId: this.newsletter?.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) window.location.reload();
    });
  }

  getNewsletterById(newsletterId: number) {
    this.newsletterService
      .getNewsletterById(newsletterId)
      .subscribe((newsletter) => {
        this.newsletter = newsletter;
      });
  }

  newsletterSelected(row: Campaign) {
    console.log(row);

    this.router.navigate([`/campaigns/${row.id}`], { relativeTo: this.route });
  }
}
