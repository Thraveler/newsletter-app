import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  name: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,) { }

  onRegister() {
    this.authService.register(this.name, this.lastname, this.email, this.password).subscribe((res) => {
      this.router.navigate([`/login`], { relativeTo: this.route });
    })
  }

}
