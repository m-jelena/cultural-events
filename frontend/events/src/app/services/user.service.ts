import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000';

  login(username, password) {
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.url}/users/login`, data);
  }

  register(organization, street, city, person, telephone, areaactivity, website, email, username, password, organizationInfoText) {
    const data = {
      organization: organization,
      street: street,
      city: city,
      person: person,
      telephone: telephone,
      areaactivity: areaactivity,
      website: website,
      email: email,
      username: username,
      password: password,
      organizationInfoText: organizationInfoText
    }

    return this.http.post(`${this.url}/users/register`, data);
  }
}
