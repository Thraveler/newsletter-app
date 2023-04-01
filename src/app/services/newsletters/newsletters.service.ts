import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newsletter } from 'src/app/newsletters/newsletters.component';
import { NewsletterDetail } from 'src/app/newsletter-detail/newsletter-detail.component';

const auth_token: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0IiwiaWF0IjoxNjgwMzEzNDY1LCJleHAiOjE2ODAzMjA2NjV9.JI2kBMFk-5_sznPKU4cp9f6rqKqJw5w9BrOqHbhwOB8';

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
}
