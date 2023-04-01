import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newsletter } from 'src/app/newsletters/newsletters.component';
import { NewsletterDetail } from 'src/app/newsletter-detail/newsletter-detail.component';

const auth_token: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0IiwiaWF0IjoxNjgwMzI3NzkzLCJleHAiOjE2ODAzMzQ5OTN9.mM1q63ZU7htBdp6_l9Mekdy-5qaydq60XfIFiu5JQEo';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${auth_token}`,
});

@Injectable({
  providedIn: 'root',
})
export class NewslettersService {
  private newslettersUrl = 'http://localhost:8080/api/newsletter';

  constructor(private http: HttpClient) {}

  getNewsletters(): Observable<Newsletter[]> {
    return this.http.get<Newsletter[]>(this.newslettersUrl, { headers });
  }

  getNewsletterById(newsletterId: number): Observable<NewsletterDetail> {
    return this.http.get<NewsletterDetail>(
      `${this.newslettersUrl}/${newsletterId}`,
      {
        headers,
      }
    );
  }

  createNewsletter(name: string) {
    return this.http.post(
      `${this.newslettersUrl}`,
      { name },
      {
        headers,
      }
    );
  }

  addCampaign(campaignId: number, subject: string, content: string) {
    return this.http.post(
      `${this.newslettersUrl}/${campaignId}/campaigns`,
      { subject, content },
      {
        headers,
      }
    );
  }

  addSubscriber(
    campaignId: number,
    name: string,
    lastname: string,
    email: string
  ) {
    return this.http.post(
      `${this.newslettersUrl}/${campaignId}/subscribers`,
      { name, lastname, email },
      {
        headers,
      }
    );
  }
}
