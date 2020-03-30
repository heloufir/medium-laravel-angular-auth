import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtHelperService {

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Decode a JWT token
   *
   * @param token The token to decode
   */
  private decode(token: string) {
    if (token !== null || token !== undefined) {
      const base64Url = token.split('.')[1];
      if (base64Url === null || base64Url === undefined) {
        return null;
      }
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    } else {
      return null;
    }
  }

  /**
   * Get an attribute value from the access token
   *
   * @param attribute The attribute's key
   */
  private attr(attribute: string): string {
    const token = localStorage.getItem('access_token');
    if (token === null || token === undefined) {
      return null;
    } else {
      const decoded = this.decode(token);
      return (decoded === null) ? null : decoded[attribute];
    }
  }

  /**
   * Get authenticated user's id
   */
  id(): number {
    return +this.attr('id');
  }

  /**
   * Get authenticated user's name
   */
  name(): string {
    return this.attr('name') as string;
  }

  /**
   * Get authenticated user's email
   */
  email(): string {
    return this.attr('email') as string;
  }
}
