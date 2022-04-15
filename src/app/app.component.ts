import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Component, Optional } from '@angular/core';
import { App } from '@capacitor/app';

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

    this.platform.keyboardDidShow.subscribe(ev => {
      const { keyboardHeight } = ev;
      console.log('showing keyboard', keyboardHeight);
    });

    this.platform.keyboardDidHide.subscribe(() => {
      console.log('hidding keyboard');
    });
  }
}
