import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'makerhub';

  testAPI() {
    fetch("http://127.0.0.1:3000/api/games").then(res => res.text()).then(res => console.log(res));
  }
}
