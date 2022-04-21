import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Component, Optional } from '@angular/core';
import { App } from '@capacitor/app';

interface MenuCustomEvent<T = any> extends CustomEvent {
  detail: T;
  target: HTMLIonMenuElement;
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
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (this.routerOutlet && !this.routerOutlet.canGoBack()) {}
        App.exitApp();
    });
  }

  getBackButtonText() {
    return 'Do Not Go Back';
  }
}
