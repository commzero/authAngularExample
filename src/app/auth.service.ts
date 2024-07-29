import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'https://your-api-url.com/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable {

    return this.http.post<any>(this.loginUrl, { username, password});

  }
}
