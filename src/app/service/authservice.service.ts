import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  private authenticated = false;

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  authenticate(): void {
    this.authenticated = true;
  }

  deauthenticate(): void {
    this.authenticated = false;
  }
}

