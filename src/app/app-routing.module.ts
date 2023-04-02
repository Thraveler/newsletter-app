import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { NewsletterDetailComponent } from './newsletter-detail/newsletter-detail.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'newsletters', component: NewslettersComponent },
  { path: 'newsletters/:newsletterId', component: NewsletterDetailComponent },
  { path: 'campaigns/:campaignId', component: CampaignDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
