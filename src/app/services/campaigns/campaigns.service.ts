import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const auth_token: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0IiwiaWF0IjoxNjgwMzI3NzkzLCJleHAiOjE2ODAzMzQ5OTN9.mM1q63ZU7htBdp6_l9Mekdy-5qaydq60XfIFiu5JQEo';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${auth_token}`,
});

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  private newslettersUrl = 'http://localhost:8080/api/newsletter';

  constructor() {}
}
