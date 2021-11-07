import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('loginUser'));
    this.userService.getUserData(user.username).subscribe((userData: User) => {
      this.userData = userData;
    });
  }
  
  userData: User = {} as User;

}
