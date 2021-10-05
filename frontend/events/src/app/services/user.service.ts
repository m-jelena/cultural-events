import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { splitAddress, splitName } from '../common/spliter';

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
    let personInfo = splitName(person);
    let addressInfo = splitAddress(street);
    let tel = [];
    tel.push(telephone); 
    const data = {
      name: organization,
      address: {
        street: addressInfo.street,
        number: addressInfo.number,
        city: city
      },
      contactPerson: {
        firstName: personInfo.firstName,
        lastName: personInfo.lastName
      },
      phones: tel,
      field: areaactivity,
      webAddress: website,
      email: email,
      username: username,
      password: password,
      description: organizationInfoText
    }
    return this.http.post(`${this.url}/users/registerOrganization`, data);
  }

  setNewPassword(username, oldPassword, newPassword) {
    const data = {
      username: username,
      oldPassword: oldPassword,
      newPassword: newPassword
    }
    return this.http.post(`${this.url}/users/updatePassword/${username}`, data);
  }
}
