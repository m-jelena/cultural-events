import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {

  hide = true;

  userName = new FormControl('', [Validators.required, Validators.pattern('^[a-z]{3,}[A-Z0-9]*')]);
  newPassword = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,}')]);
  confirmPassword = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,}')]);

  getErrorMessageForUserName() {
    if (this.userName.hasError('required')) {
      return 'Unesite korisničko ime';
    }
    return this.userName.hasError('pattern') ? 'Minimum prva tri karaktera mala slova, pa brojevi ili velika slova' : '';
  }

  getErrorMessageForNewPassword() {
    if (this.newPassword.hasError('required')) {
      return 'Unesite lozinku';
    }
    return this.newPassword.hasError('pattern') ? 'Minimalno 8 karaktera, slova ili brojeva' : '';
  }
  getErrorMessageForConfirmPassword() {
    if (this.confirmPassword.hasError('required')) {
      return 'Unesite lozinku';
    }
    return this.confirmPassword.hasError('pattern') ? 'Minimalno 8 karaktera, slova ili brojeva' : '';
  }

  username: string;
  newpassword: string;
  confirmpassword: string;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  setNewPassword(){
    if(this.userName.valid && this.newPassword.valid && this.confirmPassword.valid) {
      if(this.newpassword == this.confirmpassword) {
        this.userService.setNewPassword(this.username, this.newpassword).subscribe(resp => {
          if (resp['message'] == 'ok') {
            alert('Uspešno ste promjenili lozinku.');
            // Rutiranje na početnu stranu ili login
  
          } else if(resp['message'] == 'not ok') {
            alert('Korisničko ime nije ispravno! Provjerite vaše korisnično ime, poslali smo vam ga u mejlu za resetovanje lozinke.');
          }
        })
      } else {
        alert("Lozinke su različite!!!");
        this.hide = false;
      }
    } else {
      alert("Sva polja su obavezna!");
    }
  }

}
