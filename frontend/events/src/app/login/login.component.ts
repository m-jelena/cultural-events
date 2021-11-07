import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  username: string;
  password: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username && this.password != null ) {
      this.userService.login(this.username, this.password).subscribe((user: User) => {
        if(user) {
          alert("Uspešno ste se prijavili!");
          localStorage.setItem('loginUser', JSON.stringify(user)); // Zapamti login
        } else {
          alert("Nepostojeći korisnik!!");
        }
      })
    } else {
      alert('Korisničko ime i lozinku su obavezna polja')
    }
  }

}
