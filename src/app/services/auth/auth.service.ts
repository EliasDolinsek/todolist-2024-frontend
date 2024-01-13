import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false
  constructor() { }

  login(email: string, password: string){
    console.log("Signed in as " + email)
    this.isAuthenticated = true
  }

}
