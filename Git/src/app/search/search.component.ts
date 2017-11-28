import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';
@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService]
})
export class SearchComponent {

  user: any;
  repos: any;
  searchBox: string;
  present: boolean;
  constructor(private _githubService: GithubService) {
    console.log('Github Component');
   }
   Finder() {
     console.log(this.searchBox);
     if (this.searchBox.length > 0) {
       this._githubService.update(this.searchBox);
       console.log('Here');
       this._githubService.search().subscribe(user => {
         this.user = user;
       });
       this._githubService.repos().subscribe(repos => {
         this.repos = repos;
       });
     }
   }
}
