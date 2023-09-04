import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(http: HttpClient) {
    http.get("/assets/locales/en.json").pipe(first()).subscribe(content => console.log(content));
  }
}
