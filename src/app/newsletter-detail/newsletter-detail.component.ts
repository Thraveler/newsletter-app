import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewslettersService } from '../services/newsletters/newsletters.service';

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
  email: string;
}

export interface Campaign {
  id: number;
  subject: string;
  sendDate: string;
}

const ELEMENT_DATA: NewsletterDetail = {
  id: 2,
  name: 'My newsletter to lear programming',
  owner: {
    id: 4,
    name: 'Luis',
    email: 'daphni.mgld@gmail.com',
  },
  subscribers: [
    {
      id: 3,
      email: 'daphni_mgld@hotmail.com',
    },
  ],
  campaigns: [
    {
      id: 11,
      subject: 'Learn programming now',
      sendDate: '2023-03-31T19:29:28.598Z',
    },
  ],
};

@Component({
  selector: 'app-newsletter-detail',
  templateUrl: './newsletter-detail.component.html',
  styleUrls: ['./newsletter-detail.component.css'],
})
export class NewsletterDetailComponent implements OnInit {
  newsletter: NewsletterDetail | undefined;
  displayedColumns: string[] = ['id', 'subject', 'sendDate'];
  displayedColumnsSubscribers: string[] = ['id', 'email'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsletterService: NewslettersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('newsletterId');
    if (id) this.getNewsletterById(+id);
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
