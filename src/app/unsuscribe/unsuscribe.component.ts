import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewslettersService } from '../services/newsletters/newsletters.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unsuscribe',
  templateUrl: './unsuscribe.component.html',
  styleUrls: ['./unsuscribe.component.css']
})
export class UnsuscribeComponent implements OnInit {
  newsletterId: number;
  unsubcribeForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  })

  constructor(private newsletterSerice: NewslettersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newsletterId = +this.route.snapshot.paramMap.get('newsletterId');
  }

  onUnsubcribe(): void {
    const email = this.unsubcribeForm.get('email').value

    this.newsletterSerice.removeSubscriber(this.newsletterId, email).subscribe((result) => {
      this.router.navigate([`/login`], { relativeTo: this.route });
    });
  }

}
