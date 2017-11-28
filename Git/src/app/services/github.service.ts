import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
  private username = 'bradtraversy';

  constructor(private _http: Http) {
    console.log('Github Service....');
  }

  search() {
      return this._http.get('https://api.github.com/users/' + this.username)
      .map(res => res.json());
  }

  repos() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos')
      .map(res => res.json());
  }

  update(username: string) {
    this.username = username;
  }
}
