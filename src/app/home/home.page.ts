import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {NavMovileComponent} from "../components/nav-movile/nav-movile.component";
import {NavWebComponent} from "../components/nav-web/nav-web.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NavMovileComponent, NavWebComponent],
})
export class HomePage {
  constructor() {}
}
