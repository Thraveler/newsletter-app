import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../services/campaigns/campaigns.service';
import { ActivatedRoute } from '@angular/router';

export interface Campaign {
  id: number;
  subject: string;
  content: string;
  file: string;
  sendDate: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css'],
})
export class CampaignDetailComponent implements OnInit {
  campaign;
  fileType: string;
  filePath: string;

  constructor(
    private campaignService: CampaignsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('campaignId');
    if (id) this.getCampaignById(+id);
  }

  getCampaignById(campaignId: number) {
    this.campaignService.getCampaignById(campaignId).subscribe((campaign) => {
      this.campaign = campaign;
      this.fileType = campaign.file.split(".").pop();
      this.filePath = `http://localhost:8080/upload/${campaign.file}`;
    });
  }

  sendCampaign() {
    this.campaignService.sendCampaig(this.campaign.id).subscribe((result) => {
    });
  }

  onSave() {
    console.log(this.campaign)
  }
}
