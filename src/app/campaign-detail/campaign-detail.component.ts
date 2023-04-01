import { Component } from '@angular/core';

export interface Campaign {
  id: number;
  subject: string;
  content: string;
  sendDate: string;
  createdAt: string;
  updatedAt: string;
}

const data: Campaign = {
  id: 1,
  subject: 'subject',
  content: 'content',
  sendDate: '2023-03-31T19:29:28.598Z',
  createdAt: '2023-03-31T19:29:28.598Z',
  updatedAt: '2023-03-31T19:29:28.598Z',
};

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css'],
})
export class CampaignDetailComponent {
  campaign = data;
}
