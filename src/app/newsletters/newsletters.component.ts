import { Component } from '@angular/core';

export interface Newsletter {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  countCampaigns: number;
  countSubscribers: number;
}

const ELEMENT_DATA: Newsletter[] = [
  {id: 1, name: 'Newsletter name', createdAt: '2023-04-01T01:26:03.218Z', updatedAt: '2023-04-01T01:26:03.218Z', countCampaigns: 2, countSubscribers: 2},
  {id: 2, name: 'Newsletter new', createdAt: '2023-04-01T01:26:03.218Z', updatedAt: '2023-04-01T01:26:03.218Z', countCampaigns: 2, countSubscribers: 2},
  {id: 3, name: 'Newsletter test', createdAt: '2023-04-01T01:26:03.218Z', updatedAt: '2023-04-01T01:26:03.218Z', countCampaigns: 2, countSubscribers: 2},
  {id: 4, name: 'Newsletter OMG', createdAt: '2023-04-01T01:26:03.218Z', updatedAt: '2023-04-01T01:26:03.218Z', countCampaigns: 2, countSubscribers: 2},
];

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.css']
})
export class NewslettersComponent {
  displayedColumns: string[] = ['id', 'name', 'countCampaigns', 'countSubscribers', 'createdAt', 'updatedAt'];
  dataSource = ELEMENT_DATA;
  
  constructor() {}

  newsletterSelected(newsletter: Newsletter) {
    console.log(newsletter);
  }
}
