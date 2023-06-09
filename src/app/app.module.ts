import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { NewsletterDetailComponent } from './newsletter-detail/newsletter-detail.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DialogCreateNewsletterComponent } from './dialog-create-newsletter/dialog-create-newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogCreateCampaignComponent } from './dialog-create-campaign/dialog-create-campaign.component';
import { DialogCreateSubscriberComponent } from './dialog-create-subscriber/dialog-create-subscriber.component';
import { AuthInterceptorService } from "../app/interceptors/auth/auth-interceptor.service";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SafePipePipe } from '../app/pipes/safe/safe-pipe.pipe';
import { UnsuscribeComponent } from './unsuscribe/unsuscribe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewslettersComponent,
    NewsletterDetailComponent,
    CampaignDetailComponent,
    DialogCreateNewsletterComponent,
    DialogCreateCampaignComponent,
    DialogCreateSubscriberComponent,
    LoginComponent,
    RegisterComponent,
    SafePipePipe,
    UnsuscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
