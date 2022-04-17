import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Component, Optional } from '@angular/core';
import { App } from '@capacitor/app';

interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLIonTabsElement;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    @Optional() private routerOutlet?: IonRouterOutlet
    ) {
  }
}
