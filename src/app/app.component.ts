import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: any[]= [];
  done: any[]= [];
  constructor() {
  }
  onSubmit(f: NgForm) {
    this.list.push(f.value.first);
  };
  remove(index: number) {
      this.done.push(this.list.splice(index, 1));
  }
}
