import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newsletter } from 'src/app/newsletters/newsletters.component';
import { NewsletterDetail } from 'src/app/newsletter-detail/newsletter-detail.component';


@Injectable({
  providedIn: 'root',
})
export class NewslettersService {
  private newslettersUrl = 'http://localhost:8080/api/newsletter';

  constructor(private http: HttpClient) { }

  getNewsletters(): Observable<Newsletter[]> {
    return this.http.get<Newsletter[]>(this.newslettersUrl);
  }

  getNewsletterById(newsletterId: number): Observable<NewsletterDetail> {
    return this.http.get<NewsletterDetail>(
      `${this.newslettersUrl}/${newsletterId}`
    );
  }

  createNewsletter(name: string) {
    return this.http.post(
      `${this.newslettersUrl}`,
      { name }
    );
  }

  addCampaign(campaignId: number, data) {
    return this.http.post(
      `${this.newslettersUrl}/${campaignId}/campaigns`,
      data
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
      { name, lastname, email }
    );
  }

  removeSubscriber(
    campaignId: number,
    email: string
  ) {
    return this.http.post(
      `${this.newslettersUrl}/${campaignId}/unsubscribe`,
      { email }
    );
  }
}
