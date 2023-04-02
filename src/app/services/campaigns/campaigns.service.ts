import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from 'src/app/campaign-detail/campaign-detail.component';

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  private campaignsUrl = 'http://localhost:8080/api/campaign';

  constructor(private http: HttpClient) { }

  getCampaignById(campaignId: number): Observable<Campaign> {
    return this.http.get<Campaign>(`${this.campaignsUrl}/${campaignId}`);
  }

  sendCampaig(campaignId: number): Observable<Campaign> {
    return this.http.post<Campaign>(
      `${this.campaignsUrl}/${campaignId}`,
      {}
    );
  }
}
