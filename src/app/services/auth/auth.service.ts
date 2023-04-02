import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newsletter } from 'src/app/newsletters/newsletters.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, {
      email, password
    });
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }
}
