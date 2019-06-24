import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  randomNumber = 2;

  constructor() {}

    // ngOnInit(): void {
    //   this.randomNumber = Math.random();
    // }
}
