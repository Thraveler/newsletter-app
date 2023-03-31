import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewslettersComponent } from './newsletters/newsletters.component';

const routes: Routes = [
  { path: 'newsletters', component: NewslettersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
