import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { NewsletterDetailComponent } from './newsletter-detail/newsletter-detail.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newsletters', component: NewslettersComponent, canActivate: [AuthGuard] },
  { path: 'newsletters/:newsletterId', component: NewsletterDetailComponent, canActivate: [AuthGuard] },
  { path: 'campaigns/:campaignId', component: CampaignDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
