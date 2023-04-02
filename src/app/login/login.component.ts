import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  email: string = '';
  password: string = ''

  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,) { }

  onLogin() {
    this.authService.login(this.email, this.password).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate([`/newsletters`], { relativeTo: this.route });
    })
  }
}
