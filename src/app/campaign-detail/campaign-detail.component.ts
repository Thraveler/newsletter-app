import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../services/campaigns/campaigns.service';
import { ActivatedRoute } from '@angular/router';

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
export class CampaignDetailComponent implements OnInit {
  campaign = data;

  constructor(
    private campaignService: CampaignsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('campaignId');
    if (id) this.getCampaignById(+id);
  }

  getCampaignById(campaignId: number) {
    this.campaignService.getCampaignById(campaignId).subscribe((campaign) => {
      this.campaign = campaign;
    });
  }

  sendCampaign() {
    this.campaignService.sendCampaig(this.campaign.id).subscribe((result) => {
      console.log(result);
    });
  }
}
