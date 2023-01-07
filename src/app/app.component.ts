import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-event';

  no: number = 0;

  enabled: boolean = false;

  constructor() {
    setInterval(() => {
      this.no++;
      this.enabled = !this.enabled;
    }, 1000);
  }


  greetme(name: string) {

    alert("Hello" + " " + name);
  }



}

