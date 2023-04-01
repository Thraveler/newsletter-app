import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from 'src/app/campaign-detail/campaign-detail.component';

const auth_token: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0IiwiaWF0IjoxNjgwMzM2MTQ5LCJleHAiOjE2ODAzNDMzNDl9.VpNxqSXtQWUbCJCyB2G107TnmoqnLIAGUQwayIAQjic';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${auth_token}`,
});

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  private campaignsUrl = 'http://localhost:8080/api/campaign';

  constructor(private http: HttpClient) {}

  getCampaignById(campaignId: number): Observable<Campaign> {
    return this.http.get<Campaign>(`${this.campaignsUrl}/${campaignId}`, {
      headers,
    });
  }

  sendCampaig(campaignId: number): Observable<Campaign> {
    return this.http.post<Campaign>(
      `${this.campaignsUrl}/${campaignId}`,
      {},
      {
        headers,
      }
    );
  }
}
