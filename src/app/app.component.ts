import { Component } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private updates: SwUpdate) {
    this.updates.available.subscribe(event => {
      if (confirm('Доступно обновление. Обновить сейчас?')) {
        this.updates.activateUpdate().then(() => document.location.reload())
      }
    })
  }
}
