import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { PrivacyScreenConfig, PrivacyScreen } from '@capacitor/privacy-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.platform.ready().then(() => {
      void this.enablePrivacyScreen();
    }).catch(() => { });

    this.platform.resume.pipe().subscribe(async () => {
      void this.enablePrivacyScreen();
    });
  }

  async enablePrivacyScreen() {
    const config: PrivacyScreenConfig = {
      android: {
        privacyModeOnActivityHidden: 'splash'
      }
    };
    await PrivacyScreen.enable(config);
  }
}
